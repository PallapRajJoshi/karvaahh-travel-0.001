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
        <nav aria-label="Breadcrumb" className="bagmati-hero__breadcrumb">
          <ol>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/destinations">Destinations</Link></li>
            <li aria-current="page">Bagmati Province</li>
          </ol>
        </nav>

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
          Home to Kathmandu and seven UNESCO-listed monument zones, the
          glaciers of Langtang, the sacred lakes of Gosaikunda and the jungles
          of Chitwan — Bagmati is Nepal in extraordinary diversity.
        </p>

        <div className="bagmati-hero__actions">
          <Link href="#discover" className="bagmati-hero__cta">
            Explore destinations
            <span className="bagmati-hero__cta-arrow" aria-hidden="true">
              ↓
            </span>
          </Link>
          <Link href="/contact?province=bagmati" className="bagmati-hero__cta bagmati-hero__cta--ghost">
            Plan your journey
            <span className="bagmati-hero__cta-arrow" aria-hidden="true">
              ↗
            </span>
          </Link>
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
