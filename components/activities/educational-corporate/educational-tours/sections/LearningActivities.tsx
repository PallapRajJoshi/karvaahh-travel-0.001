import { ACTIVITIES, ACTIVITIES_SECTION } from "../data/content";
import { Icon } from "../shared/Icon";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./LearningActivities.css";

export function LearningActivities() {
  return (
    <section id="activities" className="et-section et-section--white" aria-labelledby="et-act-title">
      <div className="et-container">
        <SectionHeading eyebrow={ACTIVITIES_SECTION.eyebrow} title={ACTIVITIES_SECTION.title} id="et-act-title" />
        <ul className="et-act__grid">
          {ACTIVITIES.map((a, i) => (
            <Reveal as="li" key={a.title} index={i % 4} className="et-act__card">
              <span className="et-act__icon">
                <Icon name={a.icon} size={28} />
              </span>
              <h3 className="et-act__title">{a.title}</h3>
              <p className="et-act__text">{a.text}</p>
              <span className="et-act__bar" aria-hidden="true" />
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
