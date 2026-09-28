import Image from "next/image";
import LumbiniSectionHeading from "../heading/LumbiniSectionHeading";
import "./lumbini-adventure.css";

const regions = [
  "Bardiya National Park",
  "Banke National Park",
  "Sisne Himal",
  "Putha Himal",
  "Jaljala",
  "Rolpa",
  "Rukum East",
  "Palpa hills",
  "Gulmi",
  "Arghakhanchi",
  "Dang hills",
];

const activities = [
  "Trekking",
  "Hiking",
  "Jungle safari",
  "Canoeing",
  "Birdwatching",
  "Cycling",
  "Camping",
  "Photography",
  "River experiences",
  "Village walks",
  "Homestays",
];

export default function LumbiniAdventure() {
  return (
    <section
      className="lumbini-adventure"
      id="adventure"
      aria-label="Adventure and outdoor activity in Lumbini"
    >
      <div className="lumbini-adventure__content">
        <LumbiniSectionHeading
          index="07"
          eyebrow="Beyond Pilgrimage"
          heading="Beyond the sacred,"
          emphasis="the wild awaits."
          theme="dark"
        />

        <div className="lumbini-adventure__columns">
          <div className="lumbini-adventure__column">
            <span className="lumbini-adventure__column-label">Regions</span>
            <ul className="lumbini-adventure__list">
              {regions.map((region) => (
                <li key={region}>{region}</li>
              ))}
            </ul>
          </div>

          <div className="lumbini-adventure__column">
            <span className="lumbini-adventure__column-label">
              Activities
            </span>
            <ul className="lumbini-adventure__list">
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="lumbini-adventure__visual">
        <Image
          src="/images/lumbini/beyond-pilgrimage-lumbini-province-wildlife-mountains.jpg"
          alt="Trekker on a forested western Nepal hill trail near Rolpa"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="lumbini-adventure__image"
        />
        <div className="lumbini-adventure__visual-overlay" aria-hidden="true" />
      </div>
    </section>
  );
}
