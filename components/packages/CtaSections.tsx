import Link from "next/link";
import { trustPoints } from "@/data/packages/trust-points";
import { CUSTOM_TRIP_ROUTE, HUB_IMAGES } from "@/lib/packages/config";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";

export function CustomJourneyCta() {
  return (
    <section id="custom-journey" className="pkg-cta" aria-labelledby="pkg-cta-h">
      <div className="pkg-media pkg-cta__media" data-country="Nepal">
        <SafeImage src={HUB_IMAGES.customTrip} alt="" sizes="100vw" className="pkg-media__img" />
      </div>
      <div className="pkg-container">
        <Reveal>
          <div className="pkg-cta__inner">
            <h2 id="pkg-cta-h" className="pkg-h2 pkg-h2--light">Can&rsquo;t Find Your Perfect Journey?</h2>
            <p className="pkg-lede pkg-lede--light">
              Tell us where you want to go, how you want to travel and who you&rsquo;re travelling with.
              Our team can create a journey around you.
            </p>
            <div className="pkg-card__actions pkg-cta__actions">
              <Link href={CUSTOM_TRIP_ROUTE} className="pkg-btn pkg-btn--primary pkg-btn--lg">Create My Trip</Link>
              <Link href="/contact" className="pkg-btn pkg-btn--ghost pkg-btn--lg">Talk to Karvaahh</Link>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/** Renders only claims flagged `verified` in data/trust-points.ts. Hidden if fewer than two. */
export function ConfidenceSection() {
  const points = trustPoints.filter((t) => t.verified);
  if (points.length < 2) return null;
  return (
    <section className="pkg-section" aria-labelledby="pkg-conf-h">
      <div className="pkg-container">
        <Reveal>
          <header className="pkg-section__head">
            <p className="pkg-eyebrow">How we plan</p>
            <h2 id="pkg-conf-h" className="pkg-h2">Travel With Confidence</h2>
          </header>
          <ul className="pkg-conf">
            {points.map((t) => (
              <li key={t.title}>
                <h3>{t.title}</h3>
                <p>{t.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
