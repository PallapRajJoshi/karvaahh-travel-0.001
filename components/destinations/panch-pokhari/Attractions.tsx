import SafeImage from "@/components/shared/SafeImage";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { attractions } from "@/data/panch-pokhari/attractions";
import "./attractions.css";

export default function Attractions() {
  return (
    <section className="pp-attractions" aria-labelledby="attractions-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Around Panch Pokhari"
          title="Places to Explore Along the Journey"
          align="left"
        />
        <div className="pp-attractions__grid">
          {attractions.map((attraction, index) => (
            <Reveal
              key={attraction.id}
              variant="fade-up"
              delay={index * 70}
              className={`pp-attractions__card pp-attractions__card--${attraction.size}`}
            >
              <div className="pp-attractions__image-frame">
                <SafeImage
                  src={attraction.image}
                  alt={attraction.imageAlt}
                  fallbackLabel={attraction.title}
                  fill
                  sizes={
                    attraction.size === "large"
                      ? "(max-width: 900px) 100vw, 60vw"
                      : "(max-width: 900px) 50vw, 30vw"
                  }
                  className="pp-attractions__image"
                />
                <div className="pp-attractions__overlay" aria-hidden="true" />
                <div className="pp-attractions__caption">
                  <h3 className="pp-attractions__title">{attraction.title}</h3>
                  <p className="pp-attractions__text">{attraction.body}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
