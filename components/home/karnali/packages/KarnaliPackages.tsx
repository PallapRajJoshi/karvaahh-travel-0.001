import Link from "next/link";
import KarnaliRevealItem from "../info/KarnaliRevealItem";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import { karnaliPackages } from "@/data/karnali/travel-info";
import "../info/karnali-info.css";

export default function KarnaliPackages() {
  return (
    <section
      id="karnali-packages"
      className="karnali-root karnali-section karnali-info-dark"
      aria-labelledby="karnali-packages-heading"
    >
      <div className="karnali-section-inner">
        <KarnaliSectionHeading
          id="karnali-packages-heading"
          eyebrow="TRAVEL WITH KARVAAHH"
          heading="Tours & experiences"
          goldWord="in Karnali."
          sectionNumber="15 / PACKAGES"
          light
        />

        <ul className="karnali-package-grid">
          {karnaliPackages.map((pkg, i) => (
            <KarnaliRevealItem key={pkg.href} delay={i * 60} variant="scale-in">
              <Link href={pkg.href} className="karnali-package-card">
                <h3 className="karnali-package-title">{pkg.title}</h3>
                <p className="karnali-package-text">{pkg.description}</p>
                <span className="karnali-package-cta">
                  View <span className="karnali-arrow">↗</span>
                </span>
              </Link>
            </KarnaliRevealItem>
          ))}
        </ul>
      </div>
    </section>
  );
}
