goog.provide('shadow.remote.runtime.shared');
shadow.remote.runtime.shared.init_state = (function shadow$remote$runtime$shared$init_state(client_info){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),(0),new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.PersistentArrayMap.EMPTY], null);
});
shadow.remote.runtime.shared.now = (function shadow$remote$runtime$shared$now(){
return Date.now();
});
shadow.remote.runtime.shared.get_client_id = (function shadow$remote$runtime$shared$get_client_id(p__33621){
var map__33622 = p__33621;
var map__33622__$1 = cljs.core.__destructure_map(map__33622);
var runtime = map__33622__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33622__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var or__5045__auto__ = new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("runtime has no assigned runtime-id",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null));
}
});
shadow.remote.runtime.shared.relay_msg = (function shadow$remote$runtime$shared$relay_msg(runtime,msg){
var self_id_33712 = shadow.remote.runtime.shared.get_client_id(runtime);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"to","to",192099007).cljs$core$IFn$_invoke$arity$1(msg),self_id_33712)){
shadow.remote.runtime.api.relay_msg(runtime,msg);
} else {
Promise.resolve((1)).then((function (){
var G__33623 = runtime;
var G__33624 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"from","from",1815293044),self_id_33712);
return (shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2 ? shadow.remote.runtime.shared.process.cljs$core$IFn$_invoke$arity$2(G__33623,G__33624) : shadow.remote.runtime.shared.process.call(null,G__33623,G__33624));
}));
}

return msg;
});
shadow.remote.runtime.shared.reply = (function shadow$remote$runtime$shared$reply(runtime,p__33625,res){
var map__33627 = p__33625;
var map__33627__$1 = cljs.core.__destructure_map(map__33627);
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33627__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33627__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var res__$1 = (function (){var G__33629 = res;
var G__33629__$1 = (cljs.core.truth_(call_id)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33629,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id):G__33629);
if(cljs.core.truth_(from)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__33629__$1,new cljs.core.Keyword(null,"to","to",192099007),from);
} else {
return G__33629__$1;
}
})();
return shadow.remote.runtime.api.relay_msg(runtime,res__$1);
});
shadow.remote.runtime.shared.call = (function shadow$remote$runtime$shared$call(var_args){
var G__33635 = arguments.length;
switch (G__33635) {
case 3:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3 = (function (runtime,msg,handlers){
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4(runtime,msg,handlers,(0));
}));

(shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$4 = (function (p__33637,msg,handlers,timeout_after_ms){
var map__33638 = p__33637;
var map__33638__$1 = cljs.core.__destructure_map(map__33638);
var runtime = map__33638__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33638__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
if(cljs.core.map_QMARK_(msg)){
} else {
throw (new Error("Assert failed: (map? msg)"));
}

if(cljs.core.map_QMARK_(handlers)){
} else {
throw (new Error("Assert failed: (map? handlers)"));
}

if(cljs.core.nat_int_QMARK_(timeout_after_ms)){
} else {
throw (new Error("Assert failed: (nat-int? timeout-after-ms)"));
}

var call_id = new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-id-seq","call-id-seq",-1679248218),cljs.core.inc);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"handlers","handlers",79528781),handlers,new cljs.core.Keyword(null,"called-at","called-at",607081160),shadow.remote.runtime.shared.now(),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg,new cljs.core.Keyword(null,"timeout","timeout",-318625318),timeout_after_ms], null));

return shadow.remote.runtime.api.relay_msg(runtime,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"call-id","call-id",1043012968),call_id));
}));

(shadow.remote.runtime.shared.call.cljs$lang$maxFixedArity = 4);

shadow.remote.runtime.shared.trigger_BANG_ = (function shadow$remote$runtime$shared$trigger_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___33718 = arguments.length;
var i__5770__auto___33719 = (0);
while(true){
if((i__5770__auto___33719 < len__5769__auto___33718)){
args__5775__auto__.push((arguments[i__5770__auto___33719]));

var G__33720 = (i__5770__auto___33719 + (1));
i__5770__auto___33719 = G__33720;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((2) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((2)),(0),null)):null);
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5776__auto__);
});

(shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (p__33645,ev,args){
var map__33646 = p__33645;
var map__33646__$1 = cljs.core.__destructure_map(map__33646);
var runtime = map__33646__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33646__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var seq__33647 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33650 = null;
var count__33651 = (0);
var i__33652 = (0);
while(true){
if((i__33652 < count__33651)){
var ext = chunk__33650.cljs$core$IIndexed$_nth$arity$2(null,i__33652);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33722 = seq__33647;
var G__33723 = chunk__33650;
var G__33724 = count__33651;
var G__33725 = (i__33652 + (1));
seq__33647 = G__33722;
chunk__33650 = G__33723;
count__33651 = G__33724;
i__33652 = G__33725;
continue;
} else {
var G__33726 = seq__33647;
var G__33727 = chunk__33650;
var G__33728 = count__33651;
var G__33729 = (i__33652 + (1));
seq__33647 = G__33726;
chunk__33650 = G__33727;
count__33651 = G__33728;
i__33652 = G__33729;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33647);
if(temp__5804__auto__){
var seq__33647__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33647__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33647__$1);
var G__33731 = cljs.core.chunk_rest(seq__33647__$1);
var G__33732 = c__5568__auto__;
var G__33733 = cljs.core.count(c__5568__auto__);
var G__33734 = (0);
seq__33647 = G__33731;
chunk__33650 = G__33732;
count__33651 = G__33733;
i__33652 = G__33734;
continue;
} else {
var ext = cljs.core.first(seq__33647__$1);
var ev_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ext,ev);
if(cljs.core.truth_(ev_fn)){
cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ev_fn,args);


var G__33735 = cljs.core.next(seq__33647__$1);
var G__33736 = null;
var G__33737 = (0);
var G__33738 = (0);
seq__33647 = G__33735;
chunk__33650 = G__33736;
count__33651 = G__33737;
i__33652 = G__33738;
continue;
} else {
var G__33739 = cljs.core.next(seq__33647__$1);
var G__33740 = null;
var G__33741 = (0);
var G__33742 = (0);
seq__33647 = G__33739;
chunk__33650 = G__33740;
count__33651 = G__33741;
i__33652 = G__33742;
continue;
}
}
} else {
return null;
}
}
break;
}
}));

(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(shadow.remote.runtime.shared.trigger_BANG_.cljs$lang$applyTo = (function (seq33639){
var G__33640 = cljs.core.first(seq33639);
var seq33639__$1 = cljs.core.next(seq33639);
var G__33641 = cljs.core.first(seq33639__$1);
var seq33639__$2 = cljs.core.next(seq33639__$1);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33640,G__33641,seq33639__$2);
}));

shadow.remote.runtime.shared.welcome = (function shadow$remote$runtime$shared$welcome(p__33659,p__33660){
var map__33661 = p__33659;
var map__33661__$1 = cljs.core.__destructure_map(map__33661);
var runtime = map__33661__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33661__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33663 = p__33660;
var map__33663__$1 = cljs.core.__destructure_map(map__33663);
var msg = map__33663__$1;
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33663__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,cljs.core.assoc,new cljs.core.Keyword(null,"client-id","client-id",-464622140),client_id);

var map__33664 = cljs.core.deref(state_ref);
var map__33664__$1 = cljs.core.__destructure_map(map__33664);
var client_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33664__$1,new cljs.core.Keyword(null,"client-info","client-info",1958982504));
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33664__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
shadow.remote.runtime.shared.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"hello","hello",-245025397),new cljs.core.Keyword(null,"client-info","client-info",1958982504),client_info], null));

return shadow.remote.runtime.shared.trigger_BANG_(runtime,new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125));
});
shadow.remote.runtime.shared.ping = (function shadow$remote$runtime$shared$ping(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
});
shadow.remote.runtime.shared.request_supported_ops = (function shadow$remote$runtime$shared$request_supported_ops(p__33665,msg){
var map__33666 = p__33665;
var map__33666__$1 = cljs.core.__destructure_map(map__33666);
var runtime = map__33666__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33666__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"supported-ops","supported-ops",337914702),new cljs.core.Keyword(null,"ops","ops",1237330063),cljs.core.disj.cljs$core$IFn$_invoke$arity$variadic(cljs.core.set(cljs.core.keys(new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref)))),new cljs.core.Keyword(null,"welcome","welcome",-578152123),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),new cljs.core.Keyword(null,"tool-disconnect","tool-disconnect",189103996)], 0))], null));
});
shadow.remote.runtime.shared.unknown_relay_op = (function shadow$remote$runtime$shared$unknown_relay_op(msg){
return console.warn("unknown-relay-op",msg);
});
shadow.remote.runtime.shared.unknown_op = (function shadow$remote$runtime$shared$unknown_op(msg){
return console.warn("unknown-op",msg);
});
shadow.remote.runtime.shared.add_extension_STAR_ = (function shadow$remote$runtime$shared$add_extension_STAR_(p__33669,key,p__33670){
var map__33671 = p__33669;
var map__33671__$1 = cljs.core.__destructure_map(map__33671);
var state = map__33671__$1;
var extensions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33671__$1,new cljs.core.Keyword(null,"extensions","extensions",-1103629196));
var map__33672 = p__33670;
var map__33672__$1 = cljs.core.__destructure_map(map__33672);
var spec = map__33672__$1;
var ops = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33672__$1,new cljs.core.Keyword(null,"ops","ops",1237330063));
if(cljs.core.contains_QMARK_(extensions,key)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("extension already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"spec","spec",347520401),spec], null));
} else {
}

return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null)))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("op already registered",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"op","op",-1882987955),op_kw], null));
} else {
}

