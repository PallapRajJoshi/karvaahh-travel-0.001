import Icon, { type IconName } from "./Icons";
import SectionHeading from "./SectionHeading";
import { flexibility } from "./data/skydivingData";

const icons: IconName[] = ["weather", "aviation", "altitude"];

export default function FlexibilitySection() {
  return (
    <section className="sky-section sky-section--cream" aria-labelledby="sky-flex-title">
      <div className="sky-container sky-split">
        <SectionHeading id="sky-flex-title" title={flexibility.heading} intro={flexibility.text} />
        <ul className="sky-icon-cards">
          {flexibility.cards.map((c, i) => (
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
      </div>
    </section>
  );
}
