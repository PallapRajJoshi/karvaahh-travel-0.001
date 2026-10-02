/**
 * Central image registry for the Culture & Festival Experiences page.
 *
 * No verified photography was available when this page was built, so every
 * asset ships as `ready: false` and renders a labelled placeholder instead of
 * a broken or mislabelled image.
 *
 * To add a photo:
 *   1. Save it at  public/images/culture-festival/<file>
 *   2. Update `alt` so it describes exactly what the photo shows
 *   3. Flip `ready` to true
 *
 * Only use a photo that genuinely shows the named festival, community or place.
 */
export const MEDIA_BASE = "/images/culture-festival";

export interface MediaAsset {
  /** Path under MEDIA_BASE. */
  file: string;
  /** Short subject label shown on the placeholder. */
  subject: string;
  /** Alt text for the final photo. Rewrite to match the real image. */
  alt: string;
  /** Recommended crop, for the README image manifest. */
  crop: string;
  ready: boolean;
}

function m(file: string, subject: string, alt: string, crop: string): MediaAsset {
  return { file, subject, alt, crop, ready: false };
}

export const MEDIA = {
  hero: m(
    "hero/kathmandu-valley-celebration.jpg",
    "Kathmandu Valley celebration",
    "A festival procession passing through a historic courtyard in the Kathmandu Valley",
    "16:9 landscape, min 2400px wide, subject kept in the centre-right",
  ),
  highlight: m(
    "highlight/cultural-portrait.jpg",
    "Living culture of Nepal",
    "Local people in traditional dress gathered in front of a heritage temple",
    "4:5 portrait, min 1400px tall",
  ),

  // Festivals
  dashain: m("festivals/dashain.jpg", "Dashain", "A family receiving tika and blessings from an elder during Dashain", "4:3 landscape, min 1200px wide"),
  tihar: m("festivals/tihar.jpg", "Tihar", "A house decorated with oil lamps, marigold garlands and rangoli during Tihar", "4:3 landscape, min 1200px wide"),
  holi: m("festivals/holi.jpg", "Holi", "People celebrating Holi with coloured powder in a public square", "4:3 landscape, min 1200px wide"),
  "indra-jatra": m("festivals/indra-jatra.jpg", "Indra Jatra", "A ceremonial procession during Indra Jatra in Kathmandu", "4:3 landscape, min 1200px wide"),
  "buddha-jayanti": m("festivals/buddha-jayanti.jpg", "Buddha Jayanti", "Butter lamps and prayer offerings at a stupa on Buddha Jayanti", "4:3 landscape, min 1200px wide"),
  "gai-jatra": m("festivals/gai-jatra.jpg", "Gai Jatra", "A Gai Jatra procession through the old streets of the Kathmandu Valley", "4:3 landscape, min 1200px wide"),
  chhath: m("festivals/chhath.jpg", "Chhath", "Families gathered at a river's edge with offerings during Chhath", "4:3 landscape, min 1200px wide"),
  teej: m("festivals/teej.jpg", "Teej", "Women in red dancing and singing together during Teej", "4:3 landscape, min 1200px wide"),

  // Heritage cities
  kathmandu: m("heritage/kathmandu.jpg", "Kathmandu", "Historic temples around Kathmandu Durbar Square", "3:2 landscape, min 1600px wide"),
  bhaktapur: m("heritage/bhaktapur.jpg", "Bhaktapur", "Red-brick Newar architecture and temples in Bhaktapur", "3:2 landscape, min 1600px wide"),
  patan: m("heritage/patan.jpg", "Patan", "Temples and courtyards at Patan Durbar Square", "3:2 landscape, min 1600px wide"),

  // Communities
  newari: m("communities/newari.jpg", "Newari culture", "Newar community members at a traditional gathering in the Kathmandu Valley", "4:5 portrait, min 1200px tall"),
  tharu: m("communities/tharu.jpg", "Tharu culture", "Tharu community members in traditional dress in the Terai", "4:5 portrait, min 1200px tall"),
  "sherpa-gurung": m("communities/sherpa-gurung.jpg", "Sherpa & Gurung cultures", "A Himalayan village with a monastery and prayer flags", "4:5 portrait, min 1200px tall"),

  // Performances
  performance: m("performances/traditional-performance.jpg", "Traditional performance", "Musicians and dancers performing a traditional Nepali folk piece", "3:2 landscape, min 1800px wide"),

  // Experiences
  cuisine: m("experiences/cuisine.jpg", "Traditional cuisine", "A traditional Nepali meal served on leaf plates", "4:3 landscape, min 1000px wide"),
  "heritage-walk": m("experiences/heritage-walk.jpg", "Heritage walk", "Visitors walking through a historic neighbourhood in Kathmandu Valley", "4:3 landscape, min 1000px wide"),
  "arts-crafts": m("experiences/arts-crafts.jpg", "Arts & crafts", "A craftsperson shaping clay at a pottery wheel", "4:3 landscape, min 1000px wide"),
  workshop: m("experiences/workshop.jpg", "Cultural workshop", "A small group learning a traditional craft from a local teacher", "4:3 landscape, min 1000px wide"),
  "community-experience": m("experiences/community.jpg", "Community experience", "Visitors sharing tea with a host family in a village", "4:3 landscape, min 1000px wide"),
  attire: m("experiences/attire.jpg", "Traditional attire", "Traditional Nepali textiles and clothing", "4:3 landscape, min 1000px wide"),
  monastery: m("experiences/monastery.jpg", "Monastery visit", "Prayer wheels and monastery architecture", "4:3 landscape, min 1000px wide"),
  photography: m("experiences/photography.jpg", "Festival photography", "A photographer capturing a festival scene with the subjects' permission", "4:3 landscape, min 1000px wide"),

  // Itineraries
  "journey-valley": m("itineraries/valley-heritage.jpg", "Kathmandu Valley heritage", "Durbar Square architecture in the Kathmandu Valley at golden hour", "3:2 landscape, min 1400px wide"),
  "journey-festival": m("itineraries/festival-heritage.jpg", "Festival & heritage", "A festival crowd in a heritage square", "3:2 landscape, min 1400px wide"),
  "journey-himalaya": m("itineraries/himalayan-culture.jpg", "Himalayan culture", "A Himalayan community village with mountains behind", "3:2 landscape, min 1400px wide"),

  // Responsible tourism + final CTA
  responsible: m("responsible/respectful-visit.jpg", "Respectful visit", "Visitors observing a temple courtyard quietly and respectfully", "4:5 portrait, min 1200px tall"),
  "final-cta": m("cta/cultural-scene.jpg", "Nepali cultural scene", "A cultural scene in Nepal at dusk with temples and lights", "16:9 landscape, min 2400px wide"),

  // Gallery
  "gallery-dashain": m("gallery/dashain.jpg", "Dashain", "Dashain celebrations with family gathered for blessings", "see gallery ratio"),
  "gallery-tihar": m("gallery/tihar.jpg", "Tihar", "Tihar decorations and lights at night", "see gallery ratio"),
  "gallery-holi": m("gallery/holi.jpg", "Holi", "Holi festivities with coloured powder", "see gallery ratio"),
  "gallery-indra-jatra": m("gallery/indra-jatra.jpg", "Indra Jatra", "An Indra Jatra procession in Kathmandu", "see gallery ratio"),
  "gallery-buddha-jayanti": m("gallery/buddha-jayanti.jpg", "Buddha Jayanti", "Buddha Jayanti celebrations at a stupa", "see gallery ratio"),
  "gallery-architecture": m("gallery/valley-architecture.jpg", "Valley architecture", "Kathmandu Valley heritage architecture", "see gallery ratio"),
  "gallery-newari": m("gallery/newari.jpg", "Newari traditions", "Newari cultural traditions on display", "see gallery ratio"),
  "gallery-tharu": m("gallery/tharu-performance.jpg", "Tharu folk performance", "A Tharu folk dance performance", "see gallery ratio"),
  "gallery-sherpa-gurung": m("gallery/sherpa-gurung.jpg", "Sherpa & Gurung traditions", "Sherpa or Gurung community traditions", "see gallery ratio"),
  "gallery-food-crafts": m("gallery/food-crafts.jpg", "Food, crafts & gatherings", "Traditional food and crafts at a local gathering", "see gallery ratio"),
} as const satisfies Record<string, MediaAsset>;

export type MediaId = keyof typeof MEDIA;
