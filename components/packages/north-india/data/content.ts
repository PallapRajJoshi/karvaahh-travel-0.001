/**
 * Copy, links and SEO for /packages/north-india.
 *
 * ⚠ Content rules (same as the other Karvaahh package pages):
 *  - No invented prices, hotels, departure dates, travel times or inclusions.
 *    Package facts are read from the source package's own data (packages.ts).
 *  - Every href points at a route that exists today. Destinations without a
 *    Karvaahh page go to /contact, which pre-fills the enquiry form from
 *    `type` + `destination` (lib/contact/prefill.ts).
 *  - Seasonal access, temple dates and permits are never guaranteed.
 */

import { contactInfo } from "@/lib/navigation-data";
import { IMAGES } from "./images";
import type { Region } from "./filters";

export const site = {
  name: "Karvaahh",
  tagline: "Live to Travel",
  url: "https://karvaahh.in",
  path: "/packages/north-india",
} as const;

export const pageUrl = `${site.url}${site.path}`;

export const links = {
  home: "/",
  packagesHub: "/packages",
  contact: "/contact",
  cancellation: "/cancellation-policy",
  charDham: "/activities/char-dham-yatra",
  charDhamRoad: "/activities/char-dham-yatra/by-road",
  charDhamHeli: "/activities/char-dham-yatra/helicopter",
  doDham: "/activities/char-dham-yatra/do-dham",
  charDhamFamily: "/activities/char-dham-yatra/family",
  kedarnath: "/activities/char-dham-yatra/kedarnath",
  badrinath: "/activities/char-dham-yatra/badrinath",
  gangotri: "/activities/char-dham-yatra/gangotri",
  yamunotri: "/activities/char-dham-yatra/yamunotri",
  haridwarRishikesh: "/spiritual-journeys/haridwar-rishikesh-yatra",
  amarnathVaishnoDevi: "/spiritual-journeys/amarnath-vaishno-devi-yatra",
  kashmirDestinations: "/spiritual-journeys/amarnath-vaishno-devi-yatra#explore-sacred-destinations",
  vaishnoDeviJourney: "/spiritual-journeys/amarnath-vaishno-devi-yatra#vaishno-devi-journey",
  jyotirlinga: "/spiritual-journeys/12-jyotirlinga-yatra",
  kashiVishwanath: "/spiritual-journeys/12-jyotirlinga-yatra#jyotirlinga-kashi-vishwanath",
  badaCharDham: "/spiritual-journeys/bada-char-dham-yatra",
  adiKailash: "/packages/india-pilgrimage/adi-kailash-om-parvat",
  lumbini: "/destinations/lumbini-province",
} as const;

type TravelType = "india-tours" | "spiritual-pilgrimage" | "family" | "honeymoon" | "adventure-trekking" | "customized";

/** Pre-filled enquiry. `destination` lands in the form's destination field. */
export function enquiryHref(destination?: string, type: TravelType = "india-tours") {
  const query = new URLSearchParams({ type });
  if (destination) query.set("destination", destination);
  return `${links.contact}?${query.toString()}`;
}

export const anchors = {
  destinations: "north-india-destinations",
  experiences: "north-india-experiences",
  packages: "north-india-packages",
  circuits: "sacred-circuits",
  plan: "plan-your-trip",
  itineraries: "suggested-itineraries",
  faq: "faq",
  cta: "start-planning",
} as const;

export const breadcrumbs: { label: string; href?: string }[] = [
  { label: "Home", href: links.home },
  { label: "Packages", href: links.packagesHub },
  // There is no India packages index page yet, so this crumb is not linked.
  { label: "India" },
  { label: "North India Tour Packages" },
];

export const hero = {
  eyebrow: "Discover the Beauty of North India",
  title: "North India Tour Packages",
  subtitle:
    "Explore the spiritual heart of India, majestic Himalayan landscapes, royal heritage, vibrant cities, and unforgettable cultural journeys with Karvaahh Travels.",
  image: IMAGES.varanasiGhats,
  primaryCta: { label: "Explore Tour Packages", href: `#${anchors.packages}` },
  secondaryCta: { label: "Discover Destinations", href: `#${anchors.destinations}` },
  facts: ["Char Dham & Himalayan shrines", "Hill stations & Kashmir valleys", "Heritage cities & sacred ghats"],
} as const;

