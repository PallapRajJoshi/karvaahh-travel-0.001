"use client";

import { useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronLeft, ChevronRight, Info, Mountain } from "lucide-react";
import type { HelicopterTour, Place } from "../product-types";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

type ExplorerTour = Pick<HelicopterTour, "explorer" | "places">;

/** Tiny locator: every point place as a faint dot, the current one highlighted. */
function Locator({ places, current }: { places: Place[]; current: Place }) {
  const pts = places.filter((p) => !p.region);
  const lats = pts.map((p) => p.lat);
  const lons = pts.map((p) => p.lon);
  const [s, n, w, e] = [Math.min(...lats), Math.max(...lats), Math.min(...lons), Math.max(...lons)];
  const x = (lon: number) => 8 + ((lon - w) / (e - w || 1)) * 44;
  const y = (lat: number) => 8 + ((n - lat) / (n - s || 1)) * 44;
  return (
    <svg viewBox="0 0 60 60" className="h-14 w-14 rounded-xl bg-[#0B2942]/90 backdrop-blur-sm" aria-hidden="true">
      {pts.map((p) => (
        <circle key={p.id} cx={x(p.lon)} cy={y(p.lat)} r={p.id === current.id ? 0 : 1.6} fill="rgba(255,255,255,0.35)" />
      ))}
      {!current.region && (
        <>
          <circle cx={x(current.lon)} cy={y(current.lat)} r="6" fill="rgba(244,163,0,0.3)" />
          <circle cx={x(current.lon)} cy={y(current.lat)} r="3" fill="#F4A300" stroke="white" strokeWidth="1" />
        </>
      )}
    </svg>
  );
}

/**
 * Regional destination explorer: filterable, swipeable cards for the
 * places of the region. It describes the region — it does not imply the
 * helicopter lands at each place.
 */
export default function HeliDestinationExplorer({ tour, anchorId }: { tour: ExplorerTour; anchorId?: string }) {
  if (!tour.explorer || !tour.places?.length) return null;
  return <Explorer explorer={tour.explorer} places={tour.places} anchorId={anchorId} />;
}

function Explorer({ explorer, places, anchorId }: { explorer: NonNullable<HelicopterTour["explorer"]>; places: Place[]; anchorId?: string }) {
  const railRef = useRef<HTMLUListElement>(null);
  const groups = useMemo(() => Array.from(new Set(places.map((p) => p.group).filter((g): g is string => Boolean(g)))), [places]);
  const [group, setGroup] = useState<string | null>(null);
  const visible = places.filter((p) => !p.region && (!group || p.group === group));

  const scrollBy = (dir: 1 | -1) => {
    const rail = railRef.current;
    if (!rail) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    rail.scrollBy({ left: dir * rail.clientWidth * 0.85, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <section id={anchorId} aria-labelledby="explorer-title" className={`${anchorId ? ANCHOR : ""} overflow-hidden bg-white py-20 sm:py-24 lg:py-28`}>
      <div className={CONTAINER}>
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading id="explorer-title" eyebrow="Explore the Region" title={explorer.title} intro={explorer.intro} />
          <div className="hidden gap-2 sm:flex">
            {([-1, 1] as const).map((d) => (
              <button
                key={d}
                type="button"
                onClick={() => scrollBy(d)}
                aria-label={d < 0 ? "Previous places" : "Next places"}
                className="flex h-12 w-12 items-center justify-center rounded-full border border-[#0B2942]/15 text-[#0B2942] transition-all hover:-translate-y-0.5 hover:border-[#0B2942] hover:bg-[#0B2942] hover:text-white"
              >
                {d < 0 ? <ChevronLeft className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
              </button>
            ))}
          </div>
        </div>

        {groups.length > 1 && (
          <div role="group" aria-label="Filter places" className="mt-8 flex flex-wrap gap-2">
            {[null, ...groups].map((g) => {
              const active = group === g;
              return (
                <button
                  key={g ?? "all"}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setGroup(g);
                    railRef.current?.scrollTo({ left: 0 });
                  }}
                  className={`rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
                    active ? "border-[#0B2942] bg-[#0B2942] text-white" : "border-[#0B2942]/15 text-[#0B2942] hover:border-[#0B2942]/40"
                  }`}
                >
                  {g ?? "All places"}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <ul
        ref={railRef}
        className="mx-auto mt-10 flex max-w-[1400px] snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-5 px-5 pb-4 [scrollbar-width:none] sm:scroll-px-8 sm:px-8 lg:scroll-px-10 lg:px-10 [&::-webkit-scrollbar]:hidden"
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {visible.map((p, i) => (
            <motion.li
              key={p.id}
              layout
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: Math.min(i, 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[30%] xl:w-[23.5%]"
            >
              <article className="group h-full overflow-hidden rounded-[24px] bg-[#F8F6F1] ring-1 ring-[#0B2942]/[0.06] transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_28px_50px_-30px_rgba(11,41,66,0.6)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  {p.image ? (
                    <div className="absolute inset-0 transition-transform duration-700 group-hover:scale-105">
                      <PageImageFill image={p.image} sizes="(min-width: 1280px) 24vw, (min-width: 1024px) 30vw, (min-width: 640px) 46vw, 78vw" />
                    </div>
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-[#123653] via-[#0B2942] to-[#071421]">
                      <Mountain className="absolute bottom-4 left-4 h-16 w-16 text-white/[0.08]" aria-hidden="true" />
                      {p.elevation && <p className={`${SERIF} absolute bottom-5 right-5 text-[26px] text-white/80`}>{p.elevation.replace("Approx. ", "")}</p>}
                    </div>
                  )}
                  <div className="absolute right-3 top-3">
                    <Locator places={places} current={p} />
                  </div>
                </div>
                <div className="p-5">
                  {p.group && <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#C98500]">{p.group}</p>}
                  <h3 className={`${SERIF} mt-1 text-[24px] font-medium text-[#0B2942]`}>{p.name}</h3>
                  {p.elevation && <p className="text-[12.5px] font-medium text-[#8A97A5]">{p.elevation}</p>}
                  <p className="mt-2 text-[14px] leading-6 text-[#5B6B7B]">{p.text}</p>
                </div>
              </article>
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>

      <div className={CONTAINER}>
        <p className="mt-4 flex items-start gap-2.5 text-[12.5px] leading-5 text-[#5B6B7B]">
          <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#C98500]" aria-hidden="true" />
          {explorer.note}
        </p>
      </div>
    </section>
  );
}
