import { howItWorks, tourFormats } from "@/data/europe/content";
import Reveal from "../../Reveal";

/** Nine-step timeline drawn on scroll (CSS delays keyed off --i), then the tour formats. */
export default function EuropeHowItWorks() {
  return (
    <section className="pkg-section" id="how-it-works" aria-labelledby="how-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow">How it works</p>
          <h2 id="how-h" className="pkg-h2">How Your Europe Trip Works</h2>
          <p className="pkg-lede">One team from the first conversation to your flight home.</p>
        </div>
        <Reveal className="eu-steps-wrap">
          <ol className="eu-steps">
            {howItWorks.map((s, i) => (
              <li key={s.title} className="eu-step" style={{ "--i": i } as React.CSSProperties}>
                <span className="eu-step__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="eu-step__title">{s.title}</h3>
                  <p className="eu-step__text">{s.text}</p>
                </div>
              </li>
            ))}
          </ol>
        </Reveal>
        <ul className="eu-formats" aria-label="Ways to travel">
          {tourFormats.map((f) => (
            <li key={f.title}>
              <strong>{f.title}</strong>
              <span>{f.text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
