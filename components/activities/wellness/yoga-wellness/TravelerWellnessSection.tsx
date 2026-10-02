import Reveal from "./shared/Reveal";
import WellnessImage from "./shared/WellnessImage";
import SectionHeading from "./shared/SectionHeading";
import PrefillButton from "./shared/PrefillButton";
import { travelers } from "./data/styles-travelers";
import "./TravelerWellnessSection.css";

export default function TravelerWellnessSection() {
  return (
    <section className="ykw-section" aria-labelledby="ykw-trav-title">
      <div className="ykw-container">
        <SectionHeading
          id="ykw-trav-title"
          eyebrow="For every traveler"
          title="Wellness Experiences for Every Traveler"
        />
        <ul className="ykw-trav__grid">
          {travelers.map((t, i) => (
            <Reveal as="li" key={t.id} delay={(i % 4) * 80} className="ykw-trav__card">
              <div className="ykw-trav__img">
                <WellnessImage image={t.image} sizes="(max-width: 600px) 100vw, (max-width: 1100px) 50vw, 25vw" />
              </div>
              <div className="ykw-trav__body">
                <p className="ykw-trav__kicker">{t.title}</p>
                <h3>{t.heading}</h3>
                <p>{t.description}</p>
                <PrefillButton purpose={t.purposeValue} variant="outline">
                  {t.ctaLabel}
                </PrefillButton>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
