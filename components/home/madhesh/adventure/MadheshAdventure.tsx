import Image from "next/image";
import "./madhesh-adventure.css";

const borderPoints = [
  { route: "Raxaul → Birgunj", note: "Main highway crossing, Parsa district" },
  { route: "Jaynagar → Janakpur", note: "Rail-linked crossing into Dhanusha" },
];

export default function MadheshAdventure() {
  return (
    <section
      className="madhesh-adventure"
      aria-label="Rural and border journeys in Madhesh"
    >
      <div className="madhesh-adventure__media">
        <Image
          src="/madhesh/birgunj.jpg"
          alt="Rural road and border town of Birgunj, Madhesh Province"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="madhesh-adventure__image"
        />
      </div>

      <div className="madhesh-adventure__content">
        <span className="madhesh-eyebrow">Rural &amp; Border Journeys</span>
        <h2 className="madhesh-adventure__title">
          Cycle the plains,
          <br />
          <span className="madhesh-gold-italic">cross the border.</span>
        </h2>
        <p className="madhesh-adventure__desc">
          Madhesh is an easy, welcoming gateway between India and Nepal —
          ideal for cycling through farmland, visiting local markets and
          combining India–Nepal pilgrimage and cultural circuits.
        </p>

        <ul className="madhesh-adventure__borders">
          {borderPoints.map((b) => (
            <li key={b.route}>
              <span className="madhesh-adventure__border-route">
                {b.route}
              </span>
              <span className="madhesh-adventure__border-note">
                {b.note}
              </span>
            </li>
          ))}
        </ul>
        <p className="madhesh-adventure__note">
          Always travel via authorized, official border points.
        </p>
      </div>
    </section>
  );
}
