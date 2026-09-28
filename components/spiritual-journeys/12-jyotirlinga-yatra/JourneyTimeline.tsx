import SectionHeading from "./SectionHeading";
import { anchorFor, bySlug, journeyFlow } from "./data/jyotirlingaData";
import "./JourneyTimeline.css";

export default function JourneyTimeline() {
  return (
    <section className="jyl-section jyl-section--stone jyl-flow" aria-labelledby="jyl-flow-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-flow-title" title={journeyFlow.heading} lead={journeyFlow.intro} />
        <ol className="jyl-flow__list">
          {journeyFlow.stages.map((stage, i) => (
            <li key={stage.title} className="jyl-flow__stage">
              <span className="jyl-flow__marker" aria-hidden="true" />
              <p className="jyl-flow__step">Stage {i + 1}</p>
              <h3 className="jyl-flow__title">{stage.title}</h3>
              <ul className="jyl-flow__temples">
                {stage.temples.map((slug) => (
                  <li key={slug}>
                    <a href={`#${anchorFor(slug)}`}>{bySlug[slug].name}</a>
                  </li>
                ))}
              </ul>
              <p className="jyl-flow__note">{stage.note}</p>
            </li>
          ))}
        </ol>
        <p className="jyl-note jyl-flow__disclaimer">{journeyFlow.disclaimer}</p>
      </div>
    </section>
  );
}
