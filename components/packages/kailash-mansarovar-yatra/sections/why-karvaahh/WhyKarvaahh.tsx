import { features, featuresHeading } from "../../data/features";
import Icon from "../../shared/Icon";
import Reveal from "../../shared/Reveal";
import SectionHeading from "../../shared/SectionHeading";
import "./WhyKarvaahh.css";

export default function WhyKarvaahh() {
  const enabled = features.filter((f) => f.enabled);
  if (!enabled.length) return null;

  return (
    <section id="why-karvaahh" className="km-section km-section--white" aria-labelledby="km-why-title">
      <div className="km-container">
        <SectionHeading id="km-why-title" {...featuresHeading} />
        <ul className="km-why__grid">
          {enabled.map((f, i) => (
            <Reveal as="li" key={f.id} index={i % 4} className="km-why__item">
              <span className="km-why__icon">
                <Icon name={f.icon} size={24} />
              </span>
              <h3 className="km-why__title">{f.title}</h3>
              <p className="km-why__body">{f.body}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
