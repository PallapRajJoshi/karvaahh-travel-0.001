/**
 * Yatra packages.
 *
 * ⚠ No prices, departure dates or inclusions are confirmed here.
 *   - `price: null` renders "Request a Quote". To show a price, set
 *     `{ fromInr, verifiedOn, basis }` — the card then shows
 *     "From ₹x · verified <date> · subject to confirmation".
 *   - `detailHref: null` hides "View Package" so there is never a dead link.
 *     Set it once a dedicated package page exists.
 *   - Durations are typical ranges published for each route type.
 */
import { ctas } from "../config";
import type { YatraPackage } from "../types";
import { IMG } from "./content";

const K = `${IMG}/packages`;

export const packages: YatraPackage[] = [
  {
    id: "overland",
    title: "Kailash Mansarovar Overland Yatra",
    mode: "Overland",
    image: { src: `${K}/overland-yatra.jpg`, alt: "Pilgrim vehicles on a high road across the Tibetan plateau" },
    duration: "Typically 12–15 days",
    description:
      "The classic road journey from Kathmandu across the Himalaya into Tibet, with gradual gains in altitude that give your body time to adjust.",
    routeOverview: ["Kathmandu", "Kerung (Gyirong) border", "Saga", "Lake Mansarovar", "Darchen", "Parikrama"],
    bestFor: "Pilgrims who prefer steady, well-paced acclimatisation by road",
    price: null,
    detailHref: null,
    enquiryHref: ctas.enquiry("overland"),
    note: "Road and border timings depend on permits and conditions.",
  },
  {
    id: "helicopter-assisted",
    title: "Kailash Mansarovar Helicopter-Assisted Yatra",
    mode: "Helicopter-assisted",
    image: { src: `${K}/helicopter-yatra.jpg`, alt: "Helicopter over the rugged Humla mountains of west Nepal" },
    duration: "Typically 9–12 days",
    description:
      "A shorter approach through Nepal's far west: flights to Simikot and a helicopter hop to Hilsa on the Tibet border, then by road to Mansarovar.",
    routeOverview: ["Nepalgunj", "Simikot (flight)", "Hilsa (helicopter)", "Purang", "Lake Mansarovar", "Darchen"],
    bestFor: "Pilgrims with less time who want fewer days on the road",
    price: null,
    detailHref: null,
    enquiryHref: ctas.enquiry("helicopter-assisted"),
    note: "Flights and helicopter legs are weather-dependent; buffer days are essential.",
    featured: true,
  },
  {
    id: "private",
    title: "Kailash Mansarovar Customized Private Yatra",
    mode: "Private / flexible",
    image: { src: `${K}/private-yatra.jpg`, alt: "A small family group with prayer beads beside Lake Mansarovar" },
    duration: null,
    description:
      "Your family or group, your pace. We plan the route, extra acclimatisation days, puja arrangements and hotel standards around you.",
    routeOverview: ["Your choice of route", "Flexible acclimatisation", "Private puja at Mansarovar", "Optional extensions"],
    bestFor: "Families, senior pilgrims and satsang groups wanting a private itinerary",
    price: null,
    detailHref: null,
    enquiryHref: ctas.enquiry("private"),
    note: "Still travels on a group permit, as all Kailash journeys must.",
  },
  {
    id: "group",
    title: "Kailash Mansarovar Spiritual Group Tour",
    mode: "Group departure",
    image: { src: `${K}/group-yatra.jpg`, alt: "A group of pilgrims walking together beneath prayer flags" },
    duration: null,
    description:
      "Join fellow pilgrims on a shared departure with group bhajans, satsang and a tour leader, often planned around auspicious dates.",
    routeOverview: ["Fixed departure dates", "Shared transport and stays", "Group rituals", "Tour leader"],
    bestFor: "Solo pilgrims and couples who enjoy travelling in company",
    price: null,
    detailHref: null,
    enquiryHref: ctas.enquiry("group"),
    note: "Departure dates are announced only once permits open for the season.",
  },
];

/** Shown under the package grid. */
export const packagesNote =
  "Overland and helicopter-assisted journeys are different trips: the first acclimatises by road over more days; the second saves time but depends on flights and helicopters that are often delayed by weather. Actual routes, transport and itinerary details depend on permits and current operating conditions, and are confirmed in writing before you pay.";
