import Icon from "@/components/shared/Icon";
import Reveal from "@/components/shared/Reveal";
import SectionHeading from "@/components/shared/SectionHeading";
import { packageFallbackNote, travelPackages } from "@/data/panch-pokhari/packages";
import "./travel-packages.css";

export default function TravelPackages() {
  return (
    <section id="travel-packages" className="pp-packages" aria-labelledby="packages-heading">
      <div className="pp-container">
        <SectionHeading
          eyebrow="Plan Your Trip"
          title="Find Your Panch Pokhari Adventure"
        />

        <div className="pp-packages__grid">
          {travelPackages.map((pkg, index) => (
            <Reveal
              key={pkg.id}
              variant="fade-up"
              delay={index * 90}
              className="pp-packages__card"
            >
              <h3 className="pp-packages__title">{pkg.title}</h3>
              <p className="pp-packages__description">{pkg.description}</p>
              <p className="pp-packages__traveler-type">
                <strong>Ideal for:</strong> {pkg.travelerType}
              </p>
              {pkg.duration ? (
                <p className="pp-packages__duration">{pkg.duration}</p>
              ) : null}
              <p className="pp-packages__fallback">{packageFallbackNote}</p>
              <a href={pkg.ctaHref} className="pp-btn pp-btn--outline pp-packages__cta">
                {pkg.ctaLabel}
                <Icon name="arrow-right" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
