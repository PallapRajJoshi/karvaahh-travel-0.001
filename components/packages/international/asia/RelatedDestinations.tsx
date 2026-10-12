import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { destinationById } from "@/data/asia-destinations";
import { destAnchor, internalLinks, liveHref } from "@/lib/asia/config";
import Flag from "./Flag";

/** Country shortcuts: a live country page when one exists, otherwise its card on this page. */
const COUNTRY_LINKS = ["thailand", "indonesia", "singapore", "malaysia", "uae", "maldives", "sri-lanka", "vietnam", "japan", "bhutan", "georgia", "azerbaijan"];

const LABELS: Record<string, string> = { indonesia: "Bali", uae: "Dubai" };

export default function RelatedDestinations() {
  const countries = COUNTRY_LINKS.map((id) => destinationById(id)).filter((d) => d?.active) as NonNullable<
    ReturnType<typeof destinationById>
  >[];

  return (
    <section className="pkg-section asia-related" aria-labelledby="related-h">
      <div className="pkg-container">
        <h2 id="related-h" className="asia-related__h">Keep exploring</h2>
        <div className="asia-related__cols">
          <nav aria-label="Asia destinations">
            <p className="asia-related__label">Asia holiday packages</p>
            <ul className="asia-related__list">
              {countries.map((d) => {
                const href = liveHref(d.href) ?? `#${destAnchor(d.id)}`;
                const name = `${LABELS[d.id] ?? d.country} Packages`;
                return (
                  <li key={d.id}>
                    {href.startsWith("#") ? (
                      <a href={href}><Flag iso={d.iso} size={16} /> {name}</a>
                    ) : (
                      <Link href={href}><Flag iso={d.iso} size={16} /> {name}</Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>
          <nav aria-label="More from Karvaahh">
            <p className="asia-related__label">More from Karvaahh</p>
            <ul className="asia-related__list asia-related__list--site">
              {internalLinks.map((l) => (
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
