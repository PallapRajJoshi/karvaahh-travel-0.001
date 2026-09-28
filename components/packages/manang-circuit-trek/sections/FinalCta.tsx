import Link from "next/link";
import { TRIP } from "../data/content";
import { IconArrowRight } from "../icons";
import "./final-cta.css";

export default function FinalCta() {
  return (
    <section className="mc-cta" aria-labelledby="mc-cta-title">
      <div className="mc-container mc-cta__inner">
        <div>
          <p className="mc-cta__eyebrow">Karvaahh – Live to Travel</p>
          <h2 id="mc-cta-title" className="mc-cta__title">
            Ready for Thorong La?
          </h2>
          <p className="mc-cta__text">
            Share your preferred month and group size. A Karvaahh trek specialist will build your itinerary, confirm
            permits and answer every question before you commit.
          </p>
        </div>
        <div className="mc-cta__actions">
          <Link href={TRIP.enquiryHref} className="mc-btn mc-btn--primary">
            Start planning
            <IconArrowRight />
          </Link>
          <a href="#itinerary" className="mc-btn mc-btn--ghost">
            Review itinerary
          </a>
        </div>
      </div>
    </section>
  );
}
