import "./ComparisonTable.css";

export interface TableColumn {
  key: string;
  label: string;
  /** Narrow columns stay compact; wide ones carry sentences. */
  width?: "narrow" | "default" | "wide";
}

export interface TableRow {
  id: string;
  cells: Record<string, string>;
}

interface ComparisonTableProps {
  caption: string;
  columns: TableColumn[];
  rows: TableRow[];
  /** First column is rendered as a row header. */
  emptyMessage?: string;
}

export default function ComparisonTable({
  caption,
  columns,
  rows,
  emptyMessage = "No rivers match this filter.",
}: ComparisonTableProps) {
  if (rows.length === 0) {
    return <p className="act-table__empty">{emptyMessage}</p>;
  }

  const [first, ...rest] = columns;

  return (
    <div className="act-table__scroll" tabIndex={0} role="region" aria-label={caption}>
      <table className="act-table">
        <caption className="act-table__caption">{caption}</caption>
        <thead>
          <tr>
            <th scope="col" className="act-table__th act-table__th--sticky">
              {first.label}
            </th>
            {rest.map((column) => (
              <th
                key={column.key}
                scope="col"
                className={`act-table__th act-table__th--${column.width ?? "default"}`}
              >
                {column.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.id}>
              <th scope="row" className="act-table__rowhead">
                {row.cells[first.key]}
              </th>
              {rest.map((column) => (
                <td
                  key={column.key}
                  className={`act-table__td act-table__td--${column.width ?? "default"}`}
                >
                  {row.cells[column.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
