import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TRAVEL_STYLES } from "./data/travelStyles";
import { HEADINGS } from "./data/copy";
import { ANCHORS } from "./data/site";
import "./AdventureTravelStyles.css";

/** Five travel-style cards. Nothing here is labelled beginner- or family-friendly. */
export default function AdventureTravelStyles() {
  const h = HEADINGS.styles;
  return (
    <section
      id={ANCHORS.styles}
      className="rt-section rt-section--alt"
      aria-labelledby="rt-styles-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-styles-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
          align="center"
        />

        <ul className="rt-styles">
          {TRAVEL_STYLES.map((s, i) => (
            <Reveal as="li" key={s.id} index={i % 3} className="rt-styles__item">
              <article className="rt-card rt-styles__card">
                <div className="rt-card__media rt-styles__media">
                  <AdventureImage
                    image={s.image}
                    sizes="(min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"
                  />
                  <span className="rt-styles__icon">
                    <Icon name={s.icon} />
                  </span>
                </div>
                <div className="rt-card__body">
                  <h3 className="rt-card__title">{s.title}</h3>
                  <p className="rt-card__text">{s.description}</p>
                  <PlanLink
                    href={s.cta.href}
                    prefill={s.cta.prefill}
                    className="rt-link rt-styles__cta"
                  >
                    <span>
                      {s.cta.label}
                      <span className="rt-sr-only">: {s.title}</span>
                    </span>
                    <Icon name="arrow" />
                  </PlanLink>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
