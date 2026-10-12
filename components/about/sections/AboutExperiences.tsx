import Link from "next/link";
import { experiences } from "@/lib/about/experiences";
import { artFor, resolveImage } from "@/lib/about/resolve";
import { AboutIcon } from "../shared/AboutIcon";
import { Pic } from "../shared/Pic";
import { SectionHeading } from "../shared/SectionHeading";
import "./about-experiences.css";

export function AboutExperiences() {
  return (
    <section className="ab-section ab-exp" aria-labelledby="about-exp-title">
      <div className="ab-container">
        <SectionHeading
          id="about-exp-title"
          eyebrow="What We Do"
          title="Travel Experiences We Create"
          sub="Fourteen ways to travel with Karvaahh. Every one of them is shaped around you."
        />

        <ul className="ab-exp__grid">
          {experiences.map((card, i) => (
            <li
              key={card.id}
              className={`ab-exp__cell ab-exp__cell--${card.span}`}
              data-reveal=""
              style={{ ["--d" as string]: i % 3 }}
            >
              <Link href={card.href} className="ab-exp__card">
                <span className="ab-exp__media ab-frame">
                  <Pic
                    image={resolveImage(card.imageKey)}
                    art={artFor(card.imageKey)}
                    sizes="(min-width: 1024px) 40vw, (min-width: 640px) 50vw, 100vw"
                  />
                </span>
                <span className="ab-exp__shade" aria-hidden="true" />
                <div className="ab-exp__body">
                  <span className="ab-exp__category">{card.category}</span>
                  <h3 className="ab-exp__title">{card.title}</h3>
                  <span className="ab-exp__text">{card.text}</span>
                  <span className="ab-exp__cta">
                    {card.cta}
                    <AboutIcon name="arrow" className="ab-exp__arrow" />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
