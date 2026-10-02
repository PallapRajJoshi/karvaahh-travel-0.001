import type { AccommodationOption } from "./types";

/** Section 13. No hotel names, star ratings, amenities, or prices invented. */
export const accommodationOptions: AccommodationOption[] = [
  {
    id: "guesthouses-lodges",
    title: "Local Guesthouses & Lodges",
    description: "Village-run guesthouses and lodges along the lower and mid-valley trail.",
  },
  {
    id: "teahouses",
    title: "Basic Mountain Teahouses",
    description: "Simple teahouse-style stays, where available, as the route gains altitude.",
  },
  {
    id: "homestays",
    title: "Community-Based Homestays",
    description: "Homestays with local families, where available, for a closer look at Sherpa village life.",
  },
  {
    id: "camping",
    title: "Camping in Authorized Areas",
    description: "Tented camping at established, authorized sites along the route.",
  },
  {
    id: "expedition-camping",
    title: "Supported Camping for Expeditions",
    description: "Logistically supported camping arrangements for extended high-altitude expeditions such as the Tashi Lapcha crossing.",
  },
];

export const accommodationNote =
  "Accommodation options and facilities become more limited at higher elevations.";
