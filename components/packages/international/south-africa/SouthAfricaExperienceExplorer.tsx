"use client";

import { useRef } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { saExperiences } from "@/data/south-africa/experiences";
import { styleById } from "@/data/south-africa/styles";
import { experienceMatches, useSAFilters } from "@/lib/south-africa/explorer";
import { ZaMedia } from "./ZaPrimitives";

/** Horizontal, image-first experience explorer. Follows the experience bar's styles. */
export default function SouthAfricaExperienceExplorer() {
  const f = useSAFilters();
  const track = useRef<HTMLUListElement>(null);
  const shown = saExperiences.filter((e) => experienceMatches(e, f));

  const scroll = (dir: 1 | -1) => {
    const el = track.current;
    if (!el) return;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollBy({ left: dir * el.clientWidth * 0.85, behavior: reduce ? "auto" : "smooth" });
  };

  return (
    <div className="za-xp">
      <div className="za-xp__bar">
        <p aria-live="polite">
          {f.styles.length ? (
            <><strong>{shown.length}</strong> experiences for {f.styles.map((s) => styleById(s)?.label).join(" + ")}</>
          ) : (
            <><strong>{shown.length}</strong> experiences</>
          )}
        </p>
        <div className="za-xp__nav">
          <button type="button" onClick={() => scroll(-1)} aria-label="Scroll experiences left"><ChevronLeft size={18} aria-hidden="true" /></button>
          <button type="button" onClick={() => scroll(1)} aria-label="Scroll experiences right"><ChevronRight size={18} aria-hidden="true" /></button>
        </div>
      </div>
      <motion.ul className="za-xp__track" ref={track} layout tabIndex={0} aria-label="Top South Africa experiences">
        <AnimatePresence initial={false}>
          {shown.map((e) => (
            <motion.li key={e.id} layout initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.96 }} transition={{ duration: 0.3 }}>
              <a href={`#${e.sectionId}`} className="za-xp__card">
                <ZaMedia id={e.image} label={e.title} decorative={!!e.image} sizes="(min-width: 1024px) 22vw, 70vw" />
                <span className="za-xp__body">
                  <span className="za-xp__where">{e.where}</span>
                  <strong>{e.title}</strong>
                  <span className="za-xp__text">{e.text}</span>
                  <span className="za-xp__go">Explore <ArrowRight size={14} aria-hidden="true" /></span>
                </span>
              </a>
            </motion.li>
          ))}
        </AnimatePresence>
      </motion.ul>
    </div>
  );
}
