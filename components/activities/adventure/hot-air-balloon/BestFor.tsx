import SectionHeading from "./SectionHeading";
import { BEST_FOR } from "./data/hotAirBalloonData";
import "./BestFor.css";

export default function BestFor() {
  return (
    <section className="hab-section hab-section--dark hab-best" aria-labelledby="hab-best-title">
      <div className="hab-container">
        <SectionHeading id="hab-best-title" title={BEST_FOR.heading} tone="dark" />
        <ul className="hab-best__list">
          {BEST_FOR.items.map((item) => (
            <li key={item.title} className="hab-best__item">
              <h3 className="hab-best__title">{item.title}</h3>
              <p className="hab-best__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
