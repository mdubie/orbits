// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.mechanics');
goog.require('cljs.core');
goog.require('game.common');
game.mechanics.update_body_position = (function game$mechanics$update_body_position(p__152532,dt){
var map__152539 = p__152532;
var map__152539__$1 = ((((!((map__152539 == null)))?((((map__152539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152539):map__152539);
var body = map__152539__$1;
var v = cljs.core.get.call(null,map__152539__$1,new cljs.core.Keyword(null,"v","v",21465059));
var s = cljs.core.get.call(null,map__152539__$1,new cljs.core.Keyword(null,"s","s",1705939918));
return cljs.core.update.call(null,cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"path","path",-188191168),s),new cljs.core.Keyword(null,"s","s",1705939918),((function (map__152539,map__152539__$1,body,v,s){
return (function (p__152541,p__152542){
var vec__152543 = p__152541;
var sx = cljs.core.nth.call(null,vec__152543,(0),null);
var sy = cljs.core.nth.call(null,vec__152543,(1),null);
var vec__152544 = p__152542;
var vx = cljs.core.nth.call(null,vec__152544,(0),null);
var vy = cljs.core.nth.call(null,vec__152544,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (vx * dt)),(sy + (vy * dt))], null);
});})(map__152539,map__152539__$1,body,v,s))
,v);
});
game.mechanics.update_body_velocity = (function game$mechanics$update_body_velocity(p__152545,dt){
var map__152552 = p__152545;
var map__152552__$1 = ((((!((map__152552 == null)))?((((map__152552.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152552.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152552):map__152552);
var body = map__152552__$1;
var a = cljs.core.get.call(null,map__152552__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return cljs.core.update.call(null,body,new cljs.core.Keyword(null,"v","v",21465059),((function (map__152552,map__152552__$1,body,a){
return (function (p__152554,p__152555){
var vec__152556 = p__152554;
var vx = cljs.core.nth.call(null,vec__152556,(0),null);
var vy = cljs.core.nth.call(null,vec__152556,(1),null);
var vec__152557 = p__152555;
var ax = cljs.core.nth.call(null,vec__152557,(0),null);
var ay = cljs.core.nth.call(null,vec__152557,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx + (ax * dt)),(vy + (ay * dt))], null);
});})(map__152552,map__152552__$1,body,a))
,a);
});
game.mechanics.b1_PLUS_b2__GT_a = (function game$mechanics$b1_PLUS_b2__GT_a(p__152558,p__152559){
var map__152567 = p__152558;
var map__152567__$1 = ((((!((map__152567 == null)))?((((map__152567.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152567.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152567):map__152567);
var b1 = map__152567__$1;
var vec__152568 = cljs.core.get.call(null,map__152567__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__152568,(0),null);
var y1 = cljs.core.nth.call(null,vec__152568,(1),null);
var m1 = cljs.core.get.call(null,map__152567__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var map__152569 = p__152559;
var map__152569__$1 = ((((!((map__152569 == null)))?((((map__152569.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152569.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152569):map__152569);
var b2 = map__152569__$1;
var vec__152570 = cljs.core.get.call(null,map__152569__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x2 = cljs.core.nth.call(null,vec__152570,(0),null);
var y2 = cljs.core.nth.call(null,vec__152570,(1),null);
var m2 = cljs.core.get.call(null,map__152569__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var c = 1.0E-5;
var d = game.common.b1_PLUS_b2__GT_d.call(null,b1,b2);
var grav_f = (((c * m1) * m2) / Math.pow(d,(2)));
var vec__152573 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((x2 - x1) / d),((y2 - y1) / d)], null);
var ux = cljs.core.nth.call(null,vec__152573,(0),null);
var uy = cljs.core.nth.call(null,vec__152573,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((ux * grav_f) / m1),((uy * grav_f) / m1)], null);
});
game.mechanics.update_body_acceleration = (function game$mechanics$update_body_acceleration(body,planets){
return cljs.core.assoc.call(null,body,new cljs.core.Keyword(null,"a","a",-2123407586),game.common.sum_vectors.call(null,cljs.core.map.call(null,(function (p1__152575_SHARP_){
return game.mechanics.b1_PLUS_b2__GT_a.call(null,body,p1__152575_SHARP_);
}),cljs.core.remove.call(null,(function (p1__152574_SHARP_){
return cljs.core._EQ_.call(null,body,p1__152574_SHARP_);
}),planets))));
});
game.mechanics.merge_color = (function game$mechanics$merge_color(c1,m1,c2,m2){
return [cljs.core.str("#"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (c1__$1,c2__$1){
return game.common.index__GT_color.call(null,game.common.weighted_average.call(null,game.common.color__GT_index.call(null,c1__$1),game.common.color__GT_index.call(null,c2__$1),m1,m2));
}),cljs.core.drop.call(null,(1),c1),cljs.core.drop.call(null,(1),c2))))].join('');
});
game.mechanics.merge_colors = (function game$mechanics$merge_colors(p__152576,p__152577){
var map__152582 = p__152576;
var map__152582__$1 = ((((!((map__152582 == null)))?((((map__152582.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152582.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152582):map__152582);
var m1 = cljs.core.get.call(null,map__152582__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var colors1 = cljs.core.get.call(null,map__152582__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var map__152583 = p__152577;
var map__152583__$1 = ((((!((map__152583 == null)))?((((map__152583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152583):map__152583);
var m2 = cljs.core.get.call(null,map__152583__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var colors2 = cljs.core.get.call(null,map__152583__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
return cljs.core.mapv.call(null,((function (map__152582,map__152582__$1,m1,colors1,map__152583,map__152583__$1,m2,colors2){
return (function (color1,color2){
return game.mechanics.merge_color.call(null,color1,m1,color2,m2);
});})(map__152582,map__152582__$1,m1,colors1,map__152583,map__152583__$1,m2,colors2))
,colors1,colors2);
});
game.mechanics.merge_planets = (function game$mechanics$merge_planets(p__152586,p__152587){
var map__152594 = p__152586;
var map__152594__$1 = ((((!((map__152594 == null)))?((((map__152594.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152594.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152594):map__152594);
var p1 = map__152594__$1;
var m1 = cljs.core.get.call(null,map__152594__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var r1 = cljs.core.get.call(null,map__152594__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__152595 = cljs.core.get.call(null,map__152594__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx1 = cljs.core.nth.call(null,vec__152595,(0),null);
var vy1 = cljs.core.nth.call(null,vec__152595,(1),null);
var map__152596 = p__152587;
var map__152596__$1 = ((((!((map__152596 == null)))?((((map__152596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152596):map__152596);
var p2 = map__152596__$1;
var m2 = cljs.core.get.call(null,map__152596__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var r2 = cljs.core.get.call(null,map__152596__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__152597 = cljs.core.get.call(null,map__152596__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx2 = cljs.core.nth.call(null,vec__152597,(0),null);
var vy2 = cljs.core.nth.call(null,vec__152597,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511).cljs$core$IFn$_invoke$arity$1(p1),(m1 + m2),game.common.r1_PLUS_r2__GT_r.call(null,r1,r2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.common.weighted_average.call(null,vx1,vx2,m1,m2),game.common.weighted_average.call(null,vy1,vy2,m1,m2)], null),game.mechanics.merge_colors.call(null,p1,p2),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]);
});
game.mechanics.planets__GT_remaining_planets = (function game$mechanics$planets__GT_remaining_planets(p__152601,planets){
var vec__152607 = p__152601;
var map__152608 = cljs.core.nth.call(null,vec__152607,(0),null);
var map__152608__$1 = ((((!((map__152608 == null)))?((((map__152608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152608):map__152608);
var p1 = map__152608__$1;
var m1 = cljs.core.get.call(null,map__152608__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var uuid1 = cljs.core.get.call(null,map__152608__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var map__152609 = cljs.core.nth.call(null,vec__152607,(1),null);
var map__152609__$1 = ((((!((map__152609 == null)))?((((map__152609.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152609.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152609):map__152609);
var p2 = map__152609__$1;
var m2 = cljs.core.get.call(null,map__152609__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var uuid2 = cljs.core.get.call(null,map__152609__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
return cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__152607,map__152608,map__152608__$1,p1,m1,uuid1,map__152609,map__152609__$1,p2,m2,uuid2){
return (function (p1__152600_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([uuid1,uuid2], true),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__152600_SHARP_));
});})(vec__152607,map__152608,map__152608__$1,p1,m1,uuid1,map__152609,map__152609__$1,p2,m2,uuid2))
,planets),(((m1 > m2))?game.mechanics.merge_planets.call(null,p1,p2):game.mechanics.merge_planets.call(null,p2,p1))));
});
game.mechanics.planets__GT_collided_planets = (function game$mechanics$planets__GT_collided_planets(planets){
return cljs.core.filterv.call(null,(function (p__152617){
var map__152618 = p__152617;
var map__152618__$1 = ((((!((map__152618 == null)))?((((map__152618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152618):map__152618);
var p = map__152618__$1;
var uuid = cljs.core.get.call(null,map__152618__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var r = cljs.core.get.call(null,map__152618__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return cljs.core.some_QMARK_.call(null,cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__152618,map__152618__$1,p,uuid,r){
return (function (p1__152613_SHARP_){
return game.common.p1_PLUS_p2__GT_collision_QMARK_.call(null,p,p1__152613_SHARP_);
});})(map__152618,map__152618__$1,p,uuid,r))
,cljs.core.remove.call(null,((function (map__152618,map__152618__$1,p,uuid,r){
return (function (p1__152612_SHARP_){
return cljs.core._EQ_.call(null,uuid,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__152612_SHARP_));
});})(map__152618,map__152618__$1,p,uuid,r))
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
return cljs.core.mapv.call(null,(function (p1__152622_SHARP_){
return game.mechanics.update_body_position.call(null,p1__152622_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__152621_SHARP_){
return game.mechanics.update_body_velocity.call(null,p1__152621_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__152620_SHARP_){
return game.mechanics.update_body_acceleration.call(null,p1__152620_SHARP_,planets);
}),game.mechanics.handle_planet_collisions.call(null,planets))));
});
game.mechanics.update_thrust_acceleration = (function game$mechanics$update_thrust_acceleration(p__152623){
var map__152628 = p__152623;
var map__152628__$1 = ((((!((map__152628 == null)))?((((map__152628.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152628.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152628):map__152628);
var ship = map__152628__$1;
var vec__152629 = cljs.core.get.call(null,map__152628__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var ax = cljs.core.nth.call(null,vec__152629,(0),null);
var ay = cljs.core.nth.call(null,vec__152629,(1),null);
var thrust = cljs.core.get.call(null,map__152628__$1,new cljs.core.Keyword(null,"thrust","thrust",651754168));
var mass = cljs.core.get.call(null,map__152628__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var theta = cljs.core.get.call(null,map__152628__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var a = cljs.core.get.call(null,map__152628__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var vec__152631 = game.common.theta__GT_unit_vector.call(null,theta);
var ux = cljs.core.nth.call(null,vec__152631,(0),null);
var uy = cljs.core.nth.call(null,vec__152631,(1),null);
var thrust_c = 1.0E-10;
var thrust_a = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(((ux * thrust) * thrust_c) / mass),(((uy * thrust) * thrust_c) / mass)], null);
return cljs.core.update.call(null,ship,new cljs.core.Keyword(null,"a","a",-2123407586),game.common.add_vectors,thrust_a);
});
game.mechanics.rotate_ship_BANG_ = (function game$mechanics$rotate_ship_BANG_(ships,val){
return cljs.core.mapv.call(null,(function (p1__152632_SHARP_){
return cljs.core.update.call(null,p1__152632_SHARP_,new cljs.core.Keyword(null,"theta","theta",-427510258),cljs.core._PLUS_,((val * Math.PI) * 0.03));
}),ships);
});
game.mechanics.thrust_ship_BANG_ = (function game$mechanics$thrust_ship_BANG_(ships,val){
return cljs.core.mapv.call(null,(function (p1__152633_SHARP_){
return cljs.core.assoc.call(null,p1__152633_SHARP_,new cljs.core.Keyword(null,"thrust","thrust",651754168),val);
}),ships);
});
game.mechanics.update_ships = (function game$mechanics$update_ships(ships,planets,dt){
return cljs.core.mapv.call(null,(function (p1__152637_SHARP_){
return game.mechanics.update_body_position.call(null,p1__152637_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__152636_SHARP_){
return game.mechanics.update_body_velocity.call(null,p1__152636_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__152635_SHARP_){
return game.mechanics.update_thrust_acceleration.call(null,p1__152635_SHARP_);
}),cljs.core.mapv.call(null,(function (p1__152634_SHARP_){
return game.mechanics.update_body_acceleration.call(null,p1__152634_SHARP_,planets);
}),ships))));
});

//# sourceMappingURL=mechanics.js.map