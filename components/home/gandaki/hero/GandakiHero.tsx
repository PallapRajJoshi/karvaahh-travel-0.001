import Image from "next/image";
import Link from "next/link";
import "./gandaki-hero.css";

const highlights = [
  {
    index: "01",
    label: "HIMALAYAS",
    detail: "Annapurna I • Manaslu • Dhaulagiri — three 8,000 m peaks",
  },
  {
    index: "02",
    label: "LAKES",
    detail: "Phewa • Begnas • Rupa • Tilicho",
  },
  {
    index: "03",
    label: "TRANS-HIMALAYA",
    detail: "Mustang • Manang • Muktinath",
  },
  {
    index: "04",
    label: "ADVENTURE",
    detail: "Trekking • Paragliding • Rafting",
  },
];

export default function GandakiHero() {
  return (
    <section className="gandaki-hero" aria-labelledby="gandaki-hero-title">
      <div className="gandaki-hero__media">
        <Image
          src="/images/gandaki/gandaki-province-phewa-lake-annapurna-mountains-nepal.jpg"
          alt="Machhapuchhre and the Annapurna range reflected in Phewa Lake, Pokhara"
          fill
          priority
          sizes="100vw"
          className="gandaki-hero__image"
        />
        <div className="gandaki-hero__scrim" />
      </div>

      <div className="gandaki-hero__content">
        <div className="gandaki-hero__top gandaki-hero__enter">
          <p className="gandaki-hero__eyebrow">THE GREAT HIMALAYAN WEST</p>
          <p className="gandaki-hero__location">GANDAKI PROVINCE · NEPAL</p>
        </div>

        <div className="gandaki-hero__middle">
          <h1 id="gandaki-hero-title" className="gandaki-hero__title gandaki-hero__enter">
            Discover
            <span className="gandaki-hero__title-line">Gandaki</span>
          </h1>
          <p className="gandaki-hero__headline gandaki-hero__enter">
            Where the mountains meet the lakes.
          </p>
          <p className="gandaki-hero__description gandaki-hero__enter">
            From Pokhara&rsquo;s lakeshore to the high trails of Annapurna and Manaslu, the
            sacred waters of Muktinath and the desert canyons of Mustang — Nepal&rsquo;s great
            mountain, pilgrimage and adventure province.
          </p>

          <div className="gandaki-hero__actions gandaki-hero__enter">
            <Link href="#destinations" className="gandaki-hero__cta">
              Explore destinations <span aria-hidden="true">↓</span>
            </Link>
            <Link href="/contact" className="gandaki-hero__cta gandaki-hero__cta--ghost">
              Plan your journey <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>

        <ul className="gandaki-hero__highlights gandaki-hero__enter">
          {highlights.map((item) => (
            <li className="gandaki-hero__highlight" key={item.index}>
              <span className="gandaki-hero__highlight-index" aria-hidden="true">
                {item.index}
              </span>
              <span className="gandaki-hero__highlight-label">{item.label}</span>
              <span className="gandaki-hero__highlight-detail">{item.detail}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
