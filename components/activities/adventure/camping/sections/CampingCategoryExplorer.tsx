import SectionHeading from "../shared/SectionHeading";
import CampImage from "../shared/CampImage";
import FilterLink from "../shared/FilterLink";
import { IconArrow } from "../shared/Icons";
import { campingCategories } from "@/data/campingContent";
import { countByCategory } from "@/data/campingDestinations";
import "./CampingCategoryExplorer.css";

const WIDE = new Set(["weekend", "himalayan"]);

export default function CampingCategoryExplorer() {
  return (
    <section className="cmp-section cmp-section--beige cmp-cats" aria-labelledby="cmp-cats-title">
      <div className="cmp-container">
        <SectionHeading
          id="cmp-cats-title"
          kicker="Camping experiences"
          title="Find Your Kind of Camping"
          lead="Choose an experience and discover where Nepal can take you."
        />
      </div>
      <div className="cmp-cats__scroller">
        <ul className="cmp-cats__grid">
          {campingCategories.map((c, i) => {
            const count = countByCategory(c.id);
            return (
              <li
                key={c.id}
                className={`cmp-cat ${WIDE.has(c.id) ? "cmp-cat--wide" : ""}`}
                data-reveal
                style={{ ["--d" as string]: `${(i % 4) * 70}ms` }}
              >
                <FilterLink category={c.id} className="cmp-cat__link" ariaLabel={`${c.name}: show ${count} destinations`}>
                  <CampImage
                    src={c.image}
                    alt=""
                    tone={c.tone}
                    loading="lazy"
                    sizes="(max-width: 767px) 78vw, (max-width: 1100px) 45vw, 30vw"
                  />
                  <span className="cmp-cat__shade" aria-hidden="true" />
                  <span className="cmp-cat__body">
                    <span className="cmp-cat__count">{count} destinations</span>
                    <h3 className="cmp-cat__name">{c.name}</h3>
                    <span className="cmp-cat__desc">{c.description}</span>
                    <span className="cmp-cat__arrow" aria-hidden="true"><IconArrow size={18} /></span>
                  </span>
                </FilterLink>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
