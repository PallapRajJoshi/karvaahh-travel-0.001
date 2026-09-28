import { features } from "../data/features";
import SectionHeading from "../ui/SectionHeading";
import Icon from "../ui/Icon";
import "../styles/why.css";

export default function WhyChooseKarvaahh() {
  const enabled = features.filter((f) => f.enabled);
  if (!enabled.length) return null;

  return (
    <section id="why" className="ebc-section ebc-why" aria-labelledby="ebc-why-title">
      <div className="ebc-container ebc-why__grid">
        <div className="ebc-why__intro">
          <SectionHeading
            id="ebc-why-title"
            eyebrow="Why Travel with Karvaahh?"
            title="Your Trusted Partner for an Unforgettable Everest Journey"
            subtitle="We take care of the planning and logistics so you can focus on the mountains, the people and the moment."
          />
        </div>
        <ul className="ebc-why__list">
          {enabled.map((f, i) => (
            <li key={f.id} className="ebc-why__item" data-reveal="" style={{ ["--i" as string]: i % 4 }}>
              <span className="ebc-why__icon">
                <Icon name={f.icon} />
              </span>
              <h3 className="ebc-why__title">{f.title}</h3>
              <p className="ebc-why__desc">{f.description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
