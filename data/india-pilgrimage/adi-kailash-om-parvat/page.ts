import { images } from "./images";
import { enquiryLink, site } from "./site";
import type { Cta, Highlight, QuickFact, SectionToggle } from "./types";

/**
 * Page-level content: SEO, hero, overview, feature sections and CTAs.
 * Collections (destinations, packages, route, FAQs…) live in their own files.
 */

export const ROUTE_PATH = "/india-pilgrimage/adi-kailash-om-parvat";

/* ------------------------------------------------------------------ */
/* Section order & visibility                                          */
/* Reorder this array to reorder the page; set enabled:false to hide.  */
/* ------------------------------------------------------------------ */

export const sections: SectionToggle[] = [
  { id: "overview", enabled: true, navLabel: "Overview" },
  { id: "sacred-sites", enabled: true, navLabel: "Sacred Sites" },
  { id: "adi-kailash", enabled: true },
  { id: "om-parvat", enabled: true, navLabel: "Om Parvat" },
  { id: "packages", enabled: true, navLabel: "Packages" },
  { id: "route", enabled: true, navLabel: "Route" },
  { id: "culture", enabled: true },
  { id: "why-karvaahh", enabled: true },
  { id: "best-time", enabled: true, navLabel: "Best Time" },
  { id: "prepare", enabled: true, navLabel: "Prepare" },
  { id: "faq", enabled: true, navLabel: "FAQ" },
  { id: "final-cta", enabled: true },
];

/** Shows the sticky "On this page" bar. */
export const showSectionNav = true;
/** Shows the thin reading-progress bar at the top of the viewport. */
export const showScrollProgress = true;

/* ------------------------------------------------------------------ */
/* Shared CTAs                                                         */
/* ------------------------------------------------------------------ */

export const ctas = {
  explorePackages: { label: "Explore Yatra Packages", href: "#packages", variant: "primary" },
  customize: { label: "Customize Your Yatra", href: enquiryLink(), variant: "secondary" },
  contact: { label: "Contact Karvaahh", href: site.contactHref, variant: "ghost" },
} satisfies Record<string, Cta>;

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

export const seo = {
  title: "Adi Kailash & Om Parvat Yatra | Sacred Himalayan Pilgrimage – Karvaahh",
  description:
    "Discover Adi Kailash and Om Parvat Yatra with Karvaahh. Explore Chhota Kailash, Parvati Sarovar, Gauri Kund, sacred Himalayan landscapes, and customized pilgrimage packages in Uttarakhand.",
  canonical: `${site.url}${ROUTE_PATH}`,
  ogImage: images.og,
  keywords: [
    "Adi Kailash Yatra",
    "Om Parvat Yatra",
    "Chhota Kailash",
    "Parvati Sarovar",
    "Gauri Kund",
    "Adi Kailash tour package",
    "Kumaon pilgrimage",
  ],
};

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Sacred Himalayan Pilgrimage",
  title: "Adi Kailash & Om Parvat Yatra",
  subtitle: "A Divine Journey Through the Sacred Himalayas",
  text: "Discover the sacred beauty of Chhota Kailash, witness the divine ॐ symbol of Om Parvat, and explore the spiritual wonders of Uttarakhand.",
  image: images.hero,
  ctas: [ctas.explorePackages, { ...ctas.customize, variant: "light" }] as Cta[],
  scrollCueLabel: "Scroll to discover",
  scrollCueTarget: "#overview",
};

/** Four at-a-glance facts shown at the foot of the hero. Keep them honest. */
export const quickFacts: QuickFact[] = [
  { label: "Region", value: "Vyas Valley, Kumaon Himalaya" },
  { label: "Permit", value: "Inner Line Permit, issued at Dharchula", needsConfirmation: true },
  { label: "Season", value: "Seasonal — dates confirmed each year", needsConfirmation: true },
  { label: "Altitude", value: "High altitude — above 4,000 m in places" },
];

/* ------------------------------------------------------------------ */
/* Breadcrumb                                                          */
/* ------------------------------------------------------------------ */

export const breadcrumb = [
  { name: "Home", href: "/" },
  { name: site.categoryName, href: site.categoryHref },
  { name: "Adi Kailash & Om Parvat Yatra", href: ROUTE_PATH },
];

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

