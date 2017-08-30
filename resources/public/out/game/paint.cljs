(ns game.paint)

;;------------------------------------------------------------
;; DRAWING
;;------------------------------------------------------------

(defn by-id
  [id]
  (.getElementById js/document id))

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

(defn draw-planet-acceleration-vectors!
  [ctx {[ax ay] :a [x y] :s :keys [r color uuid]}]
  (doto ctx
    (aset "strokeStyle" "#FFF")
    (.beginPath)
    (.moveTo x y)
    (.lineTo (+ x (* 2000 ax))
             (+ y (* 2000 ay)))
    (.stroke)))

(defn draw-planet-velocity-vectors!
  [ctx {[x y] :s [vx vy] :v :keys [r color uuid]}]
  (doto ctx
    (aset "strokeStyle" "#AAA")
    (.beginPath)
    (.moveTo x y)
    (.lineTo (+ x (* 30 vx))
             (+ y (* 30 vy)))
    (.stroke)))

(defn draw-planet-path!
  [ctx {:keys [path]}]
  (let [[x y] (first path)])
  (doto ctx
    (aset "strokeStyle" "#555")
    (.beginPath)
    (.moveTo x y))
  (doseq [[x y] path]
    (.lineTo ctx x y))
  (.stroke ctx))

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

(defn draw-system!
  "Draw the given board to the canvas."
  [id {:keys [planets]}]
  (let [canvas (by-id id)
        ctx (.getContext canvas "2d")]
    (.clearRect ctx 0 0 1000 1000)
    (doseq [p planets]
      (draw-planet! ctx p)
      (draw-planet-label! ctx p)
      (draw-planet-acceleration-vectors! ctx p)
      (draw-planet-velocity-vectors! ctx p)
      (draw-planet-path! ctx p))
    nil))
