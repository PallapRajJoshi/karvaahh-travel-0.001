import { overview, quickFacts } from "../data/content";
import { IconCheck } from "../icons";
import SectionHeading from "../SectionHeading";
import "./overview.css";

export default function Overview() {
  return (
    <section id="overview" className="mc-section mc-overview" aria-labelledby="mc-overview-title">
      <div className="mc-container">
        <div className="mc-overview__grid">
          <div className="mc-overview__story">
            <SectionHeading id="mc-overview-title" eyebrow="The journey" title="Into the rain shadow of the Annapurnas" />
            <p className="mc-overview__lead">{overview.lead}</p>
            {overview.paragraphs.map((p) => (
              <p key={p.slice(0, 24)} className="mc-overview__p">
                {p}
              </p>
            ))}
          </div>

          <aside className="mc-overview__card" aria-labelledby="mc-highlights-title">
            <h3 id="mc-highlights-title" className="mc-overview__card-title">
              Trip highlights
            </h3>
            <ul className="mc-overview__highlights">
              {overview.highlights.map((h) => (
                <li key={h}>
                  <IconCheck className="mc-overview__tick" />
                  <span>{h}</span>
                </li>
              ))}
            </ul>
          </aside>
        </div>

        <dl className="mc-facts" aria-label="Trek at a glance">
          {quickFacts.map((f) => (
            <div key={f.label} className="mc-facts__item">
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
