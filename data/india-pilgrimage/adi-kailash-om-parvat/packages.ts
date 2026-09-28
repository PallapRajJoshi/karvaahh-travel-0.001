import { images } from "./images";
import type { YatraPackage } from "./types";

/**
 * Package cards.
 *
 * Deliberately NO prices, durations, dates, availability or inclusions have
 * been invented. Fill these in only with confirmed operational details.
 *
 * - `duration: null` → card shows "Duration on request".
 * - `price: { kind: "quote" }` → card shows "Request a Quote".
 *   For an indicative band (Karvaahh pricing policy, Sep 2026):
 *   price: { kind: "band", fromINR: 00000, toINR: 00000, verifiedOn: "2026-09-26", basis: "per person, twin sharing" }
 * - `detailHref: null` → primary button requests an itinerary instead of
 *   linking to a detail page that doesn't exist yet (no dead CTAs).
 */

export const packages: YatraPackage[] = [
  {
    id: "standard",
    title: "Adi Kailash & Om Parvat Yatra – Standard Package",
    category: "Classic Yatra",
    duration: null,
    description:
      "The essential circuit: darshan of Adi Kailash at Jolingkong and Om Parvat from Nabidhang, planned around acclimatisation and permit formalities.",
    routeOverview: ["Kathgodam", "Dharchula", "Gunji", "Jolingkong", "Nabidhang"],
    price: { kind: "quote" },
    image: images.pkgStandard,
    detailHref: null,
    featured: true,
  },
  {
    id: "extended",
    title: "Adi Kailash & Om Parvat Yatra – Extended Himalayan Journey",
    category: "Unhurried Journey",
    duration: null,
    description:
      "A slower pace with extra time in the high valleys — more room to acclimatise, and more time at the sacred lakes and villages.",
    routeOverview: ["Kathgodam", "Kumaon hill towns", "Dharchula", "Gunji", "Jolingkong", "Nabidhang"],
    price: { kind: "quote" },
    image: images.pkgExtended,
    detailHref: null,
  },
  {
    id: "private",
    title: "Adi Kailash & Om Parvat Yatra – Private Customized Tour",
    category: "Private & Tailored",
    duration: null,
    description:
      "Your family or group only, with dates, pace, stays and start point shaped around your needs — subject to permits and seasonal access.",
    routeOverview: ["Your start point", "Dharchula", "Gunji", "Adi Kailash", "Om Parvat"],
    price: { kind: "quote" },
    image: images.pkgPrivate,
    detailHref: null,
  },
  {
    id: "group",
    title: "Adi Kailash & Om Parvat Yatra – Group Pilgrimage",
    category: "Group Yatra",
    duration: null,
    description:
      "Travel with fellow pilgrims on a shared itinerary, with coordination handled for the whole group from start to finish.",
    routeOverview: ["Kathgodam", "Dharchula", "Gunji", "Jolingkong", "Nabidhang"],
    price: { kind: "quote" },
    image: images.pkgGroup,
    detailHref: null,
  },
  {
    id: "photography",
    title: "Adi Kailash & Om Parvat Yatra – Spiritual Photography Tour",
    category: "Photography",
    duration: null,
    description:
      "Built around light and time at viewpoints — early starts for Adi Kailash and Om Parvat, with respect for sacred sites and local customs.",
    routeOverview: ["Dharchula", "Gunji", "Jolingkong", "Parvati Sarovar", "Nabidhang"],
    price: { kind: "quote" },
    image: images.pkgPhotography,
    detailHref: null,
  },
];
