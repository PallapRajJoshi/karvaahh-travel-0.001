"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CalendarDays, Clock, Info, MapPin, MessageCircle } from "lucide-react";
import type { AsiaDestination } from "@/data/asia-destinations";
import { asiaRegions, regionById } from "@/data/asia-regions";
import { styleLabel } from "@/data/travel-styles";
import { DESTINATION_SITE_LINKS, destAnchor, enquireAbout, liveHref } from "@/lib/asia/config";
import { MAP_H, MAP_W, arcPath } from "@/lib/asia/projection";
import { daysLabel } from "./DestinationCard";
import Flag from "./Flag";

export type MapMarker = { d: AsiaDestination; x: number; y: number; packageCount: number; labelSide?: "top" | "left" | "right" };
export type MapRoute = { id: string; path: string; label: string };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export default function AsiaMapClient({
  dotsPath,
  markers,
  routes,
  origin,
}: {
  dotsPath: string;
  markers: MapMarker[];
  routes: MapRoute[];
  /** Projected Kathmandu, start of the highlighted route to the selected country. */
  origin: { x: number; y: number };
}) {
  const [selectedId, setSelectedId] = useState("thailand");
  const selected = markers.find((m) => m.d.id === selectedId) ?? markers[0];
  const sel = selected.d;
  const live = liveHref(sel.href);
  const siteLink = DESTINATION_SITE_LINKS[sel.id];
  const showSelectedRoute = sel.id !== "nepal";

  return (
    <div className="asia-map">
      <div className="asia-map__stage">
        <div className="asia-map__canvas" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
          <svg className="asia-map__svg" viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-labelledby="asia-map-svg-t">
            <title id="asia-map-svg-t">Stylised map of Asia with Karvaahh destinations and illustrative routes from Nepal and India</title>
            <defs>
              <radialGradient id="asia-map-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f2b366" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#f2b366" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d={dotsPath} className="asia-map__land" />

            {routes.map((r, i) => (
              <motion.path
                key={r.id}
                d={r.path}
                className="asia-map__route"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 1.6, delay: 0.3 + i * 0.25, ease: "easeInOut" }}
              />
            ))}

            <AnimatePresence>
              {showSelectedRoute && (
                <motion.path
                  key={sel.id}
                  d={arcPath(origin, selected)}
                  className="asia-map__route asia-map__route--active"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.9, ease: "easeInOut" }}
                />
              )}
            </AnimatePresence>

            <circle cx={selected.x} cy={selected.y} r="46" fill="url(#asia-map-glow)" />
          </svg>

          {markers.map((m) => {
            const active = m.d.id === sel.id;
            return (
              <button
                key={m.d.id}
                type="button"
                className={`asia-marker${m.labelSide ? ` asia-marker--${m.labelSide}` : ""}${active ? " is-active" : ""}${m.d.featured ? " is-featured" : ""}`}
                style={{ left: pct(m.x, MAP_W), top: pct(m.y, MAP_H) }}
                aria-pressed={active}
                aria-label={`${m.d.country}, ${regionById(m.d.region).name}`}
                onClick={() => setSelectedId(m.d.id)}
                tabIndex={-1}
              >
                <span className="asia-marker__dot" aria-hidden="true" />
                <span className="asia-marker__label" aria-hidden="true">{m.d.country}</span>
              </button>
            );
          })}
        </div>
        <p className="asia-map__caption">
          <Info size={14} aria-hidden="true" /> Arcs from Nepal and India are illustrative only, not actual flight routes.
        </p>
      </div>

      <div className="asia-map__side">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={sel.id}
            className="asia-mapcard"
            aria-live="polite"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
          >
            <p className="asia-mapcard__region">{regionById(sel.region).name}</p>
            <h3 className="asia-mapcard__title">
              <Flag iso={sel.iso} size={30} /> {sel.country}
            </h3>
            <p className="asia-mapcard__desc">{sel.description}</p>

            <h4 className="asia-mapcard__h">Top destinations</h4>
            <ul className="asia-mapcard__places">
              {sel.cities.slice(0, 5).map((c) => (
                <li key={c}><MapPin size={13} aria-hidden="true" /> {c}</li>
              ))}
            </ul>

            <h4 className="asia-mapcard__h">Travel styles</h4>
            <p className="asia-mapcard__styles">
              {sel.travelStyles.slice(0, 4).map((s) => (
                <span key={s}>{styleLabel(s)}</span>
              ))}
            </p>

            <dl className="asia-mapcard__facts">
              <div>
                <dt><Clock size={14} aria-hidden="true" /> Suggested duration</dt>
                <dd>{daysLabel(sel.days)}</dd>
              </div>
              {sel.bestTime && (
                <div>
                  <dt><CalendarDays size={14} aria-hidden="true" /> Best time</dt>
                  <dd>{sel.bestTime}</dd>
                </div>
              )}
            </dl>
            {sel.note && <p className="asia-dcard__note"><Info size={14} aria-hidden="true" /> {sel.note}</p>}

            <div className="asia-mapcard__cta">
              {live ? (
                <Link href={live} className="pkg-btn asia-btn--gold">
                  Explore Packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                </Link>
              ) : selected.packageCount > 0 ? (
                <a href="#journeys" className="pkg-btn asia-btn--gold">
                  Explore {selected.packageCount} {selected.packageCount === 1 ? "Journey" : "Journeys"}
                  <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                </a>
              ) : siteLink ? (
                <Link href={siteLink.href} className="pkg-btn asia-btn--gold">
                  {siteLink.label} <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                </Link>
              ) : null}
              <a href={enquireAbout(sel.country)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
                <MessageCircle size={16} aria-hidden="true" /> Customize This Destination
                <span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
              <a href={`#${destAnchor(sel.id)}`} className="asia-mapcard__more">See full destination card</a>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Destination list: the primary selector on phones, and the keyboard path everywhere. */}
      <div className="asia-maplist" role="group" aria-label="Choose a country on the map">
        {asiaRegions.map((r) => {
          const items = markers.filter((m) => m.d.region === r.id);
          if (!items.length) return null;
          return (
            <div key={r.id} className="asia-maplist__group">
              <p className="asia-maplist__h">{r.name}</p>
              <ul className="asia-maplist__row">
                {items.map((m) => (
                  <li key={m.d.id}>
                    <button
                      type="button"
                      className={`asia-maplist__btn${m.d.id === sel.id ? " is-active" : ""}`}
                      aria-pressed={m.d.id === sel.id}
                      onClick={() => setSelectedId(m.d.id)}
                    >
                      <Flag iso={m.d.iso} size={18} /> {m.d.country}
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
