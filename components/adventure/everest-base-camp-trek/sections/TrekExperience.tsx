import { experiences } from "../data/experiences";
import SectionHeading from "../ui/SectionHeading";
import ExperienceShowcase from "./ExperienceShowcase";
import "../styles/experience.css";

export default function TrekExperience() {
  return (
    <section id="experience" className="ebc-section ebc-section--dark ebc-experience" aria-labelledby="ebc-experience-title">
      <div className="ebc-container">
        <SectionHeading
          id="ebc-experience-title"
          eyebrow="The Journey"
          title="Experience the Adventure of Everest"
          subtitle="Eight moments that define the walk from Lukla to the foot of the world's highest mountain."
        />
        <ExperienceShowcase items={experiences} />
      </div>
    </section>
  );
}
