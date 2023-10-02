goog.provide('shadow.remote.runtime.tap_support');
shadow.remote.runtime.tap_support.tap_subscribe = (function shadow$remote$runtime$tap_support$tap_subscribe(p__37075,p__37076){
var map__37077 = p__37075;
var map__37077__$1 = cljs.core.__destructure_map(map__37077);
var svc = map__37077__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37077__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37078 = p__37076;
var map__37078__$1 = cljs.core.__destructure_map(map__37078);
var msg = map__37078__$1;
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37078__$1,new cljs.core.Keyword(null,"from","from",1815293044));
var summary = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37078__$1,new cljs.core.Keyword(null,"summary","summary",380847952));
var history__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37078__$1,new cljs.core.Keyword(null,"history","history",-247395220));
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37078__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(subs_ref,cljs.core.assoc,from,msg);

if(cljs.core.truth_(history__$1)){
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-subscribed","tap-subscribed",-1882247432),new cljs.core.Keyword(null,"history","history",-247395220),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (oid){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"oid","oid",-768692334),oid,new cljs.core.Keyword(null,"summary","summary",380847952),shadow.remote.runtime.obj_support.obj_describe_STAR_(obj_support,oid)], null);
}),shadow.remote.runtime.obj_support.get_tap_history(obj_support,num)))], null));
} else {
return null;
}
});
shadow.remote.runtime.tap_support.tap_unsubscribe = (function shadow$remote$runtime$tap_support$tap_unsubscribe(p__37081,p__37082){
var map__37084 = p__37081;
var map__37084__$1 = cljs.core.__destructure_map(map__37084);
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37084__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
var map__37085 = p__37082;
var map__37085__$1 = cljs.core.__destructure_map(map__37085);
var from = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37085__$1,new cljs.core.Keyword(null,"from","from",1815293044));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,from);
});
shadow.remote.runtime.tap_support.request_tap_history = (function shadow$remote$runtime$tap_support$request_tap_history(p__37087,p__37088){
var map__37089 = p__37087;
var map__37089__$1 = cljs.core.__destructure_map(map__37089);
var obj_support = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37089__$1,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37089__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var map__37090 = p__37088;
var map__37090__$1 = cljs.core.__destructure_map(map__37090);
var msg = map__37090__$1;
var num = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37090__$1,new cljs.core.Keyword(null,"num","num",1985240673),(10));
var tap_ids = shadow.remote.runtime.obj_support.get_tap_history(obj_support,num);
return shadow.remote.runtime.shared.reply(runtime,msg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap-history","tap-history",-282803347),new cljs.core.Keyword(null,"oids","oids",-1580877688),tap_ids], null));
});
shadow.remote.runtime.tap_support.tool_disconnect = (function shadow$remote$runtime$tap_support$tool_disconnect(p__37094,tid){
var map__37096 = p__37094;
var map__37096__$1 = cljs.core.__destructure_map(map__37096);
var svc = map__37096__$1;
var subs_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37096__$1,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(subs_ref,cljs.core.dissoc,tid);
});
shadow.remote.runtime.tap_support.start = (function shadow$remote$runtime$tap_support$start(runtime,obj_support){
var subs_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var tap_fn = (function shadow$remote$runtime$tap_support$start_$_runtime_tap(obj){
if((!((obj == null)))){
var oid = shadow.remote.runtime.obj_support.register(obj_support,obj,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"tap","tap",-1086702463)], null));
var seq__37102 = cljs.core.seq(cljs.core.deref(subs_ref));
var chunk__37103 = null;
var count__37104 = (0);
var i__37105 = (0);
while(true){
if((i__37105 < count__37104)){
var vec__37130 = chunk__37103.cljs$core$IIndexed$_nth$arity$2(null,i__37105);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37130,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37178 = seq__37102;
var G__37179 = chunk__37103;
var G__37180 = count__37104;
var G__37181 = (i__37105 + (1));
seq__37102 = G__37178;
chunk__37103 = G__37179;
count__37104 = G__37180;
i__37105 = G__37181;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__37102);
if(temp__5804__auto__){
var seq__37102__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__37102__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__37102__$1);
var G__37184 = cljs.core.chunk_rest(seq__37102__$1);
var G__37185 = c__5568__auto__;
var G__37186 = cljs.core.count(c__5568__auto__);
var G__37187 = (0);
seq__37102 = G__37184;
chunk__37103 = G__37185;
count__37104 = G__37186;
i__37105 = G__37187;
continue;
} else {
var vec__37133 = cljs.core.first(seq__37102__$1);
var tid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37133,(0),null);
var tap_config = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37133,(1),null);
shadow.remote.runtime.api.relay_msg(runtime,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"tap","tap",-1086702463),new cljs.core.Keyword(null,"to","to",192099007),tid,new cljs.core.Keyword(null,"oid","oid",-768692334),oid], null));


var G__37191 = cljs.core.next(seq__37102__$1);
var G__37192 = null;
var G__37193 = (0);
var G__37194 = (0);
seq__37102 = G__37191;
chunk__37103 = G__37192;
count__37104 = G__37193;
i__37105 = G__37194;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
});
var svc = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime,new cljs.core.Keyword(null,"obj-support","obj-support",1522559229),obj_support,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461),tap_fn,new cljs.core.Keyword(null,"subs-ref","subs-ref",-1355989911),subs_ref], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tap-subscribe","tap-subscribe",411179050),(function (p1__37097_SHARP_){
return shadow.remote.runtime.tap_support.tap_subscribe(svc,p1__37097_SHARP_);
}),new cljs.core.Keyword(null,"tap-unsubscribe","tap-unsubscribe",1183890755),(function (p1__37098_SHARP_){
return shadow.remote.runtime.tap_support.tap_unsubscribe(svc,p1__37098_SHARP_);
}),new cljs.core.Keyword(null,"request-tap-history","request-tap-history",-670837812),(function (p1__37099_SHARP_){
return shadow.remote.runtime.tap_support.request_tap_history(svc,p1__37099_SHARP_);
})], null),new cljs.core.Keyword(null,"on-tool-disconnect","on-tool-disconnect",693464366),(function (p1__37100_SHARP_){
return shadow.remote.runtime.tap_support.tool_disconnect(svc,p1__37100_SHARP_);
})], null));

cljs.core.add_tap(tap_fn);

return svc;
});
shadow.remote.runtime.tap_support.stop = (function shadow$remote$runtime$tap_support$stop(p__37149){
var map__37154 = p__37149;
var map__37154__$1 = cljs.core.__destructure_map(map__37154);
var svc = map__37154__$1;
var tap_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"tap-fn","tap-fn",1573556461));
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37154__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
cljs.core.remove_tap(tap_fn);

return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.remote.runtime.tap-support","ext","shadow.remote.runtime.tap-support/ext",1019069674));
});

//# sourceMappingURL=shadow.remote.runtime.tap_support.js.map
