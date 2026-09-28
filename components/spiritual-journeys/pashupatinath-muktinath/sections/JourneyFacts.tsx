import { quickFacts } from "../data/pashupatinathMuktinathData";
import "./opening.css";

export function JourneyFacts() {
  return (
    <section className="pmy-facts" aria-label="Journey at a glance">
      <div className="pmy-container">
        <dl className="pmy-facts__grid" data-reveal>
          {quickFacts.map((f) => (
            <div key={f.label} className="pmy-facts__item">
              <dt>{f.label}</dt>
              <dd>
                {f.value}
                {f.note ? <small>{f.note}</small> : null}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
