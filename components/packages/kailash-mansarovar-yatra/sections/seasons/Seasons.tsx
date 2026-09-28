import { seasons, seasonsAlert, seasonsHeading } from "../../data/seasons";
import Icon from "../../shared/Icon";
import Notice from "../../shared/Notice";
import Reveal from "../../shared/Reveal";
import SectionHeading from "../../shared/SectionHeading";
import "./Seasons.css";

const statusClass: Record<string, string> = {
  "Season opening": "opening",
  "Main season": "main",
  "Season closing": "closing",
  "Generally closed": "closed",
};

export default function Seasons() {
  return (
    <section id="seasons" className="km-section" aria-labelledby="km-seasons-title">
      <div className="km-container">
        <SectionHeading id="km-seasons-title" {...seasonsHeading} />

        <ul className="km-seasons__grid">
          {seasons.map((s, i) => (
            <Reveal as="li" key={s.id} index={i} className={`km-season km-season--${statusClass[s.status]}`}>
              <div className="km-season__top">
                <span className="km-season__icon">
                  <Icon name={s.icon} size={22} />
                </span>
                <span className="km-season__status">{s.status}</span>
              </div>
              <h3 className="km-season__name">{s.name}</h3>
              <p className="km-season__months">{s.months}</p>
              <p className="km-season__summary">{s.summary}</p>
              <ul className="km-season__points">
                {s.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </Reveal>
          ))}
        </ul>

        <Notice tone="caution" title="Conditions change quickly" className="km-seasons__alert">
          <p>{seasonsAlert}</p>
        </Notice>
      </div>
    </section>
  );
}
