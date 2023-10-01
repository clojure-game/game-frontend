goog.provide('cljs.repl');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36326){
var map__36327 = p__36326;
var map__36327__$1 = cljs.core.__destructure_map(map__36327);
var m = map__36327__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36327__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5045__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return [(function (){var temp__5804__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36332_36646 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36333_36647 = null;
var count__36334_36648 = (0);
var i__36335_36649 = (0);
while(true){
if((i__36335_36649 < count__36334_36648)){
var f_36651 = chunk__36333_36647.cljs$core$IIndexed$_nth$arity$2(null,i__36335_36649);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36651], 0));


var G__36652 = seq__36332_36646;
var G__36653 = chunk__36333_36647;
var G__36654 = count__36334_36648;
var G__36655 = (i__36335_36649 + (1));
seq__36332_36646 = G__36652;
chunk__36333_36647 = G__36653;
count__36334_36648 = G__36654;
i__36335_36649 = G__36655;
continue;
} else {
var temp__5804__auto___36656 = cljs.core.seq(seq__36332_36646);
if(temp__5804__auto___36656){
var seq__36332_36658__$1 = temp__5804__auto___36656;
if(cljs.core.chunked_seq_QMARK_(seq__36332_36658__$1)){
var c__5568__auto___36659 = cljs.core.chunk_first(seq__36332_36658__$1);
var G__36660 = cljs.core.chunk_rest(seq__36332_36658__$1);
var G__36661 = c__5568__auto___36659;
var G__36662 = cljs.core.count(c__5568__auto___36659);
var G__36663 = (0);
seq__36332_36646 = G__36660;
chunk__36333_36647 = G__36661;
count__36334_36648 = G__36662;
i__36335_36649 = G__36663;
continue;
} else {
var f_36664 = cljs.core.first(seq__36332_36658__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_36664], 0));


var G__36665 = cljs.core.next(seq__36332_36658__$1);
var G__36666 = null;
var G__36667 = (0);
var G__36668 = (0);
seq__36332_36646 = G__36665;
chunk__36333_36647 = G__36666;
count__36334_36648 = G__36667;
i__36335_36649 = G__36668;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36671 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__5045__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_36671], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_36671)))?cljs.core.second(arglists_36671):arglists_36671)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__36366_36680 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36367_36681 = null;
var count__36368_36682 = (0);
var i__36369_36683 = (0);
while(true){
if((i__36369_36683 < count__36368_36682)){
var vec__36384_36685 = chunk__36367_36681.cljs$core$IIndexed$_nth$arity$2(null,i__36369_36683);
var name_36686 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36384_36685,(0),null);
var map__36387_36687 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36384_36685,(1),null);
var map__36387_36688__$1 = cljs.core.__destructure_map(map__36387_36687);
var doc_36689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36387_36688__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36690 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36387_36688__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36686], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36690], 0));

if(cljs.core.truth_(doc_36689)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36689], 0));
} else {
}


var G__36693 = seq__36366_36680;
var G__36694 = chunk__36367_36681;
var G__36695 = count__36368_36682;
var G__36696 = (i__36369_36683 + (1));
seq__36366_36680 = G__36693;
chunk__36367_36681 = G__36694;
count__36368_36682 = G__36695;
i__36369_36683 = G__36696;
continue;
} else {
var temp__5804__auto___36697 = cljs.core.seq(seq__36366_36680);
if(temp__5804__auto___36697){
var seq__36366_36698__$1 = temp__5804__auto___36697;
if(cljs.core.chunked_seq_QMARK_(seq__36366_36698__$1)){
var c__5568__auto___36701 = cljs.core.chunk_first(seq__36366_36698__$1);
var G__36702 = cljs.core.chunk_rest(seq__36366_36698__$1);
var G__36703 = c__5568__auto___36701;
var G__36704 = cljs.core.count(c__5568__auto___36701);
var G__36705 = (0);
seq__36366_36680 = G__36702;
chunk__36367_36681 = G__36703;
count__36368_36682 = G__36704;
i__36369_36683 = G__36705;
continue;
} else {
var vec__36393_36706 = cljs.core.first(seq__36366_36698__$1);
var name_36707 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36393_36706,(0),null);
var map__36396_36708 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36393_36706,(1),null);
var map__36396_36709__$1 = cljs.core.__destructure_map(map__36396_36708);
var doc_36710 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36396_36709__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36711 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36396_36709__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_36707], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_36711], 0));

