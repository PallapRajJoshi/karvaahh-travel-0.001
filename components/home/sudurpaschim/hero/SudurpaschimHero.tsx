import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";
import "./sudurpaschim-hero.css";

const highlights = [
  {
    number: "01",
    title: "Himalayas",
    detail: "Api · Saipal · Khaptad",
  },
  {
    number: "02",
    title: "Wilderness",
    detail: "Shuklaphanta · Ghodaghodi",
  },
  {
    number: "03",
    title: "Culture",
    detail: "Gaura · Deuda · Tharu traditions",
  },
];

/** Entrance stagger step for the hero's CSS animation. */
const step = (n: number) => ({ "--s": n }) as CSSProperties;

export default function SudurpaschimHero() {
  return (
    <section className="sp-hero" aria-labelledby="sp-hero-heading">
      <div className="sp-hero__media">
        <Image
          src="/sudurpaschim/hero.jpg"
          alt="Remote Himalayan valley in far-western Nepal at sunrise"
          fill
          preload
          sizes="100vw"
          className="sp-hero__image"
        />
        <div className="sp-hero__scrim" aria-hidden="true" />
      </div>

      <div className="sp-hero__content sp-container">
        <p className="sp-hero__eyebrow sp-hero__enter" style={step(0)}>
          Far-Western Nepal · Sudurpashchim Province
        </p>

        <h1 id="sp-hero-heading" className="sp-hero__title sp-hero__enter" style={step(1)}>
          Discover
          <span className="sp-hero__title-line">Sudurpashchim</span>
        </h1>

        <p className="sp-hero__headline sp-hero__enter" style={step(2)}>
          Nepal&rsquo;s Wild West &mdash; Sacred Trails, Untamed Nature &amp;
          Hidden Himalayas.
        </p>

        <p className="sp-hero__desc sp-hero__enter" style={step(3)}>
          Nine districts stretching from the Tharu plains of Kailali and
          Kanchanpur to the 7,000-metre peaks of Api and Saipal &mdash; sacred
          lakes, temple towns and alpine meadows that few travelers have seen.
        </p>

        <div className="sp-hero__actions sp-hero__enter" style={step(4)}>
          <Link href="#sp-destinations" className="sp-btn sp-btn--primary">
            Explore Destinations <span className="sp-arrow">→</span>
          </Link>
          <Link href="/contact?province=sudurpaschim" className="sp-btn sp-btn--ghost">
            Plan Your Journey
          </Link>
        </div>
      </div>

      <ul className="sp-hero__highlights" aria-label="Province highlights">
        {highlights.map((item) => (
          <li className="sp-hero__highlight" key={item.number}>
            <span className="sp-hero__highlight-number">{item.number}</span>
            <span className="sp-hero__highlight-title">{item.title}</span>
            <span className="sp-hero__highlight-detail">{item.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
