import { howItWorks } from "@/data/asia-content";
import Reveal from "../../Reveal";

/** Five steps that reveal one after another (CSS delays keyed off --i) along a drawn line. */
export default function HowItWorks() {
  return (
    <section className="pkg-section" id="how-it-works" aria-labelledby="how-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow">How it works</p>
          <h2 id="how-h" className="pkg-h2">From First Idea to Boarding Pass</h2>
        </div>
        <Reveal className="asia-steps-wrap">
          <ol className="asia-steps">
            {howItWorks.map((s, i) => (
              <li key={s.title} className="asia-step" style={{ "--i": i } as React.CSSProperties}>
                <span className="asia-step__n" aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="asia-step__title">{s.title}</h3>
                <p className="asia-step__text">{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>
      </div>
    </section>
  );
}
