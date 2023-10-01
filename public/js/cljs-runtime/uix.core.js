goog.provide('uix.core');
goog.scope(function(){
  uix.core.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
uix.core.built_in_static_method_names = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"childContextTypes","childContextTypes",578717991),new cljs.core.Keyword(null,"contextTypes","contextTypes",-2023853910),new cljs.core.Keyword(null,"contextType","contextType",1033066077),new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739),new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477)], null);
/**
 * Creates class based React component
 */
uix.core.create_class = (function uix$core$create_class(p__40257){
var map__40258 = p__40257;
var map__40258__$1 = cljs.core.__destructure_map(map__40258);
var fields = map__40258__$1;
var contextType = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"contextType","contextType",1033066077));
var componentDidUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"componentDidUpdate","componentDidUpdate",-1983477981));
var componentDidCatch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"componentDidCatch","componentDidCatch",821717733));
var displayName = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"displayName","displayName",-809144601));
var childContextTypes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"childContextTypes","childContextTypes",578717991));
var getSnapshotBeforeUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"getSnapshotBeforeUpdate","getSnapshotBeforeUpdate",861122184));
var contextTypes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"contextTypes","contextTypes",-2023853910));
var getDerivedStateFromProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"getDerivedStateFromProps","getDerivedStateFromProps",-991834739));
var getDerivedStateFromError = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"getDerivedStateFromError","getDerivedStateFromError",166658477));
var componentWillUnmount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"componentWillUnmount","componentWillUnmount",1573788814));
var shouldComponentUpdate = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"shouldComponentUpdate","shouldComponentUpdate",1795750960));
var render = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"render","render",-1408033454));
var defaultProps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"defaultProps","defaultProps",-533483149));
var getInitialState = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916));
var constructor$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"constructor","constructor",-1953928811));
var componentDidMount = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__40258__$1,new cljs.core.Keyword(null,"componentDidMount","componentDidMount",955710936));
var methods$ = uix.lib.map__GT_js(cljs.core.apply.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc,fields,new cljs.core.Keyword(null,"displayName","displayName",-809144601),new cljs.core.Keyword(null,"getInitialState","getInitialState",1541760916),new cljs.core.Keyword(null,"constructor","constructor",-1953928811),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"render","render",-1408033454),uix.core.built_in_static_method_names], 0)));
var static_methods = uix.lib.map__GT_js(cljs.core.select_keys(fields,uix.core.built_in_static_method_names));
var ctor = (function (props){
var this$ = this;
module$node_modules$react$index.Component.apply(this$,arguments);

if(cljs.core.truth_(constructor$)){
(constructor$.cljs$core$IFn$_invoke$arity$2 ? constructor$.cljs$core$IFn$_invoke$arity$2(this$,props) : constructor$.call(null,this$,props));
} else {
}

if(cljs.core.truth_(getInitialState)){
(this$.state = (getInitialState.cljs$core$IFn$_invoke$arity$1 ? getInitialState.cljs$core$IFn$_invoke$arity$1(this$) : getInitialState.call(null,this$)));
} else {
}

return this$;
});
uix.core.goog$module$goog$object.extend(ctor.prototype,module$node_modules$react$index.Component.prototype,methods$);

if(cljs.core.truth_(render)){
(ctor.prototype.render = render);
} else {
}

uix.core.goog$module$goog$object.extend(ctor,module$node_modules$react$index.Component,static_methods);

if(cljs.core.truth_(displayName)){
(ctor.displayName = displayName);

(ctor.cljs$lang$ctorStr = displayName);

(ctor.cljs$lang$ctorPrWriter = (function (this$,writer,opt){
return cljs.core._write(writer,displayName);
}));
} else {
}

(ctor.cljs$lang$type = true);

(ctor.prototype.constructor = ctor);

(ctor.uix_component_QMARK_ = true);

return ctor;
});
/**
 * Creates React's ref type object.
 */
uix.core.create_ref = (function uix$core$create_ref(){
return module$node_modules$react$index.createRef();
});
uix.core.glue_args = (function uix$core$glue_args(props){
var G__40263 = props.argv;
if(cljs.core.truth_(props.children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__40263,new cljs.core.Keyword(null,"children","children",-940561982),props.children);
} else {
return G__40263;
}
});
uix.core.memo_compare_args = (function uix$core$memo_compare_args(a,b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(uix.core.glue_args(a),uix.core.glue_args(b));
});
/**
 * Takes component `f` and optional comparator function `should-update?`
 *   that takes previous and next props of the component.
 *   Returns memoized `f`.
 * 
 *   When `should-update?` is not provided uses default comparator
 *   that compares props with clojure.core/=
 */
