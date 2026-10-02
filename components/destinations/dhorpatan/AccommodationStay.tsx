import { accommodationOptions, accommodationNote } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import "./AccommodationStay.css";

export default function AccommodationStay() {
  return (
    <section className="accommodation-section" id="accommodation">
      <div className="dhorpatan-page__container">
        <SectionHeading eyebrow="Where to Stay" heading="Accommodation & Stay Options" />

        <div className="accommodation-section__grid">
          {accommodationOptions.map((option, i) => (
            <Reveal key={option.title} delay={i * 90} className="accommodation-card">
              <h3 className="accommodation-card__title">{option.title}</h3>
              <p className="accommodation-card__description">{option.description}</p>
            </Reveal>
          ))}
        </div>

        <p className="accommodation-section__note">{accommodationNote}</p>
      </div>
    </section>
  );
}
