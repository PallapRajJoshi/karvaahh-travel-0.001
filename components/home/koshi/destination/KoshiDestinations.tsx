import Image from "next/image";
import Link from "next/link";
import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import { koshiDestinations } from "@/data/koshi/destinations";
import "./koshi-destinations.css";

export default function KoshiDestinations() {
  return (
    <section
      id="destinations"
      className="koshi-destinations koshi-section"
      aria-labelledby="koshi-destinations-title"
    >
      <div className="koshi-shell">

        {/* HEADER */}
        <div className="koshi-destinations__header">

          <KoshiSectionHeading
            eyebrow="PLACES TO GO"
            title={
              <>
                The highlights of <em>Koshi</em>
              </>
            }
            description="From legendary Himalayan trails to peaceful tea gardens and wildlife-rich wetlands, discover the places that make Koshi unforgettable."
          />

          <div
            className="koshi-destinations__index"
            aria-hidden="true"
          >
            <span>09</span>
            <small>DESTINATIONS</small>
          </div>

        </div>

        {/* DESTINATION GRID */}
        <div className="koshi-destination-grid">

          {koshiDestinations.map((destination, index) => (
            <Link
              key={destination.name}
              href="/destinations"
              className={`koshi-destination-card koshi-destination-card--${destination.size}`}
            >

              {/* IMAGE */}
              <Image
                src={destination.image}
                alt={destination.alt}
                fill
                sizes="(max-width: 767px) 100vw, (max-width: 1100px) 50vw, 33vw"
                className="koshi-destination-card__image"
              />

              {/* SHADE */}
              <span
                className="koshi-destination-card__shade"
                aria-hidden="true"
              />

              {/* CARD NUMBER */}
              <span
                className="koshi-destination-card__number"
                aria-hidden="true"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              {/* ARROW */}
              <span
                className="koshi-destination-card__arrow"
                aria-hidden="true"
              >
                ↗
              </span>

              {/* CARD CONTENT */}
              <div className="koshi-destination-card__content">

                <div className="koshi-destination-card__meta">

                  <span className="koshi-destination-card__location">
                    {destination.location}
                  </span>

                  <span className="koshi-destination-card__category">
                    {destination.category}
                  </span>

                </div>

                <h3>{destination.name}</h3>

                <p>{destination.description}</p>

                <span className="koshi-destination-card__explore">
                  <span>Explore destination</span>
                  <span aria-hidden="true">↗</span>
                </span>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  );
}