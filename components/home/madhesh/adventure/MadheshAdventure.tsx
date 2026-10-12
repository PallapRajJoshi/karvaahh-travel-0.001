import Image from "next/image";
import "./madhesh-adventure.css";

const activities = [
  { route: "Village walks", note: "Mud-walled Mithila and Tharu villages, painted homes and farm life" },
  { route: "Cycling the plains", note: "Quiet lanes through rice fields, mango groves and local markets" },
  { route: "Jungle drives & birding", note: "Guided safaris in Parsa and wetland birding at Koshi Tappu" },
  { route: "Pond boating", note: "Gentle boat rides on Janakpur's sacred ponds" },
  { route: "Chure hill camping", note: "Nights under the stars on the first ridge north of the plains" },
];

export default function MadheshAdventure() {
  return (
    <section
      id="adventure"
      className="madhesh-adventure"
      aria-label="Village walks and nature activities in Madhesh"
    >
      <div className="madhesh-adventure__media">
        <Image
          src="/images/madhesh/rural.jpg"
          alt="Village of mud-walled houses and green fields on the Madhesh plains"
          fill
          sizes="(max-width: 900px) 100vw, 50vw"
          className="madhesh-adventure__image"
        />
      </div>

      <div className="madhesh-adventure__content">
        <span className="madhesh-eyebrow">Slow Adventures</span>
        <h2 className="madhesh-adventure__title">
          Walk the villages,
          <br />
          <span className="madhesh-gold-italic">ride the plains.</span>
        </h2>
        <p className="madhesh-adventure__desc">
          Madhesh rewards travellers who slow down. Swap mountain trails for
          village lanes, cycle between farms and temples, and head into the
          forests and wetlands at the edges of the plains.
        </p>

        <ul className="madhesh-adventure__borders">
          {activities.map((a) => (
            <li key={a.route}>
              <span className="madhesh-adventure__border-route">{a.route}</span>
              <span className="madhesh-adventure__border-note">{a.note}</span>
            </li>
          ))}
        </ul>
        <p className="madhesh-adventure__note">
          Activities are arranged with local guides and community hosts.
        </p>
      </div>
    </section>
  );
}
