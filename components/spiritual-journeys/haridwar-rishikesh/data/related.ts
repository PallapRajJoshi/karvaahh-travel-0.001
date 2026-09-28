import type { RelatedJourney } from "./types";

const R = "/images/spiritual-journeys/related";

/**
 * Only entries with live: true render. The 12 Jyotirlinga route is confirmed by the brief;
 * every other href is the expected slug — verify the route exists, then set live: true.
 */
export const RELATED_JOURNEYS: RelatedJourney[] = [
  {
    id: "12-jyotirlinga",
    title: "12 Jyotirlinga Yatra",
    href: "/spiritual-journeys/12-jyotirlinga-yatra",
    description: "The twelve sacred shrines of Lord Shiva across India, planned as one journey or in stages.",
    image: { src: `${R}/12-jyotirlinga-yatra.webp`, alt: "A Jyotirlinga temple shikhara against the evening sky" },
    live: true,
  },
  {
    id: "char-dham",
    title: "Char Dham Yatra",
    href: "/spiritual-journeys/char-dham-yatra",
    description: "Yamunotri, Gangotri, Kedarnath and Badrinath in the Garhwal Himalaya — the journey beyond Haridwar.",
    image: { src: `${R}/char-dham-yatra.webp`, alt: "Kedarnath temple below snow peaks in the Garhwal Himalaya" },
    live: false,
  },
  {
    id: "kedarnath",
    title: "Kedarnath Yatra",
    href: "/spiritual-journeys/kedarnath-yatra",
    description: "The high-mountain Jyotirlinga of Lord Shiva at the head of the Mandakini valley.",
    image: { src: `${R}/kedarnath-yatra.webp`, alt: "Kedarnath temple with the Himalaya behind" },
    live: false,
  },
  {
    id: "badrinath",
    title: "Badrinath Yatra",
    href: "/spiritual-journeys/badrinath-yatra",
    description: "The shrine of Lord Vishnu on the banks of the Alaknanda.",
    image: { src: `${R}/badrinath-yatra.webp`, alt: "The painted facade of Badrinath temple by the Alaknanda river" },
    live: false,
  },
  {
    id: "panch-kedar",
    title: "Panch Kedar Yatra",
    href: "/spiritual-journeys/panch-kedar-yatra",
    description: "Five Shiva temples of the Garhwal hills, joined by mountain trails.",
    image: { src: `${R}/panch-kedar-yatra.webp`, alt: "A stone Shiva temple on a high Garhwal meadow" },
    live: false,
  },
  {
    id: "panch-kailash",
    title: "Panch Kailash Yatra",
    href: "/spiritual-journeys/panch-kailash-yatra",
    description: "The five sacred Kailash peaks of the Himalaya.",
    image: { src: `${R}/panch-kailash-yatra.webp`, alt: "A snow peak revered as one of the Panch Kailash" },
    live: false,
  },
  {
    id: "muktinath",
    title: "Muktinath Yatra",
    href: "/spiritual-journeys/muktinath-yatra",
    description: "The Himalayan temple in Nepal's Mustang, sacred to Hindus and Buddhists.",
    image: { src: `${R}/muktinath-yatra.webp`, alt: "Muktinath temple in Mustang with prayer flags and bare mountains" },
    live: false,
  },
  {
    id: "janakpur",
    title: "Janakpur Spiritual Journey",
    href: "/spiritual-journeys/janakpur-spiritual-journey",
    description: "The birthplace of Sita and the Janaki Mandir in Nepal's Madhesh plains.",
    image: { src: `${R}/janakpur-spiritual-journey.webp`, alt: "The white domes of Janaki Mandir in Janakpur" },
    live: false,
  },
];