uix.core.memo = (function uix$core$memo(var_args){
var G__40265 = arguments.length;
switch (G__40265) {
case 1:
return uix.core.memo.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.core.memo.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.core.memo.cljs$core$IFn$_invoke$arity$1 = (function (f){
return uix.core.memo.cljs$core$IFn$_invoke$arity$2(f,uix.core.memo_compare_args);
}));

(uix.core.memo.cljs$core$IFn$_invoke$arity$2 = (function (f,should_update_QMARK_){
var fm = module$node_modules$react$index.memo(f,should_update_QMARK_);
if(cljs.core.truth_(f.uix_component_QMARK_)){
(fm.uix_component_QMARK_ = true);
} else {
}

return fm;
}));

(uix.core.memo.cljs$lang$maxFixedArity = 2);

/**
 * Takes initial value or a function that computes it and returns a stateful value,
 *   and a function to update it.
 * 
 *   See: https://reactjs.org/docs/hooks-reference.html#usestate
 */
uix.core.use_state = (function uix$core$use_state(value){
return uix.hooks.alpha.use_state(value);
});
/**
 * An alternative to `use-state`. Accepts a reducer of type (state, action) => new-state,
 *   and returns the current state paired with a dispatch method.
 * 
 *   See: https://reactjs.org/docs/hooks-reference.html#usereducer
 */
uix.core.use_reducer = (function uix$core$use_reducer(var_args){
var G__40272 = arguments.length;
switch (G__40272) {
case 2:
return uix.core.use_reducer.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.core.use_reducer.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.core.use_reducer.cljs$core$IFn$_invoke$arity$2 = (function (f,value){
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$2(f,value);
}));

(uix.core.use_reducer.cljs$core$IFn$_invoke$arity$3 = (function (f,value,init_state){
return uix.hooks.alpha.use_reducer.cljs$core$IFn$_invoke$arity$3(f,value,init_state);
}));

(uix.core.use_reducer.cljs$lang$maxFixedArity = 3);

/**
 * Takes optional initial value and returns React's ref hook wrapped in atom-like type.
 */
uix.core.use_ref = (function uix$core$use_ref(var_args){
var G__40274 = arguments.length;
switch (G__40274) {
case 0:
return uix.core.use_ref.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return uix.core.use_ref.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.core.use_ref.cljs$core$IFn$_invoke$arity$0 = (function (){
return uix.core.use_ref.cljs$core$IFn$_invoke$arity$1(null);
}));

(uix.core.use_ref.cljs$core$IFn$_invoke$arity$1 = (function (value){
var ref = uix.hooks.alpha.use_ref(null);
if((ref.current == null)){
(ref.current = (function (){var x40275 = ({"current": value});
(x40275.cljs$core$IDeref$ = cljs.core.PROTOCOL_SENTINEL);

(x40275.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.current;
}));

(x40275.cljs$core$IReset$ = cljs.core.PROTOCOL_SENTINEL);

(x40275.cljs$core$IReset$_reset_BANG_$arity$2 = (function (this$,v){
var this$__$1 = this;
return (this$__$1.current = v);
}));

(x40275.cljs$core$ISwap$ = cljs.core.PROTOCOL_SENTINEL);

(x40275.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (this$,f){
var this$__$1 = this;
return (this$__$1.current = (function (){var G__40276 = this$__$1.current;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40276) : f.call(null,G__40276));
})());
}));

(x40275.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (this$,f,a){
var this$__$1 = this;
return (this$__$1.current = (function (){var G__40277 = this$__$1.current;
var G__40278 = a;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__40277,G__40278) : f.call(null,G__40277,G__40278));
})());
}));

(x40275.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (this$,f,a,b){
var this$__$1 = this;
return (this$__$1.current = (function (){var G__40279 = this$__$1.current;
var G__40280 = a;
var G__40281 = b;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__40279,G__40280,G__40281) : f.call(null,G__40279,G__40280,G__40281));
})());
}));

(x40275.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (this$,f,a,b,xs){
var this$__$1 = this;
return (this$__$1.current = cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,this$__$1.current,a,b,xs));
}));

return x40275;
})());
} else {
}

return ref.current;
}));

(uix.core.use_ref.cljs$lang$maxFixedArity = 1);

/**
 * Creates React Context with an optional default value
 */
