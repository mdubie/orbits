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
return cljs.core.reset_BANG_.call(null,game.core.state,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"game-speed","game-speed",-735151727),(10),new cljs.core.Keyword(null,"t0","t0",2120162535),game.core.time_now.call(null),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),(1000),new cljs.core.Keyword(null,"height","height",1025178622),(1000)], null),new cljs.core.Keyword(null,"planets","planets",1711765443),game.initial_system.rand_centered_system.call(null)], null));
});
game.core.gravity_chan = cljs.core.async.chan.call(null,(1),cljs.core.dedupe.call(null));
game.core.apply_gravity_BANG_ = (function game$core$apply_gravity_BANG_(){
cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"dt","dt",-368444759),(game.core.time_now.call(null) - new cljs.core.Keyword(null,"t0","t0",2120162535).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state))));

cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"t0","t0",2120162535),game.core.time_now.call(null));

cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"t-calc0","t-calc0",193050866),game.core.time_now.call(null));

cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.update,new cljs.core.Keyword(null,"planets","planets",1711765443),game.mechanics.update_planets,(new cljs.core.Keyword(null,"dt","dt",-368444759).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)) / new cljs.core.Keyword(null,"game-speed","game-speed",-735151727).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state))));

return cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"t-calc1","t-calc1",-298216371),game.core.time_now.call(null));
});
game.core.go_go_gravity_BANG_ = (function game$core$go_go_gravity_BANG_(){
var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__){
return (function (state_24141){
var state_val_24142 = (state_24141[(1)]);
if((state_val_24142 === (1))){
var state_24141__$1 = state_24141;
var statearr_24143_24154 = state_24141__$1;
(statearr_24143_24154[(2)] = null);

(statearr_24143_24154[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24142 === (2))){
var inst_24131 = game.core.apply_gravity_BANG_.call(null);
var inst_24132 = cljs.core.deref.call(null,game.core.state);
var inst_24133 = new cljs.core.Keyword(null,"game-speed","game-speed",-735151727).cljs$core$IFn$_invoke$arity$1(inst_24132);
var inst_24134 = cljs.core.async.timeout.call(null,inst_24133);
var state_24141__$1 = (function (){var statearr_24144 = state_24141;
(statearr_24144[(7)] = inst_24131);

return statearr_24144;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24141__$1,(4),inst_24134);
} else {
if((state_val_24142 === (3))){
var inst_24139 = (state_24141[(2)]);
var state_24141__$1 = state_24141;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24141__$1,inst_24139);
} else {
if((state_val_24142 === (4))){
var inst_24136 = (state_24141[(2)]);
var state_24141__$1 = (function (){var statearr_24145 = state_24141;
(statearr_24145[(8)] = inst_24136);

return statearr_24145;
})();
var statearr_24146_24155 = state_24141__$1;
(statearr_24146_24155[(2)] = null);

(statearr_24146_24155[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
});})(c__19483__auto__))
;
return ((function (switch__19418__auto__,c__19483__auto__){
return (function() {
var game$core$go_go_gravity_BANG__$_state_machine__19419__auto__ = null;
var game$core$go_go_gravity_BANG__$_state_machine__19419__auto____0 = (function (){
var statearr_24150 = [null,null,null,null,null,null,null,null,null];
(statearr_24150[(0)] = game$core$go_go_gravity_BANG__$_state_machine__19419__auto__);

(statearr_24150[(1)] = (1));

return statearr_24150;
});
var game$core$go_go_gravity_BANG__$_state_machine__19419__auto____1 = (function (state_24141){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_24141);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e24151){if((e24151 instanceof Object)){
var ex__19422__auto__ = e24151;
var statearr_24152_24156 = state_24141;
(statearr_24152_24156[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24141);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24151;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24157 = state_24141;
state_24141 = G__24157;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
game$core$go_go_gravity_BANG__$_state_machine__19419__auto__ = function(state_24141){
switch(arguments.length){
case 0:
return game$core$go_go_gravity_BANG__$_state_machine__19419__auto____0.call(this);
case 1:
return game$core$go_go_gravity_BANG__$_state_machine__19419__auto____1.call(this,state_24141);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$go_go_gravity_BANG__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$go_go_gravity_BANG__$_state_machine__19419__auto____0;
game$core$go_go_gravity_BANG__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$go_go_gravity_BANG__$_state_machine__19419__auto____1;
return game$core$go_go_gravity_BANG__$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__))
})();
var state__19485__auto__ = (function (){var statearr_24153 = f__19484__auto__.call(null);
(statearr_24153[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_24153;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__))
);

return c__19483__auto__;
});
game.core.make_redraw_chan = (function game$core$make_redraw_chan(){
var redraw_chan = cljs.core.async.chan.call(null);
var request_anim = ((function (redraw_chan){
return (function (p1__24158_SHARP_){
return window.requestAnimationFrame(p1__24158_SHARP_);
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
var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__,redraw_chan){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__,redraw_chan){
return (function (state_24228){
var state_val_24229 = (state_24228[(1)]);
if((state_val_24229 === (1))){
var inst_24203 = null;
var state_24228__$1 = (function (){var statearr_24230 = state_24228;
(statearr_24230[(7)] = inst_24203);

return statearr_24230;
})();
var statearr_24231_24247 = state_24228__$1;
(statearr_24231_24247[(2)] = null);

(statearr_24231_24247[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24229 === (2))){
var state_24228__$1 = state_24228;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_24228__$1,(4),redraw_chan);
} else {
if((state_val_24229 === (3))){
var inst_24226 = (state_24228[(2)]);
var state_24228__$1 = state_24228;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_24228__$1,inst_24226);
} else {
if((state_val_24229 === (4))){
var inst_24203 = (state_24228[(7)]);
var inst_24208 = (state_24228[(8)]);
var inst_24206 = (state_24228[(2)]);
var inst_24207 = cljs.core.deref.call(null,game.core.state);
var inst_24208__$1 = new cljs.core.Keyword(null,"planets","planets",1711765443).cljs$core$IFn$_invoke$arity$1(inst_24207);
var inst_24209 = cljs.core.not_EQ_.call(null,inst_24203,inst_24208__$1);
var state_24228__$1 = (function (){var statearr_24232 = state_24228;
(statearr_24232[(9)] = inst_24206);

(statearr_24232[(8)] = inst_24208__$1);

return statearr_24232;
})();
if(inst_24209){
var statearr_24233_24248 = state_24228__$1;
(statearr_24233_24248[(1)] = (5));

} else {
var statearr_24234_24249 = state_24228__$1;
(statearr_24234_24249[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24229 === (5))){
var inst_24211 = game.core.time_now.call(null);
var inst_24212 = cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"t-draw0","t-draw0",-8340465),inst_24211);
var inst_24213 = cljs.core.deref.call(null,game.core.state);
var inst_24214 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_24215 = [new cljs.core.Keyword(null,"planets","planets",1711765443),new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475)];
var inst_24216 = (new cljs.core.PersistentVector(null,2,(5),inst_24214,inst_24215,null));
var inst_24217 = cljs.core.select_keys.call(null,inst_24213,inst_24216);
var inst_24218 = game.paint.draw_system_BANG_.call(null,"game-canvas",inst_24217);
var inst_24219 = game.core.time_now.call(null);
var inst_24220 = cljs.core.swap_BANG_.call(null,game.core.state,cljs.core.assoc,new cljs.core.Keyword(null,"t-draw1","t-draw1",-1971167082),inst_24219);
var state_24228__$1 = (function (){var statearr_24235 = state_24228;
(statearr_24235[(10)] = inst_24212);

(statearr_24235[(11)] = inst_24218);

return statearr_24235;
})();
var statearr_24236_24250 = state_24228__$1;
(statearr_24236_24250[(2)] = inst_24220);

(statearr_24236_24250[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24229 === (6))){
var state_24228__$1 = state_24228;
var statearr_24237_24251 = state_24228__$1;
(statearr_24237_24251[(2)] = null);

(statearr_24237_24251[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_24229 === (7))){
var inst_24208 = (state_24228[(8)]);
var inst_24223 = (state_24228[(2)]);
var inst_24203 = inst_24208;
var state_24228__$1 = (function (){var statearr_24238 = state_24228;
(statearr_24238[(7)] = inst_24203);

(statearr_24238[(12)] = inst_24223);

return statearr_24238;
})();
var statearr_24239_24252 = state_24228__$1;
(statearr_24239_24252[(2)] = null);

(statearr_24239_24252[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__19483__auto__,redraw_chan))
;
return ((function (switch__19418__auto__,c__19483__auto__,redraw_chan){
return (function() {
var game$core$go_go_draw_BANG__$_state_machine__19419__auto__ = null;
var game$core$go_go_draw_BANG__$_state_machine__19419__auto____0 = (function (){
var statearr_24243 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24243[(0)] = game$core$go_go_draw_BANG__$_state_machine__19419__auto__);

(statearr_24243[(1)] = (1));

return statearr_24243;
});
var game$core$go_go_draw_BANG__$_state_machine__19419__auto____1 = (function (state_24228){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_24228);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e24244){if((e24244 instanceof Object)){
var ex__19422__auto__ = e24244;
var statearr_24245_24253 = state_24228;
(statearr_24245_24253[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_24228);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e24244;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__24254 = state_24228;
state_24228 = G__24254;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
game$core$go_go_draw_BANG__$_state_machine__19419__auto__ = function(state_24228){
switch(arguments.length){
case 0:
return game$core$go_go_draw_BANG__$_state_machine__19419__auto____0.call(this);
case 1:
return game$core$go_go_draw_BANG__$_state_machine__19419__auto____1.call(this,state_24228);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
game$core$go_go_draw_BANG__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = game$core$go_go_draw_BANG__$_state_machine__19419__auto____0;
game$core$go_go_draw_BANG__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = game$core$go_go_draw_BANG__$_state_machine__19419__auto____1;
return game$core$go_go_draw_BANG__$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__,redraw_chan))
})();
var state__19485__auto__ = (function (){var statearr_24246 = f__19484__auto__.call(null);
(statearr_24246[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_24246;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__,redraw_chan))
);

return c__19483__auto__;
});
game.core.init = (function game$core$init(){
game.core.init_state_BANG_.call(null);

game.paint.size_canvas_BANG_.call(null,"game-canvas",new cljs.core.Keyword(null,"canvas-size","canvas-size",-1619638475).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,game.core.state)));

game.core.go_go_gravity_BANG_.call(null);

return game.core.go_go_draw_BANG_.call(null);
});
game.core.$.call(null,game.core.init);

//# sourceMappingURL=core.js.map