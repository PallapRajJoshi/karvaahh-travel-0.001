import Image from "next/image";
import { EXPERIENCES } from "@/data/destinations/tsum-valley/content";
import SectionHeading from "./shared/SectionHeading";
import Reveal from "./shared/Reveal";
import "./TsumValleyExperiences.css";

export default function TsumValleyExperiences() {
  return (
    <section className="tsum-section tsum-exp" id="experiences" aria-labelledby="tsum-exp-title">
      <div className="tsum-container">
        <SectionHeading
          id="tsum-exp-title"
          eyebrow="Culture & spirit"
          title="Experience the Spiritual Heart of Tsum Valley"
          intro="Tsum’s monasteries and villages are places of living faith. These are the encounters that stay with travellers long after the trek."
          align="center"
        />

        <div className="tsum-exp__list">
          {EXPERIENCES.map((exp, i) => (
            <article
              key={exp.id}
              id={`exp-${exp.id}`}
              className={`tsum-exp__row${i % 2 ? " tsum-exp__row--flip" : ""}`}
              aria-labelledby={`exp-${exp.id}-title`}
            >
              <Reveal className="tsum-exp__media-wrap">
                <div className="tsum-media tsum-exp__media">
                  <Image src={exp.image.src} alt={exp.image.alt} fill sizes="(max-width: 900px) 100vw, 50vw" />
                </div>
              </Reveal>
              <Reveal className="tsum-exp__text" delay={120}>
                <p className="tsum-exp__index" aria-hidden="true">{String.fromCharCode(65 + i)}</p>
                <p className="tsum-exp__kicker">{exp.kicker}</p>
                <h3 className="tsum-exp__title" id={`exp-${exp.id}-title`}>{exp.title}</h3>
                {exp.body.map((para, j) => (
                  <p className="tsum-exp__para" key={j}>{para}</p>
                ))}
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
