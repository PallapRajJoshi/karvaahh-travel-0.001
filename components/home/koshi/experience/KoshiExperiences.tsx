import Link from "next/link";
import KoshiSectionHeading from "../heading/KoshiSectionHeading";
import { koshiExperiences } from "@/data/koshi/experiences";
import "./koshi-experiences.css";

const experienceImages = [
  "/koshi/makalu-base-camp.jpg",
  "/koshi/goechala.jpg",
  "/koshi/barakshetra.jpg",
  "/koshi/illam-tea.jpg",
  "/koshi/tappu.jpg",
  "/koshi/tamur-river.jpg",
];

export default function KoshiExperiences() {
  return (
    <section
      id="experiences"
      className="koshi-experiences koshi-section"
      aria-labelledby="koshi-experiences-title"
    >
      <div className="koshi-shell">

        {/* =================================================
            SECTION HEADER
        ================================================== */}

        <div className="koshi-experiences__heading">

          <KoshiSectionHeading
            eyebrow="EXPERIENCE KOSHI"
            title={
              <>
                One province. <em>Endless</em> ways to explore.
              </>
            }
            description="Koshi brings together Himalayan adventure, peaceful hill escapes, living cultures, wildlife and unforgettable outdoor experiences."
          />

          <div
            className="koshi-experiences__intro-mark"
            aria-hidden="true"
          >
            <span>06</span>
            <small>EXPERIENCES</small>
          </div>

        </div>


        {/* =================================================
            EXPERIENCE GRID
        ================================================== */}

        <div className="koshi-experience-grid">

          {koshiExperiences.map((experience, index) => (

            <article
              key={experience.number}
              className={`koshi-experience ${
                index === 0
                  ? "koshi-experience--featured"
                  : ""
              }`}
            >

              {/* =================================================
                  IMAGE
              ================================================== */}

              <div
                className="koshi-experience__image"
                style={{
                  backgroundImage:
                    `url("${experienceImages[index]}")`,
                }}
                aria-hidden="true"
              />


              {/* =================================================
                  CINEMATIC OVERLAY
              ================================================== */}

              <div
                className="koshi-experience__overlay"
                aria-hidden="true"
              />


              {/* =================================================
                  TOP INFORMATION
              ================================================== */}

              <div className="koshi-experience__top">

                <span className="koshi-experience__number">
                  {experience.number}
                </span>

                <span
                  className="koshi-experience__symbol"
                  aria-hidden="true"
                >
                  ↗
                </span>

              </div>


              {/* =================================================
                  CONTENT
              ================================================== */}

              <div className="koshi-experience__content">

                <p className="koshi-experience__meta">
                  {experience.meta}
                </p>

                <h3>
                  {experience.title}
                </h3>

                <p className="koshi-experience__description">
                  {experience.description}
                </p>

                <Link
                  href="/destinations"
                  className="koshi-experience__link"
                  aria-label={`Explore ${experience.title}`}
                >
                  <span>
                    Explore
                  </span>

                  <span
                    className="koshi-experience__link-arrow"
                    aria-hidden="true"
                  >
                    ↗
                  </span>
                </Link>

              </div>

            </article>

          ))}

        </div>

      </div>
    </section>
  );
}