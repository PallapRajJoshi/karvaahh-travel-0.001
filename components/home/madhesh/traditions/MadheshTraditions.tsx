import Image from "next/image";
import MadheshSectionHeading from "../heading/MadheshSectionHeading";
import "./madhesh-traditions.css";

const festivals = [
  {
    name: "Chhath",
    season: "Kartik · Oct–Nov",
    text: "Madhesh's most beloved festival. Devotees fast and offer arghya to the setting and rising sun from the banks of ponds and rivers, with Janakpur's sacred ponds at the heart of the celebrations.",
  },
  {
    name: "Vivaha Panchami",
    season: "Mangsir · Nov–Dec",
    text: "Janakpurdham celebrates the wedding of Ram and Sita with processions, music and rituals around Janaki Mandir and Vivaha Mandap, drawing pilgrims from across Nepal and India.",
  },
  {
    name: "Holi",
    season: "Phagun · Feb–Mar",
    text: "On the plains, Holi is celebrated with colour, folk songs and community gatherings, usually a day after it is marked in the hills.",
  },
  {
    name: "Jitiya",
    season: "Ashwin · Sep–Oct",
    text: "A demanding fast kept by mothers for the long life and wellbeing of their children, widely observed in Mithila and Tharu communities.",
  },
  {
    name: "Deepawali",
    season: "Kartik · Oct–Nov",
    text: "Homes, temples and courtyards are lit with diyas and decorated with rangoli-style aripan, flowing straight into the preparations for Chhath.",
  },
  {
    name: "Ram Navami & Sama-Chakeva",
    season: "Spring & late autumn",
    text: "Ram Navami fills Janakpur's Ram Mandir with devotees, while Sama-Chakeva celebrates the bond between brothers and sisters with clay figurines and songs.",
  },
];

const dishes = [
  { name: "Maachh-bhaat", text: "Fish curry with rice — a Maithili staple." },
  { name: "Dahi-chura", text: "Curd with beaten rice, often with jaggery." },
  { name: "Litti-chokha", text: "Roasted wheat dumplings with spiced mash." },
  { name: "Bagiya & dhikri", text: "Steamed rice-flour dumplings, sweet or savoury." },
  { name: "Thekua", text: "Crisp festival sweet offered during Chhath." },
  { name: "Tilkut & sweets", text: "Sesame and jaggery treats around Maghe Sankranti." },
];

export default function MadheshTraditions() {
  return (
    <section className="madhesh-traditions" id="festivals" aria-labelledby="madhesh-traditions-title">
      <div className="madhesh-container">
        <MadheshSectionHeading
          eyebrow="Festivals & Flavours"
          titleId="madhesh-traditions-title"
          heading={
            <>
              Celebrations that{" "}
              <span className="madhesh-gold-italic">light the plains.</span>
            </>
          }
          description="Festival dates follow the lunar calendar and change each year — tell us when you'd like to travel and we'll match your trip to the celebrations."
        />

        <ul className="madhesh-traditions__festivals">
          {festivals.map((festival) => (
            <li key={festival.name} className="madhesh-traditions__festival madhesh-reveal">
              <span className="madhesh-traditions__season">{festival.season}</span>
              <h3 className="madhesh-traditions__name">{festival.name}</h3>
              <p className="madhesh-traditions__text">{festival.text}</p>
            </li>
          ))}
        </ul>

        <div className="madhesh-traditions__food" id="cuisine">
          <div className="madhesh-traditions__food-media">
            <Image
              src="/images/madhesh/chhath.jpg"
              alt="Devotees with offerings during Chhath in Madhesh"
              fill
              sizes="(max-width: 900px) 100vw, 45vw"
              className="madhesh-traditions__food-image"
            />
          </div>
          <div className="madhesh-traditions__food-content">
            <h3 className="madhesh-traditions__food-title">Local cuisine &amp; traditional food</h3>
            <p className="madhesh-traditions__food-desc">
              Madhesh cooking is built on rice, lentils, fresh fish, mustard
              oil and seasonal vegetables, with sweets that change with every
              festival. The best meals are home-cooked — ask about homestays and
              village kitchens.
            </p>
            <ul className="madhesh-traditions__dishes">
              {dishes.map((dish) => (
                <li key={dish.name}>
                  <span className="madhesh-traditions__dish-name">{dish.name}</span>
                  <span className="madhesh-traditions__dish-text">{dish.text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
