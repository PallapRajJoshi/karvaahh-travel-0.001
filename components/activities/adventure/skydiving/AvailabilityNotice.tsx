import Icon from "./Icons";
import { availabilityNotice as n } from "./data/skydivingData";
import "./AvailabilityNotice.css";

export default function AvailabilityNotice() {
  return (
    <div className="sky-container sky-notice-wrap">
      <aside className="sky-notice" aria-labelledby="sky-notice-title">
        <div className="sky-notice__icon">
          <Icon name="calendar" size={28} />
        </div>
        <div className="sky-notice__body">
          <div className="sky-notice__head">
            <h2 id="sky-notice-title" className="sky-notice__title">
              {n.heading}
            </h2>
            <span className="sky-status sky-status--on-dark">{n.status}</span>
          </div>
          <p className="sky-notice__text">{n.text}</p>
          <p className="sky-notice__text sky-notice__text--muted">{n.text2}</p>
        </div>
        <a href="#upcoming-dates" className="sky-btn sky-btn--gold sky-notice__cta">
          {n.cta}
        </a>
      </aside>
    </div>
  );
}
