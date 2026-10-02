import Image from "next/image";
import { khaptadExperiences, khaptadExperiencesDisclaimer } from "@/data/destinations/khaptad/khaptad-experiences";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function ExperienceCard({ item }: { item: (typeof khaptadExperiences)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-experience-card">
      <div className="khaptad-experience-card__media">
        <Image src={item.image} alt={item.title} fill sizes="(max-width: 768px) 100vw, 25vw" />
      </div>
      <h3 className="khaptad-experience-card__title">{item.title}</h3>
      <p className="khaptad-experience-card__description">{item.description}</p>
    </div>
  );
}

export default function KhaptadExperiences() {
  return (
    <section className="khaptad-experiences" aria-labelledby="khaptad-experiences-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Experiences"
          title="Experiences & Activities"
          description="From alpine meadow walks to quiet meditation, Khaptad offers a slower, more reflective way to travel."
        />
        <div className="khaptad-experiences__grid">
          {khaptadExperiences.map((item) => (
            <ExperienceCard key={item.id} item={item} />
          ))}
        </div>
        <p className="khaptad-experiences__disclaimer">{khaptadExperiencesDisclaimer}</p>
      </div>
    </section>
  );
}
