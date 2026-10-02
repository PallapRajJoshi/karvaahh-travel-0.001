import type { ExperienceMeta } from "@/lib/destinations/types";
import "./cards.css";

interface Props {
  experience: ExperienceMeta;
  count: number;
  pressed: boolean;
  onSelect: () => void;
}

/** Experience filter tile (Spiritual, Trekking, Wildlife…). */
export function DestinationExperienceCard({ experience, count, pressed, onSelect }: Props) {
  return (
    <button type="button" className="dexp" aria-pressed={pressed} onClick={onSelect}>
      <span className="dexp__label">{experience.label}</span>
      <span className="dexp__count">
        {count} {count === 1 ? "destination" : "destinations"}
      </span>
    </button>
  );
}
