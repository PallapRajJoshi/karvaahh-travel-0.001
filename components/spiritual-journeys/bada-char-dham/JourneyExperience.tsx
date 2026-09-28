import { badaCharDhamData as d } from "./data/badaCharDhamData";
import SectionHeading from "./shared/SectionHeading";
import "./JourneyPlanning.css";

export default function JourneyExperience() {
  const e = d.journey.experience;
  return (
    <section className="bcd-section bcd-section--paper" aria-labelledby="bcd-exp-title">
      <div className="bcd-container">
        <SectionHeading id="bcd-exp-title" title={e.heading} intro={e.intro} />
        <ul className="bcd-exp">
          {e.items.map((item) => (
            <li key={item.title} className="bcd-exp__item">
              <h3 className="bcd-exp__title">{item.title}</h3>
              <p className="bcd-exp__text">{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
