"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { Check } from "lucide-react";
import { SERIF, PageImageFill } from "../ui";
import type { HelicopterTour } from "../product-types";

const EASE = [0.22, 1, 0.36, 1] as const;

/** Full-width destination feature: parallax image, text overlay and an inset photo sliding in. */
export default function HeliFeature({ tour }: { tour: Pick<HelicopterTour, "feature"> }) {
  return tour.feature ? <Feature feature={tour.feature} /> : null;
}

function Feature({ feature: loManthang }: { feature: NonNullable<HelicopterTour["feature"]> }) {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section ref={ref} aria-labelledby="feature-title" className="relative isolate overflow-hidden bg-[#071421] py-24 text-white lg:py-36">
      <motion.div style={reduce ? undefined : { y: bgY }} className="absolute -inset-y-[14%] inset-x-0 -z-10">
        <PageImageFill image={loManthang.image} sizes="100vw" />
      </motion.div>
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,rgba(7,20,33,0.95)_0%,rgba(7,20,33,0.8)_45%,rgba(7,20,33,0.35)_100%)]"
      />

      <div className={`mx-auto grid w-full max-w-[1400px] items-center gap-12 px-5 sm:px-8 lg:px-10 ${loManthang.inset ? "lg:grid-cols-[1.1fr_0.9fr]" : ""}`}>
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "0px 0px -15% 0px" }}
          transition={{ duration: 0.9, ease: EASE }}
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-[#F4A300] sm:text-xs">{loManthang.eyebrow}</p>
          <h2 id="feature-title" className={`${SERIF} mt-4 text-[44px] font-medium leading-[1.02] tracking-[-0.02em] sm:text-[60px] lg:text-[72px]`}>
            {loManthang.title}
          </h2>
          <div className="mt-7 space-y-5 text-[16px] leading-8 text-white/80">
            {loManthang.paragraphs.map((p) => (
              <p key={p.slice(0, 30)}>{p}</p>
            ))}
          </div>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {loManthang.points.map((pt) => (
              <li key={pt} className="flex items-center gap-2.5 text-[14.5px] font-medium">
                <Check className="h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
                {pt}
              </li>
            ))}
          </ul>
        </motion.div>

        {loManthang.inset && (
          <motion.figure
            initial={{ opacity: 0, x: 60, rotate: 2 }}
            whileInView={{ opacity: 1, x: 0, rotate: -1.5 }}
            viewport={{ once: true, margin: "0px 0px -15% 0px" }}
            transition={{ duration: 1, delay: 0.15, ease: EASE }}
            className="mx-auto w-full max-w-[460px] rounded-[24px] bg-white p-3 pb-4 text-[#0B2942] shadow-[0_40px_80px_-30px_rgba(0,0,0,0.7)]"
          >
            <div className="relative aspect-[3/2] overflow-hidden rounded-[18px]">
              <PageImageFill image={loManthang.inset} sizes="(min-width: 1024px) 460px, 90vw" />
            </div>
            {loManthang.insetCaption && <figcaption className="mt-3 px-1 text-[13px] text-[#5B6B7B]">{loManthang.insetCaption}</figcaption>}
          </motion.figure>
        )}
      </div>
    </section>
  );
}
