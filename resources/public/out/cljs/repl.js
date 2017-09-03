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
var seq__154937_154951 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__154938_154952 = null;
var count__154939_154953 = (0);
var i__154940_154954 = (0);
while(true){
if((i__154940_154954 < count__154939_154953)){
var f_154955 = cljs.core._nth.call(null,chunk__154938_154952,i__154940_154954);
cljs.core.println.call(null,"  ",f_154955);

var G__154956 = seq__154937_154951;
var G__154957 = chunk__154938_154952;
var G__154958 = count__154939_154953;
var G__154959 = (i__154940_154954 + (1));
seq__154937_154951 = G__154956;
chunk__154938_154952 = G__154957;
count__154939_154953 = G__154958;
i__154940_154954 = G__154959;
continue;
} else {
var temp__4425__auto___154960 = cljs.core.seq.call(null,seq__154937_154951);
if(temp__4425__auto___154960){
var seq__154937_154961__$1 = temp__4425__auto___154960;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154937_154961__$1)){
var c__17123__auto___154962 = cljs.core.chunk_first.call(null,seq__154937_154961__$1);
var G__154963 = cljs.core.chunk_rest.call(null,seq__154937_154961__$1);
var G__154964 = c__17123__auto___154962;
var G__154965 = cljs.core.count.call(null,c__17123__auto___154962);
var G__154966 = (0);
seq__154937_154951 = G__154963;
chunk__154938_154952 = G__154964;
count__154939_154953 = G__154965;
i__154940_154954 = G__154966;
continue;
} else {
var f_154967 = cljs.core.first.call(null,seq__154937_154961__$1);
cljs.core.println.call(null,"  ",f_154967);

var G__154968 = cljs.core.next.call(null,seq__154937_154961__$1);
var G__154969 = null;
var G__154970 = (0);
var G__154971 = (0);
seq__154937_154951 = G__154968;
chunk__154938_154952 = G__154969;
count__154939_154953 = G__154970;
i__154940_154954 = G__154971;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_154972 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16320__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_154972);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_154972)))?cljs.core.second.call(null,arglists_154972):arglists_154972));
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
var seq__154941 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__154942 = null;
var count__154943 = (0);
var i__154944 = (0);
while(true){
if((i__154944 < count__154943)){
var vec__154945 = cljs.core._nth.call(null,chunk__154942,i__154944);
var name = cljs.core.nth.call(null,vec__154945,(0),null);
var map__154946 = cljs.core.nth.call(null,vec__154945,(1),null);
var map__154946__$1 = ((((!((map__154946 == null)))?((((map__154946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154946):map__154946);
var doc = cljs.core.get.call(null,map__154946__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__154946__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__154973 = seq__154941;
var G__154974 = chunk__154942;
var G__154975 = count__154943;
var G__154976 = (i__154944 + (1));
seq__154941 = G__154973;
chunk__154942 = G__154974;
count__154943 = G__154975;
i__154944 = G__154976;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__154941);
if(temp__4425__auto__){
var seq__154941__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154941__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__154941__$1);
var G__154977 = cljs.core.chunk_rest.call(null,seq__154941__$1);
var G__154978 = c__17123__auto__;
var G__154979 = cljs.core.count.call(null,c__17123__auto__);
var G__154980 = (0);
seq__154941 = G__154977;
chunk__154942 = G__154978;
count__154943 = G__154979;
i__154944 = G__154980;
continue;
} else {
var vec__154948 = cljs.core.first.call(null,seq__154941__$1);
var name = cljs.core.nth.call(null,vec__154948,(0),null);
var map__154949 = cljs.core.nth.call(null,vec__154948,(1),null);
var map__154949__$1 = ((((!((map__154949 == null)))?((((map__154949.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154949.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154949):map__154949);
var doc = cljs.core.get.call(null,map__154949__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__154949__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__154981 = cljs.core.next.call(null,seq__154941__$1);
var G__154982 = null;
var G__154983 = (0);
var G__154984 = (0);
seq__154941 = G__154981;
chunk__154942 = G__154982;
count__154943 = G__154983;
i__154944 = G__154984;
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