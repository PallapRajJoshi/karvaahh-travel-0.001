import Image from "next/image";
import "./madhesh-pilgrimage.css";

const pilgrimageSites = [
  "Janakpurdham",
  "Janaki Mandir",
  "Vivah Mandap",
  "Ram Mandir",
  "Dhanushadham",
  "Jaleshwar Mahadev",
  "Gadhimai Temple",
  "Chhinnamasta Bhagwati",
  "Kankalini Bhagwati",
  "Dhaneshwar Mahadev",
  "Tuteshwar Mahadev",
];

export default function MadheshPilgrimage() {
  return (
    <section className="madhesh-pilgrimage" aria-label="Pilgrimage in Madhesh">
      <div className="madhesh-pilgrimage__media">
        <Image
          src="/images/madhesh/janaki-mandir-dron-view.jpg"
          alt="Janaki Mandir, Janakpur — a major pilgrimage site in Madhesh"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="madhesh-pilgrimage__image"
        />
      </div>

      <div className="madhesh-pilgrimage__content">
        <span className="madhesh-eyebrow">Sacred Landscapes</span>
        <h2 className="madhesh-pilgrimage__title">
          Walk where <span className="madhesh-gold-italic">legends live.</span>
        </h2>
        <p className="madhesh-pilgrimage__desc">
          Madhesh is one of Nepal&apos;s great spiritual landscapes, where
          ancient stories, sacred temples, pilgrimage traditions and living
          communities come together.
        </p>

        <ul className="madhesh-pilgrimage__list">
          {pilgrimageSites.map((site) => (
            <li key={site}>{site}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
