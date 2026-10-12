"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowLeft, ArrowRight, CalendarDays, ChevronDown, Clock, Info, MapPin, MessageCircle } from "lucide-react";
import type { USADestination } from "@/data/usa/destinations";
import { visibleUSADestinations } from "@/data/usa/destinations";
import { activeUSAPackages } from "@/data/usa/packages";
import { usaRegionById, usaRegions, type USRegion } from "@/data/usa/regions";
import { styleLabel } from "@/data/usa/travel-styles";
import { enquireAbout } from "@/lib/usa/config";
import { packageMatches, resetUSAFilters, scrollToId, setUSAFilter, useUSAFilters } from "@/lib/usa/explorer";
import { US_MAP_H, US_MAP_W } from "@/lib/usa/projection";
import CountUp from "../../CountUp";

export type USMarker = { d: USADestination; x: number; y: number; packageCount: number };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

/**
 * The map writes the shared region filter (so destinations and packages below
 * follow it) and keeps a local "selected city" for its side panel. Markers are
 * pointer-only; the region and city buttons under the map are the keyboard
 * and small-screen path, so the map is never the only way in.
 */
export default function USAMapClient({ markers, routes }: { markers: USMarker[]; routes: { id: string; path: string }[] }) {
  const s = useUSAFilters();
  const [cityId, setCityId] = useState<string | null>(null);
  const [mapOpen, setMapOpen] = useState(true);
  const region = s.region === "all" ? null : usaRegionById(s.region);
  const city = markers.find((m) => m.d.id === cityId) ?? null;

  const pickRegion = (id: USRegion | "all") => {
    setCityId(null);
    setUSAFilter({ region: s.region === id ? "all" : id, destination: "all" });
  };
  const pickCity = (m: USMarker) => {
    setCityId(m.d.id);
    if (s.region !== m.d.region) setUSAFilter({ region: m.d.region, destination: "all" });
  };
  const viewPackages = (patch: { region?: USRegion; destination?: string }) => {
    resetUSAFilters();
    setUSAFilter(patch);
    scrollToId("packages");
  };

  const regionDests = region ? visibleUSADestinations.filter((d) => d.region === region.id) : [];
  const regionPkgs = region ? activeUSAPackages.filter((p) => packageMatches(p, { region: region.id, styles: [], destination: "all" })).length : 0;

  return (
    <div className="asia-map us-map">
      <div className="asia-map__stage">
        <button type="button" className="us-map__toggle" aria-expanded={mapOpen} aria-controls="us-map-canvas" onClick={() => setMapOpen((v) => !v)}>
          {mapOpen ? "Hide map" : "Show map"} <ChevronDown size={16} aria-hidden="true" className={mapOpen ? "is-flipped" : ""} />
        </button>
        <div
          id="us-map-canvas"
          className={`asia-map__canvas us-map__canvas${mapOpen ? "" : " is-collapsed"}${region ? " has-region" : ""}`}
          style={{ aspectRatio: `${US_MAP_W} / ${US_MAP_H}` }}
        >
          <svg className="asia-map__svg" viewBox={`0 0 ${US_MAP_W} ${US_MAP_H}`} role="img" aria-labelledby="us-map-t">
            <title id="us-map-t">
              Stylised map of the United States divided into eight travel regions, with Alaska and Hawaii shown as insets and
              Karvaahh destinations marked
            </title>
            <defs>
              <radialGradient id="us-map-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f2c46d" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#f2c46d" stopOpacity="0" />
              </radialGradient>
            </defs>
            <rect x="4" y="436" width="208" height="214" rx="16" className="us-map__inset" />
            <rect x="274" y="534" width="196" height="116" rx="16" className="us-map__inset" />
            {usaRegions.map((r) => (
              <use
                key={r.id}
                href={`#usa-land-${r.id}`}
                className={`us-map__region us-map__region--${r.id}${s.region === r.id ? " is-active" : ""}`}
                onClick={() => pickRegion(r.id)}
              />
            ))}
            {routes.map((r, i) => (
              <motion.path
                key={r.id}
                d={r.path}
                className="asia-map__route us-map__route"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 2.2, delay: 0.3 + i * 0.35, ease: "easeInOut" }}
              />
            ))}
            {city && <circle cx={city.x} cy={city.y} r="46" fill="url(#us-map-glow)" />}
            <text x="16" y="458" className="us-map__inset-label">Alaska</text>
            <text x="286" y="556" className="us-map__inset-label">Hawaii</text>
          </svg>

          {markers.map((m, i) => {
            const active = m.d.id === cityId;
            const inRegion = !region || m.d.region === region.id;
            return (
              <button
                key={m.d.id}
                type="button"
                className={`asia-marker us-marker${m.d.labelSide ? ` asia-marker--${m.d.labelSide}` : ""}${active ? " is-active" : ""}${m.d.featured ? " is-featured" : ""}${m.d.minor ? " is-minor" : ""}${inRegion ? "" : " is-dim"}${region && inRegion ? " is-lit" : ""}`}
                style={{ left: pct(m.x, US_MAP_W), top: pct(m.y, US_MAP_H) }}
                aria-pressed={active}
                aria-label={`${m.d.name}, ${usaRegionById(m.d.region).name}`}
                onClick={() => pickCity(m)}
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
                <span className="asia-marker__label" aria-hidden="true">{m.d.name}</span>
              </button>
            );
          })}
        </div>
        <p className="asia-map__caption">
          <Info size={14} aria-hidden="true" /> Regions are Karvaahh travel groupings. Gold lines are illustrative journeys, not
          actual flight or road routes. Alaska and Hawaii are shown as insets, not to scale.
        </p>
      </div>

      <div className="asia-map__side">
        <AnimatePresence mode="wait" initial={false}>
          {city ? (
            <motion.article
              key={city.d.id}
              className="asia-mapcard"
              aria-live="polite"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.28 }}
            >
              <button type="button" className="us-mapcard__back" onClick={() => setCityId(null)}>
                <ArrowLeft size={15} aria-hidden="true" /> {usaRegionById(city.d.region).name}
              </button>
              <p className="asia-mapcard__region">{city.d.state ?? usaRegionById(city.d.region).name}</p>
              <h3 className="asia-mapcard__title">{city.d.name}</h3>
              <p className="asia-mapcard__desc">{city.d.description}</p>
              <h4 className="asia-mapcard__h">Major attractions</h4>
              <ul className="asia-mapcard__places">
                {city.d.attractions.slice(0, 5).map((a) => (
                  <li key={a}><MapPin size={13} aria-hidden="true" /> {a}</li>
                ))}
              </ul>
              <h4 className="asia-mapcard__h">Travel styles</h4>
              <p className="asia-mapcard__styles">
                {city.d.travelStyles.slice(0, 4).map((st) => (
                  <span key={st}>{styleLabel(st)}</span>
                ))}
              </p>
              <dl className="asia-mapcard__facts">
                {city.d.idealSeason && (
                  <div><dt><CalendarDays size={14} aria-hidden="true" /> Best season</dt><dd>{city.d.idealSeason}</dd></div>
                )}
                {city.d.recommendedDuration && (
                  <div><dt><Clock size={14} aria-hidden="true" /> Duration</dt><dd>{city.d.recommendedDuration}</dd></div>
                )}
              </dl>
              <div className="asia-mapcard__cta">
                {city.packageCount > 0 && (
                  <button type="button" className="pkg-btn asia-btn--gold" onClick={() => viewPackages({ destination: city.d.id })}>
                    View {city.packageCount} {city.packageCount === 1 ? "Package" : "Packages"}
                    <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                  </button>
                )}
                <a href={enquireAbout(city.d.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
                  <MessageCircle size={16} aria-hidden="true" /> Customize {city.d.name}
                  <span className="pkg-sr"> (opens WhatsApp)</span>
                </a>
                {city.d.sectionId && (
                  <a href={`#${city.d.sectionId}`} className="asia-mapcard__more">Read more about {city.d.name}</a>
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
              <p className="asia-mapcard__region">{region ? region.tagline : "Eight travel regions"}</p>
              <h3 className="asia-mapcard__title">{region ? region.name : "The United States"}</h3>
              <p className="asia-mapcard__desc">
                {region ? region.description : "From Atlantic skylines to Pacific islands, the USA is best explored one or two regions at a time. Choose a region on the map or below."}
              </p>
              {region && (
                <>
                  <dl className="us-mapcard__stats">
                    <div><dt>Destinations</dt><dd><CountUp key={`d-${region.id}`} value={regionDests.length} /></dd></div>
                    <div><dt>Packages</dt><dd><CountUp key={`p-${region.id}`} value={regionPkgs} /></dd></div>
                    <div><dt>States</dt><dd><CountUp key={`s-${region.id}`} value={region.states.length} /></dd></div>
                  </dl>
                  <h4 className="asia-mapcard__h">Destinations</h4>
                  <ul className="asia-mapcard__places">
                    {regionDests.map((d) => {
                      const m = markers.find((x) => x.d.id === d.id);
                      return (
                        <li key={d.id}>
                          {m ? (
                            <button type="button" className="us-mapcard__city" onClick={() => pickCity(m)}>
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
                      View {region.name} packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
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

      {/* Region + city selector: the primary control on phones and the keyboard path everywhere. */}
      <div className="asia-maplist us-maplist" role="group" aria-label="Choose a region or destination on the map">
        {usaRegions.map((r) => {
          const items = markers.filter((m) => m.d.region === r.id);
          const activeRegion = s.region === r.id;
          return (
            <div key={r.id} className="asia-maplist__group">
              <button
                type="button"
                className={`us-maplist__region us-maplist__region--${r.id}${activeRegion ? " is-active" : ""}`}
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
                      className={`asia-maplist__btn${m.d.id === cityId ? " is-active" : ""}`}
                      aria-pressed={m.d.id === cityId}
                      onClick={() => pickCity(m)}
                    >
                      {m.d.name}
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
