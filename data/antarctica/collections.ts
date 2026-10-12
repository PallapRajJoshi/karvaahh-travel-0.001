// data/antarctica/collections.ts
// Honeymoon, family/educational and luxury collections. `expeditionIds`
// pull cards from expeditions.ts; extension ids from extensions.ts render
// only when that extension is active.

import type { AntarcticaImageId } from "./images";
import type { ExperienceItem } from "./types";

export interface PolarCollection {
  id: "honeymoon" | "family" | "luxury";
  eyebrow: string;
  title: string;
  lede: string;
  image: AntarcticaImageId;
  experiences: ExperienceItem[];
  expeditionIds: string[];
  extensionIds?: string[];
  /** Hotel / service tiers (luxury only). */
  tiers?: { name: string; text: string }[];
  note?: string;
  cta: string;
}

export const honeymoonCollection: PolarCollection = {
  id: "honeymoon",
  eyebrow: "Antarctica honeymoon",
  title: "A Honeymoon Beyond the Edge of the Map",
  lede: "A once-in-a-lifetime honeymoon for couples seeking something truly extraordinary: ice-filled bays at midnight light, a balcony of your own, and a journey you will talk about for the rest of your lives.",
  image: "alpenglow",
  experiences: [
    { id: "cabins", title: "Luxury expedition cabins", text: "Balcony and suite categories, where available on your vessel.", icon: "hotel" },
    { id: "cruising", title: "Scenic cruising", text: "Quiet hours on deck among icebergs.", icon: "ship" },
    { id: "moments", title: "Private moments", text: "Long summer light and a world without crowds.", icon: "heart" },
    { id: "wildlife", title: "Wildlife observation", text: "Penguins, seals and possible whales, together.", icon: "binoculars" },
    { id: "ice", title: "Iceberg landscapes", text: "Blue ice, still water, towering peaks.", icon: "snowflake" },
    { id: "dining", title: "Premium dining", text: "On premium vessels, where offered.", icon: "utensils" },
    { id: "photo", title: "Photography", text: "Pictures no one else's wedding album has.", icon: "camera" },
    { id: "stays", title: "Pre/post stays", text: "Buenos Aires or Patagonia before or after, if you wish.", icon: "sparkles" },
  ],
  expeditionIds: ["honeymoon", "luxury"],
  extensionIds: ["buenos-aires", "patagonia"],
  cta: "Plan Our Antarctica Honeymoon",
};

export const familyCollection: PolarCollection = {
  id: "family",
  eyebrow: "Family & educational expeditions",
  title: "A Classroom Made of Ice",
  lede: "For curious families and lifelong learners, Antarctica turns science into something you can see. Many expedition teams include naturalists and lecturers; we look for voyages that suit your family's ages and interests.",
  image: "penguins-snow",
  experiences: [
    { id: "marine", title: "Marine biology", text: "Krill, whales, seals and the food web that links them.", icon: "fish" },
    { id: "ecosystems", title: "Polar ecosystems", text: "How life survives at the edge of the ice.", icon: "snowflake" },
    { id: "wildlife", title: "Wildlife", text: "Penguin colonies and seabirds, observed responsibly.", icon: "binoculars" },
    { id: "climate", title: "Climate & glaciers", text: "Ice, glaciers and why they matter to the planet.", icon: "mountain" },
    { id: "geography", title: "Geography", text: "Currents, latitude and the Antarctic Convergence.", icon: "map" },
    { id: "history", title: "Exploration history", text: "The stories of the explorers who came first.", icon: "book" },
    { id: "photo", title: "Photography", text: "A new way of seeing for every age.", icon: "camera" },
  ],
  expeditionIds: ["discovery-11n", "wildlife"],
  note: "Age limits, children's programmes and lecture content are set by each operator. We only describe educational content that your chosen voyage actually offers.",
  cta: "Plan a Family Expedition",
};

export const luxuryCollection: PolarCollection = {
  id: "luxury",
  eyebrow: "Luxury Antarctica",
  title: "The Polar Journey, Elevated",
  lede: "Premium expedition vessels, suite cabins and every connection handled for you, so the only thing you think about is the view.",
  image: "golden-peaks",
  experiences: [
    { id: "vessels", title: "Luxury expedition vessels", text: "Premium ships with high guide-to-guest ratios, where offered.", icon: "ship" },
    { id: "suites", title: "Suite cabins", text: "Spacious suites, many with balconies.", icon: "hotel" },
    { id: "transfers", title: "Private transfers", text: "Airport to hotel to pier, arranged privately.", icon: "compass" },
    { id: "stays", title: "Premium pre/post stays", text: "Chosen hotels in Buenos Aires, Ushuaia or Santiago.", icon: "sparkles" },
    { id: "dining", title: "Fine dining", text: "On vessels that offer it.", icon: "utensils" },
    { id: "services", title: "Premium expedition services", text: "Enhanced inclusions vary by operator.", icon: "shield" },
    { id: "air", title: "Air-cruise options", text: "Fly over the Drake, where available.", icon: "plane" },
  ],
  expeditionIds: ["luxury", "air-cruise", "grand"],
  tiers: [
    { name: "Premium", text: "Superior or balcony cabins and well-located 4–5★ stays before and after." },
    { name: "Luxury", text: "Suite cabins, private transfers and 5★ hotels." },
    { name: "Ultra Luxury", text: "Top suites on premium vessels, private touring and handpicked hotels." },
  ],
  note: "Operator-specific features such as butler service, inclusions and onboard facilities are confirmed per vessel.",
  cta: "Design a Luxury Expedition",
};
