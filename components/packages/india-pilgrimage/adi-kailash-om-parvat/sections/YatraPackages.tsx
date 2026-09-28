import { packages } from "@/data/india-pilgrimage/adi-kailash-om-parvat/packages";
import { headings, packageCopy } from "@/data/india-pilgrimage/adi-kailash-om-parvat/page";
import { Icon } from "../ui/Icon";
import { PackageCard } from "../ui/PackageCard";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import "./packages.css";

/** Section 7 — Featured tour packages. */
export function YatraPackages() {
  const items = packages.filter((p) => p.enabled !== false);
  return (
    <section id="packages" className="akop-section akop-section--alt akop-packages" aria-labelledby="packages-title">
      <div className="akop-container">
        <SectionHeading id="packages-title" {...headings.packages} />
        <ul className="akop-packages__grid" role="list">
          {items.map((pkg, i) => (
            <Reveal as="li" key={pkg.id} index={i % 3} className="akop-packages__item">
              <PackageCard pkg={pkg} />
            </Reveal>
          ))}
        </ul>
        <p className="akop-packages__footnote">
          <Icon name="info" size={18} />
          <span>{packageCopy.footnote}</span>
        </p>
      </div>
    </section>
  );
}
