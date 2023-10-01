goog.provide('shadow.cljs.devtools.client.browser');
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___39007 = arguments.length;
var i__5770__auto___39008 = (0);
while(true){
if((i__5770__auto___39008 < len__5769__auto___39007)){
args__5775__auto__.push((arguments[i__5770__auto___39008]));

var G__39009 = (i__5770__auto___39008 + (1));
i__5770__auto___39008 = G__39009;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(shadow.cljs.devtools.client.env.log){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%cshadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
} else {
return null;
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq38470){
var G__38471 = cljs.core.first(seq38470);
var seq38470__$1 = cljs.core.next(seq38470);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38471,seq38470__$1);
}));

shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__38478 = cljs.core.seq(sources);
var chunk__38479 = null;
var count__38480 = (0);
var i__38481 = (0);
while(true){
if((i__38481 < count__38480)){
var map__38493 = chunk__38479.cljs$core$IIndexed$_nth$arity$2(null,i__38481);
var map__38493__$1 = cljs.core.__destructure_map(map__38493);
var src = map__38493__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38493__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38493__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38493__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38493__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38495){var e_39011 = e38495;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39011);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39011.message)].join('')));
}

var G__39012 = seq__38478;
var G__39013 = chunk__38479;
var G__39014 = count__38480;
var G__39015 = (i__38481 + (1));
seq__38478 = G__39012;
chunk__38479 = G__39013;
count__38480 = G__39014;
i__38481 = G__39015;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38478);
if(temp__5804__auto__){
var seq__38478__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38478__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38478__$1);
var G__39016 = cljs.core.chunk_rest(seq__38478__$1);
var G__39017 = c__5568__auto__;
var G__39018 = cljs.core.count(c__5568__auto__);
var G__39019 = (0);
seq__38478 = G__39016;
chunk__38479 = G__39017;
count__38480 = G__39018;
i__38481 = G__39019;
continue;
} else {
var map__38499 = cljs.core.first(seq__38478__$1);
var map__38499__$1 = cljs.core.__destructure_map(map__38499);
var src = map__38499__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38499__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38499__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38499__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38499__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1($CLJS.SHADOW_ENV.scriptBase),cljs.core.str.cljs$core$IFn$_invoke$arity$1(output_name)].join(''));
}catch (e38500){var e_39021 = e38500;
if(shadow.cljs.devtools.client.env.log){
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_39021);
} else {
}

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_39021.message)].join('')));
}

var G__39022 = cljs.core.next(seq__38478__$1);
var G__39023 = null;
var G__39024 = (0);
var G__39025 = (0);
seq__38478 = G__39022;
chunk__38479 = G__39023;
count__38480 = G__39024;
i__38481 = G__39025;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return null;
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__38509 = cljs.core.seq(js_requires);
var chunk__38510 = null;
var count__38511 = (0);
var i__38512 = (0);
while(true){
if((i__38512 < count__38511)){
var js_ns = chunk__38510.cljs$core$IIndexed$_nth$arity$2(null,i__38512);
var require_str_39028 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39028);


var G__39030 = seq__38509;
var G__39031 = chunk__38510;
var G__39032 = count__38511;
var G__39033 = (i__38512 + (1));
seq__38509 = G__39030;
chunk__38510 = G__39031;
count__38511 = G__39032;
i__38512 = G__39033;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38509);
if(temp__5804__auto__){
var seq__38509__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38509__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38509__$1);
var G__39034 = cljs.core.chunk_rest(seq__38509__$1);
var G__39035 = c__5568__auto__;
var G__39036 = cljs.core.count(c__5568__auto__);
var G__39037 = (0);
seq__38509 = G__39034;
chunk__38510 = G__39035;
count__38511 = G__39036;
i__38512 = G__39037;
continue;
} else {
var js_ns = cljs.core.first(seq__38509__$1);
var require_str_39039 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_39039);


