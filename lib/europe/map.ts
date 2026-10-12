// lib/europe/map.ts
// Server-side map building. Imports the generated dot paths, so keep it out of
// client components: pass the strings down as props instead.

import { COUNTRY_DOTS } from "./map-grid";

/** Dots for neighbouring land that is not a selectable country. */
export const contextLandPath = () => COUNTRY_DOTS.land ?? "";

/** Dot path for a country by ISO code (lower case), or "" when it has no cells. */
export const countryDotsPath = (iso: string) => COUNTRY_DOTS[iso.toUpperCase()] ?? "";

/** All land, for decorative use (hero backdrop). */
export const allLandPath = () => Object.values(COUNTRY_DOTS).join("");
