/**
 * Editorial collections. Every entry is a destination slug; `index.ts`
 * validates them at import time so a typo fails the build instead of
 * silently dropping a card.
 */

/** "Where Will You Go Next?" — the brief's 12 featured destinations. */
export const FEATURED = [
  "kathmandu",
  "pokhara",
  "muktinath",
  "everest-base-camp",
  "mustang",
  "kedarnath",
  "kashmir",
  "goa",
  "dubai",
  "bali",
  "switzerland",
  "maldives",
] as const;

/** Drives the "Popular" sort and the hero suggestion chips. */
export const POPULAR = [
  ...FEATURED,
  "chitwan",
  "lumbini",
  "annapurna-circuit",
  "annapurna-base-camp",
  "pashupatinath",
  "varanasi",
  "ladakh",
  "manali",
  "rishikesh",
  "jaipur",
  "agra",
  "kerala",
  "thailand",
  "singapore",
  "paris",
  "bhutan",
  "sri-lanka",
] as const;

export const HERO_SUGGESTIONS = [
  "kathmandu",
  "pokhara",
  "muktinath",
  "kedarnath",
  "dubai",
  "bali",
  "switzerland",
] as const;

export const OFFBEAT_PICKS = [
  "rara-lake",
  "dhorpatan",
  "dolpo",
  "tsho-rolpa-lake",
  "khaptad",
  "api-nampa",
  "panch-pokhari",
  "upper-mustang",
  "shey-phoksundo",
  "humla",
] as const;

export const SPIRITUAL_PICKS = [
  "pashupatinath",
  "muktinath",
  "lumbini",
  "kedarnath",
  "badrinath",
  "char-dham",
  "jyotirlinga",
  "kailash-mansarovar",
  "varanasi",
  "ayodhya",
  "rameshwaram",
] as const;

export const ADVENTURE_PICKS = [
  "everest-base-camp",
  "annapurna-circuit",
  "manang-circuit",
  "mustang-circuit",
  "langtang-valley",
  "three-pass-trek",
  "manaslu-circuit",
  "tsum-valley",
  "ladakh",
  "spiti-valley",
] as const;

/** Wildlife & nature picks across Nepal and India. */
export const WILDLIFE_PICKS = [
  "chitwan",
  "bardia",
  "koshi-tappu",
  "jim-corbett",
  "ranthambore",
  "kaziranga",
  "kanha",
  "tadoba",
] as const;

export const COUNTRY_PICKS = {
  nepal: ["kathmandu", "pokhara", "chitwan", "lumbini", "mustang", "annapurna-region"],
  india: ["varanasi", "rishikesh", "jaipur", "ladakh", "kerala", "amritsar"],
  international: ["dubai", "bali", "switzerland", "maldives", "thailand", "kailash-mansarovar"],
} as const;

/**
 * Journey pages that already exist on the live site (from earlier builds).
 * Each one is only rendered if the route is found in the project's app folder.
 */
export const KNOWN_PAGES: { href: string; label: string; blurb: string }[] = [
  { href: "/packages/kailash-mansarovar-yatra", label: "Kailash Mansarovar Yatra", blurb: "The sacred circuit around Mount Kailash, planned end to end." },
  { href: "/spiritual-journeys/12-jyotirlinga-yatra", label: "12 Jyotirlinga Yatra", blurb: "Shiva's twelve shrines, from Somnath to Kedarnath." },
  { href: "/spiritual-journeys/haridwar-rishikesh-yatra", label: "Haridwar & Rishikesh Yatra", blurb: "Ganga aarti, ashrams and the gateway to the Himalaya." },
  { href: "/activities/adventure/paragliding", label: "Paragliding in Nepal", blurb: "Fly over Pokhara's lakes with the Annapurna range ahead." },
  { href: "/activities/adventure/ultra-light-flight", label: "Ultralight flights", blurb: "A low, slow aerial view of lakes, valleys and peaks." },
  { href: "/activities/adventure/camping", label: "Camping in Nepal", blurb: "Nights under Himalayan skies, from lakeshore to high meadow." },
];

export const CONTACT_HREF = "/contact";
export const PLAN_TRIP_HREF = "/contact?topic=plan-my-trip";
