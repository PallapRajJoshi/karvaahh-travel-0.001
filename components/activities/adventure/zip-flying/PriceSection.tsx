import { pricing } from "./data/zipFlyingData";

export default function PriceSection() {
  return (
    <section id="pricing" className="zf-sec zf-price" aria-labelledby="zf-price-title">
      <div className="zf-wrap zf-price__grid">
        <div>
          <h2 id="zf-price-title" className="zf-h2">{pricing.heading}</h2>
          <p className="zf-price__statement">{pricing.statement}</p>
          <p className="zf-price__text">{pricing.text}</p>
        </div>
        <dl className="zf-price__list">
          {pricing.items.map((it) => (
            <div key={it.title}>
              <dt>{it.title}</dt>
              <dd>{it.text}</dd>
            </div>
          ))}
        </dl>
        <p className="zf-note zf-price__note">{pricing.note}</p>
      </div>
    </section>
  );
}
