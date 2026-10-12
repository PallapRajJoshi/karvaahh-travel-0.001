"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, Check, RotateCcw } from "lucide-react";
import { SIGHTINGS_NOTE, safariDestinations, safariFilters, type SafariFilter } from "@/data/south-africa/safari";
import { scrollToId, setSAFilter } from "@/lib/south-africa/explorer";
import { ZaHead, ZaMedia } from "./ZaPrimitives";

/**
 * Side-by-side safari comparison with multi-select filters (every selected
 * filter must apply). Selecting "View packages" scopes the package grid.
 */
export default function SafariExperienceExplorer() {
  const [on, setOn] = useState<SafariFilter[]>([]);
  const shown = safariDestinations.filter((s) => s.active && on.every((t) => s.tags.includes(t)));
  const toggle = (t: SafariFilter) => setOn((v) => (v.includes(t) ? v.filter((x) => x !== t) : [...v, t]));

  return (
    <section className="pkg-section za-safari" id="safari" aria-labelledby="safari-h">
      <div className="za-safari__bg" aria-hidden="true"><ZaMedia id="savanna-sunrise" decorative sizes="100vw" /></div>
      <div className="pkg-container">
        <ZaHead
          id="safari-h"
          light
          eyebrow="Safari experience explorer"
          title="Choose Your Safari"
          lede="Kruger's vast bushveld, Sabi Sand's private lodges, malaria-free Pilanesberg and Addo, or the remote Kalahari. Compare them and pick what fits your trip."
        />
        <div className="za-chiprow" role="group" aria-label="Filter safari destinations">
          {safariFilters.map((t) => {
            const active = on.includes(t.id);
            return (
              <button key={t.id} type="button" className={`za-chip za-chip--dark${active ? " is-active" : ""}`} aria-pressed={active} onClick={() => toggle(t.id)}>
                {active && <Check size={14} aria-hidden="true" />} {t.label}
              </button>
            );
          })}
          {on.length > 0 && (
            <button type="button" className="pkg-btn pkg-btn--text za-text-light" onClick={() => setOn([])}>
              <RotateCcw size={14} aria-hidden="true" /> Reset
            </button>
          )}
        </div>
        <p className="za-count za-count--light" aria-live="polite"><strong>{shown.length}</strong> safari destination{shown.length === 1 ? "" : "s"} match</p>

        <motion.ul className="za-safari__grid" layout>
          <AnimatePresence initial={false}>
            {shown.map((s) => (
              <motion.li key={s.id} layout initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.35 }}>
                <article className="za-safari__card" aria-labelledby={`saf-${s.id}`}>
                  <div className="za-safari__media">
                    <ZaMedia id={s.image} sizes="(min-width: 1100px) 30vw, (min-width: 640px) 50vw, 86vw" />
                    <span className="za-safari__region">{s.region}</span>
                  </div>
                  <div className="za-safari__body">
                    <h3 id={`saf-${s.id}`}>{s.name}</h3>
                    <dl>
                      <div><dt>Safari type</dt><dd>{s.safariType}</dd></div>
                      <div><dt>Accommodation</dt><dd>{s.accommodation}</dd></div>
                      <div><dt>Game drives</dt><dd>{s.gameDrives}</dd></div>
                      <div><dt>Wildlife focus</dt><dd>{s.wildlifeFocus}</dd></div>
                      <div><dt>Suggested stay</dt><dd>{s.duration}</dd></div>
                      <div><dt>Malaria</dt><dd>{s.malaria}</dd></div>
                    </dl>
                    <div className="za-safari__actions">
                      <a href={`#${s.sectionId}`} className="pkg-btn pkg-btn--text za-text-light">Explore <ArrowRight size={15} className="pkg-arrow" aria-hidden="true" /></a>
                      <button
                        type="button"
                        className="pkg-btn za-btn--gold"
                        onClick={() => {
                          setSAFilter({ destination: s.destinationId });
                          scrollToId("packages");
                        }}
                      >
                        View packages
                      </button>
                    </div>
                  </div>
                </article>
              </motion.li>
            ))}
          </AnimatePresence>
        </motion.ul>
        <p className="za-note za-note--light za-note--center">{SIGHTINGS_NOTE}</p>
      </div>
    </section>
  );
}
