import SectionHeading from "./SectionHeading";
import StatusBadge from "./StatusBadge";
import { DESTINATIONS, SEASON, enquireHref } from "./data/hotAirBalloonData";
import "./AvailabilitySection.css";

/** "When Can You Fly?" — per-destination operating pattern (no fake calendar). */
export default function AvailabilitySection() {
  return (
    <section className="hab-section hab-section--cream hab-season" aria-labelledby="hab-season-title">
      <div className="hab-container hab-season__grid">
        <div>
          <SectionHeading id="hab-season-title" title={SEASON.heading} />
          <p className="hab-season__message">{SEASON.message}</p>
          <p className="hab-season__support">{SEASON.supporting}</p>
          <a href={enquireHref()} className="hab-btn hab-btn--dark">{SEASON.cta}</a>
        </div>
        <ol className="hab-season__list" aria-label="Operating pattern by destination">
          {DESTINATIONS.map((d) => (
            <li key={d.slug} className={`hab-season__row hab-season__row--${d.status}`}>
              <div className="hab-season__track" aria-hidden="true" />
              <div className="hab-season__info">
                <h3 className="hab-season__name">{d.name}</h3>
                <p className="hab-season__label">{d.seasonLabel}</p>
              </div>
              <StatusBadge status={d.status} size="sm" />
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
