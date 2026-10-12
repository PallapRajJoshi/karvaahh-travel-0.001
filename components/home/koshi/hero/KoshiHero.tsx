import Image from "next/image";
import Link from "next/link";
import "./koshi-hero.css";

export default function KoshiHero() {
  return (
    <section
      className="koshi-hero relative w-full overflow-hidden"
      aria-labelledby="koshi-hero-title"
    >
      {/* =====================================================
          BACKGROUND IMAGE
      ====================================================== */}

      <Image
        src="/koshi/cholatse-peak.jpg"
        alt="Cholatse and Taboche peaks above a glacial valley in the Everest region of Koshi Province, Nepal"
        fill
        priority
        sizes="100vw"
        className="koshi-hero-image"
      />


      {/* mobile view */}
<video
  src="/videos/koshi/everes-heli-view.mp4"
  autoPlay
  muted
  loop
  playsInline
  poster="/koshi/cholatse-peak.jpg"
  preload="metadata"
  aria-hidden="true"
  className="block md:hidden motion-reduce:hidden absolute inset-0 w-full h-full object-cover"
/>
      {/* =====================================================
          CINEMATIC OVERLAY
      ====================================================== */}

      <div className="koshi-hero__overlay" />


      {/* =====================================================
          DECORATIVE LEFT LINE
      ====================================================== */}

      <div className="koshi-hero__left-line" />


      {/* =====================================================
          MAIN HERO CONTENT
      ====================================================== */}

      <div className="koshi-hero-content relative z-10 mx-auto flex h-full w-full max-w-[1500px] items-center px-6 sm:px-10 lg:px-20">

        <div className="koshi-hero__copy max-w-[850px]">

          {/* =================================================
              EYEBROW
          ================================================== */}

          <div className="koshi-hero-reveal mb-6 flex items-center gap-4">

            <span className="koshi-eyebrow-line" />

            <span className="koshi-eyebrow-text">
              KOSHI PROVINCE · EASTERN NEPAL
            </span>

          </div>


          {/* =================================================
              MAIN TITLE
          ================================================== */}

          <h1
            id="koshi-hero-title"
            className="koshi-title koshi-hero-reveal"
          >
            <span>Discover</span>

            <em>Koshi</em>
            <span className="sr-only"> Province, Nepal</span>
          </h1>


          {/* =================================================
              LEAD
          ================================================== */}

          <p className="koshi-hero__lead koshi-hero-reveal">
            Where the Himalayas meet culture,
            <br className="hidden sm:block" />
            adventure and wild nature.
          </p>


          {/* =================================================
              DESCRIPTION
          ================================================== */}

          <p className="koshi-hero__description koshi-hero-reveal">
            Journey from Mount Everest and Kanchenjunga to Ilam&apos;s misty
            tea gardens, sacred shrines like Pathibhara and Halesi, and
            the wildlife-rich wetlands of Koshi Tappu.
          </p>


          {/* =================================================
              ACTIONS
          ================================================== */}

          <div className="koshi-actions koshi-hero-reveal">

            <Link
              href="#destinations"
              className="koshi-primary-btn group"
            >
              <span>Explore Koshi</span>

              <span className="koshi-btn-arrow">
                ↗
              </span>
            </Link>


            <Link
              href="#experiences"
              className="koshi-text-link group"
            >
              <span className="relative">
                Discover Experiences

                <span className="koshi-link-line" />
              </span>

              <span className="koshi-link-arrow">
                ↗
              </span>
            </Link>

          </div>

        </div>

      </div>


      {/* =====================================================
          TOP RIGHT LOCATION CARD
      ====================================================== */}

      <div className="koshi-location-wrapper">

        <div className="koshi-location-card">

          <div className="koshi-location-icon">
            ⌖
          </div>

          <div>

            <p className="koshi-location-title">
              KOSHI PROVINCE
            </p>

            <p className="koshi-location-subtitle">
              Untouched. Untold. Unforgettable.
            </p>

          </div>

        </div>

      </div>


      {/* =====================================================
          RIGHT SIDE PAGE INDICATOR
      ====================================================== */}

      <div className="koshi-hero-page-indicator">

        <span className="active">
          01
        </span>

        <div className="koshi-page-line">

          <span />

        </div>

        <span>
          09
        </span>

      </div>


      {/* =====================================================
          BOTTOM HIGHLIGHTS
      ====================================================== */}

      <div className="koshi-hero-highlights-wrapper">

        <div className="koshi-highlights">

          {/* Mountain */}

          <div className="koshi-highlight">

            <span className="koshi-highlight-number">
              01
            </span>

            <div>
              <h3>
                Everest
              </h3>

              <p>
                8,849 m · Sagarmatha NP
              </p>
            </div>

          </div>


          {/* Culture */}

          <div className="koshi-highlight">

            <span className="koshi-highlight-number">
              02
            </span>

            <div>
              <h3>
                Ilam
              </h3>

              <p>
                Nepal&apos;s tea country
              </p>
            </div>

          </div>


          {/* Adventure */}

          <div className="koshi-highlight">

            <span className="koshi-highlight-number">
              03
            </span>

            <div>
              <h3>
                Koshi Tappu
              </h3>

              <p>
                Wetland wildlife
              </p>
            </div>

          </div>

        </div>

      </div>


      {/* =====================================================
          SCROLL INDICATOR
      ====================================================== */}

      <a
        href="#overview"
        className="koshi-scroll"
        aria-label="Scroll to the province overview"
      >

        <span className="koshi-scroll-text">
          SCROLL TO EXPLORE
        </span>

        <span className="koshi-scroll-line">
          <span />
        </span>

      </a>


      {/* =====================================================
          MOBILE SCROLL LABEL
      ====================================================== */}

      <div className="koshi-mobile-scroll">
        SCROLL TO EXPLORE
      </div>

    </section>
  );
}