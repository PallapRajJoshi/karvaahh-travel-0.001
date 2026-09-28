import SectionHeading from "./SectionHeading";
import { expeditionFeatures } from "./data/skydivingData";
import "./ExpeditionFeatures.css";

export default function ExpeditionFeatures() {
  return (
    <section className="sky-section sky-section--cream" aria-labelledby="sky-why-title">
      <div className="sky-container">
        <SectionHeading id="sky-why-title" title={expeditionFeatures.heading} />
        <ul className="sky-why">
          {expeditionFeatures.items.map((item) => (
            <li key={item.title} className="sky-why__item">
              <h3 className="sky-why__title">{item.title}</h3>
              <p className="sky-why__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
