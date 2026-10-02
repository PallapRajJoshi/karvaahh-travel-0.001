import { experiences, experiencesNote } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import ExperienceCard from "@/components/shared/ExperienceCard";
import Reveal from "@/components/shared/Reveal";
import "./ExperiencesActivities.css";

export default function ExperiencesActivities() {
  return (
    <section className="experiences-section" id="experiences">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Things To Do"
          heading="Experiences & Activities"
          subheading="Ways to spend your days in Dhorpatan's alpine wilderness."
        />

        <div className="experiences-section__grid">
          {experiences.map((experience, i) => (
            <Reveal key={experience.title} delay={(i % 5) * 70}>
              <ExperienceCard experience={experience} />
            </Reveal>
          ))}
        </div>

        <p className="experiences-section__note">{experiencesNote}</p>
      </div>
    </section>
  );
}
