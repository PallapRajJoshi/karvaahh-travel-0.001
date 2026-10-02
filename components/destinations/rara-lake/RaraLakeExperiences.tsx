import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { experiences } from "@/data/destinations/rara-lake/experiences";
import "./RaraLakeExperiences.css";

export default function RaraLakeExperiences() {
  return (
    <section className="rara-experiences" aria-labelledby="rara-experiences-heading">
      <SectionHeading
        eyebrow="What You Can Do"
        title="Experiences & Activities"
      />
      <div className="rara-experiences__grid">
        {experiences.map((experience) => (
          <article key={experience.id} className="rara-experiences__card">
            <div className="rara-experiences__media">
              <Image
                src={experience.image.src}
                alt={experience.image.alt}
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 22vw"
                className="rara-experiences__image"
              />
            </div>
            <h3 className="rara-experiences__title">{experience.title}</h3>
            <p className="rara-experiences__description">{experience.description}</p>
            {experience.availabilityNote && (
              <p className="rara-experiences__note">{experience.availabilityNote}</p>
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
