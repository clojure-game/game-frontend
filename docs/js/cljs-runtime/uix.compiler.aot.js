goog.provide('uix.compiler.aot');
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
uix.compiler.aot.hiccup_QMARK_ = (function uix$compiler$aot$hiccup_QMARK_(el){
if(cljs.core.vector_QMARK_(el)){
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(el,(0),null);
return (((tag instanceof cljs.core.Keyword)) || ((((tag instanceof cljs.core.Symbol)) || (((cljs.core.fn_QMARK_(tag)) || ((tag instanceof cljs.core.MultiFn)))))));
} else {
return null;
}
});
uix.compiler.aot.validate_children = (function uix$compiler$aot$validate_children(children){
var v__38574__auto___38704 = children;
if(cljs.core.seq(v__38574__auto___38704)){
var x__38575__auto___38705 = cljs.core.first(v__38574__auto___38704);
var xs__38576__auto___38706 = cljs.core.next(v__38574__auto___38704);
while(true){
var child_38707 = x__38575__auto___38705;
if(cljs.core.truth_(uix.compiler.aot.hiccup_QMARK_(child_38707))){
throw (new Error(["Hiccup is not valid as UIx child (found: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_38707),").\n","If you meant to render UIx element, use `$` macro, i.e. ($ ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_38707),")\n","If you meant to render Reagent element, wrap it with r/as-element, i.e. (r/as-element ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(child_38707),")"].join('')));
} else {
if(cljs.core.sequential_QMARK_(child_38707)){
(uix.compiler.aot.validate_children.cljs$core$IFn$_invoke$arity$1 ? uix.compiler.aot.validate_children.cljs$core$IFn$_invoke$arity$1(child_38707) : uix.compiler.aot.validate_children.call(null,child_38707));
} else {
}
}

if(cljs.core.seq(xs__38576__auto___38706)){
var G__38712 = cljs.core.first(xs__38576__auto___38706);
var G__38713 = cljs.core.next(xs__38576__auto___38706);
x__38575__auto___38705 = G__38712;
xs__38576__auto___38706 = G__38713;
continue;
} else {
}
break;
}
} else {
}

return true;
});
uix.compiler.aot._GT_el = (function uix$compiler$aot$_GT_el(tag,attrs_children,children){
var args = [tag].concat(attrs_children).concat(children);
if(goog.DEBUG){
uix.compiler.aot.validate_children(args.slice((2)));
} else {
}

return module$node_modules$react$index.createElement.apply(null,args);
});
uix.compiler.aot.create_uix_input = (function uix$compiler$aot$create_uix_input(tag,attrs_children,children){
if(uix.compiler.input.should_use_reagent_input_QMARK_()){
var props = (attrs_children[(0)]);
var children__$1 = [(attrs_children[(1)])].concat(children);
return module$node_modules$react$index.createElement(uix.compiler.input.reagent_input,({"props": props, "tag": tag, "children": children__$1}));
} else {
return uix.compiler.aot._GT_el(tag,attrs_children,children);
}
});
uix.compiler.aot.fragment = module$node_modules$react$index.Fragment;

//# sourceMappingURL=uix.compiler.aot.js.map
