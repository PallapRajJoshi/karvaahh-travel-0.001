import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./bagmati-cta.css";

export default function BagmatiCTA() {
  return (
    <section className="bagmati-cta" aria-label="Plan your Bagmati trip">
      <div className="bagmati-cta__media">
        <Image
          src="/images/bagmati/bagmati-province-kathmandu-valley-himalayan-travel-inspiration-nepal.jpg"
          alt="Sacred alpine lake at Gosainkunda beneath the Himalaya, Bagmati Province"
          fill
          sizes="100vw"
          className="bagmati-cta__image"
        />
        <div className="bagmati-cta__overlay" aria-hidden="true" />
      </div>

      <div className="bagmati-cta__content">
        <span className="bagmati-cta__eyebrow">Start Planning</span>
        <h2 className="bagmati-cta__heading">
          Your Bagmati story
          <br />
          begins <em>here</em>.
        </h2>
        <p className="bagmati-cta__description">
          Heritage cities, sacred trails and Himalayan valleys — we help you
          shape a Bagmati itinerary suited to your pace and interests.
        </p>
        <div className="bagmati-cta__actions">
          <Link href="/contact?province=bagmati" className="bagmati-cta__primary">
            Talk to a travel specialist
          </Link>
          <Link href="/packages?province=bagmati" className="bagmati-cta__secondary">
            View Bagmati packages
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
