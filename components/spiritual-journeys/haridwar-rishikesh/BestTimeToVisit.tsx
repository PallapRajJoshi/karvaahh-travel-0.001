import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { CROWD_ADVISORIES, SEASON_NOTE, SEASONS } from "./data/seasons";
import "./best-time-to-visit.css";

export default function BestTimeToVisit() {
  return (
    <section
      id={SECTION.bestTime}
      className="hry-section hry-section--paper hry-seasons"
      aria-labelledby="hry-seasons-title"
    >
      <div className="hry-container">
        <SectionHeading
          id="hry-seasons-title"
          title="Best time to visit Haridwar & Rishikesh"
          intro="The yatra runs year-round. Each season feels different by the river — and a few festival periods change everything."
        />

        <ol className="hry-seasons__strip" aria-label="Seasons through the year">
          {SEASONS.map((s) => (
            <li key={s.id} className={`hry-seasons__season hry-seasons__season--${s.id}`}>
              <span className="hry-seasons__icon">
                <Icon name={s.icon} size={22} />
              </span>
              <h3 className="hry-seasons__name">{s.name}</h3>
              <p className="hry-seasons__months">{s.months}</p>
              <p className="hry-seasons__summary">{s.summary}</p>
              <p className="hry-seasons__plan">{s.plan}</p>
            </li>
          ))}
        </ol>

        <div className="hry-seasons__crowds">
          <h3 className="hry-seasons__crowds-title">Festival periods to plan around</h3>
          <ul className="hry-seasons__advisories">
            {CROWD_ADVISORIES.map((a) => (
              <li key={a.id} className="hry-seasons__advisory">
                <p className="hry-seasons__adv-head">
                  <strong>{a.title}</strong>
                  <span>{a.period}</span>
                </p>
                <p className="hry-seasons__adv-text">{a.text}</p>
              </li>
            ))}
          </ul>
        </div>

        <p className="hry-seasons__note">
          <Icon name="info" size={16} />
          <span>{SEASON_NOTE}</span>
        </p>
      </div>
    </section>
  );
}
