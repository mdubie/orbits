// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.mechanics');
goog.require('cljs.core');
goog.require('game.common');
game.mechanics.update_planet_position = (function game$mechanics$update_planet_position(p__23993,dt){
var map__24000 = p__23993;
var map__24000__$1 = ((((!((map__24000 == null)))?((((map__24000.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24000.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24000):map__24000);
var planet = map__24000__$1;
var v = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"v","v",21465059));
var s = cljs.core.get.call(null,map__24000__$1,new cljs.core.Keyword(null,"s","s",1705939918));
return cljs.core.update.call(null,cljs.core.update.call(null,planet,new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.conj,s),new cljs.core.Keyword(null,"s","s",1705939918),((function (map__24000,map__24000__$1,planet,v,s){
return (function (p__24002,p__24003){
var vec__24004 = p__24002;
var sx = cljs.core.nth.call(null,vec__24004,(0),null);
var sy = cljs.core.nth.call(null,vec__24004,(1),null);
var vec__24005 = p__24003;
var vx = cljs.core.nth.call(null,vec__24005,(0),null);
var vy = cljs.core.nth.call(null,vec__24005,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(sx + (vx * dt)),(sy + (vy * dt))], null);
});})(map__24000,map__24000__$1,planet,v,s))
,v);
});
game.mechanics.update_planet_velocity = (function game$mechanics$update_planet_velocity(p__24006,dt){
var map__24013 = p__24006;
var map__24013__$1 = ((((!((map__24013 == null)))?((((map__24013.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24013.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24013):map__24013);
var planet = map__24013__$1;
var a = cljs.core.get.call(null,map__24013__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
return cljs.core.update.call(null,planet,new cljs.core.Keyword(null,"v","v",21465059),((function (map__24013,map__24013__$1,planet,a){
return (function (p__24015,p__24016){
var vec__24017 = p__24015;
var vx = cljs.core.nth.call(null,vec__24017,(0),null);
var vy = cljs.core.nth.call(null,vec__24017,(1),null);
var vec__24018 = p__24016;
var ax = cljs.core.nth.call(null,vec__24018,(0),null);
var ay = cljs.core.nth.call(null,vec__24018,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(vx + (ax * dt)),(vy + (ay * dt))], null);
});})(map__24013,map__24013__$1,planet,a))
,a);
});
game.mechanics.update_planet_acceleration = (function game$mechanics$update_planet_acceleration(p__24021,planets,dt){
var map__24024 = p__24021;
var map__24024__$1 = ((((!((map__24024 == null)))?((((map__24024.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24024.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24024):map__24024);
var p = map__24024__$1;
var uuid = cljs.core.get.call(null,map__24024__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
return cljs.core.assoc.call(null,p,new cljs.core.Keyword(null,"a","a",-2123407586),game.common.sum_vectors.call(null,cljs.core.map.call(null,((function (map__24024,map__24024__$1,p,uuid){
return (function (p1__24020_SHARP_){
return game.common.p1_PLUS_p2__GT_a.call(null,p,p1__24020_SHARP_);
});})(map__24024,map__24024__$1,p,uuid))
,cljs.core.remove.call(null,((function (map__24024,map__24024__$1,p,uuid){
return (function (p1__24019_SHARP_){
return cljs.core._EQ_.call(null,uuid,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__24019_SHARP_));
});})(map__24024,map__24024__$1,p,uuid))
,planets))));
});
game.mechanics.merge_color = (function game$mechanics$merge_color(c1,m1,c2,m2){
return [cljs.core.str("#"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.map.call(null,(function (c1__$1,c2__$1){
return game.common.index__GT_color.call(null,game.common.weighted_average.call(null,game.common.color__GT_index.call(null,c1__$1),game.common.color__GT_index.call(null,c2__$1),m1,m2));
}),cljs.core.drop.call(null,(1),c1),cljs.core.drop.call(null,(1),c2))))].join('');
});
game.mechanics.merge_colors = (function game$mechanics$merge_colors(p__24026,p__24027){
var map__24032 = p__24026;
var map__24032__$1 = ((((!((map__24032 == null)))?((((map__24032.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24032.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24032):map__24032);
var m1 = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var colors1 = cljs.core.get.call(null,map__24032__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var map__24033 = p__24027;
var map__24033__$1 = ((((!((map__24033 == null)))?((((map__24033.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24033.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24033):map__24033);
var m2 = cljs.core.get.call(null,map__24033__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var colors2 = cljs.core.get.call(null,map__24033__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
return cljs.core.mapv.call(null,((function (map__24032,map__24032__$1,m1,colors1,map__24033,map__24033__$1,m2,colors2){
return (function (color1,color2){
return game.mechanics.merge_color.call(null,color1,m1,color2,m2);
});})(map__24032,map__24032__$1,m1,colors1,map__24033,map__24033__$1,m2,colors2))
,colors1,colors2);
});
game.mechanics.merge_planets = (function game$mechanics$merge_planets(p__24036,p__24037){
var map__24044 = p__24036;
var map__24044__$1 = ((((!((map__24044 == null)))?((((map__24044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24044):map__24044);
var p1 = map__24044__$1;
var m1 = cljs.core.get.call(null,map__24044__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var r1 = cljs.core.get.call(null,map__24044__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__24045 = cljs.core.get.call(null,map__24044__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx1 = cljs.core.nth.call(null,vec__24045,(0),null);
var vy1 = cljs.core.nth.call(null,vec__24045,(1),null);
var map__24046 = p__24037;
var map__24046__$1 = ((((!((map__24046 == null)))?((((map__24046.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24046.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24046):map__24046);
var p2 = map__24046__$1;
var m2 = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var r2 = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var vec__24047 = cljs.core.get.call(null,map__24046__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx2 = cljs.core.nth.call(null,vec__24047,(0),null);
var vy2 = cljs.core.nth.call(null,vec__24047,(1),null);
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511).cljs$core$IFn$_invoke$arity$1(p1),(m1 + m2),game.common.r1_PLUS_r2__GT_r.call(null,r1,r2),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.common.weighted_average.call(null,vx1,vx2,m1,m2),game.common.weighted_average.call(null,vy1,vy2,m1,m2)], null),game.mechanics.merge_colors.call(null,p1,p2),new cljs.core.Keyword(null,"s","s",1705939918).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]);
});
game.mechanics.planets__GT_remaining_planets = (function game$mechanics$planets__GT_remaining_planets(p__24051,planets){
var vec__24057 = p__24051;
var map__24058 = cljs.core.nth.call(null,vec__24057,(0),null);
var map__24058__$1 = ((((!((map__24058 == null)))?((((map__24058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24058):map__24058);
var p1 = map__24058__$1;
var m1 = cljs.core.get.call(null,map__24058__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var uuid1 = cljs.core.get.call(null,map__24058__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var map__24059 = cljs.core.nth.call(null,vec__24057,(1),null);
var map__24059__$1 = ((((!((map__24059 == null)))?((((map__24059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24059):map__24059);
var p2 = map__24059__$1;
var m2 = cljs.core.get.call(null,map__24059__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var uuid2 = cljs.core.get.call(null,map__24059__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
return cljs.core.vec.call(null,cljs.core.conj.call(null,cljs.core.remove.call(null,((function (vec__24057,map__24058,map__24058__$1,p1,m1,uuid1,map__24059,map__24059__$1,p2,m2,uuid2){
return (function (p1__24050_SHARP_){
return cljs.core.contains_QMARK_.call(null,cljs.core.PersistentHashSet.fromArray([uuid1,uuid2], true),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__24050_SHARP_));
});})(vec__24057,map__24058,map__24058__$1,p1,m1,uuid1,map__24059,map__24059__$1,p2,m2,uuid2))
,planets),(((m1 > m2))?game.mechanics.merge_planets.call(null,p1,p2):game.mechanics.merge_planets.call(null,p2,p1))));
});
/**
 * Takes all the planets and returns only those that have collided
 */
game.mechanics.planets__GT_collided_planets = (function game$mechanics$planets__GT_collided_planets(planets){
return cljs.core.filterv.call(null,(function (p__24067){
var map__24068 = p__24067;
var map__24068__$1 = ((((!((map__24068 == null)))?((((map__24068.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24068.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24068):map__24068);
var p = map__24068__$1;
var uuid = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var r = cljs.core.get.call(null,map__24068__$1,new cljs.core.Keyword(null,"r","r",-471384190));
return cljs.core.some_QMARK_.call(null,cljs.core.seq.call(null,cljs.core.filter.call(null,((function (map__24068,map__24068__$1,p,uuid,r){
return (function (p1__24063_SHARP_){
return game.common.p1_PLUS_p2__GT_collision_QMARK_.call(null,p,p1__24063_SHARP_);
});})(map__24068,map__24068__$1,p,uuid,r))
,cljs.core.remove.call(null,((function (map__24068,map__24068__$1,p,uuid,r){
return (function (p1__24062_SHARP_){
return cljs.core._EQ_.call(null,uuid,new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__24062_SHARP_));
});})(map__24068,map__24068__$1,p,uuid,r))
,planets))));
}),planets);
});
game.mechanics.handle_collisions = (function game$mechanics$handle_collisions(planets){
var collided_planets = game.mechanics.planets__GT_collided_planets.call(null,planets);
if(cljs.core._EQ_.call(null,(2),cljs.core.count.call(null,collided_planets))){
return game.mechanics.planets__GT_remaining_planets.call(null,collided_planets,planets);
} else {
return planets;
}
});
game.mechanics.update_planets = (function game$mechanics$update_planets(planets,dt){
return cljs.core.mapv.call(null,(function (p1__24072_SHARP_){
return game.mechanics.update_planet_position.call(null,p1__24072_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__24071_SHARP_){
return game.mechanics.update_planet_velocity.call(null,p1__24071_SHARP_,dt);
}),cljs.core.mapv.call(null,(function (p1__24070_SHARP_){
return game.mechanics.update_planet_acceleration.call(null,p1__24070_SHARP_,planets,dt);
}),game.mechanics.handle_collisions.call(null,planets))));
});
game.mechanics.planet__GT_orthagonality_metric = (function game$mechanics$planet__GT_orthagonality_metric(p__24073){
var map__24078 = p__24073;
var map__24078__$1 = ((((!((map__24078 == null)))?((((map__24078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24078):map__24078);
var vec__24079 = cljs.core.get.call(null,map__24078__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var ax = cljs.core.nth.call(null,vec__24079,(0),null);
var ay = cljs.core.nth.call(null,vec__24079,(1),null);
var vec__24080 = cljs.core.get.call(null,map__24078__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx = cljs.core.nth.call(null,vec__24080,(0),null);
var vy = cljs.core.nth.call(null,vec__24080,(1),null);
var direction_a = Math.atan2(ay,ax);
var direction_v = Math.atan2(vy,vx);
return (cljs.core.mod.call(null,(((2) * Math.PI) + (direction_a - direction_v)),((2) * Math.PI)) - (Math.PI / (2)));
});
game.mechanics.planet_manual_acceleration = (function game$mechanics$planet_manual_acceleration(p__24082){
var map__24088 = p__24082;
var map__24088__$1 = ((((!((map__24088 == null)))?((((map__24088.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24088.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24088):map__24088);
var p = map__24088__$1;
var vec__24089 = cljs.core.get.call(null,map__24088__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx = cljs.core.nth.call(null,vec__24089,(0),null);
var vy = cljs.core.nth.call(null,vec__24089,(1),null);
var o = game.mechanics.planet__GT_orthagonality_metric.call(null,p);
return cljs.core.update.call(null,p,new cljs.core.Keyword(null,"a","a",-2123407586),((function (o,map__24088,map__24088__$1,p,vec__24089,vx,vy){
return (function (p__24091){
var vec__24092 = p__24091;
var ax = cljs.core.nth.call(null,vec__24092,(0),null);
var ay = cljs.core.nth.call(null,vec__24092,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(ax - (o * vx)),(ay - (o * vy))], null);
});})(o,map__24088,map__24088__$1,p,vec__24089,vx,vy))
);
});
game.mechanics.update_manual_planet_acceleration = (function game$mechanics$update_manual_planet_acceleration(p){
if(cljs.core._EQ_.call(null,(124),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p))){
return game.mechanics.planet_manual_acceleration.call(null,p);
} else {
return p;
}
});
game.mechanics.planet__GT_sun_orthagonality_metric = (function game$mechanics$planet__GT_sun_orthagonality_metric(p1,p__24093){
var map__24098 = p__24093;
var map__24098__$1 = ((((!((map__24098 == null)))?((((map__24098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__24098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__24098):map__24098);
var p2 = map__24098__$1;
var vec__24099 = cljs.core.get.call(null,map__24098__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx2 = cljs.core.nth.call(null,vec__24099,(0),null);
var vy2 = cljs.core.nth.call(null,vec__24099,(1),null);
var vec__24100 = cljs.core.get.call(null,map__24098__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var ax2 = cljs.core.nth.call(null,vec__24100,(0),null);
var ay2 = cljs.core.nth.call(null,vec__24100,(1),null);
var p1__GT_p2_direction = game.common.abs_rad.call(null,game.common.p1_PLUS_p2__GT_theta.call(null,p1,p2));
var p2_target_velocity_direction = game.common.abs_rad.call(null,((Math.PI / (2)) + p1__GT_p2_direction));
var p2_target_acceleration_direction = game.common.abs_rad.call(null,(Math.PI + p1__GT_p2_direction));
var p2_actual_acceleration_direction = game.common.abs_rad.call(null,Math.atan2(ay2,ax2));
var p2_actual_velocity_direction = game.common.abs_rad.call(null,Math.atan2(vy2,vx2));
return null;
});
game.mechanics.orbital_velocity = (function game$mechanics$orbital_velocity(planets){
var p1 = cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__24102_SHARP_){
return cljs.core._EQ_.call(null,(123),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__24102_SHARP_));
}),planets));
var p2 = cljs.core.first.call(null,cljs.core.filter.call(null,((function (p1){
return (function (p1__24103_SHARP_){
return cljs.core._EQ_.call(null,(124),new cljs.core.Keyword(null,"uuid","uuid",-2145095719).cljs$core$IFn$_invoke$arity$1(p1__24103_SHARP_));
});})(p1))
,planets));
return cljs.core.println.call(null,game.common.p1_PLUS_p2__GT_d.call(null,p1,p2));
});

//# sourceMappingURL=mechanics.js.map