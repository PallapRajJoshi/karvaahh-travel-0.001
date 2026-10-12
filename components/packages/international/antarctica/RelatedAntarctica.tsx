import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { antarcticaInternalLinks } from "@/data/antarctica/content";
import { visibleAntarcticaDestinations } from "@/data/antarctica/destinations";
import { destAnchor, liveHref } from "@/lib/antarctica/config";

const COLLECTIONS = [
  { label: "Antarctic Peninsula expeditions", href: "#antarctic-peninsula" },
  { label: "Antarctica honeymoon packages", href: "#honeymoon" },
  { label: "Luxury Antarctica cruises", href: "#luxury" },
  { label: "Antarctica wildlife tours", href: "#wildlife" },
  { label: "Antarctic Circle expeditions", href: "#antarctic-circle" },
  { label: "Antarctica + Patagonia extensions", href: "#extensions" },
  { label: "Antarctica visa & documents", href: "#visa" },
  { label: "Antarctica tours from Nepal & India", href: "#gateways" },
];

/**
 * Internal links with descriptive anchors. Site links appear only once the
 * route is live (LIVE_ROUTES), so nothing here can 404.
 */
export default function RelatedAntarctica() {
  const site = antarcticaInternalLinks.filter((l) => liveHref(l.href));
  return (
    <section className="pkg-section asia-related" aria-labelledby="related-h">
      <div className="pkg-container">
        <h2 id="related-h" className="asia-related__h">Keep exploring</h2>
        <div className="an-related">
          <nav aria-label="Antarctica destinations">
            <p className="asia-related__label">Polar destinations</p>
            <ul className="asia-related__list">
              {visibleAntarcticaDestinations.map((d) => (
                <li key={d.id}><a href={`#${destAnchor(d.id)}`}>{d.name} expeditions</a></li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Antarctica collections">
            <p className="asia-related__label">Antarctica collections</p>
            <ul className="asia-related__list">
              {COLLECTIONS.map((c) => <li key={c.href}><a href={c.href}>{c.label}</a></li>)}
            </ul>
          </nav>
          {site.length > 0 && (
            <nav aria-label="More from Karvaahh">
              <p className="asia-related__label">More from Karvaahh</p>
              <ul className="asia-related__list asia-related__list--site">
                {site.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label} <ArrowRight size={14} aria-hidden="true" /></Link>
                  </li>
                ))}
              </ul>
            </nav>
          )}
        </div>
      </div>
    </section>
  );
}
