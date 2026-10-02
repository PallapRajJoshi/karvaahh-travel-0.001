import Reveal from "../shared/Reveal";
import CtaLink from "../shared/CtaLink";
import CultureImage from "../shared/CultureImage";
import { FINAL_CTA, IDS } from "../data/page";
import "./CultureFinalCTA.css";

export default function CultureFinalCTA() {
  return (
    <section className="culture-final" aria-labelledby="culture-final-title">
      <div className="culture-final__media" aria-hidden="true">
        <CultureImage id="final-cta" sizes="100vw" decorative />
        <div className="culture-final__scrim" />
      </div>
      <div className="cx-container culture-final__inner">
        <Reveal className="culture-final__content">
          <h2 id="culture-final-title" className="culture-final__title">
            {FINAL_CTA.heading}
          </h2>
          <p className="culture-final__text">{FINAL_CTA.text}</p>
          <div className="culture-final__actions">
            <CtaLink anchor={`#${IDS.festivals}`} variant="gold">
              {FINAL_CTA.primary}
            </CtaLink>
            <CtaLink prefill={{ interest: "custom" }} variant="ghost-light">
              {FINAL_CTA.secondary}
            </CtaLink>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
