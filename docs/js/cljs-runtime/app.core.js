goog.provide('app.core');
app.core.game = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.core.server_address = "http://localhost:8001";
app.core.header = (function app$core$header(){
var f__28590__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29111 = app.core.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29111)){
var f__28580__auto___29112 = temp__5804__auto___29111;
(f__28580__auto___29112.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___29112.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___29112.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("header",[{'className':"app-header"}],[uix.compiler.aot._GT_el("h3",uix.compiler.attributes.interpret_attrs("Bomberman game \uD83D\uDCA3",["h3",null,null,false],false),[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29012 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29013 = app.core.header;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29013);

try{return f__28590__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29012);
}} else {
return f__28590__auto__();
}
});

(app.core.header.uix_component_QMARK_ = true);

(app.core.header.displayName = "app.core/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___29113 = window.uix.dev.signature_BANG_();
(sig__28584__auto___29113.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___29113.cljs$core$IFn$_invoke$arity$4(app.core.header,"",null,null) : sig__28584__auto___29113.call(null,app.core.header,"",null,null));

window.uix.dev.register_BANG_(app.core.header,app.core.header.displayName);

(app.core.header.fast_refresh_signature = sig__28584__auto___29113);
} else {
}
} else {
}
app.core.footer = (function app$core$footer(){
var f__28590__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29114 = app.core.footer.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29114)){
var f__28580__auto___29115 = temp__5804__auto___29114;
(f__28580__auto___29115.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___29115.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___29115.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("footer",[{'className':"app-footer"}],[uix.compiler.aot._GT_el("small",uix.compiler.attributes.interpret_attrs("made with ",["small",null,null,false],false),[uix.compiler.aot._GT_el("a",[{'href':"https://github.com/pitch-io/uix"}],["UIx"])])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29014 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29015 = app.core.footer;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29015);

try{return f__28590__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29014);
}} else {
return f__28590__auto__();
}
});

(app.core.footer.uix_component_QMARK_ = true);

(app.core.footer.displayName = "app.core/footer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___29116 = window.uix.dev.signature_BANG_();
(sig__28584__auto___29116.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___29116.cljs$core$IFn$_invoke$arity$4(app.core.footer,"",null,null) : sig__28584__auto___29116.call(null,app.core.footer,"",null,null));

window.uix.dev.register_BANG_(app.core.footer,app.core.footer.displayName);

(app.core.footer.fast_refresh_signature = sig__28584__auto___29116);
} else {
}
} else {
}
app.core.game_component = (function app$core$game_component(props__28592__auto__){
var clj_props__28593__auto__ = uix.core.glue_args(props__28592__auto__);
var vec__29016 = [clj_props__28593__auto__];
var map__29019 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29016,(0),null);
var map__29019__$1 = cljs.core.__destructure_map(map__29019);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29019__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var f__28594__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29117 = app.core.game_component.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29117)){
var f__28580__auto___29118 = temp__5804__auto___29117;
(f__28580__auto___29118.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___29118.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___29118.call(null));
} else {
}
} else {
}

