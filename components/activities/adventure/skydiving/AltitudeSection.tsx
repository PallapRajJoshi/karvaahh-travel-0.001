import Icon, { type IconName } from "./Icons";
import SectionHeading from "./SectionHeading";
import { altitudePlanning } from "./data/skydivingData";

const icons: IconName[] = ["oxygen", "acclimatisation", "clearance"];

export default function AltitudeSection() {
  return (
    <section className="sky-section" aria-labelledby="sky-altitude-title">
      <div className="sky-container">
        <SectionHeading id="sky-altitude-title" title={altitudePlanning.heading} intro={altitudePlanning.text} />
        <ul className="sky-icon-cards sky-icon-cards--row">
          {altitudePlanning.cards.map((c, i) => (
            <li key={c.title} className="sky-icon-card">
              <span className="sky-icon-card__icon">
                <Icon name={icons[i]} />
              </span>
              <div>
                <h3 className="sky-icon-card__title">{c.title}</h3>
                <p className="sky-icon-card__text">{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="sky-note">{altitudePlanning.note}</p>
      </div>
    </section>
  );
}
