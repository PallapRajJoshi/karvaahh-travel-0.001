import type { TravelPackage } from "@/data/packages/package-types";
import { HUB_IMAGES } from "@/lib/packages/config";
import { CATEGORY_META, type FilterState } from "@/lib/packages/query";
import ApplyFilter from "./ApplyFilter";
import Reveal from "./Reveal";
import SafeImage from "./SafeImage";

const STYLE_ORDER = ["spiritual", "adventure", "family", "honeymoon", "luxury", "wildlife", "trekking", "corporate", "educational", "wedding", "offbeat"] as const;

/** "Travel Your Way": counts come from the data; categories with no packages are not shown. */
export default function TravelStyleSection({ packages }: { packages: TravelPackage[] }) {
  const items = STYLE_ORDER.map((id) => ({ id, n: packages.filter((p) => p.categories.includes(id)).length })).filter((x) => x.n > 0);
  if (!items.length) return null;

  return (
    <section id="travel-your-way" className="pkg-section pkg-section--sand" aria-labelledby="pkg-style-h">
      <div className="pkg-container">
        <Reveal>
          <header className="pkg-section__head">
            <p className="pkg-eyebrow">Explore by travel style</p>
            <h2 id="pkg-style-h" className="pkg-h2">Travel Your Way</h2>
            <p className="pkg-lede">Start from how you want to travel, then see every journey that fits.</p>
          </header>
        </Reveal>
        <Reveal>
          <ul className="pkg-styles">
            {items.map(({ id, n }, i) => {
              const meta = CATEGORY_META[id];
              const filters: Partial<FilterState> = { categories: [id] };
              return (
                <li key={id} className={i === 0 ? "pkg-styles__item pkg-styles__item--lead" : "pkg-styles__item"}>
                  <ApplyFilter filters={filters} className="pkg-style" ariaLabel={`Explore ${meta.style}, ${n} ${n === 1 ? "package" : "packages"}`}>
                    <span className="pkg-media pkg-style__media" data-tone={i % 4}>
                      <SafeImage src={HUB_IMAGES.styles[id]} alt="" sizes="(min-width:1024px) 25vw, 50vw" className="pkg-media__img" />
                    </span>
                    <span className="pkg-style__body">
                      <span className="pkg-style__count">{n} {n === 1 ? "package" : "packages"}</span>
                      <span className="pkg-style__title">{meta.style}</span>
                      <span className="pkg-style__blurb">{meta.blurb}</span>
                      <span className="pkg-style__cta">Explore {meta.label} packages <span className="pkg-arrow" aria-hidden="true">→</span></span>
                    </span>
                  </ApplyFilter>
                </li>
              );
            })}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
