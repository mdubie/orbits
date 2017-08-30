// Compiled by ClojureScript 1.7.122 {}
goog.provide('game.mechanics_test');
goog.require('cljs.core');
goog.require('cljs.test');
goog.require('game.mechanics');
game.mechanics_test.planet_1 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(123),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-2.0], null)], null);
game.mechanics_test.planet_2 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(124),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),10.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [100.0,700.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-2.0], null)], null);
game.mechanics_test.planet_3 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(125),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),100.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(300),(600)], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(4),(2)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),(-2)], null)], null);
game.mechanics_test.system_1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.mechanics_test.planet_1,game.mechanics_test.planet_2,game.mechanics_test.planet_3], null);
game.mechanics_test.deftest.call(null,game.mechanics_test.update_planet_position_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,game.mechanics.update_planet_position.call(null,game.mechanics_test.planet_1,1.0),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(123),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [504.0,502.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-2.0], null)], null))));
game.mechanics_test.deftest.call(null,game.mechanics_test.update_planet_velocity_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,game.mechanics.update_planet_velocity.call(null,game.mechanics_test.planet_1,1.0),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(123),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [5.0,0.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,-2.0], null)], null))));
game.mechanics_test.deftest.call(null,game.mechanics_test.p1_PLUS_p2__GT_d_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,447.21359549995793,game.mechanics.p1_PLUS_p2__GT_d.call(null,game.mechanics_test.planet_1,game.mechanics_test.planet_2))));
game.mechanics_test.deftest.call(null,game.mechanics_test.p1_PLUS_p2__GT_a_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-3.9999999999999996E-4,1.9999999999999998E-4], null),game.mechanics.p1_PLUS_p2__GT_a.call(null,game.mechanics_test.planet_1,game.mechanics_test.planet_2,1.0))));
game.mechanics_test.deftest.call(null,game.mechanics_test.sum_vectors_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null),game.mechanics.sum_vectors.call(null,cljs.core.PersistentVector.EMPTY))),game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,2.0], null),game.mechanics.sum_vectors.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,2.0], null)], null)))),game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [2.0,4.0], null),game.mechanics.sum_vectors.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,2.0], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [1.0,2.0], null)], null)))));
game.mechanics_test.deftest.call(null,game.mechanics_test.update_planet_acceleration_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,game.mechanics.update_planet_acceleration.call(null,game.mechanics_test.planet_1,game.mechanics_test.system_1,1.0),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(123),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-8.399999999999999E-7,4.1999999999999995E-7], null)], null))));
game.mechanics_test.planet_4 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(123),new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.1E-5,1.05E-5], null),new cljs.core.Keyword(null,"color","color",1011675173),"#39D"], null);
game.mechanics_test.planet_5 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(124),new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [501.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.1E-5,1.05E-5], null),new cljs.core.Keyword(null,"color","color",1011675173),"#39D"], null);
game.mechanics_test.planet_6 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(125),new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [521.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.1E-5,1.05E-5], null),new cljs.core.Keyword(null,"color","color",1011675173),"#39D"], null);
game.mechanics_test.deftest.call(null,game.mechanics_test.p1_PLUS_p2__GT_collision_QMARK__test,game.mechanics_test.is.call(null,game.mechanics.p1_PLUS_p2__GT_collision_QMARK_.call(null,game.mechanics_test.planet_4,game.mechanics_test.planet_5) === true),game.mechanics_test.is.call(null,game.mechanics.p1_PLUS_p2__GT_collision_QMARK_.call(null,game.mechanics_test.planet_4,game.mechanics_test.planet_6) === false));
game.mechanics_test.system_2 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.mechanics_test.planet_4,game.mechanics_test.planet_5], null);
game.mechanics_test.system_3 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [game.mechanics_test.planet_4,game.mechanics_test.planet_6], null);
game.mechanics_test.deftest.call(null,game.mechanics_test.planets__GT_collided_planets_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,game.mechanics.planets__GT_collided_planets.call(null,game.mechanics_test.system_2),game.mechanics_test.system_2)),game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,game.mechanics.planets__GT_collided_planets.call(null,game.mechanics_test.system_3),cljs.core.PersistentVector.EMPTY)));
game.mechanics_test.planet_7 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(125),new cljs.core.Keyword(null,"mass","mass",-2138950046),20.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,525.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.1E-5,1.05E-5], null),new cljs.core.Keyword(null,"color","color",1011675173),"#39D"], null);
game.mechanics_test.planet_8 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(126),new cljs.core.Keyword(null,"mass","mass",-2138950046),10.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,525.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(-4),(2)], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-2.1E-5,1.05E-5], null),new cljs.core.Keyword(null,"color","color",1011675173),"#61D"], null);
game.mechanics_test.deftest.call(null,game.mechanics_test.weighted_average_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,3.0,game.mechanics.weighted_average.call(null,(2),(4),(1),(1)))),game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,2.5,game.mechanics.weighted_average.call(null,(2),(4),(3),(1)))));
game.mechanics_test.deftest.call(null,game.mechanics_test.color__GT_index_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,(2),game.mechanics.color__GT_index.call(null,"2"))),game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,(10),game.mechanics.color__GT_index.call(null,"A"))));
game.mechanics_test.deftest.call(null,game.mechanics_test.index__GT_color_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,"2",game.mechanics.index__GT_color.call(null,(2)))),game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,"A",game.mechanics.index__GT_color.call(null,(10)))));
game.mechanics_test.deftest.call(null,game.mechanics_test.merge_colors_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,"#46D",game.mechanics.merge_colors.call(null,game.mechanics_test.planet_7,game.mechanics_test.planet_8))));
game.mechanics_test.deftest.call(null,game.mechanics_test.merge_colors_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,14.142135623730951,game.mechanics.r1_PLUS_r2__GT_r.call(null,(10),(10)))));
game.mechanics_test.deftest.call(null,game.mechanics_test.merge_planets_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(125),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),10020.0,new cljs.core.Keyword(null,"r","r",-471384190),14.142135623730951,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [500.0,525.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)], null),game.mechanics.merge_planets.call(null,game.mechanics_test.planet_7,game.mechanics_test.planet_5))));
game.mechanics_test.deftest.call(null,game.mechanics_test.handle_collisions_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,game.mechanics_test.system_3,game.mechanics.handle_collisions.call(null,game.mechanics_test.system_3))),game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(124),new cljs.core.Keyword(null,"color","color",1011675173),"#39D",new cljs.core.Keyword(null,"mass","mass",-2138950046),20000.0,new cljs.core.Keyword(null,"r","r",-471384190),14.142135623730951,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [501.0,500.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [4.0,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [0.0,0.0], null)], null)], null),game.mechanics.handle_collisions.call(null,game.mechanics_test.system_2))));
game.mechanics_test.deftest.call(null,game.mechanics_test.update_planets_test,game.mechanics_test.is.call(null,cljs.core._EQ_.call(null,game.mechanics.update_planets.call(null,game.mechanics_test.system_3,1.0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(123),new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [513.5238095238095,502.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [13.523809523809524,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [9.523809523809524,0.0], null),new cljs.core.Keyword(null,"color","color",1011675173),"#39D"], null),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(125),new cljs.core.Keyword(null,"mass","mass",-2138950046),10000.0,new cljs.core.Keyword(null,"r","r",-471384190),10.0,new cljs.core.Keyword(null,"s","s",1705939918),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [515.4761904761905,502.0], null),new cljs.core.Keyword(null,"v","v",21465059),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-5.523809523809524,2.0], null),new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [-9.523809523809524,0.0], null),new cljs.core.Keyword(null,"color","color",1011675173),"#39D"], null)], null))));

//# sourceMappingURL=mechanics_test.js.map