var vec__29020 = uix.core.use_state(cljs.core.PersistentArrayMap.EMPTY);
var game_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29020,(0),null);
var set_game_state_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29020,(1),null);
var filter_game_enteties = (function (filter_fn){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(filter_fn,game_state);
});
var game_blocks = filter_game_enteties((function (game_entity){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"block","block",664686210),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(game_entity));
}));
var game_players = filter_game_enteties((function (game_entity){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(game_entity))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(game_entity))));
}));
var game_bombs = filter_game_enteties((function (game_entity){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bomb","bomb",-1302543521),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(game_entity));
}));
window.addEventListener("keydown",(function (e){
var send_action = (function (path,query_params){
var c__27860__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__27861__auto__ = (function (){var switch__27763__auto__ = (function (state_29040){
var state_val_29041 = (state_29040[(1)]);
if((state_val_29041 === (1))){
var inst_29023 = [app.core.server_address,cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('');
var inst_29024 = [new cljs.core.Keyword(null,"query-params","query-params",900640534)];
var inst_29025 = [query_params];
var inst_29026 = cljs.core.PersistentHashMap.fromArrays(inst_29024,inst_29025);
var inst_29027 = cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic(inst_29023,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([inst_29026], 0));
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29040__$1,(2),inst_29027);
} else {
if((state_val_29041 === (2))){
var inst_29029 = (state_29040[(7)]);
var inst_29029__$1 = (state_29040[(2)]);
var inst_29030 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29029__$1);
var inst_29031 = cljs.core.seq(inst_29030);
var state_29040__$1 = (function (){var statearr_29042 = state_29040;
(statearr_29042[(7)] = inst_29029__$1);

return statearr_29042;
})();
if(inst_29031){
var statearr_29043_29119 = state_29040__$1;
(statearr_29043_29119[(1)] = (3));

} else {
var statearr_29044_29120 = state_29040__$1;
(statearr_29044_29120[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (3))){
var inst_29029 = (state_29040[(7)]);
var inst_29033 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_29029);
var inst_29034 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(inst_29033);
var inst_29035 = (set_game_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_game_state_BANG_.cljs$core$IFn$_invoke$arity$1(inst_29034) : set_game_state_BANG_.call(null,inst_29034));
var state_29040__$1 = state_29040;
var statearr_29045_29121 = state_29040__$1;
(statearr_29045_29121[(2)] = inst_29035);

(statearr_29045_29121[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (4))){
var state_29040__$1 = state_29040;
var statearr_29046_29122 = state_29040__$1;
(statearr_29046_29122[(2)] = null);

(statearr_29046_29122[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29041 === (5))){
var inst_29038 = (state_29040[(2)]);
var state_29040__$1 = state_29040;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29040__$1,inst_29038);
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
var statearr_29047 = [null,null,null,null,null,null,null,null];
(statearr_29047[(0)] = app$core$game_component_$_state_machine__27764__auto__);

(statearr_29047[(1)] = (1));

return statearr_29047;
});
var app$core$game_component_$_state_machine__27764__auto____1 = (function (state_29040){
while(true){
var ret_value__27765__auto__ = (function (){try{while(true){
var result__27766__auto__ = switch__27763__auto__(state_29040);
if(cljs.core.keyword_identical_QMARK_(result__27766__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27766__auto__;
}
break;
}
}catch (e29048){var ex__27767__auto__ = e29048;
var statearr_29049_29123 = state_29040;
(statearr_29049_29123[(2)] = ex__27767__auto__);


if(cljs.core.seq((state_29040[(4)]))){
var statearr_29050_29124 = state_29040;
(statearr_29050_29124[(1)] = cljs.core.first((state_29040[(4)])));

} else {
throw ex__27767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29125 = state_29040;
state_29040 = G__29125;
continue;
} else {
return ret_value__27765__auto__;
}
break;
}
});
app$core$game_component_$_state_machine__27764__auto__ = function(state_29040){
switch(arguments.length){
case 0:
return app$core$game_component_$_state_machine__27764__auto____0.call(this);
case 1:
return app$core$game_component_$_state_machine__27764__auto____1.call(this,state_29040);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
app$core$game_component_$_state_machine__27764__auto__.cljs$core$IFn$_invoke$arity$0 = app$core$game_component_$_state_machine__27764__auto____0;
app$core$game_component_$_state_machine__27764__auto__.cljs$core$IFn$_invoke$arity$1 = app$core$game_component_$_state_machine__27764__auto____1;
return app$core$game_component_$_state_machine__27764__auto__;
})()
})();
var state__27862__auto__ = (function (){var statearr_29051 = f__27861__auto__();
(statearr_29051[(6)] = c__27860__auto__);

return statearr_29051;
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
var is_blocked_QMARK_ = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (block){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(block),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
}),game_blocks));
var is_bomb_QMARK_ = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (bomb){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pos","pos",-864607220).cljs$core$IFn$_invoke$arity$1(bomb),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null));
}),game_bombs));
var is_player_QMARK_ = (function (player_id){
return cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (player){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pos","pos",-864607220),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y], null),new cljs.core.Keyword(null,"type","type",1174270348),player_id], null),player);
}),game_players));
});
var is_player_1_QMARK_ = is_player_QMARK_(new cljs.core.Keyword(null,"p1","p1",-936759954));
var is_player_2_QMARK_ = is_player_QMARK_(new cljs.core.Keyword(null,"p2","p2",905500641));
return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(x),'id':uix.compiler.attributes.keyword__GT_string(x),'style':{'width':"20px",'height':"20px",'backgroundColor':uix.compiler.attributes.keyword__GT_string((cljs.core.truth_(is_blocked_QMARK_)?"black":(cljs.core.truth_(is_player_1_QMARK_)?"blue":(cljs.core.truth_(is_player_2_QMARK_)?"red":"white"
)))),'border':uix.compiler.attributes.keyword__GT_string((cljs.core.truth_(is_blocked_QMARK_)?"1px solid white":"1px solid black")),'boxSizing':"border-box"}}],[(cljs.core.truth_(is_bomb_QMARK_)?"\uD83D\uDCA3":(cljs.core.truth_(is_player_1_QMARK_)?"":(cljs.core.truth_(is_player_2_QMARK_)?"":""
)))]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(size))]);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(size)),["div",null,"game",false],false),[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29052 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29053 = app.core.game_component;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29053);

