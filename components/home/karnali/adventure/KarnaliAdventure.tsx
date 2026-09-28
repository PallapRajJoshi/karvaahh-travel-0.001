import Image from "next/image";
import "./karnali-adventure.css";

const activities = [
  "High-altitude trekking",
  "Expedition trekking",
  "Camping",
  "Hiking",
  "Mountain photography",
  "Mountain expeditions",
  "Mountain biking on suitable routes",
  "River experiences",
  "Wildlife observation",
  "Birdwatching",
  "Village homestays",
  "Cultural exploration",
];

export default function KarnaliAdventure() {
  return (
    <section
      className="karnali-root karnali-adventure"
      aria-label="Adventure in Karnali"
    >
      <div className="karnali-adventure-visual">
        <Image
          src="/karnali/adventure.jpg"
          alt="Expedition trekkers crossing remote terrain in Dolpo, Karnali"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="karnali-adventure-image"
        />
        <span className="karnali-num">04</span>
      </div>

      <div className="karnali-adventure-content">
        <p className="karnali-eyebrow">GO FURTHER</p>
        <h2 className="karnali-adventure-title">
          Go beyond
          <br />
          <em>the known.</em>
        </h2>
        <p className="karnali-adventure-description">
          Dolpo, Shey Phoksundo and Phoksundo Lake. Humla and Limi Valley. Jumla
          and the Sinja Valley. Rara, Sisne Himal, Putha Himal, Patarasi Himal
          and the Saipal landscapes — Karnali's terrain rewards those who
          travel further and slower.
        </p>

        <ul className="karnali-adventure-list">
          {activities.map((activity) => (
            <li key={activity} className="karnali-adventure-list-item">
              {activity}
            </li>
          ))}
        </ul>

        <p className="karnali-adventure-tag">REMOTE / EXPEDITION / WILDERNESS</p>
      </div>
    </section>
  );
}
