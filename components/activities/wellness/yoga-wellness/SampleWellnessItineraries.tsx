import Reveal from "./shared/Reveal";
import SectionHeading from "./shared/SectionHeading";
import PrefillButton from "./shared/PrefillButton";
import { itineraries } from "./data/journeys";
import { SECTION_IDS } from "./data/config";
import "./SampleWellnessItineraries.css";

export default function SampleWellnessItineraries() {
  return (
    <section
      id={SECTION_IDS.itineraries}
      className="ykw-section ykw-section--white"
      aria-labelledby="ykw-itin-title"
    >
      <div className="ykw-container">
        <SectionHeading
          id="ykw-itin-title"
          eyebrow="Illustrative itinerary concepts"
          title="Sample Wellness Retreat Itineraries"
          intro="These are illustrative concepts only. Durations, activities, accommodations, and availability must be confirmed before anything is offered as a bookable package."
        />

        <div className="ykw-itin__list">
          {itineraries.map((it, idx) => (
            <Reveal as="article" key={it.id} delay={(idx % 2) * 80} className="ykw-itin__card">
              <header className="ykw-itin__head">
                <h3>{it.title}</h3>
                <p className="ykw-itin__dur">
                  {it.duration} <span>— illustrative only</span>
                </p>
              </header>
              <ol className="ykw-itin__days">
                {it.days.map((d) => (
                  <li key={d.day} className="ykw-itin__day">
                    <span className="ykw-itin__dot" aria-hidden="true" />
                    <p className="ykw-itin__day-title">
                      <span>{d.day}</span> {d.title}
                    </p>
                    <ul>
                      {d.points.map((p) => (
                        <li key={p}>{p}</li>
                      ))}
                    </ul>
                  </li>
                ))}
              </ol>
              <PrefillButton destination={it.destinationValue} variant="outline">
                Ask about this concept
              </PrefillButton>
            </Reveal>
          ))}
        </div>

        <div className="ykw-itin__cta">
          <PrefillButton variant="primary">Customize Your Wellness Retreat</PrefillButton>
        </div>
      </div>
    </section>
  );
}
