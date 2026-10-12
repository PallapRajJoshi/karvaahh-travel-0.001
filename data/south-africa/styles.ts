// data/south-africa/styles.ts
// Travel styles (experience bar, style filter, trip builder) and provinces.

import type { SAImageId } from "./images";
import type { SouthAfricaRegion, SouthAfricaTravelStyle } from "./types";

export interface StyleDef {
  id: SouthAfricaTravelStyle;
  label: string;
  blurb: string;
  image?: SAImageId;
  /** Shown in the floating experience bar (the full set appears in the filter). */
  inBar?: boolean;
}

export const saStyles: StyleDef[] = [
  { id: "safari", label: "Safari", blurb: "Game drives in Kruger, Sabi Sand, Pilanesberg and Addo.", image: "vehicle-lion-sunset", inBar: true },
  { id: "wildlife", label: "Wildlife", blurb: "Big Five, penguins, whales and the Kalahari.", image: "elephant-waterhole", inBar: true },
  { id: "honeymoon", label: "Honeymoon", blurb: "Cape Town, Winelands and a lodge for two.", image: "lodge-pool", inBar: true },
  { id: "family", label: "Family", blurb: "Manageable days, malaria-aware choices, beaches and wildlife.", image: "boulders-penguins", inBar: true },
  { id: "luxury", label: "Luxury", blurb: "Private safaris, estate stays and seamless transfers.", image: "lodge-suite", inBar: true },
  { id: "adventure", label: "Adventure", blurb: "Hiking, canyons, mountains and wild coastlines.", image: "drakensberg-hiker", inBar: true },
  { id: "beach", label: "Beach", blurb: "Atlantic coves, Indian Ocean warmth and Garden Route bays.", image: "camps-bay-beach", inBar: true },
  { id: "nature", label: "Nature", blurb: "Forests, lagoons, escarpments and fynbos.", image: "wilderness-lake", inBar: true },
  { id: "culture", label: "Culture", blurb: "Heritage, history, food and city neighbourhoods.", image: "bo-kaap", inBar: true },
  { id: "road-trip", label: "Road Trip", blurb: "Self-drive or chauffeured, at your pace.", image: "garden-lagoon", inBar: true },
  { id: "city-tour", label: "City Tours", blurb: "Cape Town, Johannesburg, Pretoria and Durban.", image: "joburg-golden", inBar: true },
  { id: "food-wine", label: "Food & Wine", blurb: "Estates, tastings and Cape cuisine.", image: "wine-glasses", inBar: true },
  { id: "photography", label: "Photography", blurb: "Wildlife, light and landscapes.", image: "leopard-tree", inBar: true },
  { id: "senior-friendly", label: "Senior-Friendly", blurb: "Gentle pacing, comfortable transfers and fewer hotel changes.", image: "cable-car" },
  { id: "private", label: "Private Tours", blurb: "Your own guide, vehicle and schedule.", image: "vehicle-sunset" },
  { id: "group", label: "Group Tours", blurb: "Shared departures and group safaris where available.", image: "safari-vehicle" },
];

export const styleById = (id: string) => saStyles.find((s) => s.id === id);
export const barStyles = saStyles.filter((s) => s.inBar);

export const provinces: { id: SouthAfricaRegion; name: string }[] = [
  { id: "western-cape", name: "Western Cape" },
  { id: "gauteng", name: "Gauteng" },
  { id: "mpumalanga", name: "Mpumalanga & Limpopo" },
  { id: "north-west", name: "North West" },
  { id: "kwazulu-natal", name: "KwaZulu-Natal" },
  { id: "eastern-cape", name: "Eastern Cape" },
  { id: "northern-cape", name: "Northern Cape" },
  { id: "free-state", name: "Free State" },
];

export const provinceName = (id: SouthAfricaRegion) => provinces.find((p) => p.id === id)?.name ?? (id === "limpopo" ? "Limpopo" : id);
