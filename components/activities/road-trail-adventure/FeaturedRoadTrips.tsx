import AdventureImage from "./AdventureImage";
import Icon from "./Icon";
import PlanLink from "./PlanLink";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { ROAD_TRIPS } from "./data/roadTrips";
import { HEADINGS } from "./data/copy";
import { ANCHORS, INQUIRY_ANCHOR } from "./data/site";
import "./FeaturedRoadTrips.css";

/** Five scenic road journeys as itinerary cards. No distances or drive times. */
export default function FeaturedRoadTrips() {
  const h = HEADINGS.roadTrips;
  return (
    <section
      id={ANCHORS.roadTrips}
      className="rt-section rt-section--alt"
      aria-labelledby="rt-roadtrips-title"
    >
      <div className="rt-container">
        <SectionHeading
          id="rt-roadtrips-title"
          eyebrow={h.eyebrow}
          title={h.title}
          intro={h.intro}
        />

        <ul className="rt-trips">
          {ROAD_TRIPS.map((trip, i) => (
            <Reveal as="li" key={trip.id} index={i % 3} className="rt-trips__item">
              <article className="rt-card rt-trips__card">
                <div className="rt-card__media rt-trips__media">
                  <AdventureImage
                    image={trip.image}
                    sizes="(min-width: 1100px) 33vw, (min-width: 720px) 50vw, 100vw"
                  />
                  <div className="rt-trips__route" aria-hidden="true">
                    <span>{trip.from}</span>
                    <Icon name="arrow" />
                    <span>{trip.to}</span>
                  </div>
                </div>

                <div className="rt-card__body">
                  <h3 className="rt-card__title">{trip.title}</h3>
                  <p className="rt-trips__duration">
                    <Icon name="calendar" />
                    <span>
                      Suggested duration: <strong>{trip.duration}</strong>
                    </span>
                  </p>
                  <p className="rt-card__text">{trip.intro}</p>

                  <ul className="rt-checklist" aria-label={`${trip.title} highlights`}>
                    {trip.highlights.map((item) => (
                      <li key={item}>
                        <Icon name="check" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <p className="rt-trips__style">
                    <span className="rt-trips__style-label">Suggested travel style</span>
                    {trip.travelStyle}
                  </p>

                  <PlanLink
                    href={INQUIRY_ANCHOR}
                    prefill={{
                      destination: trip.to === "Langtang gateway" ? "Langtang Region" : trip.to,
                      adventureType: "Scenic Road Trip",
                    }}
                    className="rt-btn rt-btn--outline rt-btn--sm rt-trips__cta"
                  >
                    <span>
                      Customize This Journey
                      <span className="rt-sr-only">: {trip.title}</span>
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
