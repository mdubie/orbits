(ns game.paint
  (:require [game.common :as common]
            [game.constants :as constants]))

(defn by-id
  [id]
  (.getElementById js/document id))

(defn draw-path-helper
  [ctx path]
  (doseq [[x y] path]
    (.lineTo ctx x y)))

(defn rotate-helper
  [ctx theta x y]
  (doto ctx
    (.translate x y)
    (.rotate (+ (- theta) (* Math/PI 0.5)))
    (.translate (- x) (- y))))

(defn size-canvas!
  "Set the size of the canvas."
  [id {:keys [width height]}]
  (let [canvas (by-id id)]
    (aset canvas "width" width)
    (aset canvas "height" height)))

(defn draw-planet-label!
  [ctx {[x y] :s :keys [r color uuid mass]}]
  (doto ctx
    (aset "font" "12px Arial")
    (aset "strokeStyle" "#555")
    (.strokeText (str "p: " uuid) (+ x r 3) (+ y 20))
    (.strokeText (str "m: " mass) (+ x r 3) (+ y 10))))

(defn draw-acceleration-vectors!
  [ctx {[ax ay] :a [x y] :s :keys [r color uuid]}]
  (doto ctx
    (aset "strokeStyle" "#FFF")
    (.beginPath)
    (.moveTo x y)
    (.lineTo (+ x (* 2000 ax))
             (+ y (* 2000 ay)))
    (.stroke)))

(defn draw-velocity-vectors!
  [ctx {[x y] :s [vx vy] :v :keys [r color uuid]}]
  (doto ctx
    (aset "strokeStyle" "#AAA")
    (.beginPath)
    (.moveTo x y)
    (.lineTo (+ x (* 30 vx))
             (+ y (* 30 vy)))
    (.stroke)))

(defn draw-path!
  [ctx {:keys [path]}]
  (let [[x y] (first path)]
    (doto ctx
      (aset "strokeStyle" "#555")
      (.beginPath)
      (.moveTo x y)
      (draw-path-helper path)
      (.stroke))))

(defn draw-planet!
  [ctx {[x y] :s gm :gradient-magnitude [c1 c2 c3] :colors :keys [r gradient-direction]}]
  (let [gradient (case gradient-direction
                   0 (.createLinearGradient ctx (- x gm) (- y gm) (+ x gm) (+ y gm))
                   1 (.createLinearGradient ctx (- x gm) (- y gm) (- x gm) (+ y gm))
                   2 (.createLinearGradient ctx (- x gm) (- y gm) (+ x gm) (- y gm)))]
    (.addColorStop gradient 0 c1)
    (.addColorStop gradient 0.5 c2)
    (.addColorStop gradient 1 c3)
    (doto ctx
      (aset "fillStyle" gradient)
      (aset "strokeStyle" c1)
      (.beginPath)
      (.arc x y r 0 (* 2 Math/PI))
      (.fill)
      (.stroke))))

(defn draw-ship-label!
  [ctx {[x y] :s :keys [uuid]}]
  (doto ctx
    (aset "font" "12px Arial")
    (aset "strokeStyle" "#555")
    (.strokeText (str "s: " uuid) (+ x 10) (+ y 10))))

(def ship-path
  [[2 -3]
   [4 4]
   [3 5]
   [-3 5]
   [-4 4]
   [-2 -3]])

(defn draw-ship!
  [ctx {[x y] :s :keys [s theta]}]
  (doto ctx
    (.save)
    (aset "fillStyle" "#FFF")
    (rotate-helper theta x y)
    (.beginPath)
    (.moveTo (+ x 0) (+ y -5))
    (draw-path-helper (map #(common/add-vectors s %) ship-path))
    (.closePath)
    (.fill)
    (.restore)))

(defn thrust-path
  [thrust]
  (mapv
   (fn [[x y]]
     [x (* thrust y)])
   [[1 10]
    [3 12]
    [0 30]
    [-3 12]
    [-1 10]]))

(defn draw-ship-thrust!
  [ctx {[x y] :s :keys [s theta thrust]}]
  (doto ctx
    (.save)
    (aset "fillStyle" "#F80")
    (rotate-helper theta x y)
    (.beginPath)
    (.moveTo (+ x 0) (+ y 5))
    (draw-path-helper (map #(common/add-vectors s %) (thrust-path thrust)))
    (.closePath)
    (.fill)
    (.restore)))

(defn draw-system!
  "Draw the given board to the canvas."
  [id {:keys [planets ships]}]
  (let [canvas (by-id id)
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 1000 1000)
    (doseq [p planets]
      (draw-planet! ctx p)
      (draw-planet-label! ctx p)
      (draw-acceleration-vectors! ctx p)
      (draw-velocity-vectors! ctx p)
      (draw-path! ctx p))
    (doseq [s ships]
      (draw-ship! ctx s)
      (draw-ship-thrust! ctx s)
      (draw-ship-label! ctx s)
      (draw-acceleration-vectors! ctx s)
      (draw-velocity-vectors! ctx s)
      (draw-path! ctx s))
    nil))
