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
if(typeof cljs.core.async.t_cljs$core$async26409 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26409 = (function (fn_handler,f,meta26410){
this.fn_handler = fn_handler;
this.f = f;
this.meta26410 = meta26410;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26411,meta26410__$1){
var self__ = this;
var _26411__$1 = this;
return (new cljs.core.async.t_cljs$core$async26409(self__.fn_handler,self__.f,meta26410__$1));
});

cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26411){
var self__ = this;
var _26411__$1 = this;
return self__.meta26410;
});

cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async26409.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async26409.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta26410","meta26410",-1772744982,null)], null);
});

cljs.core.async.t_cljs$core$async26409.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26409.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26409";

cljs.core.async.t_cljs$core$async26409.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async26409");
});

cljs.core.async.__GT_t_cljs$core$async26409 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async26409(fn_handler__$1,f__$1,meta26410){
return (new cljs.core.async.t_cljs$core$async26409(fn_handler__$1,f__$1,meta26410));
});

}

return (new cljs.core.async.t_cljs$core$async26409(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args26414 = [];
var len__17378__auto___26417 = arguments.length;
var i__17379__auto___26418 = (0);
while(true){
if((i__17379__auto___26418 < len__17378__auto___26417)){
args26414.push((arguments[i__17379__auto___26418]));

var G__26419 = (i__17379__auto___26418 + (1));
i__17379__auto___26418 = G__26419;
continue;
} else {
}
break;
}

var G__26416 = args26414.length;
switch (G__26416) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26414.length)].join('')));

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
var args26421 = [];
var len__17378__auto___26424 = arguments.length;
var i__17379__auto___26425 = (0);
while(true){
if((i__17379__auto___26425 < len__17378__auto___26424)){
args26421.push((arguments[i__17379__auto___26425]));

var G__26426 = (i__17379__auto___26425 + (1));
i__17379__auto___26425 = G__26426;
continue;
} else {
}
break;
}

var G__26423 = args26421.length;
switch (G__26423) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26421.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_26428 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_26428);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_26428,ret){
return (function (){
return fn1.call(null,val_26428);
});})(val_26428,ret))
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
var args26429 = [];
var len__17378__auto___26432 = arguments.length;
var i__17379__auto___26433 = (0);
while(true){
if((i__17379__auto___26433 < len__17378__auto___26432)){
args26429.push((arguments[i__17379__auto___26433]));

var G__26434 = (i__17379__auto___26433 + (1));
i__17379__auto___26433 = G__26434;
continue;
} else {
}
break;
}

var G__26431 = args26429.length;
switch (G__26431) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26429.length)].join('')));

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
var n__17223__auto___26436 = n;
var x_26437 = (0);
while(true){
if((x_26437 < n__17223__auto___26436)){
(a[x_26437] = (0));

var G__26438 = (x_26437 + (1));
x_26437 = G__26438;
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

var G__26439 = (i + (1));
i = G__26439;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async26443 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26443 = (function (alt_flag,flag,meta26444){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta26444 = meta26444;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_26445,meta26444__$1){
var self__ = this;
var _26445__$1 = this;
return (new cljs.core.async.t_cljs$core$async26443(self__.alt_flag,self__.flag,meta26444__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_26445){
var self__ = this;
var _26445__$1 = this;
return self__.meta26444;
});})(flag))
;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async26443.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async26443.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta26444","meta26444",-417838548,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async26443.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26443.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26443";

cljs.core.async.t_cljs$core$async26443.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async26443");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async26443 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async26443(alt_flag__$1,flag__$1,meta26444){
return (new cljs.core.async.t_cljs$core$async26443(alt_flag__$1,flag__$1,meta26444));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async26443(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async26449 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async26449 = (function (alt_handler,flag,cb,meta26450){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta26450 = meta26450;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async26449.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_26451,meta26450__$1){
var self__ = this;
var _26451__$1 = this;
return (new cljs.core.async.t_cljs$core$async26449(self__.alt_handler,self__.flag,self__.cb,meta26450__$1));
});

cljs.core.async.t_cljs$core$async26449.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_26451){
var self__ = this;
var _26451__$1 = this;
return self__.meta26450;
});

cljs.core.async.t_cljs$core$async26449.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async26449.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async26449.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async26449.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta26450","meta26450",1226332049,null)], null);
});

cljs.core.async.t_cljs$core$async26449.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async26449.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async26449";

cljs.core.async.t_cljs$core$async26449.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async26449");
});

cljs.core.async.__GT_t_cljs$core$async26449 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async26449(alt_handler__$1,flag__$1,cb__$1,meta26450){
return (new cljs.core.async.t_cljs$core$async26449(alt_handler__$1,flag__$1,cb__$1,meta26450));
});

}

