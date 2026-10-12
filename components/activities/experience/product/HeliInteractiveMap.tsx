"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowLeft, ArrowRight, ArrowUp, Info, MapPin } from "lucide-react";
import type { HelicopterTour, Place } from "../product-types";
import { CONTAINER, PageImageFill, SERIF, SectionHeading } from "../ui";
import { ANCHOR } from "./constants";

type MapTour = Pick<HelicopterTour, "map" | "places">;
type Route = NonNullable<NonNullable<HelicopterTour["map"]>["routes"]>[number];

/** Visual language per route type. */
const ROUTE_STYLE: Record<Route["style"], { color: string; glow: string; swatch: string; dash?: string }> = {
  road: { color: "#F4A300", glow: "rgba(244,163,0,0.35)", swatch: "#F4A300", dash: "6 6" },
  air: { color: "#8FD0FF", glow: "rgba(143,208,255,0.22)", swatch: "#8FD0FF", dash: "2 7" },
  custom: { color: "rgba(255,255,255,0.9)", glow: "rgba(255,255,255,0.15)", swatch: "#FFFFFF", dash: "1 5" },
};
type Edge = "north" | "south" | "east" | "west" | null;

const W = 400;
const EDGE_ICON = { north: ArrowUp, south: ArrowDown, east: ArrowRight, west: ArrowLeft } as const;

/** Equirectangular projection of the map window, with off-map places pinned to the edge. */
function makeProjection(bounds: NonNullable<HelicopterTour["map"]>["bounds"]) {
  const midLat = ((bounds.north + bounds.south) / 2) * (Math.PI / 180);
  const ratio = (bounds.north - bounds.south) / ((bounds.east - bounds.west) * Math.cos(midLat));
  const H = Math.round(Math.min(Math.max(W * ratio, 300), 620));
  const project = (p: Place) => {
    const rawX = ((p.lon - bounds.west) / (bounds.east - bounds.west)) * W;
    const rawY = ((bounds.north - p.lat) / (bounds.north - bounds.south)) * H;
    const pad = 22;
    let edge: Edge = null;
    if (rawY > H) edge = "south";
    else if (rawY < 0) edge = "north";
    else if (rawX > W) edge = "east";
    else if (rawX < 0) edge = "west";
    return { x: Math.min(Math.max(rawX, pad), W - pad), y: Math.min(Math.max(rawY, pad), H - pad), edge };
  };
  return { H, project };
}

const LABEL_POS: Record<NonNullable<Place["label"]>, string> = {
  bottom: "left-1/2 top-full mt-1 -translate-x-1/2",
  top: "bottom-full left-1/2 mb-1 -translate-x-1/2",
  left: "right-full top-1/2 mr-2 -translate-y-1/2",
  right: "left-full top-1/2 ml-2 -translate-y-1/2",
};

/**
 * Dark stylised regional map: an animated illustrative route, selectable
 * markers with hover tooltips, and a detail card for the selected place.
 * Positions are approximate and never presented as a guaranteed flight path.
 */
export default function HeliInteractiveMap({ tour }: { tour: MapTour }) {
  if (!tour.map || !tour.places?.length) return null;
  return <RegionMap map={tour.map} places={tour.places} />;
}

