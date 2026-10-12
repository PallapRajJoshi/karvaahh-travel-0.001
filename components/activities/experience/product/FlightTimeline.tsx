"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform } from "motion/react";
import type { HelicopterTour } from "../product-types";
import { CONTAINER, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

const EASE = [0.22, 1, 0.36, 1] as const;

function Plane({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path fill="currentColor" d="M21 16v-2l-8-5V3.5a1.5 1.5 0 0 0-3 0V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5Z" />
    </svg>
  );
}

/**
 * The experience as a journey of steps. Wide screens: a horizontal route
 * with an aircraft that advances as the visitor scrolls. Smaller screens: a
 * vertical timeline with a progress line.
 */
export default function FlightTimeline({ tour }: { tour: Pick<HelicopterTour, "flightSteps"> }) {
  return tour.flightSteps ? <Timeline data={tour.flightSteps} /> : null;
}

function Timeline({ data }: { data: NonNullable<HelicopterTour["flightSteps"]> }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 40%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 25, mass: 0.4 });
  const planeLeft = useTransform(progress, [0, 1], ["0%", "100%"]);
  const n = data.steps.length;

  return (
    <section id="itinerary" aria-labelledby="flight-steps-title" className={`${ANCHOR} overflow-hidden bg-white py-20 sm:py-24 lg:py-28`}>
      <div className={CONTAINER}>
        <SectionHeading id="flight-steps-title" eyebrow="The Experience" title={data.title} intro={data.intro} />

        <div ref={ref}>
          {/* Wide screens — horizontal route */}
          <div className="relative mt-16 hidden xl:block">
            <div className="relative mx-[calc(100%/16)]">
              <span aria-hidden="true" className="absolute inset-x-0 top-[7px] h-px bg-[#0B2942]/12" />
              <motion.span aria-hidden="true" style={{ scaleX: progress }} className="absolute inset-x-0 top-[7px] h-px origin-left bg-[#F4A300]" />
              <motion.span
                aria-hidden="true"
                style={reduce ? { left: "100%" } : { left: planeLeft }}
                className="absolute -top-[9px] -translate-x-1/2 rotate-90 text-[#0B2942]"
              >
                <Plane className="h-8 w-8" />
              </motion.span>
            </div>
            <ol className="relative mt-0 grid" style={{ gridTemplateColumns: `repeat(${n}, minmax(0, 1fr))` }}>
              {data.steps.map((s, i) => (
                <motion.li
                  key={s.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: EASE }}
                  className="flex flex-col items-center px-2 text-center"
                >
                  <span className="relative z-10 h-[15px] w-[15px] rounded-full border-2 border-[#F4A300] bg-white shadow-[0_0_0_4px_rgba(244,163,0,0.12)]" />
                  <span className={`${SERIF} mt-5 text-[30px] leading-none text-[#F4A300]`}>{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="mt-2 text-[15px] font-semibold leading-snug text-[#0B2942]">{s.title}</h3>
                  <p className="mt-2 text-[13px] leading-5 text-[#5B6B7B]">{s.text}</p>
                  {s.note && <p className="mt-2 text-[11.5px] italic leading-4 text-[#8A6A1F]">{s.note}</p>}
                </motion.li>
              ))}
            </ol>
          </div>

          {/* Smaller screens — vertical timeline */}
          <ol className="relative mt-12 xl:hidden">
            <span aria-hidden="true" className="absolute bottom-4 left-[19px] top-4 w-px bg-[#0B2942]/10" />
            <motion.span aria-hidden="true" style={{ scaleY: progress }} className="absolute bottom-4 left-[19px] top-4 w-px origin-top bg-[#F4A300]" />
            {data.steps.map((s, i) => (
              <motion.li
                key={s.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -10% 0px" }}
                transition={{ duration: 0.55, ease: EASE }}
                className="relative pb-7 pl-14 last:pb-0"
              >
                <span className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[#0B2942] text-[12px] font-semibold text-[#F4A300]">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="pt-1.5 text-[16.5px] font-semibold text-[#0B2942]">{s.title}</h3>
                <p className="mt-1.5 text-[14.5px] leading-6 text-[#5B6B7B]">{s.text}</p>
                {s.note && <p className="mt-1.5 text-[12.5px] italic text-[#8A6A1F]">{s.note}</p>}
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
