import { SEASONS, SEASON_NOTE } from "./data/content";
import { ANCHORS } from "./data/routes";
import type { Season } from "./data/types";
import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { Info } from "./shared/icons";
import "./ApiNampaBestTime.css";

const MONTHS: { m: string; season: Season["id"] }[] = [
  { m: "Jan", season: "winter" },
  { m: "Feb", season: "winter" },
  { m: "Mar", season: "spring" },
  { m: "Apr", season: "spring" },
  { m: "May", season: "spring" },
  { m: "Jun", season: "monsoon" },
  { m: "Jul", season: "monsoon" },
  { m: "Aug", season: "monsoon" },
  { m: "Sep", season: "autumn" },
  { m: "Oct", season: "autumn" },
  { m: "Nov", season: "autumn" },
  { m: "Dec", season: "winter" },
];

const toneOf = (id: Season["id"]) => SEASONS.find((s) => s.id === id)?.tone ?? "caution";

export default function ApiNampaBestTime() {
  return (
    <section className="an-section an-seasons" id={ANCHORS.seasons} aria-labelledby="an-seasons-title">
      <div className="an-container">
        <SectionHeading
          id="an-seasons-title"
          eyebrow="Best time to visit"
          title="When to Trek Api Nampa Base Camp"
          intro="Two main windows, two seasons to respect. Here’s how the year typically plays out in the far west."
        />

        <Reveal>
          <div className="an-seasons__year" aria-hidden="true">
          {MONTHS.map(({ m, season }) => (
            <span key={m} className={`an-seasons__month an-seasons__month--${toneOf(season)}`}>
              {m}
            </span>
          ))}
          </div>
        </Reveal>
        <p className="an-sr-only">
          Spring (March to May) and autumn (September to November) are the recommended windows; winter is for
          experienced parties only; the monsoon is generally avoided.
        </p>

        <ul className="an-seasons__grid" role="list">
          {SEASONS.map((s, i) => (
            <Reveal as="li" key={s.id} className={`an-season an-season--${s.tone}`} delay={i * 80}>
              <div className="an-season__top">
                <h3 className="an-season__name">{s.name}</h3>
                <span className="an-season__months">{s.months}</span>
              </div>
              <p className="an-season__verdict">{s.verdict}</p>
              <p className="an-season__body">{s.body}</p>
              <ul className="an-season__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <p className="an-seasons__note">
          <Info />
          {SEASON_NOTE}
        </p>
      </div>
    </section>
  );
}
