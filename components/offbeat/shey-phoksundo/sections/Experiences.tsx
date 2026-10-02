"use client";

import Image from "next/image";
import SectionHeading from "../shared/SectionHeading";
import { EXPERIENCES, EXPERIENCES_NOTE } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Experiences.css";

export default function Experiences() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-experiences" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Things To Do" title="Experiences & Activities" />

        <div className="phoksundo-experiences__grid">
          {EXPERIENCES.map((item) => (
            <article className="phoksundo-experiences__card" key={item.id} data-reveal>
              <div className="phoksundo-experiences__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 25vw"
                  className="phoksundo-experiences__image"
                />
              </div>
              <h3 className="phoksundo-experiences__title">{item.title}</h3>
              <p className="phoksundo-experiences__description">{item.description}</p>
            </article>
          ))}
        </div>

        <p className="phoksundo-experiences__note">{EXPERIENCES_NOTE}</p>
      </div>
    </section>
  );
}
