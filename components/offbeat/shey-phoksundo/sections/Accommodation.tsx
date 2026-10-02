"use client";

import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { ACCOMMODATION_OPTIONS, ACCOMMODATION_NOTE } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Accommodation.css";

export default function Accommodation() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-accommodation" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Where To Stay" title="Accommodation & Stay Options" />

        <div className="phoksundo-accommodation__grid">
          {ACCOMMODATION_OPTIONS.map((option) => (
            <article className="phoksundo-accommodation__card" key={option.id} data-reveal>
              <div className="phoksundo-accommodation__media">
                <Image
                  src={option.image}
                  alt={option.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 20vw"
                  className="phoksundo-accommodation__image"
                />
              </div>
              <h3 className="phoksundo-accommodation__title">{option.title}</h3>
              <p className="phoksundo-accommodation__description">{option.description}</p>
            </article>
          ))}
        </div>

        <p className="phoksundo-accommodation__note">{ACCOMMODATION_NOTE}</p>
      </div>
    </section>
  );
}
