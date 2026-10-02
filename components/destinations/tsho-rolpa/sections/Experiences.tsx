"use client";

import { experiences, experiencesDisclaimer } from "@/data/tsho-rolpa/experiences";
import MediaFrame from "../shared/MediaFrame";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Experiences.css";

export default function Experiences() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-experiences tsho-section tsho-section--alt" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Things To Do"
          title="Experiences &amp; Activities"
          description="A quieter, high-altitude Himalayan itinerary — from lakeside photography to Sherpa cultural encounters."
        />

        <div className="tsho-experiences__grid">
          {experiences.map((item) => (
            <article key={item.id} className="tsho-experiences__card tsho-reveal">
              <MediaFrame src={item.image} alt={item.title} ratio="square" />
              <h3 className="tsho-experiences__title">{item.title}</h3>
              <p className="tsho-experiences__description">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="tsho-experiences__note tsho-reveal">{experiencesDisclaimer}</p>
      </div>
    </section>
  );
}
