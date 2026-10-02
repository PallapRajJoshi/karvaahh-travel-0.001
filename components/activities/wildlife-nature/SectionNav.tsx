import { JUMP_LINKS } from "@/data/activities/wildlife-nature/nav";
import "./SectionNav.css";

/** Sticky in-page navigation. Server-rendered anchors only — zero JavaScript. */
export function SectionNav() {
  return (
    <nav className="wn-jump" aria-label="On this page">
      <ul className="wn-jump__list wn-container">
        {JUMP_LINKS.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="wn-jump__link">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
