"use client";

import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { WHY_VISIT_CARDS } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./WhyVisit.css";

export default function WhyVisit() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-why-visit" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Why Shey Phoksundo" title="Why Visit Shey Phoksundo?" />

        <div className="phoksundo-why-visit__grid">
          {WHY_VISIT_CARDS.map((card) => (
            <article className="phoksundo-why-visit__card" key={card.id} data-reveal>
              <div className="phoksundo-why-visit__media">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="phoksundo-why-visit__image"
                />
              </div>
              <div className="phoksundo-why-visit__body">
                <h3 className="phoksundo-why-visit__title">{card.title}</h3>
                <p className="phoksundo-why-visit__description">{card.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
