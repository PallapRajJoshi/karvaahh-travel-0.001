import Link from "next/link";
import "./Breadcrumb.css";

/**
 * Section 2 — Breadcrumb Navigation.
 * ASSUMPTION (flag in README): internal route targets below
 * (`/offbeat-unexplored`) are inferred from the page's own URL family;
 * verify against the live project's actual route names.
 */
export default function Breadcrumb() {
  return (
    <nav className="tsho-breadcrumb" aria-label="Breadcrumb">
      <ol className="tsho-breadcrumb__list tsho-container">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li aria-hidden="true">→</li>
        <li>
          <Link href="/offbeat-unexplored">Offbeat &amp; Unexplored</Link>
        </li>
        <li aria-hidden="true">→</li>
        <li aria-current="page">Tsho Rolpa Lake</li>
      </ol>
    </nav>
  );
}
