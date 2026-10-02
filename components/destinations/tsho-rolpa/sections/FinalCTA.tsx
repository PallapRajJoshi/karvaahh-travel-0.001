"use client";

import Image from "next/image";
import { useRevealOnScroll } from "../hooks/useRevealOnScroll";
import "./FinalCTA.css";

export default function FinalCTA() {
  const containerRef = useRevealOnScroll<HTMLDivElement>();

  return (
    <section id="tsho-contact" className="tsho-final-cta" ref={containerRef}>
      <div className="tsho-final-cta__media">
        <Image
          src="/images/tsho-rolpa/cta/tsho-rolpa-final-cta.jpg"
          alt="Tsho Rolpa Lake at dusk with the Rolwaling Valley in silhouette"
          fill
          loading="lazy"
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
        <div className="tsho-final-cta__overlay" aria-hidden="true" />
      </div>

      <div className="tsho-container tsho-final-cta__content tsho-reveal">
        <p className="tsho-eyebrow">Ready When You Are</p>
        <h2 className="tsho-final-cta__title">Discover the Untouched Beauty of Tsho Rolpa</h2>
        <p className="tsho-final-cta__text">
          Journey into the remote Rolwaling Valley, explore turquoise glacial waters, discover
          traditional Sherpa villages, and experience the spectacular Himalayan wilderness with a
          journey tailored to your adventure.
        </p>

        <div className="tsho-final-cta__actions">
          <a href="#tsho-packages" className="tsho-btn tsho-btn--primary">
            Explore Tsho Rolpa Packages
          </a>
          <a href="/contact?package=tsho-rolpa" className="tsho-btn tsho-btn--secondary">
            Customize Your Rolwaling Trek
          </a>
          <a href="/contact" className="tsho-btn tsho-btn--secondary">
            Contact Karvaahh
          </a>
        </div>
      </div>
    </section>
  );
}
