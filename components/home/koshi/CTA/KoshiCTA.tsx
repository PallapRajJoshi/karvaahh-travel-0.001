import Image from "next/image";
import Link from "next/link";
import "./koshi-cta.css";

export default function KoshiCTA() {
  return (
    <section
      className="koshi-cta"
      aria-labelledby="koshi-cta-title"
    >
      {/* Background */}
      <div className="koshi-cta__visual">
        <Image
          src="/koshi/hero.jpg"
          alt="Himalayan landscape in Koshi Province"
          fill
          sizes="100vw"
          className="koshi-cta__image"
        />

        <div className="koshi-cta__overlay" />
        <div className="koshi-cta__gradient" />
      </div>

      {/* Top label */}
      <div className="koshi-cta__top">
        <span className="koshi-cta__top-line" />
        <span>ENDLESS HORIZONS</span>
      </div>

      {/* Section number */}
      <span
        className="koshi-cta__number"
        aria-hidden="true"
      >
        08
      </span>

      {/* Main content */}
      <div className="koshi-shell koshi-cta__content">
        <div className="koshi-cta__inner">

          <div className="koshi-cta__eyebrow">
            <span />
            <p>YOUR NEXT JOURNEY</p>
          </div>

          <h2 id="koshi-cta-title">
            The mountains
            <br />
            are <em>calling.</em>
          </h2>

          <p className="koshi-cta__lead">
            Start in Koshi.
          </p>

          <p className="koshi-cta__description">
            Find your trail, discover a new culture and experience
            the extraordinary diversity of eastern Nepal.
          </p>

          {/* Actions */}
          <div className="koshi-cta__actions">
            <Link
              className="koshi-cta__button koshi-cta__button--primary"
              href="/destinations"
            >
              <span>Explore Destinations</span>
              <span aria-hidden="true">↗</span>
            </Link>

            <Link
              className="koshi-cta__button koshi-cta__button--outline"
              href="/packages"
            >
              <span>Plan Your Trip</span>
              <span aria-hidden="true">↗</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Bottom information */}
      <div className="koshi-cta__bottom">
        <div className="koshi-cta__bottom-item">
          <span>01</span>
          <p>HIMALAYAS</p>
        </div>

        <div className="koshi-cta__bottom-item">
          <span>02</span>
          <p>CULTURE</p>
        </div>

        <div className="koshi-cta__bottom-item">
          <span>03</span>
          <p>WILDERNESS</p>
        </div>

        <div className="koshi-cta__bottom-item">
          <span>04</span>
          <p>ADVENTURE</p>
        </div>
      </div>

      {/* Vertical label */}
      <span
        className="koshi-cta__vertical"
        aria-hidden="true"
      >
        KARVAAHH • LIVE TO TRAVEL
      </span>
    </section>
  );
}