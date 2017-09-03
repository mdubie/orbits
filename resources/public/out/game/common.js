// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.common');
goog.require('cljs.core');
goog.require('game.constants');
game.common.add_vectors = (function game$common$add_vectors(p__152299,p__152300){
var vec__152303 = p__152299;
var x1 = cljs.core.nth.call(null,vec__152303,(0),null);
var y1 = cljs.core.nth.call(null,vec__152303,(1),null);
var vec__152304 = p__152300;
var x2 = cljs.core.nth.call(null,vec__152304,(0),null);
var y2 = cljs.core.nth.call(null,vec__152304,(1),null);
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
game.common.b1_PLUS_b2__GT_d = (function game$common$b1_PLUS_b2__GT_d(p__152305,p__152306){
var map__152313 = p__152305;
var map__152313__$1 = ((((!((map__152313 == null)))?((((map__152313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152313):map__152313);
var vec__152314 = cljs.core.get.call(null,map__152313__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__152314,(0),null);
var y1 = cljs.core.nth.call(null,vec__152314,(1),null);
var map__152315 = p__152306;
var map__152315__$1 = ((((!((map__152315 == null)))?((((map__152315.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152315.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152315):map__152315);
var vec__152316 = cljs.core.get.call(null,map__152315__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__152316,(0),null);
var y2 = cljs.core.nth.call(null,vec__152316,(1),null);
return Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
});
game.common.p1_PLUS_p2__GT_collision_QMARK_ = (function game$common$p1_PLUS_p2__GT_collision_QMARK_(p__152319,p__152320){
var map__152325 = p__152319;
var map__152325__$1 = ((((!((map__152325 == null)))?((((map__152325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152325):map__152325);
var p1 = map__152325__$1;
var r1 = cljs.core.get.call(null,map__152325__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__152326 = p__152320;
var map__152326__$1 = ((((!((map__152326 == null)))?((((map__152326.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152326.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152326):map__152326);
var p2 = map__152326__$1;
var r2 = cljs.core.get.call(null,map__152326__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (game.common.b1_PLUS_b2__GT_d.call(null,p1,p2) < (r1 + r2));
});
game.common.b1_PLUS_b2__GT_theta = (function game$common$b1_PLUS_b2__GT_theta(p__152329,p__152330){
var map__152337 = p__152329;
var map__152337__$1 = ((((!((map__152337 == null)))?((((map__152337.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152337.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152337):map__152337);
var vec__152338 = cljs.core.get.call(null,map__152337__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__152338,(0),null);
var y1 = cljs.core.nth.call(null,vec__152338,(1),null);
var map__152339 = p__152330;
var map__152339__$1 = ((((!((map__152339 == null)))?((((map__152339.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152339.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152339):map__152339);
var vec__152340 = cljs.core.get.call(null,map__152339__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__152340,(0),null);
var y2 = cljs.core.nth.call(null,vec__152340,(1),null);
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