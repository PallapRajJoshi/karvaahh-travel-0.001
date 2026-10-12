/* ============================================================
   HELICOPTER TOURS — COLLECTION CATALOGUE
   ------------------------------------------------------------
   One card per destination, reused by "Related Helicopter
   Experiences" on every page and by the collection index page.
   ============================================================ */

import type { RelatedTour } from "@/components/activities/experience/product-types";
import type { PageImage } from "@/components/activities/experience/types";
import {
  annapurnaRange,
  everestDawn,
  gosaikunda,
  kailash,
  khumbuSunrise,
  langtangVillage,
  manasluTrail,
  mardiRidge,
  muktinathTemple,
  mustangRidgeMonastery,
  pending,
} from "./images";

export type CatalogSlug =
  | "upper-mustang"
  | "muktinath-temple"
  | "annapurna"
  | "mardi-himal"
  | "gosaikunda"
  | "everest-base-camp"
  | "kailash-mansarovar"
  | "langtang"
  | "manaslu"
  | "rara"
  | "kailash-aerial-darshan"
  | "mountain-scenic-flight";

export type CatalogEntry = {
  title: string;
  text: string;
  region: string;
  from: string;
  image: PageImage;
};

const base = "/activities/helicopter-tours";

export const HELICOPTER_CATALOG: Record<CatalogSlug, CatalogEntry> = {
  "upper-mustang": {
    title: "Upper Mustang Helicopter Tour",
    text: "Red cliffs, ancient settlements and the walled city of Lo Manthang.",
    region: "Mustang",
    from: "Pokhara",
    image: mustangRidgeMonastery,
  },
  "muktinath-temple": {
    title: "Muktinath Helicopter Tour",
    text: "A helicopter pilgrimage to the sacred Muktinath Temple.",
    region: "Mustang",
    from: "Pokhara / Kathmandu",
    image: muktinathTemple,
  },
  annapurna: {
    title: "Annapurna Helicopter Tour",
    text: "Fly into the Annapurna Sanctuary beneath Machhapuchhre.",
    region: "Annapurna",
    from: "Pokhara",
    image: annapurnaRange,
  },
  "mardi-himal": {
    title: "Mardi Himal Helicopter Tour",
    text: "A short, dramatic flight over the Mardi Himal ridge.",
    region: "Annapurna",
    from: "Pokhara",
    image: mardiRidge,
  },
  gosaikunda: {
    title: "Gosaikunda Helicopter Tour",
    text: "A sacred high-altitude lake journey from Kathmandu.",
    region: "Langtang",
    from: "Kathmandu",
    image: gosaikunda,
  },
  "everest-base-camp": {
    title: "Everest Helicopter Tour",
    text: "Fly into the Khumbu for close views of Everest.",
    region: "Everest / Khumbu",
    from: "Kathmandu",
    image: everestDawn,
  },
  "kailash-mansarovar": {
    title: "Kailash Mansarovar Helicopter Yatra",
    text: "A multi-day yatra to Mount Kailash and Lake Mansarovar.",
    region: "Tibet (via Nepal)",
    from: "Lucknow / Nepalgunj",
    image: kailash,
  },
  langtang: {
    title: "Langtang Helicopter Tour",
    text: "Glaciers, peaks and the Kyanjin valley, close to Kathmandu.",
    region: "Langtang",
    from: "Kathmandu",
    image: langtangVillage,
  },
  manaslu: {
    title: "Manaslu Helicopter Tour",
    text: "Remote valleys beneath the world's eighth-highest mountain.",
    region: "Manaslu",
    from: "Kathmandu / Pokhara",
    image: manasluTrail,
  },
  rara: {
    title: "Rara Lake Helicopter Tour",
    text: "Nepal's largest lake in the remote Karnali highlands.",
    region: "Karnali",
    from: "Nepalgunj / Kathmandu",
    image: pending("Rara Lake", "Rara Lake in the Karnali region of western Nepal"),
  },
  "kailash-aerial-darshan": {
    title: "Kailash Aerial Darshan",
    text: "A darshan flight towards Mount Kailash without crossing the border.",
    region: "Far-west Nepal",
    from: "Nepalgunj",
    image: kailash,
  },
  "mountain-scenic-flight": {
    title: "Himalayan Mountain Scenic Flight",
    text: "A sunrise flight along the Himalaya, from Langtang to Everest.",
    region: "Central & Eastern Himalaya",
    from: "Kathmandu",
    image: khumbuSunrise,
  },
};

/** Related-tour cards for the given destinations, in order. */
export function relatedTours(...slugs: CatalogSlug[]): RelatedTour[] {
  return slugs.map((slug) => {
    const c = HELICOPTER_CATALOG[slug];
    return { title: c.title, text: c.text, href: `${base}/${slug}`, image: c.image.src ? c.image : undefined };
  });
}
