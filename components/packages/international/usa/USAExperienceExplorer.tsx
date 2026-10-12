"use client";

import { ArrowRight } from "lucide-react";
import { usaExperiences } from "@/data/usa/experiences";
import { usaImage } from "@/data/usa/images";
import { resetUSAFilters, scrollToId, setUSAFilter } from "@/lib/usa/explorer";
import Carousel from "../../Carousel";
import DestMedia from "../asia/DestMedia";

const TONES: [string, string][] = [
  ["#0e1a33", "#8c2a35"],
  ["#13324a", "#d07a3a"],
  ["#073b4c", "#1fa39a"],
  ["#1b2f2a", "#5b8a6a"],
];

/**
 * Horizontal experience carousel (scroll-snap, swipe, arrow buttons). On hover
 * devices a card widens and reveals its text; "See packages" applies the
 * card's filter to the package grid.
 */
export default function USAExperienceExplorer() {
  const go = (f: (typeof usaExperiences)[number]["filter"]) => {
    resetUSAFilters();
    setUSAFilter({
      ...(f.region ? { region: f.region } : {}),
      ...(f.destination ? { destination: f.destination } : {}),
      ...(f.style ? { styles: [f.style] } : {}),
    });
    scrollToId("packages");
  };

  return (
    <div className="us-exp">
      <Carousel label="Top USA experiences" tone="light">
        {usaExperiences.map((e, i) => (
          <article key={e.id} className="us-xcard" aria-labelledby={`xp-${e.id}`}>
            <DestMedia image={usaImage(e.image)} label={e.title} tone={TONES[i % TONES.length]} sizes="(min-width: 1024px) 360px, 80vw" className="us-xcard__media" />
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