export const overview = {
  eyebrow: "The Yatra",
  heading: "A Sacred Journey Beyond the Ordinary",
  /** Verbatim destination highlight paragraph from the brief. */
  paragraph:
    "Adi Kailash & Om Parvat Yatra is a spiritually enriching pilgrimage to two of the most sacred and breathtaking destinations in the Kumaon region of Uttarakhand, nestled in the majestic Himalayas near the Indo-Tibetan border. Revered as Chhota Kailash, Adi Kailash is associated with Lord Shiva and Goddess Parvati, offering a serene spiritual atmosphere surrounded by snow-capped peaks, pristine lakes, and tranquil mountain valleys. Experience the divine beauty of Om Parvat, renowned for the naturally formed ॐ symbol visible on its snow-covered mountain face, and seek blessings at sacred sites such as Parvati Sarovar, Gauri Kund, and the ancient Shiva temples. Journey through scenic Himalayan roads, remote mountain villages, lush valleys, and breathtaking landscapes while discovering the spiritual heritage and natural wonders of Uttarakhand. Combining devotion, high-altitude adventure, cultural exploration, and unforgettable Himalayan views, this pilgrimage offers a truly memorable experience for every traveler.",
  /** Number of opening sentences styled as a larger lead-in. 0 disables. */
  leadSentences: 1,
  mainImage: images.overviewMain,
  insetImage: images.overviewInset,
  insetCaption: "Om Parvat — the mountain of the sacred ॐ",
  cta: ctas.customize,
  secondaryCta: { label: "See the route", href: "#route", variant: "ghost" } as Cta,
};

/* ------------------------------------------------------------------ */
/* Section headings                                                    */
/* ------------------------------------------------------------------ */

export const headings = {
  sacredSites: {
    eyebrow: "Sacred Sites",
    heading: "Explore the Sacred Wonders of Adi Kailash",
    subtitle:
      "Discover sacred Himalayan peaks, pristine lakes, ancient temples, and spiritually significant landmarks.",
  },
  packages: {
    eyebrow: "Yatra Packages",
    heading: "Choose Your Adi Kailash Journey",
    subtitle:
      "Discover customized pilgrimage experiences designed around your travel preferences, schedule, and comfort.",
  },
  route: {
    eyebrow: "Route & Journey",
    heading: "Journey Through the Sacred Kumaon Himalayas",
    subtitle:
      "An illustrative route through the Kumaon Himalayas. Your exact sequence, stops and pace are confirmed with your chosen itinerary.",
  },
  culture: {
    eyebrow: "Culture & Landscape",
    heading: "Experience the Soul of Kumaon",
    subtitle:
      "Between the darshans lie the villages, rivers and quiet high places that make this journey whole.",
  },
  whyKarvaahh: {
    eyebrow: "Why Karvaahh",
    heading: "Your Trusted Partner for a Meaningful Pilgrimage",
    subtitle:
      "Careful planning for a journey where weather, permits and altitude all matter.",
  },
  bestTime: {
    eyebrow: "When to Go",
    heading: "Choose the Right Season for Your Yatra",
    subtitle:
      "The main pilgrimage season generally falls in the warmer months. Exact travel windows depend on weather, road access, local restrictions and official permissions.",
  },
  prepare: {
    eyebrow: "Plan & Prepare",
    heading: "Prepare for Your Adi Kailash Yatra",
    subtitle:
      "What to arrange before you travel. Items marked “Confirm before travel” depend on current rules and are verified for every booking.",
  },
  faq: {
    eyebrow: "Questions",
    heading: "Frequently Asked Questions",
    subtitle: "Straight answers to what pilgrims ask us most.",
  },
};

/* ------------------------------------------------------------------ */
/* Adi Kailash spiritual experience                                    */
/* ------------------------------------------------------------------ */

export const adiKailashExperience = {
  eyebrow: "Adi Kailash Darshan",
  heading: "Seek Divine Blessings at Adi Kailash",
  intro:
    "Known to devotees as Chhota Kailash, Adi Kailash is revered as an abode of Lord Shiva and Goddess Parvati. At its foot, the still waters of Parvati Sarovar mirror the peak — a place where many pilgrims simply sit, offer prayers and let the silence of the high valley settle.",
  image: images.adiKailashFeature,
  detailImage: images.adiKailashDetail,
  highlights: [
    {
      id: "darshan",
      title: "Darshan of Chhota Kailash",
      description: "Unhurried time facing the peak from the Jolingkong valley, weather permitting.",
    },
    {
      id: "shiva-parvati",
      title: "The seat of Shiva and Parvati",
      description: "A landscape woven into devotional tradition, honoured by pilgrims for generations.",
    },
    {
      id: "sarovar",
      title: "Parvati Sarovar",
      description: "A high-altitude lake beneath the peak, and a natural place for reflection.",
    },
    {
      id: "worship",
      title: "Worship and reflection",
      description: "Time for puja at the lakeside shrine and quiet moments of personal prayer.",
    },
    {
      id: "valleys",
      title: "Snow peaks and open valleys",
      description: "Wide high-altitude country ringed by snow — few landscapes feel so still.",
    },
    {
      id: "views",
      title: "Viewpoints for photography",
      description: "Clear mornings often bring the best light on the peak and its reflection.",
    },
  ] satisfies Highlight[],
  cta: ctas.customize,
};

