import PackageExclusions from "./PackageExclusions";
import PackageInclusions from "./PackageInclusions";
import { packageInfo } from "./data/jyotirlingaData";
import "./Package.css";

/** Inclusions and exclusions side by side so travellers can compare at a glance. */
export default function PackageTerms() {
  return (
    <section className="jyl-section jyl-terms" aria-label="Package inclusions and exclusions">
      <div className="jyl-container">
        <div className="jyl-terms__grid">
          <PackageInclusions />
          <PackageExclusions />
        </div>
        <p className="jyl-note jyl-terms__disclaimer">{packageInfo.disclaimer}</p>
      </div>
    </section>
  );
}
