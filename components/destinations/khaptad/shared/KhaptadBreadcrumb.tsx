import Link from "next/link";

/**
 * Breadcrumb: Home → Offbeat & Unexplored → Khaptad National Park.
 * Follows the existing breadcrumb component pattern and URL conventions
 * used by other /offbeat-unexplored pages (e.g. Rara Lake).
 */
export default function KhaptadBreadcrumb() {
  return (
    <nav className="khaptad-breadcrumb" aria-label="Breadcrumb">
      <div className="khaptad-page__container">
        <ol className="khaptad-breadcrumb__list">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li className="khaptad-breadcrumb__sep" aria-hidden="true">
            /
          </li>
          <li>
            <Link href="/offbeat-unexplored">Offbeat &amp; Unexplored</Link>
          </li>
          <li className="khaptad-breadcrumb__sep" aria-hidden="true">
            /
          </li>
          <li className="khaptad-breadcrumb__current" aria-current="page">
            Khaptad National Park
          </li>
        </ol>
      </div>
    </nav>
  );
}
