import type { SiteImage } from "../types";

/** Single source of truth for image paths + alt text. See README → Image manifest. */
const BASE = "/images/spiritual-journeys/amarnath-vaishno-devi";

export const IMAGES = {
  hero: {
    src: `${BASE}/hero-amarnath-himalaya.jpg`,
    alt: "Pilgrims walking a mountain trail towards the Amarnath Cave beneath snow-covered Himalayan peaks",
  },
  og: {
    src: `${BASE}/og-amarnath-vaishno-devi.jpg`,
    alt: "Amarnath and Vaishno Devi Yatra — Himalayan pilgrimage in Jammu and Kashmir",
  },
  amarnath: {
    src: `${BASE}/amarnath-cave.jpg`,
    alt: "Shri Amarnath Cave pilgrimage in the Himalayan mountains",
  },
  pahalgam: {
    src: `${BASE}/pahalgam-lidder-valley.jpg`,
    alt: "Mountain landscape near Pahalgam, Jammu and Kashmir, with the Lidder River",
  },
  baltal: {
    src: `${BASE}/baltal-base.jpg`,
    alt: "Alpine valley at Baltal, a base for the Amarnath pilgrimage",
  },
  vaishnoDevi: {
    src: `${BASE}/vaishno-devi-trikuta.jpg`,
    alt: "Mata Vaishno Devi Temple pilgrimage in the Trikuta Hills",
  },
  katra: {
    src: `${BASE}/katra-town.jpg`,
    alt: "Katra town at the foot of the Trikuta Hills, base for the Vaishno Devi pilgrimage",
  },
  srinagar: {
    src: `${BASE}/srinagar-dal-lake.jpg`,
    alt: "Traditional houseboats on Dal Lake in Srinagar",
  },
  gulmarg: {
    src: `${BASE}/gulmarg-meadows.jpg`,
    alt: "Meadows and mountain slopes at Gulmarg, Kashmir",
  },
  sonamarg: {
    src: `${BASE}/sonamarg-valley.jpg`,
    alt: "Sonamarg valley with glacier-fed river and mountain peaks",
  },
  routeTrail: {
    src: `${BASE}/amarnath-route-trail.jpg`,
    alt: "Pilgrims travelling through the Amarnath mountain route",
  },
  vaishnoPath: {
    src: `${BASE}/vaishno-devi-pathway.jpg`,
    alt: "Pilgrims on the covered pathway to Mata Vaishno Devi shrine",
  },
} satisfies Record<string, SiteImage>;

/** Related-journey card images live with those journeys' own pages. */
export const RELATED_IMAGES = {
  jyotirlinga: {
    src: "/images/spiritual-journeys/12-jyotirlinga-yatra/hero.jpg",
    alt: "Jyotirlinga temple on a riverbank at dawn",
  },
  haridwar: {
    src: "/images/spiritual-journeys/haridwar-rishikesh-yatra/hero.jpg",
    alt: "Evening Ganga Aarti on the ghats at Haridwar",
  },
} satisfies Record<string, SiteImage>;
