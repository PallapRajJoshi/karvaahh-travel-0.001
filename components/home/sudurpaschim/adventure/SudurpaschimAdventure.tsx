import Image from "next/image";
import Link from "next/link";
import "./sudurpaschim-adventure.css";

const activities = [
  "High-altitude trekking",
  "Hiking & camping",
  "Mountain expeditions",
  "Mountain photography",
  "Cycling on suitable routes",
  "River & wetland activities",
  "Wildlife observation",
  "Village walks & homestays",
];

const trekPages = [
  { label: "Api Nampa Base Camp", href: "/adventure/api-nampa-base-camp-trek" },
  { label: "Saipal Base Camp", href: "/offbeat-unexplored/saipal-base-camp" },
  { label: "Khaptad National Park", href: "/offbeat-unexplored/khaptad-national-park" },
];

const waterways = [
  "Ghodaghodi Lake — Ramsar wetland",
  "Ramaroshan highland lakes",
  "Aalital Lake & Surma Sarovar",
  "Mahakali & Seti river valleys",
];

export default function SudurpaschimAdventure() {
  return (
    <section id="sp-adventure" className="sp-adventure" aria-labelledby="sp-adventure-heading">
      <div className="sp-adventure__grid">
        <div className="sp-adventure__media">
          <Image
            src="/sudurpaschim/adventure.jpg"
            alt="Trekker crossing a remote Himalayan ridge in Sudurpaschim"
            fill
            sizes="(max-width: 900px) 100vw, 50vw"
            className="sp-adventure__image"
          />
        </div>

        <div className="sp-adventure__content sp-container">
          <span className="sp-adventure__index" aria-hidden="true">05</span>
          <p className="sp-adventure__eyebrow">Beyond the Trail</p>
          <h2 id="sp-adventure-heading" className="sp-adventure__title">
            Go where
            <span className="sp-adventure__title-line">the map gets quiet.</span>
          </h2>
          <p className="sp-adventure__desc">
            Api Himal, Saipal Himal, Khaptad, Badimalika and Ramaroshan draw
            travelers toward Bajura, Bajhang and Darchula&rsquo;s remote
            Himalayan valleys — territory that still feels genuinely unmapped.
          </p>

          <nav className="sp-adventure__treks" aria-label="Himalayan trek guides">
            {trekPages.map((trek) => (
              <Link key={trek.href} href={trek.href} className="sp-adventure__trek">
                {trek.label} <span className="sp-arrow">→</span>
              </Link>
            ))}
          </nav>

          <ul className="sp-adventure__activities">
            {activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>

          <div className="sp-adventure__waterways">
            <p className="sp-adventure__waterways-label">
              Still waters, wild valleys
            </p>
            <ul>
              {waterways.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="sp-adventure__waterways-note">
              Boating, birdwatching and riverside camping are seasonal and
              site-dependent.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
