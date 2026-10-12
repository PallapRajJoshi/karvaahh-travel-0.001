// data/russia/packages.ts
// CMS-ready Russia packages. Every section on the page (Moscow, Classic
// Journey, Golden Ring, Honeymoon, Popular...) selects from this one list by id
// or by filter, so a package is defined once.
//
// - `price` stays undefined until Karvaahh publishes one → "Price on Request".
// - `hotelCategory`, `meals` and `transport` describe the typical build of the
//   itinerary and are always customizable; the quote confirms exact inclusions.
// - `active: false` hides a package everywhere. Packages whose destinations are
//   all "limited" are shown as availability checks, not bookings.
// - `href` is linked only once listed in LIVE_ROUTES.

import type { SeasonId } from "./destinations";
import type { RussiaExperienceId } from "./experiences";
import type { RussiaImageId } from "./images";

export type Transport = "International flights" | "Domestic flights" | "High-speed rail" | "Intercity rail" | "Overnight train" | "Private transfers" | "Airport transfers";

export interface RussiaPackage {
  id: string;
  title: string;
  slug: string;
  /** Destination ids; first is the primary one. */
  destinations: string[];
  /** e.g. "5N/6D". Free text so "Flexible" works too. */
  duration: string;
  route: string[];
  travelStyles: RussiaExperienceId[];
  transport?: Transport[];
  hotelCategory?: string;
  meals?: string;
  sightseeing?: string[];
  /** Best-suited season(s); omit for year-round itineraries. */
  seasons?: SeasonId[];
  /** Visa/document assistance is offered for this itinerary. */
  visaAssistance?: boolean;
  image?: RussiaImageId;
  description: string;
  /** Published starting price text, e.g. "From ₹1,25,000 per person". Never invent. */
  price?: string;
  active: boolean;
  featured?: boolean;
  /** Specialist itinerary needing extra lead time (e.g. Trans-Siberian). */
  specialist?: boolean;
  href?: string;
}

const BASE = "/packages/international/russia";
const STD: Transport[] = ["International flights", "Airport transfers", "Private transfers"];
const MSP: Transport[] = ["International flights", "High-speed rail", "Airport transfers", "Private transfers"];

