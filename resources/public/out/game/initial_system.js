// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.initial_system');
goog.require('cljs.core');
goog.require('game.constants');
game.initial_system.rand_color = (function game$initial_system$rand_color(){
return [cljs.core.str("#"),cljs.core.str(cljs.core.apply.call(null,cljs.core.str,cljs.core.repeatedly.call(null,(3),(function (){
return cljs.core.rand_nth.call(null,game.constants.colors);
}))))].join('');
});
game.initial_system.rand_planet = (function game$initial_system$rand_planet(){
var r = ((5) + cljs.core.rand_int.call(null,(10)));
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(cljs.core.rand_int.call(null,r) + (1)),cljs.core.rand_int.call(null,(3)),(cljs.core.rand_int.call(null,(1000)) + (1)),r,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.rand_int.call(null,(10)) / (10)) - 0.5),((cljs.core.rand_int.call(null,(10)) / (10)) - 0.5)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.rand_int.call(null,(1000)),cljs.core.rand_int.call(null,(1000))], null),cljs.core.rand_int.call(null,(10000)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core.rand_int.call(null,(4)) - (2)) / (100)),((cljs.core.rand_int.call(null,(4)) - (2)) / (100))], null)]);
});
game.initial_system.rand_system = (function game$initial_system$rand_system(){
return cljs.core.vec.call(null,cljs.core.repeatedly.call(null,(cljs.core.rand_int.call(null,(30)) + (1)),game.initial_system.rand_planet));
});
game.initial_system.rand_centered_system = (function game$initial_system$rand_centered_system(){
return cljs.core.conj.call(null,game.initial_system.rand_system.call(null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(cljs.core.rand_int.call(null,(10)) + (1)),cljs.core.rand_int.call(null,(3)),1.0E7,10.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,500.0], null),(123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]));
});
game.initial_system.structured_centered_system = (function game$initial_system$structured_centered_system(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(cljs.core.rand_int.call(null,(10)) + (1)),cljs.core.rand_int.call(null,(3)),1.0E7,10.0,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,500.0], null),(123),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(((5) + cljs.core.rand_int.call(null,(10))) + (1)),cljs.core.rand_int.call(null,(3)),(cljs.core.rand_int.call(null,(1000)) + (1)),((5) + cljs.core.rand_int.call(null,(10))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-1.3], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [450.0,500.0], null),(124),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(((5) + cljs.core.rand_int.call(null,(10))) + (1)),cljs.core.rand_int.call(null,(3)),(cljs.core.rand_int.call(null,(1000)) + (1)),((5) + cljs.core.rand_int.call(null,(10))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-1.0], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [400.0,500.0], null),(125),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(((5) + cljs.core.rand_int.call(null,(10))) + (1)),cljs.core.rand_int.call(null,(3)),(cljs.core.rand_int.call(null,(1000)) + (1)),((5) + cljs.core.rand_int.call(null,(10))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-0.8], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [350.0,500.0], null),(126),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(((5) + cljs.core.rand_int.call(null,(10))) + (1)),cljs.core.rand_int.call(null,(3)),(cljs.core.rand_int.call(null,(1000)) + (1)),((5) + cljs.core.rand_int.call(null,(10))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-0.7], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [300.0,500.0], null),(127),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(((5) + cljs.core.rand_int.call(null,(10))) + (1)),cljs.core.rand_int.call(null,(3)),(cljs.core.rand_int.call(null,(1000)) + (1)),((5) + cljs.core.rand_int.call(null,(10))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-0.6], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [200.0,500.0], null),(128),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)]),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"gradient-magnitude","gradient-magnitude",-729818176),new cljs.core.Keyword(null,"gradient-direction","gradient-direction",-174236511),new cljs.core.Keyword(null,"mass","mass",-2138950046),new cljs.core.Keyword(null,"r","r",-471384190),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"a","a",-2123407586)],[cljs.core.PersistentVector.EMPTY,(((5) + cljs.core.rand_int.call(null,(10))) + (1)),cljs.core.rand_int.call(null,(3)),(50000),(4),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-0.5], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null),game.initial_system.rand_color.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [100.0,500.0], null),(129),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)])], null);
});
game.initial_system.three_body_problem_system = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(123),new cljs.core.Keyword(null,"color","color",1011675173),"#2A4",new cljs.core.Keyword(null,"mass","mass",-2138950046),1.0E8,new cljs.core.Keyword(null,"r","r",-471384190),2.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [300.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(124),new cljs.core.Keyword(null,"color","color",1011675173),"#8EF",new cljs.core.Keyword(null,"mass","mass",-2138950046),1.0E8,new cljs.core.Keyword(null,"r","r",-471384190),2.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [600.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-1.5,-1.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(125),new cljs.core.Keyword(null,"color","color",1011675173),"#22F",new cljs.core.Keyword(null,"mass","mass",-2138950046),1.0E8,new cljs.core.Keyword(null,"r","r",-471384190),2.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,300.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.5,-1.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)], null)], null);
game.initial_system.test_ship = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(200),new cljs.core.Keyword(null,"mass","mass",-2138950046),0.001,new cljs.core.Keyword(null,"theta","theta",-427510258),(Math.PI * 1.2),new cljs.core.Keyword(null,"path","path",-188191168),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [375.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,-1.0], null),new cljs.core.Keyword(null,"thrust","thrust",651754168),1.0,new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)], null);

//# sourceMappingURL=initial_system.js.map