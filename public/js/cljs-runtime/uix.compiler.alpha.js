goog.provide('uix.compiler.alpha');
goog.scope(function(){
  uix.compiler.alpha.goog$module$goog$object = goog.module.get('goog.object');
});
var module$node_modules$react$index=shadow.js.require("module$node_modules$react$index", {});
uix.compiler.alpha.reagent_component_QMARK_ = (function uix$compiler$alpha$reagent_component_QMARK_(component_type){
return cljs.core.some((function (p1__38466_SHARP_){
if(clojure.string.starts_with_QMARK_(p1__38466_SHARP_,"G_")){
return (component_type === uix.compiler.alpha.goog$module$goog$object.get(component_type,p1__38466_SHARP_));
} else {
return null;
}
}),Object.keys(component_type));
});
uix.compiler.alpha.validate_component = (function uix$compiler$alpha$validate_component(component_type){
if(cljs.core.truth_((function (){var and__5043__auto__ = cljs.core.not(component_type.uix_component_QMARK_);
if(and__5043__auto__){
return uix.compiler.alpha.reagent_component_QMARK_(component_type);
} else {
return and__5043__auto__;
}
})())){
var name_str_38486 = (function (){var or__5045__auto__ = component_type.displayName;
if(cljs.core.truth_(or__5045__auto__)){
return or__5045__auto__;
} else {
return component_type.name;
}
})();
throw (new Error(["Invalid use of Reagent component ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str_38486)," in `$` form.\n","UIx doesn't know how to render Reagent components.\n","Reagent element should be Hiccup wrapped with r/as-element, i.e. (r/as-element [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_str_38486),"])"].join('')));
} else {
}

return true;
});
uix.compiler.alpha.uix_component_element = (function uix$compiler$alpha$uix_component_element(component_type,props_children,children){
var props = (props_children[(0)]);
var js_props = (function (){var temp__5806__auto__ = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(props);
if((temp__5806__auto__ == null)){
return ({"argv": props});
} else {
var key = temp__5806__auto__;
return ({"key": key, "argv": cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"key","key",-1516042587))});
}
})();
var args = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),props_children.length))?[component_type,js_props,(props_children[(1)])]:[component_type,js_props]);
return module$node_modules$react$index.createElement.apply(null,args.concat(children));
});
uix.compiler.alpha.react_component_element = (function uix$compiler$alpha$react_component_element(component_type,props_children,children){
var js_props = (uix.compiler.attributes.interpret_attrs((props_children[(0)]),[],true)[(0)]);
var args = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),props_children.length))?[component_type,js_props,(props_children[(1)])]:[component_type,js_props]);
return module$node_modules$react$index.createElement.apply(null,args.concat(children));
});
uix.compiler.alpha.component_element = (function uix$compiler$alpha$component_element(component_type,props_children,children){
if(goog.DEBUG){
uix.compiler.alpha.validate_component(component_type);
} else {
}

if(cljs.core.truth_(component_type.uix_component_QMARK_)){
return uix.compiler.alpha.uix_component_element(component_type,props_children,children);
} else {
return uix.compiler.alpha.react_component_element(component_type,props_children,children);
}
});

//# sourceMappingURL=uix.compiler.alpha.js.map
