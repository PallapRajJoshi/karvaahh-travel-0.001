import { ANCHORS } from "../data/config";
import { guestJourney } from "../data/guests";
import Arrow from "../shared/Arrow";
import ChapterMark from "../shared/ChapterMark";
import SectionHeading from "../shared/SectionHeading";
import { cssVars } from "../shared/cssVars";
import "./GuestExperience.css";

export default function GuestExperience() {
  return (
    <section id={ANCHORS.guests} className="dw-section dw-guests" aria-labelledby="dw-guests-title">
      <div className="dw-container">
        <ChapterMark index={4} />
        <SectionHeading
          id="dw-guests-title"
          eyebrow="Guest experience"
          title={
            <>
              Your guests are <em>part of the story</em>
            </>
          }
          intro="A destination wedding asks a lot of the people you love — flights, leave from work, a new place. We make the journey as memorable for them as the wedding itself."
        />

        <ol className="dw-guests__track">
          {guestJourney.map((phase, i) => (
            <li key={phase.id} className="dw-guests__phase" data-reveal="" style={cssVars({ "--dw-i": i })}>
              <p className="dw-guests__n">Phase 0{i + 1}</p>
              <h3 className="dw-guests__title">{phase.title}</h3>
              <ol className="dw-guests__steps">
                {phase.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ol>
            </li>
          ))}
        </ol>

        <div className="dw-guests__cta">
          <a href={`#${ANCHORS.plan}`} className="dw-btn dw-btn--ghost">
            Plan Guest Experience <Arrow />
          </a>
        </div>
      </div>
    </section>
  );
}
