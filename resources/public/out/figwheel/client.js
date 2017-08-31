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
var G__64861__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__64861 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__64862__i = 0, G__64862__a = new Array(arguments.length -  0);
while (G__64862__i < G__64862__a.length) {G__64862__a[G__64862__i] = arguments[G__64862__i + 0]; ++G__64862__i;}
  args = new cljs.core.IndexedSeq(G__64862__a,0);
} 
return G__64861__delegate.call(this,args);};
G__64861.cljs$lang$maxFixedArity = 0;
G__64861.cljs$lang$applyTo = (function (arglist__64863){
var args = cljs.core.seq(arglist__64863);
return G__64861__delegate(args);
});
G__64861.cljs$core$IFn$_invoke$arity$variadic = G__64861__delegate;
return G__64861;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__64864){
var map__64867 = p__64864;
var map__64867__$1 = ((((!((map__64867 == null)))?((((map__64867.cljs$lang$protocol_mask$partition0$ & (64))) || (map__64867.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__64867):map__64867);
var message = cljs.core.get.call(null,map__64867__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__64867__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19425__auto___65015 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___65015,ch){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___65015,ch){
return (function (state_64985){
var state_val_64986 = (state_64985[(1)]);
if((state_val_64986 === (7))){
var inst_64981 = (state_64985[(2)]);
var state_64985__$1 = state_64985;
var statearr_64987_65016 = state_64985__$1;
(statearr_64987_65016[(2)] = inst_64981);

(statearr_64987_65016[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (1))){
var state_64985__$1 = state_64985;
var statearr_64988_65017 = state_64985__$1;
(statearr_64988_65017[(2)] = null);

(statearr_64988_65017[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (4))){
var inst_64944 = (state_64985[(7)]);
var inst_64944__$1 = (state_64985[(2)]);
var state_64985__$1 = (function (){var statearr_64989 = state_64985;
(statearr_64989[(7)] = inst_64944__$1);

return statearr_64989;
})();
if(cljs.core.truth_(inst_64944__$1)){
var statearr_64990_65018 = state_64985__$1;
(statearr_64990_65018[(1)] = (5));

} else {
var statearr_64991_65019 = state_64985__$1;
(statearr_64991_65019[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (15))){
var inst_64951 = (state_64985[(8)]);
var inst_64966 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_64951);
var inst_64967 = cljs.core.first.call(null,inst_64966);
var inst_64968 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_64967);
var inst_64969 = console.warn("Figwheel: Not loading code with warnings - ",inst_64968);
var state_64985__$1 = state_64985;
var statearr_64992_65020 = state_64985__$1;
(statearr_64992_65020[(2)] = inst_64969);

(statearr_64992_65020[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (13))){
var inst_64974 = (state_64985[(2)]);
var state_64985__$1 = state_64985;
var statearr_64993_65021 = state_64985__$1;
(statearr_64993_65021[(2)] = inst_64974);

(statearr_64993_65021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (6))){
var state_64985__$1 = state_64985;
var statearr_64994_65022 = state_64985__$1;
(statearr_64994_65022[(2)] = null);

(statearr_64994_65022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (17))){
var inst_64972 = (state_64985[(2)]);
var state_64985__$1 = state_64985;
var statearr_64995_65023 = state_64985__$1;
(statearr_64995_65023[(2)] = inst_64972);

(statearr_64995_65023[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (3))){
var inst_64983 = (state_64985[(2)]);
var state_64985__$1 = state_64985;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64985__$1,inst_64983);
} else {
if((state_val_64986 === (12))){
var inst_64950 = (state_64985[(9)]);
var inst_64964 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_64950,opts);
var state_64985__$1 = state_64985;
if(cljs.core.truth_(inst_64964)){
var statearr_64996_65024 = state_64985__$1;
(statearr_64996_65024[(1)] = (15));

} else {
var statearr_64997_65025 = state_64985__$1;
(statearr_64997_65025[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (2))){
var state_64985__$1 = state_64985;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64985__$1,(4),ch);
} else {
if((state_val_64986 === (11))){
var inst_64951 = (state_64985[(8)]);
var inst_64956 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_64957 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_64951);
var inst_64958 = cljs.core.async.timeout.call(null,(1000));
var inst_64959 = [inst_64957,inst_64958];
var inst_64960 = (new cljs.core.PersistentVector(null,2,(5),inst_64956,inst_64959,null));
var state_64985__$1 = state_64985;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64985__$1,(14),inst_64960);
} else {
if((state_val_64986 === (9))){
var state_64985__$1 = state_64985;
var statearr_64998_65026 = state_64985__$1;
(statearr_64998_65026[(2)] = null);

(statearr_64998_65026[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (5))){
var inst_64944 = (state_64985[(7)]);
var inst_64946 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_64947 = (new cljs.core.PersistentArrayMap(null,2,inst_64946,null));
var inst_64948 = (new cljs.core.PersistentHashSet(null,inst_64947,null));
var inst_64949 = figwheel.client.focus_msgs.call(null,inst_64948,inst_64944);
var inst_64950 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_64949);
var inst_64951 = cljs.core.first.call(null,inst_64949);
var inst_64952 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_64985__$1 = (function (){var statearr_64999 = state_64985;
(statearr_64999[(9)] = inst_64950);

(statearr_64999[(8)] = inst_64951);

return statearr_64999;
})();
if(cljs.core.truth_(inst_64952)){
var statearr_65000_65027 = state_64985__$1;
(statearr_65000_65027[(1)] = (8));

} else {
var statearr_65001_65028 = state_64985__$1;
(statearr_65001_65028[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (14))){
var inst_64962 = (state_64985[(2)]);
var state_64985__$1 = state_64985;
var statearr_65002_65029 = state_64985__$1;
(statearr_65002_65029[(2)] = inst_64962);

(statearr_65002_65029[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (16))){
var state_64985__$1 = state_64985;
var statearr_65003_65030 = state_64985__$1;
(statearr_65003_65030[(2)] = null);

(statearr_65003_65030[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (10))){
var inst_64977 = (state_64985[(2)]);
var state_64985__$1 = (function (){var statearr_65004 = state_64985;
(statearr_65004[(10)] = inst_64977);

return statearr_65004;
})();
var statearr_65005_65031 = state_64985__$1;
(statearr_65005_65031[(2)] = null);

(statearr_65005_65031[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64986 === (8))){
var inst_64950 = (state_64985[(9)]);
var inst_64954 = figwheel.client.reload_file_state_QMARK_.call(null,inst_64950,opts);
var state_64985__$1 = state_64985;
if(cljs.core.truth_(inst_64954)){
var statearr_65006_65032 = state_64985__$1;
(statearr_65006_65032[(1)] = (11));

} else {
var statearr_65007_65033 = state_64985__$1;
(statearr_65007_65033[(1)] = (12));

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
});})(c__19425__auto___65015,ch))
;
return ((function (switch__19404__auto__,c__19425__auto___65015,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19405__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19405__auto____0 = (function (){
var statearr_65011 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_65011[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19405__auto__);

(statearr_65011[(1)] = (1));

return statearr_65011;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19405__auto____1 = (function (state_64985){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64985);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e65012){if((e65012 instanceof Object)){
var ex__19408__auto__ = e65012;
var statearr_65013_65034 = state_64985;
(statearr_65013_65034[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64985);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65012;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65035 = state_64985;
state_64985 = G__65035;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19405__auto__ = function(state_64985){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19405__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19405__auto____1.call(this,state_64985);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19405__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19405__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___65015,ch))
})();
var state__19427__auto__ = (function (){var statearr_65014 = f__19426__auto__.call(null);
(statearr_65014[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___65015);

return statearr_65014;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___65015,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__65036_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__65036_SHARP_));
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
var base_path_65043 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_65043){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_65041 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_65042 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_65041,_STAR_print_newline_STAR_65042,base_path_65043){
return (function() { 
var G__65044__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__65044 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__65045__i = 0, G__65045__a = new Array(arguments.length -  0);
while (G__65045__i < G__65045__a.length) {G__65045__a[G__65045__i] = arguments[G__65045__i + 0]; ++G__65045__i;}
  args = new cljs.core.IndexedSeq(G__65045__a,0);
} 
return G__65044__delegate.call(this,args);};
G__65044.cljs$lang$maxFixedArity = 0;
G__65044.cljs$lang$applyTo = (function (arglist__65046){
var args = cljs.core.seq(arglist__65046);
return G__65044__delegate(args);
});
G__65044.cljs$core$IFn$_invoke$arity$variadic = G__65044__delegate;
return G__65044;
})()
;})(_STAR_print_fn_STAR_65041,_STAR_print_newline_STAR_65042,base_path_65043))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_65042;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_65041;
}}catch (e65040){if((e65040 instanceof Error)){
var e = e65040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_65043], null));
} else {
var e = e65040;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_65043))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__65047){
var map__65054 = p__65047;
var map__65054__$1 = ((((!((map__65054 == null)))?((((map__65054.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65054.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65054):map__65054);
var opts = map__65054__$1;
var build_id = cljs.core.get.call(null,map__65054__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__65054,map__65054__$1,opts,build_id){
return (function (p__65056){
var vec__65057 = p__65056;
var map__65058 = cljs.core.nth.call(null,vec__65057,(0),null);
var map__65058__$1 = ((((!((map__65058 == null)))?((((map__65058.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65058.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65058):map__65058);
var msg = map__65058__$1;
var msg_name = cljs.core.get.call(null,map__65058__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__65057,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__65057,map__65058,map__65058__$1,msg,msg_name,_,map__65054,map__65054__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__65057,map__65058,map__65058__$1,msg,msg_name,_,map__65054,map__65054__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__65054,map__65054__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__65064){
var vec__65065 = p__65064;
var map__65066 = cljs.core.nth.call(null,vec__65065,(0),null);
var map__65066__$1 = ((((!((map__65066 == null)))?((((map__65066.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65066.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65066):map__65066);
var msg = map__65066__$1;
var msg_name = cljs.core.get.call(null,map__65066__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__65065,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__65068){
var map__65078 = p__65068;
var map__65078__$1 = ((((!((map__65078 == null)))?((((map__65078.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65078.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65078):map__65078);
var on_compile_warning = cljs.core.get.call(null,map__65078__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__65078__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__65078,map__65078__$1,on_compile_warning,on_compile_fail){
return (function (p__65080){
var vec__65081 = p__65080;
var map__65082 = cljs.core.nth.call(null,vec__65081,(0),null);
var map__65082__$1 = ((((!((map__65082 == null)))?((((map__65082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65082):map__65082);
var msg = map__65082__$1;
var msg_name = cljs.core.get.call(null,map__65082__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__65081,(1));
var pred__65084 = cljs.core._EQ_;
var expr__65085 = msg_name;
if(cljs.core.truth_(pred__65084.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__65085))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__65084.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__65085))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__65078,map__65078__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__,msg_hist,msg_names,msg){
return (function (state_65301){
var state_val_65302 = (state_65301[(1)]);
if((state_val_65302 === (7))){
var inst_65225 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65225)){
var statearr_65303_65349 = state_65301__$1;
(statearr_65303_65349[(1)] = (8));

} else {
var statearr_65304_65350 = state_65301__$1;
(statearr_65304_65350[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (20))){
var inst_65295 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65305_65351 = state_65301__$1;
(statearr_65305_65351[(2)] = inst_65295);

(statearr_65305_65351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (27))){
var inst_65291 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65306_65352 = state_65301__$1;
(statearr_65306_65352[(2)] = inst_65291);

(statearr_65306_65352[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (1))){
var inst_65218 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65218)){
var statearr_65307_65353 = state_65301__$1;
(statearr_65307_65353[(1)] = (2));

} else {
var statearr_65308_65354 = state_65301__$1;
(statearr_65308_65354[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (24))){
var inst_65293 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65309_65355 = state_65301__$1;
(statearr_65309_65355[(2)] = inst_65293);

(statearr_65309_65355[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (4))){
var inst_65299 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65301__$1,inst_65299);
} else {
if((state_val_65302 === (15))){
var inst_65297 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65310_65356 = state_65301__$1;
(statearr_65310_65356[(2)] = inst_65297);

(statearr_65310_65356[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (21))){
var inst_65256 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65311_65357 = state_65301__$1;
(statearr_65311_65357[(2)] = inst_65256);

(statearr_65311_65357[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (31))){
var inst_65280 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65280)){
var statearr_65312_65358 = state_65301__$1;
(statearr_65312_65358[(1)] = (34));

} else {
var statearr_65313_65359 = state_65301__$1;
(statearr_65313_65359[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (32))){
var inst_65289 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65314_65360 = state_65301__$1;
(statearr_65314_65360[(2)] = inst_65289);

(statearr_65314_65360[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (33))){
var inst_65278 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65315_65361 = state_65301__$1;
(statearr_65315_65361[(2)] = inst_65278);

(statearr_65315_65361[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (13))){
var inst_65239 = figwheel.client.heads_up.clear.call(null);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(16),inst_65239);
} else {
if((state_val_65302 === (22))){
var inst_65260 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65261 = figwheel.client.heads_up.append_message.call(null,inst_65260);
var state_65301__$1 = state_65301;
var statearr_65316_65362 = state_65301__$1;
(statearr_65316_65362[(2)] = inst_65261);

(statearr_65316_65362[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (36))){
var inst_65287 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65317_65363 = state_65301__$1;
(statearr_65317_65363[(2)] = inst_65287);

(statearr_65317_65363[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (29))){
var inst_65271 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65318_65364 = state_65301__$1;
(statearr_65318_65364[(2)] = inst_65271);

(statearr_65318_65364[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (6))){
var inst_65220 = (state_65301[(7)]);
var state_65301__$1 = state_65301;
var statearr_65319_65365 = state_65301__$1;
(statearr_65319_65365[(2)] = inst_65220);

(statearr_65319_65365[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (28))){
var inst_65267 = (state_65301[(2)]);
var inst_65268 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65269 = figwheel.client.heads_up.display_warning.call(null,inst_65268);
var state_65301__$1 = (function (){var statearr_65320 = state_65301;
(statearr_65320[(8)] = inst_65267);

return statearr_65320;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(29),inst_65269);
} else {
if((state_val_65302 === (25))){
var inst_65265 = figwheel.client.heads_up.clear.call(null);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(28),inst_65265);
} else {
if((state_val_65302 === (34))){
var inst_65282 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(37),inst_65282);
} else {
if((state_val_65302 === (17))){
var inst_65247 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65321_65366 = state_65301__$1;
(statearr_65321_65366[(2)] = inst_65247);

(statearr_65321_65366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (3))){
var inst_65237 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65237)){
var statearr_65322_65367 = state_65301__$1;
(statearr_65322_65367[(1)] = (13));

} else {
var statearr_65323_65368 = state_65301__$1;
(statearr_65323_65368[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (12))){
var inst_65233 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65324_65369 = state_65301__$1;
(statearr_65324_65369[(2)] = inst_65233);

(statearr_65324_65369[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (2))){
var inst_65220 = (state_65301[(7)]);
var inst_65220__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_65301__$1 = (function (){var statearr_65325 = state_65301;
(statearr_65325[(7)] = inst_65220__$1);

return statearr_65325;
})();
if(cljs.core.truth_(inst_65220__$1)){
var statearr_65326_65370 = state_65301__$1;
(statearr_65326_65370[(1)] = (5));

} else {
var statearr_65327_65371 = state_65301__$1;
(statearr_65327_65371[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (23))){
var inst_65263 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65263)){
var statearr_65328_65372 = state_65301__$1;
(statearr_65328_65372[(1)] = (25));

} else {
var statearr_65329_65373 = state_65301__$1;
(statearr_65329_65373[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (35))){
var state_65301__$1 = state_65301;
var statearr_65330_65374 = state_65301__$1;
(statearr_65330_65374[(2)] = null);

(statearr_65330_65374[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (19))){
var inst_65258 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65258)){
var statearr_65331_65375 = state_65301__$1;
(statearr_65331_65375[(1)] = (22));

} else {
var statearr_65332_65376 = state_65301__$1;
(statearr_65332_65376[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (11))){
var inst_65229 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65333_65377 = state_65301__$1;
(statearr_65333_65377[(2)] = inst_65229);

(statearr_65333_65377[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (9))){
var inst_65231 = figwheel.client.heads_up.clear.call(null);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(12),inst_65231);
} else {
if((state_val_65302 === (5))){
var inst_65222 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_65301__$1 = state_65301;
var statearr_65334_65378 = state_65301__$1;
(statearr_65334_65378[(2)] = inst_65222);

(statearr_65334_65378[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (14))){
var inst_65249 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65249)){
var statearr_65335_65379 = state_65301__$1;
(statearr_65335_65379[(1)] = (18));

} else {
var statearr_65336_65380 = state_65301__$1;
(statearr_65336_65380[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (26))){
var inst_65273 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_65301__$1 = state_65301;
if(cljs.core.truth_(inst_65273)){
var statearr_65337_65381 = state_65301__$1;
(statearr_65337_65381[(1)] = (30));

} else {
var statearr_65338_65382 = state_65301__$1;
(statearr_65338_65382[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (16))){
var inst_65241 = (state_65301[(2)]);
var inst_65242 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65243 = figwheel.client.format_messages.call(null,inst_65242);
var inst_65244 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65245 = figwheel.client.heads_up.display_error.call(null,inst_65243,inst_65244);
var state_65301__$1 = (function (){var statearr_65339 = state_65301;
(statearr_65339[(9)] = inst_65241);

return statearr_65339;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(17),inst_65245);
} else {
if((state_val_65302 === (30))){
var inst_65275 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65276 = figwheel.client.heads_up.display_warning.call(null,inst_65275);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(33),inst_65276);
} else {
if((state_val_65302 === (10))){
var inst_65235 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65340_65383 = state_65301__$1;
(statearr_65340_65383[(2)] = inst_65235);

(statearr_65340_65383[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (18))){
var inst_65251 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65252 = figwheel.client.format_messages.call(null,inst_65251);
var inst_65253 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_65254 = figwheel.client.heads_up.display_error.call(null,inst_65252,inst_65253);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(21),inst_65254);
} else {
if((state_val_65302 === (37))){
var inst_65284 = (state_65301[(2)]);
var state_65301__$1 = state_65301;
var statearr_65341_65384 = state_65301__$1;
(statearr_65341_65384[(2)] = inst_65284);

(statearr_65341_65384[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65302 === (8))){
var inst_65227 = figwheel.client.heads_up.flash_loaded.call(null);
var state_65301__$1 = state_65301;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65301__$1,(11),inst_65227);
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
});})(c__19425__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19404__auto__,c__19425__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto____0 = (function (){
var statearr_65345 = [null,null,null,null,null,null,null,null,null,null];
(statearr_65345[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto__);

(statearr_65345[(1)] = (1));

return statearr_65345;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto____1 = (function (state_65301){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_65301);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e65346){if((e65346 instanceof Object)){
var ex__19408__auto__ = e65346;
var statearr_65347_65385 = state_65301;
(statearr_65347_65385[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65301);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65346;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65386 = state_65301;
state_65301 = G__65386;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto__ = function(state_65301){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto____1.call(this,state_65301);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__,msg_hist,msg_names,msg))
})();
var state__19427__auto__ = (function (){var statearr_65348 = f__19426__auto__.call(null);
(statearr_65348[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_65348;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__,msg_hist,msg_names,msg))
);

return c__19425__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19425__auto___65449 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___65449,ch){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___65449,ch){
return (function (state_65432){
var state_val_65433 = (state_65432[(1)]);
if((state_val_65433 === (1))){
var state_65432__$1 = state_65432;
var statearr_65434_65450 = state_65432__$1;
(statearr_65434_65450[(2)] = null);

(statearr_65434_65450[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65433 === (2))){
var state_65432__$1 = state_65432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65432__$1,(4),ch);
} else {
if((state_val_65433 === (3))){
var inst_65430 = (state_65432[(2)]);
var state_65432__$1 = state_65432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65432__$1,inst_65430);
} else {
if((state_val_65433 === (4))){
var inst_65420 = (state_65432[(7)]);
var inst_65420__$1 = (state_65432[(2)]);
var state_65432__$1 = (function (){var statearr_65435 = state_65432;
(statearr_65435[(7)] = inst_65420__$1);

return statearr_65435;
})();
if(cljs.core.truth_(inst_65420__$1)){
var statearr_65436_65451 = state_65432__$1;
(statearr_65436_65451[(1)] = (5));

} else {
var statearr_65437_65452 = state_65432__$1;
(statearr_65437_65452[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65433 === (5))){
var inst_65420 = (state_65432[(7)]);
var inst_65422 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_65420);
var state_65432__$1 = state_65432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65432__$1,(8),inst_65422);
} else {
if((state_val_65433 === (6))){
var state_65432__$1 = state_65432;
var statearr_65438_65453 = state_65432__$1;
(statearr_65438_65453[(2)] = null);

(statearr_65438_65453[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65433 === (7))){
var inst_65428 = (state_65432[(2)]);
var state_65432__$1 = state_65432;
var statearr_65439_65454 = state_65432__$1;
(statearr_65439_65454[(2)] = inst_65428);

(statearr_65439_65454[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_65433 === (8))){
var inst_65424 = (state_65432[(2)]);
var state_65432__$1 = (function (){var statearr_65440 = state_65432;
(statearr_65440[(8)] = inst_65424);

return statearr_65440;
})();
var statearr_65441_65455 = state_65432__$1;
(statearr_65441_65455[(2)] = null);

(statearr_65441_65455[(1)] = (2));


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
});})(c__19425__auto___65449,ch))
;
return ((function (switch__19404__auto__,c__19425__auto___65449,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19405__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19405__auto____0 = (function (){
var statearr_65445 = [null,null,null,null,null,null,null,null,null];
(statearr_65445[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19405__auto__);

(statearr_65445[(1)] = (1));

return statearr_65445;
});
var figwheel$client$heads_up_plugin_$_state_machine__19405__auto____1 = (function (state_65432){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_65432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e65446){if((e65446 instanceof Object)){
var ex__19408__auto__ = e65446;
var statearr_65447_65456 = state_65432;
(statearr_65447_65456[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65446;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65457 = state_65432;
state_65432 = G__65457;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19405__auto__ = function(state_65432){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19405__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19405__auto____1.call(this,state_65432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19405__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19405__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___65449,ch))
})();
var state__19427__auto__ = (function (){var statearr_65448 = f__19426__auto__.call(null);
(statearr_65448[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___65449);

return statearr_65448;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___65449,ch))
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
var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__){
return (function (state_65478){
var state_val_65479 = (state_65478[(1)]);
if((state_val_65479 === (1))){
var inst_65473 = cljs.core.async.timeout.call(null,(3000));
var state_65478__$1 = state_65478;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_65478__$1,(2),inst_65473);
} else {
if((state_val_65479 === (2))){
var inst_65475 = (state_65478[(2)]);
var inst_65476 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_65478__$1 = (function (){var statearr_65480 = state_65478;
(statearr_65480[(7)] = inst_65475);

return statearr_65480;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_65478__$1,inst_65476);
} else {
return null;
}
}
});})(c__19425__auto__))
;
return ((function (switch__19404__auto__,c__19425__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19405__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19405__auto____0 = (function (){
var statearr_65484 = [null,null,null,null,null,null,null,null];
(statearr_65484[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19405__auto__);

(statearr_65484[(1)] = (1));

return statearr_65484;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19405__auto____1 = (function (state_65478){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_65478);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e65485){if((e65485 instanceof Object)){
var ex__19408__auto__ = e65485;
var statearr_65486_65488 = state_65478;
(statearr_65486_65488[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_65478);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e65485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__65489 = state_65478;
state_65478 = G__65489;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19405__auto__ = function(state_65478){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19405__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19405__auto____1.call(this,state_65478);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19405__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19405__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__))
})();
var state__19427__auto__ = (function (){var statearr_65487 = f__19426__auto__.call(null);
(statearr_65487[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_65487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__))
);

return c__19425__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__65490){
var map__65497 = p__65490;
var map__65497__$1 = ((((!((map__65497 == null)))?((((map__65497.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65497.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65497):map__65497);
var ed = map__65497__$1;
var formatted_exception = cljs.core.get.call(null,map__65497__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__65497__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__65497__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__65499_65503 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__65500_65504 = null;
var count__65501_65505 = (0);
var i__65502_65506 = (0);
while(true){
if((i__65502_65506 < count__65501_65505)){
var msg_65507 = cljs.core._nth.call(null,chunk__65500_65504,i__65502_65506);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_65507);

var G__65508 = seq__65499_65503;
var G__65509 = chunk__65500_65504;
var G__65510 = count__65501_65505;
var G__65511 = (i__65502_65506 + (1));
seq__65499_65503 = G__65508;
chunk__65500_65504 = G__65509;
count__65501_65505 = G__65510;
i__65502_65506 = G__65511;
continue;
} else {
var temp__4425__auto___65512 = cljs.core.seq.call(null,seq__65499_65503);
if(temp__4425__auto___65512){
var seq__65499_65513__$1 = temp__4425__auto___65512;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65499_65513__$1)){
var c__17123__auto___65514 = cljs.core.chunk_first.call(null,seq__65499_65513__$1);
var G__65515 = cljs.core.chunk_rest.call(null,seq__65499_65513__$1);
var G__65516 = c__17123__auto___65514;
var G__65517 = cljs.core.count.call(null,c__17123__auto___65514);
var G__65518 = (0);
seq__65499_65503 = G__65515;
chunk__65500_65504 = G__65516;
count__65501_65505 = G__65517;
i__65502_65506 = G__65518;
continue;
} else {
var msg_65519 = cljs.core.first.call(null,seq__65499_65513__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_65519);

var G__65520 = cljs.core.next.call(null,seq__65499_65513__$1);
var G__65521 = null;
var G__65522 = (0);
var G__65523 = (0);
seq__65499_65503 = G__65520;
chunk__65500_65504 = G__65521;
count__65501_65505 = G__65522;
i__65502_65506 = G__65523;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__65524){
var map__65527 = p__65524;
var map__65527__$1 = ((((!((map__65527 == null)))?((((map__65527.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65527.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65527):map__65527);
var w = map__65527__$1;
var message = cljs.core.get.call(null,map__65527__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__65535 = cljs.core.seq.call(null,plugins);
var chunk__65536 = null;
var count__65537 = (0);
var i__65538 = (0);
while(true){
if((i__65538 < count__65537)){
var vec__65539 = cljs.core._nth.call(null,chunk__65536,i__65538);
var k = cljs.core.nth.call(null,vec__65539,(0),null);
var plugin = cljs.core.nth.call(null,vec__65539,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65541 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65535,chunk__65536,count__65537,i__65538,pl_65541,vec__65539,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_65541.call(null,msg_hist);
});})(seq__65535,chunk__65536,count__65537,i__65538,pl_65541,vec__65539,k,plugin))
);
} else {
}

var G__65542 = seq__65535;
var G__65543 = chunk__65536;
var G__65544 = count__65537;
var G__65545 = (i__65538 + (1));
seq__65535 = G__65542;
chunk__65536 = G__65543;
count__65537 = G__65544;
i__65538 = G__65545;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__65535);
if(temp__4425__auto__){
var seq__65535__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__65535__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__65535__$1);
var G__65546 = cljs.core.chunk_rest.call(null,seq__65535__$1);
var G__65547 = c__17123__auto__;
var G__65548 = cljs.core.count.call(null,c__17123__auto__);
var G__65549 = (0);
seq__65535 = G__65546;
chunk__65536 = G__65547;
count__65537 = G__65548;
i__65538 = G__65549;
continue;
} else {
var vec__65540 = cljs.core.first.call(null,seq__65535__$1);
var k = cljs.core.nth.call(null,vec__65540,(0),null);
var plugin = cljs.core.nth.call(null,vec__65540,(1),null);
if(cljs.core.truth_(plugin)){
var pl_65550 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__65535,chunk__65536,count__65537,i__65538,pl_65550,vec__65540,k,plugin,seq__65535__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_65550.call(null,msg_hist);
});})(seq__65535,chunk__65536,count__65537,i__65538,pl_65550,vec__65540,k,plugin,seq__65535__$1,temp__4425__auto__))
);
} else {
}

var G__65551 = cljs.core.next.call(null,seq__65535__$1);
var G__65552 = null;
var G__65553 = (0);
var G__65554 = (0);
seq__65535 = G__65551;
chunk__65536 = G__65552;
count__65537 = G__65553;
i__65538 = G__65554;
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
var args65555 = [];
var len__17378__auto___65558 = arguments.length;
var i__17379__auto___65559 = (0);
while(true){
if((i__17379__auto___65559 < len__17378__auto___65558)){
args65555.push((arguments[i__17379__auto___65559]));

var G__65560 = (i__17379__auto___65559 + (1));
i__17379__auto___65559 = G__65560;
continue;
} else {
}
break;
}

var G__65557 = args65555.length;
switch (G__65557) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args65555.length)].join('')));

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
var len__17378__auto___65566 = arguments.length;
var i__17379__auto___65567 = (0);
while(true){
if((i__17379__auto___65567 < len__17378__auto___65566)){
args__17385__auto__.push((arguments[i__17379__auto___65567]));

var G__65568 = (i__17379__auto___65567 + (1));
i__17379__auto___65567 = G__65568;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((0) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17386__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__65563){
var map__65564 = p__65563;
var map__65564__$1 = ((((!((map__65564 == null)))?((((map__65564.cljs$lang$protocol_mask$partition0$ & (64))) || (map__65564.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__65564):map__65564);
var opts = map__65564__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq65562){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq65562));
});

//# sourceMappingURL=client.js.map