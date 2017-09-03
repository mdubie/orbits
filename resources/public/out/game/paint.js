// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.paint');
goog.require('cljs.core');
goog.require('game.common');
goog.require('game.constants');
game.paint.by_id = (function game$paint$by_id(id){
return document.getElementById(id);
});
game.paint.draw_path_helper = (function game$paint$draw_path_helper(ctx,path){
var seq__152351 = cljs.core.seq.call(null,path);
var chunk__152352 = null;
var count__152353 = (0);
var i__152354 = (0);
while(true){
if((i__152354 < count__152353)){
var vec__152355 = cljs.core._nth.call(null,chunk__152352,i__152354);
var x = cljs.core.nth.call(null,vec__152355,(0),null);
var y = cljs.core.nth.call(null,vec__152355,(1),null);
ctx.lineTo(x,y);

var G__152357 = seq__152351;
var G__152358 = chunk__152352;
var G__152359 = count__152353;
var G__152360 = (i__152354 + (1));
seq__152351 = G__152357;
chunk__152352 = G__152358;
count__152353 = G__152359;
i__152354 = G__152360;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__152351);
if(temp__4425__auto__){
var seq__152351__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152351__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__152351__$1);
var G__152361 = cljs.core.chunk_rest.call(null,seq__152351__$1);
var G__152362 = c__17123__auto__;
var G__152363 = cljs.core.count.call(null,c__17123__auto__);
var G__152364 = (0);
seq__152351 = G__152361;
chunk__152352 = G__152362;
count__152353 = G__152363;
i__152354 = G__152364;
continue;
} else {
var vec__152356 = cljs.core.first.call(null,seq__152351__$1);
var x = cljs.core.nth.call(null,vec__152356,(0),null);
var y = cljs.core.nth.call(null,vec__152356,(1),null);
ctx.lineTo(x,y);

var G__152365 = cljs.core.next.call(null,seq__152351__$1);
var G__152366 = null;
var G__152367 = (0);
var G__152368 = (0);
seq__152351 = G__152365;
chunk__152352 = G__152366;
count__152353 = G__152367;
i__152354 = G__152368;
continue;
}
} else {
return null;
}
}
break;
}
});
game.paint.rotate_helper = (function game$paint$rotate_helper(ctx,theta,x,y){
var G__152370 = ctx;
G__152370.translate(x,y);

G__152370.rotate(((- theta) + (Math.PI * 0.5)));

G__152370.translate((- x),(- y));

return G__152370;
});
game.paint.setup_stacked_canvas_BANG_ = (function game$paint$setup_stacked_canvas_BANG_(p__152371){
var map__152374 = p__152371;
var map__152374__$1 = ((((!((map__152374 == null)))?((((map__152374.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152374.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152374):map__152374);
var width = cljs.core.get.call(null,map__152374__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__152374__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var game_canvas = game.paint.by_id.call(null,"game-canvas");
var path_canvas = game.paint.by_id.call(null,"path-canvas");
(game_canvas["width"] = width);

(game_canvas["height"] = height);

(path_canvas["width"] = width);

return (path_canvas["height"] = height);
});
game.paint.draw_planet_label_BANG_ = (function game$paint$draw_planet_label_BANG_(ctx,p__152376){
var map__152381 = p__152376;
var map__152381__$1 = ((((!((map__152381 == null)))?((((map__152381.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152381.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152381):map__152381);
var vec__152382 = cljs.core.get.call(null,map__152381__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__152382,(0),null);
var y = cljs.core.nth.call(null,vec__152382,(1),null);
var r = cljs.core.get.call(null,map__152381__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__152381__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__152381__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var mass = cljs.core.get.call(null,map__152381__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var G__152384 = ctx;
(G__152384["font"] = "12px Arial");

(G__152384["strokeStyle"] = "#555");

G__152384.strokeText([cljs.core.str("p: "),cljs.core.str(uuid)].join(''),((x + r) + (3)),(y + (20)));

G__152384.strokeText([cljs.core.str("m: "),cljs.core.str(mass)].join(''),((x + r) + (3)),(y + (10)));

return G__152384;
});
game.paint.draw_acceleration_vectors_BANG_ = (function game$paint$draw_acceleration_vectors_BANG_(ctx,p__152385){
var map__152391 = p__152385;
var map__152391__$1 = ((((!((map__152391 == null)))?((((map__152391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152391):map__152391);
var vec__152392 = cljs.core.get.call(null,map__152391__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var ax = cljs.core.nth.call(null,vec__152392,(0),null);
var ay = cljs.core.nth.call(null,vec__152392,(1),null);
var vec__152393 = cljs.core.get.call(null,map__152391__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__152393,(0),null);
var y = cljs.core.nth.call(null,vec__152393,(1),null);
var r = cljs.core.get.call(null,map__152391__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__152391__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__152391__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__152395 = ctx;
(G__152395["strokeStyle"] = "#FFF");

G__152395.beginPath();

G__152395.moveTo(x,y);

G__152395.lineTo((x + ((2000) * ax)),(y + ((2000) * ay)));

G__152395.stroke();

return G__152395;
});
game.paint.draw_velocity_vectors_BANG_ = (function game$paint$draw_velocity_vectors_BANG_(ctx,p__152396){
var map__152402 = p__152396;
var map__152402__$1 = ((((!((map__152402 == null)))?((((map__152402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152402):map__152402);
var vec__152403 = cljs.core.get.call(null,map__152402__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__152403,(0),null);
var y = cljs.core.nth.call(null,vec__152403,(1),null);
var vec__152404 = cljs.core.get.call(null,map__152402__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx = cljs.core.nth.call(null,vec__152404,(0),null);
var vy = cljs.core.nth.call(null,vec__152404,(1),null);
var r = cljs.core.get.call(null,map__152402__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__152402__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__152402__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__152406 = ctx;
(G__152406["strokeStyle"] = "#AAA");

G__152406.beginPath();

G__152406.moveTo(x,y);

G__152406.lineTo((x + ((30) * vx)),(y + ((30) * vy)));

G__152406.stroke();

return G__152406;
});
game.paint.draw_path_BANG_ = (function game$paint$draw_path_BANG_(ctx,p__152407){
var map__152413 = p__152407;
var map__152413__$1 = ((((!((map__152413 == null)))?((((map__152413.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152413.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152413):map__152413);
var vec__152414 = cljs.core.get.call(null,map__152413__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var x0 = cljs.core.nth.call(null,vec__152414,(0),null);
var y0 = cljs.core.nth.call(null,vec__152414,(1),null);
var vec__152415 = cljs.core.get.call(null,map__152413__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x1 = cljs.core.nth.call(null,vec__152415,(0),null);
var y1 = cljs.core.nth.call(null,vec__152415,(1),null);
if(cljs.core.truth_(x0)){
var G__152417 = ctx;
(G__152417["strokeStyle"] = "#555");

G__152417.beginPath();

G__152417.moveTo(x0,y0);

G__152417.lineTo(x1,y1);

G__152417.stroke();

return G__152417;
} else {
return null;
}
});
game.paint.draw_planet_BANG_ = (function game$paint$draw_planet_BANG_(ctx,p__152418){
var map__152425 = p__152418;
var map__152425__$1 = ((((!((map__152425 == null)))?((((map__152425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152425):map__152425);
var vec__152426 = cljs.core.get.call(null,map__152425__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__152426,(0),null);
var y = cljs.core.nth.call(null,vec__152426,(1),null);
var gm = cljs.core.get.call(null,map__152425__$1,new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176));
var vec__152427 = cljs.core.get.call(null,map__152425__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var c1 = cljs.core.nth.call(null,vec__152427,(0),null);
var c2 = cljs.core.nth.call(null,vec__152427,(1),null);
var c3 = cljs.core.nth.call(null,vec__152427,(2),null);
var r = cljs.core.get.call(null,map__152425__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var gradient_direction = cljs.core.get.call(null,map__152425__$1,new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511));
var gradient = (function (){var G__152429 = gradient_direction;
switch (G__152429) {
case (0):
return ctx.createLinearGradient((x - gm),(y - gm),(x + gm),(y + gm));

break;
case (1):
return ctx.createLinearGradient((x - gm),(y - gm),(x - gm),(y + gm));

break;
case (2):
return ctx.createLinearGradient((x - gm),(y - gm),(x + gm),(y - gm));

break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(gradient_direction)].join('')));

}
})();
gradient.addColorStop((0),c1);

gradient.addColorStop(0.5,c2);

gradient.addColorStop((1),c3);

var G__152430 = ctx;
(G__152430["fillStyle"] = gradient);

(G__152430["strokeStyle"] = c1);

G__152430.beginPath();

G__152430.arc(x,y,r,(0),((2) * Math.PI));

G__152430.fill();

G__152430.stroke();

return G__152430;
});
game.paint.draw_ship_label_BANG_ = (function game$paint$draw_ship_label_BANG_(ctx,p__152432){
var map__152437 = p__152432;
var map__152437__$1 = ((((!((map__152437 == null)))?((((map__152437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152437):map__152437);
var vec__152438 = cljs.core.get.call(null,map__152437__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__152438,(0),null);
var y = cljs.core.nth.call(null,vec__152438,(1),null);
var uuid = cljs.core.get.call(null,map__152437__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__152440 = ctx;
(G__152440["font"] = "12px Arial");

(G__152440["strokeStyle"] = "#555");

G__152440.strokeText([cljs.core.str("s: "),cljs.core.str(uuid)].join(''),(x + (10)),(y + (10)));

return G__152440;
});
game.paint.ship_path = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-3)], null)], null);
game.paint.draw_ship_BANG_ = (function game$paint$draw_ship_BANG_(ctx,p__152442){
var map__152447 = p__152442;
var map__152447__$1 = ((((!((map__152447 == null)))?((((map__152447.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152447.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152447):map__152447);
var vec__152448 = cljs.core.get.call(null,map__152447__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__152448,(0),null);
var y = cljs.core.nth.call(null,vec__152448,(1),null);
var s = cljs.core.get.call(null,map__152447__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var theta = cljs.core.get.call(null,map__152447__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var G__152450 = ctx;
G__152450.save();

(G__152450["fillStyle"] = "#FFF");

game.paint.rotate_helper.call(null,G__152450,theta,x,y);

G__152450.beginPath();

G__152450.moveTo((x + (0)),(y + (-5)));

game.paint.draw_path_helper.call(null,G__152450,cljs.core.map.call(null,((function (G__152450,map__152447,map__152447__$1,vec__152448,x,y,s,theta){
return (function (p1__152441_SHARP_){
return game.common.add_vectors.call(null,s,p1__152441_SHARP_);
});})(G__152450,map__152447,map__152447__$1,vec__152448,x,y,s,theta))
,game.paint.ship_path));

G__152450.closePath();

G__152450.fill();

G__152450.restore();

return G__152450;
});
game.paint.thrust_path = (function game$paint$thrust_path(thrust){
return cljs.core.mapv.call(null,(function (p__152453){
var vec__152454 = p__152453;
var x = cljs.core.nth.call(null,vec__152454,(0),null);
var y = cljs.core.nth.call(null,vec__152454,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(thrust * y)], null);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(10)], null)], null));
});
game.paint.draw_ship_thrust_BANG_ = (function game$paint$draw_ship_thrust_BANG_(ctx,p__152456){
var map__152461 = p__152456;
var map__152461__$1 = ((((!((map__152461 == null)))?((((map__152461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152461):map__152461);
var vec__152462 = cljs.core.get.call(null,map__152461__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__152462,(0),null);
var y = cljs.core.nth.call(null,vec__152462,(1),null);
var s = cljs.core.get.call(null,map__152461__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var theta = cljs.core.get.call(null,map__152461__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var thrust = cljs.core.get.call(null,map__152461__$1,new cljs.core.Keyword(null,"thrust","thrust",651754168));
var G__152464 = ctx;
G__152464.save();

(G__152464["fillStyle"] = "#F80");

game.paint.rotate_helper.call(null,G__152464,theta,x,y);

G__152464.beginPath();

G__152464.moveTo((x + (0)),(y + (5)));

game.paint.draw_path_helper.call(null,G__152464,cljs.core.map.call(null,((function (G__152464,map__152461,map__152461__$1,vec__152462,x,y,s,theta,thrust){
return (function (p1__152455_SHARP_){
return game.common.add_vectors.call(null,s,p1__152455_SHARP_);
});})(G__152464,map__152461,map__152461__$1,vec__152462,x,y,s,theta,thrust))
,game.paint.thrust_path.call(null,thrust)));

G__152464.closePath();

G__152464.fill();

G__152464.restore();

return G__152464;
});
/**
 * Draw the given board to the canvas.
 */
game.paint.draw_system_BANG_ = (function game$paint$draw_system_BANG_(p__152465){
var map__152476 = p__152465;
var map__152476__$1 = ((((!((map__152476 == null)))?((((map__152476.cljs$lang$protocol_mask$partition0$ & (64))) || (map__152476.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__152476):map__152476);
var planets = cljs.core.get.call(null,map__152476__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var ships = cljs.core.get.call(null,map__152476__$1,new cljs.core.Keyword(null,"ships","ships",-875113158));
var game_canvas = game.paint.by_id.call(null,"game-canvas");
var path_canvas = game.paint.by_id.call(null,"path-canvas");
var game_ctx = game_canvas.getContext("2d");
var path_ctx = path_canvas.getContext("2d");
game_ctx.clearRect((0),(0),(1000),(1000));

var seq__152478_152486 = cljs.core.seq.call(null,planets);
var chunk__152479_152487 = null;
var count__152480_152488 = (0);
var i__152481_152489 = (0);
while(true){
if((i__152481_152489 < count__152480_152488)){
var p_152490 = cljs.core._nth.call(null,chunk__152479_152487,i__152481_152489);
game.paint.draw_planet_BANG_.call(null,game_ctx,p_152490);

game.paint.draw_planet_label_BANG_.call(null,game_ctx,p_152490);

game.paint.draw_acceleration_vectors_BANG_.call(null,game_ctx,p_152490);

game.paint.draw_velocity_vectors_BANG_.call(null,game_ctx,p_152490);

game.paint.draw_path_BANG_.call(null,path_ctx,p_152490);

var G__152491 = seq__152478_152486;
var G__152492 = chunk__152479_152487;
var G__152493 = count__152480_152488;
var G__152494 = (i__152481_152489 + (1));
seq__152478_152486 = G__152491;
chunk__152479_152487 = G__152492;
count__152480_152488 = G__152493;
i__152481_152489 = G__152494;
continue;
} else {
var temp__4425__auto___152495 = cljs.core.seq.call(null,seq__152478_152486);
if(temp__4425__auto___152495){
var seq__152478_152496__$1 = temp__4425__auto___152495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152478_152496__$1)){
var c__17123__auto___152497 = cljs.core.chunk_first.call(null,seq__152478_152496__$1);
var G__152498 = cljs.core.chunk_rest.call(null,seq__152478_152496__$1);
var G__152499 = c__17123__auto___152497;
var G__152500 = cljs.core.count.call(null,c__17123__auto___152497);
var G__152501 = (0);
seq__152478_152486 = G__152498;
chunk__152479_152487 = G__152499;
count__152480_152488 = G__152500;
i__152481_152489 = G__152501;
continue;
} else {
var p_152502 = cljs.core.first.call(null,seq__152478_152496__$1);
game.paint.draw_planet_BANG_.call(null,game_ctx,p_152502);

game.paint.draw_planet_label_BANG_.call(null,game_ctx,p_152502);

game.paint.draw_acceleration_vectors_BANG_.call(null,game_ctx,p_152502);

game.paint.draw_velocity_vectors_BANG_.call(null,game_ctx,p_152502);

game.paint.draw_path_BANG_.call(null,path_ctx,p_152502);

var G__152503 = cljs.core.next.call(null,seq__152478_152496__$1);
var G__152504 = null;
var G__152505 = (0);
var G__152506 = (0);
seq__152478_152486 = G__152503;
chunk__152479_152487 = G__152504;
count__152480_152488 = G__152505;
i__152481_152489 = G__152506;
continue;
}
} else {
}
}
break;
}

var seq__152482_152507 = cljs.core.seq.call(null,ships);
var chunk__152483_152508 = null;
var count__152484_152509 = (0);
var i__152485_152510 = (0);
while(true){
if((i__152485_152510 < count__152484_152509)){
var s_152511 = cljs.core._nth.call(null,chunk__152483_152508,i__152485_152510);
game.paint.draw_ship_BANG_.call(null,game_ctx,s_152511);

game.paint.draw_ship_thrust_BANG_.call(null,game_ctx,s_152511);

game.paint.draw_ship_label_BANG_.call(null,game_ctx,s_152511);

game.paint.draw_acceleration_vectors_BANG_.call(null,game_ctx,s_152511);

game.paint.draw_velocity_vectors_BANG_.call(null,game_ctx,s_152511);

game.paint.draw_path_BANG_.call(null,path_ctx,s_152511);

var G__152512 = seq__152482_152507;
var G__152513 = chunk__152483_152508;
var G__152514 = count__152484_152509;
var G__152515 = (i__152485_152510 + (1));
seq__152482_152507 = G__152512;
chunk__152483_152508 = G__152513;
count__152484_152509 = G__152514;
i__152485_152510 = G__152515;
continue;
} else {
var temp__4425__auto___152516 = cljs.core.seq.call(null,seq__152482_152507);
if(temp__4425__auto___152516){
var seq__152482_152517__$1 = temp__4425__auto___152516;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__152482_152517__$1)){
var c__17123__auto___152518 = cljs.core.chunk_first.call(null,seq__152482_152517__$1);
var G__152519 = cljs.core.chunk_rest.call(null,seq__152482_152517__$1);
var G__152520 = c__17123__auto___152518;
var G__152521 = cljs.core.count.call(null,c__17123__auto___152518);
var G__152522 = (0);
seq__152482_152507 = G__152519;
chunk__152483_152508 = G__152520;
count__152484_152509 = G__152521;
i__152485_152510 = G__152522;
continue;
} else {
var s_152523 = cljs.core.first.call(null,seq__152482_152517__$1);
game.paint.draw_ship_BANG_.call(null,game_ctx,s_152523);

game.paint.draw_ship_thrust_BANG_.call(null,game_ctx,s_152523);

game.paint.draw_ship_label_BANG_.call(null,game_ctx,s_152523);

game.paint.draw_acceleration_vectors_BANG_.call(null,game_ctx,s_152523);

game.paint.draw_velocity_vectors_BANG_.call(null,game_ctx,s_152523);

game.paint.draw_path_BANG_.call(null,path_ctx,s_152523);

var G__152524 = cljs.core.next.call(null,seq__152482_152517__$1);
var G__152525 = null;
var G__152526 = (0);
var G__152527 = (0);
seq__152482_152507 = G__152524;
chunk__152483_152508 = G__152525;
count__152484_152509 = G__152526;
i__152485_152510 = G__152527;
continue;
}
} else {
}
}
break;
}

return null;
});

//# sourceMappingURL=paint.js.map