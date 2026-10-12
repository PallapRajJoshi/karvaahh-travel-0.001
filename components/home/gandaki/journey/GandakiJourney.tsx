import Image from "next/image";
import Link from "next/link";
import { gandakiRoutes } from "@/data/gandaki/journey";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import "./gandaki-journey.css";

export default function GandakiJourney() {
  return (
    <section className="gandaki-journey" id="routes" aria-labelledby="gandaki-journey-title">
      <div className="gandaki-journey__inner">
        <GandakiSectionHeading
          index="10"
          eyebrow="SUGGESTED ROUTES"
          heading="From lakeside mornings"
          emphasis="to Himalayan silence."
          titleId="gandaki-journey-title"
          description="Five proven ways to string Gandaki together. Every route can be shortened, extended or combined — we tailor stops, transport and pace to your dates."
        />

        <ol className="gandaki-journey__routes">
          {gandakiRoutes.map((route) => (
            <li className="gandaki-route-card gandaki-reveal" key={route.id}>
              <div className="gandaki-route-card__media">
                <Image
                  src={route.image}
                  alt={route.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="gandaki-route-card__image"
                />
                <span className="gandaki-route-card__index" aria-hidden="true">
                  {route.index}
                </span>
              </div>

              <div className="gandaki-route-card__body">
                <p className="gandaki-route-card__theme">{route.theme}</p>
                <h3 className="gandaki-route-card__title">{route.title}</h3>

                <ol className="gandaki-route-card__stops" aria-label={`${route.title} stops`}>
                  {route.stops.map((stop) => (
                    <li key={stop}>{stop}</li>
                  ))}
                </ol>

                <p className="gandaki-route-card__description">{route.description}</p>
                <p className="gandaki-route-card__best">
                  <span>Best for</span> {route.bestFor}
                </p>

                <Link href={route.link.href} className="gandaki-route-card__link">
                  {route.link.label} <span aria-hidden="true">→</span>
                </Link>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
