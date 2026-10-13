import { anchors, enquiryHref } from "./content";
import { IMAGES, type Img } from "./images";

/**
 * Journeys and suggested itineraries.
 *
 * Karvaahh has no published Northeast India package, so none of these are
 * fixed departures: they carry no price, duration, hotel, inclusion or
 * schedule. Each card says so and leads to a pre-filled enquiry. Add a real
 * package here only once its own page exists, reading its facts from that
 * page's data (see components/packages/north-india/data/packages.ts).
 */

export type Journey = {
  id: string;
  title: string;
  states: string[];
  image: Img;
  places: string[];
  highlights: string[];
  /** Suggested route in "Suggested Travel Itineraries", when there is one. */
  routeId?: string;
  enquire: { label: string; href: string };
};

const enquire = (destination: string, type?: Parameters<typeof enquiryHref>[1]) => ({
  label: "Enquire Now",
  href: enquiryHref(destination, type),
});

export const journeys: Journey[] = [
  {
    id: "meghalaya-nature",
    title: "Meghalaya Nature Tour",
    states: ["Meghalaya"],
    image: IMAGES.sohra,
    places: ["Shillong", "Sohra", "Nongriat", "Mawlynnong", "Dawki"],
    highlights: ["Waterfalls, gorges and caves around Sohra", "Living root bridges with a local guide", "Umngot River boating when conditions permit"],
    routeId: "meghalaya",
    enquire: enquire("Meghalaya nature tour"),
  },
  {
    id: "assam-wildlife-tea",
    title: "Assam Wildlife and Tea Garden Tour",
    states: ["Assam"],
    image: IMAGES.kaziranga,
    places: ["Guwahati", "Kaziranga", "Jorhat", "Majuli"],
    highlights: ["Safaris in Kaziranga in season", "Tea country of Upper Assam", "Ferry to Majuli's satras"],
    routeId: "assam",
    enquire: enquire("Assam wildlife & tea garden tour"),
  },
  {
    id: "arunachal-mountains",
    title: "Arunachal Pradesh Mountain Adventure",
    states: ["Assam", "Arunachal Pradesh"],
    image: IMAGES.tawang,
    places: ["Bhalukpong", "Dirang", "Sela Pass", "Tawang"],
    highlights: ["The high road over Sela Pass", "Tawang Monastery", "Mountain valleys and villages"],
    routeId: "arunachal",
    enquire: enquire("Arunachal Pradesh / Tawang mountain tour", "adventure-trekking"),
  },
  {
    id: "sikkim-himalaya",
    title: "Sikkim Himalayan Holiday",
    states: ["Sikkim"],
    image: IMAGES.sikkim,
    places: ["Gangtok", "Tsomgo Lake", "Pelling", "North Sikkim"],
    highlights: ["Rumtek and Pemayangtse monasteries", "Kanchenjunga views from Pelling", "High lakes and valleys, permits allowing"],
    routeId: "sikkim",
    enquire: enquire("Sikkim Himalayan holiday"),
  },
  {
    id: "nagaland-culture",
    title: "Nagaland Cultural Journey",
    states: ["Nagaland"],
    image: IMAGES.kohima,
    places: ["Dimapur", "Kohima", "Kisama", "Khonoma"],
    highlights: ["Kohima War Cemetery", "Village visits with local hosts", "Hornbill Festival season in December"],
    enquire: enquire("Nagaland cultural journey"),
  },
  {
    id: "manipur-lake",
    title: "Manipur Lake and Heritage Tour",
    states: ["Manipur"],
    image: IMAGES.loktak,
    places: ["Imphal", "Loktak Lake", "Keibul Lamjao"],
    highlights: ["Phumdis of Loktak Lake", "The floating national park", "Ima Keithel and Kangla in Imphal"],
    enquire: enquire("Manipur lake & heritage tour"),
  },
  {
    id: "tripura-heritage",
    title: "Tripura Historical Tour",
    states: ["Tripura"],
    image: IMAGES.tripura,
    places: ["Agartala", "Neermahal", "Udaipur", "Unakoti"],
    highlights: ["Ujjayanta Palace museum", "Neermahal water palace", "Unakoti's rock carvings"],
    enquire: enquire("Tripura historical tour"),
  },
  {
    id: "multi-state",
    title: "Multi-State Northeast India Circuit",
    states: ["Your choice of 2–3 states"],
    image: IMAGES.closing,
    places: ["Assam", "Meghalaya", "Arunachal Pradesh", "Sikkim"],
    highlights: ["Combine states with natural connections", "Routes paced for long mountain drives", "Permits planned in advance"],
    routeId: "custom",
    enquire: enquire("Multi-state Northeast India circuit", "customized"),
  },
];

