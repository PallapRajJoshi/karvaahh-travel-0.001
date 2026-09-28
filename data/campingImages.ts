/**
 * Centralised image configuration for /activities/adventure/camping.
 *
 * Every image on the page resolves through this file, so replacing a
 * photograph means dropping a new .webp into /public/images/camping/…
 * with the same name — no component edits.
 *
 * Missing files do not break the layout: <CampImage> falls back to a
 * tinted landscape gradient if a file 404s.
 */

const BASE = "/images/camping";

export const campingImages = {
  hero: `${BASE}/hero-himalayan-camp.webp`,
  cta: `${BASE}/cta-sunset-camp.webp`,
  og: `${BASE}/og-camping-nepal.jpg`,

  sections: {
    weekend: `${BASE}/sections/weekend-kathmandu.webp`,
    himalayan: `${BASE}/sections/himalayan-camp.webp`,
    village: `${BASE}/sections/village-camp.webp`,
    villageAlt: `${BASE}/sections/village-terraces.webp`,
    jungle: `${BASE}/sections/jungle-camp.webp`,
    annapurna: `${BASE}/sections/annapurna.webp`,
    everest: `${BASE}/sections/everest.webp`,
    langtang: `${BASE}/sections/langtang.webp`,
    manaslu: `${BASE}/sections/manaslu.webp`,
    mustang: `${BASE}/sections/mustang.webp`,
    makalu: `${BASE}/sections/makalu.webp`,
    kanchenjunga: `${BASE}/sections/kanchenjunga.webp`,
    dolpo: `${BASE}/sections/dolpo.webp`,
    rara: `${BASE}/sections/rara.webp`,
    humla: `${BASE}/sections/humla.webp`,
    khaptad: `${BASE}/sections/khaptad.webp`,
    eastern: `${BASE}/sections/eastern-nepal.webp`,
  },

  category: (id: string) => `${BASE}/categories/${id}.webp`,
  destination: (slug: string) => `${BASE}/destinations/${slug}.webp`,
  lake: (slug: string) => `${BASE}/lakes/${slug}.webp`,
  scene: (id: string) => `${BASE}/scenes/${id}.webp`,
  style: (id: string) => `${BASE}/styles/${id}.webp`,
} as const;

/** Tone used by the gradient fallback while real photography is pending. */
export type ImageTone = "forest" | "snow" | "dusk" | "earth" | "lake" | "night";
