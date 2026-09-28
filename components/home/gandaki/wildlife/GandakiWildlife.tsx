import Image from "next/image";
import "./gandaki-wildlife.css";

const habitats = [
  "Dhorpatan Hunting Reserve",
  "Annapurna Conservation Area",
  "Manaslu Conservation Area",
  "Alpine ecosystems",
  "River valleys and birdlife",
  "Narayani River, Nawalpur",
  "Community forests",
];

export default function GandakiWildlife() {
  return (
    <section className="gandaki-wildlife" aria-label="Wildlife and nature in Gandaki">
      <div className="gandaki-wildlife__media">
        <Image
          src="/images/gandaki/dhorpatan-alpine-meadows-himalayan-wilderness-gandaki-nepal.jpg"
          alt="Forested river valley and alpine ridgeline in Gandaki Province"
          fill
          sizes="100vw"
          className="gandaki-wildlife__image"
        />
        <div className="gandaki-wildlife__scrim" />
      </div>

      <div className="gandaki-wildlife__content">
        <span className="gandaki-wildlife__index">09</span>
        <p className="gandaki-wildlife__eyebrow">NATURE & CONSERVATION</p>
        <h2 className="gandaki-wildlife__title">
          Where the wild
          <em> meets the mountains.</em>
        </h2>
        <p className="gandaki-wildlife__description">
          Gandaki moves from subtropical river valleys to alpine wilderness, creating an
          extraordinary range of ecosystems and wildlife habitats.
        </p>

        <ul className="gandaki-wildlife__habitats">
          {habitats.map((habitat) => (
            <li key={habitat} className="gandaki-wildlife__habitat">
              {habitat}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
