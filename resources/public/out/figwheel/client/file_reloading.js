// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
figwheel.client.file_reloading.queued_file_reload;
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__16320__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__16320__auto__){
return or__16320__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.fix_node_request_url = (function figwheel$client$file_reloading$fix_node_request_url(url){

if(cljs.core.truth_(goog.string.startsWith(url,"../"))){
return clojure.string.replace.call(null,url,"../","");
} else {
return [cljs.core.str("goog/"),cljs.core.str(url)].join('');
}
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__16320__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["svgpan.SvgPan",null,"far.out",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__154989_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__154989_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__154994 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__154995 = null;
var count__154996 = (0);
var i__154997 = (0);
while(true){
if((i__154997 < count__154996)){
var n = cljs.core._nth.call(null,chunk__154995,i__154997);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__154998 = seq__154994;
var G__154999 = chunk__154995;
var G__155000 = count__154996;
var G__155001 = (i__154997 + (1));
seq__154994 = G__154998;
chunk__154995 = G__154999;
count__154996 = G__155000;
i__154997 = G__155001;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__154994);
if(temp__4425__auto__){
var seq__154994__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154994__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__154994__$1);
var G__155002 = cljs.core.chunk_rest.call(null,seq__154994__$1);
var G__155003 = c__17123__auto__;
var G__155004 = cljs.core.count.call(null,c__17123__auto__);
var G__155005 = (0);
seq__154994 = G__155002;
chunk__154995 = G__155003;
count__154996 = G__155004;
i__154997 = G__155005;
continue;
} else {
var n = cljs.core.first.call(null,seq__154994__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__155006 = cljs.core.next.call(null,seq__154994__$1);
var G__155007 = null;
var G__155008 = (0);
var G__155009 = (0);
seq__154994 = G__155006;
chunk__154995 = G__155007;
count__154996 = G__155008;
i__154997 = G__155009;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__155048_155055 = cljs.core.seq.call(null,deps);
var chunk__155049_155056 = null;
var count__155050_155057 = (0);
var i__155051_155058 = (0);
while(true){
if((i__155051_155058 < count__155050_155057)){
var dep_155059 = cljs.core._nth.call(null,chunk__155049_155056,i__155051_155058);
topo_sort_helper_STAR_.call(null,dep_155059,(depth + (1)),state);

var G__155060 = seq__155048_155055;
var G__155061 = chunk__155049_155056;
var G__155062 = count__155050_155057;
var G__155063 = (i__155051_155058 + (1));
seq__155048_155055 = G__155060;
chunk__155049_155056 = G__155061;
count__155050_155057 = G__155062;
i__155051_155058 = G__155063;
continue;
} else {
var temp__4425__auto___155064 = cljs.core.seq.call(null,seq__155048_155055);
if(temp__4425__auto___155064){
var seq__155048_155065__$1 = temp__4425__auto___155064;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__155048_155065__$1)){
var c__17123__auto___155066 = cljs.core.chunk_first.call(null,seq__155048_155065__$1);
var G__155067 = cljs.core.chunk_rest.call(null,seq__155048_155065__$1);
var G__155068 = c__17123__auto___155066;
var G__155069 = cljs.core.count.call(null,c__17123__auto___155066);
var G__155070 = (0);
seq__155048_155055 = G__155067;
chunk__155049_155056 = G__155068;
count__155050_155057 = G__155069;
i__155051_155058 = G__155070;
continue;
} else {
var dep_155071 = cljs.core.first.call(null,seq__155048_155065__$1);
topo_sort_helper_STAR_.call(null,dep_155071,(depth + (1)),state);

var G__155072 = cljs.core.next.call(null,seq__155048_155065__$1);
var G__155073 = null;
var G__155074 = (0);
var G__155075 = (0);
seq__155048_155055 = G__155072;
chunk__155049_155056 = G__155073;
count__155050_155057 = G__155074;
i__155051_155058 = G__155075;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__155052){
var vec__155054 = p__155052;
var x = cljs.core.nth.call(null,vec__155054,(0),null);
var xs = cljs.core.nthnext.call(null,vec__155054,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__155054,x,xs,get_deps__$1){
return (function (p1__155010_SHARP_){
return clojure.set.difference.call(null,p1__155010_SHARP_,x);
});})(vec__155054,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__155088 = cljs.core.seq.call(null,provides);
var chunk__155089 = null;
var count__155090 = (0);
var i__155091 = (0);
while(true){
if((i__155091 < count__155090)){
var prov = cljs.core._nth.call(null,chunk__155089,i__155091);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__155092_155100 = cljs.core.seq.call(null,requires);
var chunk__155093_155101 = null;
var count__155094_155102 = (0);
var i__155095_155103 = (0);
while(true){
if((i__155095_155103 < count__155094_155102)){
var req_155104 = cljs.core._nth.call(null,chunk__155093_155101,i__155095_155103);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_155104,prov);

var G__155105 = seq__155092_155100;
var G__155106 = chunk__155093_155101;
var G__155107 = count__155094_155102;
var G__155108 = (i__155095_155103 + (1));
seq__155092_155100 = G__155105;
chunk__155093_155101 = G__155106;
count__155094_155102 = G__155107;
i__155095_155103 = G__155108;
continue;
} else {
var temp__4425__auto___155109 = cljs.core.seq.call(null,seq__155092_155100);
if(temp__4425__auto___155109){
var seq__155092_155110__$1 = temp__4425__auto___155109;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__155092_155110__$1)){
var c__17123__auto___155111 = cljs.core.chunk_first.call(null,seq__155092_155110__$1);
var G__155112 = cljs.core.chunk_rest.call(null,seq__155092_155110__$1);
var G__155113 = c__17123__auto___155111;
var G__155114 = cljs.core.count.call(null,c__17123__auto___155111);
var G__155115 = (0);
seq__155092_155100 = G__155112;
chunk__155093_155101 = G__155113;
count__155094_155102 = G__155114;
i__155095_155103 = G__155115;
continue;
} else {
var req_155116 = cljs.core.first.call(null,seq__155092_155110__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_155116,prov);

var G__155117 = cljs.core.next.call(null,seq__155092_155110__$1);
var G__155118 = null;
var G__155119 = (0);
var G__155120 = (0);
seq__155092_155100 = G__155117;
chunk__155093_155101 = G__155118;
count__155094_155102 = G__155119;
i__155095_155103 = G__155120;
continue;
}
} else {
}
}
break;
}

var G__155121 = seq__155088;
var G__155122 = chunk__155089;
var G__155123 = count__155090;
var G__155124 = (i__155091 + (1));
seq__155088 = G__155121;
chunk__155089 = G__155122;
count__155090 = G__155123;
i__155091 = G__155124;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__155088);
if(temp__4425__auto__){
var seq__155088__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__155088__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__155088__$1);
var G__155125 = cljs.core.chunk_rest.call(null,seq__155088__$1);
var G__155126 = c__17123__auto__;
var G__155127 = cljs.core.count.call(null,c__17123__auto__);
var G__155128 = (0);
seq__155088 = G__155125;
chunk__155089 = G__155126;
count__155090 = G__155127;
i__155091 = G__155128;
continue;
} else {
var prov = cljs.core.first.call(null,seq__155088__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__155096_155129 = cljs.core.seq.call(null,requires);
var chunk__155097_155130 = null;
var count__155098_155131 = (0);
var i__155099_155132 = (0);
while(true){
if((i__155099_155132 < count__155098_155131)){
var req_155133 = cljs.core._nth.call(null,chunk__155097_155130,i__155099_155132);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_155133,prov);

var G__155134 = seq__155096_155129;
var G__155135 = chunk__155097_155130;
var G__155136 = count__155098_155131;
var G__155137 = (i__155099_155132 + (1));
seq__155096_155129 = G__155134;
chunk__155097_155130 = G__155135;
count__155098_155131 = G__155136;
i__155099_155132 = G__155137;
continue;
} else {
var temp__4425__auto___155138__$1 = cljs.core.seq.call(null,seq__155096_155129);
if(temp__4425__auto___155138__$1){
var seq__155096_155139__$1 = temp__4425__auto___155138__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__155096_155139__$1)){
var c__17123__auto___155140 = cljs.core.chunk_first.call(null,seq__155096_155139__$1);
var G__155141 = cljs.core.chunk_rest.call(null,seq__155096_155139__$1);
var G__155142 = c__17123__auto___155140;
var G__155143 = cljs.core.count.call(null,c__17123__auto___155140);
var G__155144 = (0);
seq__155096_155129 = G__155141;
chunk__155097_155130 = G__155142;
count__155098_155131 = G__155143;
i__155099_155132 = G__155144;
continue;
} else {
var req_155145 = cljs.core.first.call(null,seq__155096_155139__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_155145,prov);

var G__155146 = cljs.core.next.call(null,seq__155096_155139__$1);
var G__155147 = null;
var G__155148 = (0);
var G__155149 = (0);
seq__155096_155129 = G__155146;
chunk__155097_155130 = G__155147;
count__155098_155131 = G__155148;
i__155099_155132 = G__155149;
continue;
}
} else {
}
}
break;
}

var G__155150 = cljs.core.next.call(null,seq__155088__$1);
var G__155151 = null;
var G__155152 = (0);
var G__155153 = (0);
seq__155088 = G__155150;
chunk__155089 = G__155151;
count__155090 = G__155152;
i__155091 = G__155153;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__155158_155162 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__155159_155163 = null;
var count__155160_155164 = (0);
var i__155161_155165 = (0);
while(true){
if((i__155161_155165 < count__155160_155164)){
var ns_155166 = cljs.core._nth.call(null,chunk__155159_155163,i__155161_155165);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_155166);

var G__155167 = seq__155158_155162;
var G__155168 = chunk__155159_155163;
var G__155169 = count__155160_155164;
var G__155170 = (i__155161_155165 + (1));
seq__155158_155162 = G__155167;
chunk__155159_155163 = G__155168;
count__155160_155164 = G__155169;
i__155161_155165 = G__155170;
continue;
} else {
var temp__4425__auto___155171 = cljs.core.seq.call(null,seq__155158_155162);
if(temp__4425__auto___155171){
var seq__155158_155172__$1 = temp__4425__auto___155171;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__155158_155172__$1)){
var c__17123__auto___155173 = cljs.core.chunk_first.call(null,seq__155158_155172__$1);
var G__155174 = cljs.core.chunk_rest.call(null,seq__155158_155172__$1);
var G__155175 = c__17123__auto___155173;
var G__155176 = cljs.core.count.call(null,c__17123__auto___155173);
var G__155177 = (0);
seq__155158_155162 = G__155174;
chunk__155159_155163 = G__155175;
count__155160_155164 = G__155176;
i__155161_155165 = G__155177;
continue;
} else {
var ns_155178 = cljs.core.first.call(null,seq__155158_155172__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_155178);

var G__155179 = cljs.core.next.call(null,seq__155158_155172__$1);
var G__155180 = null;
var G__155181 = (0);
var G__155182 = (0);
seq__155158_155162 = G__155179;
chunk__155159_155163 = G__155180;
count__155160_155164 = G__155181;
i__155161_155165 = G__155182;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__16320__auto__ = goog.require__;
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__155183__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__155183 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__155184__i = 0, G__155184__a = new Array(arguments.length -  0);
while (G__155184__i < G__155184__a.length) {G__155184__a[G__155184__i] = arguments[G__155184__i + 0]; ++G__155184__i;}
  args = new cljs.core.IndexedSeq(G__155184__a,0);
} 
return G__155183__delegate.call(this,args);};
G__155183.cljs$lang$maxFixedArity = 0;
G__155183.cljs$lang$applyTo = (function (arglist__155185){
var args = cljs.core.seq(arglist__155185);
return G__155183__delegate(args);
});
G__155183.cljs$core$IFn$_invoke$arity$variadic = G__155183__delegate;
return G__155183;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__155186 = cljs.core._EQ_;
var expr__155187 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__155186.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__155187))){
return ((function (pred__155186,expr__155187){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e155189){if((e155189 instanceof Error)){
var e = e155189;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e155189;

}
}})());
});
;})(pred__155186,expr__155187))
} else {
if(cljs.core.truth_(pred__155186.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__155187))){
return ((function (pred__155186,expr__155187){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__155186,expr__155187){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__155186,expr__155187))
);

return deferred.addErrback(((function (deferred,pred__155186,expr__155187){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__155186,expr__155187))
);
});
;})(pred__155186,expr__155187))
} else {
return ((function (pred__155186,expr__155187){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__155186,expr__155187))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__155190,callback){
var map__155193 = p__155190;
var map__155193__$1 = ((((!((map__155193 == null)))?((((map__155193.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155193.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155193):map__155193);
var file_msg = map__155193__$1;
var request_url = cljs.core.get.call(null,map__155193__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__155193,map__155193__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__155193,map__155193__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__){
return (function (state_155217){
var state_val_155218 = (state_155217[(1)]);
if((state_val_155218 === (7))){
var inst_155213 = (state_155217[(2)]);
var state_155217__$1 = state_155217;
var statearr_155219_155239 = state_155217__$1;
(statearr_155219_155239[(2)] = inst_155213);

(statearr_155219_155239[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155218 === (1))){
var state_155217__$1 = state_155217;
var statearr_155220_155240 = state_155217__$1;
(statearr_155220_155240[(2)] = null);

(statearr_155220_155240[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155218 === (4))){
var inst_155197 = (state_155217[(7)]);
var inst_155197__$1 = (state_155217[(2)]);
var state_155217__$1 = (function (){var statearr_155221 = state_155217;
(statearr_155221[(7)] = inst_155197__$1);

return statearr_155221;
})();
if(cljs.core.truth_(inst_155197__$1)){
var statearr_155222_155241 = state_155217__$1;
(statearr_155222_155241[(1)] = (5));

} else {
var statearr_155223_155242 = state_155217__$1;
(statearr_155223_155242[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155218 === (6))){
var state_155217__$1 = state_155217;
var statearr_155224_155243 = state_155217__$1;
(statearr_155224_155243[(2)] = null);

(statearr_155224_155243[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155218 === (3))){
var inst_155215 = (state_155217[(2)]);
var state_155217__$1 = state_155217;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155217__$1,inst_155215);
} else {
if((state_val_155218 === (2))){
var state_155217__$1 = state_155217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155217__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_155218 === (11))){
var inst_155209 = (state_155217[(2)]);
var state_155217__$1 = (function (){var statearr_155225 = state_155217;
(statearr_155225[(8)] = inst_155209);

return statearr_155225;
})();
var statearr_155226_155244 = state_155217__$1;
(statearr_155226_155244[(2)] = null);

(statearr_155226_155244[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155218 === (9))){
var inst_155201 = (state_155217[(9)]);
var inst_155203 = (state_155217[(10)]);
var inst_155205 = inst_155203.call(null,inst_155201);
var state_155217__$1 = state_155217;
var statearr_155227_155245 = state_155217__$1;
(statearr_155227_155245[(2)] = inst_155205);

(statearr_155227_155245[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155218 === (5))){
var inst_155197 = (state_155217[(7)]);
var inst_155199 = figwheel.client.file_reloading.blocking_load.call(null,inst_155197);
var state_155217__$1 = state_155217;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155217__$1,(8),inst_155199);
} else {
if((state_val_155218 === (10))){
var inst_155201 = (state_155217[(9)]);
var inst_155207 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_155201);
var state_155217__$1 = state_155217;
var statearr_155228_155246 = state_155217__$1;
(statearr_155228_155246[(2)] = inst_155207);

(statearr_155228_155246[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155218 === (8))){
var inst_155197 = (state_155217[(7)]);
var inst_155203 = (state_155217[(10)]);
var inst_155201 = (state_155217[(2)]);
var inst_155202 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_155203__$1 = cljs.core.get.call(null,inst_155202,inst_155197);
var state_155217__$1 = (function (){var statearr_155229 = state_155217;
(statearr_155229[(9)] = inst_155201);

(statearr_155229[(10)] = inst_155203__$1);

return statearr_155229;
})();
if(cljs.core.truth_(inst_155203__$1)){
var statearr_155230_155247 = state_155217__$1;
(statearr_155230_155247[(1)] = (9));

} else {
var statearr_155231_155248 = state_155217__$1;
(statearr_155231_155248[(1)] = (10));

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
});})(c__19342__auto__))
;
return ((function (switch__19321__auto__,c__19342__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19322__auto__ = null;
var figwheel$client$file_reloading$state_machine__19322__auto____0 = (function (){
var statearr_155235 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_155235[(0)] = figwheel$client$file_reloading$state_machine__19322__auto__);

(statearr_155235[(1)] = (1));

return statearr_155235;
});
var figwheel$client$file_reloading$state_machine__19322__auto____1 = (function (state_155217){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_155217);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e155236){if((e155236 instanceof Object)){
var ex__19325__auto__ = e155236;
var statearr_155237_155249 = state_155217;
(statearr_155237_155249[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155217);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155236;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155250 = state_155217;
state_155217 = G__155250;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19322__auto__ = function(state_155217){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19322__auto____1.call(this,state_155217);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19322__auto____0;
figwheel$client$file_reloading$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19322__auto____1;
return figwheel$client$file_reloading$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_155238 = f__19343__auto__.call(null);
(statearr_155238[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_155238;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__155251,callback){
var map__155254 = p__155251;
var map__155254__$1 = ((((!((map__155254 == null)))?((((map__155254.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155254.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155254):map__155254);
var file_msg = map__155254__$1;
var namespace = cljs.core.get.call(null,map__155254__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__155254,map__155254__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__155254,map__155254__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__155256){
var map__155259 = p__155256;
var map__155259__$1 = ((((!((map__155259 == null)))?((((map__155259.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155259.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155259):map__155259);
var file_msg = map__155259__$1;
var namespace = cljs.core.get.call(null,map__155259__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__16308__auto__ = cljs.core.not.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas));
if(and__16308__auto__){
var or__16320__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
var or__16320__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__16320__auto____$1)){
return or__16320__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__16308__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__155261,callback){
var map__155264 = p__155261;
var map__155264__$1 = ((((!((map__155264 == null)))?((((map__155264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155264):map__155264);
var file_msg = map__155264__$1;
var request_url = cljs.core.get.call(null,map__155264__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__155264__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__19342__auto___155352 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___155352,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___155352,out){
return (function (state_155334){
var state_val_155335 = (state_155334[(1)]);
if((state_val_155335 === (1))){
var inst_155312 = cljs.core.nth.call(null,files,(0),null);
var inst_155313 = cljs.core.nthnext.call(null,files,(1));
var inst_155314 = files;
var state_155334__$1 = (function (){var statearr_155336 = state_155334;
(statearr_155336[(7)] = inst_155312);

(statearr_155336[(8)] = inst_155313);

(statearr_155336[(9)] = inst_155314);

return statearr_155336;
})();
var statearr_155337_155353 = state_155334__$1;
(statearr_155337_155353[(2)] = null);

(statearr_155337_155353[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155335 === (2))){
var inst_155317 = (state_155334[(10)]);
var inst_155314 = (state_155334[(9)]);
var inst_155317__$1 = cljs.core.nth.call(null,inst_155314,(0),null);
var inst_155318 = cljs.core.nthnext.call(null,inst_155314,(1));
var inst_155319 = (inst_155317__$1 == null);
var inst_155320 = cljs.core.not.call(null,inst_155319);
var state_155334__$1 = (function (){var statearr_155338 = state_155334;
(statearr_155338[(10)] = inst_155317__$1);

(statearr_155338[(11)] = inst_155318);

return statearr_155338;
})();
if(inst_155320){
var statearr_155339_155354 = state_155334__$1;
(statearr_155339_155354[(1)] = (4));

} else {
var statearr_155340_155355 = state_155334__$1;
(statearr_155340_155355[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155335 === (3))){
var inst_155332 = (state_155334[(2)]);
var state_155334__$1 = state_155334;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155334__$1,inst_155332);
} else {
if((state_val_155335 === (4))){
var inst_155317 = (state_155334[(10)]);
var inst_155322 = figwheel.client.file_reloading.reload_js_file.call(null,inst_155317);
var state_155334__$1 = state_155334;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155334__$1,(7),inst_155322);
} else {
if((state_val_155335 === (5))){
var inst_155328 = cljs.core.async.close_BANG_.call(null,out);
var state_155334__$1 = state_155334;
var statearr_155341_155356 = state_155334__$1;
(statearr_155341_155356[(2)] = inst_155328);

(statearr_155341_155356[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155335 === (6))){
var inst_155330 = (state_155334[(2)]);
var state_155334__$1 = state_155334;
var statearr_155342_155357 = state_155334__$1;
(statearr_155342_155357[(2)] = inst_155330);

(statearr_155342_155357[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155335 === (7))){
var inst_155318 = (state_155334[(11)]);
var inst_155324 = (state_155334[(2)]);
var inst_155325 = cljs.core.async.put_BANG_.call(null,out,inst_155324);
var inst_155314 = inst_155318;
var state_155334__$1 = (function (){var statearr_155343 = state_155334;
(statearr_155343[(12)] = inst_155325);

(statearr_155343[(9)] = inst_155314);

return statearr_155343;
})();
var statearr_155344_155358 = state_155334__$1;
(statearr_155344_155358[(2)] = null);

(statearr_155344_155358[(1)] = (2));


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
});})(c__19342__auto___155352,out))
;
return ((function (switch__19321__auto__,c__19342__auto___155352,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto____0 = (function (){
var statearr_155348 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_155348[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto__);

(statearr_155348[(1)] = (1));

return statearr_155348;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto____1 = (function (state_155334){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_155334);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e155349){if((e155349 instanceof Object)){
var ex__19325__auto__ = e155349;
var statearr_155350_155359 = state_155334;
(statearr_155350_155359[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155334);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155349;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155360 = state_155334;
state_155334 = G__155360;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto__ = function(state_155334){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto____1.call(this,state_155334);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___155352,out))
})();
var state__19344__auto__ = (function (){var statearr_155351 = f__19343__auto__.call(null);
(statearr_155351[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___155352);

return statearr_155351;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___155352,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__155361,opts){
var map__155365 = p__155361;
var map__155365__$1 = ((((!((map__155365 == null)))?((((map__155365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155365):map__155365);
var eval_body__$1 = cljs.core.get.call(null,map__155365__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__155365__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__16308__auto__ = eval_body__$1;
if(cljs.core.truth_(and__16308__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__16308__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e155367){var e = e155367;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, ["figwheel.connect",null], null), null),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4423__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__155368_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__155368_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4423__auto__)){
var file_msg = temp__4423__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__155373){
var vec__155374 = p__155373;
var k = cljs.core.nth.call(null,vec__155374,(0),null);
var v = cljs.core.nth.call(null,vec__155374,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__155375){
var vec__155376 = p__155375;
var k = cljs.core.nth.call(null,vec__155376,(0),null);
var v = cljs.core.nth.call(null,vec__155376,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__155380,p__155381){
var map__155628 = p__155380;
var map__155628__$1 = ((((!((map__155628 == null)))?((((map__155628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155628):map__155628);
var opts = map__155628__$1;
var before_jsload = cljs.core.get.call(null,map__155628__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__155628__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__155628__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__155629 = p__155381;
var map__155629__$1 = ((((!((map__155629 == null)))?((((map__155629.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155629.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155629):map__155629);
var msg = map__155629__$1;
var files = cljs.core.get.call(null,map__155629__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__155629__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__155629__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_155782){
var state_val_155783 = (state_155782[(1)]);
if((state_val_155783 === (7))){
var inst_155644 = (state_155782[(7)]);
var inst_155645 = (state_155782[(8)]);
var inst_155643 = (state_155782[(9)]);
var inst_155646 = (state_155782[(10)]);
var inst_155651 = cljs.core._nth.call(null,inst_155644,inst_155646);
var inst_155652 = figwheel.client.file_reloading.eval_body.call(null,inst_155651,opts);
var inst_155653 = (inst_155646 + (1));
var tmp155784 = inst_155644;
var tmp155785 = inst_155645;
var tmp155786 = inst_155643;
var inst_155643__$1 = tmp155786;
var inst_155644__$1 = tmp155784;
var inst_155645__$1 = tmp155785;
var inst_155646__$1 = inst_155653;
var state_155782__$1 = (function (){var statearr_155787 = state_155782;
(statearr_155787[(7)] = inst_155644__$1);

(statearr_155787[(11)] = inst_155652);

(statearr_155787[(8)] = inst_155645__$1);

(statearr_155787[(9)] = inst_155643__$1);

(statearr_155787[(10)] = inst_155646__$1);

return statearr_155787;
})();
var statearr_155788_155874 = state_155782__$1;
(statearr_155788_155874[(2)] = null);

(statearr_155788_155874[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (20))){
var inst_155686 = (state_155782[(12)]);
var inst_155694 = figwheel.client.file_reloading.sort_files.call(null,inst_155686);
var state_155782__$1 = state_155782;
var statearr_155789_155875 = state_155782__$1;
(statearr_155789_155875[(2)] = inst_155694);

(statearr_155789_155875[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (27))){
var state_155782__$1 = state_155782;
var statearr_155790_155876 = state_155782__$1;
(statearr_155790_155876[(2)] = null);

(statearr_155790_155876[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (1))){
var inst_155635 = (state_155782[(13)]);
var inst_155632 = before_jsload.call(null,files);
var inst_155633 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_155634 = (function (){return ((function (inst_155635,inst_155632,inst_155633,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__155377_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__155377_SHARP_);
});
;})(inst_155635,inst_155632,inst_155633,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_155635__$1 = cljs.core.filter.call(null,inst_155634,files);
var inst_155636 = cljs.core.not_empty.call(null,inst_155635__$1);
var state_155782__$1 = (function (){var statearr_155791 = state_155782;
(statearr_155791[(14)] = inst_155632);

(statearr_155791[(13)] = inst_155635__$1);

(statearr_155791[(15)] = inst_155633);

return statearr_155791;
})();
if(cljs.core.truth_(inst_155636)){
var statearr_155792_155877 = state_155782__$1;
(statearr_155792_155877[(1)] = (2));

} else {
var statearr_155793_155878 = state_155782__$1;
(statearr_155793_155878[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (24))){
var state_155782__$1 = state_155782;
var statearr_155794_155879 = state_155782__$1;
(statearr_155794_155879[(2)] = null);

(statearr_155794_155879[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (39))){
var inst_155736 = (state_155782[(16)]);
var state_155782__$1 = state_155782;
var statearr_155795_155880 = state_155782__$1;
(statearr_155795_155880[(2)] = inst_155736);

(statearr_155795_155880[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (46))){
var inst_155777 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
var statearr_155796_155881 = state_155782__$1;
(statearr_155796_155881[(2)] = inst_155777);

(statearr_155796_155881[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (4))){
var inst_155680 = (state_155782[(2)]);
var inst_155681 = cljs.core.List.EMPTY;
var inst_155682 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_155681);
var inst_155683 = (function (){return ((function (inst_155680,inst_155681,inst_155682,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__155378_SHARP_){
var and__16308__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__155378_SHARP_);
if(cljs.core.truth_(and__16308__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__155378_SHARP_));
} else {
return and__16308__auto__;
}
});
;})(inst_155680,inst_155681,inst_155682,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_155684 = cljs.core.filter.call(null,inst_155683,files);
var inst_155685 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_155686 = cljs.core.concat.call(null,inst_155684,inst_155685);
var state_155782__$1 = (function (){var statearr_155797 = state_155782;
(statearr_155797[(17)] = inst_155680);

(statearr_155797[(18)] = inst_155682);

(statearr_155797[(12)] = inst_155686);

return statearr_155797;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_155798_155882 = state_155782__$1;
(statearr_155798_155882[(1)] = (16));

} else {
var statearr_155799_155883 = state_155782__$1;
(statearr_155799_155883[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (15))){
var inst_155670 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
var statearr_155800_155884 = state_155782__$1;
(statearr_155800_155884[(2)] = inst_155670);

(statearr_155800_155884[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (21))){
var inst_155696 = (state_155782[(19)]);
var inst_155696__$1 = (state_155782[(2)]);
var inst_155697 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_155696__$1);
var state_155782__$1 = (function (){var statearr_155801 = state_155782;
(statearr_155801[(19)] = inst_155696__$1);

return statearr_155801;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_155782__$1,(22),inst_155697);
} else {
if((state_val_155783 === (31))){
var inst_155780 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_155782__$1,inst_155780);
} else {
if((state_val_155783 === (32))){
var inst_155736 = (state_155782[(16)]);
var inst_155741 = inst_155736.cljs$lang$protocol_mask$partition0$;
var inst_155742 = (inst_155741 & (64));
var inst_155743 = inst_155736.cljs$core$ISeq$;
var inst_155744 = (inst_155742) || (inst_155743);
var state_155782__$1 = state_155782;
if(cljs.core.truth_(inst_155744)){
var statearr_155802_155885 = state_155782__$1;
(statearr_155802_155885[(1)] = (35));

} else {
var statearr_155803_155886 = state_155782__$1;
(statearr_155803_155886[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (40))){
var inst_155757 = (state_155782[(20)]);
var inst_155756 = (state_155782[(2)]);
var inst_155757__$1 = cljs.core.get.call(null,inst_155756,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_155758 = cljs.core.get.call(null,inst_155756,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_155759 = cljs.core.not_empty.call(null,inst_155757__$1);
var state_155782__$1 = (function (){var statearr_155804 = state_155782;
(statearr_155804[(20)] = inst_155757__$1);

(statearr_155804[(21)] = inst_155758);

return statearr_155804;
})();
if(cljs.core.truth_(inst_155759)){
var statearr_155805_155887 = state_155782__$1;
(statearr_155805_155887[(1)] = (41));

} else {
var statearr_155806_155888 = state_155782__$1;
(statearr_155806_155888[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (33))){
var state_155782__$1 = state_155782;
var statearr_155807_155889 = state_155782__$1;
(statearr_155807_155889[(2)] = false);

(statearr_155807_155889[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (13))){
var inst_155656 = (state_155782[(22)]);
var inst_155660 = cljs.core.chunk_first.call(null,inst_155656);
var inst_155661 = cljs.core.chunk_rest.call(null,inst_155656);
var inst_155662 = cljs.core.count.call(null,inst_155660);
var inst_155643 = inst_155661;
var inst_155644 = inst_155660;
var inst_155645 = inst_155662;
var inst_155646 = (0);
var state_155782__$1 = (function (){var statearr_155808 = state_155782;
(statearr_155808[(7)] = inst_155644);

(statearr_155808[(8)] = inst_155645);

(statearr_155808[(9)] = inst_155643);

(statearr_155808[(10)] = inst_155646);

return statearr_155808;
})();
var statearr_155809_155890 = state_155782__$1;
(statearr_155809_155890[(2)] = null);

(statearr_155809_155890[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (22))){
var inst_155704 = (state_155782[(23)]);
var inst_155696 = (state_155782[(19)]);
var inst_155700 = (state_155782[(24)]);
var inst_155699 = (state_155782[(25)]);
var inst_155699__$1 = (state_155782[(2)]);
var inst_155700__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_155699__$1);
var inst_155701 = (function (){var all_files = inst_155696;
var res_SINGLEQUOTE_ = inst_155699__$1;
var res = inst_155700__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_155704,inst_155696,inst_155700,inst_155699,inst_155699__$1,inst_155700__$1,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__155379_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__155379_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_155704,inst_155696,inst_155700,inst_155699,inst_155699__$1,inst_155700__$1,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_155702 = cljs.core.filter.call(null,inst_155701,inst_155699__$1);
var inst_155703 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_155704__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_155703);
var inst_155705 = cljs.core.not_empty.call(null,inst_155704__$1);
var state_155782__$1 = (function (){var statearr_155810 = state_155782;
(statearr_155810[(23)] = inst_155704__$1);

(statearr_155810[(26)] = inst_155702);

(statearr_155810[(24)] = inst_155700__$1);

(statearr_155810[(25)] = inst_155699__$1);

return statearr_155810;
})();
if(cljs.core.truth_(inst_155705)){
var statearr_155811_155891 = state_155782__$1;
(statearr_155811_155891[(1)] = (23));

} else {
var statearr_155812_155892 = state_155782__$1;
(statearr_155812_155892[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (36))){
var state_155782__$1 = state_155782;
var statearr_155813_155893 = state_155782__$1;
(statearr_155813_155893[(2)] = false);

(statearr_155813_155893[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (41))){
var inst_155757 = (state_155782[(20)]);
var inst_155761 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_155762 = cljs.core.map.call(null,inst_155761,inst_155757);
var inst_155763 = cljs.core.pr_str.call(null,inst_155762);
var inst_155764 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_155763)].join('');
var inst_155765 = figwheel.client.utils.log.call(null,inst_155764);
var state_155782__$1 = state_155782;
var statearr_155814_155894 = state_155782__$1;
(statearr_155814_155894[(2)] = inst_155765);

(statearr_155814_155894[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (43))){
var inst_155758 = (state_155782[(21)]);
var inst_155768 = (state_155782[(2)]);
var inst_155769 = cljs.core.not_empty.call(null,inst_155758);
var state_155782__$1 = (function (){var statearr_155815 = state_155782;
(statearr_155815[(27)] = inst_155768);

return statearr_155815;
})();
if(cljs.core.truth_(inst_155769)){
var statearr_155816_155895 = state_155782__$1;
(statearr_155816_155895[(1)] = (44));

} else {
var statearr_155817_155896 = state_155782__$1;
(statearr_155817_155896[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (29))){
var inst_155704 = (state_155782[(23)]);
var inst_155702 = (state_155782[(26)]);
var inst_155696 = (state_155782[(19)]);
var inst_155700 = (state_155782[(24)]);
var inst_155699 = (state_155782[(25)]);
var inst_155736 = (state_155782[(16)]);
var inst_155732 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_155735 = (function (){var all_files = inst_155696;
var res_SINGLEQUOTE_ = inst_155699;
var res = inst_155700;
var files_not_loaded = inst_155702;
var dependencies_that_loaded = inst_155704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155736,inst_155732,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__155734){
var map__155818 = p__155734;
var map__155818__$1 = ((((!((map__155818 == null)))?((((map__155818.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155818.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155818):map__155818);
var namespace = cljs.core.get.call(null,map__155818__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155736,inst_155732,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_155736__$1 = cljs.core.group_by.call(null,inst_155735,inst_155702);
var inst_155738 = (inst_155736__$1 == null);
var inst_155739 = cljs.core.not.call(null,inst_155738);
var state_155782__$1 = (function (){var statearr_155820 = state_155782;
(statearr_155820[(28)] = inst_155732);

(statearr_155820[(16)] = inst_155736__$1);

return statearr_155820;
})();
if(inst_155739){
var statearr_155821_155897 = state_155782__$1;
(statearr_155821_155897[(1)] = (32));

} else {
var statearr_155822_155898 = state_155782__$1;
(statearr_155822_155898[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (44))){
var inst_155758 = (state_155782[(21)]);
var inst_155771 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_155758);
var inst_155772 = cljs.core.pr_str.call(null,inst_155771);
var inst_155773 = [cljs.core.str("not required: "),cljs.core.str(inst_155772)].join('');
var inst_155774 = figwheel.client.utils.log.call(null,inst_155773);
var state_155782__$1 = state_155782;
var statearr_155823_155899 = state_155782__$1;
(statearr_155823_155899[(2)] = inst_155774);

(statearr_155823_155899[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (6))){
var inst_155677 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
var statearr_155824_155900 = state_155782__$1;
(statearr_155824_155900[(2)] = inst_155677);

(statearr_155824_155900[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (28))){
var inst_155702 = (state_155782[(26)]);
var inst_155729 = (state_155782[(2)]);
var inst_155730 = cljs.core.not_empty.call(null,inst_155702);
var state_155782__$1 = (function (){var statearr_155825 = state_155782;
(statearr_155825[(29)] = inst_155729);

return statearr_155825;
})();
if(cljs.core.truth_(inst_155730)){
var statearr_155826_155901 = state_155782__$1;
(statearr_155826_155901[(1)] = (29));

} else {
var statearr_155827_155902 = state_155782__$1;
(statearr_155827_155902[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (25))){
var inst_155700 = (state_155782[(24)]);
var inst_155716 = (state_155782[(2)]);
var inst_155717 = cljs.core.not_empty.call(null,inst_155700);
var state_155782__$1 = (function (){var statearr_155828 = state_155782;
(statearr_155828[(30)] = inst_155716);

return statearr_155828;
})();
if(cljs.core.truth_(inst_155717)){
var statearr_155829_155903 = state_155782__$1;
(statearr_155829_155903[(1)] = (26));

} else {
var statearr_155830_155904 = state_155782__$1;
(statearr_155830_155904[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (34))){
var inst_155751 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
if(cljs.core.truth_(inst_155751)){
var statearr_155831_155905 = state_155782__$1;
(statearr_155831_155905[(1)] = (38));

} else {
var statearr_155832_155906 = state_155782__$1;
(statearr_155832_155906[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (17))){
var state_155782__$1 = state_155782;
var statearr_155833_155907 = state_155782__$1;
(statearr_155833_155907[(2)] = recompile_dependents);

(statearr_155833_155907[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (3))){
var state_155782__$1 = state_155782;
var statearr_155834_155908 = state_155782__$1;
(statearr_155834_155908[(2)] = null);

(statearr_155834_155908[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (12))){
var inst_155673 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
var statearr_155835_155909 = state_155782__$1;
(statearr_155835_155909[(2)] = inst_155673);

(statearr_155835_155909[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (2))){
var inst_155635 = (state_155782[(13)]);
var inst_155642 = cljs.core.seq.call(null,inst_155635);
var inst_155643 = inst_155642;
var inst_155644 = null;
var inst_155645 = (0);
var inst_155646 = (0);
var state_155782__$1 = (function (){var statearr_155836 = state_155782;
(statearr_155836[(7)] = inst_155644);

(statearr_155836[(8)] = inst_155645);

(statearr_155836[(9)] = inst_155643);

(statearr_155836[(10)] = inst_155646);

return statearr_155836;
})();
var statearr_155837_155910 = state_155782__$1;
(statearr_155837_155910[(2)] = null);

(statearr_155837_155910[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (23))){
var inst_155704 = (state_155782[(23)]);
var inst_155702 = (state_155782[(26)]);
var inst_155696 = (state_155782[(19)]);
var inst_155700 = (state_155782[(24)]);
var inst_155699 = (state_155782[(25)]);
var inst_155707 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_155709 = (function (){var all_files = inst_155696;
var res_SINGLEQUOTE_ = inst_155699;
var res = inst_155700;
var files_not_loaded = inst_155702;
var dependencies_that_loaded = inst_155704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155707,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__155708){
var map__155838 = p__155708;
var map__155838__$1 = ((((!((map__155838 == null)))?((((map__155838.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155838.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155838):map__155838);
var request_url = cljs.core.get.call(null,map__155838__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155707,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_155710 = cljs.core.reverse.call(null,inst_155704);
var inst_155711 = cljs.core.map.call(null,inst_155709,inst_155710);
var inst_155712 = cljs.core.pr_str.call(null,inst_155711);
var inst_155713 = figwheel.client.utils.log.call(null,inst_155712);
var state_155782__$1 = (function (){var statearr_155840 = state_155782;
(statearr_155840[(31)] = inst_155707);

return statearr_155840;
})();
var statearr_155841_155911 = state_155782__$1;
(statearr_155841_155911[(2)] = inst_155713);

(statearr_155841_155911[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (35))){
var state_155782__$1 = state_155782;
var statearr_155842_155912 = state_155782__$1;
(statearr_155842_155912[(2)] = true);

(statearr_155842_155912[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (19))){
var inst_155686 = (state_155782[(12)]);
var inst_155692 = figwheel.client.file_reloading.expand_files.call(null,inst_155686);
var state_155782__$1 = state_155782;
var statearr_155843_155913 = state_155782__$1;
(statearr_155843_155913[(2)] = inst_155692);

(statearr_155843_155913[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (11))){
var state_155782__$1 = state_155782;
var statearr_155844_155914 = state_155782__$1;
(statearr_155844_155914[(2)] = null);

(statearr_155844_155914[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (9))){
var inst_155675 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
var statearr_155845_155915 = state_155782__$1;
(statearr_155845_155915[(2)] = inst_155675);

(statearr_155845_155915[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (5))){
var inst_155645 = (state_155782[(8)]);
var inst_155646 = (state_155782[(10)]);
var inst_155648 = (inst_155646 < inst_155645);
var inst_155649 = inst_155648;
var state_155782__$1 = state_155782;
if(cljs.core.truth_(inst_155649)){
var statearr_155846_155916 = state_155782__$1;
(statearr_155846_155916[(1)] = (7));

} else {
var statearr_155847_155917 = state_155782__$1;
(statearr_155847_155917[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (14))){
var inst_155656 = (state_155782[(22)]);
var inst_155665 = cljs.core.first.call(null,inst_155656);
var inst_155666 = figwheel.client.file_reloading.eval_body.call(null,inst_155665,opts);
var inst_155667 = cljs.core.next.call(null,inst_155656);
var inst_155643 = inst_155667;
var inst_155644 = null;
var inst_155645 = (0);
var inst_155646 = (0);
var state_155782__$1 = (function (){var statearr_155848 = state_155782;
(statearr_155848[(32)] = inst_155666);

(statearr_155848[(7)] = inst_155644);

(statearr_155848[(8)] = inst_155645);

(statearr_155848[(9)] = inst_155643);

(statearr_155848[(10)] = inst_155646);

return statearr_155848;
})();
var statearr_155849_155918 = state_155782__$1;
(statearr_155849_155918[(2)] = null);

(statearr_155849_155918[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (45))){
var state_155782__$1 = state_155782;
var statearr_155850_155919 = state_155782__$1;
(statearr_155850_155919[(2)] = null);

(statearr_155850_155919[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (26))){
var inst_155704 = (state_155782[(23)]);
var inst_155702 = (state_155782[(26)]);
var inst_155696 = (state_155782[(19)]);
var inst_155700 = (state_155782[(24)]);
var inst_155699 = (state_155782[(25)]);
var inst_155719 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_155721 = (function (){var all_files = inst_155696;
var res_SINGLEQUOTE_ = inst_155699;
var res = inst_155700;
var files_not_loaded = inst_155702;
var dependencies_that_loaded = inst_155704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155719,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__155720){
var map__155851 = p__155720;
var map__155851__$1 = ((((!((map__155851 == null)))?((((map__155851.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155851.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155851):map__155851);
var namespace = cljs.core.get.call(null,map__155851__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__155851__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155719,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_155722 = cljs.core.map.call(null,inst_155721,inst_155700);
var inst_155723 = cljs.core.pr_str.call(null,inst_155722);
var inst_155724 = figwheel.client.utils.log.call(null,inst_155723);
var inst_155725 = (function (){var all_files = inst_155696;
var res_SINGLEQUOTE_ = inst_155699;
var res = inst_155700;
var files_not_loaded = inst_155702;
var dependencies_that_loaded = inst_155704;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155719,inst_155721,inst_155722,inst_155723,inst_155724,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_155704,inst_155702,inst_155696,inst_155700,inst_155699,inst_155719,inst_155721,inst_155722,inst_155723,inst_155724,state_val_155783,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_155726 = setTimeout(inst_155725,(10));
var state_155782__$1 = (function (){var statearr_155853 = state_155782;
(statearr_155853[(33)] = inst_155724);

(statearr_155853[(34)] = inst_155719);

return statearr_155853;
})();
var statearr_155854_155920 = state_155782__$1;
(statearr_155854_155920[(2)] = inst_155726);

(statearr_155854_155920[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (16))){
var state_155782__$1 = state_155782;
var statearr_155855_155921 = state_155782__$1;
(statearr_155855_155921[(2)] = reload_dependents);

(statearr_155855_155921[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (38))){
var inst_155736 = (state_155782[(16)]);
var inst_155753 = cljs.core.apply.call(null,cljs.core.hash_map,inst_155736);
var state_155782__$1 = state_155782;
var statearr_155856_155922 = state_155782__$1;
(statearr_155856_155922[(2)] = inst_155753);

(statearr_155856_155922[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (30))){
var state_155782__$1 = state_155782;
var statearr_155857_155923 = state_155782__$1;
(statearr_155857_155923[(2)] = null);

(statearr_155857_155923[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (10))){
var inst_155656 = (state_155782[(22)]);
var inst_155658 = cljs.core.chunked_seq_QMARK_.call(null,inst_155656);
var state_155782__$1 = state_155782;
if(inst_155658){
var statearr_155858_155924 = state_155782__$1;
(statearr_155858_155924[(1)] = (13));

} else {
var statearr_155859_155925 = state_155782__$1;
(statearr_155859_155925[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (18))){
var inst_155690 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
if(cljs.core.truth_(inst_155690)){
var statearr_155860_155926 = state_155782__$1;
(statearr_155860_155926[(1)] = (19));

} else {
var statearr_155861_155927 = state_155782__$1;
(statearr_155861_155927[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (42))){
var state_155782__$1 = state_155782;
var statearr_155862_155928 = state_155782__$1;
(statearr_155862_155928[(2)] = null);

(statearr_155862_155928[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (37))){
var inst_155748 = (state_155782[(2)]);
var state_155782__$1 = state_155782;
var statearr_155863_155929 = state_155782__$1;
(statearr_155863_155929[(2)] = inst_155748);

(statearr_155863_155929[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_155783 === (8))){
var inst_155656 = (state_155782[(22)]);
var inst_155643 = (state_155782[(9)]);
var inst_155656__$1 = cljs.core.seq.call(null,inst_155643);
var state_155782__$1 = (function (){var statearr_155864 = state_155782;
(statearr_155864[(22)] = inst_155656__$1);

return statearr_155864;
})();
if(inst_155656__$1){
var statearr_155865_155930 = state_155782__$1;
(statearr_155865_155930[(1)] = (10));

} else {
var statearr_155866_155931 = state_155782__$1;
(statearr_155866_155931[(1)] = (11));

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
}
});})(c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19321__auto__,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto____0 = (function (){
var statearr_155870 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_155870[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto__);

(statearr_155870[(1)] = (1));

return statearr_155870;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto____1 = (function (state_155782){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_155782);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e155871){if((e155871 instanceof Object)){
var ex__19325__auto__ = e155871;
var statearr_155872_155932 = state_155782;
(statearr_155872_155932[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_155782);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e155871;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__155933 = state_155782;
state_155782 = G__155933;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto__ = function(state_155782){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto____1.call(this,state_155782);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19344__auto__ = (function (){var statearr_155873 = f__19343__auto__.call(null);
(statearr_155873[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_155873;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,map__155628,map__155628__$1,opts,before_jsload,on_jsload,reload_dependents,map__155629,map__155629__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19342__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__155936,link){
var map__155939 = p__155936;
var map__155939__$1 = ((((!((map__155939 == null)))?((((map__155939.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155939.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155939):map__155939);
var file = cljs.core.get.call(null,map__155939__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__155939,map__155939__$1,file){
return (function (p1__155934_SHARP_,p2__155935_SHARP_){
if(cljs.core._EQ_.call(null,p1__155934_SHARP_,p2__155935_SHARP_)){
return p1__155934_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__155939,map__155939__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__155945){
var map__155946 = p__155945;
var map__155946__$1 = ((((!((map__155946 == null)))?((((map__155946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155946):map__155946);
var match_length = cljs.core.get.call(null,map__155946__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__155946__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__155941_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__155941_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4425__auto__)){
var res = temp__4425__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.add_link_to_doc = (function figwheel$client$file_reloading$add_link_to_doc(var_args){
var args155948 = [];
var len__17378__auto___155951 = arguments.length;
var i__17379__auto___155952 = (0);
while(true){
if((i__17379__auto___155952 < len__17378__auto___155951)){
args155948.push((arguments[i__17379__auto___155952]));

var G__155953 = (i__17379__auto___155952 + (1));
i__17379__auto___155952 = G__155953;
continue;
} else {
}
break;
}

var G__155950 = args155948.length;
switch (G__155950) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args155948.length)].join('')));

}
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1 = (function (new_link){
return (document.getElementsByTagName("head")[(0)]).appendChild(new_link);
});

figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2 = (function (orig_link,klone){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
return parent.removeChild(orig_link);
});})(parent))
,(300));
});

figwheel.client.file_reloading.add_link_to_doc.cljs$lang$maxFixedArity = 2;
figwheel.client.file_reloading.distictify = (function figwheel$client$file_reloading$distictify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__155955_SHARP_,p2__155956_SHARP_){
return cljs.core.assoc.call(null,p1__155955_SHARP_,cljs.core.get.call(null,p2__155956_SHARP_,key),p2__155956_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__155957){
var map__155960 = p__155957;
var map__155960__$1 = ((((!((map__155960 == null)))?((((map__155960.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155960.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155960):map__155960);
var f_data = map__155960__$1;
var file = cljs.core.get.call(null,map__155960__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__155962,files_msg){
var map__155969 = p__155962;
var map__155969__$1 = ((((!((map__155969 == null)))?((((map__155969.cljs$lang$protocol_mask$partition0$ & (64))) || (map__155969.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__155969):map__155969);
var opts = map__155969__$1;
var on_cssload = cljs.core.get.call(null,map__155969__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__155971_155975 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__155972_155976 = null;
var count__155973_155977 = (0);
var i__155974_155978 = (0);
while(true){
if((i__155974_155978 < count__155973_155977)){
var f_155979 = cljs.core._nth.call(null,chunk__155972_155976,i__155974_155978);
figwheel.client.file_reloading.reload_css_file.call(null,f_155979);

var G__155980 = seq__155971_155975;
var G__155981 = chunk__155972_155976;
var G__155982 = count__155973_155977;
var G__155983 = (i__155974_155978 + (1));
seq__155971_155975 = G__155980;
chunk__155972_155976 = G__155981;
count__155973_155977 = G__155982;
i__155974_155978 = G__155983;
continue;
} else {
var temp__4425__auto___155984 = cljs.core.seq.call(null,seq__155971_155975);
if(temp__4425__auto___155984){
var seq__155971_155985__$1 = temp__4425__auto___155984;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__155971_155985__$1)){
var c__17123__auto___155986 = cljs.core.chunk_first.call(null,seq__155971_155985__$1);
var G__155987 = cljs.core.chunk_rest.call(null,seq__155971_155985__$1);
var G__155988 = c__17123__auto___155986;
var G__155989 = cljs.core.count.call(null,c__17123__auto___155986);
var G__155990 = (0);
seq__155971_155975 = G__155987;
chunk__155972_155976 = G__155988;
count__155973_155977 = G__155989;
i__155974_155978 = G__155990;
continue;
} else {
var f_155991 = cljs.core.first.call(null,seq__155971_155985__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_155991);

var G__155992 = cljs.core.next.call(null,seq__155971_155985__$1);
var G__155993 = null;
var G__155994 = (0);
var G__155995 = (0);
seq__155971_155975 = G__155992;
chunk__155972_155976 = G__155993;
count__155973_155977 = G__155994;
i__155974_155978 = G__155995;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__155969,map__155969__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__155969,map__155969__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map