return (new cljs.core.async.t_cljs$core$async26449(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__26452_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26452_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__26453_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__26453_SHARP_,port], null));
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
var G__26454 = (i + (1));
i = G__26454;
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
var len__17378__auto___26460 = arguments.length;
var i__17379__auto___26461 = (0);
while(true){
if((i__17379__auto___26461 < len__17378__auto___26460)){
args__17385__auto__.push((arguments[i__17379__auto___26461]));

var G__26462 = (i__17379__auto___26461 + (1));
i__17379__auto___26461 = G__26462;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((1) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17386__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__26457){
var map__26458 = p__26457;
var map__26458__$1 = ((((!((map__26458 == null)))?((((map__26458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__26458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__26458):map__26458);
var opts = map__26458__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq26455){
var G__26456 = cljs.core.first.call(null,seq26455);
var seq26455__$1 = cljs.core.next.call(null,seq26455);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__26456,seq26455__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args26463 = [];
var len__17378__auto___26513 = arguments.length;
var i__17379__auto___26514 = (0);
while(true){
if((i__17379__auto___26514 < len__17378__auto___26513)){
args26463.push((arguments[i__17379__auto___26514]));

var G__26515 = (i__17379__auto___26514 + (1));
i__17379__auto___26514 = G__26515;
continue;
} else {
}
break;
}

var G__26465 = args26463.length;
switch (G__26465) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26463.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19483__auto___26517 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___26517){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___26517){
return (function (state_26489){
var state_val_26490 = (state_26489[(1)]);
if((state_val_26490 === (7))){
var inst_26485 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26491_26518 = state_26489__$1;
(statearr_26491_26518[(2)] = inst_26485);

(statearr_26491_26518[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (1))){
var state_26489__$1 = state_26489;
var statearr_26492_26519 = state_26489__$1;
(statearr_26492_26519[(2)] = null);

(statearr_26492_26519[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (4))){
var inst_26468 = (state_26489[(7)]);
var inst_26468__$1 = (state_26489[(2)]);
var inst_26469 = (inst_26468__$1 == null);
var state_26489__$1 = (function (){var statearr_26493 = state_26489;
(statearr_26493[(7)] = inst_26468__$1);

return statearr_26493;
})();
if(cljs.core.truth_(inst_26469)){
var statearr_26494_26520 = state_26489__$1;
(statearr_26494_26520[(1)] = (5));

} else {
var statearr_26495_26521 = state_26489__$1;
(statearr_26495_26521[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (13))){
var state_26489__$1 = state_26489;
var statearr_26496_26522 = state_26489__$1;
(statearr_26496_26522[(2)] = null);

(statearr_26496_26522[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (6))){
var inst_26468 = (state_26489[(7)]);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26489__$1,(11),to,inst_26468);
} else {
if((state_val_26490 === (3))){
var inst_26487 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26489__$1,inst_26487);
} else {
if((state_val_26490 === (12))){
var state_26489__$1 = state_26489;
var statearr_26497_26523 = state_26489__$1;
(statearr_26497_26523[(2)] = null);

(statearr_26497_26523[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (2))){
var state_26489__$1 = state_26489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26489__$1,(4),from);
} else {
if((state_val_26490 === (11))){
var inst_26478 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
if(cljs.core.truth_(inst_26478)){
var statearr_26498_26524 = state_26489__$1;
(statearr_26498_26524[(1)] = (12));

} else {
var statearr_26499_26525 = state_26489__$1;
(statearr_26499_26525[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (9))){
var state_26489__$1 = state_26489;
var statearr_26500_26526 = state_26489__$1;
(statearr_26500_26526[(2)] = null);

(statearr_26500_26526[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (5))){
var state_26489__$1 = state_26489;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26501_26527 = state_26489__$1;
(statearr_26501_26527[(1)] = (8));

} else {
var statearr_26502_26528 = state_26489__$1;
(statearr_26502_26528[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (14))){
var inst_26483 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26503_26529 = state_26489__$1;
(statearr_26503_26529[(2)] = inst_26483);

(statearr_26503_26529[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (10))){
var inst_26475 = (state_26489[(2)]);
var state_26489__$1 = state_26489;
var statearr_26504_26530 = state_26489__$1;
(statearr_26504_26530[(2)] = inst_26475);

(statearr_26504_26530[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26490 === (8))){
var inst_26472 = cljs.core.async.close_BANG_.call(null,to);
var state_26489__$1 = state_26489;
var statearr_26505_26531 = state_26489__$1;
(statearr_26505_26531[(2)] = inst_26472);

(statearr_26505_26531[(1)] = (10));


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
});})(c__19483__auto___26517))
;
return ((function (switch__19418__auto__,c__19483__auto___26517){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_26509 = [null,null,null,null,null,null,null,null];
(statearr_26509[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_26509[(1)] = (1));

return statearr_26509;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_26489){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_26489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e26510){if((e26510 instanceof Object)){
var ex__19422__auto__ = e26510;
var statearr_26511_26532 = state_26489;
(statearr_26511_26532[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26533 = state_26489;
state_26489 = G__26533;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_26489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_26489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___26517))
})();
var state__19485__auto__ = (function (){var statearr_26512 = f__19484__auto__.call(null);
(statearr_26512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___26517);

return statearr_26512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___26517))
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
return (function (p__26717){
var vec__26718 = p__26717;
var v = cljs.core.nth.call(null,vec__26718,(0),null);
var p = cljs.core.nth.call(null,vec__26718,(1),null);
var job = vec__26718;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19483__auto___26900 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___26900,res,vec__26718,v,p,job,jobs,results){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___26900,res,vec__26718,v,p,job,jobs,results){
return (function (state_26723){
var state_val_26724 = (state_26723[(1)]);
if((state_val_26724 === (1))){
var state_26723__$1 = state_26723;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26723__$1,(2),res,v);
} else {
if((state_val_26724 === (2))){
var inst_26720 = (state_26723[(2)]);
var inst_26721 = cljs.core.async.close_BANG_.call(null,res);
var state_26723__$1 = (function (){var statearr_26725 = state_26723;
(statearr_26725[(7)] = inst_26720);

return statearr_26725;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26723__$1,inst_26721);
} else {
return null;
}
}
});})(c__19483__auto___26900,res,vec__26718,v,p,job,jobs,results))
;
return ((function (switch__19418__auto__,c__19483__auto___26900,res,vec__26718,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0 = (function (){
var statearr_26729 = [null,null,null,null,null,null,null,null];
(statearr_26729[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__);

(statearr_26729[(1)] = (1));

return statearr_26729;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1 = (function (state_26723){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_26723);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e26730){if((e26730 instanceof Object)){
var ex__19422__auto__ = e26730;
var statearr_26731_26901 = state_26723;
(statearr_26731_26901[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26723);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26730;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26902 = state_26723;
state_26723 = G__26902;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = function(state_26723){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1.call(this,state_26723);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___26900,res,vec__26718,v,p,job,jobs,results))
})();
var state__19485__auto__ = (function (){var statearr_26732 = f__19484__auto__.call(null);
(statearr_26732[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___26900);

return statearr_26732;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___26900,res,vec__26718,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__26733){
var vec__26734 = p__26733;
var v = cljs.core.nth.call(null,vec__26734,(0),null);
var p = cljs.core.nth.call(null,vec__26734,(1),null);
var job = vec__26734;
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
var n__17223__auto___26903 = n;
var __26904 = (0);
while(true){
if((__26904 < n__17223__auto___26903)){
var G__26735_26905 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__26735_26905) {
case "compute":
var c__19483__auto___26907 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26904,c__19483__auto___26907,G__26735_26905,n__17223__auto___26903,jobs,results,process,async){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (__26904,c__19483__auto___26907,G__26735_26905,n__17223__auto___26903,jobs,results,process,async){
return (function (state_26748){
var state_val_26749 = (state_26748[(1)]);
if((state_val_26749 === (1))){
var state_26748__$1 = state_26748;
var statearr_26750_26908 = state_26748__$1;
(statearr_26750_26908[(2)] = null);

(statearr_26750_26908[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (2))){
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26748__$1,(4),jobs);
} else {
if((state_val_26749 === (3))){
var inst_26746 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26748__$1,inst_26746);
} else {
if((state_val_26749 === (4))){
var inst_26738 = (state_26748[(2)]);
var inst_26739 = process.call(null,inst_26738);
var state_26748__$1 = state_26748;
if(cljs.core.truth_(inst_26739)){
var statearr_26751_26909 = state_26748__$1;
(statearr_26751_26909[(1)] = (5));

} else {
var statearr_26752_26910 = state_26748__$1;
(statearr_26752_26910[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (5))){
var state_26748__$1 = state_26748;
var statearr_26753_26911 = state_26748__$1;
(statearr_26753_26911[(2)] = null);

(statearr_26753_26911[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (6))){
var state_26748__$1 = state_26748;
var statearr_26754_26912 = state_26748__$1;
(statearr_26754_26912[(2)] = null);

(statearr_26754_26912[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26749 === (7))){
var inst_26744 = (state_26748[(2)]);
var state_26748__$1 = state_26748;
var statearr_26755_26913 = state_26748__$1;
(statearr_26755_26913[(2)] = inst_26744);

(statearr_26755_26913[(1)] = (3));


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
});})(__26904,c__19483__auto___26907,G__26735_26905,n__17223__auto___26903,jobs,results,process,async))
;
return ((function (__26904,switch__19418__auto__,c__19483__auto___26907,G__26735_26905,n__17223__auto___26903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0 = (function (){
var statearr_26759 = [null,null,null,null,null,null,null];
(statearr_26759[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__);

(statearr_26759[(1)] = (1));

return statearr_26759;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1 = (function (state_26748){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_26748);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e26760){if((e26760 instanceof Object)){
var ex__19422__auto__ = e26760;
var statearr_26761_26914 = state_26748;
(statearr_26761_26914[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26748);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26760;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26915 = state_26748;
state_26748 = G__26915;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = function(state_26748){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1.call(this,state_26748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__;
})()
;})(__26904,switch__19418__auto__,c__19483__auto___26907,G__26735_26905,n__17223__auto___26903,jobs,results,process,async))
})();
var state__19485__auto__ = (function (){var statearr_26762 = f__19484__auto__.call(null);
(statearr_26762[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___26907);

return statearr_26762;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(__26904,c__19483__auto___26907,G__26735_26905,n__17223__auto___26903,jobs,results,process,async))
);


break;
case "async":
var c__19483__auto___26916 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__26904,c__19483__auto___26916,G__26735_26905,n__17223__auto___26903,jobs,results,process,async){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (__26904,c__19483__auto___26916,G__26735_26905,n__17223__auto___26903,jobs,results,process,async){
return (function (state_26775){
var state_val_26776 = (state_26775[(1)]);
if((state_val_26776 === (1))){
var state_26775__$1 = state_26775;
var statearr_26777_26917 = state_26775__$1;
(statearr_26777_26917[(2)] = null);

(statearr_26777_26917[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (2))){
var state_26775__$1 = state_26775;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26775__$1,(4),jobs);
} else {
if((state_val_26776 === (3))){
var inst_26773 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26775__$1,inst_26773);
} else {
if((state_val_26776 === (4))){
var inst_26765 = (state_26775[(2)]);
var inst_26766 = async.call(null,inst_26765);
var state_26775__$1 = state_26775;
if(cljs.core.truth_(inst_26766)){
var statearr_26778_26918 = state_26775__$1;
(statearr_26778_26918[(1)] = (5));

} else {
var statearr_26779_26919 = state_26775__$1;
(statearr_26779_26919[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (5))){
var state_26775__$1 = state_26775;
var statearr_26780_26920 = state_26775__$1;
(statearr_26780_26920[(2)] = null);

(statearr_26780_26920[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (6))){
var state_26775__$1 = state_26775;
var statearr_26781_26921 = state_26775__$1;
(statearr_26781_26921[(2)] = null);

(statearr_26781_26921[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26776 === (7))){
var inst_26771 = (state_26775[(2)]);
var state_26775__$1 = state_26775;
var statearr_26782_26922 = state_26775__$1;
(statearr_26782_26922[(2)] = inst_26771);

(statearr_26782_26922[(1)] = (3));


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
});})(__26904,c__19483__auto___26916,G__26735_26905,n__17223__auto___26903,jobs,results,process,async))
;
return ((function (__26904,switch__19418__auto__,c__19483__auto___26916,G__26735_26905,n__17223__auto___26903,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0 = (function (){
var statearr_26786 = [null,null,null,null,null,null,null];
(statearr_26786[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__);

(statearr_26786[(1)] = (1));

return statearr_26786;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1 = (function (state_26775){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_26775);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e26787){if((e26787 instanceof Object)){
var ex__19422__auto__ = e26787;
var statearr_26788_26923 = state_26775;
(statearr_26788_26923[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26775);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26924 = state_26775;
state_26775 = G__26924;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = function(state_26775){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1.call(this,state_26775);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__;
})()
;})(__26904,switch__19418__auto__,c__19483__auto___26916,G__26735_26905,n__17223__auto___26903,jobs,results,process,async))
})();
var state__19485__auto__ = (function (){var statearr_26789 = f__19484__auto__.call(null);
(statearr_26789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___26916);

return statearr_26789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(__26904,c__19483__auto___26916,G__26735_26905,n__17223__auto___26903,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__26925 = (__26904 + (1));
__26904 = G__26925;
continue;
} else {
}
break;
}

var c__19483__auto___26926 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___26926,jobs,results,process,async){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___26926,jobs,results,process,async){
return (function (state_26811){
var state_val_26812 = (state_26811[(1)]);
if((state_val_26812 === (1))){
var state_26811__$1 = state_26811;
var statearr_26813_26927 = state_26811__$1;
(statearr_26813_26927[(2)] = null);

(statearr_26813_26927[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26812 === (2))){
var state_26811__$1 = state_26811;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26811__$1,(4),from);
} else {
if((state_val_26812 === (3))){
var inst_26809 = (state_26811[(2)]);
var state_26811__$1 = state_26811;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26811__$1,inst_26809);
} else {
if((state_val_26812 === (4))){
var inst_26792 = (state_26811[(7)]);
var inst_26792__$1 = (state_26811[(2)]);
var inst_26793 = (inst_26792__$1 == null);
var state_26811__$1 = (function (){var statearr_26814 = state_26811;
(statearr_26814[(7)] = inst_26792__$1);

return statearr_26814;
})();
if(cljs.core.truth_(inst_26793)){
var statearr_26815_26928 = state_26811__$1;
(statearr_26815_26928[(1)] = (5));

} else {
var statearr_26816_26929 = state_26811__$1;
(statearr_26816_26929[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26812 === (5))){
var inst_26795 = cljs.core.async.close_BANG_.call(null,jobs);
var state_26811__$1 = state_26811;
var statearr_26817_26930 = state_26811__$1;
(statearr_26817_26930[(2)] = inst_26795);

(statearr_26817_26930[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26812 === (6))){
var inst_26797 = (state_26811[(8)]);
var inst_26792 = (state_26811[(7)]);
var inst_26797__$1 = cljs.core.async.chan.call(null,(1));
var inst_26798 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_26799 = [inst_26792,inst_26797__$1];
var inst_26800 = (new cljs.core.PersistentVector(null,2,(5),inst_26798,inst_26799,null));
var state_26811__$1 = (function (){var statearr_26818 = state_26811;
(statearr_26818[(8)] = inst_26797__$1);

return statearr_26818;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26811__$1,(8),jobs,inst_26800);
} else {
if((state_val_26812 === (7))){
var inst_26807 = (state_26811[(2)]);
var state_26811__$1 = state_26811;
var statearr_26819_26931 = state_26811__$1;
(statearr_26819_26931[(2)] = inst_26807);

(statearr_26819_26931[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26812 === (8))){
var inst_26797 = (state_26811[(8)]);
var inst_26802 = (state_26811[(2)]);
var state_26811__$1 = (function (){var statearr_26820 = state_26811;
(statearr_26820[(9)] = inst_26802);

return statearr_26820;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26811__$1,(9),results,inst_26797);
} else {
if((state_val_26812 === (9))){
var inst_26804 = (state_26811[(2)]);
var state_26811__$1 = (function (){var statearr_26821 = state_26811;
(statearr_26821[(10)] = inst_26804);

return statearr_26821;
})();
var statearr_26822_26932 = state_26811__$1;
(statearr_26822_26932[(2)] = null);

(statearr_26822_26932[(1)] = (2));


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
});})(c__19483__auto___26926,jobs,results,process,async))
;
return ((function (switch__19418__auto__,c__19483__auto___26926,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0 = (function (){
var statearr_26826 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_26826[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__);

(statearr_26826[(1)] = (1));

return statearr_26826;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1 = (function (state_26811){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_26811);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e26827){if((e26827 instanceof Object)){
var ex__19422__auto__ = e26827;
var statearr_26828_26933 = state_26811;
(statearr_26828_26933[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26811);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26827;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26934 = state_26811;
state_26811 = G__26934;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = function(state_26811){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1.call(this,state_26811);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___26926,jobs,results,process,async))
})();
var state__19485__auto__ = (function (){var statearr_26829 = f__19484__auto__.call(null);
(statearr_26829[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___26926);

return statearr_26829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___26926,jobs,results,process,async))
);


var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__,jobs,results,process,async){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__,jobs,results,process,async){
return (function (state_26867){
var state_val_26868 = (state_26867[(1)]);
if((state_val_26868 === (7))){
var inst_26863 = (state_26867[(2)]);
var state_26867__$1 = state_26867;
var statearr_26869_26935 = state_26867__$1;
(statearr_26869_26935[(2)] = inst_26863);

(statearr_26869_26935[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (20))){
var state_26867__$1 = state_26867;
var statearr_26870_26936 = state_26867__$1;
(statearr_26870_26936[(2)] = null);

(statearr_26870_26936[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (1))){
var state_26867__$1 = state_26867;
var statearr_26871_26937 = state_26867__$1;
(statearr_26871_26937[(2)] = null);

(statearr_26871_26937[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (4))){
var inst_26832 = (state_26867[(7)]);
var inst_26832__$1 = (state_26867[(2)]);
var inst_26833 = (inst_26832__$1 == null);
var state_26867__$1 = (function (){var statearr_26872 = state_26867;
(statearr_26872[(7)] = inst_26832__$1);

return statearr_26872;
})();
if(cljs.core.truth_(inst_26833)){
var statearr_26873_26938 = state_26867__$1;
(statearr_26873_26938[(1)] = (5));

} else {
var statearr_26874_26939 = state_26867__$1;
(statearr_26874_26939[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (15))){
var inst_26845 = (state_26867[(8)]);
var state_26867__$1 = state_26867;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26867__$1,(18),to,inst_26845);
} else {
if((state_val_26868 === (21))){
var inst_26858 = (state_26867[(2)]);
var state_26867__$1 = state_26867;
var statearr_26875_26940 = state_26867__$1;
(statearr_26875_26940[(2)] = inst_26858);

(statearr_26875_26940[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (13))){
var inst_26860 = (state_26867[(2)]);
var state_26867__$1 = (function (){var statearr_26876 = state_26867;
(statearr_26876[(9)] = inst_26860);

return statearr_26876;
})();
var statearr_26877_26941 = state_26867__$1;
(statearr_26877_26941[(2)] = null);

(statearr_26877_26941[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (6))){
var inst_26832 = (state_26867[(7)]);
var state_26867__$1 = state_26867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26867__$1,(11),inst_26832);
} else {
if((state_val_26868 === (17))){
var inst_26853 = (state_26867[(2)]);
var state_26867__$1 = state_26867;
if(cljs.core.truth_(inst_26853)){
var statearr_26878_26942 = state_26867__$1;
(statearr_26878_26942[(1)] = (19));

} else {
var statearr_26879_26943 = state_26867__$1;
(statearr_26879_26943[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (3))){
var inst_26865 = (state_26867[(2)]);
var state_26867__$1 = state_26867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26867__$1,inst_26865);
} else {
if((state_val_26868 === (12))){
var inst_26842 = (state_26867[(10)]);
var state_26867__$1 = state_26867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26867__$1,(14),inst_26842);
} else {
if((state_val_26868 === (2))){
var state_26867__$1 = state_26867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26867__$1,(4),results);
} else {
if((state_val_26868 === (19))){
var state_26867__$1 = state_26867;
var statearr_26880_26944 = state_26867__$1;
(statearr_26880_26944[(2)] = null);

(statearr_26880_26944[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (11))){
var inst_26842 = (state_26867[(2)]);
var state_26867__$1 = (function (){var statearr_26881 = state_26867;
(statearr_26881[(10)] = inst_26842);

return statearr_26881;
})();
var statearr_26882_26945 = state_26867__$1;
(statearr_26882_26945[(2)] = null);

(statearr_26882_26945[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (9))){
var state_26867__$1 = state_26867;
var statearr_26883_26946 = state_26867__$1;
(statearr_26883_26946[(2)] = null);

(statearr_26883_26946[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (5))){
var state_26867__$1 = state_26867;
if(cljs.core.truth_(close_QMARK_)){
var statearr_26884_26947 = state_26867__$1;
(statearr_26884_26947[(1)] = (8));

} else {
var statearr_26885_26948 = state_26867__$1;
(statearr_26885_26948[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (14))){
var inst_26847 = (state_26867[(11)]);
var inst_26845 = (state_26867[(8)]);
var inst_26845__$1 = (state_26867[(2)]);
var inst_26846 = (inst_26845__$1 == null);
var inst_26847__$1 = cljs.core.not.call(null,inst_26846);
var state_26867__$1 = (function (){var statearr_26886 = state_26867;
(statearr_26886[(11)] = inst_26847__$1);

(statearr_26886[(8)] = inst_26845__$1);

return statearr_26886;
})();
if(inst_26847__$1){
var statearr_26887_26949 = state_26867__$1;
(statearr_26887_26949[(1)] = (15));

} else {
var statearr_26888_26950 = state_26867__$1;
(statearr_26888_26950[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (16))){
var inst_26847 = (state_26867[(11)]);
var state_26867__$1 = state_26867;
var statearr_26889_26951 = state_26867__$1;
(statearr_26889_26951[(2)] = inst_26847);

(statearr_26889_26951[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (10))){
var inst_26839 = (state_26867[(2)]);
var state_26867__$1 = state_26867;
var statearr_26890_26952 = state_26867__$1;
(statearr_26890_26952[(2)] = inst_26839);

(statearr_26890_26952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (18))){
var inst_26850 = (state_26867[(2)]);
var state_26867__$1 = state_26867;
var statearr_26891_26953 = state_26867__$1;
(statearr_26891_26953[(2)] = inst_26850);

(statearr_26891_26953[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_26868 === (8))){
var inst_26836 = cljs.core.async.close_BANG_.call(null,to);
var state_26867__$1 = state_26867;
var statearr_26892_26954 = state_26867__$1;
(statearr_26892_26954[(2)] = inst_26836);

(statearr_26892_26954[(1)] = (10));


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
});})(c__19483__auto__,jobs,results,process,async))
;
return ((function (switch__19418__auto__,c__19483__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0 = (function (){
var statearr_26896 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_26896[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__);

(statearr_26896[(1)] = (1));

return statearr_26896;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1 = (function (state_26867){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_26867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e26897){if((e26897 instanceof Object)){
var ex__19422__auto__ = e26897;
var statearr_26898_26955 = state_26867;
(statearr_26898_26955[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e26897;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__26956 = state_26867;
state_26867 = G__26956;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__ = function(state_26867){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1.call(this,state_26867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19419__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__,jobs,results,process,async))
})();
var state__19485__auto__ = (function (){var statearr_26899 = f__19484__auto__.call(null);
(statearr_26899[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_26899;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__,jobs,results,process,async))
);

return c__19483__auto__;
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
var args26957 = [];
var len__17378__auto___26960 = arguments.length;
var i__17379__auto___26961 = (0);
while(true){
if((i__17379__auto___26961 < len__17378__auto___26960)){
args26957.push((arguments[i__17379__auto___26961]));

var G__26962 = (i__17379__auto___26961 + (1));
i__17379__auto___26961 = G__26962;
continue;
} else {
}
break;
}

var G__26959 = args26957.length;
switch (G__26959) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26957.length)].join('')));

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
var args26964 = [];
var len__17378__auto___26967 = arguments.length;
var i__17379__auto___26968 = (0);
while(true){
if((i__17379__auto___26968 < len__17378__auto___26967)){
args26964.push((arguments[i__17379__auto___26968]));

var G__26969 = (i__17379__auto___26968 + (1));
i__17379__auto___26968 = G__26969;
continue;
} else {
}
break;
}

var G__26966 = args26964.length;
switch (G__26966) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26964.length)].join('')));

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
var args26971 = [];
var len__17378__auto___27024 = arguments.length;
var i__17379__auto___27025 = (0);
while(true){
if((i__17379__auto___27025 < len__17378__auto___27024)){
args26971.push((arguments[i__17379__auto___27025]));

var G__27026 = (i__17379__auto___27025 + (1));
i__17379__auto___27025 = G__27026;
continue;
} else {
}
break;
}

var G__26973 = args26971.length;
switch (G__26973) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args26971.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19483__auto___27028 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___27028,tc,fc){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___27028,tc,fc){
return (function (state_26999){
var state_val_27000 = (state_26999[(1)]);
if((state_val_27000 === (7))){
var inst_26995 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
var statearr_27001_27029 = state_26999__$1;
(statearr_27001_27029[(2)] = inst_26995);

(statearr_27001_27029[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (1))){
var state_26999__$1 = state_26999;
var statearr_27002_27030 = state_26999__$1;
(statearr_27002_27030[(2)] = null);

(statearr_27002_27030[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (4))){
var inst_26976 = (state_26999[(7)]);
var inst_26976__$1 = (state_26999[(2)]);
var inst_26977 = (inst_26976__$1 == null);
var state_26999__$1 = (function (){var statearr_27003 = state_26999;
(statearr_27003[(7)] = inst_26976__$1);

return statearr_27003;
})();
if(cljs.core.truth_(inst_26977)){
var statearr_27004_27031 = state_26999__$1;
(statearr_27004_27031[(1)] = (5));

} else {
var statearr_27005_27032 = state_26999__$1;
(statearr_27005_27032[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (13))){
var state_26999__$1 = state_26999;
var statearr_27006_27033 = state_26999__$1;
(statearr_27006_27033[(2)] = null);

(statearr_27006_27033[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (6))){
var inst_26976 = (state_26999[(7)]);
var inst_26982 = p.call(null,inst_26976);
var state_26999__$1 = state_26999;
if(cljs.core.truth_(inst_26982)){
var statearr_27007_27034 = state_26999__$1;
(statearr_27007_27034[(1)] = (9));

} else {
var statearr_27008_27035 = state_26999__$1;
(statearr_27008_27035[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (3))){
var inst_26997 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_26999__$1,inst_26997);
} else {
if((state_val_27000 === (12))){
var state_26999__$1 = state_26999;
var statearr_27009_27036 = state_26999__$1;
(statearr_27009_27036[(2)] = null);

(statearr_27009_27036[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (2))){
var state_26999__$1 = state_26999;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_26999__$1,(4),ch);
} else {
if((state_val_27000 === (11))){
var inst_26976 = (state_26999[(7)]);
var inst_26986 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_26999__$1,(8),inst_26986,inst_26976);
} else {
if((state_val_27000 === (9))){
var state_26999__$1 = state_26999;
var statearr_27010_27037 = state_26999__$1;
(statearr_27010_27037[(2)] = tc);

(statearr_27010_27037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (5))){
var inst_26979 = cljs.core.async.close_BANG_.call(null,tc);
var inst_26980 = cljs.core.async.close_BANG_.call(null,fc);
var state_26999__$1 = (function (){var statearr_27011 = state_26999;
(statearr_27011[(8)] = inst_26979);

return statearr_27011;
})();
var statearr_27012_27038 = state_26999__$1;
(statearr_27012_27038[(2)] = inst_26980);

(statearr_27012_27038[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (14))){
var inst_26993 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
var statearr_27013_27039 = state_26999__$1;
(statearr_27013_27039[(2)] = inst_26993);

(statearr_27013_27039[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (10))){
var state_26999__$1 = state_26999;
var statearr_27014_27040 = state_26999__$1;
(statearr_27014_27040[(2)] = fc);

(statearr_27014_27040[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27000 === (8))){
var inst_26988 = (state_26999[(2)]);
var state_26999__$1 = state_26999;
if(cljs.core.truth_(inst_26988)){
var statearr_27015_27041 = state_26999__$1;
(statearr_27015_27041[(1)] = (12));

} else {
var statearr_27016_27042 = state_26999__$1;
(statearr_27016_27042[(1)] = (13));

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
});})(c__19483__auto___27028,tc,fc))
;
return ((function (switch__19418__auto__,c__19483__auto___27028,tc,fc){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_27020 = [null,null,null,null,null,null,null,null,null];
(statearr_27020[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_27020[(1)] = (1));

return statearr_27020;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_26999){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_26999);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e27021){if((e27021 instanceof Object)){
var ex__19422__auto__ = e27021;
var statearr_27022_27043 = state_26999;
(statearr_27022_27043[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_26999);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27021;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27044 = state_26999;
state_26999 = G__27044;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_26999){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_26999);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___27028,tc,fc))
})();
var state__19485__auto__ = (function (){var statearr_27023 = f__19484__auto__.call(null);
(statearr_27023[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___27028);

return statearr_27023;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___27028,tc,fc))
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
var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__){
return (function (state_27091){
var state_val_27092 = (state_27091[(1)]);
if((state_val_27092 === (1))){
var inst_27077 = init;
var state_27091__$1 = (function (){var statearr_27093 = state_27091;
(statearr_27093[(7)] = inst_27077);

return statearr_27093;
})();
var statearr_27094_27109 = state_27091__$1;
(statearr_27094_27109[(2)] = null);

(statearr_27094_27109[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (2))){
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27091__$1,(4),ch);
} else {
if((state_val_27092 === (3))){
var inst_27089 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27091__$1,inst_27089);
} else {
if((state_val_27092 === (4))){
var inst_27080 = (state_27091[(8)]);
var inst_27080__$1 = (state_27091[(2)]);
var inst_27081 = (inst_27080__$1 == null);
var state_27091__$1 = (function (){var statearr_27095 = state_27091;
(statearr_27095[(8)] = inst_27080__$1);

return statearr_27095;
})();
if(cljs.core.truth_(inst_27081)){
var statearr_27096_27110 = state_27091__$1;
(statearr_27096_27110[(1)] = (5));

} else {
var statearr_27097_27111 = state_27091__$1;
(statearr_27097_27111[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (5))){
var inst_27077 = (state_27091[(7)]);
var state_27091__$1 = state_27091;
var statearr_27098_27112 = state_27091__$1;
(statearr_27098_27112[(2)] = inst_27077);

(statearr_27098_27112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (6))){
var inst_27080 = (state_27091[(8)]);
var inst_27077 = (state_27091[(7)]);
var inst_27084 = f.call(null,inst_27077,inst_27080);
var inst_27077__$1 = inst_27084;
var state_27091__$1 = (function (){var statearr_27099 = state_27091;
(statearr_27099[(7)] = inst_27077__$1);

return statearr_27099;
})();
var statearr_27100_27113 = state_27091__$1;
(statearr_27100_27113[(2)] = null);

(statearr_27100_27113[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27092 === (7))){
var inst_27087 = (state_27091[(2)]);
var state_27091__$1 = state_27091;
var statearr_27101_27114 = state_27091__$1;
(statearr_27101_27114[(2)] = inst_27087);

(statearr_27101_27114[(1)] = (3));


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
});})(c__19483__auto__))
;
return ((function (switch__19418__auto__,c__19483__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19419__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19419__auto____0 = (function (){
var statearr_27105 = [null,null,null,null,null,null,null,null,null];
(statearr_27105[(0)] = cljs$core$async$reduce_$_state_machine__19419__auto__);

(statearr_27105[(1)] = (1));

return statearr_27105;
});
var cljs$core$async$reduce_$_state_machine__19419__auto____1 = (function (state_27091){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_27091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e27106){if((e27106 instanceof Object)){
var ex__19422__auto__ = e27106;
var statearr_27107_27115 = state_27091;
(statearr_27107_27115[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27106;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27116 = state_27091;
state_27091 = G__27116;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19419__auto__ = function(state_27091){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19419__auto____1.call(this,state_27091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19419__auto____0;
cljs$core$async$reduce_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19419__auto____1;
return cljs$core$async$reduce_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__))
})();
var state__19485__auto__ = (function (){var statearr_27108 = f__19484__auto__.call(null);
(statearr_27108[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_27108;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__))
);

return c__19483__auto__;
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
var args27117 = [];
var len__17378__auto___27169 = arguments.length;
var i__17379__auto___27170 = (0);
while(true){
if((i__17379__auto___27170 < len__17378__auto___27169)){
args27117.push((arguments[i__17379__auto___27170]));

var G__27171 = (i__17379__auto___27170 + (1));
i__17379__auto___27170 = G__27171;
continue;
} else {
}
break;
}

var G__27119 = args27117.length;
switch (G__27119) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27117.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__){
return (function (state_27144){
var state_val_27145 = (state_27144[(1)]);
if((state_val_27145 === (7))){
var inst_27126 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
var statearr_27146_27173 = state_27144__$1;
(statearr_27146_27173[(2)] = inst_27126);

(statearr_27146_27173[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (1))){
var inst_27120 = cljs.core.seq.call(null,coll);
var inst_27121 = inst_27120;
var state_27144__$1 = (function (){var statearr_27147 = state_27144;
(statearr_27147[(7)] = inst_27121);

return statearr_27147;
})();
var statearr_27148_27174 = state_27144__$1;
(statearr_27148_27174[(2)] = null);

(statearr_27148_27174[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (4))){
var inst_27121 = (state_27144[(7)]);
var inst_27124 = cljs.core.first.call(null,inst_27121);
var state_27144__$1 = state_27144;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27144__$1,(7),ch,inst_27124);
} else {
if((state_val_27145 === (13))){
var inst_27138 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
var statearr_27149_27175 = state_27144__$1;
(statearr_27149_27175[(2)] = inst_27138);

(statearr_27149_27175[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (6))){
var inst_27129 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
if(cljs.core.truth_(inst_27129)){
var statearr_27150_27176 = state_27144__$1;
(statearr_27150_27176[(1)] = (8));

} else {
var statearr_27151_27177 = state_27144__$1;
(statearr_27151_27177[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (3))){
var inst_27142 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27144__$1,inst_27142);
} else {
if((state_val_27145 === (12))){
var state_27144__$1 = state_27144;
var statearr_27152_27178 = state_27144__$1;
(statearr_27152_27178[(2)] = null);

(statearr_27152_27178[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (2))){
var inst_27121 = (state_27144[(7)]);
var state_27144__$1 = state_27144;
if(cljs.core.truth_(inst_27121)){
var statearr_27153_27179 = state_27144__$1;
(statearr_27153_27179[(1)] = (4));

} else {
var statearr_27154_27180 = state_27144__$1;
(statearr_27154_27180[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (11))){
var inst_27135 = cljs.core.async.close_BANG_.call(null,ch);
var state_27144__$1 = state_27144;
var statearr_27155_27181 = state_27144__$1;
(statearr_27155_27181[(2)] = inst_27135);

(statearr_27155_27181[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (9))){
var state_27144__$1 = state_27144;
if(cljs.core.truth_(close_QMARK_)){
var statearr_27156_27182 = state_27144__$1;
(statearr_27156_27182[(1)] = (11));

} else {
var statearr_27157_27183 = state_27144__$1;
(statearr_27157_27183[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (5))){
var inst_27121 = (state_27144[(7)]);
var state_27144__$1 = state_27144;
var statearr_27158_27184 = state_27144__$1;
(statearr_27158_27184[(2)] = inst_27121);

(statearr_27158_27184[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (10))){
var inst_27140 = (state_27144[(2)]);
var state_27144__$1 = state_27144;
var statearr_27159_27185 = state_27144__$1;
(statearr_27159_27185[(2)] = inst_27140);

(statearr_27159_27185[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27145 === (8))){
var inst_27121 = (state_27144[(7)]);
var inst_27131 = cljs.core.next.call(null,inst_27121);
var inst_27121__$1 = inst_27131;
var state_27144__$1 = (function (){var statearr_27160 = state_27144;
(statearr_27160[(7)] = inst_27121__$1);

return statearr_27160;
})();
var statearr_27161_27186 = state_27144__$1;
(statearr_27161_27186[(2)] = null);

(statearr_27161_27186[(1)] = (2));


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
});})(c__19483__auto__))
;
return ((function (switch__19418__auto__,c__19483__auto__){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_27165 = [null,null,null,null,null,null,null,null];
(statearr_27165[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_27165[(1)] = (1));

return statearr_27165;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_27144){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_27144);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e27166){if((e27166 instanceof Object)){
var ex__19422__auto__ = e27166;
var statearr_27167_27187 = state_27144;
(statearr_27167_27187[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27144);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27166;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27188 = state_27144;
state_27144 = G__27188;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_27144){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_27144);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__))
})();
var state__19485__auto__ = (function (){var statearr_27168 = f__19484__auto__.call(null);
(statearr_27168[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_27168;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__))
);

return c__19483__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async27410 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27410 = (function (mult,ch,cs,meta27411){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta27411 = meta27411;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_27412,meta27411__$1){
var self__ = this;
var _27412__$1 = this;
return (new cljs.core.async.t_cljs$core$async27410(self__.mult,self__.ch,self__.cs,meta27411__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_27412){
var self__ = this;
var _27412__$1 = this;
return self__.meta27411;
});})(cs))
;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27410.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async27410.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta27411","meta27411",-1887372254,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async27410.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27410.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27410";

cljs.core.async.t_cljs$core$async27410.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async27410");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async27410 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async27410(mult__$1,ch__$1,cs__$1,meta27411){
return (new cljs.core.async.t_cljs$core$async27410(mult__$1,ch__$1,cs__$1,meta27411));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async27410(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19483__auto___27631 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___27631,cs,m,dchan,dctr,done){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___27631,cs,m,dchan,dctr,done){
return (function (state_27543){
var state_val_27544 = (state_27543[(1)]);
if((state_val_27544 === (7))){
var inst_27539 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27545_27632 = state_27543__$1;
(statearr_27545_27632[(2)] = inst_27539);

(statearr_27545_27632[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (20))){
var inst_27444 = (state_27543[(7)]);
var inst_27454 = cljs.core.first.call(null,inst_27444);
var inst_27455 = cljs.core.nth.call(null,inst_27454,(0),null);
var inst_27456 = cljs.core.nth.call(null,inst_27454,(1),null);
var state_27543__$1 = (function (){var statearr_27546 = state_27543;
(statearr_27546[(8)] = inst_27455);

return statearr_27546;
})();
if(cljs.core.truth_(inst_27456)){
var statearr_27547_27633 = state_27543__$1;
(statearr_27547_27633[(1)] = (22));

} else {
var statearr_27548_27634 = state_27543__$1;
(statearr_27548_27634[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (27))){
var inst_27415 = (state_27543[(9)]);
var inst_27491 = (state_27543[(10)]);
var inst_27484 = (state_27543[(11)]);
var inst_27486 = (state_27543[(12)]);
var inst_27491__$1 = cljs.core._nth.call(null,inst_27484,inst_27486);
var inst_27492 = cljs.core.async.put_BANG_.call(null,inst_27491__$1,inst_27415,done);
var state_27543__$1 = (function (){var statearr_27549 = state_27543;
(statearr_27549[(10)] = inst_27491__$1);

return statearr_27549;
})();
if(cljs.core.truth_(inst_27492)){
var statearr_27550_27635 = state_27543__$1;
(statearr_27550_27635[(1)] = (30));

} else {
var statearr_27551_27636 = state_27543__$1;
(statearr_27551_27636[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (1))){
var state_27543__$1 = state_27543;
var statearr_27552_27637 = state_27543__$1;
(statearr_27552_27637[(2)] = null);

(statearr_27552_27637[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (24))){
var inst_27444 = (state_27543[(7)]);
var inst_27461 = (state_27543[(2)]);
var inst_27462 = cljs.core.next.call(null,inst_27444);
var inst_27424 = inst_27462;
var inst_27425 = null;
var inst_27426 = (0);
var inst_27427 = (0);
var state_27543__$1 = (function (){var statearr_27553 = state_27543;
(statearr_27553[(13)] = inst_27427);

(statearr_27553[(14)] = inst_27426);

(statearr_27553[(15)] = inst_27425);

(statearr_27553[(16)] = inst_27461);

(statearr_27553[(17)] = inst_27424);

return statearr_27553;
})();
var statearr_27554_27638 = state_27543__$1;
(statearr_27554_27638[(2)] = null);

(statearr_27554_27638[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (39))){
var state_27543__$1 = state_27543;
var statearr_27558_27639 = state_27543__$1;
(statearr_27558_27639[(2)] = null);

(statearr_27558_27639[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (4))){
var inst_27415 = (state_27543[(9)]);
var inst_27415__$1 = (state_27543[(2)]);
var inst_27416 = (inst_27415__$1 == null);
var state_27543__$1 = (function (){var statearr_27559 = state_27543;
(statearr_27559[(9)] = inst_27415__$1);

return statearr_27559;
})();
if(cljs.core.truth_(inst_27416)){
var statearr_27560_27640 = state_27543__$1;
(statearr_27560_27640[(1)] = (5));

} else {
var statearr_27561_27641 = state_27543__$1;
(statearr_27561_27641[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (15))){
var inst_27427 = (state_27543[(13)]);
var inst_27426 = (state_27543[(14)]);
var inst_27425 = (state_27543[(15)]);
var inst_27424 = (state_27543[(17)]);
var inst_27440 = (state_27543[(2)]);
var inst_27441 = (inst_27427 + (1));
var tmp27555 = inst_27426;
var tmp27556 = inst_27425;
var tmp27557 = inst_27424;
var inst_27424__$1 = tmp27557;
var inst_27425__$1 = tmp27556;
var inst_27426__$1 = tmp27555;
var inst_27427__$1 = inst_27441;
var state_27543__$1 = (function (){var statearr_27562 = state_27543;
(statearr_27562[(13)] = inst_27427__$1);

(statearr_27562[(18)] = inst_27440);

(statearr_27562[(14)] = inst_27426__$1);

(statearr_27562[(15)] = inst_27425__$1);

(statearr_27562[(17)] = inst_27424__$1);

return statearr_27562;
})();
var statearr_27563_27642 = state_27543__$1;
(statearr_27563_27642[(2)] = null);

(statearr_27563_27642[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (21))){
var inst_27465 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27567_27643 = state_27543__$1;
(statearr_27567_27643[(2)] = inst_27465);

(statearr_27567_27643[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (31))){
var inst_27491 = (state_27543[(10)]);
var inst_27495 = done.call(null,null);
var inst_27496 = cljs.core.async.untap_STAR_.call(null,m,inst_27491);
var state_27543__$1 = (function (){var statearr_27568 = state_27543;
(statearr_27568[(19)] = inst_27495);

return statearr_27568;
})();
var statearr_27569_27644 = state_27543__$1;
(statearr_27569_27644[(2)] = inst_27496);

(statearr_27569_27644[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (32))){
var inst_27485 = (state_27543[(20)]);
var inst_27484 = (state_27543[(11)]);
var inst_27483 = (state_27543[(21)]);
var inst_27486 = (state_27543[(12)]);
var inst_27498 = (state_27543[(2)]);
var inst_27499 = (inst_27486 + (1));
var tmp27564 = inst_27485;
var tmp27565 = inst_27484;
var tmp27566 = inst_27483;
var inst_27483__$1 = tmp27566;
var inst_27484__$1 = tmp27565;
var inst_27485__$1 = tmp27564;
var inst_27486__$1 = inst_27499;
var state_27543__$1 = (function (){var statearr_27570 = state_27543;
(statearr_27570[(20)] = inst_27485__$1);

(statearr_27570[(22)] = inst_27498);

(statearr_27570[(11)] = inst_27484__$1);

(statearr_27570[(21)] = inst_27483__$1);

(statearr_27570[(12)] = inst_27486__$1);

return statearr_27570;
})();
var statearr_27571_27645 = state_27543__$1;
(statearr_27571_27645[(2)] = null);

(statearr_27571_27645[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (40))){
var inst_27511 = (state_27543[(23)]);
var inst_27515 = done.call(null,null);
var inst_27516 = cljs.core.async.untap_STAR_.call(null,m,inst_27511);
var state_27543__$1 = (function (){var statearr_27572 = state_27543;
(statearr_27572[(24)] = inst_27515);

return statearr_27572;
})();
var statearr_27573_27646 = state_27543__$1;
(statearr_27573_27646[(2)] = inst_27516);

(statearr_27573_27646[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (33))){
var inst_27502 = (state_27543[(25)]);
var inst_27504 = cljs.core.chunked_seq_QMARK_.call(null,inst_27502);
var state_27543__$1 = state_27543;
if(inst_27504){
var statearr_27574_27647 = state_27543__$1;
(statearr_27574_27647[(1)] = (36));

} else {
var statearr_27575_27648 = state_27543__$1;
(statearr_27575_27648[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (13))){
var inst_27434 = (state_27543[(26)]);
var inst_27437 = cljs.core.async.close_BANG_.call(null,inst_27434);
var state_27543__$1 = state_27543;
var statearr_27576_27649 = state_27543__$1;
(statearr_27576_27649[(2)] = inst_27437);

(statearr_27576_27649[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (22))){
var inst_27455 = (state_27543[(8)]);
var inst_27458 = cljs.core.async.close_BANG_.call(null,inst_27455);
var state_27543__$1 = state_27543;
var statearr_27577_27650 = state_27543__$1;
(statearr_27577_27650[(2)] = inst_27458);

(statearr_27577_27650[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (36))){
var inst_27502 = (state_27543[(25)]);
var inst_27506 = cljs.core.chunk_first.call(null,inst_27502);
var inst_27507 = cljs.core.chunk_rest.call(null,inst_27502);
var inst_27508 = cljs.core.count.call(null,inst_27506);
var inst_27483 = inst_27507;
var inst_27484 = inst_27506;
var inst_27485 = inst_27508;
var inst_27486 = (0);
var state_27543__$1 = (function (){var statearr_27578 = state_27543;
(statearr_27578[(20)] = inst_27485);

(statearr_27578[(11)] = inst_27484);

(statearr_27578[(21)] = inst_27483);

(statearr_27578[(12)] = inst_27486);

return statearr_27578;
})();
var statearr_27579_27651 = state_27543__$1;
(statearr_27579_27651[(2)] = null);

(statearr_27579_27651[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (41))){
var inst_27502 = (state_27543[(25)]);
var inst_27518 = (state_27543[(2)]);
var inst_27519 = cljs.core.next.call(null,inst_27502);
var inst_27483 = inst_27519;
var inst_27484 = null;
var inst_27485 = (0);
var inst_27486 = (0);
var state_27543__$1 = (function (){var statearr_27580 = state_27543;
(statearr_27580[(20)] = inst_27485);

(statearr_27580[(27)] = inst_27518);

(statearr_27580[(11)] = inst_27484);

(statearr_27580[(21)] = inst_27483);

(statearr_27580[(12)] = inst_27486);

return statearr_27580;
})();
var statearr_27581_27652 = state_27543__$1;
(statearr_27581_27652[(2)] = null);

(statearr_27581_27652[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (43))){
var state_27543__$1 = state_27543;
var statearr_27582_27653 = state_27543__$1;
(statearr_27582_27653[(2)] = null);

(statearr_27582_27653[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (29))){
var inst_27527 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27583_27654 = state_27543__$1;
(statearr_27583_27654[(2)] = inst_27527);

(statearr_27583_27654[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (44))){
var inst_27536 = (state_27543[(2)]);
var state_27543__$1 = (function (){var statearr_27584 = state_27543;
(statearr_27584[(28)] = inst_27536);

return statearr_27584;
})();
var statearr_27585_27655 = state_27543__$1;
(statearr_27585_27655[(2)] = null);

(statearr_27585_27655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (6))){
var inst_27475 = (state_27543[(29)]);
var inst_27474 = cljs.core.deref.call(null,cs);
var inst_27475__$1 = cljs.core.keys.call(null,inst_27474);
var inst_27476 = cljs.core.count.call(null,inst_27475__$1);
var inst_27477 = cljs.core.reset_BANG_.call(null,dctr,inst_27476);
var inst_27482 = cljs.core.seq.call(null,inst_27475__$1);
var inst_27483 = inst_27482;
var inst_27484 = null;
var inst_27485 = (0);
var inst_27486 = (0);
var state_27543__$1 = (function (){var statearr_27586 = state_27543;
(statearr_27586[(20)] = inst_27485);

(statearr_27586[(30)] = inst_27477);

(statearr_27586[(29)] = inst_27475__$1);

(statearr_27586[(11)] = inst_27484);

(statearr_27586[(21)] = inst_27483);

(statearr_27586[(12)] = inst_27486);

return statearr_27586;
})();
var statearr_27587_27656 = state_27543__$1;
(statearr_27587_27656[(2)] = null);

(statearr_27587_27656[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (28))){
var inst_27502 = (state_27543[(25)]);
var inst_27483 = (state_27543[(21)]);
var inst_27502__$1 = cljs.core.seq.call(null,inst_27483);
var state_27543__$1 = (function (){var statearr_27588 = state_27543;
(statearr_27588[(25)] = inst_27502__$1);

return statearr_27588;
})();
if(inst_27502__$1){
var statearr_27589_27657 = state_27543__$1;
(statearr_27589_27657[(1)] = (33));

} else {
var statearr_27590_27658 = state_27543__$1;
(statearr_27590_27658[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (25))){
var inst_27485 = (state_27543[(20)]);
var inst_27486 = (state_27543[(12)]);
var inst_27488 = (inst_27486 < inst_27485);
var inst_27489 = inst_27488;
var state_27543__$1 = state_27543;
if(cljs.core.truth_(inst_27489)){
var statearr_27591_27659 = state_27543__$1;
(statearr_27591_27659[(1)] = (27));

} else {
var statearr_27592_27660 = state_27543__$1;
(statearr_27592_27660[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (34))){
var state_27543__$1 = state_27543;
var statearr_27593_27661 = state_27543__$1;
(statearr_27593_27661[(2)] = null);

(statearr_27593_27661[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (17))){
var state_27543__$1 = state_27543;
var statearr_27594_27662 = state_27543__$1;
(statearr_27594_27662[(2)] = null);

(statearr_27594_27662[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (3))){
var inst_27541 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27543__$1,inst_27541);
} else {
if((state_val_27544 === (12))){
var inst_27470 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27595_27663 = state_27543__$1;
(statearr_27595_27663[(2)] = inst_27470);

(statearr_27595_27663[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (2))){
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27543__$1,(4),ch);
} else {
if((state_val_27544 === (23))){
var state_27543__$1 = state_27543;
var statearr_27596_27664 = state_27543__$1;
(statearr_27596_27664[(2)] = null);

(statearr_27596_27664[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (35))){
var inst_27525 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27597_27665 = state_27543__$1;
(statearr_27597_27665[(2)] = inst_27525);

(statearr_27597_27665[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (19))){
var inst_27444 = (state_27543[(7)]);
var inst_27448 = cljs.core.chunk_first.call(null,inst_27444);
var inst_27449 = cljs.core.chunk_rest.call(null,inst_27444);
var inst_27450 = cljs.core.count.call(null,inst_27448);
var inst_27424 = inst_27449;
var inst_27425 = inst_27448;
var inst_27426 = inst_27450;
var inst_27427 = (0);
var state_27543__$1 = (function (){var statearr_27598 = state_27543;
(statearr_27598[(13)] = inst_27427);

(statearr_27598[(14)] = inst_27426);

(statearr_27598[(15)] = inst_27425);

(statearr_27598[(17)] = inst_27424);

return statearr_27598;
})();
var statearr_27599_27666 = state_27543__$1;
(statearr_27599_27666[(2)] = null);

(statearr_27599_27666[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (11))){
var inst_27444 = (state_27543[(7)]);
var inst_27424 = (state_27543[(17)]);
var inst_27444__$1 = cljs.core.seq.call(null,inst_27424);
var state_27543__$1 = (function (){var statearr_27600 = state_27543;
(statearr_27600[(7)] = inst_27444__$1);

return statearr_27600;
})();
if(inst_27444__$1){
var statearr_27601_27667 = state_27543__$1;
(statearr_27601_27667[(1)] = (16));

} else {
var statearr_27602_27668 = state_27543__$1;
(statearr_27602_27668[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (9))){
var inst_27472 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27603_27669 = state_27543__$1;
(statearr_27603_27669[(2)] = inst_27472);

(statearr_27603_27669[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (5))){
var inst_27422 = cljs.core.deref.call(null,cs);
var inst_27423 = cljs.core.seq.call(null,inst_27422);
var inst_27424 = inst_27423;
var inst_27425 = null;
var inst_27426 = (0);
var inst_27427 = (0);
var state_27543__$1 = (function (){var statearr_27604 = state_27543;
(statearr_27604[(13)] = inst_27427);

(statearr_27604[(14)] = inst_27426);

(statearr_27604[(15)] = inst_27425);

(statearr_27604[(17)] = inst_27424);

return statearr_27604;
})();
var statearr_27605_27670 = state_27543__$1;
(statearr_27605_27670[(2)] = null);

(statearr_27605_27670[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (14))){
var state_27543__$1 = state_27543;
var statearr_27606_27671 = state_27543__$1;
(statearr_27606_27671[(2)] = null);

(statearr_27606_27671[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (45))){
var inst_27533 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27607_27672 = state_27543__$1;
(statearr_27607_27672[(2)] = inst_27533);

(statearr_27607_27672[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (26))){
var inst_27475 = (state_27543[(29)]);
var inst_27529 = (state_27543[(2)]);
var inst_27530 = cljs.core.seq.call(null,inst_27475);
var state_27543__$1 = (function (){var statearr_27608 = state_27543;
(statearr_27608[(31)] = inst_27529);

return statearr_27608;
})();
if(inst_27530){
var statearr_27609_27673 = state_27543__$1;
(statearr_27609_27673[(1)] = (42));

} else {
var statearr_27610_27674 = state_27543__$1;
(statearr_27610_27674[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (16))){
var inst_27444 = (state_27543[(7)]);
var inst_27446 = cljs.core.chunked_seq_QMARK_.call(null,inst_27444);
var state_27543__$1 = state_27543;
if(inst_27446){
var statearr_27611_27675 = state_27543__$1;
(statearr_27611_27675[(1)] = (19));

} else {
var statearr_27612_27676 = state_27543__$1;
(statearr_27612_27676[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (38))){
var inst_27522 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27613_27677 = state_27543__$1;
(statearr_27613_27677[(2)] = inst_27522);

(statearr_27613_27677[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (30))){
var state_27543__$1 = state_27543;
var statearr_27614_27678 = state_27543__$1;
(statearr_27614_27678[(2)] = null);

(statearr_27614_27678[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (10))){
var inst_27427 = (state_27543[(13)]);
var inst_27425 = (state_27543[(15)]);
var inst_27433 = cljs.core._nth.call(null,inst_27425,inst_27427);
var inst_27434 = cljs.core.nth.call(null,inst_27433,(0),null);
var inst_27435 = cljs.core.nth.call(null,inst_27433,(1),null);
var state_27543__$1 = (function (){var statearr_27615 = state_27543;
(statearr_27615[(26)] = inst_27434);

return statearr_27615;
})();
if(cljs.core.truth_(inst_27435)){
var statearr_27616_27679 = state_27543__$1;
(statearr_27616_27679[(1)] = (13));

} else {
var statearr_27617_27680 = state_27543__$1;
(statearr_27617_27680[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (18))){
var inst_27468 = (state_27543[(2)]);
var state_27543__$1 = state_27543;
var statearr_27618_27681 = state_27543__$1;
(statearr_27618_27681[(2)] = inst_27468);

(statearr_27618_27681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (42))){
var state_27543__$1 = state_27543;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_27543__$1,(45),dchan);
} else {
if((state_val_27544 === (37))){
var inst_27415 = (state_27543[(9)]);
var inst_27511 = (state_27543[(23)]);
var inst_27502 = (state_27543[(25)]);
var inst_27511__$1 = cljs.core.first.call(null,inst_27502);
var inst_27512 = cljs.core.async.put_BANG_.call(null,inst_27511__$1,inst_27415,done);
var state_27543__$1 = (function (){var statearr_27619 = state_27543;
(statearr_27619[(23)] = inst_27511__$1);

return statearr_27619;
})();
if(cljs.core.truth_(inst_27512)){
var statearr_27620_27682 = state_27543__$1;
(statearr_27620_27682[(1)] = (39));

} else {
var statearr_27621_27683 = state_27543__$1;
(statearr_27621_27683[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27544 === (8))){
var inst_27427 = (state_27543[(13)]);
var inst_27426 = (state_27543[(14)]);
var inst_27429 = (inst_27427 < inst_27426);
var inst_27430 = inst_27429;
var state_27543__$1 = state_27543;
if(cljs.core.truth_(inst_27430)){
var statearr_27622_27684 = state_27543__$1;
(statearr_27622_27684[(1)] = (10));

} else {
var statearr_27623_27685 = state_27543__$1;
(statearr_27623_27685[(1)] = (11));

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
});})(c__19483__auto___27631,cs,m,dchan,dctr,done))
;
return ((function (switch__19418__auto__,c__19483__auto___27631,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19419__auto__ = null;
var cljs$core$async$mult_$_state_machine__19419__auto____0 = (function (){
var statearr_27627 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_27627[(0)] = cljs$core$async$mult_$_state_machine__19419__auto__);

(statearr_27627[(1)] = (1));

return statearr_27627;
});
var cljs$core$async$mult_$_state_machine__19419__auto____1 = (function (state_27543){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_27543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e27628){if((e27628 instanceof Object)){
var ex__19422__auto__ = e27628;
var statearr_27629_27686 = state_27543;
(statearr_27629_27686[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e27628;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__27687 = state_27543;
state_27543 = G__27687;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19419__auto__ = function(state_27543){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19419__auto____1.call(this,state_27543);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19419__auto____0;
cljs$core$async$mult_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19419__auto____1;
return cljs$core$async$mult_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___27631,cs,m,dchan,dctr,done))
})();
var state__19485__auto__ = (function (){var statearr_27630 = f__19484__auto__.call(null);
(statearr_27630[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___27631);

return statearr_27630;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___27631,cs,m,dchan,dctr,done))
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
var args27688 = [];
var len__17378__auto___27691 = arguments.length;
var i__17379__auto___27692 = (0);
while(true){
if((i__17379__auto___27692 < len__17378__auto___27691)){
args27688.push((arguments[i__17379__auto___27692]));

var G__27693 = (i__17379__auto___27692 + (1));
i__17379__auto___27692 = G__27693;
continue;
} else {
}
break;
}

var G__27690 = args27688.length;
switch (G__27690) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27688.length)].join('')));

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
var len__17378__auto___27705 = arguments.length;
var i__17379__auto___27706 = (0);
while(true){
if((i__17379__auto___27706 < len__17378__auto___27705)){
args__17385__auto__.push((arguments[i__17379__auto___27706]));

var G__27707 = (i__17379__auto___27706 + (1));
i__17379__auto___27706 = G__27707;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((3) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17386__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__27699){
var map__27700 = p__27699;
var map__27700__$1 = ((((!((map__27700 == null)))?((((map__27700.cljs$lang$protocol_mask$partition0$ & (64))) || (map__27700.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__27700):map__27700);
var opts = map__27700__$1;
var statearr_27702_27708 = state;
(statearr_27702_27708[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__27700,map__27700__$1,opts){
return (function (val){
var statearr_27703_27709 = state;
(statearr_27703_27709[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__27700,map__27700__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_27704_27710 = state;
(statearr_27704_27710[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq27695){
var G__27696 = cljs.core.first.call(null,seq27695);
var seq27695__$1 = cljs.core.next.call(null,seq27695);
var G__27697 = cljs.core.first.call(null,seq27695__$1);
var seq27695__$2 = cljs.core.next.call(null,seq27695__$1);
var G__27698 = cljs.core.first.call(null,seq27695__$2);
var seq27695__$3 = cljs.core.next.call(null,seq27695__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__27696,G__27697,G__27698,seq27695__$3);
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
if(typeof cljs.core.async.t_cljs$core$async27874 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async27874 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta27875){
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
this.meta27875 = meta27875;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27876,meta27875__$1){
var self__ = this;
var _27876__$1 = this;
return (new cljs.core.async.t_cljs$core$async27874(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta27875__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_27876){
var self__ = this;
var _27876__$1 = this;
return self__.meta27875;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async27874.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta27875","meta27875",-982114735,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async27874.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async27874.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async27874";

cljs.core.async.t_cljs$core$async27874.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async27874");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async27874 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async27874(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27875){
return (new cljs.core.async.t_cljs$core$async27874(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta27875));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async27874(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19483__auto___28037 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_27974){
var state_val_27975 = (state_27974[(1)]);
if((state_val_27975 === (7))){
var inst_27892 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_27976_28038 = state_27974__$1;
(statearr_27976_28038[(2)] = inst_27892);

(statearr_27976_28038[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (20))){
var inst_27904 = (state_27974[(7)]);
var state_27974__$1 = state_27974;
var statearr_27977_28039 = state_27974__$1;
(statearr_27977_28039[(2)] = inst_27904);

(statearr_27977_28039[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (27))){
var state_27974__$1 = state_27974;
var statearr_27978_28040 = state_27974__$1;
(statearr_27978_28040[(2)] = null);

(statearr_27978_28040[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (1))){
var inst_27880 = (state_27974[(8)]);
var inst_27880__$1 = calc_state.call(null);
var inst_27882 = (inst_27880__$1 == null);
var inst_27883 = cljs.core.not.call(null,inst_27882);
var state_27974__$1 = (function (){var statearr_27979 = state_27974;
(statearr_27979[(8)] = inst_27880__$1);

return statearr_27979;
})();
if(inst_27883){
var statearr_27980_28041 = state_27974__$1;
(statearr_27980_28041[(1)] = (2));

} else {
var statearr_27981_28042 = state_27974__$1;
(statearr_27981_28042[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (24))){
var inst_27934 = (state_27974[(9)]);
var inst_27948 = (state_27974[(10)]);
var inst_27927 = (state_27974[(11)]);
var inst_27948__$1 = inst_27927.call(null,inst_27934);
var state_27974__$1 = (function (){var statearr_27982 = state_27974;
(statearr_27982[(10)] = inst_27948__$1);

return statearr_27982;
})();
if(cljs.core.truth_(inst_27948__$1)){
var statearr_27983_28043 = state_27974__$1;
(statearr_27983_28043[(1)] = (29));

} else {
var statearr_27984_28044 = state_27974__$1;
(statearr_27984_28044[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (4))){
var inst_27895 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27895)){
var statearr_27985_28045 = state_27974__$1;
(statearr_27985_28045[(1)] = (8));

} else {
var statearr_27986_28046 = state_27974__$1;
(statearr_27986_28046[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (15))){
var inst_27921 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27921)){
var statearr_27987_28047 = state_27974__$1;
(statearr_27987_28047[(1)] = (19));

} else {
var statearr_27988_28048 = state_27974__$1;
(statearr_27988_28048[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (21))){
var inst_27926 = (state_27974[(12)]);
var inst_27926__$1 = (state_27974[(2)]);
var inst_27927 = cljs.core.get.call(null,inst_27926__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27928 = cljs.core.get.call(null,inst_27926__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27929 = cljs.core.get.call(null,inst_27926__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_27974__$1 = (function (){var statearr_27989 = state_27974;
(statearr_27989[(13)] = inst_27928);

(statearr_27989[(11)] = inst_27927);

(statearr_27989[(12)] = inst_27926__$1);

return statearr_27989;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_27974__$1,(22),inst_27929);
} else {
if((state_val_27975 === (31))){
var inst_27956 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27956)){
var statearr_27990_28049 = state_27974__$1;
(statearr_27990_28049[(1)] = (32));

} else {
var statearr_27991_28050 = state_27974__$1;
(statearr_27991_28050[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (32))){
var inst_27933 = (state_27974[(14)]);
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_27974__$1,(35),out,inst_27933);
} else {
if((state_val_27975 === (33))){
var inst_27926 = (state_27974[(12)]);
var inst_27904 = inst_27926;
var state_27974__$1 = (function (){var statearr_27992 = state_27974;
(statearr_27992[(7)] = inst_27904);

return statearr_27992;
})();
var statearr_27993_28051 = state_27974__$1;
(statearr_27993_28051[(2)] = null);

(statearr_27993_28051[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (13))){
var inst_27904 = (state_27974[(7)]);
var inst_27911 = inst_27904.cljs$lang$protocol_mask$partition0$;
var inst_27912 = (inst_27911 & (64));
var inst_27913 = inst_27904.cljs$core$ISeq$;
var inst_27914 = (inst_27912) || (inst_27913);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27914)){
var statearr_27994_28052 = state_27974__$1;
(statearr_27994_28052[(1)] = (16));

} else {
var statearr_27995_28053 = state_27974__$1;
(statearr_27995_28053[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (22))){
var inst_27934 = (state_27974[(9)]);
var inst_27933 = (state_27974[(14)]);
var inst_27932 = (state_27974[(2)]);
var inst_27933__$1 = cljs.core.nth.call(null,inst_27932,(0),null);
var inst_27934__$1 = cljs.core.nth.call(null,inst_27932,(1),null);
var inst_27935 = (inst_27933__$1 == null);
var inst_27936 = cljs.core._EQ_.call(null,inst_27934__$1,change);
var inst_27937 = (inst_27935) || (inst_27936);
var state_27974__$1 = (function (){var statearr_27996 = state_27974;
(statearr_27996[(9)] = inst_27934__$1);

(statearr_27996[(14)] = inst_27933__$1);

return statearr_27996;
})();
if(cljs.core.truth_(inst_27937)){
var statearr_27997_28054 = state_27974__$1;
(statearr_27997_28054[(1)] = (23));

} else {
var statearr_27998_28055 = state_27974__$1;
(statearr_27998_28055[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (36))){
var inst_27926 = (state_27974[(12)]);
var inst_27904 = inst_27926;
var state_27974__$1 = (function (){var statearr_27999 = state_27974;
(statearr_27999[(7)] = inst_27904);

return statearr_27999;
})();
var statearr_28000_28056 = state_27974__$1;
(statearr_28000_28056[(2)] = null);

(statearr_28000_28056[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (29))){
var inst_27948 = (state_27974[(10)]);
var state_27974__$1 = state_27974;
var statearr_28001_28057 = state_27974__$1;
(statearr_28001_28057[(2)] = inst_27948);

(statearr_28001_28057[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (6))){
var state_27974__$1 = state_27974;
var statearr_28002_28058 = state_27974__$1;
(statearr_28002_28058[(2)] = false);

(statearr_28002_28058[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (28))){
var inst_27944 = (state_27974[(2)]);
var inst_27945 = calc_state.call(null);
var inst_27904 = inst_27945;
var state_27974__$1 = (function (){var statearr_28003 = state_27974;
(statearr_28003[(15)] = inst_27944);

(statearr_28003[(7)] = inst_27904);

return statearr_28003;
})();
var statearr_28004_28059 = state_27974__$1;
(statearr_28004_28059[(2)] = null);

(statearr_28004_28059[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (25))){
var inst_27970 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28005_28060 = state_27974__$1;
(statearr_28005_28060[(2)] = inst_27970);

(statearr_28005_28060[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (34))){
var inst_27968 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28006_28061 = state_27974__$1;
(statearr_28006_28061[(2)] = inst_27968);

(statearr_28006_28061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (17))){
var state_27974__$1 = state_27974;
var statearr_28007_28062 = state_27974__$1;
(statearr_28007_28062[(2)] = false);

(statearr_28007_28062[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (3))){
var state_27974__$1 = state_27974;
var statearr_28008_28063 = state_27974__$1;
(statearr_28008_28063[(2)] = false);

(statearr_28008_28063[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (12))){
var inst_27972 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_27974__$1,inst_27972);
} else {
if((state_val_27975 === (2))){
var inst_27880 = (state_27974[(8)]);
var inst_27885 = inst_27880.cljs$lang$protocol_mask$partition0$;
var inst_27886 = (inst_27885 & (64));
var inst_27887 = inst_27880.cljs$core$ISeq$;
var inst_27888 = (inst_27886) || (inst_27887);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27888)){
var statearr_28009_28064 = state_27974__$1;
(statearr_28009_28064[(1)] = (5));

} else {
var statearr_28010_28065 = state_27974__$1;
(statearr_28010_28065[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (23))){
var inst_27933 = (state_27974[(14)]);
var inst_27939 = (inst_27933 == null);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27939)){
var statearr_28011_28066 = state_27974__$1;
(statearr_28011_28066[(1)] = (26));

} else {
var statearr_28012_28067 = state_27974__$1;
(statearr_28012_28067[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (35))){
var inst_27959 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
if(cljs.core.truth_(inst_27959)){
var statearr_28013_28068 = state_27974__$1;
(statearr_28013_28068[(1)] = (36));

} else {
var statearr_28014_28069 = state_27974__$1;
(statearr_28014_28069[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (19))){
var inst_27904 = (state_27974[(7)]);
var inst_27923 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27904);
var state_27974__$1 = state_27974;
var statearr_28015_28070 = state_27974__$1;
(statearr_28015_28070[(2)] = inst_27923);

(statearr_28015_28070[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (11))){
var inst_27904 = (state_27974[(7)]);
var inst_27908 = (inst_27904 == null);
var inst_27909 = cljs.core.not.call(null,inst_27908);
var state_27974__$1 = state_27974;
if(inst_27909){
var statearr_28016_28071 = state_27974__$1;
(statearr_28016_28071[(1)] = (13));

} else {
var statearr_28017_28072 = state_27974__$1;
(statearr_28017_28072[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (9))){
var inst_27880 = (state_27974[(8)]);
var state_27974__$1 = state_27974;
var statearr_28018_28073 = state_27974__$1;
(statearr_28018_28073[(2)] = inst_27880);

(statearr_28018_28073[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (5))){
var state_27974__$1 = state_27974;
var statearr_28019_28074 = state_27974__$1;
(statearr_28019_28074[(2)] = true);

(statearr_28019_28074[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (14))){
var state_27974__$1 = state_27974;
var statearr_28020_28075 = state_27974__$1;
(statearr_28020_28075[(2)] = false);

(statearr_28020_28075[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (26))){
var inst_27934 = (state_27974[(9)]);
var inst_27941 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_27934);
var state_27974__$1 = state_27974;
var statearr_28021_28076 = state_27974__$1;
(statearr_28021_28076[(2)] = inst_27941);

(statearr_28021_28076[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (16))){
var state_27974__$1 = state_27974;
var statearr_28022_28077 = state_27974__$1;
(statearr_28022_28077[(2)] = true);

(statearr_28022_28077[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (38))){
var inst_27964 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28023_28078 = state_27974__$1;
(statearr_28023_28078[(2)] = inst_27964);

(statearr_28023_28078[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (30))){
var inst_27934 = (state_27974[(9)]);
var inst_27928 = (state_27974[(13)]);
var inst_27927 = (state_27974[(11)]);
var inst_27951 = cljs.core.empty_QMARK_.call(null,inst_27927);
var inst_27952 = inst_27928.call(null,inst_27934);
var inst_27953 = cljs.core.not.call(null,inst_27952);
var inst_27954 = (inst_27951) && (inst_27953);
var state_27974__$1 = state_27974;
var statearr_28024_28079 = state_27974__$1;
(statearr_28024_28079[(2)] = inst_27954);

(statearr_28024_28079[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (10))){
var inst_27880 = (state_27974[(8)]);
var inst_27900 = (state_27974[(2)]);
var inst_27901 = cljs.core.get.call(null,inst_27900,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_27902 = cljs.core.get.call(null,inst_27900,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_27903 = cljs.core.get.call(null,inst_27900,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_27904 = inst_27880;
var state_27974__$1 = (function (){var statearr_28025 = state_27974;
(statearr_28025[(16)] = inst_27903);

(statearr_28025[(17)] = inst_27901);

(statearr_28025[(18)] = inst_27902);

(statearr_28025[(7)] = inst_27904);

return statearr_28025;
})();
var statearr_28026_28080 = state_27974__$1;
(statearr_28026_28080[(2)] = null);

(statearr_28026_28080[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (18))){
var inst_27918 = (state_27974[(2)]);
var state_27974__$1 = state_27974;
var statearr_28027_28081 = state_27974__$1;
(statearr_28027_28081[(2)] = inst_27918);

(statearr_28027_28081[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (37))){
var state_27974__$1 = state_27974;
var statearr_28028_28082 = state_27974__$1;
(statearr_28028_28082[(2)] = null);

(statearr_28028_28082[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_27975 === (8))){
var inst_27880 = (state_27974[(8)]);
var inst_27897 = cljs.core.apply.call(null,cljs.core.hash_map,inst_27880);
var state_27974__$1 = state_27974;
var statearr_28029_28083 = state_27974__$1;
(statearr_28029_28083[(2)] = inst_27897);

(statearr_28029_28083[(1)] = (10));


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
});})(c__19483__auto___28037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19418__auto__,c__19483__auto___28037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19419__auto__ = null;
var cljs$core$async$mix_$_state_machine__19419__auto____0 = (function (){
var statearr_28033 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28033[(0)] = cljs$core$async$mix_$_state_machine__19419__auto__);

(statearr_28033[(1)] = (1));

return statearr_28033;
});
var cljs$core$async$mix_$_state_machine__19419__auto____1 = (function (state_27974){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_27974);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28034){if((e28034 instanceof Object)){
var ex__19422__auto__ = e28034;
var statearr_28035_28084 = state_27974;
(statearr_28035_28084[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_27974);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28034;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28085 = state_27974;
state_27974 = G__28085;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19419__auto__ = function(state_27974){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19419__auto____1.call(this,state_27974);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19419__auto____0;
cljs$core$async$mix_$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19419__auto____1;
return cljs$core$async$mix_$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19485__auto__ = (function (){var statearr_28036 = f__19484__auto__.call(null);
(statearr_28036[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28037);

return statearr_28036;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28037,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args28086 = [];
var len__17378__auto___28089 = arguments.length;
var i__17379__auto___28090 = (0);
while(true){
if((i__17379__auto___28090 < len__17378__auto___28089)){
args28086.push((arguments[i__17379__auto___28090]));

var G__28091 = (i__17379__auto___28090 + (1));
i__17379__auto___28090 = G__28091;
continue;
} else {
}
break;
}

var G__28088 = args28086.length;
switch (G__28088) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28086.length)].join('')));

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
var args28094 = [];
var len__17378__auto___28219 = arguments.length;
var i__17379__auto___28220 = (0);
while(true){
if((i__17379__auto___28220 < len__17378__auto___28219)){
args28094.push((arguments[i__17379__auto___28220]));

var G__28221 = (i__17379__auto___28220 + (1));
i__17379__auto___28220 = G__28221;
continue;
} else {
}
break;
}

var G__28096 = args28094.length;
switch (G__28096) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28094.length)].join('')));

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
return (function (p1__28093_SHARP_){
if(cljs.core.truth_(p1__28093_SHARP_.call(null,topic))){
return p1__28093_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__28093_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16320__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async28097 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28097 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta28098){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta28098 = meta28098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_28099,meta28098__$1){
var self__ = this;
var _28099__$1 = this;
return (new cljs.core.async.t_cljs$core$async28097(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta28098__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_28099){
var self__ = this;
var _28099__$1 = this;
return self__.meta28098;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28097.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28097.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta28098","meta28098",-1671459104,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async28097.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28097.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28097";

cljs.core.async.t_cljs$core$async28097.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28097");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async28097 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async28097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28098){
return (new cljs.core.async.t_cljs$core$async28097(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta28098));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async28097(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19483__auto___28223 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28223,mults,ensure_mult,p){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28223,mults,ensure_mult,p){
return (function (state_28171){
var state_val_28172 = (state_28171[(1)]);
if((state_val_28172 === (7))){
var inst_28167 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28173_28224 = state_28171__$1;
(statearr_28173_28224[(2)] = inst_28167);

(statearr_28173_28224[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (20))){
var state_28171__$1 = state_28171;
var statearr_28174_28225 = state_28171__$1;
(statearr_28174_28225[(2)] = null);

(statearr_28174_28225[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (1))){
var state_28171__$1 = state_28171;
var statearr_28175_28226 = state_28171__$1;
(statearr_28175_28226[(2)] = null);

(statearr_28175_28226[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (24))){
var inst_28150 = (state_28171[(7)]);
var inst_28159 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_28150);
var state_28171__$1 = state_28171;
var statearr_28176_28227 = state_28171__$1;
(statearr_28176_28227[(2)] = inst_28159);

(statearr_28176_28227[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (4))){
var inst_28102 = (state_28171[(8)]);
var inst_28102__$1 = (state_28171[(2)]);
var inst_28103 = (inst_28102__$1 == null);
var state_28171__$1 = (function (){var statearr_28177 = state_28171;
(statearr_28177[(8)] = inst_28102__$1);

return statearr_28177;
})();
if(cljs.core.truth_(inst_28103)){
var statearr_28178_28228 = state_28171__$1;
(statearr_28178_28228[(1)] = (5));

} else {
var statearr_28179_28229 = state_28171__$1;
(statearr_28179_28229[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (15))){
var inst_28144 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28180_28230 = state_28171__$1;
(statearr_28180_28230[(2)] = inst_28144);

(statearr_28180_28230[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (21))){
var inst_28164 = (state_28171[(2)]);
var state_28171__$1 = (function (){var statearr_28181 = state_28171;
(statearr_28181[(9)] = inst_28164);

return statearr_28181;
})();
var statearr_28182_28231 = state_28171__$1;
(statearr_28182_28231[(2)] = null);

(statearr_28182_28231[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (13))){
var inst_28126 = (state_28171[(10)]);
var inst_28128 = cljs.core.chunked_seq_QMARK_.call(null,inst_28126);
var state_28171__$1 = state_28171;
if(inst_28128){
var statearr_28183_28232 = state_28171__$1;
(statearr_28183_28232[(1)] = (16));

} else {
var statearr_28184_28233 = state_28171__$1;
(statearr_28184_28233[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (22))){
var inst_28156 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
if(cljs.core.truth_(inst_28156)){
var statearr_28185_28234 = state_28171__$1;
(statearr_28185_28234[(1)] = (23));

} else {
var statearr_28186_28235 = state_28171__$1;
(statearr_28186_28235[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (6))){
var inst_28102 = (state_28171[(8)]);
var inst_28150 = (state_28171[(7)]);
var inst_28152 = (state_28171[(11)]);
var inst_28150__$1 = topic_fn.call(null,inst_28102);
var inst_28151 = cljs.core.deref.call(null,mults);
var inst_28152__$1 = cljs.core.get.call(null,inst_28151,inst_28150__$1);
var state_28171__$1 = (function (){var statearr_28187 = state_28171;
(statearr_28187[(7)] = inst_28150__$1);

(statearr_28187[(11)] = inst_28152__$1);

return statearr_28187;
})();
if(cljs.core.truth_(inst_28152__$1)){
var statearr_28188_28236 = state_28171__$1;
(statearr_28188_28236[(1)] = (19));

} else {
var statearr_28189_28237 = state_28171__$1;
(statearr_28189_28237[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (25))){
var inst_28161 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28190_28238 = state_28171__$1;
(statearr_28190_28238[(2)] = inst_28161);

(statearr_28190_28238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (17))){
var inst_28126 = (state_28171[(10)]);
var inst_28135 = cljs.core.first.call(null,inst_28126);
var inst_28136 = cljs.core.async.muxch_STAR_.call(null,inst_28135);
var inst_28137 = cljs.core.async.close_BANG_.call(null,inst_28136);
var inst_28138 = cljs.core.next.call(null,inst_28126);
var inst_28112 = inst_28138;
var inst_28113 = null;
var inst_28114 = (0);
var inst_28115 = (0);
var state_28171__$1 = (function (){var statearr_28191 = state_28171;
(statearr_28191[(12)] = inst_28112);

(statearr_28191[(13)] = inst_28113);

(statearr_28191[(14)] = inst_28115);

(statearr_28191[(15)] = inst_28114);

(statearr_28191[(16)] = inst_28137);

return statearr_28191;
})();
var statearr_28192_28239 = state_28171__$1;
(statearr_28192_28239[(2)] = null);

(statearr_28192_28239[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (3))){
var inst_28169 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28171__$1,inst_28169);
} else {
if((state_val_28172 === (12))){
var inst_28146 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28193_28240 = state_28171__$1;
(statearr_28193_28240[(2)] = inst_28146);

(statearr_28193_28240[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (2))){
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28171__$1,(4),ch);
} else {
if((state_val_28172 === (23))){
var state_28171__$1 = state_28171;
var statearr_28194_28241 = state_28171__$1;
(statearr_28194_28241[(2)] = null);

(statearr_28194_28241[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (19))){
var inst_28102 = (state_28171[(8)]);
var inst_28152 = (state_28171[(11)]);
var inst_28154 = cljs.core.async.muxch_STAR_.call(null,inst_28152);
var state_28171__$1 = state_28171;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28171__$1,(22),inst_28154,inst_28102);
} else {
if((state_val_28172 === (11))){
var inst_28112 = (state_28171[(12)]);
var inst_28126 = (state_28171[(10)]);
var inst_28126__$1 = cljs.core.seq.call(null,inst_28112);
var state_28171__$1 = (function (){var statearr_28195 = state_28171;
(statearr_28195[(10)] = inst_28126__$1);

return statearr_28195;
})();
if(inst_28126__$1){
var statearr_28196_28242 = state_28171__$1;
(statearr_28196_28242[(1)] = (13));

} else {
var statearr_28197_28243 = state_28171__$1;
(statearr_28197_28243[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (9))){
var inst_28148 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28198_28244 = state_28171__$1;
(statearr_28198_28244[(2)] = inst_28148);

(statearr_28198_28244[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (5))){
var inst_28109 = cljs.core.deref.call(null,mults);
var inst_28110 = cljs.core.vals.call(null,inst_28109);
var inst_28111 = cljs.core.seq.call(null,inst_28110);
var inst_28112 = inst_28111;
var inst_28113 = null;
var inst_28114 = (0);
var inst_28115 = (0);
var state_28171__$1 = (function (){var statearr_28199 = state_28171;
(statearr_28199[(12)] = inst_28112);

(statearr_28199[(13)] = inst_28113);

(statearr_28199[(14)] = inst_28115);

(statearr_28199[(15)] = inst_28114);

return statearr_28199;
})();
var statearr_28200_28245 = state_28171__$1;
(statearr_28200_28245[(2)] = null);

(statearr_28200_28245[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (14))){
var state_28171__$1 = state_28171;
var statearr_28204_28246 = state_28171__$1;
(statearr_28204_28246[(2)] = null);

(statearr_28204_28246[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (16))){
var inst_28126 = (state_28171[(10)]);
var inst_28130 = cljs.core.chunk_first.call(null,inst_28126);
var inst_28131 = cljs.core.chunk_rest.call(null,inst_28126);
var inst_28132 = cljs.core.count.call(null,inst_28130);
var inst_28112 = inst_28131;
var inst_28113 = inst_28130;
var inst_28114 = inst_28132;
var inst_28115 = (0);
var state_28171__$1 = (function (){var statearr_28205 = state_28171;
(statearr_28205[(12)] = inst_28112);

(statearr_28205[(13)] = inst_28113);

(statearr_28205[(14)] = inst_28115);

(statearr_28205[(15)] = inst_28114);

return statearr_28205;
})();
var statearr_28206_28247 = state_28171__$1;
(statearr_28206_28247[(2)] = null);

(statearr_28206_28247[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (10))){
var inst_28112 = (state_28171[(12)]);
var inst_28113 = (state_28171[(13)]);
var inst_28115 = (state_28171[(14)]);
var inst_28114 = (state_28171[(15)]);
var inst_28120 = cljs.core._nth.call(null,inst_28113,inst_28115);
var inst_28121 = cljs.core.async.muxch_STAR_.call(null,inst_28120);
var inst_28122 = cljs.core.async.close_BANG_.call(null,inst_28121);
var inst_28123 = (inst_28115 + (1));
var tmp28201 = inst_28112;
var tmp28202 = inst_28113;
var tmp28203 = inst_28114;
var inst_28112__$1 = tmp28201;
var inst_28113__$1 = tmp28202;
var inst_28114__$1 = tmp28203;
var inst_28115__$1 = inst_28123;
var state_28171__$1 = (function (){var statearr_28207 = state_28171;
(statearr_28207[(12)] = inst_28112__$1);

(statearr_28207[(13)] = inst_28113__$1);

(statearr_28207[(14)] = inst_28115__$1);

(statearr_28207[(15)] = inst_28114__$1);

(statearr_28207[(17)] = inst_28122);

return statearr_28207;
})();
var statearr_28208_28248 = state_28171__$1;
(statearr_28208_28248[(2)] = null);

(statearr_28208_28248[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (18))){
var inst_28141 = (state_28171[(2)]);
var state_28171__$1 = state_28171;
var statearr_28209_28249 = state_28171__$1;
(statearr_28209_28249[(2)] = inst_28141);

(statearr_28209_28249[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28172 === (8))){
var inst_28115 = (state_28171[(14)]);
var inst_28114 = (state_28171[(15)]);
var inst_28117 = (inst_28115 < inst_28114);
var inst_28118 = inst_28117;
var state_28171__$1 = state_28171;
if(cljs.core.truth_(inst_28118)){
var statearr_28210_28250 = state_28171__$1;
(statearr_28210_28250[(1)] = (10));

} else {
var statearr_28211_28251 = state_28171__$1;
(statearr_28211_28251[(1)] = (11));

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
});})(c__19483__auto___28223,mults,ensure_mult,p))
;
return ((function (switch__19418__auto__,c__19483__auto___28223,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_28215 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28215[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_28215[(1)] = (1));

return statearr_28215;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_28171){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28171);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28216){if((e28216 instanceof Object)){
var ex__19422__auto__ = e28216;
var statearr_28217_28252 = state_28171;
(statearr_28217_28252[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28216;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28253 = state_28171;
state_28171 = G__28253;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_28171){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_28171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28223,mults,ensure_mult,p))
})();
var state__19485__auto__ = (function (){var statearr_28218 = f__19484__auto__.call(null);
(statearr_28218[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28223);

return statearr_28218;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28223,mults,ensure_mult,p))
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
var args28254 = [];
var len__17378__auto___28257 = arguments.length;
var i__17379__auto___28258 = (0);
while(true){
if((i__17379__auto___28258 < len__17378__auto___28257)){
args28254.push((arguments[i__17379__auto___28258]));

var G__28259 = (i__17379__auto___28258 + (1));
i__17379__auto___28258 = G__28259;
continue;
} else {
}
break;
}

var G__28256 = args28254.length;
switch (G__28256) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28254.length)].join('')));

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
var args28261 = [];
var len__17378__auto___28264 = arguments.length;
var i__17379__auto___28265 = (0);
while(true){
if((i__17379__auto___28265 < len__17378__auto___28264)){
args28261.push((arguments[i__17379__auto___28265]));

var G__28266 = (i__17379__auto___28265 + (1));
i__17379__auto___28265 = G__28266;
continue;
} else {
}
break;
}

var G__28263 = args28261.length;
switch (G__28263) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28261.length)].join('')));

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
var args28268 = [];
var len__17378__auto___28339 = arguments.length;
var i__17379__auto___28340 = (0);
while(true){
if((i__17379__auto___28340 < len__17378__auto___28339)){
args28268.push((arguments[i__17379__auto___28340]));

var G__28341 = (i__17379__auto___28340 + (1));
i__17379__auto___28340 = G__28341;
continue;
} else {
}
break;
}

var G__28270 = args28268.length;
switch (G__28270) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28268.length)].join('')));

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
var c__19483__auto___28343 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28343,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28343,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_28309){
var state_val_28310 = (state_28309[(1)]);
if((state_val_28310 === (7))){
var state_28309__$1 = state_28309;
var statearr_28311_28344 = state_28309__$1;
(statearr_28311_28344[(2)] = null);

(statearr_28311_28344[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (1))){
var state_28309__$1 = state_28309;
var statearr_28312_28345 = state_28309__$1;
(statearr_28312_28345[(2)] = null);

(statearr_28312_28345[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (4))){
var inst_28273 = (state_28309[(7)]);
var inst_28275 = (inst_28273 < cnt);
var state_28309__$1 = state_28309;
if(cljs.core.truth_(inst_28275)){
var statearr_28313_28346 = state_28309__$1;
(statearr_28313_28346[(1)] = (6));

} else {
var statearr_28314_28347 = state_28309__$1;
(statearr_28314_28347[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (15))){
var inst_28305 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28315_28348 = state_28309__$1;
(statearr_28315_28348[(2)] = inst_28305);

(statearr_28315_28348[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (13))){
var inst_28298 = cljs.core.async.close_BANG_.call(null,out);
var state_28309__$1 = state_28309;
var statearr_28316_28349 = state_28309__$1;
(statearr_28316_28349[(2)] = inst_28298);

(statearr_28316_28349[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (6))){
var state_28309__$1 = state_28309;
var statearr_28317_28350 = state_28309__$1;
(statearr_28317_28350[(2)] = null);

(statearr_28317_28350[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (3))){
var inst_28307 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28309__$1,inst_28307);
} else {
if((state_val_28310 === (12))){
var inst_28295 = (state_28309[(8)]);
var inst_28295__$1 = (state_28309[(2)]);
var inst_28296 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_28295__$1);
var state_28309__$1 = (function (){var statearr_28318 = state_28309;
(statearr_28318[(8)] = inst_28295__$1);

return statearr_28318;
})();
if(cljs.core.truth_(inst_28296)){
var statearr_28319_28351 = state_28309__$1;
(statearr_28319_28351[(1)] = (13));

} else {
var statearr_28320_28352 = state_28309__$1;
(statearr_28320_28352[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (2))){
var inst_28272 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_28273 = (0);
var state_28309__$1 = (function (){var statearr_28321 = state_28309;
(statearr_28321[(7)] = inst_28273);

(statearr_28321[(9)] = inst_28272);

return statearr_28321;
})();
var statearr_28322_28353 = state_28309__$1;
(statearr_28322_28353[(2)] = null);

(statearr_28322_28353[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (11))){
var inst_28273 = (state_28309[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_28309,(10),Object,null,(9));
var inst_28282 = chs__$1.call(null,inst_28273);
var inst_28283 = done.call(null,inst_28273);
var inst_28284 = cljs.core.async.take_BANG_.call(null,inst_28282,inst_28283);
var state_28309__$1 = state_28309;
var statearr_28323_28354 = state_28309__$1;
(statearr_28323_28354[(2)] = inst_28284);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (9))){
var inst_28273 = (state_28309[(7)]);
var inst_28286 = (state_28309[(2)]);
var inst_28287 = (inst_28273 + (1));
var inst_28273__$1 = inst_28287;
var state_28309__$1 = (function (){var statearr_28324 = state_28309;
(statearr_28324[(7)] = inst_28273__$1);

(statearr_28324[(10)] = inst_28286);

return statearr_28324;
})();
var statearr_28325_28355 = state_28309__$1;
(statearr_28325_28355[(2)] = null);

(statearr_28325_28355[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (5))){
var inst_28293 = (state_28309[(2)]);
var state_28309__$1 = (function (){var statearr_28326 = state_28309;
(statearr_28326[(11)] = inst_28293);

return statearr_28326;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28309__$1,(12),dchan);
} else {
if((state_val_28310 === (14))){
var inst_28295 = (state_28309[(8)]);
var inst_28300 = cljs.core.apply.call(null,f,inst_28295);
var state_28309__$1 = state_28309;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28309__$1,(16),out,inst_28300);
} else {
if((state_val_28310 === (16))){
var inst_28302 = (state_28309[(2)]);
var state_28309__$1 = (function (){var statearr_28327 = state_28309;
(statearr_28327[(12)] = inst_28302);

return statearr_28327;
})();
var statearr_28328_28356 = state_28309__$1;
(statearr_28328_28356[(2)] = null);

(statearr_28328_28356[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (10))){
var inst_28277 = (state_28309[(2)]);
var inst_28278 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_28309__$1 = (function (){var statearr_28329 = state_28309;
(statearr_28329[(13)] = inst_28277);

return statearr_28329;
})();
var statearr_28330_28357 = state_28309__$1;
(statearr_28330_28357[(2)] = inst_28278);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28310 === (8))){
var inst_28291 = (state_28309[(2)]);
var state_28309__$1 = state_28309;
var statearr_28331_28358 = state_28309__$1;
(statearr_28331_28358[(2)] = inst_28291);

(statearr_28331_28358[(1)] = (5));


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
});})(c__19483__auto___28343,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19418__auto__,c__19483__auto___28343,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_28335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28335[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_28335[(1)] = (1));

return statearr_28335;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_28309){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28309);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28336){if((e28336 instanceof Object)){
var ex__19422__auto__ = e28336;
var statearr_28337_28359 = state_28309;
(statearr_28337_28359[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28309);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28360 = state_28309;
state_28309 = G__28360;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_28309){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_28309);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28343,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19485__auto__ = (function (){var statearr_28338 = f__19484__auto__.call(null);
(statearr_28338[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28343);

return statearr_28338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28343,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args28362 = [];
var len__17378__auto___28418 = arguments.length;
var i__17379__auto___28419 = (0);
while(true){
if((i__17379__auto___28419 < len__17378__auto___28418)){
args28362.push((arguments[i__17379__auto___28419]));

var G__28420 = (i__17379__auto___28419 + (1));
i__17379__auto___28419 = G__28420;
continue;
} else {
}
break;
}

var G__28364 = args28362.length;
switch (G__28364) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28362.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19483__auto___28422 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28422,out){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28422,out){
return (function (state_28394){
var state_val_28395 = (state_28394[(1)]);
if((state_val_28395 === (7))){
var inst_28373 = (state_28394[(7)]);
var inst_28374 = (state_28394[(8)]);
var inst_28373__$1 = (state_28394[(2)]);
var inst_28374__$1 = cljs.core.nth.call(null,inst_28373__$1,(0),null);
var inst_28375 = cljs.core.nth.call(null,inst_28373__$1,(1),null);
var inst_28376 = (inst_28374__$1 == null);
var state_28394__$1 = (function (){var statearr_28396 = state_28394;
(statearr_28396[(7)] = inst_28373__$1);

(statearr_28396[(9)] = inst_28375);

(statearr_28396[(8)] = inst_28374__$1);

return statearr_28396;
})();
if(cljs.core.truth_(inst_28376)){
var statearr_28397_28423 = state_28394__$1;
(statearr_28397_28423[(1)] = (8));

} else {
var statearr_28398_28424 = state_28394__$1;
(statearr_28398_28424[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (1))){
var inst_28365 = cljs.core.vec.call(null,chs);
var inst_28366 = inst_28365;
var state_28394__$1 = (function (){var statearr_28399 = state_28394;
(statearr_28399[(10)] = inst_28366);

return statearr_28399;
})();
var statearr_28400_28425 = state_28394__$1;
(statearr_28400_28425[(2)] = null);

(statearr_28400_28425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (4))){
var inst_28366 = (state_28394[(10)]);
var state_28394__$1 = state_28394;
return cljs.core.async.ioc_alts_BANG_.call(null,state_28394__$1,(7),inst_28366);
} else {
if((state_val_28395 === (6))){
var inst_28390 = (state_28394[(2)]);
var state_28394__$1 = state_28394;
var statearr_28401_28426 = state_28394__$1;
(statearr_28401_28426[(2)] = inst_28390);

(statearr_28401_28426[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (3))){
var inst_28392 = (state_28394[(2)]);
var state_28394__$1 = state_28394;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28394__$1,inst_28392);
} else {
if((state_val_28395 === (2))){
var inst_28366 = (state_28394[(10)]);
var inst_28368 = cljs.core.count.call(null,inst_28366);
var inst_28369 = (inst_28368 > (0));
var state_28394__$1 = state_28394;
if(cljs.core.truth_(inst_28369)){
var statearr_28403_28427 = state_28394__$1;
(statearr_28403_28427[(1)] = (4));

} else {
var statearr_28404_28428 = state_28394__$1;
(statearr_28404_28428[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (11))){
var inst_28366 = (state_28394[(10)]);
var inst_28383 = (state_28394[(2)]);
var tmp28402 = inst_28366;
var inst_28366__$1 = tmp28402;
var state_28394__$1 = (function (){var statearr_28405 = state_28394;
(statearr_28405[(10)] = inst_28366__$1);

(statearr_28405[(11)] = inst_28383);

return statearr_28405;
})();
var statearr_28406_28429 = state_28394__$1;
(statearr_28406_28429[(2)] = null);

(statearr_28406_28429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (9))){
var inst_28374 = (state_28394[(8)]);
var state_28394__$1 = state_28394;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28394__$1,(11),out,inst_28374);
} else {
if((state_val_28395 === (5))){
var inst_28388 = cljs.core.async.close_BANG_.call(null,out);
var state_28394__$1 = state_28394;
var statearr_28407_28430 = state_28394__$1;
(statearr_28407_28430[(2)] = inst_28388);

(statearr_28407_28430[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (10))){
var inst_28386 = (state_28394[(2)]);
var state_28394__$1 = state_28394;
var statearr_28408_28431 = state_28394__$1;
(statearr_28408_28431[(2)] = inst_28386);

(statearr_28408_28431[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28395 === (8))){
var inst_28366 = (state_28394[(10)]);
var inst_28373 = (state_28394[(7)]);
var inst_28375 = (state_28394[(9)]);
var inst_28374 = (state_28394[(8)]);
var inst_28378 = (function (){var cs = inst_28366;
var vec__28371 = inst_28373;
var v = inst_28374;
var c = inst_28375;
return ((function (cs,vec__28371,v,c,inst_28366,inst_28373,inst_28375,inst_28374,state_val_28395,c__19483__auto___28422,out){
return (function (p1__28361_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__28361_SHARP_);
});
;})(cs,vec__28371,v,c,inst_28366,inst_28373,inst_28375,inst_28374,state_val_28395,c__19483__auto___28422,out))
})();
var inst_28379 = cljs.core.filterv.call(null,inst_28378,inst_28366);
var inst_28366__$1 = inst_28379;
var state_28394__$1 = (function (){var statearr_28409 = state_28394;
(statearr_28409[(10)] = inst_28366__$1);

return statearr_28409;
})();
var statearr_28410_28432 = state_28394__$1;
(statearr_28410_28432[(2)] = null);

(statearr_28410_28432[(1)] = (2));


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
});})(c__19483__auto___28422,out))
;
return ((function (switch__19418__auto__,c__19483__auto___28422,out){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_28414 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28414[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_28414[(1)] = (1));

return statearr_28414;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_28394){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28394);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28415){if((e28415 instanceof Object)){
var ex__19422__auto__ = e28415;
var statearr_28416_28433 = state_28394;
(statearr_28416_28433[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28394);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28415;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28434 = state_28394;
state_28394 = G__28434;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_28394){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_28394);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28422,out))
})();
var state__19485__auto__ = (function (){var statearr_28417 = f__19484__auto__.call(null);
(statearr_28417[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28422);

return statearr_28417;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28422,out))
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
var args28435 = [];
var len__17378__auto___28484 = arguments.length;
var i__17379__auto___28485 = (0);
while(true){
if((i__17379__auto___28485 < len__17378__auto___28484)){
args28435.push((arguments[i__17379__auto___28485]));

var G__28486 = (i__17379__auto___28485 + (1));
i__17379__auto___28485 = G__28486;
continue;
} else {
}
break;
}

var G__28437 = args28435.length;
switch (G__28437) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28435.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19483__auto___28488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28488,out){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28488,out){
return (function (state_28461){
var state_val_28462 = (state_28461[(1)]);
if((state_val_28462 === (7))){
var inst_28443 = (state_28461[(7)]);
var inst_28443__$1 = (state_28461[(2)]);
var inst_28444 = (inst_28443__$1 == null);
var inst_28445 = cljs.core.not.call(null,inst_28444);
var state_28461__$1 = (function (){var statearr_28463 = state_28461;
(statearr_28463[(7)] = inst_28443__$1);

return statearr_28463;
})();
if(inst_28445){
var statearr_28464_28489 = state_28461__$1;
(statearr_28464_28489[(1)] = (8));

} else {
var statearr_28465_28490 = state_28461__$1;
(statearr_28465_28490[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (1))){
var inst_28438 = (0);
var state_28461__$1 = (function (){var statearr_28466 = state_28461;
(statearr_28466[(8)] = inst_28438);

return statearr_28466;
})();
var statearr_28467_28491 = state_28461__$1;
(statearr_28467_28491[(2)] = null);

(statearr_28467_28491[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (4))){
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28461__$1,(7),ch);
} else {
if((state_val_28462 === (6))){
var inst_28456 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28468_28492 = state_28461__$1;
(statearr_28468_28492[(2)] = inst_28456);

(statearr_28468_28492[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (3))){
var inst_28458 = (state_28461[(2)]);
var inst_28459 = cljs.core.async.close_BANG_.call(null,out);
var state_28461__$1 = (function (){var statearr_28469 = state_28461;
(statearr_28469[(9)] = inst_28458);

return statearr_28469;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28461__$1,inst_28459);
} else {
if((state_val_28462 === (2))){
var inst_28438 = (state_28461[(8)]);
var inst_28440 = (inst_28438 < n);
var state_28461__$1 = state_28461;
if(cljs.core.truth_(inst_28440)){
var statearr_28470_28493 = state_28461__$1;
(statearr_28470_28493[(1)] = (4));

} else {
var statearr_28471_28494 = state_28461__$1;
(statearr_28471_28494[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (11))){
var inst_28438 = (state_28461[(8)]);
var inst_28448 = (state_28461[(2)]);
var inst_28449 = (inst_28438 + (1));
var inst_28438__$1 = inst_28449;
var state_28461__$1 = (function (){var statearr_28472 = state_28461;
(statearr_28472[(10)] = inst_28448);

(statearr_28472[(8)] = inst_28438__$1);

return statearr_28472;
})();
var statearr_28473_28495 = state_28461__$1;
(statearr_28473_28495[(2)] = null);

(statearr_28473_28495[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (9))){
var state_28461__$1 = state_28461;
var statearr_28474_28496 = state_28461__$1;
(statearr_28474_28496[(2)] = null);

(statearr_28474_28496[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (5))){
var state_28461__$1 = state_28461;
var statearr_28475_28497 = state_28461__$1;
(statearr_28475_28497[(2)] = null);

(statearr_28475_28497[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (10))){
var inst_28453 = (state_28461[(2)]);
var state_28461__$1 = state_28461;
var statearr_28476_28498 = state_28461__$1;
(statearr_28476_28498[(2)] = inst_28453);

(statearr_28476_28498[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28462 === (8))){
var inst_28443 = (state_28461[(7)]);
var state_28461__$1 = state_28461;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28461__$1,(11),out,inst_28443);
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
});})(c__19483__auto___28488,out))
;
return ((function (switch__19418__auto__,c__19483__auto___28488,out){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_28480 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28480[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_28480[(1)] = (1));

return statearr_28480;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_28461){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28461);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28481){if((e28481 instanceof Object)){
var ex__19422__auto__ = e28481;
var statearr_28482_28499 = state_28461;
(statearr_28482_28499[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28481;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28500 = state_28461;
state_28461 = G__28500;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_28461){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_28461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28488,out))
})();
var state__19485__auto__ = (function (){var statearr_28483 = f__19484__auto__.call(null);
(statearr_28483[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28488);

return statearr_28483;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28488,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28508 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28508 = (function (map_LT_,f,ch,meta28509){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28509 = meta28509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28510,meta28509__$1){
var self__ = this;
var _28510__$1 = this;
return (new cljs.core.async.t_cljs$core$async28508(self__.map_LT_,self__.f,self__.ch,meta28509__$1));
});

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28510){
var self__ = this;
var _28510__$1 = this;
return self__.meta28509;
});

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async28511 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28511 = (function (map_LT_,f,ch,meta28509,_,fn1,meta28512){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta28509 = meta28509;
this._ = _;
this.fn1 = fn1;
this.meta28512 = meta28512;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28511.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_28513,meta28512__$1){
var self__ = this;
var _28513__$1 = this;
return (new cljs.core.async.t_cljs$core$async28511(self__.map_LT_,self__.f,self__.ch,self__.meta28509,self__._,self__.fn1,meta28512__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async28511.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_28513){
var self__ = this;
var _28513__$1 = this;
return self__.meta28512;
});})(___$1))
;

cljs.core.async.t_cljs$core$async28511.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async28511.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28511.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__28501_SHARP_){
return f1.call(null,(((p1__28501_SHARP_ == null))?null:self__.f.call(null,p1__28501_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async28511.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28509","meta28509",-385552865,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async28508","cljs.core.async/t_cljs$core$async28508",1935057097,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta28512","meta28512",1257775517,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async28511.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28511.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28511";

cljs.core.async.t_cljs$core$async28511.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28511");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async28511 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28511(map_LT___$1,f__$1,ch__$1,meta28509__$1,___$2,fn1__$1,meta28512){
return (new cljs.core.async.t_cljs$core$async28511(map_LT___$1,f__$1,ch__$1,meta28509__$1,___$2,fn1__$1,meta28512));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async28511(self__.map_LT_,self__.f,self__.ch,self__.meta28509,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28508.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async28508.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28509","meta28509",-385552865,null)], null);
});

cljs.core.async.t_cljs$core$async28508.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28508.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28508";

cljs.core.async.t_cljs$core$async28508.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28508");
});

cljs.core.async.__GT_t_cljs$core$async28508 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async28508(map_LT___$1,f__$1,ch__$1,meta28509){
return (new cljs.core.async.t_cljs$core$async28508(map_LT___$1,f__$1,ch__$1,meta28509));
});

}

return (new cljs.core.async.t_cljs$core$async28508(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async28517 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28517 = (function (map_GT_,f,ch,meta28518){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta28518 = meta28518;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28519,meta28518__$1){
var self__ = this;
var _28519__$1 = this;
return (new cljs.core.async.t_cljs$core$async28517(self__.map_GT_,self__.f,self__.ch,meta28518__$1));
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28519){
var self__ = this;
var _28519__$1 = this;
return self__.meta28518;
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28517.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async28517.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28518","meta28518",810835886,null)], null);
});

cljs.core.async.t_cljs$core$async28517.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28517.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28517";

cljs.core.async.t_cljs$core$async28517.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28517");
});

cljs.core.async.__GT_t_cljs$core$async28517 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async28517(map_GT___$1,f__$1,ch__$1,meta28518){
return (new cljs.core.async.t_cljs$core$async28517(map_GT___$1,f__$1,ch__$1,meta28518));
});

}

return (new cljs.core.async.t_cljs$core$async28517(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async28523 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28523 = (function (filter_GT_,p,ch,meta28524){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta28524 = meta28524;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28525,meta28524__$1){
var self__ = this;
var _28525__$1 = this;
return (new cljs.core.async.t_cljs$core$async28523(self__.filter_GT_,self__.p,self__.ch,meta28524__$1));
});

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28525){
var self__ = this;
var _28525__$1 = this;
return self__.meta28524;
});

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async28523.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async28523.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta28524","meta28524",-262256188,null)], null);
});

cljs.core.async.t_cljs$core$async28523.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async28523.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28523";

cljs.core.async.t_cljs$core$async28523.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async28523");
});

cljs.core.async.__GT_t_cljs$core$async28523 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async28523(filter_GT___$1,p__$1,ch__$1,meta28524){
return (new cljs.core.async.t_cljs$core$async28523(filter_GT___$1,p__$1,ch__$1,meta28524));
});

}

return (new cljs.core.async.t_cljs$core$async28523(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args28526 = [];
var len__17378__auto___28570 = arguments.length;
var i__17379__auto___28571 = (0);
while(true){
if((i__17379__auto___28571 < len__17378__auto___28570)){
args28526.push((arguments[i__17379__auto___28571]));

var G__28572 = (i__17379__auto___28571 + (1));
i__17379__auto___28571 = G__28572;
continue;
} else {
}
break;
}

var G__28528 = args28526.length;
switch (G__28528) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28526.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19483__auto___28574 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28574,out){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28574,out){
return (function (state_28549){
var state_val_28550 = (state_28549[(1)]);
if((state_val_28550 === (7))){
var inst_28545 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28551_28575 = state_28549__$1;
(statearr_28551_28575[(2)] = inst_28545);

(statearr_28551_28575[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (1))){
var state_28549__$1 = state_28549;
var statearr_28552_28576 = state_28549__$1;
(statearr_28552_28576[(2)] = null);

(statearr_28552_28576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (4))){
var inst_28531 = (state_28549[(7)]);
var inst_28531__$1 = (state_28549[(2)]);
var inst_28532 = (inst_28531__$1 == null);
var state_28549__$1 = (function (){var statearr_28553 = state_28549;
(statearr_28553[(7)] = inst_28531__$1);

return statearr_28553;
})();
if(cljs.core.truth_(inst_28532)){
var statearr_28554_28577 = state_28549__$1;
(statearr_28554_28577[(1)] = (5));

} else {
var statearr_28555_28578 = state_28549__$1;
(statearr_28555_28578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (6))){
var inst_28531 = (state_28549[(7)]);
var inst_28536 = p.call(null,inst_28531);
var state_28549__$1 = state_28549;
if(cljs.core.truth_(inst_28536)){
var statearr_28556_28579 = state_28549__$1;
(statearr_28556_28579[(1)] = (8));

} else {
var statearr_28557_28580 = state_28549__$1;
(statearr_28557_28580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (3))){
var inst_28547 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28549__$1,inst_28547);
} else {
if((state_val_28550 === (2))){
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28549__$1,(4),ch);
} else {
if((state_val_28550 === (11))){
var inst_28539 = (state_28549[(2)]);
var state_28549__$1 = state_28549;
var statearr_28558_28581 = state_28549__$1;
(statearr_28558_28581[(2)] = inst_28539);

(statearr_28558_28581[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (9))){
var state_28549__$1 = state_28549;
var statearr_28559_28582 = state_28549__$1;
(statearr_28559_28582[(2)] = null);

(statearr_28559_28582[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (5))){
var inst_28534 = cljs.core.async.close_BANG_.call(null,out);
var state_28549__$1 = state_28549;
var statearr_28560_28583 = state_28549__$1;
(statearr_28560_28583[(2)] = inst_28534);

(statearr_28560_28583[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (10))){
var inst_28542 = (state_28549[(2)]);
var state_28549__$1 = (function (){var statearr_28561 = state_28549;
(statearr_28561[(8)] = inst_28542);

return statearr_28561;
})();
var statearr_28562_28584 = state_28549__$1;
(statearr_28562_28584[(2)] = null);

(statearr_28562_28584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28550 === (8))){
var inst_28531 = (state_28549[(7)]);
var state_28549__$1 = state_28549;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28549__$1,(11),out,inst_28531);
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
});})(c__19483__auto___28574,out))
;
return ((function (switch__19418__auto__,c__19483__auto___28574,out){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_28566 = [null,null,null,null,null,null,null,null,null];
(statearr_28566[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_28566[(1)] = (1));

return statearr_28566;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_28549){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28549);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28567){if((e28567 instanceof Object)){
var ex__19422__auto__ = e28567;
var statearr_28568_28585 = state_28549;
(statearr_28568_28585[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28549);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28586 = state_28549;
state_28549 = G__28586;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_28549){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_28549);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28574,out))
})();
var state__19485__auto__ = (function (){var statearr_28569 = f__19484__auto__.call(null);
(statearr_28569[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28574);

return statearr_28569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28574,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args28587 = [];
var len__17378__auto___28590 = arguments.length;
var i__17379__auto___28591 = (0);
while(true){
if((i__17379__auto___28591 < len__17378__auto___28590)){
args28587.push((arguments[i__17379__auto___28591]));

var G__28592 = (i__17379__auto___28591 + (1));
i__17379__auto___28591 = G__28592;
continue;
} else {
}
break;
}

var G__28589 = args28587.length;
switch (G__28589) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28587.length)].join('')));

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
var c__19483__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto__){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto__){
return (function (state_28759){
var state_val_28760 = (state_28759[(1)]);
if((state_val_28760 === (7))){
var inst_28755 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28761_28802 = state_28759__$1;
(statearr_28761_28802[(2)] = inst_28755);

(statearr_28761_28802[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (20))){
var inst_28725 = (state_28759[(7)]);
var inst_28736 = (state_28759[(2)]);
var inst_28737 = cljs.core.next.call(null,inst_28725);
var inst_28711 = inst_28737;
var inst_28712 = null;
var inst_28713 = (0);
var inst_28714 = (0);
var state_28759__$1 = (function (){var statearr_28762 = state_28759;
(statearr_28762[(8)] = inst_28713);

(statearr_28762[(9)] = inst_28714);

(statearr_28762[(10)] = inst_28736);

(statearr_28762[(11)] = inst_28711);

(statearr_28762[(12)] = inst_28712);

return statearr_28762;
})();
var statearr_28763_28803 = state_28759__$1;
(statearr_28763_28803[(2)] = null);

(statearr_28763_28803[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (1))){
var state_28759__$1 = state_28759;
var statearr_28764_28804 = state_28759__$1;
(statearr_28764_28804[(2)] = null);

(statearr_28764_28804[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (4))){
var inst_28700 = (state_28759[(13)]);
var inst_28700__$1 = (state_28759[(2)]);
var inst_28701 = (inst_28700__$1 == null);
var state_28759__$1 = (function (){var statearr_28765 = state_28759;
(statearr_28765[(13)] = inst_28700__$1);

return statearr_28765;
})();
if(cljs.core.truth_(inst_28701)){
var statearr_28766_28805 = state_28759__$1;
(statearr_28766_28805[(1)] = (5));

} else {
var statearr_28767_28806 = state_28759__$1;
(statearr_28767_28806[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (15))){
var state_28759__$1 = state_28759;
var statearr_28771_28807 = state_28759__$1;
(statearr_28771_28807[(2)] = null);

(statearr_28771_28807[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (21))){
var state_28759__$1 = state_28759;
var statearr_28772_28808 = state_28759__$1;
(statearr_28772_28808[(2)] = null);

(statearr_28772_28808[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (13))){
var inst_28713 = (state_28759[(8)]);
var inst_28714 = (state_28759[(9)]);
var inst_28711 = (state_28759[(11)]);
var inst_28712 = (state_28759[(12)]);
var inst_28721 = (state_28759[(2)]);
var inst_28722 = (inst_28714 + (1));
var tmp28768 = inst_28713;
var tmp28769 = inst_28711;
var tmp28770 = inst_28712;
var inst_28711__$1 = tmp28769;
var inst_28712__$1 = tmp28770;
var inst_28713__$1 = tmp28768;
var inst_28714__$1 = inst_28722;
var state_28759__$1 = (function (){var statearr_28773 = state_28759;
(statearr_28773[(14)] = inst_28721);

(statearr_28773[(8)] = inst_28713__$1);

(statearr_28773[(9)] = inst_28714__$1);

(statearr_28773[(11)] = inst_28711__$1);

(statearr_28773[(12)] = inst_28712__$1);

return statearr_28773;
})();
var statearr_28774_28809 = state_28759__$1;
(statearr_28774_28809[(2)] = null);

(statearr_28774_28809[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (22))){
var state_28759__$1 = state_28759;
var statearr_28775_28810 = state_28759__$1;
(statearr_28775_28810[(2)] = null);

(statearr_28775_28810[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (6))){
var inst_28700 = (state_28759[(13)]);
var inst_28709 = f.call(null,inst_28700);
var inst_28710 = cljs.core.seq.call(null,inst_28709);
var inst_28711 = inst_28710;
var inst_28712 = null;
var inst_28713 = (0);
var inst_28714 = (0);
var state_28759__$1 = (function (){var statearr_28776 = state_28759;
(statearr_28776[(8)] = inst_28713);

(statearr_28776[(9)] = inst_28714);

(statearr_28776[(11)] = inst_28711);

(statearr_28776[(12)] = inst_28712);

return statearr_28776;
})();
var statearr_28777_28811 = state_28759__$1;
(statearr_28777_28811[(2)] = null);

(statearr_28777_28811[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (17))){
var inst_28725 = (state_28759[(7)]);
var inst_28729 = cljs.core.chunk_first.call(null,inst_28725);
var inst_28730 = cljs.core.chunk_rest.call(null,inst_28725);
var inst_28731 = cljs.core.count.call(null,inst_28729);
var inst_28711 = inst_28730;
var inst_28712 = inst_28729;
var inst_28713 = inst_28731;
var inst_28714 = (0);
var state_28759__$1 = (function (){var statearr_28778 = state_28759;
(statearr_28778[(8)] = inst_28713);

(statearr_28778[(9)] = inst_28714);

(statearr_28778[(11)] = inst_28711);

(statearr_28778[(12)] = inst_28712);

return statearr_28778;
})();
var statearr_28779_28812 = state_28759__$1;
(statearr_28779_28812[(2)] = null);

(statearr_28779_28812[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (3))){
var inst_28757 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28759__$1,inst_28757);
} else {
if((state_val_28760 === (12))){
var inst_28745 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28780_28813 = state_28759__$1;
(statearr_28780_28813[(2)] = inst_28745);

(statearr_28780_28813[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (2))){
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28759__$1,(4),in$);
} else {
if((state_val_28760 === (23))){
var inst_28753 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28781_28814 = state_28759__$1;
(statearr_28781_28814[(2)] = inst_28753);

(statearr_28781_28814[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (19))){
var inst_28740 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28782_28815 = state_28759__$1;
(statearr_28782_28815[(2)] = inst_28740);

(statearr_28782_28815[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (11))){
var inst_28725 = (state_28759[(7)]);
var inst_28711 = (state_28759[(11)]);
var inst_28725__$1 = cljs.core.seq.call(null,inst_28711);
var state_28759__$1 = (function (){var statearr_28783 = state_28759;
(statearr_28783[(7)] = inst_28725__$1);

return statearr_28783;
})();
if(inst_28725__$1){
var statearr_28784_28816 = state_28759__$1;
(statearr_28784_28816[(1)] = (14));

} else {
var statearr_28785_28817 = state_28759__$1;
(statearr_28785_28817[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (9))){
var inst_28747 = (state_28759[(2)]);
var inst_28748 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_28759__$1 = (function (){var statearr_28786 = state_28759;
(statearr_28786[(15)] = inst_28747);

return statearr_28786;
})();
if(cljs.core.truth_(inst_28748)){
var statearr_28787_28818 = state_28759__$1;
(statearr_28787_28818[(1)] = (21));

} else {
var statearr_28788_28819 = state_28759__$1;
(statearr_28788_28819[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (5))){
var inst_28703 = cljs.core.async.close_BANG_.call(null,out);
var state_28759__$1 = state_28759;
var statearr_28789_28820 = state_28759__$1;
(statearr_28789_28820[(2)] = inst_28703);

(statearr_28789_28820[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (14))){
var inst_28725 = (state_28759[(7)]);
var inst_28727 = cljs.core.chunked_seq_QMARK_.call(null,inst_28725);
var state_28759__$1 = state_28759;
if(inst_28727){
var statearr_28790_28821 = state_28759__$1;
(statearr_28790_28821[(1)] = (17));

} else {
var statearr_28791_28822 = state_28759__$1;
(statearr_28791_28822[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (16))){
var inst_28743 = (state_28759[(2)]);
var state_28759__$1 = state_28759;
var statearr_28792_28823 = state_28759__$1;
(statearr_28792_28823[(2)] = inst_28743);

(statearr_28792_28823[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28760 === (10))){
var inst_28714 = (state_28759[(9)]);
var inst_28712 = (state_28759[(12)]);
var inst_28719 = cljs.core._nth.call(null,inst_28712,inst_28714);
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28759__$1,(13),out,inst_28719);
} else {
if((state_val_28760 === (18))){
var inst_28725 = (state_28759[(7)]);
var inst_28734 = cljs.core.first.call(null,inst_28725);
var state_28759__$1 = state_28759;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28759__$1,(20),out,inst_28734);
} else {
if((state_val_28760 === (8))){
var inst_28713 = (state_28759[(8)]);
var inst_28714 = (state_28759[(9)]);
var inst_28716 = (inst_28714 < inst_28713);
var inst_28717 = inst_28716;
var state_28759__$1 = state_28759;
if(cljs.core.truth_(inst_28717)){
var statearr_28793_28824 = state_28759__$1;
(statearr_28793_28824[(1)] = (10));

} else {
var statearr_28794_28825 = state_28759__$1;
(statearr_28794_28825[(1)] = (11));

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
});})(c__19483__auto__))
;
return ((function (switch__19418__auto__,c__19483__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19419__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19419__auto____0 = (function (){
var statearr_28798 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28798[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19419__auto__);

(statearr_28798[(1)] = (1));

return statearr_28798;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19419__auto____1 = (function (state_28759){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28759);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28799){if((e28799 instanceof Object)){
var ex__19422__auto__ = e28799;
var statearr_28800_28826 = state_28759;
(statearr_28800_28826[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28759);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28799;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28827 = state_28759;
state_28759 = G__28827;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19419__auto__ = function(state_28759){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19419__auto____1.call(this,state_28759);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19419__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19419__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto__))
})();
var state__19485__auto__ = (function (){var statearr_28801 = f__19484__auto__.call(null);
(statearr_28801[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto__);

return statearr_28801;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto__))
);

return c__19483__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args28828 = [];
var len__17378__auto___28831 = arguments.length;
var i__17379__auto___28832 = (0);
while(true){
if((i__17379__auto___28832 < len__17378__auto___28831)){
args28828.push((arguments[i__17379__auto___28832]));

var G__28833 = (i__17379__auto___28832 + (1));
i__17379__auto___28832 = G__28833;
continue;
} else {
}
break;
}

var G__28830 = args28828.length;
switch (G__28830) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28828.length)].join('')));

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
var args28835 = [];
var len__17378__auto___28838 = arguments.length;
var i__17379__auto___28839 = (0);
while(true){
if((i__17379__auto___28839 < len__17378__auto___28838)){
args28835.push((arguments[i__17379__auto___28839]));

var G__28840 = (i__17379__auto___28839 + (1));
i__17379__auto___28839 = G__28840;
continue;
} else {
}
break;
}

var G__28837 = args28835.length;
switch (G__28837) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28835.length)].join('')));

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
var args28842 = [];
var len__17378__auto___28893 = arguments.length;
var i__17379__auto___28894 = (0);
while(true){
if((i__17379__auto___28894 < len__17378__auto___28893)){
args28842.push((arguments[i__17379__auto___28894]));

var G__28895 = (i__17379__auto___28894 + (1));
i__17379__auto___28894 = G__28895;
continue;
} else {
}
break;
}

var G__28844 = args28842.length;
switch (G__28844) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28842.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19483__auto___28897 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28897,out){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28897,out){
return (function (state_28868){
var state_val_28869 = (state_28868[(1)]);
if((state_val_28869 === (7))){
var inst_28863 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28870_28898 = state_28868__$1;
(statearr_28870_28898[(2)] = inst_28863);

(statearr_28870_28898[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (1))){
var inst_28845 = null;
var state_28868__$1 = (function (){var statearr_28871 = state_28868;
(statearr_28871[(7)] = inst_28845);

return statearr_28871;
})();
var statearr_28872_28899 = state_28868__$1;
(statearr_28872_28899[(2)] = null);

(statearr_28872_28899[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (4))){
var inst_28848 = (state_28868[(8)]);
var inst_28848__$1 = (state_28868[(2)]);
var inst_28849 = (inst_28848__$1 == null);
var inst_28850 = cljs.core.not.call(null,inst_28849);
var state_28868__$1 = (function (){var statearr_28873 = state_28868;
(statearr_28873[(8)] = inst_28848__$1);

return statearr_28873;
})();
if(inst_28850){
var statearr_28874_28900 = state_28868__$1;
(statearr_28874_28900[(1)] = (5));

} else {
var statearr_28875_28901 = state_28868__$1;
(statearr_28875_28901[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (6))){
var state_28868__$1 = state_28868;
var statearr_28876_28902 = state_28868__$1;
(statearr_28876_28902[(2)] = null);

(statearr_28876_28902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (3))){
var inst_28865 = (state_28868[(2)]);
var inst_28866 = cljs.core.async.close_BANG_.call(null,out);
var state_28868__$1 = (function (){var statearr_28877 = state_28868;
(statearr_28877[(9)] = inst_28865);

return statearr_28877;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28868__$1,inst_28866);
} else {
if((state_val_28869 === (2))){
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28868__$1,(4),ch);
} else {
if((state_val_28869 === (11))){
var inst_28848 = (state_28868[(8)]);
var inst_28857 = (state_28868[(2)]);
var inst_28845 = inst_28848;
var state_28868__$1 = (function (){var statearr_28878 = state_28868;
(statearr_28878[(10)] = inst_28857);

(statearr_28878[(7)] = inst_28845);

return statearr_28878;
})();
var statearr_28879_28903 = state_28868__$1;
(statearr_28879_28903[(2)] = null);

(statearr_28879_28903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (9))){
var inst_28848 = (state_28868[(8)]);
var state_28868__$1 = state_28868;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28868__$1,(11),out,inst_28848);
} else {
if((state_val_28869 === (5))){
var inst_28848 = (state_28868[(8)]);
var inst_28845 = (state_28868[(7)]);
var inst_28852 = cljs.core._EQ_.call(null,inst_28848,inst_28845);
var state_28868__$1 = state_28868;
if(inst_28852){
var statearr_28881_28904 = state_28868__$1;
(statearr_28881_28904[(1)] = (8));

} else {
var statearr_28882_28905 = state_28868__$1;
(statearr_28882_28905[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (10))){
var inst_28860 = (state_28868[(2)]);
var state_28868__$1 = state_28868;
var statearr_28883_28906 = state_28868__$1;
(statearr_28883_28906[(2)] = inst_28860);

(statearr_28883_28906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28869 === (8))){
var inst_28845 = (state_28868[(7)]);
var tmp28880 = inst_28845;
var inst_28845__$1 = tmp28880;
var state_28868__$1 = (function (){var statearr_28884 = state_28868;
(statearr_28884[(7)] = inst_28845__$1);

return statearr_28884;
})();
var statearr_28885_28907 = state_28868__$1;
(statearr_28885_28907[(2)] = null);

(statearr_28885_28907[(1)] = (2));


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
});})(c__19483__auto___28897,out))
;
return ((function (switch__19418__auto__,c__19483__auto___28897,out){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_28889 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_28889[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_28889[(1)] = (1));

return statearr_28889;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_28868){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28868);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28890){if((e28890 instanceof Object)){
var ex__19422__auto__ = e28890;
var statearr_28891_28908 = state_28868;
(statearr_28891_28908[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28868);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28890;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__28909 = state_28868;
state_28868 = G__28909;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_28868){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_28868);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28897,out))
})();
var state__19485__auto__ = (function (){var statearr_28892 = f__19484__auto__.call(null);
(statearr_28892[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28897);

return statearr_28892;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28897,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args28910 = [];
var len__17378__auto___28980 = arguments.length;
var i__17379__auto___28981 = (0);
while(true){
if((i__17379__auto___28981 < len__17378__auto___28980)){
args28910.push((arguments[i__17379__auto___28981]));

var G__28982 = (i__17379__auto___28981 + (1));
i__17379__auto___28981 = G__28982;
continue;
} else {
}
break;
}

var G__28912 = args28910.length;
switch (G__28912) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args28910.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19483__auto___28984 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___28984,out){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___28984,out){
return (function (state_28950){
var state_val_28951 = (state_28950[(1)]);
if((state_val_28951 === (7))){
var inst_28946 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28952_28985 = state_28950__$1;
(statearr_28952_28985[(2)] = inst_28946);

(statearr_28952_28985[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (1))){
var inst_28913 = (new Array(n));
var inst_28914 = inst_28913;
var inst_28915 = (0);
var state_28950__$1 = (function (){var statearr_28953 = state_28950;
(statearr_28953[(7)] = inst_28914);

(statearr_28953[(8)] = inst_28915);

return statearr_28953;
})();
var statearr_28954_28986 = state_28950__$1;
(statearr_28954_28986[(2)] = null);

(statearr_28954_28986[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (4))){
var inst_28918 = (state_28950[(9)]);
var inst_28918__$1 = (state_28950[(2)]);
var inst_28919 = (inst_28918__$1 == null);
var inst_28920 = cljs.core.not.call(null,inst_28919);
var state_28950__$1 = (function (){var statearr_28955 = state_28950;
(statearr_28955[(9)] = inst_28918__$1);

return statearr_28955;
})();
if(inst_28920){
var statearr_28956_28987 = state_28950__$1;
(statearr_28956_28987[(1)] = (5));

} else {
var statearr_28957_28988 = state_28950__$1;
(statearr_28957_28988[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (15))){
var inst_28940 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28958_28989 = state_28950__$1;
(statearr_28958_28989[(2)] = inst_28940);

(statearr_28958_28989[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (13))){
var state_28950__$1 = state_28950;
var statearr_28959_28990 = state_28950__$1;
(statearr_28959_28990[(2)] = null);

(statearr_28959_28990[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (6))){
var inst_28915 = (state_28950[(8)]);
var inst_28936 = (inst_28915 > (0));
var state_28950__$1 = state_28950;
if(cljs.core.truth_(inst_28936)){
var statearr_28960_28991 = state_28950__$1;
(statearr_28960_28991[(1)] = (12));

} else {
var statearr_28961_28992 = state_28950__$1;
(statearr_28961_28992[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (3))){
var inst_28948 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_28950__$1,inst_28948);
} else {
if((state_val_28951 === (12))){
var inst_28914 = (state_28950[(7)]);
var inst_28938 = cljs.core.vec.call(null,inst_28914);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28950__$1,(15),out,inst_28938);
} else {
if((state_val_28951 === (2))){
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_28950__$1,(4),ch);
} else {
if((state_val_28951 === (11))){
var inst_28930 = (state_28950[(2)]);
var inst_28931 = (new Array(n));
var inst_28914 = inst_28931;
var inst_28915 = (0);
var state_28950__$1 = (function (){var statearr_28962 = state_28950;
(statearr_28962[(7)] = inst_28914);

(statearr_28962[(8)] = inst_28915);

(statearr_28962[(10)] = inst_28930);

return statearr_28962;
})();
var statearr_28963_28993 = state_28950__$1;
(statearr_28963_28993[(2)] = null);

(statearr_28963_28993[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (9))){
var inst_28914 = (state_28950[(7)]);
var inst_28928 = cljs.core.vec.call(null,inst_28914);
var state_28950__$1 = state_28950;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_28950__$1,(11),out,inst_28928);
} else {
if((state_val_28951 === (5))){
var inst_28914 = (state_28950[(7)]);
var inst_28923 = (state_28950[(11)]);
var inst_28915 = (state_28950[(8)]);
var inst_28918 = (state_28950[(9)]);
var inst_28922 = (inst_28914[inst_28915] = inst_28918);
var inst_28923__$1 = (inst_28915 + (1));
var inst_28924 = (inst_28923__$1 < n);
var state_28950__$1 = (function (){var statearr_28964 = state_28950;
(statearr_28964[(11)] = inst_28923__$1);

(statearr_28964[(12)] = inst_28922);

return statearr_28964;
})();
if(cljs.core.truth_(inst_28924)){
var statearr_28965_28994 = state_28950__$1;
(statearr_28965_28994[(1)] = (8));

} else {
var statearr_28966_28995 = state_28950__$1;
(statearr_28966_28995[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (14))){
var inst_28943 = (state_28950[(2)]);
var inst_28944 = cljs.core.async.close_BANG_.call(null,out);
var state_28950__$1 = (function (){var statearr_28968 = state_28950;
(statearr_28968[(13)] = inst_28943);

return statearr_28968;
})();
var statearr_28969_28996 = state_28950__$1;
(statearr_28969_28996[(2)] = inst_28944);

(statearr_28969_28996[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (10))){
var inst_28934 = (state_28950[(2)]);
var state_28950__$1 = state_28950;
var statearr_28970_28997 = state_28950__$1;
(statearr_28970_28997[(2)] = inst_28934);

(statearr_28970_28997[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_28951 === (8))){
var inst_28914 = (state_28950[(7)]);
var inst_28923 = (state_28950[(11)]);
var tmp28967 = inst_28914;
var inst_28914__$1 = tmp28967;
var inst_28915 = inst_28923;
var state_28950__$1 = (function (){var statearr_28971 = state_28950;
(statearr_28971[(7)] = inst_28914__$1);

(statearr_28971[(8)] = inst_28915);

return statearr_28971;
})();
var statearr_28972_28998 = state_28950__$1;
(statearr_28972_28998[(2)] = null);

(statearr_28972_28998[(1)] = (2));


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
});})(c__19483__auto___28984,out))
;
return ((function (switch__19418__auto__,c__19483__auto___28984,out){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_28976 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_28976[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_28976[(1)] = (1));

return statearr_28976;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_28950){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_28950);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e28977){if((e28977 instanceof Object)){
var ex__19422__auto__ = e28977;
var statearr_28978_28999 = state_28950;
(statearr_28978_28999[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_28950);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e28977;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29000 = state_28950;
state_28950 = G__29000;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_28950){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_28950);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___28984,out))
})();
var state__19485__auto__ = (function (){var statearr_28979 = f__19484__auto__.call(null);
(statearr_28979[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___28984);

return statearr_28979;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___28984,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args29001 = [];
var len__17378__auto___29075 = arguments.length;
var i__17379__auto___29076 = (0);
while(true){
if((i__17379__auto___29076 < len__17378__auto___29075)){
args29001.push((arguments[i__17379__auto___29076]));

var G__29077 = (i__17379__auto___29076 + (1));
i__17379__auto___29076 = G__29077;
continue;
} else {
}
break;
}

var G__29003 = args29001.length;
switch (G__29003) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args29001.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19483__auto___29079 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19483__auto___29079,out){
return (function (){
var f__19484__auto__ = (function (){var switch__19418__auto__ = ((function (c__19483__auto___29079,out){
return (function (state_29045){
var state_val_29046 = (state_29045[(1)]);
if((state_val_29046 === (7))){
var inst_29041 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29047_29080 = state_29045__$1;
(statearr_29047_29080[(2)] = inst_29041);

(statearr_29047_29080[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (1))){
var inst_29004 = [];
var inst_29005 = inst_29004;
var inst_29006 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_29045__$1 = (function (){var statearr_29048 = state_29045;
(statearr_29048[(7)] = inst_29005);

(statearr_29048[(8)] = inst_29006);

return statearr_29048;
})();
var statearr_29049_29081 = state_29045__$1;
(statearr_29049_29081[(2)] = null);

(statearr_29049_29081[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (4))){
var inst_29009 = (state_29045[(9)]);
var inst_29009__$1 = (state_29045[(2)]);
var inst_29010 = (inst_29009__$1 == null);
var inst_29011 = cljs.core.not.call(null,inst_29010);
var state_29045__$1 = (function (){var statearr_29050 = state_29045;
(statearr_29050[(9)] = inst_29009__$1);

return statearr_29050;
})();
if(inst_29011){
var statearr_29051_29082 = state_29045__$1;
(statearr_29051_29082[(1)] = (5));

} else {
var statearr_29052_29083 = state_29045__$1;
(statearr_29052_29083[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (15))){
var inst_29035 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29053_29084 = state_29045__$1;
(statearr_29053_29084[(2)] = inst_29035);

(statearr_29053_29084[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (13))){
var state_29045__$1 = state_29045;
var statearr_29054_29085 = state_29045__$1;
(statearr_29054_29085[(2)] = null);

(statearr_29054_29085[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (6))){
var inst_29005 = (state_29045[(7)]);
var inst_29030 = inst_29005.length;
var inst_29031 = (inst_29030 > (0));
var state_29045__$1 = state_29045;
if(cljs.core.truth_(inst_29031)){
var statearr_29055_29086 = state_29045__$1;
(statearr_29055_29086[(1)] = (12));

} else {
var statearr_29056_29087 = state_29045__$1;
(statearr_29056_29087[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (3))){
var inst_29043 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_29045__$1,inst_29043);
} else {
if((state_val_29046 === (12))){
var inst_29005 = (state_29045[(7)]);
var inst_29033 = cljs.core.vec.call(null,inst_29005);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29045__$1,(15),out,inst_29033);
} else {
if((state_val_29046 === (2))){
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_29045__$1,(4),ch);
} else {
if((state_val_29046 === (11))){
var inst_29009 = (state_29045[(9)]);
var inst_29013 = (state_29045[(10)]);
var inst_29023 = (state_29045[(2)]);
var inst_29024 = [];
var inst_29025 = inst_29024.push(inst_29009);
var inst_29005 = inst_29024;
var inst_29006 = inst_29013;
var state_29045__$1 = (function (){var statearr_29057 = state_29045;
(statearr_29057[(7)] = inst_29005);

(statearr_29057[(11)] = inst_29025);

(statearr_29057[(12)] = inst_29023);

(statearr_29057[(8)] = inst_29006);

return statearr_29057;
})();
var statearr_29058_29088 = state_29045__$1;
(statearr_29058_29088[(2)] = null);

(statearr_29058_29088[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (9))){
var inst_29005 = (state_29045[(7)]);
var inst_29021 = cljs.core.vec.call(null,inst_29005);
var state_29045__$1 = state_29045;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_29045__$1,(11),out,inst_29021);
} else {
if((state_val_29046 === (5))){
var inst_29009 = (state_29045[(9)]);
var inst_29013 = (state_29045[(10)]);
var inst_29006 = (state_29045[(8)]);
var inst_29013__$1 = f.call(null,inst_29009);
var inst_29014 = cljs.core._EQ_.call(null,inst_29013__$1,inst_29006);
var inst_29015 = cljs.core.keyword_identical_QMARK_.call(null,inst_29006,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_29016 = (inst_29014) || (inst_29015);
var state_29045__$1 = (function (){var statearr_29059 = state_29045;
(statearr_29059[(10)] = inst_29013__$1);

return statearr_29059;
})();
if(cljs.core.truth_(inst_29016)){
var statearr_29060_29089 = state_29045__$1;
(statearr_29060_29089[(1)] = (8));

} else {
var statearr_29061_29090 = state_29045__$1;
(statearr_29061_29090[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (14))){
var inst_29038 = (state_29045[(2)]);
var inst_29039 = cljs.core.async.close_BANG_.call(null,out);
var state_29045__$1 = (function (){var statearr_29063 = state_29045;
(statearr_29063[(13)] = inst_29038);

return statearr_29063;
})();
var statearr_29064_29091 = state_29045__$1;
(statearr_29064_29091[(2)] = inst_29039);

(statearr_29064_29091[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (10))){
var inst_29028 = (state_29045[(2)]);
var state_29045__$1 = state_29045;
var statearr_29065_29092 = state_29045__$1;
(statearr_29065_29092[(2)] = inst_29028);

(statearr_29065_29092[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29046 === (8))){
var inst_29009 = (state_29045[(9)]);
var inst_29005 = (state_29045[(7)]);
var inst_29013 = (state_29045[(10)]);
var inst_29018 = inst_29005.push(inst_29009);
var tmp29062 = inst_29005;
var inst_29005__$1 = tmp29062;
var inst_29006 = inst_29013;
var state_29045__$1 = (function (){var statearr_29066 = state_29045;
(statearr_29066[(14)] = inst_29018);

(statearr_29066[(7)] = inst_29005__$1);

(statearr_29066[(8)] = inst_29006);

return statearr_29066;
})();
var statearr_29067_29093 = state_29045__$1;
(statearr_29067_29093[(2)] = null);

(statearr_29067_29093[(1)] = (2));


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
});})(c__19483__auto___29079,out))
;
return ((function (switch__19418__auto__,c__19483__auto___29079,out){
return (function() {
var cljs$core$async$state_machine__19419__auto__ = null;
var cljs$core$async$state_machine__19419__auto____0 = (function (){
var statearr_29071 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_29071[(0)] = cljs$core$async$state_machine__19419__auto__);

(statearr_29071[(1)] = (1));

return statearr_29071;
});
var cljs$core$async$state_machine__19419__auto____1 = (function (state_29045){
while(true){
var ret_value__19420__auto__ = (function (){try{while(true){
var result__19421__auto__ = switch__19418__auto__.call(null,state_29045);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19421__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19421__auto__;
}
break;
}
}catch (e29072){if((e29072 instanceof Object)){
var ex__19422__auto__ = e29072;
var statearr_29073_29094 = state_29045;
(statearr_29073_29094[(5)] = ex__19422__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_29045);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29072;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19420__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__29095 = state_29045;
state_29045 = G__29095;
continue;
} else {
return ret_value__19420__auto__;
}
break;
}
});
cljs$core$async$state_machine__19419__auto__ = function(state_29045){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19419__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19419__auto____1.call(this,state_29045);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19419__auto____0;
cljs$core$async$state_machine__19419__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19419__auto____1;
return cljs$core$async$state_machine__19419__auto__;
})()
;})(switch__19418__auto__,c__19483__auto___29079,out))
})();
var state__19485__auto__ = (function (){var statearr_29074 = f__19484__auto__.call(null);
(statearr_29074[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19483__auto___29079);

return statearr_29074;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19485__auto__);
});})(c__19483__auto___29079,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map