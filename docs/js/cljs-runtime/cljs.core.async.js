goog.provide('cljs.core.async');
goog.scope(function(){
  cljs.core.async.goog$module$goog$array = goog.module.get('goog.array');
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33631 = (function (f,blockable,meta33632){
this.f = f;
this.blockable = blockable;
this.meta33632 = meta33632;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33633,meta33632__$1){
var self__ = this;
var _33633__$1 = this;
return (new cljs.core.async.t_cljs$core$async33631(self__.f,self__.blockable,meta33632__$1));
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33633){
var self__ = this;
var _33633__$1 = this;
return self__.meta33632;
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async33631.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async33631.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33632","meta33632",-1362224375,null)], null);
}));

(cljs.core.async.t_cljs$core$async33631.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33631.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33631");

(cljs.core.async.t_cljs$core$async33631.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33631");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33631.
 */
cljs.core.async.__GT_t_cljs$core$async33631 = (function cljs$core$async$__GT_t_cljs$core$async33631(f,blockable,meta33632){
return (new cljs.core.async.t_cljs$core$async33631(f,blockable,meta33632));
});


cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__33628 = arguments.length;
switch (G__33628) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
return (new cljs.core.async.t_cljs$core$async33631(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__33644 = arguments.length;
switch (G__33644) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__33656 = arguments.length;
switch (G__33656) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__33662 = arguments.length;
switch (G__33662) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_35868 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35868) : fn1.call(null,val_35868));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_35868) : fn1.call(null,val_35868));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__33673 = arguments.length;
switch (G__33673) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5802__auto__)){
var ret = temp__5802__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5802__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5802__auto__)){
var retb = temp__5802__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5636__auto___35882 = n;
var x_35884 = (0);
while(true){
if((x_35884 < n__5636__auto___35882)){
(a[x_35884] = x_35884);

var G__35886 = (x_35884 + (1));
x_35884 = G__35886;
continue;
} else {
}
break;
}

cljs.core.async.goog$module$goog$array.shuffle(a);

return a;
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33694 = (function (flag,meta33695){
this.flag = flag;
this.meta33695 = meta33695;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33696,meta33695__$1){
var self__ = this;
var _33696__$1 = this;
return (new cljs.core.async.t_cljs$core$async33694(self__.flag,meta33695__$1));
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33696){
var self__ = this;
var _33696__$1 = this;
return self__.meta33695;
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33694.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async33694.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33695","meta33695",1963532221,null)], null);
}));

(cljs.core.async.t_cljs$core$async33694.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33694.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33694");

(cljs.core.async.t_cljs$core$async33694.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33694");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33694.
 */
cljs.core.async.__GT_t_cljs$core$async33694 = (function cljs$core$async$__GT_t_cljs$core$async33694(flag,meta33695){
return (new cljs.core.async.t_cljs$core$async33694(flag,meta33695));
});


cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
return (new cljs.core.async.t_cljs$core$async33694(flag,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33707 = (function (flag,cb,meta33708){
this.flag = flag;
this.cb = cb;
this.meta33708 = meta33708;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async33707.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33709,meta33708__$1){
var self__ = this;
var _33709__$1 = this;
return (new cljs.core.async.t_cljs$core$async33707(self__.flag,self__.cb,meta33708__$1));
}));

(cljs.core.async.t_cljs$core$async33707.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33709){
var self__ = this;
var _33709__$1 = this;
return self__.meta33708;
}));

(cljs.core.async.t_cljs$core$async33707.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async33707.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async33707.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async33707.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async33707.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33708","meta33708",-223846788,null)], null);
}));

