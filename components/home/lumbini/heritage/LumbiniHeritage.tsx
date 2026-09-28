import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-heritage.css";

const heritageSites = [
  { name: "Tilaurakot", note: "Ancient city of Kapilavastu" },
  { name: "Kudan", note: "Stupa remains & royal reunion site" },
  { name: "Nigrodharama", note: "First teachings after enlightenment" },
  { name: "Gotihawa", note: "Ashokan pillar fragment" },
  { name: "Sagarhawa", note: "Shakya clan memorial mounds" },
  { name: "Araurakot", note: "Early fortified capital" },
  { name: "Ramgram", note: "Unopened relic stupa" },
  { name: "Devdaha", note: "Maya Devi's maternal home" },
  { name: "Tansen & Rani Mahal", note: "Hill heritage architecture" },
];

const activities = [
  "Archaeological exploration",
  "Heritage walks",
  "Cycling",
  "Photography",
  "Cultural interpretation",
];

export default function LumbiniHeritage() {
  return (
    <section
      className="lumbini-heritage"
      id="heritage"
      aria-label="Heritage and archaeology of Lumbini"
    >
      <div className="lumbini-heritage__inner">
        <LumbiniSectionHeading
          index="05"
          eyebrow="Heritage & Archaeology"
          heading="Ancient stories,"
          emphasis="still beneath our feet."
          theme="dark"
        />

        <div className="lumbini-heritage__layout">
          <div className="lumbini-heritage__visual">
            <Image
              src="/images/lumbini/lumbini-province-heritage-archaeology-ancient-ruins.jpg"
              alt="Excavated ancient brick ruins across the Kapilvastu archaeological landscape"
              fill
              sizes="(max-width: 900px) 100vw, 55vw"
              className="lumbini-heritage__image"
            />
          </div>

          <div className="lumbini-heritage__panel">
            <ul className="lumbini-heritage__list">
              {heritageSites.map((site) => (
                <li key={site.name} className="lumbini-heritage__item">
                  <span className="lumbini-heritage__item-name">
                    {site.name}
                  </span>
                  <span className="lumbini-heritage__item-note">
                    {site.note}
                  </span>
                </li>
              ))}
            </ul>

            <div className="lumbini-heritage__activities">
              <span className="lumbini-heritage__activities-label">
                Activities
              </span>
              <div className="lumbini-heritage__activities-list">
                {activities.map((activity) => (
                  <span key={activity} className="lumbini-heritage__chip">
                    {activity}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
