(ns game.mechanics-test
  (:require  #?(:clj [clojure.test :refer [deftest is]]
                :cljs [cljs.test :as t :include-macros true])
   [game.mechanics :as mechanics]))

(def planet-1
  {:uuid 123
   :color "#39D"
   :mass 10000.0
   :r 10.0
   :s [500.0 500.0]
   :v [4.0 2.0]
   :a [1.0 -2.0]})

(def planet-2
  {:uuid 124
   :color "#39D"
   :mass 10.0
   :r 10.0
   :s [100.0 700.0]
   :v [4.0 2.0]
   :a [1.0 -2.0]})

(def planet-3
  {:uuid 125
   :color "#39D"
   :mass 100.0
   :r 10.0
   :s [300 600]
   :v [4 2]
   :a [1 -2]})

(def system-1
  [planet-1 planet-2 planet-3])

(deftest update-planet-position-test
  (is (= (mechanics/update-planet-position planet-1 1.0)
         {:uuid 123
          :color "#39D"
          :mass 10000.0
          :r 10.0
          :s [504.0 502.0]
          :v [4.0 2.0]
          :a [1.0 -2.0]})))

(deftest update-planet-velocity-test
  (is (= (mechanics/update-planet-velocity planet-1 1.0)
         {:uuid 123
          :color "#39D"
          :mass 10000.0
          :r 10.0
          :s [500.0 500.0]
          :v [5.0 0.0]
          :a [1.0 -2.0]})))

(deftest p1+p2->d-test
  (is (= 447.21359549995793
         (mechanics/p1+p2->d planet-1 planet-2))))

(deftest p1+p2->a-test
  (is (= [-3.9999999999999996E-4 1.9999999999999998E-4]
         (mechanics/p1+p2->a planet-1 planet-2 1.0))))

(deftest sum-vectors-test
  (is (= [0.0 0.0] (mechanics/sum-vectors [])))
  (is (= [1.0 2.0] (mechanics/sum-vectors [[1.0 2.0]])))
  (is (= [2.0 4.0] (mechanics/sum-vectors [[1.0 2.0] [1.0 2.0]]))))

(deftest update-planet-acceleration-test
  (is (= (mechanics/update-planet-acceleration planet-1 system-1 1.0)
         {:uuid 123
          :color "#39D"
          :mass 10000.0
          :r 10.0
          :s [500.0 500.0]
          :v [4.0 2.0]
          :a [-8.399999999999999E-7 4.1999999999999995E-7]})))

(def planet-4
 {:uuid 123
  :mass 10000.0
  :r 10.0
  :s [500.0 500.0]
  :v [4.0 2.0]
  :a [-2.1E-5 1.05E-5]
  :color "#39D"})

(def planet-5
  {:uuid 124
   :mass 10000.0
   :r 10.0
   :s [501.0 500.0]
   :v [4.0 2.0]
   :a [-2.1E-5 1.05E-5]
   :color "#39D"})

(def planet-6
  {:uuid 125
   :mass 10000.0
   :r 10.0
   :s [521.0 500.0]
   :v [4.0 2.0]
   :a [-2.1E-5 1.05E-5]
   :color "#39D"})

(deftest p1+p2->collision?-test
  (is (true? (mechanics/p1+p2->collision? planet-4 planet-5)))
  (is (false? (mechanics/p1+p2->collision? planet-4 planet-6))))

(def system-2 [planet-4 planet-5])
(def system-3 [planet-4 planet-6])

(deftest planets->collided-planets-test
  (is (= (mechanics/planets->collided-planets system-2)
         system-2))
  (is (= (mechanics/planets->collided-planets system-3)
         [])))

(def planet-7
  {:uuid 125
   :mass 20.0
   :r 10.0
   :s [500.0 525.0]
   :v [4.0 2.0]
   :a [-2.1E-5 1.05E-5]
   :color "#39D"})

(def planet-8
  {:uuid 126
   :mass 10.0
   :r 10.0
   :s [500.0 525.0]
   :v [-4 2]
   :a [-2.1E-5 1.05E-5]
   :color "#61D"})

(deftest weighted-average-test
  (is (= 3.0 (mechanics/weighted-average 2 4 1 1)))
  (is (= 2.5 (mechanics/weighted-average 2 4 3 1))))

(deftest color->index-test
  (is (= 2 (mechanics/color->index "2")))
  (is (= 10 (mechanics/color->index "A"))))

(deftest index->color-test
  (is (= "2" (mechanics/index->color 2)))
  (is (= "A" (mechanics/index->color 10))))

(deftest merge-colors-test
  (is (= "#46D" (mechanics/merge-colors planet-7 planet-8))))

(deftest merge-colors-test
  (is (= 14.142135623730951 (mechanics/r1+r2->r 10 10))))

(deftest merge-planets-test
  (is (= {:uuid 125
          :color "#39D"
          :mass 10020.0
          :r 14.142135623730951
          :s [500.0 525.0]
          :v [4.0 2.0]
          :a [0.0 0.0]}
         (mechanics/merge-planets planet-7 planet-5))))

(deftest handle-collisions-test
  (is (= system-3 (mechanics/handle-collisions system-3)))
  (is (= [{:uuid 124
           :color "#39D"
           :mass 20000.0
           :r 14.142135623730951
           :s [501.0 500.0]
           :v [4.0 2.0]
           :a [0.0 0.0]}]
         (mechanics/handle-collisions system-2))))

(deftest update-planets-test
  (is (= (mechanics/update-planets system-3 1.0)
         [{:uuid 123
           :mass 10000.0
           :r 10.0
           :s [513.5238095238095 502.0]
           :v [13.523809523809524 2.0]
           :a [9.523809523809524 0.0]
           :color "#39D"}
          {:uuid 125
           :mass 10000.0
           :r 10.0
           :s [515.4761904761905 502.0]
           :v [-5.523809523809524 2.0]
           :a [-9.523809523809524 0.0]
           :color "#39D"}])))
