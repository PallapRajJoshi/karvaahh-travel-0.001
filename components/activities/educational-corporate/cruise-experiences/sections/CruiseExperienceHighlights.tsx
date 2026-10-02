import Media from "../shared/Media";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { EXPERIENCE_ICONS } from "../shared/Icons";
import { EXPERIENCES, SIGNATURE_IMAGE } from "../data/content";
import "./CruiseExperienceHighlights.css";

export default function CruiseExperienceHighlights() {
  return (
    <section className="cr-section cr-section--dark cr-sig" aria-labelledby="cr-sig-title">
      <div className="cr-container">
        <SectionHeading
          id="cr-sig-title"
          tone="dark"
          eyebrow="Signature experiences"
          title="What Makes a Cruise Special?"
          lead="What you experience on board depends on the vessel, route and operator."
        />
        <div className="cr-sig__layout">
          <Reveal className="cr-sig__media">
            <Media image={SIGNATURE_IMAGE} sizes="(max-width: 900px) 100vw, 440px" />
          </Reveal>
          <ul className="cr-sig__grid">
            {EXPERIENCES.map((e, i) => {
              const Icon = EXPERIENCE_ICONS[e.icon];
              return (
                <Reveal as="li" key={e.id} delay={(i % 2) * 90} className="cr-sig__card">
                  <span className="cr-sig__icon">
                    <Icon />
                  </span>
                  <h3>{e.title}</h3>
                  <p>{e.description}</p>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
