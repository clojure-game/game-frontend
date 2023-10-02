goog.provide('app.core');
app.core.game = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
app.core.server_address = "https://localhost:8001";
app.core.header = (function app$core$header(){
var f__28612__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28855 = app.core.header.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28855)){
var f__28602__auto___28856 = temp__5804__auto___28855;
(f__28602__auto___28856.cljs$core$IFn$_invoke$arity$0 ? f__28602__auto___28856.cljs$core$IFn$_invoke$arity$0() : f__28602__auto___28856.call(null));
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

try{return f__28612__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28756);
}} else {
return f__28612__auto__();
}
});

(app.core.header.uix_component_QMARK_ = true);

(app.core.header.displayName = "app.core/header");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28606__auto___28857 = window.uix.dev.signature_BANG_();
(sig__28606__auto___28857.cljs$core$IFn$_invoke$arity$4 ? sig__28606__auto___28857.cljs$core$IFn$_invoke$arity$4(app.core.header,"",null,null) : sig__28606__auto___28857.call(null,app.core.header,"",null,null));

window.uix.dev.register_BANG_(app.core.header,app.core.header.displayName);

(app.core.header.fast_refresh_signature = sig__28606__auto___28857);
} else {
}
} else {
}
app.core.footer = (function app$core$footer(){
var f__28612__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28858 = app.core.footer.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28858)){
var f__28602__auto___28859 = temp__5804__auto___28858;
(f__28602__auto___28859.cljs$core$IFn$_invoke$arity$0 ? f__28602__auto___28859.cljs$core$IFn$_invoke$arity$0() : f__28602__auto___28859.call(null));
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

try{return f__28612__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28758);
}} else {
return f__28612__auto__();
}
});

(app.core.footer.uix_component_QMARK_ = true);

(app.core.footer.displayName = "app.core/footer");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28606__auto___28860 = window.uix.dev.signature_BANG_();
(sig__28606__auto___28860.cljs$core$IFn$_invoke$arity$4 ? sig__28606__auto___28860.cljs$core$IFn$_invoke$arity$4(app.core.footer,"",null,null) : sig__28606__auto___28860.call(null,app.core.footer,"",null,null));

window.uix.dev.register_BANG_(app.core.footer,app.core.footer.displayName);

(app.core.footer.fast_refresh_signature = sig__28606__auto___28860);
} else {
}
} else {
}
app.core.game_component = (function app$core$game_component(props__28614__auto__){
var clj_props__28615__auto__ = uix.core.glue_args(props__28614__auto__);
var vec__28760 = [clj_props__28615__auto__];
var map__28763 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28760,(0),null);
var map__28763__$1 = cljs.core.__destructure_map(map__28763);
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28763__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var f__28616__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28861 = app.core.game_component.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28861)){
var f__28602__auto___28862 = temp__5804__auto___28861;
(f__28602__auto___28862.cljs$core$IFn$_invoke$arity$0 ? f__28602__auto___28862.cljs$core$IFn$_invoke$arity$0() : f__28602__auto___28862.call(null));
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
var statearr_28787_28863 = state_28784__$1;
(statearr_28787_28863[(1)] = (3));

} else {
var statearr_28788_28864 = state_28784__$1;
(statearr_28788_28864[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (3))){
var inst_28773 = (state_28784[(7)]);
var inst_28777 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_28773);
var inst_28778 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(inst_28777);
var inst_28779 = (set_game_state_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_game_state_BANG_.cljs$core$IFn$_invoke$arity$1(inst_28778) : set_game_state_BANG_.call(null,inst_28778));
var state_28784__$1 = state_28784;
var statearr_28789_28865 = state_28784__$1;
(statearr_28789_28865[(2)] = inst_28779);

(statearr_28789_28865[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28785 === (4))){
var state_28784__$1 = state_28784;
var statearr_28790_28866 = state_28784__$1;
(statearr_28790_28866[(2)] = null);

(statearr_28790_28866[(1)] = (5));


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
var statearr_28793_28867 = state_28784;
(statearr_28793_28867[(2)] = ex__27767__auto__);


if(cljs.core.seq((state_28784[(4)]))){
var statearr_28794_28868 = state_28784;
(statearr_28794_28868[(1)] = cljs.core.first((state_28784[(4)])));

} else {
throw ex__27767__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__27765__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28869 = state_28784;
state_28784 = G__28869;
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
var _STAR_current_component_STAR__orig_val__28796 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28797 = app.core.game_component;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28797);

try{if(((cljs.core.map_QMARK_(clj_props__28615__auto__)) || ((clj_props__28615__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28615__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28615__auto__) (clojure.core/nil? clj-props__28615__auto__))"].join('')));
}

return f__28616__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28796);
}} else {
return f__28616__auto__();
}
});

