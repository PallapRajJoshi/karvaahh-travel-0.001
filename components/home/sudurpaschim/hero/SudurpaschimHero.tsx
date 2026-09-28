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
    detail: "Gaura · Doteli · Himalayan traditions",
  },
];

export default function SudurpaschimHero() {
  return (
    <section className="sp-hero" aria-label="Sudurpaschim Province introduction">
      <div className="sp-hero__media">
        <Image
          src="/sudurpaschim/hero.jpg"
          alt="Remote Himalayan valley in far-western Nepal at sunrise"
          fill
          priority
          sizes="100vw"
          className="sp-hero__image"
        />
        <div className="sp-hero__scrim" aria-hidden="true" />
      </div>

      <div className="sp-hero__content sp-container">
        <p className="sp-hero__eyebrow">Far Western Nepal</p>

        <h1 className="sp-hero__title">
          Discover
          <span className="sp-hero__title-line">Sudurpaschim</span>
        </h1>

        <p className="sp-hero__headline">
          Where sacred mountains meet the wild west.
        </p>

        <p className="sp-hero__desc">
          Journey into Nepal&rsquo;s far west, where ancient temples, remote
          Himalayan valleys, sacred lakes, dense forests, wild rivers and
          living traditions remain wonderfully unexplored.
        </p>

        <div className="sp-hero__meta">
          <span className="sp-hero__location">Sudurpaschim Province</span>
          <span className="sp-hero__divider" aria-hidden="true" />
          <span className="sp-hero__tagline">Sacred. Remote. Untamed.</span>
        </div>

        <div className="sp-hero__actions">
          <Link href="/plan-your-trip" className="sp-btn sp-btn--primary">
            Plan Your Journey <span className="sp-arrow">↗</span>
          </Link>
          <Link href="#sp-experiences" className="sp-btn sp-btn--ghost">
            Explore Experiences
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
