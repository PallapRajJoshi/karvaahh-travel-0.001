"use client";

import Link from "next/link";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, CalendarDays, Clock, Info, MapPin, MessageCircle } from "lucide-react";
import type { RussiaDestination } from "@/data/russia/destinations";
import { experienceLabel } from "@/data/russia/experiences";
import { russiaRegionById, russiaRegions } from "@/data/russia/regions";
import { LIMITED_NOTE, destAnchor, enquireAbout, liveHref } from "@/lib/russia/config";
import { scrollToId, setRussiaFilter, resetRussiaFilters } from "@/lib/russia/explorer";
import { RU_MAP_H, RU_MAP_W } from "@/lib/russia/projection";
import { seasonsText } from "./RuDestinationCard";

export type RuMarker = {
  d: RussiaDestination;
  x: number;
  y: number;
  packageCount: number;
  labelSide?: "top" | "left" | "right";
};
export type RuRoute = { id: string; path: string; kind: "flight" | "rail" };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;

export default function RussiaMapClient({
  paths,
  markers,
  routes,
}: {
  paths: { russia: string; other: string };
  markers: RuMarker[];
  routes: RuRoute[];
}) {
  const [selectedId, setSelectedId] = useState("moscow");
  const selected = markers.find((m) => m.d.id === selectedId) ?? markers[0];
  const sel = selected.d;
  const limited = sel.operationalStatus === "limited";
  const live = liveHref(sel.href);

  const viewPackages = () => {
    resetRussiaFilters();
    setRussiaFilter({ destination: sel.id });
    scrollToId("packages");
  };

  return (
    <div className="asia-map ru-map">
      <div className="asia-map__stage">
        <div className="asia-map__canvas ru-map__canvas" style={{ aspectRatio: `${RU_MAP_W} / ${RU_MAP_H}` }}>
          <svg className="asia-map__svg" viewBox={`0 0 ${RU_MAP_W} ${RU_MAP_H}`} role="img" aria-labelledby="ru-map-t">
            <title id="ru-map-t">Stylised map of Russia with Karvaahh destinations, illustrative flight arcs and the Trans-Siberian rail route</title>
            <defs>
              <radialGradient id="ru-map-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#e6c77a" stopOpacity="0.6" />
                <stop offset="100%" stopColor="#e6c77a" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d={paths.other} className="ru-map__other" />
            <path d={paths.russia} className="ru-map__russia" />

            {routes.map((r, i) => (
              <motion.path
                key={r.id}
                d={r.path}
                className={`asia-map__route ru-map__route--${r.kind}`}
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: r.kind === "rail" ? 2.6 : 1.4, delay: 0.2 + i * 0.2, ease: "easeInOut" }}
              />
            ))}
            <circle cx={selected.x} cy={selected.y} r="52" fill="url(#ru-map-glow)" />
          </svg>

          {markers.map((m) => {
            const active = m.d.id === sel.id;
            return (
              <button
                key={m.d.id}
                type="button"
                className={`asia-marker${m.labelSide ? ` asia-marker--${m.labelSide}` : ""}${active ? " is-active" : ""}${m.d.featured ? " is-featured" : ""}${m.d.operationalStatus === "limited" ? " is-limited" : ""}`}
                style={{ left: pct(m.x, RU_MAP_W), top: pct(m.y, RU_MAP_H) }}
                aria-pressed={active}
                aria-label={`${m.d.name}, ${russiaRegionById(m.d.region).name}`}
                onClick={() => setSelectedId(m.d.id)}
                tabIndex={-1}
              >
                <span className="asia-marker__dot" aria-hidden="true" />
                <span className="asia-marker__label" aria-hidden="true">{m.d.name}</span>
              </button>
            );
          })}
        </div>
        <p className="asia-map__caption">
          <Info size={14} aria-hidden="true" /> Gold arcs are illustrative, not actual flight routes. The dashed line traces the
          Trans-Siberian rail route; schedules are verified before booking.
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
            <p className="asia-mapcard__region">{russiaRegionById(sel.region).name}</p>
            <h3 className="asia-mapcard__title">{sel.name}</h3>
            <p className="asia-mapcard__desc">{sel.description}</p>

            <h4 className="asia-mapcard__h">Key attractions</h4>
            <ul className="asia-mapcard__places">
              {sel.attractions.slice(0, 5).map((a) => (
                <li key={a}><MapPin size={13} aria-hidden="true" /> {a}</li>
              ))}
            </ul>

            <h4 className="asia-mapcard__h">Travel styles</h4>
            <p className="asia-mapcard__styles">
              {sel.travelStyles.slice(0, 4).map((s) => (
                <span key={s}>{experienceLabel(s)}</span>
              ))}
            </p>

            <dl className="asia-mapcard__facts">
              {seasonsText(sel.idealSeason) && (
                <div>
                  <dt><CalendarDays size={14} aria-hidden="true" /> Best season</dt>
                  <dd>{seasonsText(sel.idealSeason)}</dd>
                </div>
              )}
              {sel.recommendedDuration && (
                <div>
                  <dt><Clock size={14} aria-hidden="true" /> Duration</dt>
                  <dd>{sel.recommendedDuration}</dd>
                </div>
              )}
            </dl>
            {limited && <p className="asia-dcard__note"><Info size={14} aria-hidden="true" /> {LIMITED_NOTE}.</p>}

            <div className="asia-mapcard__cta">
              {live ? (
                <Link href={live} className="pkg-btn asia-btn--gold">
                  Explore Packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                </Link>
              ) : selected.packageCount > 0 && !limited ? (
                <button type="button" className="pkg-btn asia-btn--gold" onClick={viewPackages}>
                  Explore {selected.packageCount} {selected.packageCount === 1 ? "Package" : "Packages"}
                  <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                </button>
              ) : null}
              <a href={enquireAbout(sel.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
                <MessageCircle size={16} aria-hidden="true" /> {limited ? "Check Availability" : "Customize This Destination"}
                <span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
              <a href={sel.sectionId ? `#${sel.sectionId}` : `#${destAnchor(sel.id)}`} className="asia-mapcard__more">
                {sel.sectionId ? `Read more about ${sel.name}` : "See destination card"}
              </a>
            </div>
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Destination selector: the primary control on phones and the keyboard path everywhere. */}
      <div className="asia-maplist ru-maplist" role="group" aria-label="Choose a destination on the map">
        {russiaRegions.map((r) => {
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
                      {m.d.name}
                      {m.d.operationalStatus === "limited" && <span className="ru-dot-limited" aria-label="limited availability" />}
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
