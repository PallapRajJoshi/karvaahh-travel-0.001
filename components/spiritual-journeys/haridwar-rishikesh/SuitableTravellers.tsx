import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { TRAVELLER_NOTE, TRAVELLER_TYPES } from "./data/guidance";
import "./suitable-travellers.css";

export default function SuitableTravellers() {
  return (
    <section
      id={SECTION.travellers}
      className="hry-section hry-section--paper hry-who"
      aria-labelledby="hry-who-title"
    >
      <div className="hry-container">
        <SectionHeading
          id="hry-who-title"
          title="A spiritual journey for every generation"
          intro={TRAVELLER_NOTE}
        />
        <ul className="hry-who__grid">
          {TRAVELLER_TYPES.map((t) => (
            <li key={t.id} className="hry-who__item">
              <Icon name={t.icon} size={28} className="hry-who__icon" />
              <h3 className="hry-who__title">{t.title}</h3>
              <p className="hry-who__text">{t.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
