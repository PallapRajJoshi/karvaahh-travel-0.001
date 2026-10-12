import Image from "next/image";
import Link from "next/link";
import "./madhesh-hero.css";

const heroHighlights = [
  { number: "01", label: "Pilgrimage", href: "#pilgrimage" },
  { number: "02", label: "Mithila Culture", href: "#culture" },
  { number: "03", label: "Heritage", href: "#heritage" },
  { number: "04", label: "Wildlife", href: "#wildlife" },
];

export default function MadheshHero() {
  return (
    <section className="madhesh-hero" aria-labelledby="madhesh-hero-title">
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

      <div className="madhesh-hero__meta">
        <span className="madhesh-hero__location">MADHESH PROVINCE</span>
        <span className="madhesh-hero__tagline">
          Sacred. Cultural. Unforgettable.
        </span>
      </div>

      <div className="madhesh-hero__content">
        <p className="madhesh-hero__eyebrow">Southern Nepal · Land of Mithila</p>

        <h1 id="madhesh-hero-title" className="madhesh-hero__title">
          Discover
          <br />
          <span className="madhesh-gold-italic">Madhesh</span>
        </h1>

        <p className="madhesh-hero__headline">
          Where devotion, Mithila culture and the living plains of Nepal meet.
        </p>

        <p className="madhesh-hero__description">
          Walk the Ramayana heritage of Janakpurdham, meet Mithila painters,
          explore the medieval ruins of Simraungadh and drive through the sal
          forests of Parsa — all just across the border from Bihar.
        </p>

        <div className="madhesh-hero__actions">
          <Link href="#explore-destinations" className="madhesh-btn madhesh-btn--gold">
            Explore Destinations <span className="madhesh-arrow">↗</span>
          </Link>
          <Link href="/contact" className="madhesh-btn madhesh-btn--outline">
            Plan Your Trip
          </Link>
        </div>
      </div>

      <nav className="madhesh-hero__highlights" aria-label="Jump to Madhesh themes">
        <ul>
          {heroHighlights.map((item) => (
            <li key={item.number}>
              <Link href={item.href}>
                <span className="madhesh-hero__highlight-number">
                  {item.number}
                </span>
                <span className="madhesh-hero__highlight-label">
                  {item.label}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </section>
  );
}
