import Image from "next/image";
import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ROUTES, SECTION } from "./data/config";
import { RELATED_JOURNEYS } from "./data/related";
import "./related-journeys.css";

export default function RelatedJourneys() {
  const live = RELATED_JOURNEYS.filter((j) => j.live);
  if (!live.length) return null;

  return (
    <section
      id={SECTION.related}
      className="hry-section hry-related"
      aria-labelledby="hry-related-title"
    >
      <div className="hry-container">
        <div className="hry-related__head">
          <SectionHeading id="hry-related-title" title="Explore more spiritual journeys with Karvaahh" />
          <Link href={ROUTES.spiritualJourneys} className="hry-related__all">
            All spiritual journeys
          </Link>
        </div>
        <ul className={`hry-related__grid${live.length < 3 ? " hry-related__grid--few" : ""}`}>
          {live.map((j) => (
            <li key={j.id} className="hry-related__card">
              <div className="hry-related__media">
                <Image src={j.image.src} alt={j.image.alt} fill sizes="(min-width: 900px) 33vw, 100vw" className="hry-related__img" />
              </div>
              <div className="hry-related__body">
                <h3 className="hry-related__title">{j.title}</h3>
                <p className="hry-related__desc">{j.description}</p>
                <Link href={j.href} className="hry-related__link">
                  Explore journey<span className="hry-sr-only">: {j.title}</span>
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
