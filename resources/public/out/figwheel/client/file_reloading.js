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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__66006_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__66006_SHARP_));
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
var seq__66011 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__66012 = null;
var count__66013 = (0);
var i__66014 = (0);
while(true){
if((i__66014 < count__66013)){
var n = cljs.core._nth.call(null,chunk__66012,i__66014);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__66015 = seq__66011;
var G__66016 = chunk__66012;
var G__66017 = count__66013;
var G__66018 = (i__66014 + (1));
seq__66011 = G__66015;
chunk__66012 = G__66016;
count__66013 = G__66017;
i__66014 = G__66018;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__66011);
if(temp__4425__auto__){
var seq__66011__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66011__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__66011__$1);
var G__66019 = cljs.core.chunk_rest.call(null,seq__66011__$1);
var G__66020 = c__17123__auto__;
var G__66021 = cljs.core.count.call(null,c__17123__auto__);
var G__66022 = (0);
seq__66011 = G__66019;
chunk__66012 = G__66020;
count__66013 = G__66021;
i__66014 = G__66022;
continue;
} else {
var n = cljs.core.first.call(null,seq__66011__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__66023 = cljs.core.next.call(null,seq__66011__$1);
var G__66024 = null;
var G__66025 = (0);
var G__66026 = (0);
seq__66011 = G__66023;
chunk__66012 = G__66024;
count__66013 = G__66025;
i__66014 = G__66026;
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

var seq__66065_66072 = cljs.core.seq.call(null,deps);
var chunk__66066_66073 = null;
var count__66067_66074 = (0);
var i__66068_66075 = (0);
while(true){
if((i__66068_66075 < count__66067_66074)){
var dep_66076 = cljs.core._nth.call(null,chunk__66066_66073,i__66068_66075);
topo_sort_helper_STAR_.call(null,dep_66076,(depth + (1)),state);

var G__66077 = seq__66065_66072;
var G__66078 = chunk__66066_66073;
var G__66079 = count__66067_66074;
var G__66080 = (i__66068_66075 + (1));
seq__66065_66072 = G__66077;
chunk__66066_66073 = G__66078;
count__66067_66074 = G__66079;
i__66068_66075 = G__66080;
continue;
} else {
var temp__4425__auto___66081 = cljs.core.seq.call(null,seq__66065_66072);
if(temp__4425__auto___66081){
var seq__66065_66082__$1 = temp__4425__auto___66081;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66065_66082__$1)){
var c__17123__auto___66083 = cljs.core.chunk_first.call(null,seq__66065_66082__$1);
var G__66084 = cljs.core.chunk_rest.call(null,seq__66065_66082__$1);
var G__66085 = c__17123__auto___66083;
var G__66086 = cljs.core.count.call(null,c__17123__auto___66083);
var G__66087 = (0);
seq__66065_66072 = G__66084;
chunk__66066_66073 = G__66085;
count__66067_66074 = G__66086;
i__66068_66075 = G__66087;
continue;
} else {
var dep_66088 = cljs.core.first.call(null,seq__66065_66082__$1);
topo_sort_helper_STAR_.call(null,dep_66088,(depth + (1)),state);

var G__66089 = cljs.core.next.call(null,seq__66065_66082__$1);
var G__66090 = null;
var G__66091 = (0);
var G__66092 = (0);
seq__66065_66072 = G__66089;
chunk__66066_66073 = G__66090;
count__66067_66074 = G__66091;
i__66068_66075 = G__66092;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__66069){
var vec__66071 = p__66069;
var x = cljs.core.nth.call(null,vec__66071,(0),null);
var xs = cljs.core.nthnext.call(null,vec__66071,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__66071,x,xs,get_deps__$1){
return (function (p1__66027_SHARP_){
return clojure.set.difference.call(null,p1__66027_SHARP_,x);
});})(vec__66071,x,xs,get_deps__$1))
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
var seq__66105 = cljs.core.seq.call(null,provides);
var chunk__66106 = null;
var count__66107 = (0);
var i__66108 = (0);
while(true){
if((i__66108 < count__66107)){
var prov = cljs.core._nth.call(null,chunk__66106,i__66108);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__66109_66117 = cljs.core.seq.call(null,requires);
var chunk__66110_66118 = null;
var count__66111_66119 = (0);
var i__66112_66120 = (0);
while(true){
if((i__66112_66120 < count__66111_66119)){
var req_66121 = cljs.core._nth.call(null,chunk__66110_66118,i__66112_66120);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66121,prov);

var G__66122 = seq__66109_66117;
var G__66123 = chunk__66110_66118;
var G__66124 = count__66111_66119;
var G__66125 = (i__66112_66120 + (1));
seq__66109_66117 = G__66122;
chunk__66110_66118 = G__66123;
count__66111_66119 = G__66124;
i__66112_66120 = G__66125;
continue;
} else {
var temp__4425__auto___66126 = cljs.core.seq.call(null,seq__66109_66117);
if(temp__4425__auto___66126){
var seq__66109_66127__$1 = temp__4425__auto___66126;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66109_66127__$1)){
var c__17123__auto___66128 = cljs.core.chunk_first.call(null,seq__66109_66127__$1);
var G__66129 = cljs.core.chunk_rest.call(null,seq__66109_66127__$1);
var G__66130 = c__17123__auto___66128;
var G__66131 = cljs.core.count.call(null,c__17123__auto___66128);
var G__66132 = (0);
seq__66109_66117 = G__66129;
chunk__66110_66118 = G__66130;
count__66111_66119 = G__66131;
i__66112_66120 = G__66132;
continue;
} else {
var req_66133 = cljs.core.first.call(null,seq__66109_66127__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66133,prov);

var G__66134 = cljs.core.next.call(null,seq__66109_66127__$1);
var G__66135 = null;
var G__66136 = (0);
var G__66137 = (0);
seq__66109_66117 = G__66134;
chunk__66110_66118 = G__66135;
count__66111_66119 = G__66136;
i__66112_66120 = G__66137;
continue;
}
} else {
}
}
break;
}

var G__66138 = seq__66105;
var G__66139 = chunk__66106;
var G__66140 = count__66107;
var G__66141 = (i__66108 + (1));
seq__66105 = G__66138;
chunk__66106 = G__66139;
count__66107 = G__66140;
i__66108 = G__66141;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__66105);
if(temp__4425__auto__){
var seq__66105__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66105__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__66105__$1);
var G__66142 = cljs.core.chunk_rest.call(null,seq__66105__$1);
var G__66143 = c__17123__auto__;
var G__66144 = cljs.core.count.call(null,c__17123__auto__);
var G__66145 = (0);
seq__66105 = G__66142;
chunk__66106 = G__66143;
count__66107 = G__66144;
i__66108 = G__66145;
continue;
} else {
var prov = cljs.core.first.call(null,seq__66105__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__66113_66146 = cljs.core.seq.call(null,requires);
var chunk__66114_66147 = null;
var count__66115_66148 = (0);
var i__66116_66149 = (0);
while(true){
if((i__66116_66149 < count__66115_66148)){
var req_66150 = cljs.core._nth.call(null,chunk__66114_66147,i__66116_66149);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66150,prov);

var G__66151 = seq__66113_66146;
var G__66152 = chunk__66114_66147;
var G__66153 = count__66115_66148;
var G__66154 = (i__66116_66149 + (1));
seq__66113_66146 = G__66151;
chunk__66114_66147 = G__66152;
count__66115_66148 = G__66153;
i__66116_66149 = G__66154;
continue;
} else {
var temp__4425__auto___66155__$1 = cljs.core.seq.call(null,seq__66113_66146);
if(temp__4425__auto___66155__$1){
var seq__66113_66156__$1 = temp__4425__auto___66155__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66113_66156__$1)){
var c__17123__auto___66157 = cljs.core.chunk_first.call(null,seq__66113_66156__$1);
var G__66158 = cljs.core.chunk_rest.call(null,seq__66113_66156__$1);
var G__66159 = c__17123__auto___66157;
var G__66160 = cljs.core.count.call(null,c__17123__auto___66157);
var G__66161 = (0);
seq__66113_66146 = G__66158;
chunk__66114_66147 = G__66159;
count__66115_66148 = G__66160;
i__66116_66149 = G__66161;
continue;
} else {
var req_66162 = cljs.core.first.call(null,seq__66113_66156__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_66162,prov);

var G__66163 = cljs.core.next.call(null,seq__66113_66156__$1);
var G__66164 = null;
var G__66165 = (0);
var G__66166 = (0);
seq__66113_66146 = G__66163;
chunk__66114_66147 = G__66164;
count__66115_66148 = G__66165;
i__66116_66149 = G__66166;
continue;
}
} else {
}
}
break;
}

