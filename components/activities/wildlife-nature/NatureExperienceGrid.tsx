import { EXPERIENCES } from "@/data/activities/wildlife-nature/experiences";
import { WildImage } from "./shared/WildImage";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import { PlanLink } from "./shared/PlanLink";
import "./NatureExperienceGrid.css";

export function NatureExperienceGrid() {
  return (
    <section id="experiences" className="wn-section wn-section--white" aria-labelledby="wn-exp-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-exp-title"
          eyebrow="Explore your way"
          title="Wildlife & Nature Experiences"
          lead="Six ways to meet Nepal's wild places — each shaped around your pace, interests and the season."
        />

        <ul className="wn-exp__grid">
          {EXPERIENCES.map((exp, i) => (
            <li key={exp.id}>
              <Reveal delay={(i % 3) * 90} className="wn-exp__reveal">
                <article className="wn-exp__card">
                  <div className="wn-media wn-exp__media">
                    <WildImage name={exp.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 380px" />
                    <span className="wn-exp__icon">
                      <Icon name={exp.icon} size={20} />
                    </span>
                  </div>
                  <div className="wn-exp__body">
                    <h3 className="wn-exp__title">{exp.title}</h3>
                    <p className="wn-exp__desc">{exp.description}</p>
                    <ul className="wn-exp__highlights">
                      {exp.highlights.map((h) => (
                        <li key={h}>
                          <Icon name="check" size={15} />
                          {h}
                        </li>
                      ))}
                    </ul>
                    <PlanLink className="wn-link" prefill={{ experience: exp.id }} aria-label={`Explore experience: ${exp.title}`}>
                      Explore Experience <Icon name="arrow-right" size={16} />
                    </PlanLink>
                  </div>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
