"use client";

import { whyVisitCards } from "@/data/tsho-rolpa/why-visit";
import SectionHeading from "../shared/SectionHeading";
import TshoIcon from "../shared/TshoIcon";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./WhyVisit.css";

export default function WhyVisit() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section className="tsho-why-visit tsho-section tsho-section--alt" ref={containerRef}>
      <div className="tsho-container">
        <SectionHeading
          eyebrow="Why Tsho Rolpa"
          title="Why Visit Tsho Rolpa Lake?"
          description="A remote glacial lake and its valley, offering something distinct from Nepal's more heavily trekked routes."
        />

        <div className="tsho-why-visit__grid">
          {whyVisitCards.map((card, index) => (
            <article
              key={card.id}
              className="tsho-why-visit__card tsho-reveal"
              style={{ transitionDelay: `${(index % 4) * 70}ms` }}
            >
              <span className="tsho-why-visit__icon">
                <TshoIcon name={card.icon} />
              </span>
              <h3 className="tsho-why-visit__title">{card.title}</h3>
              <p className="tsho-why-visit__description">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
