import Image from "next/image";
import "./gandaki-heritage.css";

const landmarks = [
  { name: "Gorkha Durbar", note: "Hilltop palace and the historic seat of the Shah dynasty" },
  { name: "Manakamana", note: "Hilltop temple reached by cable car above the Trishuli" },
  { name: "Bandipur", note: "A preserved Newar trade-route town on a mountain ridge" },
  { name: "Kagbeni", note: "Ancient walled settlement above the Kali Gandaki" },
  { name: "Lo Manthang", note: "The historic walled capital of the former Mustang kingdom" },
];

export default function GandakiHeritage() {
  return (
    <section className="gandaki-heritage" aria-label="Heritage of Gandaki">
      <div className="gandaki-heritage__media">
        <Image
          src="/images/gandaki/kagbeni-ancient-walled-settlement-mustang-gandaki-nepal.jpg"
          alt="Historic Gorkha Durbar palace complex overlooking the valley"
          fill
          sizes="(max-width: 900px) 100vw, 48vw"
          className="gandaki-heritage__image"
        />
      </div>

      <div className="gandaki-heritage__content">
        <span className="gandaki-heritage__index">08</span>
        <p className="gandaki-heritage__eyebrow">HERITAGE & HISTORY</p>
        <h2 className="gandaki-heritage__title">
          Stories carved into
          <em> stone and time.</em>
        </h2>
        <p className="gandaki-heritage__description">
          From the palace at Gorkha to the ancient settlements of Mustang, Gandaki holds
          centuries of trade-route history, temple architecture and mountain heritage — best
          explored on foot, camera in hand.
        </p>

        <ul className="gandaki-heritage__list">
          {landmarks.map((item) => (
            <li key={item.name} className="gandaki-heritage__item">
              <span className="gandaki-heritage__item-name">{item.name}</span>
              <span className="gandaki-heritage__item-note">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
