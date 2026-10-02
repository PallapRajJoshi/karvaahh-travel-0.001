import Link from "next/link";
import { CONTACT_HREF, PLAN_TRIP_HREF } from "@/lib/destinations/data";
import { ArrowIcon } from "../Icons";
import "./sections.css";

export function FinalCta() {
  return (
    <section id="plan" className="dcta" aria-labelledby="plan-title">
      <div className="dh-container dcta__inner dh-reveal">
        <h2 className="dcta__title" id="plan-title">
          Your Next Journey Starts Here
        </h2>
        <p className="dcta__text">
          Tell us where you want to go. We&rsquo;ll help you turn the destination into an unforgettable journey.
        </p>
        <div className="dcta__actions">
          <a href="#explore" className="dh-btn dh-btn--gold">
            Explore Destinations
            <ArrowIcon />
          </a>
          <Link href={PLAN_TRIP_HREF} className="dh-btn dh-btn--ghost">
            Plan My Trip
          </Link>
          <Link href={CONTACT_HREF} className="dh-btn dh-btn--ghost">
            Contact Karvaahh
          </Link>
        </div>
      </div>
    </section>
  );
}
