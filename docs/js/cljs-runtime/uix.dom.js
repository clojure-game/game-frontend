goog.provide('uix.dom');
var module$node_modules$react_dom$client=shadow.js.require("module$node_modules$react_dom$client", {});
var module$node_modules$react_dom$index=shadow.js.require("module$node_modules$react_dom$index", {});
/**
 * Create a React root for the supplied container and return the root.
 * 
 *   See: https://reactjs.org/docs/react-dom-client.html#createroot
 */
uix.dom.create_root = (function uix$dom$create_root(var_args){
var G__38696 = arguments.length;
switch (G__38696) {
case 1:
return uix.dom.create_root.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return uix.dom.create_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.dom.create_root.cljs$core$IFn$_invoke$arity$1 = (function (node){
return module$node_modules$react_dom$client.createRoot(node);
}));

(uix.dom.create_root.cljs$core$IFn$_invoke$arity$2 = (function (node,p__38700){
var map__38701 = p__38700;
var map__38701__$1 = cljs.core.__destructure_map(map__38701);
var options = map__38701__$1;
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38701__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38701__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
return module$node_modules$react_dom$client.createRoot(node,({"onRecoverableError": on_recoverable_error, "identifierPrefix": identifier_prefix}));
}));

(uix.dom.create_root.cljs$lang$maxFixedArity = 2);

/**
 * Same as `create-root`, but is used to hydrate a container whose HTML contents were rendered by ReactDOMServer.
 * 
 *   See: https://reactjs.org/docs/react-dom-client.html#hydrateroot
 */
uix.dom.hydrate_root = (function uix$dom$hydrate_root(var_args){
var G__38709 = arguments.length;
switch (G__38709) {
case 2:
return uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$2 = (function (container,element){
return module$node_modules$react_dom$client.hydrateRoot(container,element);
}));

(uix.dom.hydrate_root.cljs$core$IFn$_invoke$arity$3 = (function (container,element,p__38714){
var map__38715 = p__38714;
var map__38715__$1 = cljs.core.__destructure_map(map__38715);
var options = map__38715__$1;
var on_recoverable_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38715__$1,new cljs.core.Keyword(null,"on-recoverable-error","on-recoverable-error",1651056576));
var identifier_prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38715__$1,new cljs.core.Keyword(null,"identifier-prefix","identifier-prefix",1929840008));
return module$node_modules$react_dom$client.hydrateRoot(container,element,({"onRecoverableError": on_recoverable_error, "identifierPrefix": identifier_prefix}));
}));

(uix.dom.hydrate_root.cljs$lang$maxFixedArity = 3);

/**
 * Renders React root into the DOM node.
 */
uix.dom.render_root = (function uix$dom$render_root(element,root){
return root.render(element);
});
/**
 * Remove a mounted React root from the DOM and clean up its event handlers and state.
 */
uix.dom.unmount_root = (function uix$dom$unmount_root(root){
return root.unmount();
});
/**
 * DEPRECATED: Renders element into DOM node. The first argument is React element.
 */
uix.dom.render = (function uix$dom$render(element,node){
return module$node_modules$react_dom$index.render(element,node);
});
/**
 * DEPRECATED: Hydrates server rendered document at `node` with `element`.
 */
uix.dom.hydrate = (function uix$dom$hydrate(element,node){
return module$node_modules$react_dom$index.hydrate(element,node);
});
/**
 * Force React to flush any updates inside the provided callback synchronously.
 *   This ensures that the DOM is updated immediately.
 * 
 *   See: https://reactjs.org/docs/react-dom.html#flushsync
 */
uix.dom.flush_sync = (function uix$dom$flush_sync(callback){
return module$node_modules$react_dom$index.flushSync(callback);
});
uix.dom.batched_updates = (function uix$dom$batched_updates(f){
return module$node_modules$react_dom$index.unstable_batchedUpdates(f);
});
/**
 * Unmounts React component rendered into DOM node
 */
uix.dom.unmount_at_node = (function uix$dom$unmount_at_node(node){
return module$node_modules$react_dom$index.unmountComponentAtNode(node);
});
/**
 * If this component has been mounted into the DOM, this returns the corresponding native browser DOM element.
 * 
 *   See: https://reactjs.org/docs/react-dom.html#finddomnode
 */
uix.dom.find_dom_node = (function uix$dom$find_dom_node(component){
return module$node_modules$react_dom$index.findDOMNode(component);
});
/**
 * Creates a portal. Portals provide a way to render children into a DOM node
 *   that exists outside the hierarchy of the DOM component.
 * 
 *   See: https://reactjs.org/docs/react-dom.html#createportal
 */
uix.dom.create_portal = (function uix$dom$create_portal(child,node){
return module$node_modules$react_dom$index.createPortal(child,node);
});

//# sourceMappingURL=uix.dom.js.map
