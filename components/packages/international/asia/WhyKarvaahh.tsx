import {
  BookUser,
  Camera,
  Car,
  Compass,
  Headset,
  Hotel,
  MapPinned,
  Plane,
  Receipt,
  Route,
  ShieldCheck,
  Users,
  type LucideIcon,
} from "lucide-react";
import { whyKarvaahh } from "@/data/asia-content";
import Reveal from "../../Reveal";

const ICONS = {
  route: Route,
  hotel: Hotel,
  car: Car,
  camera: Camera,
  plane: Plane,
  passport: BookUser,
  shield: ShieldCheck,
  receipt: Receipt,
  headset: Headset,
  compass: Compass,
  users: Users,
  local: MapPinned,
} satisfies Record<string, LucideIcon>;

export type WhyItem = { icon: keyof typeof ICONS; title: string; text: string };

/** Feature grid shared by the international pages. Defaults render the Asia copy. */
export default function WhyKarvaahh({
  eyebrow = "Why book with Karvaahh",
  title = "Your Journey. Our Expertise.",
  intro = "A Nepal- and India-based travel partner for customized journeys across Asia. One team plans the whole trip, from the first idea to the flight home.",
  items = whyKarvaahh as readonly WhyItem[],
}: {
  eyebrow?: string;
  title?: string;
  intro?: string;
  items?: readonly WhyItem[];
}) {
  return (
    <section className="pkg-section pkg-section--sand" id="why-karvaahh" aria-labelledby="why-h">
      <div className="pkg-container asia-why">
        <div className="asia-why__intro">
          <p className="asia-eyebrow">{eyebrow}</p>
          <h2 id="why-h" className="pkg-h2">{title}</h2>
          <p className="pkg-lede">{intro}</p>
        </div>
        <ul className="asia-why__grid">
          {items.map((f, i) => {
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
