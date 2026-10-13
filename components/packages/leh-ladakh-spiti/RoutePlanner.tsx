"use client";

import { useId, useState, type KeyboardEvent } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, ArrowDown, ArrowRight, BedDouble, ChevronDown, Gauge, Users } from "lucide-react";
import Reveal from "@/components/shared/Reveal";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import { ANCHOR, SECTION_Y } from "@/components/activities/experience/product/constants";
import { FLAG_LABEL, ITINERARY_NOTE, type DayFlag, type ExpeditionRoute } from "@/data/leh-ladakh-spiti/content";

const EASE = [0.22, 1, 0.36, 1] as const;
const PREVIEW_DAYS = 10;

const FLAG_STYLE: Record<DayFlag, string> = {
  seasonal: "border-[#F4A300]/40 bg-[#FFF6E2] text-[#8A5A00]",
  permit: "border-[#2F6E9C]/30 bg-[#EAF3FA] text-[#1F5478]",
  optional: "border-[#0B2942]/15 bg-[#F3F5F8] text-[#4A5A6A]",
  rest: "border-[#3E8E6A]/30 bg-[#EAF6F0] text-[#2B6B4E]",
};

/**
 * Route cards, route detail and day-by-day itinerary share one selection,
 * so choosing a route anywhere keeps the itinerary in sync.
 */
