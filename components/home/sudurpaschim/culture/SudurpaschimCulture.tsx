import Image from "next/image";
import SudurpaschimSectionHeading from "../heading/SudurpaschimSectionHeading";
import "./sudurpaschim-culture.css";

const cultureGroups = [
  {
    number: "01",
    title: "Doteli & Baitadeli",
    description:
      "Language, music, festivals, villages and traditional hill life across Doti and Baitadi.",
    image: "/sudurpaschim/culture.jpg",
    alt: "Doteli village life in the far-western hills",
  },
  {
    number: "02",
    title: "Himalayan Communities",
    description:
      "Bajhangi, Bajureli and Darchuleli traditions carried through remote mountain villages.",
    image: "/sudurpaschim/bajhang.jpg",
    alt: "Himalayan community village in Bajhang",
  },
  {
    number: "03",
    title: "Tharu Culture",
    description:
      "Kailali and Kanchanpur villages known for their food, crafts, music and community life.",
    image: "/sudurpaschim/tharu.jpg",
    alt: "Tharu community life in Kailali",
  },
];

const festivals = [
  "Gaura Parva",
  "Dashain",
  "Tihar",
  "Holi",
  "Maghe Sankranti",
  "Local temple fairs",
  "Tharu celebrations",
];

export default function SudurpaschimCulture() {
  return (
    <section
      id="sp-culture"
      className="sp-culture"
      aria-labelledby="sp-culture-heading"
    >
      <div className="sp-container sp-culture__inner">
        <SudurpaschimSectionHeading
          index="07"
          eyebrow="Living Traditions"
          heading="Meet the soul of the far west."
        />

        <div className="sp-culture__groups">
          {cultureGroups.map((group) => (
            <article className="sp-culture-card" key={group.number}>
              <div className="sp-culture-card__media">
                <Image
                  src={group.image}
                  alt={group.alt}
                  fill
                  sizes="(max-width: 900px) 100vw, 33vw"
                  className="sp-culture-card__image"
                />
              </div>
              <span className="sp-culture-card__number">{group.number}</span>
              <h3 className="sp-culture-card__title">{group.title}</h3>
              <p className="sp-culture-card__desc">{group.description}</p>
            </article>
          ))}
        </div>

        <div className="sp-culture__festivals">
          <div className="sp-culture__festivals-feature">
            <p className="sp-culture__festivals-label">Signature Festival</p>
            <h3 className="sp-culture__festivals-title">Gaura Parva</h3>
            <p className="sp-culture__festivals-desc">
              An important far-western cultural tradition, Gaura Parva brings
              villages together in song, ritual and community celebration
              through the autumn season.
            </p>
          </div>
          <ul className="sp-culture__festivals-list">
            {festivals.map((festival) => (
              <li key={festival}>{festival}</li>
            ))}
          </ul>
        </div>

        <div className="sp-culture__food">
          <p className="sp-culture__food-label">Village &amp; Table</p>
          <p className="sp-culture__food-text">
            Dhido, millet and buckwheat, local beans, sel roti, traditional
            rice dishes and Tharu cuisine — everyday food shared as part of
            homestays and village experiences across the region.
          </p>
        </div>
      </div>
    </section>
  );
}
