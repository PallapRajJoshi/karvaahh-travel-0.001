import Image from "next/image";
import Link from "next/link";
import "./gandaki-pilgrimage.css";

const sites = [
  "Muktinath",
  "Manakamana Temple",
  "Tal Barahi",
  "Bindhyabasini",
  "Baglung Kalika",
  "Gorakhnath Temple",
  "Maulakalika Temple",
  "Devghat",
];

export default function GandakiPilgrimage() {
  return (
    <section className="gandaki-pilgrimage" id="pilgrimage" aria-labelledby="gandaki-pilgrimage-title">
      <div className="gandaki-pilgrimage__media">
        <Image
          src="/images/home/muktinath-view.jpg"
          alt="A Buddhist monastery near Muktinath with Dhaulagiri on the horizon"
          fill
          sizes="100vw"
          className="gandaki-pilgrimage__image"
        />
        <div className="gandaki-pilgrimage__scrim" />
      </div>

      <div className="gandaki-pilgrimage__content gandaki-reveal">
        <span className="gandaki-pilgrimage__index" aria-hidden="true">
          05
        </span>
        <p className="gandaki-pilgrimage__eyebrow">FAITH IN THE HIGHLANDS</p>
        <h2 id="gandaki-pilgrimage-title" className="gandaki-pilgrimage__title">
          Sacred mountains,
          <em> timeless faith.</em>
        </h2>
        <p className="gandaki-pilgrimage__description">
          Across Gandaki, sacred temples, mountain shrines, monasteries and pilgrimage routes
          connect the valleys with some of Nepal&rsquo;s most dramatic Himalayan landscapes.
          Muktinath is revered by Hindus and Buddhists alike, Manakamana draws devotees by cable
          car, and Pokhara&rsquo;s Tal Barahi and Bindhyabasini temples anchor the lakeside city.
          Devghat, where the Kali Gandaki meets the Trishuli, is a revered confluence for ritual
          bathing.
        </p>

        <ul className="gandaki-pilgrimage__sites">
          {sites.map((site) => (
            <li key={site} className="gandaki-pilgrimage__site">
              {site}
            </li>
          ))}
        </ul>

        <Link href="/spiritual-journeys/pashupatinath" className="gandaki-pilgrimage__cta">
          Pashupatinath &amp; Muktinath Yatra <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
