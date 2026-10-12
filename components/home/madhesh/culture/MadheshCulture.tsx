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
  "Tharu traditions",
  "Maithili language",
];

export default function MadheshCulture() {
  return (
    <section id="culture" className="madhesh-culture" aria-label="Mithila culture in Madhesh">
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
        <p className="madhesh-culture__desc">
          Maithili is spoken across the eastern and central districts, while
          Bhojpuri and Bajjika are common further west. Tharu communities, with
          their own language, dances and harvest festivals, live in villages
          across the province. Mithila painting — traditionally made by women
          on walls and floors for weddings and rituals — is now practised on
          paper and canvas, and visitors can learn directly from local artists.
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
