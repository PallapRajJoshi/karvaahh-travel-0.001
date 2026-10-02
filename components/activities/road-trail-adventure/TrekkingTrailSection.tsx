import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { TRAIL_GROUPS } from "./data/trails";
import { HEADINGS } from "./data/copy";
import { ANCHORS, INQUIRY_ANCHOR } from "./data/site";
import "./TrekkingTrailSection.css";

/**
 * Trekking routes, deliberately separated from the road journeys above.
 * No difficulty or duration is shown until verified (see data/trails.ts).
 */
export default function TrekkingTrailSection() {
  const h = HEADINGS.trails;
  return (
    <section
      id={ANCHORS.trails}
      className="rt-section rt-section--dark rt-trails"
      aria-labelledby="rt-trails-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-trails-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
        />

        <ul className="rt-trails__grid">
          {TRAIL_GROUPS.map((g, i) => (
            <Reveal as="li" key={g.id} index={i % 2} className="rt-trails__item">
              <article className="rt-trails__card">
                <div className="rt-trails__media">
                  <AdventureImage
                    image={g.image}
                    sizes="(min-width: 900px) 46vw, 100vw"
                  />
                  <div className="rt-trails__shade" aria-hidden="true" />
                  <span className="rt-badge rt-badge--gold rt-trails__tag">
                    <Icon name="trek" />
                    Trekking route
                  </span>
                </div>

                <div className="rt-trails__body">
                  <h3 className="rt-trails__title">{g.region}</h3>
                  <p className="rt-trails__intro">{g.intro}</p>
                  <ul className="rt-checklist" aria-label={`${g.region} trails`}>
                    {g.trails.map((t) => (
                      <li key={t}>
                        <Icon name="check" />
                        <span>{t}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </ul>

        <Reveal className="rt-trails__foot">
          <p className="rt-trails__caution">
            <Icon name="alert" />
            <span>
              Trail status, seasonal access and suitability are checked against current conditions
              before any trek is planned. We do not assume a trail is open.
            </span>
          </p>
          <PlanLink
            href={INQUIRY_ANCHOR}
            prefill={{ adventureType: "Trekking & Hiking" }}
            className="rt-btn"
          >
            {h.cta}
            <Icon name="arrow" />
          </PlanLink>
        </Reveal>
      </div>
    </section>
  );
}
