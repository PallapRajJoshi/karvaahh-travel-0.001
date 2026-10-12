import Image from "next/image";
import Link from "next/link";
import "./gandaki-cta.css";

export default function GandakiCTA() {
  return (
    <section className="gandaki-cta" aria-labelledby="gandaki-cta-title">
      <div className="gandaki-cta__media">
        <Image
          src="/images/gandaki/scenic-mountain-road-gandaki-nepal-travel-journey.jpg"
          alt="Mountain highway winding towards snow-capped Himalayan peaks"
          fill
          sizes="100vw"
          className="gandaki-cta__image"
        />
        <div className="gandaki-cta__scrim" />
      </div>

      <div className="gandaki-cta__content gandaki-reveal">
        <span className="gandaki-cta__index" aria-hidden="true">
          14
        </span>
        <p className="gandaki-cta__eyebrow">READY WHEN YOU ARE</p>
        <h2 id="gandaki-cta-title" className="gandaki-cta__title">Plan your Gandaki journey</h2>
        <p className="gandaki-cta__description">
          Lakeside stays, Muktinath darshan, a first teahouse trek or a high-pass expedition —
          tell us how you like to travel and we will shape a Gandaki route around your dates,
          permits and pace.
        </p>
        <div className="gandaki-cta__actions">
          <Link href="/contact" className="gandaki-cta__primary">
            Start planning <span aria-hidden="true">↗</span>
          </Link>
          <Link href="#packages" className="gandaki-cta__secondary">
            Browse featured tours
          </Link>
        </div>
      </div>
    </section>
  );
}
