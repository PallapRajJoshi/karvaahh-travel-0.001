import type { TravelPackage } from "@/data/packages/package-types";
import type { FilterState } from "@/lib/packages/query";
import ApplyFilter from "./ApplyFilter";
import Carousel from "./Carousel";
import PackageCard from "./PackageCard";
import Reveal from "./Reveal";

export type CollectionLayout = "grid" | "carousel" | "cinematic-grid" | "cinematic-carousel" | "rows";

interface Props {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  packages: TravelPackage[];
  layout: CollectionLayout;
  tone?: "light" | "sand" | "dark";
  cta?: { label: string; filters: Partial<FilterState> };
  limit?: number;
  /** Mark the first card image as priority (only for the first section under the hero). */
  firstPriority?: boolean;
}

/** One section shell, five layouts, so the page has rhythm without five bespoke components. */
export default function CollectionSection({
  id, eyebrow, title, description, packages, layout, tone = "light", cta, limit = 8, firstPriority = false,
}: Props) {
  const list = packages.slice(0, limit);
  if (!list.length) return null;
  const dark = tone === "dark";
  const variant = layout.startsWith("cinematic") ? "cinematic" : layout === "rows" ? "row" : "default";

  const cards = list.map((p, i) => (
    <PackageCard key={p.id} pkg={p} variant={variant} priority={firstPriority && i === 0} headingLevel={3} />
  ));

  return (
    <section id={id} className={`pkg-section pkg-section--${tone}`} aria-labelledby={`${id}-h`}>
      <div className="pkg-container">
        <Reveal>
          <header className="pkg-section__head pkg-section__head--split">
            <div>
              <p className={`pkg-eyebrow${dark ? " pkg-eyebrow--light" : ""}`}>{eyebrow}</p>
              <h2 id={`${id}-h`} className={`pkg-h2${dark ? " pkg-h2--light" : ""}`}>{title}</h2>
              <p className={`pkg-lede${dark ? " pkg-lede--light" : ""}`}>{description}</p>
            </div>
            {cta && (
              <ApplyFilter filters={cta.filters} className={`pkg-btn ${dark ? "pkg-btn--light" : "pkg-btn--outline"}`}>
                {cta.label} <span aria-hidden="true">→</span>
              </ApplyFilter>
            )}
          </header>
        </Reveal>

        <Reveal>
          {layout === "carousel" || layout === "cinematic-carousel" ? (
            <Carousel label={title} tone={dark ? "dark" : "light"}>{cards}</Carousel>
          ) : (
            <ul className={`pkg-grid pkg-grid--${layout}`}>
              {cards.map((c, i) => <li key={list[i].id} className="pkg-grid__item">{c}</li>)}
            </ul>
          )}
        </Reveal>
      </div>
    </section>
  );
}