/** Quick tailor-made requests on the custom-trip card. */
export const customTrips = [
  { label: "Family holiday in Meghalaya", href: enquiryHref("Meghalaya family holiday", "family") },
  { label: "Honeymoon in Sikkim or Shillong", href: enquiryHref("Northeast India honeymoon", "honeymoon") },
  { label: "Hornbill Festival trip", href: enquiryHref("Hornbill Festival, Nagaland") },
] as const;

/* ------------------------------------------------------------------ */
/* Suggested itineraries                                               */
/* ------------------------------------------------------------------ */

export type Itinerary = {
  id: string;
  title: string;
  /** Suggested order of stops; not a day-by-day schedule. */
  route: string[];
  summary: string;
  bestFor: string;
  link: { label: string; href: string };
};

export const itineraries: Itinerary[] = [
  {
    id: "meghalaya",
    title: "Meghalaya Waterfalls and Living Root Bridges",
    route: ["Guwahati", "Shillong", "Sohra", "Nongriat", "Mawlynnong", "Dawki", "Shillong"],
    summary: "Up to the plateau via Umiam Lake, then Sohra's falls and caves, the root-bridge walk, and the villages and river of the border country.",
    bestFor: "Nature lovers and active travellers",
    link: { label: "Tailor this route", href: enquiryHref("Meghalaya waterfalls & root bridges route") },
  },
  {
    id: "assam",
    title: "Assam Wildlife and River Landscapes",
    route: ["Guwahati", "Kaziranga", "Jorhat", "Majuli", "Jorhat"],
    summary: "Kaziranga's grasslands in safari season, the tea estates around Jorhat, and a ferry crossing to the river island of Majuli.",
    bestFor: "Wildlife, culture and slow travel",
    link: { label: "Tailor this route", href: enquiryHref("Assam wildlife & river route") },
  },
  {
    id: "arunachal",
    title: "Arunachal Pradesh Himalayan Journey",
    route: ["Guwahati", "Bhalukpong", "Dirang", "Sela Pass", "Tawang"],
    summary: "A long mountain drive from the Assam plains through Dirang and over Sela Pass to Tawang. Permits and road conditions decide the timing.",
    bestFor: "Mountain lovers comfortable with long drives",
    link: { label: "Tailor this route", href: enquiryHref("Arunachal Pradesh / Tawang route", "adventure-trekking") },
  },
  {
    id: "sikkim",
    title: "Sikkim Monasteries and Mountain Views",
    route: ["Bagdogra / NJP", "Gangtok", "Tsomgo Lake", "Pelling"],
    summary: "Gangtok's monasteries and markets, a permit-based excursion to Tsomgo Lake, then Kanchenjunga views and Pemayangtse at Pelling.",
    bestFor: "Families, couples and first-time Himalaya visitors",
    link: { label: "Tailor this route", href: enquiryHref("Sikkim monasteries & mountain route") },
  },
  {
    id: "assam-meghalaya",
    title: "Assam and Meghalaya Discovery",
    route: ["Guwahati", "Shillong", "Sohra", "Kaziranga"],
    summary: "The classic first trip to the region: the Meghalaya plateau's hills and waterfalls, followed by wildlife in Kaziranga.",
    bestFor: "First-time visitors to the Northeast",
    link: { label: "Tailor this route", href: enquiryHref("Assam & Meghalaya discovery route") },
  },
  {
    id: "custom",
    title: "Customized Multi-State Northeast Circuit",
    route: ["Choose 2–3 states", "Connect by road or air", "Pace for the mountains"],
    summary: "Tell us which states interest you and we'll suggest a realistic combination, allowing for long mountain drives, permits and weather.",
    bestFor: "Travellers with more time",
    link: { label: "Plan your circuit", href: enquiryHref("Customized multi-state Northeast circuit", "customized") },
  },
];

/** Element id of a suggested route, so journey cards can link straight to it. */
export const routeAnchor = (id: string) => `${anchors.itineraries}-${id}`;