return cljs.core.assoc_in(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op_kw], null),op_handler);
}),cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null),spec),ops);
});
shadow.remote.runtime.shared.add_extension = (function shadow$remote$runtime$shared$add_extension(p__33675,key,spec){
var map__33676 = p__33675;
var map__33676__$1 = cljs.core.__destructure_map(map__33676);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33676__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_ref,shadow.remote.runtime.shared.add_extension_STAR_,key,spec);
});
shadow.remote.runtime.shared.add_defaults = (function shadow$remote$runtime$shared$add_defaults(runtime){
return shadow.remote.runtime.shared.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.shared","defaults","shadow.remote.runtime.shared/defaults",-1821257543),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"welcome","welcome",-578152123),(function (p1__33677_SHARP_){
return shadow.remote.runtime.shared.welcome(runtime,p1__33677_SHARP_);
}),new cljs.core.Keyword(null,"unknown-relay-op","unknown-relay-op",170832753),(function (p1__33679_SHARP_){
return shadow.remote.runtime.shared.unknown_relay_op(p1__33679_SHARP_);
}),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),(function (p1__33680_SHARP_){
return shadow.remote.runtime.shared.unknown_op(p1__33680_SHARP_);
}),new cljs.core.Keyword(null,"ping","ping",-1670114784),(function (p1__33681_SHARP_){
return shadow.remote.runtime.shared.ping(runtime,p1__33681_SHARP_);
}),new cljs.core.Keyword(null,"request-supported-ops","request-supported-ops",-1034994502),(function (p1__33682_SHARP_){
return shadow.remote.runtime.shared.request_supported_ops(runtime,p1__33682_SHARP_);
})], null)], null));
});
shadow.remote.runtime.shared.del_extension_STAR_ = (function shadow$remote$runtime$shared$del_extension_STAR_(state,key){
var ext = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extensions","extensions",-1103629196),key], null));
if(cljs.core.not(ext)){
return state;
} else {
return cljs.core.reduce_kv((function (state__$1,op_kw,op_handler){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063)], null),cljs.core.dissoc,op_kw);
}),cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"extensions","extensions",-1103629196),cljs.core.dissoc,key),new cljs.core.Keyword(null,"ops","ops",1237330063).cljs$core$IFn$_invoke$arity$1(ext));
}
});
shadow.remote.runtime.shared.del_extension = (function shadow$remote$runtime$shared$del_extension(p__33683,key){
var map__33684 = p__33683;
var map__33684__$1 = cljs.core.__destructure_map(map__33684);
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33684__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_ref,shadow.remote.runtime.shared.del_extension_STAR_,key);
});
shadow.remote.runtime.shared.unhandled_call_result = (function shadow$remote$runtime$shared$unhandled_call_result(call_config,msg){
return console.warn("unhandled call result",msg,call_config);
});
shadow.remote.runtime.shared.unhandled_client_not_found = (function shadow$remote$runtime$shared$unhandled_client_not_found(p__33686,msg){
var map__33687 = p__33686;
var map__33687__$1 = cljs.core.__destructure_map(map__33687);
var runtime = map__33687__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33687__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
return shadow.remote.runtime.shared.trigger_BANG_.cljs$core$IFn$_invoke$arity$variadic(runtime,new cljs.core.Keyword(null,"on-client-not-found","on-client-not-found",-642452849),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0));
});
shadow.remote.runtime.shared.reply_unknown_op = (function shadow$remote$runtime$shared$reply_unknown_op(runtime,msg){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"unknown-op","unknown-op",1900385996),new cljs.core.Keyword(null,"msg","msg",-1386103444),msg], null));
});
shadow.remote.runtime.shared.process = (function shadow$remote$runtime$shared$process(p__33690,p__33691){
var map__33692 = p__33690;
var map__33692__$1 = cljs.core.__destructure_map(map__33692);
var runtime = map__33692__$1;
var state_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33692__$1,new cljs.core.Keyword(null,"state-ref","state-ref",2127874952));
var map__33693 = p__33691;
var map__33693__$1 = cljs.core.__destructure_map(map__33693);
var msg = map__33693__$1;
var op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"op","op",-1882987955));
var call_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33693__$1,new cljs.core.Keyword(null,"call-id","call-id",1043012968));
var state = cljs.core.deref(state_ref);
var op_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ops","ops",1237330063),op], null));
if(cljs.core.truth_(call_id)){
var cfg = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),call_id], null));
var call_handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cfg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"handlers","handlers",79528781),op], null));
if(cljs.core.truth_(call_handler)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_ref,cljs.core.update,new cljs.core.Keyword(null,"call-handlers","call-handlers",386605551),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([call_id], 0));

