import Reveal from "../shared/Reveal";
import SectionHeading from "../shared/SectionHeading";
import { WHY_ICONS } from "../shared/Icons";
import { WHY_POINTS } from "../data/planning";
import "./WhyChooseKarvaahh.css";

export default function WhyChooseKarvaahh() {
  return (
    <section className="cr-section cr-why" aria-labelledby="cr-why-title">
      <div className="cr-container">
        <SectionHeading
          id="cr-why-title"
          eyebrow="Why Karvaahh"
          title="Why Choose Karvaahh for Cruise Experiences?"
        />
        <ul className="cr-why__grid">
          {WHY_POINTS.map((p, i) => {
            const Icon = WHY_ICONS[i % WHY_ICONS.length];
            return (
              <Reveal as="li" key={p.title} delay={(i % 3) * 90} className="cr-why__item">
                <span className="cr-why__icon">
                  <Icon />
                </span>
                <h3>{p.title}</h3>
                <p>{p.text}</p>
              </Reveal>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
