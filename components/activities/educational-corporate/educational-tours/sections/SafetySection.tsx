import { LINKS, SAFETY } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { Icon } from "../shared/Icon";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./SafetySection.css";

export function SafetySection() {
  return (
    <section id="safety" className="et-section et-section--dark et-safety" aria-labelledby="et-safety-title">
      <div className="et-container">
        <SectionHeading eyebrow={SAFETY.eyebrow} title={SAFETY.title} lead={SAFETY.lead} id="et-safety-title" />

        <ul className="et-safety__grid">
          {SAFETY.items.map((item, i) => (
            <Reveal as="li" key={item.title} index={i % 4} className="et-safety__tile">
              <span className="et-safety__icon">
                <Icon name={item.icon} size={24} />
              </span>
              <h3 className="et-safety__title">{item.title}</h3>
              <p className="et-safety__text">{item.text}</p>
            </Reveal>
          ))}
          <Reveal as="li" index={3} className="et-safety__notice">
            <span className="et-safety__notice-icon">
              <Icon name="shield" size={26} />
            </span>
            <h3 className="et-safety__title">Important Notice</h3>
            <p className="et-safety__text">{SAFETY.notice}</p>
          </Reveal>
        </ul>

        <div className="et-cta-band">
          <CtaLink href={LINKS.inquiry} variant="primary">
            Discuss Your Institution’s Requirements
          </CtaLink>
        </div>
      </div>
    </section>
  );
}
