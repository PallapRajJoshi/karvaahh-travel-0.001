import Link from "next/link";
import { headings } from "../data/config";
import { related } from "../data/related";
import { Icon } from "../shared/Icon";
import "./related.css";

export default function Related() {
  if (!related.length) return null;
  const h = headings.related;
  return (
    <section className="mc-related" aria-labelledby="mc-related-title">
      <div className="mc-container mc-related__inner">
        <div>
          <p className="mc-heading__eyebrow">{h.eyebrow}</p>
          <h2 id="mc-related-title" className="mc-related__title">
            {h.title}
          </h2>
        </div>
        <ul className="mc-related__list">
          {related.map((r) => (
            <li key={r.href}>
              <Link href={r.href} className="mc-related__link">
                <span className="mc-related__label">{r.label}</span>
                <span className="mc-related__note">{r.note}</span>
                <Icon name="arrow" className="mc-related__arrow" />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
