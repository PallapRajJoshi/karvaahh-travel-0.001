/**
 * Mustang Circuit Trek — page configuration.
 * Theme, hero, CTAs, section order/visibility, anchors, animation and SEO live here.
 * Content lists (destinations, packages, etc.) live in their own data files.
 */
import type { CtaLink, ImageAsset, SectionId } from "./types";

export const IMG = "/images/destinations/mustang-circuit";

/* ------------------------------------------------------------------ */
/* Site / SEO                                                          */
/* ------------------------------------------------------------------ */

export const site = {
  name: "Karvaahh",
  tagline: "Karvaahh – Live to Travel",
  origin: "https://karvaahh.in",
  path: "/adventure/mustang-circuit-trek",
  title: "Mustang Circuit Trek | Upper Mustang Himalayan Adventure – Karvaahh",
  description:
    "Discover the Mustang Circuit Trek with Karvaahh. Explore Lo Manthang, Muktinath, Kagbeni, Marpha, ancient monasteries, dramatic red cliffs, and the breathtaking landscapes of Nepal's Mustang region.",
  ogImage: {
    src: `${IMG}/og/mustang-circuit-trek-og.jpg`,
    width: 1200,
    height: 630,
    alt: "Eroded red cliffs and a whitewashed village in the Upper Mustang valley, Nepal",
  },
} as const;

export const pageUrl = `${site.origin}${site.path}`;

/* ------------------------------------------------------------------ */
/* Links — one place to fix route assumptions                          */
/* ------------------------------------------------------------------ */

const enquiry = (params: Record<string, string>) =>
  `/contact?${new URLSearchParams({ trip: "mustang-circuit-trek", ...params }).toString()}`;

export const links = {
  home: "/",
  /** Adventure hub. Existing activity pages live under /activities/adventure/*. */
  adventureHub: "/activities/adventure",
  contact: "/contact",
  customize: enquiry({ type: "custom" }),
  /** Enquiry link for a package that has no detail page yet. */
  packageEnquiry: (packageId: string, custom = false) =>
    enquiry(custom ? { package: packageId, type: "custom" } : { package: packageId }),
  packagesAnchor: "#packages",
} as const;

export const breadcrumb = [
  { label: "Home", href: links.home },
  { label: "Adventure", href: links.adventureHub },
  { label: "Mustang Circuit Trek", href: site.path },
] as const;

/* ------------------------------------------------------------------ */
/* Theme — applied as CSS custom properties on .mustang-page           */
/* ------------------------------------------------------------------ */

export const theme = {
  colors: {
    blue: "#123B5D", // Deep Himalayan Blue — primary
    teal: "#2A7F82", // Mountain Teal — secondary
    sand: "#C99A54", // Mustang Sand Gold — accent
    ivory: "#F8F6F0", // Warm Ivory — background
    ink: "#252B32", // Dark Charcoal — text
    white: "#FFFFFF",
    /** Supporting tone drawn from the Dhakmar cliffs; used sparingly. */
    ochre: "#9E4A2F",
  },
  /** Font stacks. Assumes next/font variables are set in the root layout. */
  fonts: {
    display: 'var(--font-playfair, "Playfair Display"), Georgia, serif',
    body: 'var(--font-inter, "Inter"), system-ui, -apple-system, "Segoe UI", sans-serif',
  },
} as const;

/** Maps theme to the CSS variables the stylesheets consume. */
export const themeVars: Record<string, string> = {
  "--mc-blue": theme.colors.blue,
  "--mc-teal": theme.colors.teal,
  "--mc-sand": theme.colors.sand,
  "--mc-ivory": theme.colors.ivory,
  "--mc-ink": theme.colors.ink,
  "--mc-white": theme.colors.white,
  "--mc-ochre": theme.colors.ochre,
  "--mc-font-display": theme.fonts.display,
  "--mc-font-body": theme.fonts.body,
};

/* ------------------------------------------------------------------ */
/* Animation                                                           */
/* ------------------------------------------------------------------ */

export const animation = {
  /** IntersectionObserver settings for scroll reveals. */
  reveal: { threshold: 0.12, rootMargin: "0px 0px -8% 0px" },
  /** Delay between siblings in a staggered grid (ms). */
  staggerMs: 70,
  /** Cap so the 10th card doesn't wait a full second. */
  maxStaggerMs: 420,
  /** Hero image drift as a fraction of scroll distance (0 disables). */
  heroParallax: 0.25,
} as const;

/* ------------------------------------------------------------------ */
/* Section order & visibility — reorder or delete ids freely           */
/* ------------------------------------------------------------------ */

