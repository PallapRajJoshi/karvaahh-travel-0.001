import Image from "next/image";
import Link from "next/link";
import "./karnali-cta.css";

export default function KarnaliCTA() {
  return (
    <section className="karnali-root karnali-cta" aria-label="Plan your Karnali journey">
      <div className="karnali-cta-media">
        <Image
          src="/karnali/phoksundo.jpg"
          alt="Remote Himalayan landscape near Phoksundo Lake, Karnali"
          fill
          sizes="100vw"
          className="karnali-cta-image"
        />
        <div className="karnali-cta-overlay" />
      </div>

      <span className="karnali-num">11</span>

      <div className="karnali-cta-content">
        <h2 className="karnali-cta-title">
          Some journeys
          <br />
          take you farther.
        </h2>
        <p className="karnali-cta-gold">Go to Karnali.</p>
        <p className="karnali-cta-description">
          Follow ancient trails, discover sacred lakes, meet remote mountain
          communities and experience a side of Nepal that still feels
          wonderfully untamed.
        </p>

        <div className="karnali-cta-buttons">
          <Link href="/destinations/karnali-province" className="karnali-cta-btn karnali-cta-btn-primary">
            Explore Karnali
          </Link>
          <Link href="/contact" className="karnali-cta-btn karnali-cta-btn-secondary">
            Plan Your Expedition
          </Link>
        </div>
      </div>
    </section>
  );
}