try{if(((cljs.core.map_QMARK_(clj_props__28593__auto__)) || ((clj_props__28593__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28593__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28593__auto__) (clojure.core/nil? clj-props__28593__auto__))"].join('')));
}

return f__28594__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29052);
}} else {
return f__28594__auto__();
}
});

(app.core.game_component.uix_component_QMARK_ = true);

(app.core.game_component.displayName = "app.core/game-component");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___29126 = window.uix.dev.signature_BANG_();
(sig__28584__auto___29126.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___29126.cljs$core$IFn$_invoke$arity$4(app.core.game_component,"(uix.core/use-state {})",null,null) : sig__28584__auto___29126.call(null,app.core.game_component,"(uix.core/use-state {})",null,null));

window.uix.dev.register_BANG_(app.core.game_component,app.core.game_component.displayName);

(app.core.game_component.fast_refresh_signature = sig__28584__auto___29126);
} else {
}
} else {
}
app.core.text_field = (function app$core$text_field(props__28592__auto__){
var clj_props__28593__auto__ = uix.core.glue_args(props__28592__auto__);
var vec__29054 = [clj_props__28593__auto__];
var map__29057 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29054,(0),null);
var map__29057__$1 = cljs.core.__destructure_map(map__29057);
var on_add_todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29057__$1,new cljs.core.Keyword(null,"on-add-todo","on-add-todo",-5337228));
var f__28594__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29127 = app.core.text_field.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29127)){
var f__28580__auto___29128 = temp__5804__auto___29127;
(f__28580__auto___29128.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___29128.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___29128.call(null));
} else {
}
} else {
}

var vec__29058 = uix.core.use_state("http://localhost:8001");
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29058,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29058,(1),null);
return uix.compiler.aot._GT_el("button",[{'value':uix.compiler.attributes.keyword__GT_string(value),'onClick':(function (e){
var G__29061 = e.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29061) : set_value_BANG_.call(null,G__29061));
}),'className':"go-button"}],["Connect to server and start game"]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29062 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29063 = app.core.text_field;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29063);

try{if(((cljs.core.map_QMARK_(clj_props__28593__auto__)) || ((clj_props__28593__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28593__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28593__auto__) (clojure.core/nil? clj-props__28593__auto__))"].join('')));
}

return f__28594__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29062);
}} else {
return f__28594__auto__();
}
});

