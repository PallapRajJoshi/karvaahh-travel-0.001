import Link from "next/link";
import Image from "next/image";

export default function KhaptadFinalCta() {
  return (
    <section className="khaptad-final-cta" aria-labelledby="khaptad-final-cta-heading">
      <div className="khaptad-final-cta__media">
        <Image
          src="/images/destinations/khaptad/cta/khaptad-final-cta.jpg"
          alt="Khaptad meadow landscape at golden hour"
          fill
          sizes="100vw"
        />
        <div className="khaptad-final-cta__overlay" aria-hidden="true" />
      </div>

      <div className="khaptad-page__container khaptad-final-cta__content">
        <h2 id="khaptad-final-cta-heading">Discover the Peaceful Wilderness of Khaptad</h2>
        <p>
          Escape into the tranquil meadows of far-western Nepal, explore sacred Himalayan landmarks, walk through
          pristine forests, and experience the peaceful natural beauty of Khaptad with a journey tailored to your
          travel style.
        </p>
        <div className="khaptad-final-cta__actions">
          <Link href="#khaptad-packages" className="khaptad-btn khaptad-btn--primary">
            Explore Khaptad Packages
          </Link>
          <Link href="/contact" className="khaptad-btn khaptad-btn--secondary">
            Customize Your Khaptad Journey
          </Link>
          <Link href="/contact" className="khaptad-btn khaptad-btn--secondary">
            Contact Karvaahh
          </Link>
        </div>
      </div>
    </section>
  );
}
