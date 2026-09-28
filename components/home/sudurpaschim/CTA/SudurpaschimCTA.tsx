import Image from "next/image";
import Link from "next/link";
import "./sudurpaschim-cta.css";

export default function SudurpaschimCTA() {
  return (
    <section
      id="sp-cta"
      className="sp-cta"
      aria-labelledby="sp-cta-heading"
    >
      <div className="sp-cta__media">
        <Image
          src="/sudurpaschim/api-himal.jpg"
          alt="Api Himal at sunset in the far-western Himalayas"
          fill
          sizes="100vw"
          className="sp-cta__image"
        />
        <div className="sp-cta__scrim" aria-hidden="true" />
      </div>

      <div className="sp-container sp-cta__content">
        <span className="sp-cta__index" aria-hidden="true">11</span>
        <p className="sp-cta__eyebrow">Sudurpaschim Awaits</p>
        <h2 id="sp-cta-heading" className="sp-cta__title">
          Go farther.
          <span className="sp-cta__title-line">Discover Sudurpaschim.</span>
        </h2>
        <p className="sp-cta__subline">
          Where the journey still feels unexplored.
        </p>
        <p className="sp-cta__desc">
          Follow sacred trails, cross wild landscapes, meet the people of the
          far west and discover a side of Nepal few travelers have seen.
        </p>

        <div className="sp-cta__actions">
          <Link href="#sp-experiences" className="sp-btn sp-btn--primary">
            Explore Sudurpaschim <span className="sp-arrow">↗</span>
          </Link>
          <Link href="/plan-your-trip" className="sp-btn sp-btn--ghost">
            Plan Your Journey
          </Link>
        </div>
      </div>
    </section>
  );
}
