import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-pilgrimage.css";

const sacredSites = [
  "Lumbini",
  "Maya Devi Temple",
  "Sacred Garden",
  "Ashoka Pillar",
  "Puskarini Pond",
  "Kapilvastu",
  "Tilaurakot",
  "Kudan",
  "Nigrodharama",
  "Gotihawa",
  "Ramgram",
  "Triveni Dham",
  "Swargadwari",
  "Bageshwori Temple",
  "Supadeurali Temple",
  "Ambikeshwari Temple",
];

export default function LumbiniPilgrimage() {
  return (
    <section
      className="lumbini-pilgrimage"
      id="pilgrimage"
      aria-label="Buddhist and Hindu pilgrimage sites of Lumbini"
    >
      <div className="lumbini-pilgrimage__visual">
        <Image
          src="/images/lumbini/lumbini-province-sacred-landscapes-buddhist-hindu-pilgrimage.jpg"
          alt="Prayer flags strung across the Sacred Garden pathways in Lumbini"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="lumbini-pilgrimage__image"
        />
        <div className="lumbini-pilgrimage__visual-overlay" aria-hidden="true" />
        <span className="lumbini-pilgrimage__section-number" aria-hidden="true">
          04
        </span>
      </div>

      <div className="lumbini-pilgrimage__content">
        <LumbiniSectionHeading
          index="04"
          eyebrow="Sacred Landscapes"
          heading="Walk where"
          emphasis="peace began."
          description="Lumbini Province connects some of Nepal's most important Buddhist and Hindu sacred landscapes, where pilgrimage, meditation, archaeology and living faith come together."
        />

        <ul className="lumbini-pilgrimage__sites" aria-label="Sacred pilgrimage sites">
          {sacredSites.map((site) => (
            <li key={site} className="lumbini-pilgrimage__site">
              <span aria-hidden="true">＋</span>
              {site}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
