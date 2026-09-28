import type { CSSProperties } from "react";
import { accommodation, food } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./stay.css";

export function StaySection() {
  return (
    <section id="stay" className="pmy-section pmy-stay" aria-labelledby="pmy-stay-title">
      <div className="pmy-container">
        <SectionHeading id="pmy-stay-title" title={accommodation.heading} intro={<p>{accommodation.intro}</p>} />

        <div className="pmy-stay__scale" aria-hidden="true">
          <span>{accommodation.scaleLabels.start}</span>
          <span className="pmy-stay__scale-bar" />
          <span>{accommodation.scaleLabels.end}</span>
        </div>

        <ol className="pmy-stay__stops" data-reveal>
          {accommodation.stops.map((s) => (
            <li key={s.place} className="pmy-stay__stop" style={{ "--comfort": s.comfort } as CSSProperties}>
              <Icon name="bed" size={22} />
              <h3>{s.place}</h3>
              <p className="pmy-stay__type">{s.type}</p>
              <p>{s.text}</p>
            </li>
          ))}
        </ol>
        <p className="pmy-note pmy-stay__note">{accommodation.note}</p>

        <div className="pmy-food" aria-labelledby="pmy-food-title">
          <h2 id="pmy-food-title" className="pmy-heading__title pmy-heading__title--h2" data-reveal>{food.heading}</h2>
          <ul className="pmy-food__list" data-reveal>
            {food.points.map((f) => (
              <li key={f.title}>
                {f.icon ? <Icon name={f.icon} size={22} /> : null}
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
