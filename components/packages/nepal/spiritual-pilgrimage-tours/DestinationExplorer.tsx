"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, RotateCcw, SlidersHorizontal } from "lucide-react";
import { CONTAINER, SectionHeading } from "@/components/activities/experience/ui";
import { DIFFICULTY, DURATIONS, FAITHS, PILGRIMAGE_TYPES, QUICK_CATEGORIES, REGIONS, TRAVEL_STYLES, matchesRule } from "@/data/pilgrimage/filters";
import type { PilgrimageDestination } from "@/data/pilgrimage/types";
import { DestinationCard } from "./cards";

const PAGE = 12;

type Filters = { region: string; faith: string; type: string; style: string; duration: string; difficulty: string };
const EMPTY: Filters = { region: "", faith: "", type: "", style: "", duration: "", difficulty: "" };

const SELECTS: { key: keyof Filters; label: string; options: Record<string, string> }[] = [
  { key: "region", label: "Region / Province", options: Object.fromEntries(Object.entries(REGIONS).map(([k, v]) => [k, v.label])) },
  { key: "faith", label: "Faith", options: FAITHS },
  { key: "type", label: "Pilgrimage type", options: PILGRIMAGE_TYPES },
  { key: "style", label: "Travel style", options: TRAVEL_STYLES },
  { key: "duration", label: "Duration", options: DURATIONS },
  { key: "difficulty", label: "Difficulty", options: DIFFICULTY },
];

/**
 * Quick category pills (below the hero) + the full sacred destination
 * directory with region, faith, type, style, duration and difficulty filters.
 */
