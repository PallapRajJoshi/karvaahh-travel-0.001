import { safety } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./respect.css";

export function SafetySection() {
  return (
    <section className="pmy-section pmy-section--tight pmy-safety" aria-labelledby="pmy-safety-title">
      <div className="pmy-container">
        <SectionHeading id="pmy-safety-title" title={safety.heading} />
        <ul className="pmy-safety__grid" data-reveal>
          {safety.points.map((p) => (
            <li key={p.title}>
              {p.icon ? <Icon name={p.icon} size={20} /> : null}
              <div>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
