"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { USAImageId } from "@/data/usa/images";
import { usaImage } from "@/data/usa/images";
import SafeImage from "../../SafeImage";

type Landmark = { name: string; text: string; image: USAImageId };

/**
 * New York "hotspots": choosing a landmark cross-fades the photo with a slow
 * zoom and swaps the caption. Buttons are a real list, so it works by keyboard
 * and screen reader; the photo is decorative context.
 */
export default function NewYorkLandmarks({ landmarks }: { landmarks: Landmark[] }) {
  const [i, setI] = useState(0);
  const l = landmarks[i];
  const img = usaImage(l.image);

  return (
    <div className="us-ny">
      <div className="us-ny__stage">
        <AnimatePresence initial={false}>
          <motion.div
            key={l.name}
            className="us-ny__photo"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9, ease: [0.2, 0.7, 0.2, 1] }}
          >
            <SafeImage src={img?.src} alt={img?.alt ?? l.name} sizes="(min-width: 1024px) 55vw, 100vw" className="asia-media__img" />
          </motion.div>
        </AnimatePresence>
        <div className="us-ny__caption" aria-live="polite">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={l.name} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.3 }}>
              <p className="us-ny__caption-name">{l.name}</p>
              <p className="us-ny__caption-text">{l.text}</p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <ul className="us-ny__spots" aria-label="New York landmarks">
        {landmarks.map((x, k) => (
          <li key={x.name}>
            <button type="button" className={`us-ny__spot${k === i ? " is-active" : ""}`} aria-pressed={k === i} onClick={() => setI(k)}>
              <span className="us-ny__pin" aria-hidden="true" />
              <span className="us-ny__n" aria-hidden="true">{String(k + 1).padStart(2, "0")}</span>
              {x.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
