import Image from "next/image";
import Link from "next/link";
import "./lumbini-hero.css";

const highlights = [
  {
    number: "01",
    title: "Buddhist Heritage",
    detail: "Lumbini · Kapilvastu · Ramgram",
  },
  {
    number: "02",
    title: "Culture",
    detail: "Tharu · Magar · Newar traditions",
  },
  {
    number: "03",
    title: "Wilderness",
    detail: "Bardiya · Banke · Western Hills",
  },
];

export default function LumbiniHero() {
  return (
    <section className="lumbini-hero" aria-label="Lumbini Province introduction">
      <div className="lumbini-hero__media">
        <Image
          src="/images/lumbini/lumbini-sacred-garden-maya-devi-temple-nepal.jpg"
          alt="Sunrise over the Sacred Garden of Lumbini with prayer flags and monastery silhouettes"
          fill
          priority
          sizes="100vw"
          className="lumbini-hero__image"
        />
        <div className="lumbini-hero__overlay" aria-hidden="true" />
      </div>

      <div className="lumbini-hero__content">
        <p className="lumbini-hero__eyebrow">Western Nepal</p>

        <h1 className="lumbini-hero__title">
          Discover
          <span className="lumbini-hero__title-emphasis">Lumbini</span>
        </h1>

        <p className="lumbini-hero__headline">
          Where the journey begins with peace.
        </p>

        <p className="lumbini-hero__description">
          From the sacred birthplace of Gautama Buddha to ancient
          archaeological sites, peaceful monasteries, Tharu villages,
          Himalayan foothills and wild landscapes, Lumbini Province is a
          journey through faith, history and nature.
        </p>

        <div className="lumbini-hero__meta">
          <div className="lumbini-hero__meta-block">
            <span className="lumbini-hero__meta-label">Location</span>
            <span className="lumbini-hero__meta-value">Lumbini Province</span>
          </div>
          <span className="lumbini-hero__meta-divider" aria-hidden="true" />
          <div className="lumbini-hero__meta-block">
            <span className="lumbini-hero__meta-label">Tagline</span>
            <span className="lumbini-hero__meta-value">
              Peace. Heritage. Discovery.
            </span>
          </div>
        </div>

        <div className="lumbini-hero__actions">
          <Link href="/destinations/lumbini-province#experiences" className="lumbini-hero__cta">
            Explore Lumbini
            <span aria-hidden="true">↗</span>
          </Link>
        </div>
      </div>

      <ul className="lumbini-hero__highlights" aria-label="Lumbini highlights">
        {highlights.map((item) => (
          <li className="lumbini-hero__highlight" key={item.number}>
            <span className="lumbini-hero__highlight-number">
              {item.number}
            </span>
            <div className="lumbini-hero__highlight-text">
              <span className="lumbini-hero__highlight-title">
                {item.title}
              </span>
              <span className="lumbini-hero__highlight-detail">
                {item.detail}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
