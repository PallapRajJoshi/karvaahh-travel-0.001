import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import { icons } from "./shared/icons";
import { activities } from "./data/experiences";
import "./WellnessActivities.css";

export default function WellnessActivities() {
  return (
    <section className="ykw-section ykw-section--blue ykw-act" aria-labelledby="ykw-act-title">
      <div className="ykw-container">
        <SectionHeading
          id="ykw-act-title"
          tone="dark"
          eyebrow="Wellness activities"
          title="Experiences for Mind and Body"
          intro="The building blocks of a retreat. Which ones appear in your journey depends on the destination and the services confirmed."
        />
        <ul className="ykw-act__grid">
          {activities.map((a, i) => (
            <Reveal as="li" key={a.id} delay={(i % 3) * 90} className="ykw-act__card">
              <span className="ykw-act__icon">{icons[a.icon]}</span>
              <h3>{a.title}</h3>
              <p>{a.description}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
