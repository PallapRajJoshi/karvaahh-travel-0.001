"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowRight, Info, MapPin } from "lucide-react";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "@/components/activities/experience/ui";
import { DIFFICULTY, FAITHS, MAP_FILTERS, PILGRIMAGE_TYPES, REGIONS, matchesRule } from "@/data/pilgrimage/filters";
import type { PilgrimageDestination, RegionId } from "@/data/pilgrimage/types";
import { AccessibilityBadge, showPackagesFor } from "./cards";

/* Simple projection of Nepal's extent (illustrative, not to survey scale). */
const W = 1000;
const H = 575;
const B = { west: 80.0, east: 88.3, south: 26.3, north: 30.5 };
const px = (lon: number) => ((lon - B.west) / (B.east - B.west)) * W;
const py = (lat: number) => ((B.north - lat) / (B.north - B.south)) * H;

/* Approximate outline of Nepal (lon, lat), simplified for illustration. */
const OUTLINE: [number, number][] = [
  [80.06, 28.84], [80.25, 29.35], [80.55, 29.85], [80.9, 30.2], [81.05, 30.38], [81.6, 30.42], [82.1, 30.35], [82.6, 30.05], [83.1, 29.62],
  [83.5, 29.25], [83.95, 29.33], [84.25, 29.15], [84.55, 28.78], [85.0, 28.58], [85.4, 28.48], [85.75, 28.3], [86.1, 28.15], [86.5, 28.08],
  [86.93, 27.98], [87.4, 27.92], [88.0, 27.88], [88.15, 27.7], [88.0, 27.2], [88.1, 26.72], [87.95, 26.37], [87.6, 26.4], [87.0, 26.42],
  [86.5, 26.55], [85.9, 26.62], [85.4, 26.8], [85.0, 26.95], [84.6, 27.1], [84.2, 27.33], [83.8, 27.36], [83.35, 27.33], [82.9, 27.5],
  [82.4, 27.66], [81.9, 27.86], [81.4, 28.15], [80.9, 28.36], [80.5, 28.6],
];
const OUTLINE_D = OUTLINE.map(([lon, lat], i) => `${i ? "L" : "M"}${px(lon).toFixed(1)} ${py(lat).toFixed(1)}`).join(" ") + " Z";