var G__39041 = cljs.core.next(seq__38509__$1);
var G__39042 = null;
var G__39043 = (0);
var G__39044 = (0);
seq__38509 = G__39041;
chunk__38510 = G__39042;
count__38511 = G__39043;
i__38512 = G__39044;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(runtime,p__38517){
var map__38518 = p__38517;
var map__38518__$1 = cljs.core.__destructure_map(map__38518);
var msg = map__38518__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38518__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__5523__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38519(s__38520){
return (new cljs.core.LazySeq(null,(function (){
var s__38520__$1 = s__38520;
while(true){
var temp__5804__auto__ = cljs.core.seq(s__38520__$1);
if(temp__5804__auto__){
var xs__6360__auto__ = temp__5804__auto__;
var map__38525 = cljs.core.first(xs__6360__auto__);
var map__38525__$1 = cljs.core.__destructure_map(map__38525);
var src = map__38525__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38525__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__5519__auto__ = ((function (s__38520__$1,map__38525,map__38525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38518,map__38518__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38519_$_iter__38521(s__38522){
return (new cljs.core.LazySeq(null,((function (s__38520__$1,map__38525,map__38525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38518,map__38518__$1,msg,info,reload_info){
return (function (){
var s__38522__$1 = s__38522;
while(true){
var temp__5804__auto____$1 = cljs.core.seq(s__38522__$1);
if(temp__5804__auto____$1){
var s__38522__$2 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__38522__$2)){
var c__5521__auto__ = cljs.core.chunk_first(s__38522__$2);
var size__5522__auto__ = cljs.core.count(c__5521__auto__);
var b__38524 = cljs.core.chunk_buffer(size__5522__auto__);
if((function (){var i__38523 = (0);
while(true){
if((i__38523 < size__5522__auto__)){
var warning = cljs.core._nth(c__5521__auto__,i__38523);
cljs.core.chunk_append(b__38524,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__39048 = (i__38523 + (1));
i__38523 = G__39048;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__38524),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38519_$_iter__38521(cljs.core.chunk_rest(s__38522__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__38524),null);
}
} else {
var warning = cljs.core.first(s__38522__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38519_$_iter__38521(cljs.core.rest(s__38522__$2)));
}
} else {
return null;
}
break;
}
});})(s__38520__$1,map__38525,map__38525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38518,map__38518__$1,msg,info,reload_info))
,null,null));
});})(s__38520__$1,map__38525,map__38525__$1,src,resource_name,warnings,xs__6360__auto__,temp__5804__auto__,map__38518,map__38518__$1,msg,info,reload_info))
;
var fs__5520__auto__ = cljs.core.seq(iterys__5519__auto__(warnings));
if(fs__5520__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__5520__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__38519(cljs.core.rest(s__38520__$1)));
} else {
var G__39051 = cljs.core.rest(s__38520__$1);
s__38520__$1 = G__39051;
continue;
}
} else {
var G__39052 = cljs.core.rest(s__38520__$1);
s__38520__$1 = G__39052;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5523__auto__(new cljs.core.Keyword(null,"sources","sources",-321166424).cljs$core$IFn$_invoke$arity$1(info));
})()));
if(shadow.cljs.devtools.client.env.log){
var seq__38526_39053 = cljs.core.seq(warnings);
var chunk__38527_39054 = null;
var count__38528_39055 = (0);
var i__38529_39056 = (0);
while(true){
if((i__38529_39056 < count__38528_39055)){
var map__38532_39057 = chunk__38527_39054.cljs$core$IIndexed$_nth$arity$2(null,i__38529_39056);
var map__38532_39058__$1 = cljs.core.__destructure_map(map__38532_39057);
var w_39059 = map__38532_39058__$1;
var msg_39060__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38532_39058__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39061 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38532_39058__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39062 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38532_39058__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39063 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38532_39058__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39063)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39061),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39062),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39060__$1)].join(''));


var G__39066 = seq__38526_39053;
var G__39067 = chunk__38527_39054;
var G__39068 = count__38528_39055;
var G__39069 = (i__38529_39056 + (1));
seq__38526_39053 = G__39066;
chunk__38527_39054 = G__39067;
count__38528_39055 = G__39068;
i__38529_39056 = G__39069;
continue;
} else {
var temp__5804__auto___39070 = cljs.core.seq(seq__38526_39053);
if(temp__5804__auto___39070){
var seq__38526_39072__$1 = temp__5804__auto___39070;
if(cljs.core.chunked_seq_QMARK_(seq__38526_39072__$1)){
var c__5568__auto___39073 = cljs.core.chunk_first(seq__38526_39072__$1);
var G__39074 = cljs.core.chunk_rest(seq__38526_39072__$1);
var G__39075 = c__5568__auto___39073;
var G__39076 = cljs.core.count(c__5568__auto___39073);
var G__39077 = (0);
seq__38526_39053 = G__39074;
chunk__38527_39054 = G__39075;
count__38528_39055 = G__39076;
i__38529_39056 = G__39077;
continue;
} else {
var map__38533_39078 = cljs.core.first(seq__38526_39072__$1);
var map__38533_39079__$1 = cljs.core.__destructure_map(map__38533_39078);
var w_39080 = map__38533_39079__$1;
var msg_39081__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38533_39079__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_39082 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38533_39079__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_39083 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38533_39079__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_39084 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38533_39079__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_39084)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_39082),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_39083),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_39081__$1)].join(''));