(cljs.core.async.t_cljs$core$async33707.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async33707.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33707");

(cljs.core.async.t_cljs$core$async33707.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async33707");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async33707.
 */
cljs.core.async.__GT_t_cljs$core$async33707 = (function cljs$core$async$__GT_t_cljs$core$async33707(flag,cb,meta33708){
return (new cljs.core.async.t_cljs$core$async33707(flag,cb,meta33708));
});


cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
return (new cljs.core.async.t_cljs$core$async33707(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33714_SHARP_){
var G__33721 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33714_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33721) : fret.call(null,G__33721));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33716_SHARP_){
var G__33730 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33716_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__33730) : fret.call(null,G__33730));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__5045__auto__ = wport;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return port;
}
})()], null));
} else {
var G__35890 = (i + (1));
i = G__35890;
continue;
}
} else {
return null;
}
break;
}
})();
var or__5045__auto__ = ret;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5804__auto__ = (function (){var and__5043__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__5043__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__5043__auto__;
}
})();
if(cljs.core.truth_(temp__5804__auto__)){
var got = temp__5804__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___35891 = arguments.length;
var i__5770__auto___35892 = (0);
while(true){
if((i__5770__auto___35892 < len__5769__auto___35891)){
args__5775__auto__.push((arguments[i__5770__auto___35892]));

var G__35893 = (i__5770__auto___35892 + (1));
i__5770__auto___35892 = G__35893;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((1) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5776__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33748){
var map__33749 = p__33748;
var map__33749__$1 = cljs.core.__destructure_map(map__33749);
var opts = map__33749__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33745){
var G__33746 = cljs.core.first(seq33745);
var seq33745__$1 = cljs.core.next(seq33745);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33746,seq33745__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__33752 = arguments.length;
switch (G__33752) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__33444__auto___35895 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_33802){
var state_val_33803 = (state_33802[(1)]);
if((state_val_33803 === (7))){
var inst_33797 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33805_35896 = state_33802__$1;
(statearr_33805_35896[(2)] = inst_33797);

(statearr_33805_35896[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (1))){
var state_33802__$1 = state_33802;
var statearr_33806_35897 = state_33802__$1;
(statearr_33806_35897[(2)] = null);

(statearr_33806_35897[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (4))){
var inst_33779 = (state_33802[(7)]);
var inst_33779__$1 = (state_33802[(2)]);
var inst_33781 = (inst_33779__$1 == null);
var state_33802__$1 = (function (){var statearr_33808 = state_33802;
(statearr_33808[(7)] = inst_33779__$1);

return statearr_33808;
})();
if(cljs.core.truth_(inst_33781)){
var statearr_33809_35898 = state_33802__$1;
(statearr_33809_35898[(1)] = (5));

} else {
var statearr_33810_35899 = state_33802__$1;
(statearr_33810_35899[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (13))){
var state_33802__$1 = state_33802;
var statearr_33811_35900 = state_33802__$1;
(statearr_33811_35900[(2)] = null);

(statearr_33811_35900[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (6))){
var inst_33779 = (state_33802[(7)]);
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33802__$1,(11),to,inst_33779);
} else {
if((state_val_33803 === (3))){
var inst_33799 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33802__$1,inst_33799);
} else {
if((state_val_33803 === (12))){
var state_33802__$1 = state_33802;
var statearr_33819_35903 = state_33802__$1;
(statearr_33819_35903[(2)] = null);

(statearr_33819_35903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (2))){
var state_33802__$1 = state_33802;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33802__$1,(4),from);
} else {
if((state_val_33803 === (11))){
var inst_33790 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
if(cljs.core.truth_(inst_33790)){
var statearr_33820_35904 = state_33802__$1;
(statearr_33820_35904[(1)] = (12));

} else {
var statearr_33821_35905 = state_33802__$1;
(statearr_33821_35905[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (9))){
var state_33802__$1 = state_33802;
var statearr_33822_35906 = state_33802__$1;
(statearr_33822_35906[(2)] = null);

(statearr_33822_35906[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (5))){
var state_33802__$1 = state_33802;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33823_35907 = state_33802__$1;
(statearr_33823_35907[(1)] = (8));

} else {
var statearr_33824_35908 = state_33802__$1;
(statearr_33824_35908[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (14))){
var inst_33795 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33825_35909 = state_33802__$1;
(statearr_33825_35909[(2)] = inst_33795);

(statearr_33825_35909[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (10))){
var inst_33787 = (state_33802[(2)]);
var state_33802__$1 = state_33802;
var statearr_33827_35910 = state_33802__$1;
(statearr_33827_35910[(2)] = inst_33787);

(statearr_33827_35910[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33803 === (8))){
var inst_33784 = cljs.core.async.close_BANG_(to);
var state_33802__$1 = state_33802;
var statearr_33828_35911 = state_33802__$1;
(statearr_33828_35911[(2)] = inst_33784);

(statearr_33828_35911[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_33829 = [null,null,null,null,null,null,null,null];
(statearr_33829[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_33829[(1)] = (1));

return statearr_33829;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_33802){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_33802);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33830){var ex__33274__auto__ = e33830;
var statearr_33831_35912 = state_33802;
(statearr_33831_35912[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_33802[(4)]))){
var statearr_33832_35913 = state_33802;
(statearr_33832_35913[(1)] = cljs.core.first((state_33802[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35914 = state_33802;
state_33802 = G__35914;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_33802){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_33802);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_33834 = f__33445__auto__();
(statearr_33834[(6)] = c__33444__auto___35895);

return statearr_33834;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process__$1 = (function (p__33836){
var vec__33837 = p__33836;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33837,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33837,(1),null);
var job = vec__33837;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__33444__auto___35915 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_33844){
var state_val_33845 = (state_33844[(1)]);
if((state_val_33845 === (1))){
var state_33844__$1 = state_33844;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33844__$1,(2),res,v);
} else {
if((state_val_33845 === (2))){
var inst_33841 = (state_33844[(2)]);
var inst_33842 = cljs.core.async.close_BANG_(res);
var state_33844__$1 = (function (){var statearr_33847 = state_33844;
(statearr_33847[(7)] = inst_33841);

return statearr_33847;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33844__$1,inst_33842);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33848 = [null,null,null,null,null,null,null,null];
(statearr_33848[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33848[(1)] = (1));

return statearr_33848;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33844){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_33844);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33849){var ex__33274__auto__ = e33849;
var statearr_33850_35916 = state_33844;
(statearr_33850_35916[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_33844[(4)]))){
var statearr_33851_35917 = state_33844;
(statearr_33851_35917[(1)] = cljs.core.first((state_33844[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35920 = state_33844;
state_33844 = G__35920;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33844){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33844);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_33853 = f__33445__auto__();
(statearr_33853[(6)] = c__33444__auto___35915);

return statearr_33853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__33854){
var vec__33855 = p__33854;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33855,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33855,(1),null);
var job = vec__33855;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__5636__auto___35921 = n;
var __35922 = (0);
while(true){
if((__35922 < n__5636__auto___35921)){
var G__33858_35923 = type;
var G__33858_35924__$1 = (((G__33858_35923 instanceof cljs.core.Keyword))?G__33858_35923.fqn:null);
switch (G__33858_35924__$1) {
case "compute":
var c__33444__auto___35927 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35922,c__33444__auto___35927,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async){
return (function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = ((function (__35922,c__33444__auto___35927,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async){
return (function (state_33872){
var state_val_33873 = (state_33872[(1)]);
if((state_val_33873 === (1))){
var state_33872__$1 = state_33872;
var statearr_33874_35932 = state_33872__$1;
(statearr_33874_35932[(2)] = null);

(statearr_33874_35932[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (2))){
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33872__$1,(4),jobs);
} else {
if((state_val_33873 === (3))){
var inst_33870 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33872__$1,inst_33870);
} else {
if((state_val_33873 === (4))){
var inst_33861 = (state_33872[(2)]);
var inst_33862 = process__$1(inst_33861);
var state_33872__$1 = state_33872;
if(cljs.core.truth_(inst_33862)){
var statearr_33875_35933 = state_33872__$1;
(statearr_33875_35933[(1)] = (5));

} else {
var statearr_33876_35934 = state_33872__$1;
(statearr_33876_35934[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (5))){
var state_33872__$1 = state_33872;
var statearr_33878_35935 = state_33872__$1;
(statearr_33878_35935[(2)] = null);

(statearr_33878_35935[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (6))){
var state_33872__$1 = state_33872;
var statearr_33879_35936 = state_33872__$1;
(statearr_33879_35936[(2)] = null);

(statearr_33879_35936[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33873 === (7))){
var inst_33868 = (state_33872[(2)]);
var state_33872__$1 = state_33872;
var statearr_33880_35938 = state_33872__$1;
(statearr_33880_35938[(2)] = inst_33868);

(statearr_33880_35938[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35922,c__33444__auto___35927,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async))
;
return ((function (__35922,switch__33270__auto__,c__33444__auto___35927,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33881 = [null,null,null,null,null,null,null];
(statearr_33881[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33881[(1)] = (1));

return statearr_33881;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33872){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_33872);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33882){var ex__33274__auto__ = e33882;
var statearr_33883_35943 = state_33872;
(statearr_33883_35943[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_33872[(4)]))){
var statearr_33884_35944 = state_33872;
(statearr_33884_35944[(1)] = cljs.core.first((state_33872[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35945 = state_33872;
state_33872 = G__35945;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33872){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33872);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
;})(__35922,switch__33270__auto__,c__33444__auto___35927,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async))
})();
var state__33446__auto__ = (function (){var statearr_33885 = f__33445__auto__();
(statearr_33885[(6)] = c__33444__auto___35927);

return statearr_33885;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
});})(__35922,c__33444__auto___35927,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async))
);


break;
case "async":
var c__33444__auto___35946 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__35922,c__33444__auto___35946,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async){
return (function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = ((function (__35922,c__33444__auto___35946,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async){
return (function (state_33899){
var state_val_33900 = (state_33899[(1)]);
if((state_val_33900 === (1))){
var state_33899__$1 = state_33899;
var statearr_33901_35949 = state_33899__$1;
(statearr_33901_35949[(2)] = null);

(statearr_33901_35949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (2))){
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33899__$1,(4),jobs);
} else {
if((state_val_33900 === (3))){
var inst_33897 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33899__$1,inst_33897);
} else {
if((state_val_33900 === (4))){
var inst_33889 = (state_33899[(2)]);
var inst_33890 = async(inst_33889);
var state_33899__$1 = state_33899;
if(cljs.core.truth_(inst_33890)){
var statearr_33902_35950 = state_33899__$1;
(statearr_33902_35950[(1)] = (5));

} else {
var statearr_33904_35951 = state_33899__$1;
(statearr_33904_35951[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (5))){
var state_33899__$1 = state_33899;
var statearr_33905_35952 = state_33899__$1;
(statearr_33905_35952[(2)] = null);

(statearr_33905_35952[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (6))){
var state_33899__$1 = state_33899;
var statearr_33906_35953 = state_33899__$1;
(statearr_33906_35953[(2)] = null);

(statearr_33906_35953[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33900 === (7))){
var inst_33895 = (state_33899[(2)]);
var state_33899__$1 = state_33899;
var statearr_33907_35954 = state_33899__$1;
(statearr_33907_35954[(2)] = inst_33895);

(statearr_33907_35954[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(__35922,c__33444__auto___35946,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async))
;
return ((function (__35922,switch__33270__auto__,c__33444__auto___35946,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33908 = [null,null,null,null,null,null,null];
(statearr_33908[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33908[(1)] = (1));

return statearr_33908;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33899){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_33899);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33910){var ex__33274__auto__ = e33910;
var statearr_33911_35957 = state_33899;
(statearr_33911_35957[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_33899[(4)]))){
var statearr_33912_35958 = state_33899;
(statearr_33912_35958[(1)] = cljs.core.first((state_33899[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35959 = state_33899;
state_33899 = G__35959;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33899){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33899);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
;})(__35922,switch__33270__auto__,c__33444__auto___35946,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async))
})();
var state__33446__auto__ = (function (){var statearr_33913 = f__33445__auto__();
(statearr_33913[(6)] = c__33444__auto___35946);

return statearr_33913;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
});})(__35922,c__33444__auto___35946,G__33858_35923,G__33858_35924__$1,n__5636__auto___35921,jobs,results,process__$1,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33858_35924__$1)].join('')));

}

var G__35961 = (__35922 + (1));
__35922 = G__35961;
continue;
} else {
}
break;
}

var c__33444__auto___35962 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_33936){
var state_val_33937 = (state_33936[(1)]);
if((state_val_33937 === (7))){
var inst_33932 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
var statearr_33939_35963 = state_33936__$1;
(statearr_33939_35963[(2)] = inst_33932);

(statearr_33939_35963[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (1))){
var state_33936__$1 = state_33936;
var statearr_33940_35964 = state_33936__$1;
(statearr_33940_35964[(2)] = null);

(statearr_33940_35964[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (4))){
var inst_33916 = (state_33936[(7)]);
var inst_33916__$1 = (state_33936[(2)]);
var inst_33917 = (inst_33916__$1 == null);
var state_33936__$1 = (function (){var statearr_33941 = state_33936;
(statearr_33941[(7)] = inst_33916__$1);

return statearr_33941;
})();
if(cljs.core.truth_(inst_33917)){
var statearr_33942_35965 = state_33936__$1;
(statearr_33942_35965[(1)] = (5));

} else {
var statearr_33943_35966 = state_33936__$1;
(statearr_33943_35966[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (6))){
var inst_33921 = (state_33936[(8)]);
var inst_33916 = (state_33936[(7)]);
var inst_33921__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_33923 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33924 = [inst_33916,inst_33921__$1];
var inst_33925 = (new cljs.core.PersistentVector(null,2,(5),inst_33923,inst_33924,null));
var state_33936__$1 = (function (){var statearr_33944 = state_33936;
(statearr_33944[(8)] = inst_33921__$1);

return statearr_33944;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33936__$1,(8),jobs,inst_33925);
} else {
if((state_val_33937 === (3))){
var inst_33934 = (state_33936[(2)]);
var state_33936__$1 = state_33936;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33936__$1,inst_33934);
} else {
if((state_val_33937 === (2))){
var state_33936__$1 = state_33936;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33936__$1,(4),from);
} else {
if((state_val_33937 === (9))){
var inst_33929 = (state_33936[(2)]);
var state_33936__$1 = (function (){var statearr_33946 = state_33936;
(statearr_33946[(9)] = inst_33929);

return statearr_33946;
})();
var statearr_33947_35977 = state_33936__$1;
(statearr_33947_35977[(2)] = null);

(statearr_33947_35977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (5))){
var inst_33919 = cljs.core.async.close_BANG_(jobs);
var state_33936__$1 = state_33936;
var statearr_33948_35978 = state_33936__$1;
(statearr_33948_35978[(2)] = inst_33919);

(statearr_33948_35978[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33937 === (8))){
var inst_33921 = (state_33936[(8)]);
var inst_33927 = (state_33936[(2)]);
var state_33936__$1 = (function (){var statearr_33949 = state_33936;
(statearr_33949[(10)] = inst_33927);

return statearr_33949;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33936__$1,(9),results,inst_33921);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_33950 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33950[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_33950[(1)] = (1));

return statearr_33950;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33936){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_33936);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e33952){var ex__33274__auto__ = e33952;
var statearr_33953_35979 = state_33936;
(statearr_33953_35979[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_33936[(4)]))){
var statearr_33954_35980 = state_33936;
(statearr_33954_35980[(1)] = cljs.core.first((state_33936[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35982 = state_33936;
state_33936 = G__35982;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33936){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33936);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_33955 = f__33445__auto__();
(statearr_33955[(6)] = c__33444__auto___35962);

return statearr_33955;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


var c__33444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_33994){
var state_val_33995 = (state_33994[(1)]);
if((state_val_33995 === (7))){
var inst_33990 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_33996_35984 = state_33994__$1;
(statearr_33996_35984[(2)] = inst_33990);

(statearr_33996_35984[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (20))){
var state_33994__$1 = state_33994;
var statearr_33997_35985 = state_33994__$1;
(statearr_33997_35985[(2)] = null);

(statearr_33997_35985[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (1))){
var state_33994__$1 = state_33994;
var statearr_33998_35986 = state_33994__$1;
(statearr_33998_35986[(2)] = null);

(statearr_33998_35986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (4))){
var inst_33958 = (state_33994[(7)]);
var inst_33958__$1 = (state_33994[(2)]);
var inst_33959 = (inst_33958__$1 == null);
var state_33994__$1 = (function (){var statearr_34000 = state_33994;
(statearr_34000[(7)] = inst_33958__$1);

return statearr_34000;
})();
if(cljs.core.truth_(inst_33959)){
var statearr_34001_35987 = state_33994__$1;
(statearr_34001_35987[(1)] = (5));

} else {
var statearr_34002_35988 = state_33994__$1;
(statearr_34002_35988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (15))){
var inst_33971 = (state_33994[(8)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_33994__$1,(18),to,inst_33971);
} else {
if((state_val_33995 === (21))){
var inst_33985 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34003_35989 = state_33994__$1;
(statearr_34003_35989[(2)] = inst_33985);

(statearr_34003_35989[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (13))){
var inst_33987 = (state_33994[(2)]);
var state_33994__$1 = (function (){var statearr_34004 = state_33994;
(statearr_34004[(9)] = inst_33987);

return statearr_34004;
})();
var statearr_34005_35992 = state_33994__$1;
(statearr_34005_35992[(2)] = null);

(statearr_34005_35992[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (6))){
var inst_33958 = (state_33994[(7)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33994__$1,(11),inst_33958);
} else {
if((state_val_33995 === (17))){
var inst_33980 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
if(cljs.core.truth_(inst_33980)){
var statearr_34006_35994 = state_33994__$1;
(statearr_34006_35994[(1)] = (19));

} else {
var statearr_34007_35995 = state_33994__$1;
(statearr_34007_35995[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (3))){
var inst_33992 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33994__$1,inst_33992);
} else {
if((state_val_33995 === (12))){
var inst_33968 = (state_33994[(10)]);
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33994__$1,(14),inst_33968);
} else {
if((state_val_33995 === (2))){
var state_33994__$1 = state_33994;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33994__$1,(4),results);
} else {
if((state_val_33995 === (19))){
var state_33994__$1 = state_33994;
var statearr_34009_35996 = state_33994__$1;
(statearr_34009_35996[(2)] = null);

(statearr_34009_35996[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (11))){
var inst_33968 = (state_33994[(2)]);
var state_33994__$1 = (function (){var statearr_34010 = state_33994;
(statearr_34010[(10)] = inst_33968);

return statearr_34010;
})();
var statearr_34011_35997 = state_33994__$1;
(statearr_34011_35997[(2)] = null);

(statearr_34011_35997[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (9))){
var state_33994__$1 = state_33994;
var statearr_34012_35998 = state_33994__$1;
(statearr_34012_35998[(2)] = null);

(statearr_34012_35998[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (5))){
var state_33994__$1 = state_33994;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34013_35999 = state_33994__$1;
(statearr_34013_35999[(1)] = (8));

} else {
var statearr_34014_36000 = state_33994__$1;
(statearr_34014_36000[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (14))){
var inst_33971 = (state_33994[(8)]);
var inst_33973 = (state_33994[(11)]);
var inst_33971__$1 = (state_33994[(2)]);
var inst_33972 = (inst_33971__$1 == null);
var inst_33973__$1 = cljs.core.not(inst_33972);
var state_33994__$1 = (function (){var statearr_34016 = state_33994;
(statearr_34016[(8)] = inst_33971__$1);

(statearr_34016[(11)] = inst_33973__$1);

return statearr_34016;
})();
if(inst_33973__$1){
var statearr_34017_36001 = state_33994__$1;
(statearr_34017_36001[(1)] = (15));

} else {
var statearr_34018_36002 = state_33994__$1;
(statearr_34018_36002[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (16))){
var inst_33973 = (state_33994[(11)]);
var state_33994__$1 = state_33994;
var statearr_34019_36007 = state_33994__$1;
(statearr_34019_36007[(2)] = inst_33973);

(statearr_34019_36007[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (10))){
var inst_33965 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34020_36008 = state_33994__$1;
(statearr_34020_36008[(2)] = inst_33965);

(statearr_34020_36008[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (18))){
var inst_33977 = (state_33994[(2)]);
var state_33994__$1 = state_33994;
var statearr_34021_36009 = state_33994__$1;
(statearr_34021_36009[(2)] = inst_33977);

(statearr_34021_36009[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33995 === (8))){
var inst_33962 = cljs.core.async.close_BANG_(to);
var state_33994__$1 = state_33994;
var statearr_34022_36010 = state_33994__$1;
(statearr_34022_36010[(2)] = inst_33962);

(statearr_34022_36010[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_34024 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34024[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__);

(statearr_34024[(1)] = (1));

return statearr_34024;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1 = (function (state_33994){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_33994);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34025){var ex__33274__auto__ = e34025;
var statearr_34026_36011 = state_33994;
(statearr_34026_36011[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_33994[(4)]))){
var statearr_34027_36012 = state_33994;
(statearr_34027_36012[(1)] = cljs.core.first((state_33994[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36013 = state_33994;
state_33994 = G__36013;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__ = function(state_33994){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1.call(this,state_33994);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_34028 = f__33445__auto__();
(statearr_34028[(6)] = c__33444__auto__);

return statearr_34028;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));

return c__33444__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). The
 *   presumption is that af will return immediately, having launched some
 *   asynchronous operation whose completion/callback will put results on
 *   the channel, then close! it. Outputs will be returned in order
 *   relative to the inputs. By default, the to channel will be closed
 *   when the from channel closes, but can be determined by the close?
 *   parameter. Will stop consuming the from channel if the to channel
 *   closes. See also pipeline, pipeline-blocking.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34031 = arguments.length;
switch (G__34031) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34035 = arguments.length;
switch (G__34035) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34039 = arguments.length;
switch (G__34039) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__33444__auto___36019 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_34065){
var state_val_34066 = (state_34065[(1)]);
if((state_val_34066 === (7))){
var inst_34061 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
var statearr_34067_36020 = state_34065__$1;
(statearr_34067_36020[(2)] = inst_34061);

(statearr_34067_36020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (1))){
var state_34065__$1 = state_34065;
var statearr_34068_36021 = state_34065__$1;
(statearr_34068_36021[(2)] = null);

(statearr_34068_36021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (4))){
var inst_34042 = (state_34065[(7)]);
var inst_34042__$1 = (state_34065[(2)]);
var inst_34043 = (inst_34042__$1 == null);
var state_34065__$1 = (function (){var statearr_34069 = state_34065;
(statearr_34069[(7)] = inst_34042__$1);

return statearr_34069;
})();
if(cljs.core.truth_(inst_34043)){
var statearr_34070_36022 = state_34065__$1;
(statearr_34070_36022[(1)] = (5));

} else {
var statearr_34071_36023 = state_34065__$1;
(statearr_34071_36023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (13))){
var state_34065__$1 = state_34065;
var statearr_34072_36024 = state_34065__$1;
(statearr_34072_36024[(2)] = null);

(statearr_34072_36024[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (6))){
var inst_34042 = (state_34065[(7)]);
var inst_34048 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_34042) : p.call(null,inst_34042));
var state_34065__$1 = state_34065;
if(cljs.core.truth_(inst_34048)){
var statearr_34073_36025 = state_34065__$1;
(statearr_34073_36025[(1)] = (9));

} else {
var statearr_34075_36026 = state_34065__$1;
(statearr_34075_36026[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (3))){
var inst_34063 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34065__$1,inst_34063);
} else {
if((state_val_34066 === (12))){
var state_34065__$1 = state_34065;
var statearr_34077_36027 = state_34065__$1;
(statearr_34077_36027[(2)] = null);

(statearr_34077_36027[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (2))){
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34065__$1,(4),ch);
} else {
if((state_val_34066 === (11))){
var inst_34042 = (state_34065[(7)]);
var inst_34052 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34065__$1,(8),inst_34052,inst_34042);
} else {
if((state_val_34066 === (9))){
var state_34065__$1 = state_34065;
var statearr_34078_36028 = state_34065__$1;
(statearr_34078_36028[(2)] = tc);

(statearr_34078_36028[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (5))){
var inst_34045 = cljs.core.async.close_BANG_(tc);
var inst_34046 = cljs.core.async.close_BANG_(fc);
var state_34065__$1 = (function (){var statearr_34079 = state_34065;
(statearr_34079[(8)] = inst_34045);

return statearr_34079;
})();
var statearr_34080_36029 = state_34065__$1;
(statearr_34080_36029[(2)] = inst_34046);

(statearr_34080_36029[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (14))){
var inst_34059 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
var statearr_34081_36030 = state_34065__$1;
(statearr_34081_36030[(2)] = inst_34059);

(statearr_34081_36030[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (10))){
var state_34065__$1 = state_34065;
var statearr_34082_36035 = state_34065__$1;
(statearr_34082_36035[(2)] = fc);

(statearr_34082_36035[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34066 === (8))){
var inst_34054 = (state_34065[(2)]);
var state_34065__$1 = state_34065;
if(cljs.core.truth_(inst_34054)){
var statearr_34083_36036 = state_34065__$1;
(statearr_34083_36036[(1)] = (12));

} else {
var statearr_34084_36040 = state_34065__$1;
(statearr_34084_36040[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_34085 = [null,null,null,null,null,null,null,null,null];
(statearr_34085[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_34085[(1)] = (1));

return statearr_34085;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_34065){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_34065);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34086){var ex__33274__auto__ = e34086;
var statearr_34087_36041 = state_34065;
(statearr_34087_36041[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_34065[(4)]))){
var statearr_34088_36042 = state_34065;
(statearr_34088_36042[(1)] = cljs.core.first((state_34065[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36043 = state_34065;
state_34065 = G__36043;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_34065){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_34065);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_34089 = f__33445__auto__();
(statearr_34089[(6)] = c__33444__auto___36019);

return statearr_34089;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__33444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_34111){
var state_val_34112 = (state_34111[(1)]);
if((state_val_34112 === (7))){
var inst_34107 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34116_36051 = state_34111__$1;
(statearr_34116_36051[(2)] = inst_34107);

(statearr_34116_36051[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (1))){
var inst_34090 = init;
var inst_34091 = inst_34090;
var state_34111__$1 = (function (){var statearr_34117 = state_34111;
(statearr_34117[(7)] = inst_34091);

return statearr_34117;
})();
var statearr_34118_36055 = state_34111__$1;
(statearr_34118_36055[(2)] = null);

(statearr_34118_36055[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (4))){
var inst_34094 = (state_34111[(8)]);
var inst_34094__$1 = (state_34111[(2)]);
var inst_34095 = (inst_34094__$1 == null);
var state_34111__$1 = (function (){var statearr_34122 = state_34111;
(statearr_34122[(8)] = inst_34094__$1);

return statearr_34122;
})();
if(cljs.core.truth_(inst_34095)){
var statearr_34123_36056 = state_34111__$1;
(statearr_34123_36056[(1)] = (5));

} else {
var statearr_34127_36057 = state_34111__$1;
(statearr_34127_36057[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (6))){
var inst_34094 = (state_34111[(8)]);
var inst_34091 = (state_34111[(7)]);
var inst_34098 = (state_34111[(9)]);
var inst_34098__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_34091,inst_34094) : f.call(null,inst_34091,inst_34094));
var inst_34099 = cljs.core.reduced_QMARK_(inst_34098__$1);
var state_34111__$1 = (function (){var statearr_34128 = state_34111;
(statearr_34128[(9)] = inst_34098__$1);

return statearr_34128;
})();
if(inst_34099){
var statearr_34129_36061 = state_34111__$1;
(statearr_34129_36061[(1)] = (8));

} else {
var statearr_34130_36062 = state_34111__$1;
(statearr_34130_36062[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (3))){
var inst_34109 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34111__$1,inst_34109);
} else {
if((state_val_34112 === (2))){
var state_34111__$1 = state_34111;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34111__$1,(4),ch);
} else {
if((state_val_34112 === (9))){
var inst_34098 = (state_34111[(9)]);
var inst_34091 = inst_34098;
var state_34111__$1 = (function (){var statearr_34131 = state_34111;
(statearr_34131[(7)] = inst_34091);

return statearr_34131;
})();
var statearr_34132_36063 = state_34111__$1;
(statearr_34132_36063[(2)] = null);

(statearr_34132_36063[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (5))){
var inst_34091 = (state_34111[(7)]);
var state_34111__$1 = state_34111;
var statearr_34134_36064 = state_34111__$1;
(statearr_34134_36064[(2)] = inst_34091);

(statearr_34134_36064[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (10))){
var inst_34105 = (state_34111[(2)]);
var state_34111__$1 = state_34111;
var statearr_34137_36068 = state_34111__$1;
(statearr_34137_36068[(2)] = inst_34105);

(statearr_34137_36068[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34112 === (8))){
var inst_34098 = (state_34111[(9)]);
var inst_34101 = cljs.core.deref(inst_34098);
var state_34111__$1 = state_34111;
var statearr_34139_36073 = state_34111__$1;
(statearr_34139_36073[(2)] = inst_34101);

(statearr_34139_36073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$reduce_$_state_machine__33271__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33271__auto____0 = (function (){
var statearr_34141 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34141[(0)] = cljs$core$async$reduce_$_state_machine__33271__auto__);

(statearr_34141[(1)] = (1));

return statearr_34141;
});
var cljs$core$async$reduce_$_state_machine__33271__auto____1 = (function (state_34111){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_34111);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34145){var ex__33274__auto__ = e34145;
var statearr_34146_36077 = state_34111;
(statearr_34146_36077[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_34111[(4)]))){
var statearr_34147_36078 = state_34111;
(statearr_34147_36078[(1)] = cljs.core.first((state_34111[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36082 = state_34111;
state_34111 = G__36082;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33271__auto__ = function(state_34111){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33271__auto____1.call(this,state_34111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33271__auto____0;
cljs$core$async$reduce_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33271__auto____1;
return cljs$core$async$reduce_$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_34152 = f__33445__auto__();
(statearr_34152[(6)] = c__33444__auto__);

return statearr_34152;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));

return c__33444__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__33444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_34162){
var state_val_34163 = (state_34162[(1)]);
if((state_val_34163 === (1))){
var inst_34157 = cljs.core.async.reduce(f__$1,init,ch);
var state_34162__$1 = state_34162;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34162__$1,(2),inst_34157);
} else {
if((state_val_34163 === (2))){
var inst_34159 = (state_34162[(2)]);
var inst_34160 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_34159) : f__$1.call(null,inst_34159));
var state_34162__$1 = state_34162;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34162__$1,inst_34160);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__33271__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33271__auto____0 = (function (){
var statearr_34170 = [null,null,null,null,null,null,null];
(statearr_34170[(0)] = cljs$core$async$transduce_$_state_machine__33271__auto__);

(statearr_34170[(1)] = (1));

return statearr_34170;
});
var cljs$core$async$transduce_$_state_machine__33271__auto____1 = (function (state_34162){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_34162);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34173){var ex__33274__auto__ = e34173;
var statearr_34174_36089 = state_34162;
(statearr_34174_36089[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_34162[(4)]))){
var statearr_34176_36090 = state_34162;
(statearr_34176_36090[(1)] = cljs.core.first((state_34162[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36091 = state_34162;
state_34162 = G__36091;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33271__auto__ = function(state_34162){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33271__auto____1.call(this,state_34162);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33271__auto____0;
cljs$core$async$transduce_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33271__auto____1;
return cljs$core$async$transduce_$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_34180 = f__33445__auto__();
(statearr_34180[(6)] = c__33444__auto__);

return statearr_34180;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));

return c__33444__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan_BANG_ = (function cljs$core$async$onto_chan_BANG_(var_args){
var G__34187 = arguments.length;
switch (G__34187) {
case 2:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__33444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_34223){
var state_val_34224 = (state_34223[(1)]);
if((state_val_34224 === (7))){
var inst_34202 = (state_34223[(2)]);
var state_34223__$1 = state_34223;
var statearr_34229_36093 = state_34223__$1;
(statearr_34229_36093[(2)] = inst_34202);

(statearr_34229_36093[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (1))){
var inst_34195 = cljs.core.seq(coll);
var inst_34196 = inst_34195;
var state_34223__$1 = (function (){var statearr_34231 = state_34223;
(statearr_34231[(7)] = inst_34196);

return statearr_34231;
})();
var statearr_34232_36094 = state_34223__$1;
(statearr_34232_36094[(2)] = null);

(statearr_34232_36094[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (4))){
var inst_34196 = (state_34223[(7)]);
var inst_34200 = cljs.core.first(inst_34196);
var state_34223__$1 = state_34223;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34223__$1,(7),ch,inst_34200);
} else {
if((state_val_34224 === (13))){
var inst_34214 = (state_34223[(2)]);
var state_34223__$1 = state_34223;
var statearr_34237_36096 = state_34223__$1;
(statearr_34237_36096[(2)] = inst_34214);

(statearr_34237_36096[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (6))){
var inst_34205 = (state_34223[(2)]);
var state_34223__$1 = state_34223;
if(cljs.core.truth_(inst_34205)){
var statearr_34241_36097 = state_34223__$1;
(statearr_34241_36097[(1)] = (8));

} else {
var statearr_34242_36098 = state_34223__$1;
(statearr_34242_36098[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (3))){
var inst_34218 = (state_34223[(2)]);
var state_34223__$1 = state_34223;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34223__$1,inst_34218);
} else {
if((state_val_34224 === (12))){
var state_34223__$1 = state_34223;
var statearr_34246_36099 = state_34223__$1;
(statearr_34246_36099[(2)] = null);

(statearr_34246_36099[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (2))){
var inst_34196 = (state_34223[(7)]);
var state_34223__$1 = state_34223;
if(cljs.core.truth_(inst_34196)){
var statearr_34249_36100 = state_34223__$1;
(statearr_34249_36100[(1)] = (4));

} else {
var statearr_34250_36102 = state_34223__$1;
(statearr_34250_36102[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (11))){
var inst_34211 = cljs.core.async.close_BANG_(ch);
var state_34223__$1 = state_34223;
var statearr_34251_36103 = state_34223__$1;
(statearr_34251_36103[(2)] = inst_34211);

(statearr_34251_36103[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (9))){
var state_34223__$1 = state_34223;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34255_36104 = state_34223__$1;
(statearr_34255_36104[(1)] = (11));

} else {
var statearr_34256_36105 = state_34223__$1;
(statearr_34256_36105[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (5))){
var inst_34196 = (state_34223[(7)]);
var state_34223__$1 = state_34223;
var statearr_34259_36106 = state_34223__$1;
(statearr_34259_36106[(2)] = inst_34196);

(statearr_34259_36106[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (10))){
var inst_34216 = (state_34223[(2)]);
var state_34223__$1 = state_34223;
var statearr_34262_36107 = state_34223__$1;
(statearr_34262_36107[(2)] = inst_34216);

(statearr_34262_36107[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34224 === (8))){
var inst_34196 = (state_34223[(7)]);
var inst_34207 = cljs.core.next(inst_34196);
var inst_34196__$1 = inst_34207;
var state_34223__$1 = (function (){var statearr_34264 = state_34223;
(statearr_34264[(7)] = inst_34196__$1);

return statearr_34264;
})();
var statearr_34268_36108 = state_34223__$1;
(statearr_34268_36108[(2)] = null);

(statearr_34268_36108[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_34270 = [null,null,null,null,null,null,null,null];
(statearr_34270[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_34270[(1)] = (1));

return statearr_34270;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_34223){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_34223);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34274){var ex__33274__auto__ = e34274;
var statearr_34275_36109 = state_34223;
(statearr_34275_36109[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_34223[(4)]))){
var statearr_34276_36110 = state_34223;
(statearr_34276_36110[(1)] = cljs.core.first((state_34223[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36111 = state_34223;
state_34223 = G__36111;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_34223){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_34223);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_34281 = f__33445__auto__();
(statearr_34281[(6)] = c__33444__auto__);

return statearr_34281;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));

return c__33444__auto__;
}));

(cljs.core.async.onto_chan_BANG_.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan_BANG_ = (function cljs$core$async$to_chan_BANG_(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});
/**
 * Deprecated - use onto-chan!
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34291 = arguments.length;
switch (G__34291) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
return cljs.core.async.onto_chan_BANG_.cljs$core$IFn$_invoke$arity$3(ch,coll,close_QMARK_);
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - use to-chan!
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
return cljs.core.async.to_chan_BANG_(coll);
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

var cljs$core$async$Mux$muxch_STAR_$dyn_36113 = (function (_){
var x__5393__auto__ = (((_ == null))?null:_);
var m__5394__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5394__auto__.call(null,_));
} else {
var m__5392__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__5392__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
});
cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
return cljs$core$async$Mux$muxch_STAR_$dyn_36113(_);
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

var cljs$core$async$Mult$tap_STAR_$dyn_36114 = (function (m,ch,close_QMARK_){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5394__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__5392__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
});
cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
return cljs$core$async$Mult$tap_STAR_$dyn_36114(m,ch,close_QMARK_);
}
});

var cljs$core$async$Mult$untap_STAR_$dyn_36115 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
});
cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mult$untap_STAR_$dyn_36115(m,ch);
}
});

var cljs$core$async$Mult$untap_all_STAR_$dyn_36116 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
});
cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mult$untap_all_STAR_$dyn_36116(m);
}
});


/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34343 = (function (ch,cs,meta34344){
this.ch = ch;
this.cs = cs;
this.meta34344 = meta34344;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34345,meta34344__$1){
var self__ = this;
var _34345__$1 = this;
return (new cljs.core.async.t_cljs$core$async34343(self__.ch,self__.cs,meta34344__$1));
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34345){
var self__ = this;
var _34345__$1 = this;
return self__.meta34344;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async34343.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async34343.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34344","meta34344",-506745894,null)], null);
}));

(cljs.core.async.t_cljs$core$async34343.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34343");

(cljs.core.async.t_cljs$core$async34343.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34343");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34343.
 */
cljs.core.async.__GT_t_cljs$core$async34343 = (function cljs$core$async$__GT_t_cljs$core$async34343(ch,cs,meta34344){
return (new cljs.core.async.t_cljs$core$async34343(ch,cs,meta34344));
});


/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (new cljs.core.async.t_cljs$core$async34343(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__33444__auto___36120 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_34517){
var state_val_34518 = (state_34517[(1)]);
if((state_val_34518 === (7))){
var inst_34513 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34519_36121 = state_34517__$1;
(statearr_34519_36121[(2)] = inst_34513);

(statearr_34519_36121[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (20))){
var inst_34402 = (state_34517[(7)]);
var inst_34417 = cljs.core.first(inst_34402);
var inst_34418 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34417,(0),null);
var inst_34419 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34417,(1),null);
var state_34517__$1 = (function (){var statearr_34520 = state_34517;
(statearr_34520[(8)] = inst_34418);

return statearr_34520;
})();
if(cljs.core.truth_(inst_34419)){
var statearr_34521_36124 = state_34517__$1;
(statearr_34521_36124[(1)] = (22));

} else {
var statearr_34522_36125 = state_34517__$1;
(statearr_34522_36125[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (27))){
var inst_34453 = (state_34517[(9)]);
var inst_34451 = (state_34517[(10)]);
var inst_34459 = (state_34517[(11)]);
var inst_34366 = (state_34517[(12)]);
var inst_34459__$1 = cljs.core._nth(inst_34451,inst_34453);
var inst_34460 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34459__$1,inst_34366,done);
var state_34517__$1 = (function (){var statearr_34523 = state_34517;
(statearr_34523[(11)] = inst_34459__$1);

return statearr_34523;
})();
if(cljs.core.truth_(inst_34460)){
var statearr_34524_36129 = state_34517__$1;
(statearr_34524_36129[(1)] = (30));

} else {
var statearr_34525_36130 = state_34517__$1;
(statearr_34525_36130[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (1))){
var state_34517__$1 = state_34517;
var statearr_34526_36131 = state_34517__$1;
(statearr_34526_36131[(2)] = null);

(statearr_34526_36131[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (24))){
var inst_34402 = (state_34517[(7)]);
var inst_34425 = (state_34517[(2)]);
var inst_34426 = cljs.core.next(inst_34402);
var inst_34376 = inst_34426;
var inst_34377 = null;
var inst_34378 = (0);
var inst_34379 = (0);
var state_34517__$1 = (function (){var statearr_34527 = state_34517;
(statearr_34527[(13)] = inst_34377);

(statearr_34527[(14)] = inst_34376);

(statearr_34527[(15)] = inst_34379);

(statearr_34527[(16)] = inst_34378);

(statearr_34527[(17)] = inst_34425);

return statearr_34527;
})();
var statearr_34528_36133 = state_34517__$1;
(statearr_34528_36133[(2)] = null);

(statearr_34528_36133[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (39))){
var state_34517__$1 = state_34517;
var statearr_34532_36134 = state_34517__$1;
(statearr_34532_36134[(2)] = null);

(statearr_34532_36134[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (4))){
var inst_34366 = (state_34517[(12)]);
var inst_34366__$1 = (state_34517[(2)]);
var inst_34367 = (inst_34366__$1 == null);
var state_34517__$1 = (function (){var statearr_34533 = state_34517;
(statearr_34533[(12)] = inst_34366__$1);

return statearr_34533;
})();
if(cljs.core.truth_(inst_34367)){
var statearr_34534_36135 = state_34517__$1;
(statearr_34534_36135[(1)] = (5));

} else {
var statearr_34535_36137 = state_34517__$1;
(statearr_34535_36137[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (15))){
var inst_34377 = (state_34517[(13)]);
var inst_34376 = (state_34517[(14)]);
var inst_34379 = (state_34517[(15)]);
var inst_34378 = (state_34517[(16)]);
var inst_34397 = (state_34517[(2)]);
var inst_34398 = (inst_34379 + (1));
var tmp34529 = inst_34377;
var tmp34530 = inst_34376;
var tmp34531 = inst_34378;
var inst_34376__$1 = tmp34530;
var inst_34377__$1 = tmp34529;
var inst_34378__$1 = tmp34531;
var inst_34379__$1 = inst_34398;
var state_34517__$1 = (function (){var statearr_34536 = state_34517;
(statearr_34536[(13)] = inst_34377__$1);

(statearr_34536[(14)] = inst_34376__$1);

(statearr_34536[(15)] = inst_34379__$1);

(statearr_34536[(16)] = inst_34378__$1);

(statearr_34536[(18)] = inst_34397);

return statearr_34536;
})();
var statearr_34537_36139 = state_34517__$1;
(statearr_34537_36139[(2)] = null);

(statearr_34537_36139[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (21))){
var inst_34429 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34543_36140 = state_34517__$1;
(statearr_34543_36140[(2)] = inst_34429);

(statearr_34543_36140[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (31))){
var inst_34459 = (state_34517[(11)]);
var inst_34463 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34459);
var state_34517__$1 = state_34517;
var statearr_34544_36141 = state_34517__$1;
(statearr_34544_36141[(2)] = inst_34463);

(statearr_34544_36141[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (32))){
var inst_34453 = (state_34517[(9)]);
var inst_34451 = (state_34517[(10)]);
var inst_34450 = (state_34517[(19)]);
var inst_34452 = (state_34517[(20)]);
var inst_34465 = (state_34517[(2)]);
var inst_34467 = (inst_34453 + (1));
var tmp34539 = inst_34451;
var tmp34540 = inst_34450;
var tmp34541 = inst_34452;
var inst_34450__$1 = tmp34540;
var inst_34451__$1 = tmp34539;
var inst_34452__$1 = tmp34541;
var inst_34453__$1 = inst_34467;
var state_34517__$1 = (function (){var statearr_34545 = state_34517;
(statearr_34545[(9)] = inst_34453__$1);

(statearr_34545[(10)] = inst_34451__$1);

(statearr_34545[(19)] = inst_34450__$1);

(statearr_34545[(20)] = inst_34452__$1);

(statearr_34545[(21)] = inst_34465);

return statearr_34545;
})();
var statearr_34550_36142 = state_34517__$1;
(statearr_34550_36142[(2)] = null);

(statearr_34550_36142[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (40))){
var inst_34483 = (state_34517[(22)]);
var inst_34489 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_34483);
var state_34517__$1 = state_34517;
var statearr_34555_36143 = state_34517__$1;
(statearr_34555_36143[(2)] = inst_34489);

(statearr_34555_36143[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (33))){
var inst_34472 = (state_34517[(23)]);
var inst_34476 = cljs.core.chunked_seq_QMARK_(inst_34472);
var state_34517__$1 = state_34517;
if(inst_34476){
var statearr_34557_36144 = state_34517__$1;
(statearr_34557_36144[(1)] = (36));

} else {
var statearr_34558_36145 = state_34517__$1;
(statearr_34558_36145[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (13))){
var inst_34391 = (state_34517[(24)]);
var inst_34394 = cljs.core.async.close_BANG_(inst_34391);
var state_34517__$1 = state_34517;
var statearr_34559_36146 = state_34517__$1;
(statearr_34559_36146[(2)] = inst_34394);

(statearr_34559_36146[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (22))){
var inst_34418 = (state_34517[(8)]);
var inst_34422 = cljs.core.async.close_BANG_(inst_34418);
var state_34517__$1 = state_34517;
var statearr_34564_36147 = state_34517__$1;
(statearr_34564_36147[(2)] = inst_34422);

(statearr_34564_36147[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (36))){
var inst_34472 = (state_34517[(23)]);
var inst_34478 = cljs.core.chunk_first(inst_34472);
var inst_34479 = cljs.core.chunk_rest(inst_34472);
var inst_34480 = cljs.core.count(inst_34478);
var inst_34450 = inst_34479;
var inst_34451 = inst_34478;
var inst_34452 = inst_34480;
var inst_34453 = (0);
var state_34517__$1 = (function (){var statearr_34568 = state_34517;
(statearr_34568[(9)] = inst_34453);

(statearr_34568[(10)] = inst_34451);

(statearr_34568[(19)] = inst_34450);

(statearr_34568[(20)] = inst_34452);

return statearr_34568;
})();
var statearr_34569_36152 = state_34517__$1;
(statearr_34569_36152[(2)] = null);

(statearr_34569_36152[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (41))){
var inst_34472 = (state_34517[(23)]);
var inst_34491 = (state_34517[(2)]);
var inst_34493 = cljs.core.next(inst_34472);
var inst_34450 = inst_34493;
var inst_34451 = null;
var inst_34452 = (0);
var inst_34453 = (0);
var state_34517__$1 = (function (){var statearr_34570 = state_34517;
(statearr_34570[(9)] = inst_34453);

(statearr_34570[(10)] = inst_34451);

(statearr_34570[(19)] = inst_34450);

(statearr_34570[(25)] = inst_34491);

(statearr_34570[(20)] = inst_34452);

return statearr_34570;
})();
var statearr_34571_36153 = state_34517__$1;
(statearr_34571_36153[(2)] = null);

(statearr_34571_36153[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (43))){
var state_34517__$1 = state_34517;
var statearr_34572_36154 = state_34517__$1;
(statearr_34572_36154[(2)] = null);

(statearr_34572_36154[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (29))){
var inst_34501 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34574_36157 = state_34517__$1;
(statearr_34574_36157[(2)] = inst_34501);

(statearr_34574_36157[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (44))){
var inst_34510 = (state_34517[(2)]);
var state_34517__$1 = (function (){var statearr_34575 = state_34517;
(statearr_34575[(26)] = inst_34510);

return statearr_34575;
})();
var statearr_34576_36160 = state_34517__$1;
(statearr_34576_36160[(2)] = null);

(statearr_34576_36160[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (6))){
var inst_34441 = (state_34517[(27)]);
var inst_34440 = cljs.core.deref(cs);
var inst_34441__$1 = cljs.core.keys(inst_34440);
var inst_34443 = cljs.core.count(inst_34441__$1);
var inst_34444 = cljs.core.reset_BANG_(dctr,inst_34443);
var inst_34449 = cljs.core.seq(inst_34441__$1);
var inst_34450 = inst_34449;
var inst_34451 = null;
var inst_34452 = (0);
var inst_34453 = (0);
var state_34517__$1 = (function (){var statearr_34581 = state_34517;
(statearr_34581[(9)] = inst_34453);

(statearr_34581[(10)] = inst_34451);

(statearr_34581[(19)] = inst_34450);

(statearr_34581[(27)] = inst_34441__$1);

(statearr_34581[(28)] = inst_34444);

(statearr_34581[(20)] = inst_34452);

return statearr_34581;
})();
var statearr_34582_36161 = state_34517__$1;
(statearr_34582_36161[(2)] = null);

(statearr_34582_36161[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (28))){
var inst_34450 = (state_34517[(19)]);
var inst_34472 = (state_34517[(23)]);
var inst_34472__$1 = cljs.core.seq(inst_34450);
var state_34517__$1 = (function (){var statearr_34583 = state_34517;
(statearr_34583[(23)] = inst_34472__$1);

return statearr_34583;
})();
if(inst_34472__$1){
var statearr_34584_36165 = state_34517__$1;
(statearr_34584_36165[(1)] = (33));

} else {
var statearr_34585_36166 = state_34517__$1;
(statearr_34585_36166[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (25))){
var inst_34453 = (state_34517[(9)]);
var inst_34452 = (state_34517[(20)]);
var inst_34455 = (inst_34453 < inst_34452);
var inst_34456 = inst_34455;
var state_34517__$1 = state_34517;
if(cljs.core.truth_(inst_34456)){
var statearr_34590_36172 = state_34517__$1;
(statearr_34590_36172[(1)] = (27));

} else {
var statearr_34591_36173 = state_34517__$1;
(statearr_34591_36173[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (34))){
var state_34517__$1 = state_34517;
var statearr_34592_36174 = state_34517__$1;
(statearr_34592_36174[(2)] = null);

(statearr_34592_36174[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (17))){
var state_34517__$1 = state_34517;
var statearr_34593_36181 = state_34517__$1;
(statearr_34593_36181[(2)] = null);

(statearr_34593_36181[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (3))){
var inst_34515 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34517__$1,inst_34515);
} else {
if((state_val_34518 === (12))){
var inst_34434 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34598_36182 = state_34517__$1;
(statearr_34598_36182[(2)] = inst_34434);

(statearr_34598_36182[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (2))){
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34517__$1,(4),ch);
} else {
if((state_val_34518 === (23))){
var state_34517__$1 = state_34517;
var statearr_34599_36183 = state_34517__$1;
(statearr_34599_36183[(2)] = null);

(statearr_34599_36183[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (35))){
var inst_34499 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34601_36184 = state_34517__$1;
(statearr_34601_36184[(2)] = inst_34499);

(statearr_34601_36184[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (19))){
var inst_34402 = (state_34517[(7)]);
var inst_34407 = cljs.core.chunk_first(inst_34402);
var inst_34409 = cljs.core.chunk_rest(inst_34402);
var inst_34410 = cljs.core.count(inst_34407);
var inst_34376 = inst_34409;
var inst_34377 = inst_34407;
var inst_34378 = inst_34410;
var inst_34379 = (0);
var state_34517__$1 = (function (){var statearr_34602 = state_34517;
(statearr_34602[(13)] = inst_34377);

(statearr_34602[(14)] = inst_34376);

(statearr_34602[(15)] = inst_34379);

(statearr_34602[(16)] = inst_34378);

return statearr_34602;
})();
var statearr_34603_36186 = state_34517__$1;
(statearr_34603_36186[(2)] = null);

(statearr_34603_36186[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (11))){
var inst_34402 = (state_34517[(7)]);
var inst_34376 = (state_34517[(14)]);
var inst_34402__$1 = cljs.core.seq(inst_34376);
var state_34517__$1 = (function (){var statearr_34611 = state_34517;
(statearr_34611[(7)] = inst_34402__$1);

return statearr_34611;
})();
if(inst_34402__$1){
var statearr_34612_36187 = state_34517__$1;
(statearr_34612_36187[(1)] = (16));

} else {
var statearr_34614_36188 = state_34517__$1;
(statearr_34614_36188[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (9))){
var inst_34437 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34615_36189 = state_34517__$1;
(statearr_34615_36189[(2)] = inst_34437);

(statearr_34615_36189[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (5))){
var inst_34374 = cljs.core.deref(cs);
var inst_34375 = cljs.core.seq(inst_34374);
var inst_34376 = inst_34375;
var inst_34377 = null;
var inst_34378 = (0);
var inst_34379 = (0);
var state_34517__$1 = (function (){var statearr_34619 = state_34517;
(statearr_34619[(13)] = inst_34377);

(statearr_34619[(14)] = inst_34376);

(statearr_34619[(15)] = inst_34379);

(statearr_34619[(16)] = inst_34378);

return statearr_34619;
})();
var statearr_34621_36191 = state_34517__$1;
(statearr_34621_36191[(2)] = null);

(statearr_34621_36191[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (14))){
var state_34517__$1 = state_34517;
var statearr_34622_36192 = state_34517__$1;
(statearr_34622_36192[(2)] = null);

(statearr_34622_36192[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (45))){
var inst_34507 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34627_36193 = state_34517__$1;
(statearr_34627_36193[(2)] = inst_34507);

(statearr_34627_36193[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (26))){
var inst_34441 = (state_34517[(27)]);
var inst_34503 = (state_34517[(2)]);
var inst_34504 = cljs.core.seq(inst_34441);
var state_34517__$1 = (function (){var statearr_34628 = state_34517;
(statearr_34628[(29)] = inst_34503);

return statearr_34628;
})();
if(inst_34504){
var statearr_34629_36194 = state_34517__$1;
(statearr_34629_36194[(1)] = (42));

} else {
var statearr_34633_36195 = state_34517__$1;
(statearr_34633_36195[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (16))){
var inst_34402 = (state_34517[(7)]);
var inst_34404 = cljs.core.chunked_seq_QMARK_(inst_34402);
var state_34517__$1 = state_34517;
if(inst_34404){
var statearr_34635_36196 = state_34517__$1;
(statearr_34635_36196[(1)] = (19));

} else {
var statearr_34636_36197 = state_34517__$1;
(statearr_34636_36197[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (38))){
var inst_34496 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34638_36198 = state_34517__$1;
(statearr_34638_36198[(2)] = inst_34496);

(statearr_34638_36198[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (30))){
var state_34517__$1 = state_34517;
var statearr_34639_36199 = state_34517__$1;
(statearr_34639_36199[(2)] = null);

(statearr_34639_36199[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (10))){
var inst_34377 = (state_34517[(13)]);
var inst_34379 = (state_34517[(15)]);
var inst_34389 = cljs.core._nth(inst_34377,inst_34379);
var inst_34391 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34389,(0),null);
var inst_34392 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34389,(1),null);
var state_34517__$1 = (function (){var statearr_34640 = state_34517;
(statearr_34640[(24)] = inst_34391);

return statearr_34640;
})();
if(cljs.core.truth_(inst_34392)){
var statearr_34641_36200 = state_34517__$1;
(statearr_34641_36200[(1)] = (13));

} else {
var statearr_34642_36201 = state_34517__$1;
(statearr_34642_36201[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (18))){
var inst_34432 = (state_34517[(2)]);
var state_34517__$1 = state_34517;
var statearr_34647_36202 = state_34517__$1;
(statearr_34647_36202[(2)] = inst_34432);

(statearr_34647_36202[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (42))){
var state_34517__$1 = state_34517;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34517__$1,(45),dchan);
} else {
if((state_val_34518 === (37))){
var inst_34472 = (state_34517[(23)]);
var inst_34366 = (state_34517[(12)]);
var inst_34483 = (state_34517[(22)]);
var inst_34483__$1 = cljs.core.first(inst_34472);
var inst_34485 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_34483__$1,inst_34366,done);
var state_34517__$1 = (function (){var statearr_34652 = state_34517;
(statearr_34652[(22)] = inst_34483__$1);

return statearr_34652;
})();
if(cljs.core.truth_(inst_34485)){
var statearr_34653_36209 = state_34517__$1;
(statearr_34653_36209[(1)] = (39));

} else {
var statearr_34654_36210 = state_34517__$1;
(statearr_34654_36210[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34518 === (8))){
var inst_34379 = (state_34517[(15)]);
var inst_34378 = (state_34517[(16)]);
var inst_34381 = (inst_34379 < inst_34378);
var inst_34382 = inst_34381;
var state_34517__$1 = state_34517;
if(cljs.core.truth_(inst_34382)){
var statearr_34659_36211 = state_34517__$1;
(statearr_34659_36211[(1)] = (10));

} else {
var statearr_34660_36212 = state_34517__$1;
(statearr_34660_36212[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__33271__auto__ = null;
var cljs$core$async$mult_$_state_machine__33271__auto____0 = (function (){
var statearr_34665 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34665[(0)] = cljs$core$async$mult_$_state_machine__33271__auto__);

(statearr_34665[(1)] = (1));

return statearr_34665;
});
var cljs$core$async$mult_$_state_machine__33271__auto____1 = (function (state_34517){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_34517);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34669){var ex__33274__auto__ = e34669;
var statearr_34671_36213 = state_34517;
(statearr_34671_36213[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_34517[(4)]))){
var statearr_34672_36214 = state_34517;
(statearr_34672_36214[(1)] = cljs.core.first((state_34517[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36215 = state_34517;
state_34517 = G__36215;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33271__auto__ = function(state_34517){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33271__auto____1.call(this,state_34517);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33271__auto____0;
cljs$core$async$mult_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33271__auto____1;
return cljs$core$async$mult_$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_34673 = f__33445__auto__();
(statearr_34673[(6)] = c__33444__auto___36120);

return statearr_34673;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__34676 = arguments.length;
switch (G__34676) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

var cljs$core$async$Mix$admix_STAR_$dyn_36217 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
});
cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$admix_STAR_$dyn_36217(m,ch);
}
});

var cljs$core$async$Mix$unmix_STAR_$dyn_36218 = (function (m,ch){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5394__auto__.call(null,m,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__5392__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
});
cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
return cljs$core$async$Mix$unmix_STAR_$dyn_36218(m,ch);
}
});

var cljs$core$async$Mix$unmix_all_STAR_$dyn_36225 = (function (m){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5394__auto__.call(null,m));
} else {
var m__5392__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__5392__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
});
cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
return cljs$core$async$Mix$unmix_all_STAR_$dyn_36225(m);
}
});

var cljs$core$async$Mix$toggle_STAR_$dyn_36226 = (function (m,state_map){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5394__auto__.call(null,m,state_map));
} else {
var m__5392__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__5392__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
});
cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
return cljs$core$async$Mix$toggle_STAR_$dyn_36226(m,state_map);
}
});

var cljs$core$async$Mix$solo_mode_STAR_$dyn_36227 = (function (m,mode){
var x__5393__auto__ = (((m == null))?null:m);
var m__5394__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5394__auto__.call(null,m,mode));
} else {
var m__5392__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__5392__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
});
cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
return cljs$core$async$Mix$solo_mode_STAR_$dyn_36227(m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__5775__auto__ = [];
var len__5769__auto___36228 = arguments.length;
var i__5770__auto___36229 = (0);
while(true){
if((i__5770__auto___36229 < len__5769__auto___36228)){
args__5775__auto__.push((arguments[i__5770__auto___36229]));

var G__36230 = (i__5770__auto___36229 + (1));
i__5770__auto___36229 = G__36230;
continue;
} else {
}
break;
}

var argseq__5776__auto__ = ((((3) < args__5775__auto__.length))?(new cljs.core.IndexedSeq(args__5775__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5776__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__34708){
var map__34709 = p__34708;
var map__34709__$1 = cljs.core.__destructure_map(map__34709);
var opts = map__34709__$1;
var statearr_34710_36231 = state;
(statearr_34710_36231[(1)] = cont_block);


var temp__5804__auto__ = cljs.core.async.do_alts((function (val){
var statearr_34711_36232 = state;
(statearr_34711_36232[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5804__auto__)){
var cb = temp__5804__auto__;
var statearr_34712_36233 = state;
(statearr_34712_36233[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq34704){
var G__34705 = cljs.core.first(seq34704);
var seq34704__$1 = cljs.core.next(seq34704);
var G__34706 = cljs.core.first(seq34704__$1);
var seq34704__$2 = cljs.core.next(seq34704__$1);
var G__34707 = cljs.core.first(seq34704__$2);
var seq34704__$3 = cljs.core.next(seq34704__$2);
var self__5754__auto__ = this;
return self__5754__auto__.cljs$core$IFn$_invoke$arity$variadic(G__34705,G__34706,G__34707,seq34704__$3);
}));


/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34713 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34714){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta34714 = meta34714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34715,meta34714__$1){
var self__ = this;
var _34715__$1 = this;
return (new cljs.core.async.t_cljs$core$async34713(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta34714__$1));
}));

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34715){
var self__ = this;
var _34715__$1 = this;
return self__.meta34714;
}));

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34713.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async34713.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta34714","meta34714",83683884,null)], null);
}));

(cljs.core.async.t_cljs$core$async34713.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34713.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34713");

(cljs.core.async.t_cljs$core$async34713.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34713");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34713.
 */
cljs.core.async.__GT_t_cljs$core$async34713 = (function cljs$core$async$__GT_t_cljs$core$async34713(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34714){
return (new cljs.core.async.t_cljs$core$async34713(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta34714));
});


/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.async.sliding_buffer((1)));
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (new cljs.core.async.t_cljs$core$async34713(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
var c__33444__auto___36244 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_34783){
var state_val_34784 = (state_34783[(1)]);
if((state_val_34784 === (7))){
var inst_34743 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34743)){
var statearr_34786_36245 = state_34783__$1;
(statearr_34786_36245[(1)] = (8));

} else {
var statearr_34788_36246 = state_34783__$1;
(statearr_34788_36246[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (20))){
var inst_34736 = (state_34783[(7)]);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34783__$1,(23),out,inst_34736);
} else {
if((state_val_34784 === (1))){
var inst_34719 = calc_state();
var inst_34720 = cljs.core.__destructure_map(inst_34719);
var inst_34721 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34720,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34722 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34720,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34723 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34720,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34724 = inst_34719;
var state_34783__$1 = (function (){var statearr_34789 = state_34783;
(statearr_34789[(8)] = inst_34724);

(statearr_34789[(9)] = inst_34721);

(statearr_34789[(10)] = inst_34723);

(statearr_34789[(11)] = inst_34722);

return statearr_34789;
})();
var statearr_34790_36247 = state_34783__$1;
(statearr_34790_36247[(2)] = null);

(statearr_34790_36247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (24))){
var inst_34727 = (state_34783[(12)]);
var inst_34724 = inst_34727;
var state_34783__$1 = (function (){var statearr_34791 = state_34783;
(statearr_34791[(8)] = inst_34724);

return statearr_34791;
})();
var statearr_34792_36248 = state_34783__$1;
(statearr_34792_36248[(2)] = null);

(statearr_34792_36248[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (4))){
var inst_34738 = (state_34783[(13)]);
var inst_34736 = (state_34783[(7)]);
var inst_34735 = (state_34783[(2)]);
var inst_34736__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34735,(0),null);
var inst_34737 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_34735,(1),null);
var inst_34738__$1 = (inst_34736__$1 == null);
var state_34783__$1 = (function (){var statearr_34793 = state_34783;
(statearr_34793[(14)] = inst_34737);

(statearr_34793[(13)] = inst_34738__$1);

(statearr_34793[(7)] = inst_34736__$1);

return statearr_34793;
})();
if(cljs.core.truth_(inst_34738__$1)){
var statearr_34795_36249 = state_34783__$1;
(statearr_34795_36249[(1)] = (5));

} else {
var statearr_34796_36250 = state_34783__$1;
(statearr_34796_36250[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (15))){
var inst_34728 = (state_34783[(15)]);
var inst_34757 = (state_34783[(16)]);
var inst_34757__$1 = cljs.core.empty_QMARK_(inst_34728);
var state_34783__$1 = (function (){var statearr_34798 = state_34783;
(statearr_34798[(16)] = inst_34757__$1);

return statearr_34798;
})();
if(inst_34757__$1){
var statearr_34799_36251 = state_34783__$1;
(statearr_34799_36251[(1)] = (17));

} else {
var statearr_34800_36252 = state_34783__$1;
(statearr_34800_36252[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (21))){
var inst_34727 = (state_34783[(12)]);
var inst_34724 = inst_34727;
var state_34783__$1 = (function (){var statearr_34801 = state_34783;
(statearr_34801[(8)] = inst_34724);

return statearr_34801;
})();
var statearr_34802_36253 = state_34783__$1;
(statearr_34802_36253[(2)] = null);

(statearr_34802_36253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (13))){
var inst_34750 = (state_34783[(2)]);
var inst_34751 = calc_state();
var inst_34724 = inst_34751;
var state_34783__$1 = (function (){var statearr_34803 = state_34783;
(statearr_34803[(8)] = inst_34724);

(statearr_34803[(17)] = inst_34750);

return statearr_34803;
})();
var statearr_34804_36258 = state_34783__$1;
(statearr_34804_36258[(2)] = null);

(statearr_34804_36258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (22))){
var inst_34777 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34805_36259 = state_34783__$1;
(statearr_34805_36259[(2)] = inst_34777);

(statearr_34805_36259[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (6))){
var inst_34737 = (state_34783[(14)]);
var inst_34741 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_34737,change);
var state_34783__$1 = state_34783;
var statearr_34807_36260 = state_34783__$1;
(statearr_34807_36260[(2)] = inst_34741);

(statearr_34807_36260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (25))){
var state_34783__$1 = state_34783;
var statearr_34809_36261 = state_34783__$1;
(statearr_34809_36261[(2)] = null);

(statearr_34809_36261[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (17))){
var inst_34737 = (state_34783[(14)]);
var inst_34729 = (state_34783[(18)]);
var inst_34759 = (inst_34729.cljs$core$IFn$_invoke$arity$1 ? inst_34729.cljs$core$IFn$_invoke$arity$1(inst_34737) : inst_34729.call(null,inst_34737));
var inst_34760 = cljs.core.not(inst_34759);
var state_34783__$1 = state_34783;
var statearr_34810_36262 = state_34783__$1;
(statearr_34810_36262[(2)] = inst_34760);

(statearr_34810_36262[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (3))){
var inst_34781 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34783__$1,inst_34781);
} else {
if((state_val_34784 === (12))){
var state_34783__$1 = state_34783;
var statearr_34811_36264 = state_34783__$1;
(statearr_34811_36264[(2)] = null);

(statearr_34811_36264[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (2))){
var inst_34727 = (state_34783[(12)]);
var inst_34724 = (state_34783[(8)]);
var inst_34727__$1 = cljs.core.__destructure_map(inst_34724);
var inst_34728 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34727__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34729 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34727__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34730 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34727__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34783__$1 = (function (){var statearr_34812 = state_34783;
(statearr_34812[(12)] = inst_34727__$1);

(statearr_34812[(15)] = inst_34728);

(statearr_34812[(18)] = inst_34729);

return statearr_34812;
})();
return cljs.core.async.ioc_alts_BANG_(state_34783__$1,(4),inst_34730);
} else {
if((state_val_34784 === (23))){
var inst_34768 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34768)){
var statearr_34813_36269 = state_34783__$1;
(statearr_34813_36269[(1)] = (24));

} else {
var statearr_34814_36270 = state_34783__$1;
(statearr_34814_36270[(1)] = (25));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (19))){
var inst_34763 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34815_36271 = state_34783__$1;
(statearr_34815_36271[(2)] = inst_34763);

(statearr_34815_36271[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (11))){
var inst_34737 = (state_34783[(14)]);
var inst_34747 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_34737);
var state_34783__$1 = state_34783;
var statearr_34816_36272 = state_34783__$1;
(statearr_34816_36272[(2)] = inst_34747);

(statearr_34816_36272[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (9))){
var inst_34737 = (state_34783[(14)]);
var inst_34728 = (state_34783[(15)]);
var inst_34754 = (state_34783[(19)]);
var inst_34754__$1 = (inst_34728.cljs$core$IFn$_invoke$arity$1 ? inst_34728.cljs$core$IFn$_invoke$arity$1(inst_34737) : inst_34728.call(null,inst_34737));
var state_34783__$1 = (function (){var statearr_34817 = state_34783;
(statearr_34817[(19)] = inst_34754__$1);

return statearr_34817;
})();
if(cljs.core.truth_(inst_34754__$1)){
var statearr_34818_36273 = state_34783__$1;
(statearr_34818_36273[(1)] = (14));

} else {
var statearr_34819_36274 = state_34783__$1;
(statearr_34819_36274[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (5))){
var inst_34738 = (state_34783[(13)]);
var state_34783__$1 = state_34783;
var statearr_34820_36275 = state_34783__$1;
(statearr_34820_36275[(2)] = inst_34738);

(statearr_34820_36275[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (14))){
var inst_34754 = (state_34783[(19)]);
var state_34783__$1 = state_34783;
var statearr_34821_36276 = state_34783__$1;
(statearr_34821_36276[(2)] = inst_34754);

(statearr_34821_36276[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (26))){
var inst_34773 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34823_36277 = state_34783__$1;
(statearr_34823_36277[(2)] = inst_34773);

(statearr_34823_36277[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (16))){
var inst_34765 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34765)){
var statearr_34825_36278 = state_34783__$1;
(statearr_34825_36278[(1)] = (20));

} else {
var statearr_34826_36279 = state_34783__$1;
(statearr_34826_36279[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (10))){
var inst_34779 = (state_34783[(2)]);
var state_34783__$1 = state_34783;
var statearr_34827_36280 = state_34783__$1;
(statearr_34827_36280[(2)] = inst_34779);

(statearr_34827_36280[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (18))){
var inst_34757 = (state_34783[(16)]);
var state_34783__$1 = state_34783;
var statearr_34828_36281 = state_34783__$1;
(statearr_34828_36281[(2)] = inst_34757);

(statearr_34828_36281[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34784 === (8))){
var inst_34736 = (state_34783[(7)]);
var inst_34745 = (inst_34736 == null);
var state_34783__$1 = state_34783;
if(cljs.core.truth_(inst_34745)){
var statearr_34833_36283 = state_34783__$1;
(statearr_34833_36283[(1)] = (11));

} else {
var statearr_34834_36284 = state_34783__$1;
(statearr_34834_36284[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mix_$_state_machine__33271__auto__ = null;
var cljs$core$async$mix_$_state_machine__33271__auto____0 = (function (){
var statearr_34835 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34835[(0)] = cljs$core$async$mix_$_state_machine__33271__auto__);

(statearr_34835[(1)] = (1));

return statearr_34835;
});
var cljs$core$async$mix_$_state_machine__33271__auto____1 = (function (state_34783){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_34783);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e34836){var ex__33274__auto__ = e34836;
var statearr_34838_36286 = state_34783;
(statearr_34838_36286[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_34783[(4)]))){
var statearr_34839_36287 = state_34783;
(statearr_34839_36287[(1)] = cljs.core.first((state_34783[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36288 = state_34783;
state_34783 = G__36288;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33271__auto__ = function(state_34783){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33271__auto____1.call(this,state_34783);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33271__auto____0;
cljs$core$async$mix_$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33271__auto____1;
return cljs$core$async$mix_$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_34840 = f__33445__auto__();
(statearr_34840[(6)] = c__33444__auto___36244);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

var cljs$core$async$Pub$sub_STAR_$dyn_36291 = (function (p,v,ch,close_QMARK_){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5394__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__5392__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$4 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__5392__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
});
cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
return cljs$core$async$Pub$sub_STAR_$dyn_36291(p,v,ch,close_QMARK_);
}
});

var cljs$core$async$Pub$unsub_STAR_$dyn_36292 = (function (p,v,ch){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5394__auto__.call(null,p,v,ch));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__5392__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
});
cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
return cljs$core$async$Pub$unsub_STAR_$dyn_36292(p,v,ch);
}
});

var cljs$core$async$Pub$unsub_all_STAR_$dyn_36293 = (function() {
var G__36294 = null;
var G__36294__1 = (function (p){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5394__auto__.call(null,p));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__5392__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
var G__36294__2 = (function (p,v){
var x__5393__auto__ = (((p == null))?null:p);
var m__5394__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__5393__auto__)]);
if((!((m__5394__auto__ == null)))){
return (m__5394__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5394__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5394__auto__.call(null,p,v));
} else {
var m__5392__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__5392__auto__ == null)))){
return (m__5392__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5392__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__5392__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
});
G__36294 = function(p,v){
switch(arguments.length){
case 1:
return G__36294__1.call(this,p);
case 2:
return G__36294__2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__36294.cljs$core$IFn$_invoke$arity$1 = G__36294__1;
G__36294.cljs$core$IFn$_invoke$arity$2 = G__36294__2;
return G__36294;
})()
;
cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__34878 = arguments.length;
switch (G__34878) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36293(p);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
return cljs$core$async$Pub$unsub_all_STAR_$dyn_36293(p,v);
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);



/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34889 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34890){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34890 = meta34890;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34891,meta34890__$1){
var self__ = this;
var _34891__$1 = this;
return (new cljs.core.async.t_cljs$core$async34889(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34890__$1));
}));

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34891){
var self__ = this;
var _34891__$1 = this;
return self__.meta34890;
}));

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5804__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5804__auto__)){
var m = temp__5804__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async34889.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async34889.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34890","meta34890",-1851402976,null)], null);
}));

(cljs.core.async.t_cljs$core$async34889.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async34889.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34889");

(cljs.core.async.t_cljs$core$async34889.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async34889");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async34889.
 */
cljs.core.async.__GT_t_cljs$core$async34889 = (function cljs$core$async$__GT_t_cljs$core$async34889(ch,topic_fn,buf_fn,mults,ensure_mult,meta34890){
return (new cljs.core.async.t_cljs$core$async34889(ch,topic_fn,buf_fn,mults,ensure_mult,meta34890));
});


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__34888 = arguments.length;
switch (G__34888) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__5045__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__34882_SHARP_){
if(cljs.core.truth_((p1__34882_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__34882_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__34882_SHARP_.call(null,topic)))){
return p1__34882_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__34882_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (new cljs.core.async.t_cljs$core$async34889(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
var c__33444__auto___36299 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_34973){
var state_val_34974 = (state_34973[(1)]);
if((state_val_34974 === (7))){
var inst_34969 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_34977_36300 = state_34973__$1;
(statearr_34977_36300[(2)] = inst_34969);

(statearr_34977_36300[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (20))){
var state_34973__$1 = state_34973;
var statearr_34981_36301 = state_34973__$1;
(statearr_34981_36301[(2)] = null);

(statearr_34981_36301[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (1))){
var state_34973__$1 = state_34973;
var statearr_34982_36302 = state_34973__$1;
(statearr_34982_36302[(2)] = null);

(statearr_34982_36302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (24))){
var inst_34951 = (state_34973[(7)]);
var inst_34961 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_34951);
var state_34973__$1 = state_34973;
var statearr_34983_36303 = state_34973__$1;
(statearr_34983_36303[(2)] = inst_34961);

(statearr_34983_36303[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (4))){
var inst_34902 = (state_34973[(8)]);
var inst_34902__$1 = (state_34973[(2)]);
var inst_34903 = (inst_34902__$1 == null);
var state_34973__$1 = (function (){var statearr_34984 = state_34973;
(statearr_34984[(8)] = inst_34902__$1);

return statearr_34984;
})();
if(cljs.core.truth_(inst_34903)){
var statearr_34985_36304 = state_34973__$1;
(statearr_34985_36304[(1)] = (5));

} else {
var statearr_34986_36305 = state_34973__$1;
(statearr_34986_36305[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (15))){
var inst_34944 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_34987_36306 = state_34973__$1;
(statearr_34987_36306[(2)] = inst_34944);

(statearr_34987_36306[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (21))){
var inst_34966 = (state_34973[(2)]);
var state_34973__$1 = (function (){var statearr_34988 = state_34973;
(statearr_34988[(9)] = inst_34966);

return statearr_34988;
})();
var statearr_34989_36307 = state_34973__$1;
(statearr_34989_36307[(2)] = null);

(statearr_34989_36307[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (13))){
var inst_34926 = (state_34973[(10)]);
var inst_34928 = cljs.core.chunked_seq_QMARK_(inst_34926);
var state_34973__$1 = state_34973;
if(inst_34928){
var statearr_34990_36308 = state_34973__$1;
(statearr_34990_36308[(1)] = (16));

} else {
var statearr_34991_36309 = state_34973__$1;
(statearr_34991_36309[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (22))){
var inst_34958 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
if(cljs.core.truth_(inst_34958)){
var statearr_34992_36310 = state_34973__$1;
(statearr_34992_36310[(1)] = (23));

} else {
var statearr_34993_36311 = state_34973__$1;
(statearr_34993_36311[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (6))){
var inst_34951 = (state_34973[(7)]);
var inst_34953 = (state_34973[(11)]);
var inst_34902 = (state_34973[(8)]);
var inst_34951__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_34902) : topic_fn.call(null,inst_34902));
var inst_34952 = cljs.core.deref(mults);
var inst_34953__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_34952,inst_34951__$1);
var state_34973__$1 = (function (){var statearr_34994 = state_34973;
(statearr_34994[(7)] = inst_34951__$1);

(statearr_34994[(11)] = inst_34953__$1);

return statearr_34994;
})();
if(cljs.core.truth_(inst_34953__$1)){
var statearr_34995_36312 = state_34973__$1;
(statearr_34995_36312[(1)] = (19));

} else {
var statearr_34996_36313 = state_34973__$1;
(statearr_34996_36313[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (25))){
var inst_34963 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_34997_36314 = state_34973__$1;
(statearr_34997_36314[(2)] = inst_34963);

(statearr_34997_36314[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (17))){
var inst_34926 = (state_34973[(10)]);
var inst_34935 = cljs.core.first(inst_34926);
var inst_34936 = cljs.core.async.muxch_STAR_(inst_34935);
var inst_34937 = cljs.core.async.close_BANG_(inst_34936);
var inst_34938 = cljs.core.next(inst_34926);
var inst_34912 = inst_34938;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34973__$1 = (function (){var statearr_34998 = state_34973;
(statearr_34998[(12)] = inst_34914);

(statearr_34998[(13)] = inst_34913);

(statearr_34998[(14)] = inst_34937);

(statearr_34998[(15)] = inst_34915);

(statearr_34998[(16)] = inst_34912);

return statearr_34998;
})();
var statearr_34999_36317 = state_34973__$1;
(statearr_34999_36317[(2)] = null);

(statearr_34999_36317[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (3))){
var inst_34971 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.return_chan(state_34973__$1,inst_34971);
} else {
if((state_val_34974 === (12))){
var inst_34946 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35001_36323 = state_34973__$1;
(statearr_35001_36323[(2)] = inst_34946);

(statearr_35001_36323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (2))){
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_34973__$1,(4),ch);
} else {
if((state_val_34974 === (23))){
var state_34973__$1 = state_34973;
var statearr_35005_36324 = state_34973__$1;
(statearr_35005_36324[(2)] = null);

(statearr_35005_36324[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (19))){
var inst_34953 = (state_34973[(11)]);
var inst_34902 = (state_34973[(8)]);
var inst_34956 = cljs.core.async.muxch_STAR_(inst_34953);
var state_34973__$1 = state_34973;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_34973__$1,(22),inst_34956,inst_34902);
} else {
if((state_val_34974 === (11))){
var inst_34926 = (state_34973[(10)]);
var inst_34912 = (state_34973[(16)]);
var inst_34926__$1 = cljs.core.seq(inst_34912);
var state_34973__$1 = (function (){var statearr_35007 = state_34973;
(statearr_35007[(10)] = inst_34926__$1);

return statearr_35007;
})();
if(inst_34926__$1){
var statearr_35008_36328 = state_34973__$1;
(statearr_35008_36328[(1)] = (13));

} else {
var statearr_35009_36329 = state_34973__$1;
(statearr_35009_36329[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (9))){
var inst_34949 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35010_36331 = state_34973__$1;
(statearr_35010_36331[(2)] = inst_34949);

(statearr_35010_36331[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (5))){
var inst_34909 = cljs.core.deref(mults);
var inst_34910 = cljs.core.vals(inst_34909);
var inst_34911 = cljs.core.seq(inst_34910);
var inst_34912 = inst_34911;
var inst_34913 = null;
var inst_34914 = (0);
var inst_34915 = (0);
var state_34973__$1 = (function (){var statearr_35012 = state_34973;
(statearr_35012[(12)] = inst_34914);

(statearr_35012[(13)] = inst_34913);

(statearr_35012[(15)] = inst_34915);

(statearr_35012[(16)] = inst_34912);

return statearr_35012;
})();
var statearr_35014_36341 = state_34973__$1;
(statearr_35014_36341[(2)] = null);

(statearr_35014_36341[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (14))){
var state_34973__$1 = state_34973;
var statearr_35018_36345 = state_34973__$1;
(statearr_35018_36345[(2)] = null);

(statearr_35018_36345[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (16))){
var inst_34926 = (state_34973[(10)]);
var inst_34930 = cljs.core.chunk_first(inst_34926);
var inst_34931 = cljs.core.chunk_rest(inst_34926);
var inst_34932 = cljs.core.count(inst_34930);
var inst_34912 = inst_34931;
var inst_34913 = inst_34930;
var inst_34914 = inst_34932;
var inst_34915 = (0);
var state_34973__$1 = (function (){var statearr_35019 = state_34973;
(statearr_35019[(12)] = inst_34914);

(statearr_35019[(13)] = inst_34913);

(statearr_35019[(15)] = inst_34915);

(statearr_35019[(16)] = inst_34912);

return statearr_35019;
})();
var statearr_35020_36350 = state_34973__$1;
(statearr_35020_36350[(2)] = null);

(statearr_35020_36350[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (10))){
var inst_34914 = (state_34973[(12)]);
var inst_34913 = (state_34973[(13)]);
var inst_34915 = (state_34973[(15)]);
var inst_34912 = (state_34973[(16)]);
var inst_34920 = cljs.core._nth(inst_34913,inst_34915);
var inst_34921 = cljs.core.async.muxch_STAR_(inst_34920);
var inst_34922 = cljs.core.async.close_BANG_(inst_34921);
var inst_34923 = (inst_34915 + (1));
var tmp35015 = inst_34914;
var tmp35016 = inst_34913;
var tmp35017 = inst_34912;
var inst_34912__$1 = tmp35017;
var inst_34913__$1 = tmp35016;
var inst_34914__$1 = tmp35015;
var inst_34915__$1 = inst_34923;
var state_34973__$1 = (function (){var statearr_35021 = state_34973;
(statearr_35021[(12)] = inst_34914__$1);

(statearr_35021[(13)] = inst_34913__$1);

(statearr_35021[(15)] = inst_34915__$1);

(statearr_35021[(16)] = inst_34912__$1);

(statearr_35021[(17)] = inst_34922);

return statearr_35021;
})();
var statearr_35022_36358 = state_34973__$1;
(statearr_35022_36358[(2)] = null);

(statearr_35022_36358[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (18))){
var inst_34941 = (state_34973[(2)]);
var state_34973__$1 = state_34973;
var statearr_35024_36359 = state_34973__$1;
(statearr_35024_36359[(2)] = inst_34941);

(statearr_35024_36359[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34974 === (8))){
var inst_34914 = (state_34973[(12)]);
var inst_34915 = (state_34973[(15)]);
var inst_34917 = (inst_34915 < inst_34914);
var inst_34918 = inst_34917;
var state_34973__$1 = state_34973;
if(cljs.core.truth_(inst_34918)){
var statearr_35026_36361 = state_34973__$1;
(statearr_35026_36361[(1)] = (10));

} else {
var statearr_35027_36365 = state_34973__$1;
(statearr_35027_36365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35031 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35031[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35031[(1)] = (1));

return statearr_35031;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_34973){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_34973);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35032){var ex__33274__auto__ = e35032;
var statearr_35033_36374 = state_34973;
(statearr_35033_36374[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_34973[(4)]))){
var statearr_35034_36375 = state_34973;
(statearr_35034_36375[(1)] = cljs.core.first((state_34973[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36376 = state_34973;
state_34973 = G__36376;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_34973){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_34973);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35035 = f__33445__auto__();
(statearr_35035[(6)] = c__33444__auto___36299);

return statearr_35035;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35037 = arguments.length;
switch (G__35037) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35043 = arguments.length;
switch (G__35043) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35049 = arguments.length;
switch (G__35049) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
if((cnt === (0))){
cljs.core.async.close_BANG_(out);
} else {
var c__33444__auto___36397 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35097){
var state_val_35098 = (state_35097[(1)]);
if((state_val_35098 === (7))){
var state_35097__$1 = state_35097;
var statearr_35099_36402 = state_35097__$1;
(statearr_35099_36402[(2)] = null);

(statearr_35099_36402[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (1))){
var state_35097__$1 = state_35097;
var statearr_35100_36404 = state_35097__$1;
(statearr_35100_36404[(2)] = null);

(statearr_35100_36404[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (4))){
var inst_35052 = (state_35097[(7)]);
var inst_35053 = (state_35097[(8)]);
var inst_35055 = (inst_35053 < inst_35052);
var state_35097__$1 = state_35097;
if(cljs.core.truth_(inst_35055)){
var statearr_35101_36405 = state_35097__$1;
(statearr_35101_36405[(1)] = (6));

} else {
var statearr_35102_36406 = state_35097__$1;
(statearr_35102_36406[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (15))){
var inst_35083 = (state_35097[(9)]);
var inst_35088 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_35083);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35097__$1,(17),out,inst_35088);
} else {
if((state_val_35098 === (13))){
var inst_35083 = (state_35097[(9)]);
var inst_35083__$1 = (state_35097[(2)]);
var inst_35084 = cljs.core.some(cljs.core.nil_QMARK_,inst_35083__$1);
var state_35097__$1 = (function (){var statearr_35103 = state_35097;
(statearr_35103[(9)] = inst_35083__$1);

return statearr_35103;
})();
if(cljs.core.truth_(inst_35084)){
var statearr_35104_36408 = state_35097__$1;
(statearr_35104_36408[(1)] = (14));

} else {
var statearr_35105_36409 = state_35097__$1;
(statearr_35105_36409[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (6))){
var state_35097__$1 = state_35097;
var statearr_35106_36410 = state_35097__$1;
(statearr_35106_36410[(2)] = null);

(statearr_35106_36410[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (17))){
var inst_35090 = (state_35097[(2)]);
var state_35097__$1 = (function (){var statearr_35108 = state_35097;
(statearr_35108[(10)] = inst_35090);

return statearr_35108;
})();
var statearr_35109_36411 = state_35097__$1;
(statearr_35109_36411[(2)] = null);

(statearr_35109_36411[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (3))){
var inst_35095 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35097__$1,inst_35095);
} else {
if((state_val_35098 === (12))){
var _ = (function (){var statearr_35110 = state_35097;
(statearr_35110[(4)] = cljs.core.rest((state_35097[(4)])));

return statearr_35110;
})();
var state_35097__$1 = state_35097;
var ex35107 = (state_35097__$1[(2)]);
var statearr_35111_36412 = state_35097__$1;
(statearr_35111_36412[(5)] = ex35107);


if((ex35107 instanceof Object)){
var statearr_35112_36413 = state_35097__$1;
(statearr_35112_36413[(1)] = (11));

(statearr_35112_36413[(5)] = null);

} else {
throw ex35107;

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (2))){
var inst_35051 = cljs.core.reset_BANG_(dctr,cnt);
var inst_35052 = cnt;
var inst_35053 = (0);
var state_35097__$1 = (function (){var statearr_35113 = state_35097;
(statearr_35113[(7)] = inst_35052);

(statearr_35113[(11)] = inst_35051);

(statearr_35113[(8)] = inst_35053);

return statearr_35113;
})();
var statearr_35114_36418 = state_35097__$1;
(statearr_35114_36418[(2)] = null);

(statearr_35114_36418[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (11))){
var inst_35059 = (state_35097[(2)]);
var inst_35060 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_35097__$1 = (function (){var statearr_35115 = state_35097;
(statearr_35115[(12)] = inst_35059);

return statearr_35115;
})();
var statearr_35116_36419 = state_35097__$1;
(statearr_35116_36419[(2)] = inst_35060);

(statearr_35116_36419[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (9))){
var inst_35053 = (state_35097[(8)]);
var _ = (function (){var statearr_35117 = state_35097;
(statearr_35117[(4)] = cljs.core.cons((12),(state_35097[(4)])));

return statearr_35117;
})();
var inst_35069 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_35053) : chs__$1.call(null,inst_35053));
var inst_35070 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_35053) : done.call(null,inst_35053));
var inst_35071 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_35069,inst_35070);
var ___$1 = (function (){var statearr_35118 = state_35097;
(statearr_35118[(4)] = cljs.core.rest((state_35097[(4)])));

return statearr_35118;
})();
var state_35097__$1 = state_35097;
var statearr_35119_36420 = state_35097__$1;
(statearr_35119_36420[(2)] = inst_35071);

(statearr_35119_36420[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (5))){
var inst_35081 = (state_35097[(2)]);
var state_35097__$1 = (function (){var statearr_35120 = state_35097;
(statearr_35120[(13)] = inst_35081);

return statearr_35120;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35097__$1,(13),dchan);
} else {
if((state_val_35098 === (14))){
var inst_35086 = cljs.core.async.close_BANG_(out);
var state_35097__$1 = state_35097;
var statearr_35121_36421 = state_35097__$1;
(statearr_35121_36421[(2)] = inst_35086);

(statearr_35121_36421[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (16))){
var inst_35093 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35122_36422 = state_35097__$1;
(statearr_35122_36422[(2)] = inst_35093);

(statearr_35122_36422[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (10))){
var inst_35053 = (state_35097[(8)]);
var inst_35074 = (state_35097[(2)]);
var inst_35075 = (inst_35053 + (1));
var inst_35053__$1 = inst_35075;
var state_35097__$1 = (function (){var statearr_35123 = state_35097;
(statearr_35123[(14)] = inst_35074);

(statearr_35123[(8)] = inst_35053__$1);

return statearr_35123;
})();
var statearr_35124_36423 = state_35097__$1;
(statearr_35124_36423[(2)] = null);

(statearr_35124_36423[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35098 === (8))){
var inst_35079 = (state_35097[(2)]);
var state_35097__$1 = state_35097;
var statearr_35125_36424 = state_35097__$1;
(statearr_35125_36424[(2)] = inst_35079);

(statearr_35125_36424[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35127 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35127[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35127[(1)] = (1));

return statearr_35127;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35097){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35097);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35128){var ex__33274__auto__ = e35128;
var statearr_35129_36429 = state_35097;
(statearr_35129_36429[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35097[(4)]))){
var statearr_35130_36430 = state_35097;
(statearr_35130_36430[(1)] = cljs.core.first((state_35097[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36432 = state_35097;
state_35097 = G__36432;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35097){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35097);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35131 = f__33445__auto__();
(statearr_35131[(6)] = c__33444__auto___36397);

return statearr_35131;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));

}

return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35137 = arguments.length;
switch (G__35137) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33444__auto___36434 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35173){
var state_val_35174 = (state_35173[(1)]);
if((state_val_35174 === (7))){
var inst_35149 = (state_35173[(7)]);
var inst_35148 = (state_35173[(8)]);
var inst_35148__$1 = (state_35173[(2)]);
var inst_35149__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35148__$1,(0),null);
var inst_35150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_35148__$1,(1),null);
var inst_35151 = (inst_35149__$1 == null);
var state_35173__$1 = (function (){var statearr_35175 = state_35173;
(statearr_35175[(7)] = inst_35149__$1);

(statearr_35175[(8)] = inst_35148__$1);

(statearr_35175[(9)] = inst_35150);

return statearr_35175;
})();
if(cljs.core.truth_(inst_35151)){
var statearr_35176_36440 = state_35173__$1;
(statearr_35176_36440[(1)] = (8));

} else {
var statearr_35177_36442 = state_35173__$1;
(statearr_35177_36442[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (1))){
var inst_35138 = cljs.core.vec(chs);
var inst_35139 = inst_35138;
var state_35173__$1 = (function (){var statearr_35178 = state_35173;
(statearr_35178[(10)] = inst_35139);

return statearr_35178;
})();
var statearr_35179_36448 = state_35173__$1;
(statearr_35179_36448[(2)] = null);

(statearr_35179_36448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (4))){
var inst_35139 = (state_35173[(10)]);
var state_35173__$1 = state_35173;
return cljs.core.async.ioc_alts_BANG_(state_35173__$1,(7),inst_35139);
} else {
if((state_val_35174 === (6))){
var inst_35169 = (state_35173[(2)]);
var state_35173__$1 = state_35173;
var statearr_35180_36466 = state_35173__$1;
(statearr_35180_36466[(2)] = inst_35169);

(statearr_35180_36466[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (3))){
var inst_35171 = (state_35173[(2)]);
var state_35173__$1 = state_35173;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35173__$1,inst_35171);
} else {
if((state_val_35174 === (2))){
var inst_35139 = (state_35173[(10)]);
var inst_35141 = cljs.core.count(inst_35139);
var inst_35142 = (inst_35141 > (0));
var state_35173__$1 = state_35173;
if(cljs.core.truth_(inst_35142)){
var statearr_35182_36467 = state_35173__$1;
(statearr_35182_36467[(1)] = (4));

} else {
var statearr_35183_36473 = state_35173__$1;
(statearr_35183_36473[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (11))){
var inst_35139 = (state_35173[(10)]);
var inst_35162 = (state_35173[(2)]);
var tmp35181 = inst_35139;
var inst_35139__$1 = tmp35181;
var state_35173__$1 = (function (){var statearr_35184 = state_35173;
(statearr_35184[(10)] = inst_35139__$1);

(statearr_35184[(11)] = inst_35162);

return statearr_35184;
})();
var statearr_35185_36477 = state_35173__$1;
(statearr_35185_36477[(2)] = null);

(statearr_35185_36477[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (9))){
var inst_35149 = (state_35173[(7)]);
var state_35173__$1 = state_35173;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35173__$1,(11),out,inst_35149);
} else {
if((state_val_35174 === (5))){
var inst_35167 = cljs.core.async.close_BANG_(out);
var state_35173__$1 = state_35173;
var statearr_35206_36478 = state_35173__$1;
(statearr_35206_36478[(2)] = inst_35167);

(statearr_35206_36478[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (10))){
var inst_35165 = (state_35173[(2)]);
var state_35173__$1 = state_35173;
var statearr_35207_36481 = state_35173__$1;
(statearr_35207_36481[(2)] = inst_35165);

(statearr_35207_36481[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35174 === (8))){
var inst_35139 = (state_35173[(10)]);
var inst_35149 = (state_35173[(7)]);
var inst_35148 = (state_35173[(8)]);
var inst_35150 = (state_35173[(9)]);
var inst_35157 = (function (){var cs = inst_35139;
var vec__35144 = inst_35148;
var v = inst_35149;
var c = inst_35150;
return (function (p1__35132_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__35132_SHARP_);
});
})();
var inst_35158 = cljs.core.filterv(inst_35157,inst_35139);
var inst_35139__$1 = inst_35158;
var state_35173__$1 = (function (){var statearr_35222 = state_35173;
(statearr_35222[(10)] = inst_35139__$1);

return statearr_35222;
})();
var statearr_35223_36499 = state_35173__$1;
(statearr_35223_36499[(2)] = null);

(statearr_35223_36499[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35230 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35230[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35230[(1)] = (1));

return statearr_35230;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35173){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35173);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35231){var ex__33274__auto__ = e35231;
var statearr_35232_36528 = state_35173;
(statearr_35232_36528[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35173[(4)]))){
var statearr_35233_36529 = state_35173;
(statearr_35233_36529[(1)] = cljs.core.first((state_35173[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36530 = state_35173;
state_35173 = G__36530;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35173){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35173);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35234 = f__33445__auto__();
(statearr_35234[(6)] = c__33444__auto___36434);

return statearr_35234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35239 = arguments.length;
switch (G__35239) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33444__auto___36552 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35266){
var state_val_35267 = (state_35266[(1)]);
if((state_val_35267 === (7))){
var inst_35248 = (state_35266[(7)]);
var inst_35248__$1 = (state_35266[(2)]);
var inst_35249 = (inst_35248__$1 == null);
var inst_35250 = cljs.core.not(inst_35249);
var state_35266__$1 = (function (){var statearr_35268 = state_35266;
(statearr_35268[(7)] = inst_35248__$1);

return statearr_35268;
})();
if(inst_35250){
var statearr_35269_36563 = state_35266__$1;
(statearr_35269_36563[(1)] = (8));

} else {
var statearr_35270_36564 = state_35266__$1;
(statearr_35270_36564[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (1))){
var inst_35240 = (0);
var state_35266__$1 = (function (){var statearr_35271 = state_35266;
(statearr_35271[(8)] = inst_35240);

return statearr_35271;
})();
var statearr_35272_36569 = state_35266__$1;
(statearr_35272_36569[(2)] = null);

(statearr_35272_36569[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (4))){
var state_35266__$1 = state_35266;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35266__$1,(7),ch);
} else {
if((state_val_35267 === (6))){
var inst_35261 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35273_36574 = state_35266__$1;
(statearr_35273_36574[(2)] = inst_35261);

(statearr_35273_36574[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (3))){
var inst_35263 = (state_35266[(2)]);
var inst_35264 = cljs.core.async.close_BANG_(out);
var state_35266__$1 = (function (){var statearr_35274 = state_35266;
(statearr_35274[(9)] = inst_35263);

return statearr_35274;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35266__$1,inst_35264);
} else {
if((state_val_35267 === (2))){
var inst_35240 = (state_35266[(8)]);
var inst_35245 = (inst_35240 < n);
var state_35266__$1 = state_35266;
if(cljs.core.truth_(inst_35245)){
var statearr_35275_36577 = state_35266__$1;
(statearr_35275_36577[(1)] = (4));

} else {
var statearr_35276_36579 = state_35266__$1;
(statearr_35276_36579[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (11))){
var inst_35240 = (state_35266[(8)]);
var inst_35253 = (state_35266[(2)]);
var inst_35254 = (inst_35240 + (1));
var inst_35240__$1 = inst_35254;
var state_35266__$1 = (function (){var statearr_35277 = state_35266;
(statearr_35277[(10)] = inst_35253);

(statearr_35277[(8)] = inst_35240__$1);

return statearr_35277;
})();
var statearr_35278_36581 = state_35266__$1;
(statearr_35278_36581[(2)] = null);

(statearr_35278_36581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (9))){
var state_35266__$1 = state_35266;
var statearr_35279_36582 = state_35266__$1;
(statearr_35279_36582[(2)] = null);

(statearr_35279_36582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (5))){
var state_35266__$1 = state_35266;
var statearr_35280_36584 = state_35266__$1;
(statearr_35280_36584[(2)] = null);

(statearr_35280_36584[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (10))){
var inst_35258 = (state_35266[(2)]);
var state_35266__$1 = state_35266;
var statearr_35281_36585 = state_35266__$1;
(statearr_35281_36585[(2)] = inst_35258);

(statearr_35281_36585[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35267 === (8))){
var inst_35248 = (state_35266[(7)]);
var state_35266__$1 = state_35266;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35266__$1,(11),out,inst_35248);
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
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35282 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35282[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35282[(1)] = (1));

return statearr_35282;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35266){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35266);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35283){var ex__33274__auto__ = e35283;
var statearr_35284_36590 = state_35266;
(statearr_35284_36590[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35266[(4)]))){
var statearr_35285_36591 = state_35266;
(statearr_35285_36591[(1)] = cljs.core.first((state_35266[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36592 = state_35266;
state_35266 = G__36592;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35266){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35266);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35286 = f__33445__auto__();
(statearr_35286[(6)] = c__33444__auto___36552);

return statearr_35286;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);


/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35293 = (function (f,ch,meta35289,_,fn1,meta35294){
this.f = f;
this.ch = ch;
this.meta35289 = meta35289;
this._ = _;
this.fn1 = fn1;
this.meta35294 = meta35294;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35293.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35295,meta35294__$1){
var self__ = this;
var _35295__$1 = this;
return (new cljs.core.async.t_cljs$core$async35293(self__.f,self__.ch,self__.meta35289,self__._,self__.fn1,meta35294__$1));
}));

(cljs.core.async.t_cljs$core$async35293.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35295){
var self__ = this;
var _35295__$1 = this;
return self__.meta35294;
}));

(cljs.core.async.t_cljs$core$async35293.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35293.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async35293.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async35293.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__35287_SHARP_){
var G__35305 = (((p1__35287_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__35287_SHARP_) : self__.f.call(null,p1__35287_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__35305) : f1.call(null,G__35305));
});
}));

(cljs.core.async.t_cljs$core$async35293.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35289","meta35289",-1349085962,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35288","cljs.core.async/t_cljs$core$async35288",242803699,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35294","meta35294",1298452943,null)], null);
}));

(cljs.core.async.t_cljs$core$async35293.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35293.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35293");

(cljs.core.async.t_cljs$core$async35293.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35293");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35293.
 */
cljs.core.async.__GT_t_cljs$core$async35293 = (function cljs$core$async$__GT_t_cljs$core$async35293(f,ch,meta35289,_,fn1,meta35294){
return (new cljs.core.async.t_cljs$core$async35293(f,ch,meta35289,_,fn1,meta35294));
});



/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35288 = (function (f,ch,meta35289){
this.f = f;
this.ch = ch;
this.meta35289 = meta35289;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35290,meta35289__$1){
var self__ = this;
var _35290__$1 = this;
return (new cljs.core.async.t_cljs$core$async35288(self__.f,self__.ch,meta35289__$1));
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35290){
var self__ = this;
var _35290__$1 = this;
return self__.meta35289;
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(new cljs.core.async.t_cljs$core$async35293(self__.f,self__.ch,self__.meta35289,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY)));
if(cljs.core.truth_((function (){var and__5043__auto__ = ret;
if(cljs.core.truth_(and__5043__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__5043__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__35306 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__35306) : self__.f.call(null,G__35306));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35288.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async35288.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35289","meta35289",-1349085962,null)], null);
}));

(cljs.core.async.t_cljs$core$async35288.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35288.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35288");

(cljs.core.async.t_cljs$core$async35288.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35288");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35288.
 */
cljs.core.async.__GT_t_cljs$core$async35288 = (function cljs$core$async$__GT_t_cljs$core$async35288(f,ch,meta35289){
return (new cljs.core.async.t_cljs$core$async35288(f,ch,meta35289));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35288(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35307 = (function (f,ch,meta35308){
this.f = f;
this.ch = ch;
this.meta35308 = meta35308;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35309,meta35308__$1){
var self__ = this;
var _35309__$1 = this;
return (new cljs.core.async.t_cljs$core$async35307(self__.f,self__.ch,meta35308__$1));
}));

(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35309){
var self__ = this;
var _35309__$1 = this;
return self__.meta35308;
}));

(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35307.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async35307.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35308","meta35308",1107310679,null)], null);
}));

(cljs.core.async.t_cljs$core$async35307.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35307.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35307");

(cljs.core.async.t_cljs$core$async35307.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35307");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35307.
 */
cljs.core.async.__GT_t_cljs$core$async35307 = (function cljs$core$async$__GT_t_cljs$core$async35307(f,ch,meta35308){
return (new cljs.core.async.t_cljs$core$async35307(f,ch,meta35308));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
return (new cljs.core.async.t_cljs$core$async35307(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35312 = (function (p,ch,meta35313){
this.p = p;
this.ch = ch;
this.meta35313 = meta35313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35314,meta35313__$1){
var self__ = this;
var _35314__$1 = this;
return (new cljs.core.async.t_cljs$core$async35312(self__.p,self__.ch,meta35313__$1));
}));

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35314){
var self__ = this;
var _35314__$1 = this;
return self__.meta35313;
}));

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async35312.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async35312.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35313","meta35313",-207337602,null)], null);
}));

(cljs.core.async.t_cljs$core$async35312.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async35312.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35312");

(cljs.core.async.t_cljs$core$async35312.cljs$lang$ctorPrWriter = (function (this__5330__auto__,writer__5331__auto__,opt__5332__auto__){
return cljs.core._write(writer__5331__auto__,"cljs.core.async/t_cljs$core$async35312");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async35312.
 */
cljs.core.async.__GT_t_cljs$core$async35312 = (function cljs$core$async$__GT_t_cljs$core$async35312(p,ch,meta35313){
return (new cljs.core.async.t_cljs$core$async35312(p,ch,meta35313));
});


/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
return (new cljs.core.async.t_cljs$core$async35312(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35322 = arguments.length;
switch (G__35322) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33444__auto___36643 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35343){
var state_val_35344 = (state_35343[(1)]);
if((state_val_35344 === (7))){
var inst_35339 = (state_35343[(2)]);
var state_35343__$1 = state_35343;
var statearr_35345_36645 = state_35343__$1;
(statearr_35345_36645[(2)] = inst_35339);

(statearr_35345_36645[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (1))){
var state_35343__$1 = state_35343;
var statearr_35346_36650 = state_35343__$1;
(statearr_35346_36650[(2)] = null);

(statearr_35346_36650[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (4))){
var inst_35325 = (state_35343[(7)]);
var inst_35325__$1 = (state_35343[(2)]);
var inst_35326 = (inst_35325__$1 == null);
var state_35343__$1 = (function (){var statearr_35347 = state_35343;
(statearr_35347[(7)] = inst_35325__$1);

return statearr_35347;
})();
if(cljs.core.truth_(inst_35326)){
var statearr_35348_36669 = state_35343__$1;
(statearr_35348_36669[(1)] = (5));

} else {
var statearr_35349_36670 = state_35343__$1;
(statearr_35349_36670[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (6))){
var inst_35325 = (state_35343[(7)]);
var inst_35330 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_35325) : p.call(null,inst_35325));
var state_35343__$1 = state_35343;
if(cljs.core.truth_(inst_35330)){
var statearr_35353_36673 = state_35343__$1;
(statearr_35353_36673[(1)] = (8));

} else {
var statearr_35354_36674 = state_35343__$1;
(statearr_35354_36674[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (3))){
var inst_35341 = (state_35343[(2)]);
var state_35343__$1 = state_35343;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35343__$1,inst_35341);
} else {
if((state_val_35344 === (2))){
var state_35343__$1 = state_35343;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35343__$1,(4),ch);
} else {
if((state_val_35344 === (11))){
var inst_35333 = (state_35343[(2)]);
var state_35343__$1 = state_35343;
var statearr_35355_36675 = state_35343__$1;
(statearr_35355_36675[(2)] = inst_35333);

(statearr_35355_36675[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (9))){
var state_35343__$1 = state_35343;
var statearr_35356_36684 = state_35343__$1;
(statearr_35356_36684[(2)] = null);

(statearr_35356_36684[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (5))){
var inst_35328 = cljs.core.async.close_BANG_(out);
var state_35343__$1 = state_35343;
var statearr_35357_36692 = state_35343__$1;
(statearr_35357_36692[(2)] = inst_35328);

(statearr_35357_36692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (10))){
var inst_35336 = (state_35343[(2)]);
var state_35343__$1 = (function (){var statearr_35358 = state_35343;
(statearr_35358[(8)] = inst_35336);

return statearr_35358;
})();
var statearr_35359_36700 = state_35343__$1;
(statearr_35359_36700[(2)] = null);

(statearr_35359_36700[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35344 === (8))){
var inst_35325 = (state_35343[(7)]);
var state_35343__$1 = state_35343;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35343__$1,(11),out,inst_35325);
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
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35363 = [null,null,null,null,null,null,null,null,null];
(statearr_35363[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35363[(1)] = (1));

return statearr_35363;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35343){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35343);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35371){var ex__33274__auto__ = e35371;
var statearr_35372_36727 = state_35343;
(statearr_35372_36727[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35343[(4)]))){
var statearr_35373_36734 = state_35343;
(statearr_35373_36734[(1)] = cljs.core.first((state_35343[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36743 = state_35343;
state_35343 = G__36743;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35343){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35343);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35377 = f__33445__auto__();
(statearr_35377[(6)] = c__33444__auto___36643);

return statearr_35377;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35383 = arguments.length;
switch (G__35383) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__33444__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35470){
var state_val_35471 = (state_35470[(1)]);
if((state_val_35471 === (7))){
var inst_35466 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35472_36761 = state_35470__$1;
(statearr_35472_36761[(2)] = inst_35466);

(statearr_35472_36761[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (20))){
var inst_35434 = (state_35470[(7)]);
var inst_35447 = (state_35470[(2)]);
var inst_35448 = cljs.core.next(inst_35434);
var inst_35416 = inst_35448;
var inst_35417 = null;
var inst_35419 = (0);
var inst_35423 = (0);
var state_35470__$1 = (function (){var statearr_35473 = state_35470;
(statearr_35473[(8)] = inst_35423);

(statearr_35473[(9)] = inst_35419);

(statearr_35473[(10)] = inst_35416);

(statearr_35473[(11)] = inst_35417);

(statearr_35473[(12)] = inst_35447);

return statearr_35473;
})();
var statearr_35474_36763 = state_35470__$1;
(statearr_35474_36763[(2)] = null);

(statearr_35474_36763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (1))){
var state_35470__$1 = state_35470;
var statearr_35475_36764 = state_35470__$1;
(statearr_35475_36764[(2)] = null);

(statearr_35475_36764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (4))){
var inst_35402 = (state_35470[(13)]);
var inst_35402__$1 = (state_35470[(2)]);
var inst_35403 = (inst_35402__$1 == null);
var state_35470__$1 = (function (){var statearr_35476 = state_35470;
(statearr_35476[(13)] = inst_35402__$1);

return statearr_35476;
})();
if(cljs.core.truth_(inst_35403)){
var statearr_35477_36770 = state_35470__$1;
(statearr_35477_36770[(1)] = (5));

} else {
var statearr_35478_36771 = state_35470__$1;
(statearr_35478_36771[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (15))){
var state_35470__$1 = state_35470;
var statearr_35482_36772 = state_35470__$1;
(statearr_35482_36772[(2)] = null);

(statearr_35482_36772[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (21))){
var state_35470__$1 = state_35470;
var statearr_35483_36773 = state_35470__$1;
(statearr_35483_36773[(2)] = null);

(statearr_35483_36773[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (13))){
var inst_35423 = (state_35470[(8)]);
var inst_35419 = (state_35470[(9)]);
var inst_35416 = (state_35470[(10)]);
var inst_35417 = (state_35470[(11)]);
var inst_35430 = (state_35470[(2)]);
var inst_35431 = (inst_35423 + (1));
var tmp35479 = inst_35419;
var tmp35480 = inst_35416;
var tmp35481 = inst_35417;
var inst_35416__$1 = tmp35480;
var inst_35417__$1 = tmp35481;
var inst_35419__$1 = tmp35479;
var inst_35423__$1 = inst_35431;
var state_35470__$1 = (function (){var statearr_35484 = state_35470;
(statearr_35484[(8)] = inst_35423__$1);

(statearr_35484[(9)] = inst_35419__$1);

(statearr_35484[(10)] = inst_35416__$1);

(statearr_35484[(14)] = inst_35430);

(statearr_35484[(11)] = inst_35417__$1);

return statearr_35484;
})();
var statearr_35485_36775 = state_35470__$1;
(statearr_35485_36775[(2)] = null);

(statearr_35485_36775[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (22))){
var state_35470__$1 = state_35470;
var statearr_35486_36776 = state_35470__$1;
(statearr_35486_36776[(2)] = null);

(statearr_35486_36776[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (6))){
var inst_35402 = (state_35470[(13)]);
var inst_35414 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35402) : f.call(null,inst_35402));
var inst_35415 = cljs.core.seq(inst_35414);
var inst_35416 = inst_35415;
var inst_35417 = null;
var inst_35419 = (0);
var inst_35423 = (0);
var state_35470__$1 = (function (){var statearr_35487 = state_35470;
(statearr_35487[(8)] = inst_35423);

(statearr_35487[(9)] = inst_35419);

(statearr_35487[(10)] = inst_35416);

(statearr_35487[(11)] = inst_35417);

return statearr_35487;
})();
var statearr_35488_36783 = state_35470__$1;
(statearr_35488_36783[(2)] = null);

(statearr_35488_36783[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (17))){
var inst_35434 = (state_35470[(7)]);
var inst_35438 = cljs.core.chunk_first(inst_35434);
var inst_35441 = cljs.core.chunk_rest(inst_35434);
var inst_35442 = cljs.core.count(inst_35438);
var inst_35416 = inst_35441;
var inst_35417 = inst_35438;
var inst_35419 = inst_35442;
var inst_35423 = (0);
var state_35470__$1 = (function (){var statearr_35489 = state_35470;
(statearr_35489[(8)] = inst_35423);

(statearr_35489[(9)] = inst_35419);

(statearr_35489[(10)] = inst_35416);

(statearr_35489[(11)] = inst_35417);

return statearr_35489;
})();
var statearr_35490_36793 = state_35470__$1;
(statearr_35490_36793[(2)] = null);

(statearr_35490_36793[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (3))){
var inst_35468 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35470__$1,inst_35468);
} else {
if((state_val_35471 === (12))){
var inst_35456 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35491_36803 = state_35470__$1;
(statearr_35491_36803[(2)] = inst_35456);

(statearr_35491_36803[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (2))){
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35470__$1,(4),in$);
} else {
if((state_val_35471 === (23))){
var inst_35464 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35492_36804 = state_35470__$1;
(statearr_35492_36804[(2)] = inst_35464);

(statearr_35492_36804[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (19))){
var inst_35451 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35493_36809 = state_35470__$1;
(statearr_35493_36809[(2)] = inst_35451);

(statearr_35493_36809[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (11))){
var inst_35434 = (state_35470[(7)]);
var inst_35416 = (state_35470[(10)]);
var inst_35434__$1 = cljs.core.seq(inst_35416);
var state_35470__$1 = (function (){var statearr_35496 = state_35470;
(statearr_35496[(7)] = inst_35434__$1);

return statearr_35496;
})();
if(inst_35434__$1){
var statearr_35497_36812 = state_35470__$1;
(statearr_35497_36812[(1)] = (14));

} else {
var statearr_35498_36813 = state_35470__$1;
(statearr_35498_36813[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (9))){
var inst_35458 = (state_35470[(2)]);
var inst_35459 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_35470__$1 = (function (){var statearr_35499 = state_35470;
(statearr_35499[(15)] = inst_35458);

return statearr_35499;
})();
if(cljs.core.truth_(inst_35459)){
var statearr_35500_36814 = state_35470__$1;
(statearr_35500_36814[(1)] = (21));

} else {
var statearr_35501_36815 = state_35470__$1;
(statearr_35501_36815[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (5))){
var inst_35405 = cljs.core.async.close_BANG_(out);
var state_35470__$1 = state_35470;
var statearr_35502_36820 = state_35470__$1;
(statearr_35502_36820[(2)] = inst_35405);

(statearr_35502_36820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (14))){
var inst_35434 = (state_35470[(7)]);
var inst_35436 = cljs.core.chunked_seq_QMARK_(inst_35434);
var state_35470__$1 = state_35470;
if(inst_35436){
var statearr_35514_36822 = state_35470__$1;
(statearr_35514_36822[(1)] = (17));

} else {
var statearr_35515_36823 = state_35470__$1;
(statearr_35515_36823[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (16))){
var inst_35454 = (state_35470[(2)]);
var state_35470__$1 = state_35470;
var statearr_35516_36827 = state_35470__$1;
(statearr_35516_36827[(2)] = inst_35454);

(statearr_35516_36827[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35471 === (10))){
var inst_35423 = (state_35470[(8)]);
var inst_35417 = (state_35470[(11)]);
var inst_35428 = cljs.core._nth(inst_35417,inst_35423);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35470__$1,(13),out,inst_35428);
} else {
if((state_val_35471 === (18))){
var inst_35434 = (state_35470[(7)]);
var inst_35445 = cljs.core.first(inst_35434);
var state_35470__$1 = state_35470;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35470__$1,(20),out,inst_35445);
} else {
if((state_val_35471 === (8))){
var inst_35423 = (state_35470[(8)]);
var inst_35419 = (state_35470[(9)]);
var inst_35425 = (inst_35423 < inst_35419);
var inst_35426 = inst_35425;
var state_35470__$1 = state_35470;
if(cljs.core.truth_(inst_35426)){
var statearr_35518_36831 = state_35470__$1;
(statearr_35518_36831[(1)] = (10));

} else {
var statearr_35519_36833 = state_35470__$1;
(statearr_35519_36833[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____0 = (function (){
var statearr_35521 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35521[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__);

(statearr_35521[(1)] = (1));

return statearr_35521;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____1 = (function (state_35470){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35470);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35522){var ex__33274__auto__ = e35522;
var statearr_35523_36834 = state_35470;
(statearr_35523_36834[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35470[(4)]))){
var statearr_35524_36835 = state_35470;
(statearr_35524_36835[(1)] = cljs.core.first((state_35470[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36837 = state_35470;
state_35470 = G__36837;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__ = function(state_35470){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____1.call(this,state_35470);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33271__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35525 = f__33445__auto__();
(statearr_35525[(6)] = c__33444__auto__);

return statearr_35525;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));

return c__33444__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35527 = arguments.length;
switch (G__35527) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35529 = arguments.length;
switch (G__35529) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35533 = arguments.length;
switch (G__35533) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33444__auto___36846 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35567){
var state_val_35568 = (state_35567[(1)]);
if((state_val_35568 === (7))){
var inst_35562 = (state_35567[(2)]);
var state_35567__$1 = state_35567;
var statearr_35570_36847 = state_35567__$1;
(statearr_35570_36847[(2)] = inst_35562);

(statearr_35570_36847[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35568 === (1))){
var inst_35535 = null;
var state_35567__$1 = (function (){var statearr_35571 = state_35567;
(statearr_35571[(7)] = inst_35535);

return statearr_35571;
})();
var statearr_35572_36852 = state_35567__$1;
(statearr_35572_36852[(2)] = null);

(statearr_35572_36852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35568 === (4))){
var inst_35547 = (state_35567[(8)]);
var inst_35547__$1 = (state_35567[(2)]);
var inst_35548 = (inst_35547__$1 == null);
var inst_35549 = cljs.core.not(inst_35548);
var state_35567__$1 = (function (){var statearr_35573 = state_35567;
(statearr_35573[(8)] = inst_35547__$1);

return statearr_35573;
})();
if(inst_35549){
var statearr_35574_36853 = state_35567__$1;
(statearr_35574_36853[(1)] = (5));

} else {
var statearr_35575_36854 = state_35567__$1;
(statearr_35575_36854[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35568 === (6))){
var state_35567__$1 = state_35567;
var statearr_35576_36855 = state_35567__$1;
(statearr_35576_36855[(2)] = null);

(statearr_35576_36855[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35568 === (3))){
var inst_35564 = (state_35567[(2)]);
var inst_35565 = cljs.core.async.close_BANG_(out);
var state_35567__$1 = (function (){var statearr_35577 = state_35567;
(statearr_35577[(9)] = inst_35564);

return statearr_35577;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_35567__$1,inst_35565);
} else {
if((state_val_35568 === (2))){
var state_35567__$1 = state_35567;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35567__$1,(4),ch);
} else {
if((state_val_35568 === (11))){
var inst_35547 = (state_35567[(8)]);
var inst_35556 = (state_35567[(2)]);
var inst_35535 = inst_35547;
var state_35567__$1 = (function (){var statearr_35578 = state_35567;
(statearr_35578[(7)] = inst_35535);

(statearr_35578[(10)] = inst_35556);

return statearr_35578;
})();
var statearr_35579_36864 = state_35567__$1;
(statearr_35579_36864[(2)] = null);

(statearr_35579_36864[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35568 === (9))){
var inst_35547 = (state_35567[(8)]);
var state_35567__$1 = state_35567;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35567__$1,(11),out,inst_35547);
} else {
if((state_val_35568 === (5))){
var inst_35547 = (state_35567[(8)]);
var inst_35535 = (state_35567[(7)]);
var inst_35551 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35547,inst_35535);
var state_35567__$1 = state_35567;
if(inst_35551){
var statearr_35581_36871 = state_35567__$1;
(statearr_35581_36871[(1)] = (8));

} else {
var statearr_35582_36872 = state_35567__$1;
(statearr_35582_36872[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35568 === (10))){
var inst_35559 = (state_35567[(2)]);
var state_35567__$1 = state_35567;
var statearr_35583_36878 = state_35567__$1;
(statearr_35583_36878[(2)] = inst_35559);

(statearr_35583_36878[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35568 === (8))){
var inst_35535 = (state_35567[(7)]);
var tmp35580 = inst_35535;
var inst_35535__$1 = tmp35580;
var state_35567__$1 = (function (){var statearr_35584 = state_35567;
(statearr_35584[(7)] = inst_35535__$1);

return statearr_35584;
})();
var statearr_35585_36879 = state_35567__$1;
(statearr_35585_36879[(2)] = null);

(statearr_35585_36879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35586 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35586[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35586[(1)] = (1));

return statearr_35586;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35567){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35567);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35589){var ex__33274__auto__ = e35589;
var statearr_35590_36883 = state_35567;
(statearr_35590_36883[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35567[(4)]))){
var statearr_35591_36884 = state_35567;
(statearr_35591_36884[(1)] = cljs.core.first((state_35567[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36885 = state_35567;
state_35567 = G__36885;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35567){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35567);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35592 = f__33445__auto__();
(statearr_35592[(6)] = c__33444__auto___36846);

return statearr_35592;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35596 = arguments.length;
switch (G__35596) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33444__auto___36890 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35634){
var state_val_35635 = (state_35634[(1)]);
if((state_val_35635 === (7))){
var inst_35630 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35643_36891 = state_35634__$1;
(statearr_35643_36891[(2)] = inst_35630);

(statearr_35643_36891[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (1))){
var inst_35597 = (new Array(n));
var inst_35598 = inst_35597;
var inst_35599 = (0);
var state_35634__$1 = (function (){var statearr_35644 = state_35634;
(statearr_35644[(7)] = inst_35598);

(statearr_35644[(8)] = inst_35599);

return statearr_35644;
})();
var statearr_35646_36892 = state_35634__$1;
(statearr_35646_36892[(2)] = null);

(statearr_35646_36892[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (4))){
var inst_35602 = (state_35634[(9)]);
var inst_35602__$1 = (state_35634[(2)]);
var inst_35603 = (inst_35602__$1 == null);
var inst_35604 = cljs.core.not(inst_35603);
var state_35634__$1 = (function (){var statearr_35647 = state_35634;
(statearr_35647[(9)] = inst_35602__$1);

return statearr_35647;
})();
if(inst_35604){
var statearr_35648_36896 = state_35634__$1;
(statearr_35648_36896[(1)] = (5));

} else {
var statearr_35649_36897 = state_35634__$1;
(statearr_35649_36897[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (15))){
var inst_35624 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35659_36898 = state_35634__$1;
(statearr_35659_36898[(2)] = inst_35624);

(statearr_35659_36898[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (13))){
var state_35634__$1 = state_35634;
var statearr_35660_36899 = state_35634__$1;
(statearr_35660_36899[(2)] = null);

(statearr_35660_36899[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (6))){
var inst_35599 = (state_35634[(8)]);
var inst_35620 = (inst_35599 > (0));
var state_35634__$1 = state_35634;
if(cljs.core.truth_(inst_35620)){
var statearr_35661_36900 = state_35634__$1;
(statearr_35661_36900[(1)] = (12));

} else {
var statearr_35662_36901 = state_35634__$1;
(statearr_35662_36901[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (3))){
var inst_35632 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35634__$1,inst_35632);
} else {
if((state_val_35635 === (12))){
var inst_35598 = (state_35634[(7)]);
var inst_35622 = cljs.core.vec(inst_35598);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35634__$1,(15),out,inst_35622);
} else {
if((state_val_35635 === (2))){
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35634__$1,(4),ch);
} else {
if((state_val_35635 === (11))){
var inst_35614 = (state_35634[(2)]);
var inst_35615 = (new Array(n));
var inst_35598 = inst_35615;
var inst_35599 = (0);
var state_35634__$1 = (function (){var statearr_35674 = state_35634;
(statearr_35674[(7)] = inst_35598);

(statearr_35674[(10)] = inst_35614);

(statearr_35674[(8)] = inst_35599);

return statearr_35674;
})();
var statearr_35675_36904 = state_35634__$1;
(statearr_35675_36904[(2)] = null);

(statearr_35675_36904[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (9))){
var inst_35598 = (state_35634[(7)]);
var inst_35612 = cljs.core.vec(inst_35598);
var state_35634__$1 = state_35634;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35634__$1,(11),out,inst_35612);
} else {
if((state_val_35635 === (5))){
var inst_35598 = (state_35634[(7)]);
var inst_35602 = (state_35634[(9)]);
var inst_35599 = (state_35634[(8)]);
var inst_35607 = (state_35634[(11)]);
var inst_35606 = (inst_35598[inst_35599] = inst_35602);
var inst_35607__$1 = (inst_35599 + (1));
var inst_35608 = (inst_35607__$1 < n);
var state_35634__$1 = (function (){var statearr_35677 = state_35634;
(statearr_35677[(12)] = inst_35606);

(statearr_35677[(11)] = inst_35607__$1);

return statearr_35677;
})();
if(cljs.core.truth_(inst_35608)){
var statearr_35678_36906 = state_35634__$1;
(statearr_35678_36906[(1)] = (8));

} else {
var statearr_35679_36907 = state_35634__$1;
(statearr_35679_36907[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (14))){
var inst_35627 = (state_35634[(2)]);
var inst_35628 = cljs.core.async.close_BANG_(out);
var state_35634__$1 = (function (){var statearr_35681 = state_35634;
(statearr_35681[(13)] = inst_35627);

return statearr_35681;
})();
var statearr_35682_36908 = state_35634__$1;
(statearr_35682_36908[(2)] = inst_35628);

(statearr_35682_36908[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (10))){
var inst_35618 = (state_35634[(2)]);
var state_35634__$1 = state_35634;
var statearr_35685_36914 = state_35634__$1;
(statearr_35685_36914[(2)] = inst_35618);

(statearr_35685_36914[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35635 === (8))){
var inst_35598 = (state_35634[(7)]);
var inst_35607 = (state_35634[(11)]);
var tmp35680 = inst_35598;
var inst_35598__$1 = tmp35680;
var inst_35599 = inst_35607;
var state_35634__$1 = (function (){var statearr_35689 = state_35634;
(statearr_35689[(7)] = inst_35598__$1);

(statearr_35689[(8)] = inst_35599);

return statearr_35689;
})();
var statearr_35692_36921 = state_35634__$1;
(statearr_35692_36921[(2)] = null);

(statearr_35692_36921[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35693 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35693[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35693[(1)] = (1));

return statearr_35693;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35634){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35634);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35694){var ex__33274__auto__ = e35694;
var statearr_35695_36928 = state_35634;
(statearr_35695_36928[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35634[(4)]))){
var statearr_35696_36929 = state_35634;
(statearr_35696_36929[(1)] = cljs.core.first((state_35634[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36930 = state_35634;
state_35634 = G__36930;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35634){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35634);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35701 = f__33445__auto__();
(statearr_35701[(6)] = c__33444__auto___36890);

return statearr_35701;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__35704 = arguments.length;
switch (G__35704) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__33444__auto___36932 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__33445__auto__ = (function (){var switch__33270__auto__ = (function (state_35758){
var state_val_35759 = (state_35758[(1)]);
if((state_val_35759 === (7))){
var inst_35754 = (state_35758[(2)]);
var state_35758__$1 = state_35758;
var statearr_35762_36936 = state_35758__$1;
(statearr_35762_36936[(2)] = inst_35754);

(statearr_35762_36936[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (1))){
var inst_35713 = [];
var inst_35714 = inst_35713;
var inst_35715 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_35758__$1 = (function (){var statearr_35763 = state_35758;
(statearr_35763[(7)] = inst_35715);

(statearr_35763[(8)] = inst_35714);

return statearr_35763;
})();
var statearr_35764_36937 = state_35758__$1;
(statearr_35764_36937[(2)] = null);

(statearr_35764_36937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (4))){
var inst_35718 = (state_35758[(9)]);
var inst_35718__$1 = (state_35758[(2)]);
var inst_35719 = (inst_35718__$1 == null);
var inst_35720 = cljs.core.not(inst_35719);
var state_35758__$1 = (function (){var statearr_35767 = state_35758;
(statearr_35767[(9)] = inst_35718__$1);

return statearr_35767;
})();
if(inst_35720){
var statearr_35768_36941 = state_35758__$1;
(statearr_35768_36941[(1)] = (5));

} else {
var statearr_35769_36942 = state_35758__$1;
(statearr_35769_36942[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (15))){
var inst_35714 = (state_35758[(8)]);
var inst_35746 = cljs.core.vec(inst_35714);
var state_35758__$1 = state_35758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35758__$1,(18),out,inst_35746);
} else {
if((state_val_35759 === (13))){
var inst_35741 = (state_35758[(2)]);
var state_35758__$1 = state_35758;
var statearr_35770_36943 = state_35758__$1;
(statearr_35770_36943[(2)] = inst_35741);

(statearr_35770_36943[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (6))){
var inst_35714 = (state_35758[(8)]);
var inst_35743 = inst_35714.length;
var inst_35744 = (inst_35743 > (0));
var state_35758__$1 = state_35758;
if(cljs.core.truth_(inst_35744)){
var statearr_35771_36950 = state_35758__$1;
(statearr_35771_36950[(1)] = (15));

} else {
var statearr_35772_36951 = state_35758__$1;
(statearr_35772_36951[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (17))){
var inst_35751 = (state_35758[(2)]);
var inst_35752 = cljs.core.async.close_BANG_(out);
var state_35758__$1 = (function (){var statearr_35774 = state_35758;
(statearr_35774[(10)] = inst_35751);

return statearr_35774;
})();
var statearr_35775_36952 = state_35758__$1;
(statearr_35775_36952[(2)] = inst_35752);

(statearr_35775_36952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (3))){
var inst_35756 = (state_35758[(2)]);
var state_35758__$1 = state_35758;
return cljs.core.async.impl.ioc_helpers.return_chan(state_35758__$1,inst_35756);
} else {
if((state_val_35759 === (12))){
var inst_35714 = (state_35758[(8)]);
var inst_35734 = cljs.core.vec(inst_35714);
var state_35758__$1 = state_35758;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_35758__$1,(14),out,inst_35734);
} else {
if((state_val_35759 === (2))){
var state_35758__$1 = state_35758;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_35758__$1,(4),ch);
} else {
if((state_val_35759 === (11))){
var inst_35722 = (state_35758[(11)]);
var inst_35718 = (state_35758[(9)]);
var inst_35714 = (state_35758[(8)]);
var inst_35731 = inst_35714.push(inst_35718);
var tmp35776 = inst_35714;
var inst_35714__$1 = tmp35776;
var inst_35715 = inst_35722;
var state_35758__$1 = (function (){var statearr_35778 = state_35758;
(statearr_35778[(7)] = inst_35715);

(statearr_35778[(12)] = inst_35731);

(statearr_35778[(8)] = inst_35714__$1);

return statearr_35778;
})();
var statearr_35779_36954 = state_35758__$1;
(statearr_35779_36954[(2)] = null);

(statearr_35779_36954[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (9))){
var inst_35715 = (state_35758[(7)]);
var inst_35727 = cljs.core.keyword_identical_QMARK_(inst_35715,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var state_35758__$1 = state_35758;
var statearr_35780_36958 = state_35758__$1;
(statearr_35780_36958[(2)] = inst_35727);

(statearr_35780_36958[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (5))){
var inst_35722 = (state_35758[(11)]);
var inst_35724 = (state_35758[(13)]);
var inst_35718 = (state_35758[(9)]);
var inst_35715 = (state_35758[(7)]);
var inst_35722__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_35718) : f.call(null,inst_35718));
var inst_35724__$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_35722__$1,inst_35715);
var state_35758__$1 = (function (){var statearr_35781 = state_35758;
(statearr_35781[(11)] = inst_35722__$1);

(statearr_35781[(13)] = inst_35724__$1);

return statearr_35781;
})();
if(inst_35724__$1){
var statearr_35782_36962 = state_35758__$1;
(statearr_35782_36962[(1)] = (8));

} else {
var statearr_35783_36963 = state_35758__$1;
(statearr_35783_36963[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (14))){
var inst_35722 = (state_35758[(11)]);
var inst_35718 = (state_35758[(9)]);
var inst_35736 = (state_35758[(2)]);
var inst_35737 = [];
var inst_35738 = inst_35737.push(inst_35718);
var inst_35714 = inst_35737;
var inst_35715 = inst_35722;
var state_35758__$1 = (function (){var statearr_35784 = state_35758;
(statearr_35784[(14)] = inst_35736);

(statearr_35784[(15)] = inst_35738);

(statearr_35784[(7)] = inst_35715);

(statearr_35784[(8)] = inst_35714);

return statearr_35784;
})();
var statearr_35785_36965 = state_35758__$1;
(statearr_35785_36965[(2)] = null);

(statearr_35785_36965[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (16))){
var state_35758__$1 = state_35758;
var statearr_35786_36966 = state_35758__$1;
(statearr_35786_36966[(2)] = null);

(statearr_35786_36966[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (10))){
var inst_35729 = (state_35758[(2)]);
var state_35758__$1 = state_35758;
if(cljs.core.truth_(inst_35729)){
var statearr_35787_36967 = state_35758__$1;
(statearr_35787_36967[(1)] = (11));

} else {
var statearr_35788_36968 = state_35758__$1;
(statearr_35788_36968[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (18))){
var inst_35748 = (state_35758[(2)]);
var state_35758__$1 = state_35758;
var statearr_35789_36970 = state_35758__$1;
(statearr_35789_36970[(2)] = inst_35748);

(statearr_35789_36970[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35759 === (8))){
var inst_35724 = (state_35758[(13)]);
var state_35758__$1 = state_35758;
var statearr_35794_36972 = state_35758__$1;
(statearr_35794_36972[(2)] = inst_35724);

(statearr_35794_36972[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__33271__auto__ = null;
var cljs$core$async$state_machine__33271__auto____0 = (function (){
var statearr_35795 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35795[(0)] = cljs$core$async$state_machine__33271__auto__);

(statearr_35795[(1)] = (1));

return statearr_35795;
});
var cljs$core$async$state_machine__33271__auto____1 = (function (state_35758){
while(true){
var ret_value__33272__auto__ = (function (){try{while(true){
var result__33273__auto__ = switch__33270__auto__(state_35758);
if(cljs.core.keyword_identical_QMARK_(result__33273__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33273__auto__;
}
break;
}
}catch (e35797){var ex__33274__auto__ = e35797;
var statearr_35798_36973 = state_35758;
(statearr_35798_36973[(2)] = ex__33274__auto__);


if(cljs.core.seq((state_35758[(4)]))){
var statearr_35799_36974 = state_35758;
(statearr_35799_36974[(1)] = cljs.core.first((state_35758[(4)])));

} else {
throw ex__33274__auto__;
}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__33272__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36981 = state_35758;
state_35758 = G__36981;
continue;
} else {
return ret_value__33272__auto__;
}
break;
}
});
cljs$core$async$state_machine__33271__auto__ = function(state_35758){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33271__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33271__auto____1.call(this,state_35758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33271__auto____0;
cljs$core$async$state_machine__33271__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33271__auto____1;
return cljs$core$async$state_machine__33271__auto__;
})()
})();
var state__33446__auto__ = (function (){var statearr_35800 = f__33445__auto__();
(statearr_35800[(6)] = c__33444__auto___36932);

return statearr_35800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__33446__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
