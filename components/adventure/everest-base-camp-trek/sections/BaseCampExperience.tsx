import { basecamp } from "../data/basecamp";
import SmartImage from "../ui/SmartImage";
import Icon from "../ui/Icon";
import "../styles/basecamp.css";

export default function BaseCampExperience() {
  return (
    <section id="basecamp" className="ebc-basecamp" aria-labelledby="ebc-basecamp-title">
      <div className="ebc-basecamp__media">
        <SmartImage image={basecamp.image} sizes="100vw" />
      </div>
      <div className="ebc-basecamp__overlay" aria-hidden="true" />

      <div className="ebc-container ebc-basecamp__inner">
        <header className="ebc-basecamp__head" data-reveal="">
          <p className="ebc-heading__eyebrow ebc-basecamp__eyebrow">{basecamp.eyebrow}</p>
          <h2 id="ebc-basecamp-title" className="ebc-basecamp__title">
            {basecamp.title}
          </h2>
          <p className="ebc-basecamp__intro">{basecamp.intro}</p>
        </header>

        <ol className="ebc-basecamp__panels">
          {basecamp.panels.map((p, i) => (
            <li key={p.id} className="ebc-basecamp__panel" data-reveal="" style={{ ["--i" as string]: i + 1 }}>
              <span className="ebc-basecamp__alt">{p.altitude}</span>
              <h3 className="ebc-basecamp__panel-title">{p.label}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>

        <div className="ebc-basecamp__foot" data-reveal="" style={{ ["--i" as string]: 4 }}>
          <p className="ebc-basecamp__note">
            <Icon name="info" />
            {basecamp.viewNote}
          </p>
          <p className="ebc-basecamp__achievement">{basecamp.achievement}</p>
        </div>
      </div>
    </section>
  );
}
