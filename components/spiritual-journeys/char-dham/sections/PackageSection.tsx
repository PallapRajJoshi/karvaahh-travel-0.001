import PackageExclusions from "./PackageExclusions";
import PackageInclusions from "./PackageInclusions";
import PackageOverview from "./PackageOverview";

export default function PackageSection() {
  return (
    <section id="package" className="cd-section cd-package" aria-labelledby="package-title">
      <div className="cd-container">
        <PackageOverview />
        <div className="cd-package__split">
          <PackageInclusions />
          <PackageExclusions />
        </div>
      </div>
    </section>
  );
}
