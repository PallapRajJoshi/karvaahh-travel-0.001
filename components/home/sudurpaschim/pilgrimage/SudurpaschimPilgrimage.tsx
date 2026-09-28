import Image from "next/image";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-pilgrimage.css";

const temples = [
  "Badimalika Temple",
  "Malikarjun Temple",
  "Shaileshwari Temple",
  "Ugratara Temple",
  "Tripura Sundari Temple",
  "Melauli Bhagwati Temple",
  "Baidyanath Dham",
  "Panchadeval Binayak",
];

export default function SudurpaschimPilgrimage() {
  return (
    <section
      id="sp-pilgrimage"
      className="sp-pilgrimage"
      aria-labelledby="sp-pilgrimage-heading"
    >
      <div className="sp-pilgrimage__media">
        <Image
          src="/sudurpaschim/khaptad.jpg"
          alt="Sacred highland landscape near Khaptad at dusk"
          fill
          sizes="100vw"
          className="sp-pilgrimage__image"
        />
        <div className="sp-pilgrimage__scrim" aria-hidden="true" />
      </div>

      <div className="sp-container sp-pilgrimage__content">
        <SudurpaschimSectionHeading
          index="06"
          eyebrow="Sacred Himalayas"
          heading="Sacred peaks. Ancient faith."
          description="In the far west, faith follows the mountains. Ancient temples, sacred landscapes and pilgrimage traditions connect villages, forests and high Himalayan valleys."
          theme="dark"
        />

        <ul className="sp-pilgrimage__list">
          {temples.map((temple) => (
            <li key={temple}>{temple}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
