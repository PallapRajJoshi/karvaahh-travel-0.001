"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Flower2, Info, Leaf, Snowflake, Sun, Waves, type LucideIcon } from "lucide-react";
import type { SeasonId } from "@/data/australia/destinations";
import { australiaDestinationById } from "@/data/australia/destinations";
import { SEASON_NOTE, australiaSeasons, climateZones, marineCalendar, type SeasonLevel } from "@/data/australia/seasons";
import { destAnchor } from "@/lib/australia/config";

const ICONS: Record<SeasonId, LucideIcon> = { summer: Sun, autumn: Leaf, winter: Snowflake, spring: Flower2 };
const LEVEL: Record<SeasonLevel, string> = { great: "Great", good: "Good", limited: "Limited" };

/** Southern-hemisphere season for a month (0 = January). */
const seasonForMonth = (m: number): SeasonId => (m === 11 || m <= 1 ? "summer" : m <= 4 ? "autumn" : m <= 7 ? "winter" : "spring");
const noop = () => () => {};

/**
 * Seasonal explorer: tabs (opening on Australia's current season) with
 * guidance per climate zone, a zone × season matrix and a marine calendar.
 * Never states one best month for the whole country.
 */
export default function AustraliaSeasonExplorer() {
  const uid = useId();
  const [picked, setPicked] = useState<SeasonId | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const now = useSyncExternalStore(noop, () => seasonForMonth(new Date().getMonth()), () => australiaSeasons[0].id);
  const active = picked ?? now;
  const s = australiaSeasons.find((x) => x.id === active) ?? australiaSeasons[0];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + australiaSeasons.length) % australiaSeasons.length;
    setPicked(australiaSeasons[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div className="au-seasons">
      <div className="asia-seasons__tabs" role="tablist" aria-label="Australian seasons">
        {australiaSeasons.map((x, i) => {
          const Icon = ICONS[x.id];
          const on = x.id === active;
          return (
            <button
              key={x.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${x.id}`}
              aria-selected={on}
              aria-controls={`${uid}-panel`}
              tabIndex={on ? 0 : -1}
              className={`asia-season-tab asia-season-tab--${x.id}${on ? " is-active" : ""}`}
              onClick={() => setPicked(x.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <Icon size={22} aria-hidden="true" />
              <span className="asia-season-tab__label">{x.label}</span>
              <span className="asia-season-tab__months">{x.months}</span>
            </button>
          );
        })}
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${s.id}`} className="asia-seasons__panel au-seasons__panel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={s.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.25 }}>
            <p className="asia-seasons__text">{s.text}</p>
            <p className="au-seasons__home">At home in Nepal & India: {s.home}</p>
            <ul className="au-zones">
              {climateZones.map((z, i) => {
                const g = s.zones[z.id];
                return (
                  <motion.li key={z.id} className={`au-zone au-zone--${g.level}`} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.04 * i, duration: 0.3 }}>
                    <span className={`us-level us-level--${g.level}`}>{LEVEL[g.level]}</span>
                    <strong className="au-zone__name">{z.label}</strong>
                    <span className="au-zone__text">{g.text}</span>
                    <span className="au-zone__places">
                      {z.destinations.map((id, k) => {
                        const d = australiaDestinationById(id);
                        return d ? (
                          <span key={id}>
                            <a href={`#${destAnchor(id)}`}>{d.shortName ?? d.name}</a>
                            {k < z.destinations.length - 1 ? " · " : ""}
                          </span>
                        ) : null;
                      })}
                    </span>
                  </motion.li>
                );
              })}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="us-matrix">
        <table>
          <caption>Season by region: general guidance only</caption>
          <thead>
            <tr>
              <th scope="col">Region</th>
              {australiaSeasons.map((x) => (
                <th key={x.id} scope="col">{x.label}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {climateZones.map((z) => (
              <tr key={z.id}>
                <th scope="row">{z.label}</th>
                {australiaSeasons.map((x) => (
                  <td key={x.id} data-label={x.label}>
                    <span className={`us-level us-level--${x.zones[z.id].level}`}>{LEVEL[x.zones[z.id].level]}</span>
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="au-marine">
        <p className="au-marine__h"><Waves size={18} aria-hidden="true" /> Marine & wildlife calendar</p>
        <ul>
          {marineCalendar.map((m) => (
            <li key={m.title}>
              <strong>{m.title}</strong>
              <span className="au-marine__months">{m.months}</span>
              <span>{m.text}</span>
            </li>
          ))}
        </ul>
      </div>

      <p className="asia-seasons__note"><Info size={14} aria-hidden="true" /> {SEASON_NOTE}</p>
    </div>
  );
}