(app.core.text_field.uix_component_QMARK_ = true);

(app.core.text_field.displayName = "app.core/text-field");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___29129 = window.uix.dev.signature_BANG_();
(sig__28584__auto___29129.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___29129.cljs$core$IFn$_invoke$arity$4(app.core.text_field,"(uix/use-state \"http://localhost:8001\")",null,null) : sig__28584__auto___29129.call(null,app.core.text_field,"(uix/use-state \"http://localhost:8001\")",null,null));

window.uix.dev.register_BANG_(app.core.text_field,app.core.text_field.displayName);

(app.core.text_field.fast_refresh_signature = sig__28584__auto___29129);
} else {
}
} else {
}
app.core.editable_text = (function app$core$editable_text(props__28592__auto__){
var clj_props__28593__auto__ = uix.core.glue_args(props__28592__auto__);
var vec__29064 = [clj_props__28593__auto__];
var map__29067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29064,(0),null);
var map__29067__$1 = cljs.core.__destructure_map(map__29067);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29067__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29067__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_done_editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29067__$1,new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127));
var f__28594__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29130 = app.core.editable_text.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29130)){
var f__28580__auto___29131 = temp__5804__auto___29130;
(f__28580__auto___29131.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___29131.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___29131.call(null));
} else {
}
} else {
}

var vec__29068 = uix.core.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29068,(1),null);
var vec__29071 = uix.core.use_state("");
var editing_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29071,(0),null);
var set_editing_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29071,(1),null);
if(cljs.core.truth_(editing_QMARK_)){
return uix.compiler.aot.create_uix_input("input",[{'value':uix.compiler.attributes.keyword__GT_string(editing_value),'autoFocus':true,'onChange':(function (e){
var G__29074 = e.target.value;
return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29074) : set_editing_value_BANG_.call(null,G__29074));
}),'onKeyDown':(function (e){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("Enter",e.key)){
(set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1("") : set_editing_value_BANG_.call(null,""));

(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(false) : set_editing_BANG_.call(null,false));

return (on_done_editing.cljs$core$IFn$_invoke$arity$1 ? on_done_editing.cljs$core$IFn$_invoke$arity$1(editing_value) : on_done_editing.call(null,editing_value));
} else {
return null;
}
}),'className':"todo-item-text-field"}],[]);
} else {
return uix.compiler.aot._GT_el("span",[{'style':uix.compiler.attributes.convert_props(text_style,[],true),'onClick':(function (_){
(set_editing_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_BANG_.cljs$core$IFn$_invoke$arity$1(true) : set_editing_BANG_.call(null,true));

return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(text) : set_editing_value_BANG_.call(null,text));
}),'className':"todo-item-text"}],[text]);
}
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29075 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29076 = app.core.editable_text;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29076);

try{if(((cljs.core.map_QMARK_(clj_props__28593__auto__)) || ((clj_props__28593__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28593__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28593__auto__) (clojure.core/nil? clj-props__28593__auto__))"].join('')));
}

return f__28594__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29075);
}} else {
return f__28594__auto__();
}
});

(app.core.editable_text.uix_component_QMARK_ = true);

