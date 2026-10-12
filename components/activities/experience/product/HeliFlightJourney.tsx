"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll, useTransform } from "motion/react";
import { Info } from "lucide-react";
import { CONTAINER, HelicopterIcon, SERIF, SectionHeading, PageImageFill } from "../ui";
import type { HelicopterTour } from "../product-types";
import { ANCHOR } from "./constants";

const EASE = [0.22, 1, 0.36, 1] as const;

/**
 * Pinned horizontal storytelling on desktop: as the visitor scrolls, the
 * background crossfades through each stage, the title slides in and a
 * helicopter marker travels along the route line. Mobile gets a vertical
 * illustrated timeline instead.
 */
export default function HeliFlightJourney({ tour }: { tour: Pick<HelicopterTour, "journey" | "labels"> }) {
  return tour.journey ? <Journey journey={tour.journey} eyebrow={tour.labels?.journey ?? "The Flight"} /> : null;
}

function Journey({ journey, eyebrow }: { journey: NonNullable<HelicopterTour["journey"]>; eyebrow: string }) {
  const stages = journey.stages;
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({ target: trackRef, offset: ["start start", "end end"] });
  const markerLeft = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const i = Math.min(stages.length - 1, Math.max(0, Math.floor(p * stages.length)));
    setActive((prev) => (prev === i ? prev : i));
  });

  const stage = stages[active];

  return (
    <section id="journey" aria-labelledby="journey-title" className={`${ANCHOR} bg-[#071421] text-white`}>
      <div className={`${CONTAINER} pb-10 pt-20 sm:pt-24`}>
        <SectionHeading id="journey-title" eyebrow={eyebrow} title={journey.title} intro={journey.intro} dark />
        <p className="mt-6 flex max-w-[720px] items-start gap-3 rounded-2xl border border-white/10 bg-white/[0.05] px-4 py-3 text-[13px] leading-6 text-white/70">
          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#F4A300]" aria-hidden="true" />
          {journey.note}
        </p>
      </div>

      {/* Desktop — pinned scrollytelling */}
      <div ref={trackRef} className="relative hidden lg:block" style={{ height: `${stages.length * 70}vh` }}>
        <div className="sticky top-[194px] h-[calc(100vh-194px)] overflow-hidden">
          <AnimatePresence initial={false}>
            <motion.div
              key={stage.name}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1, ease: EASE }}
              className="absolute inset-0"
            >
              <PageImageFill image={stage.image} sizes="100vw" />
            </motion.div>
          </AnimatePresence>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,20,33,0.88)_0%,rgba(7,20,33,0.55)_50%,rgba(7,20,33,0.2)_100%)]"
          />

          <div className={`${CONTAINER} relative flex h-full flex-col justify-center pb-44`}>
            <p className="text-[12px] font-semibold uppercase tracking-[0.32em] text-[#F4A300]" aria-live="polite">
              Stage {String(active + 1).padStart(2, "0")} / {String(stages.length).padStart(2, "0")}
            </p>
            <AnimatePresence mode="wait">
              <motion.div
                key={stage.name}
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.55, ease: EASE }}
                className="max-w-[640px]"
              >
                {stage.kicker && <p className="mt-4 text-[13px] font-semibold uppercase tracking-[0.24em] text-white/70">{stage.kicker}</p>}
                <h3 className={`${SERIF} mt-4 text-[56px] font-medium leading-none xl:text-[72px]`}>{stage.name}</h3>
                {stage.elevation && <p className="mt-3 text-[14px] font-medium text-white/60">{stage.elevation}</p>}
                <p className="mt-5 text-[18px] leading-8 text-white/85">{stage.text}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Route indicator */}
          <div className={`${CONTAINER} absolute inset-x-0 bottom-24`}>
            <div className="relative mx-12 xl:mx-16">
              <div className="absolute left-0 right-0 top-[7px] h-px bg-white/20" />
              <motion.div style={{ scaleX: lineScale }} className="absolute left-0 right-0 top-[7px] h-px origin-left bg-[#F4A300]" />
              <ol className="relative flex justify-between">
                {stages.map((s, i) => (
                  <li key={s.name} className="flex w-0 flex-col items-center">
                    <span
                      className={`h-[15px] w-[15px] rounded-full border-2 transition-colors duration-500 ${
                        i <= active ? "border-[#F4A300] bg-[#F4A300]" : "border-white/40 bg-[#071421]"
                      }`}
                    />
                    <span
                      className={`mt-3 w-[92px] text-center text-[10.5px] font-semibold uppercase leading-tight tracking-[0.14em] transition-colors duration-500 ${
                        i === active ? "text-white" : "text-white/45"
                      }`}
                    >
                      {s.short ?? s.name}
                    </span>
                  </li>
                ))}
              </ol>
              <motion.span aria-hidden="true" style={{ left: markerLeft }} className="absolute -top-9 -translate-x-1/2 text-[#F4A300]">
                {journey.marker === "dot" ? (
                  <span className="mt-2 block h-4 w-4 rounded-full bg-[#F4A300] shadow-[0_0_0_6px_rgba(244,163,0,0.25)]" />
                ) : (
                  <HelicopterIcon className="h-7 w-7" />
                )}
              </motion.span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile — vertical timeline */}
      <ol className={`${CONTAINER} relative pb-20 lg:hidden`}>
        <span aria-hidden="true" className="absolute bottom-24 left-[37px] top-4 w-px bg-gradient-to-b from-[#F4A300] to-white/10 sm:left-[45px]" />
        {stages.map((s, i) => (
          <motion.li
            key={s.name}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "0px 0px -10% 0px" }}
            transition={{ duration: 0.6, ease: EASE }}
            className="relative pb-8 pl-12 last:pb-0"
          >
            <span className="absolute left-[9px] top-2 flex h-6 w-6 items-center justify-center rounded-full bg-[#F4A300] text-[11px] font-bold text-[#0C1D30]">
              {i + 1}
            </span>
            <div className="overflow-hidden rounded-[20px] bg-white/[0.06] ring-1 ring-white/10">
              <div className="relative aspect-[16/9]">
                <PageImageFill image={s.image} sizes="90vw" />
              </div>
              <div className="p-5">
                {s.kicker && <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#F4A300]">{s.kicker}</p>}
                <h3 className={`${SERIF} text-[26px] font-medium`}>{s.name}</h3>
                {s.elevation && <p className="text-[12.5px] text-white/55">{s.elevation}</p>}
                <p className="mt-2 text-[14.5px] leading-6 text-white/80">{s.text}</p>
              </div>
            </div>
          </motion.li>
        ))}
      </ol>
    </section>
  );
}
