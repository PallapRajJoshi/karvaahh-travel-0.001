import SectionHeading from "./SectionHeading";
import { audience } from "./data/skydivingData";
import "./WhoIsItFor.css";

export default function WhoIsItFor() {
  return (
    <section className="sky-section" aria-labelledby="sky-who-title">
      <div className="sky-container">
        <SectionHeading id="sky-who-title" title={audience.heading} />
        <ul className="sky-who">
          {audience.items.map((a) => (
            <li key={a.title} className="sky-who__item">
              <h3 className="sky-who__title">{a.title}</h3>
              <p className="sky-who__text">{a.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
