import { usaDestinationById } from "@/data/usa/destinations";
import { SEASON_NOTE, seasonMatrix, usaSeasons, type MatrixLevel } from "@/data/usa/seasons";
import { destAnchor } from "@/lib/usa/config";
import SeasonSelector, { type SeasonView } from "../asia/SeasonSelector";

const LEVEL: Record<MatrixLevel, string> = { great: "Great", good: "Good", limited: "Limited" };
const SEASONS = [
  { id: "spring", label: "Spring" },
  { id: "summer", label: "Summer" },
  { id: "autumn", label: "Autumn" },
  { id: "winter", label: "Winter" },
] as const;

/** Seasonal tabs (shared SeasonSelector) plus a destination × season matrix. */
export default function USASeasonExplorer() {
  const views: SeasonView[] = usaSeasons.map((s) => ({
    ...s,
    destinations: s.destinations
      .map((id) => usaDestinationById(id))
      .filter((d) => d?.active)
      .map((d) => ({ id: d!.id, country: d!.name, bestTime: d!.idealSeason })),
  }));

  return (
    <div className="us-seasons">
      <SeasonSelector seasons={views} note={SEASON_NOTE} />

      <div className="us-matrix">
        <table>
          <caption>Seasonal destination matrix: general guidance only</caption>
          <thead>
            <tr>
              <th scope="col">Destination</th>
              {SEASONS.map((s) => (
                <th key={s.id} scope="col">{s.label}</th>
              ))}
              <th scope="col" className="us-matrix__note-h">Notes</th>
            </tr>
          </thead>
          <tbody>
            {seasonMatrix.map((r) => (
              <tr key={r.place}>
                <th scope="row">
                  {r.destinationId ? <a href={`#${destAnchor(r.destinationId)}`}>{r.place}</a> : r.place}
                </th>
                {SEASONS.map((s) => (
                  <td key={s.id} data-label={s.label}>
                    <span className={`us-level us-level--${r.cells[s.id]}`}>{LEVEL[r.cells[s.id]]}</span>
                  </td>
                ))}
                <td className="us-matrix__note">{r.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
