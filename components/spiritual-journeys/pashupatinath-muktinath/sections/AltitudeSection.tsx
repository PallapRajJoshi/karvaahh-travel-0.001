import { altitude } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import "./prepare.css";

export function AltitudeSection() {
  return (
    <section id="prepare" className="pmy-section pmy-altitude" aria-labelledby="pmy-altitude-title">
      <div className="pmy-container">
        <div className="pmy-altitude__panel">
          <div className="pmy-altitude__lead" data-reveal>
            <p className="pmy-heading__kicker">Prepare</p>
            <h2 id="pmy-altitude-title" className="pmy-heading__title pmy-heading__title--h2">{altitude.heading}</h2>
            <p className="pmy-altitude__figure">
              <span className="pmy-altitude__value">{altitude.highlight}</span>
              <span className="pmy-altitude__label">{altitude.highlightLabel}</span>
            </p>
            <p className="pmy-altitude__intro">{altitude.intro}</p>
            <p className="pmy-altitude__medical" role="note">
              <Icon name="heart" size={20} />
              <span>{altitude.medical}</span>
            </p>
          </div>
          <ul className="pmy-altitude__points" data-reveal>
            {altitude.points.map((p) => (
              <li key={p.title}>
                {p.icon ? <Icon name={p.icon} size={22} /> : null}
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
