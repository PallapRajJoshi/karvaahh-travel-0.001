import Image from "next/image";
import GandakiSectionHeading from "../heading/GandakiSectionHeading";
import "./gandaki-culture.css";

const communities = [
  {
    index: "01",
    title: "Gurung Heritage",
    description: "Ghale Gaun, Ghanpokhara, Sirubari, Barpak and traditional mountain villages.",
    image: "/images/gandaki/ghale-gaun-gurung-heritage-village-gandaki-Nepal.jpg",
    alt: "Traditional Gurung stone houses in Ghale Gaun",
  },
  {
    index: "02",
    title: "Magar & Hill Culture",
    description: "Dhorpatan, Baglung and the surrounding hill communities.",
    image: "/images/gandaki/dhorpatan-magar-village-hill-culture-baglung-Nepal.jpg",
    alt: "Hill landscape near Dhorpatan in Baglung district",
  },
  {
    index: "03",
    title: "Thakali & Tibetan Influence",
    description: "Mustang's monasteries, architecture, food and mountain traditions.",
    image: "/images/gandaki/lo-manthang-thakali-tibetan-heritage-mustang-nepal.jpg",
    alt: "Thakali village architecture in Marpha, Mustang",
  },
];

export default function GandakiCulture() {
  return (
    <section className="gandaki-culture" aria-label="Culture of Gandaki">
      <GandakiSectionHeading
        index="07"
        eyebrow="LIVING TRADITIONS"
        heading="Meet the people"
        emphasis="of the mountains."
        description="Gurung, Magar, Thakali and Tibetan-influenced communities carry traditions of homestays, handicrafts, music, festivals and farming through Gandaki's villages and monasteries."
      />

      <ul className="gandaki-culture__grid">
        {communities.map((item) => (
          <li className="gandaki-culture-card" key={item.title}>
            <div className="gandaki-culture-card__media">
              <Image
                src={item.image}
                alt={item.alt}
                fill
                sizes="(max-width: 768px) 90vw, 30vw"
                className="gandaki-culture-card__image"
              />
            </div>
            <span className="gandaki-culture-card__index">{item.index}</span>
            <h3 className="gandaki-culture-card__title">{item.title}</h3>
            <p className="gandaki-culture-card__description">{item.description}</p>
          </li>
        ))}
      </ul>

      <p className="gandaki-culture__note">
        Festivals across the province include Dashain, Tihar, Buddha Jayanti, Lhosar and
        Yartung, alongside Gurung, Magar and Thakali celebrations. Local kitchens serve dal
        bhat, Thakali thali, dhido, buckwheat dishes, momo and thukpa alongside yak products
        from the high valleys.
      </p>
    </section>
  );
}
