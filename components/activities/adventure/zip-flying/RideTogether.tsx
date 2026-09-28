import { rideTogether, ENQUIRY_ANCHOR } from "./data/zipFlyingData";

export default function RideTogether() {
  return (
    <section className="zf-sec zf-ride" aria-labelledby="zf-ride-title">
      <svg className="zf-ride__lines" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
        <line x1="0" y1="6" x2="100" y2="30" />
        <line x1="0" y1="10" x2="100" y2="34" />
        <line x1="0" y1="14" x2="100" y2="38" />
      </svg>
      <div className="zf-wrap zf-ride__inner">
        <header className="zf-head zf-head--light">
          <h2 id="zf-ride-title" className="zf-h2 zf-h2--light">{rideTogether.heading}</h2>
          <p className="zf-lead">{rideTogether.text}</p>
        </header>
        <ul className="zf-ride__list">
          {rideTogether.items.map((it) => (
            <li key={it.title}>
              <h3 className="zf-h3">{it.title}</h3>
              <p>{it.text}</p>
            </li>
          ))}
        </ul>
        <a className="zf-btn zf-btn--gold" href={ENQUIRY_ANCHOR}>{rideTogether.cta}</a>
      </div>
    </section>
  );
}
