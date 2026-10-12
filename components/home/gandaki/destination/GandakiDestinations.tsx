import Image from "next/image";
import { gandakiDistricts } from "@/data/gandaki/destinations";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import "./gandaki-destinations.css";

export default function GandakiDestinations() {
  return (
    <section className="gandaki-destinations" id="districts" aria-labelledby="gandaki-districts-title">
      <div className="gandaki-destinations__intro">
        <GandakiSectionHeading
          index="09"
          eyebrow="DISTRICT BY DISTRICT"
          heading="The many faces of"
          emphasis="Gandaki"
          titleId="gandaki-districts-title"
          description="Eleven districts, from the lakeside city of Pokhara to the high desert of Mustang — each with its own landscape, culture and pace of travel."
        />
      </div>

      <ul className="gandaki-destinations__grid">
        {gandakiDistricts.map((district, idx) => (
          <li className="gandaki-district-card gandaki-reveal" key={district.id}>
            <div className="gandaki-district-card__media">
              <Image
                src={district.image}
                alt={district.alt}
                fill
                sizes="(max-width: 768px) 90vw, (max-width: 1200px) 45vw, 30vw"
                className="gandaki-district-card__image"
              />
              <div className="gandaki-district-card__scrim" />
              <span className="gandaki-district-card__number">
                {String(idx + 1).padStart(2, "0")}
              </span>
              <div className="gandaki-district-card__caption">
                <h3 className="gandaki-district-card__name">{district.name}</h3>
                <p className="gandaki-district-card__tagline">{district.tagline}</p>
              </div>
            </div>
            <ul className="gandaki-district-card__places">
              {district.places.slice(0, 8).map((place) => (
                <li key={place} className="gandaki-district-card__place">
                  {place}
                </li>
              ))}
              {district.places.length > 8 && (
                <li className="gandaki-district-card__place gandaki-district-card__place--more">
                  +{district.places.length - 8} more
                </li>
              )}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  );
}
