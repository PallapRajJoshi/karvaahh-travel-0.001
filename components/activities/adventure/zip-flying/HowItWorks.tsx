import { steps } from "./data/zipFlyingData";

export default function HowItWorks() {
  return (
    <section className="zf-sec zf-steps" aria-labelledby="zf-steps-title">
      <div className="zf-wrap">
        <header className="zf-head">
          <h2 id="zf-steps-title" className="zf-h2">{steps.heading}</h2>
        </header>
        <ol className="zf-steps__list">
          {steps.items.map((s, i) => (
            <li key={s.title} className="zf-steps__item">
              <span className="zf-steps__num" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="zf-h3">{s.title}</h3>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