export const sections: SectionId[] = [
  "hero",
  "breadcrumb",
  "sectionNav",
  "overview",
  "destinations",
  "experience",
  "culture",
  "packages",
  "route",
  "gallery",
  "why",
  "seasons",
  "preparation",
  "faq",
  "related",
  "finalCta",
];

/** Anchor ids + labels for the sticky in-page navigation. */
export const anchors = {
  overview: { id: "overview", label: "Overview" },
  destinations: { id: "destinations", label: "Places" },
  experience: { id: "experience", label: "Experience" },
  culture: { id: "culture", label: "Culture" },
  packages: { id: "packages", label: "Packages" },
  route: { id: "route", label: "Route" },
  gallery: { id: "gallery", label: "Gallery" },
  why: { id: "why-karvaahh", label: "Why Karvaahh" },
  seasons: { id: "best-time", label: "Seasons" },
  preparation: { id: "prepare", label: "Prepare" },
  faq: { id: "faq", label: "FAQ" },
} as const;

/** Which anchors appear in the sticky nav (keep it short on purpose). */
export const navAnchors = [
  anchors.overview,
  anchors.destinations,
  anchors.packages,
  anchors.route,
  anchors.seasons,
  anchors.preparation,
  anchors.faq,
];

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export const hero = {
  eyebrow: "Nepal Himalayan Adventure",
  title: "Mustang Circuit Trek",
  subtitle: "Explore the Hidden Kingdom of the Himalayas",
  text: "Journey through ancient walled cities, sacred monasteries, dramatic desert valleys, and breathtaking Himalayan landscapes.",
  image: {
    src: `${IMG}/hero/upper-mustang-red-cliffs-panorama.jpg`,
    alt: "Wind-carved red and ochre cliffs above a dry river valley in Upper Mustang, with snow peaks on the horizon",
    focal: "50% 60%",
  } satisfies ImageAsset,
  ctas: [
    { label: "Explore Trek Packages", href: links.packagesAnchor, variant: "primary" },
    { label: "Customize Your Trek", href: links.customize, variant: "secondary" },
  ] satisfies CtaLink[],
  /** Honest, non-numeric facts shown under the CTAs. */
  facts: ["Gandaki Province, Nepal", "Lower & Upper Mustang", "Trek, road or mixed"],
} as const;

/* ------------------------------------------------------------------ */
/* Overview                                                            */
/* ------------------------------------------------------------------ */

export const overview = {
  eyebrow: "The Mustang Region",
  title: "Journey into the Hidden Kingdom of Mustang",
  /** Verbatim from the content brief. */
  paragraph:
    "Mustang Circuit Trek is an extraordinary Himalayan adventure through the dramatic landscapes of Nepal’s Mustang region, offering a unique blend of rugged mountain scenery, ancient Tibetan-influenced culture, and unforgettable high-altitude exploration. Journey through the picturesque villages of Jomsom, Kagbeni, Marpha, Muktinath, and the ancient walled city of Lo Manthang, surrounded by striking red cliffs, barren mountain valleys, deep canyons, and the spectacular landscapes of the Trans-Himalayan region. Experience the spiritual significance of Muktinath Temple, explore the mysterious sky caves of Chhosar, discover centuries-old monasteries, and witness the traditional lifestyle of the local communities. Enjoy breathtaking views of Dhaulagiri, Nilgiri, and Annapurna, explore the charming apple orchards of Marpha, and immerse yourself in the peaceful beauty of the high-altitude desert. Combining adventure, cultural discovery, spiritual experiences, and extraordinary Himalayan landscapes, the Mustang Circuit offers a truly remarkable journey into the hidden kingdom of Nepal.",
  cta: { label: "Plan Your Mustang Journey", href: links.customize, variant: "primary" } satisfies CtaLink,
  imageMain: {
    src: `${IMG}/overview/mustang-valley-kali-gandaki.jpg`,
    alt: "The wide Kali Gandaki valley in Mustang with a braided river bed and bare brown hills",
  } satisfies ImageAsset,
  imageInset: {
    src: `${IMG}/overview/lo-manthang-walled-city.jpg`,
    alt: "Whitewashed and ochre houses inside the walls of Lo Manthang",
  } satisfies ImageAsset,
  /** At-a-glance facts. Keep to things that are true for every trip. */
  glance: [
    { label: "Region", value: "Mustang District, Gandaki Province" },
    { label: "Landscape", value: "Trans-Himalayan high desert" },
    { label: "Ways to travel", value: "Trek, jeep, or a mix" },
    { label: "Permits", value: "ACAP; RAP for Upper Mustang" },
  ],
} as const;

/* ------------------------------------------------------------------ */
/* Experience                                                          */
/* ------------------------------------------------------------------ */

