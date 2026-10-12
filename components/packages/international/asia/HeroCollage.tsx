"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import type { AsiaImage } from "@/data/asia-destinations";

export type CollageTile = { id: string; country: string; image: AsiaImage };

/** Per-tile parallax depth (px of travel over the hero's scroll). */
const DEPTH = [-60, 40, -30, 70, -90];

/**
 * Layered destination collage. Tiles float gently (CSS) and drift at different
 * depths as the hero scrolls away (motion). Both stop under reduced motion.
 */
export default function HeroCollage({ tiles, labels }: { tiles: CollageTile[]; labels: string[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y0 = useTransform(scrollYProgress, [0, 1], [0, DEPTH[0]]);
  const y1 = useTransform(scrollYProgress, [0, 1], [0, DEPTH[1]]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, DEPTH[2]]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, DEPTH[3]]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, DEPTH[4]]);
  const ys = [y0, y1, y2, y3, y4];

  return (
    <div ref={ref} className="asia-collage" aria-hidden="true">
      {tiles.slice(0, 5).map((t, i) => (
        <motion.figure
          key={t.id}
          className={`asia-collage__tile asia-collage__tile--${i + 1}`}
          style={reduce ? undefined : { y: ys[i] }}
          initial={reduce ? false : { opacity: 0, scale: 0.92, y: 24 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 + i * 0.12, ease: [0.2, 0.7, 0.2, 1] }}
        >
          <div className="asia-collage__frame">
            <Image
              src={t.image.src}
              alt=""
              fill
              sizes="(min-width: 1024px) 320px, 45vw"
              preload={i === 0}
              loading={i === 0 ? undefined : "eager"}
              className="asia-collage__img"
            />
          </div>
          <figcaption className="asia-collage__cap">{t.country}</figcaption>
        </motion.figure>
      ))}

      {labels.map((l, i) => (
        <span key={l} className={`asia-collage__label asia-collage__label--${i + 1}`}>
          <span className="asia-collage__pin" />
          {l}
        </span>
      ))}
    </div>
  );
}
