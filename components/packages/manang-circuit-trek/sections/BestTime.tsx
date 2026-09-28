import { seasons } from "../data/content";
import type { SeasonMonth } from "../data/types";
import SectionHeading from "../SectionHeading";
import "./best-time.css";

const RATING: Record<SeasonMonth["rating"], string> = {
  best: "Best",
  good: "Good",
  caution: "Possible",
  avoid: "Not advised",
};

export default function BestTime() {
  return (
    <section id="when-to-go" className="mc-section mc-section--paper mc-season" aria-labelledby="mc-season-title">
      <div className="mc-container">
        <SectionHeading
          id="mc-season-title"
          eyebrow="When to go"
          title="Choose your season"
          intro="Thorong La and the Tilicho trail depend on the snow. Spring and autumn give the clearest skies and the most reliable crossings."
        />

        <ul className="mc-season__legend" aria-hidden="true">
          {(Object.keys(RATING) as SeasonMonth["rating"][]).map((r) => (
            <li key={r}>
              <span className={`mc-season__swatch mc-season__swatch--${r}`} />
              {RATING[r]}
            </li>
          ))}
        </ul>

        <ol className="mc-season__months">
          {seasons.map((m) => (
            <li key={m.month} className={`mc-season__month mc-season__month--${m.rating}`}>
              <span className="mc-season__bar" aria-hidden="true" />
              <span className="mc-season__name">{m.month}</span>
              <span className="mc-season__rating">{RATING[m.rating]}</span>
              <span className="mc-season__note">{m.note}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
