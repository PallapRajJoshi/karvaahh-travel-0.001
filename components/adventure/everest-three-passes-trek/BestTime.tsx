import SectionHeading from "./SectionHeading";
import Icon from "./Icon";
import { seasons, seasonsNote } from "@/data/adventure/everest-three-passes-trek/content";
import "./BestTime.css";

const VERDICT_CLASS: Record<string, string> = {
  Popular: "is-good",
  Good: "is-good",
  Challenging: "is-warn",
  "Not recommended": "is-bad",
};

export default function BestTime() {
  return (
    <section className="etp-section etp-section--white etp-seasons" id="seasons" aria-labelledby="etp-seasons-title">
      <div className="etp-wrap">
        <SectionHeading
          id="etp-seasons-title"
          eyebrow="Best time to visit"
          title="When to Trek Everest Three Passes"
          intro="Season shapes everything on this route — from the snow on the passes to whether the Lukla flights run on time."
        />
        <ul className="etp-seasons__grid">
          {seasons.map((s, i) => (
            <li key={s.id} className="etp-season" data-reveal style={{ "--i": i } as React.CSSProperties}>
              <div className="etp-season__top">
                <h3 className="etp-season__name">{s.name}</h3>
                <span className={`etp-season__verdict ${VERDICT_CLASS[s.verdict]}`}>{s.verdict}</span>
              </div>
              <p className="etp-season__months">{s.months}</p>
              <p className="etp-season__body">{s.body}</p>
              <p className="etp-season__watch-label">Watch for</p>
              <ul className="etp-season__watch">
                {s.watchFor.map((w) => (
                  <li key={w}>{w}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="etp-seasons__note" data-reveal>
          <Icon name="snow" />
          <span>{seasonsNote}</span>
        </p>
      </div>
    </section>
  );
}
