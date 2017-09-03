(ns ^:figwheel-always game.core
  (:require
    [game.mechanics :as mechanics]
    [game.initial-system :as initial-system]
    [game.paint :as paint]))

(enable-console-print!)

(def $ js/jQuery)

(defn time-now
  []
  (.now (aget js/window "performance")))

(defn start-benchmark
  [name]
  (swap! state assoc name (time-now)))

(defn end-benchmark
  [name]
  (println (str name) (- (time-now) (get @state name))))

(def state (atom nil))

(defn init-state!
  []
  (reset! state {:game-speed 10
                 :t0 (time-now)
                 :canvas-size {:width 1000 :height 1000}
                 :planets (initial-system/structured-centered-system)
                 :ships [initial-system/test-ship]}))

(defn apply-gravity!
  []
  (swap! state assoc :dt (/ (- (time-now) (:t0 @state))
                            (:game-speed @state)))
  (swap! state assoc :t0 (time-now))
  (swap! state update :planets mechanics/update-planets (:dt @state))
  (swap! state update :ships mechanics/update-ships (:planets @state) (:dt @state)))

(defn rotate!
  [direction]
  (swap! state update :ships mechanics/rotate-ship! direction))

(defn thrust!
  [value]
  (swap! state update :ships mechanics/thrust-ship! value))

(def key-names {37 :left
                38 :up
                39 :right})

(defn add-key-events!
  []
  (let [key-name #(-> % .-keyCode key-names)
        key-down (fn [e]
                   (when (#{:left :right :up} (key-name e))
                     (.preventDefault e)
                     (case (key-name e)
                       :left  (rotate! 1)
                       :up    (thrust! 1)
                       :right (rotate! -1)
                       nil)))
        key-up (fn [e]
                 (when (#{:left :right :up} (key-name e))
                   (.preventDefault e)
                   (case (key-name e)
                     :left  (rotate! 0)
                     :up    (thrust! 0)
                     :right (rotate! 0)
                     nil)))]
    (.addEventListener js/window "keydown" key-down)
    (.addEventListener js/window "keyup" key-up)))

(defn game-loop
  []
  (.setInterval js/window apply-gravity! 1))

(defn render-loop
  []
  (paint/draw-system! (select-keys @state [:ships :planets]))
  (.requestAnimationFrame js/window render-loop))

(defn init []
  (init-state!)
  (paint/setup-stacked-canvas! (:canvas-size @state))
  (game-loop)
  (render-loop)
  (add-key-events!))

($ init)