export default function RoutePlanner({ routes }: { routes: ExpeditionRoute[] }) {
  const [activeId, setActiveId] = useState(routes[0].id);
  const active = routes.find((r) => r.id === activeId) ?? routes[0];

  const showItinerary = (id: ExpeditionRoute["id"]) => {
    setActiveId(id);
    document.getElementById("itinerary")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <>
      <section id="routes" aria-labelledby="routes-title" className={`${ANCHOR} ${SECTION_Y} bg-[#F7F9FB]`}>
        <div className={CONTAINER}>
          <Reveal>
            <SectionHeading
              id="routes-title"
              eyebrow="Three Ways Across"
              title="Choose Your Expedition Route"
              intro="Each route links the same great landscapes in a different order — and each depends on different seasonal roads. Pick the one that fits your gateway, pace and comfort at altitude."
            />
          </Reveal>

          <RouteTabs routes={routes} activeId={activeId} onSelect={setActiveId} label="Expedition routes" idPrefix="route" variant="cards" />

          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              id={`route-panel`}
              role="tabpanel"
              aria-labelledby={`route-tab-${active.id}`}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35, ease: EASE }}
              className="mt-8 grid gap-8 rounded-[28px] border border-[#0B2942]/10 bg-white p-6 shadow-[0_24px_60px_-40px_rgba(11,41,66,0.5)] sm:p-8 lg:grid-cols-[1.35fr_1fr] lg:p-10"
            >
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-[#C98500]">
                  Route {active.number} · {active.duration}
                </p>
                <h3 className={`${SERIF} mt-3 text-[26px] font-medium leading-tight text-[#0B2942] sm:text-[32px]`}>{active.name}</h3>
                <p className="mt-2 text-[15px] italic text-[#5B6B7B]">{active.theme}</p>
                <p className="mt-4 text-[15.5px] leading-7 text-[#33475B]">{active.summary}</p>

                <h4 className="mt-7 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5B6B7B]">Route sequence</h4>
                <ol className="mt-3 flex flex-wrap items-center gap-x-1.5 gap-y-2 text-[13.5px] font-medium text-[#0B2942]">
                  {active.stops.map((s, i) => (
                    <li key={`${s.name}-${i}`} className="inline-flex items-center gap-1.5">
                      {i > 0 && <ArrowRight className={`h-3.5 w-3.5 ${s.link ? "text-[#F4A300]" : "text-[#9AA8B5]"}`} aria-hidden="true" />}
                      <span
                        className={`rounded-full px-2.5 py-1 ${
                          s.link ? "border border-dashed border-[#F4A300] bg-[#FFF8EA]" : "bg-[#F1F4F7]"
                        }`}
                        title={s.via}
                      >
                        {s.name}
                        {s.link && <span className="sr-only"> ({s.link} link: {s.via})</span>}
                      </span>
                    </li>
                  ))}
                </ol>
                <p className="mt-2 text-[12.5px] text-[#5B6B7B]">Dashed stops are reached over seasonal or permit-dependent links.</p>

                <h4 className="mt-7 text-[12px] font-semibold uppercase tracking-[0.2em] text-[#5B6B7B]">Highlights</h4>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {active.highlights.map((h) => (
                    <li key={h} className="rounded-full border border-[#0B2942]/12 px-3 py-1 text-[13px] text-[#33475B]">
                      {h}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-col gap-4">
                <dl className="grid gap-4 rounded-[20px] bg-[#F7F9FB] p-5">
                  <div className="flex gap-3">
                    <Gauge className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6E9C]" aria-hidden="true" />
                    <div>
                      <dt className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#5B6B7B]">Difficulty</dt>
                      <dd className="mt-0.5 text-[15px] text-[#0B2942]">{active.difficulty}</dd>
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <Users className="mt-0.5 h-5 w-5 shrink-0 text-[#2F6E9C]" aria-hidden="true" />
                    <div>
                      <dt className="text-[11.5px] font-semibold uppercase tracking-[0.18em] text-[#5B6B7B]">Best suited to</dt>
                      <dd className="mt-0.5 text-[15px] leading-6 text-[#0B2942]">{active.bestFor}</dd>
                    </div>
                  </div>
                </dl>
                <div role="note" className="flex gap-3 rounded-[20px] border border-[#F4A300]/45 bg-[#FFF8EA] p-5">
                  <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-[#C98500]" aria-hidden="true" />
                  <p className="text-[14px] leading-6 text-[#5A4210]">
                    <strong className="font-semibold">Seasonal access: </strong>
                    {active.seasonalNote}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={() => showItinerary(active.id)}
                  className="group mt-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#0B2942] px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#123A5C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
                >
                  View Route {active.number} Itinerary
                  <ArrowDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" aria-hidden="true" />
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      <section id="itinerary" aria-labelledby="itinerary-title" className={`${ANCHOR} ${SECTION_Y} bg-white`}>
        <div className={CONTAINER}>
          <Reveal>
            <SectionHeading
              id="itinerary-title"
              eyebrow="Day by Day"
              title="Proposed Itineraries"
              intro="Every day shows where you travel and where you stay. Seasonal roads, permit-dependent stops, optional sectors and rest days are marked."
            />
          </Reveal>
          <RouteTabs routes={routes} activeId={activeId} onSelect={setActiveId} label="Itinerary by route" idPrefix="itin" variant="pills" />
          <ul className="mt-5 flex flex-wrap gap-2" aria-label="Legend">
            {(Object.keys(FLAG_LABEL) as DayFlag[]).map((f) => (
              <li key={f} className={`rounded-full border px-3 py-1 text-[12px] font-medium ${FLAG_STYLE[f]}`}>
                {FLAG_LABEL[f]}
              </li>
            ))}
          </ul>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={active.id}
              role="tabpanel"
              aria-labelledby={`itin-tab-${active.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
            >
              <DayList route={active} />
            </motion.div>
          </AnimatePresence>
          <p className="mt-6 max-w-[860px] rounded-[16px] bg-[#F7F9FB] px-5 py-4 text-[13.5px] leading-6 text-[#5B6B7B]">{ITINERARY_NOTE}</p>
        </div>
      </section>
    </>
  );
}

function RouteTabs({
  routes,
  activeId,
  onSelect,
  label,
  idPrefix,
  variant,
}: {
  routes: ExpeditionRoute[];
  activeId: string;
  onSelect: (id: ExpeditionRoute["id"]) => void;
  label: string;
  idPrefix: string;
  variant: "cards" | "pills";
}) {
  const onKeyDown = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key !== "ArrowRight" && e.key !== "ArrowLeft") return;
    const i = routes.findIndex((r) => r.id === activeId);
    const next = routes[(i + (e.key === "ArrowRight" ? 1 : routes.length - 1)) % routes.length];
    onSelect(next.id);
    document.getElementById(`${idPrefix}-tab-${next.id}`)?.focus();
  };

  if (variant === "pills") {
    return (
      <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className="mt-10 flex flex-wrap gap-2">
        {routes.map((r) => {
          const selected = r.id === activeId;
          return (
            <button
              key={r.id}
              id={`${idPrefix}-tab-${r.id}`}
              role="tab"
              type="button"
              aria-selected={selected}
              tabIndex={selected ? 0 : -1}
              onClick={() => onSelect(r.id)}
              className={`rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
                selected ? "bg-[#0B2942] text-white" : "bg-[#F1F4F7] text-[#33475B] hover:bg-[#E4EAF0]"
              }`}
            >
              Route {r.number} · {r.days.length} days
            </button>
          );
        })}
      </div>
    );
  }

  return (
    <div role="tablist" aria-label={label} onKeyDown={onKeyDown} className="mt-12 grid gap-4 md:grid-cols-3">
      {routes.map((r) => {
        const selected = r.id === activeId;
        return (
          <button
            key={r.id}
            id={`${idPrefix}-tab-${r.id}`}
            role="tab"
            type="button"
            aria-selected={selected}
            aria-controls="route-panel"
            tabIndex={selected ? 0 : -1}
            onClick={() => onSelect(r.id)}
            className={`group overflow-hidden rounded-[24px] border bg-white text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_50px_-30px_rgba(11,41,66,0.55)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300] ${
              selected ? "border-[#F4A300] ring-2 ring-[#F4A300]/40" : "border-[#0B2942]/10"
            }`}
          >
            <div className="relative aspect-[16/9] overflow-hidden">
              <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                <PageImageFill image={r.image} sizes="(min-width: 768px) 33vw, 100vw" />
              </div>
              <span className="absolute left-4 top-4 rounded-full bg-[#071421]/75 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-white">
                Route {r.number}
              </span>
            </div>
            <div className="p-5">
              <p className="text-[12px] font-semibold uppercase tracking-[0.18em] text-[#C98500]">{r.duration}</p>
              <p className={`${SERIF} mt-1.5 text-[20px] font-medium leading-snug text-[#0B2942]`}>{r.tab}</p>
              <p className="mt-1.5 text-[14px] leading-6 text-[#5B6B7B]">{r.theme}</p>
            </div>
          </button>
        );
      })}
    </div>
  );
}

