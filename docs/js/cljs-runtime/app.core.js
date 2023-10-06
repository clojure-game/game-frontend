goog.provide('app.core');
app.core.server_address = "http://localhost:8001";
app.core.header = (function app$core$header(){
var f__28590__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28811 = app.core.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28811)){
var f__28580__auto___28812 = temp__5804__auto___28811;
(f__28580__auto___28812.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___28812.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___28812.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("header",[{'className':"app-header"}],[uix.compiler.aot._GT_el("h3",uix.compiler.attributes.interpret_attrs("Bomberman game \uD83D\uDCA3",["h3",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28756 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28757 = app.core.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28757);

try{return f__28590__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28756);
}} else {
return f__28590__auto__();
}
});

(app.core.header.uix_component_QMARK_ = true);

(app.core.header.displayName = "app.core/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___28813 = window.uix.dev.signature_BANG_();
(sig__28584__auto___28813.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___28813.cljs$core$IFn$_invoke$arity$4(app.core.header,"",null,null) : sig__28584__auto___28813.call(null,app.core.header,"",null,null));

window.uix.dev.register_BANG_(app.core.header,app.core.header.displayName);

(app.core.header.fast_refresh_signature = sig__28584__auto___28813);
} else {
}
} else {
}
app.core.footer = (function app$core$footer(){
var f__28590__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28814 = app.core.footer.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28814)){
var f__28580__auto___28815 = temp__5804__auto___28814;
(f__28580__auto___28815.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___28815.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___28815.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("footer",[{'className':"app-footer"}],[uix.compiler.aot._GT_el("small",uix.compiler.attributes.interpret_attrs("made with ",["small",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://github.com/pitch-io/uix"}],["UIx"])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28758 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28759 = app.core.footer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28759);

try{return f__28590__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28758);
}} else {
return f__28590__auto__();
}
});

(app.core.footer.uix_component_QMARK_ = true);

(app.core.footer.displayName = "app.core/footer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___28816 = window.uix.dev.signature_BANG_();
(sig__28584__auto___28816.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___28816.cljs$core$IFn$_invoke$arity$4(app.core.footer,"",null,null) : sig__28584__auto___28816.call(null,app.core.footer,"",null,null));

window.uix.dev.register_BANG_(app.core.footer,app.core.footer.displayName);

(app.core.footer.fast_refresh_signature = sig__28584__auto___28816);
} else {
}
} else {
}
app.core.game_component = (function app$core$game_component(props__28592__auto__){
var clj_props__28593__auto__ = uix.core.glue_args(props__28592__auto__);
var vec__28760 = [clj_props__28593__auto__];
var map__28763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28760,(0),null);
var map__28763__$1 = cljs.core.__destructure_map(map__28763);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28763__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var f__28594__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28817 = app.core.game_component.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28817)){
var f__28580__auto___28818 = temp__5804__auto___28817;
(f__28580__auto___28818.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___28818.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___28818.call(null));
} else {
}
} else {
}

var vec__28764 = uix.core.use_state(cljs.core.PersistentArrayMap.EMPTY);
var game_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28764,(0),null);
var set_game_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28764,(1),null);
var filter_game_enteties = (function (filter_fn){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,game_state);
});
var get_entities_by_type = (function (type){
return filter_game_enteties((function (game_entity){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(game_entity));
}));
});
var game_blocks = get_entities_by_type(new cljs.core.Keyword(null,"block","block",664686210));
var game_players = filter_game_enteties((function (game_entity){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(game_entity))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(game_entity))));
}));
var game_bombs = get_entities_by_type(new cljs.core.Keyword(null,"bomb","bomb",-1302543521));
var game_powerups = get_entities_by_type(new cljs.core.Keyword(null,"powerup","powerup",1561172438));
window.addEventListener("keydown",(function (e){
var send_action = (function (path,query_params){
var c__27860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27861__auto__ = (function (){var switch__27763__auto__ = (function (state_28784){
var state_val_28785 = (state_28784[(1)]);
if((state_val_28785 === (1))){
var inst_28767 = [app.core.server_address,cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var inst_28768 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_28769 = [query_params];
var inst_28770 = cljs.core.PersistentHashMap.fromArrays(inst_28768,inst_28769);
var inst_28771 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_28767,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_28770], 0));
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_28784__$1,(2),inst_28771);
} else {
if((state_val_28785 === (2))){
var inst_28773 = (state_28784[(7)]);
var inst_28773__$1 = (state_28784[(2)]);
var inst_28774 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28773__$1);
var inst_28775 = cljs.core.seq(inst_28774);
var state_28784__$1 = (function (){var statearr_28786 = state_28784;
(statearr_28786[(7)] = inst_28773__$1);

return statearr_28786;
})();
if(inst_28775){
var statearr_28787_28819 = state_28784__$1;
(statearr_28787_28819[(1)] = (3));

} else {
var statearr_28788_28820 = state_28784__$1;
(statearr_28788_28820[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (3))){
var inst_28773 = (state_28784[(7)]);
var inst_28777 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28773);
var inst_28778 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(inst_28777);
var inst_28779 = (set_game_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_game_state_BANG_.cljs$core$IFn$_invoke$arity$1(inst_28778) : set_game_state_BANG_.call(null,inst_28778));
var state_28784__$1 = state_28784;
var statearr_28789_28821 = state_28784__$1;
(statearr_28789_28821[(2)] = inst_28779);

(statearr_28789_28821[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (4))){
var state_28784__$1 = state_28784;
var statearr_28790_28822 = state_28784__$1;
(statearr_28790_28822[(2)] = null);

(statearr_28790_28822[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (5))){
var inst_28782 = (state_28784[(2)]);
var state_28784__$1 = state_28784;
return cljs.core.async.impl.ioc_helpers.return_chan(state_28784__$1,inst_28782);
} else {
return null;
}
}
}
}
}
});
return (function() {
var app$core$game_component_$_state_machine__27764__auto__ = null;
var app$core$game_component_$_state_machine__27764__auto____0 = (function (){
var statearr_28791 = [null,null,null,null,null,null,null,null];
(statearr_28791[(0)] = app$core$game_component_$_state_machine__27764__auto__);

(statearr_28791[(1)] = (1));

return statearr_28791;
});
var app$core$game_component_$_state_machine__27764__auto____1 = (function (state_28784){
while(true){
var ret_value__27765__auto__ = (function (){try{while(true){
var result__27766__auto__ = switch__27763__auto__(state_28784);
if(cljs.core.keyword_identical_QMARK_(result__27766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27766__auto__;
}
break;
}
}catch (e28792){var ex__27767__auto__ = e28792;
var statearr_28793_28823 = state_28784;
(statearr_28793_28823[(2)] = ex__27767__auto__);


if(cljs.core.seq((state_28784[(4)]))){
var statearr_28794_28824 = state_28784;
(statearr_28794_28824[(1)] = cljs.core.first((state_28784[(4)])));

} else {
throw ex__27767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28825 = state_28784;
state_28784 = G__28825;
continue;
} else {
return ret_value__27765__auto__;
}
break;
}
});
app$core$game_component_$_state_machine__27764__auto__ = function(state_28784){
switch(arguments.length){
case 0:
return app$core$game_component_$_state_machine__27764__auto____0.call(this);
case 1:
return app$core$game_component_$_state_machine__27764__auto____1.call(this,state_28784);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$game_component_$_state_machine__27764__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$game_component_$_state_machine__27764__auto____0;
app$core$game_component_$_state_machine__27764__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$game_component_$_state_machine__27764__auto____1;
return app$core$game_component_$_state_machine__27764__auto__;
})()
})();
var state__27862__auto__ = (function (){var statearr_28795 = f__27861__auto__();
(statearr_28795[(6)] = c__27860__auto__);

return statearr_28795;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__27862__auto__);
}));

return c__27860__auto__;
});
var move = (function (player,direction){
return send_action("/move",new cljs.core.PersistentArrayMap(null, 2, ["direction",direction,"player",player], null));
});
var place_bomb = (function (player){
return send_action("/place-bomb",new cljs.core.PersistentArrayMap(null, 1, ["player",player], null));
});
var explode_bomb = (function (player){
return send_action("/explode-bomb",new cljs.core.PersistentArrayMap(null, 1, ["player",player], null));
});
var is_event_key_QMARK_ = (function (key){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(key,e.key);
});
if(is_event_key_QMARK_("ArrowUp")){
return move("p1","up");
} else {
if(is_event_key_QMARK_("ArrowDown")){
return move("p1","down");
} else {
if(is_event_key_QMARK_("ArrowRight")){
return move("p1","right");
} else {
if(is_event_key_QMARK_("ArrowLeft")){
return move("p1","left");
} else {
if(is_event_key_QMARK_("j")){
return place_bomb("p1");
} else {
if(is_event_key_QMARK_("k")){
return explode_bomb("p1");
} else {
if(is_event_key_QMARK_("w")){
return move("p2","up");
} else {
if(is_event_key_QMARK_("a")){
return move("p2","left");
} else {
if(is_event_key_QMARK_("s")){
return move("p2","down");
} else {
if(is_event_key_QMARK_("d")){
return move("p2","right");
} else {
if(is_event_key_QMARK_("c")){
return place_bomb("p2");
} else {
if(is_event_key_QMARK_("v")){
return explode_bomb("p2");
} else {
if(is_event_key_QMARK_("Enter")){
return send_action("/create-game",cljs.core.PersistentArrayMap.EMPTY);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}));

return uix.compiler.aot._GT_el("div",uix.compiler.attributes.interpret_attrs(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (y){
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(y),'id':uix.compiler.attributes.keyword__GT_string(y),'style':{'display':"flex"}}],[cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
var has_position_QMARK_ = (function (entities){
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (entity){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(entity),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
}),entities));
});
var is_blocked_QMARK_ = has_position_QMARK_(game_blocks);
var is_bomb_QMARK_ = has_position_QMARK_(game_bombs);
var is_powerup_QMARK_ = has_position_QMARK_(game_powerups);
var is_player_QMARK_ = (function (player_id){
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (player){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"type","type",1174270348),player_id], null),player);
}),game_players));
});
var is_player_1_QMARK_ = is_player_QMARK_(new cljs.core.Keyword(null,"p1","p1",-936759954));
var is_player_2_QMARK_ = is_player_QMARK_(new cljs.core.Keyword(null,"p2","p2",905500641));
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(x),'id':uix.compiler.attributes.keyword__GT_string(x),'style':{'width':"20px",'height':"20px",'backgroundColor':uix.compiler.attributes.keyword__GT_string((cljs.core.truth_(is_blocked_QMARK_)?"lightgrey":(cljs.core.truth_(is_player_1_QMARK_)?"blue":(cljs.core.truth_(is_player_2_QMARK_)?"red":"grey"
)))),'border':uix.compiler.attributes.keyword__GT_string((cljs.core.truth_(is_blocked_QMARK_)?"2px groove grey":"0.5px solid #404040")),'boxSizing':"border-box"}}],[(cljs.core.truth_(is_bomb_QMARK_)?"\uD83D\uDCA3":(cljs.core.truth_(is_powerup_QMARK_)?"\u2B50\uFE0F":(cljs.core.truth_(is_player_1_QMARK_)?"":(cljs.core.truth_(is_player_2_QMARK_)?"":""
))))]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(size))]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(size)),["div",null,"game",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28796 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28797 = app.core.game_component;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28797);

