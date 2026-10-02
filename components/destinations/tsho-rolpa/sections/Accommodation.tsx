"use client";

import { accommodationNote, accommodationOptions } from "@/data/tsho-rolpa/accommodation";
import SectionHeading from "../shared/SectionHeading";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./Accommodation.css";

export default function Accommodation() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-stay tsho-section tsho-section--alt" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading eyebrow="Where To Stay" title="Accommodation & Stay Options" />

        <div className="tsho-stay__grid">
          {accommodationOptions.map((option) => (
            <article key={option.id} className="tsho-stay__card tsho-reveal">
              <h3 className="tsho-stay__title">{option.title}</h3>
              <p className="tsho-stay__description">{option.description}</p>
            </article>
          ))}
        </div>

        <p className="tsho-stay__note tsho-reveal">{accommodationNote}</p>
      </div>
    </section>
  );
}
