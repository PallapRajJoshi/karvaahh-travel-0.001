import Link from "next/link";
import { TRIP } from "../data/content";
import "./in-page-nav.css";

const LINKS = [
  { href: "#overview", label: "Overview" },
  { href: "#altitude", label: "Altitude" },
  { href: "#itinerary", label: "Itinerary" },
  { href: "#when-to-go", label: "When to go" },
  { href: "#inclusions", label: "What's included" },
  { href: "#permits-safety", label: "Permits & safety" },
  { href: "#faq", label: "FAQ" },
];

/** Sticky anchor bar. Pure CSS (position: sticky); no scroll listeners. */
export default function InPageNav() {
  return (
    <nav className="mc-subnav" aria-label="On this page">
      <div className="mc-container mc-subnav__inner">
        <ul className="mc-subnav__list">
          {LINKS.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>
        <Link href={TRIP.enquiryHref} className="mc-subnav__cta">
          Enquire
        </Link>
      </div>
    </nav>
  );
}
