"use client";

import { seasons, seasonsDisclaimer } from "@/data/tsho-rolpa/seasons";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./BestTimeToVisit.css";

export default function BestTimeToVisit() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-seasons tsho-section tsho-section--alt" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Plan Ahead"
          title="Best Time to Visit Tsho Rolpa"
        />

        <div className="tsho-seasons__grid">
          {seasons.map((season) => (
            <article key={season.id} className="tsho-seasons__card tsho-reveal">
              <h3 className="tsho-seasons__title">{season.season}</h3>
              <p className="tsho-seasons__months">{season.months}</p>
              <ul className="tsho-seasons__points">
                {season.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="tsho-seasons__note tsho-reveal">{seasonsDisclaimer}</p>
      </div>
    </section>
  );
}
