// data/south-africa/collections.ts
// Honeymoon, family, luxury and adventure collections.

import type { SAImageId } from "./images";
import type { FeatureItem } from "./types";

export interface SACollection {
  id: "honeymoon" | "family" | "luxury" | "adventure";
  eyebrow: string;
  title: string;
  lede: string;
  image: SAImageId;
  destinations: string[];
  experiences: FeatureItem[];
  packageIds: string[];
  tiers?: { name: string; text: string }[];
  note?: string;
  cta: string;
  tone: "dark" | "light";
}

export const honeymoonCollection: SACollection = {
  id: "honeymoon", eyebrow: "South Africa honeymoon", title: "Mountains, Vineyards and the Bush, for Two",
  lede: "Ocean sunsets in Cape Town, a Winelands estate, a coastal drive and a lodge deck overlooking the bush. Paced for two and planned around you.",
  image: "lodge-pool",
  destinations: ["Cape Town", "Winelands", "Garden Route", "Kruger", "Sabi Sand", "Hermanus", "Durban"],
  experiences: [
    { id: "lodges", title: "Luxury lodges", text: "Private decks and plunge pools where offered.", icon: "hotel" },
    { id: "transfers", title: "Private transfers", text: "Door-to-door, no shared shuttles.", icon: "car" },
    { id: "drives", title: "Scenic drives", text: "Chapman's Peak and the coast road.", icon: "map" },
    { id: "sunset", title: "Sunset experiences", text: "Sundowners and Atlantic sunsets.", icon: "sun" },
    { id: "wine", title: "Wine estates", text: "Tastings and estate stays.", icon: "glass" },
    { id: "dining", title: "Romantic dining", text: "Where lodges and restaurants offer it.", icon: "utensils" },
    { id: "safari", title: "Safari", text: "Possible Big Five encounters together.", icon: "binoculars" },
    { id: "beach", title: "Beach stays", text: "Camps Bay, Plettenberg Bay or Durban.", icon: "palm" },
  ],
  packageIds: ["honeymoon-ct-safari", "honeymoon-ct-wine-safari", "honeymoon-gr-safari", "luxury-honeymoon"],
  cta: "Plan Our Honeymoon", tone: "dark",
};

export const familyCollection: SACollection = {
  id: "family", eyebrow: "South Africa family holidays", title: "Big Adventures, Manageable Days",
  lede: "Penguins on the beach, elephants at a waterhole and resort pools. We plan short transfers, family rooms and, where you prefer, malaria-free safari options.",
  image: "boulders-penguins",
  destinations: ["Cape Town", "Garden Route", "Sun City", "Pilanesberg", "Kruger", "Durban", "Addo"],
  experiences: [
    { id: "rooms", title: "Family-friendly stays", text: "Family rooms, apartments and child-friendly lodges.", icon: "hotel" },
    { id: "pace", title: "Manageable itineraries", text: "Fewer hotel changes and short drives.", icon: "map" },
    { id: "wildlife", title: "Wildlife", text: "Malaria-free Pilanesberg and Addo, or Kruger with medical advice.", icon: "binoculars" },
    { id: "beaches", title: "Beaches", text: "Sheltered beaches and tidal pools.", icon: "palm" },
    { id: "adventure", title: "Adventure", text: "Age-appropriate activities where offered.", icon: "compass" },
    { id: "learn", title: "Educational experiences", text: "Wildlife, history and conservation stories.", icon: "sparkles" },
  ],
  packageIds: ["family-safari", "ct-gr-family", "ct-safari-family", "family-highlights"],
  note: "Many safari lodges set minimum ages for game drives; we check each lodge's policy for your children's ages.",
  cta: "Plan a Family Holiday", tone: "light",
};

export const luxuryCollection: SACollection = {
  id: "luxury", eyebrow: "South Africa luxury travel", title: "South Africa, Elevated",
  lede: "Atlantic seaboard suites, Winelands estates, private-reserve lodges and private chauffeurs between them. Specific properties are proposed to match your style and confirmed on availability.",
  image: "lodge-suite",
  destinations: ["Cape Town", "Winelands", "Sabi Sand", "Kruger", "Garden Route"],
  experiences: [
    { id: "ct", title: "Cape Town luxury hotels", text: "Mountain- and sea-view suites.", icon: "hotel" },
    { id: "estates", title: "Winelands estates", text: "Stays among the vines.", icon: "glass" },
    { id: "sabi", title: "Sabi Sand lodges", text: "Private-reserve safari.", icon: "binoculars" },
    { id: "kruger", title: "Kruger luxury lodges", text: "Private concessions within the greater Kruger.", icon: "trees" },
    { id: "private", title: "Private safari", text: "Your own vehicle and guide, where offered.", icon: "shield" },
    { id: "transfers", title: "Luxury transfers", text: "Chauffeurs and charter flights where available.", icon: "plane" },
    { id: "dining", title: "Premium dining", text: "Chef-led and estate dining.", icon: "utensils" },
    { id: "garden", title: "Garden Route luxury", text: "Boutique coastal hideaways.", icon: "waves" },
  ],
  packageIds: ["luxury-safari", "ct-sabi", "luxury-wine", "ct-luxury"],
  tiers: [
    { name: "4-Star", text: "Comfortable, well-located hotels." },
    { name: "5-Star", text: "Full-service luxury hotels." },
    { name: "Boutique", text: "Characterful guesthouses and estates." },
    { name: "Luxury Lodge", text: "High-end safari lodges with game drives." },
    { name: "Ultra Luxury", text: "The most exclusive suites and lodges." },
  ],
  note: "Lodge and hotel facilities vary by property and are confirmed per booking; none are assumed.",
  cta: "Design a Luxury Journey", tone: "dark",
};

export const adventureCollection: SACollection = {
  id: "adventure", eyebrow: "South Africa adventure", title: "Wild Roads and High Places",
  lede: "Safari, canyon viewpoints, mountain hikes and coastal trails. We include activities only when they are configured, and match them to your fitness and appetite for adventure.",
  image: "drakensberg-hiker",
  destinations: ["Drakensberg", "Blyde River Canyon", "Garden Route", "Kgalagadi", "Kruger"],
  experiences: [
    { id: "safari", title: "Safari", text: "Game drives and walks where permitted.", icon: "binoculars" },
    { id: "hike", title: "Hiking", text: "Drakensberg and Garden Route trails.", icon: "compass" },
    { id: "mountain", title: "Mountain experiences", text: "Escarpments and high passes.", icon: "mountain" },
    { id: "drives", title: "Scenic drives", text: "Passes, canyons and coast roads.", icon: "car" },
    { id: "coast", title: "Coastal activities", text: "Kayaking and coastal walks where offered.", icon: "waves" },
    { id: "photo", title: "Wildlife photography", text: "Long lenses, long days.", icon: "camera" },
  ],
  packageIds: ["drakensberg-adventure", "garden-road-trip", "northern-cape", "joburg-panorama-kruger"],
  cta: "Plan an Adventure", tone: "light",
};
