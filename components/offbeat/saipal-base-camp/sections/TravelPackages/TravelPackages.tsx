
import SectionHeading from "../../shared/SectionHeading";
import Reveal from "../../shared/Reveal";
import { packages } from "@/data/packages";
import "./TravelPackages.css";

export default function TravelPackages() {
  return (
    <section
      id="travel-packages"
      className="saipal-page__section saipal-packages"
    >
      <div className="saipal-page__inner">
        <SectionHeading
          eyebrow="Plan Your Trip"
          title="Choose Your Himalayan Expedition"
          align="center"
        />

        <div className="saipal-packages__grid">
          {packages.map((pkg, index) => (
            <Reveal
              key={pkg.slug}
              delay={index * 90}
              className="saipal-packages__card"
            >
              <h3 className="saipal-packages__name">
                {pkg.name}
              </h3>

              <p className="saipal-packages__desc">
                {pkg.summary}
              </p>

              <p className="saipal-packages__profile">
                <strong>Duration:</strong> {pkg.duration}
              </p>

              <p className="saipal-packages__profile">
                <strong>Region:</strong> {pkg.region}
              </p>

              <p className="saipal-packages__profile">
                <strong>Difficulty:</strong> {pkg.difficulty}
              </p>

              <p className="saipal-packages__profile">
                <strong>Best Season:</strong> {pkg.bestSeason}
              </p>

              <a
                href={`/travel-packages/${pkg.slug}`}
                className="saipal-btn saipal-btn--dark saipal-packages__cta"
              >
                Explore Package
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}