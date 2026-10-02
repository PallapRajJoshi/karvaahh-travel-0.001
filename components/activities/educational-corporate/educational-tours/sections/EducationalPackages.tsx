import { LINKS, PACKAGES, PACKAGES_SECTION } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { MediaFrame } from "../shared/MediaFrame";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./EducationalPackages.css";

export function EducationalPackages() {
  return (
    <section id="packages" className="et-section et-section--white" aria-labelledby="et-pack-title">
      <div className="et-container">
        <SectionHeading eyebrow={PACKAGES_SECTION.eyebrow} title={PACKAGES_SECTION.title} lead={PACKAGES_SECTION.quote} id="et-pack-title" />
        <ul className="et-pack__grid">
          {PACKAGES.map((p, i) => (
            <Reveal as="li" key={p.title} index={i % 3} className="et-pack__card">
              <div className="et-pack__media">
                <MediaFrame mediaKey={p.media} showCaption={false} sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw" />
              </div>
              <div className="et-pack__body">
                <h3 className="et-pack__title">{p.title}</h3>
                <p className="et-pack__dest">{p.destinations.join(" • ")}</p>
                <dl className="et-pack__facts">
                  <div>
                    <dt>Learning focus</dt>
                    <dd>{p.focus}</dd>
                  </div>
                  <div>
                    <dt>Suggested age group</dt>
                    <dd>{p.age}</dd>
                  </div>
                  <div>
                    <dt>Key activities</dt>
                    <dd>{p.activities.join(" · ")}</dd>
                  </div>
                  <div>
                    <dt>Duration &amp; pricing</dt>
                    <dd>Customized — subject to confirmation</dd>
                  </div>
                </dl>
                <CtaLink href={LINKS.inquiry} variant="outline" className="et-pack__cta">
                  Request Institutional Proposal
                </CtaLink>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
