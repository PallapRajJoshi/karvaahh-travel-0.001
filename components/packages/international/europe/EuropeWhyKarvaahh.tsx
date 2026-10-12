import { BookUser, Camera, Car, Headset, Hotel, Map, Plane, Route, ShieldCheck, Users, type LucideIcon } from "lucide-react";
import { whyKarvaahh } from "@/data/europe/content";
import Reveal from "../../Reveal";

const ICONS: Record<(typeof whyKarvaahh)[number]["icon"], LucideIcon> = {
  route: Route,
  map: Map,
  hotel: Hotel,
  car: Car,
  camera: Camera,
  plane: Plane,
  passport: BookUser,
  shield: ShieldCheck,
  users: Users,
  headset: Headset,
};

/** Reuses the Asia hub's feature grid styling (asia-why / asia-feature). */
export default function EuropeWhyKarvaahh() {
  return (
    <section className="pkg-section pkg-section--sand" id="why-karvaahh" aria-labelledby="why-h">
      <div className="pkg-container asia-why">
        <div className="asia-why__intro">
          <p className="asia-eyebrow">Why Karvaahh</p>
          <h2 id="why-h" className="pkg-h2">Europe, Planned Around You</h2>
          <p className="pkg-lede">
            A Nepal- and India-based international travel partner for customized European journeys. One team handles the
            route, stays, sightseeing and paperwork support, from the first idea to your return.
          </p>
        </div>
        <ul className="asia-why__grid">
          {whyKarvaahh.map((f, i) => {
            const Icon = ICONS[f.icon];
            return (
              <li key={f.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="asia-feature">
                  <span className="asia-feature__icon"><Icon size={22} aria-hidden="true" /></span>
                  <h3 className="asia-feature__title">{f.title}</h3>
                  <p className="asia-feature__text">{f.text}</p>
                </Reveal>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
