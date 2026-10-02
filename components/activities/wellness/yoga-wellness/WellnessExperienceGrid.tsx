import Reveal from "./shared/Reveal";
import WellnessImage from "./shared/WellnessImage";
import SectionHeading from "./shared/SectionHeading";
import PrefillButton from "./shared/PrefillButton";
import { icons } from "./shared/icons";
import { experiences } from "./data/experiences";
import { SECTION_IDS } from "./data/config";
import "./WellnessExperienceGrid.css";

export default function WellnessExperienceGrid() {
  return (
    <section
      id={SECTION_IDS.experiences}
      className="ykw-section ykw-section--white"
      aria-labelledby="ykw-exp-title"
    >
      <div className="ykw-container">
        <SectionHeading
          id="ykw-exp-title"
          eyebrow="Wellness experiences"
          title="Discover Your Path to Well-Being"
          intro="Six ways to slow down. Combine them, or choose one that feels right for you."
        />
        <ul className="ykw-exp__grid">
          {experiences.map((e, i) => (
            <Reveal as="li" key={e.id} delay={(i % 3) * 90} className="ykw-exp__card">
              <div className="ykw-exp__img">
                <WellnessImage image={e.image} sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw" />
              </div>
              <div className="ykw-exp__body">
                <h3>{e.title}</h3>
                <p className="ykw-exp__desc">{e.description}</p>
                <ul className="ykw-exp__list">
                  {e.highlights.map((h) => (
                    <li key={h}>
                      <span className="ykw-exp__tick">{icons.check}</span>
                      {h}
                    </li>
                  ))}
                </ul>
                <PrefillButton experience={e.inquiryValue} variant="outline">
                  Explore Experience
                </PrefillButton>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