var G__66167 = cljs.core.next.call(null,seq__66105__$1);
var G__66168 = null;
var G__66169 = (0);
var G__66170 = (0);
seq__66105 = G__66167;
chunk__66106 = G__66168;
count__66107 = G__66169;
i__66108 = G__66170;
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
var seq__66175_66179 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__66176_66180 = null;
var count__66177_66181 = (0);
var i__66178_66182 = (0);
while(true){
if((i__66178_66182 < count__66177_66181)){
var ns_66183 = cljs.core._nth.call(null,chunk__66176_66180,i__66178_66182);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_66183);

var G__66184 = seq__66175_66179;
var G__66185 = chunk__66176_66180;
var G__66186 = count__66177_66181;
var G__66187 = (i__66178_66182 + (1));
seq__66175_66179 = G__66184;
chunk__66176_66180 = G__66185;
count__66177_66181 = G__66186;
i__66178_66182 = G__66187;
continue;
} else {
var temp__4425__auto___66188 = cljs.core.seq.call(null,seq__66175_66179);
if(temp__4425__auto___66188){
var seq__66175_66189__$1 = temp__4425__auto___66188;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66175_66189__$1)){
var c__17123__auto___66190 = cljs.core.chunk_first.call(null,seq__66175_66189__$1);
var G__66191 = cljs.core.chunk_rest.call(null,seq__66175_66189__$1);
var G__66192 = c__17123__auto___66190;
var G__66193 = cljs.core.count.call(null,c__17123__auto___66190);
var G__66194 = (0);
seq__66175_66179 = G__66191;
chunk__66176_66180 = G__66192;
count__66177_66181 = G__66193;
i__66178_66182 = G__66194;
continue;
} else {
var ns_66195 = cljs.core.first.call(null,seq__66175_66189__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_66195);

var G__66196 = cljs.core.next.call(null,seq__66175_66189__$1);
var G__66197 = null;
var G__66198 = (0);
var G__66199 = (0);
seq__66175_66179 = G__66196;
chunk__66176_66180 = G__66197;
count__66177_66181 = G__66198;
i__66178_66182 = G__66199;
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
var G__66200__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__66200 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__66201__i = 0, G__66201__a = new Array(arguments.length -  0);
while (G__66201__i < G__66201__a.length) {G__66201__a[G__66201__i] = arguments[G__66201__i + 0]; ++G__66201__i;}
  args = new cljs.core.IndexedSeq(G__66201__a,0);
} 
return G__66200__delegate.call(this,args);};
G__66200.cljs$lang$maxFixedArity = 0;
G__66200.cljs$lang$applyTo = (function (arglist__66202){
var args = cljs.core.seq(arglist__66202);
return G__66200__delegate(args);
});
G__66200.cljs$core$IFn$_invoke$arity$variadic = G__66200__delegate;
return G__66200;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__66203 = cljs.core._EQ_;
var expr__66204 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__66203.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__66204))){
return ((function (pred__66203,expr__66204){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e66206){if((e66206 instanceof Error)){
var e = e66206;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e66206;

}
}})());
});
;})(pred__66203,expr__66204))
} else {
if(cljs.core.truth_(pred__66203.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__66204))){
return ((function (pred__66203,expr__66204){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__66203,expr__66204){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__66203,expr__66204))
);

return deferred.addErrback(((function (deferred,pred__66203,expr__66204){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__66203,expr__66204))
);
});
;})(pred__66203,expr__66204))
} else {
return ((function (pred__66203,expr__66204){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__66203,expr__66204))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__66207,callback){
var map__66210 = p__66207;
var map__66210__$1 = ((((!((map__66210 == null)))?((((map__66210.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66210.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66210):map__66210);
var file_msg = map__66210__$1;
var request_url = cljs.core.get.call(null,map__66210__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__66210,map__66210__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__66210,map__66210__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__){
return (function (state_66234){
var state_val_66235 = (state_66234[(1)]);
if((state_val_66235 === (7))){
var inst_66230 = (state_66234[(2)]);
var state_66234__$1 = state_66234;
var statearr_66236_66256 = state_66234__$1;
(statearr_66236_66256[(2)] = inst_66230);

(statearr_66236_66256[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66235 === (1))){
var state_66234__$1 = state_66234;
var statearr_66237_66257 = state_66234__$1;
(statearr_66237_66257[(2)] = null);

(statearr_66237_66257[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66235 === (4))){
var inst_66214 = (state_66234[(7)]);
var inst_66214__$1 = (state_66234[(2)]);
var state_66234__$1 = (function (){var statearr_66238 = state_66234;
(statearr_66238[(7)] = inst_66214__$1);

return statearr_66238;
})();
if(cljs.core.truth_(inst_66214__$1)){
var statearr_66239_66258 = state_66234__$1;
(statearr_66239_66258[(1)] = (5));

} else {
var statearr_66240_66259 = state_66234__$1;
(statearr_66240_66259[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66235 === (6))){
var state_66234__$1 = state_66234;
var statearr_66241_66260 = state_66234__$1;
(statearr_66241_66260[(2)] = null);

(statearr_66241_66260[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66235 === (3))){
var inst_66232 = (state_66234[(2)]);
var state_66234__$1 = state_66234;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66234__$1,inst_66232);
} else {
if((state_val_66235 === (2))){
var state_66234__$1 = state_66234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66234__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_66235 === (11))){
var inst_66226 = (state_66234[(2)]);
var state_66234__$1 = (function (){var statearr_66242 = state_66234;
(statearr_66242[(8)] = inst_66226);

return statearr_66242;
})();
var statearr_66243_66261 = state_66234__$1;
(statearr_66243_66261[(2)] = null);

(statearr_66243_66261[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66235 === (9))){
var inst_66218 = (state_66234[(9)]);
var inst_66220 = (state_66234[(10)]);
var inst_66222 = inst_66220.call(null,inst_66218);
var state_66234__$1 = state_66234;
var statearr_66244_66262 = state_66234__$1;
(statearr_66244_66262[(2)] = inst_66222);

(statearr_66244_66262[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66235 === (5))){
var inst_66214 = (state_66234[(7)]);
var inst_66216 = figwheel.client.file_reloading.blocking_load.call(null,inst_66214);
var state_66234__$1 = state_66234;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66234__$1,(8),inst_66216);
} else {
if((state_val_66235 === (10))){
var inst_66218 = (state_66234[(9)]);
var inst_66224 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_66218);
var state_66234__$1 = state_66234;
var statearr_66245_66263 = state_66234__$1;
(statearr_66245_66263[(2)] = inst_66224);

(statearr_66245_66263[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66235 === (8))){
var inst_66220 = (state_66234[(10)]);
var inst_66214 = (state_66234[(7)]);
var inst_66218 = (state_66234[(2)]);
var inst_66219 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_66220__$1 = cljs.core.get.call(null,inst_66219,inst_66214);
var state_66234__$1 = (function (){var statearr_66246 = state_66234;
(statearr_66246[(9)] = inst_66218);

(statearr_66246[(10)] = inst_66220__$1);

return statearr_66246;
})();
if(cljs.core.truth_(inst_66220__$1)){
var statearr_66247_66264 = state_66234__$1;
(statearr_66247_66264[(1)] = (9));

} else {
var statearr_66248_66265 = state_66234__$1;
(statearr_66248_66265[(1)] = (10));

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
});})(c__19425__auto__))
;
return ((function (switch__19404__auto__,c__19425__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19405__auto__ = null;
var figwheel$client$file_reloading$state_machine__19405__auto____0 = (function (){
var statearr_66252 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_66252[(0)] = figwheel$client$file_reloading$state_machine__19405__auto__);

(statearr_66252[(1)] = (1));

return statearr_66252;
});
var figwheel$client$file_reloading$state_machine__19405__auto____1 = (function (state_66234){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_66234);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e66253){if((e66253 instanceof Object)){
var ex__19408__auto__ = e66253;
var statearr_66254_66266 = state_66234;
(statearr_66254_66266[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66234);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66253;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66267 = state_66234;
state_66234 = G__66267;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19405__auto__ = function(state_66234){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19405__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19405__auto____1.call(this,state_66234);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19405__auto____0;
figwheel$client$file_reloading$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19405__auto____1;
return figwheel$client$file_reloading$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__))
})();
var state__19427__auto__ = (function (){var statearr_66255 = f__19426__auto__.call(null);
(statearr_66255[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_66255;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__))
);

return c__19425__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__66268,callback){
var map__66271 = p__66268;
var map__66271__$1 = ((((!((map__66271 == null)))?((((map__66271.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66271.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66271):map__66271);
var file_msg = map__66271__$1;
var namespace = cljs.core.get.call(null,map__66271__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__66271,map__66271__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__66271,map__66271__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__66273){
var map__66276 = p__66273;
var map__66276__$1 = ((((!((map__66276 == null)))?((((map__66276.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66276.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66276):map__66276);
var file_msg = map__66276__$1;
var namespace = cljs.core.get.call(null,map__66276__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__66278,callback){
var map__66281 = p__66278;
var map__66281__$1 = ((((!((map__66281 == null)))?((((map__66281.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66281.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66281):map__66281);
var file_msg = map__66281__$1;
var request_url = cljs.core.get.call(null,map__66281__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__66281__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19425__auto___66369 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___66369,out){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___66369,out){
return (function (state_66351){
var state_val_66352 = (state_66351[(1)]);
if((state_val_66352 === (1))){
var inst_66329 = cljs.core.nth.call(null,files,(0),null);
var inst_66330 = cljs.core.nthnext.call(null,files,(1));
var inst_66331 = files;
var state_66351__$1 = (function (){var statearr_66353 = state_66351;
(statearr_66353[(7)] = inst_66329);

(statearr_66353[(8)] = inst_66331);

(statearr_66353[(9)] = inst_66330);

return statearr_66353;
})();
var statearr_66354_66370 = state_66351__$1;
(statearr_66354_66370[(2)] = null);

(statearr_66354_66370[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66352 === (2))){
var inst_66331 = (state_66351[(8)]);
var inst_66334 = (state_66351[(10)]);
var inst_66334__$1 = cljs.core.nth.call(null,inst_66331,(0),null);
var inst_66335 = cljs.core.nthnext.call(null,inst_66331,(1));
var inst_66336 = (inst_66334__$1 == null);
var inst_66337 = cljs.core.not.call(null,inst_66336);
var state_66351__$1 = (function (){var statearr_66355 = state_66351;
(statearr_66355[(10)] = inst_66334__$1);

(statearr_66355[(11)] = inst_66335);

return statearr_66355;
})();
if(inst_66337){
var statearr_66356_66371 = state_66351__$1;
(statearr_66356_66371[(1)] = (4));

} else {
var statearr_66357_66372 = state_66351__$1;
(statearr_66357_66372[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66352 === (3))){
var inst_66349 = (state_66351[(2)]);
var state_66351__$1 = state_66351;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66351__$1,inst_66349);
} else {
if((state_val_66352 === (4))){
var inst_66334 = (state_66351[(10)]);
var inst_66339 = figwheel.client.file_reloading.reload_js_file.call(null,inst_66334);
var state_66351__$1 = state_66351;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66351__$1,(7),inst_66339);
} else {
if((state_val_66352 === (5))){
var inst_66345 = cljs.core.async.close_BANG_.call(null,out);
var state_66351__$1 = state_66351;
var statearr_66358_66373 = state_66351__$1;
(statearr_66358_66373[(2)] = inst_66345);

(statearr_66358_66373[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66352 === (6))){
var inst_66347 = (state_66351[(2)]);
var state_66351__$1 = state_66351;
var statearr_66359_66374 = state_66351__$1;
(statearr_66359_66374[(2)] = inst_66347);

(statearr_66359_66374[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66352 === (7))){
var inst_66335 = (state_66351[(11)]);
var inst_66341 = (state_66351[(2)]);
var inst_66342 = cljs.core.async.put_BANG_.call(null,out,inst_66341);
var inst_66331 = inst_66335;
var state_66351__$1 = (function (){var statearr_66360 = state_66351;
(statearr_66360[(8)] = inst_66331);

(statearr_66360[(12)] = inst_66342);

return statearr_66360;
})();
var statearr_66361_66375 = state_66351__$1;
(statearr_66361_66375[(2)] = null);

(statearr_66361_66375[(1)] = (2));


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
});})(c__19425__auto___66369,out))
;
return ((function (switch__19404__auto__,c__19425__auto___66369,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto____0 = (function (){
var statearr_66365 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66365[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto__);

(statearr_66365[(1)] = (1));

return statearr_66365;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto____1 = (function (state_66351){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_66351);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e66366){if((e66366 instanceof Object)){
var ex__19408__auto__ = e66366;
var statearr_66367_66376 = state_66351;
(statearr_66367_66376[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66351);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66366;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66377 = state_66351;
state_66351 = G__66377;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto__ = function(state_66351){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto____1.call(this,state_66351);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___66369,out))
})();
var state__19427__auto__ = (function (){var statearr_66368 = f__19426__auto__.call(null);
(statearr_66368[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___66369);

return statearr_66368;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___66369,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__66378,opts){
var map__66382 = p__66378;
var map__66382__$1 = ((((!((map__66382 == null)))?((((map__66382.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66382.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66382):map__66382);
var eval_body__$1 = cljs.core.get.call(null,map__66382__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__66382__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e66384){var e = e66384;
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
return (function (p1__66385_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66385_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__66390){
var vec__66391 = p__66390;
var k = cljs.core.nth.call(null,vec__66391,(0),null);
var v = cljs.core.nth.call(null,vec__66391,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__66392){
var vec__66393 = p__66392;
var k = cljs.core.nth.call(null,vec__66393,(0),null);
var v = cljs.core.nth.call(null,vec__66393,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__66397,p__66398){
var map__66645 = p__66397;
var map__66645__$1 = ((((!((map__66645 == null)))?((((map__66645.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66645.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66645):map__66645);
var opts = map__66645__$1;
var before_jsload = cljs.core.get.call(null,map__66645__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__66645__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__66645__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__66646 = p__66398;
var map__66646__$1 = ((((!((map__66646 == null)))?((((map__66646.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66646.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66646):map__66646);
var msg = map__66646__$1;
var files = cljs.core.get.call(null,map__66646__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__66646__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__66646__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_66799){
var state_val_66800 = (state_66799[(1)]);
if((state_val_66800 === (7))){
var inst_66663 = (state_66799[(7)]);
var inst_66662 = (state_66799[(8)]);
var inst_66661 = (state_66799[(9)]);
var inst_66660 = (state_66799[(10)]);
var inst_66668 = cljs.core._nth.call(null,inst_66661,inst_66663);
var inst_66669 = figwheel.client.file_reloading.eval_body.call(null,inst_66668,opts);
var inst_66670 = (inst_66663 + (1));
var tmp66801 = inst_66662;
var tmp66802 = inst_66661;
var tmp66803 = inst_66660;
var inst_66660__$1 = tmp66803;
var inst_66661__$1 = tmp66802;
var inst_66662__$1 = tmp66801;
var inst_66663__$1 = inst_66670;
var state_66799__$1 = (function (){var statearr_66804 = state_66799;
(statearr_66804[(11)] = inst_66669);

(statearr_66804[(7)] = inst_66663__$1);

(statearr_66804[(8)] = inst_66662__$1);

(statearr_66804[(9)] = inst_66661__$1);

(statearr_66804[(10)] = inst_66660__$1);

return statearr_66804;
})();
var statearr_66805_66891 = state_66799__$1;
(statearr_66805_66891[(2)] = null);

(statearr_66805_66891[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (20))){
var inst_66703 = (state_66799[(12)]);
var inst_66711 = figwheel.client.file_reloading.sort_files.call(null,inst_66703);
var state_66799__$1 = state_66799;
var statearr_66806_66892 = state_66799__$1;
(statearr_66806_66892[(2)] = inst_66711);

(statearr_66806_66892[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (27))){
var state_66799__$1 = state_66799;
var statearr_66807_66893 = state_66799__$1;
(statearr_66807_66893[(2)] = null);

(statearr_66807_66893[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (1))){
var inst_66652 = (state_66799[(13)]);
var inst_66649 = before_jsload.call(null,files);
var inst_66650 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_66651 = (function (){return ((function (inst_66652,inst_66649,inst_66650,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66394_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66394_SHARP_);
});
;})(inst_66652,inst_66649,inst_66650,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66652__$1 = cljs.core.filter.call(null,inst_66651,files);
var inst_66653 = cljs.core.not_empty.call(null,inst_66652__$1);
var state_66799__$1 = (function (){var statearr_66808 = state_66799;
(statearr_66808[(14)] = inst_66650);

(statearr_66808[(13)] = inst_66652__$1);

(statearr_66808[(15)] = inst_66649);

return statearr_66808;
})();
if(cljs.core.truth_(inst_66653)){
var statearr_66809_66894 = state_66799__$1;
(statearr_66809_66894[(1)] = (2));

} else {
var statearr_66810_66895 = state_66799__$1;
(statearr_66810_66895[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (24))){
var state_66799__$1 = state_66799;
var statearr_66811_66896 = state_66799__$1;
(statearr_66811_66896[(2)] = null);

(statearr_66811_66896[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (39))){
var inst_66753 = (state_66799[(16)]);
var state_66799__$1 = state_66799;
var statearr_66812_66897 = state_66799__$1;
(statearr_66812_66897[(2)] = inst_66753);

(statearr_66812_66897[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (46))){
var inst_66794 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
var statearr_66813_66898 = state_66799__$1;
(statearr_66813_66898[(2)] = inst_66794);

(statearr_66813_66898[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (4))){
var inst_66697 = (state_66799[(2)]);
var inst_66698 = cljs.core.List.EMPTY;
var inst_66699 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_66698);
var inst_66700 = (function (){return ((function (inst_66697,inst_66698,inst_66699,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66395_SHARP_){
var and__16308__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__66395_SHARP_);
if(cljs.core.truth_(and__16308__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__66395_SHARP_));
} else {
return and__16308__auto__;
}
});
;})(inst_66697,inst_66698,inst_66699,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66701 = cljs.core.filter.call(null,inst_66700,files);
var inst_66702 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_66703 = cljs.core.concat.call(null,inst_66701,inst_66702);
var state_66799__$1 = (function (){var statearr_66814 = state_66799;
(statearr_66814[(17)] = inst_66697);

(statearr_66814[(12)] = inst_66703);

(statearr_66814[(18)] = inst_66699);

return statearr_66814;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_66815_66899 = state_66799__$1;
(statearr_66815_66899[(1)] = (16));

} else {
var statearr_66816_66900 = state_66799__$1;
(statearr_66816_66900[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (15))){
var inst_66687 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
var statearr_66817_66901 = state_66799__$1;
(statearr_66817_66901[(2)] = inst_66687);

(statearr_66817_66901[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (21))){
var inst_66713 = (state_66799[(19)]);
var inst_66713__$1 = (state_66799[(2)]);
var inst_66714 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_66713__$1);
var state_66799__$1 = (function (){var statearr_66818 = state_66799;
(statearr_66818[(19)] = inst_66713__$1);

return statearr_66818;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_66799__$1,(22),inst_66714);
} else {
if((state_val_66800 === (31))){
var inst_66797 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_66799__$1,inst_66797);
} else {
if((state_val_66800 === (32))){
var inst_66753 = (state_66799[(16)]);
var inst_66758 = inst_66753.cljs$lang$protocol_mask$partition0$;
var inst_66759 = (inst_66758 & (64));
var inst_66760 = inst_66753.cljs$core$ISeq$;
var inst_66761 = (inst_66759) || (inst_66760);
var state_66799__$1 = state_66799;
if(cljs.core.truth_(inst_66761)){
var statearr_66819_66902 = state_66799__$1;
(statearr_66819_66902[(1)] = (35));

} else {
var statearr_66820_66903 = state_66799__$1;
(statearr_66820_66903[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (40))){
var inst_66774 = (state_66799[(20)]);
var inst_66773 = (state_66799[(2)]);
var inst_66774__$1 = cljs.core.get.call(null,inst_66773,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_66775 = cljs.core.get.call(null,inst_66773,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_66776 = cljs.core.not_empty.call(null,inst_66774__$1);
var state_66799__$1 = (function (){var statearr_66821 = state_66799;
(statearr_66821[(20)] = inst_66774__$1);

(statearr_66821[(21)] = inst_66775);

return statearr_66821;
})();
if(cljs.core.truth_(inst_66776)){
var statearr_66822_66904 = state_66799__$1;
(statearr_66822_66904[(1)] = (41));

} else {
var statearr_66823_66905 = state_66799__$1;
(statearr_66823_66905[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (33))){
var state_66799__$1 = state_66799;
var statearr_66824_66906 = state_66799__$1;
(statearr_66824_66906[(2)] = false);

(statearr_66824_66906[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (13))){
var inst_66673 = (state_66799[(22)]);
var inst_66677 = cljs.core.chunk_first.call(null,inst_66673);
var inst_66678 = cljs.core.chunk_rest.call(null,inst_66673);
var inst_66679 = cljs.core.count.call(null,inst_66677);
var inst_66660 = inst_66678;
var inst_66661 = inst_66677;
var inst_66662 = inst_66679;
var inst_66663 = (0);
var state_66799__$1 = (function (){var statearr_66825 = state_66799;
(statearr_66825[(7)] = inst_66663);

(statearr_66825[(8)] = inst_66662);

(statearr_66825[(9)] = inst_66661);

(statearr_66825[(10)] = inst_66660);

return statearr_66825;
})();
var statearr_66826_66907 = state_66799__$1;
(statearr_66826_66907[(2)] = null);

(statearr_66826_66907[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (22))){
var inst_66716 = (state_66799[(23)]);
var inst_66721 = (state_66799[(24)]);
var inst_66713 = (state_66799[(19)]);
var inst_66717 = (state_66799[(25)]);
var inst_66716__$1 = (state_66799[(2)]);
var inst_66717__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66716__$1);
var inst_66718 = (function (){var all_files = inst_66713;
var res_SINGLEQUOTE_ = inst_66716__$1;
var res = inst_66717__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_66716,inst_66721,inst_66713,inst_66717,inst_66716__$1,inst_66717__$1,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__66396_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__66396_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_66716,inst_66721,inst_66713,inst_66717,inst_66716__$1,inst_66717__$1,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66719 = cljs.core.filter.call(null,inst_66718,inst_66716__$1);
var inst_66720 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_66721__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_66720);
var inst_66722 = cljs.core.not_empty.call(null,inst_66721__$1);
var state_66799__$1 = (function (){var statearr_66827 = state_66799;
(statearr_66827[(23)] = inst_66716__$1);

(statearr_66827[(24)] = inst_66721__$1);

(statearr_66827[(25)] = inst_66717__$1);

(statearr_66827[(26)] = inst_66719);

return statearr_66827;
})();
if(cljs.core.truth_(inst_66722)){
var statearr_66828_66908 = state_66799__$1;
(statearr_66828_66908[(1)] = (23));

} else {
var statearr_66829_66909 = state_66799__$1;
(statearr_66829_66909[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (36))){
var state_66799__$1 = state_66799;
var statearr_66830_66910 = state_66799__$1;
(statearr_66830_66910[(2)] = false);

(statearr_66830_66910[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (41))){
var inst_66774 = (state_66799[(20)]);
var inst_66778 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_66779 = cljs.core.map.call(null,inst_66778,inst_66774);
var inst_66780 = cljs.core.pr_str.call(null,inst_66779);
var inst_66781 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_66780)].join('');
var inst_66782 = figwheel.client.utils.log.call(null,inst_66781);
var state_66799__$1 = state_66799;
var statearr_66831_66911 = state_66799__$1;
(statearr_66831_66911[(2)] = inst_66782);

(statearr_66831_66911[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (43))){
var inst_66775 = (state_66799[(21)]);
var inst_66785 = (state_66799[(2)]);
var inst_66786 = cljs.core.not_empty.call(null,inst_66775);
var state_66799__$1 = (function (){var statearr_66832 = state_66799;
(statearr_66832[(27)] = inst_66785);

return statearr_66832;
})();
if(cljs.core.truth_(inst_66786)){
var statearr_66833_66912 = state_66799__$1;
(statearr_66833_66912[(1)] = (44));

} else {
var statearr_66834_66913 = state_66799__$1;
(statearr_66834_66913[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (29))){
var inst_66716 = (state_66799[(23)]);
var inst_66721 = (state_66799[(24)]);
var inst_66753 = (state_66799[(16)]);
var inst_66713 = (state_66799[(19)]);
var inst_66717 = (state_66799[(25)]);
var inst_66719 = (state_66799[(26)]);
var inst_66749 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_66752 = (function (){var all_files = inst_66713;
var res_SINGLEQUOTE_ = inst_66716;
var res = inst_66717;
var files_not_loaded = inst_66719;
var dependencies_that_loaded = inst_66721;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66753,inst_66713,inst_66717,inst_66719,inst_66749,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66751){
var map__66835 = p__66751;
var map__66835__$1 = ((((!((map__66835 == null)))?((((map__66835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66835):map__66835);
var namespace = cljs.core.get.call(null,map__66835__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66753,inst_66713,inst_66717,inst_66719,inst_66749,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66753__$1 = cljs.core.group_by.call(null,inst_66752,inst_66719);
var inst_66755 = (inst_66753__$1 == null);
var inst_66756 = cljs.core.not.call(null,inst_66755);
var state_66799__$1 = (function (){var statearr_66837 = state_66799;
(statearr_66837[(16)] = inst_66753__$1);

(statearr_66837[(28)] = inst_66749);

return statearr_66837;
})();
if(inst_66756){
var statearr_66838_66914 = state_66799__$1;
(statearr_66838_66914[(1)] = (32));

} else {
var statearr_66839_66915 = state_66799__$1;
(statearr_66839_66915[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (44))){
var inst_66775 = (state_66799[(21)]);
var inst_66788 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_66775);
var inst_66789 = cljs.core.pr_str.call(null,inst_66788);
var inst_66790 = [cljs.core.str("not required: "),cljs.core.str(inst_66789)].join('');
var inst_66791 = figwheel.client.utils.log.call(null,inst_66790);
var state_66799__$1 = state_66799;
var statearr_66840_66916 = state_66799__$1;
(statearr_66840_66916[(2)] = inst_66791);

(statearr_66840_66916[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (6))){
var inst_66694 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
var statearr_66841_66917 = state_66799__$1;
(statearr_66841_66917[(2)] = inst_66694);

(statearr_66841_66917[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (28))){
var inst_66719 = (state_66799[(26)]);
var inst_66746 = (state_66799[(2)]);
var inst_66747 = cljs.core.not_empty.call(null,inst_66719);
var state_66799__$1 = (function (){var statearr_66842 = state_66799;
(statearr_66842[(29)] = inst_66746);

return statearr_66842;
})();
if(cljs.core.truth_(inst_66747)){
var statearr_66843_66918 = state_66799__$1;
(statearr_66843_66918[(1)] = (29));

} else {
var statearr_66844_66919 = state_66799__$1;
(statearr_66844_66919[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (25))){
var inst_66717 = (state_66799[(25)]);
var inst_66733 = (state_66799[(2)]);
var inst_66734 = cljs.core.not_empty.call(null,inst_66717);
var state_66799__$1 = (function (){var statearr_66845 = state_66799;
(statearr_66845[(30)] = inst_66733);

return statearr_66845;
})();
if(cljs.core.truth_(inst_66734)){
var statearr_66846_66920 = state_66799__$1;
(statearr_66846_66920[(1)] = (26));

} else {
var statearr_66847_66921 = state_66799__$1;
(statearr_66847_66921[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (34))){
var inst_66768 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
if(cljs.core.truth_(inst_66768)){
var statearr_66848_66922 = state_66799__$1;
(statearr_66848_66922[(1)] = (38));

} else {
var statearr_66849_66923 = state_66799__$1;
(statearr_66849_66923[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (17))){
var state_66799__$1 = state_66799;
var statearr_66850_66924 = state_66799__$1;
(statearr_66850_66924[(2)] = recompile_dependents);

(statearr_66850_66924[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (3))){
var state_66799__$1 = state_66799;
var statearr_66851_66925 = state_66799__$1;
(statearr_66851_66925[(2)] = null);

(statearr_66851_66925[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (12))){
var inst_66690 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
var statearr_66852_66926 = state_66799__$1;
(statearr_66852_66926[(2)] = inst_66690);

(statearr_66852_66926[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (2))){
var inst_66652 = (state_66799[(13)]);
var inst_66659 = cljs.core.seq.call(null,inst_66652);
var inst_66660 = inst_66659;
var inst_66661 = null;
var inst_66662 = (0);
var inst_66663 = (0);
var state_66799__$1 = (function (){var statearr_66853 = state_66799;
(statearr_66853[(7)] = inst_66663);

(statearr_66853[(8)] = inst_66662);

(statearr_66853[(9)] = inst_66661);

(statearr_66853[(10)] = inst_66660);

return statearr_66853;
})();
var statearr_66854_66927 = state_66799__$1;
(statearr_66854_66927[(2)] = null);

(statearr_66854_66927[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (23))){
var inst_66716 = (state_66799[(23)]);
var inst_66721 = (state_66799[(24)]);
var inst_66713 = (state_66799[(19)]);
var inst_66717 = (state_66799[(25)]);
var inst_66719 = (state_66799[(26)]);
var inst_66724 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_66726 = (function (){var all_files = inst_66713;
var res_SINGLEQUOTE_ = inst_66716;
var res = inst_66717;
var files_not_loaded = inst_66719;
var dependencies_that_loaded = inst_66721;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66713,inst_66717,inst_66719,inst_66724,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66725){
var map__66855 = p__66725;
var map__66855__$1 = ((((!((map__66855 == null)))?((((map__66855.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66855.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66855):map__66855);
var request_url = cljs.core.get.call(null,map__66855__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66713,inst_66717,inst_66719,inst_66724,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66727 = cljs.core.reverse.call(null,inst_66721);
var inst_66728 = cljs.core.map.call(null,inst_66726,inst_66727);
var inst_66729 = cljs.core.pr_str.call(null,inst_66728);
var inst_66730 = figwheel.client.utils.log.call(null,inst_66729);
var state_66799__$1 = (function (){var statearr_66857 = state_66799;
(statearr_66857[(31)] = inst_66724);

return statearr_66857;
})();
var statearr_66858_66928 = state_66799__$1;
(statearr_66858_66928[(2)] = inst_66730);

(statearr_66858_66928[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (35))){
var state_66799__$1 = state_66799;
var statearr_66859_66929 = state_66799__$1;
(statearr_66859_66929[(2)] = true);

(statearr_66859_66929[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (19))){
var inst_66703 = (state_66799[(12)]);
var inst_66709 = figwheel.client.file_reloading.expand_files.call(null,inst_66703);
var state_66799__$1 = state_66799;
var statearr_66860_66930 = state_66799__$1;
(statearr_66860_66930[(2)] = inst_66709);

(statearr_66860_66930[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (11))){
var state_66799__$1 = state_66799;
var statearr_66861_66931 = state_66799__$1;
(statearr_66861_66931[(2)] = null);

(statearr_66861_66931[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (9))){
var inst_66692 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
var statearr_66862_66932 = state_66799__$1;
(statearr_66862_66932[(2)] = inst_66692);

(statearr_66862_66932[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (5))){
var inst_66663 = (state_66799[(7)]);
var inst_66662 = (state_66799[(8)]);
var inst_66665 = (inst_66663 < inst_66662);
var inst_66666 = inst_66665;
var state_66799__$1 = state_66799;
if(cljs.core.truth_(inst_66666)){
var statearr_66863_66933 = state_66799__$1;
(statearr_66863_66933[(1)] = (7));

} else {
var statearr_66864_66934 = state_66799__$1;
(statearr_66864_66934[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (14))){
var inst_66673 = (state_66799[(22)]);
var inst_66682 = cljs.core.first.call(null,inst_66673);
var inst_66683 = figwheel.client.file_reloading.eval_body.call(null,inst_66682,opts);
var inst_66684 = cljs.core.next.call(null,inst_66673);
var inst_66660 = inst_66684;
var inst_66661 = null;
var inst_66662 = (0);
var inst_66663 = (0);
var state_66799__$1 = (function (){var statearr_66865 = state_66799;
(statearr_66865[(7)] = inst_66663);

(statearr_66865[(8)] = inst_66662);

(statearr_66865[(9)] = inst_66661);

(statearr_66865[(32)] = inst_66683);

(statearr_66865[(10)] = inst_66660);

return statearr_66865;
})();
var statearr_66866_66935 = state_66799__$1;
(statearr_66866_66935[(2)] = null);

(statearr_66866_66935[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (45))){
var state_66799__$1 = state_66799;
var statearr_66867_66936 = state_66799__$1;
(statearr_66867_66936[(2)] = null);

(statearr_66867_66936[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (26))){
var inst_66716 = (state_66799[(23)]);
var inst_66721 = (state_66799[(24)]);
var inst_66713 = (state_66799[(19)]);
var inst_66717 = (state_66799[(25)]);
var inst_66719 = (state_66799[(26)]);
var inst_66736 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_66738 = (function (){var all_files = inst_66713;
var res_SINGLEQUOTE_ = inst_66716;
var res = inst_66717;
var files_not_loaded = inst_66719;
var dependencies_that_loaded = inst_66721;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66713,inst_66717,inst_66719,inst_66736,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__66737){
var map__66868 = p__66737;
var map__66868__$1 = ((((!((map__66868 == null)))?((((map__66868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66868):map__66868);
var namespace = cljs.core.get.call(null,map__66868__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__66868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66713,inst_66717,inst_66719,inst_66736,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66739 = cljs.core.map.call(null,inst_66738,inst_66717);
var inst_66740 = cljs.core.pr_str.call(null,inst_66739);
var inst_66741 = figwheel.client.utils.log.call(null,inst_66740);
var inst_66742 = (function (){var all_files = inst_66713;
var res_SINGLEQUOTE_ = inst_66716;
var res = inst_66717;
var files_not_loaded = inst_66719;
var dependencies_that_loaded = inst_66721;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66713,inst_66717,inst_66719,inst_66736,inst_66738,inst_66739,inst_66740,inst_66741,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_66716,inst_66721,inst_66713,inst_66717,inst_66719,inst_66736,inst_66738,inst_66739,inst_66740,inst_66741,state_val_66800,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_66743 = setTimeout(inst_66742,(10));
var state_66799__$1 = (function (){var statearr_66870 = state_66799;
(statearr_66870[(33)] = inst_66741);

(statearr_66870[(34)] = inst_66736);

return statearr_66870;
})();
var statearr_66871_66937 = state_66799__$1;
(statearr_66871_66937[(2)] = inst_66743);

(statearr_66871_66937[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (16))){
var state_66799__$1 = state_66799;
var statearr_66872_66938 = state_66799__$1;
(statearr_66872_66938[(2)] = reload_dependents);

(statearr_66872_66938[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (38))){
var inst_66753 = (state_66799[(16)]);
var inst_66770 = cljs.core.apply.call(null,cljs.core.hash_map,inst_66753);
var state_66799__$1 = state_66799;
var statearr_66873_66939 = state_66799__$1;
(statearr_66873_66939[(2)] = inst_66770);

(statearr_66873_66939[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (30))){
var state_66799__$1 = state_66799;
var statearr_66874_66940 = state_66799__$1;
(statearr_66874_66940[(2)] = null);

(statearr_66874_66940[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (10))){
var inst_66673 = (state_66799[(22)]);
var inst_66675 = cljs.core.chunked_seq_QMARK_.call(null,inst_66673);
var state_66799__$1 = state_66799;
if(inst_66675){
var statearr_66875_66941 = state_66799__$1;
(statearr_66875_66941[(1)] = (13));

} else {
var statearr_66876_66942 = state_66799__$1;
(statearr_66876_66942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (18))){
var inst_66707 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
if(cljs.core.truth_(inst_66707)){
var statearr_66877_66943 = state_66799__$1;
(statearr_66877_66943[(1)] = (19));

} else {
var statearr_66878_66944 = state_66799__$1;
(statearr_66878_66944[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (42))){
var state_66799__$1 = state_66799;
var statearr_66879_66945 = state_66799__$1;
(statearr_66879_66945[(2)] = null);

(statearr_66879_66945[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (37))){
var inst_66765 = (state_66799[(2)]);
var state_66799__$1 = state_66799;
var statearr_66880_66946 = state_66799__$1;
(statearr_66880_66946[(2)] = inst_66765);

(statearr_66880_66946[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_66800 === (8))){
var inst_66673 = (state_66799[(22)]);
var inst_66660 = (state_66799[(10)]);
var inst_66673__$1 = cljs.core.seq.call(null,inst_66660);
var state_66799__$1 = (function (){var statearr_66881 = state_66799;
(statearr_66881[(22)] = inst_66673__$1);

return statearr_66881;
})();
if(inst_66673__$1){
var statearr_66882_66947 = state_66799__$1;
(statearr_66882_66947[(1)] = (10));

} else {
var statearr_66883_66948 = state_66799__$1;
(statearr_66883_66948[(1)] = (11));

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
});})(c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19404__auto__,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto____0 = (function (){
var statearr_66887 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_66887[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto__);

(statearr_66887[(1)] = (1));

return statearr_66887;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto____1 = (function (state_66799){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_66799);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e66888){if((e66888 instanceof Object)){
var ex__19408__auto__ = e66888;
var statearr_66889_66949 = state_66799;
(statearr_66889_66949[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_66799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e66888;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__66950 = state_66799;
state_66799 = G__66950;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto__ = function(state_66799){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto____1.call(this,state_66799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19427__auto__ = (function (){var statearr_66890 = f__19426__auto__.call(null);
(statearr_66890[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_66890;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__,map__66645,map__66645__$1,opts,before_jsload,on_jsload,reload_dependents,map__66646,map__66646__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19425__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__66953,link){
var map__66956 = p__66953;
var map__66956__$1 = ((((!((map__66956 == null)))?((((map__66956.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66956.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66956):map__66956);
var file = cljs.core.get.call(null,map__66956__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__66956,map__66956__$1,file){
return (function (p1__66951_SHARP_,p2__66952_SHARP_){
if(cljs.core._EQ_.call(null,p1__66951_SHARP_,p2__66952_SHARP_)){
return p1__66951_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__66956,map__66956__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__66962){
var map__66963 = p__66962;
var map__66963__$1 = ((((!((map__66963 == null)))?((((map__66963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66963):map__66963);
var match_length = cljs.core.get.call(null,map__66963__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__66963__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__66958_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__66958_SHARP_);
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
var args66965 = [];
var len__17378__auto___66968 = arguments.length;
var i__17379__auto___66969 = (0);
while(true){
if((i__17379__auto___66969 < len__17378__auto___66968)){
args66965.push((arguments[i__17379__auto___66969]));

var G__66970 = (i__17379__auto___66969 + (1));
i__17379__auto___66969 = G__66970;
continue;
} else {
}
break;
}

var G__66967 = args66965.length;
switch (G__66967) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args66965.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__66972_SHARP_,p2__66973_SHARP_){
return cljs.core.assoc.call(null,p1__66972_SHARP_,cljs.core.get.call(null,p2__66973_SHARP_,key),p2__66973_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__66974){
var map__66977 = p__66974;
var map__66977__$1 = ((((!((map__66977 == null)))?((((map__66977.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66977.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66977):map__66977);
var f_data = map__66977__$1;
var file = cljs.core.get.call(null,map__66977__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__66979,files_msg){
var map__66986 = p__66979;
var map__66986__$1 = ((((!((map__66986 == null)))?((((map__66986.cljs$lang$protocol_mask$partition0$ & (64))) || (map__66986.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__66986):map__66986);
var opts = map__66986__$1;
var on_cssload = cljs.core.get.call(null,map__66986__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__66988_66992 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__66989_66993 = null;
var count__66990_66994 = (0);
var i__66991_66995 = (0);
while(true){
if((i__66991_66995 < count__66990_66994)){
var f_66996 = cljs.core._nth.call(null,chunk__66989_66993,i__66991_66995);
figwheel.client.file_reloading.reload_css_file.call(null,f_66996);

var G__66997 = seq__66988_66992;
var G__66998 = chunk__66989_66993;
var G__66999 = count__66990_66994;
var G__67000 = (i__66991_66995 + (1));
seq__66988_66992 = G__66997;
chunk__66989_66993 = G__66998;
count__66990_66994 = G__66999;
i__66991_66995 = G__67000;
continue;
} else {
var temp__4425__auto___67001 = cljs.core.seq.call(null,seq__66988_66992);
if(temp__4425__auto___67001){
var seq__66988_67002__$1 = temp__4425__auto___67001;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__66988_67002__$1)){
var c__17123__auto___67003 = cljs.core.chunk_first.call(null,seq__66988_67002__$1);
var G__67004 = cljs.core.chunk_rest.call(null,seq__66988_67002__$1);
var G__67005 = c__17123__auto___67003;
var G__67006 = cljs.core.count.call(null,c__17123__auto___67003);
var G__67007 = (0);
seq__66988_66992 = G__67004;
chunk__66989_66993 = G__67005;
count__66990_66994 = G__67006;
i__66991_66995 = G__67007;
continue;
} else {
var f_67008 = cljs.core.first.call(null,seq__66988_67002__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_67008);

var G__67009 = cljs.core.next.call(null,seq__66988_67002__$1);
var G__67010 = null;
var G__67011 = (0);
var G__67012 = (0);
seq__66988_66992 = G__67009;
chunk__66989_66993 = G__67010;
count__66990_66994 = G__67011;
i__66991_66995 = G__67012;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__66986,map__66986__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__66986,map__66986__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map