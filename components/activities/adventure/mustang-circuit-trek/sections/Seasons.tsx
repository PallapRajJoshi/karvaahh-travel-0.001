import { anchors, headings } from "../data/config";
import { seasons, seasonsNote } from "../data/seasons";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
import { staggerStyle } from "../shared/stagger";
import "./seasons.css";

export default function Seasons() {
  const h = headings.seasons;
  return (
    <section id={anchors.seasons.id} className="mc-section mc-section--white mc-seasons" aria-labelledby="mc-seasons-title">
      <div className="mc-container">
        <SectionHeading id="mc-seasons-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />

        <ul className="mc-seasons__grid">
          {seasons.map((s, i) => (
            <li key={s.id} data-reveal style={staggerStyle(i)}>
              <article className={`mc-season mc-season--${s.tone}`} aria-labelledby={`mc-season-${s.id}`}>
                <header className="mc-season__head">
                  <p className="mc-season__months">{s.months}</p>
                  <h3 id={`mc-season-${s.id}`} className="mc-season__name">
                    {s.name}
                  </h3>
                  <span className="mc-season__verdict">{s.verdict}</span>
                </header>
                <p className="mc-season__summary">{s.summary}</p>
                <dl className="mc-season__zones">
                  <div>
                    <dt>Lower Mustang</dt>
                    <dd>{s.lower}</dd>
                  </div>
                  <div>
                    <dt>Upper Mustang</dt>
                    <dd>{s.upper}</dd>
                  </div>
                </dl>
              </article>
            </li>
          ))}
        </ul>

        <p className="mc-seasons__note" data-reveal>
          <Icon name="sun" />
          <span>{seasonsNote}</span>
        </p>
      </div>
    </section>
  );
}
