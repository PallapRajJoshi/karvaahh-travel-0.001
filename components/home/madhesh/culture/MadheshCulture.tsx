import Image from "next/image";
import "./madhesh-culture.css";

const cultureHighlights = [
  { number: "01", title: "Mithila Painting" },
  { number: "02", title: "Maithili Traditions" },
  { number: "03", title: "Village Life" },
];

const cultureTags = [
  "Pottery",
  "Local crafts",
  "Folk music",
  "Traditional dress",
  "Food",
  "Community celebrations",
  "Sama-Chakeva",
  "Chhath",
  "Vivah Panchami",
  "Holi",
];

export default function MadheshCulture() {
  return (
    <section className="madhesh-culture" aria-label="Mithila culture in Madhesh">
      <div className="madhesh-culture__content">
        <span className="madhesh-eyebrow">Living Traditions</span>
        <h2 className="madhesh-culture__title">
          Meet the soul of
          <br />
          <span className="madhesh-gold-italic">Mithila.</span>
        </h2>
        <p className="madhesh-culture__desc">
          Madhesh is a living cultural landscape shaped by Mithila traditions,
          Maithili and Bhojpuri communities, art, food, music, festivals,
          crafts and generations of village life.
        </p>

        <div className="madhesh-culture__highlights">
          {cultureHighlights.map((item) => (
            <div className="madhesh-culture__highlight" key={item.number}>
              <span className="madhesh-culture__highlight-number">
                {item.number}
              </span>
              <span className="madhesh-culture__highlight-title">
                {item.title}
              </span>
            </div>
          ))}
        </div>

        <ul className="madhesh-culture__tags">
          {cultureTags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      <div className="madhesh-culture__media">
        <Image
          src="/images/madhesh/madhesh-mithila-culture-folk-dances-traditions-nepal.jpg"
          alt="Traditional Mithila painting from a village in Madhesh Province"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="madhesh-culture__image"
        />
      </div>
    </section>
  );
}
