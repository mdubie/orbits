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
if(typeof cljs.core.async.t_cljs$core$async62030 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62030 = (function (fn_handler,f,meta62031){
this.fn_handler = fn_handler;
this.f = f;
this.meta62031 = meta62031;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62030.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62032,meta62031__$1){
var self__ = this;
var _62032__$1 = this;
return (new cljs.core.async.t_cljs$core$async62030(self__.fn_handler,self__.f,meta62031__$1));
});

cljs.core.async.t_cljs$core$async62030.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62032){
var self__ = this;
var _62032__$1 = this;
return self__.meta62031;
});

cljs.core.async.t_cljs$core$async62030.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async62030.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async62030.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async62030.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null)], null)))], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta62031","meta62031",-847805201,null)], null);
});

cljs.core.async.t_cljs$core$async62030.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62030.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62030";

cljs.core.async.t_cljs$core$async62030.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async62030");
});

cljs.core.async.__GT_t_cljs$core$async62030 = (function cljs$core$async$fn_handler_$___GT_t_cljs$core$async62030(fn_handler__$1,f__$1,meta62031){
return (new cljs.core.async.t_cljs$core$async62030(fn_handler__$1,f__$1,meta62031));
});

}

return (new cljs.core.async.t_cljs$core$async62030(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
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
var args62035 = [];
var len__17378__auto___62038 = arguments.length;
var i__17379__auto___62039 = (0);
while(true){
if((i__17379__auto___62039 < len__17378__auto___62038)){
args62035.push((arguments[i__17379__auto___62039]));

var G__62040 = (i__17379__auto___62039 + (1));
i__17379__auto___62039 = G__62040;
continue;
} else {
}
break;
}

var G__62037 = args62035.length;
switch (G__62037) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62035.length)].join('')));

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
var args62042 = [];
var len__17378__auto___62045 = arguments.length;
var i__17379__auto___62046 = (0);
while(true){
if((i__17379__auto___62046 < len__17378__auto___62045)){
args62042.push((arguments[i__17379__auto___62046]));

var G__62047 = (i__17379__auto___62046 + (1));
i__17379__auto___62046 = G__62047;
continue;
} else {
}
break;
}

var G__62044 = args62042.length;
switch (G__62044) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62042.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_62049 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_62049);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_62049,ret){
return (function (){
return fn1.call(null,val_62049);
});})(val_62049,ret))
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
var args62050 = [];
var len__17378__auto___62053 = arguments.length;
var i__17379__auto___62054 = (0);
while(true){
if((i__17379__auto___62054 < len__17378__auto___62053)){
args62050.push((arguments[i__17379__auto___62054]));

var G__62055 = (i__17379__auto___62054 + (1));
i__17379__auto___62054 = G__62055;
continue;
} else {
}
break;
}

var G__62052 = args62050.length;
switch (G__62052) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62050.length)].join('')));

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
var n__17223__auto___62057 = n;
var x_62058 = (0);
while(true){
if((x_62058 < n__17223__auto___62057)){
(a[x_62058] = (0));

var G__62059 = (x_62058 + (1));
x_62058 = G__62059;
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

var G__62060 = (i + (1));
i = G__62060;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async62064 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62064 = (function (alt_flag,flag,meta62065){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta62065 = meta62065;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62064.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_62066,meta62065__$1){
var self__ = this;
var _62066__$1 = this;
return (new cljs.core.async.t_cljs$core$async62064(self__.alt_flag,self__.flag,meta62065__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async62064.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_62066){
var self__ = this;
var _62066__$1 = this;
return self__.meta62065;
});})(flag))
;

cljs.core.async.t_cljs$core$async62064.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async62064.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async62064.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async62064.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(cljs.core.PersistentVector.EMPTY))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta62065","meta62065",-969995738,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async62064.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62064.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62064";

cljs.core.async.t_cljs$core$async62064.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async62064");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async62064 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async62064(alt_flag__$1,flag__$1,meta62065){
return (new cljs.core.async.t_cljs$core$async62064(alt_flag__$1,flag__$1,meta62065));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async62064(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async62070 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async62070 = (function (alt_handler,flag,cb,meta62071){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta62071 = meta62071;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async62070.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_62072,meta62071__$1){
var self__ = this;
var _62072__$1 = this;
return (new cljs.core.async.t_cljs$core$async62070(self__.alt_handler,self__.flag,self__.cb,meta62071__$1));
});

cljs.core.async.t_cljs$core$async62070.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_62072){
var self__ = this;
var _62072__$1 = this;
return self__.meta62071;
});

cljs.core.async.t_cljs$core$async62070.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async62070.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async62070.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async62070.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"private","private",-558947994),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null)], null)))], null)),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta62071","meta62071",-170585117,null)], null);
});

cljs.core.async.t_cljs$core$async62070.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async62070.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async62070";

cljs.core.async.t_cljs$core$async62070.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async62070");
});

cljs.core.async.__GT_t_cljs$core$async62070 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async62070(alt_handler__$1,flag__$1,cb__$1,meta62071){
return (new cljs.core.async.t_cljs$core$async62070(alt_handler__$1,flag__$1,cb__$1,meta62071));
});

}

