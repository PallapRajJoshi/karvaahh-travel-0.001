import type { CSSProperties } from "react";
import Image from "next/image";
import { sudurpaschimExperiences } from "@/data/sudurpaschim/experiences";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-experiences.css";

export default function SudurpaschimExperiences() {
  return (
    <section
      id="sp-experiences"
      className="sp-experiences"
      aria-labelledby="sp-experiences-heading"
    >
      <div className="sp-container sp-experiences__inner">
        <SudurpaschimSectionHeading
          id="sp-experiences-heading"
          index="03"
          eyebrow="Why Visit Sudurpaschim"
          heading="One province. A world waiting to be explored."
          align="left"
        />

        <ul className="sp-experiences__grid">
          {sudurpaschimExperiences.map((item, index) => (
            <li
              className="sp-exp-card"
              key={item.number}
              data-reveal
              style={{ "--d": index } as CSSProperties}
            >
              <div className="sp-exp-card__media">
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="sp-exp-card__image"
                />
                <span className="sp-exp-card__number">{item.number}</span>
              </div>
              <div className="sp-exp-card__body">
                <h3 className="sp-exp-card__title">{item.title}</h3>
                <p className="sp-exp-card__meta">{item.meta}</p>
                <p className="sp-exp-card__desc">{item.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
