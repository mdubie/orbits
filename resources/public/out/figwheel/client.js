// Compiled by ClojureScript 1.7.122 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),args], null));

return args;
});
if(typeof figwheel.client.autoload !== 'undefined'){
} else {
figwheel.client.autoload = cljs.core.atom.call(null,true);
}
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
return cljs.core.swap_BANG_.call(null,figwheel.client.autoload,cljs.core.not);
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
figwheel.client.console_print = (function figwheel$client$console_print(args){
console.log.apply(console,cljs.core.into_array.call(null,args));

return args;
});
figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

return cljs.core._STAR_print_fn_STAR_ = (function() { 
var G__29240__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29240 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29241__i = 0, G__29241__a = new Array(arguments.length -  0);
while (G__29241__i < G__29241__a.length) {G__29241__a[G__29241__i] = arguments[G__29241__i + 0]; ++G__29241__i;}
  args = new cljs.core.IndexedSeq(G__29241__a,0);
} 
return G__29240__delegate.call(this,args);};
G__29240.cljs$lang$maxFixedArity = 0;
G__29240.cljs$lang$applyTo = (function (arglist__29242){
var args = cljs.core.seq(arglist__29242);
return G__29240__delegate(args);
});
G__29240.cljs$core$IFn$_invoke$arity$variadic = G__29240__delegate;
return G__29240;
})()
;
});
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__29243){
var map__29246 = p__29243;
var map__29246__$1 = ((((!((map__29246 == null)))?((((map__29246.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29246.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29246):map__29246);
var message = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__29246__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__16320__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__16308__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__16308__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__16308__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__19483__auto___29394 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___29394,ch){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___29394,ch){
return (function (state_29364){
var state_val_29365 = (state_29364[(1)]);
if((state_val_29365 === (7))){
var inst_29360 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29366_29395 = state_29364__$1;
(statearr_29366_29395[(2)] = inst_29360);

(statearr_29366_29395[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (1))){
var state_29364__$1 = state_29364;
var statearr_29367_29396 = state_29364__$1;
(statearr_29367_29396[(2)] = null);

(statearr_29367_29396[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (4))){
var inst_29323 = (state_29364[(7)]);
var inst_29323__$1 = (state_29364[(2)]);
var state_29364__$1 = (function (){var statearr_29368 = state_29364;
(statearr_29368[(7)] = inst_29323__$1);

return statearr_29368;
})();
if(cljs.core.truth_(inst_29323__$1)){
var statearr_29369_29397 = state_29364__$1;
(statearr_29369_29397[(1)] = (5));

} else {
var statearr_29370_29398 = state_29364__$1;
(statearr_29370_29398[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (15))){
var inst_29330 = (state_29364[(8)]);
var inst_29345 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_29330);
var inst_29346 = cljs.core.first.call(null,inst_29345);
var inst_29347 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_29346);
var inst_29348 = console.warn("Figwheel: Not loading code with warnings - ",inst_29347);
var state_29364__$1 = state_29364;
var statearr_29371_29399 = state_29364__$1;
(statearr_29371_29399[(2)] = inst_29348);

(statearr_29371_29399[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (13))){
var inst_29353 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29372_29400 = state_29364__$1;
(statearr_29372_29400[(2)] = inst_29353);

(statearr_29372_29400[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (6))){
var state_29364__$1 = state_29364;
var statearr_29373_29401 = state_29364__$1;
(statearr_29373_29401[(2)] = null);

(statearr_29373_29401[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (17))){
var inst_29351 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29374_29402 = state_29364__$1;
(statearr_29374_29402[(2)] = inst_29351);

(statearr_29374_29402[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (3))){
var inst_29362 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29364__$1,inst_29362);
} else {
if((state_val_29365 === (12))){
var inst_29329 = (state_29364[(9)]);
var inst_29343 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_29329,opts);
var state_29364__$1 = state_29364;
if(cljs.core.truth_(inst_29343)){
var statearr_29375_29403 = state_29364__$1;
(statearr_29375_29403[(1)] = (15));

} else {
var statearr_29376_29404 = state_29364__$1;
(statearr_29376_29404[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (2))){
var state_29364__$1 = state_29364;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29364__$1,(4),ch);
} else {
if((state_val_29365 === (11))){
var inst_29330 = (state_29364[(8)]);
var inst_29335 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29336 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_29330);
var inst_29337 = cljs.core.async.timeout.call(null,(1000));
var inst_29338 = [inst_29336,inst_29337];
var inst_29339 = (new cljs.core.PersistentVector(null,2,(5),inst_29335,inst_29338,null));
var state_29364__$1 = state_29364;
return cljs.core.async.ioc_alts_BANG_.call(null,state_29364__$1,(14),inst_29339);
} else {
if((state_val_29365 === (9))){
var state_29364__$1 = state_29364;
var statearr_29377_29405 = state_29364__$1;
(statearr_29377_29405[(2)] = null);

(statearr_29377_29405[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (5))){
var inst_29323 = (state_29364[(7)]);
var inst_29325 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_29326 = (new cljs.core.PersistentArrayMap(null,2,inst_29325,null));
var inst_29327 = (new cljs.core.PersistentHashSet(null,inst_29326,null));
var inst_29328 = figwheel.client.focus_msgs.call(null,inst_29327,inst_29323);
var inst_29329 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_29328);
var inst_29330 = cljs.core.first.call(null,inst_29328);
var inst_29331 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_29364__$1 = (function (){var statearr_29378 = state_29364;
(statearr_29378[(8)] = inst_29330);

(statearr_29378[(9)] = inst_29329);

return statearr_29378;
})();
if(cljs.core.truth_(inst_29331)){
var statearr_29379_29406 = state_29364__$1;
(statearr_29379_29406[(1)] = (8));

} else {
var statearr_29380_29407 = state_29364__$1;
(statearr_29380_29407[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (14))){
var inst_29341 = (state_29364[(2)]);
var state_29364__$1 = state_29364;
var statearr_29381_29408 = state_29364__$1;
(statearr_29381_29408[(2)] = inst_29341);

(statearr_29381_29408[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (16))){
var state_29364__$1 = state_29364;
var statearr_29382_29409 = state_29364__$1;
(statearr_29382_29409[(2)] = null);

(statearr_29382_29409[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (10))){
var inst_29356 = (state_29364[(2)]);
var state_29364__$1 = (function (){var statearr_29383 = state_29364;
(statearr_29383[(10)] = inst_29356);

return statearr_29383;
})();
var statearr_29384_29410 = state_29364__$1;
(statearr_29384_29410[(2)] = null);

(statearr_29384_29410[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29365 === (8))){
var inst_29329 = (state_29364[(9)]);
var inst_29333 = figwheel.client.reload_file_state_QMARK_.call(null,inst_29329,opts);
var state_29364__$1 = state_29364;
if(cljs.core.truth_(inst_29333)){
var statearr_29385_29411 = state_29364__$1;
(statearr_29385_29411[(1)] = (11));

} else {
var statearr_29386_29412 = state_29364__$1;
(statearr_29386_29412[(1)] = (12));

}

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
}
}
}
}
}
}
}
}
}
}
});})(c__19483__auto___29394,ch))
;
return ((function (switch__19418__auto__,c__19483__auto___29394,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19419__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19419__auto____0 = (function (){
var statearr_29390 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29390[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19419__auto__);

(statearr_29390[(1)] = (1));

return statearr_29390;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19419__auto____1 = (function (state_29364){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_29364);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e29391){if((e29391 instanceof Object)){
var ex__19422__auto__ = e29391;
var statearr_29392_29413 = state_29364;
(statearr_29392_29413[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29364);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29391;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29414 = state_29364;
state_29364 = G__29414;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19419__auto__ = function(state_29364){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19419__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19419__auto____1.call(this,state_29364);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19419__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19419__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___29394,ch))
})();
var state__19485__auto__ = (function (){var statearr_29393 = f__19484__auto__.call(null);
(statearr_29393[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___29394);

return statearr_29393;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___29394,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__29415_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__29415_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_29422 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_29422){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_29420 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_29421 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_29420,_STAR_print_newline_STAR_29421,base_path_29422){
return (function() { 
var G__29423__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__29423 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__29424__i = 0, G__29424__a = new Array(arguments.length -  0);
while (G__29424__i < G__29424__a.length) {G__29424__a[G__29424__i] = arguments[G__29424__i + 0]; ++G__29424__i;}
  args = new cljs.core.IndexedSeq(G__29424__a,0);
} 
return G__29423__delegate.call(this,args);};
G__29423.cljs$lang$maxFixedArity = 0;
G__29423.cljs$lang$applyTo = (function (arglist__29425){
var args = cljs.core.seq(arglist__29425);
return G__29423__delegate(args);
});
G__29423.cljs$core$IFn$_invoke$arity$variadic = G__29423__delegate;
return G__29423;
})()
;})(_STAR_print_fn_STAR_29420,_STAR_print_newline_STAR_29421,base_path_29422))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_29421;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_29420;
}}catch (e29419){if((e29419 instanceof Error)){
var e = e29419;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_29422], null));
} else {
var e = e29419;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_29422))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = {};
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__29426){
var map__29433 = p__29426;
var map__29433__$1 = ((((!((map__29433 == null)))?((((map__29433.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29433.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29433):map__29433);
var opts = map__29433__$1;
var build_id = cljs.core.get.call(null,map__29433__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__29433,map__29433__$1,opts,build_id){
return (function (p__29435){
var vec__29436 = p__29435;
var map__29437 = cljs.core.nth.call(null,vec__29436,(0),null);
var map__29437__$1 = ((((!((map__29437 == null)))?((((map__29437.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29437.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29437):map__29437);
var msg = map__29437__$1;
var msg_name = cljs.core.get.call(null,map__29437__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29436,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__29436,map__29437,map__29437__$1,msg,msg_name,_,map__29433,map__29433__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__29436,map__29437,map__29437__$1,msg,msg_name,_,map__29433,map__29433__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__29433,map__29433__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__29443){
var vec__29444 = p__29443;
var map__29445 = cljs.core.nth.call(null,vec__29444,(0),null);
var map__29445__$1 = ((((!((map__29445 == null)))?((((map__29445.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29445.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29445):map__29445);
var msg = map__29445__$1;
var msg_name = cljs.core.get.call(null,map__29445__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29444,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__29447){
var map__29457 = p__29447;
var map__29457__$1 = ((((!((map__29457 == null)))?((((map__29457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29457):map__29457);
var on_compile_warning = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__29457__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__29457,map__29457__$1,on_compile_warning,on_compile_fail){
return (function (p__29459){
var vec__29460 = p__29459;
var map__29461 = cljs.core.nth.call(null,vec__29460,(0),null);
var map__29461__$1 = ((((!((map__29461 == null)))?((((map__29461.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29461.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29461):map__29461);
var msg = map__29461__$1;
var msg_name = cljs.core.get.call(null,map__29461__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__29460,(1));
var pred__29463 = cljs.core._EQ_;
var expr__29464 = msg_name;
if(cljs.core.truth_(pred__29463.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__29464))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__29463.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__29464))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__29457,map__29457__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__,msg_hist,msg_names,msg){
return (function (state_29680){
var state_val_29681 = (state_29680[(1)]);
if((state_val_29681 === (7))){
var inst_29604 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29604)){
var statearr_29682_29728 = state_29680__$1;
(statearr_29682_29728[(1)] = (8));

} else {
var statearr_29683_29729 = state_29680__$1;
(statearr_29683_29729[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (20))){
var inst_29674 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29684_29730 = state_29680__$1;
(statearr_29684_29730[(2)] = inst_29674);

(statearr_29684_29730[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (27))){
var inst_29670 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29685_29731 = state_29680__$1;
(statearr_29685_29731[(2)] = inst_29670);

(statearr_29685_29731[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (1))){
var inst_29597 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29597)){
var statearr_29686_29732 = state_29680__$1;
(statearr_29686_29732[(1)] = (2));

} else {
var statearr_29687_29733 = state_29680__$1;
(statearr_29687_29733[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (24))){
var inst_29672 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29688_29734 = state_29680__$1;
(statearr_29688_29734[(2)] = inst_29672);

(statearr_29688_29734[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (4))){
var inst_29678 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29680__$1,inst_29678);
} else {
if((state_val_29681 === (15))){
var inst_29676 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29689_29735 = state_29680__$1;
(statearr_29689_29735[(2)] = inst_29676);

(statearr_29689_29735[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (21))){
var inst_29635 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29690_29736 = state_29680__$1;
(statearr_29690_29736[(2)] = inst_29635);

(statearr_29690_29736[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (31))){
var inst_29659 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29659)){
var statearr_29691_29737 = state_29680__$1;
(statearr_29691_29737[(1)] = (34));

} else {
var statearr_29692_29738 = state_29680__$1;
(statearr_29692_29738[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (32))){
var inst_29668 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29693_29739 = state_29680__$1;
(statearr_29693_29739[(2)] = inst_29668);

(statearr_29693_29739[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (33))){
var inst_29657 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29694_29740 = state_29680__$1;
(statearr_29694_29740[(2)] = inst_29657);

(statearr_29694_29740[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (13))){
var inst_29618 = figwheel.client.heads_up.clear.call(null);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(16),inst_29618);
} else {
if((state_val_29681 === (22))){
var inst_29639 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29640 = figwheel.client.heads_up.append_message.call(null,inst_29639);
var state_29680__$1 = state_29680;
var statearr_29695_29741 = state_29680__$1;
(statearr_29695_29741[(2)] = inst_29640);

(statearr_29695_29741[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (36))){
var inst_29666 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29696_29742 = state_29680__$1;
(statearr_29696_29742[(2)] = inst_29666);

(statearr_29696_29742[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (29))){
var inst_29650 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29697_29743 = state_29680__$1;
(statearr_29697_29743[(2)] = inst_29650);

(statearr_29697_29743[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (6))){
var inst_29599 = (state_29680[(7)]);
var state_29680__$1 = state_29680;
var statearr_29698_29744 = state_29680__$1;
(statearr_29698_29744[(2)] = inst_29599);

(statearr_29698_29744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (28))){
var inst_29646 = (state_29680[(2)]);
var inst_29647 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29648 = figwheel.client.heads_up.display_warning.call(null,inst_29647);
var state_29680__$1 = (function (){var statearr_29699 = state_29680;
(statearr_29699[(8)] = inst_29646);

return statearr_29699;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(29),inst_29648);
} else {
if((state_val_29681 === (25))){
var inst_29644 = figwheel.client.heads_up.clear.call(null);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(28),inst_29644);
} else {
if((state_val_29681 === (34))){
var inst_29661 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(37),inst_29661);
} else {
if((state_val_29681 === (17))){
var inst_29626 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29700_29745 = state_29680__$1;
(statearr_29700_29745[(2)] = inst_29626);

(statearr_29700_29745[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (3))){
var inst_29616 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29616)){
var statearr_29701_29746 = state_29680__$1;
(statearr_29701_29746[(1)] = (13));

} else {
var statearr_29702_29747 = state_29680__$1;
(statearr_29702_29747[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (12))){
var inst_29612 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29703_29748 = state_29680__$1;
(statearr_29703_29748[(2)] = inst_29612);

(statearr_29703_29748[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (2))){
var inst_29599 = (state_29680[(7)]);
var inst_29599__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_29680__$1 = (function (){var statearr_29704 = state_29680;
(statearr_29704[(7)] = inst_29599__$1);

return statearr_29704;
})();
if(cljs.core.truth_(inst_29599__$1)){
var statearr_29705_29749 = state_29680__$1;
(statearr_29705_29749[(1)] = (5));

} else {
var statearr_29706_29750 = state_29680__$1;
(statearr_29706_29750[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (23))){
var inst_29642 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29642)){
var statearr_29707_29751 = state_29680__$1;
(statearr_29707_29751[(1)] = (25));

} else {
var statearr_29708_29752 = state_29680__$1;
(statearr_29708_29752[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (35))){
var state_29680__$1 = state_29680;
var statearr_29709_29753 = state_29680__$1;
(statearr_29709_29753[(2)] = null);

(statearr_29709_29753[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (19))){
var inst_29637 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29637)){
var statearr_29710_29754 = state_29680__$1;
(statearr_29710_29754[(1)] = (22));

} else {
var statearr_29711_29755 = state_29680__$1;
(statearr_29711_29755[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (11))){
var inst_29608 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29712_29756 = state_29680__$1;
(statearr_29712_29756[(2)] = inst_29608);

(statearr_29712_29756[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (9))){
var inst_29610 = figwheel.client.heads_up.clear.call(null);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(12),inst_29610);
} else {
if((state_val_29681 === (5))){
var inst_29601 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_29680__$1 = state_29680;
var statearr_29713_29757 = state_29680__$1;
(statearr_29713_29757[(2)] = inst_29601);

(statearr_29713_29757[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (14))){
var inst_29628 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29628)){
var statearr_29714_29758 = state_29680__$1;
(statearr_29714_29758[(1)] = (18));

} else {
var statearr_29715_29759 = state_29680__$1;
(statearr_29715_29759[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (26))){
var inst_29652 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_29680__$1 = state_29680;
if(cljs.core.truth_(inst_29652)){
var statearr_29716_29760 = state_29680__$1;
(statearr_29716_29760[(1)] = (30));

} else {
var statearr_29717_29761 = state_29680__$1;
(statearr_29717_29761[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (16))){
var inst_29620 = (state_29680[(2)]);
var inst_29621 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29622 = figwheel.client.format_messages.call(null,inst_29621);
var inst_29623 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29624 = figwheel.client.heads_up.display_error.call(null,inst_29622,inst_29623);
var state_29680__$1 = (function (){var statearr_29718 = state_29680;
(statearr_29718[(9)] = inst_29620);

return statearr_29718;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(17),inst_29624);
} else {
if((state_val_29681 === (30))){
var inst_29654 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29655 = figwheel.client.heads_up.display_warning.call(null,inst_29654);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(33),inst_29655);
} else {
if((state_val_29681 === (10))){
var inst_29614 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29719_29762 = state_29680__$1;
(statearr_29719_29762[(2)] = inst_29614);

(statearr_29719_29762[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (18))){
var inst_29630 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29631 = figwheel.client.format_messages.call(null,inst_29630);
var inst_29632 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_29633 = figwheel.client.heads_up.display_error.call(null,inst_29631,inst_29632);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(21),inst_29633);
} else {
if((state_val_29681 === (37))){
var inst_29663 = (state_29680[(2)]);
var state_29680__$1 = state_29680;
var statearr_29720_29763 = state_29680__$1;
(statearr_29720_29763[(2)] = inst_29663);

(statearr_29720_29763[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29681 === (8))){
var inst_29606 = figwheel.client.heads_up.flash_loaded.call(null);
var state_29680__$1 = state_29680;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29680__$1,(11),inst_29606);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__19483__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19418__auto__,c__19483__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto____0 = (function (){
var statearr_29724 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29724[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto__);

(statearr_29724[(1)] = (1));

return statearr_29724;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto____1 = (function (state_29680){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_29680);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e29725){if((e29725 instanceof Object)){
var ex__19422__auto__ = e29725;
var statearr_29726_29764 = state_29680;
(statearr_29726_29764[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29680);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29765 = state_29680;
state_29680 = G__29765;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto__ = function(state_29680){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto____1.call(this,state_29680);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__,msg_hist,msg_names,msg))
})();
var state__19485__auto__ = (function (){var statearr_29727 = f__19484__auto__.call(null);
(statearr_29727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_29727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__,msg_hist,msg_names,msg))
);

return c__19483__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19483__auto___29828 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___29828,ch){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___29828,ch){
return (function (state_29811){
var state_val_29812 = (state_29811[(1)]);
if((state_val_29812 === (1))){
var state_29811__$1 = state_29811;
var statearr_29813_29829 = state_29811__$1;
(statearr_29813_29829[(2)] = null);

(statearr_29813_29829[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (2))){
var state_29811__$1 = state_29811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29811__$1,(4),ch);
} else {
if((state_val_29812 === (3))){
var inst_29809 = (state_29811[(2)]);
var state_29811__$1 = state_29811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29811__$1,inst_29809);
} else {
if((state_val_29812 === (4))){
var inst_29799 = (state_29811[(7)]);
var inst_29799__$1 = (state_29811[(2)]);
var state_29811__$1 = (function (){var statearr_29814 = state_29811;
(statearr_29814[(7)] = inst_29799__$1);

return statearr_29814;
})();
if(cljs.core.truth_(inst_29799__$1)){
var statearr_29815_29830 = state_29811__$1;
(statearr_29815_29830[(1)] = (5));

} else {
var statearr_29816_29831 = state_29811__$1;
(statearr_29816_29831[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (5))){
var inst_29799 = (state_29811[(7)]);
var inst_29801 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_29799);
var state_29811__$1 = state_29811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29811__$1,(8),inst_29801);
} else {
if((state_val_29812 === (6))){
var state_29811__$1 = state_29811;
var statearr_29817_29832 = state_29811__$1;
(statearr_29817_29832[(2)] = null);

(statearr_29817_29832[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (7))){
var inst_29807 = (state_29811[(2)]);
var state_29811__$1 = state_29811;
var statearr_29818_29833 = state_29811__$1;
(statearr_29818_29833[(2)] = inst_29807);

(statearr_29818_29833[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29812 === (8))){
var inst_29803 = (state_29811[(2)]);
var state_29811__$1 = (function (){var statearr_29819 = state_29811;
(statearr_29819[(8)] = inst_29803);

return statearr_29819;
})();
var statearr_29820_29834 = state_29811__$1;
(statearr_29820_29834[(2)] = null);

(statearr_29820_29834[(1)] = (2));


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
}
});})(c__19483__auto___29828,ch))
;
return ((function (switch__19418__auto__,c__19483__auto___29828,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19419__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19419__auto____0 = (function (){
var statearr_29824 = [null,null,null,null,null,null,null,null,null];
(statearr_29824[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19419__auto__);

(statearr_29824[(1)] = (1));

return statearr_29824;
});
var figwheel$client$heads_up_plugin_$_state_machine__19419__auto____1 = (function (state_29811){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_29811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e29825){if((e29825 instanceof Object)){
var ex__19422__auto__ = e29825;
var statearr_29826_29835 = state_29811;
(statearr_29826_29835[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29825;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29836 = state_29811;
state_29811 = G__29836;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19419__auto__ = function(state_29811){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19419__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19419__auto____1.call(this,state_29811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19419__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19419__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___29828,ch))
})();
var state__19485__auto__ = (function (){var statearr_29827 = f__19484__auto__.call(null);
(statearr_29827[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___29828);

return statearr_29827;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___29828,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__){
return (function (state_29857){
var state_val_29858 = (state_29857[(1)]);
if((state_val_29858 === (1))){
var inst_29852 = cljs.core.async.timeout.call(null,(3000));
var state_29857__$1 = state_29857;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29857__$1,(2),inst_29852);
} else {
if((state_val_29858 === (2))){
var inst_29854 = (state_29857[(2)]);
var inst_29855 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_29857__$1 = (function (){var statearr_29859 = state_29857;
(statearr_29859[(7)] = inst_29854);

return statearr_29859;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29857__$1,inst_29855);
} else {
return null;
}
}
});})(c__19483__auto__))
;
return ((function (switch__19418__auto__,c__19483__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19419__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19419__auto____0 = (function (){
var statearr_29863 = [null,null,null,null,null,null,null,null];
(statearr_29863[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19419__auto__);

(statearr_29863[(1)] = (1));

return statearr_29863;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19419__auto____1 = (function (state_29857){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_29857);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e29864){if((e29864 instanceof Object)){
var ex__19422__auto__ = e29864;
var statearr_29865_29867 = state_29857;
(statearr_29865_29867[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29857);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29864;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29868 = state_29857;
state_29857 = G__29868;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19419__auto__ = function(state_29857){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19419__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19419__auto____1.call(this,state_29857);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19419__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19419__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__))
})();
var state__19485__auto__ = (function (){var statearr_29866 = f__19484__auto__.call(null);
(statearr_29866[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_29866;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__))
);

return c__19483__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__29869){
var map__29876 = p__29869;
var map__29876__$1 = ((((!((map__29876 == null)))?((((map__29876.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29876.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29876):map__29876);
var ed = map__29876__$1;
var formatted_exception = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__29876__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__29878_29882 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__29879_29883 = null;
var count__29880_29884 = (0);
var i__29881_29885 = (0);
while(true){
if((i__29881_29885 < count__29880_29884)){
var msg_29886 = cljs.core._nth.call(null,chunk__29879_29883,i__29881_29885);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29886);

var G__29887 = seq__29878_29882;
var G__29888 = chunk__29879_29883;
var G__29889 = count__29880_29884;
var G__29890 = (i__29881_29885 + (1));
seq__29878_29882 = G__29887;
chunk__29879_29883 = G__29888;
count__29880_29884 = G__29889;
i__29881_29885 = G__29890;
continue;
} else {
var temp__4425__auto___29891 = cljs.core.seq.call(null,seq__29878_29882);
if(temp__4425__auto___29891){
var seq__29878_29892__$1 = temp__4425__auto___29891;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29878_29892__$1)){
var c__17123__auto___29893 = cljs.core.chunk_first.call(null,seq__29878_29892__$1);
var G__29894 = cljs.core.chunk_rest.call(null,seq__29878_29892__$1);
var G__29895 = c__17123__auto___29893;
var G__29896 = cljs.core.count.call(null,c__17123__auto___29893);
var G__29897 = (0);
seq__29878_29882 = G__29894;
chunk__29879_29883 = G__29895;
count__29880_29884 = G__29896;
i__29881_29885 = G__29897;
continue;
} else {
var msg_29898 = cljs.core.first.call(null,seq__29878_29892__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_29898);

var G__29899 = cljs.core.next.call(null,seq__29878_29892__$1);
var G__29900 = null;
var G__29901 = (0);
var G__29902 = (0);
seq__29878_29882 = G__29899;
chunk__29879_29883 = G__29900;
count__29880_29884 = G__29901;
i__29881_29885 = G__29902;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on file "),cljs.core.str(new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", line "),cljs.core.str(new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(cause)),cljs.core.str(", column "),cljs.core.str(new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cause))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__29903){
var map__29906 = p__29903;
var map__29906__$1 = ((((!((map__29906 == null)))?((((map__29906.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29906.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29906):map__29906);
var w = map__29906__$1;
var message = cljs.core.get.call(null,map__29906__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(message)].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[figwheel.client.default_on_compile_warning,figwheel.client.default_on_jsload,true,figwheel.client.default_on_compile_fail,false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__16308__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__16308__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__16308__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__29914 = cljs.core.seq.call(null,plugins);
var chunk__29915 = null;
var count__29916 = (0);
var i__29917 = (0);
while(true){
if((i__29917 < count__29916)){
var vec__29918 = cljs.core._nth.call(null,chunk__29915,i__29917);
var k = cljs.core.nth.call(null,vec__29918,(0),null);
var plugin = cljs.core.nth.call(null,vec__29918,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29920 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29914,chunk__29915,count__29916,i__29917,pl_29920,vec__29918,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_29920.call(null,msg_hist);
});})(seq__29914,chunk__29915,count__29916,i__29917,pl_29920,vec__29918,k,plugin))
);
} else {
}

var G__29921 = seq__29914;
var G__29922 = chunk__29915;
var G__29923 = count__29916;
var G__29924 = (i__29917 + (1));
seq__29914 = G__29921;
chunk__29915 = G__29922;
count__29916 = G__29923;
i__29917 = G__29924;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__29914);
if(temp__4425__auto__){
var seq__29914__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__29914__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__29914__$1);
var G__29925 = cljs.core.chunk_rest.call(null,seq__29914__$1);
var G__29926 = c__17123__auto__;
var G__29927 = cljs.core.count.call(null,c__17123__auto__);
var G__29928 = (0);
seq__29914 = G__29925;
chunk__29915 = G__29926;
count__29916 = G__29927;
i__29917 = G__29928;
continue;
} else {
var vec__29919 = cljs.core.first.call(null,seq__29914__$1);
var k = cljs.core.nth.call(null,vec__29919,(0),null);
var plugin = cljs.core.nth.call(null,vec__29919,(1),null);
if(cljs.core.truth_(plugin)){
var pl_29929 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__29914,chunk__29915,count__29916,i__29917,pl_29929,vec__29919,k,plugin,seq__29914__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_29929.call(null,msg_hist);
});})(seq__29914,chunk__29915,count__29916,i__29917,pl_29929,vec__29919,k,plugin,seq__29914__$1,temp__4425__auto__))
);
} else {
}

var G__29930 = cljs.core.next.call(null,seq__29914__$1);
var G__29931 = null;
var G__29932 = (0);
var G__29933 = (0);
seq__29914 = G__29930;
chunk__29915 = G__29931;
count__29916 = G__29932;
i__29917 = G__29933;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args29934 = [];
var len__17378__auto___29937 = arguments.length;
var i__17379__auto___29938 = (0);
while(true){
if((i__17379__auto___29938 < len__17378__auto___29937)){
args29934.push((arguments[i__17379__auto___29938]));

var G__29939 = (i__17379__auto___29938 + (1));
i__17379__auto___29938 = G__29939;
continue;
} else {
}
break;
}

var G__29936 = args29934.length;
switch (G__29936) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29934.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;
figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__17385__auto__ = [];
var len__17378__auto___29945 = arguments.length;
var i__17379__auto___29946 = (0);
while(true){
if((i__17379__auto___29946 < len__17378__auto___29945)){
args__17385__auto__.push((arguments[i__17379__auto___29946]));

var G__29947 = (i__17379__auto___29946 + (1));
i__17379__auto___29946 = G__29947;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((0) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17386__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__29942){
var map__29943 = p__29942;
var map__29943__$1 = ((((!((map__29943 == null)))?((((map__29943.cljs$lang$protocol_mask$partition0$ & (64))) || (map__29943.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__29943):map__29943);
var opts = map__29943__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq29941){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq29941));
});

//# sourceMappingURL=client.js.map