import Icon from "./Icon";
import SectionHeading from "./SectionHeading";
import { SECTION } from "./data/config";
import { EXPERIENCES } from "./data/experiences";
import "./spiritual-experiences.css";

export default function SpiritualExperiences() {
  return (
    <section
      id={SECTION.experiences}
      className="hry-section hry-exp"
      aria-labelledby="hry-exp-title"
    >
      <div className="hry-container hry-exp__layout">
        <div className="hry-exp__intro">
          <SectionHeading
            id="hry-exp-title"
            title="Sacred experiences along the holy Ganga"
            intro="What pilgrims come for: the evening aarti, darshan, ashram mornings and time by the river. Adventure activities such as rafting are not part of this yatra."
          />
        </div>

        <ul className="hry-exp__list">
          {EXPERIENCES.map((exp) => (
            <li key={exp.id} className="hry-exp__item">
              <span className="hry-exp__icon">
                <Icon name={exp.icon} size={24} />
              </span>
              <div>
                <h3 className="hry-exp__title">{exp.title}</h3>
                <p className="hry-exp__desc">{exp.description}</p>
                <p className="hry-exp__suits">
                  <span className="hry-sr-only">Suitable for: </span>
                  {exp.suitableFor.map((s) => (
                    <span key={s} className="hry-exp__chip">
                      {s}
                    </span>
                  ))}
                </p>
                {exp.note ? <p className="hry-exp__note">{exp.note}</p> : null}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
