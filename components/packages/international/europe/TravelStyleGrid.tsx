import { ArrowUpRight } from "lucide-react";
import { bookableCountries } from "@/data/europe/countries";
import { img } from "@/data/europe/images";
import { activePackages } from "@/data/europe/packages";
import { europeStyles } from "@/data/europe/travel-styles";
import DestMedia from "../asia/DestMedia";
import FilterButton from "./FilterButton";

/**
 * Europe by travel style. Every tile is computed from the shared country and
 * package data (no per-category datasets) and applies that style to the
 * explorer above.
 */
export default function TravelStyleGrid() {
  const styles = europeStyles
    .map((s) => ({
      ...s,
      countries: bookableCountries.filter((c) => c.travelStyles.includes(s.id)).length,
      packages: activePackages.filter((p) => !p.custom && p.travelStyles.includes(s.id)).length,
    }))
    .filter((s) => s.countries + s.packages > 0);

  return (
    <section className="pkg-section pkg-section--sand eu-styles" id="travel-styles" aria-labelledby="styles-h">
      <div className="pkg-container">
        <div className="pkg-section__head asia-head--center">
          <p className="asia-eyebrow">Europe by travel style</p>
          <h2 id="styles-h" className="pkg-h2">However You Like to Travel</h2>
          <p className="pkg-lede">
            Choose a style to filter destinations and packages above. Combine styles in the filter bar, for example Northern
            Lights with Winter, or Multi-Country with First-Time Europe.
          </p>
        </div>
        <ul className="eu-stylegrid">
          {styles.map((s, i) => (
            <li key={s.id} className={i < 2 ? "eu-stylegrid__lead" : undefined}>
              <FilterButton filter={{ styles: [s.id] }} target="explore" className="eu-stile" label={`${s.title}: show ${s.countries} destinations and ${s.packages} packages`}>
                <span className="eu-stile__media" aria-hidden="true">
                  <DestMedia
                    image={s.image ? img[s.image] : undefined}
                    iso="eu"
                    label={s.title}
                    tone={["#0a1f33", "#1d5a8f"]}
                    sizes={i < 2 ? "(min-width: 1024px) 40vw, 90vw" : "(min-width: 1024px) 20vw, 45vw"}
                  />
                </span>
                <span className="eu-stile__body" aria-hidden="true">
                  <span className="eu-stile__n">{s.countries} destinations · {s.packages} packages</span>
                  <span className="eu-stile__title">{s.title}</span>
                  <span className="eu-stile__text">{s.text}</span>
                </span>
                <span className="eu-stile__go" aria-hidden="true"><ArrowUpRight size={18} /></span>
              </FilterButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
