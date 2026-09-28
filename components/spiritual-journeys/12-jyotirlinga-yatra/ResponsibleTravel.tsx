import SectionHeading from "./SectionHeading";
import { responsibleTravel } from "./data/jyotirlingaData";
import "./InfoSections.css";

export default function ResponsibleTravel() {
  return (
    <section className="jyl-section jyl-responsible" aria-labelledby="jyl-responsible-title">
      <div className="jyl-container">
        <SectionHeading
          id="jyl-responsible-title"
          title={responsibleTravel.heading}
          lead="Sacred places, fragile mountains and living communities. A few simple habits help protect all three."
        />
        <ul className="jyl-responsible__list">
          {responsibleTravel.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
