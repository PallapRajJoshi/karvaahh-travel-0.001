import { badaCharDhamPackage as pkg } from "./data/badaCharDhamPackage";
import PackageOverview from "./PackageOverview";
import PackageInclusions from "./PackageInclusions";
import PackageExclusions from "./PackageExclusions";
import { InfoIcon } from "./shared/icons";
import "./Package.css";

/** Package overview → inclusions → exclusions → prominent disclaimer. */
export default function PackageSection() {
  return (
    <section id="package" className="bcd-section bcd-section--sand bcd-pkg" aria-labelledby="bcd-package-title">
      <div className="bcd-container">
        <PackageOverview />
        <div className="bcd-pkg__lists">
          <PackageInclusions />
          <PackageExclusions />
        </div>
        <p className="bcd-pkg__disclaimer" role="note">
          <InfoIcon size={20} />
          <span>{pkg.disclaimer}</span>
        </p>
      </div>
    </section>
  );
}
