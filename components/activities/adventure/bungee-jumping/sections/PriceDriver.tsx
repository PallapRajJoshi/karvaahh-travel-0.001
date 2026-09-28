import { priceDriver } from "../data/bungeeJumpingData";

export default function PriceDriver() {
  return (
    <section className="bj-section bj-pricing" aria-labelledby="bj-price-title">
      <div className="bj-wrap">
        <h2 id="bj-price-title" className="bj-pricing__kicker">{priceDriver.heading}</h2>
        <p className="bj-pricing__statement" data-reveal>
          {priceDriver.statement.map((w, i) => (
            <span key={w}>{i === 0 ? w : ` + ${w}`}</span>
          ))}
        </p>
        <p className="bj-pricing__text">{priceDriver.text}</p>
        <div className="bj-grid bj-grid--3 bj-pricing__factors">
          {priceDriver.factors.map((f) => (
            <div key={f.title} className="bj-pricing__factor" data-reveal>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