uix.core.create_context = (function uix$core$create_context(var_args){
var G__40283 = arguments.length;
switch (G__40283) {
case 0:
return uix.core.create_context.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return uix.core.create_context.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.core.create_context.cljs$core$IFn$_invoke$arity$0 = (function (){
return module$node_modules$react$index.createContext();
}));

(uix.core.create_context.cljs$core$IFn$_invoke$arity$1 = (function (default_value){
return module$node_modules$react$index.createContext(default_value);
}));

(uix.core.create_context.cljs$lang$maxFixedArity = 1);

/**
 * Takes React context and returns its current value
 */
uix.core.use_context = (function uix$core$use_context(context){
return uix.hooks.alpha.use_context(context);
});
/**
 * Accepts a value and returns a new copy of the value that will defer to more urgent updates.
 *   If the current render is the result of an urgent update, like user input,
 *   React will return the previous value and then render the new value after the urgent render has completed.
 * 
 *   See: https://reactjs.org/docs/hooks-reference.html#usedeferredvalue
 */
uix.core.use_deferred_value = (function uix$core$use_deferred_value(v){
return uix.hooks.alpha.use_deferred_value(v);
});
/**
 * Returns a stateful value for the pending state of the transition, and a function to start it.
 * 
 *   See: https://reactjs.org/docs/hooks-reference.html#usetransition
 */
uix.core.use_transition = (function uix$core$use_transition(){
return uix.hooks.alpha.use_transition();
});
/**
 * Marks updates in `f` as transitions
 *   See: https://reactjs.org/docs/react-api.html#starttransition
 */
uix.core.start_transition = (function uix$core$start_transition(f){
return module$node_modules$react$index.startTransition(f);
});
/**
 * Returns unique ID that is stable across the server and client, while avoiding hydration mismatches.
 * 
 *   See: https://reactjs.org/docs/hooks-reference.html#useid
 */
uix.core.use_id = (function uix$core$use_id(){
return uix.hooks.alpha.use_id();
});
/**
 * For reading and subscribing from external data sources in a way that’s compatible
 *   with concurrent rendering features like selective hydration and time slicing.
 * 
 *   subscribe: function to register a callback that is called whenever the store changes
 *   get-snapshot: function that returns the current value of the store
 *   get-server-snapshot: function that returns the snapshot used during server rendering
 * 
 *   See: https://reactjs.org/docs/hooks-reference.html#usesyncexternalstore
 */
uix.core.use_sync_external_store = (function uix$core$use_sync_external_store(var_args){
var G__40285 = arguments.length;
switch (G__40285) {
case 2:
return uix.core.use_sync_external_store.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.core.use_sync_external_store.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.core.use_sync_external_store.cljs$core$IFn$_invoke$arity$2 = (function (subscribe,get_snapshot){
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$2(subscribe,get_snapshot);
}));

(uix.core.use_sync_external_store.cljs$core$IFn$_invoke$arity$3 = (function (subscribe,get_snapshot,get_server_snapshot){
return uix.hooks.alpha.use_sync_external_store.cljs$core$IFn$_invoke$arity$3(subscribe,get_snapshot,get_server_snapshot);
}));

(uix.core.use_sync_external_store.cljs$lang$maxFixedArity = 3);

/**
 * Interop with React components. Takes UIx component function
 *   and returns same component wrapped into interop layer.
 */
uix.core.as_react = (function uix$core$as_react(f){
return (function (p1__40286_SHARP_){
var G__40287 = ({"argv": cljs_bean.core.bean.cljs$core$IFn$_invoke$arity$1(p1__40286_SHARP_)});
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__40287) : f.call(null,G__40287));
});
});
uix.core.stringify_clojure_primitives = (function uix$core$stringify_clojure_primitives(v){
if((v instanceof cljs.core.Keyword)){
return v.fqn;
} else {
if(cljs.core.uuid_QMARK_(v)){
return v.uuid;
} else {
if((v instanceof cljs.core.Symbol)){
return v.str;
} else {
return v;

}
}
}
});
uix.core.jsfy_deps = (function uix$core$jsfy_deps(coll){
if(cljs.core.truth_((function (){var or__5045__auto__ = Array.isArray(coll);
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return cljs.core.vector_QMARK_(coll);
}
})())){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (arr,v){
arr.push(uix.core.stringify_clojure_primitives(v));

return arr;
}),[],coll);
} else {
return coll;
}
});
/**
 * Like React.lazy, but supposed to be used with UIx components
 */
uix.core.lazy = (function uix$core$lazy(f){
var lazy_component = module$node_modules$react$index.lazy((function (){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)).then((function (component){
return ({"default": component});
}));
}));
(lazy_component.uix_component_QMARK_ = true);

return lazy_component;
});

//# sourceMappingURL=uix.core.js.map
