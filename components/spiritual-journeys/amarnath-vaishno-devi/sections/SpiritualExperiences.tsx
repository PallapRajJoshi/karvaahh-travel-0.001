import { EXPERIENCES } from "../data/content";
import { Icon } from "../Icon";
import { SectionHeading } from "../SectionHeading";
import "./Cards.css";

export function SpiritualExperiences() {
  return (
    <section className="avd-section avd-exp" aria-labelledby="avd-exp-title">
      <div className="avd-wrap">
        <SectionHeading id="avd-exp-title" title="Sacred experiences along the Yatra" />
        <ul className="avd-cards avd-cards--3">
          {EXPERIENCES.map((e) => (
            <li key={e.title} className={`avd-card avd-card--${e.shrine}`}>
              {e.icon ? <Icon name={e.icon} size={30} className="avd-card__icon" /> : null}
              <h3 className="avd-card__title">{e.title}</h3>
              <p className="avd-card__body">{e.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