/* ------------------------------------------------------------------ */
/* Om Parvat darshan                                                   */
/* ------------------------------------------------------------------ */

export const omParvat = {
  eyebrow: "Om Parvat Darshan",
  heading: "Witness the Sacred ॐ of Om Parvat",
  intro:
    "On the face of Om Parvat, snow settles into the rock in a pattern that resembles the sacred syllable ॐ. For pilgrims, seeing it from the viewpoint near Nabidhang is a moment of darshan — the mountain itself as a symbol of the divine.",
  image: images.omParvatPanorama,
  highlights: [
    {
      id: "pattern",
      title: "The natural ॐ",
      description: "A snow pattern on the mountain face that resembles the sacred syllable.",
    },
    {
      id: "significance",
      title: "A sacred mountain",
      description: "Revered by pilgrims as a living symbol of Om, the primordial sound.",
    },
    {
      id: "nabidhang",
      title: "The Nabidhang setting",
      description: "A high, open viewpoint in the upper valley, facing the mountain directly.",
    },
    {
      id: "panorama",
      title: "Panoramic ridges",
      description: "Om Parvat stands within a wide amphitheatre of snow and rock.",
    },
  ] satisfies Highlight[],
  visibilityNote:
    "Visibility of the ॐ pattern depends on snow conditions, weather and cloud cover. It can be faint, partly hidden or not visible on a given day, and cannot be guaranteed.",
};

/* ------------------------------------------------------------------ */
/* Route section — shared placeholder copy                             */
/* ------------------------------------------------------------------ */

export const routeCopy = {
  travelModeLabel: "Travel mode",
  durationLabel: "Time on this stage",
  toBeConfirmed: "Confirmed with your itinerary",
  disclaimer:
    "Illustrative route only. Sequence, overnight stops and travel times vary by itinerary, road and weather conditions, and official permissions. No stage or road access is guaranteed.",
  mapLabel: "Schematic map of the yatra corridor",
};

/* ------------------------------------------------------------------ */
/* Packages — shared labels                                            */
/* ------------------------------------------------------------------ */

export const packageCopy = {
  durationFallback: "Duration on request",
  quoteLabel: "Request a Quote",
  priceNote: "Indicative, subject to confirmation",
  viewLabel: "View Package",
  requestItineraryLabel: "Request Itinerary",
  customizeLabel: "Customize Your Yatra",
  footnote:
    "Package inclusions, departure dates and availability are confirmed individually at the time of enquiry. Nothing on this page is a confirmed booking or guaranteed departure.",
};

/* ------------------------------------------------------------------ */
/* Best time & preparation notes                                       */
/* ------------------------------------------------------------------ */

export const bestTimeNote = {
  title: "Mountain weather changes fast",
  text: "High-altitude weather can change rapidly. Route availability, road conditions and permit windows must be confirmed before booking. We do not promise year-round access.",
};

export const safetyNote = {
  title: "Your health comes first",
  text: "This yatra reaches high altitude, with cold temperatures and physical exertion that can affect anyone regardless of age or fitness. Please consult a qualified doctor before committing to the journey — especially if you have heart, lung or blood-pressure conditions, are pregnant, or are travelling with elderly family members.",
};

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export const finalCta = {
  heading: "Begin Your Sacred Journey to Adi Kailash",
  subtitle:
    "Experience the divine beauty of Chhota Kailash, witness the sacred ॐ of Om Parvat, and discover the unforgettable landscapes of the Kumaon Himalayas.",
  image: images.finalCta,
  ctas: [ctas.explorePackages, { ...ctas.customize, variant: "light" }, { ...ctas.contact, variant: "light-ghost" }] as Cta[],
  brand: site.tagline,
};