(app.core.game_component.uix_component_QMARK_ = true);

(app.core.game_component.displayName = "app.core/game-component");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28606__auto___28870 = window.uix.dev.signature_BANG_();
(sig__28606__auto___28870.cljs$core$IFn$_invoke$arity$4 ? sig__28606__auto___28870.cljs$core$IFn$_invoke$arity$4(app.core.game_component,"(uix.core/use-state {})",null,null) : sig__28606__auto___28870.call(null,app.core.game_component,"(uix.core/use-state {})",null,null));

window.uix.dev.register_BANG_(app.core.game_component,app.core.game_component.displayName);

(app.core.game_component.fast_refresh_signature = sig__28606__auto___28870);
} else {
}
} else {
}
app.core.text_field = (function app$core$text_field(props__28614__auto__){
var clj_props__28615__auto__ = uix.core.glue_args(props__28614__auto__);
var vec__28798 = [clj_props__28615__auto__];
var map__28801 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28798,(0),null);
var map__28801__$1 = cljs.core.__destructure_map(map__28801);
var on_add_todo = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28801__$1,new cljs.core.Keyword(null,"on-add-todo","on-add-todo",-5337228));
var f__28616__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28871 = app.core.text_field.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28871)){
var f__28602__auto___28872 = temp__5804__auto___28871;
(f__28602__auto___28872.cljs$core$IFn$_invoke$arity$0 ? f__28602__auto___28872.cljs$core$IFn$_invoke$arity$0() : f__28602__auto___28872.call(null));
} else {
}
} else {
}

var vec__28802 = uix.core.use_state("https://localhost:8001");
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28802,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28802,(1),null);
return uix.compiler.aot.create_uix_input("input",[{'value':uix.compiler.attributes.keyword__GT_string(value),'placeholder':"Enter game server address",'onChange':(function (e){
var G__28805 = e.target.value;
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__28805) : set_value_BANG_.call(null,G__28805));
}),'className':"text-input"}],[]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28806 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28807 = app.core.text_field;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28807);

try{if(((cljs.core.map_QMARK_(clj_props__28615__auto__)) || ((clj_props__28615__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28615__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28615__auto__) (clojure.core/nil? clj-props__28615__auto__))"].join('')));
}

return f__28616__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28806);
}} else {
return f__28616__auto__();
}
});

(app.core.text_field.uix_component_QMARK_ = true);

(app.core.text_field.displayName = "app.core/text-field");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28606__auto___28873 = window.uix.dev.signature_BANG_();
(sig__28606__auto___28873.cljs$core$IFn$_invoke$arity$4 ? sig__28606__auto___28873.cljs$core$IFn$_invoke$arity$4(app.core.text_field,"(uix/use-state \"https://localhost:8001\")",null,null) : sig__28606__auto___28873.call(null,app.core.text_field,"(uix/use-state \"https://localhost:8001\")",null,null));

window.uix.dev.register_BANG_(app.core.text_field,app.core.text_field.displayName);

(app.core.text_field.fast_refresh_signature = sig__28606__auto___28873);
} else {
}
} else {
}
app.core.editable_text = (function app$core$editable_text(props__28614__auto__){
var clj_props__28615__auto__ = uix.core.glue_args(props__28614__auto__);
var vec__28808 = [clj_props__28615__auto__];
var map__28811 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28808,(0),null);
var map__28811__$1 = cljs.core.__destructure_map(map__28811);
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28811__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28811__$1,new cljs.core.Keyword(null,"text-style","text-style",-230732139));
var on_done_editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28811__$1,new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127));
var f__28616__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28874 = app.core.editable_text.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28874)){
var f__28602__auto___28875 = temp__5804__auto___28874;
(f__28602__auto___28875.cljs$core$IFn$_invoke$arity$0 ? f__28602__auto___28875.cljs$core$IFn$_invoke$arity$0() : f__28602__auto___28875.call(null));
} else {
}
} else {
}

