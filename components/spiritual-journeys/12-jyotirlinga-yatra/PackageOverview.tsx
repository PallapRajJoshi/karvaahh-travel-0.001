import Link from "next/link";
import SectionHeading from "./SectionHeading";
import { ctaHref, packageInfo } from "./data/jyotirlingaData";
import "./Package.css";

export default function PackageOverview() {
  return (
    <section id="package" className="jyl-section jyl-section--white jyl-package" aria-labelledby="jyl-package-title">
      <div className="jyl-container">
        <SectionHeading id="jyl-package-title" title={packageInfo.heading} lead={packageInfo.intro} />
        <ul className="jyl-package__formats">
          {packageInfo.formats.map((format, i) => {
            const href = ctaHref({ label: format.title, route: "contact", query: format.enquiry, variant: "secondary" });
            return (
              <li key={format.title} className={`jyl-package__format${i === 0 ? " jyl-package__format--main" : ""}`}>
                <h3 className="jyl-package__format-title">{format.title}</h3>
                <p className="jyl-package__format-text">{format.text}</p>
                {href ? (
                  <Link href={href} className="jyl-package__format-link">
                    Enquire about {i === 0 ? "the complete circuit" : format.title}
                  </Link>
                ) : null}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
