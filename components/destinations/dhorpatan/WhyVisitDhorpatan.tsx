import Image from "next/image";
import { whyVisitCards } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import "./WhyVisitDhorpatan.css";

export default function WhyVisitDhorpatan() {
  return (
    <section className="why-visit" id="why-visit">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Why Dhorpatan"
          heading="Why Visit Dhorpatan?"
          subheading="Eight reasons this remote reserve stands apart from Nepal's better-known trekking destinations."
        />

        <div className="why-visit__grid">
          {whyVisitCards.map((card, i) => (
            <Reveal key={card.title} delay={(i % 4) * 80} className="why-visit__card">
              <div className="why-visit__media">
                <Image
                  src={card.image.src}
                  alt={card.image.alt}
                  fill
                  sizes="(max-width: 640px) 92vw, (max-width: 1024px) 44vw, 22vw"
                  className="why-visit__image"
                />
              </div>
              <h3 className="why-visit__title">{card.title}</h3>
              <p className="why-visit__description">{card.description}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
