import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import { lumbiniExperiences } from "@/data/lumbini/experiences";
import "./lumbini-experiences.css";

export default function LumbiniExperiences() {
  return (
    <section
      className="lumbini-experiences"
      id="experiences"
      aria-label="Lumbini experiences"
    >
      <div className="lumbini-experiences__inner">
        <LumbiniSectionHeading
          index="02"
          eyebrow="Experience Lumbini"
          heading="One province."
          emphasis="Many journeys."
          description="Six distinct ways to move through Lumbini — from sacred pilgrimage to wild frontier."
        />

        <ul className="lumbini-experiences__grid">
          {lumbiniExperiences.map((experience) => (
            <li className="lumbini-experience-card" key={experience.number}>
              <div className="lumbini-experience-card__media">
                <Image
                  src={experience.image}
                  alt={experience.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="lumbini-experience-card__image"
                />
                <span
                  className="lumbini-experience-card__number"
                  aria-hidden="true"
                >
                  {experience.number}
                </span>
              </div>

              <div className="lumbini-experience-card__body">
                <p className="lumbini-experience-card__meta">
                  {experience.meta}
                </p>
                <h3 className="lumbini-experience-card__title">
                  {experience.title}
                </h3>
                <p className="lumbini-experience-card__description">
                  {experience.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
