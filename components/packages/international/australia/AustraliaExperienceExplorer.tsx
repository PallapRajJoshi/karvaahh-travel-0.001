"use client";

import { ArrowRight, RotateCcw } from "lucide-react";
import { australiaExperiences, type AustraliaExperience } from "@/data/australia/experiences";
import { australiaImage } from "@/data/australia/images";
import { auFiltering, experienceMatches, resetAUFilters, scrollToId, setAUFilter, useAUFilters } from "@/lib/australia/explorer";
import Carousel from "../../Carousel";
import DestMedia from "../asia/DestMedia";

const TONES: [string, string][] = [
  ["#0b2530", "#2f6f8f"],
  ["#063b44", "#1e9b98"],
  ["#3a1a0f", "#b4532a"],
  ["#14281f", "#4e7a5c"],
];

/**
 * Horizontal experience carousel (scroll-snap, swipe, arrow buttons). Follows
 * the page's region and travel-style filters. On hover devices a card widens
 * and reveals its text; "See packages" applies the card's filter.
 */
export default function AustraliaExperienceExplorer() {
  const s = useAUFilters();
  const matched = australiaExperiences.filter((e) => experienceMatches(e, s));
  // Never leave the carousel empty: fall back to everything with a note.
  const list = matched.length ? matched : australiaExperiences;

  const go = (f: AustraliaExperience["filter"]) => {
    resetAUFilters();
    setAUFilter({
      ...(f.destination ? { destination: f.destination } : {}),
      ...(f.style ? { styles: [f.style] } : {}),
    });
    scrollToId("packages");
  };

  return (
    <div className="us-exp">
      {auFiltering(s) && (
        <p className="au-exp__status" aria-live="polite">
          {matched.length
            ? <>Showing <strong>{matched.length}</strong> of {australiaExperiences.length} experiences for your filters.</>
            : <>No experiences match these filters, so here is everything.</>}{" "}
          <button type="button" className="pkg-btn pkg-btn--text" onClick={resetAUFilters}>
            <RotateCcw size={14} aria-hidden="true" /> Show all
          </button>
        </p>
      )}
      <Carousel key={list.map((e) => e.id).join()} label="Top Australia experiences" tone="light">
        {list.map((e, i) => (
          <article key={e.id} className="us-xcard" aria-labelledby={`xp-${e.id}`}>
            <DestMedia image={australiaImage(e.image)} label={e.title} tone={TONES[i % TONES.length]} sizes="(min-width: 1024px) 360px, 80vw" className="us-xcard__media" />
            <span className="us-xcard__shade" aria-hidden="true" />
            <div className="us-xcard__body">
              <p className="us-xcard__place">{e.place}</p>
              <h3 id={`xp-${e.id}`} className="us-xcard__title">{e.title}</h3>
              <p className="us-xcard__text">{e.text}</p>
              <button type="button" className="us-xcard__go" onClick={() => go(e.filter)}>
                See packages <ArrowRight size={15} aria-hidden="true" /><span className="pkg-sr"> for {e.title}</span>
              </button>
            </div>
          </article>
        ))}
      </Carousel>
    </div>
  );
}
