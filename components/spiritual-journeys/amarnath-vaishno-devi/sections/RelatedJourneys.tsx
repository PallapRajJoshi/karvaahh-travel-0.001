import Image from "next/image";
import Link from "next/link";
import { RELATED_JOURNEYS } from "../data/content";
import { SectionHeading } from "../SectionHeading";
import "./RelatedJourneys.css";

export function RelatedJourneys() {
  if (!RELATED_JOURNEYS.length) return null;
  return (
    <section className="avd-section avd-related" aria-labelledby="avd-related-title">
      <div className="avd-wrap">
        <SectionHeading id="avd-related-title" title="Explore more spiritual journeys" />
        <ul className="avd-related__list">
          {RELATED_JOURNEYS.map((j) => (
            <li key={j.href}>
              <Link href={j.href} className="avd-related__card">
                <span className="avd-related__media">
                  <Image src={j.image.src} alt={j.image.alt} fill sizes="(min-width: 800px) 34rem, 100vw" className="avd-related__img" />
                </span>
                <span className="avd-related__text">
                  <span className="avd-related__region">{j.region}</span>
                  <span className="avd-related__title">{j.title}</span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
        <Link href="/spiritual-journeys" className="avd-related__all">
          View all spiritual journeys
        </Link>
      </div>
    </section>
  );
}
