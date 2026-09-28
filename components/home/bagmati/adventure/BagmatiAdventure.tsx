import React from "react";
import Image from "next/image";
import Link from "next/link";
import "./bagmati-adventure.css";

const adventureRoutes = [
  "Langtang Valley",
  "Gosainkunda",
  "Helambu",
  "Ganesh Himal",
  "Ruby Valley",
  "Panch Pokhari",
  "Rolwaling Valley",
  "Tsho Rolpa",
  "Kalinchowk",
  "Sailung",
];

const adventureActivities = [
  "Trekking",
  "Hiking",
  "Mountain biking",
  "Rafting",
  "Canyoning",
  "Camping",
  "Rock climbing",
  "Seasonal snow activities",
  "Photography",
];

export default function BagmatiAdventure() {
  return (
    <section className="bagmati-adventure" aria-label="Adventure in Bagmati">
      <div className="bagmati-adventure__media">
        <Image
          src="/images/bagmati/rolwaling-valley-high-mountain-trekking-trail-bagmati-nepal.jpg"
          alt="Trekkers on a high mountain trail in the Rolwaling Valley, Bagmati Province"
          fill
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="bagmati-adventure__image"
        />
      </div>

      <div className="bagmati-adventure__content">
        <span className="bagmati-adventure__eyebrow">High Country</span>
        <h2 className="bagmati-adventure__heading">
          Where the trail
          <br />
          leads <em>higher</em>.
        </h2>
        <p className="bagmati-adventure__description">
          Beyond the valley, Bagmati climbs into some of Nepal&apos;s most
          rewarding trekking country — glacial lakes, rhododendron ridgelines
          and villages that have watched over these trails for generations.
        </p>

        <div className="bagmati-adventure__columns">
          <div className="bagmati-adventure__column">
            <span className="bagmati-adventure__column-label">Routes</span>
            <ul className="bagmati-adventure__list">
              {adventureRoutes.map((route) => (
                <li key={route}>{route}</li>
              ))}
            </ul>
          </div>
          <div className="bagmati-adventure__column">
            <span className="bagmati-adventure__column-label">Activities</span>
            <ul className="bagmati-adventure__list">
              {adventureActivities.map((activity) => (
                <li key={activity}>{activity}</li>
              ))}
            </ul>
          </div>
        </div>

        <Link href="/packages?category=trekking&province=bagmati" className="bagmati-adventure__cta">
          Plan a trekking journey
          <span aria-hidden="true">↗</span>
        </Link>
      </div>
    </section>
  );
}
