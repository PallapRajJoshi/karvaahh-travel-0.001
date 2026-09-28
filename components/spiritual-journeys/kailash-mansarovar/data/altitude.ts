export interface AltitudePoint {
  place: string;
  metres: number;
  /** Dashed segment leading into this point: the intermediate road ascent is not plotted. */
  dashedBefore?: boolean;
  highlight?: boolean;
}

/** Approximate, commonly cited elevations along the overland route and the Kora. */
export const ALTITUDE_PROFILE: AltitudePoint[] = [
  { place: "Kathmandu", metres: 1400 },
  { place: "Saga", metres: 4640, dashedBefore: true },
  { place: "Mansarovar", metres: 4590 },
  { place: "Darchen", metres: 4575 },
  { place: "Dirapuk", metres: 4900 },
  { place: "Dolma La", metres: 5630, highlight: true },
  { place: "Zuthulpuk", metres: 4790 },
  { place: "Darchen", metres: 4575 },
];
