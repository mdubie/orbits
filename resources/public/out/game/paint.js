// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.paint');
goog.require('cljs.core');
game.paint.by_id = (function game$paint$by_id(id){
return document.getElementById(id);
});
/**
 * Set the size of the canvas.
 */
game.paint.size_canvas_BANG_ = (function game$paint$size_canvas_BANG_(id,p__23855){
var map__23858 = p__23855;
var map__23858__$1 = ((((!((map__23858 == null)))?((((map__23858.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23858.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23858):map__23858);
var width = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.call(null,map__23858__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var canvas = game.paint.by_id.call(null,id);
(canvas["width"] = width);

return (canvas["height"] = height);
});
game.paint.draw_planet_label_BANG_ = (function game$paint$draw_planet_label_BANG_(ctx,p__23860){
var map__23865 = p__23860;
var map__23865__$1 = ((((!((map__23865 == null)))?((((map__23865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23865):map__23865);
var vec__23866 = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__23866,(0),null);
var y = cljs.core.nth.call(null,vec__23866,(1),null);
var r = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var mass = cljs.core.get.call(null,map__23865__$1,new cljs.core.Keyword(null,"mass","mass",-2138950046));
var G__23868 = ctx;
(G__23868["font"] = "12px Arial");

(G__23868["strokeStyle"] = "#555");

G__23868.strokeText([cljs.core.str("p: "),cljs.core.str(uuid)].join(''),((x + r) + (3)),(y + (20)));

G__23868.strokeText([cljs.core.str("m: "),cljs.core.str(mass)].join(''),((x + r) + (3)),(y + (10)));

return G__23868;
});
game.paint.draw_planet_acceleration_vectors_BANG_ = (function game$paint$draw_planet_acceleration_vectors_BANG_(ctx,p__23869){
var map__23875 = p__23869;
var map__23875__$1 = ((((!((map__23875 == null)))?((((map__23875.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23875.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23875):map__23875);
var vec__23876 = cljs.core.get.call(null,map__23875__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var ax = cljs.core.nth.call(null,vec__23876,(0),null);
var ay = cljs.core.nth.call(null,vec__23876,(1),null);
var vec__23877 = cljs.core.get.call(null,map__23875__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__23877,(0),null);
var y = cljs.core.nth.call(null,vec__23877,(1),null);
var r = cljs.core.get.call(null,map__23875__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__23875__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__23875__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__23879 = ctx;
(G__23879["strokeStyle"] = "#FFF");

G__23879.beginPath();

G__23879.moveTo(x,y);

G__23879.lineTo((x + ((2000) * ax)),(y + ((2000) * ay)));

G__23879.stroke();

return G__23879;
});
game.paint.draw_planet_velocity_vectors_BANG_ = (function game$paint$draw_planet_velocity_vectors_BANG_(ctx,p__23880){
var map__23886 = p__23880;
var map__23886__$1 = ((((!((map__23886 == null)))?((((map__23886.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23886.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23886):map__23886);
var vec__23887 = cljs.core.get.call(null,map__23886__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__23887,(0),null);
var y = cljs.core.nth.call(null,vec__23887,(1),null);
var vec__23888 = cljs.core.get.call(null,map__23886__$1,new cljs.core.Keyword(null,"v","v",21465059));
var vx = cljs.core.nth.call(null,vec__23888,(0),null);
var vy = cljs.core.nth.call(null,vec__23888,(1),null);
var r = cljs.core.get.call(null,map__23886__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var color = cljs.core.get.call(null,map__23886__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var uuid = cljs.core.get.call(null,map__23886__$1,new cljs.core.Keyword(null,"uuid","uuid",-2145095719));
var G__23890 = ctx;
(G__23890["strokeStyle"] = "#AAA");

G__23890.beginPath();

G__23890.moveTo(x,y);

G__23890.lineTo((x + ((30) * vx)),(y + ((30) * vy)));

G__23890.stroke();

return G__23890;
});
game.paint.draw_planet_path_BANG_ = (function game$paint$draw_planet_path_BANG_(ctx,p__23891){
var map__23902 = p__23891;
var map__23902__$1 = ((((!((map__23902 == null)))?((((map__23902.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23902.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23902):map__23902);
var path = cljs.core.get.call(null,map__23902__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var vec__23904_23912 = cljs.core.first.call(null,path);
var x_23913 = cljs.core.nth.call(null,vec__23904_23912,(0),null);
var y_23914 = cljs.core.nth.call(null,vec__23904_23912,(1),null);

var G__23905_23915 = ctx;
(G__23905_23915["strokeStyle"] = "#555");

G__23905_23915.beginPath();

G__23905_23915.moveTo(game.paint.x,game.paint.y);


var seq__23906_23916 = cljs.core.seq.call(null,path);
var chunk__23907_23917 = null;
var count__23908_23918 = (0);
var i__23909_23919 = (0);
while(true){
if((i__23909_23919 < count__23908_23918)){
var vec__23910_23920 = cljs.core._nth.call(null,chunk__23907_23917,i__23909_23919);
var x_23921 = cljs.core.nth.call(null,vec__23910_23920,(0),null);
var y_23922 = cljs.core.nth.call(null,vec__23910_23920,(1),null);
ctx.lineTo(x_23921,y_23922);

var G__23923 = seq__23906_23916;
var G__23924 = chunk__23907_23917;
var G__23925 = count__23908_23918;
var G__23926 = (i__23909_23919 + (1));
seq__23906_23916 = G__23923;
chunk__23907_23917 = G__23924;
count__23908_23918 = G__23925;
i__23909_23919 = G__23926;
continue;
} else {
var temp__4425__auto___23927 = cljs.core.seq.call(null,seq__23906_23916);
if(temp__4425__auto___23927){
var seq__23906_23928__$1 = temp__4425__auto___23927;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23906_23928__$1)){
var c__17123__auto___23929 = cljs.core.chunk_first.call(null,seq__23906_23928__$1);
var G__23930 = cljs.core.chunk_rest.call(null,seq__23906_23928__$1);
var G__23931 = c__17123__auto___23929;
var G__23932 = cljs.core.count.call(null,c__17123__auto___23929);
var G__23933 = (0);
seq__23906_23916 = G__23930;
chunk__23907_23917 = G__23931;
count__23908_23918 = G__23932;
i__23909_23919 = G__23933;
continue;
} else {
var vec__23911_23934 = cljs.core.first.call(null,seq__23906_23928__$1);
var x_23935 = cljs.core.nth.call(null,vec__23911_23934,(0),null);
var y_23936 = cljs.core.nth.call(null,vec__23911_23934,(1),null);
ctx.lineTo(x_23935,y_23936);

var G__23937 = cljs.core.next.call(null,seq__23906_23928__$1);
var G__23938 = null;
var G__23939 = (0);
var G__23940 = (0);
seq__23906_23916 = G__23937;
chunk__23907_23917 = G__23938;
count__23908_23918 = G__23939;
i__23909_23919 = G__23940;
continue;
}
} else {
}
}
break;
}

return ctx.stroke();
});
game.paint.draw_planet_BANG_ = (function game$paint$draw_planet_BANG_(ctx,p__23941){
var map__23948 = p__23941;
var map__23948__$1 = ((((!((map__23948 == null)))?((((map__23948.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23948.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23948):map__23948);
var vec__23949 = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"s","s",1705939918));
var x = cljs.core.nth.call(null,vec__23949,(0),null);
var y = cljs.core.nth.call(null,vec__23949,(1),null);
var gm = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176));
var vec__23950 = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var c1 = cljs.core.nth.call(null,vec__23950,(0),null);
var c2 = cljs.core.nth.call(null,vec__23950,(1),null);
var c3 = cljs.core.nth.call(null,vec__23950,(2),null);
var r = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var gradient_direction = cljs.core.get.call(null,map__23948__$1,new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511));
var gradient = (function (){var G__23952 = gradient_direction;
switch (G__23952) {
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

var G__23953 = ctx;
(G__23953["fillStyle"] = gradient);

(G__23953["strokeStyle"] = c1);

G__23953.beginPath();

G__23953.arc(x,y,r,(0),((2) * Math.PI));

G__23953.fill();

G__23953.stroke();

return G__23953;
});
/**
 * Draw the given board to the canvas.
 */
game.paint.draw_system_BANG_ = (function game$paint$draw_system_BANG_(id,p__23955){
var map__23962 = p__23955;
var map__23962__$1 = ((((!((map__23962 == null)))?((((map__23962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__23962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__23962):map__23962);
var planets = cljs.core.get.call(null,map__23962__$1,new cljs.core.Keyword(null,"planets","planets",1711765443));
var canvas = game.paint.by_id.call(null,id);
var ctx = canvas.getContext("2d");
ctx.clearRect((0),(0),(1000),(1000));

var seq__23964_23968 = cljs.core.seq.call(null,planets);
var chunk__23965_23969 = null;
var count__23966_23970 = (0);
var i__23967_23971 = (0);
while(true){
if((i__23967_23971 < count__23966_23970)){
var p_23972 = cljs.core._nth.call(null,chunk__23965_23969,i__23967_23971);
game.paint.draw_planet_BANG_.call(null,ctx,p_23972);

game.paint.draw_planet_label_BANG_.call(null,ctx,p_23972);

game.paint.draw_planet_acceleration_vectors_BANG_.call(null,ctx,p_23972);

game.paint.draw_planet_velocity_vectors_BANG_.call(null,ctx,p_23972);

game.paint.draw_planet_path_BANG_.call(null,ctx,p_23972);

var G__23973 = seq__23964_23968;
var G__23974 = chunk__23965_23969;
var G__23975 = count__23966_23970;
var G__23976 = (i__23967_23971 + (1));
seq__23964_23968 = G__23973;
chunk__23965_23969 = G__23974;
count__23966_23970 = G__23975;
i__23967_23971 = G__23976;
continue;
} else {
var temp__4425__auto___23977 = cljs.core.seq.call(null,seq__23964_23968);
if(temp__4425__auto___23977){
var seq__23964_23978__$1 = temp__4425__auto___23977;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__23964_23978__$1)){
var c__17123__auto___23979 = cljs.core.chunk_first.call(null,seq__23964_23978__$1);
var G__23980 = cljs.core.chunk_rest.call(null,seq__23964_23978__$1);
var G__23981 = c__17123__auto___23979;
var G__23982 = cljs.core.count.call(null,c__17123__auto___23979);
var G__23983 = (0);
seq__23964_23968 = G__23980;
chunk__23965_23969 = G__23981;
count__23966_23970 = G__23982;
i__23967_23971 = G__23983;
continue;
} else {
var p_23984 = cljs.core.first.call(null,seq__23964_23978__$1);
game.paint.draw_planet_BANG_.call(null,ctx,p_23984);

game.paint.draw_planet_label_BANG_.call(null,ctx,p_23984);

game.paint.draw_planet_acceleration_vectors_BANG_.call(null,ctx,p_23984);

game.paint.draw_planet_velocity_vectors_BANG_.call(null,ctx,p_23984);

game.paint.draw_planet_path_BANG_.call(null,ctx,p_23984);

var G__23985 = cljs.core.next.call(null,seq__23964_23978__$1);
var G__23986 = null;
var G__23987 = (0);
var G__23988 = (0);
seq__23964_23968 = G__23985;
chunk__23965_23969 = G__23986;
count__23966_23970 = G__23987;
i__23967_23971 = G__23988;
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