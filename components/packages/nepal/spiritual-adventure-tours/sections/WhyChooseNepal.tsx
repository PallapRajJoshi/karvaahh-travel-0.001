import { headings } from "../config/page.config";
import { whyFeatures } from "../data/experiences";
import { SectionHeading } from "../ui/SectionHeading";
import { Icon } from "../ui/Icon";
import { staggerStyle } from "../lib/format";
import "./info.css";

export function WhyChooseNepal({ anchor }: { anchor: string }) {
  const h = headings.why;
  return (
    <section id={anchor} className="nsa-section nsa-why" aria-labelledby="nsa-why-title">
      <div className="nsa-container">
        <SectionHeading id="nsa-why-title" eyebrow={h.eyebrow} title={h.title} subtitle={h.subtitle} />
        <ul className="nsa-why__grid">
          {whyFeatures.map((f, i) => (
            <li key={f.id} className="nsa-why__item" data-reveal="" style={staggerStyle(i)}>
              <span className="nsa-why__icon">
                <Icon name={f.icon} size={26} />
              </span>
              <h3 className="nsa-why__title">{f.title}</h3>
              <p className="nsa-why__text">{f.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
