import Media from "../shared/Media";
import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import PrefillLink from "../shared/PrefillLink";
import { ArrowRight, Check } from "../shared/Icons";
import { DESTINATIONS } from "../data/content";
import "./FeaturedCruiseDestinations.css";

export default function FeaturedCruiseDestinations() {
  return (
    <section
      id="cruise-destinations"
      className="cr-section cr-dest"
      aria-labelledby="cr-dest-title"
    >
      <div className="cr-container">
        <SectionHeading
          id="cr-dest-title"
          eyebrow="Featured destinations"
          title="Featured Cruise Destinations Around the World"
          lead="Each destination offers a different kind of water experience. Availability, operators and schedules are confirmed only when you plan a journey with us."
        />
        <div className="cr-dest__list">
          {DESTINATIONS.map((d, i) => (
            <Reveal
              as="article"
              key={d.id}
              className={`cr-dcard ${i % 2 ? "cr-dcard--flip" : ""}`}
            >
              <div className="cr-dcard__media">
                <Media
                  image={d.image}
                  sizes="(max-width: 900px) 100vw, 600px"
                />
              </div>
              <div className="cr-dcard__body">
                <p className="cr-dcard__region">
                  {d.name} · {d.region}
                </p>
                <h3 className="cr-dcard__title">{d.heading}</h3>
                <p className="cr-dcard__desc">{d.description}</p>
                <dl className="cr-dcard__meta">
                  <div>
                    <dt>Signature experience</dt>
                    <dd>{d.signature}</dd>
                  </div>
                  <div>
                    <dt>Best suited to</dt>
                    <dd>{d.bestFor}</dd>
                  </div>
                </dl>
                <ul className="cr-dcard__hl">
                  {d.highlights.map((h) => (
                    <li key={h}>
                      <Check /> <span>{h}</span>
                    </li>
                  ))}
                </ul>
                {d.vesselNote && <p className="cr-dcard__note">{d.vesselNote}</p>}
                <PrefillLink
                  prefill={{ destination: d.formValue }}
                  className="cr-btn cr-btn--blue cr-dcard__cta"
                >
                  Explore Destination <ArrowRight />
                </PrefillLink>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
