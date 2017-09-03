(ns game.mechanics
  (:require [game.common :as common]))

;;------------------------------------------------------------
;; body dynamics (planets + ships)
;;------------------------------------------------------------

(defn update-body-position
  [{:keys [v s] :as body} dt]
  (-> body
      (assoc :path s)
      (update :s
              (fn [[sx sy] [vx vy]]
                [(+ sx (* vx dt))
                 (+ sy (* vy dt))])
              v)))

(defn update-body-velocity
  [{:keys [a] :as body} dt]
  (update body :v
          (fn [[vx vy] [ax ay]]
            [(+ vx (* ax dt))
             (+ vy (* ay dt))])
          a))

(defn b1+b2->a
  [{[x1 y1] :s m1 :mass :as b1}
   {[x2 y2] :s m2 :mass :as b2}]
  (let [c 0.00001
        d (common/b1+b2->d b1 b2)
        grav-f (/ (* c m1 m2)
                  (Math/pow d 2))
        [ux uy] [(/ (- x2 x1) d)
                 (/ (- y2 y1) d)]]
    [(/ (* ux grav-f) m1)
     (/ (* uy grav-f) m1)]))

(defn update-body-acceleration
  [body planets]
  (assoc body :a
    (->> planets
         (remove #(= body %))
         (map #(b1+b2->a body %))
         (common/sum-vectors))))

;;------------------------------------------------------------
;; planet collisions
;;------------------------------------------------------------

(defn merge-color
  [c1 m1 c2 m2]
  (str "#"
   (apply str
    (map
     (fn [c1 c2]
      (common/index->color
       (common/weighted-average
        (common/color->index c1)
        (common/color->index c2)
        m1
        m2)))
     (drop 1 c1)
     (drop 1 c2)))))

(defn merge-colors
  [{m1 :mass colors1 :colors}
   {m2 :mass colors2 :colors}]
  (mapv
   (fn [color1 color2]
     (merge-color color1 m1 color2 m2))
   colors1
   colors2))

(defn merge-planets
  [{m1 :mass r1 :r [vx1 vy1] :v :as p1}
   {m2 :mass r2 :r [vx2 vy2] :v :as p2}]
  {:uuid (:uuid p1)
   :colors (merge-colors p1 p2)
   :gradient-magnitude (:gradient-magnitude p1)
   :gradient-direction (:gradient-direction p1)
   :path (:path p1)
   :mass (+ m1 m2)
   :r (common/r1+r2->r r1 r2)
   :s (:s p1)
   :v [(common/weighted-average vx1 vx2 m1 m2)
       (common/weighted-average vy1 vy2 m1 m2)]
   :a [0.0 0.0]})

(defn planets->remaining-planets
  [[{m1 :mass uuid1 :uuid :as p1}
    {m2 :mass uuid2 :uuid :as p2}]
   planets]
  (vec
    (conj
      (remove #(contains? #{uuid1 uuid2} (:uuid %))
              planets)
      (if (> m1 m2)
        (merge-planets p1 p2)
        (merge-planets p2 p1)))))

(defn planets->collided-planets
  [planets]
  (filterv
   (fn [{:keys [uuid r] :as p}]
     (->> planets
          (remove #(= uuid (:uuid %)))
          (filter #(common/p1+p2->collision? p %))
          (seq)
          (some?)))
   planets))

(defn handle-planet-collisions
  [planets]
  (let [collided-planets (planets->collided-planets planets)]
    ;; TODO handle complex collissions
    (if (=  2 (count collided-planets))
      (planets->remaining-planets collided-planets planets)
      planets)))

;;------------------------------------------------------------
;; update planets root
;;------------------------------------------------------------

(defn update-planets
  [planets dt]
  (->> planets
       (handle-planet-collisions)
       (mapv #(update-body-acceleration % planets))
       (mapv #(update-body-velocity % dt))
       (mapv #(update-body-position % dt))))

;;------------------------------------------------------------
;; ship dynamics
;;------------------------------------------------------------

;; (defn planet->orthagonality-metric
;;   [{[ax ay] :a [vx vy] :v}]
;;   (let [direction-a (Math/atan2 ay ax)
;;         direction-v (Math/atan2 vy vx)]
;;     (- (mod
;;         (+ (* 2 Math/PI)
;;            (- direction-a direction-v))
;;         (* 2 Math/PI))
;;        (/ Math/PI 2))))

;; ;; assume clockwise for now
;; (defn planet->sun-orthagonality-metric
;;   [p1 {[vx2 vy2] :v [ax2 ay2] :a :as p2}]
;;   (let [p1->p2-direction (common/abs-rad (common/b1+b2->theta p1 p2))
;;         p2-target-velocity-direction (common/abs-rad (+ (/ Math/PI 2) p1->p2-direction))
;;         p2-target-acceleration-direction (common/abs-rad (+ Math/PI p1->p2-direction))
;;         p2-actual-acceleration-direction (common/abs-rad (Math/atan2 ay2 ax2))
;;         p2-actual-velocity-direction (common/abs-rad (Math/atan2 vy2 vx2))]))
;;     ;; (println (- p2-actual-velocity-direction p2-target-velocity-direction))))

(defn update-thrust-acceleration
  [{[ax ay] :a :keys [thrust mass theta a] :as ship}]
  (let [[ux uy] (common/theta->unit-vector theta)
        thrust-c 0.0000000001
        thrust-a [(/ (* ux thrust thrust-c) mass)
                  (/ (* uy thrust thrust-c) mass)]]
    (update ship :a common/add-vectors thrust-a)))

(defn rotate-ship!
  [ships val]
  (mapv #(update % :theta + (* val Math/PI 0.03))
        ships))

(defn thrust-ship!
  [ships val]
  (mapv #(assoc % :thrust val)
        ships))

(defn update-ships
  [ships planets dt]
  (->> ships
       (mapv #(update-body-acceleration % planets))
       (mapv #(update-thrust-acceleration %))
       (mapv #(update-body-velocity % dt))
       (mapv #(update-body-position % dt))))
