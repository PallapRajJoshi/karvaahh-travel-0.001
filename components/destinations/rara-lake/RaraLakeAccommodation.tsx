import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { accommodationCategories, accommodationIntro } from "@/data/destinations/rara-lake/content";
import "./RaraLakeAccommodation.css";

export default function RaraLakeAccommodation() {
  return (
    <section className="rara-accommodation" aria-labelledby="rara-accommodation-heading">
      <SectionHeading
        eyebrow="Where to Stay"
        title="Accommodation & Stay Options"
        description={accommodationIntro}
      />
      <div className="rara-accommodation__grid">
        {accommodationCategories.map((category) => (
          <article key={category.id} className="rara-accommodation__card">
            <div className="rara-accommodation__media">
              <Image
                src={category.image.src}
                alt={category.image.alt}
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 24vw"
                className="rara-accommodation__image"
              />
            </div>
            <h3 className="rara-accommodation__title">{category.title}</h3>
            <p className="rara-accommodation__description">{category.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
