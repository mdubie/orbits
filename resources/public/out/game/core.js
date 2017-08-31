// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.core');
goog.require('cljs.core');
goog.require('game.mechanics');
goog.require('game.initial_system');
goog.require('game.paint');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_.call(null);
game.core.$ = jQuery;
game.core.state = cljs.core.atom.call(null,null);
game.core.time_now = (function game$core$time_now(){
return (window["performance"]).now();
});
game.core.init_state_BANG_ = (function game$core$init_state_BANG_(){
return cljs.core.reset_BANG_.call(null,game.core.state,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"game-speed","game-speed",-735151727),(10),new cljs.core.Keyword(null,"t0","t0",2120162535),game.core.time_now.call(null),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null),new cljs.core.Keyword(null,"planets","planets",1711765443),game.initial_system.structured_centered_system.call(null),new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.test_ship], null)], null));
});
game.core.gravity_chan = cljs.core.async.chan.call(null,(1),cljs.core.dedupe.call(null));
game.core.apply_gravity_BANG_ = (function game$core$apply_gravity_BANG_(){
cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dt","dt",-368444759),((game.core.time_now.call(null) - new cljs.core.Keyword(null,"t0","t0",2120162535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state))) / new cljs.core.Keyword(null,"game-speed","game-speed",-735151727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state))));

cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"t0","t0",2120162535),game.core.time_now.call(null));

cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.update,new cljs.core.Keyword(null,"planets","planets",1711765443),game.mechanics.update_planets,new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)));

return cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.update,new cljs.core.Keyword(null,"ships","ships",-875113158),game.mechanics.update_ships,new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)),new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)));
});
game.core.go_go_gravity_BANG_ = (function game$core$go_go_gravity_BANG_(){
var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__){
return (function (state_60758){
var state_val_60759 = (state_60758[(1)]);
if((state_val_60759 === (1))){
var state_60758__$1 = state_60758;
var statearr_60760_60771 = state_60758__$1;
(statearr_60760_60771[(2)] = null);

(statearr_60760_60771[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60759 === (2))){
var inst_60748 = game.core.apply_gravity_BANG_.call(null);
var inst_60749 = cljs.core.deref.call(null,game.core.state);
var inst_60750 = new cljs.core.Keyword(null,"game-speed","game-speed",-735151727).cljs$core$IFn$_invoke$arity$1(inst_60749);
var inst_60751 = cljs.core.async.timeout.call(null,inst_60750);
var state_60758__$1 = (function (){var statearr_60761 = state_60758;
(statearr_60761[(7)] = inst_60748);

return statearr_60761;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60758__$1,(4),inst_60751);
} else {
if((state_val_60759 === (3))){
var inst_60756 = (state_60758[(2)]);
var state_60758__$1 = state_60758;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60758__$1,inst_60756);
} else {
if((state_val_60759 === (4))){
var inst_60753 = (state_60758[(2)]);
var state_60758__$1 = (function (){var statearr_60762 = state_60758;
(statearr_60762[(8)] = inst_60753);

return statearr_60762;
})();
var statearr_60763_60772 = state_60758__$1;
(statearr_60763_60772[(2)] = null);

(statearr_60763_60772[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19425__auto__))
;
return ((function (switch__19404__auto__,c__19425__auto__){
return (function() {
var game$core$go_go_gravity_BANG__$_state_machine__19405__auto__ = null;
var game$core$go_go_gravity_BANG__$_state_machine__19405__auto____0 = (function (){
var statearr_60767 = [null,null,null,null,null,null,null,null,null];
(statearr_60767[(0)] = game$core$go_go_gravity_BANG__$_state_machine__19405__auto__);

(statearr_60767[(1)] = (1));

return statearr_60767;
});
var game$core$go_go_gravity_BANG__$_state_machine__19405__auto____1 = (function (state_60758){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_60758);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e60768){if((e60768 instanceof Object)){
var ex__19408__auto__ = e60768;
var statearr_60769_60773 = state_60758;
(statearr_60769_60773[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60758);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60768;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60774 = state_60758;
state_60758 = G__60774;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
game$core$go_go_gravity_BANG__$_state_machine__19405__auto__ = function(state_60758){
switch(arguments.length){
case 0:
return game$core$go_go_gravity_BANG__$_state_machine__19405__auto____0.call(this);
case 1:
return game$core$go_go_gravity_BANG__$_state_machine__19405__auto____1.call(this,state_60758);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$go_go_gravity_BANG__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$go_go_gravity_BANG__$_state_machine__19405__auto____0;
game$core$go_go_gravity_BANG__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$go_go_gravity_BANG__$_state_machine__19405__auto____1;
return game$core$go_go_gravity_BANG__$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__))
})();
var state__19427__auto__ = (function (){var statearr_60770 = f__19426__auto__.call(null);
(statearr_60770[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_60770;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__))
);

return c__19425__auto__;
});
game.core.make_redraw_chan = (function game$core$make_redraw_chan(){
var redraw_chan = cljs.core.async.chan.call(null);
var request_anim = ((function (redraw_chan){
return (function (p1__60775_SHARP_){
return window.requestAnimationFrame(p1__60775_SHARP_);
});})(redraw_chan))
;
var trigger_redraw = ((function (redraw_chan,request_anim){
return (function game$core$make_redraw_chan_$_trigger_redraw(){
cljs.core.async.put_BANG_.call(null,redraw_chan,(1));

return request_anim.call(null,game$core$make_redraw_chan_$_trigger_redraw);
});})(redraw_chan,request_anim))
;
request_anim.call(null,trigger_redraw);

return redraw_chan;
});
game.core.go_go_draw_BANG_ = (function game$core$go_go_draw_BANG_(){
var redraw_chan = game.core.make_redraw_chan.call(null);
var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__,redraw_chan){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__,redraw_chan){
return (function (state_60814){
var state_val_60815 = (state_60814[(1)]);
if((state_val_60815 === (1))){
var state_60814__$1 = state_60814;
var statearr_60816_60826 = state_60814__$1;
(statearr_60816_60826[(2)] = null);

(statearr_60816_60826[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_60815 === (2))){
var state_60814__$1 = state_60814;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_60814__$1,(4),redraw_chan);
} else {
if((state_val_60815 === (3))){
var inst_60812 = (state_60814[(2)]);
var state_60814__$1 = state_60814;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_60814__$1,inst_60812);
} else {
if((state_val_60815 === (4))){
var inst_60803 = (state_60814[(2)]);
var inst_60804 = cljs.core.deref.call(null,game.core.state);
var inst_60805 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_60806 = [new cljs.core.Keyword(null,"ships","ships",-875113158),new cljs.core.Keyword(null,"planets","planets",1711765443),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475)];
var inst_60807 = (new cljs.core.PersistentVector(null,3,(5),inst_60805,inst_60806,null));
var inst_60808 = cljs.core.select_keys.call(null,inst_60804,inst_60807);
var inst_60809 = game.paint.draw_system_BANG_.call(null,"game-canvas",inst_60808);
var state_60814__$1 = (function (){var statearr_60817 = state_60814;
(statearr_60817[(7)] = inst_60803);

(statearr_60817[(8)] = inst_60809);

return statearr_60817;
})();
var statearr_60818_60827 = state_60814__$1;
(statearr_60818_60827[(2)] = null);

(statearr_60818_60827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19425__auto__,redraw_chan))
;
return ((function (switch__19404__auto__,c__19425__auto__,redraw_chan){
return (function() {
var game$core$go_go_draw_BANG__$_state_machine__19405__auto__ = null;
var game$core$go_go_draw_BANG__$_state_machine__19405__auto____0 = (function (){
var statearr_60822 = [null,null,null,null,null,null,null,null,null];
(statearr_60822[(0)] = game$core$go_go_draw_BANG__$_state_machine__19405__auto__);

(statearr_60822[(1)] = (1));

return statearr_60822;
});
var game$core$go_go_draw_BANG__$_state_machine__19405__auto____1 = (function (state_60814){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_60814);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e60823){if((e60823 instanceof Object)){
var ex__19408__auto__ = e60823;
var statearr_60824_60828 = state_60814;
(statearr_60824_60828[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_60814);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e60823;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__60829 = state_60814;
state_60814 = G__60829;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
game$core$go_go_draw_BANG__$_state_machine__19405__auto__ = function(state_60814){
switch(arguments.length){
case 0:
return game$core$go_go_draw_BANG__$_state_machine__19405__auto____0.call(this);
case 1:
return game$core$go_go_draw_BANG__$_state_machine__19405__auto____1.call(this,state_60814);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$go_go_draw_BANG__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$go_go_draw_BANG__$_state_machine__19405__auto____0;
game$core$go_go_draw_BANG__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$go_go_draw_BANG__$_state_machine__19405__auto____1;
return game$core$go_go_draw_BANG__$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__,redraw_chan))
})();
var state__19427__auto__ = (function (){var statearr_60825 = f__19426__auto__.call(null);
(statearr_60825[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_60825;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__,redraw_chan))
);

return c__19425__auto__;
});
game.core.init = (function game$core$init(){
game.core.init_state_BANG_.call(null);

game.paint.size_canvas_BANG_.call(null,"game-canvas",new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)));

game.core.go_go_gravity_BANG_.call(null);

return game.core.go_go_draw_BANG_.call(null);
});
game.core.$.call(null,game.core.init);

//# sourceMappingURL=core.js.map