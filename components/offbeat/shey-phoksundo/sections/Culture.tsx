"use client";

import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { CULTURE_ITEMS } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Culture.css";

export default function Culture() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-culture" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading
          eyebrow="Heritage"
          title="Culture & Spiritual Heritage"
          description="Dolpo's distinctive traditions blend Tibetan Buddhist and Bon Buddhist heritage across its monasteries and mountain settlements."
        />

        <div className="phoksundo-culture__grid">
          {CULTURE_ITEMS.map((item) => (
            <article className="phoksundo-culture__card" key={item.id} data-reveal>
              <div className="phoksundo-culture__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="phoksundo-culture__image"
                />
              </div>
              <div className="phoksundo-culture__body">
                <h3 className="phoksundo-culture__title">{item.title}</h3>
                <p className="phoksundo-culture__description">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
