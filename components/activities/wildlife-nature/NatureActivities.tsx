import { ACTIVITIES } from "@/data/activities/wildlife-nature/activities";
import { Reveal } from "./shared/Reveal";
import { SectionHeading } from "./shared/SectionHeading";
import { Icon } from "./shared/Icon";
import { PlanLink } from "./shared/PlanLink";
import "./NatureActivities.css";

export function NatureActivities() {
  return (
    <section className="wn-section wn-section--white" aria-labelledby="wn-act-title">
      <div className="wn-container">
        <SectionHeading
          id="wn-act-title"
          eyebrow="Experience the outdoors"
          title="Nature Activities"
          lead="What you can do out there. Availability depends on the destination, season and local rules, and is confirmed for your dates."
          align="center"
        />

        <ul className="wn-act__grid">
          {ACTIVITIES.map((a, i) => (
            <li key={a.id}>
              <Reveal delay={(i % 3) * 80} className="wn-act__reveal">
                <article className="wn-act__card">
                  <span className="wn-act__icon">
                    <Icon name={a.icon} size={28} />
                  </span>
                  <h3 className="wn-act__title">{a.title}</h3>
                  <p className="wn-act__desc">{a.description}</p>
                  <PlanLink className="wn-link" prefill={{ experience: a.experience }}>
                    Ask about this <Icon name="arrow-right" size={16} />
                  </PlanLink>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
