"use client";

import { useState } from "react";
import { accessNotes, accessRouteSummary, startingPoints } from "@/data/tsho-rolpa/access";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./HowToReach.css";

export default function HowToReach() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();
  const [activeStart, setActiveStart] = useState(startingPoints[0].id);

  return (
    <section className="tsho-access tsho-section" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Getting There"
          title="How to Reach Tsho Rolpa Lake"
          description="By road to the trailhead, then on foot through the Rolwaling Valley."
        />

        <div className="tsho-access__panel tsho-reveal">
          <h3 className="tsho-access__panel-title">By Road</h3>
          <p className="tsho-access__route">{accessRouteSummary}</p>

          <div className="tsho-access__selector" role="group" aria-label="Suggested starting points">
            {startingPoints.map((point) => (
              <button
                key={point.id}
                type="button"
                className={`tsho-access__chip ${
                  activeStart === point.id ? "tsho-access__chip--active" : ""
                }`}
                aria-pressed={activeStart === point.id}
                onClick={() => setActiveStart(point.id)}
              >
                {point.name}
              </button>
            ))}
          </div>

          <ul className="tsho-access__notes">
            {accessNotes.map((note) => (
              <li key={note}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
