import Link from "next/link";
import { relatedHeading, relatedLinks } from "../../data/related";
import Icon from "../../shared/Icon";
import "./Related.css";

/** Internal links to sibling pilgrimages — helps discovery and crawl depth. */
export default function Related() {
  if (!relatedLinks.length) return null;
  return (
    <nav className="km-related" aria-labelledby="km-related-title">
      <div className="km-container">
        <h2 id="km-related-title" className="km-related__title">
          {relatedHeading}
        </h2>
        <ul className="km-related__list">
          {relatedLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="km-related__link">
                <span className="km-related__name">{l.title}</span>
                <span className="km-related__blurb">{l.blurb}</span>
                <Icon name="arrow-right" size={18} className="km-related__arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
