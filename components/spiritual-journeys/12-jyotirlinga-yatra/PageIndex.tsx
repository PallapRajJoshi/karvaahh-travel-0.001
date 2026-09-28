import { pageIndex } from "./data/jyotirlingaData";
import "./PageIndex.css";

/** Sticky in-page index. Plain anchors — no scroll-spy JavaScript. */
export default function PageIndex() {
  return (
    <nav className="jyl-index" aria-label="On this page">
      <div className="jyl-container jyl-index__inner">
        <span className="jyl-index__title">12 Jyotirlinga Yatra</span>
        <ul className="jyl-index__list">
          {pageIndex.map((item) => (
            <li key={item.href}>
              <a href={item.href} className="jyl-index__link">
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
