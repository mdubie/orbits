(ns game.common
  (:require [game.constants :as constants]))

(defn sum-vectors
  [vectors]
  (reduce
   (fn [[sum-x sum-y] [x y]]
     [(+ sum-x x)
      (+ sum-y y)])
   [0.0 0.0]
   vectors))

(defn weighted-average
  [v1 v2 w1 w2]
  (* 1.0
     (/ (+ (* w1 v1)
           (* w2 v2))
        (+ w1 w2))))

(defn abs-rad
  [rad]
  (mod
   (+ (* 2 Math/PI)
      rad)
   (* 2 Math/PI)))

(defn p1+p2->d
  [{[x1 y1] :s}
   {[x2 y2] :s}]
  (Math/sqrt (+ (Math/pow (- x2 x1) 2)
                (Math/pow (- y2 y1) 2))))

(defn p1+p2->a
  [{[x1 y1] :s m1 :mass :as p1}
   {[x2 y2] :s m2 :mass :as p2}]
  (let [c 0.00001
        d (p1+p2->d p1 p2)
        grav-f (/ (* c m1 m2)
                  (Math/pow d 2))
        [ux uy] [(/ (- x2 x1) d)
                 (/ (- y2 y1) d)]]
    [(/ (* ux grav-f) m1)
     (/ (* uy grav-f) m1)]))

(defn p1+p2->collision?
  [{r1 :r :as p1}
   {r2 :r :as p2}]
  (< (p1+p2->d p1 p2)
     (+ r1 r2)))

(defn p1+p2->theta
  [{[x1 y1] :s}
   {[x2 y2] :s}]
  (Math/atan2
   (- y2 y1)
   (- x2 x1)))

(defn r1+r2->r
  [r1 r2]
  (Math/sqrt
   (/ (+
       (* Math/PI r1 r1)
       (* Math/PI r2 r2))
      Math/PI)))

(defn color->index
  [color]
  (last
   (keep-indexed
    (fn [i c]
      (when (= (str color) c)
        i))
    constants/colors)))

(defn index->color
  [i]
  (nth constants/colors (int (Math/floor i))))
