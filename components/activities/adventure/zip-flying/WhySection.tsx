import { why } from "./data/zipFlyingData";

export default function WhySection() {
  return (
    <section className="zf-sec zf-why" aria-labelledby="zf-why-title">
      <div className="zf-wrap">
        <header className="zf-head zf-head--light">
          <h2 id="zf-why-title" className="zf-h2 zf-h2--light">{why.heading}</h2>
        </header>
        <ul className="zf-why__grid">
          {why.items.map((it) => (
            <li key={it.title} className="zf-why__item">
              <p className="zf-why__num" aria-hidden="true">
                {it.value}
                <span>{it.unit}</span>
              </p>
              <h3 className="zf-h3">{it.title}</h3>
              <p className="zf-why__text">{it.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