var G__39087 = cljs.core.next(seq__38526_39072__$1);
var G__39088 = null;
var G__39089 = (0);
var G__39090 = (0);
seq__38526_39053 = G__39087;
chunk__38527_39054 = G__39088;
count__38528_39055 = G__39089;
i__38529_39056 = G__39090;
continue;
}
} else {
}
}
break;
}
} else {
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = shadow.cljs.devtools.client.env.filter_reload_sources(info,reload_info);
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.shared.load_sources(runtime,sources_to_get,(function (p1__38516_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__38516_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
var and__5043__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())));
if(and__5043__auto__){
var and__5043__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$);
if(and__5043__auto____$1){
return new$;
} else {
return and__5043__auto____$1;
}
} else {
return and__5043__auto__;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_update = (function shadow$cljs$devtools$client$browser$handle_asset_update(p__38534){
var map__38535 = p__38534;
var map__38535__$1 = cljs.core.__destructure_map(map__38535);
var msg = map__38535__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38535__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38535__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var seq__38536 = cljs.core.seq(updates);
var chunk__38538 = null;
var count__38539 = (0);
var i__38540 = (0);
while(true){
if((i__38540 < count__38539)){
var path = chunk__38538.cljs$core$IIndexed$_nth$arity$2(null,i__38540);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38749_39093 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38753_39094 = null;
var count__38754_39095 = (0);
var i__38755_39096 = (0);
while(true){
if((i__38755_39096 < count__38754_39095)){
var node_39097 = chunk__38753_39094.cljs$core$IIndexed$_nth$arity$2(null,i__38755_39096);
if(cljs.core.not(node_39097.shadow$old)){
var path_match_39098 = shadow.cljs.devtools.client.browser.match_paths(node_39097.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39098)){
var new_link_39099 = (function (){var G__38810 = node_39097.cloneNode(true);
G__38810.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39098),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38810;
})();
(node_39097.shadow$old = true);

(new_link_39099.onload = ((function (seq__38749_39093,chunk__38753_39094,count__38754_39095,i__38755_39096,seq__38536,chunk__38538,count__38539,i__38540,new_link_39099,path_match_39098,node_39097,path,map__38535,map__38535__$1,msg,updates,reload_info){
return (function (e){
var seq__38812_39100 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38815_39101 = null;
var count__38816_39102 = (0);
var i__38817_39103 = (0);
while(true){
if((i__38817_39103 < count__38816_39102)){
var map__38823_39104 = chunk__38815_39101.cljs$core$IIndexed$_nth$arity$2(null,i__38817_39103);
var map__38823_39105__$1 = cljs.core.__destructure_map(map__38823_39104);
var task_39106 = map__38823_39105__$1;
var fn_str_39107 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38823_39105__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39108 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38823_39105__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39109 = goog.getObjectByName(fn_str_39107,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39108)].join(''));

(fn_obj_39109.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39109.cljs$core$IFn$_invoke$arity$2(path,new_link_39099) : fn_obj_39109.call(null,path,new_link_39099));


var G__39110 = seq__38812_39100;
var G__39111 = chunk__38815_39101;
var G__39112 = count__38816_39102;
var G__39113 = (i__38817_39103 + (1));
seq__38812_39100 = G__39110;
chunk__38815_39101 = G__39111;
count__38816_39102 = G__39112;
i__38817_39103 = G__39113;
continue;
} else {
var temp__5804__auto___39114 = cljs.core.seq(seq__38812_39100);
if(temp__5804__auto___39114){
var seq__38812_39115__$1 = temp__5804__auto___39114;
if(cljs.core.chunked_seq_QMARK_(seq__38812_39115__$1)){
var c__5568__auto___39116 = cljs.core.chunk_first(seq__38812_39115__$1);
var G__39117 = cljs.core.chunk_rest(seq__38812_39115__$1);
var G__39118 = c__5568__auto___39116;
var G__39119 = cljs.core.count(c__5568__auto___39116);
var G__39120 = (0);
seq__38812_39100 = G__39117;
chunk__38815_39101 = G__39118;
count__38816_39102 = G__39119;
i__38817_39103 = G__39120;
continue;
} else {
var map__38825_39121 = cljs.core.first(seq__38812_39115__$1);
var map__38825_39122__$1 = cljs.core.__destructure_map(map__38825_39121);
var task_39123 = map__38825_39122__$1;
var fn_str_39124 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825_39122__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39125 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38825_39122__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39127 = goog.getObjectByName(fn_str_39124,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39125)].join(''));

(fn_obj_39127.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39127.cljs$core$IFn$_invoke$arity$2(path,new_link_39099) : fn_obj_39127.call(null,path,new_link_39099));


var G__39128 = cljs.core.next(seq__38812_39115__$1);
var G__39129 = null;
var G__39130 = (0);
var G__39131 = (0);
seq__38812_39100 = G__39128;
chunk__38815_39101 = G__39129;
count__38816_39102 = G__39130;
i__38817_39103 = G__39131;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39097);
});})(seq__38749_39093,chunk__38753_39094,count__38754_39095,i__38755_39096,seq__38536,chunk__38538,count__38539,i__38540,new_link_39099,path_match_39098,node_39097,path,map__38535,map__38535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39098], 0));

goog.dom.insertSiblingAfter(new_link_39099,node_39097);


var G__39132 = seq__38749_39093;
var G__39133 = chunk__38753_39094;
var G__39134 = count__38754_39095;
var G__39135 = (i__38755_39096 + (1));
seq__38749_39093 = G__39132;
chunk__38753_39094 = G__39133;
count__38754_39095 = G__39134;
i__38755_39096 = G__39135;
continue;
} else {
var G__39136 = seq__38749_39093;
var G__39137 = chunk__38753_39094;
var G__39138 = count__38754_39095;
var G__39139 = (i__38755_39096 + (1));
seq__38749_39093 = G__39136;
chunk__38753_39094 = G__39137;
count__38754_39095 = G__39138;
i__38755_39096 = G__39139;
continue;
}
} else {
var G__39140 = seq__38749_39093;
var G__39141 = chunk__38753_39094;
var G__39142 = count__38754_39095;
var G__39143 = (i__38755_39096 + (1));
seq__38749_39093 = G__39140;
chunk__38753_39094 = G__39141;
count__38754_39095 = G__39142;
i__38755_39096 = G__39143;
continue;
}
} else {
var temp__5804__auto___39144 = cljs.core.seq(seq__38749_39093);
if(temp__5804__auto___39144){
var seq__38749_39145__$1 = temp__5804__auto___39144;
if(cljs.core.chunked_seq_QMARK_(seq__38749_39145__$1)){
var c__5568__auto___39146 = cljs.core.chunk_first(seq__38749_39145__$1);
var G__39147 = cljs.core.chunk_rest(seq__38749_39145__$1);
var G__39148 = c__5568__auto___39146;
var G__39149 = cljs.core.count(c__5568__auto___39146);
var G__39150 = (0);
seq__38749_39093 = G__39147;
chunk__38753_39094 = G__39148;
count__38754_39095 = G__39149;
i__38755_39096 = G__39150;
continue;
} else {
var node_39151 = cljs.core.first(seq__38749_39145__$1);
if(cljs.core.not(node_39151.shadow$old)){
var path_match_39152 = shadow.cljs.devtools.client.browser.match_paths(node_39151.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39152)){
var new_link_39153 = (function (){var G__38831 = node_39151.cloneNode(true);
G__38831.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39152),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38831;
})();
(node_39151.shadow$old = true);

(new_link_39153.onload = ((function (seq__38749_39093,chunk__38753_39094,count__38754_39095,i__38755_39096,seq__38536,chunk__38538,count__38539,i__38540,new_link_39153,path_match_39152,node_39151,seq__38749_39145__$1,temp__5804__auto___39144,path,map__38535,map__38535__$1,msg,updates,reload_info){
return (function (e){
var seq__38833_39156 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38835_39157 = null;
var count__38836_39158 = (0);
var i__38837_39159 = (0);
while(true){
if((i__38837_39159 < count__38836_39158)){
var map__38844_39160 = chunk__38835_39157.cljs$core$IIndexed$_nth$arity$2(null,i__38837_39159);
var map__38844_39161__$1 = cljs.core.__destructure_map(map__38844_39160);
var task_39162 = map__38844_39161__$1;
var fn_str_39163 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38844_39161__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39164 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38844_39161__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39165 = goog.getObjectByName(fn_str_39163,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39164)].join(''));

(fn_obj_39165.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39165.cljs$core$IFn$_invoke$arity$2(path,new_link_39153) : fn_obj_39165.call(null,path,new_link_39153));


var G__39166 = seq__38833_39156;
var G__39167 = chunk__38835_39157;
var G__39168 = count__38836_39158;
var G__39169 = (i__38837_39159 + (1));
seq__38833_39156 = G__39166;
chunk__38835_39157 = G__39167;
count__38836_39158 = G__39168;
i__38837_39159 = G__39169;
continue;
} else {
var temp__5804__auto___39170__$1 = cljs.core.seq(seq__38833_39156);
if(temp__5804__auto___39170__$1){
var seq__38833_39171__$1 = temp__5804__auto___39170__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38833_39171__$1)){
var c__5568__auto___39172 = cljs.core.chunk_first(seq__38833_39171__$1);
var G__39173 = cljs.core.chunk_rest(seq__38833_39171__$1);
var G__39174 = c__5568__auto___39172;
var G__39175 = cljs.core.count(c__5568__auto___39172);
var G__39176 = (0);
seq__38833_39156 = G__39173;
chunk__38835_39157 = G__39174;
count__38836_39158 = G__39175;
i__38837_39159 = G__39176;
continue;
} else {
var map__38845_39177 = cljs.core.first(seq__38833_39171__$1);
var map__38845_39178__$1 = cljs.core.__destructure_map(map__38845_39177);
var task_39179 = map__38845_39178__$1;
var fn_str_39180 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38845_39178__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39181 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38845_39178__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39182 = goog.getObjectByName(fn_str_39180,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39181)].join(''));

(fn_obj_39182.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39182.cljs$core$IFn$_invoke$arity$2(path,new_link_39153) : fn_obj_39182.call(null,path,new_link_39153));


var G__39185 = cljs.core.next(seq__38833_39171__$1);
var G__39186 = null;
var G__39187 = (0);
var G__39188 = (0);
seq__38833_39156 = G__39185;
chunk__38835_39157 = G__39186;
count__38836_39158 = G__39187;
i__38837_39159 = G__39188;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39151);
});})(seq__38749_39093,chunk__38753_39094,count__38754_39095,i__38755_39096,seq__38536,chunk__38538,count__38539,i__38540,new_link_39153,path_match_39152,node_39151,seq__38749_39145__$1,temp__5804__auto___39144,path,map__38535,map__38535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39152], 0));

goog.dom.insertSiblingAfter(new_link_39153,node_39151);


var G__39189 = cljs.core.next(seq__38749_39145__$1);
var G__39190 = null;
var G__39191 = (0);
var G__39192 = (0);
seq__38749_39093 = G__39189;
chunk__38753_39094 = G__39190;
count__38754_39095 = G__39191;
i__38755_39096 = G__39192;
continue;
} else {
var G__39193 = cljs.core.next(seq__38749_39145__$1);
var G__39194 = null;
var G__39195 = (0);
var G__39196 = (0);
seq__38749_39093 = G__39193;
chunk__38753_39094 = G__39194;
count__38754_39095 = G__39195;
i__38755_39096 = G__39196;
continue;
}
} else {
var G__39197 = cljs.core.next(seq__38749_39145__$1);
var G__39198 = null;
var G__39199 = (0);
var G__39200 = (0);
seq__38749_39093 = G__39197;
chunk__38753_39094 = G__39198;
count__38754_39095 = G__39199;
i__38755_39096 = G__39200;
continue;
}
}
} else {
}
}
break;
}


