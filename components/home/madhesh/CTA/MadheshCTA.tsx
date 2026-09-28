import Image from "next/image";
import Link from "next/link";
import "./madhesh-cta.css";

export default function MadheshCTA() {
  return (
    <section id="cta" className="madhesh-cta" aria-label="Plan your Madhesh trip">
      <div className="madhesh-cta__media">
        <Image
          src="/images/madhesh/janakpur-night-view.jpg"
          alt="Sunrise over Janakpur, gateway to Madhesh Province"
          fill
          sizes="100vw"
          className="madhesh-cta__image"
        />
        <div className="madhesh-cta__overlay" aria-hidden="true" />
      </div>

      <div className="madhesh-cta__content">
        <span className="madhesh-eyebrow">Start Planning</span>
        <h2 className="madhesh-cta__title">
          Your journey begins
          <br />
          in <span className="madhesh-gold-italic">Madhesh.</span>
        </h2>
        <p className="madhesh-cta__alt-line">
          Come for the temples.
          <br />
          Stay for the stories.
        </p>
        <p className="madhesh-cta__desc">
          Discover sacred cities, living traditions, ancient heritage,
          wildlife and the unforgettable warmth of southern Nepal.
        </p>

        <div className="madhesh-cta__actions">
          <Link href="#experiences" className="madhesh-btn madhesh-btn--gold">
            Explore Madhesh <span className="madhesh-arrow">↗</span>
          </Link>
          <Link href="/contact" className="madhesh-btn madhesh-btn--outline">
            Plan Your Trip
          </Link>
        </div>
      </div>
    </section>
  );
}
