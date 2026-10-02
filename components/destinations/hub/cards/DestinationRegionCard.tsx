import type { RegionMeta } from "@/lib/destinations/types";
import { DestinationArt } from "../DestinationArt";
import "./cards.css";

interface Props {
  region: RegionMeta;
  count: number;
  theme: Parameters<typeof DestinationArt>[0]["theme"];
  onSelect: () => void;
}

/** World-region tile in the International section; applies the region filter in the explorer. */
export function DestinationRegionCard({ region, count, theme, onSelect }: Props) {
  return (
    <button type="button" className="dregion" onClick={onSelect}>
      <DestinationArt theme={theme} seed={region.id} alt="" sizes="(min-width: 1024px) 25vw, (min-width: 640px) 33vw, 50vw" />
      <span className="dregion__body">
        <span className="dregion__label">{region.label}</span>
        <span className="dregion__blurb">{region.blurb}</span>
        <span className="dregion__count">
          {count} destinations
        </span>
      </span>
    </button>
  );
}
