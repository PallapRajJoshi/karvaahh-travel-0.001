import { altitude as a } from "../data/charDhamData";
import SectionHeading from "../shared/SectionHeading";
import { IconCheck, IconInfo } from "../shared/icons";

export default function AltitudeSafety() {
  return (
    <section id="altitude-preparation" className="cd-section cd-section--tint cd-altitude" aria-labelledby="altitude-title">
      <div className="cd-container">
        <SectionHeading id="altitude-title" title={a.heading} intro={<p>{a.intro}</p>} />
        <div className="cd-altitude__grid">
          <ul className="cd-altitude__conditions">
            {a.conditions.map((c) => (
              <li key={c.title} data-reveal>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </li>
            ))}
          </ul>
          <aside className="cd-altitude__recs" data-reveal aria-labelledby="altitude-recs-title">
            <h3 id="altitude-recs-title">How to prepare</h3>
            <ul className="cd-list cd-list--in">
              {a.recommendations.map((r) => (
                <li key={r}>
                  <IconCheck className="cd-list__icon" />
                  <span>{r}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <div className="cd-difficulty" data-reveal>
          <div className="cd-difficulty__head">
            <h3>{a.difficulty.heading}</h3>
            <p>{a.difficulty.text}</p>
          </div>
          <ul className="cd-difficulty__factors">
            {a.difficulty.factors.map((f) => (
              <li key={f.title}>
                <strong>{f.title}</strong>
                <span>{f.text}</span>
              </li>
            ))}
          </ul>
        </div>

        <p className="cd-note cd-note--strong" role="note" data-reveal>
          <IconInfo className="cd-note__icon" />
          <span>{a.healthNote}</span>
        </p>
      </div>
    </section>
  );
}
