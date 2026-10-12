"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CalendarDays, ChevronDown, Clock, Info, MapPin, MessageCircle } from "lucide-react";
import type { AustraliaDestination } from "@/data/australia/destinations";
import { visibleAustraliaDestinations } from "@/data/australia/destinations";
import { activeAustraliaPackages } from "@/data/australia/packages";
import { australiaRegionById, australiaRegions, type AustraliaRegion } from "@/data/australia/regions";
import { styleLabel } from "@/data/australia/travel-styles";
import { enquireAbout } from "@/lib/australia/config";
import { packageMatches, resetAUFilters, scrollToId, setAUFilter, useAUFilters } from "@/lib/australia/explorer";
import { AU_MAP_H, AU_MAP_W } from "@/lib/australia/projection";
import CountUp from "../../CountUp";

export type AUMarker = { d: AustraliaDestination; x: number; y: number; packageCount: number };
type MapRoute = { id: string; ground: string; air: string };
type StateLabel = { id: AustraliaRegion; short: string; x: number; y: number };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

/**
 * The map writes the shared region filter (so destinations, experiences and
 * packages below follow it) and keeps a local "selected place" for its side
 * panel. Markers are pointer-only; the state and place buttons under the map
 * are the keyboard and small-screen path, so the map is never the only way in.
 */
