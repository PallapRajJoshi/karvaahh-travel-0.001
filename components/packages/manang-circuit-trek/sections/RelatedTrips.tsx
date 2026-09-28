import Image from "next/image";
import Link from "next/link";
import { relatedTrips } from "../data/content";
import { IconArrowRight } from "../icons";
import SectionHeading from "../SectionHeading";
import "./related-trips.css";

export default function RelatedTrips() {
  return (
    <section className="mc-section mc-section--paper mc-related" aria-labelledby="mc-related-title">
      <div className="mc-container">
        <SectionHeading id="mc-related-title" eyebrow="Keep exploring" title="You might also like" />
        <ul className="mc-related__grid">
          {relatedTrips.map((t) => (
            <li key={t.href}>
              <Link href={t.href} className="mc-related__card">
                <div className="mc-img-frame mc-related__media">
                  <Image src={t.image} alt={t.imageAlt} fill sizes="(max-width: 760px) 100vw, 33vw" />
                </div>
                <div className="mc-related__body">
                  <p className="mc-related__meta">{t.meta}</p>
                  <h3 className="mc-related__title">{t.title}</h3>
                  <span className="mc-related__more">
                    View <IconArrowRight />
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
