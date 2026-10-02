import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import Parallax from "./Parallax";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import { FINAL_CTA } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventureFinalCTA.css";

/** Cinematic closing section on Deep Himalayan Blue with gold accents. */
export default function AdventureFinalCTA() {
  return (
    <section className="rt-final" aria-labelledby="rt-final-title">
      <div className="rt-final__bg">
        <Parallax strength={40}>
          <AdventureImage image={FINAL_CTA.image} sizes="100vw" />
        </Parallax>
        <div className="rt-final__shade" aria-hidden="true" />
      </div>

      <Reveal className="rt-container rt-final__inner">
        <span className="rt-final__rule" aria-hidden="true" />
        <h2 id="rt-final-title" className="rt-final__title">
          {FINAL_CTA.heading}
        </h2>
        <p className="rt-final__text">{FINAL_CTA.text}</p>
        <div className="rt-final__actions">
          <PlanLink href={`#${ANCHORS.categories}`} className="rt-btn">
            {FINAL_CTA.primary}
            <Icon name="arrow" />
          </PlanLink>
          <PlanLink className="rt-btn rt-btn--ghost">{FINAL_CTA.secondary}</PlanLink>
        </div>
      </Reveal>
    </section>
  );
}
