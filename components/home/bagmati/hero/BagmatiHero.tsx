import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./bagmati-hero.css";

const highlights = [
  {
    number: "01",
    title: "Heritage",
    detail: "Kathmandu Valley & ancient cities",
  },
  {
    number: "02",
    title: "Himalayas",
    detail: "Langtang, Gosainkunda & Rolwaling",
  },
  {
    number: "03",
    title: "Adventure",
    detail: "Trekking, rafting & wildlife",
  },
];

export default function BagmatiHero() {
  return (
    <section className="bagmati-hero" aria-label="Bagmati Province introduction">
      <div className="bagmati-hero__media">
        <Image
          src="/images/bagmati/bagmati-province-kathmandu-valley-heritage-himalayan-mountains.jpg"
          alt="Kathmandu Valley heritage architecture against a Himalayan backdrop in Bagmati Province"
          fill
          priority
          sizes="100vw"
          className="bagmati-hero__image"
        />
        <div className="bagmati-hero__overlay" aria-hidden="true" />
      </div>

      <div className="bagmati-hero__content">
        <div className="bagmati-hero__top">
          <span className="bagmati-hero__eyebrow">Central Nepal</span>
          <span className="bagmati-hero__location">Bagmati Province</span>
        </div>

        <h1 className="bagmati-hero__heading">
          Discover
          <br />
          <span className="bagmati-hero__heading-accent">Bagmati</span>
        </h1>

        <p className="bagmati-hero__subheadline">
          Where ancient cities meet Himalayan horizons.
        </p>

        <p className="bagmati-hero__description">
          From the timeless streets of Kathmandu Valley to sacred mountains,
          hidden villages, national parks and high-altitude lakes, Bagmati is
          Nepal in extraordinary diversity.
        </p>

        <div className="bagmati-hero__actions">
          <Link href="/packages?province=bagmati" className="bagmati-hero__cta">
            Explore Bagmati journeys
            <span className="bagmati-hero__cta-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
          <span className="bagmati-hero__tagline">
            Heritage. Himalayas. Adventure.
          </span>
        </div>
      </div>

      <div className="bagmati-hero__highlights" role="list">
        {highlights.map((item) => (
          <div className="bagmati-hero__highlight" role="listitem" key={item.number}>
            <span className="bagmati-hero__highlight-number">{item.number}</span>
            <div className="bagmati-hero__highlight-text">
              <span className="bagmati-hero__highlight-title">{item.title}</span>
              <span className="bagmati-hero__highlight-detail">{item.detail}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