try{if(((cljs.core.map_QMARK_(clj_props__28593__auto__)) || ((clj_props__28593__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28593__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28593__auto__) (clojure.core/nil? clj-props__28593__auto__))"].join('')));
}

return f__28594__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28796);
}} else {
return f__28594__auto__();
}
});

(app.core.game_component.uix_component_QMARK_ = true);

(app.core.game_component.displayName = "app.core/game-component");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___28826 = window.uix.dev.signature_BANG_();
(sig__28584__auto___28826.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___28826.cljs$core$IFn$_invoke$arity$4(app.core.game_component,"(uix.core/use-state {})",null,null) : sig__28584__auto___28826.call(null,app.core.game_component,"(uix.core/use-state {})",null,null));

window.uix.dev.register_BANG_(app.core.game_component,app.core.game_component.displayName);

(app.core.game_component.fast_refresh_signature = sig__28584__auto___28826);
} else {
}
} else {
}
app.core.button = (function app$core$button(){
var f__28590__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28827 = app.core.button.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28827)){
var f__28580__auto___28828 = temp__5804__auto___28827;
(f__28580__auto___28828.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___28828.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___28828.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("button",uix.compiler.attributes.interpret_attrs("Press this button to do nothing, press enter to start/reset the game",["button",null,"go-button",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28798 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28799 = app.core.button;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28799);

try{return f__28590__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28798);
}} else {
return f__28590__auto__();
}
});

