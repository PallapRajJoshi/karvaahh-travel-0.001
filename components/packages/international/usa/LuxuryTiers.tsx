"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Crown } from "lucide-react";
import type { USACollection } from "@/data/usa/collections";
import { enquireAbout } from "@/lib/usa/config";

type Tier = NonNullable<USACollection["tiers"]>[number];

/** Premium / Luxury / Ultra Luxury as accessible tabs. Tiers come from data/usa/collections.ts. */
export default function LuxuryTiers({ tiers }: { tiers: Tier[] }) {
  const uid = useId();
  const [active, setActive] = useState(tiers[1]?.id ?? tiers[0].id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = tiers.find((x) => x.id === active) ?? tiers[0];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + tiers.length) % tiers.length;
    setActive(tiers[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className="us-tiers">
      <div className="us-tiers__tabs" role="tablist" aria-label="Luxury level">
        {tiers.map((x, i) => {
          const on = x.id === t.id;
          return (
            <button
              key={x.id}
              ref={(el) => {
                refs.current[i] = el;
              }}
              type="button"
              role="tab"
              id={`${uid}-${x.id}`}
              aria-selected={on}
              aria-controls={`${uid}-panel`}
              tabIndex={on ? 0 : -1}
              className={`us-tiers__tab${on ? " is-active" : ""}`}
              onClick={() => setActive(x.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {on && <motion.span layoutId={`${uid}-bg`} className="us-tiers__bg" transition={{ type: "spring", stiffness: 400, damping: 34 }} />}
              <span className="us-tiers__label"><Crown size={15} aria-hidden="true" /> {x.label}</span>
            </button>
          );
        })}
      </div>
      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${t.id}`} className="us-tiers__panel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={t.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
            <p className="us-tiers__text">{t.text}</p>
            <ul className="us-tiers__list">
              {t.includes.map((x) => (
                <li key={x}><Check size={15} aria-hidden="true" /> {x}</li>
              ))}
            </ul>
            <a href={enquireAbout(`a ${t.label} USA journey`)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--gold">
              Enquire about {t.label}<span className="pkg-sr"> (opens WhatsApp)</span>
            </a>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
