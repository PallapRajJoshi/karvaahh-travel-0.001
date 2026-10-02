"use client";

import Link from "next/link";
import SectionHeading from "../shared/SectionHeading";
import { PACKAGES, PACKAGES_NOTE } from "../data";
import { useScrollReveal } from "../shared/useScrollReveal";
import "./Packages.css";

export default function Packages() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section className="phoksundo-packages" id="phoksundo-packages" ref={ref}>
      <div className="phoksundo-page__container">
        <SectionHeading eyebrow="Tour Packages" title="Shey Phoksundo Tour Packages" />

        <div className="phoksundo-packages__grid">
          {PACKAGES.map((pkg) => (
            <article className="phoksundo-packages__card" key={pkg.id} data-reveal>
              <div className="phoksundo-packages__header">
                <h3 className="phoksundo-packages__title">{pkg.title}</h3>
                <span className="phoksundo-packages__duration">{pkg.duration}</span>
              </div>
              <p className="phoksundo-packages__description">{pkg.description}</p>

              <ul className="phoksundo-packages__experiences">
                {pkg.experiences.map((experience) => (
                  <li key={experience}>{experience}</li>
                ))}
              </ul>

              <p className="phoksundo-packages__suited">
                <strong>Suited for:</strong> {pkg.suitedFor}
              </p>

              <div className="phoksundo-packages__actions">
                <Link href={`/packages/${pkg.id}`} className="phoksundo-packages__button phoksundo-packages__button--primary">
                  View Details
                </Link>
                <Link href="/contact" className="phoksundo-packages__button phoksundo-packages__button--secondary">
                  Customize Your Trip
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="phoksundo-packages__note">{PACKAGES_NOTE}</p>
      </div>
    </section>
  );
}