(app.core.button.uix_component_QMARK_ = true);

(app.core.button.displayName = "app.core/button");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___28829 = window.uix.dev.signature_BANG_();
(sig__28584__auto___28829.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___28829.cljs$core$IFn$_invoke$arity$4(app.core.button,"",null,null) : sig__28584__auto___28829.call(null,app.core.button,"",null,null));

window.uix.dev.register_BANG_(app.core.button,app.core.button.displayName);

(app.core.button.fast_refresh_signature = sig__28584__auto___28829);
} else {
}
} else {
}
/**
 * Loads initial state from local storage and persists every updated state value
 *   Returns a tuple of the current state value and an updater function
 */
app.core.use_persistent_state = (function app$core$use_persistent_state(store_key,initial_value){
var vec__28801 = uix.core.use_state(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28801,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var value__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(store_key));
var G__28805 = (function (p1__28800_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__28800_SHARP_,value__$1);
});
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__28805) : set_value_BANG_.call(null,G__28805));
}),uix.core.jsfy_deps([store_key]));

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return localStorage.setItem(store_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}),uix.core.jsfy_deps([value,store_key]));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,set_value_BANG_], null);
});
app.core.app = (function app$core$app(){
var f__28590__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28830 = app.core.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28830)){
var f__28580__auto___28831 = temp__5804__auto___28830;
(f__28580__auto___28831.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___28831.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___28831.call(null));
} else {
}
} else {
}

