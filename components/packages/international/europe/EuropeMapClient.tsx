"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { AlertTriangle, ArrowRight, CalendarDays, Globe2, Info, MapPin, MessageCircle, Package } from "lucide-react";
import { countryById, europeCountries } from "@/data/europe/countries";
import { groupRegions, regionById } from "@/data/europe/regions";
import { europeSeasons } from "@/data/europe/seasons";
import { styleLabel } from "@/data/europe/travel-styles";
import { countryAnchor, enquireAbout, liveHref } from "@/lib/europe/config";
import { countryMatches, hasActiveFilters, scrollToId, setExplorer, DEFAULT_STATE, useExplorer } from "@/lib/europe/explorer";
import { MAP_H, MAP_W, arcPath } from "@/lib/europe/projection";
import Flag from "../asia/Flag";

export type MapCountry = { id: string; dots: string; x: number; y: number; packageCount: number };

const pct = (v: number, of: number) => `${(v / of) * 100}%`;
const seasonLabel = (id: string) => europeSeasons.find((s) => s.id === id)?.label ?? id;

export default function EuropeMapClient({
  land,
  countries,
  origin,
}: {
  land: string;
  countries: MapCountry[];
  /** Off-map point to the east where the illustrative route from Nepal/India starts. */
  origin: { x: number; y: number };
}) {
  const filters = useExplorer();
  const filtering = hasActiveFilters(filters);
  const [selectedId, setSelectedId] = useState("switzerland");
  const [hoverId, setHoverId] = useState<string | null>(null);

  const selected = countries.find((m) => m.id === selectedId) ?? countries[0];
  const sel = countryById(selected.id)!;
  const live = liveHref(sel.href);
  const inactive = sel.operationalStatus === "inactive";

  const lit = useMemo(
    () => new Set(europeCountries.filter((c) => c.operationalStatus !== "inactive" && countryMatches(c, filters)).map((c) => c.id)),
    [filters],
  );

  const select = (id: string) => setSelectedId(id);

  return (
    <div className="asia-map eu-map">
      {/* Phones: a proper selector first, then the simplified map as a visual. */}
      <label className="eu-map__select">
        <span className="eu-map__select-label">Choose a country</span>
        <select value={sel.id} onChange={(e) => select(e.target.value)}>
          {groupRegions.map((r) => (
            <optgroup key={r.id} label={r.name}>
              {europeCountries
                .filter((c) => c.region === r.id)
                .map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                    {c.operationalStatus === "inactive" ? " (not currently offered)" : ""}
                  </option>
                ))}
            </optgroup>
          ))}
        </select>
      </label>

      <div className="asia-map__stage">
        <div className="asia-map__canvas eu-map__canvas" style={{ aspectRatio: `${MAP_W} / ${MAP_H}` }}>
          <svg className="asia-map__svg" viewBox={`0 0 ${MAP_W} ${MAP_H}`} role="img" aria-labelledby="eu-map-t">
            <title id="eu-map-t">{`Stylised dotted map of Europe. Selected: ${sel.name}.`}</title>
            <defs>
              <radialGradient id="eu-map-glow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#f2c46d" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#f2c46d" stopOpacity="0" />
              </radialGradient>
            </defs>
            <path d={land} className="eu-map__land" />

            {countries.map((m) => {
              if (!m.dots) return null;
              const isSel = m.id === sel.id;
              const dim = filtering && !lit.has(m.id);
              return (
                <path
                  key={m.id}
                  d={m.dots}
                  className={`eu-map__country${isSel ? " is-selected" : ""}${m.id === hoverId ? " is-hover" : ""}${dim ? " is-dim" : ""}${filtering && lit.has(m.id) ? " is-lit" : ""}`}
                  onClick={() => select(m.id)}
                  onPointerEnter={() => setHoverId(m.id)}
                  onPointerLeave={() => setHoverId(null)}
                />
              );
            })}

            <AnimatePresence>
              <motion.path
                key={sel.id}
                d={arcPath(origin, selected, 160)}
                className="asia-map__route asia-map__route--active eu-map__flight"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </AnimatePresence>
            <circle cx={selected.x} cy={selected.y} r="42" fill="url(#eu-map-glow)" />
          </svg>

          {countries.map((m) => {
            const c = countryById(m.id)!;
            const active = m.id === sel.id;
            const dim = filtering && !lit.has(m.id);
            return (
              <button
                key={m.id}
                type="button"
                className={`asia-marker eu-marker${active ? " is-active" : ""}${c.featured ? " is-featured" : ""}${dim ? " is-dim" : ""}${m.id === hoverId ? " is-hover" : ""}${c.operationalStatus === "inactive" ? " is-off" : ""}`}
                style={{ left: pct(m.x, MAP_W), top: pct(m.y, MAP_H) }}
                aria-pressed={active}
                aria-label={`${c.name}, ${regionById(c.region).name}`}
                onClick={() => select(m.id)}
                onPointerEnter={() => setHoverId(m.id)}
                onPointerLeave={() => setHoverId(null)}
                tabIndex={-1}
              >
                <span className="asia-marker__dot" aria-hidden="true" />
                <span className="asia-marker__label" aria-hidden="true">{c.name}</span>
              </button>
            );
          })}
          <span className="eu-map__from" aria-hidden="true">From Nepal &amp; India →</span>
        </div>
        <p className="asia-map__caption">
          <Info size={14} aria-hidden="true" /> Stylised map. The arc from the east is illustrative, not an actual flight route.
          Turkey and the Caucasus are shown as transcontinental destinations.
        </p>
      </div>

      <div className="asia-map__side" aria-live="polite">
        <AnimatePresence mode="wait" initial={false}>
          <motion.article
            key={sel.id}
            className="asia-mapcard"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.28 }}
          >
            <p className="asia-mapcard__region">
              {regionById(sel.region).name}
              {sel.transcontinental && (
                <span className="eu-mapcard__trans"><Globe2 size={12} aria-hidden="true" /> Transcontinental</span>
              )}
            </p>
            <h3 className="asia-mapcard__title">
              <Flag iso={sel.iso} size={30} /> {sel.name}
            </h3>
            <p className="asia-mapcard__desc">{sel.description}</p>

            {sel.advisory && (
              <p className={`asia-dcard__note${inactive ? " eu-note--warn" : ""}`}>
                {inactive ? <AlertTriangle size={14} aria-hidden="true" /> : <Info size={14} aria-hidden="true" />} {sel.advisory}
              </p>
            )}

            <h4 className="asia-mapcard__h">Top cities</h4>
            <ul className="asia-mapcard__places">
              {sel.cities.slice(0, 5).map((c) => (
                <li key={c}><MapPin size={13} aria-hidden="true" /> {c}</li>
              ))}
            </ul>

            {!inactive && (
              <>
                <h4 className="asia-mapcard__h">Key experiences</h4>
                <p className="eu-mapcard__exp">{sel.experiences.slice(0, 4).join(" · ")}</p>

                <h4 className="asia-mapcard__h">Travel styles</h4>
                <p className="asia-mapcard__styles">
                  {sel.travelStyles.slice(0, 4).map((s) => (
                    <span key={s}>{styleLabel(s)}</span>
                  ))}
                </p>

                <dl className="asia-mapcard__facts">
                  <div>
                    <dt><CalendarDays size={14} aria-hidden="true" /> Best seasons</dt>
                    <dd>{sel.bestSeasons.map(seasonLabel).join(", ")}</dd>
                  </div>
                  <div>
                    <dt><Package size={14} aria-hidden="true" /> Packages</dt>
                    <dd>{selected.packageCount > 0 ? selected.packageCount : "Custom only"}</dd>
                  </div>
                </dl>

                <div className="asia-mapcard__cta">
                  {live ? (
                    <Link href={live} className="pkg-btn asia-btn--gold">
                      Explore Packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                    </Link>
                  ) : selected.packageCount > 0 && sel.operationalStatus === "active" ? (
                    <button
                      type="button"
                      className="pkg-btn asia-btn--gold"
                      onClick={() => {
                        setExplorer({ ...DEFAULT_STATE, country: sel.id });
                        scrollToId("packages");
                      }}
                    >
                      Explore Packages <ArrowRight size={16} className="pkg-arrow" aria-hidden="true" />
                    </button>
                  ) : null}
                  <a href={enquireAbout(sel.name)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
                    <MessageCircle size={16} aria-hidden="true" /> Customize {sel.name}
                    <span className="pkg-sr"> (opens WhatsApp)</span>
                  </a>
                  <a href={`#${countryAnchor(sel.id)}`} className="asia-mapcard__more">See the full {sel.name} card</a>
                </div>
              </>
            )}
          </motion.article>
        </AnimatePresence>
      </div>

      {/* Country list: the keyboard path on every screen, grouped by region. */}
      <div className="asia-maplist eu-maplist" role="group" aria-label="Choose a country on the map">
        {groupRegions.map((r) => {
          const items = europeCountries.filter((c) => c.region === r.id);
          return (
            <div key={r.id} className="asia-maplist__group">
              <p className="asia-maplist__h">{r.short}</p>
              <ul className="asia-maplist__row">
                {items.map((c) => (
                  <li key={c.id}>
                    <button
                      type="button"
                      className={`asia-maplist__btn${c.id === sel.id ? " is-active" : ""}${filtering && !lit.has(c.id) ? " is-dim" : ""}`}
                      aria-pressed={c.id === sel.id}
                      onClick={() => select(c.id)}
                      onFocus={() => setHoverId(c.id)}
                      onBlur={() => setHoverId(null)}
                    >
                      <Flag iso={c.iso} size={18} /> {c.name}
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
