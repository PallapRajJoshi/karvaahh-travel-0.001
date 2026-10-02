import Link from "next/link";
import { khaptadPackages } from "@/data/destinations/khaptad/khaptad-packages";
import KhaptadSectionHeading from "../shared/KhaptadSectionHeading";
import { useKhaptadReveal } from "../shared/useKhaptadReveal";

function PackageCard({ pkg }: { pkg: (typeof khaptadPackages)[number] }) {
  const revealRef = useKhaptadReveal<HTMLDivElement>();
  return (
    <div ref={revealRef} className="khaptad-reveal khaptad-package-card">
      <div className="khaptad-package-card__header">
        <h3>{pkg.title}</h3>
        <span className="khaptad-package-card__duration">{pkg.duration}</span>
      </div>
      <p className="khaptad-package-card__description">{pkg.description}</p>

      <div className="khaptad-package-card__meta">
        <span className="khaptad-package-card__meta-label">Key Experiences</span>
        <ul className="khaptad-package-card__experiences">
          {pkg.keyExperiences.map((experience) => (
            <li key={experience}>{experience}</li>
          ))}
        </ul>
      </div>

      <p className="khaptad-package-card__profile">
        <span className="khaptad-package-card__meta-label">Best For</span> {pkg.travelerProfile}
      </p>

      <div className="khaptad-package-card__actions">
        <Link href={`/packages/${pkg.id}`} className="khaptad-btn khaptad-btn--outline">
          View Details
        </Link>
        <Link href="/contact" className="khaptad-btn khaptad-btn--primary">
          Customize Your Trip
        </Link>
      </div>
    </div>
  );
}

export default function KhaptadPackages() {
  return (
    <section id="khaptad-packages" className="khaptad-packages" aria-labelledby="khaptad-packages-heading">
      <div className="khaptad-page__container">
        <KhaptadSectionHeading
          eyebrow="Tour Packages"
          title="Khaptad Tour Packages"
          description="Customizable journeys built around your travel style — every itinerary is tailored during planning."
        />
        <div className="khaptad-packages__grid">
          {khaptadPackages.map((pkg) => (
            <PackageCard key={pkg.id} pkg={pkg} />
          ))}
        </div>
      </div>
    </section>
  );
}
