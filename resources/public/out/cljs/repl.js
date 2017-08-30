// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
cljs.repl.print_doc = (function cljs$repl$print_doc(m){
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4425__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4425__auto__)){
var ns = temp__4425__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30333_30347 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30334_30348 = null;
var count__30335_30349 = (0);
var i__30336_30350 = (0);
while(true){
if((i__30336_30350 < count__30335_30349)){
var f_30351 = cljs.core._nth.call(null,chunk__30334_30348,i__30336_30350);
cljs.core.println.call(null,"  ",f_30351);

var G__30352 = seq__30333_30347;
var G__30353 = chunk__30334_30348;
var G__30354 = count__30335_30349;
var G__30355 = (i__30336_30350 + (1));
seq__30333_30347 = G__30352;
chunk__30334_30348 = G__30353;
count__30335_30349 = G__30354;
i__30336_30350 = G__30355;
continue;
} else {
var temp__4425__auto___30356 = cljs.core.seq.call(null,seq__30333_30347);
if(temp__4425__auto___30356){
var seq__30333_30357__$1 = temp__4425__auto___30356;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30333_30357__$1)){
var c__17123__auto___30358 = cljs.core.chunk_first.call(null,seq__30333_30357__$1);
var G__30359 = cljs.core.chunk_rest.call(null,seq__30333_30357__$1);
var G__30360 = c__17123__auto___30358;
var G__30361 = cljs.core.count.call(null,c__17123__auto___30358);
var G__30362 = (0);
seq__30333_30347 = G__30359;
chunk__30334_30348 = G__30360;
count__30335_30349 = G__30361;
i__30336_30350 = G__30362;
continue;
} else {
var f_30363 = cljs.core.first.call(null,seq__30333_30357__$1);
cljs.core.println.call(null,"  ",f_30363);

var G__30364 = cljs.core.next.call(null,seq__30333_30357__$1);
var G__30365 = null;
var G__30366 = (0);
var G__30367 = (0);
seq__30333_30347 = G__30364;
chunk__30334_30348 = G__30365;
count__30335_30349 = G__30366;
i__30336_30350 = G__30367;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_30368 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16320__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_30368);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_30368)))?cljs.core.second.call(null,arglists_30368):arglists_30368));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__30337 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__30338 = null;
var count__30339 = (0);
var i__30340 = (0);
while(true){
if((i__30340 < count__30339)){
var vec__30341 = cljs.core._nth.call(null,chunk__30338,i__30340);
var name = cljs.core.nth.call(null,vec__30341,(0),null);
var map__30342 = cljs.core.nth.call(null,vec__30341,(1),null);
var map__30342__$1 = ((((!((map__30342 == null)))?((((map__30342.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30342.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30342):map__30342);
var doc = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30342__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30369 = seq__30337;
var G__30370 = chunk__30338;
var G__30371 = count__30339;
var G__30372 = (i__30340 + (1));
seq__30337 = G__30369;
chunk__30338 = G__30370;
count__30339 = G__30371;
i__30340 = G__30372;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__30337);
if(temp__4425__auto__){
var seq__30337__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30337__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__30337__$1);
var G__30373 = cljs.core.chunk_rest.call(null,seq__30337__$1);
var G__30374 = c__17123__auto__;
var G__30375 = cljs.core.count.call(null,c__17123__auto__);
var G__30376 = (0);
seq__30337 = G__30373;
chunk__30338 = G__30374;
count__30339 = G__30375;
i__30340 = G__30376;
continue;
} else {
var vec__30344 = cljs.core.first.call(null,seq__30337__$1);
var name = cljs.core.nth.call(null,vec__30344,(0),null);
var map__30345 = cljs.core.nth.call(null,vec__30344,(1),null);
var map__30345__$1 = ((((!((map__30345 == null)))?((((map__30345.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30345.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30345):map__30345);
var doc = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__30345__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__30377 = cljs.core.next.call(null,seq__30337__$1);
var G__30378 = null;
var G__30379 = (0);
var G__30380 = (0);
seq__30337 = G__30377;
chunk__30338 = G__30378;
count__30339 = G__30379;
i__30340 = G__30380;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map