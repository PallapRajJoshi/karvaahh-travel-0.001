import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { OVERVIEW_FACTS } from "./data/package";
import "./journey-overview.css";

export default function JourneyOverview() {
  return (
    <section
      id={SECTION.overview}
      className="hry-overview"
      aria-labelledby="hry-overview-title"
    >
      <div className="hry-container">
        <div className="hry-overview__panel">
          <SectionHeading
            id="hry-overview-title"
            title="The yatra at a glance"
            tone="dark"
            intro="Duration, starting point, hotels and vehicle are set by the package you choose — nothing below is a fixed departure."
          />
          <dl className="hry-overview__list">
            {OVERVIEW_FACTS.map((fact) => (
              <div key={fact.label} className="hry-overview__row">
                <dt className="hry-overview__label">{fact.label}</dt>
                <dd className="hry-overview__value">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
