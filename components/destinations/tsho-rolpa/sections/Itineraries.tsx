"use client";

import { itineraries } from "@/data/tsho-rolpa/itineraries";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Itineraries.css";

export default function Itineraries() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-itineraries tsho-section tsho-section--alt" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Sample Plans"
          title="Suggested Tsho Rolpa Itineraries"
          description="Customizable concepts — route conditions, altitude planning, transport, and local logistics require verification before booking."
        />

        <div className="tsho-itineraries__grid">
          {itineraries.map((itinerary) => (
            <article key={itinerary.id} className="tsho-itineraries__card tsho-reveal">
              <div className="tsho-itineraries__card-header">
                <span className="tsho-itineraries__duration">{itinerary.duration}</span>
                <h3 className="tsho-itineraries__title">{itinerary.label}</h3>
              </div>

              <ol className="tsho-itineraries__days">
                {itinerary.days.map((day) => (
                  <li key={day.day}>
                    <span className="tsho-itineraries__day-label">{day.day}</span>
                    <span className="tsho-itineraries__day-summary">{day.summary}</span>
                  </li>
                ))}
              </ol>

              <p className="tsho-itineraries__card-note">{itinerary.note}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
