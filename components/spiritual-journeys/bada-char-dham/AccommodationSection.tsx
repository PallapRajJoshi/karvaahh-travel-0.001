import { badaCharDhamData as d } from "./data/badaCharDhamData";
import "./Practical.css";

/** Accommodation + meals, side by side. */
export default function AccommodationSection() {
  const { accommodation, food } = d;
  return (
    <div className="bcd-section bcd-section--paper">
      <div className="bcd-container bcd-stay">
        {[
          { id: "bcd-stay-title", data: accommodation },
          { id: "bcd-food-title", data: food },
        ].map(({ id, data }) => (
          <section key={id} className="bcd-stay__col" aria-labelledby={id}>
            <h2 id={id} className="bcd-heading__title bcd-stay__title">
              {data.heading}
            </h2>
            <ul className="bcd-stay__list">
              {data.items.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
