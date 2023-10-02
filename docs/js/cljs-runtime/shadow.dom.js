goog.provide('shadow.dom');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

var shadow$dom$IElement$_to_dom$dyn_37066 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_dom[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
});
shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
return shadow$dom$IElement$_to_dom$dyn_37066(this$);
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

var shadow$dom$SVGElement$_to_svg$dyn_37069 = (function (this$){
var x__5393__auto__ = (((this$ == null))?null:this$);
var m__5394__auto__ = (shadow.dom._to_svg[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5394__auto__.call(null,this$));
} else {
var m__5392__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5392__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
});
shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
return shadow$dom$SVGElement$_to_svg$dyn_37069(this$);
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__35901 = coll;
var G__35902 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__35901,G__35902) : shadow.dom.lazy_native_coll_seq.call(null,G__35901,G__35902));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__5045__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__35931 = arguments.length;
switch (G__35931) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__35939 = arguments.length;
switch (G__35939) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__35948 = arguments.length;
switch (G__35948) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__35956 = arguments.length;
switch (G__35956) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__35972 = arguments.length;
switch (G__35972) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
return goog.dom.contains(document,shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
return goog.dom.contains(shadow.dom.dom_node(parent),shadow.dom.dom_node(el));
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
return goog.dom.classlist.add(shadow.dom.dom_node(el),cls);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
return goog.dom.classlist.remove(shadow.dom.dom_node(el),cls);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__35983 = arguments.length;
switch (G__35983) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
return goog.dom.classlist.toggle(shadow.dom.dom_node(el),cls);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e35993){if((e35993 instanceof Object)){
var e = e35993;
return console.log("didnt support attachEvent",el,e);
} else {
throw e35993;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__5045__auto__ = (!((typeof document !== 'undefined')));
if(or__5045__auto__){
return or__5045__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__36003 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__36004 = null;
var count__36005 = (0);
var i__36006 = (0);
while(true){
if((i__36006 < count__36005)){
var el = chunk__36004.cljs$core$IIndexed$_nth$arity$2(null,i__36006);
var handler_37101__$1 = ((function (seq__36003,chunk__36004,count__36005,i__36006,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36003,chunk__36004,count__36005,i__36006,el))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37101__$1);


var G__37109 = seq__36003;
var G__37110 = chunk__36004;
var G__37111 = count__36005;
var G__37112 = (i__36006 + (1));
seq__36003 = G__37109;
chunk__36004 = G__37110;
count__36005 = G__37111;
i__36006 = G__37112;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36003);
if(temp__5804__auto__){
var seq__36003__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36003__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36003__$1);
var G__37113 = cljs.core.chunk_rest(seq__36003__$1);
var G__37114 = c__5568__auto__;
var G__37115 = cljs.core.count(c__5568__auto__);
var G__37116 = (0);
seq__36003 = G__37113;
chunk__36004 = G__37114;
count__36005 = G__37115;
i__36006 = G__37116;
continue;
} else {
var el = cljs.core.first(seq__36003__$1);
var handler_37117__$1 = ((function (seq__36003,chunk__36004,count__36005,i__36006,el,seq__36003__$1,temp__5804__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__36003,chunk__36004,count__36005,i__36006,el,seq__36003__$1,temp__5804__auto__))
;
shadow.dom.dom_listen(el,cljs.core.name(ev),handler_37117__$1);


var G__37123 = cljs.core.next(seq__36003__$1);
var G__37124 = null;
var G__37125 = (0);
var G__37126 = (0);
seq__36003 = G__37123;
chunk__36004 = G__37124;
count__36005 = G__37125;
i__36006 = G__37126;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__36018 = arguments.length;
switch (G__36018) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
return shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(ev),handler__$1);
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
return shadow.dom.dom_listen_remove(shadow.dom.dom_node(el),cljs.core.name(ev),handler);
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__36031 = cljs.core.seq(events);
var chunk__36032 = null;
var count__36033 = (0);
var i__36034 = (0);
while(true){
if((i__36034 < count__36033)){
var vec__36052 = chunk__36032.cljs$core$IIndexed$_nth$arity$2(null,i__36034);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36052,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37136 = seq__36031;
var G__37137 = chunk__36032;
var G__37138 = count__36033;
var G__37139 = (i__36034 + (1));
seq__36031 = G__37136;
chunk__36032 = G__37137;
count__36033 = G__37138;
i__36034 = G__37139;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36031);
if(temp__5804__auto__){
var seq__36031__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36031__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36031__$1);
var G__37140 = cljs.core.chunk_rest(seq__36031__$1);
var G__37141 = c__5568__auto__;
var G__37142 = cljs.core.count(c__5568__auto__);
var G__37143 = (0);
seq__36031 = G__37140;
chunk__36032 = G__37141;
count__36033 = G__37142;
i__36034 = G__37143;
continue;
} else {
var vec__36058 = cljs.core.first(seq__36031__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36058,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__37145 = cljs.core.next(seq__36031__$1);
var G__37146 = null;
var G__37147 = (0);
var G__37148 = (0);
seq__36031 = G__37145;
chunk__36032 = G__37146;
count__36033 = G__37147;
i__36034 = G__37148;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__36069 = cljs.core.seq(styles);
var chunk__36070 = null;
var count__36071 = (0);
var i__36072 = (0);
while(true){
if((i__36072 < count__36071)){
var vec__36083 = chunk__36070.cljs$core$IIndexed$_nth$arity$2(null,i__36072);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36083,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37150 = seq__36069;
var G__37151 = chunk__36070;
var G__37152 = count__36071;
var G__37153 = (i__36072 + (1));
seq__36069 = G__37150;
chunk__36070 = G__37151;
count__36071 = G__37152;
i__36072 = G__37153;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36069);
if(temp__5804__auto__){
var seq__36069__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36069__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36069__$1);
var G__37155 = cljs.core.chunk_rest(seq__36069__$1);
var G__37156 = c__5568__auto__;
var G__37157 = cljs.core.count(c__5568__auto__);
var G__37158 = (0);
seq__36069 = G__37155;
chunk__36070 = G__37156;
count__36071 = G__37157;
i__36072 = G__37158;
continue;
} else {
var vec__36086 = cljs.core.first(seq__36069__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36086,(1),null);
goog.style.setStyle(dom,cljs.core.name(k),(((v == null))?"":v));


var G__37162 = cljs.core.next(seq__36069__$1);
var G__37163 = null;
var G__37164 = (0);
var G__37165 = (0);
seq__36069 = G__37162;
chunk__36070 = G__37163;
count__36071 = G__37164;
i__36072 = G__37165;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__36095_37166 = key;
var G__36095_37167__$1 = (((G__36095_37166 instanceof cljs.core.Keyword))?G__36095_37166.fqn:null);
switch (G__36095_37167__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_37174 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__5045__auto__ = goog.string.startsWith(ks_37174,"data-");
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return goog.string.startsWith(ks_37174,"aria-");
}
})())){
el.setAttribute(ks_37174,value);
} else {
(el[ks_37174] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
return goog.dom.classlist.contains(shadow.dom.dom_node(el),cls);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__36122){
var map__36123 = p__36122;
var map__36123__$1 = cljs.core.__destructure_map(map__36123);
var props = map__36123__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36123__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__36126 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36126,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36126,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36126,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__36132 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__36132,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__36132;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__36138 = arguments.length;
switch (G__36138) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5804__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5804__auto__)){
var n = temp__5804__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__36148){
var vec__36149 = p__36148;
var seq__36150 = cljs.core.seq(vec__36149);
var first__36151 = cljs.core.first(seq__36150);
var seq__36150__$1 = cljs.core.next(seq__36150);
var nn = first__36151;
var first__36151__$1 = cljs.core.first(seq__36150__$1);
var seq__36150__$2 = cljs.core.next(seq__36150__$1);
var np = first__36151__$1;
var nc = seq__36150__$2;
var node = vec__36149;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36155 = nn;
var G__36156 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36155,G__36156) : create_fn.call(null,G__36155,G__36156));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__36158 = nn;
var G__36159 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__36158,G__36159) : create_fn.call(null,G__36158,G__36159));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__36162 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36162,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36162,(1),null);
var seq__36167_37205 = cljs.core.seq(node_children);
var chunk__36168_37206 = null;
var count__36169_37207 = (0);
var i__36170_37208 = (0);
while(true){
if((i__36170_37208 < count__36169_37207)){
var child_struct_37209 = chunk__36168_37206.cljs$core$IIndexed$_nth$arity$2(null,i__36170_37208);
var children_37210 = shadow.dom.dom_node(child_struct_37209);
if(cljs.core.seq_QMARK_(children_37210)){
var seq__36219_37211 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37210));
var chunk__36221_37212 = null;
var count__36222_37213 = (0);
var i__36223_37214 = (0);
while(true){
if((i__36223_37214 < count__36222_37213)){
var child_37215 = chunk__36221_37212.cljs$core$IIndexed$_nth$arity$2(null,i__36223_37214);
if(cljs.core.truth_(child_37215)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37215);


var G__37216 = seq__36219_37211;
var G__37217 = chunk__36221_37212;
var G__37218 = count__36222_37213;
var G__37219 = (i__36223_37214 + (1));
seq__36219_37211 = G__37216;
chunk__36221_37212 = G__37217;
count__36222_37213 = G__37218;
i__36223_37214 = G__37219;
continue;
} else {
var G__37220 = seq__36219_37211;
var G__37221 = chunk__36221_37212;
var G__37222 = count__36222_37213;
var G__37223 = (i__36223_37214 + (1));
seq__36219_37211 = G__37220;
chunk__36221_37212 = G__37221;
count__36222_37213 = G__37222;
i__36223_37214 = G__37223;
continue;
}
} else {
var temp__5804__auto___37224 = cljs.core.seq(seq__36219_37211);
if(temp__5804__auto___37224){
var seq__36219_37225__$1 = temp__5804__auto___37224;
if(cljs.core.chunked_seq_QMARK_(seq__36219_37225__$1)){
var c__5568__auto___37226 = cljs.core.chunk_first(seq__36219_37225__$1);
var G__37227 = cljs.core.chunk_rest(seq__36219_37225__$1);
var G__37228 = c__5568__auto___37226;
var G__37229 = cljs.core.count(c__5568__auto___37226);
var G__37230 = (0);
seq__36219_37211 = G__37227;
chunk__36221_37212 = G__37228;
count__36222_37213 = G__37229;
i__36223_37214 = G__37230;
continue;
} else {
var child_37231 = cljs.core.first(seq__36219_37225__$1);
if(cljs.core.truth_(child_37231)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37231);


var G__37232 = cljs.core.next(seq__36219_37225__$1);
var G__37233 = null;
var G__37234 = (0);
var G__37235 = (0);
seq__36219_37211 = G__37232;
chunk__36221_37212 = G__37233;
count__36222_37213 = G__37234;
i__36223_37214 = G__37235;
continue;
} else {
var G__37236 = cljs.core.next(seq__36219_37225__$1);
var G__37237 = null;
var G__37238 = (0);
var G__37239 = (0);
seq__36219_37211 = G__37236;
chunk__36221_37212 = G__37237;
count__36222_37213 = G__37238;
i__36223_37214 = G__37239;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37210);
}


var G__37240 = seq__36167_37205;
var G__37241 = chunk__36168_37206;
var G__37242 = count__36169_37207;
var G__37243 = (i__36170_37208 + (1));
seq__36167_37205 = G__37240;
chunk__36168_37206 = G__37241;
count__36169_37207 = G__37242;
i__36170_37208 = G__37243;
continue;
} else {
var temp__5804__auto___37244 = cljs.core.seq(seq__36167_37205);
if(temp__5804__auto___37244){
var seq__36167_37245__$1 = temp__5804__auto___37244;
if(cljs.core.chunked_seq_QMARK_(seq__36167_37245__$1)){
var c__5568__auto___37246 = cljs.core.chunk_first(seq__36167_37245__$1);
var G__37247 = cljs.core.chunk_rest(seq__36167_37245__$1);
var G__37248 = c__5568__auto___37246;
var G__37249 = cljs.core.count(c__5568__auto___37246);
var G__37250 = (0);
seq__36167_37205 = G__37247;
chunk__36168_37206 = G__37248;
count__36169_37207 = G__37249;
i__36170_37208 = G__37250;
continue;
} else {
var child_struct_37251 = cljs.core.first(seq__36167_37245__$1);
var children_37252 = shadow.dom.dom_node(child_struct_37251);
if(cljs.core.seq_QMARK_(children_37252)){
var seq__36234_37253 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_37252));
var chunk__36236_37254 = null;
var count__36237_37255 = (0);
var i__36238_37256 = (0);
while(true){
if((i__36238_37256 < count__36237_37255)){
var child_37257 = chunk__36236_37254.cljs$core$IIndexed$_nth$arity$2(null,i__36238_37256);
if(cljs.core.truth_(child_37257)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37257);


var G__37258 = seq__36234_37253;
var G__37259 = chunk__36236_37254;
var G__37260 = count__36237_37255;
var G__37261 = (i__36238_37256 + (1));
seq__36234_37253 = G__37258;
chunk__36236_37254 = G__37259;
count__36237_37255 = G__37260;
i__36238_37256 = G__37261;
continue;
} else {
var G__37262 = seq__36234_37253;
var G__37263 = chunk__36236_37254;
var G__37264 = count__36237_37255;
var G__37265 = (i__36238_37256 + (1));
seq__36234_37253 = G__37262;
chunk__36236_37254 = G__37263;
count__36237_37255 = G__37264;
i__36238_37256 = G__37265;
continue;
}
} else {
var temp__5804__auto___37266__$1 = cljs.core.seq(seq__36234_37253);
if(temp__5804__auto___37266__$1){
var seq__36234_37267__$1 = temp__5804__auto___37266__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36234_37267__$1)){
var c__5568__auto___37268 = cljs.core.chunk_first(seq__36234_37267__$1);
var G__37269 = cljs.core.chunk_rest(seq__36234_37267__$1);
var G__37270 = c__5568__auto___37268;
var G__37271 = cljs.core.count(c__5568__auto___37268);
var G__37272 = (0);
seq__36234_37253 = G__37269;
chunk__36236_37254 = G__37270;
count__36237_37255 = G__37271;
i__36238_37256 = G__37272;
continue;
} else {
var child_37273 = cljs.core.first(seq__36234_37267__$1);
if(cljs.core.truth_(child_37273)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_37273);


var G__37274 = cljs.core.next(seq__36234_37267__$1);
var G__37275 = null;
var G__37276 = (0);
var G__37277 = (0);
seq__36234_37253 = G__37274;
chunk__36236_37254 = G__37275;
count__36237_37255 = G__37276;
i__36238_37256 = G__37277;
continue;
} else {
var G__37278 = cljs.core.next(seq__36234_37267__$1);
var G__37279 = null;
var G__37280 = (0);
var G__37281 = (0);
seq__36234_37253 = G__37278;
chunk__36236_37254 = G__37279;
count__36237_37255 = G__37280;
i__36238_37256 = G__37281;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_37252);
}


var G__37282 = cljs.core.next(seq__36167_37245__$1);
var G__37283 = null;
var G__37284 = (0);
var G__37285 = (0);
seq__36167_37205 = G__37282;
chunk__36168_37206 = G__37283;
count__36169_37207 = G__37284;
i__36170_37208 = G__37285;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
return goog.dom.removeChildren(shadow.dom.dom_node(node));
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__36265 = cljs.core.seq(node);
var chunk__36266 = null;
var count__36267 = (0);
var i__36268 = (0);
while(true){
if((i__36268 < count__36267)){
var n = chunk__36266.cljs$core$IIndexed$_nth$arity$2(null,i__36268);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37286 = seq__36265;
var G__37287 = chunk__36266;
var G__37288 = count__36267;
var G__37289 = (i__36268 + (1));
seq__36265 = G__37286;
chunk__36266 = G__37287;
count__36267 = G__37288;
i__36268 = G__37289;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36265);
if(temp__5804__auto__){
var seq__36265__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36265__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36265__$1);
var G__37290 = cljs.core.chunk_rest(seq__36265__$1);
var G__37291 = c__5568__auto__;
var G__37292 = cljs.core.count(c__5568__auto__);
var G__37293 = (0);
seq__36265 = G__37290;
chunk__36266 = G__37291;
count__36267 = G__37292;
i__36268 = G__37293;
continue;
} else {
var n = cljs.core.first(seq__36265__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__37294 = cljs.core.next(seq__36265__$1);
var G__37295 = null;
var G__37296 = (0);
var G__37297 = (0);
seq__36265 = G__37294;
chunk__36266 = G__37295;
count__36267 = G__37296;
i__36268 = G__37297;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
return goog.dom.replaceNode(shadow.dom.dom_node(new$),shadow.dom.dom_node(old));
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__36285 = arguments.length;
switch (G__36285) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__36290 = arguments.length;
switch (G__36290) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__36297 = arguments.length;
switch (G__36297) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__5045__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37301 = arguments.length;
var i__5770__auto___37302 = (0);
while(true){
if((i__5770__auto___37302 < len__5769__auto___37301)){
args__5775__auto__.push((arguments[i__5770__auto___37302]));

var G__37303 = (i__5770__auto___37302 + (1));
i__5770__auto___37302 = G__37303;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((0) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__5776__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__36318_37305 = cljs.core.seq(nodes);
var chunk__36319_37306 = null;
var count__36320_37307 = (0);
var i__36321_37308 = (0);
while(true){
if((i__36321_37308 < count__36320_37307)){
var node_37309 = chunk__36319_37306.cljs$core$IIndexed$_nth$arity$2(null,i__36321_37308);
fragment.appendChild(shadow.dom._to_dom(node_37309));


var G__37310 = seq__36318_37305;
var G__37311 = chunk__36319_37306;
var G__37312 = count__36320_37307;
var G__37313 = (i__36321_37308 + (1));
seq__36318_37305 = G__37310;
chunk__36319_37306 = G__37311;
count__36320_37307 = G__37312;
i__36321_37308 = G__37313;
continue;
} else {
var temp__5804__auto___37314 = cljs.core.seq(seq__36318_37305);
if(temp__5804__auto___37314){
var seq__36318_37315__$1 = temp__5804__auto___37314;
if(cljs.core.chunked_seq_QMARK_(seq__36318_37315__$1)){
var c__5568__auto___37316 = cljs.core.chunk_first(seq__36318_37315__$1);
var G__37317 = cljs.core.chunk_rest(seq__36318_37315__$1);
var G__37318 = c__5568__auto___37316;
var G__37319 = cljs.core.count(c__5568__auto___37316);
var G__37320 = (0);
seq__36318_37305 = G__37317;
chunk__36319_37306 = G__37318;
count__36320_37307 = G__37319;
i__36321_37308 = G__37320;
continue;
} else {
var node_37321 = cljs.core.first(seq__36318_37315__$1);
fragment.appendChild(shadow.dom._to_dom(node_37321));


var G__37322 = cljs.core.next(seq__36318_37315__$1);
var G__37323 = null;
var G__37324 = (0);
var G__37325 = (0);
seq__36318_37305 = G__37322;
chunk__36319_37306 = G__37323;
count__36320_37307 = G__37324;
i__36321_37308 = G__37325;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq36315){
var self__5755__auto__ = this;
return self__5755__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq36315));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__36337_37326 = cljs.core.seq(scripts);
var chunk__36338_37327 = null;
var count__36339_37328 = (0);
var i__36340_37329 = (0);
while(true){
if((i__36340_37329 < count__36339_37328)){
var vec__36352_37330 = chunk__36338_37327.cljs$core$IIndexed$_nth$arity$2(null,i__36340_37329);
var script_tag_37331 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36352_37330,(0),null);
var script_body_37332 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36352_37330,(1),null);
eval(script_body_37332);


var G__37333 = seq__36337_37326;
var G__37334 = chunk__36338_37327;
var G__37335 = count__36339_37328;
var G__37336 = (i__36340_37329 + (1));
seq__36337_37326 = G__37333;
chunk__36338_37327 = G__37334;
count__36339_37328 = G__37335;
i__36340_37329 = G__37336;
continue;
} else {
var temp__5804__auto___37337 = cljs.core.seq(seq__36337_37326);
if(temp__5804__auto___37337){
var seq__36337_37338__$1 = temp__5804__auto___37337;
if(cljs.core.chunked_seq_QMARK_(seq__36337_37338__$1)){
var c__5568__auto___37339 = cljs.core.chunk_first(seq__36337_37338__$1);
var G__37340 = cljs.core.chunk_rest(seq__36337_37338__$1);
var G__37341 = c__5568__auto___37339;
var G__37342 = cljs.core.count(c__5568__auto___37339);
var G__37343 = (0);
seq__36337_37326 = G__37340;
chunk__36338_37327 = G__37341;
count__36339_37328 = G__37342;
i__36340_37329 = G__37343;
continue;
} else {
var vec__36355_37344 = cljs.core.first(seq__36337_37338__$1);
var script_tag_37345 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36355_37344,(0),null);
var script_body_37346 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36355_37344,(1),null);
eval(script_body_37346);


var G__37347 = cljs.core.next(seq__36337_37338__$1);
var G__37348 = null;
var G__37349 = (0);
var G__37350 = (0);
seq__36337_37326 = G__37347;
chunk__36338_37327 = G__37348;
count__36339_37328 = G__37349;
i__36340_37329 = G__37350;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__36360){
var vec__36362 = p__36360;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36362,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36362,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
return goog.dom.getAncestorByClass(shadow.dom.dom_node(el),cls);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__36390 = arguments.length;
switch (G__36390) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag));
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
return goog.dom.getAncestorByTagNameAndClass(shadow.dom.dom_node(el),cljs.core.name(tag),cljs.core.name(cls));
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
return goog.dom.forms.getValue(shadow.dom.dom_node(dom));
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
return goog.dom.forms.setValue(shadow.dom.dom_node(dom),value);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__36414 = cljs.core.seq(style_keys);
var chunk__36415 = null;
var count__36416 = (0);
var i__36417 = (0);
while(true){
if((i__36417 < count__36416)){
var it = chunk__36415.cljs$core$IIndexed$_nth$arity$2(null,i__36417);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37353 = seq__36414;
var G__37354 = chunk__36415;
var G__37355 = count__36416;
var G__37356 = (i__36417 + (1));
seq__36414 = G__37353;
chunk__36415 = G__37354;
count__36416 = G__37355;
i__36417 = G__37356;
continue;
} else {
var temp__5804__auto__ = cljs.core.seq(seq__36414);
if(temp__5804__auto__){
var seq__36414__$1 = temp__5804__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__36414__$1)){
var c__5568__auto__ = cljs.core.chunk_first(seq__36414__$1);
var G__37357 = cljs.core.chunk_rest(seq__36414__$1);
var G__37358 = c__5568__auto__;
var G__37359 = cljs.core.count(c__5568__auto__);
var G__37360 = (0);
seq__36414 = G__37357;
chunk__36415 = G__37358;
count__36416 = G__37359;
i__36417 = G__37360;
continue;
} else {
var it = cljs.core.first(seq__36414__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__37361 = cljs.core.next(seq__36414__$1);
var G__37362 = null;
var G__37363 = (0);
var G__37364 = (0);
seq__36414 = G__37361;
chunk__36415 = G__37362;
count__36416 = G__37363;
i__36417 = G__37364;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36426,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36435 = k36426;
var G__36435__$1 = (((G__36435 instanceof cljs.core.Keyword))?G__36435.fqn:null);
switch (G__36435__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36426,else__5346__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36449){
var vec__36459 = p__36449;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36459,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36459,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Coordinate{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36425){
var self__ = this;
var G__36425__$1 = this;
return (new cljs.core.RecordIter((0),G__36425__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36427,other36428){
var self__ = this;
var this36427__$1 = this;
return (((!((other36428 == null)))) && ((((this36427__$1.constructor === other36428.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36427__$1.x,other36428.x)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36427__$1.y,other36428.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36427__$1.__extmap,other36428.__extmap)))))))));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36426){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36531 = k36426;
var G__36531__$1 = (((G__36531 instanceof cljs.core.Keyword))?G__36531.fqn:null);
switch (G__36531__$1) {
case "x":
case "y":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36426);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36425){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36542 = cljs.core.keyword_identical_QMARK_;
var expr__36543 = k__5352__auto__;
if(cljs.core.truth_((pred__36542.cljs$core$IFn$_invoke$arity$2 ? pred__36542.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),expr__36543) : pred__36542.call(null,new cljs.core.Keyword(null,"x","x",2099068185),expr__36543)))){
return (new shadow.dom.Coordinate(G__36425,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36542.cljs$core$IFn$_invoke$arity$2 ? pred__36542.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),expr__36543) : pred__36542.call(null,new cljs.core.Keyword(null,"y","y",-1757859776),expr__36543)))){
return (new shadow.dom.Coordinate(self__.x,G__36425,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36425),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36425){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__36425,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__36431){
var extmap__5385__auto__ = (function (){var G__36576 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36431,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__36431)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36576);
} else {
return G__36576;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__36431),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__36431),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = goog.style.getPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = goog.style.getClientPosition(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = goog.style.getPageOffset(shadow.dom.dom_node(el));
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__5343__auto__,k__5344__auto__){
var self__ = this;
var this__5343__auto____$1 = this;
return this__5343__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__5344__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__5345__auto__,k36603,else__5346__auto__){
var self__ = this;
var this__5345__auto____$1 = this;
var G__36631 = k36603;
var G__36631__$1 = (((G__36631 instanceof cljs.core.Keyword))?G__36631.fqn:null);
switch (G__36631__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k36603,else__5346__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__5363__auto__,f__5364__auto__,init__5365__auto__){
var self__ = this;
var this__5363__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__5366__auto__,p__36638){
var vec__36639 = p__36638;
var k__5367__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(0),null);
var v__5368__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36639,(1),null);
return (f__5364__auto__.cljs$core$IFn$_invoke$arity$3 ? f__5364__auto__.cljs$core$IFn$_invoke$arity$3(ret__5366__auto__,k__5367__auto__,v__5368__auto__) : f__5364__auto__.call(null,ret__5366__auto__,k__5367__auto__,v__5368__auto__));
}),init__5365__auto__,this__5363__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__5358__auto__,writer__5359__auto__,opts__5360__auto__){
var self__ = this;
var this__5358__auto____$1 = this;
var pr_pair__5361__auto__ = (function (keyval__5362__auto__){
return cljs.core.pr_sequential_writer(writer__5359__auto__,cljs.core.pr_writer,""," ","",opts__5360__auto__,keyval__5362__auto__);
});
return cljs.core.pr_sequential_writer(writer__5359__auto__,pr_pair__5361__auto__,"#shadow.dom.Size{",", ","}",opts__5360__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__36602){
var self__ = this;
var G__36602__$1 = this;
return (new cljs.core.RecordIter((0),G__36602__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__5341__auto__){
var self__ = this;
var this__5341__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__5338__auto__){
var self__ = this;
var this__5338__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__5347__auto__){
var self__ = this;
var this__5347__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__5339__auto__){
var self__ = this;
var this__5339__auto____$1 = this;
var h__5154__auto__ = self__.__hash;
if((!((h__5154__auto__ == null)))){
return h__5154__auto__;
} else {
var h__5154__auto____$1 = (function (coll__5340__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__5340__auto__));
})(this__5339__auto____$1);
(self__.__hash = h__5154__auto____$1);

return h__5154__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this36604,other36605){
var self__ = this;
var this36604__$1 = this;
return (((!((other36605 == null)))) && ((((this36604__$1.constructor === other36605.constructor)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36604__$1.w,other36605.w)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36604__$1.h,other36605.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this36604__$1.__extmap,other36605.__extmap)))))))));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__5353__auto__,k__5354__auto__){
var self__ = this;
var this__5353__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__5354__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__5353__auto____$1),self__.__meta),k__5354__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__5354__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_contains_key_QMARK_$arity$2 = (function (this__5350__auto__,k36603){
var self__ = this;
var this__5350__auto____$1 = this;
var G__36746 = k36603;
var G__36746__$1 = (((G__36746 instanceof cljs.core.Keyword))?G__36746.fqn:null);
switch (G__36746__$1) {
case "w":
case "h":
return true;

break;
default:
return cljs.core.contains_QMARK_(self__.__extmap,k36603);

}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__5351__auto__,k__5352__auto__,G__36602){
var self__ = this;
var this__5351__auto____$1 = this;
var pred__36749 = cljs.core.keyword_identical_QMARK_;
var expr__36750 = k__5352__auto__;
if(cljs.core.truth_((pred__36749.cljs$core$IFn$_invoke$arity$2 ? pred__36749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"w","w",354169001),expr__36750) : pred__36749.call(null,new cljs.core.Keyword(null,"w","w",354169001),expr__36750)))){
return (new shadow.dom.Size(G__36602,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((pred__36749.cljs$core$IFn$_invoke$arity$2 ? pred__36749.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"h","h",1109658740),expr__36750) : pred__36749.call(null,new cljs.core.Keyword(null,"h","h",1109658740),expr__36750)))){
return (new shadow.dom.Size(self__.w,G__36602,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__5352__auto__,G__36602),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__5356__auto__){
var self__ = this;
var this__5356__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__5342__auto__,G__36602){
var self__ = this;
var this__5342__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__36602,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__5348__auto__,entry__5349__auto__){
var self__ = this;
var this__5348__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__5349__auto__)){
return this__5348__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth(entry__5349__auto__,(0)),cljs.core._nth(entry__5349__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__5348__auto____$1,entry__5349__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__5389__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__5389__auto__,writer__5390__auto__){
return cljs.core._write(writer__5390__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__36616){
var extmap__5385__auto__ = (function (){var G__36756 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__36616,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__36616)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__36756);
} else {
return G__36756;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__36616),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__36616),null,cljs.core.not_empty(extmap__5385__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj(goog.style.getSize(shadow.dom.dom_node(el)));
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__5633__auto__ = opts;
var l__5634__auto__ = a__5633__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__5634__auto__)){
var G__37392 = (i + (1));
var G__37393 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__37392;
ret = G__37393;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__36789){
var vec__36790 = p__36789;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36790,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36790,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__36798 = arguments.length;
switch (G__36798) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingAfter(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
goog.dom.insertSiblingBefore(new_node,shadow.dom.dom_node(ref));

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5802__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5802__auto__)){
var child = temp__5802__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__37402 = ps;
var G__37403 = (i + (1));
el__$1 = G__37402;
i = G__37403;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
return goog.dom.getParentElement(shadow.dom.dom_node(el));
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
return goog.dom.getNextElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
return goog.dom.getPreviousElementSibling(shadow.dom.dom_node(el));
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__36858 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36858,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__36865_37405 = cljs.core.seq(props);
var chunk__36866_37406 = null;
var count__36867_37407 = (0);
var i__36868_37408 = (0);
while(true){
if((i__36868_37408 < count__36867_37407)){
var vec__36887_37409 = chunk__36866_37406.cljs$core$IIndexed$_nth$arity$2(null,i__36868_37408);
var k_37410 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887_37409,(0),null);
var v_37411 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36887_37409,(1),null);
el.setAttributeNS((function (){var temp__5804__auto__ = cljs.core.namespace(k_37410);
if(cljs.core.truth_(temp__5804__auto__)){
var ns = temp__5804__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37410),v_37411);


var G__37415 = seq__36865_37405;
var G__37416 = chunk__36866_37406;
var G__37417 = count__36867_37407;
var G__37418 = (i__36868_37408 + (1));
seq__36865_37405 = G__37415;
chunk__36866_37406 = G__37416;
count__36867_37407 = G__37417;
i__36868_37408 = G__37418;
continue;
} else {
var temp__5804__auto___37419 = cljs.core.seq(seq__36865_37405);
if(temp__5804__auto___37419){
var seq__36865_37420__$1 = temp__5804__auto___37419;
if(cljs.core.chunked_seq_QMARK_(seq__36865_37420__$1)){
var c__5568__auto___37421 = cljs.core.chunk_first(seq__36865_37420__$1);
var G__37422 = cljs.core.chunk_rest(seq__36865_37420__$1);
var G__37423 = c__5568__auto___37421;
var G__37424 = cljs.core.count(c__5568__auto___37421);
var G__37425 = (0);
seq__36865_37405 = G__37422;
chunk__36866_37406 = G__37423;
count__36867_37407 = G__37424;
i__36868_37408 = G__37425;
continue;
} else {
var vec__36893_37426 = cljs.core.first(seq__36865_37420__$1);
var k_37427 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893_37426,(0),null);
var v_37428 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36893_37426,(1),null);
el.setAttributeNS((function (){var temp__5804__auto____$1 = cljs.core.namespace(k_37427);
if(cljs.core.truth_(temp__5804__auto____$1)){
var ns = temp__5804__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_37427),v_37428);


var G__37429 = cljs.core.next(seq__36865_37420__$1);
var G__37430 = null;
var G__37431 = (0);
var G__37432 = (0);
seq__36865_37405 = G__37429;
chunk__36866_37406 = G__37430;
count__36867_37407 = G__37431;
i__36868_37408 = G__37432;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__36910 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36910,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__36910,(1),null);
var seq__36915_37434 = cljs.core.seq(node_children);
var chunk__36917_37435 = null;
var count__36918_37436 = (0);
var i__36919_37437 = (0);
while(true){
if((i__36919_37437 < count__36918_37436)){
var child_struct_37438 = chunk__36917_37435.cljs$core$IIndexed$_nth$arity$2(null,i__36919_37437);
if((!((child_struct_37438 == null)))){
if(typeof child_struct_37438 === 'string'){
var text_37439 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37439),child_struct_37438].join(''));
} else {
var children_37440 = shadow.dom.svg_node(child_struct_37438);
if(cljs.core.seq_QMARK_(children_37440)){
var seq__36975_37441 = cljs.core.seq(children_37440);
var chunk__36977_37442 = null;
var count__36978_37443 = (0);
var i__36979_37444 = (0);
while(true){
if((i__36979_37444 < count__36978_37443)){
var child_37445 = chunk__36977_37442.cljs$core$IIndexed$_nth$arity$2(null,i__36979_37444);
if(cljs.core.truth_(child_37445)){
node.appendChild(child_37445);


var G__37446 = seq__36975_37441;
var G__37447 = chunk__36977_37442;
var G__37448 = count__36978_37443;
var G__37449 = (i__36979_37444 + (1));
seq__36975_37441 = G__37446;
chunk__36977_37442 = G__37447;
count__36978_37443 = G__37448;
i__36979_37444 = G__37449;
continue;
} else {
var G__37450 = seq__36975_37441;
var G__37451 = chunk__36977_37442;
var G__37452 = count__36978_37443;
var G__37453 = (i__36979_37444 + (1));
seq__36975_37441 = G__37450;
chunk__36977_37442 = G__37451;
count__36978_37443 = G__37452;
i__36979_37444 = G__37453;
continue;
}
} else {
var temp__5804__auto___37454 = cljs.core.seq(seq__36975_37441);
if(temp__5804__auto___37454){
var seq__36975_37455__$1 = temp__5804__auto___37454;
if(cljs.core.chunked_seq_QMARK_(seq__36975_37455__$1)){
var c__5568__auto___37456 = cljs.core.chunk_first(seq__36975_37455__$1);
var G__37457 = cljs.core.chunk_rest(seq__36975_37455__$1);
var G__37458 = c__5568__auto___37456;
var G__37459 = cljs.core.count(c__5568__auto___37456);
var G__37460 = (0);
seq__36975_37441 = G__37457;
chunk__36977_37442 = G__37458;
count__36978_37443 = G__37459;
i__36979_37444 = G__37460;
continue;
} else {
var child_37461 = cljs.core.first(seq__36975_37455__$1);
if(cljs.core.truth_(child_37461)){
node.appendChild(child_37461);


var G__37462 = cljs.core.next(seq__36975_37455__$1);
var G__37463 = null;
var G__37464 = (0);
var G__37465 = (0);
seq__36975_37441 = G__37462;
chunk__36977_37442 = G__37463;
count__36978_37443 = G__37464;
i__36979_37444 = G__37465;
continue;
} else {
var G__37466 = cljs.core.next(seq__36975_37455__$1);
var G__37467 = null;
var G__37468 = (0);
var G__37469 = (0);
seq__36975_37441 = G__37466;
chunk__36977_37442 = G__37467;
count__36978_37443 = G__37468;
i__36979_37444 = G__37469;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37440);
}
}


var G__37470 = seq__36915_37434;
var G__37471 = chunk__36917_37435;
var G__37472 = count__36918_37436;
var G__37473 = (i__36919_37437 + (1));
seq__36915_37434 = G__37470;
chunk__36917_37435 = G__37471;
count__36918_37436 = G__37472;
i__36919_37437 = G__37473;
continue;
} else {
var G__37474 = seq__36915_37434;
var G__37475 = chunk__36917_37435;
var G__37476 = count__36918_37436;
var G__37477 = (i__36919_37437 + (1));
seq__36915_37434 = G__37474;
chunk__36917_37435 = G__37475;
count__36918_37436 = G__37476;
i__36919_37437 = G__37477;
continue;
}
} else {
var temp__5804__auto___37478 = cljs.core.seq(seq__36915_37434);
if(temp__5804__auto___37478){
var seq__36915_37479__$1 = temp__5804__auto___37478;
if(cljs.core.chunked_seq_QMARK_(seq__36915_37479__$1)){
var c__5568__auto___37480 = cljs.core.chunk_first(seq__36915_37479__$1);
var G__37481 = cljs.core.chunk_rest(seq__36915_37479__$1);
var G__37482 = c__5568__auto___37480;
var G__37483 = cljs.core.count(c__5568__auto___37480);
var G__37484 = (0);
seq__36915_37434 = G__37481;
chunk__36917_37435 = G__37482;
count__36918_37436 = G__37483;
i__36919_37437 = G__37484;
continue;
} else {
var child_struct_37485 = cljs.core.first(seq__36915_37479__$1);
if((!((child_struct_37485 == null)))){
if(typeof child_struct_37485 === 'string'){
var text_37486 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_37486),child_struct_37485].join(''));
} else {
var children_37487 = shadow.dom.svg_node(child_struct_37485);
if(cljs.core.seq_QMARK_(children_37487)){
var seq__36983_37488 = cljs.core.seq(children_37487);
var chunk__36985_37489 = null;
var count__36986_37490 = (0);
var i__36987_37491 = (0);
while(true){
if((i__36987_37491 < count__36986_37490)){
var child_37492 = chunk__36985_37489.cljs$core$IIndexed$_nth$arity$2(null,i__36987_37491);
if(cljs.core.truth_(child_37492)){
node.appendChild(child_37492);


var G__37494 = seq__36983_37488;
var G__37495 = chunk__36985_37489;
var G__37496 = count__36986_37490;
var G__37497 = (i__36987_37491 + (1));
seq__36983_37488 = G__37494;
chunk__36985_37489 = G__37495;
count__36986_37490 = G__37496;
i__36987_37491 = G__37497;
continue;
} else {
var G__37498 = seq__36983_37488;
var G__37499 = chunk__36985_37489;
var G__37500 = count__36986_37490;
var G__37501 = (i__36987_37491 + (1));
seq__36983_37488 = G__37498;
chunk__36985_37489 = G__37499;
count__36986_37490 = G__37500;
i__36987_37491 = G__37501;
continue;
}
} else {
var temp__5804__auto___37502__$1 = cljs.core.seq(seq__36983_37488);
if(temp__5804__auto___37502__$1){
var seq__36983_37503__$1 = temp__5804__auto___37502__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36983_37503__$1)){
var c__5568__auto___37504 = cljs.core.chunk_first(seq__36983_37503__$1);
var G__37505 = cljs.core.chunk_rest(seq__36983_37503__$1);
var G__37506 = c__5568__auto___37504;
var G__37507 = cljs.core.count(c__5568__auto___37504);
var G__37508 = (0);
seq__36983_37488 = G__37505;
chunk__36985_37489 = G__37506;
count__36986_37490 = G__37507;
i__36987_37491 = G__37508;
continue;
} else {
var child_37509 = cljs.core.first(seq__36983_37503__$1);
if(cljs.core.truth_(child_37509)){
node.appendChild(child_37509);


var G__37510 = cljs.core.next(seq__36983_37503__$1);
var G__37511 = null;
var G__37512 = (0);
var G__37513 = (0);
seq__36983_37488 = G__37510;
chunk__36985_37489 = G__37511;
count__36986_37490 = G__37512;
i__36987_37491 = G__37513;
continue;
} else {
var G__37514 = cljs.core.next(seq__36983_37503__$1);
var G__37515 = null;
var G__37516 = (0);
var G__37517 = (0);
seq__36983_37488 = G__37514;
chunk__36985_37489 = G__37515;
count__36986_37490 = G__37516;
i__36987_37491 = G__37517;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_37487);
}
}


var G__37518 = cljs.core.next(seq__36915_37479__$1);
var G__37519 = null;
var G__37520 = (0);
var G__37521 = (0);
seq__36915_37434 = G__37518;
chunk__36917_37435 = G__37519;
count__36918_37436 = G__37520;
i__36919_37437 = G__37521;
continue;
} else {
var G__37522 = cljs.core.next(seq__36915_37479__$1);
var G__37523 = null;
var G__37524 = (0);
var G__37525 = (0);
seq__36915_37434 = G__37522;
chunk__36917_37435 = G__37523;
count__36918_37436 = G__37524;
i__36919_37437 = G__37525;
continue;
}
}
} else {
}
}
break;
}

return node;
});
(shadow.dom.SVGElement["string"] = true);

(shadow.dom._to_svg["string"] = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
}));

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

