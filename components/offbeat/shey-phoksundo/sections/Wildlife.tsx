"use client";

import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { WILDLIFE_ITEMS, CONSERVATION_MESSAGE } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Wildlife.css";

export default function Wildlife() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-wildlife" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Biodiversity" title="Wildlife & Biodiversity" />

        <div className="phoksundo-wildlife__grid">
          {WILDLIFE_ITEMS.map((item) => (
            <article className="phoksundo-wildlife__card" key={item.id} data-reveal>
              <div className="phoksundo-wildlife__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="phoksundo-wildlife__image"
                />
              </div>
              <h3 className="phoksundo-wildlife__title">{item.name}</h3>
              <p className="phoksundo-wildlife__description">{item.description}</p>
            </article>
          ))}
        </div>

        <div className="phoksundo-wildlife__conservation" data-reveal>
          <p>{CONSERVATION_MESSAGE}</p>
        </div>
      </div>
    </section>
  );
}
