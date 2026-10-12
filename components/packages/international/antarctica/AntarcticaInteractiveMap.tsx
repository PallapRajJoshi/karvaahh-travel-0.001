"use client";

import { useId, useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Clock, Compass, Map as MapIcon, MapPin, Plane, Ship, Sun, X } from "lucide-react";
import { expeditionCountInRegion } from "@/data/antarctica/expeditions";
import { PUNTA_ARENAS, mapRegionById, mapRegions, voyageRoutes } from "@/data/antarctica/regions";
import { routeFilters } from "@/data/antarctica/styles";
import type { PolarRegion } from "@/data/antarctica/types";
import { ANTARCTIC_CIRCLE_Y, BEAGLE_EXIT, LAND, MAP_H, MAP_W, project, projectPct, smoothPath } from "@/lib/antarctica/map";
import { scrollToId, setPolarFilter, usePolarFilters } from "@/lib/antarctica/explorer";
import PolarMedia from "./PolarMedia";

/** Projected points for a route, leaving Ushuaia via the Beagle Channel. */
function routePoints(stops: string[]): [number, number][] {
  return stops.flatMap((id) => {
    if (id === "punta-arenas") return [project(PUNTA_ARENAS)];
    const r = mapRegionById(id);
    if (!r) return [];
    return id === "ushuaia" ? [project(r.coords), project(BEAGLE_EXIT)] : [project(r.coords)];
  });
}

/**
 * The page's centrepiece: a stylised polar map with animated voyage routes and
 * selectable regions. Every region is also a plain button in the list beside
 * the map, so the map is never the only way in. On phones the map collapses
 * behind a toggle and the list leads.
 */
