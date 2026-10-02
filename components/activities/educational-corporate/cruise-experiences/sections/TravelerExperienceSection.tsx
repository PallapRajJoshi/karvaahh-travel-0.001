import Media from "../shared/Media";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import PrefillLink from "../shared/PrefillLink";
import { ArrowRight } from "../shared/Icons";
import { TRAVELERS } from "../data/planning";
import "./TravelerExperienceSection.css";

export default function TravelerExperienceSection() {
  return (
    <section className="cr-section cr-trav" aria-labelledby="cr-trav-title">
      <div className="cr-container">
        <SectionHeading
          id="cr-trav-title"
          eyebrow="For every traveler"
          title="Cruise Experiences for Every Traveler"
        />
        <ul className="cr-trav__grid">
          {TRAVELERS.map((t, i) => (
            <Reveal as="li" key={t.id} delay={i * 80}>
              <article className="cr-tcard">
                <div className="cr-tcard__media">
                  <Media image={t.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 280px" />
                </div>
                <div className="cr-tcard__body">
                  <h3>{t.title}</h3>
                  <p>{t.description}</p>
                  <PrefillLink prefill={{ purpose: t.purpose }} className="cr-tcard__cta">
                    {t.cta} <ArrowRight />
                  </PrefillLink>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
