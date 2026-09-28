import Image from "next/image";
import Link from "next/link";
import "./koshi-himalayan-adventure.css";

const highlights = [
  ["01", "Everest", "Legendary Himalayan trekking"],
  ["02", "Kanchenjunga", "Remote mountain wilderness"],
  ["03", "Makalu-Barun", "Wild landscapes & biodiversity"],
];

export default function KoshiHimalayanAdventure() {
  return (
    <section
      className="koshi-adventure"
      aria-labelledby="koshi-adventure-title"
    >
      {/* =====================================================
          LEFT — HIMALAYAN IMAGE
      ====================================================== */}

      <div className="koshi-adventure__visual">
        <Image
          src="/koshi/everest-view.jpg"
          alt="High Himalayan peaks and trekking landscape in eastern Nepal"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="koshi-adventure__image"
        />

        <div
          className="koshi-adventure__image-shade"
          aria-hidden="true"
        />

        {/* Location */}

        <div className="koshi-adventure__location">
          <span className="koshi-adventure__location-line" />

          <div>
            <span className="koshi-adventure__location-title">
              HIMALAYAN KOSHI
            </span>

            <p>Everest Region • Eastern Nepal</p>
          </div>
        </div>

        {/* Section number */}

        <span
          className="koshi-adventure__section-number"
          aria-hidden="true"
        >
          03
        </span>

        {/* Bottom caption */}

        <div className="koshi-adventure__caption">
          <span>EVEREST REGION</span>
          <span>HIGH HIMALAYAS</span>
        </div>
      </div>

      {/* =====================================================
          RIGHT — CONTENT
      ====================================================== */}

      <div className="koshi-adventure__panel">
        <div className="koshi-adventure__content">

          {/* Eyebrow */}

          <div className="koshi-adventure__eyebrow">
            <span />
            <p>GO HIGHER</p>
          </div>

          {/* Heading */}

          <h2 id="koshi-adventure-title">
            Where the
            <br />
            <em>adventure</em> begins.
          </h2>

          {/* Description */}

          <p className="koshi-adventure__description">
            Koshi is home to some of the world&apos;s most extraordinary
            mountain landscapes. Follow ancient trails through the Everest
            region, enter the wilderness of Kanchenjunga and discover the
            dramatic landscapes of Makalu-Barun.
          </p>

          {/* Highlights */}

          <div className="koshi-adventure__highlights">
            {highlights.map(([number, title, text]) => (
              <div
                className="koshi-adventure-highlight"
                key={title}
              >
                <span className="koshi-adventure-highlight__number">
                  {number}
                </span>

                <div className="koshi-adventure-highlight__content">
                  <h3>{title}</h3>
                  <p>{text}</p>
                </div>

                <span
                  className="koshi-adventure-highlight__arrow"
                  aria-hidden="true"
                >
                  ↗
                </span>
              </div>
            ))}
          </div>

          {/* CTA */}

          <Link
            href="/packages"
            className="koshi-adventure__button"
          >
            <span>Find your adventure</span>

            <span
              className="koshi-adventure__button-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>
        </div>

        {/* Vertical label */}

        <span
          className="koshi-adventure__vertical-text"
          aria-hidden="true"
        >
          HIMALAYAN ADVENTURE
        </span>
      </div>
    </section>
  );
}