export default function DestinationExplorer({ destinations }: { destinations: PilgrimageDestination[] }) {
  const [quick, setQuick] = useState<string | null>(null);
  const [f, setF] = useState<Filters>(EMPTY);
  const [shown, setShown] = useState(PAGE);
  const [openFilters, setOpenFilters] = useState(false);

  const results = useMemo(() => {
    const rule = QUICK_CATEGORIES.find((c) => c.id === quick)?.rule;
    return destinations.filter(
      (d) =>
        matchesRule(d, rule) &&
        (!f.region || d.region === f.region) &&
        (!f.faith || d.faith.includes(f.faith as never)) &&
        (!f.type || d.pilgrimageTypes.includes(f.type as never)) &&
        (!f.style || d.travelStyles.includes(f.style as never)) &&
        (!f.duration || d.recommendedDuration === f.duration) &&
        (!f.difficulty || d.difficulty === f.difficulty),
    );
  }, [destinations, quick, f]);

  const active = Boolean(quick) || Object.values(f).some(Boolean);
  const reset = () => {
    setQuick(null);
    setF(EMPTY);
    setShown(PAGE);
  };

  const pickQuick = (id: string, anchor?: string) => {
    if (anchor) {
      document.querySelector(anchor)?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
      return;
    }
    setQuick((q) => (q === id ? null : id));
    setShown(PAGE);
  };

  return (
    <>
      {/* Quick filters */}
      <nav aria-label="Pilgrimage categories" className="border-b border-[#0B2942]/10 bg-white">
        <ul className="mx-auto flex max-w-[1400px] gap-2 overflow-x-auto px-5 py-3 [scrollbar-width:none] sm:px-8 lg:flex-wrap lg:justify-center lg:overflow-visible lg:px-10 [&::-webkit-scrollbar]:hidden">
          {QUICK_CATEGORIES.map((c) => {
            const on = quick === c.id;
            return (
              <li key={c.id} className="shrink-0">
                <button
                  type="button"
                  aria-pressed={c.anchor ? undefined : on}
                  onClick={() => pickQuick(c.id, c.anchor)}
                  className={`rounded-full border px-4 py-2 text-[13px] font-medium transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                    on ? "border-[#0B2942] bg-[#0B2942] text-white" : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
                  }`}
                >
                  {c.label}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <section id="destinations" aria-labelledby="destinations-title" className="scroll-mt-[160px] bg-[#F8F6F1] py-16 sm:py-20 md:scroll-mt-[200px] lg:py-24">
        <div className={CONTAINER}>
          <SectionHeading
            id="destinations-title"
            eyebrow="The Sacred Directory"
            title="Explore All Sacred Destinations"
            intro="Discover Nepal's sacred temples, monasteries, pilgrimage routes, holy lakes, spiritual mountains and culturally significant religious destinations."
          />

          <div className="mt-8 flex flex-wrap items-center justify-between gap-3">
            <p className="text-[15px] text-[#4A5B6C]" aria-live="polite">
              <span className="font-semibold text-[#0B2942]">{results.length}</span> Sacred Destinations
            </p>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setOpenFilters((o) => !o)}
                aria-expanded={openFilters}
                aria-controls="destination-filters"
                className="inline-flex items-center gap-2 rounded-full border border-[#0B2942]/15 bg-white px-4 py-2.5 text-[13.5px] font-semibold text-[#0B2942] lg:hidden"
              >
                <SlidersHorizontal className="h-4 w-4" aria-hidden="true" />
                Filters
                <ChevronDown className={`h-4 w-4 transition-transform ${openFilters ? "rotate-180" : ""}`} aria-hidden="true" />
              </button>
              {active && (
                <button
                  type="button"
                  onClick={reset}
                  className="inline-flex items-center gap-2 rounded-full px-4 py-2.5 text-[13.5px] font-semibold text-[#8A2E1F] hover:bg-white"
                >
                  <RotateCcw className="h-4 w-4" aria-hidden="true" />
                  Reset filters
                </button>
              )}
            </div>
          </div>

          <div id="destination-filters" className={`${openFilters ? "grid" : "hidden"} mt-5 gap-3 sm:grid-cols-2 lg:grid lg:grid-cols-6`}>
            {SELECTS.map((s) => (
              <label key={s.key} className="block">
                <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8A97A5]">{s.label}</span>
                <select
                  value={f[s.key]}
                  onChange={(e) => {
                    setF((prev) => ({ ...prev, [s.key]: e.target.value }));
                    setShown(PAGE);
                  }}
                  className="mt-1.5 w-full rounded-xl border border-[#0B2942]/15 bg-white px-3 py-2.5 text-[14px] text-[#0B2942] outline-none focus:border-[#F4A300] focus:ring-2 focus:ring-[#F4A300]/30"
                >
                  <option value="">All</option>
                  {Object.entries(s.options).map(([k, v]) => (
                    <option key={k} value={k}>
                      {v}
                    </option>
                  ))}
                </select>
              </label>
            ))}
          </div>

          {results.length === 0 ? (
            <div className="mt-12 rounded-[24px] border border-dashed border-[#0B2942]/15 bg-white p-10 text-center">
              <p className="text-[15px] text-[#4A5B6C]">No destinations match these filters yet.</p>
              <button type="button" onClick={reset} className="mt-4 text-[14px] font-semibold text-[#0B2942] underline underline-offset-4">
                Reset filters
              </button>
            </div>
          ) : (
            <ul className="mt-10 grid gap-5 min-[520px]:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              <AnimatePresence mode="popLayout" initial={false}>
                {results.slice(0, shown).map((d, i) => (
                  <motion.li
                    key={d.id}
                    layout
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96 }}
                    transition={{ duration: 0.4, delay: Math.min(i % PAGE, 8) * 0.03, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <DestinationCard d={d} />
                  </motion.li>
                ))}
              </AnimatePresence>
            </ul>
          )}

          {results.length > shown && (
            <div className="mt-10 flex justify-center">
              <button
                type="button"
                onClick={() => setShown((n) => n + PAGE)}
                className="inline-flex items-center gap-2 rounded-full border border-[#0B2942]/15 bg-white px-6 py-3 text-[14.5px] font-semibold text-[#0B2942] transition-colors hover:border-[#0B2942]"
              >
                Show more destinations ({results.length - shown})
                <ChevronDown className="h-4 w-4" aria-hidden="true" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
