// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.core');
goog.require('cljs.core');
goog.require('game.mechanics');
goog.require('game.initial_system');
goog.require('game.paint');
cljs.core.enable_console_print_BANG_.call(null);
game.core.$ = jQuery;
game.core.time_now = (function game$core$time_now(){
return (window["performance"]).now();
});
game.core.start_benchmark = (function game$core$start_benchmark(name){
return cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,name,game.core.time_now.call(null));
});
game.core.end_benchmark = (function game$core$end_benchmark(name){
return cljs.core.println.call(null,[cljs.core.str(name)].join(''),(game.core.time_now.call(null) - cljs.core.get.call(null,cljs.core.deref.call(null,game.core.state),name)));
});
game.core.state = cljs.core.atom.call(null,null);
game.core.init_state_BANG_ = (function game$core$init_state_BANG_(){
return cljs.core.reset_BANG_.call(null,game.core.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"game-speed","game-speed",-735151727),(10),new cljs.core.Keyword(null,"t0","t0",2120162535),game.core.time_now.call(null),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null),new cljs.core.Keyword(null,"planets","planets",1711765443),game.initial_system.structured_centered_system.call(null),new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.test_ship], null)], null));
});
game.core.apply_gravity_BANG_ = (function game$core$apply_gravity_BANG_(){
cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dt","dt",-368444759),((game.core.time_now.call(null) - new cljs.core.Keyword(null,"t0","t0",2120162535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state))) / new cljs.core.Keyword(null,"game-speed","game-speed",-735151727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state))));

cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"t0","t0",2120162535),game.core.time_now.call(null));

cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.update,new cljs.core.Keyword(null,"planets","planets",1711765443),game.mechanics.update_planets,new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)));

return cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.update,new cljs.core.Keyword(null,"ships","ships",-875113158),game.mechanics.update_ships,new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)),new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)));
});
game.core.rotate_BANG_ = (function game$core$rotate_BANG_(direction){
return cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.update,new cljs.core.Keyword(null,"ships","ships",-875113158),game.mechanics.rotate_ship_BANG_,direction);
});
game.core.thrust_BANG_ = (function game$core$thrust_BANG_(value){
return cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.update,new cljs.core.Keyword(null,"ships","ships",-875113158),game.mechanics.thrust_ship_BANG_,value);
});
game.core.key_names = new cljs.core.PersistentArrayMap(null, 3, [(37),new cljs.core.Keyword(null,"left","left",-399115937),(38),new cljs.core.Keyword(null,"up","up",-269712113),(39),new cljs.core.Keyword(null,"right","right",-452581833)], null);
game.core.add_key_events_BANG_ = (function game$core$add_key_events_BANG_(){
var key_name = (function (p1__152640_SHARP_){
return game.core.key_names.call(null,p1__152640_SHARP_.keyCode);
});
var key_down = ((function (key_name){
return (function (e){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null).call(null,key_name.call(null,e)))){
e.preventDefault();

var G__152643 = (((key_name.call(null,e) instanceof cljs.core.Keyword))?key_name.call(null,e).fqn:null);
switch (G__152643) {
case "left":
return game.core.rotate_BANG_.call(null,(1));

break;
case "up":
return game.core.thrust_BANG_.call(null,(1));

break;
case "right":
return game.core.rotate_BANG_.call(null,(-1));

break;
default:
return null;

}
} else {
return null;
}
});})(key_name))
;
var key_up = ((function (key_name,key_down){
return (function (e){
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"up","up",-269712113),null,new cljs.core.Keyword(null,"right","right",-452581833),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null), null).call(null,key_name.call(null,e)))){
e.preventDefault();

var G__152644 = (((key_name.call(null,e) instanceof cljs.core.Keyword))?key_name.call(null,e).fqn:null);
switch (G__152644) {
case "left":
return game.core.rotate_BANG_.call(null,(0));

break;
case "up":
return game.core.thrust_BANG_.call(null,(0));

break;
case "right":
return game.core.rotate_BANG_.call(null,(0));

break;
default:
return null;

}
} else {
return null;
}
});})(key_name,key_down))
;
window.addEventListener("keydown",key_down);

return window.addEventListener("keyup",key_up);
});
game.core.game_loop = (function game$core$game_loop(){
return window.setInterval(game.core.apply_gravity_BANG_,(1));
});
game.core.render_loop = (function game$core$render_loop(){
game.paint.draw_system_BANG_.call(null,cljs.core.select_keys.call(null,cljs.core.deref.call(null,game.core.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.Keyword(null,"planets","planets",1711765443)], null)));

return window.requestAnimationFrame(game$core$render_loop);
});
game.core.init = (function game$core$init(){
game.core.init_state_BANG_.call(null);

game.paint.setup_stacked_canvas_BANG_.call(null,new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)));

game.core.game_loop.call(null);

game.core.render_loop.call(null);

return game.core.add_key_events_BANG_.call(null);
});
game.core.$.call(null,game.core.init);

//# sourceMappingURL=core.js.map