(app.core.editable_text.displayName = "app.core/editable-text");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___29132 = window.uix.dev.signature_BANG_();
(sig__28584__auto___29132.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___29132.cljs$core$IFn$_invoke$arity$4(app.core.editable_text,"(uix/use-state false)(uix/use-state \"\")",null,null) : sig__28584__auto___29132.call(null,app.core.editable_text,"(uix/use-state false)(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(app.core.editable_text,app.core.editable_text.displayName);

(app.core.editable_text.fast_refresh_signature = sig__28584__auto___29132);
} else {
}
} else {
}
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","status","todo/status",-2085495639),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),"null",new cljs.core.Keyword(null,"resolved","resolved",968763567),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),null,new cljs.core.Keyword(null,"resolved","resolved",968763567),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","item","todo/item",253995720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__29077){
return cljs.core.map_QMARK_(G__29077);
}),(function (G__29077){
return cljs.core.contains_QMARK_(G__29077,new cljs.core.Keyword(null,"text","text",-1790561697));
}),(function (G__29077){
return cljs.core.contains_QMARK_(G__29077,new cljs.core.Keyword(null,"status","status",-1997798413));
})], null),(function (G__29077){
return ((cljs.core.map_QMARK_(G__29077)) && (((cljs.core.contains_QMARK_(G__29077,new cljs.core.Keyword(null,"text","text",-1790561697))) && (cljs.core.contains_QMARK_(G__29077,new cljs.core.Keyword(null,"status","status",-1997798413))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"text","text",-1790561697))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"status","status",-1997798413)))], null),null])));
app.core.todo_item = (function app$core$todo_item(props__28592__auto__){
var clj_props__28593__auto__ = uix.core.glue_args(props__28592__auto__);
var vec__29081 = [clj_props__28593__auto__];
var map__29084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29081,(0),null);
var map__29084__$1 = cljs.core.__destructure_map(map__29084);
var props = map__29084__$1;
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var on_update_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__29084__$1,new cljs.core.Keyword(null,"on-update-todos","on-update-todos",104460067));
var f__28594__auto__ = (function (){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo","item","todo/item",253995720),props)){
} else {
throw (new Error("Assert failed: (s/valid? :todo/item props)"));
}

if(goog.DEBUG){
var temp__5804__auto___29133 = app.core.todo_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29133)){
var f__28580__auto___29134 = temp__5804__auto___29133;
(f__28580__auto___29134.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___29134.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___29134.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(created_at),'className':"todo-item"}],[uix.compiler.aot.create_uix_input("input",[{'type':"checkbox",'checked':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"resolved","resolved",968763567)),'onChange':(function (_){
var G__29085 = (function (p1__29078_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__29078_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [created_at,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.Keyword(null,"unresolved","unresolved",833458441)], null));
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__29085) : on_update_todos.call(null,G__29085));
}),'className':"todo-item-control"}],[]),uix.compiler.alpha.component_element(app.core.editable_text,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolved","resolved",968763567),status))?new cljs.core.Keyword(null,"line-through","line-through",-250988971):null)], null),new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127),(function (value){
var G__29086 = (function (p1__29079_SHARP_){
return cljs.core.assoc_in(p1__29079_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [created_at,new cljs.core.Keyword(null,"text","text",-1790561697)], null),value);
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__29086) : on_update_todos.call(null,G__29086));
})], null)],[]),uix.compiler.aot._GT_el("button",[{'onClick':(function (_){
var G__29087 = (function (p1__29080_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__29080_SHARP_,created_at);
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__29087) : on_update_todos.call(null,G__29087));
}),'className':"todo-item-delete-button"}],["\u00D7"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29088 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29089 = app.core.todo_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29089);

try{if(((cljs.core.map_QMARK_(clj_props__28593__auto__)) || ((clj_props__28593__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28593__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28593__auto__) (clojure.core/nil? clj-props__28593__auto__))"].join('')));
}

return f__28594__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29088);
}} else {
return f__28594__auto__();
}
});

(app.core.todo_item.uix_component_QMARK_ = true);

(app.core.todo_item.displayName = "app.core/todo-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___29135 = window.uix.dev.signature_BANG_();
(sig__28584__auto___29135.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___29135.cljs$core$IFn$_invoke$arity$4(app.core.todo_item,"",null,null) : sig__28584__auto___29135.call(null,app.core.todo_item,"",null,null));

window.uix.dev.register_BANG_(app.core.todo_item,app.core.todo_item.displayName);

(app.core.todo_item.fast_refresh_signature = sig__28584__auto___29135);
} else {
}
} else {
}
/**
 * Loads initial state from local storage and persists every updated state value
 *   Returns a tuple of the current state value and an updater function
 */