export const russiaPackages: RussiaPackage[] = [
  // ─────────── Moscow ───────────
  {
    id: "moscow-city-3n", title: "3N/4D Moscow City Tour", slug: "moscow-city-tour", destinations: ["moscow"], duration: "3N/4D",
    route: ["Red Square", "Kremlin", "Metro", "Arbat"], travelStyles: ["city-break", "capitals", "budget", "history"],
    transport: STD, hotelCategory: "3★–4★", meals: "Breakfast", sightseeing: ["Red Square & Kremlin area", "Moscow Metro tour", "Arbat Street"],
    visaAssistance: true, image: "red-square", description: "A short first look at Moscow: Red Square, the Kremlin area, the metro and Arbat Street.", active: true, featured: true, href: `${BASE}/moscow/moscow-city-tour`,
  },
  {
    id: "moscow-highlights-4n", title: "4N/5D Moscow Highlights", slug: "moscow-highlights", destinations: ["moscow"], duration: "4N/5D",
    route: ["Red Square", "Kremlin", "Sparrow Hills", "River cruise"], travelStyles: ["city-break", "capitals", "history", "museums", "architecture"],
    transport: STD, hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Kremlin & Armoury (subject to tickets)", "Moscow River cruise", "Sparrow Hills", "Zaryadye Park"],
    visaAssistance: true, image: "moscow", description: "Moscow at an unhurried pace, with a river cruise and time for museums.", active: true, href: `${BASE}/moscow/moscow-highlights`,
  },
  {
    id: "moscow-winter-4n", title: "4N/5D Moscow Winter Tour", slug: "moscow-winter", destinations: ["moscow"], duration: "4N/5D",
    route: ["Red Square", "GUM", "Winter parks"], travelStyles: ["winter", "city-break", "photography", "capitals"],
    transport: STD, hotelCategory: "4★", meals: "Breakfast", seasons: ["winter"], sightseeing: ["Red Square in snow", "Seasonal markets (where held)", "Bolshoi Theatre evening (subject to availability)"],
    visaAssistance: true, image: "moscow-winter", description: "Snow on Red Square, warm cafés and theatre evenings in the Russian winter.", active: true, href: `${BASE}/moscow/moscow-winter`,
  },
  {
    id: "moscow-family-4n", title: "4N/5D Moscow Family Holiday", slug: "moscow-family", destinations: ["moscow"], duration: "4N/5D",
    route: ["Red Square", "Zaryadye", "VDNKh", "Circus"], travelStyles: ["family", "city-break", "capitals"],
    transport: STD, hotelCategory: "4★ family rooms", meals: "Breakfast", sightseeing: ["Zaryadye Park", "VDNKh", "Moscow Circus (subject to schedule)"],
    visaAssistance: true, image: "red-square", description: "Parks, the circus and short sightseeing days that suit children.", active: true, href: `${BASE}/moscow/moscow-family`,
  },
  {
    id: "moscow-luxury-4n", title: "4N/5D Moscow Luxury Escape", slug: "moscow-luxury", destinations: ["moscow"], duration: "4N/5D",
    route: ["Kremlin", "Bolshoi", "Private river cruise"], travelStyles: ["luxury", "honeymoon", "private", "capitals"],
    transport: STD, hotelCategory: "5★", meals: "Breakfast + selected dinners", sightseeing: ["Private guided Kremlin visit", "Bolshoi Theatre (subject to availability)", "Private transfers throughout"],
    visaAssistance: true, image: "moscow-domes", description: "Five-star stays, a private guide and evenings at the theatre.", active: true, href: `${BASE}/moscow/moscow-luxury`,
  },

  // ─────────── Saint Petersburg ───────────
  {
    id: "spb-3n", title: "3N/4D Saint Petersburg", slug: "saint-petersburg", destinations: ["saint-petersburg"], duration: "3N/4D",
    route: ["Hermitage", "Nevsky Prospect", "Peterhof"], travelStyles: ["city-break", "museums", "history", "architecture"],
    transport: STD, hotelCategory: "3★–4★", meals: "Breakfast", sightseeing: ["Hermitage Museum", "Nevsky Prospect walk", "Peterhof (seasonal fountains)"],
    visaAssistance: true, image: "saint-petersburg", description: "The Hermitage, canals and a day at Peterhof.", active: true, featured: true, href: `${BASE}/saint-petersburg/saint-petersburg`,
  },
  {
    id: "spb-cultural-4n", title: "4N/5D Saint Petersburg Cultural Tour", slug: "saint-petersburg-cultural", destinations: ["saint-petersburg"], duration: "4N/5D",
    route: ["Hermitage", "Spilled Blood", "Catherine Palace", "Canals"], travelStyles: ["museums", "history", "architecture", "religious-heritage", "photography"],
    transport: STD, hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Hermitage & Winter Palace", "Church of the Savior on Spilled Blood", "Catherine Palace, Tsarskoye Selo", "Canal cruise (seasonal)"],
    visaAssistance: true, image: "spb-bridge", description: "Palaces, cathedrals and museums with time to take them in.", active: true, href: `${BASE}/saint-petersburg/saint-petersburg-cultural`,
  },

  // ─────────── Moscow + Saint Petersburg ───────────
  {
    id: "msp-5n", title: "5N/6D Moscow–Saint Petersburg", slug: "moscow-saint-petersburg", destinations: ["moscow", "saint-petersburg"], duration: "5N/6D",
    route: ["Moscow", "High-speed rail", "Saint Petersburg"], travelStyles: ["capitals", "city-break", "history", "museums", "train", "budget"],
    transport: MSP, hotelCategory: "3★–4★", meals: "Breakfast", sightseeing: ["Red Square & Kremlin area", "Moscow Metro", "Hermitage Museum", "Peterhof (seasonal)"],
    visaAssistance: true, image: "moscow", description: "Russia's two great cities, linked by a fast train.", active: true, featured: true, href: `${BASE}/moscow-saint-petersburg`,
  },
  {
    id: "msp-6n", title: "6N/7D Moscow–Saint Petersburg Highlights", slug: "moscow-saint-petersburg-highlights", destinations: ["moscow", "saint-petersburg"], duration: "6N/7D",
    route: ["Moscow", "Sergiev Posad", "Saint Petersburg", "Peterhof"], travelStyles: ["capitals", "history", "museums", "architecture", "train", "family"],
    transport: MSP, hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Kremlin", "Sergiev Posad day trip", "Hermitage", "Peterhof"],
    visaAssistance: true, image: "spb-bridge", description: "The classic route with an extra day for Sergiev Posad and palace gardens.", active: true, featured: true, href: `${BASE}/moscow-saint-petersburg-highlights`,
  },
  {
    id: "russia-premium-7n", title: "7N/8D Premium Russia", slug: "premium-russia", destinations: ["moscow", "saint-petersburg"], duration: "7N/8D",
    route: ["Moscow", "Saint Petersburg", "Tsarskoye Selo"], travelStyles: ["luxury", "capitals", "museums", "private", "train", "honeymoon"],
    transport: MSP, hotelCategory: "5★", meals: "Breakfast + selected dinners", sightseeing: ["Private guides in both cities", "Bolshoi or Mariinsky evening (subject to availability)", "Catherine Palace"],
    visaAssistance: true, image: "moscow-domes", description: "Premium hotels, private guiding and first-class rail between the capitals.", active: true, href: `${BASE}/premium-russia`,
  },
  {
    id: "russia-highlights-7n", title: "7N/8D Russia Highlights", slug: "russia-highlights", destinations: ["moscow", "golden-ring", "saint-petersburg"], duration: "7N/8D",
    route: ["Moscow", "Suzdal", "Saint Petersburg"], travelStyles: ["history", "architecture", "capitals", "photography", "train"],
    transport: MSP, hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Red Square", "Suzdal & Vladimir", "Hermitage"],
    visaAssistance: true, image: "red-square", description: "Both capitals plus a night in the Golden Ring town of Suzdal.", active: true, featured: true, href: `${BASE}/russia-highlights`,
  },
  {
    id: "russia-cultural-8n", title: "8N/9D Russia Cultural Journey", slug: "russia-cultural-journey", destinations: ["moscow", "golden-ring", "saint-petersburg"], duration: "8N/9D",
    route: ["Moscow", "Sergiev Posad", "Suzdal", "Saint Petersburg"], travelStyles: ["museums", "history", "religious-heritage", "architecture", "train"],
    transport: MSP, hotelCategory: "4★", meals: "Breakfast + selected dinners", sightseeing: ["Tretyakov Gallery", "Trinity Lavra, Sergiev Posad", "Suzdal", "Hermitage & Russian Museum"],
    visaAssistance: true, image: "saint-petersburg", description: "Galleries, monasteries and imperial palaces for culture-first travellers.", active: true, href: `${BASE}/russia-cultural-journey`,
  },
  {
    id: "msp-kazan-8n", title: "8N/9D Moscow–Saint Petersburg–Kazan", slug: "moscow-saint-petersburg-kazan", destinations: ["moscow", "saint-petersburg", "kazan"], duration: "8N/9D",
    route: ["Saint Petersburg", "Moscow", "Kazan"], travelStyles: ["capitals", "history", "religious-heritage", "train", "family"],
    transport: ["International flights", "High-speed rail", "Domestic flights", "Airport transfers"], hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Hermitage", "Kremlin", "Kazan Kremlin & Kul Sharif Mosque"],
    visaAssistance: true, image: "spb-bridge", description: "Add Kazan's Tatar heritage to the two capitals.", active: true, featured: true, href: `${BASE}/moscow-saint-petersburg-kazan`,
  },
  {
    id: "russia-grand-9n", title: "9N/10D Russia Grand Experience", slug: "russia-grand-experience", destinations: ["moscow", "golden-ring", "saint-petersburg", "kazan"], duration: "9N/10D",
    route: ["Moscow", "Suzdal", "Kazan", "Saint Petersburg"], travelStyles: ["capitals", "history", "architecture", "luxury", "train"],
    transport: ["International flights", "High-speed rail", "Domestic flights", "Private transfers"], hotelCategory: "4★–5★", meals: "Breakfast + selected dinners", sightseeing: ["Both capitals in depth", "Golden Ring", "Kazan"],
    visaAssistance: true, image: "moscow-winter", description: "Capitals, the Golden Ring and Kazan in one well-paced journey.", active: true, href: `${BASE}/russia-grand-experience`,
  },

  // ─────────── Golden Ring ───────────
  {
    id: "golden-ring-3n", title: "3N/4D Golden Ring", slug: "golden-ring", destinations: ["golden-ring"], duration: "3N/4D",
    route: ["Sergiev Posad", "Vladimir", "Suzdal", "Yaroslavl"], travelStyles: ["history", "religious-heritage", "architecture", "photography", "private"],
    transport: ["Private transfers"], hotelCategory: "3★–4★ / boutique", meals: "Breakfast", sightseeing: ["Trinity Lavra", "Vladimir's Golden Gate", "Suzdal Kremlin", "Yaroslavl riverside"],
    visaAssistance: true, description: "Monasteries, kremlins and wooden churches by private car from Moscow.", active: true, href: `${BASE}/golden-ring/golden-ring`,
  },
  {
    id: "moscow-golden-ring-4n", title: "4N/5D Moscow + Golden Ring", slug: "moscow-golden-ring", destinations: ["moscow", "golden-ring"], duration: "4N/5D",
    route: ["Moscow", "Sergiev Posad", "Suzdal"], travelStyles: ["history", "capitals", "religious-heritage", "architecture"],
    transport: STD, hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Red Square", "Sergiev Posad", "Suzdal overnight"],
    visaAssistance: true, image: "red-square", description: "Moscow's landmarks plus a night in historic Suzdal.", active: true, featured: true, href: `${BASE}/golden-ring/moscow-golden-ring`,
  },
  {
    id: "moscow-golden-ring-5n", title: "5N/6D Moscow–Golden Ring Cultural Tour", slug: "moscow-golden-ring-cultural", destinations: ["moscow", "golden-ring"], duration: "5N/6D",
    route: ["Moscow", "Vladimir", "Suzdal", "Rostov", "Yaroslavl"], travelStyles: ["history", "religious-heritage", "architecture", "photography"],
    transport: STD, hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Kremlin", "Vladimir & Suzdal", "Rostov Kremlin", "Yaroslavl"],
    visaAssistance: true, image: "moscow-night", description: "A deeper loop through the Golden Ring's best-preserved towns.", active: true, href: `${BASE}/golden-ring/moscow-golden-ring-cultural`,
  },

  // ─────────── Kazan ───────────
  {
    id: "kazan-3n", title: "3N/4D Kazan City Tour", slug: "kazan-city-tour", destinations: ["kazan"], duration: "3N/4D",
    route: ["Kazan Kremlin", "Bauman Street", "Volga"], travelStyles: ["history", "religious-heritage", "city-break", "family"],
    transport: ["International flights", "Domestic flights", "Airport transfers"], hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Kazan Kremlin & Kul Sharif Mosque", "Bauman Street", "Tatar cuisine experience"],
    visaAssistance: true, description: "Tatar culture, the Kazan Kremlin and the Volga riverfront.", active: true, href: `${BASE}/kazan/kazan-city-tour`,
  },
  {
    id: "moscow-kazan-5n", title: "5N/6D Moscow–Kazan Journey", slug: "moscow-kazan", destinations: ["moscow", "kazan"], duration: "5N/6D",
    route: ["Moscow", "Kazan"], travelStyles: ["capitals", "history", "religious-heritage", "train"],
    transport: ["International flights", "Intercity rail", "Airport transfers"], hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Red Square", "Kazan Kremlin", "Palace of Agriculture (exterior)"],
    visaAssistance: true, image: "moscow", description: "Russia's capital and the capital of Tatarstan, connected by rail.", active: true, href: `${BASE}/kazan/moscow-kazan`,
  },

  // ─────────── Sochi ───────────
  {
    id: "sochi-summer-5n", title: "5N/6D Sochi Summer Beach Holiday", slug: "sochi-summer", destinations: ["sochi"], duration: "5N/6D",
    route: ["Sochi", "Black Sea coast", "Krasnaya Polyana"], travelStyles: ["beach", "family", "honeymoon", "nature"],
    transport: ["International flights", "Domestic flights", "Airport transfers"], hotelCategory: "4★ seaside", meals: "Breakfast", seasons: ["summer"], sightseeing: ["Black Sea beaches", "Arboretum", "Cable car to the mountains"],
    visaAssistance: true, description: "Black Sea beaches with a day up in the Caucasus mountains.", active: true, featured: true, href: `${BASE}/sochi/sochi-summer`,
  },
  {
    id: "sochi-winter-5n", title: "5N/6D Sochi Winter Mountains & Ski", slug: "sochi-winter-ski", destinations: ["sochi"], duration: "5N/6D",
    route: ["Sochi", "Krasnaya Polyana", "Rosa Khutor"], travelStyles: ["ski", "winter", "nature", "family"],
    transport: ["International flights", "Domestic flights", "Airport transfers"], hotelCategory: "4★ mountain resort", meals: "Breakfast", seasons: ["winter"], sightseeing: ["Rosa Khutor slopes", "Ski passes & rental (optional)", "Mountain cable cars"],
    visaAssistance: true, image: "winter-mountains", description: "Skiing and snow days at Krasnaya Polyana's mountain resorts.", active: true, href: `${BASE}/sochi/sochi-winter-ski`,
  },
  {
    id: "sochi-family-5n", title: "5N/6D Sochi Family Holiday", slug: "sochi-family", destinations: ["sochi"], duration: "5N/6D",
    route: ["Sochi", "Olympic Park", "Black Sea"], travelStyles: ["family", "beach", "nature"],
    transport: ["International flights", "Domestic flights", "Airport transfers"], hotelCategory: "4★ family resort", meals: "Breakfast", seasons: ["summer"], sightseeing: ["Beach days", "Olympic Park area", "Theme park (subject to season)"],
    visaAssistance: true, description: "Beach time and gentle sightseeing for families.", active: true, href: `${BASE}/sochi/sochi-family`,
  },

  // ─────────── Murmansk ───────────
  {
    id: "murmansk-nl-3n", title: "3N/4D Murmansk Northern Lights", slug: "murmansk-northern-lights", destinations: ["murmansk"], duration: "3N/4D",
    route: ["Murmansk", "Aurora outing", "Teriberka"], travelStyles: ["northern-lights", "winter", "photography", "nature"],
    transport: ["International flights", "Domestic flights", "Private transfers"], hotelCategory: "3★–4★", meals: "Breakfast", seasons: ["winter"], sightseeing: ["Evening aurora outings (weather permitting)", "Teriberka coast", "Snow activities where available"],
    visaAssistance: true, image: "aurora", description: "Nights out of the city lights to look for the aurora. Sightings are never guaranteed.", active: true, featured: true, href: `${BASE}/murmansk/murmansk-northern-lights`,
  },
  {
    id: "arctic-russia-4n", title: "4N/5D Arctic Russia", slug: "arctic-russia", destinations: ["murmansk"], duration: "4N/5D",
    route: ["Murmansk", "Kola Peninsula", "Teriberka"], travelStyles: ["northern-lights", "nature", "winter", "photography"],
    transport: ["International flights", "Domestic flights", "Private transfers"], hotelCategory: "3★–4★ / lodge", meals: "Breakfast + selected meals", seasons: ["winter"], sightseeing: ["Kola Peninsula", "Aurora outings", "Snowmobile where operationally available"],
    visaAssistance: true, image: "aurora-hills", description: "More time on the Kola Peninsula for better aurora chances and Arctic landscapes.", active: true, href: `${BASE}/murmansk/arctic-russia`,
  },
  {
    id: "moscow-murmansk-7n", title: "7N/8D Moscow–Murmansk Northern Lights", slug: "moscow-murmansk", destinations: ["moscow", "murmansk"], duration: "7N/8D",
    route: ["Moscow", "Murmansk", "Teriberka"], travelStyles: ["northern-lights", "winter", "capitals", "honeymoon", "photography"],
    transport: ["International flights", "Domestic flights", "Private transfers"], hotelCategory: "4★", meals: "Breakfast", seasons: ["winter"], sightseeing: ["Moscow highlights", "Aurora outings", "Arctic coast"],
    visaAssistance: true, image: "aurora-sky", description: "Moscow's winter landmarks, then the Arctic for the Northern Lights.", active: true, featured: true, href: `${BASE}/murmansk/moscow-murmansk`,
  },

  // ─────────── Lake Baikal & Siberia ───────────
  {
    id: "baikal-4n", title: "4N/5D Lake Baikal (Summer)", slug: "lake-baikal-summer", destinations: ["lake-baikal", "irkutsk"], duration: "4N/5D",
    route: ["Irkutsk", "Listvyanka", "Olkhon Island"], travelStyles: ["baikal", "nature", "photography"],
    transport: ["International flights", "Domestic flights", "Private transfers"], hotelCategory: "3★–4★ / guesthouse", meals: "Breakfast + selected meals", seasons: ["summer"], sightseeing: ["Listvyanka", "Olkhon Island", "Lake boat trip (seasonal)"],
    visaAssistance: true, image: "lake-baikal", description: "Lakeside villages, Olkhon Island and summer boat trips.", active: true, featured: true, href: `${BASE}/lake-baikal/lake-baikal-summer`,
  },
  {
    id: "baikal-winter-5n", title: "5N/6D Baikal Winter Experience", slug: "baikal-winter", destinations: ["lake-baikal", "irkutsk"], duration: "5N/6D",
    route: ["Irkutsk", "Listvyanka", "Olkhon ice"], travelStyles: ["baikal", "winter", "nature", "photography"],
    transport: ["International flights", "Domestic flights", "Private transfers"], hotelCategory: "3★–4★ / guesthouse", meals: "Breakfast + selected meals", seasons: ["winter"], sightseeing: ["Clear-ice landscapes (ice conditions permitting)", "Olkhon Island", "Ice caves where safe"],
    visaAssistance: true, image: "lake-baikal", description: "Baikal's famous clear ice, when ice conditions allow.", active: true, href: `${BASE}/lake-baikal/baikal-winter`,
  },
  {
    id: "irkutsk-baikal-6n", title: "6N/7D Irkutsk–Baikal", slug: "irkutsk-baikal", destinations: ["irkutsk", "lake-baikal"], duration: "6N/7D",
    route: ["Irkutsk", "Circum-Baikal", "Listvyanka", "Olkhon"], travelStyles: ["baikal", "nature", "train", "history"],
    transport: ["International flights", "Domestic flights", "Intercity rail", "Private transfers"], hotelCategory: "4★ / guesthouse", meals: "Breakfast + selected meals", sightseeing: ["Irkutsk old town", "Circum-Baikal rail (seasonal)", "Olkhon Island"],
    visaAssistance: true, image: "winter-forest", description: "Irkutsk's wooden houses, the lakeside railway and Olkhon Island.", active: true, href: `${BASE}/lake-baikal/irkutsk-baikal`,
  },
  {
    id: "moscow-baikal-7n", title: "7N/8D Moscow–Lake Baikal", slug: "moscow-lake-baikal", destinations: ["moscow", "lake-baikal", "irkutsk"], duration: "7N/8D",
    route: ["Moscow", "Irkutsk", "Lake Baikal"], travelStyles: ["baikal", "capitals", "nature", "winter"],
    transport: ["International flights", "Domestic flights", "Private transfers"], hotelCategory: "4★", meals: "Breakfast", sightseeing: ["Moscow highlights", "Listvyanka", "Olkhon Island"],
    visaAssistance: true, image: "lake-baikal", description: "Moscow first, then a long domestic flight to Siberia's great lake.", active: true, featured: true, href: `${BASE}/lake-baikal/moscow-lake-baikal`,
  },
  {
    id: "moscow-baikal-9n", title: "9N/10D Moscow–Baikal", slug: "moscow-baikal", destinations: ["moscow", "irkutsk", "lake-baikal"], duration: "9N/10D",
    route: ["Moscow", "Irkutsk", "Listvyanka", "Olkhon"], travelStyles: ["baikal", "capitals", "nature", "photography"],
    transport: ["International flights", "Domestic flights", "Private transfers"], hotelCategory: "4★", meals: "Breakfast + selected meals", sightseeing: ["Moscow in depth", "Irkutsk", "Two bases on Baikal"],
    visaAssistance: true, image: "winter-forest", description: "Enough time for Baikal to feel unhurried after Moscow.", active: true, href: `${BASE}/lake-baikal/moscow-baikal`,
  },
  {
    id: "trans-siberian-baikal", title: "Trans-Siberian + Baikal", slug: "trans-siberian-baikal", destinations: ["moscow", "kazan", "yekaterinburg", "novosibirsk", "irkutsk", "lake-baikal"], duration: "12N/13D+",
    route: ["Moscow", "Kazan", "Yekaterinburg", "Novosibirsk", "Irkutsk", "Baikal"], travelStyles: ["trans-siberian", "train", "baikal", "nature", "private"],
    transport: ["International flights", "Overnight train", "Private transfers"], hotelCategory: "Train berths + 3★–4★ hotels", meals: "Varies by stop", sightseeing: ["City stops on the way", "Lake Baikal"],
    visaAssistance: true, image: "winter-birch", description: "A specialist rail journey across the Urals into Siberia, ending at Lake Baikal.", active: true, specialist: true, href: `${BASE}/trans-siberian-baikal`,
  },

  // ─────────── Winter, honeymoon, family, luxury, custom ───────────
  {
    id: "russia-winter-10n", title: "10N/11D Russia Winter Experience", slug: "russia-winter-experience", destinations: ["moscow", "saint-petersburg", "murmansk"], duration: "10N/11D",
    route: ["Moscow", "Saint Petersburg", "Murmansk"], travelStyles: ["winter", "northern-lights", "capitals", "photography"],
    transport: ["International flights", "High-speed rail", "Domestic flights", "Private transfers"], hotelCategory: "4★", meals: "Breakfast", seasons: ["winter"], sightseeing: ["Snowy Moscow", "Winter Saint Petersburg", "Arctic aurora outings"],
    visaAssistance: true, image: "winter-birch", description: "Both capitals in snow, then the Arctic for Northern Lights chances.", active: true, featured: true, href: `${BASE}/russia-winter-experience`,
  },
  {
    id: "russia-honeymoon-6n", title: "6N/7D Russia Honeymoon Package", slug: "russia-honeymoon", destinations: ["moscow", "saint-petersburg"], duration: "6N/7D",
    route: ["Moscow", "Saint Petersburg"], travelStyles: ["honeymoon", "luxury", "private", "capitals"],
    transport: MSP, hotelCategory: "4★–5★", meals: "Breakfast + a romantic dinner", sightseeing: ["Private sightseeing", "River or canal cruise (seasonal)", "Romantic dinner"],
    visaAssistance: true, image: "spb-bridge", description: "Private sightseeing, premium hotels and evenings on the water in the capitals.", active: true, featured: true, href: `${BASE}/russia-honeymoon`,
  },
  {
    id: "russia-family-6n", title: "6N/7D Russia Family Package", slug: "russia-family", destinations: ["moscow", "saint-petersburg"], duration: "6N/7D",
    route: ["Moscow", "Saint Petersburg"], travelStyles: ["family", "capitals", "museums"],
    transport: MSP, hotelCategory: "4★ family rooms", meals: "Breakfast", sightseeing: ["Kid-friendly museums", "Parks & palace gardens", "Circus or show (subject to schedule)"],
    visaAssistance: true, image: "red-square", description: "Shorter touring days, family rooms and attractions children enjoy.", active: true, featured: true, href: `${BASE}/russia-family`,
  },
  {
    id: "russia-luxury-7n", title: "7N/8D Moscow–Saint Petersburg Luxury Journey", slug: "russia-luxury", destinations: ["moscow", "saint-petersburg"], duration: "7N/8D",
    route: ["Moscow", "Saint Petersburg", "Peterhof"], travelStyles: ["luxury", "private", "honeymoon", "museums"],
    transport: MSP, hotelCategory: "5★", meals: "Breakfast + selected fine dining", sightseeing: ["Private guides & cars", "Out-of-hours visits where offered", "Ballet evening (subject to availability)"],
    visaAssistance: true, image: "saint-petersburg", description: "Five-star hotels, private guides and the best seats we can secure.", active: true, featured: true, href: `${BASE}/russia-luxury`,
  },
  {
    id: "custom-russia", title: "Customized Russia Tour", slug: "customized-russia-tour", destinations: ["moscow"], duration: "Flexible",
    route: ["Your choice of cities"], travelStyles: ["private", "luxury", "budget", "family", "honeymoon"],
    hotelCategory: "Your choice", meals: "Your choice", sightseeing: ["Built around your dates, budget and interests"],
    visaAssistance: true, image: "moscow-night", description: "Tell us the cities, season and pace. We'll design it around you.", active: true, featured: true,
  },
];

export const activeRussiaPackages = russiaPackages.filter((p) => p.active);
export const russiaPackageById = (id: string) => russiaPackages.find((p) => p.id === id);

/** Active packages that visit a destination (or its parent, e.g. Suzdal → Golden Ring). */
export const russiaPackageCount = (destinationId: string, partOf?: string) =>
  activeRussiaPackages.filter((p) => p.destinations.includes(destinationId) || (partOf ? p.destinations.includes(partOf) : false)).length;
