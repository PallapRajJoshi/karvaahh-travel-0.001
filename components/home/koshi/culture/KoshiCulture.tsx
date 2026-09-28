import Image from "next/image";
import Link from "next/link";
import "./koshi-culture.css";

const cultureHighlights = [
  ["01", "Pathibhara", "Sacred Himalayan pilgrimage"],
  ["02", "Halesi Mahadev", "Sacred cave and spiritual heritage"],
  ["03", "Village Life", "Homestays, food and local traditions"],
];

export default function KoshiCulture() {
  return (
    <section
      className="koshi-culture"
      aria-labelledby="koshi-culture-title"
    >

      {/* =====================================================
          LEFT — CULTURE CONTENT
      ====================================================== */}

      <div className="koshi-culture__panel">

        <div className="koshi-culture__content">

          {/* Eyebrow */}

          <div className="koshi-culture__eyebrow">
            <span />
            <p>LIVE THE CULTURE</p>
          </div>


          {/* Heading */}

          <h2 id="koshi-culture-title">
            Meet the soul of
            <br />
            <em>eastern Nepal.</em>
          </h2>


          {/* Description */}

          <p className="koshi-culture__description">
            Koshi is not only a landscape. It is a living cultural journey
            shaped by Indigenous communities, ancient pilgrimage traditions,
            temples, monasteries, festivals, music, food and village life.
          </p>


          {/* Culture highlights */}

          <div className="koshi-culture__list">

            {cultureHighlights.map(([number, title, text]) => (
              <div
                className="koshi-culture-item"
                key={title}
              >

                <span className="koshi-culture-item__number">
                  {number}
                </span>

                <div className="koshi-culture-item__content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                <span
                  className="koshi-culture-item__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </div>
            ))}

          </div>


          {/* CTA */}

          <Link
            href="/about"
            className="koshi-culture__button"
          >
            <span>Explore culture</span>

            <span
              className="koshi-culture__button-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>

        </div>


        {/* Vertical label */}

        <span
          className="koshi-culture__vertical-text"
          aria-hidden="true"
        >
          LIVING HERITAGE
        </span>

      </div>


      {/* =====================================================
          RIGHT — PATHIBHARA IMAGE
      ====================================================== */}

      <div className="koshi-culture__visual">

        <Image
          src="/koshi/pathibhara.jpg"
          alt="Sacred Himalayan landscape near Pathibhara"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="koshi-culture__image"
        />

        <div
          className="koshi-culture__image-shade"
          aria-hidden="true"
        />


        {/* Location */}

        <div className="koshi-culture__location">

          <span className="koshi-culture__location-line" />

          <div>

            <span className="koshi-culture__location-title">
              PATHIBHARA
            </span>

            <p>Taplejung • Eastern Nepal</p>

          </div>

        </div>


        {/* Section number */}

        <span
          className="koshi-culture__section-number"
          aria-hidden="true"
        >
          04
        </span>


        {/* Bottom caption */}

        <div className="koshi-culture__caption">

          <span>PILGRIMAGE</span>
          <span>LIVING HERITAGE</span>

        </div>

      </div>

    </section>
  );
}