(shadow.dom.SVGElement["null"] = true);

(shadow.dom._to_svg["null"] = (function (_){
return null;
}));
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__5775__auto__ = [];
var len__5769__auto___37526 = arguments.length;
var i__5770__auto___37527 = (0);
while(true){
if((i__5770__auto___37527 < len__5769__auto___37526)){
args__5775__auto__.push((arguments[i__5770__auto___37527]));

var G__37528 = (i__5770__auto___37527 + (1));
i__5770__auto___37527 = G__37528;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq37009){
var G__37010 = cljs.core.first(seq37009);
var seq37009__$1 = cljs.core.next(seq37009);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__37010,seq37009__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__37016 = arguments.length;
switch (G__37016) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
shadow.dom.dom_listen(shadow.dom.dom_node(el),cljs.core.name(event),event_fn);

if(cljs.core.truth_((function (){var and__5043__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__5043__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__5043__auto__;
}
})())){
var c__33444__auto___37536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_37039){
var state_val_37041 = (state_37039[(1)]);
if((state_val_37041 === (1))){
var state_37039__$1 = state_37039;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_37039__$1,(2),once_or_cleanup);
} else {
if((state_val_37041 === (2))){
var inst_37035 = (state_37039[(2)]);
var inst_37036 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_37039__$1 = (function (){var statearr_37047 = state_37039;
(statearr_37047[(7)] = inst_37035);

return statearr_37047;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_37039__$1,inst_37036);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__33271__auto__ = null;
var shadow$dom$state_machine__33271__auto____0 = (function (){
var statearr_37048 = [null,null,null,null,null,null,null,null];
(statearr_37048[(0)] = shadow$dom$state_machine__33271__auto__);

(statearr_37048[(1)] = (1));

return statearr_37048;
});
var shadow$dom$state_machine__33271__auto____1 = (function (state_37039){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_37039);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e37051){var ex__33274__auto__ = e37051;
var statearr_37052_37537 = state_37039;
(statearr_37052_37537[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_37039[(4)]))){
var statearr_37053_37538 = state_37039;
(statearr_37053_37538[(1)] = cljs.core.first((state_37039[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37540 = state_37039;
state_37039 = G__37540;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
shadow$dom$state_machine__33271__auto__ = function(state_37039){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__33271__auto____0.call(this);
case 1:
return shadow$dom$state_machine__33271__auto____1.call(this,state_37039);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__33271__auto____0;
shadow$dom$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__33271__auto____1;
return shadow$dom$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_37057 = f__33445__auto__();
(statearr_37057[(6)] = c__33444__auto___37536);

return statearr_37057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