var G__39201 = seq__38536;
var G__39202 = chunk__38538;
var G__39203 = count__38539;
var G__39204 = (i__38540 + (1));
seq__38536 = G__39201;
chunk__38538 = G__39202;
count__38539 = G__39203;
i__38540 = G__39204;
continue;
} else {
var G__39205 = seq__38536;
var G__39206 = chunk__38538;
var G__39207 = count__38539;
var G__39208 = (i__38540 + (1));
seq__38536 = G__39205;
chunk__38538 = G__39206;
count__38539 = G__39207;
i__38540 = G__39208;
continue;
}
} else {
var temp__5804__auto__ = cljs.core.seq(seq__38536);
if(temp__5804__auto__){
var seq__38536__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38536__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__38536__$1);
var G__39210 = cljs.core.chunk_rest(seq__38536__$1);
var G__39211 = c__5568__auto__;
var G__39212 = cljs.core.count(c__5568__auto__);
var G__39213 = (0);
seq__38536 = G__39210;
chunk__38538 = G__39211;
count__38539 = G__39212;
i__38540 = G__39213;
continue;
} else {
var path = cljs.core.first(seq__38536__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__38849_39214 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__38853_39215 = null;
var count__38854_39216 = (0);
var i__38855_39217 = (0);
while(true){
if((i__38855_39217 < count__38854_39216)){
var node_39218 = chunk__38853_39215.cljs$core$IIndexed$_nth$arity$2(null,i__38855_39217);
if(cljs.core.not(node_39218.shadow$old)){
var path_match_39219 = shadow.cljs.devtools.client.browser.match_paths(node_39218.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39219)){
var new_link_39220 = (function (){var G__38902 = node_39218.cloneNode(true);
G__38902.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39219),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38902;
})();
(node_39218.shadow$old = true);

(new_link_39220.onload = ((function (seq__38849_39214,chunk__38853_39215,count__38854_39216,i__38855_39217,seq__38536,chunk__38538,count__38539,i__38540,new_link_39220,path_match_39219,node_39218,path,seq__38536__$1,temp__5804__auto__,map__38535,map__38535__$1,msg,updates,reload_info){
return (function (e){
var seq__38903_39221 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38905_39222 = null;
var count__38906_39223 = (0);
var i__38907_39224 = (0);
while(true){
if((i__38907_39224 < count__38906_39223)){
var map__38913_39225 = chunk__38905_39222.cljs$core$IIndexed$_nth$arity$2(null,i__38907_39224);
var map__38913_39226__$1 = cljs.core.__destructure_map(map__38913_39225);
var task_39227 = map__38913_39226__$1;
var fn_str_39228 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913_39226__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39229 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38913_39226__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39230 = goog.getObjectByName(fn_str_39228,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39229)].join(''));

(fn_obj_39230.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39230.cljs$core$IFn$_invoke$arity$2(path,new_link_39220) : fn_obj_39230.call(null,path,new_link_39220));


var G__39231 = seq__38903_39221;
var G__39232 = chunk__38905_39222;
var G__39233 = count__38906_39223;
var G__39234 = (i__38907_39224 + (1));
seq__38903_39221 = G__39231;
chunk__38905_39222 = G__39232;
count__38906_39223 = G__39233;
i__38907_39224 = G__39234;
continue;
} else {
var temp__5804__auto___39235__$1 = cljs.core.seq(seq__38903_39221);
if(temp__5804__auto___39235__$1){
var seq__38903_39236__$1 = temp__5804__auto___39235__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38903_39236__$1)){
var c__5568__auto___39237 = cljs.core.chunk_first(seq__38903_39236__$1);
var G__39238 = cljs.core.chunk_rest(seq__38903_39236__$1);
var G__39239 = c__5568__auto___39237;
var G__39240 = cljs.core.count(c__5568__auto___39237);
var G__39241 = (0);
seq__38903_39221 = G__39238;
chunk__38905_39222 = G__39239;
count__38906_39223 = G__39240;
i__38907_39224 = G__39241;
continue;
} else {
var map__38914_39242 = cljs.core.first(seq__38903_39236__$1);
var map__38914_39243__$1 = cljs.core.__destructure_map(map__38914_39242);
var task_39244 = map__38914_39243__$1;
var fn_str_39245 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38914_39243__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39246 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38914_39243__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39247 = goog.getObjectByName(fn_str_39245,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39246)].join(''));

(fn_obj_39247.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39247.cljs$core$IFn$_invoke$arity$2(path,new_link_39220) : fn_obj_39247.call(null,path,new_link_39220));


var G__39248 = cljs.core.next(seq__38903_39236__$1);
var G__39249 = null;
var G__39250 = (0);
var G__39251 = (0);
seq__38903_39221 = G__39248;
chunk__38905_39222 = G__39249;
count__38906_39223 = G__39250;
i__38907_39224 = G__39251;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39218);
});})(seq__38849_39214,chunk__38853_39215,count__38854_39216,i__38855_39217,seq__38536,chunk__38538,count__38539,i__38540,new_link_39220,path_match_39219,node_39218,path,seq__38536__$1,temp__5804__auto__,map__38535,map__38535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39219], 0));

goog.dom.insertSiblingAfter(new_link_39220,node_39218);


var G__39253 = seq__38849_39214;
var G__39254 = chunk__38853_39215;
var G__39255 = count__38854_39216;
var G__39256 = (i__38855_39217 + (1));
seq__38849_39214 = G__39253;
chunk__38853_39215 = G__39254;
count__38854_39216 = G__39255;
i__38855_39217 = G__39256;
continue;
} else {
var G__39258 = seq__38849_39214;
var G__39259 = chunk__38853_39215;
var G__39260 = count__38854_39216;
var G__39261 = (i__38855_39217 + (1));
seq__38849_39214 = G__39258;
chunk__38853_39215 = G__39259;
count__38854_39216 = G__39260;
i__38855_39217 = G__39261;
continue;
}
} else {
var G__39262 = seq__38849_39214;
var G__39263 = chunk__38853_39215;
var G__39264 = count__38854_39216;
var G__39265 = (i__38855_39217 + (1));
seq__38849_39214 = G__39262;
chunk__38853_39215 = G__39263;
count__38854_39216 = G__39264;
i__38855_39217 = G__39265;
continue;
}
} else {
var temp__5804__auto___39267__$1 = cljs.core.seq(seq__38849_39214);
if(temp__5804__auto___39267__$1){
var seq__38849_39268__$1 = temp__5804__auto___39267__$1;
if(cljs.core.chunked_seq_QMARK_(seq__38849_39268__$1)){
var c__5568__auto___39269 = cljs.core.chunk_first(seq__38849_39268__$1);
var G__39270 = cljs.core.chunk_rest(seq__38849_39268__$1);
var G__39271 = c__5568__auto___39269;
var G__39272 = cljs.core.count(c__5568__auto___39269);
var G__39273 = (0);
seq__38849_39214 = G__39270;
chunk__38853_39215 = G__39271;
count__38854_39216 = G__39272;
i__38855_39217 = G__39273;
continue;
} else {
var node_39274 = cljs.core.first(seq__38849_39268__$1);
if(cljs.core.not(node_39274.shadow$old)){
var path_match_39275 = shadow.cljs.devtools.client.browser.match_paths(node_39274.getAttribute("href"),path);
if(cljs.core.truth_(path_match_39275)){
var new_link_39276 = (function (){var G__38923 = node_39274.cloneNode(true);
G__38923.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_39275),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__38923;
})();
(node_39274.shadow$old = true);

(new_link_39276.onload = ((function (seq__38849_39214,chunk__38853_39215,count__38854_39216,i__38855_39217,seq__38536,chunk__38538,count__38539,i__38540,new_link_39276,path_match_39275,node_39274,seq__38849_39268__$1,temp__5804__auto___39267__$1,path,seq__38536__$1,temp__5804__auto__,map__38535,map__38535__$1,msg,updates,reload_info){
return (function (e){
var seq__38924_39277 = cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"asset-load","asset-load",-1925902322)], null)));
var chunk__38926_39278 = null;
var count__38927_39279 = (0);
var i__38928_39280 = (0);
while(true){
if((i__38928_39280 < count__38927_39279)){
var map__38933_39281 = chunk__38926_39278.cljs$core$IIndexed$_nth$arity$2(null,i__38928_39280);
var map__38933_39282__$1 = cljs.core.__destructure_map(map__38933_39281);
var task_39283 = map__38933_39282__$1;
var fn_str_39284 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38933_39282__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39285 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38933_39282__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39286 = goog.getObjectByName(fn_str_39284,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39285)].join(''));

(fn_obj_39286.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39286.cljs$core$IFn$_invoke$arity$2(path,new_link_39276) : fn_obj_39286.call(null,path,new_link_39276));


var G__39287 = seq__38924_39277;
var G__39288 = chunk__38926_39278;
var G__39289 = count__38927_39279;
var G__39290 = (i__38928_39280 + (1));
seq__38924_39277 = G__39287;
chunk__38926_39278 = G__39288;
count__38927_39279 = G__39289;
i__38928_39280 = G__39290;
continue;
} else {
var temp__5804__auto___39291__$2 = cljs.core.seq(seq__38924_39277);
if(temp__5804__auto___39291__$2){
var seq__38924_39292__$1 = temp__5804__auto___39291__$2;
if(cljs.core.chunked_seq_QMARK_(seq__38924_39292__$1)){
var c__5568__auto___39293 = cljs.core.chunk_first(seq__38924_39292__$1);
var G__39294 = cljs.core.chunk_rest(seq__38924_39292__$1);
var G__39295 = c__5568__auto___39293;
var G__39296 = cljs.core.count(c__5568__auto___39293);
var G__39297 = (0);
seq__38924_39277 = G__39294;
chunk__38926_39278 = G__39295;
count__38927_39279 = G__39296;
i__38928_39280 = G__39297;
continue;
} else {
var map__38934_39298 = cljs.core.first(seq__38924_39292__$1);
var map__38934_39299__$1 = cljs.core.__destructure_map(map__38934_39298);
var task_39300 = map__38934_39299__$1;
var fn_str_39301 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934_39299__$1,new cljs.core.Keyword(null,"fn-str","fn-str",-1348506402));
var fn_sym_39302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38934_39299__$1,new cljs.core.Keyword(null,"fn-sym","fn-sym",1423988510));
var fn_obj_39303 = goog.getObjectByName(fn_str_39301,$CLJS);
shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym_39302)].join(''));

(fn_obj_39303.cljs$core$IFn$_invoke$arity$2 ? fn_obj_39303.cljs$core$IFn$_invoke$arity$2(path,new_link_39276) : fn_obj_39303.call(null,path,new_link_39276));


var G__39304 = cljs.core.next(seq__38924_39292__$1);
var G__39305 = null;
var G__39306 = (0);
var G__39307 = (0);
seq__38924_39277 = G__39304;
chunk__38926_39278 = G__39305;
count__38927_39279 = G__39306;
i__38928_39280 = G__39307;
continue;
}
} else {
}
}
break;
}

