import { JOURNEY } from "../data/content";
import { Icon } from "../shared/Icon";
import { Reveal } from "../shared/Reveal";
import { SectionHeading } from "../shared/SectionHeading";
import "./LearningJourney.css";

export function LearningJourney() {
  return (
    <section id="journey" className="et-section et-section--dark et-journey" aria-labelledby="et-journey-title">
      <div className="et-container">
        <SectionHeading eyebrow={JOURNEY.eyebrow} title={JOURNEY.title} id="et-journey-title" />
        <ol className="et-journey__track">
          {JOURNEY.stages.map((stage, i) => (
            <Reveal as="li" key={stage.title} index={i} className="et-journey__stage">
              <span className="et-journey__node">
                <Icon name={stage.icon} size={26} />
                <span className="et-journey__num" aria-hidden="true">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </span>
              <h3 className="et-journey__title">{stage.title}</h3>
              <p className="et-journey__text">{stage.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
