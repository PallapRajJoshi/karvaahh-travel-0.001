import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ITINERARIES } from "./data/itineraries";
import { HEADINGS } from "./data/copy";
import { ANCHORS, INQUIRY_ANCHOR } from "./data/site";
import "./AdventureItineraries.css";

/**
 * Three SAMPLE itineraries. Stops are a possible flow, not day allocations,
 * because unverified travel times must not be implied.
 */
export default function AdventureItineraries() {
  const h = HEADINGS.itineraries;
  return (
    <section
      id={ANCHORS.itineraries}
      className="rt-section"
      aria-labelledby="rt-itineraries-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-itineraries-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
        />

        <ul className="rt-itin">
          {ITINERARIES.map((it, i) => (
            <Reveal as="li" key={it.id} index={i} className="rt-itin__item">
              <article className="rt-card rt-itin__card">
                <div className="rt-card__media rt-itin__media">
                  <AdventureImage
                    image={it.image}
                    sizes="(min-width: 1100px) 380px, (min-width: 720px) 50vw, 100vw"
                  />
                  <span className="rt-badge rt-badge--gold rt-itin__badge">{h.badge}</span>
                </div>

                <div className="rt-card__body">
                  <h3 className="rt-card__title">{it.title}</h3>

                  <dl className="rt-itin__meta">
                    <div>
                      <dt>Suggested duration</dt>
                      <dd>{it.duration}</dd>
                    </div>
                    <div>
                      <dt>Adventure type</dt>
                      <dd>{it.adventureType}</dd>
                    </div>
                  </dl>

                  <div>
                    <p className="rt-itin__flow-label">Possible flow</p>
                    <ol className="rt-itin__flow">
                      {it.highlights.map((step) => (
                        <li key={step}>{step}</li>
                      ))}
                    </ol>
                  </div>

                  <p className="rt-itin__note">
                    Sample concept only. Day-by-day timing is confirmed when we plan your journey.
                  </p>

                  <PlanLink
                    href={INQUIRY_ANCHOR}
                    prefill={it.prefill}
                    className="rt-btn rt-btn--outline rt-btn--sm rt-itin__cta"
                  >
                    <span>
                      Customize This Journey
                      <span className="rt-sr-only">: {it.title}</span>
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
