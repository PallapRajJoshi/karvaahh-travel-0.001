"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { motion, useScroll, useSpring, type Variants } from "motion/react";
import { ArrowRight, BedDouble, Car, ChevronDown, Compass, Info, MapPin, Plane, Sparkles, type LucideIcon } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import type { PageImage } from "@/components/activities/experience/types";
import { PageImageFill, SERIF } from "@/components/activities/experience/ui";
import { BTN_GOLD, BTN_LINE, FOCUS } from "@/components/packages/garhwal-kumaon/styles";
import { HERO_FACTS, PHASES, type ItineraryDay, type TransportMode } from "@/data/all-nepal-circuit/content";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

/* ============================================================
   Hero
   ============================================================ */

export function CircuitHero({ background }: { background: PageImage }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#102A43] text-white">
      {background.src && (
        <motion.div
          className="absolute inset-0 -z-20"
          initial={{ scale: 1.08, opacity: 0.6 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 2.4, ease: EASE }}
        >
          <Image src={background.src} alt={background.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: background.objectPosition }} />
        </motion.div>
      )}
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(16,42,67,0.9)_0%,rgba(16,42,67,0.55)_55%,rgba(16,42,67,0.1)_100%)]" />
      <div aria-hidden="true" className="absolute inset-x-0 bottom-0 -z-10 h-40 bg-gradient-to-t from-[#102A43]/70 to-transparent" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 pb-24 pt-12 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <div className="max-w-[780px]">
          <motion.div variants={fadeUp} custom={0.05} initial="hidden" animate="show">
            <Breadcrumb
              className="pp-breadcrumb--on-dark text-white"
              items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Karvaahh Specials" }, { label: "All Nepal Adventure Circuit" }]}
            />
          </motion.div>
          <motion.p variants={fadeUp} custom={0.2} initial="hidden" animate="show" className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#E8CB8E]">
            <span className="h-px w-10 bg-[#D9AD5B]" aria-hidden="true" />
            Karvaahh Special Packages
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.32}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-5 text-[42px] font-medium leading-[1.03] tracking-[-0.025em] sm:text-[58px] lg:text-[72px]`}
          >
            All Nepal <span className="italic text-[#E8CB8E]">Adventure</span> Circuit
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.42} initial="hidden" animate="show" className={`${SERIF} mt-5 text-[19px] italic leading-snug text-white/90 sm:text-[22px]`}>
            One Country. Countless Landscapes. An Extraordinary Journey.
          </motion.p>
          <motion.p variants={fadeUp} custom={0.52} initial="hidden" animate="show" className="mt-5 max-w-[640px] text-[15.5px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            Discover Nepal beyond the usual tourist trail—from the remote wilderness of Rara Lake and the dramatic landscapes of Mustang to the Himalayan villages of
            Ghandruk, the heritage of Kathmandu, and the wildlife-rich plains of Chitwan. Build a remarkable Nepal journey around your interests, travel dates, and
            preferred pace.
          </motion.p>

          <motion.ul variants={fadeUp} custom={0.62} initial="hidden" animate="show" className="mt-7 flex flex-wrap gap-2">
            {HERO_FACTS.map((f) => (
              <li key={f} className="rounded-full border border-white/20 bg-white/[0.07] px-3.5 py-1.5 text-[13px] font-medium text-white/90">
                {f}
              </li>
            ))}
          </motion.ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <motion.a variants={fadeUp} custom={0.74} initial="hidden" animate="show" href="#itinerary" className={`group ${BTN_GOLD}`}>
              Explore the Journey
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </motion.a>
            <motion.a variants={fadeUp} custom={0.84} initial="hidden" animate="show" href="#enquire" className={BTN_LINE}>
              Customize Your Trip
            </motion.a>
          </div>
        </div>
      </div>

      <a
        href="#introduction"
        aria-label="Scroll to introduction"
        className={`absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white ${FOCUS}`}
      >
        Scroll
        <ChevronDown className="h-4 w-4 motion-safe:animate-bounce" aria-hidden="true" />
      </a>
    </section>
  );
}

/* ============================================================
   Day-wise itinerary timeline
   (collapsed panels stay in the HTML for search engines)
   ============================================================ */

const MODES: Record<TransportMode, { label: string; icon: LucideIcon }> = {
  flight: { label: "Flight-dependent", icon: Plane },
  road: { label: "Road transfer", icon: Car },
  local: { label: "Explore locally", icon: Compass },
  rest: { label: "Flexible day", icon: BedDouble },
};

export function ItineraryTimeline({ days }: { days: ItineraryDay[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([1]));
  const allOpen = open.size === days.length;
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start 70%", "end 60%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, restDelta: 0.001 });

  const toggle = (day: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(day)) next.delete(day);
      else next.add(day);
      return next;
    });

  return (
    <div className="mx-auto mt-12 max-w-[980px]">
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(allOpen ? new Set() : new Set(days.map((d) => d.day)))}
          className={`rounded-full text-[13.5px] font-semibold text-[#1769AA] underline decoration-[#D9AD5B] decoration-2 underline-offset-[6px] transition-colors hover:text-[#102A43] ${FOCUS}`}
        >
          {allOpen ? "Collapse all days" : "Expand all 30 days"}
        </button>
      </div>

      <div className="relative">
        {/* Track + scroll-linked gold progress line */}
        <span aria-hidden="true" className="absolute bottom-8 left-[27px] top-8 w-px bg-[#102A43]/12 sm:left-[31px]" />
        <motion.span
          aria-hidden="true"
          style={{ scaleY: progress }}
          className="absolute bottom-8 left-[26.5px] top-8 w-[2px] origin-top bg-gradient-to-b from-[#D9AD5B] via-[#1769AA] to-[#102A43] sm:left-[30.5px]"
        />

        <ol ref={listRef} className="relative space-y-3">
          {days.map((d) => {
            const on = open.has(d.day);
            const panelId = `day-panel-${d.day}`;
            const mode = MODES[d.mode];
            const Icon = mode.icon;
            const phase = PHASES[d.day];
            return (
              <motion.li
                key={d.day}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "0px 0px -60px 0px" }}
                transition={{ duration: 0.6, delay: (d.day % 3) * 0.06, ease: EASE }}
                className={`relative ${phase && d.day > 1 ? "pt-8" : ""}`}
              >
                {phase && (
                  <p className="mb-3 flex items-center gap-3 pl-[68px] text-[11px] font-semibold uppercase tracking-[0.26em] text-[#A8803A] sm:pl-[84px]">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    {phase}
                    <span aria-hidden="true" className="h-px flex-1 bg-gradient-to-r from-[#D9AD5B]/50 to-transparent" />
                  </p>
                )}
                <div className="flex gap-3 sm:gap-5">
                  <span
                    aria-hidden="true"
                    className={`relative z-10 mt-3 flex h-14 w-14 shrink-0 flex-col items-center justify-center rounded-full border-4 border-white text-center leading-none shadow-[0_8px_20px_-10px_rgba(16,42,67,0.6)] transition-colors duration-300 sm:h-16 sm:w-16 ${
                      on ? "bg-[#102A43] text-[#E8CB8E]" : "bg-[#F3F7FA] text-[#1769AA]"
                    }`}
                  >
                    <span className="text-[8.5px] font-semibold uppercase tracking-[0.18em] opacity-80">Day</span>
                    <span className={`${SERIF} mt-0.5 text-[19px] sm:text-[21px]`}>{String(d.day).padStart(2, "0")}</span>
                  </span>

                  <div
                    className={`min-w-0 flex-1 rounded-2xl border bg-white transition-all duration-300 ${
                      on
                        ? "border-[#D9AD5B]/60 shadow-[0_24px_48px_-32px_rgba(16,42,67,0.5)]"
                        : "border-[#102A43]/10 hover:-translate-y-0.5 hover:border-[#1769AA]/30 hover:shadow-[0_18px_36px_-30px_rgba(16,42,67,0.5)] motion-reduce:hover:translate-y-0"
                    }`}
                  >
                    <h3>
                      <button
                        type="button"
                        aria-expanded={on}
                        aria-controls={panelId}
                        onClick={() => toggle(d.day)}
                        className={`flex w-full items-center gap-3 rounded-2xl p-4 text-left sm:p-5 ${FOCUS}`}
                      >
                        <span className="min-w-0 flex-1">
                          <span className="sr-only">Day {d.day}: </span>
                          <span className={`${SERIF} block text-[18px] font-medium leading-snug text-[#102A43] sm:text-[21px]`}>{d.title}</span>
                          <span className="mt-1.5 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12.5px] text-[#5B6B7B]">
                            <span className="inline-flex items-center gap-1">
                              <MapPin className="h-3.5 w-3.5 text-[#D9AD5B]" aria-hidden="true" />
                              Overnight: {d.overnight}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Icon className="h-3.5 w-3.5 text-[#1769AA]" aria-hidden="true" />
                              {mode.label}
                            </span>
                          </span>
                        </span>
                        <ChevronDown className={`h-5 w-5 shrink-0 text-[#1769AA] transition-transform duration-300 ${on ? "rotate-180" : ""}`} aria-hidden="true" />
                      </button>
                    </h3>

                    <div id={panelId} inert={!on} className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                      <div className="overflow-hidden">
                        <div className={`grid gap-5 px-4 pb-5 sm:px-5 ${d.image ? "sm:grid-cols-[minmax(0,220px)_1fr]" : ""}`}>
                          {d.image && (
                            <div className="group relative aspect-[16/10] overflow-hidden rounded-xl sm:aspect-[4/3]">
                              <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06] motion-reduce:transition-none">
                                <PageImageFill image={d.image} sizes="(min-width: 640px) 220px, 100vw" />
                              </div>
                            </div>
                          )}
                          <div>
                            <p className="text-[15px] leading-7 text-[#41556A]">{d.text}</p>
                            <ul className="mt-3 flex flex-wrap gap-2" aria-label="Highlights">
                              {d.highlights.map((h) => (
                                <li key={h} className="rounded-full border border-[#1769AA]/15 bg-[#F3F7FA] px-3 py-1 text-[12.5px] font-medium text-[#102A43]">
                                  {h}
                                </li>
                              ))}
                            </ul>
                            {d.transport && (
                              <p className="mt-4 flex items-start gap-2 rounded-xl border-l-2 border-[#D9AD5B] bg-[#FBF6EC] px-3.5 py-2.5 text-[13px] leading-5 text-[#41556A]">
                                <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#A8803A]" aria-hidden="true" />
                                <span>
                                  <span className="font-semibold text-[#102A43]">Travel note: </span>
                                  {d.transport}
                                </span>
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </ol>
      </div>
    </div>
  );
}
