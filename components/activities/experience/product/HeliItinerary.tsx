"use client";

import { motion, useScroll, useSpring } from "motion/react";
import { useRef } from "react";
import { AlertTriangle } from "lucide-react";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { longDate } from "../format";
import type { HelicopterTour } from "../product-types";
import { ANCHOR } from "./constants";

/** Hour-by-hour (sample) itinerary with a scroll-driven progress line. */
export default function HeliItinerary({ tour }: { tour: Pick<HelicopterTour, "timeline"> }) {
  return tour.timeline ? <Timeline timeline={tour.timeline} /> : null;
}

function Timeline({ timeline }: { timeline: NonNullable<HelicopterTour["timeline"]> }) {
  const ref = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 75%", "end 55%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <section id="itinerary" aria-labelledby="itinerary-title" className={`${ANCHOR} bg-white py-20 sm:py-24 lg:py-28`}>
      <div className={`${CONTAINER} grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16`}>
        <div className="lg:sticky lg:top-[220px] lg:self-start">
          <SectionHeading id="itinerary-title" eyebrow="Itinerary" title={timeline.title} />
          {timeline.sampleDate && (
            <p className="mt-6 inline-flex rounded-full bg-[#0B2942] px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#F4A300]">
              Sample date: {longDate(timeline.sampleDate)}
            </p>
          )}
          <p className="mt-5 flex items-start gap-3 rounded-2xl border border-[#F4A300]/40 bg-[#FFF8E8] px-4 py-3.5 text-[12.5px] font-semibold uppercase leading-5 tracking-[0.06em] text-[#6B5418]">
            <AlertTriangle className="mt-0.5 h-4 w-4 shrink-0 text-[#C98500]" aria-hidden="true" />
            {timeline.note}
          </p>
        </div>

        <ol ref={ref} className="relative">
          <span aria-hidden="true" className="absolute bottom-4 left-[47px] top-4 w-px bg-[#0B2942]/10" />
          <motion.span aria-hidden="true" style={{ scaleY: progress }} className="absolute bottom-4 left-[47px] top-4 w-px origin-top bg-[#F4A300]" />
          {timeline.blocks.map((b, i) => (
            <motion.li
              key={b.time}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "0px 0px -10% 0px" }}
              transition={{ duration: 0.6, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
              className="relative flex gap-6 pb-7 last:pb-0"
            >
              <span className="relative z-10 flex h-[34px] w-[96px] shrink-0 items-center justify-center rounded-full bg-[#0B2942] text-[13px] font-semibold tabular-nums text-[#F4A300]">
                {b.time}
              </span>
              <div className="pt-1">
                <h3 className={`${SERIF} text-[21px] font-medium text-[#0B2942]`}>{b.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-6 text-[#5B6B7B]">{b.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
