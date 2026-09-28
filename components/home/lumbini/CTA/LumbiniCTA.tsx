import Image from "next/image";
import Link from "next/link";
import "./lumbini-cta.css";

export default function LumbiniCTA() {
  return (
    <section
      className="lumbini-cta"
      id="plan"
      aria-label="Plan your Lumbini trip"
    >
      <div className="lumbini-cta__media">
        <Image
          src="/images/lumbini/lumbini-province-sacred-gardens-wildlife-cultural-journey.jpg"
          alt="Sunset silhouette of a Lumbini monastery with prayer flags"
          fill
          sizes="100vw"
          className="lumbini-cta__image"
        />
        <div className="lumbini-cta__overlay" aria-hidden="true" />
      </div>

      <div className="lumbini-cta__content">
        <span className="lumbini-cta__index" aria-hidden="true">
          10
        </span>

        <h2 className="lumbini-cta__title">
          Come seeking peace.
          <span className="lumbini-cta__title-emphasis">
            Leave with stories.
          </span>
        </h2>

        <p className="lumbini-cta__subline">Start your journey in Lumbini.</p>

        <p className="lumbini-cta__description">
          Walk through sacred gardens, discover ancient kingdoms, meet living
          cultures and venture into the wild landscapes of western Nepal.
        </p>

        <div className="lumbini-cta__actions">
          <Link href="/destinations/lumbini-province" className="lumbini-cta__button lumbini-cta__button--primary">
            Explore Lumbini
          </Link>
          <Link href="/contact" className="lumbini-cta__button lumbini-cta__button--secondary">
            Plan Your Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
