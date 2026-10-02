import Link from "next/link";
import "./Breadcrumb.css";

// NOTE: internal link targets are assumed to match the site's existing
// conventions (`/offbeat-unexplored`), consistent with the Rara Lake and
// Tsho Rolpa Lake builds. Verify against the live route table if it differs.
export default function Breadcrumb() {
  return (
    <nav className="saipal-breadcrumb" aria-label="Breadcrumb">
      <ol className="saipal-breadcrumb__list">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li>
          <Link href="/offbeat-unexplored">Offbeat &amp; Unexplored</Link>
        </li>
        <li aria-hidden="true">/</li>
        <li aria-current="page">Saipal Base Camp</li>
      </ol>
    </nav>
  );
}
