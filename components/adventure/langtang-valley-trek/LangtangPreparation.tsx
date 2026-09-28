import { preparation } from "@/data/adventure/langtang-valley-trek";
import SectionHeading from "./SectionHeading";
import LangtangIcon from "./LangtangIcon";
import "./LangtangPreparation.css";

export default function LangtangPreparation() {
  return (
    <section className="lt-section lt-section--tint lt-prep" id="preparation" aria-labelledby="lt-prep-title">
      <div className="lt-container">
        <SectionHeading id="lt-prep-title" eyebrow="Difficulty & Preparation" title="Prepare for Your Himalayan Adventure" />
        <div className="lt-prep__grid">
          <aside className="lt-prep__diff" data-reveal>
            <p className="lt-prep__label">Trek difficulty</p>
            <p className="lt-prep__rating">{preparation.difficulty.rating}</p>
            <div className="lt-prep__meter" role="img" aria-label={`Difficulty: ${preparation.difficulty.rating}, 3 of 5`}>
              {[1, 2, 3, 4, 5].map((n) => <span key={n} className={n <= 3 ? "is-on" : ""} />)}
            </div>
            <p className="lt-prep__difftext">{preparation.difficulty.text}</p>
            <p className="lt-prep__risk"><LangtangIcon name="sos" size={18} />{preparation.riskNote}</p>
          </aside>
          <ul className="lt-prep__items" role="list">
            {preparation.items.map((it, i) => (
              <li key={it.title} data-reveal style={{ ["--i" as string]: i % 3 }}>
                <span className="lt-prep__icon"><LangtangIcon name={it.icon} /></span>
                <h3>{it.title}</h3>
                <p>{it.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
