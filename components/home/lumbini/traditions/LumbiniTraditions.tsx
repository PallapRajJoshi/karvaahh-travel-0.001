import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-traditions.css";

const groups = [
  {
    title: "Food to try",
    items: [
      { name: "Dhikri", note: "Steamed rice-flour dumplings, a Tharu staple" },
      { name: "Ghonghi", note: "River snails in spiced curry, a Terai speciality" },
      { name: "Fresh river fish", note: "Grilled or curried along the Karnali and Rapti" },
      { name: "Newari snacks in Tansen", note: "Bara, choila and sel roti in the old bazaar" },
      { name: "Hill dal-bhat", note: "With gundruk, local greens and homemade pickle" },
    ],
  },
  {
    title: "Festivals",
    items: [
      { name: "Buddha Jayanti", note: "Baisakh full moon — prayers and processions in Lumbini" },
      { name: "Maghi", note: "Tharu New Year in mid-January, with feasts and dance" },
      { name: "Swargadwari Mela", note: "Pilgrim fairs on Baisakh and Kartik full moons" },
      { name: "Chhath", note: "Sunset and sunrise offerings along Terai rivers and ponds" },
      { name: "Dashain & Tihar", note: "Nepal's great autumn festivals, celebrated province-wide" },
    ],
  },
  {
    title: "Living traditions",
    items: [
      { name: "Palpali dhaka", note: "Hand-loomed patterned cloth from Palpa" },
      { name: "Palpali karuwa", note: "Traditional brass water vessels" },
      { name: "Tharu stick dance", note: "Rhythmic village dance performed at festivals" },
      { name: "Magar Kauda dance", note: "Hill-country song and dance traditions" },
      { name: "Monastic rituals", note: "Morning chanting and butter lamps in Lumbini" },
    ],
  },
];

export default function LumbiniTraditions() {
  return (
    <section
      className="lumbini-traditions"
      id="traditions"
      aria-labelledby="lumbini-traditions-title"
    >
      <div className="lumbini-traditions__inner">
        <div className="lumbini-traditions__head">
          <LumbiniSectionHeading
            index="07"
            eyebrow="Food, Festivals & Traditions"
            heading="Taste it, celebrate it,"
            emphasis="carry it home."
            titleId="lumbini-traditions-title"
            description="Lumbini's calendar and kitchen blend Buddhist, Hindu, Tharu, Magar and Newar life — timing a visit with a festival adds a whole new layer."
          />
          <div className="lumbini-traditions__visual lumbini-reveal">
            <Image
              src="/images/lumbini/thakurdwara-bardiya-nepal-tharu-village.jpg"
              alt="Traditional Tharu village homes near Thakurdwara, Bardiya"
              fill
              sizes="(max-width: 900px) 100vw, 40vw"
              className="lumbini-traditions__image"
            />
          </div>
        </div>

        <div className="lumbini-traditions__grid">
          {groups.map((group) => (
            <div key={group.title} className="lumbini-traditions__group lumbini-reveal">
              <h3 className="lumbini-traditions__group-title">{group.title}</h3>
              <ul className="lumbini-traditions__list">
                {group.items.map((item) => (
                  <li key={item.name} className="lumbini-traditions__item">
                    <span className="lumbini-traditions__item-name">{item.name}</span>
                    <span className="lumbini-traditions__item-note">{item.note}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <p className="lumbini-traditions__note">
          Festival dates follow the lunar calendar and shift each year — we
          confirm them when planning your trip.
        </p>
      </div>
    </section>
  );
}
