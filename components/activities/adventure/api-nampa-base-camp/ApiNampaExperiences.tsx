import Image from "next/image";
import { EXPERIENCES } from "./data/content";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { Check } from "./shared/icons";
import "./ApiNampaExperiences.css";

export default function ApiNampaExperiences() {
  return (
    <section className="an-section an-exp" id="experiences" aria-labelledby="an-exp-title">
      <div className="an-container">
        <SectionHeading
          id="an-exp-title"
          eyebrow="The experience"
          title="Experiences That Make Api Nampa Extraordinary"
          intro="Seven ways the far west gets under your skin — from the silence of the trail to evenings by a village hearth."
          align="center"
        />

        <ol className="an-exp__list">
          {EXPERIENCES.map((exp, i) => (
            <li key={exp.id} className={`an-exp__row${i % 2 ? " an-exp__row--flip" : ""}`}>
              <Reveal className="an-exp__media">
                <Image
                  src={exp.image.src}
                  alt={exp.image.alt}
                  fill
                  sizes="(max-width: 860px) 100vw, 50vw"
                  className="an-exp__image"
                />
              </Reveal>
              <Reveal className="an-exp__text" delay={100}>
                <p className="an-exp__kicker">
                  <span aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                  {exp.kicker}
                </p>
                <h3 className="an-exp__title">{exp.title}</h3>
                <p className="an-exp__desc">{exp.description}</p>
                <ul className="an-exp__points">
                  {exp.points.map((pt) => (
                    <li key={pt}>
                      <Check />
                      {pt}
                    </li>
                  ))}
                </ul>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
