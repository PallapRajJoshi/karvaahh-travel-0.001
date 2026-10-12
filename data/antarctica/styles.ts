// data/antarctica/styles.ts
// Expedition styles (filter chips, "by travel style" cards, trip builder) and
// the command-bar categories.

import type { AntarcticaImageId } from "./images";
import type { ExpeditionStyle, PolarRegion } from "./types";

export interface StyleDef {
  id: ExpeditionStyle;
  label: string;
  blurb: string;
  image?: AntarcticaImageId;
  /** Only shown where operators actually offer it. */
  whereAvailable?: boolean;
}

export const expeditionStyles: StyleDef[] = [
  { id: "classic", label: "Classic Antarctica", blurb: "The Peninsula by ship, across the Drake.", image: "mirror-bay" },
  { id: "expedition-cruise", label: "Expedition Cruise", blurb: "Small ships, Zodiacs and landings where permitted.", image: "ship-gentoos" },
  { id: "wildlife", label: "Wildlife", blurb: "Routes and timing built around penguins, whales and seals.", image: "humpback-fluke" },
  { id: "photography", label: "Photography", blurb: "Ice, light and wildlife, with time to shoot.", image: "iceberg-arch" },
  { id: "adventure", label: "Adventure", blurb: "Kayaking, camping or the Antarctic Circle, where offered.", image: "kayak-whale" },
  { id: "luxury", label: "Luxury Expedition", blurb: "Suites, premium vessels and seamless transfers.", image: "golden-peaks" },
  { id: "honeymoon", label: "Honeymoon", blurb: "A once-in-a-lifetime journey for two.", image: "alpenglow" },
  { id: "family", label: "Family", blurb: "Shared discovery for curious families.", image: "penguins-snow" },
  { id: "educational", label: "Educational", blurb: "Learning-led voyages where operators offer them.", image: "landing-view" },
  { id: "air-cruise", label: "Air-Cruise", blurb: "Fly over the Drake, where operationally available.", image: "zodiac-peaks", whereAvailable: true },
  { id: "small-group", label: "Small Group", blurb: "Smaller ships, more time ashore per guest.", image: "zodiac-towers" },
  { id: "private", label: "Private / Charter", blurb: "Private journeys and charters, where available.", image: "blue-bergs", whereAvailable: true },
];

export const styleById = (id: string) => expeditionStyles.find((s) => s.id === id);

/** Route filters for the package grid (multi-select alongside styles). */
export const routeFilters: { id: PolarRegion; label: string }[] = [
  { id: "antarctic-peninsula", label: "Antarctic Peninsula" },
  { id: "antarctic-circle", label: "Antarctic Circle" },
  { id: "south-georgia", label: "South Georgia" },
  { id: "falkland-islands", label: "Falkland Islands / Malvinas" },
];

/** Command bar: regions jump to the map/explorer; themes filter packages. */
export const commandRegions: { id: Exclude<PolarRegion, "other" | "weddell-sea">; label: string }[] = [
  { id: "antarctic-peninsula", label: "Antarctica Peninsula" },
  { id: "south-shetland-islands", label: "South Shetland Islands" },
  { id: "drake-passage", label: "Drake Passage" },
  { id: "south-georgia", label: "South Georgia" },
  { id: "falkland-islands", label: "Falkland Islands / Malvinas" },
  { id: "antarctic-circle", label: "Antarctic Circle" },
  { id: "ushuaia", label: "Ushuaia" },
];

export const commandThemes: ExpeditionStyle[] = ["expedition-cruise", "wildlife", "photography", "adventure", "luxury", "honeymoon", "family", "educational"];
