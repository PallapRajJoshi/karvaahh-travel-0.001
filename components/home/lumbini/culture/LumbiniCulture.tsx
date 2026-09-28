import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-culture.css";

const cultures = [
  {
    number: "01",
    title: "Tharu Culture",
    description:
      "Traditional villages, homestays, food, music, dance, crafts and community life across the Terai plains.",
    image: "/images/lumbini/tharu-culture-nepal-traditional-village-dance.jpg",
    alt: "Tharu community members in traditional dress",
  },
  {
    number: "02",
    title: "Magar & Hill Culture",
    description:
      "Mountain villages, traditions, festivals, local food and rural landscapes across the western hills.",
    image: "/images/lumbini/magar-hill-culture-western-nepal-village.jpg",
    alt: "Magar hill village in western Nepal",
  },
  {
    number: "03",
    title: "Newar & Heritage Culture",
    description:
      "Tansen and historic settlements, architecture, temples, crafts and traditional urban culture.",
    image: "/images/lumbini/newar-heritage-culture-tansen-palpa-nepal.jpg",
    alt: "Newar architecture in Tansen town",
  },
];

const threads = [
  "Buddhist traditions",
  "Hindu traditions",
  "Tharu culture",
  "Magar culture",
  "Newar culture",
  "Indigenous communities",
  "Village life",
  "Local handicrafts",
  "Monasteries",
  "Temples",
  "Farming",
  "Folk music",
  "Traditional architecture",
];

export default function LumbiniCulture() {
  return (
    <section
      className="lumbini-culture"
      id="culture"
      aria-label="Culture and communities of Lumbini"
    >
      <div className="lumbini-culture__inner">
        <LumbiniSectionHeading
          index="06"
          eyebrow="People & Culture"
          heading="Meet the people"
          emphasis="of western Nepal."
        />

        <ul className="lumbini-culture__grid">
          {cultures.map((culture) => (
            <li key={culture.number} className="lumbini-culture-card">
              <div className="lumbini-culture-card__media">
                <Image
                  src={culture.image}
                  alt={culture.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="lumbini-culture-card__image"
                />
              </div>
              <span className="lumbini-culture-card__number" aria-hidden="true">
                {culture.number}
              </span>
              <h3 className="lumbini-culture-card__title">{culture.title}</h3>
              <p className="lumbini-culture-card__description">
                {culture.description}
              </p>
            </li>
          ))}
        </ul>

        <div className="lumbini-culture__threads">
          {threads.map((thread) => (
            <span key={thread} className="lumbini-culture__thread">
              {thread}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
