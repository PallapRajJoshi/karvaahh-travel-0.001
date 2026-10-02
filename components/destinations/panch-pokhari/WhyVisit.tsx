import SafeImage from "@/components/shared/SafeImage";
import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { whyVisitCards } from "@/data/panch-pokhari/whyVisit";
import "./why-visit.css";

export default function WhyVisit() {
  return (
    <section className="pp-why-visit" aria-labelledby="why-visit-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Why Visit"
          title="A Himalayan Journey Beyond the Ordinary"
        />
        <div className="pp-why-visit__grid">
          {whyVisitCards.map((card, index) => (
            <Reveal
              key={card.id}
              variant="fade-up"
              delay={index * 90}
              className="pp-why-visit__card"
            >
              <div className="pp-why-visit__image-frame">
                <SafeImage
                  src={card.image}
                  alt={card.imageAlt}
                  fallbackLabel={card.title}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="pp-why-visit__image"
                />
              </div>
              <div className="pp-why-visit__body">
                <div className="pp-why-visit__icon">
                  <Icon name={card.icon} />
                </div>
                <h3 className="pp-why-visit__title">{card.title}</h3>
                <p className="pp-why-visit__text">{card.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
