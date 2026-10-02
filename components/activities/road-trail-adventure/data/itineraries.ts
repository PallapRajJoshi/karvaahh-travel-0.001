import type { Itinerary } from "./types";

/**
 * SAMPLE CONCEPTS ONLY. Durations come from the brief. Stops are shown as a
 * possible flow, not as fixed days: allocating stops to days would imply travel
 * times that have not been verified. Confirm all details before presenting any
 * of these as a bookable package.
 */
export const ITINERARIES: Itinerary[] = [
  {
    id: "pokhara-jomsom-muktinath",
    title: "Pokhara, Jomsom & Muktinath Adventure",
    duration: "5 Days / 4 Nights",
    adventureType: "Scenic road journey with cultural stops",
    highlights: [
      "Explore Pokhara",
      "Travel toward Jomsom",
      "Visit Marpha and surrounding areas",
      "Explore Muktinath",
      "Return journey through the mountain region",
    ],
    image: {
      file: "itinerary-jomsom-muktinath.jpg",
      alt: "Muktinath and the Kali Gandaki region in the Himalaya",
      label: "Kali Gandaki / Muktinath scene.",
    },
    prefill: {
      destination: "Muktinath & Jomsom",
      adventureType: "Scenic Road Trip",
    },
  },
  {
    id: "upper-mustang-overland",
    title: "Upper Mustang Overland Expedition",
    duration: "7 Days / 6 Nights",
    adventureType: "Overland 4x4 journey",
    highlights: [
      "Journey toward the Mustang region",
      "Explore the distinctive landscapes of Upper Mustang",
      "Discover traditional settlements",
      "Explore Lo Manthang, subject to access and permit requirements",
    ],
    image: {
      file: "itinerary-upper-mustang.jpg",
      alt: "The arid landscape and traditional settlement architecture of Upper Mustang",
      label: "Upper Mustang terrain or Lo Manthang.",
    },
    prefill: {
      destination: "Upper Mustang",
      adventureType: "4x4 Off-Road Adventure",
    },
  },
  {
    id: "annapurna-road-trail",
    title: "Annapurna Road & Trail Adventure",
    duration: "6 Days / 5 Nights",
    adventureType: "Road journey combined with walking",
    highlights: [
      "Explore Pokhara",
      "Travel toward the Annapurna foothills",
      "Visit Ghandruk",
      "Enjoy selected walking trails and village exploration",
      "Return to Pokhara",
    ],
    image: {
      file: "itinerary-annapurna.jpg",
      alt: "Ghandruk village and the Annapurna foothills",
      label: "Ghandruk / Annapurna foothills.",
    },
    prefill: {
      destination: "Ghandruk",
      adventureType: "Customized Adventure",
    },
  },
];
