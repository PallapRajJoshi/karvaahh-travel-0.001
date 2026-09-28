import Image from "next/image";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-heritage.css";

const heritageSites = [
  { name: "Amargadhi Fort", note: "Dadeldhura" },
  { name: "Ajaymeru", note: "Dadeldhura" },
  { name: "Doti Durbar", note: "Doti" },
  { name: "Tripura Sundari", note: "Baitadi" },
  { name: "Ugratara Temple", note: "Dadeldhura" },
  { name: "Malikarjun Temple", note: "Darchula" },
  { name: "Melauli Bhagwati", note: "Baitadi" },
  { name: "Shaileshwari Temple", note: "Doti" },
  { name: "Baidyanath Dham", note: "Achham" },
  { name: "Panchadeval Binayak", note: "Achham" },
];

export default function SudurpaschimHeritage() {
  return (
    <section
      id="sp-heritage"
      className="sp-heritage"
      aria-labelledby="sp-heritage-heading"
    >
      <div className="sp-container sp-heritage__inner">
        <div className="sp-heritage__text">
          <SudurpaschimSectionHeading
            index="08"
            eyebrow="Heritage & History"
            heading="Stories written across the hills."
            description="Forts, temples and traditional hill architecture trace the far west's history — best explored through heritage walks, pilgrimage routes and village visits."
          />

          <ul className="sp-heritage__activities">
            <li>Heritage walks</li>
            <li>Pilgrimage</li>
            <li>Cultural photography</li>
            <li>Village exploration</li>
          </ul>
        </div>

        <div className="sp-heritage__media">
          <Image
            src="/sudurpaschim/heritage.jpg"
            alt="Historic hill architecture and temple stonework in far-western Nepal"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="sp-heritage__image"
          />
        </div>
      </div>

      <ul className="sp-heritage__sites sp-container">
        {heritageSites.map((site) => (
          <li key={site.name} className="sp-heritage__site">
            <span className="sp-heritage__site-name">{site.name}</span>
            <span className="sp-heritage__site-note">{site.note}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
