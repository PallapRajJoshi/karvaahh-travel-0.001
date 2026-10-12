import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { countryById } from "@/data/europe/countries";
import { countryAnchor, internalLinks, liveHref } from "@/lib/europe/config";
import Flag from "../asia/Flag";

/** Country shortcuts: a live country page when one exists, otherwise its card on this page. */
const COUNTRY_LINKS = ["switzerland", "france", "italy", "greece", "austria", "netherlands", "norway", "iceland", "united-kingdom", "spain", "croatia", "czechia"];

export default function RelatedEurope() {
  const countries = COUNTRY_LINKS.map((id) => countryById(id)).filter(
    (c): c is NonNullable<typeof c> => c?.operationalStatus === "active",
  );

  return (
    <section className="pkg-section asia-related" aria-labelledby="related-h">
      <div className="pkg-container">
        <h2 id="related-h" className="asia-related__h">Keep exploring</h2>
        <div className="asia-related__cols">
          <nav aria-label="Europe destinations">
            <p className="asia-related__label">Europe holiday packages</p>
            <ul className="asia-related__list">
              {countries.map((c) => {
                const live = liveHref(c.href);
                const name = `${c.name} Tour Packages`;
                return (
                  <li key={c.id}>
                    {live ? (
                      <Link href={live}><Flag iso={c.iso} size={16} /> {name}</Link>
                    ) : (
                      <a href={`#${countryAnchor(c.id)}`}><Flag iso={c.iso} size={16} /> {name}</a>
                    )}
                  </li>
                );
              })}
              <li><a href="#honeymoon">Europe Honeymoon Packages</a></li>
              <li><a href="#family">Europe Family Tours</a></li>
              <li><a href="#multi-country">Europe Multi-Country Tours</a></li>
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
