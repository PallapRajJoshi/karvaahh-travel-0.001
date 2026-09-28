import DestinationCard from "./DestinationCard";
import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";
import { DESTINATIONS, STATUS_META, type AvailabilityStatus } from "./data/hotAirBalloonData";
import "./DestinationCards.css";

export default function DestinationCards() {
  return (
    <section className="hab-section hab-dests" aria-labelledby="hab-dests-title">
      <div className="hab-container">
        <SectionHeading
          id="hab-dests-title"
          title="Where Can You Find Balloon Experiences?"
          lede="Availability varies by destination and season."
        />

        <div className="hab-dests__grid">
          {DESTINATIONS.map((d) => <DestinationCard key={d.slug} d={d} />)}
        </div>

        <dl className="hab-dests__legend" aria-label="Status legend">
          {(Object.keys(STATUS_META) as AvailabilityStatus[]).map((s) => (
            <div key={s} className="hab-dests__legend-row">
              <dt><StatusBadge status={s} size="sm" /></dt>
              <dd>{STATUS_META[s].legend}</dd>
            </div>
          ))}
        </dl>
        <p className="hab-dests__note">
          Prices are indicative, subject to availability and confirmed on enquiry.
        </p>
      </div>
    </section>
  );
}
