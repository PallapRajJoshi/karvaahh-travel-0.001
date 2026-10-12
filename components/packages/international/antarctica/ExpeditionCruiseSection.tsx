"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Check, Info } from "lucide-react";
import { VESSEL_NOTE, cabinCategories, vesselExperience } from "@/data/antarctica/cruise";
import PolarIcon from "./PolarIcon";
import PolarMedia from "./PolarMedia";
import SectionHead from "./SectionHead";

/**
 * Life on an expedition ship (photo tiles + icon tiles) and the cabin
 * categories as tabs. Facilities are typical, never universal.
 */
export default function ExpeditionCruiseSection() {
  const uid = useId();
  const [cabin, setCabin] = useState(cabinCategories[0].id);
  const cur = cabinCategories.find((c) => c.id === cabin) ?? cabinCategories[0];
  const photo = vesselExperience.filter((v) => v.image);
  const icons = vesselExperience.filter((v) => !v.image);

  const onKey = (e: React.KeyboardEvent, i: number) => {
    const n = e.key === "ArrowRight" ? 1 : e.key === "ArrowLeft" ? -1 : 0;
    if (!n) return;
    e.preventDefault();
    const next = cabinCategories[(i + n + cabinCategories.length) % cabinCategories.length];
    setCabin(next.id);
    document.getElementById(`${uid}-${next.id}`)?.focus();
  };

  return (
    <section className="pkg-section an-cruise" id="expedition-cruise" aria-labelledby="cruise-h">
      <div className="pkg-container">
        <SectionHead
          id="cruise-h"
          eyebrow="The expedition cruise"
          title="Your Home in the Ice"
          lede="Antarctic expeditions are ship-based. Smaller, ice-strengthened vessels carry you between landing sites, while Zodiacs take you ashore and among the ice. Here is what life on board typically looks like."
        />

        <ul className="an-cruise__photos">
          {photo.map((v) => (
            <li key={v.id}>
              <figure className="an-cruise__tile">
                <PolarMedia id={v.image} decorative sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw" />
                <figcaption>
                  <strong>{v.title}</strong>
                  <span>{v.text}</span>
                </figcaption>
              </figure>
            </li>
          ))}
        </ul>
        <ul className="an-cruise__icons">
          {icons.map((v) => (
            <li key={v.id}>
              <span className="an-cruise__icon"><PolarIcon name={v.icon} /></span>
              <strong>{v.title}</strong>
              <span>{v.text}</span>
            </li>
          ))}
        </ul>
        <p className="an-note"><Info size={16} aria-hidden="true" /> {VESSEL_NOTE}</p>

        <div className="an-cabins">
          <h3 className="an-h3">Cabin categories</h3>
          <div className="an-cabins__tabs" role="tablist" aria-label="Cabin categories">
            {cabinCategories.map((c, i) => (
              <button
                key={c.id}
                id={`${uid}-${c.id}`}
                type="button"
                role="tab"
                aria-selected={c.id === cabin}
                aria-controls={`${uid}-panel`}
                tabIndex={c.id === cabin ? 0 : -1}
                className={c.id === cabin ? "is-active" : ""}
                onClick={() => setCabin(c.id)}
                onKeyDown={(e) => onKey(e, i)}
              >
                {c.name}
              </button>
            ))}
          </div>
          <div className="an-cabins__panel" id={`${uid}-panel`} role="tabpanel" aria-labelledby={`${uid}-${cur.id}`}>
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={cur.id} initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -16 }} transition={{ duration: 0.25 }}>
                <p className="an-cabins__summary">{cur.summary}</p>
                <p className="an-cabins__h">Typically may include</p>
                <ul className="an-checks">{cur.typical.map((t) => <li key={t}><Check size={15} aria-hidden="true" /> {t}</li>)}</ul>
                <p className="an-fine">Availability, layouts and inclusions depend on the vessel and departure.</p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
