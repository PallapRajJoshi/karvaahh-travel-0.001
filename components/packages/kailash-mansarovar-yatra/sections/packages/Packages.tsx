import { packages, packagesNote } from "../../data/packages";
import Notice from "../../shared/Notice";
import Reveal from "../../shared/Reveal";
import SectionHeading from "../../shared/SectionHeading";
import PackageCard from "./PackageCard";
import "./Packages.css";

export default function Packages() {
  return (
    <section id="packages" className="km-section km-section--white" aria-labelledby="km-packages-title">
      <div className="km-container">
        <SectionHeading
          id="km-packages-title"
          eyebrow="Yatra Packages"
          heading="Choose Your Kailash Mansarovar Journey"
          intro="Explore customized pilgrimage options designed around your preferred travel style, available routes, and physical comfort."
        />
        <ul className="km-packages__grid">
          {packages.map((p, i) => (
            <Reveal as="li" key={p.id} index={i % 2}>
              <PackageCard pkg={p} />
            </Reveal>
          ))}
        </ul>
        <Notice tone="info" title="Overland or helicopter-assisted?" className="km-packages__note">
          <p>{packagesNote}</p>
        </Notice>
      </div>
    </section>
  );
}
