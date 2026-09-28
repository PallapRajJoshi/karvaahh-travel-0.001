import SectionHeading from "./SectionHeading";
import { accommodation, food } from "./data/jyotirlingaData";
import "./InfoSections.css";

export default function StayAndMeals() {
  return (
    <section className="jyl-section jyl-stay" aria-label="Accommodation and meals">
      <div className="jyl-container jyl-stay__grid">
        <div>
          <SectionHeading id="jyl-stay-title" title={accommodation.heading} />
          <ul className="jyl-list">
            {accommodation.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
        <div>
          <SectionHeading id="jyl-food-title" title={food.heading} />
          <ul className="jyl-list">
            {food.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