if(cljs.core.truth_(doc_36710)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_36710], 0));
} else {
}


var G__36712 = cljs.core.next(seq__36366_36698__$1);
var G__36713 = null;
var G__36714 = (0);
var G__36715 = (0);
seq__36366_36680 = G__36712;
chunk__36367_36681 = G__36713;
count__36368_36682 = G__36714;
i__36369_36683 = G__36715;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5804__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5804__auto__)){
var fnspec = temp__5804__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__36398 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36399 = null;
var count__36400 = (0);
var i__36401 = (0);
while(true){
if((i__36401 < count__36400)){
var role = chunk__36399.cljs$core$IIndexed$_nth$arity$2(null,i__36401);
var temp__5804__auto___36716__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36716__$1)){
var spec_36717 = temp__5804__auto___36716__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36717)], 0));
} else {
}


var G__36718 = seq__36398;
var G__36719 = chunk__36399;
var G__36720 = count__36400;
var G__36721 = (i__36401 + (1));
seq__36398 = G__36718;
chunk__36399 = G__36719;
count__36400 = G__36720;
i__36401 = G__36721;
continue;
} else {
var temp__5804__auto____$1 = cljs.core.seq(seq__36398);
if(temp__5804__auto____$1){
var seq__36398__$1 = temp__5804__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__36398__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36398__$1);
var G__36723 = cljs.core.chunk_rest(seq__36398__$1);
var G__36724 = c__5568__auto__;
var G__36725 = cljs.core.count(c__5568__auto__);
var G__36726 = (0);
seq__36398 = G__36723;
chunk__36399 = G__36724;
count__36400 = G__36725;
i__36401 = G__36726;
continue;
} else {
var role = cljs.core.first(seq__36398__$1);
var temp__5804__auto___36728__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5804__auto___36728__$2)){
var spec_36729 = temp__5804__auto___36728__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_36729)], 0));
} else {
}


