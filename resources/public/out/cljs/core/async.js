// Compiled by ClojureScript 1.7.122 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t_cljs$core$async156062 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async156062 = (function (fn_handler,f,meta156063){
this.fn_handler = fn_handler;
this.f = f;
this.meta156063 = meta156063;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async156062.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156064,meta156063__$1){
var self__ = this;
var _156064__$1 = this;
return (new cljs.core.async.t_cljs$core$async156062(self__.fn_handler,self__.f,meta156063__$1));
});

cljs.core.async.t_cljs$core$async156062.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156064){
var self__ = this;
var _156064__$1 = this;
return self__.meta156063;
});

cljs.core.async.t_cljs$core$async156062.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async156062.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async156062.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async156062.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta156063","meta156063",-657677263,null)], null);
});

cljs.core.async.t_cljs$core$async156062.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async156062.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async156062";

cljs.core.async.t_cljs$core$async156062.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async156062");
});

cljs.core.async.__GT_t_cljs$core$async156062 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async156062(fn_handler__$1,f__$1,meta156063){
return (new cljs.core.async.t_cljs$core$async156062(fn_handler__$1,f__$1,meta156063));
});

}

return (new cljs.core.async.t_cljs$core$async156062(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || (buff.cljs$core$async$impl$protocols$UnblockingBuffer$)){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var args156067 = [];
var len__17378__auto___156070 = arguments.length;
var i__17379__auto___156071 = (0);
while(true){
if((i__17379__auto___156071 < len__17378__auto___156070)){
args156067.push((arguments[i__17379__auto___156071]));

var G__156072 = (i__17379__auto___156071 + (1));
i__17379__auto___156071 = G__156072;
continue;
} else {
}
break;
}

var G__156069 = args156067.length;
switch (G__156069) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156067.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var args156074 = [];
var len__17378__auto___156077 = arguments.length;
var i__17379__auto___156078 = (0);
while(true){
if((i__17379__auto___156078 < len__17378__auto___156077)){
args156074.push((arguments[i__17379__auto___156078]));

var G__156079 = (i__17379__auto___156078 + (1));
i__17379__auto___156078 = G__156079;
continue;
} else {
}
break;
}

var G__156076 = args156074.length;
switch (G__156076) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156074.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_156081 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_156081);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_156081,ret){
return (function (){
return fn1.call(null,val_156081);
});})(val_156081,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var args156082 = [];
var len__17378__auto___156085 = arguments.length;
var i__17379__auto___156086 = (0);
while(true){
if((i__17379__auto___156086 < len__17378__auto___156085)){
args156082.push((arguments[i__17379__auto___156086]));

var G__156087 = (i__17379__auto___156086 + (1));
i__17379__auto___156086 = G__156087;
continue;
} else {
}
break;
}

var G__156084 = args156082.length;
switch (G__156084) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156082.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__4423__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__17223__auto___156089 = n;
var x_156090 = (0);
while(true){
if((x_156090 < n__17223__auto___156089)){
(a[x_156090] = (0));

var G__156091 = (x_156090 + (1));
x_156090 = G__156091;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__156092 = (i + (1));
i = G__156092;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async156096 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async156096 = (function (alt_flag,flag,meta156097){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta156097 = meta156097;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async156096.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_156098,meta156097__$1){
var self__ = this;
var _156098__$1 = this;
return (new cljs.core.async.t_cljs$core$async156096(self__.alt_flag,self__.flag,meta156097__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async156096.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_156098){
var self__ = this;
var _156098__$1 = this;
return self__.meta156097;
});})(flag))
;

cljs.core.async.t_cljs$core$async156096.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async156096.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async156096.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async156096.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta156097","meta156097",-278320988,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async156096.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async156096.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async156096";

cljs.core.async.t_cljs$core$async156096.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async156096");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async156096 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async156096(alt_flag__$1,flag__$1,meta156097){
return (new cljs.core.async.t_cljs$core$async156096(alt_flag__$1,flag__$1,meta156097));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async156096(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async156102 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async156102 = (function (alt_handler,flag,cb,meta156103){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta156103 = meta156103;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async156102.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_156104,meta156103__$1){
var self__ = this;
var _156104__$1 = this;
return (new cljs.core.async.t_cljs$core$async156102(self__.alt_handler,self__.flag,self__.cb,meta156103__$1));
});

cljs.core.async.t_cljs$core$async156102.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_156104){
var self__ = this;
var _156104__$1 = this;
return self__.meta156103;
});

cljs.core.async.t_cljs$core$async156102.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async156102.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async156102.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async156102.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta156103","meta156103",527731457,null)], null);
});

cljs.core.async.t_cljs$core$async156102.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async156102.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async156102";

cljs.core.async.t_cljs$core$async156102.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async156102");
});

cljs.core.async.__GT_t_cljs$core$async156102 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async156102(alt_handler__$1,flag__$1,cb__$1,meta156103){
return (new cljs.core.async.t_cljs$core$async156102(alt_handler__$1,flag__$1,cb__$1,meta156103));
});

}