var vec__28806 = app.core.use_persistent_state("uix-starter/todos",cljs.core.sorted_map_by(cljs.core._GT_));
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28806,(0),null);
var set_todos_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28806,(1),null);
return uix.compiler.aot._GT_el("div",[{'className':"app"}],[uix.compiler.alpha.component_element(app.core.header,[null],[]),uix.compiler.alpha.component_element(app.core.button,[null],[]),uix.compiler.alpha.component_element(app.core.game_component,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)],[]),uix.compiler.alpha.component_element(app.core.footer,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28809 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28810 = app.core.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28810);

try{return f__28590__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28809);
}} else {
return f__28590__auto__();
}
});

(app.core.app.uix_component_QMARK_ = true);

(app.core.app.displayName = "app.core/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___28832 = window.uix.dev.signature_BANG_();
(sig__28584__auto___28832.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___28832.cljs$core$IFn$_invoke$arity$4(app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))",null,null) : sig__28584__auto___28832.call(null,app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))",null,null));

window.uix.dev.register_BANG_(app.core.app,app.core.app.displayName);

(app.core.app.fast_refresh_signature = sig__28584__auto___28832);
} else {
}
} else {
}
if((typeof app !== 'undefined') && (typeof app.core !== 'undefined') && (typeof app.core.root !== 'undefined')){
} else {
app.core.root = uix.dom.create_root.cljs$core$IFn$_invoke$arity$1(document.getElementById("root"));
}
app.core.render = (function app$core$render(){
return uix.dom.render_root(uix.compiler.alpha.component_element(app.core.app,[null],[]),app.core.root);
});
app.core.init = (function app$core$init(){
return app.core.render();
});
goog.exportSymbol('app.core.init', app.core.init);

//# sourceMappingURL=app.core.js.map
