import Image from "next/image";
import { gandakiExperiences } from "@/data/gandaki/experiences";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import "./gandaki-experiences.css";

export default function GandakiExperiences() {
  return (
    <section className="gandaki-experiences" aria-labelledby="gandaki-experiences-title">
      <div className="gandaki-experiences__intro">
        <GandakiSectionHeading
          index="03"
          eyebrow="WHY VISIT GANDAKI"
          heading="One province."
          emphasis="Endless mountain stories."
          titleId="gandaki-experiences-title"
          description="Few places on Earth rise from subtropical river valleys to 8,000 m summits in such a short distance — and every altitude band brings a different way to travel."
        />
      </div>

      <ul className="gandaki-experiences__grid">
        {gandakiExperiences.map((experience) => (
          <li className="gandaki-experience-card gandaki-reveal" key={experience.id}>
            <div className="gandaki-experience-card__media">
              <Image
                src={experience.image}
                alt={experience.alt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                className="gandaki-experience-card__image"
              />
              <div className="gandaki-experience-card__scrim" />
            </div>
            <span className="gandaki-experience-card__index">{experience.index}</span>
            <h3 className="gandaki-experience-card__title">{experience.title}</h3>
            <p className="gandaki-experience-card__description">{experience.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
