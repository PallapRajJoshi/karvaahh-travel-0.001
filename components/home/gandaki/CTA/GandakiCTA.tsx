import Image from "next/image";
import Link from "next/link";
import "./gandaki-cta.css";

export default function GandakiCTA() {
  return (
    <section className="gandaki-cta" aria-label="Plan your Gandaki journey">
      <div className="gandaki-cta__media">
        <Image
          src="/images/gandaki/scenic-mountain-road-gandaki-nepal-travel-journey.jpg"
          alt="Golden light over the Annapurna range at dusk"
          fill
          sizes="100vw"
          className="gandaki-cta__image"
        />
        <div className="gandaki-cta__scrim" />
      </div>

      <div className="gandaki-cta__content">
        <span className="gandaki-cta__index">11</span>
        <p className="gandaki-cta__eyebrow">READY WHEN YOU ARE</p>
        <h2 className="gandaki-cta__title">Plan your Gandaki journey</h2>
        <p className="gandaki-cta__description">
          Pokhara International Airport connects Gandaki to the rest of Nepal, with road
          routes linking Kathmandu, Chitwan, Lumbini, Mustang, Manang and Gorkha. Let us help
          you build a route through the mountains and lakes at your own pace.
        </p>
        <div className="gandaki-cta__actions">
          <Link href="/plan-your-trip" className="gandaki-cta__primary">
            Start planning <span aria-hidden="true">↗</span>
          </Link>
          <Link href="/contact" className="gandaki-cta__secondary">
            Talk to a specialist
          </Link>
        </div>
      </div>
    </section>
  );
}
