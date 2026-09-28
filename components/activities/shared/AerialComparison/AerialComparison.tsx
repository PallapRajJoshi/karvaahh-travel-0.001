import Link from "next/link";
import "./AerialComparison.css";

export interface AerialComparisonRow {
  label: string;
  values: string[];
}

export interface AerialComparisonProps {
  id?: string;
  heading: string;
  intro?: string;
  columns: string[];
  rows: AerialComparisonRow[];
  links?: { label: string; href: string }[];
  note?: string;
}

/**
 * Reusable aerial-activity comparison table (paragliding, ultra-light, balloon, mountain flight…).
 * Styles fall back to neutral values when the host page does not define --sky-* tokens.
 */
export default function AerialComparison({ id = "aerial-comparison", heading, intro, columns, rows, links, note }: AerialComparisonProps) {
  const titleId = `${id}-title`;
  return (
    <section id={id} className="aerial-cmp" aria-labelledby={titleId}>
      <div className="aerial-cmp__inner">
        <header className="aerial-cmp__head">
          <h2 id={titleId} className="aerial-cmp__title">
            {heading}
          </h2>
          {intro && <p className="aerial-cmp__intro">{intro}</p>}
        </header>

        <div className="aerial-cmp__scroll" role="region" aria-labelledby={titleId} tabIndex={0}>
          <table className="aerial-cmp__table">
            <thead>
              <tr>
                <td />
                {columns.map((c) => (
                  <th key={c} scope="col">
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.label}>
                  <th scope="row">{r.label}</th>
                  {r.values.map((v, i) => (
                    <td key={`${r.label}-${i}`}>{v}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {(note || links?.length) && (
          <div className="aerial-cmp__foot">
            {note && <p className="aerial-cmp__note">{note}</p>}
            {links?.length ? (
              <ul className="aerial-cmp__links">
                {links.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href}>{l.label}</Link>
                  </li>
                ))}
              </ul>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
