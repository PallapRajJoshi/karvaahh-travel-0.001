"use client";

import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Clock, MapPin } from "lucide-react";
import { countryById } from "@/data/europe/countries";
import { activeExperiences, experienceCategories, type EuropeExperience, type ExperienceCategory } from "@/data/europe/experiences";
import { regionById } from "@/data/europe/regions";
import DestMedia from "../asia/DestMedia";
import Flag from "../asia/Flag";

const COLLAPSED = 8;

function ExperienceCard({ e }: { e: EuropeExperience }) {
  const c = countryById(e.country);
  return (
    <article className="eu-xcard">
      <div className="eu-xcard__media">
        <DestMedia
          image={e.image}
          iso={c?.iso ?? "eu"}
          label={e.title}
          tone={c ? regionById(c.region).tone : ["#0a1f33", "#1d5a8f"]}
          sizes="(min-width: 1200px) 300px, (min-width: 640px) 45vw, 90vw"
        />
      </div>
      <div className="eu-xcard__body">
        <p className="eu-xcard__place">
          {c && <Flag iso={c.iso} size={16} />}
          <MapPin size={12} aria-hidden="true" /> {e.place}
        </p>
        <h3 className="eu-xcard__title">{e.title}</h3>
        <p className="eu-xcard__text">{e.text}</p>
        {e.note && (
          <p className="eu-xcard__note"><Clock size={12} aria-hidden="true" /> {e.note}</p>
        )}
      </div>
    </article>
  );
}

export default function ExperienceSection() {
  const [cat, setCat] = useState<ExperienceCategory | "all">("all");
  const [all, setAll] = useState(false);

  const list = useMemo(() => activeExperiences.filter((e) => cat === "all" || e.categories.includes(cat)), [cat]);
  const shown = all || cat !== "all" ? list : list.slice(0, COLLAPSED);

  return (
    <section className="pkg-section eu-experiences" id="experiences" aria-labelledby="experiences-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow">Signature moments</p>
          <h2 id="experiences-h" className="pkg-h2">Top Europe Experiences</h2>
          <p className="pkg-lede">The moments people plan whole trips around. Add any of them to your itinerary.</p>
        </div>

        <div className="asia-styles eu-xcats" role="group" aria-label="Filter experiences by category">
          <ul className="asia-styles__row">
            {[{ id: "all" as const, label: "All Experiences" }, ...experienceCategories].map((o) => {
              const active = cat === o.id;
              return (
                <li key={o.id}>
                  <button type="button" className={`asia-chip${active ? " is-active" : ""}`} aria-pressed={active} onClick={() => setCat(o.id)}>
                    {active && (
                      <motion.span layoutId="eu-exp-pill" className="asia-chip__bg" transition={{ type: "spring", stiffness: 420, damping: 34 }} />
                    )}
                    <span className="asia-chip__text">{o.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>

        <p className="pkg-sr" aria-live="polite">{list.length} experiences shown</p>

        <motion.ul layout className="eu-xgrid">
          <AnimatePresence mode="popLayout" initial={false}>
            {shown.map((e, i) => (
              <motion.li
                key={e.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, delay: Math.min(i, 8) * 0.03 }}
              >
                <ExperienceCard e={e} />
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>

        {cat === "all" && list.length > COLLAPSED && (
          <button type="button" className="asia-more" aria-expanded={all} onClick={() => setAll((v) => !v)}>
            {all ? "Show fewer" : `Show all ${list.length} experiences`}
            <ChevronDown size={18} aria-hidden="true" className={all ? "is-flipped" : ""} />
          </button>
        )}
      </div>
    </section>
  );
}
