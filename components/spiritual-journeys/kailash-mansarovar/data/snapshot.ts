import type { IconName } from "../shared/Icon";

export interface SnapshotFact {
  icon: IconName;
  label: string;
  value: string;
}

export const SNAPSHOT: SnapshotFact[] = [
  { icon: "pin", label: "Destination", value: "Western Tibet" },
  { icon: "mountain", label: "Main attraction", value: "Mount Kailash" },
  { icon: "lake", label: "Sacred lake", value: "Lake Mansarovar" },
  { icon: "pass", label: "Kora high point", value: "Dolma La Pass" },
  { icon: "altitude", label: "Approx. elevation (Dolma La)", value: "5,630 m" },
  { icon: "compass", label: "Major starting region", value: "Nepal" },
  { icon: "route", label: "Route type", value: "Overland or helicopter-assisted" },
  { icon: "footprints", label: "Journey type", value: "Spiritual, high-altitude pilgrimage" },
];
