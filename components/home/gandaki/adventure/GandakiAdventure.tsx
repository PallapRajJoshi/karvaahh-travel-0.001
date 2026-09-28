import Image from "next/image";
import Link from "next/link";
import "./gandaki-adventure.css";

const routes = [
  "Annapurna Circuit",
  "Annapurna Base Camp",
  "Manaslu Circuit",
  "Mustang",
  "Dhaulagiri",
  "Poon Hill",
  "Khopra Danda",
  "Mohare Danda",
  "Tilicho Lake",
  "Thorong La",
  "Tsum Valley",
];

const activities = [
  "Trekking",
  "Mountaineering",
  "Paragliding",
  "Rafting",
  "Canyoning",
  "Bungee jumping",
  "Ziplining",
  "Mountain biking",
  "Rock climbing",
  "Camping",
  "Photography",
];

export default function GandakiAdventure() {
  return (
    <section className="gandaki-adventure" aria-label="Adventure in Gandaki">
      <div className="gandaki-adventure__media">
        <Image
          src="/images/gandaki/high-altitude-trekking-trail-annapurna-gandaki-nepal.jpg"
          alt="Trekkers on a high ridge with the Dhaulagiri range in view"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="gandaki-adventure__image"
        />
      </div>

      <div className="gandaki-adventure__panel">
        <span className="gandaki-adventure__index">04</span>
        <p className="gandaki-adventure__eyebrow">HIGH ROUTES</p>
        <h2 className="gandaki-adventure__title">
          Where the trail
          <em> rises higher.</em>
        </h2>

        <div className="gandaki-adventure__columns">
          <div className="gandaki-adventure__column">
            <h3 className="gandaki-adventure__column-title">Signature routes</h3>
            <ul className="gandaki-adventure__list">
              {routes.map((route) => (
                <li key={route}>{route}</li>
              ))}
            </ul>
          </div>
          <div className="gandaki-adventure__column">
            <h3 className="gandaki-adventure__column-title">Activities</h3>
            <ul className="gandaki-adventure__list">
              {activities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/plan-your-trip" className="gandaki-adventure__cta">
          Explore adventure trips <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
