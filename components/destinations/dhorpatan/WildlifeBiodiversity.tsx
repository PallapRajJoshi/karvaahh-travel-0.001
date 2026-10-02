import Image from "next/image";
import { wildlifeSpecies, habitatHighlights, conservationMessage } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import "./WildlifeBiodiversity.css";

export default function WildlifeBiodiversity() {
  return (
    <section className="wildlife-section" id="wildlife">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Ecology"
          heading="Wildlife & Biodiversity"
          subheading="Dhorpatan's alpine and forest habitats support a range of Himalayan species."
        />

        <div className="wildlife-section__species-grid">
          {wildlifeSpecies.map((species, i) => (
            <Reveal key={species.name} delay={i * 90} className="wildlife-species">
              <div className="wildlife-species__media">
                <Image
                  src={species.image.src}
                  alt={species.image.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 22vw"
                  className="wildlife-species__image"
                />
              </div>
              <h3 className="wildlife-species__name">{species.name}</h3>
              <p className="wildlife-species__description">{species.description}</p>
            </Reveal>
          ))}
        </div>

        <div className="wildlife-section__habitats">
          {habitatHighlights.map((habitat) => (
            <div key={habitat.title} className="habitat-highlight">
              <h4 className="habitat-highlight__title">{habitat.title}</h4>
              <p className="habitat-highlight__description">{habitat.description}</p>
            </div>
          ))}
        </div>

        <div className="wildlife-section__conservation">
          <p>{conservationMessage}</p>
        </div>
      </div>
    </section>
  );
}
