import type { InquiryPrefill } from "../types";

export const SITE_URL = "https://karvaahh.in";
export const PAGE_PATH = "/activities/culture-festival-experiences";
export const PAGE_URL = `${SITE_URL}${PAGE_PATH}`;
export const BRAND = "Karvaahh – Live to Travel";

export const SEO = {
  title: "Culture & Festival Experiences in Nepal | Karvaahh",
  description:
    "Discover Nepal’s vibrant festivals, cultural heritage, traditional music, local communities, and authentic cultural experiences with Karvaahh – Live to Travel.",
  keywords: [
    "Culture and festival experiences in Nepal",
    "Nepal cultural tours",
    "Nepal festivals and traditions",
    "Nepal heritage tours",
    "Kathmandu cultural experiences",
    "Nepal traditional festivals",
    "Newari cultural experiences",
    "Nepal cultural heritage travel",
  ],
};

export const BREADCRUMBS = [
  { name: "Home", href: "/" },
  { name: "Activities", href: "/activities" },
  { name: "Culture & Festival Experiences", href: PAGE_PATH },
];

export const HERO = {
  eyebrow: "CULTURE & FESTIVAL EXPERIENCES",
  headingWords: ["Experience", "the", "Living", "Culture", "of", "Nepal"],
  text:
    "Discover Nepal through its vibrant festivals, ancient traditions, sacred celebrations, and the warm spirit of its diverse communities.",
  primaryCta: "Explore Cultural Experiences",
  secondaryCta: "Plan Your Cultural Journey",
};

/** In-page section ids used by CTAs and the section chips. */
export const IDS = {
  highlight: "highlight",
  festivals: "festivals",
  heritage: "heritage",
  communities: "communities",
  performances: "performances",
  experiences: "experiences",
  journeys: "journeys",
  why: "why-karvaahh",
  gallery: "gallery",
  respect: "respect",
  faq: "faq",
  plan: "plan",
} as const;

export const SECTION_CHIPS = [
  { label: "Festivals", href: `#${IDS.festivals}` },
  { label: "Heritage cities", href: `#${IDS.heritage}` },
  { label: "Communities", href: `#${IDS.communities}` },
  { label: "Music & dance", href: `#${IDS.performances}` },
  { label: "Journeys", href: `#${IDS.journeys}` },
];

export const HIGHLIGHT_HEADING = "Culture & Festival Experiences – Destination Highlight";

/**
 * DESTINATION HIGHLIGHT: supplied copy. Do not shorten, rewrite or reorder.
 * The build check in the README compares this string with the brief.
 */
export const HIGHLIGHT_TEXT =
  "Culture & Festival Experiences offer an immersive journey into Nepal’s vibrant traditions, colorful celebrations, and rich cultural heritage, bringing travelers closer to the authentic spirit of the Himalayas. From the grand festivities of Dashain, Tihar, Holi, and Indra Jatra to the spiritual celebrations of Buddha Jayanti, Gai Jatra, and Chhath, experience the joy, devotion, and cultural diversity that make Nepal truly unique. Explore the ancient heritage of Kathmandu, Bhaktapur, and Patan, witness traditional music and dance performances, discover centuries-old temples and monasteries, and experience the warmth of local communities through authentic food, traditional attire, and cultural rituals. Celebrate the vibrant Newari culture, experience the colorful Teej festival, and discover the unique traditions of the Tharu, Sherpa, and Gurung communities through local festivals, folk performances, and cultural gatherings. Whether participating in festive celebrations, exploring historic heritage sites, or experiencing traditional lifestyles, these journeys offer unforgettable opportunities to connect with Nepal’s living culture, timeless traditions, and extraordinary cultural diversity.";

export const FINAL_CTA = {
  heading: "Every Tradition Tells a Story. Discover Yours in Nepal.",
  text:
    "From colorful festivals to timeless heritage and meaningful community experiences, discover the cultural spirit of Nepal with Karvaahh – Live to Travel.",
  primary: "Explore Cultural Experiences",
  secondary: "Customize Your Journey",
};

export const GENERAL_PREFILL: InquiryPrefill = { interest: "custom" };