app.core.use_persistent_state = (function app$core$use_persistent_state(store_key,initial_value){
var vec__29091 = uix.core.use_state(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29091,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var value__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(store_key));
var G__29095 = (function (p1__29090_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__29090_SHARP_,value__$1);
});
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__29095) : set_value_BANG_.call(null,G__29095));
}),uix.core.jsfy_deps([store_key]));

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return localStorage.setItem(store_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}),uix.core.jsfy_deps([value,store_key]));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,set_value_BANG_], null);
});
app.core.app = (function app$core$app(){
var f__28590__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___29136 = app.core.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___29136)){
var f__28580__auto___29137 = temp__5804__auto___29136;
(f__28580__auto___29137.cljs$core$IFn$_invoke$arity$0 ? f__28580__auto___29137.cljs$core$IFn$_invoke$arity$0() : f__28580__auto___29137.call(null));
} else {
}
} else {
}

var vec__29096 = app.core.use_persistent_state("uix-starter/todos",cljs.core.sorted_map_by(cljs.core._GT_));
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29096,(0),null);
var set_todos_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29096,(1),null);
return uix.compiler.aot._GT_el("div",[{'className':"app"}],[uix.compiler.alpha.component_element(app.core.header,[null],[]),uix.compiler.alpha.component_element(app.core.text_field,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-add-todo","on-add-todo",-5337228),set_todos_BANG_], null)],[]),(function (){var iter__5523__auto__ = (function app$core$app_$_iter__29099(s__29100){
return (new cljs.core.LazySeq(null,(function (){
var s__29100__$1 = s__29100;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__29100__$1);
if(temp__5804__auto__){
var s__29100__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__29100__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__29100__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__29102 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__29101 = (0);
while(true){
if((i__29101 < size__5522__auto__)){
var vec__29103 = cljs.core._nth(c__5521__auto__,i__29101);
var created_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29103,(0),null);
var todo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29103,(1),null);
cljs.core.chunk_append(b__29102,uix.compiler.alpha.component_element(app.core.todo_item,uix.compiler.attributes.interpret_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(todo,new cljs.core.Keyword(null,"created-at","created-at",-89248644),created_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),created_at,new cljs.core.Keyword(null,"on-update-todos","on-update-todos",104460067),set_todos_BANG_], 0))),[]));

var G__29138 = (i__29101 + (1));
i__29101 = G__29138;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__29102),app$core$app_$_iter__29099(cljs.core.chunk_rest(s__29100__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__29102),null);
}
} else {
var vec__29106 = cljs.core.first(s__29100__$2);
var created_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(0),null);
var todo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29106,(1),null);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.todo_item,uix.compiler.attributes.interpret_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(todo,new cljs.core.Keyword(null,"created-at","created-at",-89248644),created_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),created_at,new cljs.core.Keyword(null,"on-update-todos","on-update-todos",104460067),set_todos_BANG_], 0))),[]),app$core$app_$_iter__29099(cljs.core.rest(s__29100__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(todos);
})(),uix.compiler.alpha.component_element(app.core.game_component,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),(20)], null)],[]),uix.compiler.alpha.component_element(app.core.footer,[null],[])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__29109 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__29110 = app.core.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__29110);

try{return f__28590__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__29109);
}} else {
return f__28590__auto__();
}
});

(app.core.app.uix_component_QMARK_ = true);

(app.core.app.displayName = "app.core/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28584__auto___29139 = window.uix.dev.signature_BANG_();
(sig__28584__auto___29139.cljs$core$IFn$_invoke$arity$4 ? sig__28584__auto___29139.cljs$core$IFn$_invoke$arity$4(app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))",null,null) : sig__28584__auto___29139.call(null,app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))",null,null));

window.uix.dev.register_BANG_(app.core.app,app.core.app.displayName);

(app.core.app.fast_refresh_signature = sig__28584__auto___29139);
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
