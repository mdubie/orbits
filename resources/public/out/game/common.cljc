(ns game.common
  (:require [game.constants :as constants]))


(defn add-vectors
  [[x1 y1] [x2 y2]]
  [(+ x1 x2)
   (+ y1 y2)])

(defn sum-vectors
  [vectors]
  (reduce
   add-vectors
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

(defn b1+b2->d
  [{[x1 y1] :s}
   {[x2 y2] :s}]
  (Math/sqrt (+ (Math/pow (- x2 x1) 2)
                (Math/pow (- y2 y1) 2))))

(defn p1+p2->collision?
  [{r1 :r :as p1}
   {r2 :r :as p2}]
  (< (b1+b2->d p1 p2)
     (+ r1 r2)))

(defn b1+b2->theta
  [{[x1 y1] :s}
   {[x2 y2] :s}]
  (Math/atan2
   (- y2 y1)
   (- x2 x1)))

(defn theta->unit-vector
  [theta]
  [(Math/cos theta) (- (Math/sin theta))])

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
