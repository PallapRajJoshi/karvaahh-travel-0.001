import { bestTime } from "@/data/adventure/langtang-valley-trek";
import SectionHeading from "./SectionHeading";
import LangtangIcon from "./LangtangIcon";
import "./LangtangBestTime.css";

const MONTHS = ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"];
const RANGE: Record<string, number[]> = { Spring: [2, 3, 4], Monsoon: [5, 6, 7], Autumn: [8, 9, 10], Winter: [11, 0, 1] };
const TONE_LABEL = { recommended: "Recommended", good: "Possible with preparation", caution: "Use caution" } as const;

export default function LangtangBestTime() {
  return (
    <section className="lt-section lt-season" id="best-time" aria-labelledby="lt-season-title">
      <div className="lt-container">
        <SectionHeading id="lt-season-title" eyebrow="Seasons" title="When to Trek Langtang Valley" />
        <p className="lt-season__rec" data-reveal><strong>Recommended:</strong> {bestTime.recommended}</p>
        <div className="lt-season__grid">
          {bestTime.seasons.map((s, i) => (
            <article key={s.name} className={`lt-season__card lt-season__card--${s.tone}`} data-reveal style={{ ["--i" as string]: i }}>
              <div className="lt-season__top">
                <h3>{s.name}</h3>
                <span className="lt-season__tag">{TONE_LABEL[s.tone]}</span>
              </div>
              <p className="lt-season__months">{s.months}</p>
              <ol className="lt-season__strip" aria-hidden="true">
                {MONTHS.map((m, idx) => <li key={idx} className={RANGE[s.name].includes(idx) ? "is-on" : ""}>{m}</li>)}
              </ol>
              <p className="lt-season__summary">{s.summary}</p>
              <ul className="lt-season__points">
                {s.points.map((p) => <li key={p}>{p}</li>)}
              </ul>
            </article>
          ))}
        </div>
        <p className="lt-note" data-reveal><LangtangIcon name="info" size={18} />{bestTime.note}</p>
      </div>
    </section>
  );
}
