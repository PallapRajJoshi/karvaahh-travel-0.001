import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { DESTINATIONS } from "./data/destinations";
import { HEADINGS } from "./data/copy";
import { ANCHORS, INQUIRY_ANCHOR } from "./data/site";
import "./AdventureDestinationGrid.css";

/**
 * Eight destinations. Each card states how the place is mainly explored
 * (road, road + walking, trekking-led) so trekking regions are never presented
 * as drive-up destinations.
 */
export default function AdventureDestinationGrid() {
  const h = HEADINGS.destinations;
  return (
    <section
      id={ANCHORS.destinations}
      className="rt-section"
      aria-labelledby="rt-destinations-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-destinations-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
        />

        <ul className="rt-dest">
          {DESTINATIONS.map((d, i) => (
            <Reveal as="li" key={d.id} index={i % 2} className="rt-dest__item">
              <article className="rt-card rt-dest__card">
                <div className="rt-card__media rt-dest__media">
                  <AdventureImage
                    image={d.image}
                    sizes="(min-width: 1100px) 560px, (min-width: 720px) 48vw, 100vw"
                  />
                  <span className="rt-badge rt-badge--gold rt-dest__access">{d.access}</span>
                </div>

                <div className="rt-card__body">
                  <h3 className="rt-card__title">{d.name}</h3>
                  <p className="rt-card__text">{d.intro}</p>

                  <ul className="rt-checklist" aria-label={`${d.name} highlights`}>
                    {d.highlights.map((item) => (
                      <li key={item}>
                        <Icon name="check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="rt-dest__types">
                    <span className="rt-dest__types-label">Suggested adventure types</span>
                    <ul className="rt-chips">
                      {d.adventureTypes.map((t) => (
                        <li key={t} className="rt-chip">
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {d.note ? (
                    <p className="rt-note">
                      <Icon name="alert" />
                      <span>{d.note}</span>
                    </p>
                  ) : null}

                  <PlanLink
                    href={INQUIRY_ANCHOR}
                    prefill={{ destination: d.name }}
                    className="rt-link rt-dest__cta"
                  >
                    <span>
                      Discover Destination
                      <span className="rt-sr-only">: {d.name}</span>
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
