// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.paint');
goog.require('cljs.core');
goog.require('game.common');
goog.require('game.constants');
game.paint.by_id = (function game$paint$by_id(id){
return document.getElementById(id);
});
game.paint.draw_path_helper = (function game$paint$draw_path_helper(ctx,path){
var seq__76370 = cljs.core.seq.call(null,path);
var chunk__76371 = null;
var count__76372 = (0);
var i__76373 = (0);
while(true){
if((i__76373 < count__76372)){
var vec__76374 = cljs.core._nth.call(null,chunk__76371,i__76373);
var x = cljs.core.nth.call(null,vec__76374,(0),null);
var y = cljs.core.nth.call(null,vec__76374,(1),null);
ctx.lineTo(x,y);

var G__76376 = seq__76370;
var G__76377 = chunk__76371;
var G__76378 = count__76372;
var G__76379 = (i__76373 + (1));
seq__76370 = G__76376;
chunk__76371 = G__76377;
count__76372 = G__76378;
i__76373 = G__76379;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__76370);
if(temp__4425__auto__){
var seq__76370__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76370__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__76370__$1);
var G__76380 = cljs.core.chunk_rest.call(null,seq__76370__$1);
var G__76381 = c__17123__auto__;
var G__76382 = cljs.core.count.call(null,c__17123__auto__);
var G__76383 = (0);
seq__76370 = G__76380;
chunk__76371 = G__76381;
count__76372 = G__76382;
i__76373 = G__76383;
continue;
} else {
var vec__76375 = cljs.core.first.call(null,seq__76370__$1);
var x = cljs.core.nth.call(null,vec__76375,(0),null);
var y = cljs.core.nth.call(null,vec__76375,(1),null);
ctx.lineTo(x,y);

var G__76384 = cljs.core.next.call(null,seq__76370__$1);
var G__76385 = null;
var G__76386 = (0);
var G__76387 = (0);
seq__76370 = G__76384;
chunk__76371 = G__76385;
count__76372 = G__76386;
i__76373 = G__76387;
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
var G__76389 = ctx;
G__76389.translate(x,y);

G__76389.rotate(((- theta) + (Math.PI * 0.5)));

G__76389.translate((- x),(- y));

return G__76389;
});
/**
 * Set the size of the canvas.
 */
game.paint.size_canvas_BANG_ = (function game$paint$size_canvas_BANG_(id,p__76390){
var map__76393 = p__76390;
var map__76393__$1 = ((((!((map__76393 == null)))?((((map__76393.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76393.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76393):map__76393);
var width = cljs.core.get.call(null,map__76393__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__76393__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var canvas = game.paint.by_id.call(null,id);
(canvas["width"] = width);

return (canvas["height"] = height);
});
game.paint.draw_planet_label_BANG_ = (function game$paint$draw_planet_label_BANG_(ctx,p__76395){
var map__76400 = p__76395;
var map__76400__$1 = ((((!((map__76400 == null)))?((((map__76400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76400):map__76400);
var vec__76401 = cljs.core.get.call(null,map__76400__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__76401,(0),null);
var y = cljs.core.nth.call(null,vec__76401,(1),null);
var r = cljs.core.get.call(null,map__76400__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__76400__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__76400__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var mass = cljs.core.get.call(null,map__76400__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var G__76403 = ctx;
(G__76403["font"] = "12px Arial");

(G__76403["strokeStyle"] = "#555");

G__76403.strokeText([cljs.core.str("p: "),cljs.core.str(uuid)].join(''),((x + r) + (3)),(y + (20)));

G__76403.strokeText([cljs.core.str("m: "),cljs.core.str(mass)].join(''),((x + r) + (3)),(y + (10)));

return G__76403;
});
game.paint.draw_acceleration_vectors_BANG_ = (function game$paint$draw_acceleration_vectors_BANG_(ctx,p__76404){
var map__76410 = p__76404;
var map__76410__$1 = ((((!((map__76410 == null)))?((((map__76410.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76410.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76410):map__76410);
var vec__76411 = cljs.core.get.call(null,map__76410__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var ax = cljs.core.nth.call(null,vec__76411,(0),null);
var ay = cljs.core.nth.call(null,vec__76411,(1),null);
var vec__76412 = cljs.core.get.call(null,map__76410__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__76412,(0),null);
var y = cljs.core.nth.call(null,vec__76412,(1),null);
var r = cljs.core.get.call(null,map__76410__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__76410__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__76410__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__76414 = ctx;
(G__76414["strokeStyle"] = "#FFF");

G__76414.beginPath();

G__76414.moveTo(x,y);

G__76414.lineTo((x + ((2000) * ax)),(y + ((2000) * ay)));

G__76414.stroke();

return G__76414;
});
game.paint.draw_velocity_vectors_BANG_ = (function game$paint$draw_velocity_vectors_BANG_(ctx,p__76415){
var map__76421 = p__76415;
var map__76421__$1 = ((((!((map__76421 == null)))?((((map__76421.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76421.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76421):map__76421);
var vec__76422 = cljs.core.get.call(null,map__76421__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__76422,(0),null);
var y = cljs.core.nth.call(null,vec__76422,(1),null);
var vec__76423 = cljs.core.get.call(null,map__76421__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx = cljs.core.nth.call(null,vec__76423,(0),null);
var vy = cljs.core.nth.call(null,vec__76423,(1),null);
var r = cljs.core.get.call(null,map__76421__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__76421__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__76421__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__76425 = ctx;
(G__76425["strokeStyle"] = "#AAA");

G__76425.beginPath();

G__76425.moveTo(x,y);

G__76425.lineTo((x + ((30) * vx)),(y + ((30) * vy)));

G__76425.stroke();

return G__76425;
});
game.paint.draw_path_BANG_ = (function game$paint$draw_path_BANG_(ctx,p__76426){
var map__76431 = p__76426;
var map__76431__$1 = ((((!((map__76431 == null)))?((((map__76431.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76431.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76431):map__76431);
var path = cljs.core.get.call(null,map__76431__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var vec__76433 = cljs.core.first.call(null,path);
var x = cljs.core.nth.call(null,vec__76433,(0),null);
var y = cljs.core.nth.call(null,vec__76433,(1),null);
var G__76434 = ctx;
(G__76434["strokeStyle"] = "#555");

G__76434.beginPath();

G__76434.moveTo(x,y);

game.paint.draw_path_helper.call(null,G__76434,path);

G__76434.stroke();

return G__76434;
});
game.paint.draw_planet_BANG_ = (function game$paint$draw_planet_BANG_(ctx,p__76435){
var map__76442 = p__76435;
var map__76442__$1 = ((((!((map__76442 == null)))?((((map__76442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76442):map__76442);
var vec__76443 = cljs.core.get.call(null,map__76442__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__76443,(0),null);
var y = cljs.core.nth.call(null,vec__76443,(1),null);
var gm = cljs.core.get.call(null,map__76442__$1,new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176));
var vec__76444 = cljs.core.get.call(null,map__76442__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var c1 = cljs.core.nth.call(null,vec__76444,(0),null);
var c2 = cljs.core.nth.call(null,vec__76444,(1),null);
var c3 = cljs.core.nth.call(null,vec__76444,(2),null);
var r = cljs.core.get.call(null,map__76442__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var gradient_direction = cljs.core.get.call(null,map__76442__$1,new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511));
var gradient = (function (){var G__76446 = gradient_direction;
switch (G__76446) {
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

var G__76447 = ctx;
(G__76447["fillStyle"] = gradient);

(G__76447["strokeStyle"] = c1);

G__76447.beginPath();

G__76447.arc(x,y,r,(0),((2) * Math.PI));

G__76447.fill();

G__76447.stroke();

return G__76447;
});
game.paint.draw_ship_label_BANG_ = (function game$paint$draw_ship_label_BANG_(ctx,p__76449){
var map__76454 = p__76449;
var map__76454__$1 = ((((!((map__76454 == null)))?((((map__76454.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76454.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76454):map__76454);
var vec__76455 = cljs.core.get.call(null,map__76454__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__76455,(0),null);
var y = cljs.core.nth.call(null,vec__76455,(1),null);
var uuid = cljs.core.get.call(null,map__76454__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__76457 = ctx;
(G__76457["font"] = "12px Arial");

(G__76457["strokeStyle"] = "#555");

G__76457.strokeText([cljs.core.str("s: "),cljs.core.str(uuid)].join(''),(x + (10)),(y + (10)));

return G__76457;
});
game.paint.ship_path = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(2),(-3)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(5)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(4)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-2),(-3)], null)], null);
game.paint.draw_ship_BANG_ = (function game$paint$draw_ship_BANG_(ctx,p__76459){
var map__76464 = p__76459;
var map__76464__$1 = ((((!((map__76464 == null)))?((((map__76464.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76464.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76464):map__76464);
var vec__76465 = cljs.core.get.call(null,map__76464__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__76465,(0),null);
var y = cljs.core.nth.call(null,vec__76465,(1),null);
var s = cljs.core.get.call(null,map__76464__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var theta = cljs.core.get.call(null,map__76464__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var G__76467 = ctx;
G__76467.save();

(G__76467["fillStyle"] = "#FFF");

game.paint.rotate_helper.call(null,G__76467,theta,x,y);

G__76467.beginPath();

G__76467.moveTo((x + (0)),(y + (-5)));

game.paint.draw_path_helper.call(null,G__76467,cljs.core.map.call(null,((function (G__76467,map__76464,map__76464__$1,vec__76465,x,y,s,theta){
return (function (p1__76458_SHARP_){
return game.common.add_vectors.call(null,s,p1__76458_SHARP_);
});})(G__76467,map__76464,map__76464__$1,vec__76465,x,y,s,theta))
,game.paint.ship_path));

G__76467.closePath();

G__76467.fill();

G__76467.restore();

return G__76467;
});
game.paint.thrust_path = (function game$paint$thrust_path(thrust){
return cljs.core.mapv.call(null,(function (p__76470){
var vec__76471 = p__76470;
var x = cljs.core.nth.call(null,vec__76471,(0),null);
var y = cljs.core.nth.call(null,vec__76471,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,(thrust * y)], null);
}),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(10)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(3),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(0),(30)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-3),(12)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-1),(10)], null)], null));
});
game.paint.draw_ship_thrust_BANG_ = (function game$paint$draw_ship_thrust_BANG_(ctx,p__76473){
var map__76478 = p__76473;
var map__76478__$1 = ((((!((map__76478 == null)))?((((map__76478.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76478.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76478):map__76478);
var vec__76479 = cljs.core.get.call(null,map__76478__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__76479,(0),null);
var y = cljs.core.nth.call(null,vec__76479,(1),null);
var s = cljs.core.get.call(null,map__76478__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var theta = cljs.core.get.call(null,map__76478__$1,new cljs.core.Keyword(null,"theta","theta",-427510258));
var thrust = cljs.core.get.call(null,map__76478__$1,new cljs.core.Keyword(null,"thrust","thrust",651754168));
var G__76481 = ctx;
G__76481.save();

(G__76481["fillStyle"] = "#F80");

game.paint.rotate_helper.call(null,G__76481,theta,x,y);

G__76481.beginPath();

G__76481.moveTo((x + (0)),(y + (5)));

game.paint.draw_path_helper.call(null,G__76481,cljs.core.map.call(null,((function (G__76481,map__76478,map__76478__$1,vec__76479,x,y,s,theta,thrust){
return (function (p1__76472_SHARP_){
return game.common.add_vectors.call(null,s,p1__76472_SHARP_);
});})(G__76481,map__76478,map__76478__$1,vec__76479,x,y,s,theta,thrust))
,game.paint.thrust_path.call(null,thrust)));

G__76481.closePath();

G__76481.fill();

G__76481.restore();

return G__76481;
});
/**
 * Draw the given board to the canvas.
 */
game.paint.draw_system_BANG_ = (function game$paint$draw_system_BANG_(id,p__76482){
var map__76493 = p__76482;
var map__76493__$1 = ((((!((map__76493 == null)))?((((map__76493.cljs$lang$protocol_mask$partition0$ & (64))) || (map__76493.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__76493):map__76493);
var planets = cljs.core.get.call(null,map__76493__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var ships = cljs.core.get.call(null,map__76493__$1,new cljs.core.Keyword(null,"ships","ships",-875113158));
var canvas = game.paint.by_id.call(null,id);
var ctx = canvas.getContext("2d");
ctx.clearRect((0),(0),(1000),(1000));

var seq__76495_76503 = cljs.core.seq.call(null,planets);
var chunk__76496_76504 = null;
var count__76497_76505 = (0);
var i__76498_76506 = (0);
while(true){
if((i__76498_76506 < count__76497_76505)){
var p_76507 = cljs.core._nth.call(null,chunk__76496_76504,i__76498_76506);
game.paint.draw_planet_BANG_.call(null,ctx,p_76507);

game.paint.draw_planet_label_BANG_.call(null,ctx,p_76507);

game.paint.draw_acceleration_vectors_BANG_.call(null,ctx,p_76507);

game.paint.draw_velocity_vectors_BANG_.call(null,ctx,p_76507);

game.paint.draw_path_BANG_.call(null,ctx,p_76507);

var G__76508 = seq__76495_76503;
var G__76509 = chunk__76496_76504;
var G__76510 = count__76497_76505;
var G__76511 = (i__76498_76506 + (1));
seq__76495_76503 = G__76508;
chunk__76496_76504 = G__76509;
count__76497_76505 = G__76510;
i__76498_76506 = G__76511;
continue;
} else {
var temp__4425__auto___76512 = cljs.core.seq.call(null,seq__76495_76503);
if(temp__4425__auto___76512){
var seq__76495_76513__$1 = temp__4425__auto___76512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76495_76513__$1)){
var c__17123__auto___76514 = cljs.core.chunk_first.call(null,seq__76495_76513__$1);
var G__76515 = cljs.core.chunk_rest.call(null,seq__76495_76513__$1);
var G__76516 = c__17123__auto___76514;
var G__76517 = cljs.core.count.call(null,c__17123__auto___76514);
var G__76518 = (0);
seq__76495_76503 = G__76515;
chunk__76496_76504 = G__76516;
count__76497_76505 = G__76517;
i__76498_76506 = G__76518;
continue;
} else {
var p_76519 = cljs.core.first.call(null,seq__76495_76513__$1);
game.paint.draw_planet_BANG_.call(null,ctx,p_76519);

game.paint.draw_planet_label_BANG_.call(null,ctx,p_76519);

game.paint.draw_acceleration_vectors_BANG_.call(null,ctx,p_76519);

game.paint.draw_velocity_vectors_BANG_.call(null,ctx,p_76519);

game.paint.draw_path_BANG_.call(null,ctx,p_76519);

var G__76520 = cljs.core.next.call(null,seq__76495_76513__$1);
var G__76521 = null;
var G__76522 = (0);
var G__76523 = (0);
seq__76495_76503 = G__76520;
chunk__76496_76504 = G__76521;
count__76497_76505 = G__76522;
i__76498_76506 = G__76523;
continue;
}
} else {
}
}
break;
}

var seq__76499_76524 = cljs.core.seq.call(null,ships);
var chunk__76500_76525 = null;
var count__76501_76526 = (0);
var i__76502_76527 = (0);
while(true){
if((i__76502_76527 < count__76501_76526)){
var s_76528 = cljs.core._nth.call(null,chunk__76500_76525,i__76502_76527);
game.paint.draw_ship_BANG_.call(null,ctx,s_76528);

game.paint.draw_ship_thrust_BANG_.call(null,ctx,s_76528);

game.paint.draw_ship_label_BANG_.call(null,ctx,s_76528);

game.paint.draw_acceleration_vectors_BANG_.call(null,ctx,s_76528);

game.paint.draw_velocity_vectors_BANG_.call(null,ctx,s_76528);

game.paint.draw_path_BANG_.call(null,ctx,s_76528);

var G__76529 = seq__76499_76524;
var G__76530 = chunk__76500_76525;
var G__76531 = count__76501_76526;
var G__76532 = (i__76502_76527 + (1));
seq__76499_76524 = G__76529;
chunk__76500_76525 = G__76530;
count__76501_76526 = G__76531;
i__76502_76527 = G__76532;
continue;
} else {
var temp__4425__auto___76533 = cljs.core.seq.call(null,seq__76499_76524);
if(temp__4425__auto___76533){
var seq__76499_76534__$1 = temp__4425__auto___76533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__76499_76534__$1)){
var c__17123__auto___76535 = cljs.core.chunk_first.call(null,seq__76499_76534__$1);
var G__76536 = cljs.core.chunk_rest.call(null,seq__76499_76534__$1);
var G__76537 = c__17123__auto___76535;
var G__76538 = cljs.core.count.call(null,c__17123__auto___76535);
var G__76539 = (0);
seq__76499_76524 = G__76536;
chunk__76500_76525 = G__76537;
count__76501_76526 = G__76538;
i__76502_76527 = G__76539;
continue;
} else {
var s_76540 = cljs.core.first.call(null,seq__76499_76534__$1);
game.paint.draw_ship_BANG_.call(null,ctx,s_76540);

game.paint.draw_ship_thrust_BANG_.call(null,ctx,s_76540);

game.paint.draw_ship_label_BANG_.call(null,ctx,s_76540);

game.paint.draw_acceleration_vectors_BANG_.call(null,ctx,s_76540);

game.paint.draw_velocity_vectors_BANG_.call(null,ctx,s_76540);

game.paint.draw_path_BANG_.call(null,ctx,s_76540);

var G__76541 = cljs.core.next.call(null,seq__76499_76534__$1);
var G__76542 = null;
var G__76543 = (0);
var G__76544 = (0);
seq__76499_76524 = G__76541;
chunk__76500_76525 = G__76542;
count__76501_76526 = G__76543;
i__76502_76527 = G__76544;
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