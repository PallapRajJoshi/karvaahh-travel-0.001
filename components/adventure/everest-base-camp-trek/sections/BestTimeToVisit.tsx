import { seasons, seasonsNote } from "../data/seasons";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import "../styles/seasons.css";

const seasonIcon: Record<string, string> = { spring: "flower", monsoon: "rain", autumn: "leaf", winter: "snow" };

export default function BestTimeToVisit() {
  return (
    <section id="seasons" className="ebc-section ebc-section--alt ebc-seasons" aria-labelledby="ebc-seasons-title">
      <div className="ebc-container">
        <SectionHeading
          id="ebc-seasons-title"
          eyebrow="Best Time to Visit"
          title="Choose the Perfect Season for Everest"
          subtitle="Each season shapes the trail differently. Spring and autumn are the most popular, but conditions are never guaranteed."
          align="center"
        />
        <ul className="ebc-seasons__grid">
          {seasons.map((s, i) => (
            <li key={s.id} className={`ebc-season ebc-season--${s.rating}`} data-reveal="" style={{ ["--i" as string]: i }}>
              <div className="ebc-season__top">
                <span className="ebc-season__icon">
                  <Icon name={seasonIcon[s.id] ?? "mountain"} />
                </span>
                <span className={`ebc-badge ${s.rating === "recommended" ? "ebc-badge--teal" : "ebc-badge--gold"}`}>{s.ratingLabel}</span>
              </div>
              <h3 className="ebc-season__name">{s.name}</h3>
              <p className="ebc-season__months">{s.months}</p>
              <p className="ebc-season__summary">{s.summary}</p>
              <ul className="ebc-season__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
        <p className="ebc-seasons__note" data-reveal="">
          <Icon name="info" />
          {seasonsNote}
        </p>
      </div>
    </section>
  );
}
