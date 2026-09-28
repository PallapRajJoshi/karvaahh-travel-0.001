import { STATUS_META, type AvailabilityStatus } from "./data/hotAirBalloonData";
import "./StatusBadge.css";

export default function StatusBadge({
  status,
  note,
  size = "md",
}: {
  status: AvailabilityStatus;
  note?: string;
  size?: "sm" | "md";
}) {
  return (
    <span className="hab-status-wrap">
      <span className={`hab-status hab-status--${status} hab-status--${size}`}>
        <span className="hab-status__dot" aria-hidden="true" />
        <span className="sr-only">Availability status: </span>
        {STATUS_META[status].label}
      </span>
      {note && <span className="hab-status__note">{note}</span>}
    </span>
  );
}
