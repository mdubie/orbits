// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.common');
goog.require('cljs.core');
goog.require('game.constants');
game.common.sum_vectors = (function game$common$sum_vectors(vectors){
return cljs.core.reduce.call(null,(function (p__23795,p__23796){
var vec__23797 = p__23795;
var sum_x = cljs.core.nth.call(null,vec__23797,(0),null);
var sum_y = cljs.core.nth.call(null,vec__23797,(1),null);
var vec__23798 = p__23796;
var x = cljs.core.nth.call(null,vec__23798,(0),null);
var y = cljs.core.nth.call(null,vec__23798,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sum_x + x),(sum_y + y)], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),vectors);
});
game.common.weighted_average = (function game$common$weighted_average(v1,v2,w1,w2){
return (1.0 * (((w1 * v1) + (w2 * v2)) / (w1 + w2)));
});
game.common.abs_rad = (function game$common$abs_rad(rad){
return cljs.core.mod.call(null,(((2) * Math.PI) + rad),((2) * Math.PI));
});
game.common.p1_PLUS_p2__GT_d = (function game$common$p1_PLUS_p2__GT_d(p__23799,p__23800){
var map__23807 = p__23799;
var map__23807__$1 = ((((!((map__23807 == null)))?((((map__23807.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23807.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23807):map__23807);
var vec__23808 = cljs.core.get.call(null,map__23807__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__23808,(0),null);
var y1 = cljs.core.nth.call(null,vec__23808,(1),null);
var map__23809 = p__23800;
var map__23809__$1 = ((((!((map__23809 == null)))?((((map__23809.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23809.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23809):map__23809);
var vec__23810 = cljs.core.get.call(null,map__23809__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__23810,(0),null);
var y2 = cljs.core.nth.call(null,vec__23810,(1),null);
return Math.sqrt((Math.pow((x2 - x1),(2)) + Math.pow((y2 - y1),(2))));
});
game.common.p1_PLUS_p2__GT_a = (function game$common$p1_PLUS_p2__GT_a(p__23813,p__23814){
var map__23822 = p__23813;
var map__23822__$1 = ((((!((map__23822 == null)))?((((map__23822.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23822.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23822):map__23822);
var p1 = map__23822__$1;
var vec__23823 = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__23823,(0),null);
var y1 = cljs.core.nth.call(null,vec__23823,(1),null);
var m1 = cljs.core.get.call(null,map__23822__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var map__23824 = p__23814;
var map__23824__$1 = ((((!((map__23824 == null)))?((((map__23824.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23824.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23824):map__23824);
var p2 = map__23824__$1;
var vec__23825 = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__23825,(0),null);
var y2 = cljs.core.nth.call(null,vec__23825,(1),null);
var m2 = cljs.core.get.call(null,map__23824__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var c = 1.0E-5;
var d = game.common.p1_PLUS_p2__GT_d.call(null,p1,p2);
var grav_f = (((c * m1) * m2) / Math.pow(d,(2)));
var vec__23828 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x2 - x1) / d),((y2 - y1) / d)], null);
var ux = cljs.core.nth.call(null,vec__23828,(0),null);
var uy = cljs.core.nth.call(null,vec__23828,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ux * grav_f) / m1),((uy * grav_f) / m1)], null);
});
game.common.p1_PLUS_p2__GT_collision_QMARK_ = (function game$common$p1_PLUS_p2__GT_collision_QMARK_(p__23829,p__23830){
var map__23835 = p__23829;
var map__23835__$1 = ((((!((map__23835 == null)))?((((map__23835.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23835.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23835):map__23835);
var p1 = map__23835__$1;
var r1 = cljs.core.get.call(null,map__23835__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var map__23836 = p__23830;
var map__23836__$1 = ((((!((map__23836 == null)))?((((map__23836.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23836.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23836):map__23836);
var p2 = map__23836__$1;
var r2 = cljs.core.get.call(null,map__23836__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return (game.common.p1_PLUS_p2__GT_d.call(null,p1,p2) < (r1 + r2));
});
game.common.p1_PLUS_p2__GT_theta = (function game$common$p1_PLUS_p2__GT_theta(p__23839,p__23840){
var map__23847 = p__23839;
var map__23847__$1 = ((((!((map__23847 == null)))?((((map__23847.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23847.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23847):map__23847);
var vec__23848 = cljs.core.get.call(null,map__23847__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__23848,(0),null);
var y1 = cljs.core.nth.call(null,vec__23848,(1),null);
var map__23849 = p__23840;
var map__23849__$1 = ((((!((map__23849 == null)))?((((map__23849.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23849.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23849):map__23849);
var vec__23850 = cljs.core.get.call(null,map__23849__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__23850,(0),null);
var y2 = cljs.core.nth.call(null,vec__23850,(1),null);
return Math.atan2((y2 - y1),(x2 - x1));
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