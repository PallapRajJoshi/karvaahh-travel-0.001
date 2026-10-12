import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { usaInternalLinks } from "@/data/usa/content";
import { visibleUSADestinations } from "@/data/usa/destinations";
import { activeParks } from "@/data/usa/nationalParks";
import { usaRegions } from "@/data/usa/regions";
import { destAnchor, liveHref } from "@/lib/usa/config";

/**
 * Internal links with descriptive anchors. City links use a live page when it
 * exists, otherwise the destination on this page. Site links are filtered to
 * live routes, so nothing here can 404.
 */
export default function RelatedUSA() {
  const cities = visibleUSADestinations.filter((d) => d.featured && d.kind !== "park");
  const site = usaInternalLinks.filter((l) => liveHref(l.href));
  const collections = [
    { label: "USA Honeymoon Packages", href: "#honeymoon" },
    { label: "USA Family Holidays", href: "#family" },
    { label: "USA Luxury Travel", href: "#luxury" },
    { label: "USA Road Trips", href: "#road-trips" },
    { label: "Multi-City USA Circuits", href: "#circuits" },
    { label: "USA Visa & Documents", href: "#visa" },
    { label: "Travel to the USA from Nepal & India", href: "#gateways" },
  ];

  return (
    <section className="pkg-section asia-related" aria-labelledby="related-h">
      <div className="pkg-container">
        <h2 id="related-h" className="asia-related__h">Keep exploring</h2>
        <div className="us-related">
          <nav aria-label="USA city tour packages">
            <p className="asia-related__label">USA city tour packages</p>
            <ul className="asia-related__list">
              {cities.map((d) => {
                const live = liveHref(d.href);
                const label = `${d.name} Tour Packages`;
                return <li key={d.id}>{live ? <Link href={live}>{label}</Link> : <a href={`#${destAnchor(d.id)}`}>{label}</a>}</li>;
              })}
            </ul>
          </nav>
          <nav aria-label="USA regions and states">
            <p className="asia-related__label">Regions & states</p>
            <ul className="asia-related__list">
              {usaRegions.map((r) => (
                <li key={r.id}>
                  <a href={`#${r.sectionId ?? "us-map"}`} title={r.states.join(", ")}>{r.name} USA Tours</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="USA national parks">
            <p className="asia-related__label">National parks</p>
            <ul className="asia-related__list">
              {activeParks.slice(0, 8).map((p) => (
                <li key={p.id}><a href="#national-parks">{p.name} National Park Tours</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="USA travel collections">
            <p className="asia-related__label">Ways to travel</p>
            <ul className="asia-related__list">
              {collections.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="More from Karvaahh">
            <p className="asia-related__label">More from Karvaahh</p>
            <ul className="asia-related__list asia-related__list--site">
              {site.map((l) => (
                <li key={l.href}>
                  <Link href={l.href}>
                    {l.label} <ArrowRight size={14} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
}
