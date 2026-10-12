"use client";

import { useId, useRef, useState, useSyncExternalStore } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Flower2, Info, Leaf, Snowflake, Sun, type LucideIcon } from "lucide-react";
import type { SeasonId } from "@/data/asia-content";
import { destAnchor } from "@/lib/asia/config";
import Flag from "./Flag";

export type SeasonView = {
  id: SeasonId;
  label: string;
  months: string;
  text: string;
  /** `iso` adds a flag; `bestTime` adds a hint line. */
  destinations: { id: string; country: string; iso?: string; bestTime?: string }[];
};

const ICONS: Record<SeasonId, LucideIcon> = { spring: Flower2, summer: Sun, autumn: Leaf, winter: Snowflake };

const noop = () => () => {};

const seasonForMonth = (m: number): SeasonId => (m >= 2 && m <= 4 ? "spring" : m >= 5 && m <= 7 ? "summer" : m >= 8 && m <= 10 ? "autumn" : "winter");

/** Accessible tabs (arrow keys move between seasons). Opens on the current season after mount. */
const DEFAULT_NOTE =
  "These are general recommendations. Weather varies within countries and from year to year, so check destination-specific conditions before booking.";

export default function SeasonSelector({ seasons, note = DEFAULT_NOTE }: { seasons: SeasonView[]; note?: string }) {
  const uid = useId();
  const [picked, setActive] = useState<SeasonId | null>(null);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  // Current season on the client; the first season on the server, so hydration matches.
  const nowSeason = useSyncExternalStore(
    noop,
    () => seasonForMonth(new Date().getMonth()),
    () => seasons[0].id,
  );
  const active = picked ?? nowSeason;
  const current = seasons.find((s) => s.id === active) ?? seasons[0];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + seasons.length) % seasons.length;
    setActive(seasons[next].id);
    tabs.current[next]?.focus();
  };

  return (
    <div className="asia-seasons">
      <div className="asia-seasons__tabs" role="tablist" aria-label="Seasons">
        {seasons.map((s, i) => {
          const Icon = ICONS[s.id];
          const selected = s.id === active;
          return (
            <button
              key={s.id}
              ref={(el) => {
                tabs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-tab-${s.id}`}
              aria-selected={selected}
              aria-controls={`${uid}-panel`}
              tabIndex={selected ? 0 : -1}
              className={`asia-season-tab asia-season-tab--${s.id}${selected ? " is-active" : ""}`}
              onClick={() => setActive(s.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <Icon size={22} aria-hidden="true" />
              <span className="asia-season-tab__label">{s.label}</span>
              <span className="asia-season-tab__months">{s.months}</span>
            </button>
          );
        })}
      </div>

      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${current.id}`} className="asia-seasons__panel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p className="asia-seasons__text">{current.text}</p>
            <ul className="asia-seasons__list">
              {current.destinations.map((d, i) => (
                <motion.li
                  key={d.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i, duration: 0.3 }}
                >
                  <a href={`#${destAnchor(d.id)}`} className="asia-season-dest">
                    {d.iso && <Flag iso={d.iso} size={28} />}
                    <span>
                      <strong>{d.country}</strong>
                      {d.bestTime && <small>Generally best: {d.bestTime}</small>}
                    </span>
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </AnimatePresence>
      </div>

      <p className="asia-seasons__note">
        <Info size={14} aria-hidden="true" /> {note}
      </p>
    </div>
  );
}
