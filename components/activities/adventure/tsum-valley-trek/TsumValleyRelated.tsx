import { RELATED } from "@/data/destinations/tsum-valley/content";
import { ArrowRight } from "./shared/Icons";
import "./TsumValleyRelated.css";

/** Internal links to related Nepal pages — helps discovery and crawl depth. */
export default function TsumValleyRelated() {
  return (
    <nav className="tsum-related" aria-labelledby="tsum-related-title">
      <div className="tsum-container">
        <h2 className="tsum-related__title" id="tsum-related-title">Continue exploring Nepal</h2>
        <ul className="tsum-related__grid">
          {RELATED.map((r) => (
            <li key={r.href}>
              <a className="tsum-related__card" href={r.href}>
                <span className="tsum-related__kicker">{r.kicker}</span>
                <span className="tsum-related__label">{r.label}</span>
                <span className="tsum-related__desc">{r.description}</span>
                <ArrowRight className="tsum-related__arrow" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
