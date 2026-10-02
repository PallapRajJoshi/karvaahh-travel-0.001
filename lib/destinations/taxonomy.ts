import type {
  CountryMeta,
  ExperienceId,
  ExperienceMeta,
  ProvinceMeta,
  RegionId,
  RegionMeta,
} from "./types";

export const COUNTRIES: CountryMeta[] = [
  {
    id: "nepal",
    label: "Nepal",
    flag: "🇳🇵",
    tagline: "Himalayan peaks, sacred valleys and living culture",
  },
  {
    id: "india",
    label: "India",
    flag: "🇮🇳",
    tagline: "Pilgrimage routes, royal heritage and wild landscapes",
  },
  {
    id: "international",
    label: "International",
    flag: "🌎",
    tagline: "Island escapes, great cities and holy places abroad",
  },
];

/**
 * Experience filters. Pilgrimage is folded into "spiritual" and Himalayan is a
 * region, so neither is duplicated as a second experience.
 */
export const EXPERIENCES: ExperienceMeta[] = [
  { id: "spiritual", label: "Spiritual Journeys", short: "Spiritual", blurb: "Temples, pilgrimages and sacred circuits" },
  { id: "adventure", label: "Adventure", short: "Adventure", blurb: "Flights, rivers, passes and high places" },
  { id: "trekking", label: "Trekking", short: "Trekking", blurb: "Teahouse treks and remote circuits" },
  { id: "wildlife", label: "Wildlife", short: "Wildlife", blurb: "Parks, reserves and safaris" },
  { id: "nature", label: "Nature", short: "Nature", blurb: "Lakes, forests and open landscapes" },
  { id: "culture", label: "Culture", short: "Culture", blurb: "Living traditions, food and festivals" },
  { id: "heritage", label: "Heritage", short: "Heritage", blurb: "Palaces, forts and world heritage sites" },
  { id: "family", label: "Family Holidays", short: "Family", blurb: "Easy-paced trips for all ages" },
  { id: "honeymoon", label: "Honeymoon", short: "Honeymoon", blurb: "Romantic escapes for two" },
  { id: "corporate", label: "Corporate Tours", short: "Corporate", blurb: "Groups, retreats and incentives" },
  { id: "educational", label: "Educational Tours", short: "Educational", blurb: "Study trips and learning journeys" },
  { id: "wedding", label: "Destination Weddings", short: "Weddings", blurb: "Settings made for celebrations" },
  { id: "beach", label: "Beach Holidays", short: "Beach", blurb: "Coast, islands and slow days" },
  { id: "luxury", label: "Luxury Travel", short: "Luxury", blurb: "Refined stays and private experiences" },
  { id: "offbeat", label: "Offbeat Travel", short: "Offbeat", blurb: "Quiet trails few travellers reach" },
  { id: "road-trip", label: "Road Trips", short: "Road trips", blurb: "Overland routes and scenic drives" },
  { id: "helicopter", label: "Helicopter Tours", short: "Helicopter", blurb: "Mountain flights and aerial darshan" },
  { id: "wellness", label: "Wellness & Yoga", short: "Wellness", blurb: "Yoga, meditation and restorative stays" },
  { id: "photography", label: "Photography", short: "Photography", blurb: "Landscapes and frames worth the journey" },
  { id: "festival", label: "Festival Experiences", short: "Festivals", blurb: "Travel timed around celebrations" },
];

export const EXPERIENCE_BY_ID = Object.fromEntries(
  EXPERIENCES.map((e) => [e.id, e]),
) as Record<ExperienceId, ExperienceMeta>;

export const REGIONS: RegionMeta[] = [
  { id: "himalayas", label: "Himalayas", blurb: "Nepal, India, Bhutan and Tibet's high country" },
  { id: "south-asia", label: "South Asia", blurb: "Plains, coasts and islands of the subcontinent" },
  { id: "southeast-asia", label: "Southeast Asia", blurb: "Temples, islands and street food" },
  { id: "middle-east", label: "Middle East", blurb: "Desert cities, ancient sites and holy places" },
  { id: "europe", label: "Europe", blurb: "Old cities, alpine lakes and coastlines" },
  { id: "africa", label: "Africa", blurb: "Safaris, pyramids and Atlantic medinas" },
  { id: "americas", label: "Americas", blurb: "Big cities, national parks and beaches" },
  { id: "oceania", label: "Australia & New Zealand", blurb: "Reefs, fjords and open road" },
];

export const REGION_BY_ID = Object.fromEntries(
  REGIONS.map((r) => [r.id, r]),
) as Record<RegionId, RegionMeta>;

/**
 * Province pages already exist at app/destinations/[province-slug]/page.tsx.
 * `routeSlug` must match the folder/URL the live site uses exactly
 * (see README — check the Sudurpashchim spelling first).
 */
export const PROVINCES: ProvinceMeta[] = [
  {
    id: "koshi",
    name: "Koshi Province",
    routeSlug: "koshi-province",
    blurb: "Tea gardens, Himalayan landscapes, sacred sites and eastern Nepal's hidden adventures.",
    highlights: ["Everest Region", "Kanchenjunga", "Makalu", "Ilam"],
    cta: "Explore Koshi",
  },
  {
    id: "madhesh",
    name: "Madhesh Province",
    routeSlug: "madhesh-province",
    blurb: "Mithila art, temple towns and the plains culture at the heart of the Janaki story.",
    highlights: ["Janakpur", "Janaki Mandir"],
    cta: "Explore Madhesh",
  },
  {
    id: "bagmati",
    name: "Bagmati Province",
    routeSlug: "bagmati-province",
    blurb: "The capital valley, ancient Newar towns, Langtang and the gateway to most journeys.",
    highlights: ["Kathmandu", "Bhaktapur", "Langtang", "Chitwan"],
    cta: "Explore Bagmati",
  },
  {
    id: "gandaki",
    name: "Gandaki Province",
    routeSlug: "gandaki-province",
    blurb: "Pokhara's lakes, the Annapurna and Manaslu circuits and the road to Mustang.",
    highlights: ["Pokhara", "Annapurna", "Mustang", "Muktinath"],
    cta: "Explore Gandaki",
  },
  {
    id: "lumbini",
    name: "Lumbini Province",
    routeSlug: "lumbini-province",
    blurb: "The Buddha's birthplace, Terai wildlife and the hill town of Tansen.",
    highlights: ["Lumbini", "Bardia", "Tansen", "Swargadwari"],
    cta: "Explore Lumbini",
  },
  {
    id: "karnali",
    name: "Karnali Province",
    routeSlug: "karnali-province",
    blurb: "Rara Lake, Dolpo and Humla: Nepal's most remote and least-visited high country.",
    highlights: ["Rara Lake", "Dolpo", "Humla", "Jumla"],
    cta: "Explore Karnali",
  },
  {
    id: "sudurpashchim",
    name: "Sudurpashchim Province",
    // A Sudurpashchim 404 was once caused by "sudurpaschim" vs "sudurpashchim": match the live URL.
    routeSlug: "sudurpashchim-province",
    blurb: "Khaptad's meadows, Api-Nampa and far-western temples beyond the usual routes.",
    highlights: ["Khaptad", "Api-Nampa", "Badimalika", "Dhangadhi"],
    cta: "Explore Sudurpashchim",
  },
];

export const PROVINCE_BY_ID = Object.fromEntries(
  PROVINCES.map((p) => [p.id, p]),
) as Record<ProvinceMeta["id"], ProvinceMeta>;
