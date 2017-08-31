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
                 :planets (initial-system/structured-centered-system)
                 :ships [initial-system/test-ship]}))

;; ships vs planets
  ;; ships mass have negligible effect on planets
  ;; ships have different collisions than planets
  ;; ships are rendered differently
  ;; ships equations of motion are the same
  ;; some shared properties

;; :planets (mechanics/rand-centered-system)
;; :planets mechanics/three-body-problem-system}))

;;------------------------------------------------------------
;; time step
;;------------------------------------------------------------

(def gravity-chan (a/chan 1 (dedupe)))

(defn apply-gravity!
  []
  (swap! state assoc :dt (/ (- (time-now) (:t0 @state))
                            (:game-speed @state)))
  (swap! state assoc :t0 (time-now))
  (swap! state update :planets mechanics/update-planets (:dt @state))
  (swap! state update :ships mechanics/update-ships (:planets @state) (:dt @state)))

(defn go-go-gravity!
  []
  (go-loop []
    (apply-gravity!)
    (a/<! (a/timeout (:game-speed @state)))
    (recur)))

;;------------------------------------------------------------
;; draw loop
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
    (go-loop []
      ;;TODO maybe readd decoupling of game loop and drawing
      (a/<! redraw-chan)
      (paint/draw-system! "game-canvas" (select-keys @state [:ships :planets :canvas-size]))
      (recur))))

;;------------------------------------------------------------
;; init
;;------------------------------------------------------------

(defn init []
  (init-state!)
  (paint/size-canvas! "game-canvas" (:canvas-size @state))
  (go-go-gravity!)
  (go-go-draw!))

($ init)
