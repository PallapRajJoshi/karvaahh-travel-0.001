import Image from "next/image";
import Link from "next/link";
import "./gandaki-hero.css";

const highlights = [
  {
    index: "01",
    label: "HIMALAYAS",
    detail: "Annapurna • Manaslu • Dhaulagiri",
  },
  {
    index: "02",
    label: "LAKES",
    detail: "Phewa • Begnas • Tilicho and mountain-mirror landscapes",
  },
  {
    index: "03",
    label: "ADVENTURE",
    detail: "Trekking • Paragliding • Rafting",
  },
];

export default function GandakiHero() {
  return (
    <section className="gandaki-hero" aria-label="Gandaki Province introduction">
      <div className="gandaki-hero__media">
        <Image
          src="/images/gandaki/gandaki-province-phewa-lake-annapurna-mountains-nepal.jpg"
          alt="Sunrise over the Annapurna range reflected in Phewa Lake, Pokhara"
          fill
          priority
          sizes="100vw"
          className="gandaki-hero__image"
        />
        <div className="gandaki-hero__scrim" />
      </div>

      <div className="gandaki-hero__content">
        <div className="gandaki-hero__top">
          <p className="gandaki-hero__eyebrow">THE GREAT HIMALAYAN WEST</p>
          <p className="gandaki-hero__location">GANDAKI PROVINCE</p>
        </div>

        <div className="gandaki-hero__middle">
          <h1 className="gandaki-hero__title">
            Discover
            <span className="gandaki-hero__title-line">Gandaki</span>
          </h1>
          <p className="gandaki-hero__headline">Where the mountains meet the lakes.</p>
          <p className="gandaki-hero__description">
            From the tranquil shores of Pokhara to the high trails of Annapurna, Manaslu,
            Mustang and Dhaulagiri, Gandaki is Nepal&rsquo;s great mountain and adventure
            destination.
          </p>

          <div className="gandaki-hero__actions">
            <Link href="/plan-your-trip" className="gandaki-hero__cta">
              Plan your journey <span aria-hidden="true">↗</span>
            </Link>
            <span className="gandaki-hero__tagline">Mountains. Lakes. Adventure.</span>
          </div>
        </div>

        <ul className="gandaki-hero__highlights">
          {highlights.map((item) => (
            <li className="gandaki-hero__highlight" key={item.index}>
              <span className="gandaki-hero__highlight-index">{item.index}</span>
              <span className="gandaki-hero__highlight-label">{item.label}</span>
              <span className="gandaki-hero__highlight-detail">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
