import SectionHeading from "./SectionHeading";
import { priceDriver as p } from "./data/skydivingData";
import "./PriceDriver.css";

export default function PriceDriver() {
  return (
    <section id="pricing" className="sky-section sky-section--cream sky-price" aria-labelledby="sky-price-title">
      <div className="sky-container">
        <SectionHeading id="sky-price-title" title={p.heading} />
        <p className="sky-price__statement">{p.statement}</p>
        <p className="sky-price__text">{p.text}</p>

        <div className="sky-price__layout">
          <div className="sky-price__core">
            <p className="sky-price__tag">Every quote</p>
            <h3 className="sky-price__core-title">{p.core.title}</h3>
            <p className="sky-price__core-text">{p.core.text}</p>
          </div>
          <div className="sky-price__extras">
            <p className="sky-price__tag">May also be included</p>
            <ul className="sky-price__list">
              {p.extras.map((e) => (
                <li key={e.title} className="sky-price__item">
                  <h3 className="sky-price__item-title">{e.title}</h3>
                  <p className="sky-price__item-text">{e.text}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="sky-price__footnote">{p.footnote}</p>
      </div>
    </section>
  );
}
