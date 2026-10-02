import Link from "next/link";
import Image from "next/image";
import { khaptadQuickFacts } from "@/data/destinations/khaptad/khaptad-facts";

export default function KhaptadHero() {
  return (
    <section className="khaptad-hero" aria-label="Khaptad National Park introduction">
      <div className="khaptad-hero__media">
        <Image
          src="/images/destinations/khaptad/hero/khaptad-meadows-hero.jpg"
          alt="Expansive green meadows and rolling hills of Khaptad National Park at dusk"
          fill
          priority
          sizes="100vw"
          className="khaptad-hero__image"
        />
        <div className="khaptad-hero__overlay" aria-hidden="true" />
      </div>

      <div className="khaptad-hero__content khaptad-page__container">
        <span className="khaptad-page__eyebrow khaptad-hero__eyebrow">
          Offbeat Nepal · Far-Western Nepal
        </span>
        <h1 className="khaptad-hero__title">Khaptad National Park — Nepal&apos;s Serene Himalayan Wilderness</h1>
        <p className="khaptad-hero__subtitle">
          Discover peaceful alpine meadows, sacred spiritual landmarks, forest trails, and the untouched natural
          beauty of far-western Nepal.
        </p>

        <div className="khaptad-hero__actions">
          <Link href="#khaptad-packages" className="khaptad-btn khaptad-btn--primary">
            Explore Khaptad Packages
          </Link>
          <Link href="/contact" className="khaptad-btn khaptad-btn--secondary">
            Plan Your Khaptad Journey
          </Link>
        </div>

        <dl className="khaptad-hero__facts">
          {khaptadQuickFacts.slice(0, 3).map((fact) => (
            <div className="khaptad-hero__fact" key={fact.label}>
              <dt>{fact.label}</dt>
              <dd>{fact.value}</dd>
            </div>
          ))}
        </dl>
      </div>

      <div className="khaptad-hero__scroll-indicator" aria-hidden="true">
        <span />
      </div>
    </section>
  );
}
