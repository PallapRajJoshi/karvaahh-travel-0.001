import SafeImage from "@/components/shared/SafeImage";
import KarnaliSectionHeading from "../heading/KarnaliSectionHeading";
import "./karnali-culture.css";

const cultureHighlights = [
  {
    number: "01",
    title: "Khas Heritage",
    description:
      "Sinja Valley, ancient inscriptions, language, architecture and historic settlements central to Khas civilization.",
    image: "/karnali/sinja.jpg",
    alt: "Sinja Valley, historic centre of Khas heritage",
  },
  {
    number: "02",
    title: "Tibetan & Himalayan Cultures",
    description:
      "Humla and Dolpo villages, monasteries, Bon traditions and mountain lifestyles shaped by centuries of trans-Himalayan trade.",
    image: "/karnali/limi-valley.jpg",
    alt: "Monastery in a Himalayan village in Humla",
  },
  {
    number: "03",
    title: "Magar & Thakuri Communities",
    description:
      "Traditional villages, festivals, farming, food and local craftsmanship carried on through generations across Karnali's hill districts.",
    image: "/karnali/culture.jpg",
    alt: "Traditional Magar and Thakuri village life in Karnali",
  },
];

const cultureTags = [
  "Khas culture",
  "Magar culture",
  "Thakuri traditions",
  "Tibetan-influenced communities",
  "Bon traditions",
  "Buddhist traditions",
  "Traditional architecture",
  "Monasteries",
  "Village life",
  "High-altitude farming",
  "Wool crafts",
  "Handicrafts",
  "Local music",
  "Homestays",
];

const cuisine = [
  {
    dish: "Marshi red rice",
    note: "Jumla's heirloom rice, grown at some of the world's highest rice-farming altitudes",
  },
  { dish: "Phapar & barley", note: "Buckwheat and barley dhido, rotis and porridges of the high valleys" },
  { dish: "Jumli simi & walnuts", note: "Hardy local beans and walnuts from Karnali's hill farms" },
  { dish: "Jumla apples", note: "Crisp apples from Jumla's high orchards, harvested in autumn" },
  {
    dish: "Tsampa & butter tea",
    note: "Roasted-barley staples of the Tibetan-influenced villages of Dolpo and Humla",
  },
];

export default function KarnaliCulture() {
  return (
    <section className="karnali-root karnali-culture" aria-label="Culture of Karnali">
      <span className="karnali-num">09</span>

      <KarnaliSectionHeading
        eyebrow="THE PEOPLE"
        heading="Meet the people"
        goldWord="of the high valleys."
        sectionNumber="09 / CULTURE"
      />

      <div className="karnali-culture-grid">
        {cultureHighlights.map((item) => (
          <article className="karnali-culture-card" key={item.number}>
            <div className="karnali-culture-image-wrap">
              <SafeImage
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="karnali-culture-image"
              />
            </div>
            <span className="karnali-culture-card-number">{item.number}</span>
            <h3 className="karnali-culture-card-title">{item.title}</h3>
            <p className="karnali-culture-card-description">{item.description}</p>
          </article>
        ))}
      </div>

      <ul className="karnali-culture-tags" aria-label="Cultural themes in Karnali">
        {cultureTags.map((tag) => (
          <li key={tag} className="karnali-culture-tag">
            {tag}
          </li>
        ))}
      </ul>

      <div className="karnali-cuisine">
        <h3 className="karnali-cuisine-title">Taste of Karnali</h3>
        <ul className="karnali-cuisine-list">
          {cuisine.map((item) => (
            <li key={item.dish} className="karnali-cuisine-item">
              <span className="karnali-cuisine-dish">{item.dish}</span>
              <span className="karnali-cuisine-note">{item.note}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
