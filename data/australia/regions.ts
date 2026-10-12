// data/australia/regions.ts
// Australia's six states and two mainland territories. Order = display order.
// Codes match lib/australia/map-grid.ts, so the map, filters and copy stay in sync.

import type { AUImageId } from "./images";

export type AustraliaRegion =
  | "new-south-wales"
  | "victoria"
  | "queensland"
  | "western-australia"
  | "south-australia"
  | "tasmania"
  | "northern-territory"
  | "australian-capital-territory";

export interface AustraliaRegionInfo {
  id: AustraliaRegion;
  name: string;
  /** Official abbreviation, used on the map and in tight spaces. */
  short: string;
  kind: "State" | "Territory";
  capital: string;
  /** One line for the region navigator. */
  tagline: string;
  description: string;
  image?: AUImageId;
  /** Section on this page that tells the region's story. */
  sectionId?: string;
  /** Map label position as [latitude, longitude]. */
  labelAt: [number, number];
  /** Accent + fallback gradient. */
  tone: [string, string];
}

export const australiaRegions: AustraliaRegionInfo[] = [
  {
    id: "new-south-wales", name: "New South Wales", short: "NSW", kind: "State", capital: "Sydney",
    tagline: "Harbour city & Blue Mountains",
    description: "Sydney's harbour, beaches and icons, the Blue Mountains, Byron Bay and the Hunter Valley wine country.",
    image: "sydney-harbour", sectionId: "sydney", labelAt: [-31.6, 146.2], tone: ["#0b2a3c", "#2f6f8f"],
  },
  {
    id: "victoria", name: "Victoria", short: "VIC", kind: "State", capital: "Melbourne",
    tagline: "Culture, coffee & coast",
    description: "Melbourne's laneways, food and sport, the Great Ocean Road, Phillip Island and the Yarra Valley.",
    image: "melbourne-skyline", sectionId: "melbourne", labelAt: [-36.9, 144.0], tone: ["#18263a", "#56708f"],
  },
  {
    id: "queensland", name: "Queensland", short: "QLD", kind: "State", capital: "Brisbane",
    tagline: "Reef, rainforest & theme parks",
    description: "The Great Barrier Reef, the Whitsundays, Cairns and the Daintree, Gold Coast beaches and Brisbane.",
    image: "whitehaven", sectionId: "queensland", labelAt: [-22.4, 144.4], tone: ["#063b44", "#1e9b98"],
  },
  {
    id: "western-australia", name: "Western Australia", short: "WA", kind: "State", capital: "Perth",
    tagline: "Quokkas, coast & wine",
    description: "Perth and Fremantle, Rottnest Island, Margaret River, Ningaloo Reef and Broome's Cable Beach.",
    image: "rottnest", sectionId: "western-australia", labelAt: [-25.6, 121.5], tone: ["#26203a", "#c46a3a"],
  },
  {
    id: "south-australia", name: "South Australia", short: "SA", kind: "State", capital: "Adelaide",
    tagline: "Food, wine & wildlife",
    description: "Adelaide, the Barossa and McLaren Vale, Kangaroo Island's wildlife and the Flinders Ranges.",
    image: "barossa", sectionId: "south-australia", labelAt: [-29.6, 135.2], tone: ["#2e1a1f", "#8a3b45"],
  },
  {
    id: "tasmania", name: "Tasmania", short: "TAS", kind: "State", capital: "Hobart",
    tagline: "Wilderness island",
    description: "Hobart, Port Arthur, Freycinet and Wineglass Bay, Cradle Mountain and the Bay of Fires.",
    image: "cradle-mountain", sectionId: "tasmania", labelAt: [-42.1, 146.6], tone: ["#14281f", "#4e7a5c"],
  },
  {
    id: "northern-territory", name: "Northern Territory", short: "NT", kind: "Territory", capital: "Darwin",
    tagline: "Uluru & the Outback",
    description: "Uluru and Kata Tjuta, Kings Canyon and Alice Springs in the Red Centre; Darwin, Kakadu and Litchfield in the Top End.",
    image: "uluru", sectionId: "outback", labelAt: [-19.6, 133.4], tone: ["#3a1a0f", "#b4532a"],
  },
  {
    id: "australian-capital-territory", name: "Australian Capital Territory", short: "ACT", kind: "Territory", capital: "Canberra",
    tagline: "The nation's capital",
    description: "Canberra's national institutions, galleries and museums, an easy addition to a Sydney itinerary.",
    image: "canberra", labelAt: [-35.3, 149.1], tone: ["#1b2433", "#7a8597"],
  },
];

export const australiaRegionById = (id: AustraliaRegion) => australiaRegions.find((r) => r.id === id)!;
