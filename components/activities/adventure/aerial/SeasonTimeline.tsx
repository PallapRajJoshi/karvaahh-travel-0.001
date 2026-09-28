import type { SeasonContent } from "./types";
import SectionHeading from "./SectionHeading";
import "./season-timeline.css";

export default function SeasonTimeline({ season }: { season: SeasonContent }) {
  const open = season.months.filter((m) => m.open);
  const closed = season.months.filter((m) => !m.open);

  return (
    <section id="season" className="ae-section ae-season" aria-labelledby="ae-season-title">
      <div className="ae-container">
        <SectionHeading id="ae-season-title" title={season.heading} />

        <div className="ae-season__summary">
          <p className="ae-season__main">{season.summary}</p>
          <p className="ae-season__body">{season.body}</p>
        </div>

        <div className="ae-season__strip">
          <div className="ae-season__band ae-season__band--open" style={{ flexGrow: open.length }}>
            <p className="ae-season__band-label">{season.openLabel}</p>
            <ol className="ae-season__months" aria-label={`${season.openLabel}: ${open[0]?.name} to ${open.at(-1)?.name}`}>
              {open.map((m) => (
                <li key={m.name} className="ae-season__month">
                  <abbr title={m.name} className="ae-season__abbr">
                    {m.name.slice(0, 3)}
                  </abbr>
                </li>
              ))}
            </ol>
          </div>
          <div className="ae-season__band ae-season__band--closed" style={{ flexGrow: closed.length }}>
            <p className="ae-season__band-label">{season.closedLabel}</p>
            <ol
              className="ae-season__months"
              aria-label={`${season.closedLabel}: ${closed[0]?.name} to ${closed.at(-1)?.name}`}
            >
              {closed.map((m) => (
                <li key={m.name} className="ae-season__month">
                  <abbr title={m.name} className="ae-season__abbr">
                    {m.name.slice(0, 3)}
                  </abbr>
                </li>
              ))}
            </ol>
          </div>
        </div>

        <p className="ae-season__note">{season.note}</p>
      </div>
    </section>
  );
}
