import Image from "next/image";
import Link from "next/link";
import "./koshi-wildlife.css";

const wildlifePoints = [
  ["01", "Wetlands"],
  ["02", "Grasslands"],
  ["03", "River Ecosystems"],
  ["04", "Bird Watching"],
  ["05", "Wild Water Buffalo"],
  ["06", "Nature Photography"],
];

export default function KoshiWildlife() {
  return (
    <section
      className="koshi-wildlife"
      aria-labelledby="koshi-wildlife-title"
    >
      {/* =====================================================
          BACKGROUND IMAGE
          ===================================================== */}
      <div className="koshi-wildlife__visual">
        <Image
          src="/koshi/wildlife.jpg"
          alt="Wetlands and wildlife habitat of Koshi Tappu"
          fill
          sizes="100vw"
          className="koshi-wildlife__image"
        />

        <div
          className="koshi-wildlife__overlay"
          aria-hidden="true"
        />

        <div
          className="koshi-wildlife__gradient"
          aria-hidden="true"
        />
      </div>

      {/* =====================================================
          TOP LOCATION
          ===================================================== */}
      <div className="koshi-wildlife__location">
        <span className="koshi-wildlife__location-line" />

        <div>
          <span className="koshi-wildlife__location-title">
            KOSHI TAPPU
          </span>

          <p>Wetlands • Eastern Nepal</p>
        </div>
      </div>

      {/* =====================================================
          LARGE SECTION NUMBER
          ===================================================== */}
      <span
        className="koshi-wildlife__section-number"
        aria-hidden="true"
      >
        06
      </span>

      {/* =====================================================
          MAIN CONTENT
          ===================================================== */}
      <div className="koshi-shell koshi-wildlife__content">
        <div className="koshi-wildlife__inner">

          {/* Eyebrow */}
          <div className="koshi-wildlife__eyebrow">
            <span />
            <p>WILD KOSHI</p>
          </div>

          {/* Heading */}
          <h2 id="koshi-wildlife-title">
            Where nature
            <br />
            takes <em>center stage.</em>
          </h2>

          {/* Lead */}
          <p className="koshi-wildlife__lead">
            Koshi Tappu Wildlife Reserve
          </p>

          {/* Description */}
          <p className="koshi-wildlife__description">
            From high Himalayan forests to the wetlands of the
            Koshi basin, the province is a journey through
            extraordinary ecosystems, rare wildlife and
            spectacular landscapes.
          </p>

          {/* =================================================
              WILDLIFE POINTS
              ================================================= */}
          <div
            className="koshi-wildlife__points"
            aria-label="Wildlife experiences"
          >
            {wildlifePoints.map(([number, point]) => (
              <span
                className="koshi-wildlife__point"
                key={point}
              >
                <small>{number}</small>
                <span>{point}</span>
              </span>
            ))}
          </div>

          {/* =================================================
              CTA
              ================================================= */}
          <Link
            href="/destinations"
            className="koshi-wildlife__button"
          >
            <span>Discover wild Koshi</span>

            <span
              className="koshi-wildlife__button-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>
      </div>

      {/* =====================================================
          BOTTOM CAPTION
          ===================================================== */}
      <div className="koshi-wildlife__caption">
        <span>WETLANDS</span>
        <span>KOSHI BASIN</span>
        <span>WILDLIFE</span>
      </div>

      {/* =====================================================
          VERTICAL LABEL
          ===================================================== */}
      <span
        className="koshi-wildlife__vertical-text"
        aria-hidden="true"
      >
        WILDLIFE &amp; NATURE
      </span>

      {/* =====================================================
          BOTTOM RIGHT INDICATOR
          ===================================================== */}
      <div className="koshi-wildlife__scroll">
        <span>DISCOVER THE WILD</span>
        <i />
      </div>
    </section>
  );
}