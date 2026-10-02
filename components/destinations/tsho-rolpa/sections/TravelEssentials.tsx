"use client";

import {
  packingChecklist,
  permitDisclaimer,
  permitPoints,
  safetyDistinction,
  safetyPoints,
} from "@/data/tsho-rolpa/essentials";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./TravelEssentials.css";

/**
 * Combines brief Section 14's three subsections (packing checklist,
 * permits, high-altitude safety) into one component with three panels —
 * kept together since they're short and closely related, unlike the
 * larger sections that were split out on their own.
 */
export default function TravelEssentials() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-essentials tsho-section" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Before You Go"
          title="Travel Essentials, Permits & High-Altitude Safety"
        />

        <div className="tsho-essentials__grid">
          <div className="tsho-essentials__panel tsho-reveal">
            <h3 className="tsho-essentials__panel-title">Packing Checklist</h3>
            <ul className="tsho-essentials__list">
              {packingChecklist.map((item) => (
                <li key={item.id}>{item.label}</li>
              ))}
            </ul>
          </div>

          <div className="tsho-essentials__panel tsho-reveal">
            <h3 className="tsho-essentials__panel-title">Permits &amp; Regulations</h3>
            <ul className="tsho-essentials__list">
              {permitPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="tsho-essentials__disclaimer">{permitDisclaimer}</p>
          </div>

          <div className="tsho-essentials__panel tsho-reveal">
            <h3 className="tsho-essentials__panel-title">High-Altitude Safety</h3>
            <ul className="tsho-essentials__list">
              {safetyPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="tsho-essentials__disclaimer">{safetyDistinction}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