export default function AustraliaMapClient({ markers, routes, labels }: { markers: AUMarker[]; routes: MapRoute[]; labels: StateLabel[] }) {
  const s = useAUFilters();
  const [placeId, setPlaceId] = useState<string | null>(null);
  const [mapOpen, setMapOpen] = useState(true);
  const region = s.region === "all" ? null : australiaRegionById(s.region);
  const place = markers.find((m) => m.d.id === placeId) ?? null;

  const pickRegion = (id: AustraliaRegion) => {
    setPlaceId(null);
    setAUFilter({ region: s.region === id ? "all" : id, destination: "all" });
  };
  const pickPlace = (m: AUMarker) => {
    setPlaceId(m.d.id);
    if (s.region !== m.d.region) setAUFilter({ region: m.d.region, destination: "all" });
  };
  const viewPackages = (patch: { region?: AustraliaRegion; destination?: string }) => {
    resetAUFilters();
    setAUFilter(patch);
    scrollToId("packages");
  };

  const regionDests = region ? visibleAustraliaDestinations.filter((d) => d.region === region.id) : [];
  const regionPkgs = region ? activeAustraliaPackages.filter((p) => packageMatches(p, { region: region.id, styles: [], destination: "all" })).length : 0;

  return (
    <div className="asia-map us-map au-map">
      <div className="asia-map__stage">
        <button type="button" className="us-map__toggle" aria-expanded={mapOpen} aria-controls="au-map-canvas" onClick={() => setMapOpen((v) => !v)}>
          {mapOpen ? "Hide map" : "Show map"} <ChevronDown size={16} aria-hidden="true" className={mapOpen ? "is-flipped" : ""} />
        </button>
        <div
          id="au-map-canvas"
          className={`asia-map__canvas us-map__canvas au-map__canvas${mapOpen ? "" : " is-collapsed"}${region ? " has-region" : ""}`}
          style={{ aspectRatio: `${AU_MAP_W} / ${AU_MAP_H}` }}
        >
          <svg className="asia-map__svg" viewBox={`0 0 ${AU_MAP_W} ${AU_MAP_H}`} role="img" aria-labelledby="au-map-t">
            <title id="au-map-t">
              Stylised dot map of Australia divided into its six states and two mainland territories, with Karvaahh destinations
              marked and popular journeys drawn between them
            </title>
            <defs>
              <radialGradient id="au-map-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f2c46d" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#f2c46d" stopOpacity="0" />
              </radialGradient>
            </defs>
            {australiaRegions.map((r) => (
              <use
                key={r.id}
                href={`#au-land-${r.id}`}
                className={`us-map__region au-region--${r.id}${s.region === r.id ? " is-active" : ""}`}
                onClick={() => pickRegion(r.id)}
              />
            ))}
            {labels.map((l) => (
              <text
                key={l.id}
                x={l.x}
                y={l.y}
                textAnchor="middle"
                className={`au-map__state${s.region === l.id ? " is-active" : ""}${l.id === "australian-capital-territory" ? " is-tiny" : ""}`}
                aria-hidden="true"
              >
                {l.short}
              </text>
            ))}
            {routes.map((r, i) => (
              <g key={r.id}>
                {r.ground && (
                  <motion.path
                    d={r.ground}
                    className="au-map__route"
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.6, delay: 0.3 + i * 0.35, ease: "easeInOut" }}
                  />
                )}
                {r.air && (
                  <motion.path
                    d={r.air}
                    className="au-map__route au-map__route--air"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 1.2, delay: 0.5 + i * 0.35 }}
                  />
                )}
              </g>
            ))}
            {place && <circle cx={place.x} cy={place.y} r="46" fill="url(#au-map-glow)" />}
          </svg>

          {markers.map((m, i) => {
            const active = m.d.id === placeId;
            const inRegion = !region || m.d.region === region.id;
            return (
              <button
                key={m.d.id}
                type="button"
                className={`asia-marker us-marker${m.d.labelSide ? ` asia-marker--${m.d.labelSide}` : ""}${active ? " is-active" : ""}${m.d.featured ? " is-featured" : ""}${m.d.minor ? " is-minor" : ""}${inRegion ? "" : " is-dim"}${region && inRegion ? " is-lit" : ""}`}
                style={{ left: pct(m.x, AU_MAP_W), top: pct(m.y, AU_MAP_H) }}
                aria-pressed={active}
                aria-label={`${m.d.name}, ${australiaRegionById(m.d.region).name}`}
                onClick={() => pickPlace(m)}
                tabIndex={-1}
              >
                {region && inRegion && (
                  <motion.span
                    key={region.id}
                    className="us-marker__ring"
                    aria-hidden="true"
                    initial={{ scale: 0.4, opacity: 0.9 }}
                    animate={{ scale: 2.6, opacity: 0 }}
                    transition={{ duration: 1.1, delay: Math.min(i, 12) * 0.03, ease: "easeOut" }}
                  />
                )}
                <span className="asia-marker__dot" aria-hidden="true" />
                <span className="asia-marker__label" aria-hidden="true">{m.d.shortName ?? m.d.name}</span>
              </button>
            );
          })}
        </div>
        <p className="asia-map__caption">
          <Info size={14} aria-hidden="true" /> Solid gold lines are road journeys; dashed arcs are domestic flights. Routes are
          illustrative, not actual flight paths or roads.
        </p>
      </div>

      <div className="asia-map__side">
        <AnimatePresence mode="wait" initial={false}>
          {place ? (
            <motion.article
              key={place.d.id}
              className="asia-mapcard"
              aria-live="polite"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
            >
              <button type="button" className="us-mapcard__back" onClick={() => setPlaceId(null)}>
                <ArrowLeft size={15} aria-hidden="true" /> {australiaRegionById(place.d.region).name}
              </button>
              <p className="asia-mapcard__region">{australiaRegionById(place.d.region).name}</p>
              <h3 className="asia-mapcard__title">{place.d.name}</h3>
              <p className="asia-mapcard__desc">{place.d.description}</p>
              <h4 className="asia-mapcard__h">Major attractions</h4>
              <ul className="asia-mapcard__places">
                {place.d.attractions.slice(0, 5).map((a) => (
                  <li key={a}><MapPin size={13} aria-hidden="true" /> {a}</li>
                ))}
              </ul>
              <h4 className="asia-mapcard__h">Travel styles</h4>
              <p className="asia-mapcard__styles">
                {place.d.travelStyles.slice(0, 4).map((st) => (
                  <span key={st}>{styleLabel(st)}</span>
                ))}
              </p>
              <dl className="asia-mapcard__facts">
                {place.d.idealSeason && (
                  <div><dt><CalendarDays size={14} aria-hidden="true" /> Season</dt><dd>{place.d.idealSeason}</dd></div>
                )}
                {place.d.duration && (
                  <div><dt><Clock size={14} aria-hidden="true" /> Duration</dt><dd>{place.d.duration}</dd></div>
                )}
              </dl>
              <div className="asia-mapcard__cta">
                {place.packageCount > 0 && (
                  <button type="button" className="pkg-btn asia-btn--gold" onClick={() => viewPackages({ destination: place.d.id })}>
                    View {place.packageCount} {place.packageCount === 1 ? "Package" : "Packages"}
                    <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                  </button>
                )}
                <a href={enquireAbout(`${place.d.name}, Australia`)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
                  <MessageCircle size={16} aria-hidden="true" /> Customize {place.d.shortName ?? place.d.name}
                  <span className="pkg-sr"> (opens WhatsApp)</span>
                </a>
                {place.d.sectionId && (
                  <a href={`#${place.d.sectionId}`} className="asia-mapcard__more">Read more about {place.d.shortName ?? place.d.name}</a>
                )}
              </div>
            </motion.article>
          ) : (
            <motion.article
              key={region?.id ?? "all"}
              className="asia-mapcard us-mapcard--region"
              aria-live="polite"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
            >
              <p className="asia-mapcard__region">{region ? `${region.kind} · ${region.tagline}` : "Six states, two territories"}</p>
              <h3 className="asia-mapcard__title">{region ? region.name : "Australia"}</h3>
              <p className="asia-mapcard__desc">
                {region
                  ? region.description
                  : "A country almost as big as continental Europe. Most trips focus on two or three regions, linked by domestic flights. Choose a state or territory on the map or below."}
              </p>
              {region && (
                <>
                  <dl className="us-mapcard__stats">
                    <div><dt>Destinations</dt><dd><CountUp key={`d-${region.id}`} value={regionDests.length} /></dd></div>
                    <div><dt>Packages</dt><dd><CountUp key={`p-${region.id}`} value={regionPkgs} /></dd></div>
                    <div><dt>Capital</dt><dd className="au-mapcard__capital">{region.capital}</dd></div>
                  </dl>
                  <h4 className="asia-mapcard__h">Destinations</h4>
                  <ul className="asia-mapcard__places">
                    {regionDests.map((d) => {
                      const m = markers.find((x) => x.d.id === d.id);
                      return (
                        <li key={d.id}>
                          {m ? (
                            <button type="button" className="us-mapcard__city" onClick={() => pickPlace(m)}>
                              <MapPin size={13} aria-hidden="true" /> {d.name}
                            </button>
                          ) : (
                            d.name
                          )}
                        </li>
                      );
                    })}
                  </ul>
                  <div className="asia-mapcard__cta">
                    <button type="button" className="pkg-btn asia-btn--gold" onClick={() => viewPackages({ region: region.id })}>
                      View {region.short} packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                    </button>
                    <button type="button" className="pkg-btn asia-btn--glass" onClick={() => scrollToId("explore")}>
                      See destination cards
                    </button>
                    {region.sectionId && <a href={`#${region.sectionId}`} className="asia-mapcard__more">Read the {region.name} story</a>}
                  </div>
                </>
              )}
            </motion.article>
          )}
        </AnimatePresence>
      </div>

      {/* State + place selector: the primary control on phones and the keyboard path everywhere. */}
      <div className="asia-maplist us-maplist" role="group" aria-label="Choose a state, territory or destination on the map">
        {australiaRegions.map((r) => {
          const items = markers.filter((m) => m.d.region === r.id);
          const activeRegion = s.region === r.id;
          return (
            <div key={r.id} className="asia-maplist__group">
              <button
                type="button"
                className={`us-maplist__region au-region--${r.id}${activeRegion ? " is-active" : ""}`}
                aria-pressed={activeRegion}
                onClick={() => pickRegion(r.id)}
              >
                {r.name}
              </button>
              <ul className="asia-maplist__row">
                {items.map((m) => (
                  <li key={m.d.id}>
                    <button
                      type="button"
                      className={`asia-maplist__btn${m.d.id === placeId ? " is-active" : ""}`}
                      aria-pressed={m.d.id === placeId}
                      onClick={() => pickPlace(m)}
                    >
                      {m.d.shortName ?? m.d.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
