import type { AdventureSite } from "./data/zipFlyingData";
import StatusBadge from "./StatusBadge";
import "./ZiplineComparison.css";

interface Props {
  id?: string;
  heading: string;
  caption: string;
  rows: AdventureSite[];
  highlightId?: string;
}

/** Reusable, unranked comparison table. Scrolls horizontally inside its own container. */
export default function ZiplineComparison({ id, heading, caption, rows, highlightId }: Props) {
  const headingId = `${id ?? "compare"}-title`;
  return (
    <section id={id} className="zf-sec adv-compare" aria-labelledby={headingId}>
      <div className="zf-wrap">
        <header className="zf-head">
          <h2 id={headingId} className="zf-h2">{heading}</h2>
        </header>
        <div className="adv-compare__scroll" role="region" aria-labelledby={headingId} tabIndex={0}>
          <table className="adv-compare__table">
            <caption className="sr-only">{caption}</caption>
            <thead>
              <tr>
                <th scope="col">Site</th>
                <th scope="col">Province / District</th>
                <th scope="col">Specification</th>
                <th scope="col">Distinctive</th>
                <th scope="col">Indicative price</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((r) => (
                <tr key={r.id} className={r.id === highlightId ? "is-featured" : undefined}>
                  <th scope="row">{r.name}</th>
                  <td>{r.region}</td>
                  <td>{r.specification}</td>
                  <td>{r.distinctive}</td>
                  <td className="adv-compare__price">{r.price}</td>
                  <td><StatusBadge status={r.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="zf-note">{caption}</p>
      </div>
    </section>
  );
}
