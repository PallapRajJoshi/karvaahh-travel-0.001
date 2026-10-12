// data/australia/reef.ts
// Great Barrier Reef hero section. Activities are operator-run and weather
// dependent: nothing here promises conditions, visibility or marine life.

import type { AUImageId } from "./images";

export type ReefIcon = "snorkel" | "dive" | "glass" | "plane" | "ship" | "island";

export const reefSection = {
  id: "reef",
  eyebrow: "Great Barrier Reef",
  title: "Dive Into the Great Barrier Reef",
  intro:
    "The world's largest coral reef system stretches along the Queensland coast: coral gardens, reef fish, turtles and islands of white sand. Snorkel from a pontoon, learn to dive, fly over it, or simply stay on an island in the middle of it.",
  background: "reef-light" as AUImageId,
  gallery: ["coral-garden", "turtle", "heart-reef", "reef-fish"] as AUImageId[],
  facts: [
    { value: 2300, suffix: " km", label: "Approximate length along the Queensland coast" },
    { value: 2900, suffix: "+", label: "Individual reefs, approximately" },
    { value: 900, suffix: "+", label: "Islands, approximately" },
  ],
  gateways: [
    { destination: "cairns", text: "The main reef gateway: daily boats to the outer reef and islands." },
    { destination: "port-douglas", text: "A resort-village base for Low Isles and outer-reef trips." },
    { destination: "whitsundays", text: "Sail between islands to Whitehaven Beach and reef pontoons." },
    { destination: "hamilton-island", text: "Island resort with its own airport and reef access." },
  ],
  experiences: [
    { icon: "snorkel" as ReefIcon, title: "Snorkelling", text: "From pontoons, boats and island beaches. Flotation and guidance are usually available." },
    { icon: "dive" as ReefIcon, title: "Diving", text: "Introductory dives for beginners and dive trips for certified divers. Medical questions apply." },
    { icon: "glass" as ReefIcon, title: "Glass-bottom boats", text: "See the coral without getting wet: ideal for children, seniors and non-swimmers." },
    { icon: "plane" as ReefIcon, title: "Scenic flights", text: "Helicopter and seaplane flights over the reef and Heart Reef, where operating." },
    { icon: "ship" as ReefIcon, title: "Reef cruises", text: "Full-day outer-reef cruises with lunch, and sunset or sailing trips." },
    { icon: "island" as ReefIcon, title: "Island stays", text: "Green, Fitzroy, Hamilton and other islands, from day trips to resort stays." },
  ],
  packageIds: ["gbr-3n", "cns-reef-5n", "cns-reef-6n", "cns-daintree-6n", "whit-reef-7n", "gbr-honeymoon"],
  disclaimer:
    "Reef conditions, marine activities, weather and operator schedules can affect experiences. Visibility, sea state and marine life sightings vary daily and are never guaranteed; trips may be rescheduled or cancelled for safety.",
  responsible: [
    "Never touch, stand on or collect coral",
    "Keep a respectful distance from turtles and marine life",
    "Choose operators who follow reef-protection guidelines",
    "Wear a stinger suit in season, usually about November to May",
  ],
};
