import type { ImageSpec } from "./types";

/**
 * Image manifest for /about.
 *
 * Drop a photo into `public/images/about/<file>` and it replaces the built-in
 * mountain illustration automatically (checked at build time in resolve.ts).
 * Missing files never break the page.
 *
 * Only use photography you own or are licensed to use. Nothing here was sourced
 * or generated for you.
 */
export const IMAGE_SPECS = {
  hero: {
    file: "hero-himalaya.jpg",
    alt: "Himalayan peaks at first light",
    focal: "50% 40%",
    art: "night",
    seed: 11,
    note: "2400×1350 min, landscape. Strong sky area at the top-left (headline sits there). LCP image: keep under ~250 KB.",
  },
  "intro-main": {
    file: "intro-main.jpg",
    alt: "Travellers on a mountain trail in Nepal",
    focal: "50% 45%",
    art: "dawn",
    seed: 21,
    note: "1200×1500, portrait 4:5. Main collage image.",
  },
  "intro-detail": {
    file: "intro-detail.jpg",
    alt: "Prayer flags and a stupa against the mountains",
    focal: "50% 50%",
    art: "gold",
    seed: 22,
    note: "900×900, square. Local culture detail shot.",
  },
  "intro-accent": {
    file: "intro-accent.jpg",
    alt: "A winding road through Himalayan hills",
    focal: "50% 50%",
    art: "forest",
    seed: 23,
    note: "900×700, landscape. Scenic road or landscape.",
  },
  story: {
    file: "story-panorama.jpg",
    alt: "A wide panorama of the Himalayan range",
    focal: "50% 55%",
    art: "ice",
    seed: 31,
    note: "2200×940, 21:9 panorama band above the timeline.",
  },
  philosophy: {
    file: "philosophy-bg.jpg",
    alt: "",
    focal: "50% 50%",
    art: "dusk",
    seed: 41,
    note: "2200×1400. Decorative background, kept very dark by the overlay – texture and mood matter more than detail.",
  },
  cta: {
    file: "cta-bg.jpg",
    alt: "",
    focal: "50% 50%",
    art: "dusk",
    seed: 51,
    note: "2400×1400. Decorative background; a traveller or a ridge line works well.",
  },
  og: {
    file: "og-about.jpg",
    alt: "Karvaahh – Live to Travel",
    focal: "50% 50%",
    art: "night",
    seed: 61,
    note: "1200×630 exactly. Used only for Open Graph / Twitter cards. Include the wordmark in the image if you like.",
  },

  "exp-nepal": { file: "exp-nepal.jpg", alt: "Kathmandu valley with mountains beyond", focal: "50% 50%", art: "dawn", seed: 101, note: "1200×900 landscape." },
  "exp-india": { file: "exp-india.jpg", alt: "A heritage monument in India at golden hour", focal: "50% 50%", art: "gold", seed: 102, note: "1200×900 landscape." },
  "exp-international": { file: "exp-international.jpg", alt: "A coastline seen from a viewpoint abroad", focal: "50% 50%", art: "ice", seed: 103, note: "1200×900 landscape." },
  "exp-spiritual": { file: "exp-spiritual.jpg", alt: "Pilgrims at a temple at dawn", focal: "50% 45%", art: "gold", seed: 104, note: "1200×900 landscape." },
  "exp-adventure": { file: "exp-adventure.jpg", alt: "A paraglider above a Himalayan valley", focal: "50% 40%", art: "dusk", seed: 105, note: "1200×900 landscape." },
  "exp-trekking": { file: "exp-trekking.jpg", alt: "Trekkers on a high mountain trail", focal: "50% 50%", art: "forest", seed: 106, note: "1200×900 landscape." },
  "exp-family": { file: "exp-family.jpg", alt: "A family travelling together by a lake", focal: "50% 50%", art: "ice", seed: 107, note: "1200×900 landscape." },
  "exp-honeymoon": { file: "exp-honeymoon.jpg", alt: "A couple looking out over a quiet lake and mountains", focal: "50% 50%", art: "dusk", seed: 108, note: "1200×900 landscape." },
  "exp-corporate": { file: "exp-corporate.jpg", alt: "A group gathered at a mountain retreat", focal: "50% 50%", art: "forest", seed: 109, note: "1200×900 landscape." },
  "exp-educational": { file: "exp-educational.jpg", alt: "Students exploring a heritage site", focal: "50% 50%", art: "dawn", seed: 110, note: "1200×900 landscape." },
  "exp-wedding": { file: "exp-wedding.jpg", alt: "A wedding setting with mountain scenery", focal: "50% 50%", art: "gold", seed: 111, note: "1200×900 landscape." },
  "exp-wellness": { file: "exp-wellness.jpg", alt: "A yoga session outdoors in the hills", focal: "50% 50%", art: "forest", seed: 112, note: "1200×900 landscape." },
  "exp-luxury": { file: "exp-luxury.jpg", alt: "A refined lodge with a mountain view", focal: "50% 50%", art: "night", seed: 113, note: "1200×900 landscape." },
  "exp-custom": { file: "exp-custom.jpg", alt: "A traveller choosing a route on a map", focal: "50% 50%", art: "ice", seed: 114, note: "1200×900 landscape." },

  "region-nepal": { file: "region-nepal.jpg", alt: "Nepal's Himalayan landscape", focal: "50% 50%", art: "dawn", seed: 201, note: "1400×1000 landscape." },
  "region-india": { file: "region-india.jpg", alt: "Landmarks and landscapes of India", focal: "50% 50%", art: "gold", seed: 202, note: "1400×1000 landscape." },
  "region-asia": { file: "region-asia.jpg", alt: "A coastline and temples in Asia", focal: "50% 50%", art: "forest", seed: 203, note: "1400×1000 landscape." },
  "region-europe": { file: "region-europe.jpg", alt: "Alpine scenery in Europe", focal: "50% 50%", art: "ice", seed: 204, note: "1400×1000 landscape." },
  "region-international": { file: "region-international.jpg", alt: "A far-away coastline and sky", focal: "50% 50%", art: "dusk", seed: 205, note: "1400×1000 landscape." },
} as const satisfies Record<string, ImageSpec>;

export type ImageKey = keyof typeof IMAGE_SPECS;