return (new cljs.core.async.t_cljs$core$async62070(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__62073_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62073_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__62074_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__62074_SHARP_,port], null));
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
var G__62075 = (i + (1));
i = G__62075;
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
var len__17378__auto___62081 = arguments.length;
var i__17379__auto___62082 = (0);
while(true){
if((i__17379__auto___62082 < len__17378__auto___62081)){
args__17385__auto__.push((arguments[i__17379__auto___62082]));

var G__62083 = (i__17379__auto___62082 + (1));
i__17379__auto___62082 = G__62083;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((1) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__17386__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__62078){
var map__62079 = p__62078;
var map__62079__$1 = ((((!((map__62079 == null)))?((((map__62079.cljs$lang$protocol_mask$partition0$ & (64))) || (map__62079.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__62079):map__62079);
var opts = map__62079__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq62076){
var G__62077 = cljs.core.first.call(null,seq62076);
var seq62076__$1 = cljs.core.next.call(null,seq62076);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__62077,seq62076__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var args62084 = [];
var len__17378__auto___62134 = arguments.length;
var i__17379__auto___62135 = (0);
while(true){
if((i__17379__auto___62135 < len__17378__auto___62134)){
args62084.push((arguments[i__17379__auto___62135]));

var G__62136 = (i__17379__auto___62135 + (1));
i__17379__auto___62135 = G__62136;
continue;
} else {
}
break;
}

var G__62086 = args62084.length;
switch (G__62086) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62084.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__19425__auto___62138 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___62138){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___62138){
return (function (state_62110){
var state_val_62111 = (state_62110[(1)]);
if((state_val_62111 === (7))){
var inst_62106 = (state_62110[(2)]);
var state_62110__$1 = state_62110;
var statearr_62112_62139 = state_62110__$1;
(statearr_62112_62139[(2)] = inst_62106);

(statearr_62112_62139[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (1))){
var state_62110__$1 = state_62110;
var statearr_62113_62140 = state_62110__$1;
(statearr_62113_62140[(2)] = null);

(statearr_62113_62140[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (4))){
var inst_62089 = (state_62110[(7)]);
var inst_62089__$1 = (state_62110[(2)]);
var inst_62090 = (inst_62089__$1 == null);
var state_62110__$1 = (function (){var statearr_62114 = state_62110;
(statearr_62114[(7)] = inst_62089__$1);

return statearr_62114;
})();
if(cljs.core.truth_(inst_62090)){
var statearr_62115_62141 = state_62110__$1;
(statearr_62115_62141[(1)] = (5));

} else {
var statearr_62116_62142 = state_62110__$1;
(statearr_62116_62142[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (13))){
var state_62110__$1 = state_62110;
var statearr_62117_62143 = state_62110__$1;
(statearr_62117_62143[(2)] = null);

(statearr_62117_62143[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (6))){
var inst_62089 = (state_62110[(7)]);
var state_62110__$1 = state_62110;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62110__$1,(11),to,inst_62089);
} else {
if((state_val_62111 === (3))){
var inst_62108 = (state_62110[(2)]);
var state_62110__$1 = state_62110;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62110__$1,inst_62108);
} else {
if((state_val_62111 === (12))){
var state_62110__$1 = state_62110;
var statearr_62118_62144 = state_62110__$1;
(statearr_62118_62144[(2)] = null);

(statearr_62118_62144[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (2))){
var state_62110__$1 = state_62110;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62110__$1,(4),from);
} else {
if((state_val_62111 === (11))){
var inst_62099 = (state_62110[(2)]);
var state_62110__$1 = state_62110;
if(cljs.core.truth_(inst_62099)){
var statearr_62119_62145 = state_62110__$1;
(statearr_62119_62145[(1)] = (12));

} else {
var statearr_62120_62146 = state_62110__$1;
(statearr_62120_62146[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (9))){
var state_62110__$1 = state_62110;
var statearr_62121_62147 = state_62110__$1;
(statearr_62121_62147[(2)] = null);

(statearr_62121_62147[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (5))){
var state_62110__$1 = state_62110;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62122_62148 = state_62110__$1;
(statearr_62122_62148[(1)] = (8));

} else {
var statearr_62123_62149 = state_62110__$1;
(statearr_62123_62149[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (14))){
var inst_62104 = (state_62110[(2)]);
var state_62110__$1 = state_62110;
var statearr_62124_62150 = state_62110__$1;
(statearr_62124_62150[(2)] = inst_62104);

(statearr_62124_62150[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (10))){
var inst_62096 = (state_62110[(2)]);
var state_62110__$1 = state_62110;
var statearr_62125_62151 = state_62110__$1;
(statearr_62125_62151[(2)] = inst_62096);

(statearr_62125_62151[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62111 === (8))){
var inst_62093 = cljs.core.async.close_BANG_.call(null,to);
var state_62110__$1 = state_62110;
var statearr_62126_62152 = state_62110__$1;
(statearr_62126_62152[(2)] = inst_62093);

(statearr_62126_62152[(1)] = (10));


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
});})(c__19425__auto___62138))
;
return ((function (switch__19404__auto__,c__19425__auto___62138){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_62130 = [null,null,null,null,null,null,null,null];
(statearr_62130[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_62130[(1)] = (1));

return statearr_62130;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_62110){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62110);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62131){if((e62131 instanceof Object)){
var ex__19408__auto__ = e62131;
var statearr_62132_62153 = state_62110;
(statearr_62132_62153[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62110);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62131;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62154 = state_62110;
state_62110 = G__62154;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_62110){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_62110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___62138))
})();
var state__19427__auto__ = (function (){var statearr_62133 = f__19426__auto__.call(null);
(statearr_62133[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___62138);

return statearr_62133;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___62138))
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
return (function (p__62338){
var vec__62339 = p__62338;
var v = cljs.core.nth.call(null,vec__62339,(0),null);
var p = cljs.core.nth.call(null,vec__62339,(1),null);
var job = vec__62339;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__19425__auto___62521 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___62521,res,vec__62339,v,p,job,jobs,results){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___62521,res,vec__62339,v,p,job,jobs,results){
return (function (state_62344){
var state_val_62345 = (state_62344[(1)]);
if((state_val_62345 === (1))){
var state_62344__$1 = state_62344;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62344__$1,(2),res,v);
} else {
if((state_val_62345 === (2))){
var inst_62341 = (state_62344[(2)]);
var inst_62342 = cljs.core.async.close_BANG_.call(null,res);
var state_62344__$1 = (function (){var statearr_62346 = state_62344;
(statearr_62346[(7)] = inst_62341);

return statearr_62346;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62344__$1,inst_62342);
} else {
return null;
}
}
});})(c__19425__auto___62521,res,vec__62339,v,p,job,jobs,results))
;
return ((function (switch__19404__auto__,c__19425__auto___62521,res,vec__62339,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0 = (function (){
var statearr_62350 = [null,null,null,null,null,null,null,null];
(statearr_62350[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__);

(statearr_62350[(1)] = (1));

return statearr_62350;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1 = (function (state_62344){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62344);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62351){if((e62351 instanceof Object)){
var ex__19408__auto__ = e62351;
var statearr_62352_62522 = state_62344;
(statearr_62352_62522[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62344);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62351;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62523 = state_62344;
state_62344 = G__62523;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = function(state_62344){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1.call(this,state_62344);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___62521,res,vec__62339,v,p,job,jobs,results))
})();
var state__19427__auto__ = (function (){var statearr_62353 = f__19426__auto__.call(null);
(statearr_62353[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___62521);

return statearr_62353;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___62521,res,vec__62339,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__62354){
var vec__62355 = p__62354;
var v = cljs.core.nth.call(null,vec__62355,(0),null);
var p = cljs.core.nth.call(null,vec__62355,(1),null);
var job = vec__62355;
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
var n__17223__auto___62524 = n;
var __62525 = (0);
while(true){
if((__62525 < n__17223__auto___62524)){
var G__62356_62526 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__62356_62526) {
case "compute":
var c__19425__auto___62528 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62525,c__19425__auto___62528,G__62356_62526,n__17223__auto___62524,jobs,results,process,async){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (__62525,c__19425__auto___62528,G__62356_62526,n__17223__auto___62524,jobs,results,process,async){
return (function (state_62369){
var state_val_62370 = (state_62369[(1)]);
if((state_val_62370 === (1))){
var state_62369__$1 = state_62369;
var statearr_62371_62529 = state_62369__$1;
(statearr_62371_62529[(2)] = null);

(statearr_62371_62529[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62370 === (2))){
var state_62369__$1 = state_62369;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62369__$1,(4),jobs);
} else {
if((state_val_62370 === (3))){
var inst_62367 = (state_62369[(2)]);
var state_62369__$1 = state_62369;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62369__$1,inst_62367);
} else {
if((state_val_62370 === (4))){
var inst_62359 = (state_62369[(2)]);
var inst_62360 = process.call(null,inst_62359);
var state_62369__$1 = state_62369;
if(cljs.core.truth_(inst_62360)){
var statearr_62372_62530 = state_62369__$1;
(statearr_62372_62530[(1)] = (5));

} else {
var statearr_62373_62531 = state_62369__$1;
(statearr_62373_62531[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62370 === (5))){
var state_62369__$1 = state_62369;
var statearr_62374_62532 = state_62369__$1;
(statearr_62374_62532[(2)] = null);

(statearr_62374_62532[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62370 === (6))){
var state_62369__$1 = state_62369;
var statearr_62375_62533 = state_62369__$1;
(statearr_62375_62533[(2)] = null);

(statearr_62375_62533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62370 === (7))){
var inst_62365 = (state_62369[(2)]);
var state_62369__$1 = state_62369;
var statearr_62376_62534 = state_62369__$1;
(statearr_62376_62534[(2)] = inst_62365);

(statearr_62376_62534[(1)] = (3));


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
});})(__62525,c__19425__auto___62528,G__62356_62526,n__17223__auto___62524,jobs,results,process,async))
;
return ((function (__62525,switch__19404__auto__,c__19425__auto___62528,G__62356_62526,n__17223__auto___62524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0 = (function (){
var statearr_62380 = [null,null,null,null,null,null,null];
(statearr_62380[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__);

(statearr_62380[(1)] = (1));

return statearr_62380;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1 = (function (state_62369){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62369);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62381){if((e62381 instanceof Object)){
var ex__19408__auto__ = e62381;
var statearr_62382_62535 = state_62369;
(statearr_62382_62535[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62369);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62381;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62536 = state_62369;
state_62369 = G__62536;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = function(state_62369){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1.call(this,state_62369);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__;
})()
;})(__62525,switch__19404__auto__,c__19425__auto___62528,G__62356_62526,n__17223__auto___62524,jobs,results,process,async))
})();
var state__19427__auto__ = (function (){var statearr_62383 = f__19426__auto__.call(null);
(statearr_62383[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___62528);

return statearr_62383;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(__62525,c__19425__auto___62528,G__62356_62526,n__17223__auto___62524,jobs,results,process,async))
);


break;
case "async":
var c__19425__auto___62537 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__62525,c__19425__auto___62537,G__62356_62526,n__17223__auto___62524,jobs,results,process,async){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (__62525,c__19425__auto___62537,G__62356_62526,n__17223__auto___62524,jobs,results,process,async){
return (function (state_62396){
var state_val_62397 = (state_62396[(1)]);
if((state_val_62397 === (1))){
var state_62396__$1 = state_62396;
var statearr_62398_62538 = state_62396__$1;
(statearr_62398_62538[(2)] = null);

(statearr_62398_62538[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62397 === (2))){
var state_62396__$1 = state_62396;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62396__$1,(4),jobs);
} else {
if((state_val_62397 === (3))){
var inst_62394 = (state_62396[(2)]);
var state_62396__$1 = state_62396;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62396__$1,inst_62394);
} else {
if((state_val_62397 === (4))){
var inst_62386 = (state_62396[(2)]);
var inst_62387 = async.call(null,inst_62386);
var state_62396__$1 = state_62396;
if(cljs.core.truth_(inst_62387)){
var statearr_62399_62539 = state_62396__$1;
(statearr_62399_62539[(1)] = (5));

} else {
var statearr_62400_62540 = state_62396__$1;
(statearr_62400_62540[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62397 === (5))){
var state_62396__$1 = state_62396;
var statearr_62401_62541 = state_62396__$1;
(statearr_62401_62541[(2)] = null);

(statearr_62401_62541[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62397 === (6))){
var state_62396__$1 = state_62396;
var statearr_62402_62542 = state_62396__$1;
(statearr_62402_62542[(2)] = null);

(statearr_62402_62542[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62397 === (7))){
var inst_62392 = (state_62396[(2)]);
var state_62396__$1 = state_62396;
var statearr_62403_62543 = state_62396__$1;
(statearr_62403_62543[(2)] = inst_62392);

(statearr_62403_62543[(1)] = (3));


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
});})(__62525,c__19425__auto___62537,G__62356_62526,n__17223__auto___62524,jobs,results,process,async))
;
return ((function (__62525,switch__19404__auto__,c__19425__auto___62537,G__62356_62526,n__17223__auto___62524,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0 = (function (){
var statearr_62407 = [null,null,null,null,null,null,null];
(statearr_62407[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__);

(statearr_62407[(1)] = (1));

return statearr_62407;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1 = (function (state_62396){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62396);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62408){if((e62408 instanceof Object)){
var ex__19408__auto__ = e62408;
var statearr_62409_62544 = state_62396;
(statearr_62409_62544[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62396);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62408;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62545 = state_62396;
state_62396 = G__62545;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = function(state_62396){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1.call(this,state_62396);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__;
})()
;})(__62525,switch__19404__auto__,c__19425__auto___62537,G__62356_62526,n__17223__auto___62524,jobs,results,process,async))
})();
var state__19427__auto__ = (function (){var statearr_62410 = f__19426__auto__.call(null);
(statearr_62410[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___62537);

return statearr_62410;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(__62525,c__19425__auto___62537,G__62356_62526,n__17223__auto___62524,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__62546 = (__62525 + (1));
__62525 = G__62546;
continue;
} else {
}
break;
}

var c__19425__auto___62547 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___62547,jobs,results,process,async){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___62547,jobs,results,process,async){
return (function (state_62432){
var state_val_62433 = (state_62432[(1)]);
if((state_val_62433 === (1))){
var state_62432__$1 = state_62432;
var statearr_62434_62548 = state_62432__$1;
(statearr_62434_62548[(2)] = null);

(statearr_62434_62548[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62433 === (2))){
var state_62432__$1 = state_62432;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62432__$1,(4),from);
} else {
if((state_val_62433 === (3))){
var inst_62430 = (state_62432[(2)]);
var state_62432__$1 = state_62432;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62432__$1,inst_62430);
} else {
if((state_val_62433 === (4))){
var inst_62413 = (state_62432[(7)]);
var inst_62413__$1 = (state_62432[(2)]);
var inst_62414 = (inst_62413__$1 == null);
var state_62432__$1 = (function (){var statearr_62435 = state_62432;
(statearr_62435[(7)] = inst_62413__$1);

return statearr_62435;
})();
if(cljs.core.truth_(inst_62414)){
var statearr_62436_62549 = state_62432__$1;
(statearr_62436_62549[(1)] = (5));

} else {
var statearr_62437_62550 = state_62432__$1;
(statearr_62437_62550[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62433 === (5))){
var inst_62416 = cljs.core.async.close_BANG_.call(null,jobs);
var state_62432__$1 = state_62432;
var statearr_62438_62551 = state_62432__$1;
(statearr_62438_62551[(2)] = inst_62416);

(statearr_62438_62551[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62433 === (6))){
var inst_62413 = (state_62432[(7)]);
var inst_62418 = (state_62432[(8)]);
var inst_62418__$1 = cljs.core.async.chan.call(null,(1));
var inst_62419 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_62420 = [inst_62413,inst_62418__$1];
var inst_62421 = (new cljs.core.PersistentVector(null,2,(5),inst_62419,inst_62420,null));
var state_62432__$1 = (function (){var statearr_62439 = state_62432;
(statearr_62439[(8)] = inst_62418__$1);

return statearr_62439;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62432__$1,(8),jobs,inst_62421);
} else {
if((state_val_62433 === (7))){
var inst_62428 = (state_62432[(2)]);
var state_62432__$1 = state_62432;
var statearr_62440_62552 = state_62432__$1;
(statearr_62440_62552[(2)] = inst_62428);

(statearr_62440_62552[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62433 === (8))){
var inst_62418 = (state_62432[(8)]);
var inst_62423 = (state_62432[(2)]);
var state_62432__$1 = (function (){var statearr_62441 = state_62432;
(statearr_62441[(9)] = inst_62423);

return statearr_62441;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62432__$1,(9),results,inst_62418);
} else {
if((state_val_62433 === (9))){
var inst_62425 = (state_62432[(2)]);
var state_62432__$1 = (function (){var statearr_62442 = state_62432;
(statearr_62442[(10)] = inst_62425);

return statearr_62442;
})();
var statearr_62443_62553 = state_62432__$1;
(statearr_62443_62553[(2)] = null);

(statearr_62443_62553[(1)] = (2));


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
});})(c__19425__auto___62547,jobs,results,process,async))
;
return ((function (switch__19404__auto__,c__19425__auto___62547,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0 = (function (){
var statearr_62447 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_62447[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__);

(statearr_62447[(1)] = (1));

return statearr_62447;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1 = (function (state_62432){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62432);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62448){if((e62448 instanceof Object)){
var ex__19408__auto__ = e62448;
var statearr_62449_62554 = state_62432;
(statearr_62449_62554[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62432);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62448;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62555 = state_62432;
state_62432 = G__62555;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = function(state_62432){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1.call(this,state_62432);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___62547,jobs,results,process,async))
})();
var state__19427__auto__ = (function (){var statearr_62450 = f__19426__auto__.call(null);
(statearr_62450[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___62547);

return statearr_62450;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___62547,jobs,results,process,async))
);


var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__,jobs,results,process,async){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__,jobs,results,process,async){
return (function (state_62488){
var state_val_62489 = (state_62488[(1)]);
if((state_val_62489 === (7))){
var inst_62484 = (state_62488[(2)]);
var state_62488__$1 = state_62488;
var statearr_62490_62556 = state_62488__$1;
(statearr_62490_62556[(2)] = inst_62484);

(statearr_62490_62556[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (20))){
var state_62488__$1 = state_62488;
var statearr_62491_62557 = state_62488__$1;
(statearr_62491_62557[(2)] = null);

(statearr_62491_62557[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (1))){
var state_62488__$1 = state_62488;
var statearr_62492_62558 = state_62488__$1;
(statearr_62492_62558[(2)] = null);

(statearr_62492_62558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (4))){
var inst_62453 = (state_62488[(7)]);
var inst_62453__$1 = (state_62488[(2)]);
var inst_62454 = (inst_62453__$1 == null);
var state_62488__$1 = (function (){var statearr_62493 = state_62488;
(statearr_62493[(7)] = inst_62453__$1);

return statearr_62493;
})();
if(cljs.core.truth_(inst_62454)){
var statearr_62494_62559 = state_62488__$1;
(statearr_62494_62559[(1)] = (5));

} else {
var statearr_62495_62560 = state_62488__$1;
(statearr_62495_62560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (15))){
var inst_62466 = (state_62488[(8)]);
var state_62488__$1 = state_62488;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62488__$1,(18),to,inst_62466);
} else {
if((state_val_62489 === (21))){
var inst_62479 = (state_62488[(2)]);
var state_62488__$1 = state_62488;
var statearr_62496_62561 = state_62488__$1;
(statearr_62496_62561[(2)] = inst_62479);

(statearr_62496_62561[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (13))){
var inst_62481 = (state_62488[(2)]);
var state_62488__$1 = (function (){var statearr_62497 = state_62488;
(statearr_62497[(9)] = inst_62481);

return statearr_62497;
})();
var statearr_62498_62562 = state_62488__$1;
(statearr_62498_62562[(2)] = null);

(statearr_62498_62562[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (6))){
var inst_62453 = (state_62488[(7)]);
var state_62488__$1 = state_62488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62488__$1,(11),inst_62453);
} else {
if((state_val_62489 === (17))){
var inst_62474 = (state_62488[(2)]);
var state_62488__$1 = state_62488;
if(cljs.core.truth_(inst_62474)){
var statearr_62499_62563 = state_62488__$1;
(statearr_62499_62563[(1)] = (19));

} else {
var statearr_62500_62564 = state_62488__$1;
(statearr_62500_62564[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (3))){
var inst_62486 = (state_62488[(2)]);
var state_62488__$1 = state_62488;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62488__$1,inst_62486);
} else {
if((state_val_62489 === (12))){
var inst_62463 = (state_62488[(10)]);
var state_62488__$1 = state_62488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62488__$1,(14),inst_62463);
} else {
if((state_val_62489 === (2))){
var state_62488__$1 = state_62488;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62488__$1,(4),results);
} else {
if((state_val_62489 === (19))){
var state_62488__$1 = state_62488;
var statearr_62501_62565 = state_62488__$1;
(statearr_62501_62565[(2)] = null);

(statearr_62501_62565[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (11))){
var inst_62463 = (state_62488[(2)]);
var state_62488__$1 = (function (){var statearr_62502 = state_62488;
(statearr_62502[(10)] = inst_62463);

return statearr_62502;
})();
var statearr_62503_62566 = state_62488__$1;
(statearr_62503_62566[(2)] = null);

(statearr_62503_62566[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (9))){
var state_62488__$1 = state_62488;
var statearr_62504_62567 = state_62488__$1;
(statearr_62504_62567[(2)] = null);

(statearr_62504_62567[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (5))){
var state_62488__$1 = state_62488;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62505_62568 = state_62488__$1;
(statearr_62505_62568[(1)] = (8));

} else {
var statearr_62506_62569 = state_62488__$1;
(statearr_62506_62569[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (14))){
var inst_62468 = (state_62488[(11)]);
var inst_62466 = (state_62488[(8)]);
var inst_62466__$1 = (state_62488[(2)]);
var inst_62467 = (inst_62466__$1 == null);
var inst_62468__$1 = cljs.core.not.call(null,inst_62467);
var state_62488__$1 = (function (){var statearr_62507 = state_62488;
(statearr_62507[(11)] = inst_62468__$1);

(statearr_62507[(8)] = inst_62466__$1);

return statearr_62507;
})();
if(inst_62468__$1){
var statearr_62508_62570 = state_62488__$1;
(statearr_62508_62570[(1)] = (15));

} else {
var statearr_62509_62571 = state_62488__$1;
(statearr_62509_62571[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (16))){
var inst_62468 = (state_62488[(11)]);
var state_62488__$1 = state_62488;
var statearr_62510_62572 = state_62488__$1;
(statearr_62510_62572[(2)] = inst_62468);

(statearr_62510_62572[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (10))){
var inst_62460 = (state_62488[(2)]);
var state_62488__$1 = state_62488;
var statearr_62511_62573 = state_62488__$1;
(statearr_62511_62573[(2)] = inst_62460);

(statearr_62511_62573[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (18))){
var inst_62471 = (state_62488[(2)]);
var state_62488__$1 = state_62488;
var statearr_62512_62574 = state_62488__$1;
(statearr_62512_62574[(2)] = inst_62471);

(statearr_62512_62574[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62489 === (8))){
var inst_62457 = cljs.core.async.close_BANG_.call(null,to);
var state_62488__$1 = state_62488;
var statearr_62513_62575 = state_62488__$1;
(statearr_62513_62575[(2)] = inst_62457);

(statearr_62513_62575[(1)] = (10));


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
});})(c__19425__auto__,jobs,results,process,async))
;
return ((function (switch__19404__auto__,c__19425__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0 = (function (){
var statearr_62517 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_62517[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__);

(statearr_62517[(1)] = (1));

return statearr_62517;
});
var cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1 = (function (state_62488){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62488);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62518){if((e62518 instanceof Object)){
var ex__19408__auto__ = e62518;
var statearr_62519_62576 = state_62488;
(statearr_62519_62576[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62488);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62518;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62577 = state_62488;
state_62488 = G__62577;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__ = function(state_62488){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1.call(this,state_62488);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__19405__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__,jobs,results,process,async))
})();
var state__19427__auto__ = (function (){var statearr_62520 = f__19426__auto__.call(null);
(statearr_62520[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_62520;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__,jobs,results,process,async))
);

return c__19425__auto__;
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
var args62578 = [];
var len__17378__auto___62581 = arguments.length;
var i__17379__auto___62582 = (0);
while(true){
if((i__17379__auto___62582 < len__17378__auto___62581)){
args62578.push((arguments[i__17379__auto___62582]));

var G__62583 = (i__17379__auto___62582 + (1));
i__17379__auto___62582 = G__62583;
continue;
} else {
}
break;
}

var G__62580 = args62578.length;
switch (G__62580) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62578.length)].join('')));

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
var args62585 = [];
var len__17378__auto___62588 = arguments.length;
var i__17379__auto___62589 = (0);
while(true){
if((i__17379__auto___62589 < len__17378__auto___62588)){
args62585.push((arguments[i__17379__auto___62589]));

var G__62590 = (i__17379__auto___62589 + (1));
i__17379__auto___62589 = G__62590;
continue;
} else {
}
break;
}

var G__62587 = args62585.length;
switch (G__62587) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62585.length)].join('')));

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
var args62592 = [];
var len__17378__auto___62645 = arguments.length;
var i__17379__auto___62646 = (0);
while(true){
if((i__17379__auto___62646 < len__17378__auto___62645)){
args62592.push((arguments[i__17379__auto___62646]));

var G__62647 = (i__17379__auto___62646 + (1));
i__17379__auto___62646 = G__62647;
continue;
} else {
}
break;
}

var G__62594 = args62592.length;
switch (G__62594) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62592.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__19425__auto___62649 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___62649,tc,fc){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___62649,tc,fc){
return (function (state_62620){
var state_val_62621 = (state_62620[(1)]);
if((state_val_62621 === (7))){
var inst_62616 = (state_62620[(2)]);
var state_62620__$1 = state_62620;
var statearr_62622_62650 = state_62620__$1;
(statearr_62622_62650[(2)] = inst_62616);

(statearr_62622_62650[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (1))){
var state_62620__$1 = state_62620;
var statearr_62623_62651 = state_62620__$1;
(statearr_62623_62651[(2)] = null);

(statearr_62623_62651[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (4))){
var inst_62597 = (state_62620[(7)]);
var inst_62597__$1 = (state_62620[(2)]);
var inst_62598 = (inst_62597__$1 == null);
var state_62620__$1 = (function (){var statearr_62624 = state_62620;
(statearr_62624[(7)] = inst_62597__$1);

return statearr_62624;
})();
if(cljs.core.truth_(inst_62598)){
var statearr_62625_62652 = state_62620__$1;
(statearr_62625_62652[(1)] = (5));

} else {
var statearr_62626_62653 = state_62620__$1;
(statearr_62626_62653[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (13))){
var state_62620__$1 = state_62620;
var statearr_62627_62654 = state_62620__$1;
(statearr_62627_62654[(2)] = null);

(statearr_62627_62654[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (6))){
var inst_62597 = (state_62620[(7)]);
var inst_62603 = p.call(null,inst_62597);
var state_62620__$1 = state_62620;
if(cljs.core.truth_(inst_62603)){
var statearr_62628_62655 = state_62620__$1;
(statearr_62628_62655[(1)] = (9));

} else {
var statearr_62629_62656 = state_62620__$1;
(statearr_62629_62656[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (3))){
var inst_62618 = (state_62620[(2)]);
var state_62620__$1 = state_62620;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62620__$1,inst_62618);
} else {
if((state_val_62621 === (12))){
var state_62620__$1 = state_62620;
var statearr_62630_62657 = state_62620__$1;
(statearr_62630_62657[(2)] = null);

(statearr_62630_62657[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (2))){
var state_62620__$1 = state_62620;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62620__$1,(4),ch);
} else {
if((state_val_62621 === (11))){
var inst_62597 = (state_62620[(7)]);
var inst_62607 = (state_62620[(2)]);
var state_62620__$1 = state_62620;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62620__$1,(8),inst_62607,inst_62597);
} else {
if((state_val_62621 === (9))){
var state_62620__$1 = state_62620;
var statearr_62631_62658 = state_62620__$1;
(statearr_62631_62658[(2)] = tc);

(statearr_62631_62658[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (5))){
var inst_62600 = cljs.core.async.close_BANG_.call(null,tc);
var inst_62601 = cljs.core.async.close_BANG_.call(null,fc);
var state_62620__$1 = (function (){var statearr_62632 = state_62620;
(statearr_62632[(8)] = inst_62600);

return statearr_62632;
})();
var statearr_62633_62659 = state_62620__$1;
(statearr_62633_62659[(2)] = inst_62601);

(statearr_62633_62659[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (14))){
var inst_62614 = (state_62620[(2)]);
var state_62620__$1 = state_62620;
var statearr_62634_62660 = state_62620__$1;
(statearr_62634_62660[(2)] = inst_62614);

(statearr_62634_62660[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (10))){
var state_62620__$1 = state_62620;
var statearr_62635_62661 = state_62620__$1;
(statearr_62635_62661[(2)] = fc);

(statearr_62635_62661[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62621 === (8))){
var inst_62609 = (state_62620[(2)]);
var state_62620__$1 = state_62620;
if(cljs.core.truth_(inst_62609)){
var statearr_62636_62662 = state_62620__$1;
(statearr_62636_62662[(1)] = (12));

} else {
var statearr_62637_62663 = state_62620__$1;
(statearr_62637_62663[(1)] = (13));

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
});})(c__19425__auto___62649,tc,fc))
;
return ((function (switch__19404__auto__,c__19425__auto___62649,tc,fc){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_62641 = [null,null,null,null,null,null,null,null,null];
(statearr_62641[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_62641[(1)] = (1));

return statearr_62641;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_62620){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62620);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62642){if((e62642 instanceof Object)){
var ex__19408__auto__ = e62642;
var statearr_62643_62664 = state_62620;
(statearr_62643_62664[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62620);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62642;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62665 = state_62620;
state_62620 = G__62665;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_62620){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_62620);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___62649,tc,fc))
})();
var state__19427__auto__ = (function (){var statearr_62644 = f__19426__auto__.call(null);
(statearr_62644[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___62649);

return statearr_62644;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___62649,tc,fc))
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
var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__){
return (function (state_62712){
var state_val_62713 = (state_62712[(1)]);
if((state_val_62713 === (1))){
var inst_62698 = init;
var state_62712__$1 = (function (){var statearr_62714 = state_62712;
(statearr_62714[(7)] = inst_62698);

return statearr_62714;
})();
var statearr_62715_62730 = state_62712__$1;
(statearr_62715_62730[(2)] = null);

(statearr_62715_62730[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62713 === (2))){
var state_62712__$1 = state_62712;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_62712__$1,(4),ch);
} else {
if((state_val_62713 === (3))){
var inst_62710 = (state_62712[(2)]);
var state_62712__$1 = state_62712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62712__$1,inst_62710);
} else {
if((state_val_62713 === (4))){
var inst_62701 = (state_62712[(8)]);
var inst_62701__$1 = (state_62712[(2)]);
var inst_62702 = (inst_62701__$1 == null);
var state_62712__$1 = (function (){var statearr_62716 = state_62712;
(statearr_62716[(8)] = inst_62701__$1);

return statearr_62716;
})();
if(cljs.core.truth_(inst_62702)){
var statearr_62717_62731 = state_62712__$1;
(statearr_62717_62731[(1)] = (5));

} else {
var statearr_62718_62732 = state_62712__$1;
(statearr_62718_62732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62713 === (5))){
var inst_62698 = (state_62712[(7)]);
var state_62712__$1 = state_62712;
var statearr_62719_62733 = state_62712__$1;
(statearr_62719_62733[(2)] = inst_62698);

(statearr_62719_62733[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62713 === (6))){
var inst_62701 = (state_62712[(8)]);
var inst_62698 = (state_62712[(7)]);
var inst_62705 = f.call(null,inst_62698,inst_62701);
var inst_62698__$1 = inst_62705;
var state_62712__$1 = (function (){var statearr_62720 = state_62712;
(statearr_62720[(7)] = inst_62698__$1);

return statearr_62720;
})();
var statearr_62721_62734 = state_62712__$1;
(statearr_62721_62734[(2)] = null);

(statearr_62721_62734[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62713 === (7))){
var inst_62708 = (state_62712[(2)]);
var state_62712__$1 = state_62712;
var statearr_62722_62735 = state_62712__$1;
(statearr_62722_62735[(2)] = inst_62708);

(statearr_62722_62735[(1)] = (3));


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
});})(c__19425__auto__))
;
return ((function (switch__19404__auto__,c__19425__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__19405__auto__ = null;
var cljs$core$async$reduce_$_state_machine__19405__auto____0 = (function (){
var statearr_62726 = [null,null,null,null,null,null,null,null,null];
(statearr_62726[(0)] = cljs$core$async$reduce_$_state_machine__19405__auto__);

(statearr_62726[(1)] = (1));

return statearr_62726;
});
var cljs$core$async$reduce_$_state_machine__19405__auto____1 = (function (state_62712){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62727){if((e62727 instanceof Object)){
var ex__19408__auto__ = e62727;
var statearr_62728_62736 = state_62712;
(statearr_62728_62736[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62727;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62737 = state_62712;
state_62712 = G__62737;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__19405__auto__ = function(state_62712){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__19405__auto____1.call(this,state_62712);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__19405__auto____0;
cljs$core$async$reduce_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__19405__auto____1;
return cljs$core$async$reduce_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__))
})();
var state__19427__auto__ = (function (){var statearr_62729 = f__19426__auto__.call(null);
(statearr_62729[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_62729;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__))
);

return c__19425__auto__;
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
var args62738 = [];
var len__17378__auto___62790 = arguments.length;
var i__17379__auto___62791 = (0);
while(true){
if((i__17379__auto___62791 < len__17378__auto___62790)){
args62738.push((arguments[i__17379__auto___62791]));

var G__62792 = (i__17379__auto___62791 + (1));
i__17379__auto___62791 = G__62792;
continue;
} else {
}
break;
}

var G__62740 = args62738.length;
switch (G__62740) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args62738.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__){
return (function (state_62765){
var state_val_62766 = (state_62765[(1)]);
if((state_val_62766 === (7))){
var inst_62747 = (state_62765[(2)]);
var state_62765__$1 = state_62765;
var statearr_62767_62794 = state_62765__$1;
(statearr_62767_62794[(2)] = inst_62747);

(statearr_62767_62794[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (1))){
var inst_62741 = cljs.core.seq.call(null,coll);
var inst_62742 = inst_62741;
var state_62765__$1 = (function (){var statearr_62768 = state_62765;
(statearr_62768[(7)] = inst_62742);

return statearr_62768;
})();
var statearr_62769_62795 = state_62765__$1;
(statearr_62769_62795[(2)] = null);

(statearr_62769_62795[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (4))){
var inst_62742 = (state_62765[(7)]);
var inst_62745 = cljs.core.first.call(null,inst_62742);
var state_62765__$1 = state_62765;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_62765__$1,(7),ch,inst_62745);
} else {
if((state_val_62766 === (13))){
var inst_62759 = (state_62765[(2)]);
var state_62765__$1 = state_62765;
var statearr_62770_62796 = state_62765__$1;
(statearr_62770_62796[(2)] = inst_62759);

(statearr_62770_62796[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (6))){
var inst_62750 = (state_62765[(2)]);
var state_62765__$1 = state_62765;
if(cljs.core.truth_(inst_62750)){
var statearr_62771_62797 = state_62765__$1;
(statearr_62771_62797[(1)] = (8));

} else {
var statearr_62772_62798 = state_62765__$1;
(statearr_62772_62798[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (3))){
var inst_62763 = (state_62765[(2)]);
var state_62765__$1 = state_62765;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_62765__$1,inst_62763);
} else {
if((state_val_62766 === (12))){
var state_62765__$1 = state_62765;
var statearr_62773_62799 = state_62765__$1;
(statearr_62773_62799[(2)] = null);

(statearr_62773_62799[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (2))){
var inst_62742 = (state_62765[(7)]);
var state_62765__$1 = state_62765;
if(cljs.core.truth_(inst_62742)){
var statearr_62774_62800 = state_62765__$1;
(statearr_62774_62800[(1)] = (4));

} else {
var statearr_62775_62801 = state_62765__$1;
(statearr_62775_62801[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (11))){
var inst_62756 = cljs.core.async.close_BANG_.call(null,ch);
var state_62765__$1 = state_62765;
var statearr_62776_62802 = state_62765__$1;
(statearr_62776_62802[(2)] = inst_62756);

(statearr_62776_62802[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (9))){
var state_62765__$1 = state_62765;
if(cljs.core.truth_(close_QMARK_)){
var statearr_62777_62803 = state_62765__$1;
(statearr_62777_62803[(1)] = (11));

} else {
var statearr_62778_62804 = state_62765__$1;
(statearr_62778_62804[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (5))){
var inst_62742 = (state_62765[(7)]);
var state_62765__$1 = state_62765;
var statearr_62779_62805 = state_62765__$1;
(statearr_62779_62805[(2)] = inst_62742);

(statearr_62779_62805[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (10))){
var inst_62761 = (state_62765[(2)]);
var state_62765__$1 = state_62765;
var statearr_62780_62806 = state_62765__$1;
(statearr_62780_62806[(2)] = inst_62761);

(statearr_62780_62806[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_62766 === (8))){
var inst_62742 = (state_62765[(7)]);
var inst_62752 = cljs.core.next.call(null,inst_62742);
var inst_62742__$1 = inst_62752;
var state_62765__$1 = (function (){var statearr_62781 = state_62765;
(statearr_62781[(7)] = inst_62742__$1);

return statearr_62781;
})();
var statearr_62782_62807 = state_62765__$1;
(statearr_62782_62807[(2)] = null);

(statearr_62782_62807[(1)] = (2));


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
});})(c__19425__auto__))
;
return ((function (switch__19404__auto__,c__19425__auto__){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_62786 = [null,null,null,null,null,null,null,null];
(statearr_62786[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_62786[(1)] = (1));

return statearr_62786;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_62765){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_62765);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e62787){if((e62787 instanceof Object)){
var ex__19408__auto__ = e62787;
var statearr_62788_62808 = state_62765;
(statearr_62788_62808[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_62765);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e62787;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__62809 = state_62765;
state_62765 = G__62809;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_62765){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_62765);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__))
})();
var state__19427__auto__ = (function (){var statearr_62789 = f__19426__auto__.call(null);
(statearr_62789[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_62789;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__))
);

return c__19425__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async63031 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63031 = (function (mult,ch,cs,meta63032){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta63032 = meta63032;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_63033,meta63032__$1){
var self__ = this;
var _63033__$1 = this;
return (new cljs.core.async.t_cljs$core$async63031(self__.mult,self__.ch,self__.cs,meta63032__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_63033){
var self__ = this;
var _63033__$1 = this;
return self__.meta63032;
});})(cs))
;

cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63031.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async63031.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mult(iple) of the supplied channel. Channels\n  containing copies of the channel can be created with 'tap', and\n  detached with 'untap'.\n\n  Each item is distributed to all taps in parallel and synchronously,\n  i.e. each tap must accept before the next item is distributed. Use\n  buffering/windowing to prevent slow taps from holding up the mult.\n\n  Items received when there are no taps get dropped.\n\n  If a tap puts to a closed channel, it will be removed from the mult."], null)),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta63032","meta63032",-1223563842,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async63031.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63031.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63031";

cljs.core.async.t_cljs$core$async63031.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async63031");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async63031 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async63031(mult__$1,ch__$1,cs__$1,meta63032){
return (new cljs.core.async.t_cljs$core$async63031(mult__$1,ch__$1,cs__$1,meta63032));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async63031(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__19425__auto___63252 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___63252,cs,m,dchan,dctr,done){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___63252,cs,m,dchan,dctr,done){
return (function (state_63164){
var state_val_63165 = (state_63164[(1)]);
if((state_val_63165 === (7))){
var inst_63160 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63166_63253 = state_63164__$1;
(statearr_63166_63253[(2)] = inst_63160);

(statearr_63166_63253[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (20))){
var inst_63065 = (state_63164[(7)]);
var inst_63075 = cljs.core.first.call(null,inst_63065);
var inst_63076 = cljs.core.nth.call(null,inst_63075,(0),null);
var inst_63077 = cljs.core.nth.call(null,inst_63075,(1),null);
var state_63164__$1 = (function (){var statearr_63167 = state_63164;
(statearr_63167[(8)] = inst_63076);

return statearr_63167;
})();
if(cljs.core.truth_(inst_63077)){
var statearr_63168_63254 = state_63164__$1;
(statearr_63168_63254[(1)] = (22));

} else {
var statearr_63169_63255 = state_63164__$1;
(statearr_63169_63255[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (27))){
var inst_63112 = (state_63164[(9)]);
var inst_63107 = (state_63164[(10)]);
var inst_63036 = (state_63164[(11)]);
var inst_63105 = (state_63164[(12)]);
var inst_63112__$1 = cljs.core._nth.call(null,inst_63105,inst_63107);
var inst_63113 = cljs.core.async.put_BANG_.call(null,inst_63112__$1,inst_63036,done);
var state_63164__$1 = (function (){var statearr_63170 = state_63164;
(statearr_63170[(9)] = inst_63112__$1);

return statearr_63170;
})();
if(cljs.core.truth_(inst_63113)){
var statearr_63171_63256 = state_63164__$1;
(statearr_63171_63256[(1)] = (30));

} else {
var statearr_63172_63257 = state_63164__$1;
(statearr_63172_63257[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (1))){
var state_63164__$1 = state_63164;
var statearr_63173_63258 = state_63164__$1;
(statearr_63173_63258[(2)] = null);

(statearr_63173_63258[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (24))){
var inst_63065 = (state_63164[(7)]);
var inst_63082 = (state_63164[(2)]);
var inst_63083 = cljs.core.next.call(null,inst_63065);
var inst_63045 = inst_63083;
var inst_63046 = null;
var inst_63047 = (0);
var inst_63048 = (0);
var state_63164__$1 = (function (){var statearr_63174 = state_63164;
(statearr_63174[(13)] = inst_63045);

(statearr_63174[(14)] = inst_63046);

(statearr_63174[(15)] = inst_63082);

(statearr_63174[(16)] = inst_63048);

(statearr_63174[(17)] = inst_63047);

return statearr_63174;
})();
var statearr_63175_63259 = state_63164__$1;
(statearr_63175_63259[(2)] = null);

(statearr_63175_63259[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (39))){
var state_63164__$1 = state_63164;
var statearr_63179_63260 = state_63164__$1;
(statearr_63179_63260[(2)] = null);

(statearr_63179_63260[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (4))){
var inst_63036 = (state_63164[(11)]);
var inst_63036__$1 = (state_63164[(2)]);
var inst_63037 = (inst_63036__$1 == null);
var state_63164__$1 = (function (){var statearr_63180 = state_63164;
(statearr_63180[(11)] = inst_63036__$1);

return statearr_63180;
})();
if(cljs.core.truth_(inst_63037)){
var statearr_63181_63261 = state_63164__$1;
(statearr_63181_63261[(1)] = (5));

} else {
var statearr_63182_63262 = state_63164__$1;
(statearr_63182_63262[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (15))){
var inst_63045 = (state_63164[(13)]);
var inst_63046 = (state_63164[(14)]);
var inst_63048 = (state_63164[(16)]);
var inst_63047 = (state_63164[(17)]);
var inst_63061 = (state_63164[(2)]);
var inst_63062 = (inst_63048 + (1));
var tmp63176 = inst_63045;
var tmp63177 = inst_63046;
var tmp63178 = inst_63047;
var inst_63045__$1 = tmp63176;
var inst_63046__$1 = tmp63177;
var inst_63047__$1 = tmp63178;
var inst_63048__$1 = inst_63062;
var state_63164__$1 = (function (){var statearr_63183 = state_63164;
(statearr_63183[(18)] = inst_63061);

(statearr_63183[(13)] = inst_63045__$1);

(statearr_63183[(14)] = inst_63046__$1);

(statearr_63183[(16)] = inst_63048__$1);

(statearr_63183[(17)] = inst_63047__$1);

return statearr_63183;
})();
var statearr_63184_63263 = state_63164__$1;
(statearr_63184_63263[(2)] = null);

(statearr_63184_63263[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (21))){
var inst_63086 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63188_63264 = state_63164__$1;
(statearr_63188_63264[(2)] = inst_63086);

(statearr_63188_63264[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (31))){
var inst_63112 = (state_63164[(9)]);
var inst_63116 = done.call(null,null);
var inst_63117 = cljs.core.async.untap_STAR_.call(null,m,inst_63112);
var state_63164__$1 = (function (){var statearr_63189 = state_63164;
(statearr_63189[(19)] = inst_63116);

return statearr_63189;
})();
var statearr_63190_63265 = state_63164__$1;
(statearr_63190_63265[(2)] = inst_63117);

(statearr_63190_63265[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (32))){
var inst_63107 = (state_63164[(10)]);
var inst_63106 = (state_63164[(20)]);
var inst_63105 = (state_63164[(12)]);
var inst_63104 = (state_63164[(21)]);
var inst_63119 = (state_63164[(2)]);
var inst_63120 = (inst_63107 + (1));
var tmp63185 = inst_63106;
var tmp63186 = inst_63105;
var tmp63187 = inst_63104;
var inst_63104__$1 = tmp63187;
var inst_63105__$1 = tmp63186;
var inst_63106__$1 = tmp63185;
var inst_63107__$1 = inst_63120;
var state_63164__$1 = (function (){var statearr_63191 = state_63164;
(statearr_63191[(22)] = inst_63119);

(statearr_63191[(10)] = inst_63107__$1);

(statearr_63191[(20)] = inst_63106__$1);

(statearr_63191[(12)] = inst_63105__$1);

(statearr_63191[(21)] = inst_63104__$1);

return statearr_63191;
})();
var statearr_63192_63266 = state_63164__$1;
(statearr_63192_63266[(2)] = null);

(statearr_63192_63266[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (40))){
var inst_63132 = (state_63164[(23)]);
var inst_63136 = done.call(null,null);
var inst_63137 = cljs.core.async.untap_STAR_.call(null,m,inst_63132);
var state_63164__$1 = (function (){var statearr_63193 = state_63164;
(statearr_63193[(24)] = inst_63136);

return statearr_63193;
})();
var statearr_63194_63267 = state_63164__$1;
(statearr_63194_63267[(2)] = inst_63137);

(statearr_63194_63267[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (33))){
var inst_63123 = (state_63164[(25)]);
var inst_63125 = cljs.core.chunked_seq_QMARK_.call(null,inst_63123);
var state_63164__$1 = state_63164;
if(inst_63125){
var statearr_63195_63268 = state_63164__$1;
(statearr_63195_63268[(1)] = (36));

} else {
var statearr_63196_63269 = state_63164__$1;
(statearr_63196_63269[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (13))){
var inst_63055 = (state_63164[(26)]);
var inst_63058 = cljs.core.async.close_BANG_.call(null,inst_63055);
var state_63164__$1 = state_63164;
var statearr_63197_63270 = state_63164__$1;
(statearr_63197_63270[(2)] = inst_63058);

(statearr_63197_63270[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (22))){
var inst_63076 = (state_63164[(8)]);
var inst_63079 = cljs.core.async.close_BANG_.call(null,inst_63076);
var state_63164__$1 = state_63164;
var statearr_63198_63271 = state_63164__$1;
(statearr_63198_63271[(2)] = inst_63079);

(statearr_63198_63271[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (36))){
var inst_63123 = (state_63164[(25)]);
var inst_63127 = cljs.core.chunk_first.call(null,inst_63123);
var inst_63128 = cljs.core.chunk_rest.call(null,inst_63123);
var inst_63129 = cljs.core.count.call(null,inst_63127);
var inst_63104 = inst_63128;
var inst_63105 = inst_63127;
var inst_63106 = inst_63129;
var inst_63107 = (0);
var state_63164__$1 = (function (){var statearr_63199 = state_63164;
(statearr_63199[(10)] = inst_63107);

(statearr_63199[(20)] = inst_63106);

(statearr_63199[(12)] = inst_63105);

(statearr_63199[(21)] = inst_63104);

return statearr_63199;
})();
var statearr_63200_63272 = state_63164__$1;
(statearr_63200_63272[(2)] = null);

(statearr_63200_63272[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (41))){
var inst_63123 = (state_63164[(25)]);
var inst_63139 = (state_63164[(2)]);
var inst_63140 = cljs.core.next.call(null,inst_63123);
var inst_63104 = inst_63140;
var inst_63105 = null;
var inst_63106 = (0);
var inst_63107 = (0);
var state_63164__$1 = (function (){var statearr_63201 = state_63164;
(statearr_63201[(10)] = inst_63107);

(statearr_63201[(20)] = inst_63106);

(statearr_63201[(27)] = inst_63139);

(statearr_63201[(12)] = inst_63105);

(statearr_63201[(21)] = inst_63104);

return statearr_63201;
})();
var statearr_63202_63273 = state_63164__$1;
(statearr_63202_63273[(2)] = null);

(statearr_63202_63273[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (43))){
var state_63164__$1 = state_63164;
var statearr_63203_63274 = state_63164__$1;
(statearr_63203_63274[(2)] = null);

(statearr_63203_63274[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (29))){
var inst_63148 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63204_63275 = state_63164__$1;
(statearr_63204_63275[(2)] = inst_63148);

(statearr_63204_63275[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (44))){
var inst_63157 = (state_63164[(2)]);
var state_63164__$1 = (function (){var statearr_63205 = state_63164;
(statearr_63205[(28)] = inst_63157);

return statearr_63205;
})();
var statearr_63206_63276 = state_63164__$1;
(statearr_63206_63276[(2)] = null);

(statearr_63206_63276[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (6))){
var inst_63096 = (state_63164[(29)]);
var inst_63095 = cljs.core.deref.call(null,cs);
var inst_63096__$1 = cljs.core.keys.call(null,inst_63095);
var inst_63097 = cljs.core.count.call(null,inst_63096__$1);
var inst_63098 = cljs.core.reset_BANG_.call(null,dctr,inst_63097);
var inst_63103 = cljs.core.seq.call(null,inst_63096__$1);
var inst_63104 = inst_63103;
var inst_63105 = null;
var inst_63106 = (0);
var inst_63107 = (0);
var state_63164__$1 = (function (){var statearr_63207 = state_63164;
(statearr_63207[(30)] = inst_63098);

(statearr_63207[(10)] = inst_63107);

(statearr_63207[(20)] = inst_63106);

(statearr_63207[(12)] = inst_63105);

(statearr_63207[(21)] = inst_63104);

(statearr_63207[(29)] = inst_63096__$1);

return statearr_63207;
})();
var statearr_63208_63277 = state_63164__$1;
(statearr_63208_63277[(2)] = null);

(statearr_63208_63277[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (28))){
var inst_63123 = (state_63164[(25)]);
var inst_63104 = (state_63164[(21)]);
var inst_63123__$1 = cljs.core.seq.call(null,inst_63104);
var state_63164__$1 = (function (){var statearr_63209 = state_63164;
(statearr_63209[(25)] = inst_63123__$1);

return statearr_63209;
})();
if(inst_63123__$1){
var statearr_63210_63278 = state_63164__$1;
(statearr_63210_63278[(1)] = (33));

} else {
var statearr_63211_63279 = state_63164__$1;
(statearr_63211_63279[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (25))){
var inst_63107 = (state_63164[(10)]);
var inst_63106 = (state_63164[(20)]);
var inst_63109 = (inst_63107 < inst_63106);
var inst_63110 = inst_63109;
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63110)){
var statearr_63212_63280 = state_63164__$1;
(statearr_63212_63280[(1)] = (27));

} else {
var statearr_63213_63281 = state_63164__$1;
(statearr_63213_63281[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (34))){
var state_63164__$1 = state_63164;
var statearr_63214_63282 = state_63164__$1;
(statearr_63214_63282[(2)] = null);

(statearr_63214_63282[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (17))){
var state_63164__$1 = state_63164;
var statearr_63215_63283 = state_63164__$1;
(statearr_63215_63283[(2)] = null);

(statearr_63215_63283[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (3))){
var inst_63162 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63164__$1,inst_63162);
} else {
if((state_val_63165 === (12))){
var inst_63091 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63216_63284 = state_63164__$1;
(statearr_63216_63284[(2)] = inst_63091);

(statearr_63216_63284[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (2))){
var state_63164__$1 = state_63164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63164__$1,(4),ch);
} else {
if((state_val_63165 === (23))){
var state_63164__$1 = state_63164;
var statearr_63217_63285 = state_63164__$1;
(statearr_63217_63285[(2)] = null);

(statearr_63217_63285[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (35))){
var inst_63146 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63218_63286 = state_63164__$1;
(statearr_63218_63286[(2)] = inst_63146);

(statearr_63218_63286[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (19))){
var inst_63065 = (state_63164[(7)]);
var inst_63069 = cljs.core.chunk_first.call(null,inst_63065);
var inst_63070 = cljs.core.chunk_rest.call(null,inst_63065);
var inst_63071 = cljs.core.count.call(null,inst_63069);
var inst_63045 = inst_63070;
var inst_63046 = inst_63069;
var inst_63047 = inst_63071;
var inst_63048 = (0);
var state_63164__$1 = (function (){var statearr_63219 = state_63164;
(statearr_63219[(13)] = inst_63045);

(statearr_63219[(14)] = inst_63046);

(statearr_63219[(16)] = inst_63048);

(statearr_63219[(17)] = inst_63047);

return statearr_63219;
})();
var statearr_63220_63287 = state_63164__$1;
(statearr_63220_63287[(2)] = null);

(statearr_63220_63287[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (11))){
var inst_63045 = (state_63164[(13)]);
var inst_63065 = (state_63164[(7)]);
var inst_63065__$1 = cljs.core.seq.call(null,inst_63045);
var state_63164__$1 = (function (){var statearr_63221 = state_63164;
(statearr_63221[(7)] = inst_63065__$1);

return statearr_63221;
})();
if(inst_63065__$1){
var statearr_63222_63288 = state_63164__$1;
(statearr_63222_63288[(1)] = (16));

} else {
var statearr_63223_63289 = state_63164__$1;
(statearr_63223_63289[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (9))){
var inst_63093 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63224_63290 = state_63164__$1;
(statearr_63224_63290[(2)] = inst_63093);

(statearr_63224_63290[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (5))){
var inst_63043 = cljs.core.deref.call(null,cs);
var inst_63044 = cljs.core.seq.call(null,inst_63043);
var inst_63045 = inst_63044;
var inst_63046 = null;
var inst_63047 = (0);
var inst_63048 = (0);
var state_63164__$1 = (function (){var statearr_63225 = state_63164;
(statearr_63225[(13)] = inst_63045);

(statearr_63225[(14)] = inst_63046);

(statearr_63225[(16)] = inst_63048);

(statearr_63225[(17)] = inst_63047);

return statearr_63225;
})();
var statearr_63226_63291 = state_63164__$1;
(statearr_63226_63291[(2)] = null);

(statearr_63226_63291[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (14))){
var state_63164__$1 = state_63164;
var statearr_63227_63292 = state_63164__$1;
(statearr_63227_63292[(2)] = null);

(statearr_63227_63292[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (45))){
var inst_63154 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63228_63293 = state_63164__$1;
(statearr_63228_63293[(2)] = inst_63154);

(statearr_63228_63293[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (26))){
var inst_63096 = (state_63164[(29)]);
var inst_63150 = (state_63164[(2)]);
var inst_63151 = cljs.core.seq.call(null,inst_63096);
var state_63164__$1 = (function (){var statearr_63229 = state_63164;
(statearr_63229[(31)] = inst_63150);

return statearr_63229;
})();
if(inst_63151){
var statearr_63230_63294 = state_63164__$1;
(statearr_63230_63294[(1)] = (42));

} else {
var statearr_63231_63295 = state_63164__$1;
(statearr_63231_63295[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (16))){
var inst_63065 = (state_63164[(7)]);
var inst_63067 = cljs.core.chunked_seq_QMARK_.call(null,inst_63065);
var state_63164__$1 = state_63164;
if(inst_63067){
var statearr_63232_63296 = state_63164__$1;
(statearr_63232_63296[(1)] = (19));

} else {
var statearr_63233_63297 = state_63164__$1;
(statearr_63233_63297[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (38))){
var inst_63143 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63234_63298 = state_63164__$1;
(statearr_63234_63298[(2)] = inst_63143);

(statearr_63234_63298[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (30))){
var state_63164__$1 = state_63164;
var statearr_63235_63299 = state_63164__$1;
(statearr_63235_63299[(2)] = null);

(statearr_63235_63299[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (10))){
var inst_63046 = (state_63164[(14)]);
var inst_63048 = (state_63164[(16)]);
var inst_63054 = cljs.core._nth.call(null,inst_63046,inst_63048);
var inst_63055 = cljs.core.nth.call(null,inst_63054,(0),null);
var inst_63056 = cljs.core.nth.call(null,inst_63054,(1),null);
var state_63164__$1 = (function (){var statearr_63236 = state_63164;
(statearr_63236[(26)] = inst_63055);

return statearr_63236;
})();
if(cljs.core.truth_(inst_63056)){
var statearr_63237_63300 = state_63164__$1;
(statearr_63237_63300[(1)] = (13));

} else {
var statearr_63238_63301 = state_63164__$1;
(statearr_63238_63301[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (18))){
var inst_63089 = (state_63164[(2)]);
var state_63164__$1 = state_63164;
var statearr_63239_63302 = state_63164__$1;
(statearr_63239_63302[(2)] = inst_63089);

(statearr_63239_63302[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (42))){
var state_63164__$1 = state_63164;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63164__$1,(45),dchan);
} else {
if((state_val_63165 === (37))){
var inst_63132 = (state_63164[(23)]);
var inst_63123 = (state_63164[(25)]);
var inst_63036 = (state_63164[(11)]);
var inst_63132__$1 = cljs.core.first.call(null,inst_63123);
var inst_63133 = cljs.core.async.put_BANG_.call(null,inst_63132__$1,inst_63036,done);
var state_63164__$1 = (function (){var statearr_63240 = state_63164;
(statearr_63240[(23)] = inst_63132__$1);

return statearr_63240;
})();
if(cljs.core.truth_(inst_63133)){
var statearr_63241_63303 = state_63164__$1;
(statearr_63241_63303[(1)] = (39));

} else {
var statearr_63242_63304 = state_63164__$1;
(statearr_63242_63304[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63165 === (8))){
var inst_63048 = (state_63164[(16)]);
var inst_63047 = (state_63164[(17)]);
var inst_63050 = (inst_63048 < inst_63047);
var inst_63051 = inst_63050;
var state_63164__$1 = state_63164;
if(cljs.core.truth_(inst_63051)){
var statearr_63243_63305 = state_63164__$1;
(statearr_63243_63305[(1)] = (10));

} else {
var statearr_63244_63306 = state_63164__$1;
(statearr_63244_63306[(1)] = (11));

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
});})(c__19425__auto___63252,cs,m,dchan,dctr,done))
;
return ((function (switch__19404__auto__,c__19425__auto___63252,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__19405__auto__ = null;
var cljs$core$async$mult_$_state_machine__19405__auto____0 = (function (){
var statearr_63248 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63248[(0)] = cljs$core$async$mult_$_state_machine__19405__auto__);

(statearr_63248[(1)] = (1));

return statearr_63248;
});
var cljs$core$async$mult_$_state_machine__19405__auto____1 = (function (state_63164){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_63164);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e63249){if((e63249 instanceof Object)){
var ex__19408__auto__ = e63249;
var statearr_63250_63307 = state_63164;
(statearr_63250_63307[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63164);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63308 = state_63164;
state_63164 = G__63308;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__19405__auto__ = function(state_63164){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__19405__auto____1.call(this,state_63164);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__19405__auto____0;
cljs$core$async$mult_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__19405__auto____1;
return cljs$core$async$mult_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___63252,cs,m,dchan,dctr,done))
})();
var state__19427__auto__ = (function (){var statearr_63251 = f__19426__auto__.call(null);
(statearr_63251[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___63252);

return statearr_63251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___63252,cs,m,dchan,dctr,done))
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
var args63309 = [];
var len__17378__auto___63312 = arguments.length;
var i__17379__auto___63313 = (0);
while(true){
if((i__17379__auto___63313 < len__17378__auto___63312)){
args63309.push((arguments[i__17379__auto___63313]));

var G__63314 = (i__17379__auto___63313 + (1));
i__17379__auto___63313 = G__63314;
continue;
} else {
}
break;
}

var G__63311 = args63309.length;
switch (G__63311) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63309.length)].join('')));

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
var len__17378__auto___63326 = arguments.length;
var i__17379__auto___63327 = (0);
while(true){
if((i__17379__auto___63327 < len__17378__auto___63326)){
args__17385__auto__.push((arguments[i__17379__auto___63327]));

var G__63328 = (i__17379__auto___63327 + (1));
i__17379__auto___63327 = G__63328;
continue;
} else {
}
break;
}

var argseq__17386__auto__ = ((((3) < args__17385__auto__.length))?(new cljs.core.IndexedSeq(args__17385__auto__.slice((3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__17386__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__63320){
var map__63321 = p__63320;
var map__63321__$1 = ((((!((map__63321 == null)))?((((map__63321.cljs$lang$protocol_mask$partition0$ & (64))) || (map__63321.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__63321):map__63321);
var opts = map__63321__$1;
var statearr_63323_63329 = state;
(statearr_63323_63329[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts.call(null,((function (map__63321,map__63321__$1,opts){
return (function (val){
var statearr_63324_63330 = state;
(statearr_63324_63330[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__63321,map__63321__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_63325_63331 = state;
(statearr_63325_63331[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq63316){
var G__63317 = cljs.core.first.call(null,seq63316);
var seq63316__$1 = cljs.core.next.call(null,seq63316);
var G__63318 = cljs.core.first.call(null,seq63316__$1);
var seq63316__$2 = cljs.core.next.call(null,seq63316__$1);
var G__63319 = cljs.core.first.call(null,seq63316__$2);
var seq63316__$3 = cljs.core.next.call(null,seq63316__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__63317,G__63318,G__63319,seq63316__$3);
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
if(typeof cljs.core.async.t_cljs$core$async63495 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63495 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta63496){
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
this.meta63496 = meta63496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63497,meta63496__$1){
var self__ = this;
var _63497__$1 = this;
return (new cljs.core.async.t_cljs$core$async63495(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta63496__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_63497){
var self__ = this;
var _63497__$1 = this;
return self__.meta63496;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async63495.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),cljs.core.with_meta(new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Creates and returns a mix of one or more input channels which will\n  be put on the supplied out channel. Input sources can be added to\n  the mix with 'admix', and removed with 'unmix'. A mix supports\n  soloing, muting and pausing multiple inputs atomically using\n  'toggle', and can solo using either muting or pausing as determined\n  by 'solo-mode'.\n\n  Each channel can have zero or more boolean modes set via 'toggle':\n\n  :solo - when true, only this (ond other soloed) channel(s) will appear\n          in the mix output channel. :mute and :pause states of soloed\n          channels are ignored. If solo-mode is :mute, non-soloed\n          channels are muted, if :pause, non-soloed channels are\n          paused.\n\n  :mute - muted channels will have their contents consumed but not included in the mix\n  :pause - paused channels will not have their contents consumed (and thus also not included in the mix)\n"], null)),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta63496","meta63496",-496014693,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async63495.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63495.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63495";

cljs.core.async.t_cljs$core$async63495.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async63495");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async63495 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async63495(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63496){
return (new cljs.core.async.t_cljs$core$async63495(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta63496));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async63495(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19425__auto___63658 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___63658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___63658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_63595){
var state_val_63596 = (state_63595[(1)]);
if((state_val_63596 === (7))){
var inst_63513 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63597_63659 = state_63595__$1;
(statearr_63597_63659[(2)] = inst_63513);

(statearr_63597_63659[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (20))){
var inst_63525 = (state_63595[(7)]);
var state_63595__$1 = state_63595;
var statearr_63598_63660 = state_63595__$1;
(statearr_63598_63660[(2)] = inst_63525);

(statearr_63598_63660[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (27))){
var state_63595__$1 = state_63595;
var statearr_63599_63661 = state_63595__$1;
(statearr_63599_63661[(2)] = null);

(statearr_63599_63661[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (1))){
var inst_63501 = (state_63595[(8)]);
var inst_63501__$1 = calc_state.call(null);
var inst_63503 = (inst_63501__$1 == null);
var inst_63504 = cljs.core.not.call(null,inst_63503);
var state_63595__$1 = (function (){var statearr_63600 = state_63595;
(statearr_63600[(8)] = inst_63501__$1);

return statearr_63600;
})();
if(inst_63504){
var statearr_63601_63662 = state_63595__$1;
(statearr_63601_63662[(1)] = (2));

} else {
var statearr_63602_63663 = state_63595__$1;
(statearr_63602_63663[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (24))){
var inst_63569 = (state_63595[(9)]);
var inst_63548 = (state_63595[(10)]);
var inst_63555 = (state_63595[(11)]);
var inst_63569__$1 = inst_63548.call(null,inst_63555);
var state_63595__$1 = (function (){var statearr_63603 = state_63595;
(statearr_63603[(9)] = inst_63569__$1);

return statearr_63603;
})();
if(cljs.core.truth_(inst_63569__$1)){
var statearr_63604_63664 = state_63595__$1;
(statearr_63604_63664[(1)] = (29));

} else {
var statearr_63605_63665 = state_63595__$1;
(statearr_63605_63665[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (4))){
var inst_63516 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63516)){
var statearr_63606_63666 = state_63595__$1;
(statearr_63606_63666[(1)] = (8));

} else {
var statearr_63607_63667 = state_63595__$1;
(statearr_63607_63667[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (15))){
var inst_63542 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63542)){
var statearr_63608_63668 = state_63595__$1;
(statearr_63608_63668[(1)] = (19));

} else {
var statearr_63609_63669 = state_63595__$1;
(statearr_63609_63669[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (21))){
var inst_63547 = (state_63595[(12)]);
var inst_63547__$1 = (state_63595[(2)]);
var inst_63548 = cljs.core.get.call(null,inst_63547__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63549 = cljs.core.get.call(null,inst_63547__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63550 = cljs.core.get.call(null,inst_63547__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_63595__$1 = (function (){var statearr_63610 = state_63595;
(statearr_63610[(13)] = inst_63549);

(statearr_63610[(10)] = inst_63548);

(statearr_63610[(12)] = inst_63547__$1);

return statearr_63610;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_63595__$1,(22),inst_63550);
} else {
if((state_val_63596 === (31))){
var inst_63577 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63577)){
var statearr_63611_63670 = state_63595__$1;
(statearr_63611_63670[(1)] = (32));

} else {
var statearr_63612_63671 = state_63595__$1;
(statearr_63612_63671[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (32))){
var inst_63554 = (state_63595[(14)]);
var state_63595__$1 = state_63595;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63595__$1,(35),out,inst_63554);
} else {
if((state_val_63596 === (33))){
var inst_63547 = (state_63595[(12)]);
var inst_63525 = inst_63547;
var state_63595__$1 = (function (){var statearr_63613 = state_63595;
(statearr_63613[(7)] = inst_63525);

return statearr_63613;
})();
var statearr_63614_63672 = state_63595__$1;
(statearr_63614_63672[(2)] = null);

(statearr_63614_63672[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (13))){
var inst_63525 = (state_63595[(7)]);
var inst_63532 = inst_63525.cljs$lang$protocol_mask$partition0$;
var inst_63533 = (inst_63532 & (64));
var inst_63534 = inst_63525.cljs$core$ISeq$;
var inst_63535 = (inst_63533) || (inst_63534);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63535)){
var statearr_63615_63673 = state_63595__$1;
(statearr_63615_63673[(1)] = (16));

} else {
var statearr_63616_63674 = state_63595__$1;
(statearr_63616_63674[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (22))){
var inst_63554 = (state_63595[(14)]);
var inst_63555 = (state_63595[(11)]);
var inst_63553 = (state_63595[(2)]);
var inst_63554__$1 = cljs.core.nth.call(null,inst_63553,(0),null);
var inst_63555__$1 = cljs.core.nth.call(null,inst_63553,(1),null);
var inst_63556 = (inst_63554__$1 == null);
var inst_63557 = cljs.core._EQ_.call(null,inst_63555__$1,change);
var inst_63558 = (inst_63556) || (inst_63557);
var state_63595__$1 = (function (){var statearr_63617 = state_63595;
(statearr_63617[(14)] = inst_63554__$1);

(statearr_63617[(11)] = inst_63555__$1);

return statearr_63617;
})();
if(cljs.core.truth_(inst_63558)){
var statearr_63618_63675 = state_63595__$1;
(statearr_63618_63675[(1)] = (23));

} else {
var statearr_63619_63676 = state_63595__$1;
(statearr_63619_63676[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (36))){
var inst_63547 = (state_63595[(12)]);
var inst_63525 = inst_63547;
var state_63595__$1 = (function (){var statearr_63620 = state_63595;
(statearr_63620[(7)] = inst_63525);

return statearr_63620;
})();
var statearr_63621_63677 = state_63595__$1;
(statearr_63621_63677[(2)] = null);

(statearr_63621_63677[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (29))){
var inst_63569 = (state_63595[(9)]);
var state_63595__$1 = state_63595;
var statearr_63622_63678 = state_63595__$1;
(statearr_63622_63678[(2)] = inst_63569);

(statearr_63622_63678[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (6))){
var state_63595__$1 = state_63595;
var statearr_63623_63679 = state_63595__$1;
(statearr_63623_63679[(2)] = false);

(statearr_63623_63679[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (28))){
var inst_63565 = (state_63595[(2)]);
var inst_63566 = calc_state.call(null);
var inst_63525 = inst_63566;
var state_63595__$1 = (function (){var statearr_63624 = state_63595;
(statearr_63624[(15)] = inst_63565);

(statearr_63624[(7)] = inst_63525);

return statearr_63624;
})();
var statearr_63625_63680 = state_63595__$1;
(statearr_63625_63680[(2)] = null);

(statearr_63625_63680[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (25))){
var inst_63591 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63626_63681 = state_63595__$1;
(statearr_63626_63681[(2)] = inst_63591);

(statearr_63626_63681[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (34))){
var inst_63589 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63627_63682 = state_63595__$1;
(statearr_63627_63682[(2)] = inst_63589);

(statearr_63627_63682[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (17))){
var state_63595__$1 = state_63595;
var statearr_63628_63683 = state_63595__$1;
(statearr_63628_63683[(2)] = false);

(statearr_63628_63683[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (3))){
var state_63595__$1 = state_63595;
var statearr_63629_63684 = state_63595__$1;
(statearr_63629_63684[(2)] = false);

(statearr_63629_63684[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (12))){
var inst_63593 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63595__$1,inst_63593);
} else {
if((state_val_63596 === (2))){
var inst_63501 = (state_63595[(8)]);
var inst_63506 = inst_63501.cljs$lang$protocol_mask$partition0$;
var inst_63507 = (inst_63506 & (64));
var inst_63508 = inst_63501.cljs$core$ISeq$;
var inst_63509 = (inst_63507) || (inst_63508);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63509)){
var statearr_63630_63685 = state_63595__$1;
(statearr_63630_63685[(1)] = (5));

} else {
var statearr_63631_63686 = state_63595__$1;
(statearr_63631_63686[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (23))){
var inst_63554 = (state_63595[(14)]);
var inst_63560 = (inst_63554 == null);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63560)){
var statearr_63632_63687 = state_63595__$1;
(statearr_63632_63687[(1)] = (26));

} else {
var statearr_63633_63688 = state_63595__$1;
(statearr_63633_63688[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (35))){
var inst_63580 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
if(cljs.core.truth_(inst_63580)){
var statearr_63634_63689 = state_63595__$1;
(statearr_63634_63689[(1)] = (36));

} else {
var statearr_63635_63690 = state_63595__$1;
(statearr_63635_63690[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (19))){
var inst_63525 = (state_63595[(7)]);
var inst_63544 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63525);
var state_63595__$1 = state_63595;
var statearr_63636_63691 = state_63595__$1;
(statearr_63636_63691[(2)] = inst_63544);

(statearr_63636_63691[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (11))){
var inst_63525 = (state_63595[(7)]);
var inst_63529 = (inst_63525 == null);
var inst_63530 = cljs.core.not.call(null,inst_63529);
var state_63595__$1 = state_63595;
if(inst_63530){
var statearr_63637_63692 = state_63595__$1;
(statearr_63637_63692[(1)] = (13));

} else {
var statearr_63638_63693 = state_63595__$1;
(statearr_63638_63693[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (9))){
var inst_63501 = (state_63595[(8)]);
var state_63595__$1 = state_63595;
var statearr_63639_63694 = state_63595__$1;
(statearr_63639_63694[(2)] = inst_63501);

(statearr_63639_63694[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (5))){
var state_63595__$1 = state_63595;
var statearr_63640_63695 = state_63595__$1;
(statearr_63640_63695[(2)] = true);

(statearr_63640_63695[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (14))){
var state_63595__$1 = state_63595;
var statearr_63641_63696 = state_63595__$1;
(statearr_63641_63696[(2)] = false);

(statearr_63641_63696[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (26))){
var inst_63555 = (state_63595[(11)]);
var inst_63562 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_63555);
var state_63595__$1 = state_63595;
var statearr_63642_63697 = state_63595__$1;
(statearr_63642_63697[(2)] = inst_63562);

(statearr_63642_63697[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (16))){
var state_63595__$1 = state_63595;
var statearr_63643_63698 = state_63595__$1;
(statearr_63643_63698[(2)] = true);

(statearr_63643_63698[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (38))){
var inst_63585 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63644_63699 = state_63595__$1;
(statearr_63644_63699[(2)] = inst_63585);

(statearr_63644_63699[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (30))){
var inst_63549 = (state_63595[(13)]);
var inst_63548 = (state_63595[(10)]);
var inst_63555 = (state_63595[(11)]);
var inst_63572 = cljs.core.empty_QMARK_.call(null,inst_63548);
var inst_63573 = inst_63549.call(null,inst_63555);
var inst_63574 = cljs.core.not.call(null,inst_63573);
var inst_63575 = (inst_63572) && (inst_63574);
var state_63595__$1 = state_63595;
var statearr_63645_63700 = state_63595__$1;
(statearr_63645_63700[(2)] = inst_63575);

(statearr_63645_63700[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (10))){
var inst_63501 = (state_63595[(8)]);
var inst_63521 = (state_63595[(2)]);
var inst_63522 = cljs.core.get.call(null,inst_63521,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_63523 = cljs.core.get.call(null,inst_63521,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_63524 = cljs.core.get.call(null,inst_63521,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_63525 = inst_63501;
var state_63595__$1 = (function (){var statearr_63646 = state_63595;
(statearr_63646[(7)] = inst_63525);

(statearr_63646[(16)] = inst_63523);

(statearr_63646[(17)] = inst_63522);

(statearr_63646[(18)] = inst_63524);

return statearr_63646;
})();
var statearr_63647_63701 = state_63595__$1;
(statearr_63647_63701[(2)] = null);

(statearr_63647_63701[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (18))){
var inst_63539 = (state_63595[(2)]);
var state_63595__$1 = state_63595;
var statearr_63648_63702 = state_63595__$1;
(statearr_63648_63702[(2)] = inst_63539);

(statearr_63648_63702[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (37))){
var state_63595__$1 = state_63595;
var statearr_63649_63703 = state_63595__$1;
(statearr_63649_63703[(2)] = null);

(statearr_63649_63703[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63596 === (8))){
var inst_63501 = (state_63595[(8)]);
var inst_63518 = cljs.core.apply.call(null,cljs.core.hash_map,inst_63501);
var state_63595__$1 = state_63595;
var statearr_63650_63704 = state_63595__$1;
(statearr_63650_63704[(2)] = inst_63518);

(statearr_63650_63704[(1)] = (10));


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
});})(c__19425__auto___63658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__19404__auto__,c__19425__auto___63658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__19405__auto__ = null;
var cljs$core$async$mix_$_state_machine__19405__auto____0 = (function (){
var statearr_63654 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63654[(0)] = cljs$core$async$mix_$_state_machine__19405__auto__);

(statearr_63654[(1)] = (1));

return statearr_63654;
});
var cljs$core$async$mix_$_state_machine__19405__auto____1 = (function (state_63595){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_63595);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e63655){if((e63655 instanceof Object)){
var ex__19408__auto__ = e63655;
var statearr_63656_63705 = state_63595;
(statearr_63656_63705[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63595);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63655;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63706 = state_63595;
state_63595 = G__63706;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__19405__auto__ = function(state_63595){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__19405__auto____1.call(this,state_63595);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__19405__auto____0;
cljs$core$async$mix_$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__19405__auto____1;
return cljs$core$async$mix_$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___63658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__19427__auto__ = (function (){var statearr_63657 = f__19426__auto__.call(null);
(statearr_63657[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___63658);

return statearr_63657;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___63658,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var args63707 = [];
var len__17378__auto___63710 = arguments.length;
var i__17379__auto___63711 = (0);
while(true){
if((i__17379__auto___63711 < len__17378__auto___63710)){
args63707.push((arguments[i__17379__auto___63711]));

var G__63712 = (i__17379__auto___63711 + (1));
i__17379__auto___63711 = G__63712;
continue;
} else {
}
break;
}

var G__63709 = args63707.length;
switch (G__63709) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63707.length)].join('')));

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
var args63715 = [];
var len__17378__auto___63840 = arguments.length;
var i__17379__auto___63841 = (0);
while(true){
if((i__17379__auto___63841 < len__17378__auto___63840)){
args63715.push((arguments[i__17379__auto___63841]));

var G__63842 = (i__17379__auto___63841 + (1));
i__17379__auto___63841 = G__63842;
continue;
} else {
}
break;
}

var G__63717 = args63715.length;
switch (G__63717) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63715.length)].join('')));

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
return (function (p1__63714_SHARP_){
if(cljs.core.truth_(p1__63714_SHARP_.call(null,topic))){
return p1__63714_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__63714_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__16320__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async63718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async63718 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta63719){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta63719 = meta63719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_63720,meta63719__$1){
var self__ = this;
var _63720__$1 = this;
return (new cljs.core.async.t_cljs$core$async63718(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta63719__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_63720){
var self__ = this;
var _63720__$1 = this;
return self__.meta63719;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63718.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63718.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta63719","meta63719",527013241,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async63718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async63718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async63718";

cljs.core.async.t_cljs$core$async63718.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async63718");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async63718 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async63718(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63719){
return (new cljs.core.async.t_cljs$core$async63718(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta63719));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async63718(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__19425__auto___63844 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___63844,mults,ensure_mult,p){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___63844,mults,ensure_mult,p){
return (function (state_63792){
var state_val_63793 = (state_63792[(1)]);
if((state_val_63793 === (7))){
var inst_63788 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63794_63845 = state_63792__$1;
(statearr_63794_63845[(2)] = inst_63788);

(statearr_63794_63845[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (20))){
var state_63792__$1 = state_63792;
var statearr_63795_63846 = state_63792__$1;
(statearr_63795_63846[(2)] = null);

(statearr_63795_63846[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (1))){
var state_63792__$1 = state_63792;
var statearr_63796_63847 = state_63792__$1;
(statearr_63796_63847[(2)] = null);

(statearr_63796_63847[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (24))){
var inst_63771 = (state_63792[(7)]);
var inst_63780 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_63771);
var state_63792__$1 = state_63792;
var statearr_63797_63848 = state_63792__$1;
(statearr_63797_63848[(2)] = inst_63780);

(statearr_63797_63848[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (4))){
var inst_63723 = (state_63792[(8)]);
var inst_63723__$1 = (state_63792[(2)]);
var inst_63724 = (inst_63723__$1 == null);
var state_63792__$1 = (function (){var statearr_63798 = state_63792;
(statearr_63798[(8)] = inst_63723__$1);

return statearr_63798;
})();
if(cljs.core.truth_(inst_63724)){
var statearr_63799_63849 = state_63792__$1;
(statearr_63799_63849[(1)] = (5));

} else {
var statearr_63800_63850 = state_63792__$1;
(statearr_63800_63850[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (15))){
var inst_63765 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63801_63851 = state_63792__$1;
(statearr_63801_63851[(2)] = inst_63765);

(statearr_63801_63851[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (21))){
var inst_63785 = (state_63792[(2)]);
var state_63792__$1 = (function (){var statearr_63802 = state_63792;
(statearr_63802[(9)] = inst_63785);

return statearr_63802;
})();
var statearr_63803_63852 = state_63792__$1;
(statearr_63803_63852[(2)] = null);

(statearr_63803_63852[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (13))){
var inst_63747 = (state_63792[(10)]);
var inst_63749 = cljs.core.chunked_seq_QMARK_.call(null,inst_63747);
var state_63792__$1 = state_63792;
if(inst_63749){
var statearr_63804_63853 = state_63792__$1;
(statearr_63804_63853[(1)] = (16));

} else {
var statearr_63805_63854 = state_63792__$1;
(statearr_63805_63854[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (22))){
var inst_63777 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
if(cljs.core.truth_(inst_63777)){
var statearr_63806_63855 = state_63792__$1;
(statearr_63806_63855[(1)] = (23));

} else {
var statearr_63807_63856 = state_63792__$1;
(statearr_63807_63856[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (6))){
var inst_63773 = (state_63792[(11)]);
var inst_63771 = (state_63792[(7)]);
var inst_63723 = (state_63792[(8)]);
var inst_63771__$1 = topic_fn.call(null,inst_63723);
var inst_63772 = cljs.core.deref.call(null,mults);
var inst_63773__$1 = cljs.core.get.call(null,inst_63772,inst_63771__$1);
var state_63792__$1 = (function (){var statearr_63808 = state_63792;
(statearr_63808[(11)] = inst_63773__$1);

(statearr_63808[(7)] = inst_63771__$1);

return statearr_63808;
})();
if(cljs.core.truth_(inst_63773__$1)){
var statearr_63809_63857 = state_63792__$1;
(statearr_63809_63857[(1)] = (19));

} else {
var statearr_63810_63858 = state_63792__$1;
(statearr_63810_63858[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (25))){
var inst_63782 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63811_63859 = state_63792__$1;
(statearr_63811_63859[(2)] = inst_63782);

(statearr_63811_63859[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (17))){
var inst_63747 = (state_63792[(10)]);
var inst_63756 = cljs.core.first.call(null,inst_63747);
var inst_63757 = cljs.core.async.muxch_STAR_.call(null,inst_63756);
var inst_63758 = cljs.core.async.close_BANG_.call(null,inst_63757);
var inst_63759 = cljs.core.next.call(null,inst_63747);
var inst_63733 = inst_63759;
var inst_63734 = null;
var inst_63735 = (0);
var inst_63736 = (0);
var state_63792__$1 = (function (){var statearr_63812 = state_63792;
(statearr_63812[(12)] = inst_63735);

(statearr_63812[(13)] = inst_63733);

(statearr_63812[(14)] = inst_63758);

(statearr_63812[(15)] = inst_63736);

(statearr_63812[(16)] = inst_63734);

return statearr_63812;
})();
var statearr_63813_63860 = state_63792__$1;
(statearr_63813_63860[(2)] = null);

(statearr_63813_63860[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (3))){
var inst_63790 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63792__$1,inst_63790);
} else {
if((state_val_63793 === (12))){
var inst_63767 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63814_63861 = state_63792__$1;
(statearr_63814_63861[(2)] = inst_63767);

(statearr_63814_63861[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (2))){
var state_63792__$1 = state_63792;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63792__$1,(4),ch);
} else {
if((state_val_63793 === (23))){
var state_63792__$1 = state_63792;
var statearr_63815_63862 = state_63792__$1;
(statearr_63815_63862[(2)] = null);

(statearr_63815_63862[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (19))){
var inst_63773 = (state_63792[(11)]);
var inst_63723 = (state_63792[(8)]);
var inst_63775 = cljs.core.async.muxch_STAR_.call(null,inst_63773);
var state_63792__$1 = state_63792;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63792__$1,(22),inst_63775,inst_63723);
} else {
if((state_val_63793 === (11))){
var inst_63733 = (state_63792[(13)]);
var inst_63747 = (state_63792[(10)]);
var inst_63747__$1 = cljs.core.seq.call(null,inst_63733);
var state_63792__$1 = (function (){var statearr_63816 = state_63792;
(statearr_63816[(10)] = inst_63747__$1);

return statearr_63816;
})();
if(inst_63747__$1){
var statearr_63817_63863 = state_63792__$1;
(statearr_63817_63863[(1)] = (13));

} else {
var statearr_63818_63864 = state_63792__$1;
(statearr_63818_63864[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (9))){
var inst_63769 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63819_63865 = state_63792__$1;
(statearr_63819_63865[(2)] = inst_63769);

(statearr_63819_63865[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (5))){
var inst_63730 = cljs.core.deref.call(null,mults);
var inst_63731 = cljs.core.vals.call(null,inst_63730);
var inst_63732 = cljs.core.seq.call(null,inst_63731);
var inst_63733 = inst_63732;
var inst_63734 = null;
var inst_63735 = (0);
var inst_63736 = (0);
var state_63792__$1 = (function (){var statearr_63820 = state_63792;
(statearr_63820[(12)] = inst_63735);

(statearr_63820[(13)] = inst_63733);

(statearr_63820[(15)] = inst_63736);

(statearr_63820[(16)] = inst_63734);

return statearr_63820;
})();
var statearr_63821_63866 = state_63792__$1;
(statearr_63821_63866[(2)] = null);

(statearr_63821_63866[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (14))){
var state_63792__$1 = state_63792;
var statearr_63825_63867 = state_63792__$1;
(statearr_63825_63867[(2)] = null);

(statearr_63825_63867[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (16))){
var inst_63747 = (state_63792[(10)]);
var inst_63751 = cljs.core.chunk_first.call(null,inst_63747);
var inst_63752 = cljs.core.chunk_rest.call(null,inst_63747);
var inst_63753 = cljs.core.count.call(null,inst_63751);
var inst_63733 = inst_63752;
var inst_63734 = inst_63751;
var inst_63735 = inst_63753;
var inst_63736 = (0);
var state_63792__$1 = (function (){var statearr_63826 = state_63792;
(statearr_63826[(12)] = inst_63735);

(statearr_63826[(13)] = inst_63733);

(statearr_63826[(15)] = inst_63736);

(statearr_63826[(16)] = inst_63734);

return statearr_63826;
})();
var statearr_63827_63868 = state_63792__$1;
(statearr_63827_63868[(2)] = null);

(statearr_63827_63868[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (10))){
var inst_63735 = (state_63792[(12)]);
var inst_63733 = (state_63792[(13)]);
var inst_63736 = (state_63792[(15)]);
var inst_63734 = (state_63792[(16)]);
var inst_63741 = cljs.core._nth.call(null,inst_63734,inst_63736);
var inst_63742 = cljs.core.async.muxch_STAR_.call(null,inst_63741);
var inst_63743 = cljs.core.async.close_BANG_.call(null,inst_63742);
var inst_63744 = (inst_63736 + (1));
var tmp63822 = inst_63735;
var tmp63823 = inst_63733;
var tmp63824 = inst_63734;
var inst_63733__$1 = tmp63823;
var inst_63734__$1 = tmp63824;
var inst_63735__$1 = tmp63822;
var inst_63736__$1 = inst_63744;
var state_63792__$1 = (function (){var statearr_63828 = state_63792;
(statearr_63828[(12)] = inst_63735__$1);

(statearr_63828[(13)] = inst_63733__$1);

(statearr_63828[(17)] = inst_63743);

(statearr_63828[(15)] = inst_63736__$1);

(statearr_63828[(16)] = inst_63734__$1);

return statearr_63828;
})();
var statearr_63829_63869 = state_63792__$1;
(statearr_63829_63869[(2)] = null);

(statearr_63829_63869[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (18))){
var inst_63762 = (state_63792[(2)]);
var state_63792__$1 = state_63792;
var statearr_63830_63870 = state_63792__$1;
(statearr_63830_63870[(2)] = inst_63762);

(statearr_63830_63870[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63793 === (8))){
var inst_63735 = (state_63792[(12)]);
var inst_63736 = (state_63792[(15)]);
var inst_63738 = (inst_63736 < inst_63735);
var inst_63739 = inst_63738;
var state_63792__$1 = state_63792;
if(cljs.core.truth_(inst_63739)){
var statearr_63831_63871 = state_63792__$1;
(statearr_63831_63871[(1)] = (10));

} else {
var statearr_63832_63872 = state_63792__$1;
(statearr_63832_63872[(1)] = (11));

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
});})(c__19425__auto___63844,mults,ensure_mult,p))
;
return ((function (switch__19404__auto__,c__19425__auto___63844,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_63836 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63836[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_63836[(1)] = (1));

return statearr_63836;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_63792){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_63792);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e63837){if((e63837 instanceof Object)){
var ex__19408__auto__ = e63837;
var statearr_63838_63873 = state_63792;
(statearr_63838_63873[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63792);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63837;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63874 = state_63792;
state_63792 = G__63874;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_63792){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_63792);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___63844,mults,ensure_mult,p))
})();
var state__19427__auto__ = (function (){var statearr_63839 = f__19426__auto__.call(null);
(statearr_63839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___63844);

return statearr_63839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___63844,mults,ensure_mult,p))
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
var args63875 = [];
var len__17378__auto___63878 = arguments.length;
var i__17379__auto___63879 = (0);
while(true){
if((i__17379__auto___63879 < len__17378__auto___63878)){
args63875.push((arguments[i__17379__auto___63879]));

var G__63880 = (i__17379__auto___63879 + (1));
i__17379__auto___63879 = G__63880;
continue;
} else {
}
break;
}

var G__63877 = args63875.length;
switch (G__63877) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63875.length)].join('')));

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
var args63882 = [];
var len__17378__auto___63885 = arguments.length;
var i__17379__auto___63886 = (0);
while(true){
if((i__17379__auto___63886 < len__17378__auto___63885)){
args63882.push((arguments[i__17379__auto___63886]));

var G__63887 = (i__17379__auto___63886 + (1));
i__17379__auto___63886 = G__63887;
continue;
} else {
}
break;
}

var G__63884 = args63882.length;
switch (G__63884) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63882.length)].join('')));

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
var args63889 = [];
var len__17378__auto___63960 = arguments.length;
var i__17379__auto___63961 = (0);
while(true){
if((i__17379__auto___63961 < len__17378__auto___63960)){
args63889.push((arguments[i__17379__auto___63961]));

var G__63962 = (i__17379__auto___63961 + (1));
i__17379__auto___63961 = G__63962;
continue;
} else {
}
break;
}

var G__63891 = args63889.length;
switch (G__63891) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63889.length)].join('')));

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
var c__19425__auto___63964 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___63964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___63964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_63930){
var state_val_63931 = (state_63930[(1)]);
if((state_val_63931 === (7))){
var state_63930__$1 = state_63930;
var statearr_63932_63965 = state_63930__$1;
(statearr_63932_63965[(2)] = null);

(statearr_63932_63965[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (1))){
var state_63930__$1 = state_63930;
var statearr_63933_63966 = state_63930__$1;
(statearr_63933_63966[(2)] = null);

(statearr_63933_63966[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (4))){
var inst_63894 = (state_63930[(7)]);
var inst_63896 = (inst_63894 < cnt);
var state_63930__$1 = state_63930;
if(cljs.core.truth_(inst_63896)){
var statearr_63934_63967 = state_63930__$1;
(statearr_63934_63967[(1)] = (6));

} else {
var statearr_63935_63968 = state_63930__$1;
(statearr_63935_63968[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (15))){
var inst_63926 = (state_63930[(2)]);
var state_63930__$1 = state_63930;
var statearr_63936_63969 = state_63930__$1;
(statearr_63936_63969[(2)] = inst_63926);

(statearr_63936_63969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (13))){
var inst_63919 = cljs.core.async.close_BANG_.call(null,out);
var state_63930__$1 = state_63930;
var statearr_63937_63970 = state_63930__$1;
(statearr_63937_63970[(2)] = inst_63919);

(statearr_63937_63970[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (6))){
var state_63930__$1 = state_63930;
var statearr_63938_63971 = state_63930__$1;
(statearr_63938_63971[(2)] = null);

(statearr_63938_63971[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (3))){
var inst_63928 = (state_63930[(2)]);
var state_63930__$1 = state_63930;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_63930__$1,inst_63928);
} else {
if((state_val_63931 === (12))){
var inst_63916 = (state_63930[(8)]);
var inst_63916__$1 = (state_63930[(2)]);
var inst_63917 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_63916__$1);
var state_63930__$1 = (function (){var statearr_63939 = state_63930;
(statearr_63939[(8)] = inst_63916__$1);

return statearr_63939;
})();
if(cljs.core.truth_(inst_63917)){
var statearr_63940_63972 = state_63930__$1;
(statearr_63940_63972[(1)] = (13));

} else {
var statearr_63941_63973 = state_63930__$1;
(statearr_63941_63973[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (2))){
var inst_63893 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_63894 = (0);
var state_63930__$1 = (function (){var statearr_63942 = state_63930;
(statearr_63942[(7)] = inst_63894);

(statearr_63942[(9)] = inst_63893);

return statearr_63942;
})();
var statearr_63943_63974 = state_63930__$1;
(statearr_63943_63974[(2)] = null);

(statearr_63943_63974[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (11))){
var inst_63894 = (state_63930[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_63930,(10),Object,null,(9));
var inst_63903 = chs__$1.call(null,inst_63894);
var inst_63904 = done.call(null,inst_63894);
var inst_63905 = cljs.core.async.take_BANG_.call(null,inst_63903,inst_63904);
var state_63930__$1 = state_63930;
var statearr_63944_63975 = state_63930__$1;
(statearr_63944_63975[(2)] = inst_63905);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63930__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (9))){
var inst_63894 = (state_63930[(7)]);
var inst_63907 = (state_63930[(2)]);
var inst_63908 = (inst_63894 + (1));
var inst_63894__$1 = inst_63908;
var state_63930__$1 = (function (){var statearr_63945 = state_63930;
(statearr_63945[(7)] = inst_63894__$1);

(statearr_63945[(10)] = inst_63907);

return statearr_63945;
})();
var statearr_63946_63976 = state_63930__$1;
(statearr_63946_63976[(2)] = null);

(statearr_63946_63976[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (5))){
var inst_63914 = (state_63930[(2)]);
var state_63930__$1 = (function (){var statearr_63947 = state_63930;
(statearr_63947[(11)] = inst_63914);

return statearr_63947;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_63930__$1,(12),dchan);
} else {
if((state_val_63931 === (14))){
var inst_63916 = (state_63930[(8)]);
var inst_63921 = cljs.core.apply.call(null,f,inst_63916);
var state_63930__$1 = state_63930;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_63930__$1,(16),out,inst_63921);
} else {
if((state_val_63931 === (16))){
var inst_63923 = (state_63930[(2)]);
var state_63930__$1 = (function (){var statearr_63948 = state_63930;
(statearr_63948[(12)] = inst_63923);

return statearr_63948;
})();
var statearr_63949_63977 = state_63930__$1;
(statearr_63949_63977[(2)] = null);

(statearr_63949_63977[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (10))){
var inst_63898 = (state_63930[(2)]);
var inst_63899 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_63930__$1 = (function (){var statearr_63950 = state_63930;
(statearr_63950[(13)] = inst_63898);

return statearr_63950;
})();
var statearr_63951_63978 = state_63930__$1;
(statearr_63951_63978[(2)] = inst_63899);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63930__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_63931 === (8))){
var inst_63912 = (state_63930[(2)]);
var state_63930__$1 = state_63930;
var statearr_63952_63979 = state_63930__$1;
(statearr_63952_63979[(2)] = inst_63912);

(statearr_63952_63979[(1)] = (5));


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
});})(c__19425__auto___63964,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__19404__auto__,c__19425__auto___63964,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_63956 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_63956[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_63956[(1)] = (1));

return statearr_63956;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_63930){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_63930);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e63957){if((e63957 instanceof Object)){
var ex__19408__auto__ = e63957;
var statearr_63958_63980 = state_63930;
(statearr_63958_63980[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_63930);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e63957;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__63981 = state_63930;
state_63930 = G__63981;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_63930){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_63930);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___63964,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__19427__auto__ = (function (){var statearr_63959 = f__19426__auto__.call(null);
(statearr_63959[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___63964);

return statearr_63959;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___63964,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var args63983 = [];
var len__17378__auto___64039 = arguments.length;
var i__17379__auto___64040 = (0);
while(true){
if((i__17379__auto___64040 < len__17378__auto___64039)){
args63983.push((arguments[i__17379__auto___64040]));

var G__64041 = (i__17379__auto___64040 + (1));
i__17379__auto___64040 = G__64041;
continue;
} else {
}
break;
}

var G__63985 = args63983.length;
switch (G__63985) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args63983.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19425__auto___64043 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___64043,out){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___64043,out){
return (function (state_64015){
var state_val_64016 = (state_64015[(1)]);
if((state_val_64016 === (7))){
var inst_63995 = (state_64015[(7)]);
var inst_63994 = (state_64015[(8)]);
var inst_63994__$1 = (state_64015[(2)]);
var inst_63995__$1 = cljs.core.nth.call(null,inst_63994__$1,(0),null);
var inst_63996 = cljs.core.nth.call(null,inst_63994__$1,(1),null);
var inst_63997 = (inst_63995__$1 == null);
var state_64015__$1 = (function (){var statearr_64017 = state_64015;
(statearr_64017[(9)] = inst_63996);

(statearr_64017[(7)] = inst_63995__$1);

(statearr_64017[(8)] = inst_63994__$1);

return statearr_64017;
})();
if(cljs.core.truth_(inst_63997)){
var statearr_64018_64044 = state_64015__$1;
(statearr_64018_64044[(1)] = (8));

} else {
var statearr_64019_64045 = state_64015__$1;
(statearr_64019_64045[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64016 === (1))){
var inst_63986 = cljs.core.vec.call(null,chs);
var inst_63987 = inst_63986;
var state_64015__$1 = (function (){var statearr_64020 = state_64015;
(statearr_64020[(10)] = inst_63987);

return statearr_64020;
})();
var statearr_64021_64046 = state_64015__$1;
(statearr_64021_64046[(2)] = null);

(statearr_64021_64046[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64016 === (4))){
var inst_63987 = (state_64015[(10)]);
var state_64015__$1 = state_64015;
return cljs.core.async.ioc_alts_BANG_.call(null,state_64015__$1,(7),inst_63987);
} else {
if((state_val_64016 === (6))){
var inst_64011 = (state_64015[(2)]);
var state_64015__$1 = state_64015;
var statearr_64022_64047 = state_64015__$1;
(statearr_64022_64047[(2)] = inst_64011);

(statearr_64022_64047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64016 === (3))){
var inst_64013 = (state_64015[(2)]);
var state_64015__$1 = state_64015;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64015__$1,inst_64013);
} else {
if((state_val_64016 === (2))){
var inst_63987 = (state_64015[(10)]);
var inst_63989 = cljs.core.count.call(null,inst_63987);
var inst_63990 = (inst_63989 > (0));
var state_64015__$1 = state_64015;
if(cljs.core.truth_(inst_63990)){
var statearr_64024_64048 = state_64015__$1;
(statearr_64024_64048[(1)] = (4));

} else {
var statearr_64025_64049 = state_64015__$1;
(statearr_64025_64049[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64016 === (11))){
var inst_63987 = (state_64015[(10)]);
var inst_64004 = (state_64015[(2)]);
var tmp64023 = inst_63987;
var inst_63987__$1 = tmp64023;
var state_64015__$1 = (function (){var statearr_64026 = state_64015;
(statearr_64026[(10)] = inst_63987__$1);

(statearr_64026[(11)] = inst_64004);

return statearr_64026;
})();
var statearr_64027_64050 = state_64015__$1;
(statearr_64027_64050[(2)] = null);

(statearr_64027_64050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64016 === (9))){
var inst_63995 = (state_64015[(7)]);
var state_64015__$1 = state_64015;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64015__$1,(11),out,inst_63995);
} else {
if((state_val_64016 === (5))){
var inst_64009 = cljs.core.async.close_BANG_.call(null,out);
var state_64015__$1 = state_64015;
var statearr_64028_64051 = state_64015__$1;
(statearr_64028_64051[(2)] = inst_64009);

(statearr_64028_64051[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64016 === (10))){
var inst_64007 = (state_64015[(2)]);
var state_64015__$1 = state_64015;
var statearr_64029_64052 = state_64015__$1;
(statearr_64029_64052[(2)] = inst_64007);

(statearr_64029_64052[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64016 === (8))){
var inst_63996 = (state_64015[(9)]);
var inst_63995 = (state_64015[(7)]);
var inst_63987 = (state_64015[(10)]);
var inst_63994 = (state_64015[(8)]);
var inst_63999 = (function (){var cs = inst_63987;
var vec__63992 = inst_63994;
var v = inst_63995;
var c = inst_63996;
return ((function (cs,vec__63992,v,c,inst_63996,inst_63995,inst_63987,inst_63994,state_val_64016,c__19425__auto___64043,out){
return (function (p1__63982_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__63982_SHARP_);
});
;})(cs,vec__63992,v,c,inst_63996,inst_63995,inst_63987,inst_63994,state_val_64016,c__19425__auto___64043,out))
})();
var inst_64000 = cljs.core.filterv.call(null,inst_63999,inst_63987);
var inst_63987__$1 = inst_64000;
var state_64015__$1 = (function (){var statearr_64030 = state_64015;
(statearr_64030[(10)] = inst_63987__$1);

return statearr_64030;
})();
var statearr_64031_64053 = state_64015__$1;
(statearr_64031_64053[(2)] = null);

(statearr_64031_64053[(1)] = (2));


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
});})(c__19425__auto___64043,out))
;
return ((function (switch__19404__auto__,c__19425__auto___64043,out){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_64035 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64035[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_64035[(1)] = (1));

return statearr_64035;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_64015){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64015);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e64036){if((e64036 instanceof Object)){
var ex__19408__auto__ = e64036;
var statearr_64037_64054 = state_64015;
(statearr_64037_64054[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64015);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64036;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64055 = state_64015;
state_64015 = G__64055;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_64015){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_64015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___64043,out))
})();
var state__19427__auto__ = (function (){var statearr_64038 = f__19426__auto__.call(null);
(statearr_64038[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___64043);

return statearr_64038;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___64043,out))
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
var args64056 = [];
var len__17378__auto___64105 = arguments.length;
var i__17379__auto___64106 = (0);
while(true){
if((i__17379__auto___64106 < len__17378__auto___64105)){
args64056.push((arguments[i__17379__auto___64106]));

var G__64107 = (i__17379__auto___64106 + (1));
i__17379__auto___64106 = G__64107;
continue;
} else {
}
break;
}

var G__64058 = args64056.length;
switch (G__64058) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64056.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19425__auto___64109 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___64109,out){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___64109,out){
return (function (state_64082){
var state_val_64083 = (state_64082[(1)]);
if((state_val_64083 === (7))){
var inst_64064 = (state_64082[(7)]);
var inst_64064__$1 = (state_64082[(2)]);
var inst_64065 = (inst_64064__$1 == null);
var inst_64066 = cljs.core.not.call(null,inst_64065);
var state_64082__$1 = (function (){var statearr_64084 = state_64082;
(statearr_64084[(7)] = inst_64064__$1);

return statearr_64084;
})();
if(inst_64066){
var statearr_64085_64110 = state_64082__$1;
(statearr_64085_64110[(1)] = (8));

} else {
var statearr_64086_64111 = state_64082__$1;
(statearr_64086_64111[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (1))){
var inst_64059 = (0);
var state_64082__$1 = (function (){var statearr_64087 = state_64082;
(statearr_64087[(8)] = inst_64059);

return statearr_64087;
})();
var statearr_64088_64112 = state_64082__$1;
(statearr_64088_64112[(2)] = null);

(statearr_64088_64112[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (4))){
var state_64082__$1 = state_64082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64082__$1,(7),ch);
} else {
if((state_val_64083 === (6))){
var inst_64077 = (state_64082[(2)]);
var state_64082__$1 = state_64082;
var statearr_64089_64113 = state_64082__$1;
(statearr_64089_64113[(2)] = inst_64077);

(statearr_64089_64113[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (3))){
var inst_64079 = (state_64082[(2)]);
var inst_64080 = cljs.core.async.close_BANG_.call(null,out);
var state_64082__$1 = (function (){var statearr_64090 = state_64082;
(statearr_64090[(9)] = inst_64079);

return statearr_64090;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64082__$1,inst_64080);
} else {
if((state_val_64083 === (2))){
var inst_64059 = (state_64082[(8)]);
var inst_64061 = (inst_64059 < n);
var state_64082__$1 = state_64082;
if(cljs.core.truth_(inst_64061)){
var statearr_64091_64114 = state_64082__$1;
(statearr_64091_64114[(1)] = (4));

} else {
var statearr_64092_64115 = state_64082__$1;
(statearr_64092_64115[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (11))){
var inst_64059 = (state_64082[(8)]);
var inst_64069 = (state_64082[(2)]);
var inst_64070 = (inst_64059 + (1));
var inst_64059__$1 = inst_64070;
var state_64082__$1 = (function (){var statearr_64093 = state_64082;
(statearr_64093[(8)] = inst_64059__$1);

(statearr_64093[(10)] = inst_64069);

return statearr_64093;
})();
var statearr_64094_64116 = state_64082__$1;
(statearr_64094_64116[(2)] = null);

(statearr_64094_64116[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (9))){
var state_64082__$1 = state_64082;
var statearr_64095_64117 = state_64082__$1;
(statearr_64095_64117[(2)] = null);

(statearr_64095_64117[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (5))){
var state_64082__$1 = state_64082;
var statearr_64096_64118 = state_64082__$1;
(statearr_64096_64118[(2)] = null);

(statearr_64096_64118[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (10))){
var inst_64074 = (state_64082[(2)]);
var state_64082__$1 = state_64082;
var statearr_64097_64119 = state_64082__$1;
(statearr_64097_64119[(2)] = inst_64074);

(statearr_64097_64119[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64083 === (8))){
var inst_64064 = (state_64082[(7)]);
var state_64082__$1 = state_64082;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64082__$1,(11),out,inst_64064);
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
});})(c__19425__auto___64109,out))
;
return ((function (switch__19404__auto__,c__19425__auto___64109,out){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_64101 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64101[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_64101[(1)] = (1));

return statearr_64101;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_64082){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e64102){if((e64102 instanceof Object)){
var ex__19408__auto__ = e64102;
var statearr_64103_64120 = state_64082;
(statearr_64103_64120[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64102;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64121 = state_64082;
state_64082 = G__64121;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_64082){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_64082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___64109,out))
})();
var state__19427__auto__ = (function (){var statearr_64104 = f__19426__auto__.call(null);
(statearr_64104[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___64109);

return statearr_64104;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___64109,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async64129 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64129 = (function (map_LT_,f,ch,meta64130){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta64130 = meta64130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64131,meta64130__$1){
var self__ = this;
var _64131__$1 = this;
return (new cljs.core.async.t_cljs$core$async64129(self__.map_LT_,self__.f,self__.ch,meta64130__$1));
});

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64131){
var self__ = this;
var _64131__$1 = this;
return self__.meta64130;
});

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async64132 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64132 = (function (map_LT_,f,ch,meta64130,_,fn1,meta64133){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta64130 = meta64130;
this._ = _;
this.fn1 = fn1;
this.meta64133 = meta64133;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64132.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_64134,meta64133__$1){
var self__ = this;
var _64134__$1 = this;
return (new cljs.core.async.t_cljs$core$async64132(self__.map_LT_,self__.f,self__.ch,self__.meta64130,self__._,self__.fn1,meta64133__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async64132.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_64134){
var self__ = this;
var _64134__$1 = this;
return self__.meta64133;
});})(___$1))
;

cljs.core.async.t_cljs$core$async64132.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t_cljs$core$async64132.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async64132.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__64122_SHARP_){
return f1.call(null,(((p1__64122_SHARP_ == null))?null:self__.f.call(null,p1__64122_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async64132.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64130","meta64130",-567744786,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async64129","cljs.core.async/t_cljs$core$async64129",-1262049487,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta64133","meta64133",-233566711,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async64132.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64132.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64132";

cljs.core.async.t_cljs$core$async64132.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async64132");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async64132 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64132(map_LT___$1,f__$1,ch__$1,meta64130__$1,___$2,fn1__$1,meta64133){
return (new cljs.core.async.t_cljs$core$async64132(map_LT___$1,f__$1,ch__$1,meta64130__$1,___$2,fn1__$1,meta64133));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async64132(self__.map_LT_,self__.f,self__.ch,self__.meta64130,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async64129.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async64129.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64130","meta64130",-567744786,null)], null);
});

cljs.core.async.t_cljs$core$async64129.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64129.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64129";

cljs.core.async.t_cljs$core$async64129.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async64129");
});

cljs.core.async.__GT_t_cljs$core$async64129 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async64129(map_LT___$1,f__$1,ch__$1,meta64130){
return (new cljs.core.async.t_cljs$core$async64129(map_LT___$1,f__$1,ch__$1,meta64130));
});

}

return (new cljs.core.async.t_cljs$core$async64129(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async64138 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64138 = (function (map_GT_,f,ch,meta64139){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta64139 = meta64139;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64140,meta64139__$1){
var self__ = this;
var _64140__$1 = this;
return (new cljs.core.async.t_cljs$core$async64138(self__.map_GT_,self__.f,self__.ch,meta64139__$1));
});

cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64140){
var self__ = this;
var _64140__$1 = this;
return self__.meta64139;
});

cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async64138.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async64138.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64139","meta64139",202523764,null)], null);
});

cljs.core.async.t_cljs$core$async64138.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64138.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64138";

cljs.core.async.t_cljs$core$async64138.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async64138");
});

cljs.core.async.__GT_t_cljs$core$async64138 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async64138(map_GT___$1,f__$1,ch__$1,meta64139){
return (new cljs.core.async.t_cljs$core$async64138(map_GT___$1,f__$1,ch__$1,meta64139));
});

}

return (new cljs.core.async.t_cljs$core$async64138(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async64144 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async64144 = (function (filter_GT_,p,ch,meta64145){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta64145 = meta64145;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_64146,meta64145__$1){
var self__ = this;
var _64146__$1 = this;
return (new cljs.core.async.t_cljs$core$async64144(self__.filter_GT_,self__.p,self__.ch,meta64145__$1));
});

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_64146){
var self__ = this;
var _64146__$1 = this;
return self__.meta64145;
});

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t_cljs$core$async64144.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async64144.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Deprecated - this function will be removed. Use transducer instead"], null)),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta64145","meta64145",-654712036,null)], null);
});

cljs.core.async.t_cljs$core$async64144.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async64144.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async64144";

cljs.core.async.t_cljs$core$async64144.cljs$lang$ctorPrWriter = (function (this__16918__auto__,writer__16919__auto__,opt__16920__auto__){
return cljs.core._write.call(null,writer__16919__auto__,"cljs.core.async/t_cljs$core$async64144");
});

cljs.core.async.__GT_t_cljs$core$async64144 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async64144(filter_GT___$1,p__$1,ch__$1,meta64145){
return (new cljs.core.async.t_cljs$core$async64144(filter_GT___$1,p__$1,ch__$1,meta64145));
});

}

return (new cljs.core.async.t_cljs$core$async64144(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var args64147 = [];
var len__17378__auto___64191 = arguments.length;
var i__17379__auto___64192 = (0);
while(true){
if((i__17379__auto___64192 < len__17378__auto___64191)){
args64147.push((arguments[i__17379__auto___64192]));

var G__64193 = (i__17379__auto___64192 + (1));
i__17379__auto___64192 = G__64193;
continue;
} else {
}
break;
}

var G__64149 = args64147.length;
switch (G__64149) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64147.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19425__auto___64195 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___64195,out){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___64195,out){
return (function (state_64170){
var state_val_64171 = (state_64170[(1)]);
if((state_val_64171 === (7))){
var inst_64166 = (state_64170[(2)]);
var state_64170__$1 = state_64170;
var statearr_64172_64196 = state_64170__$1;
(statearr_64172_64196[(2)] = inst_64166);

(statearr_64172_64196[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (1))){
var state_64170__$1 = state_64170;
var statearr_64173_64197 = state_64170__$1;
(statearr_64173_64197[(2)] = null);

(statearr_64173_64197[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (4))){
var inst_64152 = (state_64170[(7)]);
var inst_64152__$1 = (state_64170[(2)]);
var inst_64153 = (inst_64152__$1 == null);
var state_64170__$1 = (function (){var statearr_64174 = state_64170;
(statearr_64174[(7)] = inst_64152__$1);

return statearr_64174;
})();
if(cljs.core.truth_(inst_64153)){
var statearr_64175_64198 = state_64170__$1;
(statearr_64175_64198[(1)] = (5));

} else {
var statearr_64176_64199 = state_64170__$1;
(statearr_64176_64199[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (6))){
var inst_64152 = (state_64170[(7)]);
var inst_64157 = p.call(null,inst_64152);
var state_64170__$1 = state_64170;
if(cljs.core.truth_(inst_64157)){
var statearr_64177_64200 = state_64170__$1;
(statearr_64177_64200[(1)] = (8));

} else {
var statearr_64178_64201 = state_64170__$1;
(statearr_64178_64201[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (3))){
var inst_64168 = (state_64170[(2)]);
var state_64170__$1 = state_64170;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64170__$1,inst_64168);
} else {
if((state_val_64171 === (2))){
var state_64170__$1 = state_64170;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64170__$1,(4),ch);
} else {
if((state_val_64171 === (11))){
var inst_64160 = (state_64170[(2)]);
var state_64170__$1 = state_64170;
var statearr_64179_64202 = state_64170__$1;
(statearr_64179_64202[(2)] = inst_64160);

(statearr_64179_64202[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (9))){
var state_64170__$1 = state_64170;
var statearr_64180_64203 = state_64170__$1;
(statearr_64180_64203[(2)] = null);

(statearr_64180_64203[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (5))){
var inst_64155 = cljs.core.async.close_BANG_.call(null,out);
var state_64170__$1 = state_64170;
var statearr_64181_64204 = state_64170__$1;
(statearr_64181_64204[(2)] = inst_64155);

(statearr_64181_64204[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (10))){
var inst_64163 = (state_64170[(2)]);
var state_64170__$1 = (function (){var statearr_64182 = state_64170;
(statearr_64182[(8)] = inst_64163);

return statearr_64182;
})();
var statearr_64183_64205 = state_64170__$1;
(statearr_64183_64205[(2)] = null);

(statearr_64183_64205[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64171 === (8))){
var inst_64152 = (state_64170[(7)]);
var state_64170__$1 = state_64170;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64170__$1,(11),out,inst_64152);
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
});})(c__19425__auto___64195,out))
;
return ((function (switch__19404__auto__,c__19425__auto___64195,out){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_64187 = [null,null,null,null,null,null,null,null,null];
(statearr_64187[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_64187[(1)] = (1));

return statearr_64187;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_64170){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64170);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e64188){if((e64188 instanceof Object)){
var ex__19408__auto__ = e64188;
var statearr_64189_64206 = state_64170;
(statearr_64189_64206[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64170);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64188;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64207 = state_64170;
state_64170 = G__64207;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_64170){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_64170);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___64195,out))
})();
var state__19427__auto__ = (function (){var statearr_64190 = f__19426__auto__.call(null);
(statearr_64190[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___64195);

return statearr_64190;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___64195,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var args64208 = [];
var len__17378__auto___64211 = arguments.length;
var i__17379__auto___64212 = (0);
while(true){
if((i__17379__auto___64212 < len__17378__auto___64211)){
args64208.push((arguments[i__17379__auto___64212]));

var G__64213 = (i__17379__auto___64212 + (1));
i__17379__auto___64212 = G__64213;
continue;
} else {
}
break;
}

var G__64210 = args64208.length;
switch (G__64210) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64208.length)].join('')));

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
var c__19425__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto__){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto__){
return (function (state_64380){
var state_val_64381 = (state_64380[(1)]);
if((state_val_64381 === (7))){
var inst_64376 = (state_64380[(2)]);
var state_64380__$1 = state_64380;
var statearr_64382_64423 = state_64380__$1;
(statearr_64382_64423[(2)] = inst_64376);

(statearr_64382_64423[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (20))){
var inst_64346 = (state_64380[(7)]);
var inst_64357 = (state_64380[(2)]);
var inst_64358 = cljs.core.next.call(null,inst_64346);
var inst_64332 = inst_64358;
var inst_64333 = null;
var inst_64334 = (0);
var inst_64335 = (0);
var state_64380__$1 = (function (){var statearr_64383 = state_64380;
(statearr_64383[(8)] = inst_64335);

(statearr_64383[(9)] = inst_64334);

(statearr_64383[(10)] = inst_64357);

(statearr_64383[(11)] = inst_64332);

(statearr_64383[(12)] = inst_64333);

return statearr_64383;
})();
var statearr_64384_64424 = state_64380__$1;
(statearr_64384_64424[(2)] = null);

(statearr_64384_64424[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (1))){
var state_64380__$1 = state_64380;
var statearr_64385_64425 = state_64380__$1;
(statearr_64385_64425[(2)] = null);

(statearr_64385_64425[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (4))){
var inst_64321 = (state_64380[(13)]);
var inst_64321__$1 = (state_64380[(2)]);
var inst_64322 = (inst_64321__$1 == null);
var state_64380__$1 = (function (){var statearr_64386 = state_64380;
(statearr_64386[(13)] = inst_64321__$1);

return statearr_64386;
})();
if(cljs.core.truth_(inst_64322)){
var statearr_64387_64426 = state_64380__$1;
(statearr_64387_64426[(1)] = (5));

} else {
var statearr_64388_64427 = state_64380__$1;
(statearr_64388_64427[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (15))){
var state_64380__$1 = state_64380;
var statearr_64392_64428 = state_64380__$1;
(statearr_64392_64428[(2)] = null);

(statearr_64392_64428[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (21))){
var state_64380__$1 = state_64380;
var statearr_64393_64429 = state_64380__$1;
(statearr_64393_64429[(2)] = null);

(statearr_64393_64429[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (13))){
var inst_64335 = (state_64380[(8)]);
var inst_64334 = (state_64380[(9)]);
var inst_64332 = (state_64380[(11)]);
var inst_64333 = (state_64380[(12)]);
var inst_64342 = (state_64380[(2)]);
var inst_64343 = (inst_64335 + (1));
var tmp64389 = inst_64334;
var tmp64390 = inst_64332;
var tmp64391 = inst_64333;
var inst_64332__$1 = tmp64390;
var inst_64333__$1 = tmp64391;
var inst_64334__$1 = tmp64389;
var inst_64335__$1 = inst_64343;
var state_64380__$1 = (function (){var statearr_64394 = state_64380;
(statearr_64394[(8)] = inst_64335__$1);

(statearr_64394[(14)] = inst_64342);

(statearr_64394[(9)] = inst_64334__$1);

(statearr_64394[(11)] = inst_64332__$1);

(statearr_64394[(12)] = inst_64333__$1);

return statearr_64394;
})();
var statearr_64395_64430 = state_64380__$1;
(statearr_64395_64430[(2)] = null);

(statearr_64395_64430[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (22))){
var state_64380__$1 = state_64380;
var statearr_64396_64431 = state_64380__$1;
(statearr_64396_64431[(2)] = null);

(statearr_64396_64431[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (6))){
var inst_64321 = (state_64380[(13)]);
var inst_64330 = f.call(null,inst_64321);
var inst_64331 = cljs.core.seq.call(null,inst_64330);
var inst_64332 = inst_64331;
var inst_64333 = null;
var inst_64334 = (0);
var inst_64335 = (0);
var state_64380__$1 = (function (){var statearr_64397 = state_64380;
(statearr_64397[(8)] = inst_64335);

(statearr_64397[(9)] = inst_64334);

(statearr_64397[(11)] = inst_64332);

(statearr_64397[(12)] = inst_64333);

return statearr_64397;
})();
var statearr_64398_64432 = state_64380__$1;
(statearr_64398_64432[(2)] = null);

(statearr_64398_64432[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (17))){
var inst_64346 = (state_64380[(7)]);
var inst_64350 = cljs.core.chunk_first.call(null,inst_64346);
var inst_64351 = cljs.core.chunk_rest.call(null,inst_64346);
var inst_64352 = cljs.core.count.call(null,inst_64350);
var inst_64332 = inst_64351;
var inst_64333 = inst_64350;
var inst_64334 = inst_64352;
var inst_64335 = (0);
var state_64380__$1 = (function (){var statearr_64399 = state_64380;
(statearr_64399[(8)] = inst_64335);

(statearr_64399[(9)] = inst_64334);

(statearr_64399[(11)] = inst_64332);

(statearr_64399[(12)] = inst_64333);

return statearr_64399;
})();
var statearr_64400_64433 = state_64380__$1;
(statearr_64400_64433[(2)] = null);

(statearr_64400_64433[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (3))){
var inst_64378 = (state_64380[(2)]);
var state_64380__$1 = state_64380;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64380__$1,inst_64378);
} else {
if((state_val_64381 === (12))){
var inst_64366 = (state_64380[(2)]);
var state_64380__$1 = state_64380;
var statearr_64401_64434 = state_64380__$1;
(statearr_64401_64434[(2)] = inst_64366);

(statearr_64401_64434[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (2))){
var state_64380__$1 = state_64380;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64380__$1,(4),in$);
} else {
if((state_val_64381 === (23))){
var inst_64374 = (state_64380[(2)]);
var state_64380__$1 = state_64380;
var statearr_64402_64435 = state_64380__$1;
(statearr_64402_64435[(2)] = inst_64374);

(statearr_64402_64435[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (19))){
var inst_64361 = (state_64380[(2)]);
var state_64380__$1 = state_64380;
var statearr_64403_64436 = state_64380__$1;
(statearr_64403_64436[(2)] = inst_64361);

(statearr_64403_64436[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (11))){
var inst_64346 = (state_64380[(7)]);
var inst_64332 = (state_64380[(11)]);
var inst_64346__$1 = cljs.core.seq.call(null,inst_64332);
var state_64380__$1 = (function (){var statearr_64404 = state_64380;
(statearr_64404[(7)] = inst_64346__$1);

return statearr_64404;
})();
if(inst_64346__$1){
var statearr_64405_64437 = state_64380__$1;
(statearr_64405_64437[(1)] = (14));

} else {
var statearr_64406_64438 = state_64380__$1;
(statearr_64406_64438[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (9))){
var inst_64368 = (state_64380[(2)]);
var inst_64369 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_64380__$1 = (function (){var statearr_64407 = state_64380;
(statearr_64407[(15)] = inst_64368);

return statearr_64407;
})();
if(cljs.core.truth_(inst_64369)){
var statearr_64408_64439 = state_64380__$1;
(statearr_64408_64439[(1)] = (21));

} else {
var statearr_64409_64440 = state_64380__$1;
(statearr_64409_64440[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (5))){
var inst_64324 = cljs.core.async.close_BANG_.call(null,out);
var state_64380__$1 = state_64380;
var statearr_64410_64441 = state_64380__$1;
(statearr_64410_64441[(2)] = inst_64324);

(statearr_64410_64441[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (14))){
var inst_64346 = (state_64380[(7)]);
var inst_64348 = cljs.core.chunked_seq_QMARK_.call(null,inst_64346);
var state_64380__$1 = state_64380;
if(inst_64348){
var statearr_64411_64442 = state_64380__$1;
(statearr_64411_64442[(1)] = (17));

} else {
var statearr_64412_64443 = state_64380__$1;
(statearr_64412_64443[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (16))){
var inst_64364 = (state_64380[(2)]);
var state_64380__$1 = state_64380;
var statearr_64413_64444 = state_64380__$1;
(statearr_64413_64444[(2)] = inst_64364);

(statearr_64413_64444[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64381 === (10))){
var inst_64335 = (state_64380[(8)]);
var inst_64333 = (state_64380[(12)]);
var inst_64340 = cljs.core._nth.call(null,inst_64333,inst_64335);
var state_64380__$1 = state_64380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64380__$1,(13),out,inst_64340);
} else {
if((state_val_64381 === (18))){
var inst_64346 = (state_64380[(7)]);
var inst_64355 = cljs.core.first.call(null,inst_64346);
var state_64380__$1 = state_64380;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64380__$1,(20),out,inst_64355);
} else {
if((state_val_64381 === (8))){
var inst_64335 = (state_64380[(8)]);
var inst_64334 = (state_64380[(9)]);
var inst_64337 = (inst_64335 < inst_64334);
var inst_64338 = inst_64337;
var state_64380__$1 = state_64380;
if(cljs.core.truth_(inst_64338)){
var statearr_64414_64445 = state_64380__$1;
(statearr_64414_64445[(1)] = (10));

} else {
var statearr_64415_64446 = state_64380__$1;
(statearr_64415_64446[(1)] = (11));

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
});})(c__19425__auto__))
;
return ((function (switch__19404__auto__,c__19425__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__19405__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__19405__auto____0 = (function (){
var statearr_64419 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64419[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__19405__auto__);

(statearr_64419[(1)] = (1));

return statearr_64419;
});
var cljs$core$async$mapcat_STAR__$_state_machine__19405__auto____1 = (function (state_64380){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64380);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e64420){if((e64420 instanceof Object)){
var ex__19408__auto__ = e64420;
var statearr_64421_64447 = state_64380;
(statearr_64421_64447[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64380);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64420;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64448 = state_64380;
state_64380 = G__64448;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__19405__auto__ = function(state_64380){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__19405__auto____1.call(this,state_64380);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__19405__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__19405__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto__))
})();
var state__19427__auto__ = (function (){var statearr_64422 = f__19426__auto__.call(null);
(statearr_64422[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto__);

return statearr_64422;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto__))
);

return c__19425__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var args64449 = [];
var len__17378__auto___64452 = arguments.length;
var i__17379__auto___64453 = (0);
while(true){
if((i__17379__auto___64453 < len__17378__auto___64452)){
args64449.push((arguments[i__17379__auto___64453]));

var G__64454 = (i__17379__auto___64453 + (1));
i__17379__auto___64453 = G__64454;
continue;
} else {
}
break;
}

var G__64451 = args64449.length;
switch (G__64451) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64449.length)].join('')));

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
var args64456 = [];
var len__17378__auto___64459 = arguments.length;
var i__17379__auto___64460 = (0);
while(true){
if((i__17379__auto___64460 < len__17378__auto___64459)){
args64456.push((arguments[i__17379__auto___64460]));

var G__64461 = (i__17379__auto___64460 + (1));
i__17379__auto___64460 = G__64461;
continue;
} else {
}
break;
}

var G__64458 = args64456.length;
switch (G__64458) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64456.length)].join('')));

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
var args64463 = [];
var len__17378__auto___64514 = arguments.length;
var i__17379__auto___64515 = (0);
while(true){
if((i__17379__auto___64515 < len__17378__auto___64514)){
args64463.push((arguments[i__17379__auto___64515]));

var G__64516 = (i__17379__auto___64515 + (1));
i__17379__auto___64515 = G__64516;
continue;
} else {
}
break;
}

var G__64465 = args64463.length;
switch (G__64465) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64463.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19425__auto___64518 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___64518,out){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___64518,out){
return (function (state_64489){
var state_val_64490 = (state_64489[(1)]);
if((state_val_64490 === (7))){
var inst_64484 = (state_64489[(2)]);
var state_64489__$1 = state_64489;
var statearr_64491_64519 = state_64489__$1;
(statearr_64491_64519[(2)] = inst_64484);

(statearr_64491_64519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64490 === (1))){
var inst_64466 = null;
var state_64489__$1 = (function (){var statearr_64492 = state_64489;
(statearr_64492[(7)] = inst_64466);

return statearr_64492;
})();
var statearr_64493_64520 = state_64489__$1;
(statearr_64493_64520[(2)] = null);

(statearr_64493_64520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64490 === (4))){
var inst_64469 = (state_64489[(8)]);
var inst_64469__$1 = (state_64489[(2)]);
var inst_64470 = (inst_64469__$1 == null);
var inst_64471 = cljs.core.not.call(null,inst_64470);
var state_64489__$1 = (function (){var statearr_64494 = state_64489;
(statearr_64494[(8)] = inst_64469__$1);

return statearr_64494;
})();
if(inst_64471){
var statearr_64495_64521 = state_64489__$1;
(statearr_64495_64521[(1)] = (5));

} else {
var statearr_64496_64522 = state_64489__$1;
(statearr_64496_64522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64490 === (6))){
var state_64489__$1 = state_64489;
var statearr_64497_64523 = state_64489__$1;
(statearr_64497_64523[(2)] = null);

(statearr_64497_64523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64490 === (3))){
var inst_64486 = (state_64489[(2)]);
var inst_64487 = cljs.core.async.close_BANG_.call(null,out);
var state_64489__$1 = (function (){var statearr_64498 = state_64489;
(statearr_64498[(9)] = inst_64486);

return statearr_64498;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64489__$1,inst_64487);
} else {
if((state_val_64490 === (2))){
var state_64489__$1 = state_64489;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64489__$1,(4),ch);
} else {
if((state_val_64490 === (11))){
var inst_64469 = (state_64489[(8)]);
var inst_64478 = (state_64489[(2)]);
var inst_64466 = inst_64469;
var state_64489__$1 = (function (){var statearr_64499 = state_64489;
(statearr_64499[(10)] = inst_64478);

(statearr_64499[(7)] = inst_64466);

return statearr_64499;
})();
var statearr_64500_64524 = state_64489__$1;
(statearr_64500_64524[(2)] = null);

(statearr_64500_64524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64490 === (9))){
var inst_64469 = (state_64489[(8)]);
var state_64489__$1 = state_64489;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64489__$1,(11),out,inst_64469);
} else {
if((state_val_64490 === (5))){
var inst_64469 = (state_64489[(8)]);
var inst_64466 = (state_64489[(7)]);
var inst_64473 = cljs.core._EQ_.call(null,inst_64469,inst_64466);
var state_64489__$1 = state_64489;
if(inst_64473){
var statearr_64502_64525 = state_64489__$1;
(statearr_64502_64525[(1)] = (8));

} else {
var statearr_64503_64526 = state_64489__$1;
(statearr_64503_64526[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64490 === (10))){
var inst_64481 = (state_64489[(2)]);
var state_64489__$1 = state_64489;
var statearr_64504_64527 = state_64489__$1;
(statearr_64504_64527[(2)] = inst_64481);

(statearr_64504_64527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64490 === (8))){
var inst_64466 = (state_64489[(7)]);
var tmp64501 = inst_64466;
var inst_64466__$1 = tmp64501;
var state_64489__$1 = (function (){var statearr_64505 = state_64489;
(statearr_64505[(7)] = inst_64466__$1);

return statearr_64505;
})();
var statearr_64506_64528 = state_64489__$1;
(statearr_64506_64528[(2)] = null);

(statearr_64506_64528[(1)] = (2));


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
});})(c__19425__auto___64518,out))
;
return ((function (switch__19404__auto__,c__19425__auto___64518,out){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_64510 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_64510[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_64510[(1)] = (1));

return statearr_64510;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_64489){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64489);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e64511){if((e64511 instanceof Object)){
var ex__19408__auto__ = e64511;
var statearr_64512_64529 = state_64489;
(statearr_64512_64529[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64489);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64511;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64530 = state_64489;
state_64489 = G__64530;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_64489){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_64489);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___64518,out))
})();
var state__19427__auto__ = (function (){var statearr_64513 = f__19426__auto__.call(null);
(statearr_64513[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___64518);

return statearr_64513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___64518,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var args64531 = [];
var len__17378__auto___64601 = arguments.length;
var i__17379__auto___64602 = (0);
while(true){
if((i__17379__auto___64602 < len__17378__auto___64601)){
args64531.push((arguments[i__17379__auto___64602]));

var G__64603 = (i__17379__auto___64602 + (1));
i__17379__auto___64602 = G__64603;
continue;
} else {
}
break;
}

var G__64533 = args64531.length;
switch (G__64533) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64531.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19425__auto___64605 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___64605,out){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___64605,out){
return (function (state_64571){
var state_val_64572 = (state_64571[(1)]);
if((state_val_64572 === (7))){
var inst_64567 = (state_64571[(2)]);
var state_64571__$1 = state_64571;
var statearr_64573_64606 = state_64571__$1;
(statearr_64573_64606[(2)] = inst_64567);

(statearr_64573_64606[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (1))){
var inst_64534 = (new Array(n));
var inst_64535 = inst_64534;
var inst_64536 = (0);
var state_64571__$1 = (function (){var statearr_64574 = state_64571;
(statearr_64574[(7)] = inst_64535);

(statearr_64574[(8)] = inst_64536);

return statearr_64574;
})();
var statearr_64575_64607 = state_64571__$1;
(statearr_64575_64607[(2)] = null);

(statearr_64575_64607[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (4))){
var inst_64539 = (state_64571[(9)]);
var inst_64539__$1 = (state_64571[(2)]);
var inst_64540 = (inst_64539__$1 == null);
var inst_64541 = cljs.core.not.call(null,inst_64540);
var state_64571__$1 = (function (){var statearr_64576 = state_64571;
(statearr_64576[(9)] = inst_64539__$1);

return statearr_64576;
})();
if(inst_64541){
var statearr_64577_64608 = state_64571__$1;
(statearr_64577_64608[(1)] = (5));

} else {
var statearr_64578_64609 = state_64571__$1;
(statearr_64578_64609[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (15))){
var inst_64561 = (state_64571[(2)]);
var state_64571__$1 = state_64571;
var statearr_64579_64610 = state_64571__$1;
(statearr_64579_64610[(2)] = inst_64561);

(statearr_64579_64610[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (13))){
var state_64571__$1 = state_64571;
var statearr_64580_64611 = state_64571__$1;
(statearr_64580_64611[(2)] = null);

(statearr_64580_64611[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (6))){
var inst_64536 = (state_64571[(8)]);
var inst_64557 = (inst_64536 > (0));
var state_64571__$1 = state_64571;
if(cljs.core.truth_(inst_64557)){
var statearr_64581_64612 = state_64571__$1;
(statearr_64581_64612[(1)] = (12));

} else {
var statearr_64582_64613 = state_64571__$1;
(statearr_64582_64613[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (3))){
var inst_64569 = (state_64571[(2)]);
var state_64571__$1 = state_64571;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64571__$1,inst_64569);
} else {
if((state_val_64572 === (12))){
var inst_64535 = (state_64571[(7)]);
var inst_64559 = cljs.core.vec.call(null,inst_64535);
var state_64571__$1 = state_64571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64571__$1,(15),out,inst_64559);
} else {
if((state_val_64572 === (2))){
var state_64571__$1 = state_64571;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64571__$1,(4),ch);
} else {
if((state_val_64572 === (11))){
var inst_64551 = (state_64571[(2)]);
var inst_64552 = (new Array(n));
var inst_64535 = inst_64552;
var inst_64536 = (0);
var state_64571__$1 = (function (){var statearr_64583 = state_64571;
(statearr_64583[(10)] = inst_64551);

(statearr_64583[(7)] = inst_64535);

(statearr_64583[(8)] = inst_64536);

return statearr_64583;
})();
var statearr_64584_64614 = state_64571__$1;
(statearr_64584_64614[(2)] = null);

(statearr_64584_64614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (9))){
var inst_64535 = (state_64571[(7)]);
var inst_64549 = cljs.core.vec.call(null,inst_64535);
var state_64571__$1 = state_64571;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64571__$1,(11),out,inst_64549);
} else {
if((state_val_64572 === (5))){
var inst_64544 = (state_64571[(11)]);
var inst_64539 = (state_64571[(9)]);
var inst_64535 = (state_64571[(7)]);
var inst_64536 = (state_64571[(8)]);
var inst_64543 = (inst_64535[inst_64536] = inst_64539);
var inst_64544__$1 = (inst_64536 + (1));
var inst_64545 = (inst_64544__$1 < n);
var state_64571__$1 = (function (){var statearr_64585 = state_64571;
(statearr_64585[(11)] = inst_64544__$1);

(statearr_64585[(12)] = inst_64543);

return statearr_64585;
})();
if(cljs.core.truth_(inst_64545)){
var statearr_64586_64615 = state_64571__$1;
(statearr_64586_64615[(1)] = (8));

} else {
var statearr_64587_64616 = state_64571__$1;
(statearr_64587_64616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (14))){
var inst_64564 = (state_64571[(2)]);
var inst_64565 = cljs.core.async.close_BANG_.call(null,out);
var state_64571__$1 = (function (){var statearr_64589 = state_64571;
(statearr_64589[(13)] = inst_64564);

return statearr_64589;
})();
var statearr_64590_64617 = state_64571__$1;
(statearr_64590_64617[(2)] = inst_64565);

(statearr_64590_64617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (10))){
var inst_64555 = (state_64571[(2)]);
var state_64571__$1 = state_64571;
var statearr_64591_64618 = state_64571__$1;
(statearr_64591_64618[(2)] = inst_64555);

(statearr_64591_64618[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64572 === (8))){
var inst_64544 = (state_64571[(11)]);
var inst_64535 = (state_64571[(7)]);
var tmp64588 = inst_64535;
var inst_64535__$1 = tmp64588;
var inst_64536 = inst_64544;
var state_64571__$1 = (function (){var statearr_64592 = state_64571;
(statearr_64592[(7)] = inst_64535__$1);

(statearr_64592[(8)] = inst_64536);

return statearr_64592;
})();
var statearr_64593_64619 = state_64571__$1;
(statearr_64593_64619[(2)] = null);

(statearr_64593_64619[(1)] = (2));


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
});})(c__19425__auto___64605,out))
;
return ((function (switch__19404__auto__,c__19425__auto___64605,out){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_64597 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64597[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_64597[(1)] = (1));

return statearr_64597;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_64571){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64571);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e64598){if((e64598 instanceof Object)){
var ex__19408__auto__ = e64598;
var statearr_64599_64620 = state_64571;
(statearr_64599_64620[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64571);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64598;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64621 = state_64571;
state_64571 = G__64621;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_64571){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_64571);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___64605,out))
})();
var state__19427__auto__ = (function (){var statearr_64600 = f__19426__auto__.call(null);
(statearr_64600[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___64605);

return statearr_64600;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___64605,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var args64622 = [];
var len__17378__auto___64696 = arguments.length;
var i__17379__auto___64697 = (0);
while(true){
if((i__17379__auto___64697 < len__17378__auto___64696)){
args64622.push((arguments[i__17379__auto___64697]));

var G__64698 = (i__17379__auto___64697 + (1));
i__17379__auto___64697 = G__64698;
continue;
} else {
}
break;
}

var G__64624 = args64622.length;
switch (G__64624) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args64622.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__19425__auto___64700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__19425__auto___64700,out){
return (function (){
var f__19426__auto__ = (function (){var switch__19404__auto__ = ((function (c__19425__auto___64700,out){
return (function (state_64666){
var state_val_64667 = (state_64666[(1)]);
if((state_val_64667 === (7))){
var inst_64662 = (state_64666[(2)]);
var state_64666__$1 = state_64666;
var statearr_64668_64701 = state_64666__$1;
(statearr_64668_64701[(2)] = inst_64662);

(statearr_64668_64701[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (1))){
var inst_64625 = [];
var inst_64626 = inst_64625;
var inst_64627 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_64666__$1 = (function (){var statearr_64669 = state_64666;
(statearr_64669[(7)] = inst_64626);

(statearr_64669[(8)] = inst_64627);

return statearr_64669;
})();
var statearr_64670_64702 = state_64666__$1;
(statearr_64670_64702[(2)] = null);

(statearr_64670_64702[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (4))){
var inst_64630 = (state_64666[(9)]);
var inst_64630__$1 = (state_64666[(2)]);
var inst_64631 = (inst_64630__$1 == null);
var inst_64632 = cljs.core.not.call(null,inst_64631);
var state_64666__$1 = (function (){var statearr_64671 = state_64666;
(statearr_64671[(9)] = inst_64630__$1);

return statearr_64671;
})();
if(inst_64632){
var statearr_64672_64703 = state_64666__$1;
(statearr_64672_64703[(1)] = (5));

} else {
var statearr_64673_64704 = state_64666__$1;
(statearr_64673_64704[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (15))){
var inst_64656 = (state_64666[(2)]);
var state_64666__$1 = state_64666;
var statearr_64674_64705 = state_64666__$1;
(statearr_64674_64705[(2)] = inst_64656);

(statearr_64674_64705[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (13))){
var state_64666__$1 = state_64666;
var statearr_64675_64706 = state_64666__$1;
(statearr_64675_64706[(2)] = null);

(statearr_64675_64706[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (6))){
var inst_64626 = (state_64666[(7)]);
var inst_64651 = inst_64626.length;
var inst_64652 = (inst_64651 > (0));
var state_64666__$1 = state_64666;
if(cljs.core.truth_(inst_64652)){
var statearr_64676_64707 = state_64666__$1;
(statearr_64676_64707[(1)] = (12));

} else {
var statearr_64677_64708 = state_64666__$1;
(statearr_64677_64708[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (3))){
var inst_64664 = (state_64666[(2)]);
var state_64666__$1 = state_64666;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_64666__$1,inst_64664);
} else {
if((state_val_64667 === (12))){
var inst_64626 = (state_64666[(7)]);
var inst_64654 = cljs.core.vec.call(null,inst_64626);
var state_64666__$1 = state_64666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64666__$1,(15),out,inst_64654);
} else {
if((state_val_64667 === (2))){
var state_64666__$1 = state_64666;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_64666__$1,(4),ch);
} else {
if((state_val_64667 === (11))){
var inst_64634 = (state_64666[(10)]);
var inst_64630 = (state_64666[(9)]);
var inst_64644 = (state_64666[(2)]);
var inst_64645 = [];
var inst_64646 = inst_64645.push(inst_64630);
var inst_64626 = inst_64645;
var inst_64627 = inst_64634;
var state_64666__$1 = (function (){var statearr_64678 = state_64666;
(statearr_64678[(11)] = inst_64646);

(statearr_64678[(12)] = inst_64644);

(statearr_64678[(7)] = inst_64626);

(statearr_64678[(8)] = inst_64627);

return statearr_64678;
})();
var statearr_64679_64709 = state_64666__$1;
(statearr_64679_64709[(2)] = null);

(statearr_64679_64709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (9))){
var inst_64626 = (state_64666[(7)]);
var inst_64642 = cljs.core.vec.call(null,inst_64626);
var state_64666__$1 = state_64666;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_64666__$1,(11),out,inst_64642);
} else {
if((state_val_64667 === (5))){
var inst_64634 = (state_64666[(10)]);
var inst_64627 = (state_64666[(8)]);
var inst_64630 = (state_64666[(9)]);
var inst_64634__$1 = f.call(null,inst_64630);
var inst_64635 = cljs.core._EQ_.call(null,inst_64634__$1,inst_64627);
var inst_64636 = cljs.core.keyword_identical_QMARK_.call(null,inst_64627,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_64637 = (inst_64635) || (inst_64636);
var state_64666__$1 = (function (){var statearr_64680 = state_64666;
(statearr_64680[(10)] = inst_64634__$1);

return statearr_64680;
})();
if(cljs.core.truth_(inst_64637)){
var statearr_64681_64710 = state_64666__$1;
(statearr_64681_64710[(1)] = (8));

} else {
var statearr_64682_64711 = state_64666__$1;
(statearr_64682_64711[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (14))){
var inst_64659 = (state_64666[(2)]);
var inst_64660 = cljs.core.async.close_BANG_.call(null,out);
var state_64666__$1 = (function (){var statearr_64684 = state_64666;
(statearr_64684[(13)] = inst_64659);

return statearr_64684;
})();
var statearr_64685_64712 = state_64666__$1;
(statearr_64685_64712[(2)] = inst_64660);

(statearr_64685_64712[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (10))){
var inst_64649 = (state_64666[(2)]);
var state_64666__$1 = state_64666;
var statearr_64686_64713 = state_64666__$1;
(statearr_64686_64713[(2)] = inst_64649);

(statearr_64686_64713[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_64667 === (8))){
var inst_64634 = (state_64666[(10)]);
var inst_64626 = (state_64666[(7)]);
var inst_64630 = (state_64666[(9)]);
var inst_64639 = inst_64626.push(inst_64630);
var tmp64683 = inst_64626;
var inst_64626__$1 = tmp64683;
var inst_64627 = inst_64634;
var state_64666__$1 = (function (){var statearr_64687 = state_64666;
(statearr_64687[(14)] = inst_64639);

(statearr_64687[(7)] = inst_64626__$1);

(statearr_64687[(8)] = inst_64627);

return statearr_64687;
})();
var statearr_64688_64714 = state_64666__$1;
(statearr_64688_64714[(2)] = null);

(statearr_64688_64714[(1)] = (2));


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
});})(c__19425__auto___64700,out))
;
return ((function (switch__19404__auto__,c__19425__auto___64700,out){
return (function() {
var cljs$core$async$state_machine__19405__auto__ = null;
var cljs$core$async$state_machine__19405__auto____0 = (function (){
var statearr_64692 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_64692[(0)] = cljs$core$async$state_machine__19405__auto__);

(statearr_64692[(1)] = (1));

return statearr_64692;
});
var cljs$core$async$state_machine__19405__auto____1 = (function (state_64666){
while(true){
var ret_value__19406__auto__ = (function (){try{while(true){
var result__19407__auto__ = switch__19404__auto__.call(null,state_64666);
if(cljs.core.keyword_identical_QMARK_.call(null,result__19407__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__19407__auto__;
}
break;
}
}catch (e64693){if((e64693 instanceof Object)){
var ex__19408__auto__ = e64693;
var statearr_64694_64715 = state_64666;
(statearr_64694_64715[(5)] = ex__19408__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_64666);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e64693;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__19406__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__64716 = state_64666;
state_64666 = G__64716;
continue;
} else {
return ret_value__19406__auto__;
}
break;
}
});
cljs$core$async$state_machine__19405__auto__ = function(state_64666){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__19405__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__19405__auto____1.call(this,state_64666);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__19405__auto____0;
cljs$core$async$state_machine__19405__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__19405__auto____1;
return cljs$core$async$state_machine__19405__auto__;
})()
;})(switch__19404__auto__,c__19425__auto___64700,out))
})();
var state__19427__auto__ = (function (){var statearr_64695 = f__19426__auto__.call(null);
(statearr_64695[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__19425__auto___64700);

return statearr_64695;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__19427__auto__);
});})(c__19425__auto___64700,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;

//# sourceMappingURL=async.js.map