var G__36730 = cljs.core.next(seq__36398__$1);
var G__36731 = null;
var G__36732 = (0);
var G__36733 = (0);
seq__36398 = G__36730;
chunk__36399 = G__36731;
count__36400 = G__36732;
i__36401 = G__36733;
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
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol("cljs.core","ExceptionInfo","cljs.core/ExceptionInfo",701839050,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5804__auto__)){
var msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5804__auto__)){
var ed = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__36744 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__36745 = cljs.core.ex_cause(t);
via = G__36744;
t = G__36745;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5804__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5804__auto__)){
var root_msg = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5804__auto__)){
var data = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5804__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5804__auto__)){
var phase = temp__5804__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__36462 = datafied_throwable;
var map__36462__$1 = cljs.core.__destructure_map(map__36462);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36462__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36462__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__36462__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__36463 = cljs.core.last(via);
var map__36463__$1 = cljs.core.__destructure_map(map__36463);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36463__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__36464 = data;
var map__36464__$1 = cljs.core.__destructure_map(map__36464);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36464__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36464__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36464__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__36465 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__36465__$1 = cljs.core.__destructure_map(map__36465);
var top_data = map__36465__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36465__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__36469 = phase;
var G__36469__$1 = (((G__36469 instanceof cljs.core.Keyword))?G__36469.fqn:null);
switch (G__36469__$1) {
case "read-source":
var map__36479 = data;
var map__36479__$1 = cljs.core.__destructure_map(map__36479);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36479__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36479__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__36480 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__36480__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36480,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36480);
var G__36480__$2 = (cljs.core.truth_((function (){var fexpr__36488 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36488.cljs$core$IFn$_invoke$arity$1 ? fexpr__36488.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36488.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36480__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36480__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36480__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36480__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__36497 = top_data;
var G__36497__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36497,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__36497);
var G__36497__$2 = (cljs.core.truth_((function (){var fexpr__36498 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36498.cljs$core$IFn$_invoke$arity$1 ? fexpr__36498.cljs$core$IFn$_invoke$arity$1(source) : fexpr__36498.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__36497__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__36497__$1);
var G__36497__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36497__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36497__$2);
var G__36497__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36497__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36497__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36497__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36497__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__36508 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36508,(3),null);
var G__36518 = top_data;
var G__36518__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36518,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__36518);
var G__36518__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36518__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__36518__$1);
var G__36518__$3 = (cljs.core.truth_((function (){var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36518__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__36518__$2);
var G__36518__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36518__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__36518__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36518__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__36518__$4;
}

break;
case "execution":
var vec__36532 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36532,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__36443_SHARP_){
var or__5045__auto__ = (p1__36443_SHARP_ == null);
if(or__5045__auto__){
return or__5045__auto__;
} else {
var fexpr__36545 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__36545.cljs$core$IFn$_invoke$arity$1 ? fexpr__36545.cljs$core$IFn$_invoke$arity$1(p1__36443_SHARP_) : fexpr__36545.call(null,p1__36443_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__5045__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return line;
}
})();
var G__36547 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__36547__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36547,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__36547);
var G__36547__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36547__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__36547__$1);
var G__36547__$3 = (cljs.core.truth_((function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
var and__5043__auto__ = source__$1;
if(cljs.core.truth_(and__5043__auto__)){
return method;
} else {
return and__5043__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36547__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__5045__auto__ = fn;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__36547__$2);
var G__36547__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36547__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__36547__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__36547__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__36547__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36469__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__36580){
var map__36583 = p__36580;
var map__36583__$1 = cljs.core.__destructure_map(map__36583);
var triage_data = map__36583__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36583__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = source;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5045__auto__ = line;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__5045__auto__ = class$;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__36593 = phase;
var G__36593__$1 = (((G__36593 instanceof cljs.core.Keyword))?G__36593.fqn:null);
switch (G__36593__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__36594 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__36595 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36596 = loc;
var G__36597 = (cljs.core.truth_(spec)?(function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36598_36766 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36599_36767 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36600_36768 = true;
var _STAR_print_fn_STAR__temp_val__36601_36769 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36600_36768);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36601_36769);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36575_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36575_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36599_36767);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36598_36766);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36594,G__36595,G__36596,G__36597) : format.call(null,G__36594,G__36595,G__36596,G__36597));

break;
case "macroexpansion":
var G__36606 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__36607 = cause_type;
var G__36608 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36609 = loc;
var G__36610 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36606,G__36607,G__36608,G__36609,G__36610) : format.call(null,G__36606,G__36607,G__36608,G__36609,G__36610));

break;
case "compile-syntax-check":
var G__36611 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__36612 = cause_type;
var G__36613 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36614 = loc;
var G__36615 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36611,G__36612,G__36613,G__36614,G__36615) : format.call(null,G__36611,G__36612,G__36613,G__36614,G__36615));

break;
case "compilation":
var G__36617 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__36618 = cause_type;
var G__36619 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36620 = loc;
var G__36621 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36617,G__36618,G__36619,G__36620,G__36621) : format.call(null,G__36617,G__36618,G__36619,G__36620,G__36621));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__36622 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__36623 = symbol;
var G__36624 = loc;
var G__36625 = (function (){var sb__5690__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__36626_36777 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__36627_36778 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__36628_36779 = true;
var _STAR_print_fn_STAR__temp_val__36629_36780 = (function (x__5691__auto__){
return sb__5690__auto__.append(x__5691__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__36628_36779);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__36629_36780);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__36578_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__36578_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__36627_36778);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__36626_36777);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5690__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__36622,G__36623,G__36624,G__36625) : format.call(null,G__36622,G__36623,G__36624,G__36625));
} else {
var G__36632 = "Execution error%s at %s(%s).\n%s\n";
var G__36633 = cause_type;
var G__36634 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__36635 = loc;
var G__36636 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__36632,G__36633,G__36634,G__36635,G__36636) : format.call(null,G__36632,G__36633,G__36634,G__36635,G__36636));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__36593__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
