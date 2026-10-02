import CultureImage from "../shared/CultureImage";
import Reveal from "../shared/Reveal";
import CtaLink from "../shared/CtaLink";
import Icon from "../shared/Icons";
import SectionHeading from "../shared/SectionHeading";
import { EXPERIENCES, EXPERIENCES_HEADING, EXPERIENCES_LEDE, EXPERIENCES_NOTE } from "../data/experiences";
import { IDS } from "../data/page";
import "./CulturalExperiences.css";

export default function CulturalExperiences() {
  return (
    <section id={IDS.experiences} className="culture-exp" aria-labelledby="culture-exp-title">
      <div className="cx-container">
        <Reveal>
          <SectionHeading id="culture-exp-title" title={EXPERIENCES_HEADING} lede={EXPERIENCES_LEDE} align="center" />
        </Reveal>

        <ul className="culture-exp__grid">
          {EXPERIENCES.map((e, i) => (
            <Reveal as="li" key={e.id} delay={(i % 4) * 80} className="exp-card">
              <article className="exp-card__inner">
                <div className="exp-card__media">
                  <CultureImage id={e.media} sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 25vw" />
                  <span className="exp-card__icon">
                    <Icon name={e.icon} />
                  </span>
                </div>
                <div className="exp-card__body">
                  <h3 className="exp-card__title">{e.title}</h3>
                  <p className="exp-card__desc">{e.description}</p>
                  <CtaLink variant="text" href={e.href} prefill={e.prefill} ariaLabel={`Learn more: ${e.title}`}>
                    Learn More
                  </CtaLink>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <p className="culture-exp__note">{EXPERIENCES_NOTE}</p>
      </div>
    </section>
  );
}
