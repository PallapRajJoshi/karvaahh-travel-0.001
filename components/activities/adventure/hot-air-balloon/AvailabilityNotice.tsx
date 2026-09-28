import { NOTICE, enquireHref } from "./data/hotAirBalloonData";
import "./AvailabilityNotice.css";

export default function AvailabilityNotice() {
  return (
    <section className="hab-notice" aria-labelledby="hab-notice-title">
      <div className="hab-container">
        <div className="hab-notice__panel" role="note">
          <div className="hab-notice__icon" aria-hidden="true">
            <svg viewBox="0 0 48 48" width="44" height="44" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M24 4c-8.3 0-15 6.4-15 14.3 0 7 5.6 12.8 10 16.2h10c4.4-3.4 10-9.2 10-16.2C39 10.4 32.3 4 24 4Z" />
              <path d="M19 34.5 20 41h8l1-6.5M24 4c-3.6 3.8-5.5 9-5.5 14.3S20 29.6 21 34.5M24 4c3.6 3.8 5.5 9 5.5 14.3S28 29.6 27 34.5" />
            </svg>
          </div>
          <div className="hab-notice__body">
            <h2 id="hab-notice-title" className="hab-notice__title">{NOTICE.heading}</h2>
            {NOTICE.body.map((p) => (
              <p key={p.slice(0, 24)} className="hab-notice__text">{p}</p>
            ))}
            <ul className="hab-notice__factors" aria-label="What availability depends on">
              {NOTICE.factors.map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
          <a href={enquireHref()} className="hab-btn hab-btn--dark hab-notice__cta">{NOTICE.cta}</a>
        </div>
      </div>
    </section>
  );
}
