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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30385_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30385_SHARP_));
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
var seq__30390 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30391 = null;
var count__30392 = (0);
var i__30393 = (0);
while(true){
if((i__30393 < count__30392)){
var n = cljs.core._nth.call(null,chunk__30391,i__30393);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30394 = seq__30390;
var G__30395 = chunk__30391;
var G__30396 = count__30392;
var G__30397 = (i__30393 + (1));
seq__30390 = G__30394;
chunk__30391 = G__30395;
count__30392 = G__30396;
i__30393 = G__30397;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30390);
if(temp__4425__auto__){
var seq__30390__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30390__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__30390__$1);
var G__30398 = cljs.core.chunk_rest.call(null,seq__30390__$1);
var G__30399 = c__17123__auto__;
var G__30400 = cljs.core.count.call(null,c__17123__auto__);
var G__30401 = (0);
seq__30390 = G__30398;
chunk__30391 = G__30399;
count__30392 = G__30400;
i__30393 = G__30401;
continue;
} else {
var n = cljs.core.first.call(null,seq__30390__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30402 = cljs.core.next.call(null,seq__30390__$1);
var G__30403 = null;
var G__30404 = (0);
var G__30405 = (0);
seq__30390 = G__30402;
chunk__30391 = G__30403;
count__30392 = G__30404;
i__30393 = G__30405;
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

var seq__30444_30451 = cljs.core.seq.call(null,deps);
var chunk__30445_30452 = null;
var count__30446_30453 = (0);
var i__30447_30454 = (0);
while(true){
if((i__30447_30454 < count__30446_30453)){
var dep_30455 = cljs.core._nth.call(null,chunk__30445_30452,i__30447_30454);
topo_sort_helper_STAR_.call(null,dep_30455,(depth + (1)),state);

var G__30456 = seq__30444_30451;
var G__30457 = chunk__30445_30452;
var G__30458 = count__30446_30453;
var G__30459 = (i__30447_30454 + (1));
seq__30444_30451 = G__30456;
chunk__30445_30452 = G__30457;
count__30446_30453 = G__30458;
i__30447_30454 = G__30459;
continue;
} else {
var temp__4425__auto___30460 = cljs.core.seq.call(null,seq__30444_30451);
if(temp__4425__auto___30460){
var seq__30444_30461__$1 = temp__4425__auto___30460;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30444_30461__$1)){
var c__17123__auto___30462 = cljs.core.chunk_first.call(null,seq__30444_30461__$1);
var G__30463 = cljs.core.chunk_rest.call(null,seq__30444_30461__$1);
var G__30464 = c__17123__auto___30462;
var G__30465 = cljs.core.count.call(null,c__17123__auto___30462);
var G__30466 = (0);
seq__30444_30451 = G__30463;
chunk__30445_30452 = G__30464;
count__30446_30453 = G__30465;
i__30447_30454 = G__30466;
continue;
} else {
var dep_30467 = cljs.core.first.call(null,seq__30444_30461__$1);
topo_sort_helper_STAR_.call(null,dep_30467,(depth + (1)),state);

var G__30468 = cljs.core.next.call(null,seq__30444_30461__$1);
var G__30469 = null;
var G__30470 = (0);
var G__30471 = (0);
seq__30444_30451 = G__30468;
chunk__30445_30452 = G__30469;
count__30446_30453 = G__30470;
i__30447_30454 = G__30471;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30448){
var vec__30450 = p__30448;
var x = cljs.core.nth.call(null,vec__30450,(0),null);
var xs = cljs.core.nthnext.call(null,vec__30450,(1));
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30450,x,xs,get_deps__$1){
return (function (p1__30406_SHARP_){
return clojure.set.difference.call(null,p1__30406_SHARP_,x);
});})(vec__30450,x,xs,get_deps__$1))
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
var seq__30484 = cljs.core.seq.call(null,provides);
var chunk__30485 = null;
var count__30486 = (0);
var i__30487 = (0);
while(true){
if((i__30487 < count__30486)){
var prov = cljs.core._nth.call(null,chunk__30485,i__30487);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30488_30496 = cljs.core.seq.call(null,requires);
var chunk__30489_30497 = null;
var count__30490_30498 = (0);
var i__30491_30499 = (0);
while(true){
if((i__30491_30499 < count__30490_30498)){
var req_30500 = cljs.core._nth.call(null,chunk__30489_30497,i__30491_30499);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30500,prov);

var G__30501 = seq__30488_30496;
var G__30502 = chunk__30489_30497;
var G__30503 = count__30490_30498;
var G__30504 = (i__30491_30499 + (1));
seq__30488_30496 = G__30501;
chunk__30489_30497 = G__30502;
count__30490_30498 = G__30503;
i__30491_30499 = G__30504;
continue;
} else {
var temp__4425__auto___30505 = cljs.core.seq.call(null,seq__30488_30496);
if(temp__4425__auto___30505){
var seq__30488_30506__$1 = temp__4425__auto___30505;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30488_30506__$1)){
var c__17123__auto___30507 = cljs.core.chunk_first.call(null,seq__30488_30506__$1);
var G__30508 = cljs.core.chunk_rest.call(null,seq__30488_30506__$1);
var G__30509 = c__17123__auto___30507;
var G__30510 = cljs.core.count.call(null,c__17123__auto___30507);
var G__30511 = (0);
seq__30488_30496 = G__30508;
chunk__30489_30497 = G__30509;
count__30490_30498 = G__30510;
i__30491_30499 = G__30511;
continue;
} else {
var req_30512 = cljs.core.first.call(null,seq__30488_30506__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30512,prov);

var G__30513 = cljs.core.next.call(null,seq__30488_30506__$1);
var G__30514 = null;
var G__30515 = (0);
var G__30516 = (0);
seq__30488_30496 = G__30513;
chunk__30489_30497 = G__30514;
count__30490_30498 = G__30515;
i__30491_30499 = G__30516;
continue;
}
} else {
}
}
break;
}

