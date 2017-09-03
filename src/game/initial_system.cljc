(ns game.initial-system
  (:require [game.constants :as constants]))

;;------------------------------------------------------------
;; planets
;;------------------------------------------------------------

(defn rand-color
  []
  (str "#" (apply str (repeatedly 3 #(rand-nth constants/colors)))))

(defn rand-planet
  []
  (let [r (+ 5 (rand-int 10))]
    {:uuid (rand-int 10000)
     :colors [(rand-color) (rand-color) (rand-color)]
     :gradient-magnitude (inc (rand-int r))
     :gradient-direction (rand-int 3)
     :mass (inc (rand-int 1000))
     :path []
     :r r
     :s [(rand-int 1000)
         (rand-int 1000)]
     :v [(- (/ (rand-int 10) 10) 0.5)
         (- (/ (rand-int 10) 10) 0.5)]
     :a [(/ (- (rand-int 4) 2) 100)
         (/ (- (rand-int 4) 2) 100)]}))

(defn rand-system
  []
  (vec
   (repeatedly
    (inc (rand-int 30))
    rand-planet)))

(defn rand-centered-system
  []
  (conj
   (rand-system)
   {:uuid 123
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (rand-int 10))
    :gradient-direction (rand-int 3)
    :mass 10000000.0
    :path []
    :r 10.0
    :s [500.0 500.0]
    :v [0.0 0.0]
    :a [0.0 0.0]}))

(defn structured-centered-system
  []
  [{:uuid 123
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (rand-int 10))
    :gradient-direction (rand-int 3)
    :mass 10000000.0
    :path []
    :r 10.0
    :s [500.0 500.0]
    :v [0.0 0.0]
    :a [0.0 0.0]}
   {:uuid 124
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (+ 5 (rand-int 10)))
    :gradient-direction (rand-int 3)
    :mass (inc (rand-int 1000))
    :path []
    :r (+ 5 (rand-int 10))
    :s [450.0 500.0]
    :v [0.0 -1.3]
    :a [0.0 0.0]}
   {:uuid 125
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (+ 5 (rand-int 10)))
    :gradient-direction (rand-int 3)
    :mass (inc (rand-int 1000))
    :path []
    :r (+ 5 (rand-int 10))
    :s [400.0 500.0]
    :v [0.0 -1.0]
    :a [0.0 0.0]}
   {:uuid 126
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (+ 5 (rand-int 10)))
    :gradient-direction (rand-int 3)
    :mass (inc (rand-int 1000))
    :path []
    :r (+ 5 (rand-int 10))
    :s [350.0 500.0]
    :v [0.0 -0.8]
    :a [0.0 0.0]}
   {:uuid 127
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (+ 5 (rand-int 10)))
    :gradient-direction (rand-int 3)
    :mass (inc (rand-int 1000))
    :path []
    :r (+ 5 (rand-int 10))
    :s [300.0 500.0]
    :v [0.0 -0.7]
    :a [0.0 0.0]}
   {:uuid 128
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (+ 5 (rand-int 10)))
    :gradient-direction (rand-int 3)
    :mass (inc (rand-int 1000))
    :path []
    :r (+ 5 (rand-int 10))
    :s [200.0 500.0]
    :v [0.0 -0.6]
    :a [0.0 0.0]}
   {:uuid 129
    :colors [(rand-color) (rand-color) (rand-color)]
    :gradient-magnitude (inc (rand-int 4))
    :gradient-direction (rand-int 3)
    :mass 50
    :path []
    :r 4
    :s [100.0 500.0]
    :v [0.0 -0.5]
    :a [0.0 0.0]}])

(def three-body-problem-system
  [{:uuid 123
    :color "#2A4"
    :mass 100000000.0
    :r 2.0
    :s [300.0 500.0]
    :v [0.0 2.0]
    :a [0.0 0.0]}
   {:uuid 124
    :color "#8EF"
    :mass 100000000.0
    :r 2.0
    :s [600.0 500.0]
    :v [-1.5 -1.0]
    :a [0.0 0.0]}
   {:uuid 125
    :color "#22F"
    :mass 100000000.0
    :r 2.0
    :s [500.0 300.0]
    :v [1.5 -1.0]
    :a [0.0 0.0]}])

;;------------------------------------------------------------
;; ships
;;------------------------------------------------------------

(def test-ship
  {:uuid 200
   :mass 0.0000001
   :theta (* Math/PI 1.2)
   :path []
   :s [375.0 500.0]
   :v [0.0 -1.0]
   :thrust 0
   :a [0.0 0.0]})