function RegionMap({ map, places }: { map: NonNullable<HelicopterTour["map"]>; places: Place[] }) {
  const reduce = useReducedMotion();
  const { H, project } = makeProjection(map.bounds);
  const [selectedId, setSelectedId] = useState(map.selected ?? map.route[map.route.length - 1] ?? places[0].id);
  const selected = places.find((p) => p.id === selectedId) ?? places[0];

  const routes: Route[] = map.routes?.length ? map.routes : [{ id: "route", label: "Illustrative route", style: "road", places: map.route }];
  const [routeId, setRouteId] = useState(routes[0].id);
  const activeRoute = routes.find((r) => r.id === routeId) ?? routes[0];

  /** Road/custom routes join the stops; air routes are drawn as soft arcs, never as exact flight paths. */
  const pathFor = (r: Route) => {
    const pts = r.places
      .map((id) => places.find((p) => p.id === id))
      .filter((p): p is Place => Boolean(p))
      .map(project);
    return pts
      .map((p, i) => {
        if (i === 0) return `M${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
        if (r.style !== "air") return `L${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
        const prev = pts[i - 1];
        const mx = (prev.x + p.x) / 2 - (p.y - prev.y) * 0.18;
        const my = (prev.y + p.y) / 2 + (p.x - prev.x) * 0.18;
        return `Q${mx.toFixed(1)} ${my.toFixed(1)} ${p.x.toFixed(1)} ${p.y.toFixed(1)}`;
      })
      .join(" ");
  };
  const routePath = pathFor(activeRoute);
  const routeIds = new Set(routes.flatMap((r) => r.places));
  // Only route stops and region labels sit on the map; the rest live in the explorer.
  const mapPlaces = places.filter((p) => routeIds.has(p.id) || p.region);

  return (
    <section id="route" aria-labelledby="map-title" className={`${ANCHOR} relative isolate overflow-hidden bg-[#0B2942] py-20 text-white sm:py-24 lg:py-28`}>
      {/* Background image follows the selected place */}
      <AnimatePresence initial={false}>
        {selected.image?.src && (
          <motion.div
            key={selected.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.16 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
            className="absolute inset-0 -z-10"
          >
            <Image src={selected.image.src} alt="" fill sizes="100vw" className="object-cover blur-[2px]" />
          </motion.div>
        )}
      </AnimatePresence>
      <div aria-hidden="true" className="absolute inset-0 -z-10 bg-gradient-to-b from-[#0B2942] via-[#0B2942]/70 to-[#0B2942]" />

      <div className={CONTAINER}>
        <SectionHeading id="map-title" eyebrow="Interactive Map" title={map.title} intro={map.intro} dark />

        {/* Mobile place chips */}
        <div
          className="-mx-5 mt-8 flex gap-2 overflow-x-auto px-5 pb-1 [scrollbar-width:none] sm:-mx-8 sm:px-8 lg:hidden [&::-webkit-scrollbar]:hidden"
          role="group"
          aria-label="Places on the route"
        >
          {mapPlaces.map((p) => (
            <button
              key={p.id}
              type="button"
              aria-pressed={p.id === selectedId}
              onClick={() => setSelectedId(p.id)}
              className={`shrink-0 rounded-full border px-4 py-2 text-[13.5px] font-medium transition-colors ${
                p.id === selectedId ? "border-[#F4A300] bg-[#F4A300] text-[#0C1D30]" : "border-white/20 text-white/80"
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>

        {routes.length > 1 && (
          <div role="group" aria-label="Choose a route" className="mt-8 flex flex-wrap gap-2">
            {routes.map((r) => {
              const active = r.id === activeRoute.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => setRouteId(r.id)}
                  className={`inline-flex items-center gap-2.5 rounded-full border px-4 py-2 text-[13.5px] font-semibold transition-colors ${
                    active ? "border-white bg-white text-[#0B2942]" : "border-white/20 text-white/80 hover:border-white/50"
                  }`}
                >
                  <svg width="22" height="6" aria-hidden="true">
                    <line x1="1" y1="3" x2="21" y2="3" stroke={ROUTE_STYLE[r.style].swatch} strokeWidth="2.5" strokeLinecap="round" strokeDasharray={ROUTE_STYLE[r.style].dash} />
                  </svg>
                  {r.label}
                </button>
              );
            })}
          </div>
        )}

        <div className="mt-8 grid items-center gap-10 lg:mt-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          {/* Map */}
          <div
            className="relative mx-auto w-full max-w-[440px] rounded-[28px] bg-[#0F3050] ring-1 ring-white/10"
            style={{ aspectRatio: `${W} / ${H}` }}
          >
            <svg viewBox={`0 0 ${W} ${H}`} className="absolute inset-0 h-full w-full" aria-hidden="true">
              <defs>
                <pattern id="map-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M40 0H0V40" fill="none" stroke="rgba(255,255,255,0.04)" />
                </pattern>
              </defs>
              <rect width={W} height={H} fill="url(#map-grid)" rx="28" />
              {[70, 130, 190].map((r) => (
                <circle key={r} cx={W * 0.72} cy={H * 0.28} r={r} fill="none" stroke="rgba(255,255,255,0.05)" />
              ))}

              {/* Other routes stay faint behind the selected one */}
              {routes
                .filter((r) => r.id !== activeRoute.id)
                .map((r) => (
                  <path key={r.id} d={pathFor(r)} fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="1.5" strokeDasharray={ROUTE_STYLE[r.style].dash} />
                ))}

              {/* Selected route: base line drawn on view, then a moving dashed highlight */}
              {routePath && (
                <g key={activeRoute.id}>
                  <motion.path
                    d={routePath}
                    fill="none"
                    stroke={ROUTE_STYLE[activeRoute.style].glow}
                    strokeWidth="6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={reduce ? false : { pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true, margin: "0px 0px -20% 0px" }}
                    transition={{ duration: 2.4, ease: "easeInOut" }}
                  />
                  <path
                    d={routePath}
                    fill="none"
                    stroke={ROUTE_STYLE[activeRoute.style].color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={ROUTE_STYLE[activeRoute.style].dash}
                    className="heli-motion animate-[heliDash_1.2s_linear_infinite]"
                  />
                  {map.aircraft && !reduce && (
                    <g>
                      <path d="M0 -5 L12 0 L0 5 L2.5 0 Z M-1.5 0 L-7 -4.5 L-5 0 L-7 4.5 Z" fill="#F4D6A0" stroke="#0B2942" strokeWidth="0.6" transform="scale(1.3)" />
                      <animateMotion dur="9s" begin="0s" repeatCount="indefinite" rotate="auto" path={routePath} />
                    </g>
                  )}
                </g>
              )}

              {/* North arrow */}
              <g transform={`translate(${W - 36} ${H - 46})`}>
                <path d="M0 -14 L6 6 L0 1 L-6 6 Z" fill="rgba(255,255,255,0.6)" />
                <text y="20" textAnchor="middle" fill="rgba(255,255,255,0.6)" fontSize="10">
                  N
                </text>
              </g>
            </svg>

            {mapPlaces.map((p) => {
              const { x, y, edge } = project(p);
              const isSel = p.id === selectedId;
              const EdgeIcon = edge ? EDGE_ICON[edge] : null;
              return (
                <button
                  key={p.id}
                  type="button"
                  onClick={() => setSelectedId(p.id)}
                  aria-pressed={isSel}
                  aria-label={`${p.name}${edge ? ` (off map, to the ${edge})` : ""}`}
                  className="group absolute -translate-x-1/2 -translate-y-1/2 focus-visible:outline-none"
                  style={{ left: `${(x / W) * 100}%`, top: `${(y / H) * 100}%` }}
                >
                  {p.region ? (
                    <span
                      className={`block whitespace-nowrap rounded-full border px-3 py-1 text-[10.5px] font-semibold uppercase tracking-[0.2em] transition-all ${
                        isSel ? "border-[#F4A300] bg-[#F4A300] text-[#0C1D30]" : "border-[#F4A300]/50 bg-[#0B2942]/80 text-[#F4A300] group-hover:bg-[#F4A300]/20"
                      } group-focus-visible:ring-2 group-focus-visible:ring-white`}
                    >
                      {p.name}
                    </span>
                  ) : (
                    <span className="relative flex items-center justify-center">
                      {isSel && (
                        <span aria-hidden="true" className="heli-motion absolute h-4 w-4 animate-[heliPulse_1.6s_ease-out_infinite] rounded-full bg-[#F4A300]" />
                      )}
                      <motion.span
                        animate={{ scale: isSel ? 1.3 : 1 }}
                        className={`relative flex h-4 w-4 items-center justify-center rounded-full border-2 border-white shadow ${
                          isSel ? "bg-[#F4A300]" : "bg-[#0B2942] group-hover:bg-[#F4A300]/70"
                        } group-focus-visible:ring-2 group-focus-visible:ring-white`}
                      >
                        {EdgeIcon && <EdgeIcon className="h-2.5 w-2.5 text-white" aria-hidden="true" />}
                      </motion.span>
                      <span
                        className={`absolute whitespace-nowrap text-[11px] font-semibold transition-colors ${LABEL_POS[p.label ?? "bottom"]} ${
                          isSel ? "text-white" : "text-white/65 group-hover:text-white"
                        }`}
                      >
                        {p.name}
                      </span>
                      {/* Hover tooltip */}
                      {p.elevation && (
                        <span
                          role="tooltip"
                          className="pointer-events-none absolute bottom-full left-1/2 mb-6 -translate-x-1/2 whitespace-nowrap rounded-lg bg-white px-2.5 py-1 text-[11px] font-semibold text-[#0B2942] opacity-0 shadow-lg transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100"
                        >
                          {p.elevation}
                        </span>
                      )}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Info card */}
          <div aria-live="polite">
            <AnimatePresence mode="wait">
              <motion.article
                key={selected.id}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="overflow-hidden rounded-[26px] bg-white/[0.06] ring-1 ring-white/10 backdrop-blur-sm"
              >
                {selected.image?.src ? (
                  <div className="relative aspect-[16/9]">
                    <PageImageFill image={selected.image} sizes="(min-width: 1024px) 45vw, 100vw" />
                  </div>
                ) : (
                  <div className="flex aspect-[16/7] items-center justify-center bg-gradient-to-br from-[#123653] to-[#071421]">
                    <MapPin className="h-10 w-10 text-[#F4A300]/60" aria-hidden="true" />
                  </div>
                )}
                <div className="p-6 sm:p-8">
                  {selected.group && <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/50">{selected.group}</p>}
                  <h3 className={`${SERIF} mt-1 text-[32px] font-medium`}>{selected.name}</h3>
                  {selected.elevation && <p className="mt-1 text-[13px] font-medium text-[#F4A300]">{selected.elevation}</p>}
                  <p className="mt-3 text-[15.5px] leading-7 text-white/80">{selected.text}</p>
                </div>
              </motion.article>
            </AnimatePresence>
            <p className="mt-5 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[12.5px] text-white/65">
              <svg width="24" height="6" aria-hidden="true">
                <line x1="1" y1="3" x2="23" y2="3" stroke={ROUTE_STYLE[activeRoute.style].swatch} strokeWidth="2.5" strokeLinecap="round" strokeDasharray={ROUTE_STYLE[activeRoute.style].dash} />
              </svg>
              {activeRoute.label} (illustrative)
              <span aria-hidden="true" className="ml-3 inline-block h-3 w-3 rounded-full border-2 border-white bg-[#0B2942]" /> Place (approx.)
            </p>
            <p className="mt-3 flex items-start gap-2.5 text-[12.5px] leading-5 text-white/55">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" aria-hidden="true" />
              {activeRoute.note ? `${activeRoute.note} ${map.note}` : map.note}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
