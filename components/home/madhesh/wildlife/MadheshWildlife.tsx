import Image from "next/image";
import "./madhesh-wildlife.css";

const wildlifeFocus = [
  "Koshi Tappu Wildlife Reserve",
  "Parsa National Park",
  "Wetlands",
  "Grasslands",
  "River ecosystems",
  "Birdwatching",
  "Wild water buffalo",
  "Forest exploration",
];

export default function MadheshWildlife() {
  return (
    <section className="madhesh-wildlife" aria-label="Wildlife and wetlands of Madhesh">
      <div className="madhesh-wildlife__media">
        <Image
          src="/images/madhesh/madhesh-nature-wild-life-koshi-tappu-parsa-national-park.jpg"
          alt="Wetlands and grasslands of Koshi Tappu Wildlife Reserve"
          fill
          sizes="100vw"
          className="madhesh-wildlife__image"
        />
        <div className="madhesh-wildlife__overlay" aria-hidden="true" />
      </div>

      <div className="madhesh-wildlife__content">
        <span className="madhesh-eyebrow">Nature &amp; Wetlands</span>
        <h2 className="madhesh-wildlife__title">
          Where the plains
          <br />
          <span className="madhesh-gold-italic">come alive.</span>
        </h2>
        <p className="madhesh-wildlife__desc">
          From the wetlands of the Koshi basin to the forests of Parsa,
          Madhesh reveals a quieter side of Nepal shaped by rivers,
          grasslands, forests and extraordinary wildlife.
        </p>

        <ul className="madhesh-wildlife__list">
          {wildlifeFocus.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
