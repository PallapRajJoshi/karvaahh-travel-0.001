import Image from "next/image";
import { sudurpaschimDestinations } from "@/data/sudurpaschim/destinations";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-destinations.css";

export default function SudurpaschimDestinations() {
  return (
    <section
      id="sp-destinations"
      className="sp-destinations"
      aria-labelledby="sp-destinations-heading"
    >
      <div className="sp-container sp-destinations__inner">
        <SudurpaschimSectionHeading
          index="03"
          eyebrow="Places to Go"
          heading="The far west, waiting to be discovered."
          description="Nine districts, from the Tharu wetlands of the plains to the Himalayan valleys of Darchula."
        />

        <ul className="sp-dest-grid">
          {sudurpaschimDestinations.map((place) => (
            <li
              className={`sp-dest-card sp-dest-card--${place.size}`}
              key={place.number}
            >
              <div className="sp-dest-card__media">
                <Image
                  src={place.image}
                  alt={place.alt}
                  fill
                  sizes="(max-width: 720px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="sp-dest-card__image"
                />
                <div className="sp-dest-card__scrim" aria-hidden="true" />
              </div>
              <div className="sp-dest-card__body">
                <span className="sp-dest-card__category">
                  {place.category}
                </span>
                <h3 className="sp-dest-card__title">{place.name}</h3>
                <p className="sp-dest-card__location">
                  {place.district} &middot; {place.location}
                </p>
                <p className="sp-dest-card__desc">{place.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