function DayList({ route }: { route: ExpeditionRoute }) {
  const [expanded, setExpanded] = useState(false);
  const listId = useId();
  const visible = expanded ? route.days : route.days.slice(0, PREVIEW_DAYS);

  return (
    <div className="mt-8">
      <ol id={listId} className="relative space-y-2.5 before:absolute before:bottom-4 before:left-[23px] before:top-4 before:w-px before:bg-[#0B2942]/12">
        <AnimatePresence initial={false}>
          {visible.map((d, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: EASE }}
              className="relative overflow-hidden"
            >
              <div className="flex gap-4 rounded-[18px] py-1.5 pr-2 transition-colors hover:bg-[#F7F9FB]">
                <span className="relative z-10 flex h-12 w-12 shrink-0 flex-col items-center justify-center rounded-full border border-[#0B2942]/12 bg-white text-[#0B2942]">
                  <span className="text-[9px] font-semibold uppercase tracking-[0.14em] text-[#5B6B7B]">Day</span>
                  <span className="-mt-0.5 text-[15px] font-semibold leading-none">{i + 1}</span>
                </span>
                <div className="min-w-0 flex-1 pt-1">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5">
                    <h3 className="text-[15.5px] font-semibold text-[#0B2942]">{d.title}</h3>
                    {d.flag && <span className={`rounded-full border px-2.5 py-0.5 text-[11.5px] font-medium ${FLAG_STYLE[d.flag]}`}>{FLAG_LABEL[d.flag]}</span>}
                  </div>
                  <p className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13.5px] text-[#5B6B7B]">
                    <span className="inline-flex items-center gap-1.5">
                      <BedDouble className="h-3.5 w-3.5" aria-hidden="true" />
                      <span className="sr-only">Overnight: </span>
                      {d.overnight === "—" ? "Departure day" : d.overnight}
                    </span>
                    {d.note && <span>{d.note}</span>}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </AnimatePresence>
      </ol>
      {route.days.length > PREVIEW_DAYS && (
        <button
          type="button"
          aria-expanded={expanded}
          aria-controls={listId}
          onClick={() => setExpanded((v) => !v)}
          className="mt-5 inline-flex items-center gap-2 rounded-full border border-[#0B2942]/15 px-5 py-2.5 text-[14px] font-semibold text-[#0B2942] transition-colors hover:border-[#0B2942] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#F4A300]"
        >
          {expanded ? "Show fewer days" : `Show all ${route.days.length} days`}
          <ChevronDown className={`h-4 w-4 transition-transform ${expanded ? "rotate-180" : ""}`} aria-hidden="true" />
        </button>
      )}
    </div>
  );
}
