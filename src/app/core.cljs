(ns app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.spec.alpha :as s]
   [clojure.edn :as edn]
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

(def game (atom nil))

(def server-address "http://localhost:8001")

(defui header []
  ($ :header.app-header
     ($ :h3 "Bomberman game 💣")))

(defui footer []
  ($ :footer.app-footer
     ($ :small "made with "
        ($ :a {:href "https://github.com/pitch-io/uix"}
           "UIx"))))

(defui game-component [{:keys [size]}]
  (let [[game-state set-game-state!] (uix.core/use-state {})
        filter-game-enteties (fn [filter-fn] (filter filter-fn game-state))
        game-blocks (filter-game-enteties (fn [game-entity]
                                            (= :block
                                               (:type game-entity))))
        game-players (filter-game-enteties (fn [game-entity]
                                             (or (= :p1
                                                    (:type game-entity))
                                                 (= :p2
                                                    (:type game-entity)))))
        game-bombs (filter-game-enteties (fn [game-entity]
                                           (= :bomb
                                              (:type game-entity))))]
    (js/window.addEventListener
     "keydown"
     (fn [^js e]
       (let [send-action (fn [path query-params]
                           (go (let [response (<! (http/get (str server-address path)
                                                            {:query-params query-params}))]
                                 (when-let [_ (seq (:body response))]
                                   (set-game-state! (clojure.edn/read-string (:body response)))))))
             move (fn [player direction]
                    (send-action  "/move" {"direction" direction "player" player}))
             place-bomb (fn [player]
                          (send-action "/place-bomb" {"player" player}))
             explode-bomb (fn [player]
                            (send-action "/explode-bomb" {"player" player}))
             is-event-key? (fn [key] (= key (.-key e)))]
         (cond (is-event-key? "ArrowUp") (move "p1" "up")
               (is-event-key? "ArrowDown") (move "p1" "down")
               (is-event-key? "ArrowRight") (move "p1" "right")
               (is-event-key? "ArrowLeft") (move "p1" "left")
               (is-event-key? "j") (place-bomb "p1")
               (is-event-key? "k") (explode-bomb "p1")
               (is-event-key? "w") (move "p2" "up")
               (is-event-key? "a") (move "p2" "left")
               (is-event-key? "s") (move "p2" "down")
               (is-event-key? "d") (move "p2" "right")
               (is-event-key? "c") (place-bomb "p2")
               (is-event-key? "v") (explode-bomb "p2")
               (is-event-key? "Enter")
               (send-action "/create-game" {})))))
    ($ :div.game
       (->> (range size)
            (map (fn [y]
                   ($ :div {:key   y
                            :id    y
                            :style {:display "flex"}}
                      (->> (range size)
                           (map (fn [x]
                                  (let [is-blocked? (not-empty
                                                     (filter (fn [block] (= (:pos block)
                                                                            {:x x :y y}))
                                                             game-blocks))
                                        is-bomb? (not-empty
                                                  (filter (fn [bomb] (= (:pos bomb)
                                                                        {:x x :y y}))
                                                          game-bombs))
                                        is-player? (fn [player-id] (not-empty (filter (fn [player] (= {:pos {:x x :y y}
                                                                                                       :type player-id}
                                                                                                      player)) game-players)))
                                        is-player-1? (is-player? :p1)
                                        is-player-2? (is-player? :p2)]
                                    ($ :div
                                       {:key   x
                                        :id    x
                                        :style {:width            "20px"
                                                :height           "20px"
                                                :background-color (cond is-blocked? "black"
                                                                        is-player-1? "blue"
                                                                        is-player-2? "red"
                                                                        :else "white")
                                                :border           (if is-blocked?
                                                                    "1px solid white"
                                                                    "1px solid black")
                                                :box-sizing       "border-box"}}
                                       (cond
                                         is-bomb? "💣"
                                         is-player-1? ""
                                         is-player-2? ""
                                         :else "")))))))))))))

(defui text-field [{:keys [on-add-todo]}]
  (let [[value set-value!] (uix/use-state "http://localhost:8001")]
    ($ :input.text-input
       {:value value
        :placeholder "Enter game server address"
        :on-change (fn [^js e]
                     (set-value! (.. e -target -value)))})))


(defui editable-text [{:keys [text text-style on-done-editing]}]
  (let [[editing? set-editing!] (uix/use-state false)
        [editing-value set-editing-value!] (uix/use-state "")]
    (if editing?
      ($ :input.todo-item-text-field
         {:value editing-value
          :auto-focus true
          :on-change (fn [^js e]
                       (set-editing-value! (.. e -target -value)))
          :on-key-down (fn [^js e]
                         (when (= "Enter" (.-key e))
                           (set-editing-value! "")
                           (set-editing! false)
                           (on-done-editing editing-value)))})
      ($ :span.todo-item-text
         {:style text-style
          :on-click (fn [_]
                      (set-editing! true)
                      (set-editing-value! text))}
         text))))

(s/def :todo/text string?)
(s/def :todo/status #{:unresolved :resolved})

(s/def :todo/item
  (s/keys :req-un [:todo/text :todo/status]))

(defui todo-item
  [{:keys [created-at text status on-update-todos] :as props}]
  {:pre [(s/valid? :todo/item props)]}
  ($ :.todo-item
     {:key created-at}
     ($ :input.todo-item-control
        {:type :checkbox
         :checked (= status :resolved)
         :on-change (fn [_]
                      (on-update-todos #(update-in % [created-at :status] {:unresolved :resolved
                                                                           :resolved :unresolved})))})
     ($ editable-text
        {:text text
         :text-style {:text-decoration (when (= :resolved status) :line-through)}
         :on-done-editing (fn [value]
                            (on-update-todos #(assoc-in % [created-at :text] value)))})
     ($ :button.todo-item-delete-button
        {:on-click (fn [_]
                     (on-update-todos #(dissoc % created-at)))}
        "×")))

(defn use-persistent-state
  "Loads initial state from local storage and persists every updated state value
  Returns a tuple of the current state value and an updater function"
  [store-key initial-value]
  (let [[value set-value!] (uix/use-state initial-value)]
    (uix/use-effect
     (fn []
       (let [value (edn/read-string (js/localStorage.getItem store-key))]
         (set-value! #(into % value))))
     [store-key])
    (uix/use-effect
     (fn []
       (js/localStorage.setItem store-key (str value)))
     [value store-key])
    [value set-value!]))


(defui app []
  (let [[todos set-todos!] (use-persistent-state "uix-starter/todos" (sorted-map-by >))]
    ($ :.app
       ($ header)
       ($ text-field {:on-add-todo set-todos!})
       (for [[created-at todo] todos]
         ($ todo-item
            (assoc todo :created-at created-at
                   :key created-at
                   :on-update-todos set-todos!)))
       ($ game-component {:size 20})
       ($ footer))))

(defonce root
  (uix.dom/create-root (js/document.getElementById "root")))

(defn render []
  (uix.dom/render-root ($ app) root))

(defn ^:export init []
  (render))
