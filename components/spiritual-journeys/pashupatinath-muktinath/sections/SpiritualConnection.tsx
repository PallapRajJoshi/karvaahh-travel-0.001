import { whyCombine } from "../data/pashupatinathMuktinathData";
import { Icon } from "../ui/Icon";
import { SectionHeading } from "../ui/SectionHeading";
import "./opening.css";

export function SpiritualConnection() {
  return (
    <section className="pmy-section pmy-why" aria-labelledby="pmy-why-title">
      <div className="pmy-container pmy-why__grid">
        <SectionHeading id="pmy-why-title" title={whyCombine.heading} intro={<p>{whyCombine.intro}</p>} />
        <ul className="pmy-why__list">
          {whyCombine.points.map((p) => (
            <li key={p.title} className="pmy-why__item" data-reveal>
              <span className="pmy-why__icon">{p.icon ? <Icon name={p.icon} /> : null}</span>
              <div>
                <h3 className="pmy-why__title">{p.title}</h3>
                <p>{p.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
