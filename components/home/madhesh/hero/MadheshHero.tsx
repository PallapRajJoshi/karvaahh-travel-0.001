import Image from "next/image";
import Link from "next/link";
import "./madhesh-hero.css";

const heroHighlights = [
  { number: "01", label: "Pilgrimage" },
  { number: "02", label: "Mithila Culture" },
  { number: "03", label: "Heritage" },
];

export default function MadheshHero() {
  return (
    <section className="madhesh-hero" aria-label="Madhesh Province introduction">
      <div className="madhesh-hero__media">
        <Image
          src="/images/madhesh/janaki-temple.jpg"
          alt="Golden hour view of Janaki Mandir in Janakpur, Madhesh Province"
          fill
          priority
          sizes="100vw"
          className="madhesh-hero__image"
        />
        <div className="madhesh-hero__overlay" aria-hidden="true" />
      </div>

      <div className="madhesh-hero__content">
        <p className="madhesh-hero__eyebrow">SOUTHERN NEPAL</p>

        <h1 className="madhesh-hero__title">
          Discover
          <br />
          <span className="madhesh-gold-italic">Madhesh</span>
        </h1>

        <p className="madhesh-hero__headline">
          Where devotion, Mithila culture and the living plains of Nepal meet.
        </p>

        <p className="madhesh-hero__description">
          Journey through sacred cities, ancient heritage, vibrant festivals,
          traditional villages, wetlands and the extraordinary cultural
          landscape of southern Nepal.
        </p>

        <div className="madhesh-hero__actions">
          <Link href="#experiences" className="madhesh-btn madhesh-btn--gold">
            Explore Madhesh <span className="madhesh-arrow">↗</span>
          </Link>
          <Link href="#cta" className="madhesh-btn madhesh-btn--outline">
            Plan Your Trip
          </Link>
        </div>
      </div>

      <div className="madhesh-hero__meta">
        <span className="madhesh-hero__location">MADHESH PROVINCE</span>
        <span className="madhesh-hero__tagline">
          Sacred. Cultural. Unforgettable.
        </span>
      </div>

      <ul className="madhesh-hero__highlights">
        {heroHighlights.map((item) => (
          <li key={item.number}>
            <span className="madhesh-hero__highlight-number">
              {item.number}
            </span>
            <span className="madhesh-hero__highlight-label">
              {item.label}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
