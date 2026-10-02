/**
 * Central image registry.
 *
 * No verified Karvaahh photography was available when this page was built, so every
 * frame renders as a labeled placeholder. To activate a real photo:
 *   1. Save it to /public/images/educational-tours/<file>
 *   2. Add its key to READY below.
 *
 * Only add authentic or properly licensed images. Avoid identifiable minors unless
 * written permission and usage rights exist.
 */

const BASE = "/images/educational-tours";

export const READY = new Set<MediaKey>([
  // "ktm-heritage",
]);

export type MediaKey =
  | "hero-heritage"
  | "hero-wildlife"
  | "hero-himalaya"
  | "hero-culture"
  | "ktm-heritage"
  | "bhaktapur"
  | "patan"
  | "lumbini"
  | "chitwan"
  | "pokhara"
  | "annapurna"
  | "students-activity"
  | "museum"
  | "nature-trail"
  | "field-learning"
  | "documentation"
  | "cultural-workshop"
  | "group-activity"
  | "science"
  | "community"
  | "final-cta";

type MediaEntry = { file: string; alt: string; caption: string; tone: 0 | 1 | 2 | 3 | 4 | 5 };

export const MEDIA: Record<MediaKey, MediaEntry> = {
  "hero-heritage": { file: "hero-heritage.jpg", alt: "Carved wooden temple architecture in a Kathmandu Valley heritage square", caption: "Heritage", tone: 2 },
  "hero-wildlife": { file: "hero-wildlife.jpg", alt: "Grassland and forest edge in a Nepal national park", caption: "Wildlife", tone: 3 },
  "hero-himalaya": { file: "hero-himalaya.jpg", alt: "Snow-capped Himalayan range above green hills near Pokhara", caption: "Himalaya", tone: 0 },
  "hero-culture": { file: "hero-culture.jpg", alt: "Local craft and cultural activity in a traditional Nepali settlement", caption: "Culture", tone: 5 },
  "ktm-heritage": { file: "ktm-heritage.jpg", alt: "Historic temples and courtyards of Kathmandu heritage architecture", caption: "Kathmandu heritage", tone: 2 },
  bhaktapur: { file: "bhaktapur.jpg", alt: "Bhaktapur Durbar Square with traditional brick and timber buildings", caption: "Bhaktapur Durbar Square", tone: 5 },
  patan: { file: "patan.jpg", alt: "Patan heritage square with metalwork and carved temple details", caption: "Patan", tone: 2 },
  lumbini: { file: "lumbini.jpg", alt: "Lumbini heritage site, the birthplace of Lord Buddha", caption: "Lumbini", tone: 1 },
  chitwan: { file: "chitwan.jpg", alt: "Riverine forest and grassland landscape of Chitwan National Park", caption: "Chitwan National Park", tone: 3 },
  pokhara: { file: "pokhara.jpg", alt: "Phewa Lake with the Annapurna range beyond, Pokhara", caption: "Pokhara", tone: 4 },
  annapurna: { file: "annapurna.jpg", alt: "Mountain trail and village landscape in the Annapurna region", caption: "Annapurna region", tone: 0 },
  "students-activity": { file: "students-activity.jpg", alt: "Group learning activity during an educational tour (no identifiable minors)", caption: "Learning activity", tone: 1 },
  museum: { file: "museum.jpg", alt: "Museum gallery with artifacts and exhibits", caption: "Museum learning", tone: 4 },
  "nature-trail": { file: "nature-trail.jpg", alt: "Guided nature trail through forest", caption: "Nature trail", tone: 3 },
  "field-learning": { file: "field-learning.jpg", alt: "Field notebooks and observation along a river valley", caption: "Field learning", tone: 0 },
  documentation: { file: "documentation.jpg", alt: "Camera and notebook used to document a heritage site", caption: "Documentation", tone: 5 },
  "cultural-workshop": { file: "cultural-workshop.jpg", alt: "Traditional craft workshop with local artisans", caption: "Cultural workshop", tone: 2 },
  "group-activity": { file: "group-activity.jpg", alt: "Group reflection session outdoors", caption: "Group reflection", tone: 1 },
  science: { file: "science.jpg", alt: "Interactive science learning centre exhibits", caption: "Science & technology", tone: 4 },
  community: { file: "community.jpg", alt: "Village community scene in the Nepali hills", caption: "Community", tone: 5 },
  "final-cta": { file: "final-cta.jpg", alt: "Himalayan landscape at first light", caption: "The world is the classroom", tone: 0 },
};

export function resolveMedia(key: MediaKey) {
  const entry = MEDIA[key];
  return { ...entry, src: READY.has(key) ? `${BASE}/${entry.file}` : null };
}
