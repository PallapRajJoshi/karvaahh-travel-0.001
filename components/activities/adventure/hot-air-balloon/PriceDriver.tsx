import SectionHeading from "./SectionHeading";
import { PRICE_DRIVERS } from "./data/hotAirBalloonData";
import "./PriceDriver.css";

export default function PriceDriver() {
  const [a, b, c] = PRICE_DRIVERS.statement;
  return (
    <section className="hab-section hab-section--cream hab-price" aria-labelledby="hab-price-title">
      <div className="hab-container hab-price__grid">
        <div>
          <SectionHeading id="hab-price-title" title={PRICE_DRIVERS.heading} />
          <p className="hab-price__statement">
            {a} <span aria-hidden="true">+</span><span className="sr-only">plus</span> {b}{" "}
            <span aria-hidden="true">+</span><span className="sr-only">plus</span> {c}
          </p>
          <p className="hab-price__support">{PRICE_DRIVERS.supporting}</p>
        </div>
        <div>
          <ul className="hab-price__cards">
            {PRICE_DRIVERS.cards.map((card) => (
              <li key={card.title} className="hab-price__card">
                <h3 className="hab-price__card-title">{card.title}</h3>
                <p className="hab-price__card-text">{card.text}</p>
              </li>
            ))}
          </ul>
          <p className="hab-price__note">{PRICE_DRIVERS.note}</p>
        </div>
      </div>
    </section>
  );
}
