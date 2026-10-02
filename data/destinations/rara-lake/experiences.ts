import type { Experience, TrekSegment } from "./types";

export const experiences: Experience[] = [
  {
    id: "lakeside-walking",
    title: "Lakeside Walking & Nature Trails",
    description: "Easy trails tracing the shoreline through open forest.",
    image: { src: "/images/destinations/rara-lake/exp-lakeside-walking.jpg", alt: "Walking trail along Rara Lake" },
  },
  {
    id: "boating",
    title: "Boating",
    description: "Traditional boating on the lake, where currently permitted.",
    image: { src: "/images/destinations/rara-lake/exp-boating.jpg", alt: "Boat on Rara Lake" },
    availabilityNote: "Subject to current local operating rules and availability",
  },
  {
    id: "photography",
    title: "Sunrise & Sunset Photography",
    description: "Still water and shifting light make Rara a rewarding subject at either end of the day.",
    image: { src: "/images/destinations/rara-lake/exp-photography.jpg", alt: "Sunrise reflected on Rara Lake" },
  },
  {
    id: "birdwatching",
    title: "Birdwatching & Wildlife Observation",
    description: "Native birdlife across the lake margins and surrounding forest.",
    image: { src: "/images/destinations/rara-lake/exp-birdwatching.jpg", alt: "Bird near Rara Lake shoreline" },
  },
  {
    id: "murma-hike",
    title: "Hiking to Murma Top",
    description: "A climb to one of the region's signature viewpoints above the lake.",
    image: { src: "/images/destinations/rara-lake/exp-murma-hike.jpg", alt: "Hiking trail toward Murma Top" },
  },
  {
    id: "forest-exploration",
    title: "Forest Exploration",
    description: "Wander through pine and juniper landscape that defines the park.",
    image: { src: "/images/destinations/rara-lake/exp-forest.jpg", alt: "Pine and juniper forest near Rara" },
  },
  {
    id: "camping",
    title: "Camping",
    description: "Overnight under open Himalayan sky, where permitted.",
    image: { src: "/images/destinations/rara-lake/exp-camping.jpg", alt: "Campsite near Rara Lake" },
    availabilityNote: "Where permitted",
  },
  {
    id: "horse-riding",
    title: "Horse Riding",
    description: "A traditional way to cover ground in the region, where locally available.",
    image: { src: "/images/destinations/rara-lake/exp-horse-riding.jpg", alt: "Horse riding near Rara Lake" },
    availabilityNote: "Where locally available",
  },
  {
    id: "cultural-walks",
    title: "Cultural Walks & Village Visits",
    description: "Visit Murma Village and nearby settlements to see daily mountain life firsthand.",
    image: { src: "/images/destinations/rara-lake/exp-cultural-walks.jpg", alt: "Village walk near Murma" },
  },
  {
    id: "homestays",
    title: "Homestays & Local Food",
    description: "Stay with local families and share regional Karnali cuisine, where available.",
    image: { src: "/images/destinations/rara-lake/exp-homestays.jpg", alt: "Local meal at a homestay near Rara" },
    availabilityNote: "Subject to availability",
  },
];

export const trekSegments: TrekSegment[] = [
  {
    id: "lakeside-routes",
    title: "Lakeside Walking Routes",
    description: "Gentle paths that follow the shoreline through forest cover.",
    difficultyKnown: true,
    difficulty: "Easy",
  },
  {
    id: "murma-top-hike",
    title: "Murma Top Viewpoint Hike",
    description: "A climb above the lake basin to one of the region's best panoramic viewpoints.",
    difficultyKnown: true,
    difficulty: "Moderate",
  },
  {
    id: "forest-trails",
    title: "Scenic Forest Trails",
    description: "Trails winding through pine and juniper forest within the national park.",
    difficultyKnown: false,
  },
  {
    id: "village-walks",
    title: "Village-to-Village Walks",
    description: "Walking routes connecting Murma Village and other nearby settlements.",
    difficultyKnown: false,
  },
  {
    id: "cultural-extensions",
    title: "Optional Cultural Extensions",
    description: "Extended walking or road connections toward Sinja Valley or Jumla for travelers with more time.",
    difficultyKnown: false,
  },
];

export const trekkingNote =
  "Difficulty is shown only where reliable route information supports it. Trail distances, elevation gains, and durations are not stated here — confirm current route details with a local operator before your trip.";
