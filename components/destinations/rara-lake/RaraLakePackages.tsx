import Link from "next/link";
import SectionHeading from "@/components/shared/SectionHeading";
import { packages } from "@/data/destinations/rara-lake/packages";
import "./RaraLakePackages.css";

export default function RaraLakePackages() {
  return (
    <section className="rara-packages" aria-labelledby="rara-packages-heading">
      <SectionHeading
        eyebrow="Tailored Journeys"
        title="Rara Lake Tour Packages"
        description="Every package below is a customizable starting point — final pricing and confirmed dates are arranged directly with Karvaahh."
      />
      <div className="rara-packages__grid">
        {packages.map((pkg) => (
          <article key={pkg.id} className="rara-packages__card">
            <div className="rara-packages__body">
              <h3 className="rara-packages__title">{pkg.title}</h3>
              <span className="rara-packages__duration">{pkg.durationLabel}</span>
              <p className="rara-packages__description">{pkg.description}</p>
              <ul className="rara-packages__experiences">
                {pkg.keyExperiences.map((experience) => (
                  <li key={experience}>{experience}</li>
                ))}
              </ul>
            </div>
            <div className="rara-packages__actions">
              <Link href={pkg.detailsHref} className="rara-packages__button rara-packages__button--primary">
                View Details
              </Link>
              <Link href={pkg.customizeHref} className="rara-packages__button rara-packages__button--secondary">
                Customize Your Trip
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
