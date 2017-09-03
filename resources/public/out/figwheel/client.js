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
var G__153844__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__153844 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__153845__i = 0, G__153845__a = new Array(arguments.length -  0);
while (G__153845__i < G__153845__a.length) {G__153845__a[G__153845__i] = arguments[G__153845__i + 0]; ++G__153845__i;}
  args = new cljs.core.IndexedSeq(G__153845__a,0);
} 
return G__153844__delegate.call(this,args);};
G__153844.cljs$lang$maxFixedArity = 0;
G__153844.cljs$lang$applyTo = (function (arglist__153846){
var args = cljs.core.seq(arglist__153846);
return G__153844__delegate(args);
});
G__153844.cljs$core$IFn$_invoke$arity$variadic = G__153844__delegate;
return G__153844;
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__153847){
var map__153850 = p__153847;
var map__153850__$1 = ((((!((map__153850 == null)))?((((map__153850.cljs$lang$protocol_mask$partition0$ & (64))) || (map__153850.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__153850):map__153850);
var message = cljs.core.get.call(null,map__153850__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__153850__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__19342__auto___153998 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___153998,ch){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___153998,ch){
return (function (state_153968){
var state_val_153969 = (state_153968[(1)]);
if((state_val_153969 === (7))){
var inst_153964 = (state_153968[(2)]);
var state_153968__$1 = state_153968;
var statearr_153970_153999 = state_153968__$1;
(statearr_153970_153999[(2)] = inst_153964);

(statearr_153970_153999[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (1))){
var state_153968__$1 = state_153968;
var statearr_153971_154000 = state_153968__$1;
(statearr_153971_154000[(2)] = null);

(statearr_153971_154000[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (4))){
var inst_153927 = (state_153968[(7)]);
var inst_153927__$1 = (state_153968[(2)]);
var state_153968__$1 = (function (){var statearr_153972 = state_153968;
(statearr_153972[(7)] = inst_153927__$1);

return statearr_153972;
})();
if(cljs.core.truth_(inst_153927__$1)){
var statearr_153973_154001 = state_153968__$1;
(statearr_153973_154001[(1)] = (5));

} else {
var statearr_153974_154002 = state_153968__$1;
(statearr_153974_154002[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (15))){
var inst_153934 = (state_153968[(8)]);
var inst_153949 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_153934);
var inst_153950 = cljs.core.first.call(null,inst_153949);
var inst_153951 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_153950);
var inst_153952 = console.warn("Figwheel: Not loading code with warnings - ",inst_153951);
var state_153968__$1 = state_153968;
var statearr_153975_154003 = state_153968__$1;
(statearr_153975_154003[(2)] = inst_153952);

(statearr_153975_154003[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (13))){
var inst_153957 = (state_153968[(2)]);
var state_153968__$1 = state_153968;
var statearr_153976_154004 = state_153968__$1;
(statearr_153976_154004[(2)] = inst_153957);

(statearr_153976_154004[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (6))){
var state_153968__$1 = state_153968;
var statearr_153977_154005 = state_153968__$1;
(statearr_153977_154005[(2)] = null);

(statearr_153977_154005[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (17))){
var inst_153955 = (state_153968[(2)]);
var state_153968__$1 = state_153968;
var statearr_153978_154006 = state_153968__$1;
(statearr_153978_154006[(2)] = inst_153955);

(statearr_153978_154006[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (3))){
var inst_153966 = (state_153968[(2)]);
var state_153968__$1 = state_153968;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_153968__$1,inst_153966);
} else {
if((state_val_153969 === (12))){
var inst_153933 = (state_153968[(9)]);
var inst_153947 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_153933,opts);
var state_153968__$1 = state_153968;
if(cljs.core.truth_(inst_153947)){
var statearr_153979_154007 = state_153968__$1;
(statearr_153979_154007[(1)] = (15));

} else {
var statearr_153980_154008 = state_153968__$1;
(statearr_153980_154008[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (2))){
var state_153968__$1 = state_153968;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_153968__$1,(4),ch);
} else {
if((state_val_153969 === (11))){
var inst_153934 = (state_153968[(8)]);
var inst_153939 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_153940 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_153934);
var inst_153941 = cljs.core.async.timeout.call(null,(1000));
var inst_153942 = [inst_153940,inst_153941];
var inst_153943 = (new cljs.core.PersistentVector(null,2,(5),inst_153939,inst_153942,null));
var state_153968__$1 = state_153968;
return cljs.core.async.ioc_alts_BANG_.call(null,state_153968__$1,(14),inst_153943);
} else {
if((state_val_153969 === (9))){
var state_153968__$1 = state_153968;
var statearr_153981_154009 = state_153968__$1;
(statearr_153981_154009[(2)] = null);

(statearr_153981_154009[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (5))){
var inst_153927 = (state_153968[(7)]);
var inst_153929 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_153930 = (new cljs.core.PersistentArrayMap(null,2,inst_153929,null));
var inst_153931 = (new cljs.core.PersistentHashSet(null,inst_153930,null));
var inst_153932 = figwheel.client.focus_msgs.call(null,inst_153931,inst_153927);
var inst_153933 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_153932);
var inst_153934 = cljs.core.first.call(null,inst_153932);
var inst_153935 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_153968__$1 = (function (){var statearr_153982 = state_153968;
(statearr_153982[(8)] = inst_153934);

(statearr_153982[(9)] = inst_153933);

return statearr_153982;
})();
if(cljs.core.truth_(inst_153935)){
var statearr_153983_154010 = state_153968__$1;
(statearr_153983_154010[(1)] = (8));

} else {
var statearr_153984_154011 = state_153968__$1;
(statearr_153984_154011[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (14))){
var inst_153945 = (state_153968[(2)]);
var state_153968__$1 = state_153968;
var statearr_153985_154012 = state_153968__$1;
(statearr_153985_154012[(2)] = inst_153945);

(statearr_153985_154012[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (16))){
var state_153968__$1 = state_153968;
var statearr_153986_154013 = state_153968__$1;
(statearr_153986_154013[(2)] = null);

(statearr_153986_154013[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (10))){
var inst_153960 = (state_153968[(2)]);
var state_153968__$1 = (function (){var statearr_153987 = state_153968;
(statearr_153987[(10)] = inst_153960);

return statearr_153987;
})();
var statearr_153988_154014 = state_153968__$1;
(statearr_153988_154014[(2)] = null);

(statearr_153988_154014[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_153969 === (8))){
var inst_153933 = (state_153968[(9)]);
var inst_153937 = figwheel.client.reload_file_state_QMARK_.call(null,inst_153933,opts);
var state_153968__$1 = state_153968;
if(cljs.core.truth_(inst_153937)){
var statearr_153989_154015 = state_153968__$1;
(statearr_153989_154015[(1)] = (11));

} else {
var statearr_153990_154016 = state_153968__$1;
(statearr_153990_154016[(1)] = (12));

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
});})(c__19342__auto___153998,ch))
;
return ((function (switch__19321__auto__,c__19342__auto___153998,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__19322__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__19322__auto____0 = (function (){
var statearr_153994 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_153994[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__19322__auto__);

(statearr_153994[(1)] = (1));

return statearr_153994;
});
var figwheel$client$file_reloader_plugin_$_state_machine__19322__auto____1 = (function (state_153968){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_153968);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e153995){if((e153995 instanceof Object)){
var ex__19325__auto__ = e153995;
var statearr_153996_154017 = state_153968;
(statearr_153996_154017[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_153968);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e153995;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154018 = state_153968;
state_153968 = G__154018;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__19322__auto__ = function(state_153968){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__19322__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__19322__auto____1.call(this,state_153968);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__19322__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__19322__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___153998,ch))
})();
var state__19344__auto__ = (function (){var statearr_153997 = f__19343__auto__.call(null);
(statearr_153997[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___153998);

return statearr_153997;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___153998,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__154019_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__154019_SHARP_));
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
var base_path_154026 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_154026){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{var _STAR_print_fn_STAR_154024 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR_154025 = cljs.core._STAR_print_newline_STAR_;
cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_fn_STAR_154024,_STAR_print_newline_STAR_154025,base_path_154026){
return (function() { 
var G__154027__delegate = function (args){
return figwheel.client.figwheel_repl_print.call(null,figwheel.client.console_print.call(null,args));
};
var G__154027 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__154028__i = 0, G__154028__a = new Array(arguments.length -  0);
while (G__154028__i < G__154028__a.length) {G__154028__a[G__154028__i] = arguments[G__154028__i + 0]; ++G__154028__i;}
  args = new cljs.core.IndexedSeq(G__154028__a,0);
} 
return G__154027__delegate.call(this,args);};
G__154027.cljs$lang$maxFixedArity = 0;
G__154027.cljs$lang$applyTo = (function (arglist__154029){
var args = cljs.core.seq(arglist__154029);
return G__154027__delegate(args);
});
G__154027.cljs$core$IFn$_invoke$arity$variadic = G__154027__delegate;
return G__154027;
})()
;})(_STAR_print_fn_STAR_154024,_STAR_print_newline_STAR_154025,base_path_154026))
;

cljs.core._STAR_print_newline_STAR_ = false;

try{return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),[cljs.core.str(figwheel.client.utils.eval_helper.call(null,code,opts))].join('')], null));
}finally {cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_154025;

cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_154024;
}}catch (e154023){if((e154023 instanceof Error)){
var e = e154023;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_154026], null));
} else {
var e = e154023;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}});})(base_path_154026))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__154030){
var map__154037 = p__154030;
var map__154037__$1 = ((((!((map__154037 == null)))?((((map__154037.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154037.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154037):map__154037);
var opts = map__154037__$1;
var build_id = cljs.core.get.call(null,map__154037__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__154037,map__154037__$1,opts,build_id){
return (function (p__154039){
var vec__154040 = p__154039;
var map__154041 = cljs.core.nth.call(null,vec__154040,(0),null);
var map__154041__$1 = ((((!((map__154041 == null)))?((((map__154041.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154041.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154041):map__154041);
var msg = map__154041__$1;
var msg_name = cljs.core.get.call(null,map__154041__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__154040,(1));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__154040,map__154041,map__154041__$1,msg,msg_name,_,map__154037,map__154037__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__154040,map__154041,map__154041__$1,msg,msg_name,_,map__154037,map__154037__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__154037,map__154037__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__154047){
var vec__154048 = p__154047;
var map__154049 = cljs.core.nth.call(null,vec__154048,(0),null);
var map__154049__$1 = ((((!((map__154049 == null)))?((((map__154049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154049):map__154049);
var msg = map__154049__$1;
var msg_name = cljs.core.get.call(null,map__154049__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__154048,(1));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__154051){
var map__154061 = p__154051;
var map__154061__$1 = ((((!((map__154061 == null)))?((((map__154061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154061):map__154061);
var on_compile_warning = cljs.core.get.call(null,map__154061__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__154061__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__154061,map__154061__$1,on_compile_warning,on_compile_fail){
return (function (p__154063){
var vec__154064 = p__154063;
var map__154065 = cljs.core.nth.call(null,vec__154064,(0),null);
var map__154065__$1 = ((((!((map__154065 == null)))?((((map__154065.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154065.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154065):map__154065);
var msg = map__154065__$1;
var msg_name = cljs.core.get.call(null,map__154065__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = cljs.core.nthnext.call(null,vec__154064,(1));
var pred__154067 = cljs.core._EQ_;
var expr__154068 = msg_name;
if(cljs.core.truth_(pred__154067.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__154068))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__154067.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__154068))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__154061,map__154061__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,msg_hist,msg_names,msg){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__,msg_hist,msg_names,msg){
return (function (state_154284){
var state_val_154285 = (state_154284[(1)]);
if((state_val_154285 === (7))){
var inst_154208 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154208)){
var statearr_154286_154332 = state_154284__$1;
(statearr_154286_154332[(1)] = (8));

} else {
var statearr_154287_154333 = state_154284__$1;
(statearr_154287_154333[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (20))){
var inst_154278 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154288_154334 = state_154284__$1;
(statearr_154288_154334[(2)] = inst_154278);

(statearr_154288_154334[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (27))){
var inst_154274 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154289_154335 = state_154284__$1;
(statearr_154289_154335[(2)] = inst_154274);

(statearr_154289_154335[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (1))){
var inst_154201 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154201)){
var statearr_154290_154336 = state_154284__$1;
(statearr_154290_154336[(1)] = (2));

} else {
var statearr_154291_154337 = state_154284__$1;
(statearr_154291_154337[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (24))){
var inst_154276 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154292_154338 = state_154284__$1;
(statearr_154292_154338[(2)] = inst_154276);

(statearr_154292_154338[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (4))){
var inst_154282 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154284__$1,inst_154282);
} else {
if((state_val_154285 === (15))){
var inst_154280 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154293_154339 = state_154284__$1;
(statearr_154293_154339[(2)] = inst_154280);

(statearr_154293_154339[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (21))){
var inst_154239 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154294_154340 = state_154284__$1;
(statearr_154294_154340[(2)] = inst_154239);

(statearr_154294_154340[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (31))){
var inst_154263 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154263)){
var statearr_154295_154341 = state_154284__$1;
(statearr_154295_154341[(1)] = (34));

} else {
var statearr_154296_154342 = state_154284__$1;
(statearr_154296_154342[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (32))){
var inst_154272 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154297_154343 = state_154284__$1;
(statearr_154297_154343[(2)] = inst_154272);

(statearr_154297_154343[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (33))){
var inst_154261 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154298_154344 = state_154284__$1;
(statearr_154298_154344[(2)] = inst_154261);

(statearr_154298_154344[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (13))){
var inst_154222 = figwheel.client.heads_up.clear.call(null);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(16),inst_154222);
} else {
if((state_val_154285 === (22))){
var inst_154243 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_154244 = figwheel.client.heads_up.append_message.call(null,inst_154243);
var state_154284__$1 = state_154284;
var statearr_154299_154345 = state_154284__$1;
(statearr_154299_154345[(2)] = inst_154244);

(statearr_154299_154345[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (36))){
var inst_154270 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154300_154346 = state_154284__$1;
(statearr_154300_154346[(2)] = inst_154270);

(statearr_154300_154346[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (29))){
var inst_154254 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154301_154347 = state_154284__$1;
(statearr_154301_154347[(2)] = inst_154254);

(statearr_154301_154347[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (6))){
var inst_154203 = (state_154284[(7)]);
var state_154284__$1 = state_154284;
var statearr_154302_154348 = state_154284__$1;
(statearr_154302_154348[(2)] = inst_154203);

(statearr_154302_154348[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (28))){
var inst_154250 = (state_154284[(2)]);
var inst_154251 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_154252 = figwheel.client.heads_up.display_warning.call(null,inst_154251);
var state_154284__$1 = (function (){var statearr_154303 = state_154284;
(statearr_154303[(8)] = inst_154250);

return statearr_154303;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(29),inst_154252);
} else {
if((state_val_154285 === (25))){
var inst_154248 = figwheel.client.heads_up.clear.call(null);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(28),inst_154248);
} else {
if((state_val_154285 === (34))){
var inst_154265 = figwheel.client.heads_up.flash_loaded.call(null);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(37),inst_154265);
} else {
if((state_val_154285 === (17))){
var inst_154230 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154304_154349 = state_154284__$1;
(statearr_154304_154349[(2)] = inst_154230);

(statearr_154304_154349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (3))){
var inst_154220 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154220)){
var statearr_154305_154350 = state_154284__$1;
(statearr_154305_154350[(1)] = (13));

} else {
var statearr_154306_154351 = state_154284__$1;
(statearr_154306_154351[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (12))){
var inst_154216 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154307_154352 = state_154284__$1;
(statearr_154307_154352[(2)] = inst_154216);

(statearr_154307_154352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (2))){
var inst_154203 = (state_154284[(7)]);
var inst_154203__$1 = cljs.core.deref.call(null,figwheel.client.autoload);
var state_154284__$1 = (function (){var statearr_154308 = state_154284;
(statearr_154308[(7)] = inst_154203__$1);

return statearr_154308;
})();
if(cljs.core.truth_(inst_154203__$1)){
var statearr_154309_154353 = state_154284__$1;
(statearr_154309_154353[(1)] = (5));

} else {
var statearr_154310_154354 = state_154284__$1;
(statearr_154310_154354[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (23))){
var inst_154246 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154246)){
var statearr_154311_154355 = state_154284__$1;
(statearr_154311_154355[(1)] = (25));

} else {
var statearr_154312_154356 = state_154284__$1;
(statearr_154312_154356[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (35))){
var state_154284__$1 = state_154284;
var statearr_154313_154357 = state_154284__$1;
(statearr_154313_154357[(2)] = null);

(statearr_154313_154357[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (19))){
var inst_154241 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154241)){
var statearr_154314_154358 = state_154284__$1;
(statearr_154314_154358[(1)] = (22));

} else {
var statearr_154315_154359 = state_154284__$1;
(statearr_154315_154359[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (11))){
var inst_154212 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154316_154360 = state_154284__$1;
(statearr_154316_154360[(2)] = inst_154212);

(statearr_154316_154360[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (9))){
var inst_154214 = figwheel.client.heads_up.clear.call(null);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(12),inst_154214);
} else {
if((state_val_154285 === (5))){
var inst_154205 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_154284__$1 = state_154284;
var statearr_154317_154361 = state_154284__$1;
(statearr_154317_154361[(2)] = inst_154205);

(statearr_154317_154361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (14))){
var inst_154232 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154232)){
var statearr_154318_154362 = state_154284__$1;
(statearr_154318_154362[(1)] = (18));

} else {
var statearr_154319_154363 = state_154284__$1;
(statearr_154319_154363[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (26))){
var inst_154256 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_154284__$1 = state_154284;
if(cljs.core.truth_(inst_154256)){
var statearr_154320_154364 = state_154284__$1;
(statearr_154320_154364[(1)] = (30));

} else {
var statearr_154321_154365 = state_154284__$1;
(statearr_154321_154365[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (16))){
var inst_154224 = (state_154284[(2)]);
var inst_154225 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_154226 = figwheel.client.format_messages.call(null,inst_154225);
var inst_154227 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_154228 = figwheel.client.heads_up.display_error.call(null,inst_154226,inst_154227);
var state_154284__$1 = (function (){var statearr_154322 = state_154284;
(statearr_154322[(9)] = inst_154224);

return statearr_154322;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(17),inst_154228);
} else {
if((state_val_154285 === (30))){
var inst_154258 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_154259 = figwheel.client.heads_up.display_warning.call(null,inst_154258);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(33),inst_154259);
} else {
if((state_val_154285 === (10))){
var inst_154218 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154323_154366 = state_154284__$1;
(statearr_154323_154366[(2)] = inst_154218);

(statearr_154323_154366[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (18))){
var inst_154234 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_154235 = figwheel.client.format_messages.call(null,inst_154234);
var inst_154236 = new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(msg);
var inst_154237 = figwheel.client.heads_up.display_error.call(null,inst_154235,inst_154236);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(21),inst_154237);
} else {
if((state_val_154285 === (37))){
var inst_154267 = (state_154284[(2)]);
var state_154284__$1 = state_154284;
var statearr_154324_154367 = state_154284__$1;
(statearr_154324_154367[(2)] = inst_154267);

(statearr_154324_154367[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154285 === (8))){
var inst_154210 = figwheel.client.heads_up.flash_loaded.call(null);
var state_154284__$1 = state_154284;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154284__$1,(11),inst_154210);
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
});})(c__19342__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__19321__auto__,c__19342__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto____0 = (function (){
var statearr_154328 = [null,null,null,null,null,null,null,null,null,null];
(statearr_154328[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto__);

(statearr_154328[(1)] = (1));

return statearr_154328;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto____1 = (function (state_154284){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_154284);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e154329){if((e154329 instanceof Object)){
var ex__19325__auto__ = e154329;
var statearr_154330_154368 = state_154284;
(statearr_154330_154368[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154284);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154329;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154369 = state_154284;
state_154284 = G__154369;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto__ = function(state_154284){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto____1.call(this,state_154284);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__,msg_hist,msg_names,msg))
})();
var state__19344__auto__ = (function (){var statearr_154331 = f__19343__auto__.call(null);
(statearr_154331[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_154331;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,msg_hist,msg_names,msg))
);

return c__19342__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__19342__auto___154432 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___154432,ch){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___154432,ch){
return (function (state_154415){
var state_val_154416 = (state_154415[(1)]);
if((state_val_154416 === (1))){
var state_154415__$1 = state_154415;
var statearr_154417_154433 = state_154415__$1;
(statearr_154417_154433[(2)] = null);

(statearr_154417_154433[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154416 === (2))){
var state_154415__$1 = state_154415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154415__$1,(4),ch);
} else {
if((state_val_154416 === (3))){
var inst_154413 = (state_154415[(2)]);
var state_154415__$1 = state_154415;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154415__$1,inst_154413);
} else {
if((state_val_154416 === (4))){
var inst_154403 = (state_154415[(7)]);
var inst_154403__$1 = (state_154415[(2)]);
var state_154415__$1 = (function (){var statearr_154418 = state_154415;
(statearr_154418[(7)] = inst_154403__$1);

return statearr_154418;
})();
if(cljs.core.truth_(inst_154403__$1)){
var statearr_154419_154434 = state_154415__$1;
(statearr_154419_154434[(1)] = (5));

} else {
var statearr_154420_154435 = state_154415__$1;
(statearr_154420_154435[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154416 === (5))){
var inst_154403 = (state_154415[(7)]);
var inst_154405 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_154403);
var state_154415__$1 = state_154415;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154415__$1,(8),inst_154405);
} else {
if((state_val_154416 === (6))){
var state_154415__$1 = state_154415;
var statearr_154421_154436 = state_154415__$1;
(statearr_154421_154436[(2)] = null);

(statearr_154421_154436[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154416 === (7))){
var inst_154411 = (state_154415[(2)]);
var state_154415__$1 = state_154415;
var statearr_154422_154437 = state_154415__$1;
(statearr_154422_154437[(2)] = inst_154411);

(statearr_154422_154437[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_154416 === (8))){
var inst_154407 = (state_154415[(2)]);
var state_154415__$1 = (function (){var statearr_154423 = state_154415;
(statearr_154423[(8)] = inst_154407);

return statearr_154423;
})();
var statearr_154424_154438 = state_154415__$1;
(statearr_154424_154438[(2)] = null);

(statearr_154424_154438[(1)] = (2));


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
});})(c__19342__auto___154432,ch))
;
return ((function (switch__19321__auto__,c__19342__auto___154432,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__19322__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__19322__auto____0 = (function (){
var statearr_154428 = [null,null,null,null,null,null,null,null,null];
(statearr_154428[(0)] = figwheel$client$heads_up_plugin_$_state_machine__19322__auto__);

(statearr_154428[(1)] = (1));

return statearr_154428;
});
var figwheel$client$heads_up_plugin_$_state_machine__19322__auto____1 = (function (state_154415){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_154415);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e154429){if((e154429 instanceof Object)){
var ex__19325__auto__ = e154429;
var statearr_154430_154439 = state_154415;
(statearr_154430_154439[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154415);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154429;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154440 = state_154415;
state_154415 = G__154440;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__19322__auto__ = function(state_154415){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__19322__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__19322__auto____1.call(this,state_154415);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__19322__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__19322__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___154432,ch))
})();
var state__19344__auto__ = (function (){var statearr_154431 = f__19343__auto__.call(null);
(statearr_154431[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___154432);

return statearr_154431;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___154432,ch))
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
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__){
return (function (state_154461){
var state_val_154462 = (state_154461[(1)]);
if((state_val_154462 === (1))){
var inst_154456 = cljs.core.async.timeout.call(null,(3000));
var state_154461__$1 = state_154461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_154461__$1,(2),inst_154456);
} else {
if((state_val_154462 === (2))){
var inst_154458 = (state_154461[(2)]);
var inst_154459 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_154461__$1 = (function (){var statearr_154463 = state_154461;
(statearr_154463[(7)] = inst_154458);

return statearr_154463;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_154461__$1,inst_154459);
} else {
return null;
}
}
});})(c__19342__auto__))
;
return ((function (switch__19321__auto__,c__19342__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__19322__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__19322__auto____0 = (function (){
var statearr_154467 = [null,null,null,null,null,null,null,null];
(statearr_154467[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__19322__auto__);

(statearr_154467[(1)] = (1));

return statearr_154467;
});
var figwheel$client$enforce_project_plugin_$_state_machine__19322__auto____1 = (function (state_154461){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_154461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e154468){if((e154468 instanceof Object)){
var ex__19325__auto__ = e154468;
var statearr_154469_154471 = state_154461;
(statearr_154469_154471[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_154461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e154468;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__154472 = state_154461;
state_154461 = G__154472;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__19322__auto__ = function(state_154461){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__19322__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__19322__auto____1.call(this,state_154461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__19322__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__19322__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_154470 = f__19343__auto__.call(null);
(statearr_154470[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_154470;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__154473){
var map__154480 = p__154473;
var map__154480__$1 = ((((!((map__154480 == null)))?((((map__154480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154480):map__154480);
var ed = map__154480__$1;
var formatted_exception = cljs.core.get.call(null,map__154480__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__154480__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__154480__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__154482_154486 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__154483_154487 = null;
var count__154484_154488 = (0);
var i__154485_154489 = (0);
while(true){
if((i__154485_154489 < count__154484_154488)){
var msg_154490 = cljs.core._nth.call(null,chunk__154483_154487,i__154485_154489);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_154490);

var G__154491 = seq__154482_154486;
var G__154492 = chunk__154483_154487;
var G__154493 = count__154484_154488;
var G__154494 = (i__154485_154489 + (1));
seq__154482_154486 = G__154491;
chunk__154483_154487 = G__154492;
count__154484_154488 = G__154493;
i__154485_154489 = G__154494;
continue;
} else {
var temp__4425__auto___154495 = cljs.core.seq.call(null,seq__154482_154486);
if(temp__4425__auto___154495){
var seq__154482_154496__$1 = temp__4425__auto___154495;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154482_154496__$1)){
var c__17123__auto___154497 = cljs.core.chunk_first.call(null,seq__154482_154496__$1);
var G__154498 = cljs.core.chunk_rest.call(null,seq__154482_154496__$1);
var G__154499 = c__17123__auto___154497;
var G__154500 = cljs.core.count.call(null,c__17123__auto___154497);
var G__154501 = (0);
seq__154482_154486 = G__154498;
chunk__154483_154487 = G__154499;
count__154484_154488 = G__154500;
i__154485_154489 = G__154501;
continue;
} else {
var msg_154502 = cljs.core.first.call(null,seq__154482_154496__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_154502);

var G__154503 = cljs.core.next.call(null,seq__154482_154496__$1);
var G__154504 = null;
var G__154505 = (0);
var G__154506 = (0);
seq__154482_154486 = G__154503;
chunk__154483_154487 = G__154504;
count__154484_154488 = G__154505;
i__154485_154489 = G__154506;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__154507){
var map__154510 = p__154507;
var map__154510__$1 = ((((!((map__154510 == null)))?((((map__154510.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154510.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154510):map__154510);
var w = map__154510__$1;
var message = cljs.core.get.call(null,map__154510__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__154518 = cljs.core.seq.call(null,plugins);
var chunk__154519 = null;
var count__154520 = (0);
var i__154521 = (0);
while(true){
if((i__154521 < count__154520)){
var vec__154522 = cljs.core._nth.call(null,chunk__154519,i__154521);
var k = cljs.core.nth.call(null,vec__154522,(0),null);
var plugin = cljs.core.nth.call(null,vec__154522,(1),null);
if(cljs.core.truth_(plugin)){
var pl_154524 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__154518,chunk__154519,count__154520,i__154521,pl_154524,vec__154522,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_154524.call(null,msg_hist);
});})(seq__154518,chunk__154519,count__154520,i__154521,pl_154524,vec__154522,k,plugin))
);
} else {
}

var G__154525 = seq__154518;
var G__154526 = chunk__154519;
var G__154527 = count__154520;
var G__154528 = (i__154521 + (1));
seq__154518 = G__154525;
chunk__154519 = G__154526;
count__154520 = G__154527;
i__154521 = G__154528;
continue;
} else {
var temp__4425__auto__ = cljs.core.seq.call(null,seq__154518);
if(temp__4425__auto__){
var seq__154518__$1 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__154518__$1)){
var c__17123__auto__ = cljs.core.chunk_first.call(null,seq__154518__$1);
var G__154529 = cljs.core.chunk_rest.call(null,seq__154518__$1);
var G__154530 = c__17123__auto__;
var G__154531 = cljs.core.count.call(null,c__17123__auto__);
var G__154532 = (0);
seq__154518 = G__154529;
chunk__154519 = G__154530;
count__154520 = G__154531;
i__154521 = G__154532;
continue;
} else {
var vec__154523 = cljs.core.first.call(null,seq__154518__$1);
var k = cljs.core.nth.call(null,vec__154523,(0),null);
var plugin = cljs.core.nth.call(null,vec__154523,(1),null);
if(cljs.core.truth_(plugin)){
var pl_154533 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__154518,chunk__154519,count__154520,i__154521,pl_154533,vec__154523,k,plugin,seq__154518__$1,temp__4425__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_154533.call(null,msg_hist);
});})(seq__154518,chunk__154519,count__154520,i__154521,pl_154533,vec__154523,k,plugin,seq__154518__$1,temp__4425__auto__))
);
} else {
}

var G__154534 = cljs.core.next.call(null,seq__154518__$1);
var G__154535 = null;
var G__154536 = (0);
var G__154537 = (0);
seq__154518 = G__154534;
chunk__154519 = G__154535;
count__154520 = G__154536;
i__154521 = G__154537;
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
var args154538 = [];
var len__17378__auto___154541 = arguments.length;
var i__17379__auto___154542 = (0);
while(true){
if((i__17379__auto___154542 < len__17378__auto___154541)){
args154538.push((arguments[i__17379__auto___154542]));

var G__154543 = (i__17379__auto___154542 + (1));
i__17379__auto___154542 = G__154543;
continue;
} else {
}
break;
}

var G__154540 = args154538.length;
switch (G__154540) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args154538.length)].join('')));

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
var len__17378__auto___154549 = arguments.length;
var i__17379__auto___154550 = (0);
while(true){
if((i__17379__auto___154550 < len__17378__auto___154549)){
args__17385__auto__.push((arguments[i__17379__auto___154550]));

var G__154551 = (i__17379__auto___154550 + (1));
i__17379__auto___154550 = G__154551;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((0) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((0)),(0))):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__17386__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__154546){
var map__154547 = p__154546;
var map__154547__$1 = ((((!((map__154547 == null)))?((((map__154547.cljs$lang$protocol_mask$partition0$ & (64))) || (map__154547.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__154547):map__154547);
var opts = map__154547__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq154545){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq154545));
});

//# sourceMappingURL=client.js.map