return goog.dom.removeNode(node_39274);
});})(seq__38849_39214,chunk__38853_39215,count__38854_39216,i__38855_39217,seq__38536,chunk__38538,count__38539,i__38540,new_link_39276,path_match_39275,node_39274,seq__38849_39268__$1,temp__5804__auto___39267__$1,path,seq__38536__$1,temp__5804__auto__,map__38535,map__38535__$1,msg,updates,reload_info))
);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_39275], 0));

goog.dom.insertSiblingAfter(new_link_39276,node_39274);


var G__39308 = cljs.core.next(seq__38849_39268__$1);
var G__39309 = null;
var G__39310 = (0);
var G__39311 = (0);
seq__38849_39214 = G__39308;
chunk__38853_39215 = G__39309;
count__38854_39216 = G__39310;
i__38855_39217 = G__39311;
continue;
} else {
var G__39312 = cljs.core.next(seq__38849_39268__$1);
var G__39313 = null;
var G__39314 = (0);
var G__39315 = (0);
seq__38849_39214 = G__39312;
chunk__38853_39215 = G__39313;
count__38854_39216 = G__39314;
i__38855_39217 = G__39315;
continue;
}
} else {
var G__39316 = cljs.core.next(seq__38849_39268__$1);
var G__39317 = null;
var G__39318 = (0);
var G__39319 = (0);
seq__38849_39214 = G__39316;
chunk__38853_39215 = G__39317;
count__38854_39216 = G__39318;
i__38855_39217 = G__39319;
continue;
}
}
} else {
}
}
break;
}


