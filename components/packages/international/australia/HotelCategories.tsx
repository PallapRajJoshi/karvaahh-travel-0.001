"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { BedDouble, Check, MessageCircle, SlidersHorizontal } from "lucide-react";
import type { HotelCategory } from "@/data/australia/collections";
import { enquireAbout } from "@/lib/australia/config";
import { CustomizeButton } from "./AustraliaFilterControls";

/** 4-Star / 5-Star / Boutique / Luxury Resort as accessible tabs; the choice can pre-fill the trip builder. */
export default function HotelCategories({ categories }: { categories: HotelCategory[] }) {
  const uid = useId();
  const [active, setActive] = useState(categories[1]?.id ?? categories[0].id);
  const refs = useRef<(HTMLButtonElement | null)[]>([]);
  const t = categories.find((x) => x.id === active) ?? categories[0];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const dir = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!dir) return;
    e.preventDefault();
    const next = (i + dir + categories.length) % categories.length;
    setActive(categories[next].id);
    refs.current[next]?.focus();
  };

  return (
    <div className="us-tiers">
      <p className="au-tiers__label"><BedDouble size={16} aria-hidden="true" /> Choose your hotel category</p>
      <div className="us-tiers__tabs" role="tablist" aria-label="Hotel category">
        {categories.map((x, i) => {
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
              <span className="us-tiers__label">{x.label}</span>
            </button>
          );
        })}
      </div>
      <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${t.id}`} className="us-tiers__panel">
        <AnimatePresence mode="wait" initial={false}>
          <motion.div key={t.id} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }} transition={{ duration: 0.25 }}>
            <p className="us-tiers__text">{t.text}</p>
            <ul className="us-tiers__list">
              {t.expect.map((x) => (
                <li key={x}><Check size={15} aria-hidden="true" /> {x}</li>
              ))}
            </ul>
            <div className="au-tiers__cta">
              <CustomizeButton title={`${t.label} hotels across Australia`} destinations={[]} hotel={t.label} className="pkg-btn asia-btn--gold">
                <SlidersHorizontal size={16} aria-hidden="true" /> Plan with {t.label} hotels
              </CustomizeButton>
              <a href={enquireAbout(`an Australia trip with ${t.label} hotels`)} target="_blank" rel="noopener noreferrer" className="pkg-btn asia-btn--glass">
                <MessageCircle size={16} aria-hidden="true" /> Ask on WhatsApp<span className="pkg-sr"> (opens WhatsApp)</span>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