export default function AntarcticaInteractiveMap() {
  const uid = useId();
  const f = usePolarFilters();
  const [routeId, setRouteId] = useState(voyageRoutes[0].id);
  const [mapOpen, setMapOpen] = useState(false);
  const route = voyageRoutes.find((r) => r.id === routeId) ?? voyageRoutes[0];
  const path = useMemo(() => smoothPath(routePoints(route.stops)), [route]);
  const selected = f.region !== "all" ? mapRegionById(f.region) : undefined;
  const onRoute = new Set(route.stops);

  const select = (id: PolarRegion) => setPolarFilter({ region: f.region === id ? "all" : id });

  return (
    <div className="an-map">
      <div className="an-map__routes" role="group" aria-label="Show an expedition route">
        {voyageRoutes.map((r) => (
          <button
            key={r.id}
            type="button"
            className={`an-chip an-chip--dark${r.id === routeId ? " is-active" : ""}`}
            aria-pressed={r.id === routeId}
            onClick={() => setRouteId(r.id)}
          >
            {r.mode === "air-cruise" ? <Plane size={14} aria-hidden="true" /> : <Ship size={14} aria-hidden="true" />} {r.name}
          </button>
        ))}
      </div>
      <p className="an-map__route-summary" aria-live="polite">
        <strong>{route.name}:</strong> {route.summary}. <span>Illustrative route; actual routing is decided by the expedition team.</span>
      </p>

      <div className="an-map__layout">
        <div className={`an-map__stage${mapOpen ? " is-open" : ""}`}>
          <button type="button" className="an-map__toggle" aria-expanded={mapOpen} aria-controls={`${uid}-canvas`} onClick={() => setMapOpen((o) => !o)}>
            {mapOpen ? <X size={16} aria-hidden="true" /> : <MapIcon size={16} aria-hidden="true" />} {mapOpen ? "Hide polar map" : "Show polar map"}
          </button>

          <div className="an-map__canvas" id={`${uid}-canvas`}>
            <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="an-map__svg" role="img" aria-labelledby={`${uid}-title`} focusable="false">
              <title id={`${uid}-title`}>{`Stylised map of the Scotia Sea showing ${route.name}: ${route.summary}`}</title>
              <defs>
                <radialGradient id={`${uid}-sea`} cx="35%" cy="55%" r="80%">
                  <stop offset="0%" stopColor="#123552" />
                  <stop offset="100%" stopColor="#06182a" />
                </radialGradient>
                <linearGradient id={`${uid}-ice`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#f4f9fc" />
                  <stop offset="100%" stopColor="#c9dcea" />
                </linearGradient>
              </defs>
              <rect width={MAP_W} height={MAP_H} fill={`url(#${uid}-sea)`} />
              {/* latitude lines */}
              {[-55, -60, -65, -70].map((lat) => {
                const y = project([lat, -60])[1];
                return (
                  <g key={lat} className="an-map__lat">
                    <line x1="0" x2={MAP_W} y1={y} y2={y} />
                    <text x={MAP_W - 8} y={y - 6} textAnchor="end">{Math.abs(lat)}°S</text>
                  </g>
                );
              })}
              <path d={LAND.southAmerica} className="an-map__land an-map__land--sa" />
              <path d={LAND.falklandsWest} className="an-map__land an-map__land--sa" />
              <path d={LAND.falklandsEast} className="an-map__land an-map__land--sa" />
              <path d={LAND.southGeorgia} fill={`url(#${uid}-ice)`} className="an-map__land" />
              {LAND.southShetlands.map((d, i) => (
                <path key={i} d={d} fill={`url(#${uid}-ice)`} className="an-map__land" />
              ))}
              <path d={LAND.peninsula} fill={`url(#${uid}-ice)`} className="an-map__land" />
              <path d={LAND.continentEdge} fill={`url(#${uid}-ice)`} className="an-map__land" />

              <g className="an-map__circle">
                <line x1="0" x2={MAP_W} y1={ANTARCTIC_CIRCLE_Y} y2={ANTARCTIC_CIRCLE_Y} />
                <text x="16" y={ANTARCTIC_CIRCLE_Y - 8}>Antarctic Circle · 66°33′S</text>
              </g>
              <text className="an-map__sea" x="540" y="330">SCOTIA SEA</text>
              <text className="an-map__sea" x="440" y="210">SOUTH ATLANTIC</text>
              <text className="an-map__sea an-map__sea--land" x="24" y="60">SOUTH AMERICA</text>
              <text className="an-map__sea an-map__sea--land" x="70" y="880">ANTARCTICA</text>

              <path id={`${uid}-route`} d={path} className="an-map__route-glow" />
              <motion.path
                key={route.id}
                d={path}
                className={`an-map__route${route.mode === "air-cruise" ? " is-air" : ""}`}
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2.4, ease: "easeInOut" }}
              />
              <circle r="7" className="an-map__vessel">
                <animateMotion key={route.id} dur="9s" repeatCount="indefinite" rotate="auto">
                  <mpath href={`#${uid}-route`} />
                </animateMotion>
              </circle>
            </svg>

            {mapRegions.map((r) => {
              const on = f.region === r.id;
              return (
                <button
                  key={r.id}
                  type="button"
                  className={`an-pin an-pin--${r.kind}${on ? " is-active" : ""}${onRoute.has(r.id) ? " is-on-route" : ""}`}
                  style={projectPct(r.coords)}
                  aria-pressed={on}
                  aria-label={`${r.name}: ${r.short}`}
                  onClick={() => select(r.id)}
                >
                  <span className="an-pin__dot" aria-hidden="true" />
                  <span className="an-pin__label" aria-hidden="true">{r.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="an-map__side">
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <motion.article
                key={selected.id}
                className="an-map__panel"
                aria-live="polite"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.3 }}
              >
                <div className="an-map__panel-media">
                  <PolarMedia id={selected.image} sizes="(min-width: 1024px) 420px, 100vw" />
                  <button type="button" className="an-map__close" aria-label="Clear region selection" onClick={() => setPolarFilter({ region: "all" })}>
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>
                <div className="an-map__panel-body">
                  <p className="an-map__kicker">{selected.short}</p>
                  <h3 className="an-map__name">{selected.name}</h3>
                  <p className="an-map__info">{selected.info}</p>
                  <dl className="an-map__facts">
                    <div><dt><Compass size={14} aria-hidden="true" /> Expedition style</dt><dd>{selected.style}</dd></div>
                    <div><dt><Clock size={14} aria-hidden="true" /> Typical duration</dt><dd>{selected.duration}</dd></div>
                    <div><dt><Sun size={14} aria-hidden="true" /> Travel season</dt><dd>{selected.season}</dd></div>
                    <div>
                      <dt><MapPin size={14} aria-hidden="true" /> Possible wildlife</dt>
                      <dd>{selected.wildlife.join(" · ")}</dd>
                    </div>
                  </dl>
                  <p className="an-map__count">
                    {expeditionCountInRegion(selected.id)} expedition template{expeditionCountInRegion(selected.id) === 1 ? "" : "s"} include this region
                  </p>
                  <div className="an-map__cta">
                    <a href={`#${selected.sectionId}`} className="pkg-btn an-btn--ice">
                      Explore {selected.name.split(" / ")[0]} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                    </a>
                    <button
                      type="button"
                      className="pkg-btn asia-btn--glass"
                      onClick={() => {
                        if (routeFilters.some((r) => r.id === selected.id)) setPolarFilter({ routes: [selected.id] });
                        scrollToId("expeditions");
                      }}
                    >
                      View expeditions
                    </button>
                  </div>
                </div>
              </motion.article>
            ) : (
              <motion.div key="intro" className="an-map__intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="an-map__name">Choose a region</h3>
                <p className="an-map__info">Select a point on the map or a region below to see what it offers, how long it takes and when to go.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <ul className="an-map__list" aria-label="Antarctic regions">
            {mapRegions.map((r) => {
              const on = f.region === r.id;
              return (
                <li key={r.id}>
                  <button type="button" className={`an-map__item${on ? " is-active" : ""}`} aria-pressed={on} onClick={() => select(r.id)}>
                    <span className={`an-map__item-dot an-map__item-dot--${r.kind}`} aria-hidden="true" />
                    <span className="an-map__item-name">{r.name}</span>
                    <span className="an-map__item-kind">{r.short}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