var G__39320 = cljs.core.next(seq__38536__$1);
var G__39321 = null;
var G__39322 = (0);
var G__39323 = (0);
seq__38536 = G__39320;
chunk__38538 = G__39321;
count__38539 = G__39322;
i__38540 = G__39323;
continue;
} else {
var G__39324 = cljs.core.next(seq__38536__$1);
var G__39325 = null;
var G__39326 = (0);
var G__39327 = (0);
seq__38536 = G__39324;
chunk__38538 = G__39325;
count__38539 = G__39326;
i__38540 = G__39327;
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
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.runtime_info = (((typeof SHADOW_CONFIG !== 'undefined'))?shadow.json.to_clj.cljs$core$IFn$_invoke$arity$1(SHADOW_CONFIG):null);
shadow.cljs.devtools.client.browser.client_info = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shadow.cljs.devtools.client.browser.runtime_info,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"host","host",-1558485167),(cljs.core.truth_(goog.global.document)?new cljs.core.Keyword(null,"browser","browser",828191719):new cljs.core.Keyword(null,"browser-worker","browser-worker",1638998282)),new cljs.core.Keyword(null,"user-agent","user-agent",1220426212),[(cljs.core.truth_(goog.userAgent.OPERA)?"Opera":(cljs.core.truth_(goog.userAgent.product.CHROME)?"Chrome":(cljs.core.truth_(goog.userAgent.IE)?"MSIE":(cljs.core.truth_(goog.userAgent.EDGE)?"Edge":(cljs.core.truth_(goog.userAgent.GECKO)?"Firefox":(cljs.core.truth_(goog.userAgent.SAFARI)?"Safari":(cljs.core.truth_(goog.userAgent.WEBKIT)?"Webkit":null)))))))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.VERSION)," [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.userAgent.PLATFORM),"]"].join(''),new cljs.core.Keyword(null,"dom","dom",-1236537922),(!((goog.global.document == null)))], null)], 0));
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_was_welcome_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_was_welcome_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
}
if(((shadow.cljs.devtools.client.env.enabled) && ((shadow.cljs.devtools.client.env.worker_client_id > (0))))){
(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$remote$runtime$api$IEvalJS$_js_eval$arity$2 = (function (this$,code){
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(code);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_invoke$arity$3 = (function (this$,ns,p__38949){
var map__38950 = p__38949;
var map__38950__$1 = cljs.core.__destructure_map(map__38950);
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38950__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var this$__$1 = this;
return shadow.cljs.devtools.client.browser.global_eval(js);
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_init$arity$4 = (function (runtime,p__38951,done,error){
var map__38952 = p__38951;
var map__38952__$1 = cljs.core.__destructure_map(map__38952);
var repl_sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38952__$1,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535));
var runtime__$1 = this;
return shadow.cljs.devtools.client.shared.load_sources(runtime__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.env.src_is_loaded_QMARK_,repl_sources)),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
}));

(shadow.cljs.devtools.client.shared.Runtime.prototype.shadow$cljs$devtools$client$shared$IHostSpecific$do_repl_require$arity$4 = (function (runtime,p__38954,done,error){
var map__38955 = p__38954;
var map__38955__$1 = cljs.core.__destructure_map(map__38955);
var msg = map__38955__$1;
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38955__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38955__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38955__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var runtime__$1 = this;
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__38957){
var map__38958 = p__38957;
var map__38958__$1 = cljs.core.__destructure_map(map__38958);
var src = map__38958__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38958__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__5043__auto__ = shadow.cljs.devtools.client.env.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__5043__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__5043__auto__;
}
}),sources));
if(cljs.core.not(cljs.core.seq(sources_to_load))){
var G__38964 = cljs.core.PersistentVector.EMPTY;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__38964) : done.call(null,G__38964));
} else {
return shadow.remote.runtime.shared.call.cljs$core$IFn$_invoke$arity$3(runtime__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"op","op",-1882987955),new cljs.core.Keyword(null,"cljs-load-sources","cljs-load-sources",-1458295962),new cljs.core.Keyword(null,"to","to",192099007),shadow.cljs.devtools.client.env.worker_client_id,new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources_to_load)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cljs-sources","cljs-sources",31121610),(function (p__38967){
var map__38968 = p__38967;
var map__38968__$1 = cljs.core.__destructure_map(map__38968);
var msg__$1 = map__38968__$1;
var sources__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38968__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(sources_to_load) : done.call(null,sources_to_load));
}catch (e38969){var ex = e38969;
return (error.cljs$core$IFn$_invoke$arity$1 ? error.cljs$core$IFn$_invoke$arity$1(ex) : error.call(null,ex));
}})], null));
}
}));

