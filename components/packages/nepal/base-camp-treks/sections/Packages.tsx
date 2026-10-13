import Link from "next/link";
import type { CSSProperties } from "react";
import { ArrowRight, Check, Compass, Gauge, MountainSnow } from "lucide-react";
import { anchors, enquiryHref } from "../config";
import { trekPackages } from "../data/content";
import { SectionHeading } from "./SectionHeading";

export function Packages() {
  return (
    <section id={anchors.packages} className="nbc-section nbc-section--tint" aria-labelledby="nbc-packages-title">
      <div className="nbc-container">
        <SectionHeading
          id="nbc-packages-title"
          eyebrow="Karvaahh Treks"
          title="Find Your Perfect Base Camp Adventure"
          subtitle="Base camp treks with full Karvaahh trip pages — plus any other route on this page, planned privately around your dates."
        />

        <ul className="nbc-packages">
          {trekPackages.map((p, i) => (
            <li key={p.id} className="nbc-package" data-reveal="" style={{ "--nbc-i": i } as CSSProperties}>
              <p className="nbc-package__dest">{p.destination}</p>
              <h3 className="nbc-package__title">{p.title}</h3>
              <ul className="nbc-package__highlights">
                {p.highlights.map((h) => (
                  <li key={h}>
                    <Check aria-hidden="true" size={16} />
                    {h}
                  </li>
                ))}
              </ul>
              <dl className="nbc-package__facts">
                <div>
                  <dt>
                    <Gauge aria-hidden="true" size={15} /> Difficulty
                  </dt>
                  <dd>{p.difficulty}</dd>
                </div>
                <div>
                  <dt>
                    <MountainSnow aria-hidden="true" size={15} /> High point
                  </dt>
                  <dd>{p.altitude}</dd>
                </div>
              </dl>
              <p className="nbc-package__terms">Duration, inclusions and price confirmed in your personalised quote.</p>
              <div className="nbc-package__actions">
                <Link href={p.href} className="nbc-btn nbc-btn--primary nbc-btn--sm">
                  {p.cta}
                  <ArrowRight aria-hidden="true" size={16} className="nbc-btn__arrow" />
                </Link>
                <Link href={enquiryHref(p.title)} className="nbc-text-link">
                  Enquire Now
                </Link>
              </div>
            </li>
          ))}

          <li className="nbc-package nbc-package--custom" data-reveal="" style={{ "--nbc-i": trekPackages.length } as CSSProperties}>
            <span className="nbc-package__badge">
              <Compass aria-hidden="true" size={22} />
            </span>
            <h3 className="nbc-package__title">Request a Custom Trek</h3>
            <p>
              Annapurna, Mardi Himal, Ama Dablam, Makalu, Kanchenjunga, Manaslu or Dhaulagiri — tell us the base camp
              you have in mind, your dates, group size and experience, and we will plan the route, pace and support
              around you.
            </p>
            <Link href={enquiryHref("Custom base camp trek")} className="nbc-btn nbc-btn--light nbc-btn--sm">
              Request a Custom Trek
              <ArrowRight aria-hidden="true" size={16} className="nbc-btn__arrow" />
            </Link>
          </li>
        </ul>
      </div>
    </section>
  );
}
