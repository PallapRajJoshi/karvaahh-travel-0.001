import { tourPackages, packagesNote } from "@/data/dhorpatan";
import SectionHeading from "@/components/shared/SectionHeading";
import CTAButton from "@/components/shared/CTAButton";
import Reveal from "@/components/shared/Reveal";
import "./TourPackages.css";

export default function TourPackages() {
  return (
    <section className="packages-section" id="packages">
      <div className="dhorpatan-page__container">
        <SectionHeading
          eyebrow="Travel With Karvaahh"
          heading="Dhorpatan Tour Packages"
          subheading="Customizable starting points for your Dhorpatan journey — every package is tailored to your dates, pace, and interests."
        />

        <div className="packages-section__grid">
          {tourPackages.map((pkg, i) => (
            <Reveal key={pkg.id} delay={(i % 3) * 90} className="package-card">
              <span className="package-card__duration">{pkg.duration}</span>
              <h3 className="package-card__title">{pkg.title}</h3>
              <p className="package-card__description">{pkg.description}</p>

              <ul className="package-card__experiences">
                {pkg.keyExperiences.map((experience) => (
                  <li key={experience}>{experience}</li>
                ))}
              </ul>

              <p className="package-card__suitable">
                <strong>Best for:</strong> {pkg.suitableFor}
              </p>

              <div className="package-card__actions">
                <CTAButton href={`/packages/dhorpatan-hunting-reserve/${pkg.id}`} variant="ghost">
                  View Details
                </CTAButton>
                <CTAButton
                  href={`/contact?type=customize&package=${pkg.id}&destination=dhorpatan-hunting-reserve`}
                  variant="primary"
                >
                  Customize Your Trip
                </CTAButton>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="packages-section__note">{packagesNote}</p>
      </div>
    </section>
  );
}
