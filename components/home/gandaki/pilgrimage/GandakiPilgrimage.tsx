import Image from "next/image";
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
    <section className="gandaki-pilgrimage" aria-label="Pilgrimage in Gandaki">
      <div className="gandaki-pilgrimage__media">
        <Image
          src="/images/gandaki/poon-hill-sunrise-dhaulagiri-myagdi-gandaki-nepal.jpg"
          alt="Pilgrims at the Muktinath temple complex in the Mustang highlands"
          fill
          sizes="100vw"
          className="gandaki-pilgrimage__image"
        />
        <div className="gandaki-pilgrimage__scrim" />
      </div>

      <div className="gandaki-pilgrimage__content">
        <span className="gandaki-pilgrimage__index">06</span>
        <p className="gandaki-pilgrimage__eyebrow">FAITH IN THE HIGHLANDS</p>
        <h2 className="gandaki-pilgrimage__title">
          Sacred mountains,
          <em> timeless faith.</em>
        </h2>
        <p className="gandaki-pilgrimage__description">
          Across Gandaki, sacred temples, mountain shrines, monasteries and pilgrimage routes
          connect the valleys with some of Nepal&rsquo;s most dramatic Himalayan landscapes.
        </p>

        <ul className="gandaki-pilgrimage__sites">
          {sites.map((site) => (
            <li key={site} className="gandaki-pilgrimage__site">
              {site}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
