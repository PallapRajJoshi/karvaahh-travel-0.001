"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Clock, Map as MapIcon, Plane, Route, Sun, X } from "lucide-react";
import { saDestinationById, visibleSADestinations } from "@/data/south-africa/destinations";
import { packagesForDestination } from "@/data/south-africa/packages";
import { saCircuits } from "@/data/south-africa/routes";
import { provinceName, provinces, styleById } from "@/data/south-africa/styles";
import { LAND, MAP_H, MAP_LABELS, MAP_W, legPaths, project, projectPct } from "@/lib/south-africa/map";
import { scrollToId, setSAFilter, useSAFilters } from "@/lib/south-africa/explorer";
import { ZaMedia } from "./ZaPrimitives";

const MAP_ROUTES = ["ct-herm-gr", "jnb-panorama-kruger", "ct-jnb-kruger", "dur-drak", "ct-gr-addo"];

/**
 * Stylised South Africa map with real-coordinate markers, province
 * highlighting and animated route lines. Every destination is also a plain
 * button in the grouped list beside the map; on phones the list leads and
 * the map opens behind a toggle.
 */
export default function SouthAfricaInteractiveMap() {
  const uid = useId();
  const f = useSAFilters();
  const [routeId, setRouteId] = useState(MAP_ROUTES[0]);
  const [mapOpen, setMapOpen] = useState(false);
  const routes = MAP_ROUTES.map((id) => saCircuits.find((c) => c.id === id)!).filter(Boolean);
  const route = routes.find((r) => r.id === routeId) ?? routes[0];
  const pts = route.stops.map((id) => project(saDestinationById(id)!.coords));
  const legs = legPaths(pts);
  const selected = f.destination !== "all" ? saDestinationById(f.destination) : undefined;
  const onRoute = new Set(route.stops);
  const pkgs = selected ? packagesForDestination(selected.id) : [];

  const select = (id: string) => {
    const d = saDestinationById(id);
    setSAFilter({ destination: f.destination === id ? "all" : id, region: d && f.region !== "all" && f.region !== d.region ? "all" : f.region });
  };

  return (
    <div className="za-map">
      <div className="za-map__controls">
        <div className="za-chiprow" role="group" aria-label="Highlight a province">
          <button type="button" className={`za-chip za-chip--dark${f.region === "all" ? " is-active" : ""}`} aria-pressed={f.region === "all"} onClick={() => setSAFilter({ region: "all" })}>
            All provinces
          </button>
          {provinces.map((p) => (
            <button key={p.id} type="button" className={`za-chip za-chip--dark${f.region === p.id ? " is-active" : ""}`} aria-pressed={f.region === p.id} onClick={() => setSAFilter({ region: f.region === p.id ? "all" : p.id })}>
              {p.name}
            </button>
          ))}
        </div>
        <div className="za-chiprow" role="group" aria-label="Show a route">
          {routes.map((r) => (
            <button key={r.id} type="button" className={`za-chip za-chip--route${r.id === route.id ? " is-active" : ""}`} aria-pressed={r.id === route.id} onClick={() => setRouteId(r.id)}>
              <Route size={14} aria-hidden="true" /> {r.name}
            </button>
          ))}
        </div>
        <p className="za-map__route-summary" aria-live="polite">
          <strong>{route.name}</strong> · {route.duration} · {route.transport}
          {route.flightLegs?.length ? <span> · <Plane size={13} aria-hidden="true" /> dashed legs are flights</span> : null}
        </p>
      </div>

      <div className="za-map__layout">
        <div className={`za-map__stage${mapOpen ? " is-open" : ""}`}>
          <button type="button" className="za-map__toggle" aria-expanded={mapOpen} aria-controls={`${uid}-canvas`} onClick={() => setMapOpen((o) => !o)}>
            {mapOpen ? <X size={16} aria-hidden="true" /> : <MapIcon size={16} aria-hidden="true" />} {mapOpen ? "Hide map" : "Show map"}
          </button>
          <div className="za-map__canvas" id={`${uid}-canvas`}>
            <svg viewBox={`0 0 ${MAP_W} ${MAP_H}`} className="za-map__svg" role="img" aria-labelledby={`${uid}-t`} focusable="false">
              <title id={`${uid}-t`}>{`Stylised map of South Africa showing the route ${route.name}`}</title>
              <defs>
                <linearGradient id={`${uid}-land`} x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#f3e9d6" />
                  <stop offset="100%" stopColor="#e3d2b2" />
                </linearGradient>
              </defs>
              <rect width={MAP_W} height={MAP_H} className="za-map__sea" />
              <path d={LAND.country} fill={`url(#${uid}-land)`} className="za-map__land" />
              <path d={LAND.lesotho} className="za-map__neighbour" />
              <path d={LAND.eswatini} className="za-map__neighbour" />
              {MAP_LABELS.map((l) => {
                const [x, y] = project(l.at);
                return <text key={l.text} x={x} y={y} className={`za-map__label za-map__label--${l.kind}`}>{l.text}</text>;
              })}
              {legs.map((d, i) => (
                <motion.path
                  key={`${route.id}-${i}`}
                  d={d}
                  className={`za-map__route${route.flightLegs?.includes(i) ? " is-flight" : ""}`}
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 0.9, delay: i * 0.6, ease: "easeInOut" }}
                />
              ))}
            </svg>

            {visibleSADestinations.map((d) => {
              const on = f.destination === d.id;
              const dim = f.region !== "all" && d.region !== f.region;
              return (
                <button
                  key={d.id}
                  type="button"
                  className={`za-pin za-pin--${d.kind}${on ? " is-active" : ""}${dim ? " is-dim" : ""}${onRoute.has(d.id) ? " is-on-route" : ""}${d.featured ? " is-featured" : ""}`}
                  style={projectPct(d.coords)}
                  aria-pressed={on}
                  aria-label={`${d.name}, ${d.area ?? provinceName(d.region)}`}
                  onClick={() => select(d.id)}
                >
                  <span className="za-pin__dot" aria-hidden="true" />
                  <span className="za-pin__label" aria-hidden="true">{d.name.replace(" National Park", "").replace(" Transfrontier Park", "")}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="za-map__side">
          <AnimatePresence mode="wait" initial={false}>
            {selected ? (
              <motion.article key={selected.id} className="za-map__panel" aria-live="polite" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
                <div className="za-map__panel-media">
                  <ZaMedia id={selected.image} label={selected.name} sizes="(min-width: 1024px) 420px, 100vw" />
                  <button type="button" className="za-map__close" aria-label="Clear selection" onClick={() => setSAFilter({ destination: "all" })}>
                    <X size={16} aria-hidden="true" />
                  </button>
                </div>
                <div className="za-map__panel-body">
                  <p className="za-map__kicker">{selected.area ?? provinceName(selected.region)}</p>
                  <h3 className="za-map__name">{selected.name}</h3>
                  <p className="za-map__info">{selected.description}</p>
                  <p className="za-map__sub">Experiences</p>
                  <ul className="za-tags za-tags--dark">{selected.attractions.slice(0, 5).map((a) => <li key={a}>{a}</li>)}</ul>
                  <dl className="za-map__facts">
                    {selected.duration && <div><dt><Clock size={14} aria-hidden="true" /> Recommended</dt><dd>{selected.duration}</dd></div>}
                    {selected.idealSeason && <div><dt><Sun size={14} aria-hidden="true" /> Ideal season</dt><dd>{selected.idealSeason}</dd></div>}
                    <div><dt>Travel styles</dt><dd>{selected.travelStyles.slice(0, 5).map((s) => styleById(s)?.label).join(" · ")}</dd></div>
                  </dl>
                  {pkgs.length > 0 && (
                    <>
                      <p className="za-map__sub">{pkgs.length} package{pkgs.length === 1 ? "" : "s"} include {selected.name.split(" (")[0]}</p>
                      <ul className="za-map__pkgs">{pkgs.slice(0, 3).map((p) => <li key={p.id}><span>{p.duration}</span> {p.title}</li>)}</ul>
                    </>
                  )}
                  <div className="za-map__cta">
                    {selected.sectionId && (
                      <a href={`#${selected.sectionId}`} className="pkg-btn za-btn--gold">
                        Explore {selected.name.split(" (")[0].replace(" National Park", "")} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                      </a>
                    )}
                    <button type="button" className="pkg-btn asia-btn--glass" onClick={() => scrollToId("packages")}>View packages</button>
                  </div>
                </div>
              </motion.article>
            ) : (
              <motion.div key="intro" className="za-map__intro" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <h3 className="za-map__name">Choose a destination</h3>
                <p className="za-map__info">Select a marker or a place below. Packages further down the page follow your choice.</p>
              </motion.div>
            )}
          </AnimatePresence>

          <div className="za-map__list">
            {provinces.map((p) => {
              const items = visibleSADestinations.filter((d) => d.region === p.id);
              if (!items.length) return null;
              const dim = f.region !== "all" && f.region !== p.id;
              return (
                <div key={p.id} className={`za-map__group${dim ? " is-dim" : ""}`}>
                  <p className="za-map__group-h">{p.name}</p>
                  <ul aria-label={`${p.name} destinations`}>
                    {items.map((d) => (
                      <li key={d.id}>
                        <button type="button" className={`za-map__item${f.destination === d.id ? " is-active" : ""}`} aria-pressed={f.destination === d.id} onClick={() => select(d.id)}>
                          {d.name}
                        </button>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
