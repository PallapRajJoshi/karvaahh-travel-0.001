import { travellerTypes } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./prepare.css";

export function TravellerTypes() {
  return (
    <section className="pmy-section pmy-section--tight pmy-travellers" aria-labelledby="pmy-travellers-title">
      <div className="pmy-container">
        <SectionHeading id="pmy-travellers-title" title={travellerTypes.heading} />
        <ul className="pmy-travellers__list">
          {travellerTypes.items.map((t) => (
            <li key={t.title} className="pmy-travellers__item" data-reveal>
              {t.icon ? <Icon name={t.icon} size={24} /> : null}
              <h3>{t.title}</h3>
              <p>{t.text}</p>
            </li>
          ))}
        </ul>

        <div className="pmy-travellers__care" aria-labelledby="pmy-seniors-title" data-reveal>
          <h3 id="pmy-seniors-title" className="pmy-heading__title pmy-heading__title--h3">
            {travellerTypes.seniorsHeading}
          </h3>
          <ul className="pmy-ticklist">
            {travellerTypes.seniors.map((s) => <li key={s}>{s}</li>)}
          </ul>
          <p className="pmy-note">{travellerTypes.seniorsNote}</p>
        </div>
      </div>
    </section>
  );
}
