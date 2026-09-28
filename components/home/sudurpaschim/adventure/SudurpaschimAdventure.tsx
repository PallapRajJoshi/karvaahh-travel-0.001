import Image from "next/image";
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
          <span className="sp-adventure__index" aria-hidden="true">04</span>
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
