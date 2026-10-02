import type { TravelPackage } from "@/data/packages/package-types";
import { CATEGORY_META, COUNTRIES } from "@/lib/packages/query";
import ApplyFilter from "./ApplyFilter";

/** Country + experience pills. Only options that exist in the data are shown. Horizontal scroll on mobile. */
export default function CategoryNav({ packages }: { packages: TravelPackage[] }) {
  const countries = COUNTRIES.map((c) => ({ c, n: packages.filter((p) => p.country === c).length })).filter((x) => x.n > 0);
  const cats = (Object.keys(CATEGORY_META) as (keyof typeof CATEGORY_META)[])
    .map((id) => ({ id, n: packages.filter((p) => p.categories.includes(id)).length }))
    .filter((x) => x.n > 0);

  return (
    <nav className="pkg-catnav" aria-label="Browse packages by region and experience">
      <div className="pkg-container">
        <ul className="pkg-catnav__row pkg-catnav__row--regions">
          {countries.map(({ c, n }) => (
            <li key={c}>
              <ApplyFilter filters={{ countries: [c] }} className="pkg-pill pkg-pill--region" ariaLabel={`${c} packages, ${n} available`}>
                {c === "International" ? "International" : c} Packages <span className="pkg-pill__n">{n}</span>
              </ApplyFilter>
            </li>
          ))}
        </ul>
        <ul className="pkg-catnav__row">
          {cats.map(({ id, n }) => (
            <li key={id}>
              <ApplyFilter filters={{ categories: [id] }} className="pkg-pill" ariaLabel={`${CATEGORY_META[id].label} packages, ${n} available`}>
                {CATEGORY_META[id].label} <span className="pkg-pill__n">{n}</span>
              </ApplyFilter>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
