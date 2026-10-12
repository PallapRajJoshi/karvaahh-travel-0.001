import { COOKIE_REGISTRY } from "@/lib/cookie/config";
import type { CookieCategoryId, CookieMechanism } from "@/lib/cookie/types";

const MECHANISM_LABEL: Record<CookieMechanism, string> = {
  cookie: "Cookie",
  "local-storage": "Local storage",
  "third-party-request": "Third-party service",
};

interface CookieTableProps {
  category?: CookieCategoryId;
  party?: "first" | "third";
}

/**
 * Lists what the site actually sets or loads, straight from COOKIE_REGISTRY.
 * Renders an honest empty state instead of inventing vendors.
 */
export function CookieTable({ category, party }: CookieTableProps) {
  const entries = COOKIE_REGISTRY.filter(
    (entry) =>
      (!category || entry.category === category) && (!party || entry.party === party),
  );

  if (entries.length === 0) {
    return (
      <p className="legal-cookietable__empty">
        No items in this category are in use on the website at the date of the last update.
      </p>
    );
  }

  const label = `${
    category
      ? `${category.charAt(0).toUpperCase()}${category.slice(1)}`
      : party === "third"
        ? "Third-party"
        : "All"
  } cookies and similar technologies in use`;

  return (
    <div className="legal-matrix legal-cookietable" role="region" aria-label={label} tabIndex={0}>
      <table className="legal-matrix__table">
        <caption className="legal-matrix__caption">{label}</caption>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Type</th>
            <th scope="col">Provider</th>
            <th scope="col">Purpose</th>
            <th scope="col">Duration</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => (
            <tr key={`${entry.provider}-${entry.name}`}>
              <th scope="row">
                {entry.mechanism === "third-party-request" ? (
                  <span className="legal-cookietable__service">{entry.name}</span>
                ) : (
                  <code className="legal-cookietable__name">{entry.name}</code>
                )}
              </th>
              <td>{MECHANISM_LABEL[entry.mechanism]}</td>
              <td>
                {entry.provider}
                <span className="legal-matrix__note">
                  {entry.party === "first" ? "First party" : "Third party"}
                </span>
              </td>
              <td>{entry.purpose}</td>
              <td>{entry.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
