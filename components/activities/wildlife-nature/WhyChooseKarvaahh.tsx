import { WHY_CHOOSE } from "@/data/activities/wildlife-nature/blocks";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import "./WhyChooseKarvaahh.css";

export function WhyChooseKarvaahh() {
  return (
    <section className="wn-section wn-section--ivory" aria-labelledby="wn-why-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-why-title"
          eyebrow="Karvaahh – Live to Travel"
          title="Why Choose Karvaahh for Wildlife & Nature?"
          align="center"
        />

        <ul className="wn-why__grid">
          {WHY_CHOOSE.map((w, i) => (
            <li key={w.title}>
              <Reveal delay={(i % 3) * 80} className="wn-why__reveal">
                <article className="wn-why__item">
                  <span className="wn-why__icon">
                    <Icon name={w.icon} size={26} />
                  </span>
                  <h3 className="wn-why__title">{w.title}</h3>
                  <p className="wn-why__body">{w.body}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
