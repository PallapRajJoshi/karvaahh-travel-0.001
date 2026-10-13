"use client";

import Image from "next/image";
import { useEffect, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import { ArrowRight, Check, ChevronDown, Clock, Compass, Landmark, Leaf, MapPin, Mountain, Plus } from "lucide-react";
import Breadcrumb from "@/components/shared/Breadcrumb";
import Reveal from "@/components/shared/Reveal";
import { OpenBookingButton } from "@/components/activities/experience/booking";
import { PageImageFill, SERIF } from "@/components/activities/experience/ui";
import type { PageImage } from "@/components/activities/experience/types";
import { HimalayaScene } from "@/components/packages/uttarakhand/UttarakhandHero";
import type { CircuitPackage, Experience, ITINERARY, Region } from "@/data/garhwal-kumaon/content";
import { BTN_GOLD, BTN_LINE, BTN_NAVY, BTN_OUTLINE, FOCUS } from "./styles";

const EASE = [0.22, 1, 0.36, 1] as const;

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: (d: number) => ({ opacity: 1, y: 0, transition: { duration: 0.8, delay: d, ease: EASE } }),
};

/* ============================================================
   Hero
   ============================================================ */

const HERO_FACTS = [
  { icon: Clock, label: "25–30 Days" },
  { icon: Mountain, label: "Garhwal & Kumaon" },
  { icon: Compass, label: "Private Customizable Journeys" },
];

export function CircuitHero({ background }: { background: PageImage }) {
  return (
    <section aria-labelledby="hero-title" className="relative isolate overflow-hidden bg-[#071421] text-white">
      <div className="absolute inset-0 -z-20">
        {background.src ? (
          <Image src={background.src} alt={background.alt} fill priority sizes="100vw" className="object-cover" style={{ objectPosition: background.objectPosition }} />
        ) : (
          <HimalayaScene />
        )}
      </div>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-[linear-gradient(95deg,rgba(7,20,33,0.88)_0%,rgba(7,20,33,0.55)_50%,rgba(7,20,33,0.05)_100%)]" />

      <div className="mx-auto flex min-h-[calc(100svh-101px)] w-full max-w-[1400px] flex-col justify-center px-5 pb-24 pt-12 sm:px-8 md:min-h-[calc(100svh-145px)] lg:px-10">
        <div className="max-w-[760px]">
          <motion.div variants={fadeUp} custom={0.05} initial="hidden" animate="show">
            <Breadcrumb
              className="pp-breadcrumb--on-dark text-white"
              items={[{ label: "Home", href: "/" }, { label: "Packages", href: "/packages" }, { label: "Karvaahh Specials" }, { label: "Garhwal & Kumaon" }]}
            />
          </motion.div>
          <motion.p variants={fadeUp} custom={0.2} initial="hidden" animate="show" className="mt-8 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.34em] text-[#E3CFA4]">
            <span className="h-px w-10 bg-[#C9A96E]" aria-hidden="true" />
            Karvaahh Special Packages
          </motion.p>
          <motion.h1
            id="hero-title"
            variants={fadeUp}
            custom={0.32}
            initial="hidden"
            animate="show"
            className={`${SERIF} mt-5 text-[40px] font-medium leading-[1.04] tracking-[-0.025em] sm:text-[56px] lg:text-[68px]`}
          >
            Garhwal &amp; Kumaon <span className="italic text-[#E3CFA4]">Grand Himalayan</span> Circuit
          </motion.h1>
          <motion.p variants={fadeUp} custom={0.45} initial="hidden" animate="show" className="mt-6 max-w-[600px] text-[16px] leading-7 text-white/80 sm:text-[17px] sm:leading-8">
            One extraordinary journey through sacred temples, alpine trails, ancient forests and the timeless beauty of Uttarakhand.
          </motion.p>

          <motion.ul variants={fadeUp} custom={0.58} initial="hidden" animate="show" className="mt-8 flex flex-wrap gap-x-6 gap-y-3 border-y border-white/15 py-4">
            {HERO_FACTS.map(({ icon: Icon, label }) => (
              <li key={label} className="flex items-center gap-2 text-[14px] font-medium text-white/90">
                <Icon className="h-4 w-4 text-[#C9A96E]" aria-hidden="true" />
                {label}
              </li>
            ))}
          </motion.ul>

          <motion.div variants={fadeUp} custom={0.7} initial="hidden" animate="show" className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a href="#packages" className={`group ${BTN_GOLD}`}>
              Explore Packages
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>
            <OpenBookingButton prefill={{ tourType: "Garhwal & Kumaon Grand Himalayan Circuit" }} className={BTN_LINE}>
              Plan My Journey
            </OpenBookingButton>
          </motion.div>
        </div>
      </div>

      <a
        href="#introduction"
        aria-label="Scroll to introduction"
        className={`absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.3em] text-white/60 transition-colors hover:text-white ${FOCUS}`}
      >
        Scroll
        <ChevronDown className="h-4 w-4" aria-hidden="true" />
      </a>
    </section>
  );
}

