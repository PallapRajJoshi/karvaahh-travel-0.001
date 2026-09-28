import { TRAVEL_TIPS } from "../data/content";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import "./Cards.css";

export function TravelTips() {
  return (
    <section className="avd-section" aria-labelledby="avd-tips-title">
      <div className="avd-wrap">
        <SectionHeading id="avd-tips-title" title="Essential travel tips" />
        <ul className="avd-tips">
          {TRAVEL_TIPS.map((t) => (
            <li key={t.text}>
              <Icon name={t.icon} size={22} className="avd-tips__icon" />
              <span>{t.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
