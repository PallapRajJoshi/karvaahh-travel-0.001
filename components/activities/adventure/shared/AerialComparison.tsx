import Link from "next/link";
import {
  AERIAL_ACTIVITIES,
  AERIAL_ROWS,
  type AerialActivityId,
} from "./aerialComparisonData";
import "./AerialComparison.css";

interface Props {
  /** The page this table sits on — its column is marked "You are here" */
  current: AerialActivityId;
  heading?: string;
  id?: string;
}

export default function AerialComparison({
  current,
  heading = "Nepal Aerial Experiences",
  id = "aerial-comparison",
}: Props) {
  const headingId = `${id}-heading`;
  return (
    <section className="aerial-cmp" id={id} aria-labelledby={headingId}>
      <div className="aerial-cmp__inner">
        <h2 id={headingId} className="aerial-cmp__title">
          {heading}
        </h2>
        <p className="aerial-cmp__lede">
          Four ways to see Nepal from the air, side by side. Prices are
          indicative starting points and change by operator and season.
        </p>

        <div
          className="aerial-cmp__scroll"
          role="region"
          aria-labelledby={headingId}
          tabIndex={0}
        >
          <table className="aerial-cmp__table">
            <caption className="sr-only">
              Comparison of paragliding, ultra-light flight, hot air balloon
              and mountain flight in Nepal
            </caption>
            <thead>
              <tr>
                <td className="aerial-cmp__corner" />
                {AERIAL_ACTIVITIES.map((a) => {
                  const isCurrent = a.id === current;
                  return (
                    <th
                      key={a.id}
                      scope="col"
                      className={`aerial-cmp__col${isCurrent ? " is-current" : ""}`}
                    >
                      {isCurrent ? (
                        <>
                          <span className="aerial-cmp__here">You are here</span>
                          <span aria-current="page">{a.name}</span>
                        </>
                      ) : (
                        <Link href={a.href} className="aerial-cmp__link">
                          {a.name}
                        </Link>
                      )}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {AERIAL_ROWS.map((row) => (
                <tr key={row.label}>
                  <th scope="row" className="aerial-cmp__rowhead">
                    {row.label}
                  </th>
                  {AERIAL_ACTIVITIES.map((a) => (
                    <td
                      key={a.id}
                      className={a.id === current ? "is-current" : undefined}
                    >
                      {row.values[a.id]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="aerial-cmp__hint" aria-hidden="true">
          Swipe to compare
        </p>
      </div>
    </section>
  );
}
