import { headings } from "../config/page.config";
import { seasons, monthInitials, monthNames } from "../data/seasons";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../ui/Icon";
import { staggerStyle } from "../lib/format";
import "./info.css";

/**
 * Four season cards. Each carries a 12-month ribbon that highlights its
 * months, so the whole year can be read at a glance.
 */
export function BestTimeToVisit({ anchor }: { anchor: string }) {
  const h = headings.seasons;
  return (
    <section id={anchor} className="nsa-section nsa-section--muted nsa-seasons" aria-labelledby="nsa-seasons-title">
      <div className="nsa-container">
        <SectionHeading id="nsa-seasons-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />

        <ul className="nsa-seasons__grid">
          {seasons.map((s, i) => (
            <li key={s.id} className={`nsa-season nsa-season--${s.tone}`} data-reveal="" style={staggerStyle(i)}>
              <div className="nsa-season__head">
                <span className="nsa-season__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <div>
                  <h3 className="nsa-season__name">{s.name}</h3>
                  <p className="nsa-season__months">{s.months}</p>
                </div>
              </div>

              <ol className="nsa-season__ribbon" aria-hidden="true">
                {monthInitials.map((m, idx) => {
                  const on = s.monthNumbers.includes(idx + 1);
                  return (
                    <li key={idx} className={on ? "is-on" : undefined} title={monthNames[idx]}>
                      {m}
                    </li>
                  );
                })}
              </ol>

              <p className="nsa-season__text">{s.description}</p>

              <p className="nsa-season__label">Best for</p>
              <ul className="nsa-season__tags">
                {s.bestFor.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>

              <p className="nsa-season__consider">
                <strong>Keep in mind:</strong> {s.consider}
              </p>
            </li>
          ))}
        </ul>

        <p className="nsa-note" data-reveal="">
          <Icon name="shield" size={18} />
          <span>{h.note}</span>
        </p>
      </div>
    </section>
  );
}
