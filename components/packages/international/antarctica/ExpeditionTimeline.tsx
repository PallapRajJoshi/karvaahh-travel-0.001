"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "motion/react";
import { expeditionTimeline } from "@/data/antarctica/timeline";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/**
 * Signature scroll timeline: a route line fills as you scroll, and each stage
 * slides in beside its photo. Static under reduced motion.
 */
export default function ExpeditionTimeline() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 70%", "end 60%"] });
  const fill = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  return (
    <section className="pkg-section asia-section--deep an-timeline" id="journey" aria-labelledby="journey-h">
      <div className="pkg-container">
        <SectionHead
          id="journey-h"
          light
          center
          eyebrow="Your expedition, step by step"
          title="From Kathmandu or Delhi to the Edge of the Earth"
          lede="Nine stages, from the first packing list to an optional Patagonia finale."
        />
        <div className="an-tl" ref={ref}>
          <span className="an-tl__rail" aria-hidden="true">
            <motion.span className="an-tl__fill" style={{ scaleY: fill }} />
          </span>
          <ol className="an-tl__list">
          {expeditionTimeline.map((s, i) => (
            <motion.li
              key={s.n}
              className={`an-tl__item${i % 2 ? " is-right" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.55 }}
            >
              <span className="an-tl__node" aria-hidden="true">{s.n}</span>
              <div className="an-tl__card">
                <div className="an-tl__media"><PolarMedia id={s.image} decorative sizes="(min-width: 900px) 30vw, 90vw" /></div>
                <div className="an-tl__body">
                  <p className="an-tl__n">{s.n}{s.optional ? " · Optional" : ""}</p>
                  <h3>{s.title}</h3>
                  <p className="an-tl__sub">{s.sub}</p>
                  <p>{s.text}</p>
                </div>
              </div>
            </motion.li>
          ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