var G__30517 = seq__30484;
var G__30518 = chunk__30485;
var G__30519 = count__30486;
var G__30520 = (i__30487 + (1));
seq__30484 = G__30517;
chunk__30485 = G__30518;
count__30486 = G__30519;
i__30487 = G__30520;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30484);
if(temp__4425__auto__){
var seq__30484__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30484__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__30484__$1);
var G__30521 = cljs.core.chunk_rest.call(null,seq__30484__$1);
var G__30522 = c__17123__auto__;
var G__30523 = cljs.core.count.call(null,c__17123__auto__);
var G__30524 = (0);
seq__30484 = G__30521;
chunk__30485 = G__30522;
count__30486 = G__30523;
i__30487 = G__30524;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30484__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30492_30525 = cljs.core.seq.call(null,requires);
var chunk__30493_30526 = null;
var count__30494_30527 = (0);
var i__30495_30528 = (0);
while(true){
if((i__30495_30528 < count__30494_30527)){
var req_30529 = cljs.core._nth.call(null,chunk__30493_30526,i__30495_30528);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30529,prov);

var G__30530 = seq__30492_30525;
var G__30531 = chunk__30493_30526;
var G__30532 = count__30494_30527;
var G__30533 = (i__30495_30528 + (1));
seq__30492_30525 = G__30530;
chunk__30493_30526 = G__30531;
count__30494_30527 = G__30532;
i__30495_30528 = G__30533;
continue;
} else {
var temp__4425__auto___30534__$1 = cljs.core.seq.call(null,seq__30492_30525);
if(temp__4425__auto___30534__$1){
var seq__30492_30535__$1 = temp__4425__auto___30534__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30492_30535__$1)){
var c__17123__auto___30536 = cljs.core.chunk_first.call(null,seq__30492_30535__$1);
var G__30537 = cljs.core.chunk_rest.call(null,seq__30492_30535__$1);
var G__30538 = c__17123__auto___30536;
var G__30539 = cljs.core.count.call(null,c__17123__auto___30536);
var G__30540 = (0);
seq__30492_30525 = G__30537;
chunk__30493_30526 = G__30538;
count__30494_30527 = G__30539;
i__30495_30528 = G__30540;
continue;
} else {
var req_30541 = cljs.core.first.call(null,seq__30492_30535__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30541,prov);

var G__30542 = cljs.core.next.call(null,seq__30492_30535__$1);
var G__30543 = null;
var G__30544 = (0);
var G__30545 = (0);
seq__30492_30525 = G__30542;
chunk__30493_30526 = G__30543;
count__30494_30527 = G__30544;
i__30495_30528 = G__30545;
continue;
}
} else {
}
}
break;
}

