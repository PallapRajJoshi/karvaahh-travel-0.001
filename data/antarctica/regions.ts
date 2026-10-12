// data/antarctica/regions.ts
// Map regions and the voyage routes drawn between them. Coordinates are real;
// routes are illustrative of typical voyage patterns, not a promised track.
// Actual routing is decided by the expedition team on the day.

import type { AntarcticaImageId } from "./images";
import type { ExpeditionStyle, PolarRegion } from "./types";

export interface MapRegion {
  id: Exclude<PolarRegion, "other">;
  name: string;
  short: string;
  kind: "gateway" | "crossing" | "destination" | "milestone" | "sea";
  coords: [number, number];
  image: AntarcticaImageId;
  info: string;
  style: string;
  wildlife: string[];
  duration: string;
  season: string;
  /** Section on this page that goes deeper. */
  sectionId: string;
  /** Command bar + filters. */
  label: string;
}

export const mapRegions: MapRegion[] = [
  {
    id: "ushuaia",
    name: "Ushuaia",
    short: "Gateway",
    label: "Ushuaia",
    kind: "gateway",
    coords: [-54.8, -68.3],
    image: "ushuaia-harbour",
    info: "Argentina's southernmost city on the Beagle Channel. Most ship-based Antarctic Peninsula voyages begin and end here.",
    style: "Embarkation gateway, pre- and post-expedition stays",
    wildlife: ["Seabirds along the Beagle Channel", "Sea lions on channel islets"],
    duration: "1–3 nights before and after the voyage",
    season: "Voyages typically depart November to March",
    sectionId: "ushuaia",
  },
  {
    id: "drake-passage",
    name: "Drake Passage",
    short: "Ocean crossing",
    label: "Drake Passage",
    kind: "crossing",
    coords: [-58.6, -64.6],
    image: "berg-open-ocean",
    info: "The open-ocean crossing between South America and the South Shetland Islands. Typically around two days each way by ship, depending on sea conditions.",
    style: "Sea days: lectures, seabird watching, preparation",
    wildlife: ["Albatrosses and petrels following the ship", "Possible whale sightings"],
    duration: "Typically ~2 days each way",
    season: "Throughout the expedition season",
    sectionId: "drake-passage",
  },
  {
    id: "south-shetland-islands",
    name: "South Shetland Islands",
    short: "First landfall",
    label: "South Shetland Islands",
    kind: "destination",
    coords: [-62.3, -59.4],
    image: "fur-seal-chinstraps",
    info: "A chain of volcanic, glaciated islands off the tip of the Peninsula and often the first Antarctic landfall after the Drake.",
    style: "Zodiac cruising and landings where permitted",
    wildlife: ["Chinstrap, gentoo and Adélie penguins", "Fur and elephant seals", "Seabirds"],
    duration: "Usually included in 10+ day Peninsula voyages",
    season: "November to March",
    sectionId: "south-shetland",
  },
  {
    id: "antarctic-peninsula",
    name: "Antarctic Peninsula",
    short: "Flagship region",
    label: "Antarctica Peninsula",
    kind: "destination",
    coords: [-64.8, -62.9],
    image: "zodiac-arch",
    info: "The mountainous arm of the continent reaching towards South America: channels, glaciers, icebergs and penguin colonies. The focus of most Antarctic voyages.",
    style: "Classic expedition cruising, Zodiac landings, kayaking where offered",
    wildlife: ["Gentoo, Adélie and chinstrap penguins", "Humpback and minke whales", "Weddell, crabeater and leopard seals"],
    duration: "Typically 10–13 days from Ushuaia",
    season: "November to March",
    sectionId: "antarctic-peninsula",
  },
  {
    id: "antarctic-circle",
    name: "Antarctic Circle",
    short: "Milestone",
    label: "Antarctic Circle",
    kind: "milestone",
    coords: [-66.56, -68.3],
    image: "tabular-berg",
    info: "The line of latitude at about 66°33′S. Some longer Peninsula voyages attempt to sail south of it, ice and weather permitting.",
    style: "Deeper Peninsula voyage, attempted when conditions allow",
    wildlife: ["Adélie penguins", "Seals hauled out on ice floes", "Possible whales"],
    duration: "Typically 12–14+ days",
    season: "Attempts are usually later in the season, subject to ice",
    sectionId: "antarctic-circle",
  },
  {
    id: "falkland-islands",
    name: "Falkland Islands / Malvinas",
    short: "Sub-Antarctic islands",
    label: "Falkland Islands / Malvinas",
    kind: "destination",
    coords: [-51.7, -59.2],
    image: "rockhoppers",
    info: "Wind-swept islands of grassland, cliffs and beaches, visited on some longer voyages that combine the sub-Antarctic with the Peninsula.",
    style: "Island landings on longer combination voyages",
    wildlife: ["Rockhopper, gentoo and Magellanic penguins", "Black-browed albatrosses", "Seabirds and seals"],
    duration: "Part of ~18–21 day combination voyages",
    season: "November to March, on selected departures",
    sectionId: "falklands",
  },
  {
    id: "south-georgia",
    name: "South Georgia",
    short: "Wildlife frontier",
    label: "South Georgia",
    kind: "destination",
    coords: [-54.28, -36.5],
    image: "king-colony-sunset",
    info: "A remote, mountainous sub-Antarctic island known for large king penguin colonies, seals and its polar exploration history.",
    style: "Advanced wildlife expedition with several sea days",
    wildlife: ["King penguin colonies", "Fur and elephant seals", "Albatrosses and other seabirds"],
    duration: "Combination voyages often ~18–23 days",
    season: "November to March, on selected departures",
    sectionId: "south-georgia",
  },
  {
    id: "weddell-sea",
    name: "Weddell Sea",
    short: "Ice-choked sea",
    label: "Weddell Sea",
    kind: "sea",
    coords: [-68.5, -48],
    image: "tabular-berg",
    info: "The sea east of the Peninsula, known for giant tabular icebergs and heavy pack ice. Visited on selected specialist voyages where ice allows.",
    style: "Specialist voyages, highly ice-dependent",
    wildlife: ["Adélie penguins", "Seals on pack ice", "Possible emperor penguins on specialist voyages"],
    duration: "Varies by voyage",
    season: "Selected departures only",
    sectionId: "antarctic-circle",
  },
];

