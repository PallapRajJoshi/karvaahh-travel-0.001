import Link from "next/link";
import type { AerialActivityKey } from "./types";
import { AERIAL_COLUMNS, AERIAL_COMPARISON_HEADING, AERIAL_ROWS } from "./comparison.data";
import SectionHeading from "./SectionHeading";
import "./aerial-comparison.css";

/** Shared block — identical on all four aerial pages; `current` only highlights. */
export default function AerialComparison({ current }: { current: AerialActivityKey }) {
  const cls = (key: AerialActivityKey) => (key === current ? " is-current" : "");

  return (
    <section id="compare" className="ae-section ae-section--cream ae-compare" aria-labelledby="ae-compare-title">
      <div className="ae-container">
        <SectionHeading id="ae-compare-title" title={AERIAL_COMPARISON_HEADING} />

        <div
          className="ae-compare__scroller"
          role="region"
          aria-labelledby="ae-compare-title"
          tabIndex={0}
        >
          <table className="ae-compare__table">
            <caption className="ae-sr-only">
              Comparison of paragliding, ultra-light flight, hot air balloon and mountain flight in Nepal
            </caption>
            <thead>
              <tr>
                <td className="ae-compare__corner" />
                {AERIAL_COLUMNS.map((c) => (
                  <th key={c.key} scope="col" className={`ae-compare__col${cls(c.key)}`}>
                    {c.key === current ? (
                      <span aria-current="page">{c.label}</span>
                    ) : c.live ? (
                      <Link href={c.href} className="ae-compare__link">
                        {c.label}
                      </Link>
                    ) : (
                      c.label
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {AERIAL_ROWS.map((r) => (
                <tr key={r.label}>
                  <th scope="row" className="ae-compare__rowhead">
                    {r.label}
                  </th>
                  {AERIAL_COLUMNS.map((c) => (
                    <td key={c.key} className={`ae-compare__cell${cls(c.key)}`}>
                      {r.values[c.key]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="ae-compare__hint" aria-hidden="true">
          Swipe to compare all four
        </p>
      </div>
    </section>
  );
}
