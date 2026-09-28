import SectionHeading from "../../shared/SectionHeading";
import Icon from "../../shared/Icon";
import { EXPERIENCES } from "../../data/experiences";
import "./Experiences.css";

export default function Experiences() {
  return (
    <section id="experiences" className="km-section km-experiences" aria-labelledby="experiences-title">
      <div className="km-container">
        <SectionHeading
          id="experiences-title"
          marker="On the journey"
          title="What Travellers May Experience"
          intro="Every Yatra is different. What you see depends on the season, the weather and local access on the day."
        />
        <ul className="km-experiences__list">
          {EXPERIENCES.map((item) => (
            <li key={item.title} className="km-experience">
              <Icon name={item.icon} className="km-experience__icon" />
              <div>
                <h3 className="km-experience__title">{item.title}</h3>
                <p className="km-experience__text">{item.text}</p>
              </div>
            </li>
          ))}
        </ul>
        <p className="km-experiences__foot">
          Weather, visibility and access to specific sites are never guaranteed.
        </p>
      </div>
    </section>
  );
}
