goog.provide('uix.hooks.alpha');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
uix.hooks.alpha.use_state = (function uix$hooks$alpha$use_state(value){
return module$node_modules$react$index.useState(value);
});
uix.hooks.alpha.use_reducer = (function uix$hooks$alpha$use_reducer(var_args){
var G__38331 = arguments.length;
switch (G__38331) {
case 2:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (f,value){
return module$node_modules$react$index.useReducer((function (p1__38326_SHARP_,p2__38327_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__38326_SHARP_,p2__38327_SHARP_) : f.call(null,p1__38326_SHARP_,p2__38327_SHARP_));
}),value);
}));

(uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (f,value,init_state){
return module$node_modules$react$index.useReducer((function (p1__38328_SHARP_,p2__38329_SHARP_){
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(p1__38328_SHARP_,p2__38329_SHARP_) : f.call(null,p1__38328_SHARP_,p2__38329_SHARP_));
}),value,init_state);
}));

(uix.hooks.alpha.use_reducer.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_ref = (function uix$hooks$alpha$use_ref(value){
return module$node_modules$react$index.useRef(value);
});
uix.hooks.alpha.with_return_value_check = (function uix$hooks$alpha$with_return_value_check(f){
return (function (){
var ret = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
if(cljs.core.fn_QMARK_(ret)){
return ret;
} else {
return undefined;
}
});
});
uix.hooks.alpha.use_effect = (function uix$hooks$alpha$use_effect(var_args){
var G__38349 = arguments.length;
switch (G__38349) {
case 1:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return module$node_modules$react$index.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return module$node_modules$react$index.useEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_layout_effect = (function uix$hooks$alpha$use_layout_effect(var_args){
var G__38352 = arguments.length;
switch (G__38352) {
case 1:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$1 = (function (setup_fn){
return module$node_modules$react$index.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn));
}));

(uix.hooks.alpha.use_layout_effect.cljs$core$IFn$_invoke$arity$2 = (function (setup_fn,deps){
return module$node_modules$react$index.useLayoutEffect(uix.hooks.alpha.with_return_value_check(setup_fn),deps);
}));

(uix.hooks.alpha.use_layout_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_insertion_effect = (function uix$hooks$alpha$use_insertion_effect(var_args){
var G__38357 = arguments.length;
switch (G__38357) {
case 1:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$1 = (function (f){
return module$node_modules$react$index.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f));
}));

(uix.hooks.alpha.use_insertion_effect.cljs$core$IFn$_invoke$arity$2 = (function (f,deps){
return module$node_modules$react$index.useInsertionEffect(uix.hooks.alpha.with_return_value_check(f),deps);
}));

(uix.hooks.alpha.use_insertion_effect.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_callback = (function uix$hooks$alpha$use_callback(f,deps){
return module$node_modules$react$index.useCallback(f,deps);
});
uix.hooks.alpha.use_memo = (function uix$hooks$alpha$use_memo(f,deps){
return module$node_modules$react$index.useMemo(f,deps);
});
uix.hooks.alpha.use_context = (function uix$hooks$alpha$use_context(v){
return module$node_modules$react$index.useContext(v);
});
uix.hooks.alpha.use_imperative_handle = (function uix$hooks$alpha$use_imperative_handle(var_args){
var G__38364 = arguments.length;
switch (G__38364) {
case 2:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$2 = (function (ref,create_handle){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$core$IFn$_invoke$arity$3 = (function (ref,create_handle,deps){
return module$node_modules$react$index.useImperativeHandle(ref,create_handle,deps);
}));

(uix.hooks.alpha.use_imperative_handle.cljs$lang$maxFixedArity = 3);

uix.hooks.alpha.use_debug = (function uix$hooks$alpha$use_debug(var_args){
var G__38377 = arguments.length;
switch (G__38377) {
case 1:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$1 = (function (v){
return uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2(v,null);
}));

(uix.hooks.alpha.use_debug.cljs$core$IFn$_invoke$arity$2 = (function (v,fmt){
return module$node_modules$react$index.useDebugValue(v,fmt);
}));

(uix.hooks.alpha.use_debug.cljs$lang$maxFixedArity = 2);

uix.hooks.alpha.use_deferred_value = (function uix$hooks$alpha$use_deferred_value(v){
return module$node_modules$react$index.useDeferredValue(v);
});
uix.hooks.alpha.use_transition = (function uix$hooks$alpha$use_transition(){
return module$node_modules$react$index.useTransition();
});
uix.hooks.alpha.use_id = (function uix$hooks$alpha$use_id(){
return module$node_modules$react$index.useId();
});
uix.hooks.alpha.use_sync_external_store = (function uix$hooks$alpha$use_sync_external_store(var_args){
var G__38387 = arguments.length;
switch (G__38387) {
case 2:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2 = (function (subscribe,get_snapshot){
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3 = (function (subscribe,get_snapshot,get_server_snapshot){
return module$node_modules$react$index.useSyncExternalStore(subscribe,get_snapshot,get_server_snapshot);
}));

(uix.hooks.alpha.use_sync_external_store.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=uix.hooks.alpha.js.map
