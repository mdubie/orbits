// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.common');
goog.require('cljs.core');
goog.require('game.constants');
game.common.add_vectors = (function game$common$add_vectors(p__77248,p__77249){
var vec__77252 = p__77248;
var x1 = cljs.core.nth.call(null,vec__77252,(0),null);
var y1 = cljs.core.nth.call(null,vec__77252,(1),null);
var vec__77253 = p__77249;
var x2 = cljs.core.nth.call(null,vec__77253,(0),null);
var y2 = cljs.core.nth.call(null,vec__77253,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(x1 + x2),(y1 + y2)], null);
});
game.common.sum_vectors = (function game$common$sum_vectors(vectors){
return cljs.core.reduce.call(null,game.common.add_vectors,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),vectors);
});
game.common.weighted_average = (function game$common$weighted_average(v1,v2,w1,w2){
return (1.0 * (((w1 * v1) + (w2 * v2)) / (w1 + w2)));
});
game.common.abs_rad = (function game$common$abs_rad(rad){
return cljs.core.mod.call(null,(((2) * Math.PI) + rad),((2) * Math.PI));
});
game.common.b1_PLUS_b2__GT_d = (function game$common$b1_PLUS_b2__GT_d(p__77254,p__77255){
var map__77262 = p__77254;
var map__77262__$1 = ((((!((map__77262 == null)))?((((map__77262.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77262.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77262):map__77262);
var vec__77263 = cljs.core.get.call(null,map__77262__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__77263,(0),null);
var y1 = cljs.core.nth.call(null,vec__77263,(1),null);
var map__77264 = p__77255;
var map__77264__$1 = ((((!((map__77264 == null)))?((((map__77264.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77264.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77264):map__77264);
var vec__77265 = cljs.core.get.call(null,map__77264__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__77265,(0),null);
var y2 = cljs.core.nth.call(null,vec__77265,(1),null);
return Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
});
game.common.b1_PLUS_b2__GT_a = (function game$common$b1_PLUS_b2__GT_a(p__77268,p__77269){
var map__77277 = p__77268;
var map__77277__$1 = ((((!((map__77277 == null)))?((((map__77277.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77277.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77277):map__77277);
var b1 = map__77277__$1;
var vec__77278 = cljs.core.get.call(null,map__77277__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__77278,(0),null);
var y1 = cljs.core.nth.call(null,vec__77278,(1),null);
var m1 = cljs.core.get.call(null,map__77277__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var map__77279 = p__77269;
var map__77279__$1 = ((((!((map__77279 == null)))?((((map__77279.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77279.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77279):map__77279);
var b2 = map__77279__$1;
var vec__77280 = cljs.core.get.call(null,map__77279__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__77280,(0),null);
var y2 = cljs.core.nth.call(null,vec__77280,(1),null);
var m2 = cljs.core.get.call(null,map__77279__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var c = 1.0E-5;
var d = game.common.b1_PLUS_b2__GT_d.call(null,b1,b2);
var grav_f = (((c * m1) * m2) / Math.pow(d,(2)));
var vec__77283 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x2 - x1) / d),((y2 - y1) / d)], null);
var ux = cljs.core.nth.call(null,vec__77283,(0),null);
var uy = cljs.core.nth.call(null,vec__77283,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ux * grav_f) / m1),((uy * grav_f) / m1)], null);
});
game.common.p1_PLUS_p2__GT_collision_QMARK_ = (function game$common$p1_PLUS_p2__GT_collision_QMARK_(p__77284,p__77285){
var map__77290 = p__77284;
var map__77290__$1 = ((((!((map__77290 == null)))?((((map__77290.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77290.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77290):map__77290);
var p1 = map__77290__$1;
var r1 = cljs.core.get.call(null,map__77290__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__77291 = p__77285;
var map__77291__$1 = ((((!((map__77291 == null)))?((((map__77291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77291):map__77291);
var p2 = map__77291__$1;
var r2 = cljs.core.get.call(null,map__77291__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (game.common.b1_PLUS_b2__GT_d.call(null,p1,p2) < (r1 + r2));
});
game.common.b1_PLUS_b2__GT_theta = (function game$common$b1_PLUS_b2__GT_theta(p__77294,p__77295){
var map__77302 = p__77294;
var map__77302__$1 = ((((!((map__77302 == null)))?((((map__77302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77302):map__77302);
var vec__77303 = cljs.core.get.call(null,map__77302__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__77303,(0),null);
var y1 = cljs.core.nth.call(null,vec__77303,(1),null);
var map__77304 = p__77295;
var map__77304__$1 = ((((!((map__77304 == null)))?((((map__77304.cljs$lang$protocol_mask$partition0$ & (64))) || (map__77304.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__77304):map__77304);
var vec__77305 = cljs.core.get.call(null,map__77304__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__77305,(0),null);
var y2 = cljs.core.nth.call(null,vec__77305,(1),null);
return Math.atan2((y2 - y1),(x2 - x1));
});
game.common.theta__GT_unit_vector = (function game$common$theta__GT_unit_vector(theta){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [Math.cos(theta),(- Math.sin(theta))], null);
});
game.common.r1_PLUS_r2__GT_r = (function game$common$r1_PLUS_r2__GT_r(r1,r2){
return Math.sqrt(((((Math.PI * r1) * r1) + ((Math.PI * r2) * r2)) / Math.PI));
});
game.common.color__GT_index = (function game$common$color__GT_index(color){
return cljs.core.last.call(null,cljs.core.keep_indexed.call(null,(function (i,c){
if(cljs.core._EQ_.call(null,[cljs.core.str(color)].join(''),c)){
return i;
} else {
return null;
}
}),game.constants.colors));
});
game.common.index__GT_color = (function game$common$index__GT_color(i){
return cljs.core.nth.call(null,game.constants.colors,(Math.floor(i) | (0)));
});

//# sourceMappingURL=common.js.map