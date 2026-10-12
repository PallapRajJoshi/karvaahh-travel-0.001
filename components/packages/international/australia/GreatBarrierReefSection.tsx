import Image from "next/image";
import { Anchor, Eye, Fish, MapPin, Plane, Ship, TreePalm, Waves, type LucideIcon } from "lucide-react";
import { australiaDestinationById } from "@/data/australia/destinations";
import { australiaImage } from "@/data/australia/images";
import { pickPackages } from "@/data/australia/packages";
import { reefSection as r, type ReefIcon } from "@/data/australia/reef";
import CountUp from "../../CountUp";
import Reveal from "../../Reveal";
import SafeImage from "../../SafeImage";
import { FilterButton } from "./AustraliaFilterControls";
import PackageRail from "./PackageRail";

const ICONS: Record<ReefIcon, LucideIcon> = { snorkel: Fish, dive: Anchor, glass: Eye, plane: Plane, ship: Ship, island: TreePalm };

/**
 * "Dive Into the Great Barrier Reef": an underwater treatment (deep-blue
 * gradient, drifting caustic light and rising bubbles in CSS, all stopped
 * under reduced motion) around gateways, experiences, packages and a clear
 * conditions disclaimer.
 */
export default function GreatBarrierReefSection() {
  const bg = australiaImage(r.background);
  const gallery = r.gallery.map((id) => australiaImage(id)).filter((x) => !!x);

  return (
    <section className="pkg-section au-reef" id={r.id} aria-labelledby="reef-h">
      <div className="au-reef__bg" aria-hidden="true">
        {bg && <Image src={bg.src} alt="" fill sizes="100vw" className="au-reef__bg-img" />}
        <span className="au-reef__caustics" />
        <span className="au-reef__bubbles">
          {Array.from({ length: 10 }, (_, i) => (
            <i key={i} style={{ "--b": i } as React.CSSProperties} />
          ))}
        </span>
      </div>

      <div className="pkg-container au-reef__inner">
        <div className="au-reef__head">
          <p className="asia-eyebrow asia-eyebrow--light">{r.eyebrow}</p>
          <h2 id="reef-h" className="au-reef__title">{r.title}</h2>
          <p className="pkg-lede pkg-lede--light">{r.intro}</p>
          <dl className="au-reef__facts">
            {r.facts.map((f) => (
              <div key={f.label}>
                <dd><CountUp value={f.value} suffix={f.suffix} /></dd>
                <dt>{f.label}</dt>
              </div>
            ))}
          </dl>
        </div>

        <ul className="au-reef__gallery" aria-label="Reef gallery">
          {gallery.map((img, i) => (
            <li key={img.src} className={`au-reef__shot au-reef__shot--${i + 1}`}>
              <SafeImage src={img.src} alt={img.alt} sizes="(min-width: 1024px) 25vw, 50vw" className="asia-media__img" />
            </li>
          ))}
        </ul>

        <h3 className="au-reef__h3">Reef gateways</h3>
        <ul className="au-reef__gateways">
          {r.gateways.map((g, i) => {
            const d = australiaDestinationById(g.destination);
            if (!d) return null;
            return (
              <li key={g.destination} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="au-reef__gw">
                  <MapPin size={18} aria-hidden="true" />
                  <strong>{d.name}</strong>
                  <span>{g.text}</span>
                  <FilterButton filter={{ destination: g.destination }} className="au-reef__gw-go">
                    View packages<span className="pkg-sr"> from {d.name}</span>
                  </FilterButton>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <h3 className="au-reef__h3">Ways to experience the reef</h3>
        <ul className="au-reef__exp">
          {r.experiences.map((e, i) => {
            const Icon = ICONS[e.icon];
            return (
              <li key={e.title} style={{ "--i": i } as React.CSSProperties}>
                <Reveal className="au-reef__card">
                  <span className="au-reef__icon"><Icon size={22} aria-hidden="true" /></span>
                  <strong>{e.title}</strong>
                  <span>{e.text}</span>
                </Reveal>
              </li>
            );
          })}
        </ul>

        <div className="au-reef__notice" role="note">
          <Waves size={22} aria-hidden="true" />
          <div>
            <p className="au-reef__notice-h">Important</p>
            <p>{r.disclaimer}</p>
            <ul>
              {r.responsible.map((x) => (
                <li key={x}>{x}</li>
              ))}
            </ul>
          </div>
        </div>

        <PackageRail id="reef-pkgs" title="Great Barrier Reef packages" packages={pickPackages(r.packageIds)} dark />
      </div>
    </section>
  );
}
