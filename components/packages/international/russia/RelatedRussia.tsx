import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { russiaInternalLinks } from "@/data/russia/content";
import { visibleDestinations } from "@/data/russia/destinations";
import { destAnchor, liveHref } from "@/lib/russia/config";

/**
 * Internal links. Destination links use the live page when it exists, otherwise
 * the destination's story on this page. Site links are filtered to live routes.
 */
export default function RelatedRussia() {
  const dests = visibleDestinations.filter((d) => d.featured);
  const site = russiaInternalLinks.filter((l) => liveHref(l.href));

  return (
    <section className="pkg-section asia-related" aria-labelledby="related-h">
      <div className="pkg-container">
        <h2 id="related-h" className="asia-related__h">Keep exploring</h2>
        <div className="asia-related__cols">
          <nav aria-label="Russia destinations">
            <p className="asia-related__label">Russia tour packages</p>
            <ul className="asia-related__list">
              {dests.map((d) => {
                const live = liveHref(d.href);
                const label = `${d.name} Tour Packages`;
                return (
                  <li key={d.id}>
                    {live ? <Link href={live}>{label}</Link> : <a href={`#${d.sectionId ?? destAnchor(d.id)}`}>{label}</a>}
                  </li>
                );
              })}
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
