// Core page copy: SEO metadata, hero content, destination highlight, and destination facts.
// Kept centralized and editable per the Karvaahh build convention (see project README).

import type { DestinationFact } from "./types";

export const SEO = {
  title:
    "Shey Phoksundo Nepal – Phoksundo Lake, Dolpo Trekking & Tour Packages | Karvaahh",
  description:
    "Discover Shey Phoksundo in Nepal's remote Dolpo region. Explore turquoise Phoksundo Lake, Ringmo Village, ancient monasteries, Himalayan wildlife, trekking routes, and customizable Dolpo tour packages.",
  canonicalPath: "/offbeat-unexplored/shey-phoksundo",
  ogImage: "/images/offbeat/shey-phoksundo/og-phoksundo-lake.jpg",
};

export const HERO = {
  eyebrow: "OFFBEAT NEPAL · DOLPO REGION",
  heading: "Shey Phoksundo – Nepal's Turquoise Himalayan Wilderness",
  subtitle:
    "Discover the mesmerizing blue waters of Phoksundo Lake, ancient Himalayan culture, and the untouched wilderness of remote Dolpo.",
  primaryCta: { label: "Explore Shey Phoksundo Packages", href: "#phoksundo-packages" },
  secondaryCta: { label: "Plan Your Dolpo Journey", href: "/contact" },
  facts: ["Dolpo Region", "Karnali Province", "Shey Phoksundo National Park"],
  image: "/images/offbeat/shey-phoksundo/hero-phoksundo-lake.jpg",
  imageAlt:
    "Turquoise waters of Phoksundo Lake surrounded by dramatic Himalayan cliffs in Dolpo, Nepal",
};

export const BREADCRUMB = [
  { label: "Home", href: "/" },
  { label: "Offbeat & Unexplored", href: "/offbeat-unexplored" },
  { label: "Shey Phoksundo", href: "/offbeat-unexplored/shey-phoksundo" },
];

// Verbatim destination highlight, as specified in the content brief.
export const DESTINATION_HIGHLIGHT =
  "Shey Phoksundo, nestled in the remote Dolpo region of Nepal's Karnali Province, is renowned for its mesmerizing turquoise waters, dramatic Himalayan landscapes, ancient Tibetan Buddhist culture, and untouched wilderness. At the heart of Shey Phoksundo National Park, the spectacular Phoksundo Lake captivates visitors with its crystal-clear blue waters, surrounded by rugged cliffs, alpine forests, and snow-capped peaks. Explore the scenic beauty of Ringmo Village, Tshowa Bon Monastery, Phoksundo Waterfall, Suligad River, and the traditional settlements of Upper and Lower Dolpo. Discover the spiritual heritage of Shey Gompa, Crystal Mountain, Saldang, Dho Tarap, and the ancient Bon Buddhist traditions while experiencing remote Himalayan trekking, camping, wildlife photography, and authentic Tibetan-influenced culture. The region is home to rare wildlife, including the elusive snow leopard and blue sheep, making it a paradise for nature lovers and adventure seekers. Accessible via Juphal Airport through Nepalgunj or a challenging overland journey, Dolpo offers an extraordinary offbeat Himalayan experience, with spring and autumn being popular seasons for trekking and exploration.";

export const OVERVIEW = {
  heading: "Discover the Turquoise Beauty of Shey Phoksundo",
  image: "/images/offbeat/shey-phoksundo/overview-phoksundo-lake.jpg",
  imageAlt: "Wide view of Phoksundo Lake's turquoise water framed by cliffs and forest",
};

export const DESTINATION_FACTS: DestinationFact[] = [
  { label: "Region", value: "Dolpo, Karnali Province" },
  { label: "Protected Area", value: "Shey Phoksundo National Park" },
  { label: "Nearest Airstrip", value: "Juphal (via Nepalgunj)" },
  { label: "Best Seasons", value: "Spring (Mar–May), Autumn (Sep–Nov)" },
  { label: "Known For", value: "Turquoise glacial lake, Bon Buddhist heritage, snow leopard habitat" },
];

export const CONSERVATION_MESSAGE =
  "Explore responsibly. Respect wildlife, protect fragile Himalayan ecosystems, and follow all national park regulations during your visit.";

export const FINAL_CTA = {
  heading: "Discover the Turquoise Wilderness of Shey Phoksundo",
  supportingText:
    "Journey into the remote heart of Dolpo, explore the mesmerizing blue waters of Phoksundo Lake, discover ancient Himalayan culture, and experience Nepal's untouched wilderness with a journey tailored to your travel style.",
  buttons: [
    { label: "Explore Shey Phoksundo Packages", href: "#phoksundo-packages" },
    { label: "Customize Your Dolpo Journey", href: "/contact" },
    { label: "Contact Karvaahh", href: "/contact" },
  ],
  image: "/images/offbeat/shey-phoksundo/final-cta-phoksundo-lake.jpg",
  imageAlt: "Phoksundo Lake at dusk with surrounding Himalayan peaks",
};