var vec__28812 = uix.core.use_state(false);
var editing_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812,(0),null);
var set_editing_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28812,(1),null);
var vec__28815 = uix.core.use_state("");
var editing_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(0),null);
var set_editing_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28815,(1),null);
if(cljs.core.truth_(editing_QMARK_)){
return uix.compiler.aot.create_uix_input("input",[{'value':uix.compiler.attributes.keyword__GT_string(editing_value),'autoFocus':true,'onChange':(function (e){
var G__28818 = e.target.value;
return (set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_editing_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__28818) : set_editing_value_BANG_.call(null,G__28818));
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
var _STAR_current_component_STAR__orig_val__28819 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28820 = app.core.editable_text;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28820);

try{if(((cljs.core.map_QMARK_(clj_props__28615__auto__)) || ((clj_props__28615__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28615__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28615__auto__) (clojure.core/nil? clj-props__28615__auto__))"].join('')));
}

return f__28616__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28819);
}} else {
return f__28616__auto__();
}
});

(app.core.editable_text.uix_component_QMARK_ = true);

(app.core.editable_text.displayName = "app.core/editable-text");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28606__auto___28876 = window.uix.dev.signature_BANG_();
(sig__28606__auto___28876.cljs$core$IFn$_invoke$arity$4 ? sig__28606__auto___28876.cljs$core$IFn$_invoke$arity$4(app.core.editable_text,"(uix/use-state false)(uix/use-state \"\")",null,null) : sig__28606__auto___28876.call(null,app.core.editable_text,"(uix/use-state false)(uix/use-state \"\")",null,null));

window.uix.dev.register_BANG_(app.core.editable_text,app.core.editable_text.displayName);

(app.core.editable_text.fast_refresh_signature = sig__28606__auto___28876);
} else {
}
} else {
}
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","status","todo/status",-2085495639),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),"null",new cljs.core.Keyword(null,"resolved","resolved",968763567),"null"], null), null),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),null,new cljs.core.Keyword(null,"resolved","resolved",968763567),null], null), null));
cljs.spec.alpha.def_impl(new cljs.core.Keyword("todo","item","todo/item",253995720),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","keys","cljs.spec.alpha/keys",1109346032,null),new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null)),cljs.spec.alpha.map_spec_impl(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"req-un","req-un",1074571008),new cljs.core.Keyword(null,"opt-un","opt-un",883442496),new cljs.core.Keyword(null,"gfn","gfn",791517474),new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395),new cljs.core.Keyword(null,"keys-pred","keys-pred",858984739),new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261),new cljs.core.Keyword(null,"req-specs","req-specs",553962313),new cljs.core.Keyword(null,"req","req",-326448303),new cljs.core.Keyword(null,"req-keys","req-keys",514319221),new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450),new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832),new cljs.core.Keyword(null,"opt","opt",-794706369)],[new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null),null,null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (G__28821){
return cljs.core.map_QMARK_(G__28821);
}),(function (G__28821){
return cljs.core.contains_QMARK_(G__28821,new cljs.core.Keyword(null,"text","text",-1790561697));
}),(function (G__28821){
return cljs.core.contains_QMARK_(G__28821,new cljs.core.Keyword(null,"status","status",-1997798413));
})], null),(function (G__28821){
return ((cljs.core.map_QMARK_(G__28821)) && (((cljs.core.contains_QMARK_(G__28821,new cljs.core.Keyword(null,"text","text",-1790561697))) && (cljs.core.contains_QMARK_(G__28821,new cljs.core.Keyword(null,"status","status",-1997798413))))));
}),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("todo","text","todo/text",-1787258203),new cljs.core.Keyword("todo","status","todo/status",-2085495639)], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"status","status",-1997798413)], null),cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null),new cljs.core.Symbol(null,"%","%",-950237169,null))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"text","text",-1790561697))),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","contains?","cljs.core/contains?",-976526835,null),new cljs.core.Symbol(null,"%","%",-950237169,null),new cljs.core.Keyword(null,"status","status",-1997798413)))], null),null])));
app.core.todo_item = (function app$core$todo_item(props__28614__auto__){
var clj_props__28615__auto__ = uix.core.glue_args(props__28614__auto__);
var vec__28825 = [clj_props__28615__auto__];
var map__28828 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28825,(0),null);
var map__28828__$1 = cljs.core.__destructure_map(map__28828);
var props = map__28828__$1;
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28828__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28828__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28828__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var on_update_todos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__28828__$1,new cljs.core.Keyword(null,"on-update-todos","on-update-todos",104460067));
var f__28616__auto__ = (function (){
if(cljs.spec.alpha.valid_QMARK_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("todo","item","todo/item",253995720),props)){
} else {
throw (new Error("Assert failed: (s/valid? :todo/item props)"));
}

if(goog.DEBUG){
var temp__5804__auto___28877 = app.core.todo_item.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28877)){
var f__28602__auto___28878 = temp__5804__auto___28877;
(f__28602__auto___28878.cljs$core$IFn$_invoke$arity$0 ? f__28602__auto___28878.cljs$core$IFn$_invoke$arity$0() : f__28602__auto___28878.call(null));
} else {
}
} else {
}