export const experience = {
  eyebrow: "On the Trail",
  title: "Experience the Adventure of Mustang",
  intro:
    "North of the main Himalayan range, Mustang sits in a rain shadow. The forests of the lower Kali Gandaki give way to bare ridges, wind-cut cliffs and villages built from the same earth they stand on.",
  imageMain: {
    src: `${IMG}/experience/trekkers-above-dhakmar-cliffs.jpg`,
    alt: "Trekkers on a dusty trail above the red cliffs near Dhakmar",
  } satisfies ImageAsset,
  imageSecondary: {
    src: `${IMG}/experience/nilgiri-from-kagbeni.jpg`,
    alt: "Snow-covered Nilgiri rising above the rooftops of Kagbeni",
  } satisfies ImageAsset,
} as const;

/* ------------------------------------------------------------------ */
/* Section headings (kept here so copy edits never touch components)   */
/* ------------------------------------------------------------------ */

export const headings = {
  destinations: {
    eyebrow: "Places on the Circuit",
    title: "Discover the Wonders of Mustang",
    subtitle:
      "Explore ancient settlements, sacred pilgrimage sites, dramatic mountain valleys, and extraordinary Himalayan landscapes.",
  },
  culture: {
    eyebrow: "Living Heritage",
    title: "Discover the Timeless Culture of Mustang",
    subtitle:
      "Mustang’s culture is not a museum piece. Monasteries, homes and festivals are part of daily life — visit with curiosity and respect.",
  },
  packages: {
    eyebrow: "Trips",
    title: "Choose Your Mustang Adventure",
    subtitle:
      "Explore customized trekking experiences designed around your preferred route, travel style, and schedule.",
  },
  route: {
    eyebrow: "Sample Route",
    title: "Explore the Mustang Circuit Route",
    subtitle:
      "Journey through the spectacular landscapes of Lower and Upper Mustang, from traditional mountain villages to the ancient walled city of Lo Manthang.",
    disclaimer:
      "This is a sample route framework, not a fixed itinerary. The sequence, overnight stops and number of days are planned around your dates, fitness, permits and current trail and road conditions.",
  },
  gallery: {
    eyebrow: "Gallery",
    title: "Capture the Extraordinary Beauty of Mustang",
    subtitle: "Swipe or use the arrows to browse.",
  },
  why: {
    eyebrow: "Why Karvaahh",
    title: "Your Trusted Partner for a Memorable Mustang Journey",
    subtitle: "Planning a remote Himalayan trip has many moving parts. Here is what we take care of.",
  },
  seasons: {
    eyebrow: "When to Go",
    title: "Choose the Perfect Season for Mustang",
    subtitle:
      "Mustang is drier than most of Nepal, but Lower and Upper Mustang behave differently. The right time depends on your route, the weather, road conditions and permits.",
  },
  preparation: {
    eyebrow: "Before You Go",
    title: "Prepare for Your Mustang Circuit Adventure",
    subtitle: "Permits, documents, health and packing — what to sort out before you travel.",
  },
  faq: {
    eyebrow: "Questions",
    title: "Frequently Asked Questions",
    subtitle: "Can’t find your answer? Ask us — we reply personally.",
  },
  related: {
    eyebrow: "Keep Exploring",
    title: "More from Nepal",
  },
} as const;

/* ------------------------------------------------------------------ */
/* Safety note (shown in Preparation, linked from Route)               */
/* ------------------------------------------------------------------ */

export const safetyNote = {
  title: "Altitude & remote terrain",
  text: "Much of the Mustang Circuit is at high altitude, in remote country with limited medical facilities. Weather changes quickly, and roads and flights can be disrupted. Build in acclimatization and spare days, know the signs of altitude sickness, carry insurance that covers high-altitude trekking and evacuation, and consult a doctor before you travel if you have any health concerns.",
} as const;

/** Date the permit / rules content was last checked against official sources. null = not yet verified. */
export const rulesVerifiedOn: string | null = null;

/* ------------------------------------------------------------------ */
/* Final CTA                                                           */
/* ------------------------------------------------------------------ */

export const finalCta = {
  title: "Begin Your Journey into the Hidden Kingdom",
  subtitle:
    "Explore ancient Himalayan settlements, dramatic red cliffs, sacred monasteries, and unforgettable landscapes with Karvaahh.",
  image: {
    src: `${IMG}/cta/lo-manthang-dusk.jpg`,
    alt: "Lo Manthang’s walls and rooftops in soft evening light beneath bare hills",
    focal: "50% 55%",
  } satisfies ImageAsset,
  ctas: [
    { label: "Explore Trek Packages", href: links.packagesAnchor, variant: "primary" },
    { label: "Customize Your Trek", href: links.customize, variant: "secondary" },
    { label: "Contact Karvaahh", href: links.contact, variant: "ghost" },
  ] satisfies CtaLink[],
  brand: site.tagline,
} as const;
