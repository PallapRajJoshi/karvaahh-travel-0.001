import { CONFIDENCE } from "../data/content";
import { LINKS } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { Icon } from "../shared/Icon";
import { MediaFrame } from "../shared/MediaFrame";
import { Reveal } from "../shared/Reveal";
import "./ConfidenceSection.css";

export function ConfidenceSection() {
  return (
    <section id="confidence" className="et-section" aria-labelledby="et-conf-title">
      <div className="et-container et-conf__grid">
        <Reveal variant="clip" className="et-conf__media">
          <MediaFrame mediaKey="group-activity" showCaption sizes="(min-width: 900px) 40vw, 100vw" />
        </Reveal>
        <div>
          <Reveal>
            <p className="et-heading__eyebrow">{CONFIDENCE.eyebrow}</p>
            <h2 id="et-conf-title" className="et-heading__title">
              {CONFIDENCE.title}
            </h2>
          </Reveal>
          <ul className="et-conf__list">
            {CONFIDENCE.points.map((p, i) => (
              <Reveal as="li" key={p} index={i % 5} className="et-conf__item">
                <span className="et-conf__check">
                  <Icon name="check" size={16} />
                </span>
                {p}
              </Reveal>
            ))}
          </ul>
          <p className="et-note">{CONFIDENCE.note}</p>
          <div className="et-conf__cta">
            <CtaLink href={LINKS.inquiry} variant="dark">
              Request Institutional Proposal
            </CtaLink>
          </div>
        </div>
      </div>
    </section>
  );
}
