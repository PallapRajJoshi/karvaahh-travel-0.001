import Image from "next/image";
import { madheshDestinations } from "@/data/madhesh/destinations";
import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import "./madhesh-destinations.css";

export default function MadheshDestinations() {
  return (
    <section
      id="destinations"
      className="madhesh-destinations"
      aria-label="Places to visit in Madhesh"
    >
      <MadheshSectionHeading
        eyebrow="Places to Go"
        heading="The highlights of Madhesh"
        description="Eight districts, one living cultural landscape — from sacred cities to river wetlands."
      />

      <div className="madhesh-destinations__grid">
        {madheshDestinations.map((district, i) => (
          <article
            className={`madhesh-district-card ${
              i === 0 ? "madhesh-district-card--wide" : ""
            }`}
            key={district.slug}
          >
            <div className="madhesh-district-card__media">
              <Image
                src={district.image}
                alt={`${district.district} district, Madhesh Province`}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="madhesh-district-card__image"
              />
              <div className="madhesh-district-card__overlay" aria-hidden="true" />
              <div className="madhesh-district-card__text">
                <span className="madhesh-district-card__name">
                  {district.district}
                </span>
                <span className="madhesh-district-card__tagline">
                  {district.tagline}
                </span>
              </div>
            </div>
            <ul className="madhesh-district-card__places">
              {district.places.slice(0, 4).map((place) => (
                <li key={place}>{place}</li>
              ))}
              {district.places.length > 4 && (
                <li className="madhesh-district-card__more">
                  +{district.places.length - 4} more
                </li>
              )}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
