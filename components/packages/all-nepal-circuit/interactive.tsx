"use client";

import Image from "next/image";
import { useState } from "react";
import { motion, type Variants } from "motion/react";
import { ArrowRight, ChevronDown, Info, MapPin } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import type { PageImage } from "@/components/activities/experience/types";
import { SERIF } from "@/components/activities/experience/ui";
import { BTN_GOLD, BTN_LINE, FOCUS } from "@/components/packages/garhwal-kumaon/styles";
import { HERO_FACTS, type Stage } from "@/data/all-nepal-circuit/content";

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
   Itinerary timeline accordion
   (collapsed panels stay in the HTML for search engines)
   ============================================================ */

export function ItineraryTimeline({ stages }: { stages: Stage[] }) {
  const [open, setOpen] = useState<Set<number>>(() => new Set([0]));
  const allOpen = open.size === stages.length;

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <div className="mt-12">
      <div className="mb-6 flex justify-end">
        <button
          type="button"
          onClick={() => setOpen(allOpen ? new Set() : new Set(stages.map((_, i) => i)))}
          className={`rounded-full text-[13.5px] font-semibold text-[#1769AA] underline decoration-[#D9AD5B] decoration-2 underline-offset-[6px] transition-colors hover:text-[#102A43] ${FOCUS}`}
        >
          {allOpen ? "Collapse all days" : "Expand all days"}
        </button>
      </div>

      <ol className="relative space-y-3 before:absolute before:bottom-6 before:left-[36px] before:top-6 before:w-px before:bg-[#102A43]/12 sm:before:left-[44px]">
        {stages.map((s, i) => {
          const on = open.has(i);
          const panelId = `stage-panel-${i}`;
          return (
            <li key={s.days} className="relative">
              <div className={`rounded-2xl border bg-white transition-all duration-300 ${on ? "border-[#D9AD5B]/60 shadow-[0_24px_48px_-32px_rgba(16,42,67,0.5)]" : "border-[#102A43]/10 hover:border-[#1769AA]/30"}`}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={on}
                    aria-controls={panelId}
                    onClick={() => toggle(i)}
                    className={`flex w-full items-center gap-4 rounded-2xl p-3 text-left sm:gap-5 sm:p-4 ${FOCUS}`}
                  >
                    <span
                      className={`relative z-10 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full text-[10px] font-semibold uppercase leading-tight transition-colors duration-300 sm:h-[56px] sm:w-[56px] ${
                        on ? "bg-[#102A43] text-[#E8CB8E]" : "bg-[#F3F7FA] text-[#1769AA]"
                      }`}
                    >
                      <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A8803A]">{s.days}</span>
                      <span className={`${SERIF} mt-0.5 block text-[18px] font-medium leading-snug text-[#102A43] sm:text-[21px]`}>{s.title}</span>
                    </span>
                    <span className="hidden items-center gap-1 text-[12.5px] text-[#5B6B7B] md:flex">
                      <MapPin className="h-3.5 w-3.5 text-[#D9AD5B]" aria-hidden="true" />
                      {s.region}
                    </span>
                    <ChevronDown className={`h-5 w-5 shrink-0 text-[#1769AA] transition-transform duration-300 ${on ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                </h3>
                <div id={panelId} inert={!on} className={`grid transition-[grid-template-rows] duration-500 ease-out motion-reduce:transition-none ${on ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                  <div className="overflow-hidden">
                    <div className="pb-5 pl-[76px] pr-5 sm:pl-[92px]">
                      <ul className="space-y-1.5">
                        {s.points.map((p) => (
                          <li key={p} className="flex items-start gap-2.5 text-[14.5px] leading-6 text-[#41556A]">
                            <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#D9AD5B]" aria-hidden="true" />
                            {p}
                          </li>
                        ))}
                      </ul>
                      {s.note && (
                        <p className="mt-3 flex items-start gap-2 rounded-xl bg-[#F3F7FA] px-3.5 py-2.5 text-[13px] leading-5 text-[#41556A]">
                          <Info className="mt-0.5 h-4 w-4 shrink-0 text-[#1769AA]" aria-hidden="true" />
                          {s.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
