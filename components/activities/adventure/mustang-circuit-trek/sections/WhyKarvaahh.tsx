import { anchors, headings } from "../data/config";
import { features } from "../data/features";
import SectionHeading from "../shared/SectionHeading";
import { Icon } from "../shared/Icon";
import { staggerStyle } from "../shared/stagger";
import "./why.css";

export default function WhyKarvaahh() {
  const h = headings.why;
  const items = features.filter((f) => f.enabled);
  if (!items.length) return null;

  return (
    <section id={anchors.why.id} className="mc-section mc-why" aria-labelledby="mc-why-title">
      <div className="mc-container">
        <SectionHeading id="mc-why-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} align="center" />
        <ul className="mc-why__grid">
          {items.map((f, i) => (
            <li key={f.id} className="mc-why__item" data-reveal style={staggerStyle(i % 4)}>
              <span className="mc-why__icon">
                <Icon name={f.icon} />
              </span>
              <h3 className="mc-why__title">{f.title}</h3>
              <p className="mc-why__text">{f.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
