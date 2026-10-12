"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { penguinCategories } from "@/data/antarctica/experiences";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/** Immersive penguin section: tabbed experience categories over a full-bleed photo. */
export default function PenguinExperience() {
  const uid = useId();
  const [active, setActive] = useState(penguinCategories[0].id);
  const cur = penguinCategories.find((c) => c.id === active) ?? penguinCategories[0];

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!n) return;
    e.preventDefault();
    const next = penguinCategories[(i + n + penguinCategories.length) % penguinCategories.length];
    setActive(next.id);
    document.getElementById(`${uid}-tab-${next.id}`)?.focus();
  };

  return (
    <section className="an-penguins" id="penguins" aria-labelledby="penguins-h">
      <AnimatePresence initial={false}>
        <motion.div key={cur.id} className="an-penguins__bg" initial={{ opacity: 0, scale: 1.04 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
          <PolarMedia id={cur.image} sizes="100vw" />
        </motion.div>
      </AnimatePresence>
      <div className="an-penguins__scrim" aria-hidden="true" />
      <div className="pkg-container an-penguins__inner">
        <SectionHead
          id="penguins-h"
          light
          eyebrow="The penguin experience"
          title="A Front-Row Seat to Penguin Life"
          lede="Gentoo, Adélie and chinstrap penguins on the Peninsula, kings on South Georgia. Observed responsibly, at permitted sites, from a respectful distance. Exact species and numbers can never be promised."
        />
        <div className="an-penguins__tabs" role="tablist" aria-label="Penguin experiences">
          {penguinCategories.map((c, i) => (
            <button
              key={c.id}
              id={`${uid}-tab-${c.id}`}
              type="button"
              role="tab"
              aria-selected={c.id === active}
              aria-controls={`${uid}-panel`}
              tabIndex={c.id === active ? 0 : -1}
              className={c.id === active ? "is-active" : ""}
              onClick={() => setActive(c.id)}
              onKeyDown={(e) => onKey(e, i)}
            >
              {c.label}
            </button>
          ))}
        </div>
        <div id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-tab-${cur.id}`} className="an-penguins__panel" aria-live="polite">
          <h3>{cur.title}</h3>
          <p>{cur.text}</p>
        </div>
      </div>
    </section>
  );
}
