import Image from "next/image";
import Link from "next/link";
import "./koshi-tea.css";

const teaPlaces = [
  "Ilam",
  "Kanyam",
  "Shree Antu",
  "Mai Pokhari",
];

export default function KoshiTeaHills() {
  return (
    <section
      className="koshi-tea"
      aria-labelledby="koshi-tea-title"
    >

      {/* =====================================================
          LEFT — TEA GARDEN IMAGE
      ====================================================== */}

      <div className="koshi-tea__visual">

        <Image
          src="/koshi/ilam.jpg"
          alt="Lush tea gardens in Ilam, eastern Nepal"
          fill
          sizes="(max-width: 900px) 100vw, 55vw"
          className="koshi-tea__image"
        />

        {/* Image overlay */}

        <div
          className="koshi-tea__image-shade"
          aria-hidden="true"
        />

        {/* Location */}

        <div className="koshi-tea__location">

          <span className="koshi-tea__location-line" />

          <div>
            <span className="koshi-tea__location-title">
              ILAM
            </span>

            <p>Eastern Hills • Nepal</p>
          </div>

        </div>


        {/* Section number */}

        <span
          className="koshi-tea__section-number"
          aria-hidden="true"
        >
          05
        </span>


        {/* Bottom caption */}

        <div className="koshi-tea__caption">
          <span>TEA COUNTRY</span>
          <span>EASTERN HILLS</span>
        </div>

      </div>


      {/* =====================================================
          RIGHT — CONTENT
      ====================================================== */}

      <div className="koshi-tea__copy">

        <div className="koshi-tea__content">

          {/* Eyebrow */}

          <div className="koshi-tea__eyebrow">
            <span />
            <p>SLOW DOWN</p>
          </div>


          {/* Heading */}

          <h2 id="koshi-tea-title">
            Tea hills,
            <br />
            misty mornings
            <br />
            &amp; <em>quiet trails.</em>
          </h2>


          {/* Description */}

          <p className="koshi-tea__description">
            In the hills of Ilam, travel takes a slower rhythm. Walk through
            green tea gardens, meet local communities, enjoy fresh tea and
            wake up to spectacular eastern Himalayan sunrises.
          </p>


          {/* Places */}

          <div
            className="koshi-tea__places"
            aria-label="Tea hill destinations"
          >

            <span className="koshi-tea__places-label">
              EXPLORE
            </span>

            <div className="koshi-tea__tags">

              {teaPlaces.map((place, index) => (
                <span
                  key={place}
                  className="koshi-tea__tag"
                >
                  <small>
                    {String(index + 1).padStart(2, "0")}
                  </small>

                  {place}
                </span>
              ))}

            </div>

          </div>


          {/* CTA */}

          <Link
            href="/destinations"
            className="koshi-tea__button"
          >
            <span>Explore the tea hills</span>

            <span
              className="koshi-tea__button-arrow"
              aria-hidden="true"
            >
              ↗
            </span>
          </Link>

        </div>


        {/* Decorative vertical label */}

        <span
          className="koshi-tea__vertical-text"
          aria-hidden="true"
        >
          TEA &amp; SLOW TRAVEL
        </span>

      </div>

    </section>
  );
}