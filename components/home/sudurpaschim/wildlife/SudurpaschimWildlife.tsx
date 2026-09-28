import Image from "next/image";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-wildlife.css";

const wildlifeExperiences = [
  "Jungle safari",
  "Birdwatching",
  "Nature walks",
  "Wildlife photography",
  "Wetland exploration",
  "Cycling",
  "Canoeing & boating where available",
];

export default function SudurpaschimWildlife() {
  return (
    <section
      id="sp-wildlife"
      className="sp-wildlife"
      aria-labelledby="sp-wildlife-heading"
    >
      <div className="sp-wildlife__media">
        <Image
          src="/sudurpaschim/wildlife.jpg"
          alt="Grassland and wetland habitat at Shuklaphanta National Park"
          fill
          sizes="100vw"
          className="sp-wildlife__image"
        />
        <div className="sp-wildlife__scrim" aria-hidden="true" />
      </div>

      <div className="sp-container sp-wildlife__content">
        <SudurpaschimSectionHeading
          index="09"
          eyebrow="Wilderness"
          heading="Where the wild still roams."
          description="Shuklaphanta and Khaptad National Parks, the wetlands of Ghodaghodi and the forest corridors along the Karnali, Mahakali and Geruwa rivers hold some of far-western Nepal's richest habitat."
          theme="dark"
        />

        <div className="sp-wildlife__grid">
          <div className="sp-wildlife__note">
            <p className="sp-wildlife__note-label">Shuklaphanta</p>
            <p className="sp-wildlife__note-text">
              Large open grasslands support swamp deer and rich birdlife,
              offering opportunities to observe wildlife across the phanta
              and forest edges.
            </p>
          </div>

          <ul className="sp-wildlife__list">
            {wildlifeExperiences.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