/* ============================================================
   Choose Your Himalayan Experience + package cards
   ============================================================ */

const EXPERIENCE_ICONS: Record<Experience, typeof Mountain> = { adventure: Mountain, spiritual: Landmark, wildlife: Leaf };

export function PackageChooser({ packages }: { packages: CircuitPackage[] }) {
  const [selected, setSelected] = useState<Experience | null>(null);
  const active = packages.find((p) => p.id === selected);

  return (
    <>
      <div className="mt-12 border border-[#0B2942]/10 bg-white p-5 sm:p-7">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className={`${SERIF} text-[22px] font-medium text-[#0B2942]`}>Choose Your Himalayan Experience</h3>
            <p className="mt-1 text-[14px] text-[#5B6B7B]">Pick what matters most and we&apos;ll point you to the right journey.</p>
          </div>
          <div role="radiogroup" aria-label="Preferred experience" className="grid grid-cols-3 gap-2 sm:flex">
            {packages.map((p) => {
              const Icon = EXPERIENCE_ICONS[p.id];
              const on = p.id === selected;
              return (
                <button
                  key={p.id}
                  type="button"
                  role="radio"
                  aria-checked={on}
                  onClick={() => setSelected(on ? null : p.id)}
                  className={`flex min-h-[48px] items-center justify-center gap-2 rounded-full border px-4 text-[14px] font-semibold transition-colors duration-300 sm:px-5 ${FOCUS} ${
                    on ? "border-[#0B2942] bg-[#0B2942] text-white" : "border-[#0B2942]/15 text-[#0B2942] hover:border-[#C9A96E]"
                  }`}
                >
                  <Icon className={`h-4 w-4 ${on ? "text-[#E3CFA4]" : "text-[#C9A96E]"}`} aria-hidden="true" />
                  {p.label}
                </button>
              );
            })}
          </div>
        </div>
        <AnimatePresence mode="wait" initial={false}>
          {active && (
            <motion.div
              key={active.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: EASE }}
              aria-live="polite"
              className="mt-5 flex flex-col gap-4 border-t border-[#0B2942]/10 pt-5 sm:flex-row sm:items-center sm:justify-between"
            >
              <p className="max-w-[720px] text-[14.5px] leading-6 text-[#0B2942]">
                <span className="font-semibold">We recommend the {active.title}.</span> {active.recommendation}
              </p>
              <OpenBookingButton prefill={{ tourType: active.title }} className={`${BTN_NAVY} shrink-0`}>
                Enquire About This Journey
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </OpenBookingButton>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {packages.map((p, i) => {
          const on = p.id === selected;
          const dim = selected !== null && !on;
          return (
            <Reveal key={p.id} delay={i * 120} className="h-full">
              <article
                id={`package-${p.id}`}
                aria-labelledby={`package-${p.id}-title`}
                className={`group flex h-full flex-col overflow-hidden border bg-white transition-all duration-500 ${
                  on ? "border-[#C9A96E] shadow-[0_30px_60px_-30px_rgba(11,41,66,0.55)] ring-1 ring-[#C9A96E]" : "border-[#0B2942]/10"
                } ${dim ? "opacity-60" : ""}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <div className="absolute inset-0 transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]">
                    <PageImageFill image={p.image} sizes="(min-width: 1024px) 33vw, 100vw" />
                  </div>
                  <span className="absolute left-4 top-4 bg-[#071421]/80 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.22em] text-[#E3CFA4]">
                    {p.label}
                  </span>
                  {on && <span className="absolute right-4 top-4 bg-[#C9A96E] px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.18em] text-[#071421]">Recommended</span>}
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h3 id={`package-${p.id}-title`} className={`${SERIF} text-[24px] font-medium leading-tight text-[#0B2942]`}>
                    {p.title}
                  </h3>
                  <dl className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-[13px] text-[#5B6B7B]">
                    <div className="flex items-center gap-1.5">
                      <dt className="sr-only">Duration</dt>
                      <Clock className="h-3.5 w-3.5 text-[#C9A96E]" aria-hidden="true" />
                      <dd>{p.duration}</dd>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <dt className="sr-only">Difficulty</dt>
                      <Mountain className="h-3.5 w-3.5 text-[#C9A96E]" aria-hidden="true" />
                      <dd>{p.difficulty}</dd>
                    </div>
                  </dl>
                  <p className="mt-4 text-[14.5px] leading-6 text-[#4A5B6B]">{p.text}</p>
                  <ul className="mt-4 space-y-2">
                    {p.highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-[14px] text-[#0B2942]">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#C9A96E]" aria-hidden="true" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-4 flex items-center gap-1.5 text-[13px] text-[#5B6B7B]">
                    <Plus className="h-3.5 w-3.5 text-[#C9A96E]" aria-hidden="true" />
                    Optional: {p.extension}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-3 pt-6">
                    <a href="#itinerary" className={BTN_OUTLINE}>
                      Explore Itinerary
                    </a>
                    <OpenBookingButton prefill={{ tourType: p.title }} className={BTN_NAVY} ariaLabel={`Enquire now about the ${p.title}`}>
                      Enquire Now
                    </OpenBookingButton>
                  </div>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </>
  );
}

/* ============================================================
   Regional itinerary tabs
   ============================================================ */

const REGIONS: Region[] = ["garhwal", "kumaon"];

export function ItineraryTabs({ itinerary }: { itinerary: typeof ITINERARY }) {
  const [region, setRegion] = useState<Region>("garhwal");
  const data = itinerary[region];

  /* Destination cards link to #itinerary-garhwal / #itinerary-kumaon. */
  useEffect(() => {
    const sync = () => {
      const match = REGIONS.find((r) => window.location.hash === `#itinerary-${r}`);
      if (match) setRegion(match);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  const onKey = (e: KeyboardEvent<HTMLButtonElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const next = region === "garhwal" ? "kumaon" : "garhwal";
    setRegion(next);
    document.getElementById(`tab-${next}`)?.focus();
  };

  return (
    <div className="mt-12">
      <div role="tablist" aria-label="Itinerary by region" className="inline-flex border border-[#0B2942]/15 bg-white p-1">
        {REGIONS.map((r) => {
          const on = r === region;
          return (
            <button
              key={r}
              id={`tab-${r}`}
              type="button"
              role="tab"
              aria-selected={on}
              aria-controls="itinerary-panel"
              tabIndex={on ? 0 : -1}
              onClick={() => setRegion(r)}
              onKeyDown={onKey}
              className={`min-h-[48px] px-5 text-left transition-colors duration-300 sm:px-7 ${FOCUS} ${on ? "bg-[#0B2942] text-white" : "text-[#0B2942] hover:bg-[#F3F5F7]"}`}
            >
              <span className={`${SERIF} block text-[18px] font-medium`}>{itinerary[r].label}</span>
              <span className={`block text-[12px] ${on ? "text-[#E3CFA4]" : "text-[#5B6B7B]"}`}>{itinerary[r].span}</span>
            </button>
          );
        })}
      </div>

      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={region}
          id="itinerary-panel"
          role="tabpanel"
          aria-labelledby={`tab-${region}`}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: EASE }}
          className="mt-8"
        >
          <p className="max-w-[680px] text-[15.5px] leading-7 text-[#4A5B6B]">{data.intro}</p>
          <ol className="relative mt-8 grid gap-x-12 md:grid-cols-2">
            {data.days.map((d) => (
              <li key={`${region}-${d.day}`} className="relative flex gap-4 border-l border-[#0B2942]/12 pb-6 pl-6 last:pb-0">
                <span
                  aria-hidden="true"
                  className={`absolute -left-[5px] top-1.5 h-[9px] w-[9px] rounded-full ${d.optional ? "border border-[#C9A96E] bg-white" : "bg-[#C9A96E]"}`}
                />
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#A0834D]">
                    {d.optional ? "Optional extension" : `Day ${d.day}`}
                    <span className="ml-2 inline-flex items-center gap-1 normal-case tracking-normal text-[#5B6B7B]">
                      <MapPin className="h-3 w-3" aria-hidden="true" />
                      {d.stay}
                    </span>
                  </p>
                  <h3 className="mt-1 text-[16px] font-semibold text-[#0B2942]">{d.title}</h3>
                  <p className="mt-1 text-[14px] leading-6 text-[#5B6B7B]">{d.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
