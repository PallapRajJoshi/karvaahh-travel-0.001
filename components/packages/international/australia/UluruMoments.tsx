"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Moon, Sun, Sunrise, Sunset, type LucideIcon } from "lucide-react";
import { australiaImage, type AUImageId } from "@/data/australia/images";
import SafeImage from "../../SafeImage";

const MOMENTS: { id: string; label: string; icon: LucideIcon; image: AUImageId; text: string }[] = [
  { id: "arrive", label: "Arrival", icon: Sunrise, image: "uluru-road", text: "The first sight of Uluru rising from the plain is one most visitors never forget." },
  { id: "day", label: "Midday", icon: Sun, image: "uluru", text: "Walk the base to see waterholes, caves and rock art up close, ideally early before the heat." },
  { id: "dusk", label: "Sunset", icon: Sunset, image: "uluru-dusk", text: "As the sun drops, the rock glows through orange to deep red." },
  { id: "night", label: "Night", icon: Moon, image: "uluru-stars", text: "Far from city lights, the desert sky fills with stars." },
];

/** Uluru as the visual centrepiece: tabs move it through the day. */
export default function UluruMoments() {
  const uid = useId();
  const [i, setI] = useState(2);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const m = MOMENTS[i];
  const img = australiaImage(m.image);

  const onKey = (e: React.KeyboardEvent, k: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (k + dir + MOMENTS.length) % MOMENTS.length;
    setI(next);
    tabs.current[next]?.focus();
  };

  return (
    <div className="au-uluru">
      <div className="au-uluru__stage" id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${m.id}`}>
        <AnimatePresence initial={false}>
          <motion.div
            key={m.id}
            className="au-uluru__photo"
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <SafeImage src={img?.src} alt={img?.alt ?? "Uluru"} sizes="(min-width: 1280px) 1200px, 100vw" className="asia-media__img" />
          </motion.div>
        </AnimatePresence>
        <div className="au-uluru__caption">
          <p className="au-uluru__kicker">Uluru through the day</p>
          <AnimatePresence mode="wait" initial={false}>
            <motion.p key={m.id} className="au-uluru__text" initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
              {m.text}
            </motion.p>
          </AnimatePresence>
        </div>
      </div>
      <div className="au-uluru__tabs" role="tablist" aria-label="Uluru through the day">
        {MOMENTS.map((x, k) => {
          const on = k === i;
          return (
            <button
              key={x.id}
              ref={(el) => {
                tabs.current[k] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-${x.id}`}
              aria-selected={on}
              aria-controls={`${uid}-panel`}
              tabIndex={on ? 0 : -1}
              className={`au-uluru__tab${on ? " is-active" : ""}`}
              onClick={() => setI(k)}
              onKeyDown={(e) => onKey(e, k)}
            >
              <x.icon size={18} aria-hidden="true" /> {x.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