return uix.compiler.aot._GT_el("div",[{'key':uix.compiler.attributes.keyword__GT_string(created_at),'className':"todo-item"}],[uix.compiler.aot.create_uix_input("input",[{'type':"checkbox",'checked':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"resolved","resolved",968763567)),'onChange':(function (_){
var G__28829 = (function (p1__28822_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__28822_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [created_at,new cljs.core.Keyword(null,"status","status",-1997798413)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"unresolved","unresolved",833458441),new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.Keyword(null,"resolved","resolved",968763567),new cljs.core.Keyword(null,"unresolved","unresolved",833458441)], null));
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__28829) : on_update_todos.call(null,G__28829));
}),'className':"todo-item-control"}],[]),uix.compiler.alpha.component_element(app.core.editable_text,[new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"text-style","text-style",-230732139),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"resolved","resolved",968763567),status))?new cljs.core.Keyword(null,"line-through","line-through",-250988971):null)], null),new cljs.core.Keyword(null,"on-done-editing","on-done-editing",2140943127),(function (value){
var G__28830 = (function (p1__28823_SHARP_){
return cljs.core.assoc_in(p1__28823_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [created_at,new cljs.core.Keyword(null,"text","text",-1790561697)], null),value);
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__28830) : on_update_todos.call(null,G__28830));
})], null)],[]),uix.compiler.aot._GT_el("button",[{'onClick':(function (_){
var G__28831 = (function (p1__28824_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__28824_SHARP_,created_at);
});
return (on_update_todos.cljs$core$IFn$_invoke$arity$1 ? on_update_todos.cljs$core$IFn$_invoke$arity$1(G__28831) : on_update_todos.call(null,G__28831));
}),'className':"todo-item-delete-button"}],["\u00D7"])]);
});
if(goog.DEBUG){
var _STAR_current_component_STAR__orig_val__28832 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28833 = app.core.todo_item;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28833);

try{if(((cljs.core.map_QMARK_(clj_props__28615__auto__)) || ((clj_props__28615__auto__ == null)))){
} else {
throw (new Error(["Assert failed: ",["UIx component expects a map of props, but instead got ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clj_props__28615__auto__)].join(''),"\n","(clojure.core/or (clojure.core/map? clj-props__28615__auto__) (clojure.core/nil? clj-props__28615__auto__))"].join('')));
}

return f__28616__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28832);
}} else {
return f__28616__auto__();
}
});

(app.core.todo_item.uix_component_QMARK_ = true);

(app.core.todo_item.displayName = "app.core/todo-item");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28606__auto___28879 = window.uix.dev.signature_BANG_();
(sig__28606__auto___28879.cljs$core$IFn$_invoke$arity$4 ? sig__28606__auto___28879.cljs$core$IFn$_invoke$arity$4(app.core.todo_item,"",null,null) : sig__28606__auto___28879.call(null,app.core.todo_item,"",null,null));

window.uix.dev.register_BANG_(app.core.todo_item,app.core.todo_item.displayName);

(app.core.todo_item.fast_refresh_signature = sig__28606__auto___28879);
} else {
}
} else {
}
/**
 * Loads initial state from local storage and persists every updated state value
 *   Returns a tuple of the current state value and an updater function
 */
app.core.use_persistent_state = (function app$core$use_persistent_state(store_key,initial_value){
var vec__28835 = uix.core.use_state(initial_value);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(0),null);
var set_value_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28835,(1),null);
uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
var value__$1 = clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(localStorage.getItem(store_key));
var G__28839 = (function (p1__28834_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__28834_SHARP_,value__$1);
});
return (set_value_BANG_.cljs$core$IFn$_invoke$arity$1 ? set_value_BANG_.cljs$core$IFn$_invoke$arity$1(G__28839) : set_value_BANG_.call(null,G__28839));
}),uix.core.jsfy_deps([store_key]));

uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((function (){
return localStorage.setItem(store_key,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
}),uix.core.jsfy_deps([value,store_key]));

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [value,set_value_BANG_], null);
});
app.core.app = (function app$core$app(){
var f__28612__auto__ = (function (){
if(goog.DEBUG){
var temp__5804__auto___28880 = app.core.app.fast_refresh_signature;
if(cljs.core.truth_(temp__5804__auto___28880)){
var f__28602__auto___28881 = temp__5804__auto___28880;
(f__28602__auto___28881.cljs$core$IFn$_invoke$arity$0 ? f__28602__auto___28881.cljs$core$IFn$_invoke$arity$0() : f__28602__auto___28881.call(null));
} else {
}
} else {
}

var vec__28840 = app.core.use_persistent_state("uix-starter/todos",cljs.core.sorted_map_by(cljs.core._GT_));
var todos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(0),null);
var set_todos_BANG_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28840,(1),null);
return uix.compiler.aot._GT_el("div",[{'className':"app"}],[uix.compiler.alpha.component_element(app.core.header,[null],[]),uix.compiler.alpha.component_element(app.core.text_field,[new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-add-todo","on-add-todo",-5337228),set_todos_BANG_], null)],[]),(function (){var iter__5523__auto__ = (function app$core$app_$_iter__28843(s__28844){
return (new cljs.core.LazySeq(null,(function (){
var s__28844__$1 = s__28844;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__28844__$1);
if(temp__5804__auto__){
var s__28844__$2 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(s__28844__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__28844__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__28846 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__28845 = (0);
while(true){
if((i__28845 < size__5522__auto__)){
var vec__28847 = cljs.core._nth(c__5521__auto__,i__28845);
var created_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847,(0),null);
var todo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28847,(1),null);
cljs.core.chunk_append(b__28846,uix.compiler.alpha.component_element(app.core.todo_item,uix.compiler.attributes.interpret_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(todo,new cljs.core.Keyword(null,"created-at","created-at",-89248644),created_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),created_at,new cljs.core.Keyword(null,"on-update-todos","on-update-todos",104460067),set_todos_BANG_], 0))),[]));

var G__28882 = (i__28845 + (1));
i__28845 = G__28882;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__28846),app$core$app_$_iter__28843(cljs.core.chunk_rest(s__28844__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__28846),null);
}
} else {
var vec__28850 = cljs.core.first(s__28844__$2);
var created_at = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(0),null);
var todo = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__28850,(1),null);
return cljs.core.cons(uix.compiler.alpha.component_element(app.core.todo_item,uix.compiler.attributes.interpret_props(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(todo,new cljs.core.Keyword(null,"created-at","created-at",-89248644),created_at,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key","key",-1516042587),created_at,new cljs.core.Keyword(null,"on-update-todos","on-update-todos",104460067),set_todos_BANG_], 0))),[]),app$core$app_$_iter__28843(cljs.core.rest(s__28844__$2)));
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
var _STAR_current_component_STAR__orig_val__28853 = uix.core._STAR_current_component_STAR_;
var _STAR_current_component_STAR__temp_val__28854 = app.core.app;
(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__temp_val__28854);

try{return f__28612__auto__();
}finally {(uix.core._STAR_current_component_STAR_ = _STAR_current_component_STAR__orig_val__28853);
}} else {
return f__28612__auto__();
}
});

(app.core.app.uix_component_QMARK_ = true);

(app.core.app.displayName = "app.core/app");

if(goog.DEBUG){
if((typeof window !== 'undefined') && (typeof window.uix !== 'undefined') && (typeof window.uix.dev !== 'undefined')){
var sig__28606__auto___28883 = window.uix.dev.signature_BANG_();
(sig__28606__auto___28883.cljs$core$IFn$_invoke$arity$4 ? sig__28606__auto___28883.cljs$core$IFn$_invoke$arity$4(app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))",null,null) : sig__28606__auto___28883.call(null,app.core.app,"(use-persistent-state \"uix-starter/todos\" (sorted-map-by >))",null,null));

window.uix.dev.register_BANG_(app.core.app,app.core.app.displayName);

(app.core.app.fast_refresh_signature = sig__28606__auto___28883);
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
