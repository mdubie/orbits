// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.mechanics');
goog.require('cljs.core');
goog.require('game.common');
game.mechanics.update_body_position = (function game$mechanics$update_body_position(p__79011,dt){
var map__79018 = p__79011;
var map__79018__$1 = ((((!((map__79018 == null)))?((((map__79018.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79018.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79018):map__79018);
var body = map__79018__$1;
var v = cljs.core.get.call(null,map__79018__$1,new cljs.core.Keyword(null,"v","v",21465059));
var s = cljs.core.get.call(null,map__79018__$1,new cljs.core.Keyword(null,"s","s",1705939918));
return cljs.core.update.call(null,cljs.core.update.call(null,body,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,s),new cljs.core.Keyword(null,"s","s",1705939918),((function (map__79018,map__79018__$1,body,v,s){
return (function (p__79020,p__79021){
var vec__79022 = p__79020;
var sx = cljs.core.nth.call(null,vec__79022,(0),null);
var sy = cljs.core.nth.call(null,vec__79022,(1),null);
var vec__79023 = p__79021;
var vx = cljs.core.nth.call(null,vec__79023,(0),null);
var vy = cljs.core.nth.call(null,vec__79023,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (vx * dt)),(sy + (vy * dt))], null);
});})(map__79018,map__79018__$1,body,v,s))
,v);
});
game.mechanics.update_body_velocity = (function game$mechanics$update_body_velocity(p__79024,dt){
var map__79031 = p__79024;
var map__79031__$1 = ((((!((map__79031 == null)))?((((map__79031.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79031.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79031):map__79031);
var body = map__79031__$1;
var a = cljs.core.get.call(null,map__79031__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return cljs.core.update.call(null,body,new cljs.core.Keyword(null,"v","v",21465059),((function (map__79031,map__79031__$1,body,a){
return (function (p__79033,p__79034){
var vec__79035 = p__79033;
var vx = cljs.core.nth.call(null,vec__79035,(0),null);
var vy = cljs.core.nth.call(null,vec__79035,(1),null);
var vec__79036 = p__79034;
var ax = cljs.core.nth.call(null,vec__79036,(0),null);
var ay = cljs.core.nth.call(null,vec__79036,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx + (ax * dt)),(vy + (ay * dt))], null);
});})(map__79031,map__79031__$1,body,a))
,a);
});
game.mechanics.update_body_acceleration = (function game$mechanics$update_body_acceleration(body,planets,dt){
return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"a","a",-2123407586),game.common.sum_vectors.call(null,cljs.core.map.call(null,(function (p1__79038_SHARP_){
return game.common.b1_PLUS_b2__GT_a.call(null,body,p1__79038_SHARP_);
}),cljs.core.remove.call(null,(function (p1__79037_SHARP_){
return cljs.core._EQ_.call(null,body,p1__79037_SHARP_);
}),planets))));
});
game.mechanics.merge_color = (function game$mechanics$merge_color(c1,m1,c2,m2){
return [cljs.core.str("#"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (c1__$1,c2__$1){
return game.common.index__GT_color.call(null,game.common.weighted_average.call(null,game.common.color__GT_index.call(null,c1__$1),game.common.color__GT_index.call(null,c2__$1),m1,m2));
}),cljs.core.drop.call(null,(1),c1),cljs.core.drop.call(null,(1),c2))))].join('');
});
game.mechanics.merge_colors = (function game$mechanics$merge_colors(p__79039,p__79040){
var map__79045 = p__79039;
var map__79045__$1 = ((((!((map__79045 == null)))?((((map__79045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79045):map__79045);
var m1 = cljs.core.get.call(null,map__79045__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var colors1 = cljs.core.get.call(null,map__79045__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var map__79046 = p__79040;
var map__79046__$1 = ((((!((map__79046 == null)))?((((map__79046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79046):map__79046);
var m2 = cljs.core.get.call(null,map__79046__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var colors2 = cljs.core.get.call(null,map__79046__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
return cljs.core.mapv.call(null,((function (map__79045,map__79045__$1,m1,colors1,map__79046,map__79046__$1,m2,colors2){
return (function (color1,color2){
return game.mechanics.merge_color.call(null,color1,m1,color2,m2);
});})(map__79045,map__79045__$1,m1,colors1,map__79046,map__79046__$1,m2,colors2))
,colors1,colors2);
});
game.mechanics.merge_planets = (function game$mechanics$merge_planets(p__79049,p__79050){
var map__79057 = p__79049;
var map__79057__$1 = ((((!((map__79057 == null)))?((((map__79057.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79057.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79057):map__79057);
var p1 = map__79057__$1;
var m1 = cljs.core.get.call(null,map__79057__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var r1 = cljs.core.get.call(null,map__79057__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__79058 = cljs.core.get.call(null,map__79057__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx1 = cljs.core.nth.call(null,vec__79058,(0),null);
var vy1 = cljs.core.nth.call(null,vec__79058,(1),null);
var map__79059 = p__79050;
var map__79059__$1 = ((((!((map__79059 == null)))?((((map__79059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79059):map__79059);
var p2 = map__79059__$1;
var m2 = cljs.core.get.call(null,map__79059__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var r2 = cljs.core.get.call(null,map__79059__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__79060 = cljs.core.get.call(null,map__79059__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx2 = cljs.core.nth.call(null,vec__79060,(0),null);
var vy2 = cljs.core.nth.call(null,vec__79060,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511).cljs$core$IFn$_invoke$arity$1(p1),(m1 + m2),game.common.r1_PLUS_r2__GT_r.call(null,r1,r2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.common.weighted_average.call(null,vx1,vx2,m1,m2),game.common.weighted_average.call(null,vy1,vy2,m1,m2)], null),game.mechanics.merge_colors.call(null,p1,p2),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]);
});
game.mechanics.planets__GT_remaining_planets = (function game$mechanics$planets__GT_remaining_planets(p__79064,planets){
var vec__79070 = p__79064;
var map__79071 = cljs.core.nth.call(null,vec__79070,(0),null);
var map__79071__$1 = ((((!((map__79071 == null)))?((((map__79071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79071):map__79071);
var p1 = map__79071__$1;
var m1 = cljs.core.get.call(null,map__79071__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var uuid1 = cljs.core.get.call(null,map__79071__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var map__79072 = cljs.core.nth.call(null,vec__79070,(1),null);
var map__79072__$1 = ((((!((map__79072 == null)))?((((map__79072.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79072.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79072):map__79072);
var p2 = map__79072__$1;
var m2 = cljs.core.get.call(null,map__79072__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var uuid2 = cljs.core.get.call(null,map__79072__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
return cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__79070,map__79071,map__79071__$1,p1,m1,uuid1,map__79072,map__79072__$1,p2,m2,uuid2){
return (function (p1__79063_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([uuid1,uuid2], true),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__79063_SHARP_));
});})(vec__79070,map__79071,map__79071__$1,p1,m1,uuid1,map__79072,map__79072__$1,p2,m2,uuid2))
,planets),(((m1 > m2))?game.mechanics.merge_planets.call(null,p1,p2):game.mechanics.merge_planets.call(null,p2,p1))));
});
game.mechanics.planets__GT_collided_planets = (function game$mechanics$planets__GT_collided_planets(planets){
return cljs.core.filterv.call(null,(function (p__79080){
var map__79081 = p__79080;
var map__79081__$1 = ((((!((map__79081 == null)))?((((map__79081.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79081.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79081):map__79081);
var p = map__79081__$1;
var uuid = cljs.core.get.call(null,map__79081__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var r = cljs.core.get.call(null,map__79081__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return cljs.core.some_QMARK_.call(null,cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__79081,map__79081__$1,p,uuid,r){
return (function (p1__79076_SHARP_){
return game.common.p1_PLUS_p2__GT_collision_QMARK_.call(null,p,p1__79076_SHARP_);
});})(map__79081,map__79081__$1,p,uuid,r))
,cljs.core.remove.call(null,((function (map__79081,map__79081__$1,p,uuid,r){
return (function (p1__79075_SHARP_){
return cljs.core._EQ_.call(null,uuid,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__79075_SHARP_));
});})(map__79081,map__79081__$1,p,uuid,r))
,planets))));
}),planets);
});
game.mechanics.handle_planet_collisions = (function game$mechanics$handle_planet_collisions(planets){
var collided_planets = game.mechanics.planets__GT_collided_planets.call(null,planets);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,collided_planets))){
return game.mechanics.planets__GT_remaining_planets.call(null,collided_planets,planets);
} else {
return planets;
}
});
game.mechanics.update_planets = (function game$mechanics$update_planets(planets,dt){
return cljs.core.mapv.call(null,(function (p1__79085_SHARP_){
return game.mechanics.update_body_position.call(null,p1__79085_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__79084_SHARP_){
return game.mechanics.update_body_velocity.call(null,p1__79084_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__79083_SHARP_){
return game.mechanics.update_body_acceleration.call(null,p1__79083_SHARP_,planets,dt);
}),game.mechanics.handle_planet_collisions.call(null,planets))));
});
game.mechanics.update_thrust_acceleration = (function game$mechanics$update_thrust_acceleration(p__79086,dt){
var map__79091 = p__79086;
var map__79091__$1 = ((((!((map__79091 == null)))?((((map__79091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__79091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__79091):map__79091);
var ship = map__79091__$1;
var vec__79092 = cljs.core.get.call(null,map__79091__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var ax = cljs.core.nth.call(null,vec__79092,(0),null);
var ay = cljs.core.nth.call(null,vec__79092,(1),null);
var mass = cljs.core.get.call(null,map__79091__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var theta = cljs.core.get.call(null,map__79091__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var a = cljs.core.get.call(null,map__79091__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var vec__79094 = game.common.theta__GT_unit_vector.call(null,theta);
var ux = cljs.core.nth.call(null,vec__79094,(0),null);
var uy = cljs.core.nth.call(null,vec__79094,(1),null);
var thrust = 1.0;
var thrust_c = 1.0E-6;
var thrust_a = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((ux * thrust) * thrust_c) / mass),(((uy * thrust) * thrust_c) / mass)], null);
return cljs.core.update.call(null,cljs.core.assoc.call(null,ship,new cljs.core.Keyword(null,"thrust","thrust",651754168),thrust),new cljs.core.Keyword(null,"a","a",-2123407586),game.common.add_vectors,thrust_a);
});
game.mechanics.update_ships = (function game$mechanics$update_ships(ships,planets,dt){
return cljs.core.mapv.call(null,(function (p1__79098_SHARP_){
return game.mechanics.update_body_position.call(null,p1__79098_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__79097_SHARP_){
return game.mechanics.update_body_velocity.call(null,p1__79097_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__79096_SHARP_){
return game.mechanics.update_thrust_acceleration.call(null,p1__79096_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__79095_SHARP_){
return game.mechanics.update_body_acceleration.call(null,p1__79095_SHARP_,planets,dt);
}),ships))));
});

//# sourceMappingURL=mechanics.js.map