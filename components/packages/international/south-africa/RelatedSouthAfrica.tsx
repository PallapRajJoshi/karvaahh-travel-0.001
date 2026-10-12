import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { saInternalLinks } from "@/data/south-africa/content";
import { visibleSADestinations } from "@/data/south-africa/destinations";
import { destAnchor, liveHref } from "@/lib/south-africa/config";

const COLLECTIONS = [
  { label: "Cape Town tour packages", href: "#cape-town" },
  { label: "Kruger safari packages", href: "#kruger" },
  { label: "Garden Route road trips", href: "#garden-route" },
  { label: "Cape Winelands tours", href: "#winelands" },
  { label: "South Africa honeymoon packages", href: "#honeymoon" },
  { label: "South Africa family tours", href: "#family" },
  { label: "South Africa luxury safari", href: "#luxury" },
  { label: "South Africa visa guidance", href: "#visa" },
];

/**
 * Internal links with descriptive anchors. Destination links use a live page
 * when one exists, otherwise the card on this page; site links appear only
 * once their route is live, so nothing here can 404.
 */
export default function RelatedSouthAfrica() {
  const site = saInternalLinks.filter((l) => liveHref(l.href));
  return (
    <section className="pkg-section asia-related" aria-labelledby="related-h">
      <div className="pkg-container">
        <h2 id="related-h" className="asia-related__h">Keep exploring</h2>
        <div className="za-related">
          <nav aria-label="South Africa destinations">
            <p className="asia-related__label">South Africa destinations</p>
            <ul className="asia-related__list">
              {visibleSADestinations.filter((d) => d.featured).map((d) => {
                const live = liveHref(d.href);
                const label = `${d.name} tours`;
                return <li key={d.id}>{live ? <Link href={live}>{label}</Link> : <a href={`#${destAnchor(d.id)}`}>{label}</a>}</li>;
              })}
            </ul>
          </nav>
          <nav aria-label="South Africa collections">
            <p className="asia-related__label">Collections</p>
            <ul className="asia-related__list">{COLLECTIONS.map((c) => <li key={c.href}><a href={c.href}>{c.label}</a></li>)}</ul>
          </nav>
          {site.length > 0 && (
            <nav aria-label="More from Karvaahh">
              <p className="asia-related__label">More from Karvaahh</p>
              <ul className="asia-related__list asia-related__list--site">
                {site.map((l) => <li key={l.href}><Link href={l.href}>{l.label} <ArrowRight size={14} aria-hidden="true" /></Link></li>)}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
