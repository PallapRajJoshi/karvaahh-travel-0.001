import type { TravelPackage } from "./package-types";

/**
 * Single source of truth for the /packages hub.
 *
 * RULES
 * - Never invent prices, hotels, inclusions or availability. Leave the field out.
 * - `href` must point at an EXISTING detail route.
 * - `status: "draft"` records are placeholders (hidden in production).
 *   Promote to "live" only when the detail page exists and the facts are verified.
 *
 * The three "live" records point at routes that already exist on the site.
 * Their duration / inclusions / price are intentionally absent until verified.
 */
export const packages: TravelPackage[] = [
  // ───────────────────────── LIVE (existing pages) ─────────────────────────
  {
    id: "kailash-mansarovar-yatra",
    slug: "kailash-mansarovar-yatra",
    name: "Kailash Mansarovar Yatra",
    status: "live",
    country: "Nepal",
    region: "Himalaya",
    destinations: ["Kathmandu", "Mount Kailash", "Lake Mansarovar"],
    categories: ["spiritual", "adventure"],
    tags: ["pilgrimage", "kailash", "mansarovar", "yatra"],
    badge: "signature",
    shortDescription:
      "The high-altitude pilgrimage to Mount Kailash and Lake Mansarovar, planned from Nepal.",
    featured: true,
    popular: true,
    addedAt: "2026-09-01",
    href: "/packages/kailash-mansarovar-yatra",
  },
  {
    id: "12-jyotirlinga-yatra",
    slug: "12-jyotirlinga-yatra",
    name: "12 Jyotirlinga Yatra",
    status: "live",
    country: "India",
    destinations: ["Jyotirlinga temples"],
    categories: ["spiritual"],
    tags: ["pilgrimage", "jyotirlinga", "shiva", "yatra"],
    badge: "spiritual",
    shortDescription: "A pilgrimage circuit through India's twelve Jyotirlinga shrines of Lord Shiva.",
    featured: true,
    addedAt: "2026-08-15",
    href: "/spiritual-journeys/12-jyotirlinga-yatra",
  },
  {
    id: "haridwar-rishikesh-yatra",
    slug: "haridwar-rishikesh-yatra",
    name: "Haridwar & Rishikesh Yatra",
    status: "live",
    country: "India",
    region: "Uttarakhand",
    destinations: ["Haridwar", "Rishikesh"],
    route: ["Haridwar", "Rishikesh"],
    categories: ["spiritual", "wellness"],
    tags: ["ganga", "aarti", "yatra", "uttarakhand"],
    badge: "new",
    shortDescription: "Ganga aarti, riverside temples and yoga towns in Uttarakhand.",
    addedAt: "2026-09-20",
    href: "/spiritual-journeys/haridwar-rishikesh-yatra",
  },

  // ─────────────── DRAFT placeholders (structure only, no offers) ───────────────
  // Routes and durations below come from the Karvaahh brief. No prices, hotels
  // or inclusions are stated. Add them only once verified.
  {
    id: "nepal-ktm-pkr-lumbini-5n6d",
    slug: "kathmandu-pokhara-lumbini",
    name: "Kathmandu – Pokhara – Lumbini",
    status: "draft",
    country: "Nepal",
    destinations: ["Kathmandu", "Pokhara", "Lumbini"],
    route: ["Kathmandu", "Pokhara", "Lumbini"],
    duration: { nights: 5, days: 6 },
    categories: ["spiritual", "family"],
    shortDescription: "Nepal's classic trio: temples in Kathmandu, lakeside Pokhara and the Buddha's birthplace.",
    popular: true,
    addedAt: "2026-09-25",
  },
  {
    id: "nepal-ktm-pkr-muktinath-ghandruk-lumbini-6n7d",
    slug: "kathmandu-pokhara-muktinath-ghandruk-lumbini",
    name: "Kathmandu – Pokhara – Muktinath – Ghandruk – Lumbini",
    status: "draft",
    country: "Nepal",
    destinations: ["Kathmandu", "Pokhara", "Muktinath", "Ghandruk", "Lumbini"],
    route: ["Kathmandu", "Pokhara", "Muktinath", "Ghandruk", "Lumbini"],
    duration: { nights: 6, days: 7 },
    categories: ["spiritual", "offbeat"],
    shortDescription: "Mountain roads to Muktinath, village stays in Ghandruk and the pilgrimage to Lumbini.",
    featured: true,
    addedAt: "2026-09-25",
  },
  {
    id: "nepal-ktm-pkr-muktinath-chitwan-lumbini-7n8d",
    slug: "kathmandu-pokhara-muktinath-chitwan-lumbini",
    name: "Kathmandu – Pokhara – Muktinath – Chitwan – Lumbini",
    status: "draft",
    country: "Nepal",
    destinations: ["Kathmandu", "Pokhara", "Muktinath", "Chitwan", "Lumbini"],
    route: ["Kathmandu", "Pokhara", "Muktinath", "Chitwan", "Lumbini"],
    duration: { nights: 7, days: 8 },
    categories: ["spiritual", "wildlife", "family"],
    shortDescription: "Pilgrimage, mountain and jungle in one route: Muktinath, Chitwan and Lumbini.",
    addedAt: "2026-09-25",
  },
  {
    id: "nepal-ktm-pkr-muktinath-ghandruk-chitwan-janakpur-lumbini-9n10d",
    slug: "kathmandu-pokhara-muktinath-ghandruk-chitwan-janakpur-lumbini",
    name: "Kathmandu – Pokhara – Muktinath – Ghandruk – Chitwan – Janakpur – Lumbini",
    status: "draft",
    country: "Nepal",
    destinations: ["Kathmandu", "Pokhara", "Muktinath", "Ghandruk", "Chitwan", "Janakpur", "Lumbini"],
    route: ["Kathmandu", "Pokhara", "Muktinath", "Ghandruk", "Chitwan", "Janakpur", "Lumbini"],
    duration: { nights: 9, days: 10 },
    categories: ["spiritual", "wildlife"],
    badge: "signature",
    shortDescription: "Nepal's most complete pilgrimage-and-landscape route, from Kathmandu to Janakpur and Lumbini.",
    featured: true,
    addedAt: "2026-09-25",
  },
  {
    id: "nepal-mustang-circuit",
    slug: "mustang-circuit",
    name: "Mustang Circuit",
    status: "draft",
    country: "Nepal",
    region: "Gandaki",
    destinations: ["Pokhara", "Jomsom", "Muktinath", "Mustang"],
    categories: ["adventure", "offbeat"],
    shortDescription: "High-altitude landscapes, ancient villages and Himalayan adventure.",
    addedAt: "2026-09-25",
  },
  {
    id: "nepal-everest-base-camp",
    slug: "everest-base-camp",
    name: "Everest Base Camp",
    status: "draft",
    country: "Nepal",
    region: "Koshi",
    destinations: ["Kathmandu", "Lukla", "Everest Base Camp"],
    categories: ["trekking", "adventure"],
    shortDescription: "The classic trek to the foot of the world's highest mountain.",
    addedAt: "2026-09-25",
  },
];
