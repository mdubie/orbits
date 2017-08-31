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
var seq__65954_65968 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65955_65969 = null;
var count__65956_65970 = (0);
var i__65957_65971 = (0);
while(true){
if((i__65957_65971 < count__65956_65970)){
var f_65972 = cljs.core._nth.call(null,chunk__65955_65969,i__65957_65971);
cljs.core.println.call(null,"  ",f_65972);

var G__65973 = seq__65954_65968;
var G__65974 = chunk__65955_65969;
var G__65975 = count__65956_65970;
var G__65976 = (i__65957_65971 + (1));
seq__65954_65968 = G__65973;
chunk__65955_65969 = G__65974;
count__65956_65970 = G__65975;
i__65957_65971 = G__65976;
continue;
} else {
var temp__4425__auto___65977 = cljs.core.seq.call(null,seq__65954_65968);
if(temp__4425__auto___65977){
var seq__65954_65978__$1 = temp__4425__auto___65977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65954_65978__$1)){
var c__17123__auto___65979 = cljs.core.chunk_first.call(null,seq__65954_65978__$1);
var G__65980 = cljs.core.chunk_rest.call(null,seq__65954_65978__$1);
var G__65981 = c__17123__auto___65979;
var G__65982 = cljs.core.count.call(null,c__17123__auto___65979);
var G__65983 = (0);
seq__65954_65968 = G__65980;
chunk__65955_65969 = G__65981;
count__65956_65970 = G__65982;
i__65957_65971 = G__65983;
continue;
} else {
var f_65984 = cljs.core.first.call(null,seq__65954_65978__$1);
cljs.core.println.call(null,"  ",f_65984);

var G__65985 = cljs.core.next.call(null,seq__65954_65978__$1);
var G__65986 = null;
var G__65987 = (0);
var G__65988 = (0);
seq__65954_65968 = G__65985;
chunk__65955_65969 = G__65986;
count__65956_65970 = G__65987;
i__65957_65971 = G__65988;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_65989 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__16320__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_65989);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_65989)))?cljs.core.second.call(null,arglists_65989):arglists_65989));
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
var seq__65958 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__65959 = null;
var count__65960 = (0);
var i__65961 = (0);
while(true){
if((i__65961 < count__65960)){
var vec__65962 = cljs.core._nth.call(null,chunk__65959,i__65961);
var name = cljs.core.nth.call(null,vec__65962,(0),null);
var map__65963 = cljs.core.nth.call(null,vec__65962,(1),null);
var map__65963__$1 = ((((!((map__65963 == null)))?((((map__65963.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65963.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65963):map__65963);
var doc = cljs.core.get.call(null,map__65963__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__65963__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__65990 = seq__65958;
var G__65991 = chunk__65959;
var G__65992 = count__65960;
var G__65993 = (i__65961 + (1));
seq__65958 = G__65990;
chunk__65959 = G__65991;
count__65960 = G__65992;
i__65961 = G__65993;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__65958);
if(temp__4425__auto__){
var seq__65958__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65958__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__65958__$1);
var G__65994 = cljs.core.chunk_rest.call(null,seq__65958__$1);
var G__65995 = c__17123__auto__;
var G__65996 = cljs.core.count.call(null,c__17123__auto__);
var G__65997 = (0);
seq__65958 = G__65994;
chunk__65959 = G__65995;
count__65960 = G__65996;
i__65961 = G__65997;
continue;
} else {
var vec__65965 = cljs.core.first.call(null,seq__65958__$1);
var name = cljs.core.nth.call(null,vec__65965,(0),null);
var map__65966 = cljs.core.nth.call(null,vec__65965,(1),null);
var map__65966__$1 = ((((!((map__65966 == null)))?((((map__65966.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65966.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65966):map__65966);
var doc = cljs.core.get.call(null,map__65966__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists = cljs.core.get.call(null,map__65966__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name);

cljs.core.println.call(null," ",arglists);

if(cljs.core.truth_(doc)){
cljs.core.println.call(null," ",doc);
} else {
}

var G__65998 = cljs.core.next.call(null,seq__65958__$1);
var G__65999 = null;
var G__66000 = (0);
var G__66001 = (0);
seq__65958 = G__65998;
chunk__65959 = G__65999;
count__65960 = G__66000;
i__65961 = G__66001;
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