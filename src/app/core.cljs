(ns app.core
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
   [cljs.spec.alpha :as s]
   [clojure.edn :as edn]
   [uix.core :as uix :refer [defui $]]
   [uix.dom]
   [cljs-http.client :as http]
   [cljs.core.async :refer [<!]]))

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
        get-entities-by-type (fn [type] (filter-game-enteties
                                         (fn [game-entity]
                                           (= type
                                              (:type game-entity)))))
        game-blocks (get-entities-by-type :block)
        game-players (filter-game-enteties (fn [game-entity]
                                             (or (= :p1
                                                    (:type game-entity))
                                                 (= :p2
                                                    (:type game-entity)))))
        game-bombs (get-entities-by-type :bomb)
        game-powerups (get-entities-by-type :powerup)]
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
            (map
             (fn [y]
               ($ :div {:key   y
                        :id    y
                        :style {:display "flex"}}
                  (->> (range size)
                       (map
                        (fn [x]
                          (let [has-position? (fn [entities]
                                                (not-empty
                                                 (filter (fn [entity]
                                                           (= (:pos entity)
                                                              {:x x :y y}))
                                                         entities)))
                                is-blocked? (has-position? game-blocks)
                                is-bomb? (has-position? game-bombs)
                                is-powerup? (has-position? game-powerups)
                                is-player? (fn [player-id]
                                             (not-empty
                                              (filter (fn [player]
                                                        (= {:pos {:x x :y y}
                                                            :type player-id}
                                                           player)) game-players)))
                                is-player-1? (is-player? :p1)
                                is-player-2? (is-player? :p2)]
                            ($ :div
                               {:key   x
                                :id    x
                                :style {:width            "20px"
                                        :height           "20px"
                                        :background-color (cond is-blocked? "lightgrey"
                                                                is-player-1? "blue"
                                                                is-player-2? "red"
                                                                :else "grey")
                                        :border           (if is-blocked?
                                                            "2px groove grey"
                                                            "0.5px solid #404040")
                                        :box-sizing       "border-box"}}
                               (cond
                                 is-bomb? "💣"
                                 is-powerup? "⭐️"
                                 is-player-1? ""
                                 is-player-2? ""
                                 :else "")))))))))))))

(defui button []
  ($ :button.go-button
     "Press this button to do nothing, press enter to start/reset the game"))

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
       ($ button)
       ($ game-component {:size 20})
       ($ footer))))

(defonce root
  (uix.dom/create-root (js/document.getElementById "root")))

(defn render []
  (uix.dom/render-root ($ app) root))

(defn ^:export init []
  (render))
