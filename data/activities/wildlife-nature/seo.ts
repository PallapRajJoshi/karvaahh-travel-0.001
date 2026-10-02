import { PAGE_PATH } from "./links";

/** Set NEXT_PUBLIC_SITE_URL in the project env. Falls back to the domain named in the project brief. */
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://karvaahh.in").replace(/\/$/, "");

export const SEO = {
  title: "Wildlife & Nature Tours in Nepal | National Parks & Safaris – Karvaahh",
  description:
    "Explore Nepal's wildlife and nature with Karvaahh. Discover Chitwan, Bardia, Koshi Tappu, Shuklaphanta, Sagarmatha, Langtang, and Rara through nature and wildlife experiences.",
  h1: "Wildlife & Nature – Discover the Wild Beauty of Nepal",
  path: PAGE_PATH,
  url: `${SITE_URL}${PAGE_PATH}`,
  ogTitle: "Wildlife & Nature – Explore Nepal's Wild Beauty | Karvaahh",
} as const;
