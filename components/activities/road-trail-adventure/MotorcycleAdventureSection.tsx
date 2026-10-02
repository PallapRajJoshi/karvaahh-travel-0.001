import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { RIDE_EXPERIENCES } from "./data/ride";
import { HEADINGS } from "./data/copy";
import { ANCHORS, INQUIRY_ANCHOR } from "./data/site";
import "./MotorcycleAdventureSection.css";

/** Motorcycle + mountain biking as split-screen editorial rows. */
export default function MotorcycleAdventureSection() {
  const h = HEADINGS.ride;
  return (
    <section id={ANCHORS.ride} className="rt-section" aria-labelledby="rt-ride-title">
      <div className="rt-container">
        <SectionHeading id="rt-ride-title" eyebrow={h.eyebrow} title={h.title} />

        <div className="rt-ride">
          {RIDE_EXPERIENCES.map((r, i) => (
            <article
              key={r.id}
              className={`rt-ride__row${i % 2 === 1 ? " rt-ride__row--flip" : ""}`}
            >
              <Reveal className="rt-ride__media">
                <AdventureImage
                  image={r.image}
                  sizes="(min-width: 900px) 52vw, 100vw"
                />
                <span className="rt-badge rt-badge--gold rt-ride__tag">
                  <Icon name={r.id === "motorcycle" ? "motorcycle" : "bike"} />
                  {r.title}
                </span>
              </Reveal>

              <Reveal index={1} className="rt-ride__copy">
                <h3 className="rt-ride__title">{r.title}</h3>
                <p className="rt-ride__intro">{r.intro}</p>
                <ul className="rt-checklist" aria-label={`${r.title} highlights`}>
                  {r.highlights.map((item) => (
                    <li key={item}>
                      <Icon name="check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <PlanLink
                  href={INQUIRY_ANCHOR}
                  prefill={r.prefill}
                  className="rt-btn rt-ride__cta"
                >
                  {r.ctaLabel}
                  <Icon name="arrow" />
                </PlanLink>
              </Reveal>
            </article>
          ))}
        </div>

        <Reveal>
          <p className="rt-note rt-ride__safety">
            <Icon name="shield" />
            <span>{h.safety}</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}
