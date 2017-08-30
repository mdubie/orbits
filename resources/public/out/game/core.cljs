(ns ^:figwheel-always game.core
  (:require-macros
    [cljs.core.async.macros :refer [go go-loop alt!]])
  (:require
    [game.mechanics :as mechanics]
    [game.initial-system :as initial-system]
    [game.paint :as paint]
    [cljs.core.async :as a]))

(enable-console-print!)

(def $ js/jQuery)

;;------------------------------------------------------------
;; STATE OF THE GAME
;;------------------------------------------------------------

(def state
  (atom nil))

(defn time-now
  []
  (.now (aget js/window "performance")))

(defn init-state!
  []
  (reset! state {:game-speed 10
                 :t0 (time-now)
                 :canvas-size {:width 1000 :height 1000}
                 :planets (initial-system/rand-centered-system)}))

;; :planets (mechanics/rand-centered-system)
;; :planets mechanics/three-body-problem-system}))

;; (mechanics/rand-system)

;;------------------------------------------------------------
;; STATE TRANSITION
;;------------------------------------------------------------

(def gravity-chan (a/chan 1 (dedupe)))

(defn apply-gravity!
  []
  ;; (mechanics/orbital-velocity (:planets @state))
  (swap! state assoc :dt (- (time-now) (:t0 @state)))
  (swap! state assoc :t0 (time-now))
  (swap! state assoc :t-calc0 (time-now))
  (swap! state update :planets mechanics/update-planets (/ (:dt @state) (:game-speed @state)))
  (swap! state assoc :t-calc1 (time-now)))
  ;; (println "calc loop" (- (:t-calc1 @state) (:t-calc0 @state))))
  ;; (println "calc loop" (- (:t-calc1 @state) (:t-calc0 @state))))


(defn go-go-gravity!
  []
  (go-loop []
    (apply-gravity!)
    (a/<! (a/timeout (:game-speed @state)))
    (recur)))

;;------------------------------------------------------------
;; STATE MONITOR
;;------------------------------------------------------------

(defn make-redraw-chan
  []
  (let [redraw-chan (a/chan)
        request-anim #(.requestAnimationFrame js/window %)]
    (letfn [(trigger-redraw []
              (a/put! redraw-chan 1)
              (request-anim trigger-redraw))]
      (request-anim trigger-redraw)
      redraw-chan)))

(defn go-go-draw!
  []
  (let [redraw-chan (make-redraw-chan)]
    (go-loop [system nil]
      (a/<! redraw-chan)
      (let [new-system (:planets @state)]
        (when (not= system new-system)
          (swap! state assoc :t-draw0 (time-now))
          (paint/draw-system! "game-canvas" (select-keys @state [:planets :canvas-size]))
          (swap! state assoc :t-draw1 (time-now)))
          ;; (println "draw loop" (- (:t-draw1 @state) (:t-draw0 @state))))
        (recur new-system)))))

;;------------------------------------------------------------
;; Entry Point
;;------------------------------------------------------------

(defn init []
  (init-state!)
  (paint/size-canvas! "game-canvas" (:canvas-size @state))
  (go-go-gravity!)
  (go-go-draw!))

($ init)
