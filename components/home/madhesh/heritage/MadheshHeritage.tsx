import Image from "next/image";
import "./madhesh-heritage.css";

const heritageFocus = [
  "Simraungadh",
  "Salhesh heritage",
  "Pataura archaeological area",
  "Hariharpur Pillar",
  "Ancient temples",
  "Ponds and sacred sites",
  "Janakpur heritage architecture",
];

export default function MadheshHeritage() {
  return (
    <section className="madhesh-heritage" aria-label="Heritage and archaeology of Madhesh">
      <div className="madhesh-heritage__media">
        <Image
          src="/images/madhesh/madhesh-ancient-stories-simraungadh-salhesh-heritage-janakpur.jpg"
          alt="Ancient ruins of Simraungadh, the historic capital of Madhesh"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="madhesh-heritage__image"
        />
      </div>

      <div className="madhesh-heritage__content">
        <span className="madhesh-eyebrow">Heritage &amp; Archaeology</span>
        <h2 className="madhesh-heritage__title">
          Ancient stories,
          <br />
          <span className="madhesh-gold-italic">still alive.</span>
        </h2>
        <p className="madhesh-heritage__desc">
          From the lost capital of Simraungadh to the Salhesh heritage
          circuit and the Pataura archaeological area, Madhesh preserves
          centuries of architecture, folklore and sacred sites — best
          explored on foot with time to look closely.
        </p>

        <ul className="madhesh-heritage__list">
          {heritageFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <p className="madhesh-heritage__note">
          Heritage walks, archaeology-focused itineraries and photography
          journeys can be arranged across these sites.
        </p>
      </div>
    </section>
  );
}
