import { quickFacts } from "./data/zipFlyingData";

export default function QuickFacts() {
  return (
    <section className="zf-sec zf-facts" aria-labelledby="zf-facts-title">
      <div className="zf-wrap">
        <header className="zf-head zf-head--light">
          <h2 id="zf-facts-title" className="zf-h2 zf-h2--light">Quick Facts</h2>
        </header>
        <dl className="zf-facts__grid">
          {quickFacts.map((f) => (
            <div key={f.label}>
              <dt>{f.label}</dt>
              <dd>{f.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
