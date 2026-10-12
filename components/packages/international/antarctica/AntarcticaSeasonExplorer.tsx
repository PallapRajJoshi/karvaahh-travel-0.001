"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Info } from "lucide-react";
import { SEASON_NOTE, polarSeasons, seasonAspectLabels, type SeasonAspect } from "@/data/antarctica/seasons";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/** Early / peak / late season timeline with experience cards per aspect. */
export default function AntarcticaSeasonExplorer() {
  const uid = useId();
  const [active, setActive] = useState(polarSeasons[1].id);
  const cur = polarSeasons.find((s) => s.id === active) ?? polarSeasons[1];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!n) return;
    e.preventDefault();
    const next = polarSeasons[(i + n + polarSeasons.length) % polarSeasons.length];
    setActive(next.id);
    document.getElementById(`${uid}-${next.id}`)?.focus();
  };

  return (
    <section className="pkg-section pkg-section--sand an-seasons" id="seasons" aria-labelledby="seasons-h">
      <div className="pkg-container">
        <SectionHead
          id="seasons-h"
          eyebrow="Best time to visit Antarctica"
          title="The Antarctic Expedition Season"
          lede="Voyages typically run from about November to March, in the austral summer. Each part of the season has its own character."
        />

        <div className="an-season-bar" role="tablist" aria-label="Expedition season">
          {polarSeasons.map((s, i) => (
            <button
              key={s.id}
              id={`${uid}-${s.id}`}
              type="button"
              role="tab"
              aria-selected={s.id === active}
              aria-controls={`${uid}-panel`}
              tabIndex={s.id === active ? 0 : -1}
              className={s.id === active ? "is-active" : ""}
              onClick={() => setActive(s.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              <strong>{s.label}</strong>
              <span>{s.months}</span>
            </button>
          ))}
          <motion.span
            className="an-season-bar__thumb"
            aria-hidden="true"
            animate={{ left: `${(polarSeasons.findIndex((s) => s.id === active) / polarSeasons.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 32 }}
          />
        </div>

        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${cur.id}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={cur.id} className="an-season" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <div className="an-season__media">
                <PolarMedia id={cur.image} sizes="(min-width: 1024px) 34vw, 100vw" />
                <p className="an-season__summary">{cur.summary}</p>
              </div>
              <ul className="an-season__aspects">
                {(Object.keys(seasonAspectLabels) as SeasonAspect[]).map((k) => (
                  <li key={k}>
                    <strong>{seasonAspectLabels[k]}</strong>
                    <span>{cur.aspects[k]}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="an-note"><Info size={16} aria-hidden="true" /> {SEASON_NOTE}</p>
      </div>
    </section>
  );
}
