import type { MatrixRow } from "@/lib/legal/types";

interface CancellationMatrixProps {
  caption: string;
  rows: MatrixRow[];
  /** Column headings. Defaults suit the cancellation overview. */
  headings?: [string, string, string];
}

/**
 * Reusable three-column matrix: Service | Typical Policy | Final Policy.
 * Scrolls horizontally inside a labelled, focusable region on narrow screens.
 */
export function CancellationMatrix({
  caption,
  rows,
  headings = ["Service", "Typical policy", "Final policy"],
}: CancellationMatrixProps) {
  return (
    <div
      className="legal-matrix"
      role="region"
      aria-label={caption}
      tabIndex={0}
    >
      <table className="legal-matrix__table">
        <caption className="legal-matrix__caption">{caption}</caption>
        <thead>
          <tr>
            <th scope="col">{headings[0]}</th>
            <th scope="col">{headings[1]}</th>
            <th scope="col">{headings[2]}</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.service}>
              <th scope="row">
                {row.service}
                {row.note ? <span className="legal-matrix__note">{row.note}</span> : null}
              </th>
              <td>{row.typical}</td>
              <td>
                <span className="legal-matrix__pill">{row.final}</span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
