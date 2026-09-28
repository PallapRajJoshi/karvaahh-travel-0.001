import Image from "next/image";
import { madheshExperiences } from "@/data/madhesh/experiences";
import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import "./madhesh-experiences.css";

export default function MadheshExperiences() {
  return (
    <section
      id="experiences"
      className="madhesh-experiences"
      aria-label="Ways to experience Madhesh"
    >
      <MadheshSectionHeading
        eyebrow="Experience Madhesh"
        heading="One province. Endless ways to experience it."
        align="center"
      />

      <div className="madhesh-experiences__grid">
        {madheshExperiences.map((exp) => (
          <article className="madhesh-experience-card" key={exp.number}>
            <div className="madhesh-experience-card__media">
              <Image
                src={exp.image}
                alt={`${exp.title} in Madhesh Province`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="madhesh-experience-card__image"
              />
              <span className="madhesh-experience-card__number">
                {exp.number}
              </span>
            </div>
            <h3 className="madhesh-experience-card__title">{exp.title}</h3>
            <p className="madhesh-experience-card__desc">{exp.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