/* Illustrative routes between the main pilgrimage hubs (not exact roads). */
const ROUTES: [number, number][][] = [
  [[27.71, 85.35], [27.9, 84.58], [28.21, 83.98], [28.82, 83.87]],
  [[27.71, 85.35], [26.73, 85.93]],
  [[28.21, 83.98], [27.47, 83.28]],
  [[26.73, 85.93], [26.87, 87.16], [27.23, 86.62], [27.43, 87.77]],
];
const routeD = (pts: [number, number][]) =>
  pts.map(([lat, lon], i) => {
    const x = px(lon);
    const y = py(lat);
    if (!i) return `M${x.toFixed(1)} ${y.toFixed(1)}`;
    const [plat, plon] = pts[i - 1];
    const mx = (px(plon) + x) / 2;
    const my = (py(plat) + y) / 2 - 18;
    return `Q${mx.toFixed(1)} ${my.toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
  }).join(" ");

export default function PilgrimageMap({ destinations }: { destinations: PilgrimageDestination[] }) {
  const reduce = useReducedMotion();
  const located = useMemo(() => destinations.filter((d) => d.coords), [destinations]);
  const [filter, setFilter] = useState("all");
  const [region, setRegion] = useState<RegionId | "">("");
  const [selectedId, setSelectedId] = useState("muktinath");

  const rule = MAP_FILTERS.find((m) => m.id === filter)?.rule;
  const visible = located.filter((d) => matchesRule(d, rule));
  const listed = visible.filter((d) => !region || d.region === region);
  const selected = located.find((d) => d.id === selectedId) ?? located[0];

  return (
    <section id="map" aria-labelledby="map-title" className="scroll-mt-[160px] overflow-hidden bg-[#071421] py-20 text-white sm:py-24 md:scroll-mt-[200px] lg:py-28">
      <div className={CONTAINER}>
        <SectionHeading id="map-title" eyebrow="Sacred Map" title="Explore Nepal's Sacred Map" intro="Filter by tradition or region, then tap a marker or a name to learn more." dark />

        <div className="mt-8 flex flex-wrap items-center gap-2">
          {MAP_FILTERS.map((m) => (
            <button
              key={m.id}
              type="button"
              aria-pressed={filter === m.id}
              onClick={() => setFilter(m.id)}
              className={`rounded-full border px-4 py-2 text-[13px] font-semibold transition-colors ${
                filter === m.id ? "border-[#F4A300] bg-[#F4A300] text-[#0C1D30]" : "border-white/20 text-white/80 hover:border-white/50"
              }`}
            >
              {m.label}
            </button>
          ))}
          <label className="ml-auto flex items-center gap-2 text-[13px] text-white/70">
            <span className="sr-only sm:not-sr-only">Region</span>
            <select
              value={region}
              onChange={(e) => setRegion(e.target.value as RegionId | "")}
              className="rounded-full border border-white/20 bg-[#0B2942] px-4 py-2 text-[13px] text-white outline-none focus:border-[#F4A300]"
            >
              <option value="">All regions</option>
              {Object.entries(REGIONS).map(([k, v]) => (
                <option key={k} value={k}>
                  {v.label}
                </option>
              ))}
            </select>
          </label>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.45fr_0.55fr]">
          {/* Map */}
          <div>
            <div className="relative overflow-hidden rounded-[28px] bg-[#0B2942] ring-1 ring-white/10">
              <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" role="group" aria-label="Map of sacred destinations in Nepal">
                <defs>
                  <pattern id="contours" width="28" height="28" patternUnits="userSpaceOnUse">
                    <path d="M0 14 Q7 8 14 14 T28 14" fill="none" stroke="rgba(255,255,255,0.04)" />
                  </pattern>
                </defs>
                <path d={OUTLINE_D} fill="url(#contours)" stroke="none" />
                <path d={OUTLINE_D} fill="rgba(244,163,0,0.06)" stroke="rgba(244,163,0,0.45)" strokeWidth="1.5" strokeLinejoin="round" />
                {ROUTES.map((r, i) => (
                  <motion.path
                    key={i}
                    d={routeD(r)}
                    fill="none"
                    stroke="#F4D6A0"
                    strokeOpacity="0.5"
                    strokeWidth="1.5"
                    strokeDasharray="5 6"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                    transition={{ duration: 2, delay: 0.3 * i, ease: "easeInOut" }}
                  />
                ))}
                {selected?.region !== "kathmandu-valley" && (
                  <text x={px(85.33) + 12} y={py(27.7) + 22} fontSize="12" fontWeight={600} fill="rgba(255,255,255,0.7)" style={{ pointerEvents: "none" }}>
                    Kathmandu Valley
                  </text>
                )}
                {visible.map((d) => {
                  const [lat, lon] = d.coords!;
                  const x = px(lon);
                  const y = py(lat);
                  const isSel = d.id === selected?.id;
                  const dim = region && d.region !== region;
                  return (
                    <g
                      key={d.id}
                      role="button"
                      tabIndex={0}
                      aria-label={`${d.name}, ${REGIONS[d.region].short}`}
                      aria-pressed={isSel}
                      onClick={() => setSelectedId(d.id)}
                      onKeyDown={(e) => {
                        if (e.key === "Enter" || e.key === " ") {
                          e.preventDefault();
                          setSelectedId(d.id);
                        }
                      }}
                      className="cursor-pointer outline-none [&:focus-visible>circle:last-of-type]:stroke-white"
                      style={{ opacity: dim ? 0.2 : 1, transition: "opacity 0.4s" }}
                    >
                      {isSel && !reduce && (
                        <circle cx={x} cy={y} r="8" fill="#F4A300" className="heli-motion origin-center animate-[heliPulse_1.6s_ease-out_infinite]" style={{ transformBox: "fill-box" }} />
                      )}
                      <circle cx={x} cy={y} r="11" fill="transparent" />
                      <circle cx={x} cy={y} r={isSel ? 7 : d.featured ? 5 : 3.5} fill={isSel ? "#F4A300" : d.featured ? "#F4D6A0" : "#9FB4C8"} stroke="#071421" strokeWidth="1.5" />
                      {(isSel || (d.featured && d.region !== "kathmandu-valley")) && (
                        <text
                          x={x > W - 160 ? x - 9 : x + 9}
                          y={y - 8}
                          textAnchor={x > W - 160 ? "end" : "start"}
                          fontSize={isSel ? 15 : 12}
                          fontWeight={600}
                          fill={isSel ? "#FFFFFF" : "rgba(255,255,255,0.7)"}
                          style={{ pointerEvents: "none" }}
                        >
                          {d.name.replace(/ (Temple|Stupa)$/, "").split(",")[0]}
                        </text>
                      )}
                    </g>
                  );
                })}
              </svg>
            </div>
            <p className="mt-3 flex items-start gap-2 text-[12px] text-white/50">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              Stylised map; positions are approximate and dashed lines are illustrative links between pilgrimage hubs, not exact routes.
            </p>
          </div>

          {/* Detail card + list */}
          <div className="flex flex-col gap-4">
            <AnimatePresence mode="wait">
              {selected && (
                <motion.article
                  key={selected.id}
                  initial={{ opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35 }}
                  aria-live="polite"
                  className="overflow-hidden rounded-[24px] bg-white/[0.06] ring-1 ring-white/10"
                >
                  {selected.image && (
                    <div className="relative aspect-[16/9]">
                      <PageImageFill image={selected.image} sizes="(min-width: 1024px) 28vw, 100vw" />
                    </div>
                  )}
                  <div className="p-5">
                    <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[#F4A300]">{REGIONS[selected.region].label}</p>
                    <h3 className={`${SERIF} mt-1 text-[24px] leading-tight`}>{selected.name}</h3>
                    <dl className="mt-3 grid grid-cols-2 gap-x-3 gap-y-2 text-[12.5px]">
                      <div>
                        <dt className="text-white/50">Faith</dt>
                        <dd>{selected.faith.map((f) => FAITHS[f]).join(", ")}</dd>
                      </div>
                      <div>
                        <dt className="text-white/50">Type</dt>
                        <dd>{selected.pilgrimageTypes.map((t) => PILGRIMAGE_TYPES[t]).slice(0, 2).join(", ")}</dd>
                      </div>
                      {selected.altitude && (
                        <div>
                          <dt className="text-white/50">Altitude</dt>
                          <dd>{selected.altitude}</dd>
                        </div>
                      )}
                      <div>
                        <dt className="text-white/50">Difficulty</dt>
                        <dd>{DIFFICULTY[selected.difficulty]}</dd>
                      </div>
                      {selected.idealSeason && (
                        <div className="col-span-2">
                          <dt className="text-white/50">Ideal season</dt>
                          <dd>{selected.idealSeason}</dd>
                        </div>
                      )}
                    </dl>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {selected.access.slice(0, 3).map((a) => (
                        <AccessibilityBadge key={a} id={a} />
                      ))}
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {selected.href && (
                        <Link href={selected.href} className="inline-flex items-center gap-1.5 rounded-full bg-[#F4A300] px-4 py-2.5 text-[13px] font-semibold text-[#0C1D30]">
                          View Destination
                          <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                        </Link>
                      )}
                      <button type="button" onClick={() => showPackagesFor(selected.id)} className="rounded-full border border-white/25 px-4 py-2.5 text-[13px] font-semibold text-white hover:bg-white/10">
                        View Packages
                      </button>
                    </div>
                  </div>
                </motion.article>
              )}
            </AnimatePresence>

            <div className="rounded-[24px] bg-white/[0.04] p-3 ring-1 ring-white/10">
              <p className="px-2 pb-2 pt-1 text-[12px] font-semibold uppercase tracking-[0.18em] text-white/50">{listed.length} places</p>
              <ul className="max-h-[280px] space-y-1 overflow-y-auto pr-1 [scrollbar-width:thin]">
                {listed.map((d) => (
                  <li key={d.id}>
                    <button
                      type="button"
                      onClick={() => setSelectedId(d.id)}
                      aria-pressed={d.id === selected?.id}
                      className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left text-[13.5px] transition-colors ${
                        d.id === selected?.id ? "bg-[#F4A300] text-[#0C1D30]" : "text-white/80 hover:bg-white/[0.08]"
                      }`}
                    >
                      <MapPin className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                      <span className="truncate">{d.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