export const headings = {
  destinations: {
    eyebrow: "Where to go",
    title: "Explore North India — From Sacred Cities to the Himalayas",
    subtitle:
      "Five regions, one journey. Filter by the kind of trip you have in mind; each card links to a Karvaahh page where one exists, or straight to a tailor-made enquiry.",
  },
  experiences: {
    eyebrow: "Travel styles",
    title: "Discover Your Kind of North India Holiday",
    subtitle: "Pilgrimage, mountains, monuments or a mix of all three. Start from the style that fits your group.",
  },
  packages: {
    eyebrow: "Karvaahh journeys",
    title: "Find Your Perfect North India Tour",
    subtitle:
      "Live Karvaahh journeys you can explore in detail today. Durations shown are the sample itineraries published on each package page.",
    note: "Prices depend on season, group size, hotel category and transport, so every package is quoted on request. Inclusions marked “as per package” are confirmed in your written quote.",
  },
  circuits: {
    eyebrow: "Pilgrimage routes",
    title: "Journey Through North India's Sacred Destinations",
    subtitle:
      "Bookable yatras alongside route ideas we tailor on request. Each is labelled so you know which is which.",
  },
  plan: {
    eyebrow: "Before you go",
    title: "North India Travel Planning Guide",
    subtitle: "From the plains to high Himalayan valleys, North India changes a lot with altitude and season. Here is what to plan for.",
  },
  itineraries: {
    eyebrow: "Route ideas",
    title: "Suggested Itinerary Collections",
    subtitle:
      "Sample day-by-day routes from our published yatras, plus suggested regional routes we build around your dates. Suggested routes are not fixed departures.",
  },
  faq: {
    eyebrow: "Good to know",
    title: "North India Tour FAQs",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Regions                                                             */
/* ------------------------------------------------------------------ */

export const regions: Region[] = [
  {
    id: "uttarakhand",
    name: "Uttarakhand",
    theme: "Himalayan Spiritual Journeys",
    intro: "Char Dham shrines, Ganga riverfronts, yoga traditions and cool hill stations in the Garhwal and Kumaon Himalaya.",
  },
  {
    id: "himachal",
    name: "Himachal Pradesh",
    theme: "Mountain Escapes",
    intro: "Old hill towns, Tibetan monasteries, river valleys and high desert, from Shimla to Spiti.",
  },
  {
    id: "kashmir",
    name: "Jammu & Kashmir",
    theme: "Lakes and Mountain Landscapes",
    intro: "Dal Lake, alpine meadows and the pilgrim paths to Vaishno Devi and Amarnath.",
  },
  {
    id: "uttar-pradesh",
    name: "Uttar Pradesh",
    theme: "Sacred Cities and Heritage",
    intro: "The ghats of Varanasi, the Krishna towns of Braj, Ayodhya, the Sangam and the Taj Mahal.",
  },
  {
    id: "golden-triangle",
    name: "Rajasthan & the Golden Triangle",
    theme: "Optional regional extensions",
    intro: "Delhi, Jaipur and Amritsar, added to a North India itinerary on request. They are not part of every tour.",
  },
];

/* ------------------------------------------------------------------ */
/* Travel experiences                                                  */
/* ------------------------------------------------------------------ */

export type Experience = {
  id: string;
  title: string;
  text: string;
  places: string[];
  image: (typeof IMAGES)[keyof typeof IMAGES];
  link: { label: string; href: string };
  size: "wide" | "tall" | "base";
};

export const experiences: Experience[] = [
  {
    id: "spiritual",
    title: "Spiritual & Pilgrimage Tours",
    text: "Explore sacred temples, pilgrimage towns, Himalayan shrines and important religious destinations, planned around darshan timings and seasonal access.",
    places: ["Char Dham", "Haridwar", "Varanasi", "Vaishno Devi"],
    image: IMAGES.varanasiAarti,
    link: { label: "See sacred circuits", href: `#${anchors.circuits}` },
    size: "wide",
  },
  {
    id: "hills",
    title: "Himalayan Hill Station Holidays",
    text: "Discover scenic mountain towns, panoramic viewpoints, pleasant walks and peaceful nature escapes.",
    places: ["Shimla", "Manali", "Mussoorie", "Nainital"],
    image: IMAGES.himalayanHills,
    link: { label: "Plan a hill holiday", href: enquiryHref("Himalayan hill station holiday") },
    size: "tall",
  },
  {
    id: "adventure",
    title: "Adventure & Outdoor Experiences",
    text: "Trekking, hiking, rafting and skiing where available and in season. We match activities to your fitness and the time of year.",
    places: ["Rishikesh", "Auli", "Kasol", "Spiti"],
    image: IMAGES.auli,
    link: { label: "Ask about activities", href: enquiryHref("North India adventure", "adventure-trekking") },
    size: "base",
  },
  {
    id: "heritage",
    title: "Royal Heritage & Historic Cities",
    text: "Explore grand monuments, historic forts, traditional architecture and vibrant cultural districts.",
    places: ["Delhi", "Agra", "Jaipur", "Varanasi"],
    image: IMAGES.redFort,
    link: { label: "Plan a heritage tour", href: enquiryHref("North India heritage tour") },
    size: "base",
  },
  {
    id: "family",
    title: "Family Holidays",
    text: "Sightseeing that suits every age, scenic stays and flexible pacing, including family and senior-friendly yatras.",
    places: ["Mussoorie", "Nainital", "Shimla", "Char Dham"],
    image: IMAGES.familyHoliday,
    link: { label: "Family Char Dham Yatra", href: links.charDhamFamily },
    size: "base",
  },
  {
    id: "romantic",
    title: "Romantic Mountain Escapes",
    text: "Scenic stays, lakeside mornings, mountain views and couple itineraries shaped around your pace.",
    places: ["Srinagar", "Gulmarg", "Manali", "Nainital"],
    image: IMAGES.srinagar,
    link: { label: "Plan a honeymoon", href: enquiryHref("North India honeymoon", "honeymoon") },
    size: "base",
  },
  {
    id: "buddhist",
    title: "Buddhist and Cultural Heritage",
    text: "Monasteries, Tibetan culture in McLeod Ganj, the high monasteries of Spiti, and Sarnath near Varanasi.",
    places: ["McLeod Ganj", "Spiti", "Sarnath"],
    image: IMAGES.mcleodGanj,
    link: { label: "Ask about a cultural route", href: enquiryHref("Buddhist & cultural heritage, North India") },
    size: "wide",
  },
];

/* ------------------------------------------------------------------ */
/* Planning guide                                                      */
/* ------------------------------------------------------------------ */

export const seasons = [
  {
    id: "spring",
    name: "Spring",
    months: "Mar – May",
    text: "Pleasant in the hills and a good window for sightseeing and many treks. The plains warm up quickly from April.",
  },
  {
    id: "summer",
    name: "Summer & monsoon",
    months: "Jun – Sep",
    text: "Hill stations and Kashmir stay mild while the plains are hot. Monsoon rain can cause landslides and road delays in Uttarakhand and Himachal.",
  },
  {
    id: "autumn",
    name: "Autumn",
    months: "Oct – Nov",
    text: "Clear mountain views and settled weather. A popular time for both heritage cities and the hills.",
    pick: true,
  },
  {
    id: "winter",
    name: "Winter",
    months: "Dec – Feb",
    text: "Comfortable for Varanasi, Agra, Delhi and Rajasthan. Snow in the high hills; many high-altitude shrines and passes are closed.",
  },
] as const;

export const planningGuide = [
  {
    id: "time",
    title: "Best time to visit",
    text: "North India ranges from hot plains to cold high-altitude valleys, so the best month depends on where you go. Spring and autumn suit most sightseeing and trekking; summer favours the hills; winter favours the plains and heritage cities.",
  },
  {
    id: "transport",
    title: "Transport and connectivity",
    text: "Itineraries usually begin at a major airport or railway station, such as Delhi, Dehradun, Varanasi, Jammu or Srinagar, with road travel in between. Travellers from Nepal can join by air or by road through a border crossing, depending on the route we plan.",
  },
  {
    id: "packing",
    title: "Packing and preparation",
    text: "Pack layers for changing temperatures, comfortable walking shoes, rain protection in monsoon, valid ID and travel documents, and any regular medication. Trekking and snow activities need their own gear, which we list with your itinerary.",
  },
  {
    id: "pilgrimage",
    title: "Pilgrimage travel",
    text: "Temple opening dates, registration and access are set by temple committees and local authorities each season. Some shrines involve long walks or steep climbs. We check the current rules for your dates, but access is never guaranteed.",
  },
  {
    id: "responsible",
    title: "Responsible tourism",
    text: "Dress modestly at religious sites and follow local customs, including removing shoes where asked. Respect photography rules at temples and monuments, keep protected areas and rivers clean, and give wildlife space.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* FAQ                                                                 */
/* ------------------------------------------------------------------ */

export const faqs = [
  {
    id: "destinations",
    q: "What destinations are included in North India tour packages?",
    a: "It depends on the package. Our published North India journeys cover the Char Dham and Do Dham in Uttarakhand, Haridwar and Rishikesh, Amarnath and Vaishno Devi in Jammu & Kashmir, and Adi Kailash and Om Parvat. Hill stations such as Shimla, Manali, Mussoorie and Nainital, Kashmir's valleys, and cities like Varanasi, Ayodhya, Agra, Delhi and Jaipur are arranged as tailor-made itineraries. Not every destination is part of every tour.",
  },
  {
    id: "time",
    q: "What is the best time to visit North India?",
    a: "Spring (March to May) and autumn (October to November) suit most sightseeing and trekking. Summer is a good time for hill stations and Kashmir, while winter suits Varanasi, Agra, Delhi and Rajasthan. High Himalayan shrines open only for part of the year, and monsoon rain can affect mountain roads.",
  },
  {
    id: "families",
    q: "Which North India destinations are suitable for families?",
    a: "Hill stations such as Mussoorie, Nainital and Shimla, the Ganga towns of Haridwar and Rishikesh, and heritage cities like Agra and Delhi are popular with families. We also plan Family and Senior Citizen Char Dham yatras with a gentler pace.",
  },
  {
    id: "pilgrimage",
    q: "Are spiritual and pilgrimage tours available?",
    a: "Yes. Karvaahh runs the Char Dham Yatra by road or helicopter, the Do Dham Yatra to Kedarnath and Badrinath, the Haridwar & Rishikesh Yatra, the Amarnath & Vaishno Devi Yatra and the Adi Kailash & Om Parvat Yatra. Varanasi, Ayodhya and the Mathura–Vrindavan circuit are planned on request.",
  },
  {
    id: "combine",
    q: "Can I combine hill stations and heritage cities in one itinerary?",
    a: "Yes. For example, Delhi and Agra can be paired with Shimla and Manali, or Haridwar and Rishikesh with Mussoorie. We plan the route around your dates and travel time so the trip stays comfortable.",
  },
  {
    id: "char-dham",
    q: "Are Char Dham Yatra packages available?",
    a: "Yes. We publish a sample 9 nights / 10 days road yatra from Haridwar, a sample 5 nights / 6 days helicopter yatra from Dehradun, and a sample 4 nights / 5 days Do Dham yatra. The Char Dham is open seasonally; opening and closing dates are announced each year, and we confirm registration for your dates.",
  },
  {
    id: "customize",
    q: "Can I customize a North India holiday?",
    a: "Yes. Every itinerary can be adjusted for destinations, pace, hotel category and transport. Share your dates, group size and interests and we will send a written itinerary and quote.",
  },
  {
    id: "himalaya",
    q: "How should I prepare for Himalayan destinations?",
    a: "Carry warm layers, rain protection and good walking shoes, even in summer. Some shrines and treks involve long walks at altitude, so build in rest days and speak to your doctor if you have health concerns. Weather and roads can change plans at short notice.",
  },
  {
    id: "nepal",
    q: "Can travelers from Nepal book North India tours?",
    a: `Yes. Karvaahh has teams in Nepal and India, and we plan North India trips that start from Nepal by air or by road. Nepali and Indian citizens do not need a visa to travel between the two countries, but should carry valid photo ID; travellers of other nationalities need an Indian visa. Call ${contactInfo.india.phone} (India) or reach our Nepal team from the contact page.`,
  },
  {
    id: "enquire",
    q: "How can I enquire about a Karvaahh North India package?",
    a: "Use the Enquire buttons on this page or the contact page, and tell us your dates, starting city, group size and the places you want to see. We reply with a suggested itinerary and quote.",
  },
] as const;

/* ------------------------------------------------------------------ */
/* Final CTA + SEO                                                     */
/* ------------------------------------------------------------------ */

export const finalCta = {
  title: "Start Planning Your North India Journey",
  subtitle: "Tell us where you want to go and how you like to travel. We'll shape the route, pace and stays around you.",
  image: IMAGES.varanasiAarti,
  buttons: [
    { label: "Enquire Now", href: enquiryHref("North India tour"), variant: "primary" },
    { label: "Customize a Holiday", href: enquiryHref("Customized North India holiday", "customized"), variant: "ghost" },
  ],
  brand: `${site.name} — ${site.tagline}`,
} as const;

export const seo = {
  title: "North India Tour Packages | Char Dham, Himalayas & Heritage | Karvaahh",
  description:
    "Explore North India tour packages with Karvaahh: Char Dham Yatra, Haridwar & Rishikesh, Vaishno Devi, Kashmir valleys, Himachal hill stations, Varanasi and heritage cities. Customize your trip.",
  keywords: [
    "North India tour packages",
    "North India holiday packages",
    "Char Dham Yatra package",
    "Uttarakhand tour packages",
    "Himachal hill station tours",
    "Kashmir tour packages",
    "Varanasi pilgrimage tour",
    "North India tours from Nepal",
  ],
  ogImage: IMAGES.varanasiGhats,
} as const;
