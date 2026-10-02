import Image from "next/image";
import SectionHeading from "@/components/shared/SectionHeading";
import { whyVisitCards } from "@/data/destinations/rara-lake/content";
import "./RaraLakeWhyVisit.css";

export default function RaraLakeWhyVisit() {
  return (
    <section className="rara-why-visit" aria-labelledby="rara-why-visit-heading">
      <SectionHeading
        eyebrow="Why Rara"
        title="Why Visit Rara Lake?"
      />
      <div className="rara-why-visit__grid">
        {whyVisitCards.map((card) => (
          <article key={card.id} className="rara-why-visit__card">
            <div className="rara-why-visit__media">
              <Image
                src={card.image.src}
                alt={card.image.alt}
                fill
                sizes="(max-width: 700px) 90vw, (max-width: 1100px) 45vw, 30vw"
                className="rara-why-visit__image"
              />
            </div>
            <h3 className="rara-why-visit__title">{card.title}</h3>
            <p className="rara-why-visit__description">{card.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