export const mapRegionById = (id: string) => mapRegions.find((r) => r.id === id);

export interface VoyageRoute {
  id: string;
  name: string;
  summary: string;
  /** Ordered region ids the line passes through. */
  stops: string[];
  /** Dashed line + plane icon for flights. */
  mode: "sea" | "air-cruise";
  styles: ExpeditionStyle[];
}

/** Illustrative routes for the map. Not a guaranteed track. */
export const voyageRoutes: VoyageRoute[] = [
  {
    id: "classic",
    name: "Classic Peninsula",
    summary: "Ushuaia → Drake Passage → South Shetland Islands → Antarctic Peninsula",
    stops: ["ushuaia", "drake-passage", "south-shetland-islands", "antarctic-peninsula"],
    mode: "sea",
    styles: ["classic", "expedition-cruise"],
  },
  {
    id: "circle",
    name: "Antarctic Circle",
    summary: "Classic route continuing south towards 66°33′S when ice allows",
    stops: ["ushuaia", "drake-passage", "south-shetland-islands", "antarctic-peninsula", "antarctic-circle"],
    mode: "sea",
    styles: ["adventure", "expedition-cruise"],
  },
  {
    id: "grand",
    name: "Falklands, South Georgia & Antarctica",
    summary: "Ushuaia → Falklands / Malvinas → South Georgia → Antarctic Peninsula",
    stops: ["ushuaia", "falkland-islands", "south-georgia", "south-shetland-islands", "antarctic-peninsula"],
    mode: "sea",
    styles: ["wildlife", "photography", "expedition-cruise"],
  },
  {
    id: "air-cruise",
    name: "Air-Cruise",
    summary: "Fly over the Drake to the South Shetlands, then cruise the Peninsula, where operationally available",
    stops: ["punta-arenas", "south-shetland-islands", "antarctic-peninsula"],
    mode: "air-cruise",
    styles: ["air-cruise", "luxury"],
  },
];

/** Gateway used only by the air-cruise line (not a selectable region). */
export const PUNTA_ARENAS: [number, number] = [-53.16, -70.91];
