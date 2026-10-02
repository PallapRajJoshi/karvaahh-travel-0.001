import { FINAL, LINKS, PAGE } from "../data/content";
import { CtaLink } from "../shared/CtaLink";
import { MediaFrame } from "../shared/MediaFrame";
import { Reveal } from "../shared/Reveal";
import "./FinalCTA.css";

export function FinalCTA() {
  return (
    <section id="start" className="et-final" aria-labelledby="et-final-title">
      <div className="et-final__bg" aria-hidden="true">
        <MediaFrame mediaKey="final-cta" showCaption={false} sizes="100vw" />
      </div>
      <div className="et-final__scrim" aria-hidden="true" />
      <div className="et-container et-final__inner">
        <Reveal>
          <h2 id="et-final-title" className="et-final__title">
            {FINAL.title}
          </h2>
          <p className="et-final__text">{FINAL.text}</p>
          <p className="et-final__message">{FINAL.message}</p>
        </Reveal>
        <Reveal index={1} className="et-cta-row et-final__cta">
          <CtaLink href={LINKS.inquiry} variant="primary">
            Plan an Educational Tour
          </CtaLink>
          <CtaLink href={LINKS.inquiry} variant="ghost">
            Request a Custom Proposal
          </CtaLink>
          <CtaLink href={LINKS.contact} variant="text" arrow={false}>
            Contact Karvaahh
          </CtaLink>
        </Reveal>
        <p className="et-final__brand">{PAGE.tagline}</p>
      </div>
    </section>
  );
}
