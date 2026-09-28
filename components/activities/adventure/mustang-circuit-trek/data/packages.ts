import { IMG } from "./config";
import type { TrekPackage, TravelStyle } from "./types";

/**
 * Mustang trips.
 * IMPORTANT: duration, difficulty and price stay null until confirmed by operations.
 * Set `price` only with `priceVerifiedOn`. Set `href` only when a package page exists.
 */
export const packages: TrekPackage[] = [
  {
    id: "lower-mustang-circuit-trek",
    title: "Lower Mustang Circuit Trek",
    style: "trek",
    category: "Trekking itinerary",
    description:
      "A shorter walking loop through the villages of the Kali Gandaki valley and the sacred site of Muktinath — no restricted-area permit needed.",
    route: ["Jomsom", "Marpha", "Kagbeni", "Muktinath"],
    image: { src: `${IMG}/packages/lower-mustang-trail-marpha.jpg`, alt: "A trail leading into Marpha between apple orchards" },
    duration: null,
    difficulty: null,
    price: null,
  },
  {
    id: "upper-mustang-circuit-trek",
    title: "Upper Mustang Circuit Trek",
    style: "trek",
    category: "Trekking itinerary",
    description:
      "The full journey north beyond Kagbeni to Lo Manthang through red-cliff country, with time for monasteries and village life. Restricted-area permit required.",
    route: ["Jomsom", "Kagbeni", "Ghami", "Tsarang", "Lo Manthang"],
    image: { src: `${IMG}/packages/upper-mustang-trekkers-ridge.jpg`, alt: "Trekkers crossing a bare ridge in Upper Mustang" },
    duration: null,
    difficulty: null,
    price: null,
  },
  {
    id: "jomsom-muktinath-trek",
    title: "Jomsom–Muktinath Trek",
    style: "trek",
    category: "Trekking itinerary",
    description:
      "A focused walk from Jomsom to Muktinath via Kagbeni — well suited to pilgrims and travellers with limited days.",
    route: ["Jomsom", "Kagbeni", "Muktinath"],
    image: { src: `${IMG}/packages/jomsom-muktinath-trail.jpg`, alt: "A trail climbing towards Muktinath with snow peaks behind" },
    duration: null,
    difficulty: null,
    price: null,
  },
  {
    id: "mustang-cultural-heritage-tour",
    title: "Mustang Cultural & Heritage Tour",
    style: "road",
    category: "Road-based sightseeing tour",
    description:
      "Jeep travel with short walks for travellers who want Mustang’s villages, monasteries and Muktinath without multi-day trekking.",
    route: ["Jomsom", "Marpha", "Kagbeni", "Muktinath"],
    image: { src: `${IMG}/packages/mustang-jeep-road-valley.jpg`, alt: "A jeep on a gravel road through the Mustang valley" },
    duration: null,
    difficulty: null,
    price: null,
  },
  {
    id: "lo-manthang-chhosar-exploration",
    title: "Lo Manthang & Chhosar Exploration",
    style: "mixed",
    category: "Road + day hikes",
    description:
      "Reach Upper Mustang by road, then explore Lo Manthang, the Chhosar caves and nearby monasteries on foot or horseback. Restricted-area permit required.",
    route: ["Jomsom", "Lo Manthang", "Chhosar"],
    image: { src: `${IMG}/packages/lo-manthang-chhosar-valley.jpg`, alt: "The valley north of Lo Manthang towards Chhosar" },
    duration: null,
    difficulty: null,
    price: null,
  },
  {
    id: "customized-mustang-circuit",
    title: "Customized Mustang Circuit Adventure",
    style: "custom",
    category: "Tailor-made",
    description:
      "Tell us your dates, pace and interests — trekking, pilgrimage, photography or festivals — and we’ll shape a route around them.",
    route: ["Your pace", "Your route", "Your dates"],
    image: { src: `${IMG}/packages/custom-mustang-planning.jpg`, alt: "A trekker looking out over the Mustang valley from a viewpoint" },
    duration: null,
    difficulty: null,
    price: null,
  },
];

/** Badge labels for travel style — keeps trekking visibly distinct from road tours. */
export const styleLabels: Record<TravelStyle, string> = {
  trek: "Trek",
  road: "Road tour",
  mixed: "Road + hiking",
  custom: "Custom",
};
