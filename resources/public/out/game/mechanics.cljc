(ns game.mechanics
  (:require [game.common :as common]))

;; planet dynamics

;; r * t = d
(defn update-planet-position
  [{:keys [v s] :as planet} dt]
  (-> planet
      (update :path conj s)
      (update :s
              (fn [[sx sy] [vx vy]]
                [(+ sx (* vx dt))
                 (+ sy (* vy dt))])
              v)))

;; v1 = v0 + a * dt
(defn update-planet-velocity
  [{:keys [a] :as planet} dt]
  (update planet :v
          (fn [[vx vy] [ax ay]]
            [(+ vx (* ax dt))
             (+ vy (* ay dt))])
          a))

(defn update-planet-acceleration
  [{:keys [uuid] :as p} planets dt]
  (assoc p :a
    (->> planets
         (remove #(= uuid (:uuid %)))
         (map #(common/p1+p2->a p %))
         (common/sum-vectors))))

;; collisions

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
  "Takes all the planets and returns only those that have collided"
  [planets]
  (filterv
   (fn [{:keys [uuid r] :as p}]
     (->> planets
          (remove #(= uuid (:uuid %)))
          (filter #(common/p1+p2->collision? p %))
          (seq)
          (some?)))
   planets))

(defn handle-collisions
  [planets]
  (let [collided-planets (planets->collided-planets planets)]
    ;; TODO handle complex collissions
    ;; (assert (<= (count collided-planets) 2) "handle more complicated collissions")
    (if (=  2 (count collided-planets))
      (planets->remaining-planets collided-planets planets)
      planets)))

(defn update-planets
  [planets dt]
  (->> planets
       (handle-collisions)
       (mapv #(update-planet-acceleration % planets dt))
       ;; (mapv update-manual-planet-acceleration)
       (mapv #(update-planet-velocity % dt))
       (mapv #(update-planet-position % dt))))

;; control

(defn planet->orthagonality-metric
  [{[ax ay] :a [vx vy] :v}]
  (let [direction-a (Math/atan2 ay ax)
        direction-v (Math/atan2 vy vx)]
    (- (mod
        (+ (* 2 Math/PI)
           (- direction-a direction-v))
        (* 2 Math/PI))
       (/ Math/PI 2))))

(defn planet-manual-acceleration
  [{[vx vy] :v :as p}]
  (let [o (planet->orthagonality-metric p)]
    (update p :a
            (fn [[ax ay]]
              [(- ax (* o vx))
               (- ay (* o vy))]))))

(defn update-manual-planet-acceleration
  [p]
  (if (= 124 (:uuid p))
    (planet-manual-acceleration p)
    p))

;; assume clockwise for now
(defn planet->sun-orthagonality-metric
  [p1 {[vx2 vy2] :v [ax2 ay2] :a :as p2}]
  (let [p1->p2-direction (common/abs-rad (common/p1+p2->theta p1 p2))

        p2-target-velocity-direction (common/abs-rad (+ (/ Math/PI 2) p1->p2-direction))
        p2-target-acceleration-direction (common/abs-rad (+ Math/PI p1->p2-direction))

        p2-actual-acceleration-direction (common/abs-rad (Math/atan2 ay2 ax2))
        p2-actual-velocity-direction (common/abs-rad (Math/atan2 vy2 vx2))]))

    ;; (println (- p2-actual-velocity-direction p2-target-velocity-direction))))

(defn orbital-velocity
  [planets]
  (let [p1 (->> planets
                (filter #(= 123 (:uuid %)))
                (first))
        p2 (->> planets
                (filter #(= 124 (:uuid %)))
                (first))]
    (println (common/p1+p2->d p1 p2))))
    ;; (planet->sun-orthagonality-metric p1 p2)))