return (new cljs.core.async.t_cljs$core$async156102(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__156105_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__156105_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__156106_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__156106_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__16320__auto__ = wport;
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return port;
}
})()], null));
} else {
var G__156107 = (i + (1));
i = G__156107;
continue;
}
} else {
return null;
}
break;
}
})();
var or__16320__auto__ = ret;
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__4425__auto__ = (function (){var and__16308__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__16308__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__16308__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__17385__auto__ = [];
var len__17378__auto___156113 = arguments.length;
var i__17379__auto___156114 = (0);
while(true){
if((i__17379__auto___156114 < len__17378__auto___156113)){
args__17385__auto__.push((arguments[i__17379__auto___156114]));

var G__156115 = (i__17379__auto___156114 + (1));
i__17379__auto___156114 = G__156115;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((1) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17386__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__156110){
var map__156111 = p__156110;
var map__156111__$1 = ((((!((map__156111 == null)))?((((map__156111.cljs$lang$protocol_mask$partition0$ & (64))) || (map__156111.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__156111):map__156111);
var opts = map__156111__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq156108){
var G__156109 = cljs.core.first.call(null,seq156108);
var seq156108__$1 = cljs.core.next.call(null,seq156108);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__156109,seq156108__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args156116 = [];
var len__17378__auto___156166 = arguments.length;
var i__17379__auto___156167 = (0);
while(true){
if((i__17379__auto___156167 < len__17378__auto___156166)){
args156116.push((arguments[i__17379__auto___156167]));

var G__156168 = (i__17379__auto___156167 + (1));
i__17379__auto___156167 = G__156168;
continue;
} else {
}
break;
}

var G__156118 = args156116.length;
switch (G__156118) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156116.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19342__auto___156170 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___156170){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___156170){
return (function (state_156142){
var state_val_156143 = (state_156142[(1)]);
if((state_val_156143 === (7))){
var inst_156138 = (state_156142[(2)]);
var state_156142__$1 = state_156142;
var statearr_156144_156171 = state_156142__$1;
(statearr_156144_156171[(2)] = inst_156138);

(statearr_156144_156171[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (1))){
var state_156142__$1 = state_156142;
var statearr_156145_156172 = state_156142__$1;
(statearr_156145_156172[(2)] = null);

(statearr_156145_156172[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (4))){
var inst_156121 = (state_156142[(7)]);
var inst_156121__$1 = (state_156142[(2)]);
var inst_156122 = (inst_156121__$1 == null);
var state_156142__$1 = (function (){var statearr_156146 = state_156142;
(statearr_156146[(7)] = inst_156121__$1);

return statearr_156146;
})();
if(cljs.core.truth_(inst_156122)){
var statearr_156147_156173 = state_156142__$1;
(statearr_156147_156173[(1)] = (5));

} else {
var statearr_156148_156174 = state_156142__$1;
(statearr_156148_156174[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (13))){
var state_156142__$1 = state_156142;
var statearr_156149_156175 = state_156142__$1;
(statearr_156149_156175[(2)] = null);

(statearr_156149_156175[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (6))){
var inst_156121 = (state_156142[(7)]);
var state_156142__$1 = state_156142;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156142__$1,(11),to,inst_156121);
} else {
if((state_val_156143 === (3))){
var inst_156140 = (state_156142[(2)]);
var state_156142__$1 = state_156142;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156142__$1,inst_156140);
} else {
if((state_val_156143 === (12))){
var state_156142__$1 = state_156142;
var statearr_156150_156176 = state_156142__$1;
(statearr_156150_156176[(2)] = null);

(statearr_156150_156176[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (2))){
var state_156142__$1 = state_156142;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156142__$1,(4),from);
} else {
if((state_val_156143 === (11))){
var inst_156131 = (state_156142[(2)]);
var state_156142__$1 = state_156142;
if(cljs.core.truth_(inst_156131)){
var statearr_156151_156177 = state_156142__$1;
(statearr_156151_156177[(1)] = (12));

} else {
var statearr_156152_156178 = state_156142__$1;
(statearr_156152_156178[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (9))){
var state_156142__$1 = state_156142;
var statearr_156153_156179 = state_156142__$1;
(statearr_156153_156179[(2)] = null);

(statearr_156153_156179[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (5))){
var state_156142__$1 = state_156142;
if(cljs.core.truth_(close_QMARK_)){
var statearr_156154_156180 = state_156142__$1;
(statearr_156154_156180[(1)] = (8));

} else {
var statearr_156155_156181 = state_156142__$1;
(statearr_156155_156181[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (14))){
var inst_156136 = (state_156142[(2)]);
var state_156142__$1 = state_156142;
var statearr_156156_156182 = state_156142__$1;
(statearr_156156_156182[(2)] = inst_156136);

(statearr_156156_156182[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (10))){
var inst_156128 = (state_156142[(2)]);
var state_156142__$1 = state_156142;
var statearr_156157_156183 = state_156142__$1;
(statearr_156157_156183[(2)] = inst_156128);

(statearr_156157_156183[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156143 === (8))){
var inst_156125 = cljs.core.async.close_BANG_.call(null,to);
var state_156142__$1 = state_156142;
var statearr_156158_156184 = state_156142__$1;
(statearr_156158_156184[(2)] = inst_156125);

(statearr_156158_156184[(1)] = (10));


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
});})(c__19342__auto___156170))
;
return ((function (switch__19321__auto__,c__19342__auto___156170){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_156162 = [null,null,null,null,null,null,null,null];
(statearr_156162[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_156162[(1)] = (1));

return statearr_156162;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_156142){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156142);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156163){if((e156163 instanceof Object)){
var ex__19325__auto__ = e156163;
var statearr_156164_156185 = state_156142;
(statearr_156164_156185[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156142);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156163;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156186 = state_156142;
state_156142 = G__156186;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_156142){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_156142);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___156170))
})();
var state__19344__auto__ = (function (){var statearr_156165 = f__19343__auto__.call(null);
(statearr_156165[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___156170);

return statearr_156165;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___156170))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))))].join('')));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__156370){
var vec__156371 = p__156370;
var v = cljs.core.nth.call(null,vec__156371,(0),null);
var p = cljs.core.nth.call(null,vec__156371,(1),null);
var job = vec__156371;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19342__auto___156553 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___156553,res,vec__156371,v,p,job,jobs,results){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___156553,res,vec__156371,v,p,job,jobs,results){
return (function (state_156376){
var state_val_156377 = (state_156376[(1)]);
if((state_val_156377 === (1))){
var state_156376__$1 = state_156376;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156376__$1,(2),res,v);
} else {
if((state_val_156377 === (2))){
var inst_156373 = (state_156376[(2)]);
var inst_156374 = cljs.core.async.close_BANG_.call(null,res);
var state_156376__$1 = (function (){var statearr_156378 = state_156376;
(statearr_156378[(7)] = inst_156373);

return statearr_156378;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156376__$1,inst_156374);
} else {
return null;
}
}
});})(c__19342__auto___156553,res,vec__156371,v,p,job,jobs,results))
;
return ((function (switch__19321__auto__,c__19342__auto___156553,res,vec__156371,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0 = (function (){
var statearr_156382 = [null,null,null,null,null,null,null,null];
(statearr_156382[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__);

(statearr_156382[(1)] = (1));

return statearr_156382;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1 = (function (state_156376){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156376);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156383){if((e156383 instanceof Object)){
var ex__19325__auto__ = e156383;
var statearr_156384_156554 = state_156376;
(statearr_156384_156554[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156376);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156555 = state_156376;
state_156376 = G__156555;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = function(state_156376){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1.call(this,state_156376);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___156553,res,vec__156371,v,p,job,jobs,results))
})();
var state__19344__auto__ = (function (){var statearr_156385 = f__19343__auto__.call(null);
(statearr_156385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___156553);

return statearr_156385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___156553,res,vec__156371,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__156386){
var vec__156387 = p__156386;
var v = cljs.core.nth.call(null,vec__156387,(0),null);
var p = cljs.core.nth.call(null,vec__156387,(1),null);
var job = vec__156387;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__17223__auto___156556 = n;
var __156557 = (0);
while(true){
if((__156557 < n__17223__auto___156556)){
var G__156388_156558 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__156388_156558) {
case "compute":
var c__19342__auto___156560 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__156557,c__19342__auto___156560,G__156388_156558,n__17223__auto___156556,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (__156557,c__19342__auto___156560,G__156388_156558,n__17223__auto___156556,jobs,results,process,async){
return (function (state_156401){
var state_val_156402 = (state_156401[(1)]);
if((state_val_156402 === (1))){
var state_156401__$1 = state_156401;
var statearr_156403_156561 = state_156401__$1;
(statearr_156403_156561[(2)] = null);

(statearr_156403_156561[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156402 === (2))){
var state_156401__$1 = state_156401;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156401__$1,(4),jobs);
} else {
if((state_val_156402 === (3))){
var inst_156399 = (state_156401[(2)]);
var state_156401__$1 = state_156401;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156401__$1,inst_156399);
} else {
if((state_val_156402 === (4))){
var inst_156391 = (state_156401[(2)]);
var inst_156392 = process.call(null,inst_156391);
var state_156401__$1 = state_156401;
if(cljs.core.truth_(inst_156392)){
var statearr_156404_156562 = state_156401__$1;
(statearr_156404_156562[(1)] = (5));

} else {
var statearr_156405_156563 = state_156401__$1;
(statearr_156405_156563[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156402 === (5))){
var state_156401__$1 = state_156401;
var statearr_156406_156564 = state_156401__$1;
(statearr_156406_156564[(2)] = null);

(statearr_156406_156564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156402 === (6))){
var state_156401__$1 = state_156401;
var statearr_156407_156565 = state_156401__$1;
(statearr_156407_156565[(2)] = null);

(statearr_156407_156565[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156402 === (7))){
var inst_156397 = (state_156401[(2)]);
var state_156401__$1 = state_156401;
var statearr_156408_156566 = state_156401__$1;
(statearr_156408_156566[(2)] = inst_156397);

(statearr_156408_156566[(1)] = (3));


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
});})(__156557,c__19342__auto___156560,G__156388_156558,n__17223__auto___156556,jobs,results,process,async))
;
return ((function (__156557,switch__19321__auto__,c__19342__auto___156560,G__156388_156558,n__17223__auto___156556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0 = (function (){
var statearr_156412 = [null,null,null,null,null,null,null];
(statearr_156412[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__);

(statearr_156412[(1)] = (1));

return statearr_156412;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1 = (function (state_156401){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156401);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156413){if((e156413 instanceof Object)){
var ex__19325__auto__ = e156413;
var statearr_156414_156567 = state_156401;
(statearr_156414_156567[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156401);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156413;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156568 = state_156401;
state_156401 = G__156568;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = function(state_156401){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1.call(this,state_156401);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__;
})()
;})(__156557,switch__19321__auto__,c__19342__auto___156560,G__156388_156558,n__17223__auto___156556,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_156415 = f__19343__auto__.call(null);
(statearr_156415[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___156560);

return statearr_156415;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(__156557,c__19342__auto___156560,G__156388_156558,n__17223__auto___156556,jobs,results,process,async))
);


break;
case "async":
var c__19342__auto___156569 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__156557,c__19342__auto___156569,G__156388_156558,n__17223__auto___156556,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (__156557,c__19342__auto___156569,G__156388_156558,n__17223__auto___156556,jobs,results,process,async){
return (function (state_156428){
var state_val_156429 = (state_156428[(1)]);
if((state_val_156429 === (1))){
var state_156428__$1 = state_156428;
var statearr_156430_156570 = state_156428__$1;
(statearr_156430_156570[(2)] = null);

(statearr_156430_156570[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156429 === (2))){
var state_156428__$1 = state_156428;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156428__$1,(4),jobs);
} else {
if((state_val_156429 === (3))){
var inst_156426 = (state_156428[(2)]);
var state_156428__$1 = state_156428;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156428__$1,inst_156426);
} else {
if((state_val_156429 === (4))){
var inst_156418 = (state_156428[(2)]);
var inst_156419 = async.call(null,inst_156418);
var state_156428__$1 = state_156428;
if(cljs.core.truth_(inst_156419)){
var statearr_156431_156571 = state_156428__$1;
(statearr_156431_156571[(1)] = (5));

} else {
var statearr_156432_156572 = state_156428__$1;
(statearr_156432_156572[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156429 === (5))){
var state_156428__$1 = state_156428;
var statearr_156433_156573 = state_156428__$1;
(statearr_156433_156573[(2)] = null);

(statearr_156433_156573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156429 === (6))){
var state_156428__$1 = state_156428;
var statearr_156434_156574 = state_156428__$1;
(statearr_156434_156574[(2)] = null);

(statearr_156434_156574[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156429 === (7))){
var inst_156424 = (state_156428[(2)]);
var state_156428__$1 = state_156428;
var statearr_156435_156575 = state_156428__$1;
(statearr_156435_156575[(2)] = inst_156424);

(statearr_156435_156575[(1)] = (3));


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
});})(__156557,c__19342__auto___156569,G__156388_156558,n__17223__auto___156556,jobs,results,process,async))
;
return ((function (__156557,switch__19321__auto__,c__19342__auto___156569,G__156388_156558,n__17223__auto___156556,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0 = (function (){
var statearr_156439 = [null,null,null,null,null,null,null];
(statearr_156439[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__);

(statearr_156439[(1)] = (1));

return statearr_156439;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1 = (function (state_156428){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156428);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156440){if((e156440 instanceof Object)){
var ex__19325__auto__ = e156440;
var statearr_156441_156576 = state_156428;
(statearr_156441_156576[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156428);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156440;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156577 = state_156428;
state_156428 = G__156577;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = function(state_156428){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1.call(this,state_156428);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__;
})()
;})(__156557,switch__19321__auto__,c__19342__auto___156569,G__156388_156558,n__17223__auto___156556,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_156442 = f__19343__auto__.call(null);
(statearr_156442[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___156569);

return statearr_156442;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(__156557,c__19342__auto___156569,G__156388_156558,n__17223__auto___156556,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__156578 = (__156557 + (1));
__156557 = G__156578;
continue;
} else {
}
break;
}

var c__19342__auto___156579 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___156579,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___156579,jobs,results,process,async){
return (function (state_156464){
var state_val_156465 = (state_156464[(1)]);
if((state_val_156465 === (1))){
var state_156464__$1 = state_156464;
var statearr_156466_156580 = state_156464__$1;
(statearr_156466_156580[(2)] = null);

(statearr_156466_156580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156465 === (2))){
var state_156464__$1 = state_156464;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156464__$1,(4),from);
} else {
if((state_val_156465 === (3))){
var inst_156462 = (state_156464[(2)]);
var state_156464__$1 = state_156464;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156464__$1,inst_156462);
} else {
if((state_val_156465 === (4))){
var inst_156445 = (state_156464[(7)]);
var inst_156445__$1 = (state_156464[(2)]);
var inst_156446 = (inst_156445__$1 == null);
var state_156464__$1 = (function (){var statearr_156467 = state_156464;
(statearr_156467[(7)] = inst_156445__$1);

return statearr_156467;
})();
if(cljs.core.truth_(inst_156446)){
var statearr_156468_156581 = state_156464__$1;
(statearr_156468_156581[(1)] = (5));

} else {
var statearr_156469_156582 = state_156464__$1;
(statearr_156469_156582[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156465 === (5))){
var inst_156448 = cljs.core.async.close_BANG_.call(null,jobs);
var state_156464__$1 = state_156464;
var statearr_156470_156583 = state_156464__$1;
(statearr_156470_156583[(2)] = inst_156448);

(statearr_156470_156583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156465 === (6))){
var inst_156445 = (state_156464[(7)]);
var inst_156450 = (state_156464[(8)]);
var inst_156450__$1 = cljs.core.async.chan.call(null,(1));
var inst_156451 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_156452 = [inst_156445,inst_156450__$1];
var inst_156453 = (new cljs.core.PersistentVector(null,2,(5),inst_156451,inst_156452,null));
var state_156464__$1 = (function (){var statearr_156471 = state_156464;
(statearr_156471[(8)] = inst_156450__$1);

return statearr_156471;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156464__$1,(8),jobs,inst_156453);
} else {
if((state_val_156465 === (7))){
var inst_156460 = (state_156464[(2)]);
var state_156464__$1 = state_156464;
var statearr_156472_156584 = state_156464__$1;
(statearr_156472_156584[(2)] = inst_156460);

(statearr_156472_156584[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156465 === (8))){
var inst_156450 = (state_156464[(8)]);
var inst_156455 = (state_156464[(2)]);
var state_156464__$1 = (function (){var statearr_156473 = state_156464;
(statearr_156473[(9)] = inst_156455);

return statearr_156473;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156464__$1,(9),results,inst_156450);
} else {
if((state_val_156465 === (9))){
var inst_156457 = (state_156464[(2)]);
var state_156464__$1 = (function (){var statearr_156474 = state_156464;
(statearr_156474[(10)] = inst_156457);

return statearr_156474;
})();
var statearr_156475_156585 = state_156464__$1;
(statearr_156475_156585[(2)] = null);

(statearr_156475_156585[(1)] = (2));


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
});})(c__19342__auto___156579,jobs,results,process,async))
;
return ((function (switch__19321__auto__,c__19342__auto___156579,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0 = (function (){
var statearr_156479 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_156479[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__);

(statearr_156479[(1)] = (1));

return statearr_156479;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1 = (function (state_156464){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156464);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156480){if((e156480 instanceof Object)){
var ex__19325__auto__ = e156480;
var statearr_156481_156586 = state_156464;
(statearr_156481_156586[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156464);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156480;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156587 = state_156464;
state_156464 = G__156587;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = function(state_156464){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1.call(this,state_156464);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___156579,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_156482 = f__19343__auto__.call(null);
(statearr_156482[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___156579);

return statearr_156482;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___156579,jobs,results,process,async))
);


var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__,jobs,results,process,async){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__,jobs,results,process,async){
return (function (state_156520){
var state_val_156521 = (state_156520[(1)]);
if((state_val_156521 === (7))){
var inst_156516 = (state_156520[(2)]);
var state_156520__$1 = state_156520;
var statearr_156522_156588 = state_156520__$1;
(statearr_156522_156588[(2)] = inst_156516);

(statearr_156522_156588[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (20))){
var state_156520__$1 = state_156520;
var statearr_156523_156589 = state_156520__$1;
(statearr_156523_156589[(2)] = null);

(statearr_156523_156589[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (1))){
var state_156520__$1 = state_156520;
var statearr_156524_156590 = state_156520__$1;
(statearr_156524_156590[(2)] = null);

(statearr_156524_156590[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (4))){
var inst_156485 = (state_156520[(7)]);
var inst_156485__$1 = (state_156520[(2)]);
var inst_156486 = (inst_156485__$1 == null);
var state_156520__$1 = (function (){var statearr_156525 = state_156520;
(statearr_156525[(7)] = inst_156485__$1);

return statearr_156525;
})();
if(cljs.core.truth_(inst_156486)){
var statearr_156526_156591 = state_156520__$1;
(statearr_156526_156591[(1)] = (5));

} else {
var statearr_156527_156592 = state_156520__$1;
(statearr_156527_156592[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (15))){
var inst_156498 = (state_156520[(8)]);
var state_156520__$1 = state_156520;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156520__$1,(18),to,inst_156498);
} else {
if((state_val_156521 === (21))){
var inst_156511 = (state_156520[(2)]);
var state_156520__$1 = state_156520;
var statearr_156528_156593 = state_156520__$1;
(statearr_156528_156593[(2)] = inst_156511);

(statearr_156528_156593[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (13))){
var inst_156513 = (state_156520[(2)]);
var state_156520__$1 = (function (){var statearr_156529 = state_156520;
(statearr_156529[(9)] = inst_156513);

return statearr_156529;
})();
var statearr_156530_156594 = state_156520__$1;
(statearr_156530_156594[(2)] = null);

(statearr_156530_156594[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (6))){
var inst_156485 = (state_156520[(7)]);
var state_156520__$1 = state_156520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156520__$1,(11),inst_156485);
} else {
if((state_val_156521 === (17))){
var inst_156506 = (state_156520[(2)]);
var state_156520__$1 = state_156520;
if(cljs.core.truth_(inst_156506)){
var statearr_156531_156595 = state_156520__$1;
(statearr_156531_156595[(1)] = (19));

} else {
var statearr_156532_156596 = state_156520__$1;
(statearr_156532_156596[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (3))){
var inst_156518 = (state_156520[(2)]);
var state_156520__$1 = state_156520;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156520__$1,inst_156518);
} else {
if((state_val_156521 === (12))){
var inst_156495 = (state_156520[(10)]);
var state_156520__$1 = state_156520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156520__$1,(14),inst_156495);
} else {
if((state_val_156521 === (2))){
var state_156520__$1 = state_156520;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156520__$1,(4),results);
} else {
if((state_val_156521 === (19))){
var state_156520__$1 = state_156520;
var statearr_156533_156597 = state_156520__$1;
(statearr_156533_156597[(2)] = null);

(statearr_156533_156597[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (11))){
var inst_156495 = (state_156520[(2)]);
var state_156520__$1 = (function (){var statearr_156534 = state_156520;
(statearr_156534[(10)] = inst_156495);

return statearr_156534;
})();
var statearr_156535_156598 = state_156520__$1;
(statearr_156535_156598[(2)] = null);

(statearr_156535_156598[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (9))){
var state_156520__$1 = state_156520;
var statearr_156536_156599 = state_156520__$1;
(statearr_156536_156599[(2)] = null);

(statearr_156536_156599[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (5))){
var state_156520__$1 = state_156520;
if(cljs.core.truth_(close_QMARK_)){
var statearr_156537_156600 = state_156520__$1;
(statearr_156537_156600[(1)] = (8));

} else {
var statearr_156538_156601 = state_156520__$1;
(statearr_156538_156601[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (14))){
var inst_156500 = (state_156520[(11)]);
var inst_156498 = (state_156520[(8)]);
var inst_156498__$1 = (state_156520[(2)]);
var inst_156499 = (inst_156498__$1 == null);
var inst_156500__$1 = cljs.core.not.call(null,inst_156499);
var state_156520__$1 = (function (){var statearr_156539 = state_156520;
(statearr_156539[(11)] = inst_156500__$1);

(statearr_156539[(8)] = inst_156498__$1);

return statearr_156539;
})();
if(inst_156500__$1){
var statearr_156540_156602 = state_156520__$1;
(statearr_156540_156602[(1)] = (15));

} else {
var statearr_156541_156603 = state_156520__$1;
(statearr_156541_156603[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (16))){
var inst_156500 = (state_156520[(11)]);
var state_156520__$1 = state_156520;
var statearr_156542_156604 = state_156520__$1;
(statearr_156542_156604[(2)] = inst_156500);

(statearr_156542_156604[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (10))){
var inst_156492 = (state_156520[(2)]);
var state_156520__$1 = state_156520;
var statearr_156543_156605 = state_156520__$1;
(statearr_156543_156605[(2)] = inst_156492);

(statearr_156543_156605[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (18))){
var inst_156503 = (state_156520[(2)]);
var state_156520__$1 = state_156520;
var statearr_156544_156606 = state_156520__$1;
(statearr_156544_156606[(2)] = inst_156503);

(statearr_156544_156606[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156521 === (8))){
var inst_156489 = cljs.core.async.close_BANG_.call(null,to);
var state_156520__$1 = state_156520;
var statearr_156545_156607 = state_156520__$1;
(statearr_156545_156607[(2)] = inst_156489);

(statearr_156545_156607[(1)] = (10));


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
}
}
}
}
});})(c__19342__auto__,jobs,results,process,async))
;
return ((function (switch__19321__auto__,c__19342__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0 = (function (){
var statearr_156549 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_156549[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__);

(statearr_156549[(1)] = (1));

return statearr_156549;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1 = (function (state_156520){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156520);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156550){if((e156550 instanceof Object)){
var ex__19325__auto__ = e156550;
var statearr_156551_156608 = state_156520;
(statearr_156551_156608[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156550;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156609 = state_156520;
state_156520 = G__156609;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__ = function(state_156520){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1.call(this,state_156520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19322__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__,jobs,results,process,async))
})();
var state__19344__auto__ = (function (){var statearr_156552 = f__19343__auto__.call(null);
(statearr_156552[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_156552;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__,jobs,results,process,async))
);

return c__19342__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var args156610 = [];
var len__17378__auto___156613 = arguments.length;
var i__17379__auto___156614 = (0);
while(true){
if((i__17379__auto___156614 < len__17378__auto___156613)){
args156610.push((arguments[i__17379__auto___156614]));

var G__156615 = (i__17379__auto___156614 + (1));
i__17379__auto___156614 = G__156615;
continue;
} else {
}
break;
}

var G__156612 = args156610.length;
switch (G__156612) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156610.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var args156617 = [];
var len__17378__auto___156620 = arguments.length;
var i__17379__auto___156621 = (0);
while(true){
if((i__17379__auto___156621 < len__17378__auto___156620)){
args156617.push((arguments[i__17379__auto___156621]));

var G__156622 = (i__17379__auto___156621 + (1));
i__17379__auto___156621 = G__156622;
continue;
} else {
}
break;
}

var G__156619 = args156617.length;
switch (G__156619) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156617.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var args156624 = [];
var len__17378__auto___156677 = arguments.length;
var i__17379__auto___156678 = (0);
while(true){
if((i__17379__auto___156678 < len__17378__auto___156677)){
args156624.push((arguments[i__17379__auto___156678]));

var G__156679 = (i__17379__auto___156678 + (1));
i__17379__auto___156678 = G__156679;
continue;
} else {
}
break;
}

var G__156626 = args156624.length;
switch (G__156626) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156624.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19342__auto___156681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___156681,tc,fc){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___156681,tc,fc){
return (function (state_156652){
var state_val_156653 = (state_156652[(1)]);
if((state_val_156653 === (7))){
var inst_156648 = (state_156652[(2)]);
var state_156652__$1 = state_156652;
var statearr_156654_156682 = state_156652__$1;
(statearr_156654_156682[(2)] = inst_156648);

(statearr_156654_156682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (1))){
var state_156652__$1 = state_156652;
var statearr_156655_156683 = state_156652__$1;
(statearr_156655_156683[(2)] = null);

(statearr_156655_156683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (4))){
var inst_156629 = (state_156652[(7)]);
var inst_156629__$1 = (state_156652[(2)]);
var inst_156630 = (inst_156629__$1 == null);
var state_156652__$1 = (function (){var statearr_156656 = state_156652;
(statearr_156656[(7)] = inst_156629__$1);

return statearr_156656;
})();
if(cljs.core.truth_(inst_156630)){
var statearr_156657_156684 = state_156652__$1;
(statearr_156657_156684[(1)] = (5));

} else {
var statearr_156658_156685 = state_156652__$1;
(statearr_156658_156685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (13))){
var state_156652__$1 = state_156652;
var statearr_156659_156686 = state_156652__$1;
(statearr_156659_156686[(2)] = null);

(statearr_156659_156686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (6))){
var inst_156629 = (state_156652[(7)]);
var inst_156635 = p.call(null,inst_156629);
var state_156652__$1 = state_156652;
if(cljs.core.truth_(inst_156635)){
var statearr_156660_156687 = state_156652__$1;
(statearr_156660_156687[(1)] = (9));

} else {
var statearr_156661_156688 = state_156652__$1;
(statearr_156661_156688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (3))){
var inst_156650 = (state_156652[(2)]);
var state_156652__$1 = state_156652;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156652__$1,inst_156650);
} else {
if((state_val_156653 === (12))){
var state_156652__$1 = state_156652;
var statearr_156662_156689 = state_156652__$1;
(statearr_156662_156689[(2)] = null);

(statearr_156662_156689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (2))){
var state_156652__$1 = state_156652;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156652__$1,(4),ch);
} else {
if((state_val_156653 === (11))){
var inst_156629 = (state_156652[(7)]);
var inst_156639 = (state_156652[(2)]);
var state_156652__$1 = state_156652;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156652__$1,(8),inst_156639,inst_156629);
} else {
if((state_val_156653 === (9))){
var state_156652__$1 = state_156652;
var statearr_156663_156690 = state_156652__$1;
(statearr_156663_156690[(2)] = tc);

(statearr_156663_156690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (5))){
var inst_156632 = cljs.core.async.close_BANG_.call(null,tc);
var inst_156633 = cljs.core.async.close_BANG_.call(null,fc);
var state_156652__$1 = (function (){var statearr_156664 = state_156652;
(statearr_156664[(8)] = inst_156632);

return statearr_156664;
})();
var statearr_156665_156691 = state_156652__$1;
(statearr_156665_156691[(2)] = inst_156633);

(statearr_156665_156691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (14))){
var inst_156646 = (state_156652[(2)]);
var state_156652__$1 = state_156652;
var statearr_156666_156692 = state_156652__$1;
(statearr_156666_156692[(2)] = inst_156646);

(statearr_156666_156692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (10))){
var state_156652__$1 = state_156652;
var statearr_156667_156693 = state_156652__$1;
(statearr_156667_156693[(2)] = fc);

(statearr_156667_156693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156653 === (8))){
var inst_156641 = (state_156652[(2)]);
var state_156652__$1 = state_156652;
if(cljs.core.truth_(inst_156641)){
var statearr_156668_156694 = state_156652__$1;
(statearr_156668_156694[(1)] = (12));

} else {
var statearr_156669_156695 = state_156652__$1;
(statearr_156669_156695[(1)] = (13));

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
});})(c__19342__auto___156681,tc,fc))
;
return ((function (switch__19321__auto__,c__19342__auto___156681,tc,fc){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_156673 = [null,null,null,null,null,null,null,null,null];
(statearr_156673[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_156673[(1)] = (1));

return statearr_156673;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_156652){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156652);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156674){if((e156674 instanceof Object)){
var ex__19325__auto__ = e156674;
var statearr_156675_156696 = state_156652;
(statearr_156675_156696[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156652);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156674;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156697 = state_156652;
state_156652 = G__156697;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_156652){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_156652);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___156681,tc,fc))
})();
var state__19344__auto__ = (function (){var statearr_156676 = f__19343__auto__.call(null);
(statearr_156676[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___156681);

return statearr_156676;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___156681,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__){
return (function (state_156744){
var state_val_156745 = (state_156744[(1)]);
if((state_val_156745 === (1))){
var inst_156730 = init;
var state_156744__$1 = (function (){var statearr_156746 = state_156744;
(statearr_156746[(7)] = inst_156730);

return statearr_156746;
})();
var statearr_156747_156762 = state_156744__$1;
(statearr_156747_156762[(2)] = null);

(statearr_156747_156762[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156745 === (2))){
var state_156744__$1 = state_156744;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_156744__$1,(4),ch);
} else {
if((state_val_156745 === (3))){
var inst_156742 = (state_156744[(2)]);
var state_156744__$1 = state_156744;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156744__$1,inst_156742);
} else {
if((state_val_156745 === (4))){
var inst_156733 = (state_156744[(8)]);
var inst_156733__$1 = (state_156744[(2)]);
var inst_156734 = (inst_156733__$1 == null);
var state_156744__$1 = (function (){var statearr_156748 = state_156744;
(statearr_156748[(8)] = inst_156733__$1);

return statearr_156748;
})();
if(cljs.core.truth_(inst_156734)){
var statearr_156749_156763 = state_156744__$1;
(statearr_156749_156763[(1)] = (5));

} else {
var statearr_156750_156764 = state_156744__$1;
(statearr_156750_156764[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156745 === (5))){
var inst_156730 = (state_156744[(7)]);
var state_156744__$1 = state_156744;
var statearr_156751_156765 = state_156744__$1;
(statearr_156751_156765[(2)] = inst_156730);

(statearr_156751_156765[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156745 === (6))){
var inst_156730 = (state_156744[(7)]);
var inst_156733 = (state_156744[(8)]);
var inst_156737 = f.call(null,inst_156730,inst_156733);
var inst_156730__$1 = inst_156737;
var state_156744__$1 = (function (){var statearr_156752 = state_156744;
(statearr_156752[(7)] = inst_156730__$1);

return statearr_156752;
})();
var statearr_156753_156766 = state_156744__$1;
(statearr_156753_156766[(2)] = null);

(statearr_156753_156766[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156745 === (7))){
var inst_156740 = (state_156744[(2)]);
var state_156744__$1 = state_156744;
var statearr_156754_156767 = state_156744__$1;
(statearr_156754_156767[(2)] = inst_156740);

(statearr_156754_156767[(1)] = (3));


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
});})(c__19342__auto__))
;
return ((function (switch__19321__auto__,c__19342__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19322__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19322__auto____0 = (function (){
var statearr_156758 = [null,null,null,null,null,null,null,null,null];
(statearr_156758[(0)] = cljs$core$async$reduce_$_state_machine__19322__auto__);

(statearr_156758[(1)] = (1));

return statearr_156758;
});
var cljs$core$async$reduce_$_state_machine__19322__auto____1 = (function (state_156744){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156744);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156759){if((e156759 instanceof Object)){
var ex__19325__auto__ = e156759;
var statearr_156760_156768 = state_156744;
(statearr_156760_156768[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156744);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156769 = state_156744;
state_156744 = G__156769;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19322__auto__ = function(state_156744){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19322__auto____1.call(this,state_156744);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19322__auto____0;
cljs$core$async$reduce_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19322__auto____1;
return cljs$core$async$reduce_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_156761 = f__19343__auto__.call(null);
(statearr_156761[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_156761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var args156770 = [];
var len__17378__auto___156822 = arguments.length;
var i__17379__auto___156823 = (0);
while(true){
if((i__17379__auto___156823 < len__17378__auto___156822)){
args156770.push((arguments[i__17379__auto___156823]));

var G__156824 = (i__17379__auto___156823 + (1));
i__17379__auto___156823 = G__156824;
continue;
} else {
}
break;
}

var G__156772 = args156770.length;
switch (G__156772) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args156770.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__){
return (function (state_156797){
var state_val_156798 = (state_156797[(1)]);
if((state_val_156798 === (7))){
var inst_156779 = (state_156797[(2)]);
var state_156797__$1 = state_156797;
var statearr_156799_156826 = state_156797__$1;
(statearr_156799_156826[(2)] = inst_156779);

(statearr_156799_156826[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (1))){
var inst_156773 = cljs.core.seq.call(null,coll);
var inst_156774 = inst_156773;
var state_156797__$1 = (function (){var statearr_156800 = state_156797;
(statearr_156800[(7)] = inst_156774);

return statearr_156800;
})();
var statearr_156801_156827 = state_156797__$1;
(statearr_156801_156827[(2)] = null);

(statearr_156801_156827[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (4))){
var inst_156774 = (state_156797[(7)]);
var inst_156777 = cljs.core.first.call(null,inst_156774);
var state_156797__$1 = state_156797;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_156797__$1,(7),ch,inst_156777);
} else {
if((state_val_156798 === (13))){
var inst_156791 = (state_156797[(2)]);
var state_156797__$1 = state_156797;
var statearr_156802_156828 = state_156797__$1;
(statearr_156802_156828[(2)] = inst_156791);

(statearr_156802_156828[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (6))){
var inst_156782 = (state_156797[(2)]);
var state_156797__$1 = state_156797;
if(cljs.core.truth_(inst_156782)){
var statearr_156803_156829 = state_156797__$1;
(statearr_156803_156829[(1)] = (8));

} else {
var statearr_156804_156830 = state_156797__$1;
(statearr_156804_156830[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (3))){
var inst_156795 = (state_156797[(2)]);
var state_156797__$1 = state_156797;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_156797__$1,inst_156795);
} else {
if((state_val_156798 === (12))){
var state_156797__$1 = state_156797;
var statearr_156805_156831 = state_156797__$1;
(statearr_156805_156831[(2)] = null);

(statearr_156805_156831[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (2))){
var inst_156774 = (state_156797[(7)]);
var state_156797__$1 = state_156797;
if(cljs.core.truth_(inst_156774)){
var statearr_156806_156832 = state_156797__$1;
(statearr_156806_156832[(1)] = (4));

} else {
var statearr_156807_156833 = state_156797__$1;
(statearr_156807_156833[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (11))){
var inst_156788 = cljs.core.async.close_BANG_.call(null,ch);
var state_156797__$1 = state_156797;
var statearr_156808_156834 = state_156797__$1;
(statearr_156808_156834[(2)] = inst_156788);

(statearr_156808_156834[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (9))){
var state_156797__$1 = state_156797;
if(cljs.core.truth_(close_QMARK_)){
var statearr_156809_156835 = state_156797__$1;
(statearr_156809_156835[(1)] = (11));

} else {
var statearr_156810_156836 = state_156797__$1;
(statearr_156810_156836[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (5))){
var inst_156774 = (state_156797[(7)]);
var state_156797__$1 = state_156797;
var statearr_156811_156837 = state_156797__$1;
(statearr_156811_156837[(2)] = inst_156774);

(statearr_156811_156837[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (10))){
var inst_156793 = (state_156797[(2)]);
var state_156797__$1 = state_156797;
var statearr_156812_156838 = state_156797__$1;
(statearr_156812_156838[(2)] = inst_156793);

(statearr_156812_156838[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_156798 === (8))){
var inst_156774 = (state_156797[(7)]);
var inst_156784 = cljs.core.next.call(null,inst_156774);
var inst_156774__$1 = inst_156784;
var state_156797__$1 = (function (){var statearr_156813 = state_156797;
(statearr_156813[(7)] = inst_156774__$1);

return statearr_156813;
})();
var statearr_156814_156839 = state_156797__$1;
(statearr_156814_156839[(2)] = null);

(statearr_156814_156839[(1)] = (2));


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
});})(c__19342__auto__))
;
return ((function (switch__19321__auto__,c__19342__auto__){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_156818 = [null,null,null,null,null,null,null,null];
(statearr_156818[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_156818[(1)] = (1));

return statearr_156818;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_156797){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_156797);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e156819){if((e156819 instanceof Object)){
var ex__19325__auto__ = e156819;
var statearr_156820_156840 = state_156797;
(statearr_156820_156840[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_156797);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e156819;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__156841 = state_156797;
state_156797 = G__156841;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_156797){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_156797);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_156821 = f__19343__auto__.call(null);
(statearr_156821[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_156821;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__16975__auto__ = (((_ == null))?null:_);
var m__16976__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,_);
} else {
var m__16976__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__16976__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m);
} else {
var m__16976__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async157063 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async157063 = (function (mult,ch,cs,meta157064){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta157064 = meta157064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_157065,meta157064__$1){
var self__ = this;
var _157065__$1 = this;
return (new cljs.core.async.t_cljs$core$async157063(self__.mult,self__.ch,self__.cs,meta157064__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_157065){
var self__ = this;
var _157065__$1 = this;
return self__.meta157064;
});})(cs))
;

cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async157063.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async157063.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta157064","meta157064",-1925276350,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async157063.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async157063.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async157063";

cljs.core.async.t_cljs$core$async157063.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async157063");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async157063 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async157063(mult__$1,ch__$1,cs__$1,meta157064){
return (new cljs.core.async.t_cljs$core$async157063(mult__$1,ch__$1,cs__$1,meta157064));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async157063(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__19342__auto___157284 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___157284,cs,m,dchan,dctr,done){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___157284,cs,m,dchan,dctr,done){
return (function (state_157196){
var state_val_157197 = (state_157196[(1)]);
if((state_val_157197 === (7))){
var inst_157192 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157198_157285 = state_157196__$1;
(statearr_157198_157285[(2)] = inst_157192);

(statearr_157198_157285[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (20))){
var inst_157097 = (state_157196[(7)]);
var inst_157107 = cljs.core.first.call(null,inst_157097);
var inst_157108 = cljs.core.nth.call(null,inst_157107,(0),null);
var inst_157109 = cljs.core.nth.call(null,inst_157107,(1),null);
var state_157196__$1 = (function (){var statearr_157199 = state_157196;
(statearr_157199[(8)] = inst_157108);

return statearr_157199;
})();
if(cljs.core.truth_(inst_157109)){
var statearr_157200_157286 = state_157196__$1;
(statearr_157200_157286[(1)] = (22));

} else {
var statearr_157201_157287 = state_157196__$1;
(statearr_157201_157287[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (27))){
var inst_157137 = (state_157196[(9)]);
var inst_157144 = (state_157196[(10)]);
var inst_157139 = (state_157196[(11)]);
var inst_157068 = (state_157196[(12)]);
var inst_157144__$1 = cljs.core._nth.call(null,inst_157137,inst_157139);
var inst_157145 = cljs.core.async.put_BANG_.call(null,inst_157144__$1,inst_157068,done);
var state_157196__$1 = (function (){var statearr_157202 = state_157196;
(statearr_157202[(10)] = inst_157144__$1);

return statearr_157202;
})();
if(cljs.core.truth_(inst_157145)){
var statearr_157203_157288 = state_157196__$1;
(statearr_157203_157288[(1)] = (30));

} else {
var statearr_157204_157289 = state_157196__$1;
(statearr_157204_157289[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (1))){
var state_157196__$1 = state_157196;
var statearr_157205_157290 = state_157196__$1;
(statearr_157205_157290[(2)] = null);

(statearr_157205_157290[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (24))){
var inst_157097 = (state_157196[(7)]);
var inst_157114 = (state_157196[(2)]);
var inst_157115 = cljs.core.next.call(null,inst_157097);
var inst_157077 = inst_157115;
var inst_157078 = null;
var inst_157079 = (0);
var inst_157080 = (0);
var state_157196__$1 = (function (){var statearr_157206 = state_157196;
(statearr_157206[(13)] = inst_157079);

(statearr_157206[(14)] = inst_157078);

(statearr_157206[(15)] = inst_157114);

(statearr_157206[(16)] = inst_157080);

(statearr_157206[(17)] = inst_157077);

return statearr_157206;
})();
var statearr_157207_157291 = state_157196__$1;
(statearr_157207_157291[(2)] = null);

(statearr_157207_157291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (39))){
var state_157196__$1 = state_157196;
var statearr_157211_157292 = state_157196__$1;
(statearr_157211_157292[(2)] = null);

(statearr_157211_157292[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (4))){
var inst_157068 = (state_157196[(12)]);
var inst_157068__$1 = (state_157196[(2)]);
var inst_157069 = (inst_157068__$1 == null);
var state_157196__$1 = (function (){var statearr_157212 = state_157196;
(statearr_157212[(12)] = inst_157068__$1);

return statearr_157212;
})();
if(cljs.core.truth_(inst_157069)){
var statearr_157213_157293 = state_157196__$1;
(statearr_157213_157293[(1)] = (5));

} else {
var statearr_157214_157294 = state_157196__$1;
(statearr_157214_157294[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (15))){
var inst_157079 = (state_157196[(13)]);
var inst_157078 = (state_157196[(14)]);
var inst_157080 = (state_157196[(16)]);
var inst_157077 = (state_157196[(17)]);
var inst_157093 = (state_157196[(2)]);
var inst_157094 = (inst_157080 + (1));
var tmp157208 = inst_157079;
var tmp157209 = inst_157078;
var tmp157210 = inst_157077;
var inst_157077__$1 = tmp157210;
var inst_157078__$1 = tmp157209;
var inst_157079__$1 = tmp157208;
var inst_157080__$1 = inst_157094;
var state_157196__$1 = (function (){var statearr_157215 = state_157196;
(statearr_157215[(13)] = inst_157079__$1);

(statearr_157215[(14)] = inst_157078__$1);

(statearr_157215[(16)] = inst_157080__$1);

(statearr_157215[(18)] = inst_157093);

(statearr_157215[(17)] = inst_157077__$1);

return statearr_157215;
})();
var statearr_157216_157295 = state_157196__$1;
(statearr_157216_157295[(2)] = null);

(statearr_157216_157295[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (21))){
var inst_157118 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157220_157296 = state_157196__$1;
(statearr_157220_157296[(2)] = inst_157118);

(statearr_157220_157296[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (31))){
var inst_157144 = (state_157196[(10)]);
var inst_157148 = done.call(null,null);
var inst_157149 = cljs.core.async.untap_STAR_.call(null,m,inst_157144);
var state_157196__$1 = (function (){var statearr_157221 = state_157196;
(statearr_157221[(19)] = inst_157148);

return statearr_157221;
})();
var statearr_157222_157297 = state_157196__$1;
(statearr_157222_157297[(2)] = inst_157149);

(statearr_157222_157297[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (32))){
var inst_157137 = (state_157196[(9)]);
var inst_157136 = (state_157196[(20)]);
var inst_157138 = (state_157196[(21)]);
var inst_157139 = (state_157196[(11)]);
var inst_157151 = (state_157196[(2)]);
var inst_157152 = (inst_157139 + (1));
var tmp157217 = inst_157137;
var tmp157218 = inst_157136;
var tmp157219 = inst_157138;
var inst_157136__$1 = tmp157218;
var inst_157137__$1 = tmp157217;
var inst_157138__$1 = tmp157219;
var inst_157139__$1 = inst_157152;
var state_157196__$1 = (function (){var statearr_157223 = state_157196;
(statearr_157223[(9)] = inst_157137__$1);

(statearr_157223[(20)] = inst_157136__$1);

(statearr_157223[(21)] = inst_157138__$1);

(statearr_157223[(11)] = inst_157139__$1);

(statearr_157223[(22)] = inst_157151);

return statearr_157223;
})();
var statearr_157224_157298 = state_157196__$1;
(statearr_157224_157298[(2)] = null);

(statearr_157224_157298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (40))){
var inst_157164 = (state_157196[(23)]);
var inst_157168 = done.call(null,null);
var inst_157169 = cljs.core.async.untap_STAR_.call(null,m,inst_157164);
var state_157196__$1 = (function (){var statearr_157225 = state_157196;
(statearr_157225[(24)] = inst_157168);

return statearr_157225;
})();
var statearr_157226_157299 = state_157196__$1;
(statearr_157226_157299[(2)] = inst_157169);

(statearr_157226_157299[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (33))){
var inst_157155 = (state_157196[(25)]);
var inst_157157 = cljs.core.chunked_seq_QMARK_.call(null,inst_157155);
var state_157196__$1 = state_157196;
if(inst_157157){
var statearr_157227_157300 = state_157196__$1;
(statearr_157227_157300[(1)] = (36));

} else {
var statearr_157228_157301 = state_157196__$1;
(statearr_157228_157301[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (13))){
var inst_157087 = (state_157196[(26)]);
var inst_157090 = cljs.core.async.close_BANG_.call(null,inst_157087);
var state_157196__$1 = state_157196;
var statearr_157229_157302 = state_157196__$1;
(statearr_157229_157302[(2)] = inst_157090);

(statearr_157229_157302[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (22))){
var inst_157108 = (state_157196[(8)]);
var inst_157111 = cljs.core.async.close_BANG_.call(null,inst_157108);
var state_157196__$1 = state_157196;
var statearr_157230_157303 = state_157196__$1;
(statearr_157230_157303[(2)] = inst_157111);

(statearr_157230_157303[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (36))){
var inst_157155 = (state_157196[(25)]);
var inst_157159 = cljs.core.chunk_first.call(null,inst_157155);
var inst_157160 = cljs.core.chunk_rest.call(null,inst_157155);
var inst_157161 = cljs.core.count.call(null,inst_157159);
var inst_157136 = inst_157160;
var inst_157137 = inst_157159;
var inst_157138 = inst_157161;
var inst_157139 = (0);
var state_157196__$1 = (function (){var statearr_157231 = state_157196;
(statearr_157231[(9)] = inst_157137);

(statearr_157231[(20)] = inst_157136);

(statearr_157231[(21)] = inst_157138);

(statearr_157231[(11)] = inst_157139);

return statearr_157231;
})();
var statearr_157232_157304 = state_157196__$1;
(statearr_157232_157304[(2)] = null);

(statearr_157232_157304[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (41))){
var inst_157155 = (state_157196[(25)]);
var inst_157171 = (state_157196[(2)]);
var inst_157172 = cljs.core.next.call(null,inst_157155);
var inst_157136 = inst_157172;
var inst_157137 = null;
var inst_157138 = (0);
var inst_157139 = (0);
var state_157196__$1 = (function (){var statearr_157233 = state_157196;
(statearr_157233[(9)] = inst_157137);

(statearr_157233[(20)] = inst_157136);

(statearr_157233[(21)] = inst_157138);

(statearr_157233[(11)] = inst_157139);

(statearr_157233[(27)] = inst_157171);

return statearr_157233;
})();
var statearr_157234_157305 = state_157196__$1;
(statearr_157234_157305[(2)] = null);

(statearr_157234_157305[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (43))){
var state_157196__$1 = state_157196;
var statearr_157235_157306 = state_157196__$1;
(statearr_157235_157306[(2)] = null);

(statearr_157235_157306[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (29))){
var inst_157180 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157236_157307 = state_157196__$1;
(statearr_157236_157307[(2)] = inst_157180);

(statearr_157236_157307[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (44))){
var inst_157189 = (state_157196[(2)]);
var state_157196__$1 = (function (){var statearr_157237 = state_157196;
(statearr_157237[(28)] = inst_157189);

return statearr_157237;
})();
var statearr_157238_157308 = state_157196__$1;
(statearr_157238_157308[(2)] = null);

(statearr_157238_157308[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (6))){
var inst_157128 = (state_157196[(29)]);
var inst_157127 = cljs.core.deref.call(null,cs);
var inst_157128__$1 = cljs.core.keys.call(null,inst_157127);
var inst_157129 = cljs.core.count.call(null,inst_157128__$1);
var inst_157130 = cljs.core.reset_BANG_.call(null,dctr,inst_157129);
var inst_157135 = cljs.core.seq.call(null,inst_157128__$1);
var inst_157136 = inst_157135;
var inst_157137 = null;
var inst_157138 = (0);
var inst_157139 = (0);
var state_157196__$1 = (function (){var statearr_157239 = state_157196;
(statearr_157239[(9)] = inst_157137);

(statearr_157239[(20)] = inst_157136);

(statearr_157239[(30)] = inst_157130);

(statearr_157239[(29)] = inst_157128__$1);

(statearr_157239[(21)] = inst_157138);

(statearr_157239[(11)] = inst_157139);

return statearr_157239;
})();
var statearr_157240_157309 = state_157196__$1;
(statearr_157240_157309[(2)] = null);

(statearr_157240_157309[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (28))){
var inst_157136 = (state_157196[(20)]);
var inst_157155 = (state_157196[(25)]);
var inst_157155__$1 = cljs.core.seq.call(null,inst_157136);
var state_157196__$1 = (function (){var statearr_157241 = state_157196;
(statearr_157241[(25)] = inst_157155__$1);

return statearr_157241;
})();
if(inst_157155__$1){
var statearr_157242_157310 = state_157196__$1;
(statearr_157242_157310[(1)] = (33));

} else {
var statearr_157243_157311 = state_157196__$1;
(statearr_157243_157311[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (25))){
var inst_157138 = (state_157196[(21)]);
var inst_157139 = (state_157196[(11)]);
var inst_157141 = (inst_157139 < inst_157138);
var inst_157142 = inst_157141;
var state_157196__$1 = state_157196;
if(cljs.core.truth_(inst_157142)){
var statearr_157244_157312 = state_157196__$1;
(statearr_157244_157312[(1)] = (27));

} else {
var statearr_157245_157313 = state_157196__$1;
(statearr_157245_157313[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (34))){
var state_157196__$1 = state_157196;
var statearr_157246_157314 = state_157196__$1;
(statearr_157246_157314[(2)] = null);

(statearr_157246_157314[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (17))){
var state_157196__$1 = state_157196;
var statearr_157247_157315 = state_157196__$1;
(statearr_157247_157315[(2)] = null);

(statearr_157247_157315[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (3))){
var inst_157194 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157196__$1,inst_157194);
} else {
if((state_val_157197 === (12))){
var inst_157123 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157248_157316 = state_157196__$1;
(statearr_157248_157316[(2)] = inst_157123);

(statearr_157248_157316[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (2))){
var state_157196__$1 = state_157196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157196__$1,(4),ch);
} else {
if((state_val_157197 === (23))){
var state_157196__$1 = state_157196;
var statearr_157249_157317 = state_157196__$1;
(statearr_157249_157317[(2)] = null);

(statearr_157249_157317[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (35))){
var inst_157178 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157250_157318 = state_157196__$1;
(statearr_157250_157318[(2)] = inst_157178);

(statearr_157250_157318[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (19))){
var inst_157097 = (state_157196[(7)]);
var inst_157101 = cljs.core.chunk_first.call(null,inst_157097);
var inst_157102 = cljs.core.chunk_rest.call(null,inst_157097);
var inst_157103 = cljs.core.count.call(null,inst_157101);
var inst_157077 = inst_157102;
var inst_157078 = inst_157101;
var inst_157079 = inst_157103;
var inst_157080 = (0);
var state_157196__$1 = (function (){var statearr_157251 = state_157196;
(statearr_157251[(13)] = inst_157079);

(statearr_157251[(14)] = inst_157078);

(statearr_157251[(16)] = inst_157080);

(statearr_157251[(17)] = inst_157077);

return statearr_157251;
})();
var statearr_157252_157319 = state_157196__$1;
(statearr_157252_157319[(2)] = null);

(statearr_157252_157319[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (11))){
var inst_157097 = (state_157196[(7)]);
var inst_157077 = (state_157196[(17)]);
var inst_157097__$1 = cljs.core.seq.call(null,inst_157077);
var state_157196__$1 = (function (){var statearr_157253 = state_157196;
(statearr_157253[(7)] = inst_157097__$1);

return statearr_157253;
})();
if(inst_157097__$1){
var statearr_157254_157320 = state_157196__$1;
(statearr_157254_157320[(1)] = (16));

} else {
var statearr_157255_157321 = state_157196__$1;
(statearr_157255_157321[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (9))){
var inst_157125 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157256_157322 = state_157196__$1;
(statearr_157256_157322[(2)] = inst_157125);

(statearr_157256_157322[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (5))){
var inst_157075 = cljs.core.deref.call(null,cs);
var inst_157076 = cljs.core.seq.call(null,inst_157075);
var inst_157077 = inst_157076;
var inst_157078 = null;
var inst_157079 = (0);
var inst_157080 = (0);
var state_157196__$1 = (function (){var statearr_157257 = state_157196;
(statearr_157257[(13)] = inst_157079);

(statearr_157257[(14)] = inst_157078);

(statearr_157257[(16)] = inst_157080);

(statearr_157257[(17)] = inst_157077);

return statearr_157257;
})();
var statearr_157258_157323 = state_157196__$1;
(statearr_157258_157323[(2)] = null);

(statearr_157258_157323[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (14))){
var state_157196__$1 = state_157196;
var statearr_157259_157324 = state_157196__$1;
(statearr_157259_157324[(2)] = null);

(statearr_157259_157324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (45))){
var inst_157186 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157260_157325 = state_157196__$1;
(statearr_157260_157325[(2)] = inst_157186);

(statearr_157260_157325[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (26))){
var inst_157128 = (state_157196[(29)]);
var inst_157182 = (state_157196[(2)]);
var inst_157183 = cljs.core.seq.call(null,inst_157128);
var state_157196__$1 = (function (){var statearr_157261 = state_157196;
(statearr_157261[(31)] = inst_157182);

return statearr_157261;
})();
if(inst_157183){
var statearr_157262_157326 = state_157196__$1;
(statearr_157262_157326[(1)] = (42));

} else {
var statearr_157263_157327 = state_157196__$1;
(statearr_157263_157327[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (16))){
var inst_157097 = (state_157196[(7)]);
var inst_157099 = cljs.core.chunked_seq_QMARK_.call(null,inst_157097);
var state_157196__$1 = state_157196;
if(inst_157099){
var statearr_157264_157328 = state_157196__$1;
(statearr_157264_157328[(1)] = (19));

} else {
var statearr_157265_157329 = state_157196__$1;
(statearr_157265_157329[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (38))){
var inst_157175 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157266_157330 = state_157196__$1;
(statearr_157266_157330[(2)] = inst_157175);

(statearr_157266_157330[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (30))){
var state_157196__$1 = state_157196;
var statearr_157267_157331 = state_157196__$1;
(statearr_157267_157331[(2)] = null);

(statearr_157267_157331[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (10))){
var inst_157078 = (state_157196[(14)]);
var inst_157080 = (state_157196[(16)]);
var inst_157086 = cljs.core._nth.call(null,inst_157078,inst_157080);
var inst_157087 = cljs.core.nth.call(null,inst_157086,(0),null);
var inst_157088 = cljs.core.nth.call(null,inst_157086,(1),null);
var state_157196__$1 = (function (){var statearr_157268 = state_157196;
(statearr_157268[(26)] = inst_157087);

return statearr_157268;
})();
if(cljs.core.truth_(inst_157088)){
var statearr_157269_157332 = state_157196__$1;
(statearr_157269_157332[(1)] = (13));

} else {
var statearr_157270_157333 = state_157196__$1;
(statearr_157270_157333[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (18))){
var inst_157121 = (state_157196[(2)]);
var state_157196__$1 = state_157196;
var statearr_157271_157334 = state_157196__$1;
(statearr_157271_157334[(2)] = inst_157121);

(statearr_157271_157334[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (42))){
var state_157196__$1 = state_157196;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157196__$1,(45),dchan);
} else {
if((state_val_157197 === (37))){
var inst_157155 = (state_157196[(25)]);
var inst_157164 = (state_157196[(23)]);
var inst_157068 = (state_157196[(12)]);
var inst_157164__$1 = cljs.core.first.call(null,inst_157155);
var inst_157165 = cljs.core.async.put_BANG_.call(null,inst_157164__$1,inst_157068,done);
var state_157196__$1 = (function (){var statearr_157272 = state_157196;
(statearr_157272[(23)] = inst_157164__$1);

return statearr_157272;
})();
if(cljs.core.truth_(inst_157165)){
var statearr_157273_157335 = state_157196__$1;
(statearr_157273_157335[(1)] = (39));

} else {
var statearr_157274_157336 = state_157196__$1;
(statearr_157274_157336[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157197 === (8))){
var inst_157079 = (state_157196[(13)]);
var inst_157080 = (state_157196[(16)]);
var inst_157082 = (inst_157080 < inst_157079);
var inst_157083 = inst_157082;
var state_157196__$1 = state_157196;
if(cljs.core.truth_(inst_157083)){
var statearr_157275_157337 = state_157196__$1;
(statearr_157275_157337[(1)] = (10));

} else {
var statearr_157276_157338 = state_157196__$1;
(statearr_157276_157338[(1)] = (11));

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
});})(c__19342__auto___157284,cs,m,dchan,dctr,done))
;
return ((function (switch__19321__auto__,c__19342__auto___157284,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19322__auto__ = null;
var cljs$core$async$mult_$_state_machine__19322__auto____0 = (function (){
var statearr_157280 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_157280[(0)] = cljs$core$async$mult_$_state_machine__19322__auto__);

(statearr_157280[(1)] = (1));

return statearr_157280;
});
var cljs$core$async$mult_$_state_machine__19322__auto____1 = (function (state_157196){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_157196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e157281){if((e157281 instanceof Object)){
var ex__19325__auto__ = e157281;
var statearr_157282_157339 = state_157196;
(statearr_157282_157339[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e157281;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__157340 = state_157196;
state_157196 = G__157340;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19322__auto__ = function(state_157196){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19322__auto____1.call(this,state_157196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19322__auto____0;
cljs$core$async$mult_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19322__auto____1;
return cljs$core$async$mult_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___157284,cs,m,dchan,dctr,done))
})();
var state__19344__auto__ = (function (){var statearr_157283 = f__19343__auto__.call(null);
(statearr_157283[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___157284);

return statearr_157283;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___157284,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var args157341 = [];
var len__17378__auto___157344 = arguments.length;
var i__17379__auto___157345 = (0);
while(true){
if((i__17379__auto___157345 < len__17378__auto___157344)){
args157341.push((arguments[i__17379__auto___157345]));

var G__157346 = (i__17379__auto___157345 + (1));
i__17379__auto___157345 = G__157346;
continue;
} else {
}
break;
}

var G__157343 = args157341.length;
switch (G__157343) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157341.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m);
} else {
var m__16976__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,state_map);
} else {
var m__16976__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__16975__auto__ = (((m == null))?null:m);
var m__16976__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,m,mode);
} else {
var m__16976__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__17385__auto__ = [];
var len__17378__auto___157358 = arguments.length;
var i__17379__auto___157359 = (0);
while(true){
if((i__17379__auto___157359 < len__17378__auto___157358)){
args__17385__auto__.push((arguments[i__17379__auto___157359]));

var G__157360 = (i__17379__auto___157359 + (1));
i__17379__auto___157359 = G__157360;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((3) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17386__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__157352){
var map__157353 = p__157352;
var map__157353__$1 = ((((!((map__157353 == null)))?((((map__157353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__157353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__157353):map__157353);
var opts = map__157353__$1;
var statearr_157355_157361 = state;
(statearr_157355_157361[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__157353,map__157353__$1,opts){
return (function (val){
var statearr_157356_157362 = state;
(statearr_157356_157362[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__157353,map__157353__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_157357_157363 = state;
(statearr_157357_157363[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq157348){
var G__157349 = cljs.core.first.call(null,seq157348);
var seq157348__$1 = cljs.core.next.call(null,seq157348);
var G__157350 = cljs.core.first.call(null,seq157348__$1);
var seq157348__$2 = cljs.core.next.call(null,seq157348__$1);
var G__157351 = cljs.core.first.call(null,seq157348__$2);
var seq157348__$3 = cljs.core.next.call(null,seq157348__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__157349,G__157350,G__157351,seq157348__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async157527 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async157527 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta157528){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta157528 = meta157528;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_157529,meta157528__$1){
var self__ = this;
var _157529__$1 = this;
return (new cljs.core.async.t_cljs$core$async157527(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta157528__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_157529){
var self__ = this;
var _157529__$1 = this;
return self__.meta157528;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))))].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta157528","meta157528",-82467514,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async157527.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async157527.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async157527";

cljs.core.async.t_cljs$core$async157527.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async157527");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async157527 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async157527(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta157528){
return (new cljs.core.async.t_cljs$core$async157527(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta157528));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async157527(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19342__auto___157690 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___157690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___157690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_157627){
var state_val_157628 = (state_157627[(1)]);
if((state_val_157628 === (7))){
var inst_157545 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
var statearr_157629_157691 = state_157627__$1;
(statearr_157629_157691[(2)] = inst_157545);

(statearr_157629_157691[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (20))){
var inst_157557 = (state_157627[(7)]);
var state_157627__$1 = state_157627;
var statearr_157630_157692 = state_157627__$1;
(statearr_157630_157692[(2)] = inst_157557);

(statearr_157630_157692[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (27))){
var state_157627__$1 = state_157627;
var statearr_157631_157693 = state_157627__$1;
(statearr_157631_157693[(2)] = null);

(statearr_157631_157693[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (1))){
var inst_157533 = (state_157627[(8)]);
var inst_157533__$1 = calc_state.call(null);
var inst_157535 = (inst_157533__$1 == null);
var inst_157536 = cljs.core.not.call(null,inst_157535);
var state_157627__$1 = (function (){var statearr_157632 = state_157627;
(statearr_157632[(8)] = inst_157533__$1);

return statearr_157632;
})();
if(inst_157536){
var statearr_157633_157694 = state_157627__$1;
(statearr_157633_157694[(1)] = (2));

} else {
var statearr_157634_157695 = state_157627__$1;
(statearr_157634_157695[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (24))){
var inst_157587 = (state_157627[(9)]);
var inst_157580 = (state_157627[(10)]);
var inst_157601 = (state_157627[(11)]);
var inst_157601__$1 = inst_157580.call(null,inst_157587);
var state_157627__$1 = (function (){var statearr_157635 = state_157627;
(statearr_157635[(11)] = inst_157601__$1);

return statearr_157635;
})();
if(cljs.core.truth_(inst_157601__$1)){
var statearr_157636_157696 = state_157627__$1;
(statearr_157636_157696[(1)] = (29));

} else {
var statearr_157637_157697 = state_157627__$1;
(statearr_157637_157697[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (4))){
var inst_157548 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
if(cljs.core.truth_(inst_157548)){
var statearr_157638_157698 = state_157627__$1;
(statearr_157638_157698[(1)] = (8));

} else {
var statearr_157639_157699 = state_157627__$1;
(statearr_157639_157699[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (15))){
var inst_157574 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
if(cljs.core.truth_(inst_157574)){
var statearr_157640_157700 = state_157627__$1;
(statearr_157640_157700[(1)] = (19));

} else {
var statearr_157641_157701 = state_157627__$1;
(statearr_157641_157701[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (21))){
var inst_157579 = (state_157627[(12)]);
var inst_157579__$1 = (state_157627[(2)]);
var inst_157580 = cljs.core.get.call(null,inst_157579__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_157581 = cljs.core.get.call(null,inst_157579__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_157582 = cljs.core.get.call(null,inst_157579__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_157627__$1 = (function (){var statearr_157642 = state_157627;
(statearr_157642[(12)] = inst_157579__$1);

(statearr_157642[(10)] = inst_157580);

(statearr_157642[(13)] = inst_157581);

return statearr_157642;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_157627__$1,(22),inst_157582);
} else {
if((state_val_157628 === (31))){
var inst_157609 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
if(cljs.core.truth_(inst_157609)){
var statearr_157643_157702 = state_157627__$1;
(statearr_157643_157702[(1)] = (32));

} else {
var statearr_157644_157703 = state_157627__$1;
(statearr_157644_157703[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (32))){
var inst_157586 = (state_157627[(14)]);
var state_157627__$1 = state_157627;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_157627__$1,(35),out,inst_157586);
} else {
if((state_val_157628 === (33))){
var inst_157579 = (state_157627[(12)]);
var inst_157557 = inst_157579;
var state_157627__$1 = (function (){var statearr_157645 = state_157627;
(statearr_157645[(7)] = inst_157557);

return statearr_157645;
})();
var statearr_157646_157704 = state_157627__$1;
(statearr_157646_157704[(2)] = null);

(statearr_157646_157704[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (13))){
var inst_157557 = (state_157627[(7)]);
var inst_157564 = inst_157557.cljs$lang$protocol_mask$partition0$;
var inst_157565 = (inst_157564 & (64));
var inst_157566 = inst_157557.cljs$core$ISeq$;
var inst_157567 = (inst_157565) || (inst_157566);
var state_157627__$1 = state_157627;
if(cljs.core.truth_(inst_157567)){
var statearr_157647_157705 = state_157627__$1;
(statearr_157647_157705[(1)] = (16));

} else {
var statearr_157648_157706 = state_157627__$1;
(statearr_157648_157706[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (22))){
var inst_157586 = (state_157627[(14)]);
var inst_157587 = (state_157627[(9)]);
var inst_157585 = (state_157627[(2)]);
var inst_157586__$1 = cljs.core.nth.call(null,inst_157585,(0),null);
var inst_157587__$1 = cljs.core.nth.call(null,inst_157585,(1),null);
var inst_157588 = (inst_157586__$1 == null);
var inst_157589 = cljs.core._EQ_.call(null,inst_157587__$1,change);
var inst_157590 = (inst_157588) || (inst_157589);
var state_157627__$1 = (function (){var statearr_157649 = state_157627;
(statearr_157649[(14)] = inst_157586__$1);

(statearr_157649[(9)] = inst_157587__$1);

return statearr_157649;
})();
if(cljs.core.truth_(inst_157590)){
var statearr_157650_157707 = state_157627__$1;
(statearr_157650_157707[(1)] = (23));

} else {
var statearr_157651_157708 = state_157627__$1;
(statearr_157651_157708[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (36))){
var inst_157579 = (state_157627[(12)]);
var inst_157557 = inst_157579;
var state_157627__$1 = (function (){var statearr_157652 = state_157627;
(statearr_157652[(7)] = inst_157557);

return statearr_157652;
})();
var statearr_157653_157709 = state_157627__$1;
(statearr_157653_157709[(2)] = null);

(statearr_157653_157709[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (29))){
var inst_157601 = (state_157627[(11)]);
var state_157627__$1 = state_157627;
var statearr_157654_157710 = state_157627__$1;
(statearr_157654_157710[(2)] = inst_157601);

(statearr_157654_157710[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (6))){
var state_157627__$1 = state_157627;
var statearr_157655_157711 = state_157627__$1;
(statearr_157655_157711[(2)] = false);

(statearr_157655_157711[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (28))){
var inst_157597 = (state_157627[(2)]);
var inst_157598 = calc_state.call(null);
var inst_157557 = inst_157598;
var state_157627__$1 = (function (){var statearr_157656 = state_157627;
(statearr_157656[(7)] = inst_157557);

(statearr_157656[(15)] = inst_157597);

return statearr_157656;
})();
var statearr_157657_157712 = state_157627__$1;
(statearr_157657_157712[(2)] = null);

(statearr_157657_157712[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (25))){
var inst_157623 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
var statearr_157658_157713 = state_157627__$1;
(statearr_157658_157713[(2)] = inst_157623);

(statearr_157658_157713[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (34))){
var inst_157621 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
var statearr_157659_157714 = state_157627__$1;
(statearr_157659_157714[(2)] = inst_157621);

(statearr_157659_157714[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (17))){
var state_157627__$1 = state_157627;
var statearr_157660_157715 = state_157627__$1;
(statearr_157660_157715[(2)] = false);

(statearr_157660_157715[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (3))){
var state_157627__$1 = state_157627;
var statearr_157661_157716 = state_157627__$1;
(statearr_157661_157716[(2)] = false);

(statearr_157661_157716[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (12))){
var inst_157625 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157627__$1,inst_157625);
} else {
if((state_val_157628 === (2))){
var inst_157533 = (state_157627[(8)]);
var inst_157538 = inst_157533.cljs$lang$protocol_mask$partition0$;
var inst_157539 = (inst_157538 & (64));
var inst_157540 = inst_157533.cljs$core$ISeq$;
var inst_157541 = (inst_157539) || (inst_157540);
var state_157627__$1 = state_157627;
if(cljs.core.truth_(inst_157541)){
var statearr_157662_157717 = state_157627__$1;
(statearr_157662_157717[(1)] = (5));

} else {
var statearr_157663_157718 = state_157627__$1;
(statearr_157663_157718[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (23))){
var inst_157586 = (state_157627[(14)]);
var inst_157592 = (inst_157586 == null);
var state_157627__$1 = state_157627;
if(cljs.core.truth_(inst_157592)){
var statearr_157664_157719 = state_157627__$1;
(statearr_157664_157719[(1)] = (26));

} else {
var statearr_157665_157720 = state_157627__$1;
(statearr_157665_157720[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (35))){
var inst_157612 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
if(cljs.core.truth_(inst_157612)){
var statearr_157666_157721 = state_157627__$1;
(statearr_157666_157721[(1)] = (36));

} else {
var statearr_157667_157722 = state_157627__$1;
(statearr_157667_157722[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (19))){
var inst_157557 = (state_157627[(7)]);
var inst_157576 = cljs.core.apply.call(null,cljs.core.hash_map,inst_157557);
var state_157627__$1 = state_157627;
var statearr_157668_157723 = state_157627__$1;
(statearr_157668_157723[(2)] = inst_157576);

(statearr_157668_157723[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (11))){
var inst_157557 = (state_157627[(7)]);
var inst_157561 = (inst_157557 == null);
var inst_157562 = cljs.core.not.call(null,inst_157561);
var state_157627__$1 = state_157627;
if(inst_157562){
var statearr_157669_157724 = state_157627__$1;
(statearr_157669_157724[(1)] = (13));

} else {
var statearr_157670_157725 = state_157627__$1;
(statearr_157670_157725[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (9))){
var inst_157533 = (state_157627[(8)]);
var state_157627__$1 = state_157627;
var statearr_157671_157726 = state_157627__$1;
(statearr_157671_157726[(2)] = inst_157533);

(statearr_157671_157726[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (5))){
var state_157627__$1 = state_157627;
var statearr_157672_157727 = state_157627__$1;
(statearr_157672_157727[(2)] = true);

(statearr_157672_157727[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (14))){
var state_157627__$1 = state_157627;
var statearr_157673_157728 = state_157627__$1;
(statearr_157673_157728[(2)] = false);

(statearr_157673_157728[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (26))){
var inst_157587 = (state_157627[(9)]);
var inst_157594 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_157587);
var state_157627__$1 = state_157627;
var statearr_157674_157729 = state_157627__$1;
(statearr_157674_157729[(2)] = inst_157594);

(statearr_157674_157729[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (16))){
var state_157627__$1 = state_157627;
var statearr_157675_157730 = state_157627__$1;
(statearr_157675_157730[(2)] = true);

(statearr_157675_157730[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (38))){
var inst_157617 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
var statearr_157676_157731 = state_157627__$1;
(statearr_157676_157731[(2)] = inst_157617);

(statearr_157676_157731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (30))){
var inst_157587 = (state_157627[(9)]);
var inst_157580 = (state_157627[(10)]);
var inst_157581 = (state_157627[(13)]);
var inst_157604 = cljs.core.empty_QMARK_.call(null,inst_157580);
var inst_157605 = inst_157581.call(null,inst_157587);
var inst_157606 = cljs.core.not.call(null,inst_157605);
var inst_157607 = (inst_157604) && (inst_157606);
var state_157627__$1 = state_157627;
var statearr_157677_157732 = state_157627__$1;
(statearr_157677_157732[(2)] = inst_157607);

(statearr_157677_157732[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (10))){
var inst_157533 = (state_157627[(8)]);
var inst_157553 = (state_157627[(2)]);
var inst_157554 = cljs.core.get.call(null,inst_157553,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_157555 = cljs.core.get.call(null,inst_157553,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_157556 = cljs.core.get.call(null,inst_157553,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_157557 = inst_157533;
var state_157627__$1 = (function (){var statearr_157678 = state_157627;
(statearr_157678[(16)] = inst_157554);

(statearr_157678[(7)] = inst_157557);

(statearr_157678[(17)] = inst_157556);

(statearr_157678[(18)] = inst_157555);

return statearr_157678;
})();
var statearr_157679_157733 = state_157627__$1;
(statearr_157679_157733[(2)] = null);

(statearr_157679_157733[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (18))){
var inst_157571 = (state_157627[(2)]);
var state_157627__$1 = state_157627;
var statearr_157680_157734 = state_157627__$1;
(statearr_157680_157734[(2)] = inst_157571);

(statearr_157680_157734[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (37))){
var state_157627__$1 = state_157627;
var statearr_157681_157735 = state_157627__$1;
(statearr_157681_157735[(2)] = null);

(statearr_157681_157735[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157628 === (8))){
var inst_157533 = (state_157627[(8)]);
var inst_157550 = cljs.core.apply.call(null,cljs.core.hash_map,inst_157533);
var state_157627__$1 = state_157627;
var statearr_157682_157736 = state_157627__$1;
(statearr_157682_157736[(2)] = inst_157550);

(statearr_157682_157736[(1)] = (10));


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
});})(c__19342__auto___157690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19321__auto__,c__19342__auto___157690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19322__auto__ = null;
var cljs$core$async$mix_$_state_machine__19322__auto____0 = (function (){
var statearr_157686 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_157686[(0)] = cljs$core$async$mix_$_state_machine__19322__auto__);

(statearr_157686[(1)] = (1));

return statearr_157686;
});
var cljs$core$async$mix_$_state_machine__19322__auto____1 = (function (state_157627){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_157627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e157687){if((e157687 instanceof Object)){
var ex__19325__auto__ = e157687;
var statearr_157688_157737 = state_157627;
(statearr_157688_157737[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e157687;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__157738 = state_157627;
state_157627 = G__157738;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19322__auto__ = function(state_157627){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19322__auto____1.call(this,state_157627);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19322__auto____0;
cljs$core$async$mix_$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19322__auto____1;
return cljs$core$async$mix_$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___157690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19344__auto__ = (function (){var statearr_157689 = f__19343__auto__.call(null);
(statearr_157689[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___157690);

return statearr_157689;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___157690,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__16976__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p,v,ch);
} else {
var m__16976__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var args157739 = [];
var len__17378__auto___157742 = arguments.length;
var i__17379__auto___157743 = (0);
while(true){
if((i__17379__auto___157743 < len__17378__auto___157742)){
args157739.push((arguments[i__17379__auto___157743]));

var G__157744 = (i__17379__auto___157743 + (1));
i__17379__auto___157743 = G__157744;
continue;
} else {
}
break;
}

var G__157741 = args157739.length;
switch (G__157741) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157739.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p);
} else {
var m__16976__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__16975__auto__ = (((p == null))?null:p);
var m__16976__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__16975__auto__)]);
if(!((m__16976__auto__ == null))){
return m__16976__auto__.call(null,p,v);
} else {
var m__16976__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__16976__auto____$1 == null))){
return m__16976__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var args157747 = [];
var len__17378__auto___157872 = arguments.length;
var i__17379__auto___157873 = (0);
while(true){
if((i__17379__auto___157873 < len__17378__auto___157872)){
args157747.push((arguments[i__17379__auto___157873]));

var G__157874 = (i__17379__auto___157873 + (1));
i__17379__auto___157873 = G__157874;
continue;
} else {
}
break;
}

var G__157749 = args157747.length;
switch (G__157749) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157747.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__16320__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__16320__auto__)){
return or__16320__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__16320__auto__,mults){
return (function (p1__157746_SHARP_){
if(cljs.core.truth_(p1__157746_SHARP_.call(null,topic))){
return p1__157746_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__157746_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16320__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async157750 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async157750 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta157751){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta157751 = meta157751;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_157752,meta157751__$1){
var self__ = this;
var _157752__$1 = this;
return (new cljs.core.async.t_cljs$core$async157750(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta157751__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_157752){
var self__ = this;
var _157752__$1 = this;
return self__.meta157751;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta157751","meta157751",-150118036,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async157750.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async157750.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async157750";

cljs.core.async.t_cljs$core$async157750.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async157750");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async157750 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async157750(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta157751){
return (new cljs.core.async.t_cljs$core$async157750(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta157751));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async157750(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19342__auto___157876 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___157876,mults,ensure_mult,p){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___157876,mults,ensure_mult,p){
return (function (state_157824){
var state_val_157825 = (state_157824[(1)]);
if((state_val_157825 === (7))){
var inst_157820 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
var statearr_157826_157877 = state_157824__$1;
(statearr_157826_157877[(2)] = inst_157820);

(statearr_157826_157877[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (20))){
var state_157824__$1 = state_157824;
var statearr_157827_157878 = state_157824__$1;
(statearr_157827_157878[(2)] = null);

(statearr_157827_157878[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (1))){
var state_157824__$1 = state_157824;
var statearr_157828_157879 = state_157824__$1;
(statearr_157828_157879[(2)] = null);

(statearr_157828_157879[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (24))){
var inst_157803 = (state_157824[(7)]);
var inst_157812 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_157803);
var state_157824__$1 = state_157824;
var statearr_157829_157880 = state_157824__$1;
(statearr_157829_157880[(2)] = inst_157812);

(statearr_157829_157880[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (4))){
var inst_157755 = (state_157824[(8)]);
var inst_157755__$1 = (state_157824[(2)]);
var inst_157756 = (inst_157755__$1 == null);
var state_157824__$1 = (function (){var statearr_157830 = state_157824;
(statearr_157830[(8)] = inst_157755__$1);

return statearr_157830;
})();
if(cljs.core.truth_(inst_157756)){
var statearr_157831_157881 = state_157824__$1;
(statearr_157831_157881[(1)] = (5));

} else {
var statearr_157832_157882 = state_157824__$1;
(statearr_157832_157882[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (15))){
var inst_157797 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
var statearr_157833_157883 = state_157824__$1;
(statearr_157833_157883[(2)] = inst_157797);

(statearr_157833_157883[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (21))){
var inst_157817 = (state_157824[(2)]);
var state_157824__$1 = (function (){var statearr_157834 = state_157824;
(statearr_157834[(9)] = inst_157817);

return statearr_157834;
})();
var statearr_157835_157884 = state_157824__$1;
(statearr_157835_157884[(2)] = null);

(statearr_157835_157884[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (13))){
var inst_157779 = (state_157824[(10)]);
var inst_157781 = cljs.core.chunked_seq_QMARK_.call(null,inst_157779);
var state_157824__$1 = state_157824;
if(inst_157781){
var statearr_157836_157885 = state_157824__$1;
(statearr_157836_157885[(1)] = (16));

} else {
var statearr_157837_157886 = state_157824__$1;
(statearr_157837_157886[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (22))){
var inst_157809 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
if(cljs.core.truth_(inst_157809)){
var statearr_157838_157887 = state_157824__$1;
(statearr_157838_157887[(1)] = (23));

} else {
var statearr_157839_157888 = state_157824__$1;
(statearr_157839_157888[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (6))){
var inst_157755 = (state_157824[(8)]);
var inst_157805 = (state_157824[(11)]);
var inst_157803 = (state_157824[(7)]);
var inst_157803__$1 = topic_fn.call(null,inst_157755);
var inst_157804 = cljs.core.deref.call(null,mults);
var inst_157805__$1 = cljs.core.get.call(null,inst_157804,inst_157803__$1);
var state_157824__$1 = (function (){var statearr_157840 = state_157824;
(statearr_157840[(11)] = inst_157805__$1);

(statearr_157840[(7)] = inst_157803__$1);

return statearr_157840;
})();
if(cljs.core.truth_(inst_157805__$1)){
var statearr_157841_157889 = state_157824__$1;
(statearr_157841_157889[(1)] = (19));

} else {
var statearr_157842_157890 = state_157824__$1;
(statearr_157842_157890[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (25))){
var inst_157814 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
var statearr_157843_157891 = state_157824__$1;
(statearr_157843_157891[(2)] = inst_157814);

(statearr_157843_157891[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (17))){
var inst_157779 = (state_157824[(10)]);
var inst_157788 = cljs.core.first.call(null,inst_157779);
var inst_157789 = cljs.core.async.muxch_STAR_.call(null,inst_157788);
var inst_157790 = cljs.core.async.close_BANG_.call(null,inst_157789);
var inst_157791 = cljs.core.next.call(null,inst_157779);
var inst_157765 = inst_157791;
var inst_157766 = null;
var inst_157767 = (0);
var inst_157768 = (0);
var state_157824__$1 = (function (){var statearr_157844 = state_157824;
(statearr_157844[(12)] = inst_157768);

(statearr_157844[(13)] = inst_157790);

(statearr_157844[(14)] = inst_157765);

(statearr_157844[(15)] = inst_157767);

(statearr_157844[(16)] = inst_157766);

return statearr_157844;
})();
var statearr_157845_157892 = state_157824__$1;
(statearr_157845_157892[(2)] = null);

(statearr_157845_157892[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (3))){
var inst_157822 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157824__$1,inst_157822);
} else {
if((state_val_157825 === (12))){
var inst_157799 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
var statearr_157846_157893 = state_157824__$1;
(statearr_157846_157893[(2)] = inst_157799);

(statearr_157846_157893[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (2))){
var state_157824__$1 = state_157824;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157824__$1,(4),ch);
} else {
if((state_val_157825 === (23))){
var state_157824__$1 = state_157824;
var statearr_157847_157894 = state_157824__$1;
(statearr_157847_157894[(2)] = null);

(statearr_157847_157894[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (19))){
var inst_157755 = (state_157824[(8)]);
var inst_157805 = (state_157824[(11)]);
var inst_157807 = cljs.core.async.muxch_STAR_.call(null,inst_157805);
var state_157824__$1 = state_157824;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_157824__$1,(22),inst_157807,inst_157755);
} else {
if((state_val_157825 === (11))){
var inst_157765 = (state_157824[(14)]);
var inst_157779 = (state_157824[(10)]);
var inst_157779__$1 = cljs.core.seq.call(null,inst_157765);
var state_157824__$1 = (function (){var statearr_157848 = state_157824;
(statearr_157848[(10)] = inst_157779__$1);

return statearr_157848;
})();
if(inst_157779__$1){
var statearr_157849_157895 = state_157824__$1;
(statearr_157849_157895[(1)] = (13));

} else {
var statearr_157850_157896 = state_157824__$1;
(statearr_157850_157896[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (9))){
var inst_157801 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
var statearr_157851_157897 = state_157824__$1;
(statearr_157851_157897[(2)] = inst_157801);

(statearr_157851_157897[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (5))){
var inst_157762 = cljs.core.deref.call(null,mults);
var inst_157763 = cljs.core.vals.call(null,inst_157762);
var inst_157764 = cljs.core.seq.call(null,inst_157763);
var inst_157765 = inst_157764;
var inst_157766 = null;
var inst_157767 = (0);
var inst_157768 = (0);
var state_157824__$1 = (function (){var statearr_157852 = state_157824;
(statearr_157852[(12)] = inst_157768);

(statearr_157852[(14)] = inst_157765);

(statearr_157852[(15)] = inst_157767);

(statearr_157852[(16)] = inst_157766);

return statearr_157852;
})();
var statearr_157853_157898 = state_157824__$1;
(statearr_157853_157898[(2)] = null);

(statearr_157853_157898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (14))){
var state_157824__$1 = state_157824;
var statearr_157857_157899 = state_157824__$1;
(statearr_157857_157899[(2)] = null);

(statearr_157857_157899[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (16))){
var inst_157779 = (state_157824[(10)]);
var inst_157783 = cljs.core.chunk_first.call(null,inst_157779);
var inst_157784 = cljs.core.chunk_rest.call(null,inst_157779);
var inst_157785 = cljs.core.count.call(null,inst_157783);
var inst_157765 = inst_157784;
var inst_157766 = inst_157783;
var inst_157767 = inst_157785;
var inst_157768 = (0);
var state_157824__$1 = (function (){var statearr_157858 = state_157824;
(statearr_157858[(12)] = inst_157768);

(statearr_157858[(14)] = inst_157765);

(statearr_157858[(15)] = inst_157767);

(statearr_157858[(16)] = inst_157766);

return statearr_157858;
})();
var statearr_157859_157900 = state_157824__$1;
(statearr_157859_157900[(2)] = null);

(statearr_157859_157900[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (10))){
var inst_157768 = (state_157824[(12)]);
var inst_157765 = (state_157824[(14)]);
var inst_157767 = (state_157824[(15)]);
var inst_157766 = (state_157824[(16)]);
var inst_157773 = cljs.core._nth.call(null,inst_157766,inst_157768);
var inst_157774 = cljs.core.async.muxch_STAR_.call(null,inst_157773);
var inst_157775 = cljs.core.async.close_BANG_.call(null,inst_157774);
var inst_157776 = (inst_157768 + (1));
var tmp157854 = inst_157765;
var tmp157855 = inst_157767;
var tmp157856 = inst_157766;
var inst_157765__$1 = tmp157854;
var inst_157766__$1 = tmp157856;
var inst_157767__$1 = tmp157855;
var inst_157768__$1 = inst_157776;
var state_157824__$1 = (function (){var statearr_157860 = state_157824;
(statearr_157860[(12)] = inst_157768__$1);

(statearr_157860[(17)] = inst_157775);

(statearr_157860[(14)] = inst_157765__$1);

(statearr_157860[(15)] = inst_157767__$1);

(statearr_157860[(16)] = inst_157766__$1);

return statearr_157860;
})();
var statearr_157861_157901 = state_157824__$1;
(statearr_157861_157901[(2)] = null);

(statearr_157861_157901[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (18))){
var inst_157794 = (state_157824[(2)]);
var state_157824__$1 = state_157824;
var statearr_157862_157902 = state_157824__$1;
(statearr_157862_157902[(2)] = inst_157794);

(statearr_157862_157902[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157825 === (8))){
var inst_157768 = (state_157824[(12)]);
var inst_157767 = (state_157824[(15)]);
var inst_157770 = (inst_157768 < inst_157767);
var inst_157771 = inst_157770;
var state_157824__$1 = state_157824;
if(cljs.core.truth_(inst_157771)){
var statearr_157863_157903 = state_157824__$1;
(statearr_157863_157903[(1)] = (10));

} else {
var statearr_157864_157904 = state_157824__$1;
(statearr_157864_157904[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__19342__auto___157876,mults,ensure_mult,p))
;
return ((function (switch__19321__auto__,c__19342__auto___157876,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_157868 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_157868[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_157868[(1)] = (1));

return statearr_157868;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_157824){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_157824);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e157869){if((e157869 instanceof Object)){
var ex__19325__auto__ = e157869;
var statearr_157870_157905 = state_157824;
(statearr_157870_157905[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157824);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e157869;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__157906 = state_157824;
state_157824 = G__157906;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_157824){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_157824);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___157876,mults,ensure_mult,p))
})();
var state__19344__auto__ = (function (){var statearr_157871 = f__19343__auto__.call(null);
(statearr_157871[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___157876);

return statearr_157871;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___157876,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var args157907 = [];
var len__17378__auto___157910 = arguments.length;
var i__17379__auto___157911 = (0);
while(true){
if((i__17379__auto___157911 < len__17378__auto___157910)){
args157907.push((arguments[i__17379__auto___157911]));

var G__157912 = (i__17379__auto___157911 + (1));
i__17379__auto___157911 = G__157912;
continue;
} else {
}
break;
}

var G__157909 = args157907.length;
switch (G__157909) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157907.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var args157914 = [];
var len__17378__auto___157917 = arguments.length;
var i__17379__auto___157918 = (0);
while(true){
if((i__17379__auto___157918 < len__17378__auto___157917)){
args157914.push((arguments[i__17379__auto___157918]));

var G__157919 = (i__17379__auto___157918 + (1));
i__17379__auto___157918 = G__157919;
continue;
} else {
}
break;
}

var G__157916 = args157914.length;
switch (G__157916) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157914.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var args157921 = [];
var len__17378__auto___157992 = arguments.length;
var i__17379__auto___157993 = (0);
while(true){
if((i__17379__auto___157993 < len__17378__auto___157992)){
args157921.push((arguments[i__17379__auto___157993]));

var G__157994 = (i__17379__auto___157993 + (1));
i__17379__auto___157993 = G__157994;
continue;
} else {
}
break;
}

var G__157923 = args157921.length;
switch (G__157923) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args157921.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__19342__auto___157996 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___157996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___157996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_157962){
var state_val_157963 = (state_157962[(1)]);
if((state_val_157963 === (7))){
var state_157962__$1 = state_157962;
var statearr_157964_157997 = state_157962__$1;
(statearr_157964_157997[(2)] = null);

(statearr_157964_157997[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (1))){
var state_157962__$1 = state_157962;
var statearr_157965_157998 = state_157962__$1;
(statearr_157965_157998[(2)] = null);

(statearr_157965_157998[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (4))){
var inst_157926 = (state_157962[(7)]);
var inst_157928 = (inst_157926 < cnt);
var state_157962__$1 = state_157962;
if(cljs.core.truth_(inst_157928)){
var statearr_157966_157999 = state_157962__$1;
(statearr_157966_157999[(1)] = (6));

} else {
var statearr_157967_158000 = state_157962__$1;
(statearr_157967_158000[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (15))){
var inst_157958 = (state_157962[(2)]);
var state_157962__$1 = state_157962;
var statearr_157968_158001 = state_157962__$1;
(statearr_157968_158001[(2)] = inst_157958);

(statearr_157968_158001[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (13))){
var inst_157951 = cljs.core.async.close_BANG_.call(null,out);
var state_157962__$1 = state_157962;
var statearr_157969_158002 = state_157962__$1;
(statearr_157969_158002[(2)] = inst_157951);

(statearr_157969_158002[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (6))){
var state_157962__$1 = state_157962;
var statearr_157970_158003 = state_157962__$1;
(statearr_157970_158003[(2)] = null);

(statearr_157970_158003[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (3))){
var inst_157960 = (state_157962[(2)]);
var state_157962__$1 = state_157962;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_157962__$1,inst_157960);
} else {
if((state_val_157963 === (12))){
var inst_157948 = (state_157962[(8)]);
var inst_157948__$1 = (state_157962[(2)]);
var inst_157949 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_157948__$1);
var state_157962__$1 = (function (){var statearr_157971 = state_157962;
(statearr_157971[(8)] = inst_157948__$1);

return statearr_157971;
})();
if(cljs.core.truth_(inst_157949)){
var statearr_157972_158004 = state_157962__$1;
(statearr_157972_158004[(1)] = (13));

} else {
var statearr_157973_158005 = state_157962__$1;
(statearr_157973_158005[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (2))){
var inst_157925 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_157926 = (0);
var state_157962__$1 = (function (){var statearr_157974 = state_157962;
(statearr_157974[(7)] = inst_157926);

(statearr_157974[(9)] = inst_157925);

return statearr_157974;
})();
var statearr_157975_158006 = state_157962__$1;
(statearr_157975_158006[(2)] = null);

(statearr_157975_158006[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (11))){
var inst_157926 = (state_157962[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_157962,(10),Object,null,(9));
var inst_157935 = chs__$1.call(null,inst_157926);
var inst_157936 = done.call(null,inst_157926);
var inst_157937 = cljs.core.async.take_BANG_.call(null,inst_157935,inst_157936);
var state_157962__$1 = state_157962;
var statearr_157976_158007 = state_157962__$1;
(statearr_157976_158007[(2)] = inst_157937);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (9))){
var inst_157926 = (state_157962[(7)]);
var inst_157939 = (state_157962[(2)]);
var inst_157940 = (inst_157926 + (1));
var inst_157926__$1 = inst_157940;
var state_157962__$1 = (function (){var statearr_157977 = state_157962;
(statearr_157977[(7)] = inst_157926__$1);

(statearr_157977[(10)] = inst_157939);

return statearr_157977;
})();
var statearr_157978_158008 = state_157962__$1;
(statearr_157978_158008[(2)] = null);

(statearr_157978_158008[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (5))){
var inst_157946 = (state_157962[(2)]);
var state_157962__$1 = (function (){var statearr_157979 = state_157962;
(statearr_157979[(11)] = inst_157946);

return statearr_157979;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_157962__$1,(12),dchan);
} else {
if((state_val_157963 === (14))){
var inst_157948 = (state_157962[(8)]);
var inst_157953 = cljs.core.apply.call(null,f,inst_157948);
var state_157962__$1 = state_157962;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_157962__$1,(16),out,inst_157953);
} else {
if((state_val_157963 === (16))){
var inst_157955 = (state_157962[(2)]);
var state_157962__$1 = (function (){var statearr_157980 = state_157962;
(statearr_157980[(12)] = inst_157955);

return statearr_157980;
})();
var statearr_157981_158009 = state_157962__$1;
(statearr_157981_158009[(2)] = null);

(statearr_157981_158009[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (10))){
var inst_157930 = (state_157962[(2)]);
var inst_157931 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_157962__$1 = (function (){var statearr_157982 = state_157962;
(statearr_157982[(13)] = inst_157930);

return statearr_157982;
})();
var statearr_157983_158010 = state_157962__$1;
(statearr_157983_158010[(2)] = inst_157931);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157962__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_157963 === (8))){
var inst_157944 = (state_157962[(2)]);
var state_157962__$1 = state_157962;
var statearr_157984_158011 = state_157962__$1;
(statearr_157984_158011[(2)] = inst_157944);

(statearr_157984_158011[(1)] = (5));


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
});})(c__19342__auto___157996,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19321__auto__,c__19342__auto___157996,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_157988 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_157988[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_157988[(1)] = (1));

return statearr_157988;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_157962){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_157962);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e157989){if((e157989 instanceof Object)){
var ex__19325__auto__ = e157989;
var statearr_157990_158012 = state_157962;
(statearr_157990_158012[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_157962);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e157989;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158013 = state_157962;
state_157962 = G__158013;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_157962){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_157962);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___157996,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19344__auto__ = (function (){var statearr_157991 = f__19343__auto__.call(null);
(statearr_157991[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___157996);

return statearr_157991;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___157996,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var args158015 = [];
var len__17378__auto___158071 = arguments.length;
var i__17379__auto___158072 = (0);
while(true){
if((i__17379__auto___158072 < len__17378__auto___158071)){
args158015.push((arguments[i__17379__auto___158072]));

var G__158073 = (i__17379__auto___158072 + (1));
i__17379__auto___158072 = G__158073;
continue;
} else {
}
break;
}

var G__158017 = args158015.length;
switch (G__158017) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158015.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19342__auto___158075 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___158075,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___158075,out){
return (function (state_158047){
var state_val_158048 = (state_158047[(1)]);
if((state_val_158048 === (7))){
var inst_158027 = (state_158047[(7)]);
var inst_158026 = (state_158047[(8)]);
var inst_158026__$1 = (state_158047[(2)]);
var inst_158027__$1 = cljs.core.nth.call(null,inst_158026__$1,(0),null);
var inst_158028 = cljs.core.nth.call(null,inst_158026__$1,(1),null);
var inst_158029 = (inst_158027__$1 == null);
var state_158047__$1 = (function (){var statearr_158049 = state_158047;
(statearr_158049[(7)] = inst_158027__$1);

(statearr_158049[(9)] = inst_158028);

(statearr_158049[(8)] = inst_158026__$1);

return statearr_158049;
})();
if(cljs.core.truth_(inst_158029)){
var statearr_158050_158076 = state_158047__$1;
(statearr_158050_158076[(1)] = (8));

} else {
var statearr_158051_158077 = state_158047__$1;
(statearr_158051_158077[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158048 === (1))){
var inst_158018 = cljs.core.vec.call(null,chs);
var inst_158019 = inst_158018;
var state_158047__$1 = (function (){var statearr_158052 = state_158047;
(statearr_158052[(10)] = inst_158019);

return statearr_158052;
})();
var statearr_158053_158078 = state_158047__$1;
(statearr_158053_158078[(2)] = null);

(statearr_158053_158078[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158048 === (4))){
var inst_158019 = (state_158047[(10)]);
var state_158047__$1 = state_158047;
return cljs.core.async.ioc_alts_BANG_.call(null,state_158047__$1,(7),inst_158019);
} else {
if((state_val_158048 === (6))){
var inst_158043 = (state_158047[(2)]);
var state_158047__$1 = state_158047;
var statearr_158054_158079 = state_158047__$1;
(statearr_158054_158079[(2)] = inst_158043);

(statearr_158054_158079[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158048 === (3))){
var inst_158045 = (state_158047[(2)]);
var state_158047__$1 = state_158047;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158047__$1,inst_158045);
} else {
if((state_val_158048 === (2))){
var inst_158019 = (state_158047[(10)]);
var inst_158021 = cljs.core.count.call(null,inst_158019);
var inst_158022 = (inst_158021 > (0));
var state_158047__$1 = state_158047;
if(cljs.core.truth_(inst_158022)){
var statearr_158056_158080 = state_158047__$1;
(statearr_158056_158080[(1)] = (4));

} else {
var statearr_158057_158081 = state_158047__$1;
(statearr_158057_158081[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158048 === (11))){
var inst_158019 = (state_158047[(10)]);
var inst_158036 = (state_158047[(2)]);
var tmp158055 = inst_158019;
var inst_158019__$1 = tmp158055;
var state_158047__$1 = (function (){var statearr_158058 = state_158047;
(statearr_158058[(10)] = inst_158019__$1);

(statearr_158058[(11)] = inst_158036);

return statearr_158058;
})();
var statearr_158059_158082 = state_158047__$1;
(statearr_158059_158082[(2)] = null);

(statearr_158059_158082[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158048 === (9))){
var inst_158027 = (state_158047[(7)]);
var state_158047__$1 = state_158047;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158047__$1,(11),out,inst_158027);
} else {
if((state_val_158048 === (5))){
var inst_158041 = cljs.core.async.close_BANG_.call(null,out);
var state_158047__$1 = state_158047;
var statearr_158060_158083 = state_158047__$1;
(statearr_158060_158083[(2)] = inst_158041);

(statearr_158060_158083[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158048 === (10))){
var inst_158039 = (state_158047[(2)]);
var state_158047__$1 = state_158047;
var statearr_158061_158084 = state_158047__$1;
(statearr_158061_158084[(2)] = inst_158039);

(statearr_158061_158084[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158048 === (8))){
var inst_158019 = (state_158047[(10)]);
var inst_158027 = (state_158047[(7)]);
var inst_158028 = (state_158047[(9)]);
var inst_158026 = (state_158047[(8)]);
var inst_158031 = (function (){var cs = inst_158019;
var vec__158024 = inst_158026;
var v = inst_158027;
var c = inst_158028;
return ((function (cs,vec__158024,v,c,inst_158019,inst_158027,inst_158028,inst_158026,state_val_158048,c__19342__auto___158075,out){
return (function (p1__158014_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__158014_SHARP_);
});
;})(cs,vec__158024,v,c,inst_158019,inst_158027,inst_158028,inst_158026,state_val_158048,c__19342__auto___158075,out))
})();
var inst_158032 = cljs.core.filterv.call(null,inst_158031,inst_158019);
var inst_158019__$1 = inst_158032;
var state_158047__$1 = (function (){var statearr_158062 = state_158047;
(statearr_158062[(10)] = inst_158019__$1);

return statearr_158062;
})();
var statearr_158063_158085 = state_158047__$1;
(statearr_158063_158085[(2)] = null);

(statearr_158063_158085[(1)] = (2));


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
});})(c__19342__auto___158075,out))
;
return ((function (switch__19321__auto__,c__19342__auto___158075,out){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_158067 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_158067[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_158067[(1)] = (1));

return statearr_158067;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_158047){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_158047);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e158068){if((e158068 instanceof Object)){
var ex__19325__auto__ = e158068;
var statearr_158069_158086 = state_158047;
(statearr_158069_158086[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158047);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e158068;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158087 = state_158047;
state_158047 = G__158087;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_158047){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_158047);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___158075,out))
})();
var state__19344__auto__ = (function (){var statearr_158070 = f__19343__auto__.call(null);
(statearr_158070[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___158075);

return statearr_158070;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___158075,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var args158088 = [];
var len__17378__auto___158137 = arguments.length;
var i__17379__auto___158138 = (0);
while(true){
if((i__17379__auto___158138 < len__17378__auto___158137)){
args158088.push((arguments[i__17379__auto___158138]));

var G__158139 = (i__17379__auto___158138 + (1));
i__17379__auto___158138 = G__158139;
continue;
} else {
}
break;
}

var G__158090 = args158088.length;
switch (G__158090) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158088.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19342__auto___158141 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___158141,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___158141,out){
return (function (state_158114){
var state_val_158115 = (state_158114[(1)]);
if((state_val_158115 === (7))){
var inst_158096 = (state_158114[(7)]);
var inst_158096__$1 = (state_158114[(2)]);
var inst_158097 = (inst_158096__$1 == null);
var inst_158098 = cljs.core.not.call(null,inst_158097);
var state_158114__$1 = (function (){var statearr_158116 = state_158114;
(statearr_158116[(7)] = inst_158096__$1);

return statearr_158116;
})();
if(inst_158098){
var statearr_158117_158142 = state_158114__$1;
(statearr_158117_158142[(1)] = (8));

} else {
var statearr_158118_158143 = state_158114__$1;
(statearr_158118_158143[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (1))){
var inst_158091 = (0);
var state_158114__$1 = (function (){var statearr_158119 = state_158114;
(statearr_158119[(8)] = inst_158091);

return statearr_158119;
})();
var statearr_158120_158144 = state_158114__$1;
(statearr_158120_158144[(2)] = null);

(statearr_158120_158144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (4))){
var state_158114__$1 = state_158114;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158114__$1,(7),ch);
} else {
if((state_val_158115 === (6))){
var inst_158109 = (state_158114[(2)]);
var state_158114__$1 = state_158114;
var statearr_158121_158145 = state_158114__$1;
(statearr_158121_158145[(2)] = inst_158109);

(statearr_158121_158145[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (3))){
var inst_158111 = (state_158114[(2)]);
var inst_158112 = cljs.core.async.close_BANG_.call(null,out);
var state_158114__$1 = (function (){var statearr_158122 = state_158114;
(statearr_158122[(9)] = inst_158111);

return statearr_158122;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158114__$1,inst_158112);
} else {
if((state_val_158115 === (2))){
var inst_158091 = (state_158114[(8)]);
var inst_158093 = (inst_158091 < n);
var state_158114__$1 = state_158114;
if(cljs.core.truth_(inst_158093)){
var statearr_158123_158146 = state_158114__$1;
(statearr_158123_158146[(1)] = (4));

} else {
var statearr_158124_158147 = state_158114__$1;
(statearr_158124_158147[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (11))){
var inst_158091 = (state_158114[(8)]);
var inst_158101 = (state_158114[(2)]);
var inst_158102 = (inst_158091 + (1));
var inst_158091__$1 = inst_158102;
var state_158114__$1 = (function (){var statearr_158125 = state_158114;
(statearr_158125[(8)] = inst_158091__$1);

(statearr_158125[(10)] = inst_158101);

return statearr_158125;
})();
var statearr_158126_158148 = state_158114__$1;
(statearr_158126_158148[(2)] = null);

(statearr_158126_158148[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (9))){
var state_158114__$1 = state_158114;
var statearr_158127_158149 = state_158114__$1;
(statearr_158127_158149[(2)] = null);

(statearr_158127_158149[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (5))){
var state_158114__$1 = state_158114;
var statearr_158128_158150 = state_158114__$1;
(statearr_158128_158150[(2)] = null);

(statearr_158128_158150[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (10))){
var inst_158106 = (state_158114[(2)]);
var state_158114__$1 = state_158114;
var statearr_158129_158151 = state_158114__$1;
(statearr_158129_158151[(2)] = inst_158106);

(statearr_158129_158151[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158115 === (8))){
var inst_158096 = (state_158114[(7)]);
var state_158114__$1 = state_158114;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158114__$1,(11),out,inst_158096);
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
});})(c__19342__auto___158141,out))
;
return ((function (switch__19321__auto__,c__19342__auto___158141,out){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_158133 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_158133[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_158133[(1)] = (1));

return statearr_158133;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_158114){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_158114);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e158134){if((e158134 instanceof Object)){
var ex__19325__auto__ = e158134;
var statearr_158135_158152 = state_158114;
(statearr_158135_158152[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158114);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e158134;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158153 = state_158114;
state_158114 = G__158153;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_158114){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_158114);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___158141,out))
})();
var state__19344__auto__ = (function (){var statearr_158136 = f__19343__auto__.call(null);
(statearr_158136[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___158141);

return statearr_158136;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___158141,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async158161 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async158161 = (function (map_LT_,f,ch,meta158162){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta158162 = meta158162;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158163,meta158162__$1){
var self__ = this;
var _158163__$1 = this;
return (new cljs.core.async.t_cljs$core$async158161(self__.map_LT_,self__.f,self__.ch,meta158162__$1));
});

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158163){
var self__ = this;
var _158163__$1 = this;
return self__.meta158162;
});

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async158164 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async158164 = (function (map_LT_,f,ch,meta158162,_,fn1,meta158165){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta158162 = meta158162;
this._ = _;
this.fn1 = fn1;
this.meta158165 = meta158165;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async158164.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_158166,meta158165__$1){
var self__ = this;
var _158166__$1 = this;
return (new cljs.core.async.t_cljs$core$async158164(self__.map_LT_,self__.f,self__.ch,self__.meta158162,self__._,self__.fn1,meta158165__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async158164.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_158166){
var self__ = this;
var _158166__$1 = this;
return self__.meta158165;
});})(___$1))
;

cljs.core.async.t_cljs$core$async158164.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async158164.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async158164.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__158154_SHARP_){
return f1.call(null,(((p1__158154_SHARP_ == null))?null:self__.f.call(null,p1__158154_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async158164.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta158162","meta158162",2112523988,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async158161","cljs.core.async/t_cljs$core$async158161",-660588490,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta158165","meta158165",-1330254117,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async158164.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async158164.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async158164";

cljs.core.async.t_cljs$core$async158164.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async158164");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async158164 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async158164(map_LT___$1,f__$1,ch__$1,meta158162__$1,___$2,fn1__$1,meta158165){
return (new cljs.core.async.t_cljs$core$async158164(map_LT___$1,f__$1,ch__$1,meta158162__$1,___$2,fn1__$1,meta158165));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async158164(self__.map_LT_,self__.f,self__.ch,self__.meta158162,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__16308__auto__ = ret;
if(cljs.core.truth_(and__16308__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__16308__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async158161.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async158161.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta158162","meta158162",2112523988,null)], null);
});

cljs.core.async.t_cljs$core$async158161.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async158161.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async158161";

cljs.core.async.t_cljs$core$async158161.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async158161");
});

cljs.core.async.__GT_t_cljs$core$async158161 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async158161(map_LT___$1,f__$1,ch__$1,meta158162){
return (new cljs.core.async.t_cljs$core$async158161(map_LT___$1,f__$1,ch__$1,meta158162));
});

}

return (new cljs.core.async.t_cljs$core$async158161(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async158170 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async158170 = (function (map_GT_,f,ch,meta158171){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta158171 = meta158171;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158172,meta158171__$1){
var self__ = this;
var _158172__$1 = this;
return (new cljs.core.async.t_cljs$core$async158170(self__.map_GT_,self__.f,self__.ch,meta158171__$1));
});

cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158172){
var self__ = this;
var _158172__$1 = this;
return self__.meta158171;
});

cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async158170.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async158170.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta158171","meta158171",-476788108,null)], null);
});

cljs.core.async.t_cljs$core$async158170.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async158170.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async158170";

cljs.core.async.t_cljs$core$async158170.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async158170");
});

cljs.core.async.__GT_t_cljs$core$async158170 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async158170(map_GT___$1,f__$1,ch__$1,meta158171){
return (new cljs.core.async.t_cljs$core$async158170(map_GT___$1,f__$1,ch__$1,meta158171));
});

}

return (new cljs.core.async.t_cljs$core$async158170(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async158176 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async158176 = (function (filter_GT_,p,ch,meta158177){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta158177 = meta158177;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_158178,meta158177__$1){
var self__ = this;
var _158178__$1 = this;
return (new cljs.core.async.t_cljs$core$async158176(self__.filter_GT_,self__.p,self__.ch,meta158177__$1));
});

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_158178){
var self__ = this;
var _158178__$1 = this;
return self__.meta158177;
});

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async158176.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async158176.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta158177","meta158177",207565782,null)], null);
});

cljs.core.async.t_cljs$core$async158176.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async158176.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async158176";

cljs.core.async.t_cljs$core$async158176.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async158176");
});

cljs.core.async.__GT_t_cljs$core$async158176 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async158176(filter_GT___$1,p__$1,ch__$1,meta158177){
return (new cljs.core.async.t_cljs$core$async158176(filter_GT___$1,p__$1,ch__$1,meta158177));
});

}

return (new cljs.core.async.t_cljs$core$async158176(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var args158179 = [];
var len__17378__auto___158223 = arguments.length;
var i__17379__auto___158224 = (0);
while(true){
if((i__17379__auto___158224 < len__17378__auto___158223)){
args158179.push((arguments[i__17379__auto___158224]));

var G__158225 = (i__17379__auto___158224 + (1));
i__17379__auto___158224 = G__158225;
continue;
} else {
}
break;
}

var G__158181 = args158179.length;
switch (G__158181) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158179.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19342__auto___158227 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___158227,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___158227,out){
return (function (state_158202){
var state_val_158203 = (state_158202[(1)]);
if((state_val_158203 === (7))){
var inst_158198 = (state_158202[(2)]);
var state_158202__$1 = state_158202;
var statearr_158204_158228 = state_158202__$1;
(statearr_158204_158228[(2)] = inst_158198);

(statearr_158204_158228[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (1))){
var state_158202__$1 = state_158202;
var statearr_158205_158229 = state_158202__$1;
(statearr_158205_158229[(2)] = null);

(statearr_158205_158229[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (4))){
var inst_158184 = (state_158202[(7)]);
var inst_158184__$1 = (state_158202[(2)]);
var inst_158185 = (inst_158184__$1 == null);
var state_158202__$1 = (function (){var statearr_158206 = state_158202;
(statearr_158206[(7)] = inst_158184__$1);

return statearr_158206;
})();
if(cljs.core.truth_(inst_158185)){
var statearr_158207_158230 = state_158202__$1;
(statearr_158207_158230[(1)] = (5));

} else {
var statearr_158208_158231 = state_158202__$1;
(statearr_158208_158231[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (6))){
var inst_158184 = (state_158202[(7)]);
var inst_158189 = p.call(null,inst_158184);
var state_158202__$1 = state_158202;
if(cljs.core.truth_(inst_158189)){
var statearr_158209_158232 = state_158202__$1;
(statearr_158209_158232[(1)] = (8));

} else {
var statearr_158210_158233 = state_158202__$1;
(statearr_158210_158233[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (3))){
var inst_158200 = (state_158202[(2)]);
var state_158202__$1 = state_158202;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158202__$1,inst_158200);
} else {
if((state_val_158203 === (2))){
var state_158202__$1 = state_158202;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158202__$1,(4),ch);
} else {
if((state_val_158203 === (11))){
var inst_158192 = (state_158202[(2)]);
var state_158202__$1 = state_158202;
var statearr_158211_158234 = state_158202__$1;
(statearr_158211_158234[(2)] = inst_158192);

(statearr_158211_158234[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (9))){
var state_158202__$1 = state_158202;
var statearr_158212_158235 = state_158202__$1;
(statearr_158212_158235[(2)] = null);

(statearr_158212_158235[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (5))){
var inst_158187 = cljs.core.async.close_BANG_.call(null,out);
var state_158202__$1 = state_158202;
var statearr_158213_158236 = state_158202__$1;
(statearr_158213_158236[(2)] = inst_158187);

(statearr_158213_158236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (10))){
var inst_158195 = (state_158202[(2)]);
var state_158202__$1 = (function (){var statearr_158214 = state_158202;
(statearr_158214[(8)] = inst_158195);

return statearr_158214;
})();
var statearr_158215_158237 = state_158202__$1;
(statearr_158215_158237[(2)] = null);

(statearr_158215_158237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158203 === (8))){
var inst_158184 = (state_158202[(7)]);
var state_158202__$1 = state_158202;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158202__$1,(11),out,inst_158184);
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
});})(c__19342__auto___158227,out))
;
return ((function (switch__19321__auto__,c__19342__auto___158227,out){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_158219 = [null,null,null,null,null,null,null,null,null];
(statearr_158219[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_158219[(1)] = (1));

return statearr_158219;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_158202){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_158202);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e158220){if((e158220 instanceof Object)){
var ex__19325__auto__ = e158220;
var statearr_158221_158238 = state_158202;
(statearr_158221_158238[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158202);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e158220;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158239 = state_158202;
state_158202 = G__158239;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_158202){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_158202);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___158227,out))
})();
var state__19344__auto__ = (function (){var statearr_158222 = f__19343__auto__.call(null);
(statearr_158222[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___158227);

return statearr_158222;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___158227,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args158240 = [];
var len__17378__auto___158243 = arguments.length;
var i__17379__auto___158244 = (0);
while(true){
if((i__17379__auto___158244 < len__17378__auto___158243)){
args158240.push((arguments[i__17379__auto___158244]));

var G__158245 = (i__17379__auto___158244 + (1));
i__17379__auto___158244 = G__158245;
continue;
} else {
}
break;
}

var G__158242 = args158240.length;
switch (G__158242) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158240.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__19342__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto__){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto__){
return (function (state_158412){
var state_val_158413 = (state_158412[(1)]);
if((state_val_158413 === (7))){
var inst_158408 = (state_158412[(2)]);
var state_158412__$1 = state_158412;
var statearr_158414_158455 = state_158412__$1;
(statearr_158414_158455[(2)] = inst_158408);

(statearr_158414_158455[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (20))){
var inst_158378 = (state_158412[(7)]);
var inst_158389 = (state_158412[(2)]);
var inst_158390 = cljs.core.next.call(null,inst_158378);
var inst_158364 = inst_158390;
var inst_158365 = null;
var inst_158366 = (0);
var inst_158367 = (0);
var state_158412__$1 = (function (){var statearr_158415 = state_158412;
(statearr_158415[(8)] = inst_158365);

(statearr_158415[(9)] = inst_158364);

(statearr_158415[(10)] = inst_158367);

(statearr_158415[(11)] = inst_158389);

(statearr_158415[(12)] = inst_158366);

return statearr_158415;
})();
var statearr_158416_158456 = state_158412__$1;
(statearr_158416_158456[(2)] = null);

(statearr_158416_158456[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (1))){
var state_158412__$1 = state_158412;
var statearr_158417_158457 = state_158412__$1;
(statearr_158417_158457[(2)] = null);

(statearr_158417_158457[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (4))){
var inst_158353 = (state_158412[(13)]);
var inst_158353__$1 = (state_158412[(2)]);
var inst_158354 = (inst_158353__$1 == null);
var state_158412__$1 = (function (){var statearr_158418 = state_158412;
(statearr_158418[(13)] = inst_158353__$1);

return statearr_158418;
})();
if(cljs.core.truth_(inst_158354)){
var statearr_158419_158458 = state_158412__$1;
(statearr_158419_158458[(1)] = (5));

} else {
var statearr_158420_158459 = state_158412__$1;
(statearr_158420_158459[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (15))){
var state_158412__$1 = state_158412;
var statearr_158424_158460 = state_158412__$1;
(statearr_158424_158460[(2)] = null);

(statearr_158424_158460[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (21))){
var state_158412__$1 = state_158412;
var statearr_158425_158461 = state_158412__$1;
(statearr_158425_158461[(2)] = null);

(statearr_158425_158461[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (13))){
var inst_158365 = (state_158412[(8)]);
var inst_158364 = (state_158412[(9)]);
var inst_158367 = (state_158412[(10)]);
var inst_158366 = (state_158412[(12)]);
var inst_158374 = (state_158412[(2)]);
var inst_158375 = (inst_158367 + (1));
var tmp158421 = inst_158365;
var tmp158422 = inst_158364;
var tmp158423 = inst_158366;
var inst_158364__$1 = tmp158422;
var inst_158365__$1 = tmp158421;
var inst_158366__$1 = tmp158423;
var inst_158367__$1 = inst_158375;
var state_158412__$1 = (function (){var statearr_158426 = state_158412;
(statearr_158426[(8)] = inst_158365__$1);

(statearr_158426[(9)] = inst_158364__$1);

(statearr_158426[(10)] = inst_158367__$1);

(statearr_158426[(14)] = inst_158374);

(statearr_158426[(12)] = inst_158366__$1);

return statearr_158426;
})();
var statearr_158427_158462 = state_158412__$1;
(statearr_158427_158462[(2)] = null);

(statearr_158427_158462[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (22))){
var state_158412__$1 = state_158412;
var statearr_158428_158463 = state_158412__$1;
(statearr_158428_158463[(2)] = null);

(statearr_158428_158463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (6))){
var inst_158353 = (state_158412[(13)]);
var inst_158362 = f.call(null,inst_158353);
var inst_158363 = cljs.core.seq.call(null,inst_158362);
var inst_158364 = inst_158363;
var inst_158365 = null;
var inst_158366 = (0);
var inst_158367 = (0);
var state_158412__$1 = (function (){var statearr_158429 = state_158412;
(statearr_158429[(8)] = inst_158365);

(statearr_158429[(9)] = inst_158364);

(statearr_158429[(10)] = inst_158367);

(statearr_158429[(12)] = inst_158366);

return statearr_158429;
})();
var statearr_158430_158464 = state_158412__$1;
(statearr_158430_158464[(2)] = null);

(statearr_158430_158464[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (17))){
var inst_158378 = (state_158412[(7)]);
var inst_158382 = cljs.core.chunk_first.call(null,inst_158378);
var inst_158383 = cljs.core.chunk_rest.call(null,inst_158378);
var inst_158384 = cljs.core.count.call(null,inst_158382);
var inst_158364 = inst_158383;
var inst_158365 = inst_158382;
var inst_158366 = inst_158384;
var inst_158367 = (0);
var state_158412__$1 = (function (){var statearr_158431 = state_158412;
(statearr_158431[(8)] = inst_158365);

(statearr_158431[(9)] = inst_158364);

(statearr_158431[(10)] = inst_158367);

(statearr_158431[(12)] = inst_158366);

return statearr_158431;
})();
var statearr_158432_158465 = state_158412__$1;
(statearr_158432_158465[(2)] = null);

(statearr_158432_158465[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (3))){
var inst_158410 = (state_158412[(2)]);
var state_158412__$1 = state_158412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158412__$1,inst_158410);
} else {
if((state_val_158413 === (12))){
var inst_158398 = (state_158412[(2)]);
var state_158412__$1 = state_158412;
var statearr_158433_158466 = state_158412__$1;
(statearr_158433_158466[(2)] = inst_158398);

(statearr_158433_158466[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (2))){
var state_158412__$1 = state_158412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158412__$1,(4),in$);
} else {
if((state_val_158413 === (23))){
var inst_158406 = (state_158412[(2)]);
var state_158412__$1 = state_158412;
var statearr_158434_158467 = state_158412__$1;
(statearr_158434_158467[(2)] = inst_158406);

(statearr_158434_158467[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (19))){
var inst_158393 = (state_158412[(2)]);
var state_158412__$1 = state_158412;
var statearr_158435_158468 = state_158412__$1;
(statearr_158435_158468[(2)] = inst_158393);

(statearr_158435_158468[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (11))){
var inst_158364 = (state_158412[(9)]);
var inst_158378 = (state_158412[(7)]);
var inst_158378__$1 = cljs.core.seq.call(null,inst_158364);
var state_158412__$1 = (function (){var statearr_158436 = state_158412;
(statearr_158436[(7)] = inst_158378__$1);

return statearr_158436;
})();
if(inst_158378__$1){
var statearr_158437_158469 = state_158412__$1;
(statearr_158437_158469[(1)] = (14));

} else {
var statearr_158438_158470 = state_158412__$1;
(statearr_158438_158470[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (9))){
var inst_158400 = (state_158412[(2)]);
var inst_158401 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_158412__$1 = (function (){var statearr_158439 = state_158412;
(statearr_158439[(15)] = inst_158400);

return statearr_158439;
})();
if(cljs.core.truth_(inst_158401)){
var statearr_158440_158471 = state_158412__$1;
(statearr_158440_158471[(1)] = (21));

} else {
var statearr_158441_158472 = state_158412__$1;
(statearr_158441_158472[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (5))){
var inst_158356 = cljs.core.async.close_BANG_.call(null,out);
var state_158412__$1 = state_158412;
var statearr_158442_158473 = state_158412__$1;
(statearr_158442_158473[(2)] = inst_158356);

(statearr_158442_158473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (14))){
var inst_158378 = (state_158412[(7)]);
var inst_158380 = cljs.core.chunked_seq_QMARK_.call(null,inst_158378);
var state_158412__$1 = state_158412;
if(inst_158380){
var statearr_158443_158474 = state_158412__$1;
(statearr_158443_158474[(1)] = (17));

} else {
var statearr_158444_158475 = state_158412__$1;
(statearr_158444_158475[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (16))){
var inst_158396 = (state_158412[(2)]);
var state_158412__$1 = state_158412;
var statearr_158445_158476 = state_158412__$1;
(statearr_158445_158476[(2)] = inst_158396);

(statearr_158445_158476[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158413 === (10))){
var inst_158365 = (state_158412[(8)]);
var inst_158367 = (state_158412[(10)]);
var inst_158372 = cljs.core._nth.call(null,inst_158365,inst_158367);
var state_158412__$1 = state_158412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158412__$1,(13),out,inst_158372);
} else {
if((state_val_158413 === (18))){
var inst_158378 = (state_158412[(7)]);
var inst_158387 = cljs.core.first.call(null,inst_158378);
var state_158412__$1 = state_158412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158412__$1,(20),out,inst_158387);
} else {
if((state_val_158413 === (8))){
var inst_158367 = (state_158412[(10)]);
var inst_158366 = (state_158412[(12)]);
var inst_158369 = (inst_158367 < inst_158366);
var inst_158370 = inst_158369;
var state_158412__$1 = state_158412;
if(cljs.core.truth_(inst_158370)){
var statearr_158446_158477 = state_158412__$1;
(statearr_158446_158477[(1)] = (10));

} else {
var statearr_158447_158478 = state_158412__$1;
(statearr_158447_158478[(1)] = (11));

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
}
}
}
}
}
}
});})(c__19342__auto__))
;
return ((function (switch__19321__auto__,c__19342__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19322__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19322__auto____0 = (function (){
var statearr_158451 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_158451[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19322__auto__);

(statearr_158451[(1)] = (1));

return statearr_158451;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19322__auto____1 = (function (state_158412){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_158412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e158452){if((e158452 instanceof Object)){
var ex__19325__auto__ = e158452;
var statearr_158453_158479 = state_158412;
(statearr_158453_158479[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e158452;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158480 = state_158412;
state_158412 = G__158480;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19322__auto__ = function(state_158412){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19322__auto____1.call(this,state_158412);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19322__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19322__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto__))
})();
var state__19344__auto__ = (function (){var statearr_158454 = f__19343__auto__.call(null);
(statearr_158454[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto__);

return statearr_158454;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto__))
);

return c__19342__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args158481 = [];
var len__17378__auto___158484 = arguments.length;
var i__17379__auto___158485 = (0);
while(true){
if((i__17379__auto___158485 < len__17378__auto___158484)){
args158481.push((arguments[i__17379__auto___158485]));

var G__158486 = (i__17379__auto___158485 + (1));
i__17379__auto___158485 = G__158486;
continue;
} else {
}
break;
}

var G__158483 = args158481.length;
switch (G__158483) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158481.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var args158488 = [];
var len__17378__auto___158491 = arguments.length;
var i__17379__auto___158492 = (0);
while(true){
if((i__17379__auto___158492 < len__17378__auto___158491)){
args158488.push((arguments[i__17379__auto___158492]));

var G__158493 = (i__17379__auto___158492 + (1));
i__17379__auto___158492 = G__158493;
continue;
} else {
}
break;
}

var G__158490 = args158488.length;
switch (G__158490) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158488.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var args158495 = [];
var len__17378__auto___158546 = arguments.length;
var i__17379__auto___158547 = (0);
while(true){
if((i__17379__auto___158547 < len__17378__auto___158546)){
args158495.push((arguments[i__17379__auto___158547]));

var G__158548 = (i__17379__auto___158547 + (1));
i__17379__auto___158547 = G__158548;
continue;
} else {
}
break;
}

var G__158497 = args158495.length;
switch (G__158497) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158495.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19342__auto___158550 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___158550,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___158550,out){
return (function (state_158521){
var state_val_158522 = (state_158521[(1)]);
if((state_val_158522 === (7))){
var inst_158516 = (state_158521[(2)]);
var state_158521__$1 = state_158521;
var statearr_158523_158551 = state_158521__$1;
(statearr_158523_158551[(2)] = inst_158516);

(statearr_158523_158551[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158522 === (1))){
var inst_158498 = null;
var state_158521__$1 = (function (){var statearr_158524 = state_158521;
(statearr_158524[(7)] = inst_158498);

return statearr_158524;
})();
var statearr_158525_158552 = state_158521__$1;
(statearr_158525_158552[(2)] = null);

(statearr_158525_158552[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158522 === (4))){
var inst_158501 = (state_158521[(8)]);
var inst_158501__$1 = (state_158521[(2)]);
var inst_158502 = (inst_158501__$1 == null);
var inst_158503 = cljs.core.not.call(null,inst_158502);
var state_158521__$1 = (function (){var statearr_158526 = state_158521;
(statearr_158526[(8)] = inst_158501__$1);

return statearr_158526;
})();
if(inst_158503){
var statearr_158527_158553 = state_158521__$1;
(statearr_158527_158553[(1)] = (5));

} else {
var statearr_158528_158554 = state_158521__$1;
(statearr_158528_158554[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158522 === (6))){
var state_158521__$1 = state_158521;
var statearr_158529_158555 = state_158521__$1;
(statearr_158529_158555[(2)] = null);

(statearr_158529_158555[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158522 === (3))){
var inst_158518 = (state_158521[(2)]);
var inst_158519 = cljs.core.async.close_BANG_.call(null,out);
var state_158521__$1 = (function (){var statearr_158530 = state_158521;
(statearr_158530[(9)] = inst_158518);

return statearr_158530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158521__$1,inst_158519);
} else {
if((state_val_158522 === (2))){
var state_158521__$1 = state_158521;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158521__$1,(4),ch);
} else {
if((state_val_158522 === (11))){
var inst_158501 = (state_158521[(8)]);
var inst_158510 = (state_158521[(2)]);
var inst_158498 = inst_158501;
var state_158521__$1 = (function (){var statearr_158531 = state_158521;
(statearr_158531[(7)] = inst_158498);

(statearr_158531[(10)] = inst_158510);

return statearr_158531;
})();
var statearr_158532_158556 = state_158521__$1;
(statearr_158532_158556[(2)] = null);

(statearr_158532_158556[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158522 === (9))){
var inst_158501 = (state_158521[(8)]);
var state_158521__$1 = state_158521;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158521__$1,(11),out,inst_158501);
} else {
if((state_val_158522 === (5))){
var inst_158498 = (state_158521[(7)]);
var inst_158501 = (state_158521[(8)]);
var inst_158505 = cljs.core._EQ_.call(null,inst_158501,inst_158498);
var state_158521__$1 = state_158521;
if(inst_158505){
var statearr_158534_158557 = state_158521__$1;
(statearr_158534_158557[(1)] = (8));

} else {
var statearr_158535_158558 = state_158521__$1;
(statearr_158535_158558[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158522 === (10))){
var inst_158513 = (state_158521[(2)]);
var state_158521__$1 = state_158521;
var statearr_158536_158559 = state_158521__$1;
(statearr_158536_158559[(2)] = inst_158513);

(statearr_158536_158559[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158522 === (8))){
var inst_158498 = (state_158521[(7)]);
var tmp158533 = inst_158498;
var inst_158498__$1 = tmp158533;
var state_158521__$1 = (function (){var statearr_158537 = state_158521;
(statearr_158537[(7)] = inst_158498__$1);

return statearr_158537;
})();
var statearr_158538_158560 = state_158521__$1;
(statearr_158538_158560[(2)] = null);

(statearr_158538_158560[(1)] = (2));


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
});})(c__19342__auto___158550,out))
;
return ((function (switch__19321__auto__,c__19342__auto___158550,out){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_158542 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_158542[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_158542[(1)] = (1));

return statearr_158542;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_158521){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_158521);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e158543){if((e158543 instanceof Object)){
var ex__19325__auto__ = e158543;
var statearr_158544_158561 = state_158521;
(statearr_158544_158561[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158521);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e158543;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158562 = state_158521;
state_158521 = G__158562;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_158521){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_158521);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___158550,out))
})();
var state__19344__auto__ = (function (){var statearr_158545 = f__19343__auto__.call(null);
(statearr_158545[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___158550);

return statearr_158545;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___158550,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args158563 = [];
var len__17378__auto___158633 = arguments.length;
var i__17379__auto___158634 = (0);
while(true){
if((i__17379__auto___158634 < len__17378__auto___158633)){
args158563.push((arguments[i__17379__auto___158634]));

var G__158635 = (i__17379__auto___158634 + (1));
i__17379__auto___158634 = G__158635;
continue;
} else {
}
break;
}

var G__158565 = args158563.length;
switch (G__158565) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158563.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19342__auto___158637 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___158637,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___158637,out){
return (function (state_158603){
var state_val_158604 = (state_158603[(1)]);
if((state_val_158604 === (7))){
var inst_158599 = (state_158603[(2)]);
var state_158603__$1 = state_158603;
var statearr_158605_158638 = state_158603__$1;
(statearr_158605_158638[(2)] = inst_158599);

(statearr_158605_158638[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (1))){
var inst_158566 = (new Array(n));
var inst_158567 = inst_158566;
var inst_158568 = (0);
var state_158603__$1 = (function (){var statearr_158606 = state_158603;
(statearr_158606[(7)] = inst_158567);

(statearr_158606[(8)] = inst_158568);

return statearr_158606;
})();
var statearr_158607_158639 = state_158603__$1;
(statearr_158607_158639[(2)] = null);

(statearr_158607_158639[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (4))){
var inst_158571 = (state_158603[(9)]);
var inst_158571__$1 = (state_158603[(2)]);
var inst_158572 = (inst_158571__$1 == null);
var inst_158573 = cljs.core.not.call(null,inst_158572);
var state_158603__$1 = (function (){var statearr_158608 = state_158603;
(statearr_158608[(9)] = inst_158571__$1);

return statearr_158608;
})();
if(inst_158573){
var statearr_158609_158640 = state_158603__$1;
(statearr_158609_158640[(1)] = (5));

} else {
var statearr_158610_158641 = state_158603__$1;
(statearr_158610_158641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (15))){
var inst_158593 = (state_158603[(2)]);
var state_158603__$1 = state_158603;
var statearr_158611_158642 = state_158603__$1;
(statearr_158611_158642[(2)] = inst_158593);

(statearr_158611_158642[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (13))){
var state_158603__$1 = state_158603;
var statearr_158612_158643 = state_158603__$1;
(statearr_158612_158643[(2)] = null);

(statearr_158612_158643[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (6))){
var inst_158568 = (state_158603[(8)]);
var inst_158589 = (inst_158568 > (0));
var state_158603__$1 = state_158603;
if(cljs.core.truth_(inst_158589)){
var statearr_158613_158644 = state_158603__$1;
(statearr_158613_158644[(1)] = (12));

} else {
var statearr_158614_158645 = state_158603__$1;
(statearr_158614_158645[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (3))){
var inst_158601 = (state_158603[(2)]);
var state_158603__$1 = state_158603;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158603__$1,inst_158601);
} else {
if((state_val_158604 === (12))){
var inst_158567 = (state_158603[(7)]);
var inst_158591 = cljs.core.vec.call(null,inst_158567);
var state_158603__$1 = state_158603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158603__$1,(15),out,inst_158591);
} else {
if((state_val_158604 === (2))){
var state_158603__$1 = state_158603;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158603__$1,(4),ch);
} else {
if((state_val_158604 === (11))){
var inst_158583 = (state_158603[(2)]);
var inst_158584 = (new Array(n));
var inst_158567 = inst_158584;
var inst_158568 = (0);
var state_158603__$1 = (function (){var statearr_158615 = state_158603;
(statearr_158615[(10)] = inst_158583);

(statearr_158615[(7)] = inst_158567);

(statearr_158615[(8)] = inst_158568);

return statearr_158615;
})();
var statearr_158616_158646 = state_158603__$1;
(statearr_158616_158646[(2)] = null);

(statearr_158616_158646[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (9))){
var inst_158567 = (state_158603[(7)]);
var inst_158581 = cljs.core.vec.call(null,inst_158567);
var state_158603__$1 = state_158603;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158603__$1,(11),out,inst_158581);
} else {
if((state_val_158604 === (5))){
var inst_158576 = (state_158603[(11)]);
var inst_158567 = (state_158603[(7)]);
var inst_158568 = (state_158603[(8)]);
var inst_158571 = (state_158603[(9)]);
var inst_158575 = (inst_158567[inst_158568] = inst_158571);
var inst_158576__$1 = (inst_158568 + (1));
var inst_158577 = (inst_158576__$1 < n);
var state_158603__$1 = (function (){var statearr_158617 = state_158603;
(statearr_158617[(11)] = inst_158576__$1);

(statearr_158617[(12)] = inst_158575);

return statearr_158617;
})();
if(cljs.core.truth_(inst_158577)){
var statearr_158618_158647 = state_158603__$1;
(statearr_158618_158647[(1)] = (8));

} else {
var statearr_158619_158648 = state_158603__$1;
(statearr_158619_158648[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (14))){
var inst_158596 = (state_158603[(2)]);
var inst_158597 = cljs.core.async.close_BANG_.call(null,out);
var state_158603__$1 = (function (){var statearr_158621 = state_158603;
(statearr_158621[(13)] = inst_158596);

return statearr_158621;
})();
var statearr_158622_158649 = state_158603__$1;
(statearr_158622_158649[(2)] = inst_158597);

(statearr_158622_158649[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (10))){
var inst_158587 = (state_158603[(2)]);
var state_158603__$1 = state_158603;
var statearr_158623_158650 = state_158603__$1;
(statearr_158623_158650[(2)] = inst_158587);

(statearr_158623_158650[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158604 === (8))){
var inst_158576 = (state_158603[(11)]);
var inst_158567 = (state_158603[(7)]);
var tmp158620 = inst_158567;
var inst_158567__$1 = tmp158620;
var inst_158568 = inst_158576;
var state_158603__$1 = (function (){var statearr_158624 = state_158603;
(statearr_158624[(7)] = inst_158567__$1);

(statearr_158624[(8)] = inst_158568);

return statearr_158624;
})();
var statearr_158625_158651 = state_158603__$1;
(statearr_158625_158651[(2)] = null);

(statearr_158625_158651[(1)] = (2));


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
});})(c__19342__auto___158637,out))
;
return ((function (switch__19321__auto__,c__19342__auto___158637,out){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_158629 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_158629[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_158629[(1)] = (1));

return statearr_158629;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_158603){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_158603);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e158630){if((e158630 instanceof Object)){
var ex__19325__auto__ = e158630;
var statearr_158631_158652 = state_158603;
(statearr_158631_158652[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158603);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e158630;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158653 = state_158603;
state_158603 = G__158653;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_158603){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_158603);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___158637,out))
})();
var state__19344__auto__ = (function (){var statearr_158632 = f__19343__auto__.call(null);
(statearr_158632[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___158637);

return statearr_158632;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___158637,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args158654 = [];
var len__17378__auto___158728 = arguments.length;
var i__17379__auto___158729 = (0);
while(true){
if((i__17379__auto___158729 < len__17378__auto___158728)){
args158654.push((arguments[i__17379__auto___158729]));

var G__158730 = (i__17379__auto___158729 + (1));
i__17379__auto___158729 = G__158730;
continue;
} else {
}
break;
}

var G__158656 = args158654.length;
switch (G__158656) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args158654.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19342__auto___158732 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19342__auto___158732,out){
return (function (){
var f__19343__auto__ = (function (){var switch__19321__auto__ = ((function (c__19342__auto___158732,out){
return (function (state_158698){
var state_val_158699 = (state_158698[(1)]);
if((state_val_158699 === (7))){
var inst_158694 = (state_158698[(2)]);
var state_158698__$1 = state_158698;
var statearr_158700_158733 = state_158698__$1;
(statearr_158700_158733[(2)] = inst_158694);

(statearr_158700_158733[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (1))){
var inst_158657 = [];
var inst_158658 = inst_158657;
var inst_158659 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_158698__$1 = (function (){var statearr_158701 = state_158698;
(statearr_158701[(7)] = inst_158659);

(statearr_158701[(8)] = inst_158658);

return statearr_158701;
})();
var statearr_158702_158734 = state_158698__$1;
(statearr_158702_158734[(2)] = null);

(statearr_158702_158734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (4))){
var inst_158662 = (state_158698[(9)]);
var inst_158662__$1 = (state_158698[(2)]);
var inst_158663 = (inst_158662__$1 == null);
var inst_158664 = cljs.core.not.call(null,inst_158663);
var state_158698__$1 = (function (){var statearr_158703 = state_158698;
(statearr_158703[(9)] = inst_158662__$1);

return statearr_158703;
})();
if(inst_158664){
var statearr_158704_158735 = state_158698__$1;
(statearr_158704_158735[(1)] = (5));

} else {
var statearr_158705_158736 = state_158698__$1;
(statearr_158705_158736[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (15))){
var inst_158688 = (state_158698[(2)]);
var state_158698__$1 = state_158698;
var statearr_158706_158737 = state_158698__$1;
(statearr_158706_158737[(2)] = inst_158688);

(statearr_158706_158737[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (13))){
var state_158698__$1 = state_158698;
var statearr_158707_158738 = state_158698__$1;
(statearr_158707_158738[(2)] = null);

(statearr_158707_158738[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (6))){
var inst_158658 = (state_158698[(8)]);
var inst_158683 = inst_158658.length;
var inst_158684 = (inst_158683 > (0));
var state_158698__$1 = state_158698;
if(cljs.core.truth_(inst_158684)){
var statearr_158708_158739 = state_158698__$1;
(statearr_158708_158739[(1)] = (12));

} else {
var statearr_158709_158740 = state_158698__$1;
(statearr_158709_158740[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (3))){
var inst_158696 = (state_158698[(2)]);
var state_158698__$1 = state_158698;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_158698__$1,inst_158696);
} else {
if((state_val_158699 === (12))){
var inst_158658 = (state_158698[(8)]);
var inst_158686 = cljs.core.vec.call(null,inst_158658);
var state_158698__$1 = state_158698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158698__$1,(15),out,inst_158686);
} else {
if((state_val_158699 === (2))){
var state_158698__$1 = state_158698;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_158698__$1,(4),ch);
} else {
if((state_val_158699 === (11))){
var inst_158666 = (state_158698[(10)]);
var inst_158662 = (state_158698[(9)]);
var inst_158676 = (state_158698[(2)]);
var inst_158677 = [];
var inst_158678 = inst_158677.push(inst_158662);
var inst_158658 = inst_158677;
var inst_158659 = inst_158666;
var state_158698__$1 = (function (){var statearr_158710 = state_158698;
(statearr_158710[(11)] = inst_158676);

(statearr_158710[(7)] = inst_158659);

(statearr_158710[(8)] = inst_158658);

(statearr_158710[(12)] = inst_158678);

return statearr_158710;
})();
var statearr_158711_158741 = state_158698__$1;
(statearr_158711_158741[(2)] = null);

(statearr_158711_158741[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (9))){
var inst_158658 = (state_158698[(8)]);
var inst_158674 = cljs.core.vec.call(null,inst_158658);
var state_158698__$1 = state_158698;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_158698__$1,(11),out,inst_158674);
} else {
if((state_val_158699 === (5))){
var inst_158666 = (state_158698[(10)]);
var inst_158659 = (state_158698[(7)]);
var inst_158662 = (state_158698[(9)]);
var inst_158666__$1 = f.call(null,inst_158662);
var inst_158667 = cljs.core._EQ_.call(null,inst_158666__$1,inst_158659);
var inst_158668 = cljs.core.keyword_identical_QMARK_.call(null,inst_158659,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_158669 = (inst_158667) || (inst_158668);
var state_158698__$1 = (function (){var statearr_158712 = state_158698;
(statearr_158712[(10)] = inst_158666__$1);

return statearr_158712;
})();
if(cljs.core.truth_(inst_158669)){
var statearr_158713_158742 = state_158698__$1;
(statearr_158713_158742[(1)] = (8));

} else {
var statearr_158714_158743 = state_158698__$1;
(statearr_158714_158743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (14))){
var inst_158691 = (state_158698[(2)]);
var inst_158692 = cljs.core.async.close_BANG_.call(null,out);
var state_158698__$1 = (function (){var statearr_158716 = state_158698;
(statearr_158716[(13)] = inst_158691);

return statearr_158716;
})();
var statearr_158717_158744 = state_158698__$1;
(statearr_158717_158744[(2)] = inst_158692);

(statearr_158717_158744[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (10))){
var inst_158681 = (state_158698[(2)]);
var state_158698__$1 = state_158698;
var statearr_158718_158745 = state_158698__$1;
(statearr_158718_158745[(2)] = inst_158681);

(statearr_158718_158745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_158699 === (8))){
var inst_158666 = (state_158698[(10)]);
var inst_158658 = (state_158698[(8)]);
var inst_158662 = (state_158698[(9)]);
var inst_158671 = inst_158658.push(inst_158662);
var tmp158715 = inst_158658;
var inst_158658__$1 = tmp158715;
var inst_158659 = inst_158666;
var state_158698__$1 = (function (){var statearr_158719 = state_158698;
(statearr_158719[(14)] = inst_158671);

(statearr_158719[(7)] = inst_158659);

(statearr_158719[(8)] = inst_158658__$1);

return statearr_158719;
})();
var statearr_158720_158746 = state_158698__$1;
(statearr_158720_158746[(2)] = null);

(statearr_158720_158746[(1)] = (2));


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
});})(c__19342__auto___158732,out))
;
return ((function (switch__19321__auto__,c__19342__auto___158732,out){
return (function() {
var cljs$core$async$state_machine__19322__auto__ = null;
var cljs$core$async$state_machine__19322__auto____0 = (function (){
var statearr_158724 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_158724[(0)] = cljs$core$async$state_machine__19322__auto__);

(statearr_158724[(1)] = (1));

return statearr_158724;
});
var cljs$core$async$state_machine__19322__auto____1 = (function (state_158698){
while(true){
var ret_value__19323__auto__ = (function (){try{while(true){
var result__19324__auto__ = switch__19321__auto__.call(null,state_158698);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19324__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19324__auto__;
}
break;
}
}catch (e158725){if((e158725 instanceof Object)){
var ex__19325__auto__ = e158725;
var statearr_158726_158747 = state_158698;
(statearr_158726_158747[(5)] = ex__19325__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_158698);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e158725;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19323__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__158748 = state_158698;
state_158698 = G__158748;
continue;
} else {
return ret_value__19323__auto__;
}
break;
}
});
cljs$core$async$state_machine__19322__auto__ = function(state_158698){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19322__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19322__auto____1.call(this,state_158698);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19322__auto____0;
cljs$core$async$state_machine__19322__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19322__auto____1;
return cljs$core$async$state_machine__19322__auto__;
})()
;})(switch__19321__auto__,c__19342__auto___158732,out))
})();
var state__19344__auto__ = (function (){var statearr_158727 = f__19343__auto__.call(null);
(statearr_158727[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19342__auto___158732);

return statearr_158727;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19344__auto__);
});})(c__19342__auto___158732,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map