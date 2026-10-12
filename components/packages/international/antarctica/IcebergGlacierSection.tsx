"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { iceStory } from "@/data/antarctica/experiences";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/**
 * "A World Sculpted by Ice": a horizontal photo story. On large screens the
 * section pins and vertical scrolling moves the strip sideways, with each
 * photo drifting slightly for depth. Phones, tablets and reduced motion get a
 * native swipeable strip instead.
 */
export default function IcebergGlacierSection() {
  const outer = useRef<HTMLElement>(null);
  const track = useRef<HTMLUListElement>(null);
  const reduce = useReducedMotion();
  const [distance, setDistance] = useState(0);
  const pinned = distance > 0 && !reduce;

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 1024px)");
    const measure = () => {
      const t = track.current;
      setDistance(mq.matches && t ? Math.max(0, t.scrollWidth - window.innerWidth + 64) : 0);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (track.current) ro.observe(track.current);
    mq.addEventListener("change", measure);
    return () => {
      ro.disconnect();
      mq.removeEventListener("change", measure);
    };
  }, []);

  const { scrollYProgress } = useScroll({ target: outer, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -distance]);
  const drift = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);

  return (
    <section
      ref={outer}
      className={`an-ice${pinned ? " is-pinned" : ""}`}
      id="icebergs"
      aria-labelledby="ice-h"
      style={pinned ? { height: `calc(100vh + ${distance}px)` } : undefined}
    >
      <div className="an-ice__sticky">
        <div className="pkg-container">
          <SectionHead
            id="ice-h"
            light
            eyebrow="Icebergs + glaciers"
            title="A World Sculpted by Ice"
            lede="Giant icebergs, glowing blue ice, glaciers and ice cliffs. No two days, and no two icebergs, are ever the same."
          />
        </div>
        <motion.ul ref={track} className="an-ice__track" style={pinned ? { x } : undefined} aria-label="Ice landscapes">
          {iceStory.map((s, i) => (
            <li key={s.id} className={`an-ice__item${i % 3 === 1 ? " an-ice__item--tall" : ""}`}>
              <figure>
                <div className="an-ice__media">
                  <motion.div className="an-ice__drift" style={pinned ? { x: drift } : undefined}>
                    <PolarMedia id={s.image} sizes="(min-width: 1024px) 34vw, 82vw" />
                  </motion.div>
                </div>
                <figcaption>
                  <span className="an-ice__n">{String(i + 1).padStart(2, "0")}</span>
                  <strong>{s.title}</strong>
                  <span>{s.text}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
