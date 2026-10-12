import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { australiaInternalLinks } from "@/data/australia/content";
import { visibleAustraliaDestinations } from "@/data/australia/destinations";
import { australiaRegions } from "@/data/australia/regions";
import { destAnchor, liveHref } from "@/lib/australia/config";

/**
 * Internal links with descriptive anchors. City links use a live page when it
 * exists, otherwise the destination on this page. Site links are filtered to
 * live routes, so nothing here can 404.
 */
export default function RelatedAustralia() {
  const places = visibleAustraliaDestinations.filter((d) => d.featured);
  const site = australiaInternalLinks.filter((l) => liveHref(l.href));
  const collections = [
    { label: "Australia Honeymoon Packages", href: "#honeymoon" },
    { label: "Australia Family Tours", href: "#family" },
    { label: "Australia Luxury Travel", href: "#luxury" },
    { label: "Great Barrier Reef Tour Packages", href: "#reef" },
    { label: "Australia Road Trips", href: "#road-trips" },
    { label: "Multi-City Australia Circuits", href: "#circuits" },
    { label: "Australia Visa Assistance", href: "#visa" },
    { label: "Flights to Australia from Nepal & India", href: "#gateways" },
  ];

  return (
    <section className="pkg-section asia-related" aria-labelledby="related-h">
      <div className="pkg-container">
        <h2 id="related-h" className="asia-related__h">Keep exploring</h2>
        <div className="us-related">
          <nav aria-label="Australia destination tour packages">
            <p className="asia-related__label">Australia tour packages by destination</p>
            <ul className="asia-related__list">
              {places.map((d) => {
                const live = liveHref(d.href);
                const label = `${d.shortName ?? d.name} Tour Packages`;
                return <li key={d.id}>{live ? <Link href={live}>{label}</Link> : <a href={`#${destAnchor(d.id)}`}>{label}</a>}</li>;
              })}
            </ul>
          </nav>
          <nav aria-label="Australian states and territories">
            <p className="asia-related__label">States & territories</p>
            <ul className="asia-related__list">
              {australiaRegions.map((r) => (
                <li key={r.id}>
                  <a href={`#${r.sectionId ?? "au-map"}`}>{r.name} Tours</a>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Ways to travel Australia">
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
