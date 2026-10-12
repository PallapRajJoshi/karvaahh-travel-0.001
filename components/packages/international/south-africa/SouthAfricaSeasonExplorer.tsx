"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Info } from "lucide-react";
import { SEASON_NOTE, saSeasons, seasonExperienceLabels, type SeasonExperience } from "@/data/south-africa/seasons";
import { ZaHead, ZaMedia } from "./ZaPrimitives";

/** Season tabs × experiences: what each part of the year is typically like, per experience. */
export default function SouthAfricaSeasonExplorer() {
  const uid = useId();
  const [active, setActive] = useState(saSeasons[2].id);
  const idx = saSeasons.findIndex((s) => s.id === active);
  const cur = saSeasons[idx];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!n) return;
    e.preventDefault();
    const next = saSeasons[(i + n + saSeasons.length) % saSeasons.length];
    setActive(next.id);
    document.getElementById(`${uid}-${next.id}`)?.focus();
  };

  return (
    <section className="pkg-section pkg-section--sand za-seasons" id="seasons" aria-labelledby="seasons-h">
      <div className="pkg-container">
        <ZaHead
          id="seasons-h"
          eyebrow="Best time to visit South Africa"
          title="A Country of Many Seasons"
          lede="There's no single best month for all of South Africa. Pick a season to see what it typically means for each experience."
        />
        <div className="za-season-bar" role="tablist" aria-label="Season">
          {saSeasons.map((s, i) => (
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
          <motion.span className="za-season-bar__thumb" aria-hidden="true" animate={{ left: `${(idx / saSeasons.length) * 100}%` }} transition={{ type: "spring", stiffness: 300, damping: 32 }} />
        </div>
        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${cur.id}`}>
          <AnimatePresence mode="wait" initial={false}>
            <motion.div key={cur.id} className="za-season" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }} transition={{ duration: 0.3 }}>
              <div className="za-season__media">
                <ZaMedia id={cur.image} sizes="(min-width: 1024px) 34vw, 100vw" />
                <p className="za-season__mood">{cur.mood}</p>
              </div>
              <ul className="za-season__rows">
                {(Object.keys(seasonExperienceLabels) as SeasonExperience[]).map((k) => (
                  <li key={k}><strong>{seasonExperienceLabels[k]}</strong><span>{cur.notes[k]}</span></li>
                ))}
              </ul>
            </motion.div>
          </AnimatePresence>
        </div>
        <p className="za-note"><Info size={16} aria-hidden="true" /> {SEASON_NOTE}</p>
      </div>
    </section>
  );
}