var G__30546 = cljs.core.next.call(null,seq__30484__$1);
var G__30547 = null;
var G__30548 = (0);
var G__30549 = (0);
seq__30484 = G__30546;
chunk__30485 = G__30547;
count__30486 = G__30548;
i__30487 = G__30549;
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
var seq__30554_30558 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30555_30559 = null;
var count__30556_30560 = (0);
var i__30557_30561 = (0);
while(true){
if((i__30557_30561 < count__30556_30560)){
var ns_30562 = cljs.core._nth.call(null,chunk__30555_30559,i__30557_30561);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30562);

var G__30563 = seq__30554_30558;
var G__30564 = chunk__30555_30559;
var G__30565 = count__30556_30560;
var G__30566 = (i__30557_30561 + (1));
seq__30554_30558 = G__30563;
chunk__30555_30559 = G__30564;
count__30556_30560 = G__30565;
i__30557_30561 = G__30566;
continue;
} else {
var temp__4425__auto___30567 = cljs.core.seq.call(null,seq__30554_30558);
if(temp__4425__auto___30567){
var seq__30554_30568__$1 = temp__4425__auto___30567;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30554_30568__$1)){
var c__17123__auto___30569 = cljs.core.chunk_first.call(null,seq__30554_30568__$1);
var G__30570 = cljs.core.chunk_rest.call(null,seq__30554_30568__$1);
var G__30571 = c__17123__auto___30569;
var G__30572 = cljs.core.count.call(null,c__17123__auto___30569);
var G__30573 = (0);
seq__30554_30558 = G__30570;
chunk__30555_30559 = G__30571;
count__30556_30560 = G__30572;
i__30557_30561 = G__30573;
continue;
} else {
var ns_30574 = cljs.core.first.call(null,seq__30554_30568__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30574);

var G__30575 = cljs.core.next.call(null,seq__30554_30568__$1);
var G__30576 = null;
var G__30577 = (0);
var G__30578 = (0);
seq__30554_30558 = G__30575;
chunk__30555_30559 = G__30576;
count__30556_30560 = G__30577;
i__30557_30561 = G__30578;
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
var G__30579__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30579 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30580__i = 0, G__30580__a = new Array(arguments.length -  0);
while (G__30580__i < G__30580__a.length) {G__30580__a[G__30580__i] = arguments[G__30580__i + 0]; ++G__30580__i;}
  args = new cljs.core.IndexedSeq(G__30580__a,0);
} 
return G__30579__delegate.call(this,args);};
G__30579.cljs$lang$maxFixedArity = 0;
G__30579.cljs$lang$applyTo = (function (arglist__30581){
var args = cljs.core.seq(arglist__30581);
return G__30579__delegate(args);
});
G__30579.cljs$core$IFn$_invoke$arity$variadic = G__30579__delegate;
return G__30579;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30582 = cljs.core._EQ_;
var expr__30583 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30582.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30583))){
return ((function (pred__30582,expr__30583){
return (function (request_url,callback){

var root = clojure.string.join.call(null,"/",cljs.core.reverse.call(null,cljs.core.drop.call(null,(2),cljs.core.reverse.call(null,clojure.string.split.call(null,__dirname,"/")))));
var path = [cljs.core.str(root),cljs.core.str("/"),cljs.core.str(figwheel.client.file_reloading.fix_node_request_url.call(null,request_url))].join('');
(require.cache[path] = null);

return callback.call(null,(function (){try{return require(path);
}catch (e30585){if((e30585 instanceof Error)){
var e = e30585;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30585;

}
}})());
});
;})(pred__30582,expr__30583))
} else {
if(cljs.core.truth_(pred__30582.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30583))){
return ((function (pred__30582,expr__30583){
return (function (request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),{"cleanupWhenDone": true});
deferred.addCallback(((function (deferred,pred__30582,expr__30583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred,pred__30582,expr__30583))
);

return deferred.addErrback(((function (deferred,pred__30582,expr__30583){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred,pred__30582,expr__30583))
);
});
;})(pred__30582,expr__30583))
} else {
return ((function (pred__30582,expr__30583){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30582,expr__30583))
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30586,callback){
var map__30589 = p__30586;
var map__30589__$1 = ((((!((map__30589 == null)))?((((map__30589.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30589.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30589):map__30589);
var file_msg = map__30589__$1;
var request_url = cljs.core.get.call(null,map__30589__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30589,map__30589__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30589,map__30589__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__){
return (function (state_30613){
var state_val_30614 = (state_30613[(1)]);
if((state_val_30614 === (7))){
var inst_30609 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
var statearr_30615_30635 = state_30613__$1;
(statearr_30615_30635[(2)] = inst_30609);

(statearr_30615_30635[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (1))){
var state_30613__$1 = state_30613;
var statearr_30616_30636 = state_30613__$1;
(statearr_30616_30636[(2)] = null);

(statearr_30616_30636[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (4))){
var inst_30593 = (state_30613[(7)]);
var inst_30593__$1 = (state_30613[(2)]);
var state_30613__$1 = (function (){var statearr_30617 = state_30613;
(statearr_30617[(7)] = inst_30593__$1);

return statearr_30617;
})();
if(cljs.core.truth_(inst_30593__$1)){
var statearr_30618_30637 = state_30613__$1;
(statearr_30618_30637[(1)] = (5));

} else {
var statearr_30619_30638 = state_30613__$1;
(statearr_30619_30638[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (6))){
var state_30613__$1 = state_30613;
var statearr_30620_30639 = state_30613__$1;
(statearr_30620_30639[(2)] = null);

(statearr_30620_30639[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (3))){
var inst_30611 = (state_30613[(2)]);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30613__$1,inst_30611);
} else {
if((state_val_30614 === (2))){
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30613__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30614 === (11))){
var inst_30605 = (state_30613[(2)]);
var state_30613__$1 = (function (){var statearr_30621 = state_30613;
(statearr_30621[(8)] = inst_30605);

return statearr_30621;
})();
var statearr_30622_30640 = state_30613__$1;
(statearr_30622_30640[(2)] = null);

(statearr_30622_30640[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (9))){
var inst_30597 = (state_30613[(9)]);
var inst_30599 = (state_30613[(10)]);
var inst_30601 = inst_30599.call(null,inst_30597);
var state_30613__$1 = state_30613;
var statearr_30623_30641 = state_30613__$1;
(statearr_30623_30641[(2)] = inst_30601);

(statearr_30623_30641[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (5))){
var inst_30593 = (state_30613[(7)]);
var inst_30595 = figwheel.client.file_reloading.blocking_load.call(null,inst_30593);
var state_30613__$1 = state_30613;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30613__$1,(8),inst_30595);
} else {
if((state_val_30614 === (10))){
var inst_30597 = (state_30613[(9)]);
var inst_30603 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30597);
var state_30613__$1 = state_30613;
var statearr_30624_30642 = state_30613__$1;
(statearr_30624_30642[(2)] = inst_30603);

(statearr_30624_30642[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30614 === (8))){
var inst_30593 = (state_30613[(7)]);
var inst_30599 = (state_30613[(10)]);
var inst_30597 = (state_30613[(2)]);
var inst_30598 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30599__$1 = cljs.core.get.call(null,inst_30598,inst_30593);
var state_30613__$1 = (function (){var statearr_30625 = state_30613;
(statearr_30625[(9)] = inst_30597);

(statearr_30625[(10)] = inst_30599__$1);

return statearr_30625;
})();
if(cljs.core.truth_(inst_30599__$1)){
var statearr_30626_30643 = state_30613__$1;
(statearr_30626_30643[(1)] = (9));

} else {
var statearr_30627_30644 = state_30613__$1;
(statearr_30627_30644[(1)] = (10));

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
});})(c__19483__auto__))
;
return ((function (switch__19418__auto__,c__19483__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__19419__auto__ = null;
var figwheel$client$file_reloading$state_machine__19419__auto____0 = (function (){
var statearr_30631 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30631[(0)] = figwheel$client$file_reloading$state_machine__19419__auto__);

(statearr_30631[(1)] = (1));

return statearr_30631;
});
var figwheel$client$file_reloading$state_machine__19419__auto____1 = (function (state_30613){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_30613);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e30632){if((e30632 instanceof Object)){
var ex__19422__auto__ = e30632;
var statearr_30633_30645 = state_30613;
(statearr_30633_30645[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30632;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30646 = state_30613;
state_30613 = G__30646;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__19419__auto__ = function(state_30613){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__19419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__19419__auto____1.call(this,state_30613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__19419__auto____0;
figwheel$client$file_reloading$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__19419__auto____1;
return figwheel$client$file_reloading$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__))
})();
var state__19485__auto__ = (function (){var statearr_30634 = f__19484__auto__.call(null);
(statearr_30634[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_30634;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__))
);

return c__19483__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30647,callback){
var map__30650 = p__30647;
var map__30650__$1 = ((((!((map__30650 == null)))?((((map__30650.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30650.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30650):map__30650);
var file_msg = map__30650__$1;
var namespace = cljs.core.get.call(null,map__30650__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30650,map__30650__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30650,map__30650__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30652){
var map__30655 = p__30652;
var map__30655__$1 = ((((!((map__30655 == null)))?((((map__30655.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30655.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30655):map__30655);
var file_msg = map__30655__$1;
var namespace = cljs.core.get.call(null,map__30655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30657,callback){
var map__30660 = p__30657;
var map__30660__$1 = ((((!((map__30660 == null)))?((((map__30660.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30660.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30660):map__30660);
var file_msg = map__30660__$1;
var request_url = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30660__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__19483__auto___30748 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___30748,out){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___30748,out){
return (function (state_30730){
var state_val_30731 = (state_30730[(1)]);
if((state_val_30731 === (1))){
var inst_30708 = cljs.core.nth.call(null,files,(0),null);
var inst_30709 = cljs.core.nthnext.call(null,files,(1));
var inst_30710 = files;
var state_30730__$1 = (function (){var statearr_30732 = state_30730;
(statearr_30732[(7)] = inst_30709);

(statearr_30732[(8)] = inst_30710);

(statearr_30732[(9)] = inst_30708);

return statearr_30732;
})();
var statearr_30733_30749 = state_30730__$1;
(statearr_30733_30749[(2)] = null);

(statearr_30733_30749[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (2))){
var inst_30710 = (state_30730[(8)]);
var inst_30713 = (state_30730[(10)]);
var inst_30713__$1 = cljs.core.nth.call(null,inst_30710,(0),null);
var inst_30714 = cljs.core.nthnext.call(null,inst_30710,(1));
var inst_30715 = (inst_30713__$1 == null);
var inst_30716 = cljs.core.not.call(null,inst_30715);
var state_30730__$1 = (function (){var statearr_30734 = state_30730;
(statearr_30734[(11)] = inst_30714);

(statearr_30734[(10)] = inst_30713__$1);

return statearr_30734;
})();
if(inst_30716){
var statearr_30735_30750 = state_30730__$1;
(statearr_30735_30750[(1)] = (4));

} else {
var statearr_30736_30751 = state_30730__$1;
(statearr_30736_30751[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (3))){
var inst_30728 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30730__$1,inst_30728);
} else {
if((state_val_30731 === (4))){
var inst_30713 = (state_30730[(10)]);
var inst_30718 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30713);
var state_30730__$1 = state_30730;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30730__$1,(7),inst_30718);
} else {
if((state_val_30731 === (5))){
var inst_30724 = cljs.core.async.close_BANG_.call(null,out);
var state_30730__$1 = state_30730;
var statearr_30737_30752 = state_30730__$1;
(statearr_30737_30752[(2)] = inst_30724);

(statearr_30737_30752[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (6))){
var inst_30726 = (state_30730[(2)]);
var state_30730__$1 = state_30730;
var statearr_30738_30753 = state_30730__$1;
(statearr_30738_30753[(2)] = inst_30726);

(statearr_30738_30753[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30731 === (7))){
var inst_30714 = (state_30730[(11)]);
var inst_30720 = (state_30730[(2)]);
var inst_30721 = cljs.core.async.put_BANG_.call(null,out,inst_30720);
var inst_30710 = inst_30714;
var state_30730__$1 = (function (){var statearr_30739 = state_30730;
(statearr_30739[(12)] = inst_30721);

(statearr_30739[(8)] = inst_30710);

return statearr_30739;
})();
var statearr_30740_30754 = state_30730__$1;
(statearr_30740_30754[(2)] = null);

(statearr_30740_30754[(1)] = (2));


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
});})(c__19483__auto___30748,out))
;
return ((function (switch__19418__auto__,c__19483__auto___30748,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto____0 = (function (){
var statearr_30744 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30744[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto__);

(statearr_30744[(1)] = (1));

return statearr_30744;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto____1 = (function (state_30730){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_30730);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e30745){if((e30745 instanceof Object)){
var ex__19422__auto__ = e30745;
var statearr_30746_30755 = state_30730;
(statearr_30746_30755[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30730);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30745;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30756 = state_30730;
state_30730 = G__30756;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto__ = function(state_30730){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto____1.call(this,state_30730);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___30748,out))
})();
var state__19485__auto__ = (function (){var statearr_30747 = f__19484__auto__.call(null);
(statearr_30747[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___30748);

return statearr_30747;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___30748,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30757,opts){
var map__30761 = p__30757;
var map__30761__$1 = ((((!((map__30761 == null)))?((((map__30761.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30761.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30761):map__30761);
var eval_body__$1 = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30761__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30763){var e = e30763;
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
return (function (p1__30764_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30764_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30769){
var vec__30770 = p__30769;
var k = cljs.core.nth.call(null,vec__30770,(0),null);
var v = cljs.core.nth.call(null,vec__30770,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30771){
var vec__30772 = p__30771;
var k = cljs.core.nth.call(null,vec__30772,(0),null);
var v = cljs.core.nth.call(null,vec__30772,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30776,p__30777){
var map__31024 = p__30776;
var map__31024__$1 = ((((!((map__31024 == null)))?((((map__31024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31024):map__31024);
var opts = map__31024__$1;
var before_jsload = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__31024__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__31025 = p__30777;
var map__31025__$1 = ((((!((map__31025 == null)))?((((map__31025.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31025.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31025):map__31025);
var msg = map__31025__$1;
var files = cljs.core.get.call(null,map__31025__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__31025__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__31025__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31178){
var state_val_31179 = (state_31178[(1)]);
if((state_val_31179 === (7))){
var inst_31039 = (state_31178[(7)]);
var inst_31040 = (state_31178[(8)]);
var inst_31041 = (state_31178[(9)]);
var inst_31042 = (state_31178[(10)]);
var inst_31047 = cljs.core._nth.call(null,inst_31040,inst_31042);
var inst_31048 = figwheel.client.file_reloading.eval_body.call(null,inst_31047,opts);
var inst_31049 = (inst_31042 + (1));
var tmp31180 = inst_31039;
var tmp31181 = inst_31040;
var tmp31182 = inst_31041;
var inst_31039__$1 = tmp31180;
var inst_31040__$1 = tmp31181;
var inst_31041__$1 = tmp31182;
var inst_31042__$1 = inst_31049;
var state_31178__$1 = (function (){var statearr_31183 = state_31178;
(statearr_31183[(11)] = inst_31048);

(statearr_31183[(7)] = inst_31039__$1);

(statearr_31183[(8)] = inst_31040__$1);

(statearr_31183[(9)] = inst_31041__$1);

(statearr_31183[(10)] = inst_31042__$1);

return statearr_31183;
})();
var statearr_31184_31270 = state_31178__$1;
(statearr_31184_31270[(2)] = null);

(statearr_31184_31270[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (20))){
var inst_31082 = (state_31178[(12)]);
var inst_31090 = figwheel.client.file_reloading.sort_files.call(null,inst_31082);
var state_31178__$1 = state_31178;
var statearr_31185_31271 = state_31178__$1;
(statearr_31185_31271[(2)] = inst_31090);

(statearr_31185_31271[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (27))){
var state_31178__$1 = state_31178;
var statearr_31186_31272 = state_31178__$1;
(statearr_31186_31272[(2)] = null);

(statearr_31186_31272[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (1))){
var inst_31031 = (state_31178[(13)]);
var inst_31028 = before_jsload.call(null,files);
var inst_31029 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_31030 = (function (){return ((function (inst_31031,inst_31028,inst_31029,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30773_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30773_SHARP_);
});
;})(inst_31031,inst_31028,inst_31029,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31031__$1 = cljs.core.filter.call(null,inst_31030,files);
var inst_31032 = cljs.core.not_empty.call(null,inst_31031__$1);
var state_31178__$1 = (function (){var statearr_31187 = state_31178;
(statearr_31187[(13)] = inst_31031__$1);

(statearr_31187[(14)] = inst_31028);

(statearr_31187[(15)] = inst_31029);

return statearr_31187;
})();
if(cljs.core.truth_(inst_31032)){
var statearr_31188_31273 = state_31178__$1;
(statearr_31188_31273[(1)] = (2));

} else {
var statearr_31189_31274 = state_31178__$1;
(statearr_31189_31274[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (24))){
var state_31178__$1 = state_31178;
var statearr_31190_31275 = state_31178__$1;
(statearr_31190_31275[(2)] = null);

(statearr_31190_31275[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (39))){
var inst_31132 = (state_31178[(16)]);
var state_31178__$1 = state_31178;
var statearr_31191_31276 = state_31178__$1;
(statearr_31191_31276[(2)] = inst_31132);

(statearr_31191_31276[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (46))){
var inst_31173 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31192_31277 = state_31178__$1;
(statearr_31192_31277[(2)] = inst_31173);

(statearr_31192_31277[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (4))){
var inst_31076 = (state_31178[(2)]);
var inst_31077 = cljs.core.List.EMPTY;
var inst_31078 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31077);
var inst_31079 = (function (){return ((function (inst_31076,inst_31077,inst_31078,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30774_SHARP_){
var and__16308__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30774_SHARP_);
if(cljs.core.truth_(and__16308__auto__)){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30774_SHARP_));
} else {
return and__16308__auto__;
}
});
;})(inst_31076,inst_31077,inst_31078,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31080 = cljs.core.filter.call(null,inst_31079,files);
var inst_31081 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31082 = cljs.core.concat.call(null,inst_31080,inst_31081);
var state_31178__$1 = (function (){var statearr_31193 = state_31178;
(statearr_31193[(17)] = inst_31078);

(statearr_31193[(18)] = inst_31076);

(statearr_31193[(12)] = inst_31082);

return statearr_31193;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31194_31278 = state_31178__$1;
(statearr_31194_31278[(1)] = (16));

} else {
var statearr_31195_31279 = state_31178__$1;
(statearr_31195_31279[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (15))){
var inst_31066 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31196_31280 = state_31178__$1;
(statearr_31196_31280[(2)] = inst_31066);

(statearr_31196_31280[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (21))){
var inst_31092 = (state_31178[(19)]);
var inst_31092__$1 = (state_31178[(2)]);
var inst_31093 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31092__$1);
var state_31178__$1 = (function (){var statearr_31197 = state_31178;
(statearr_31197[(19)] = inst_31092__$1);

return statearr_31197;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31178__$1,(22),inst_31093);
} else {
if((state_val_31179 === (31))){
var inst_31176 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31178__$1,inst_31176);
} else {
if((state_val_31179 === (32))){
var inst_31132 = (state_31178[(16)]);
var inst_31137 = inst_31132.cljs$lang$protocol_mask$partition0$;
var inst_31138 = (inst_31137 & (64));
var inst_31139 = inst_31132.cljs$core$ISeq$;
var inst_31140 = (inst_31138) || (inst_31139);
var state_31178__$1 = state_31178;
if(cljs.core.truth_(inst_31140)){
var statearr_31198_31281 = state_31178__$1;
(statearr_31198_31281[(1)] = (35));

} else {
var statearr_31199_31282 = state_31178__$1;
(statearr_31199_31282[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (40))){
var inst_31153 = (state_31178[(20)]);
var inst_31152 = (state_31178[(2)]);
var inst_31153__$1 = cljs.core.get.call(null,inst_31152,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31154 = cljs.core.get.call(null,inst_31152,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31155 = cljs.core.not_empty.call(null,inst_31153__$1);
var state_31178__$1 = (function (){var statearr_31200 = state_31178;
(statearr_31200[(20)] = inst_31153__$1);

(statearr_31200[(21)] = inst_31154);

return statearr_31200;
})();
if(cljs.core.truth_(inst_31155)){
var statearr_31201_31283 = state_31178__$1;
(statearr_31201_31283[(1)] = (41));

} else {
var statearr_31202_31284 = state_31178__$1;
(statearr_31202_31284[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (33))){
var state_31178__$1 = state_31178;
var statearr_31203_31285 = state_31178__$1;
(statearr_31203_31285[(2)] = false);

(statearr_31203_31285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (13))){
var inst_31052 = (state_31178[(22)]);
var inst_31056 = cljs.core.chunk_first.call(null,inst_31052);
var inst_31057 = cljs.core.chunk_rest.call(null,inst_31052);
var inst_31058 = cljs.core.count.call(null,inst_31056);
var inst_31039 = inst_31057;
var inst_31040 = inst_31056;
var inst_31041 = inst_31058;
var inst_31042 = (0);
var state_31178__$1 = (function (){var statearr_31204 = state_31178;
(statearr_31204[(7)] = inst_31039);

(statearr_31204[(8)] = inst_31040);

(statearr_31204[(9)] = inst_31041);

(statearr_31204[(10)] = inst_31042);

return statearr_31204;
})();
var statearr_31205_31286 = state_31178__$1;
(statearr_31205_31286[(2)] = null);

(statearr_31205_31286[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (22))){
var inst_31092 = (state_31178[(19)]);
var inst_31096 = (state_31178[(23)]);
var inst_31095 = (state_31178[(24)]);
var inst_31100 = (state_31178[(25)]);
var inst_31095__$1 = (state_31178[(2)]);
var inst_31096__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31095__$1);
var inst_31097 = (function (){var all_files = inst_31092;
var res_SINGLEQUOTE_ = inst_31095__$1;
var res = inst_31096__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31092,inst_31096,inst_31095,inst_31100,inst_31095__$1,inst_31096__$1,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30775_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30775_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31092,inst_31096,inst_31095,inst_31100,inst_31095__$1,inst_31096__$1,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31098 = cljs.core.filter.call(null,inst_31097,inst_31095__$1);
var inst_31099 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31100__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31099);
var inst_31101 = cljs.core.not_empty.call(null,inst_31100__$1);
var state_31178__$1 = (function (){var statearr_31206 = state_31178;
(statearr_31206[(23)] = inst_31096__$1);

(statearr_31206[(26)] = inst_31098);

(statearr_31206[(24)] = inst_31095__$1);

(statearr_31206[(25)] = inst_31100__$1);

return statearr_31206;
})();
if(cljs.core.truth_(inst_31101)){
var statearr_31207_31287 = state_31178__$1;
(statearr_31207_31287[(1)] = (23));

} else {
var statearr_31208_31288 = state_31178__$1;
(statearr_31208_31288[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (36))){
var state_31178__$1 = state_31178;
var statearr_31209_31289 = state_31178__$1;
(statearr_31209_31289[(2)] = false);

(statearr_31209_31289[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (41))){
var inst_31153 = (state_31178[(20)]);
var inst_31157 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31158 = cljs.core.map.call(null,inst_31157,inst_31153);
var inst_31159 = cljs.core.pr_str.call(null,inst_31158);
var inst_31160 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31159)].join('');
var inst_31161 = figwheel.client.utils.log.call(null,inst_31160);
var state_31178__$1 = state_31178;
var statearr_31210_31290 = state_31178__$1;
(statearr_31210_31290[(2)] = inst_31161);

(statearr_31210_31290[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (43))){
var inst_31154 = (state_31178[(21)]);
var inst_31164 = (state_31178[(2)]);
var inst_31165 = cljs.core.not_empty.call(null,inst_31154);
var state_31178__$1 = (function (){var statearr_31211 = state_31178;
(statearr_31211[(27)] = inst_31164);

return statearr_31211;
})();
if(cljs.core.truth_(inst_31165)){
var statearr_31212_31291 = state_31178__$1;
(statearr_31212_31291[(1)] = (44));

} else {
var statearr_31213_31292 = state_31178__$1;
(statearr_31213_31292[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (29))){
var inst_31092 = (state_31178[(19)]);
var inst_31096 = (state_31178[(23)]);
var inst_31132 = (state_31178[(16)]);
var inst_31098 = (state_31178[(26)]);
var inst_31095 = (state_31178[(24)]);
var inst_31100 = (state_31178[(25)]);
var inst_31128 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31131 = (function (){var all_files = inst_31092;
var res_SINGLEQUOTE_ = inst_31095;
var res = inst_31096;
var files_not_loaded = inst_31098;
var dependencies_that_loaded = inst_31100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31132,inst_31098,inst_31095,inst_31100,inst_31128,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31130){
var map__31214 = p__31130;
var map__31214__$1 = ((((!((map__31214 == null)))?((((map__31214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31214):map__31214);
var namespace = cljs.core.get.call(null,map__31214__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31132,inst_31098,inst_31095,inst_31100,inst_31128,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31132__$1 = cljs.core.group_by.call(null,inst_31131,inst_31098);
var inst_31134 = (inst_31132__$1 == null);
var inst_31135 = cljs.core.not.call(null,inst_31134);
var state_31178__$1 = (function (){var statearr_31216 = state_31178;
(statearr_31216[(28)] = inst_31128);

(statearr_31216[(16)] = inst_31132__$1);

return statearr_31216;
})();
if(inst_31135){
var statearr_31217_31293 = state_31178__$1;
(statearr_31217_31293[(1)] = (32));

} else {
var statearr_31218_31294 = state_31178__$1;
(statearr_31218_31294[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (44))){
var inst_31154 = (state_31178[(21)]);
var inst_31167 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31154);
var inst_31168 = cljs.core.pr_str.call(null,inst_31167);
var inst_31169 = [cljs.core.str("not required: "),cljs.core.str(inst_31168)].join('');
var inst_31170 = figwheel.client.utils.log.call(null,inst_31169);
var state_31178__$1 = state_31178;
var statearr_31219_31295 = state_31178__$1;
(statearr_31219_31295[(2)] = inst_31170);

(statearr_31219_31295[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (6))){
var inst_31073 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31220_31296 = state_31178__$1;
(statearr_31220_31296[(2)] = inst_31073);

(statearr_31220_31296[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (28))){
var inst_31098 = (state_31178[(26)]);
var inst_31125 = (state_31178[(2)]);
var inst_31126 = cljs.core.not_empty.call(null,inst_31098);
var state_31178__$1 = (function (){var statearr_31221 = state_31178;
(statearr_31221[(29)] = inst_31125);

return statearr_31221;
})();
if(cljs.core.truth_(inst_31126)){
var statearr_31222_31297 = state_31178__$1;
(statearr_31222_31297[(1)] = (29));

} else {
var statearr_31223_31298 = state_31178__$1;
(statearr_31223_31298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (25))){
var inst_31096 = (state_31178[(23)]);
var inst_31112 = (state_31178[(2)]);
var inst_31113 = cljs.core.not_empty.call(null,inst_31096);
var state_31178__$1 = (function (){var statearr_31224 = state_31178;
(statearr_31224[(30)] = inst_31112);

return statearr_31224;
})();
if(cljs.core.truth_(inst_31113)){
var statearr_31225_31299 = state_31178__$1;
(statearr_31225_31299[(1)] = (26));

} else {
var statearr_31226_31300 = state_31178__$1;
(statearr_31226_31300[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (34))){
var inst_31147 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
if(cljs.core.truth_(inst_31147)){
var statearr_31227_31301 = state_31178__$1;
(statearr_31227_31301[(1)] = (38));

} else {
var statearr_31228_31302 = state_31178__$1;
(statearr_31228_31302[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (17))){
var state_31178__$1 = state_31178;
var statearr_31229_31303 = state_31178__$1;
(statearr_31229_31303[(2)] = recompile_dependents);

(statearr_31229_31303[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (3))){
var state_31178__$1 = state_31178;
var statearr_31230_31304 = state_31178__$1;
(statearr_31230_31304[(2)] = null);

(statearr_31230_31304[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (12))){
var inst_31069 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31231_31305 = state_31178__$1;
(statearr_31231_31305[(2)] = inst_31069);

(statearr_31231_31305[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (2))){
var inst_31031 = (state_31178[(13)]);
var inst_31038 = cljs.core.seq.call(null,inst_31031);
var inst_31039 = inst_31038;
var inst_31040 = null;
var inst_31041 = (0);
var inst_31042 = (0);
var state_31178__$1 = (function (){var statearr_31232 = state_31178;
(statearr_31232[(7)] = inst_31039);

(statearr_31232[(8)] = inst_31040);

(statearr_31232[(9)] = inst_31041);

(statearr_31232[(10)] = inst_31042);

return statearr_31232;
})();
var statearr_31233_31306 = state_31178__$1;
(statearr_31233_31306[(2)] = null);

(statearr_31233_31306[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (23))){
var inst_31092 = (state_31178[(19)]);
var inst_31096 = (state_31178[(23)]);
var inst_31098 = (state_31178[(26)]);
var inst_31095 = (state_31178[(24)]);
var inst_31100 = (state_31178[(25)]);
var inst_31103 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31105 = (function (){var all_files = inst_31092;
var res_SINGLEQUOTE_ = inst_31095;
var res = inst_31096;
var files_not_loaded = inst_31098;
var dependencies_that_loaded = inst_31100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31098,inst_31095,inst_31100,inst_31103,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31104){
var map__31234 = p__31104;
var map__31234__$1 = ((((!((map__31234 == null)))?((((map__31234.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31234.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31234):map__31234);
var request_url = cljs.core.get.call(null,map__31234__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31098,inst_31095,inst_31100,inst_31103,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31106 = cljs.core.reverse.call(null,inst_31100);
var inst_31107 = cljs.core.map.call(null,inst_31105,inst_31106);
var inst_31108 = cljs.core.pr_str.call(null,inst_31107);
var inst_31109 = figwheel.client.utils.log.call(null,inst_31108);
var state_31178__$1 = (function (){var statearr_31236 = state_31178;
(statearr_31236[(31)] = inst_31103);

return statearr_31236;
})();
var statearr_31237_31307 = state_31178__$1;
(statearr_31237_31307[(2)] = inst_31109);

(statearr_31237_31307[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (35))){
var state_31178__$1 = state_31178;
var statearr_31238_31308 = state_31178__$1;
(statearr_31238_31308[(2)] = true);

(statearr_31238_31308[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (19))){
var inst_31082 = (state_31178[(12)]);
var inst_31088 = figwheel.client.file_reloading.expand_files.call(null,inst_31082);
var state_31178__$1 = state_31178;
var statearr_31239_31309 = state_31178__$1;
(statearr_31239_31309[(2)] = inst_31088);

(statearr_31239_31309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (11))){
var state_31178__$1 = state_31178;
var statearr_31240_31310 = state_31178__$1;
(statearr_31240_31310[(2)] = null);

(statearr_31240_31310[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (9))){
var inst_31071 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31241_31311 = state_31178__$1;
(statearr_31241_31311[(2)] = inst_31071);

(statearr_31241_31311[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (5))){
var inst_31041 = (state_31178[(9)]);
var inst_31042 = (state_31178[(10)]);
var inst_31044 = (inst_31042 < inst_31041);
var inst_31045 = inst_31044;
var state_31178__$1 = state_31178;
if(cljs.core.truth_(inst_31045)){
var statearr_31242_31312 = state_31178__$1;
(statearr_31242_31312[(1)] = (7));

} else {
var statearr_31243_31313 = state_31178__$1;
(statearr_31243_31313[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (14))){
var inst_31052 = (state_31178[(22)]);
var inst_31061 = cljs.core.first.call(null,inst_31052);
var inst_31062 = figwheel.client.file_reloading.eval_body.call(null,inst_31061,opts);
var inst_31063 = cljs.core.next.call(null,inst_31052);
var inst_31039 = inst_31063;
var inst_31040 = null;
var inst_31041 = (0);
var inst_31042 = (0);
var state_31178__$1 = (function (){var statearr_31244 = state_31178;
(statearr_31244[(7)] = inst_31039);

(statearr_31244[(32)] = inst_31062);

(statearr_31244[(8)] = inst_31040);

(statearr_31244[(9)] = inst_31041);

(statearr_31244[(10)] = inst_31042);

return statearr_31244;
})();
var statearr_31245_31314 = state_31178__$1;
(statearr_31245_31314[(2)] = null);

(statearr_31245_31314[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (45))){
var state_31178__$1 = state_31178;
var statearr_31246_31315 = state_31178__$1;
(statearr_31246_31315[(2)] = null);

(statearr_31246_31315[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (26))){
var inst_31092 = (state_31178[(19)]);
var inst_31096 = (state_31178[(23)]);
var inst_31098 = (state_31178[(26)]);
var inst_31095 = (state_31178[(24)]);
var inst_31100 = (state_31178[(25)]);
var inst_31115 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31117 = (function (){var all_files = inst_31092;
var res_SINGLEQUOTE_ = inst_31095;
var res = inst_31096;
var files_not_loaded = inst_31098;
var dependencies_that_loaded = inst_31100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31098,inst_31095,inst_31100,inst_31115,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31116){
var map__31247 = p__31116;
var map__31247__$1 = ((((!((map__31247 == null)))?((((map__31247.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31247.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31247):map__31247);
var namespace = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31247__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31098,inst_31095,inst_31100,inst_31115,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31118 = cljs.core.map.call(null,inst_31117,inst_31096);
var inst_31119 = cljs.core.pr_str.call(null,inst_31118);
var inst_31120 = figwheel.client.utils.log.call(null,inst_31119);
var inst_31121 = (function (){var all_files = inst_31092;
var res_SINGLEQUOTE_ = inst_31095;
var res = inst_31096;
var files_not_loaded = inst_31098;
var dependencies_that_loaded = inst_31100;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31098,inst_31095,inst_31100,inst_31115,inst_31117,inst_31118,inst_31119,inst_31120,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31092,inst_31096,inst_31098,inst_31095,inst_31100,inst_31115,inst_31117,inst_31118,inst_31119,inst_31120,state_val_31179,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31122 = setTimeout(inst_31121,(10));
var state_31178__$1 = (function (){var statearr_31249 = state_31178;
(statearr_31249[(33)] = inst_31115);

(statearr_31249[(34)] = inst_31120);

return statearr_31249;
})();
var statearr_31250_31316 = state_31178__$1;
(statearr_31250_31316[(2)] = inst_31122);

(statearr_31250_31316[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (16))){
var state_31178__$1 = state_31178;
var statearr_31251_31317 = state_31178__$1;
(statearr_31251_31317[(2)] = reload_dependents);

(statearr_31251_31317[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (38))){
var inst_31132 = (state_31178[(16)]);
var inst_31149 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31132);
var state_31178__$1 = state_31178;
var statearr_31252_31318 = state_31178__$1;
(statearr_31252_31318[(2)] = inst_31149);

(statearr_31252_31318[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (30))){
var state_31178__$1 = state_31178;
var statearr_31253_31319 = state_31178__$1;
(statearr_31253_31319[(2)] = null);

(statearr_31253_31319[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (10))){
var inst_31052 = (state_31178[(22)]);
var inst_31054 = cljs.core.chunked_seq_QMARK_.call(null,inst_31052);
var state_31178__$1 = state_31178;
if(inst_31054){
var statearr_31254_31320 = state_31178__$1;
(statearr_31254_31320[(1)] = (13));

} else {
var statearr_31255_31321 = state_31178__$1;
(statearr_31255_31321[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (18))){
var inst_31086 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
if(cljs.core.truth_(inst_31086)){
var statearr_31256_31322 = state_31178__$1;
(statearr_31256_31322[(1)] = (19));

} else {
var statearr_31257_31323 = state_31178__$1;
(statearr_31257_31323[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (42))){
var state_31178__$1 = state_31178;
var statearr_31258_31324 = state_31178__$1;
(statearr_31258_31324[(2)] = null);

(statearr_31258_31324[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (37))){
var inst_31144 = (state_31178[(2)]);
var state_31178__$1 = state_31178;
var statearr_31259_31325 = state_31178__$1;
(statearr_31259_31325[(2)] = inst_31144);

(statearr_31259_31325[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31179 === (8))){
var inst_31052 = (state_31178[(22)]);
var inst_31039 = (state_31178[(7)]);
var inst_31052__$1 = cljs.core.seq.call(null,inst_31039);
var state_31178__$1 = (function (){var statearr_31260 = state_31178;
(statearr_31260[(22)] = inst_31052__$1);

return statearr_31260;
})();
if(inst_31052__$1){
var statearr_31261_31326 = state_31178__$1;
(statearr_31261_31326[(1)] = (10));

} else {
var statearr_31262_31327 = state_31178__$1;
(statearr_31262_31327[(1)] = (11));

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
});})(c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__19418__auto__,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto____0 = (function (){
var statearr_31266 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31266[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto__);

(statearr_31266[(1)] = (1));

return statearr_31266;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto____1 = (function (state_31178){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_31178);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e31267){if((e31267 instanceof Object)){
var ex__19422__auto__ = e31267;
var statearr_31268_31328 = state_31178;
(statearr_31268_31328[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31178);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31329 = state_31178;
state_31178 = G__31329;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto__ = function(state_31178){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto____1.call(this,state_31178);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__19485__auto__ = (function (){var statearr_31269 = f__19484__auto__.call(null);
(statearr_31269[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_31269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__,map__31024,map__31024__$1,opts,before_jsload,on_jsload,reload_dependents,map__31025,map__31025__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__19483__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31332,link){
var map__31335 = p__31332;
var map__31335__$1 = ((((!((map__31335 == null)))?((((map__31335.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31335.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31335):map__31335);
var file = cljs.core.get.call(null,map__31335__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = link.href;
if(cljs.core.truth_(temp__4425__auto__)){
var link_href = temp__4425__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4425__auto__,map__31335,map__31335__$1,file){
return (function (p1__31330_SHARP_,p2__31331_SHARP_){
if(cljs.core._EQ_.call(null,p1__31330_SHARP_,p2__31331_SHARP_)){
return p1__31330_SHARP_;
} else {
return false;
}
});})(link_href,temp__4425__auto__,map__31335,map__31335__$1,file))
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
var temp__4425__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31341){
var map__31342 = p__31341;
var map__31342__$1 = ((((!((map__31342 == null)))?((((map__31342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31342):map__31342);
var match_length = cljs.core.get.call(null,map__31342__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31342__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31337_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31337_SHARP_);
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
var args31344 = [];
var len__17378__auto___31347 = arguments.length;
var i__17379__auto___31348 = (0);
while(true){
if((i__17379__auto___31348 < len__17378__auto___31347)){
args31344.push((arguments[i__17379__auto___31348]));

var G__31349 = (i__17379__auto___31348 + (1));
i__17379__auto___31348 = G__31349;
continue;
} else {
}
break;
}

var G__31346 = args31344.length;
switch (G__31346) {
case 1:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.add_link_to_doc.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args31344.length)].join('')));

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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31351_SHARP_,p2__31352_SHARP_){
return cljs.core.assoc.call(null,p1__31351_SHARP_,cljs.core.get.call(null,p2__31352_SHARP_,key),p2__31352_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(p__31353){
var map__31356 = p__31353;
var map__31356__$1 = ((((!((map__31356 == null)))?((((map__31356.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31356.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31356):map__31356);
var f_data = map__31356__$1;
var file = cljs.core.get.call(null,map__31356__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4425__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4425__auto__)){
var link = temp__4425__auto__;
return figwheel.client.file_reloading.add_link_to_doc.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href));
} else {
return null;
}
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31358,files_msg){
var map__31365 = p__31358;
var map__31365__$1 = ((((!((map__31365 == null)))?((((map__31365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31365):map__31365);
var opts = map__31365__$1;
var on_cssload = cljs.core.get.call(null,map__31365__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var seq__31367_31371 = cljs.core.seq.call(null,figwheel.client.file_reloading.distictify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg)));
var chunk__31368_31372 = null;
var count__31369_31373 = (0);
var i__31370_31374 = (0);
while(true){
if((i__31370_31374 < count__31369_31373)){
var f_31375 = cljs.core._nth.call(null,chunk__31368_31372,i__31370_31374);
figwheel.client.file_reloading.reload_css_file.call(null,f_31375);

var G__31376 = seq__31367_31371;
var G__31377 = chunk__31368_31372;
var G__31378 = count__31369_31373;
var G__31379 = (i__31370_31374 + (1));
seq__31367_31371 = G__31376;
chunk__31368_31372 = G__31377;
count__31369_31373 = G__31378;
i__31370_31374 = G__31379;
continue;
} else {
var temp__4425__auto___31380 = cljs.core.seq.call(null,seq__31367_31371);
if(temp__4425__auto___31380){
var seq__31367_31381__$1 = temp__4425__auto___31380;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31367_31381__$1)){
var c__17123__auto___31382 = cljs.core.chunk_first.call(null,seq__31367_31381__$1);
var G__31383 = cljs.core.chunk_rest.call(null,seq__31367_31381__$1);
var G__31384 = c__17123__auto___31382;
var G__31385 = cljs.core.count.call(null,c__17123__auto___31382);
var G__31386 = (0);
seq__31367_31371 = G__31383;
chunk__31368_31372 = G__31384;
count__31369_31373 = G__31385;
i__31370_31374 = G__31386;
continue;
} else {
var f_31387 = cljs.core.first.call(null,seq__31367_31381__$1);
figwheel.client.file_reloading.reload_css_file.call(null,f_31387);

var G__31388 = cljs.core.next.call(null,seq__31367_31381__$1);
var G__31389 = null;
var G__31390 = (0);
var G__31391 = (0);
seq__31367_31371 = G__31388;
chunk__31368_31372 = G__31389;
count__31369_31373 = G__31390;
i__31370_31374 = G__31391;
continue;
}
} else {
}
}
break;
}

return setTimeout(((function (map__31365,map__31365__$1,opts,on_cssload){
return (function (){
return on_cssload.call(null,new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(files_msg));
});})(map__31365,map__31365__$1,opts,on_cssload))
,(100));
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map