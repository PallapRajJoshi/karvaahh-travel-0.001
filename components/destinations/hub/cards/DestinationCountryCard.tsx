import type { CountryMeta } from "@/lib/destinations/types";
import { DestinationArt } from "../DestinationArt";
import "./cards.css";

interface Props {
  country: CountryMeta;
  count: number;
  pressed: boolean;
  src?: string;
  onSelect: () => void;
}

const THEME = { nepal: "himalaya", india: "spiritual", international: "beach" } as const;

/** Nepal / India / International selector card. Acts as a toggle button for the explorer below. */
export function DestinationCountryCard({ country, count, pressed, src, onSelect }: Props) {
  return (
    <button type="button" className="dcountry" aria-pressed={pressed} onClick={onSelect}>
      <DestinationArt
        theme={THEME[country.id]}
        seed={country.id}
        src={src}
        alt=""
        sizes="(min-width: 768px) 33vw, 92vw"
      />
      <span className="dcountry__flag" aria-hidden="true">
        {country.flag}
      </span>
      <span className="dcountry__count">{count} destinations</span>
      <span className="dcountry__body">
        <span className="dcountry__label">{country.label}</span>
        <span className="dcountry__tag">{country.tagline}</span>
      </span>
    </button>
  );
}
