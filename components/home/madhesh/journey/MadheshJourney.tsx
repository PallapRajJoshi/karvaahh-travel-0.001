import Image from "next/image";
import Link from "next/link";
import { madheshRoutes } from "@/data/madhesh/journey";
import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import "./madhesh-journey.css";

export default function MadheshJourney() {
  return (
    <section className="madhesh-journey" id="routes" aria-labelledby="madhesh-journey-title">
      <div className="madhesh-container">
        <MadheshSectionHeading
          eyebrow="Suggested Routes"
          titleId="madhesh-journey-title"
          heading={
            <>
              From sacred cities to{" "}
              <span className="madhesh-gold-italic">living landscapes.</span>
            </>
          }
          description="Flexible route ideas that combine Madhesh's highlights. Every journey is tailored to your dates, pace and travel style."
        />

        <ol className="madhesh-journey__routes">
          {madheshRoutes.map((route, index) => (
            <li className="madhesh-journey__card madhesh-reveal" key={route.title}>
              <div className="madhesh-journey__media">
                <Image
                  src={route.image}
                  alt={route.alt}
                  fill
                  sizes="(max-width: 700px) 100vw, (max-width: 1100px) 50vw, 33vw"
                  className="madhesh-journey__image"
                />
                <span className="madhesh-journey__number" aria-hidden="true">
                  0{index + 1}
                </span>
              </div>
              <div className="madhesh-journey__body">
                <span className="madhesh-journey__theme">{route.theme}</span>
                <h3 className="madhesh-journey__title">{route.title}</h3>
                <ol className="madhesh-journey__stops" aria-label={`${route.title} stops`}>
                  {route.stops.map((stop) => (
                    <li key={stop}>{stop}</li>
                  ))}
                </ol>
                <p className="madhesh-journey__desc">{route.description}</p>
                <p className="madhesh-journey__note">{route.note}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="madhesh-journey__cta">
          <Link href="/contact" className="madhesh-btn madhesh-btn--outline-dark">
            Plan your Madhesh journey <span className="madhesh-arrow">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