shadow.cljs.devtools.client.shared.add_plugin_BANG_(new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),cljs.core.PersistentHashSet.EMPTY,(function (p__38970){
var map__38971 = p__38970;
var map__38971__$1 = cljs.core.__destructure_map(map__38971);
var env = map__38971__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38971__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
var svc = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"runtime","runtime",-1331573996),runtime], null);
shadow.remote.runtime.api.add_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-welcome","on-welcome",1895317125),(function (){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,true);

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.env.patch_goog_BANG_();

return shadow.cljs.devtools.client.browser.devtools_msg(["#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"client-id","client-id",-464622140).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(new cljs.core.Keyword(null,"state-ref","state-ref",2127874952).cljs$core$IFn$_invoke$arity$1(runtime))))," ready!"].join(''));
}),new cljs.core.Keyword(null,"on-disconnect","on-disconnect",-809021814),(function (e){
if(cljs.core.truth_(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_was_welcome_ref))){
shadow.cljs.devtools.client.hud.connection_error("The Websocket connection was closed!");

return cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);
} else {
return null;
}
}),new cljs.core.Keyword(null,"on-reconnect","on-reconnect",1239988702),(function (e){
return shadow.cljs.devtools.client.hud.connection_error("Reconnecting ...");
}),new cljs.core.Keyword(null,"ops","ops",1237330063),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"access-denied","access-denied",959449406),(function (msg){
cljs.core.reset_BANG_(shadow.cljs.devtools.client.browser.ws_was_welcome_ref,false);

return shadow.cljs.devtools.client.hud.connection_error(["Stale Output! Your loaded JS was not produced by the running shadow-cljs instance."," Is the watch for this build running?"].join(''));
}),new cljs.core.Keyword(null,"cljs-asset-update","cljs-asset-update",1224093028),(function (msg){
return shadow.cljs.devtools.client.browser.handle_asset_update(msg);
}),new cljs.core.Keyword(null,"cljs-build-configure","cljs-build-configure",-2089891268),(function (msg){
return null;
}),new cljs.core.Keyword(null,"cljs-build-start","cljs-build-start",-725781241),(function (msg){
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-start","build-start",-959649480)));
}),new cljs.core.Keyword(null,"cljs-build-complete","cljs-build-complete",273626153),(function (msg){
var msg__$1 = shadow.cljs.devtools.client.env.add_warnings_to_info(msg);
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

shadow.cljs.devtools.client.hud.hud_warnings(msg__$1);

shadow.cljs.devtools.client.browser.handle_build_complete(runtime,msg__$1);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-complete","build-complete",-501868472)));
}),new cljs.core.Keyword(null,"cljs-build-failure","cljs-build-failure",1718154990),(function (msg){
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

return shadow.cljs.devtools.client.env.run_custom_notify_BANG_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"build-failure","build-failure",-2107487466)));
}),new cljs.core.Keyword("shadow.cljs.devtools.client.env","worker-notify","shadow.cljs.devtools.client.env/worker-notify",-1456820670),(function (p__38988){
var map__38989 = p__38988;
var map__38989__$1 = cljs.core.__destructure_map(map__38989);
var event_op = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38989__$1,new cljs.core.Keyword(null,"event-op","event-op",200358057));
var client_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38989__$1,new cljs.core.Keyword(null,"client-id","client-id",-464622140));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-disconnect","client-disconnect",640227957),event_op)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(client_id,shadow.cljs.devtools.client.env.worker_client_id)))){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was stopped!");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"client-connect","client-connect",-1113973888),event_op)){
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

return shadow.cljs.devtools.client.hud.connection_error("The watch for this build was restarted. Reload required!");
} else {
return null;
}
}
})], null)], null));

return svc;
}),(function (p__38994){
var map__38995 = p__38994;
var map__38995__$1 = cljs.core.__destructure_map(map__38995);
var svc = map__38995__$1;
var runtime = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38995__$1,new cljs.core.Keyword(null,"runtime","runtime",-1331573996));
return shadow.remote.runtime.api.del_extension(runtime,new cljs.core.Keyword("shadow.cljs.devtools.client.browser","client","shadow.cljs.devtools.client.browser/client",-1461019282));
}));

shadow.cljs.devtools.client.shared.init_runtime_BANG_(shadow.cljs.devtools.client.browser.client_info,shadow.cljs.devtools.client.websocket.start,shadow.cljs.devtools.client.websocket.send,shadow.cljs.devtools.client.websocket.stop);
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