return (call_handler.cljs$core$IFn$_invoke$arity$1 ? call_handler.cljs$core$IFn$_invoke$arity$1(msg) : call_handler.call(null,msg));
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
return shadow.remote.runtime.shared.unhandled_call_result(cfg,msg);

}
}
} else {
if(cljs.core.truth_(op_handler)){
return (op_handler.cljs$core$IFn$_invoke$arity$1 ? op_handler.cljs$core$IFn$_invoke$arity$1(msg) : op_handler.call(null,msg));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-not-found","client-not-found",-1754042614),op)){
return shadow.remote.runtime.shared.unhandled_client_not_found(runtime,msg);
} else {
return shadow.remote.runtime.shared.reply_unknown_op(runtime,msg);

}
}
}
});
shadow.remote.runtime.shared.run_on_idle = (function shadow$remote$runtime$shared$run_on_idle(state_ref){
var seq__33697 = cljs.core.seq(cljs.core.vals(new cljs.core.Keyword(null,"extensions","extensions",-1103629196).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_ref))));
var chunk__33699 = null;
var count__33700 = (0);
var i__33701 = (0);
while(true){
if((i__33701 < count__33700)){
var map__33706 = chunk__33699.cljs$core$IIndexed$_nth$arity$2(null,i__33701);
var map__33706__$1 = cljs.core.__destructure_map(map__33706);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33706__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33753 = seq__33697;
var G__33754 = chunk__33699;
var G__33755 = count__33700;
var G__33756 = (i__33701 + (1));
seq__33697 = G__33753;
chunk__33699 = G__33754;
count__33700 = G__33755;
i__33701 = G__33756;
continue;
} else {
var G__33757 = seq__33697;
var G__33758 = chunk__33699;
var G__33759 = count__33700;
var G__33760 = (i__33701 + (1));
seq__33697 = G__33757;
chunk__33699 = G__33758;
count__33700 = G__33759;
i__33701 = G__33760;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__33697);
if(temp__5804__auto__){
var seq__33697__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__33697__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__33697__$1);
var G__33762 = cljs.core.chunk_rest(seq__33697__$1);
var G__33763 = c__5568__auto__;
var G__33764 = cljs.core.count(c__5568__auto__);
var G__33765 = (0);
seq__33697 = G__33762;
chunk__33699 = G__33763;
count__33700 = G__33764;
i__33701 = G__33765;
continue;
} else {
var map__33710 = cljs.core.first(seq__33697__$1);
var map__33710__$1 = cljs.core.__destructure_map(map__33710);
var on_idle = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33710__$1,new cljs.core.Keyword(null,"on-idle","on-idle",2044706602));
if(cljs.core.truth_(on_idle)){
(on_idle.cljs$core$IFn$_invoke$arity$0 ? on_idle.cljs$core$IFn$_invoke$arity$0() : on_idle.call(null));


var G__33766 = cljs.core.next(seq__33697__$1);
var G__33767 = null;
var G__33768 = (0);
var G__33769 = (0);
seq__33697 = G__33766;
chunk__33699 = G__33767;
count__33700 = G__33768;
i__33701 = G__33769;
continue;
} else {
var G__33770 = cljs.core.next(seq__33697__$1);
var G__33771 = null;
var G__33772 = (0);
var G__33773 = (0);
seq__33697 = G__33770;
chunk__33699 = G__33771;
count__33700 = G__33772;
i__33701 = G__33773;
continue;
}
}
} else {
return null;
}
}
break;
}
});

//# sourceMappingURL=shadow.remote.runtime.shared.js.map
