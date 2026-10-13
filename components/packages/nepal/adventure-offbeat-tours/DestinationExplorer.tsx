"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowUpRight, ChevronDown, Gauge, MapPin, Mountain, Route } from "lucide-react";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import { EXPERIENCE_TAGS, FILTERS } from "@/data/adventure-offbeat/content";
import type { ExperienceId, OffbeatDestination } from "@/data/adventure-offbeat/types";

const PAGE = 9;
const HASH = "#explore=";

/**
 * Destination discovery grid with experience filters. Other sections
 * deep-link a filter with `#explore=<id>` (e.g. #explore=camping).
 */
export default function DestinationExplorer({ destinations }: { destinations: OffbeatDestination[] }) {
  const [filter, setFilter] = useState<ExperienceId | null>(null);
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const counts = useMemo(() => {
    const c = new Map<ExperienceId | null, number>([[null, destinations.length]]);
    for (const d of destinations) for (const e of d.experiences) c.set(e, (c.get(e) ?? 0) + 1);
    return c;
  }, [destinations]);

  const results = useMemo(() => (filter ? destinations.filter((d) => d.experiences.includes(filter)) : destinations), [destinations, filter]);
  const visible = expanded ? results : results.slice(0, PAGE);

  const pick = useCallback((id: ExperienceId | null) => {
    setFilter(id);
    setExpanded(false);
  }, []);

  /* Apply a filter from the URL hash, now and on later hash changes. */
  useEffect(() => {
    const apply = () => {
      const hash = window.location.hash;
      if (!hash.startsWith(HASH)) return;
      const id = hash.slice(HASH.length) as ExperienceId;
      if (!FILTERS.some((f) => f.id === id)) return;
      pick(id);
      sectionRef.current?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    };
    apply();
    window.addEventListener("hashchange", apply);
    return () => window.removeEventListener("hashchange", apply);
  }, [pick]);

  const activeLabel = FILTERS.find((f) => f.id === filter)?.label ?? "All Experiences";

  return (
    <section
      ref={sectionRef}
      id="destinations"
      aria-labelledby="destinations-title"
      className="relative scroll-mt-[100px] overflow-hidden bg-[#F6F4EE] py-20 sm:py-24 md:scroll-mt-[144px] lg:py-28"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -right-32 top-10 h-[420px] w-[420px] rounded-full bg-[radial-gradient(circle,rgba(159,211,238,0.35),transparent_70%)]" />
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            id="destinations-title"
            eyebrow="Hidden Destinations"
            title="Explore Nepal's Hidden Gems & Offbeat Destinations"
            intro="Remote lakes, high valleys, wilderness parks and hill villages — each with a Karvaahh guide page so you can read more before you plan."
          />
          <p className="text-[14.5px] text-[#4A5B6C]" aria-live="polite">
            Showing <span className="font-semibold text-[#0B2942]">{results.length}</span> {filter ? `· ${activeLabel}` : "destinations"}
          </p>
        </div>

        {/* Filter bar */}
        <div className="sticky top-[93px] z-20 -mx-5 mt-10 border-y border-[#0B2942]/[0.06] bg-[#F6F4EE]/90 px-5 py-3 backdrop-blur-md sm:-mx-8 sm:px-8 md:top-[137px] lg:static lg:mx-0 lg:border-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none">
          <ul role="list" aria-label="Filter destinations by experience" className="flex gap-2 overflow-x-auto [scrollbar-width:none] lg:flex-wrap [&::-webkit-scrollbar]:hidden">
            {FILTERS.map((f) => {
              const on = filter === f.id;
              const n = counts.get(f.id) ?? 0;
              if (!n) return null;
              return (
                <li key={f.label} className="shrink-0">
                  <button
                    type="button"
                    aria-pressed={on}
                    onClick={() => pick(f.id)}
                    className={`inline-flex min-h-[44px] items-center gap-2 rounded-full border px-4 text-[13.5px] font-medium transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                      on ? "border-[#0B2942] bg-[#0B2942] text-white shadow-[0_10px_24px_-12px_rgba(11,41,66,0.7)]" : "border-[#0B2942]/15 bg-white text-[#0B2942] hover:border-[#0B2942]/40"
                    }`}
                  >
                    {f.label}
                    <span className={`rounded-full px-1.5 text-[11px] font-semibold ${on ? "bg-white/15 text-[#F4D6A0]" : "bg-[#0B2942]/[0.06] text-[#5B6B7B]"}`}>{n}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout" initial={false}>
            {visible.map((d, i) => (
              <motion.li
                key={d.id}
                layout={!reduce}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.45, delay: Math.min(i, 8) * 0.04, ease: [0.22, 1, 0.36, 1] }}
                className="h-full"
              >
                <DestinationCard d={d} priority={i < 3} />
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>

        {results.length > PAGE && (
          <div className="mt-12 flex justify-center">
            <button
              type="button"
              onClick={() => setExpanded((e) => !e)}
              aria-expanded={expanded}
              className="inline-flex min-h-[48px] items-center gap-2 rounded-full border border-[#0B2942]/15 bg-white px-6 text-[14.5px] font-semibold text-[#0B2942] transition-colors hover:border-[#0B2942]"
            >
              {expanded ? "Show fewer" : `Show all ${results.length} destinations`}
              <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
            </button>
          </div>
        )}
      </div>
    </section>
  );
}

function DestinationCard({ d, priority }: { d: OffbeatDestination; priority: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-[26px] bg-white shadow-[0_1px_0_rgba(11,41,66,0.06)] ring-1 ring-[#0B2942]/[0.07] transition-all duration-500 hover:-translate-y-1.5 hover:shadow-[0_30px_60px_-30px_rgba(11,41,66,0.55)]">
      <div className="relative aspect-[4/3] overflow-hidden">
        <div className="absolute inset-0 transition-transform duration-[1200ms] ease-out group-hover:scale-[1.07] motion-reduce:transition-none motion-reduce:group-hover:scale-100">
          <PageImageFill image={d.image} eager={priority} sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-[#06111C]/80 via-[#06111C]/10 to-transparent" />
        <ul className="absolute left-4 top-4 flex flex-wrap gap-1.5" aria-label="Experience types">
          {d.experiences.slice(0, 3).map((e) => (
            <li key={e} className="rounded-full bg-white/90 px-2.5 py-1 text-[11px] font-semibold text-[#0B2942] backdrop-blur-sm">
              {EXPERIENCE_TAGS[e]}
            </li>
          ))}
        </ul>
        <p className="absolute bottom-4 left-4 right-4 flex items-center gap-1.5 text-[12.5px] font-medium text-white/90">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-[#F4A300]" aria-hidden="true" />
          <span className="truncate">{d.location}</span>
        </p>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className={`${SERIF} text-[23px] font-medium leading-tight text-[#0B2942]`}>{d.name}</h3>
        <p className="mt-3 flex-1 text-[14.5px] leading-[1.7] text-[#4A5B6C]">{d.description}</p>

        {(d.altitude || d.difficulty) && (
          <dl className="mt-5 flex flex-wrap gap-x-5 gap-y-2 text-[12.5px]">
            {d.altitude && (
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Altitude</dt>
                <Mountain className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
                <dd className="font-semibold text-[#0B2942]">{d.altitude}</dd>
              </div>
            )}
            {d.difficulty && (
              <div className="flex items-center gap-1.5">
                <dt className="sr-only">Difficulty</dt>
                <Gauge className="h-3.5 w-3.5 text-[#C98500]" aria-hidden="true" />
                <dd className="font-semibold text-[#0B2942]">{d.difficulty}</dd>
              </div>
            )}
          </dl>
        )}
        <p className="mt-3 flex items-start gap-1.5 text-[12.5px] leading-5 text-[#6B7A89]">
          <Route className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#8A97A5]" aria-hidden="true" />
          {d.access}
        </p>

        <Link
          href={d.href}
          className="mt-6 inline-flex items-center gap-1.5 self-start text-[14px] font-semibold text-[#0B2942] underline decoration-[#F4A300] decoration-2 underline-offset-[6px] transition-colors after:absolute after:inset-0 after:content-[''] hover:text-[#C98500] focus-visible:outline-none"
        >
          {d.linkLabel}
          <span className="sr-only"> — {d.name}</span>
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" aria-hidden="true" />
        </Link>
      </div>
      <span aria-hidden="true" className="pointer-events-none absolute inset-0 rounded-[26px] ring-2 ring-transparent transition group-has-[a:focus-visible]:ring-[#F4A300]" />
    </article>
  );
}
