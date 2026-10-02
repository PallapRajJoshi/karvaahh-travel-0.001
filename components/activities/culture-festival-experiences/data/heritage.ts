import type { HeritageDestination } from "../types";

export const HERITAGE_HEADING = "Walk Through Nepal’s Living Heritage";
export const HERITAGE_LEDE =
  "Three historic Newar cities, a few kilometres apart, each with its own squares, temples and living craft traditions.";
export const HERITAGE_NOTE =
  "Together with Changu Narayan, Kathmandu, Bhaktapur and Patan’s Durbar Squares, Swayambhunath, Boudhanath and Pashupatinath form the seven Monument Zones of the Kathmandu Valley UNESCO World Heritage Site. Restoration work at some monuments may affect what you can see on a given day.";

/**
 * `href` is intentionally omitted: no dedicated city pages are confirmed.
 * When they exist, add e.g. href: "/destinations/bagmati-province#kathmandu"
 * and the CTA becomes a normal link instead of opening the inquiry form.
 */
export const HERITAGE: HeritageDestination[] = [
  {
    id: "kathmandu",
    name: "Kathmandu",
    media: "kathmandu",
    intro:
      "Historic temples, traditional courtyards, sacred sites and vibrant cultural festivals, where medieval royal squares, Buddhist stupas and Hindu riverside temples share the same streets.",
    sites: ["Kathmandu Durbar Square", "Boudhanath", "Pashupatinath", "Swayambhunath"],
    experiences: [
      "Heritage walk through the old-city lanes around Durbar Square",
      "A clockwise walk around the Boudhanath stupa",
      "Valley views from the Swayambhunath hilltop",
      "Observing riverside rituals at Pashupatinath from designated viewing areas",
    ],
    prefill: { interest: "heritage", destination: "kathmandu", label: "Kathmandu" },
  },
  {
    id: "bhaktapur",
    name: "Bhaktapur",
    media: "bhaktapur",
    intro:
      "A medieval Newar city of red-brick lanes, historic squares, pottery traditions and cultural heritage that still feels lived-in.",
    sites: ["Bhaktapur Durbar Square", "Taumadhi Square and the Nyatapola temple", "Potters’ Square"],
    experiences: [
      "Unhurried walk through the squares and side lanes",
      "Watch potters at work in the pottery quarter",
      "Taste juju dhau, Bhaktapur’s well-known curd",
    ],
    prefill: { interest: "heritage", destination: "bhaktapur", label: "Bhaktapur" },
  },
  {
    id: "patan",
    name: "Patan",
    media: "patan",
    intro:
      "Traditional craftsmanship, temples and courtyards, and one of the richest Newar artistic heritages in the valley. Also known as Lalitpur.",
    sites: ["Patan Durbar Square", "Krishna Mandir", "Patan Museum", "Golden Temple (Hiranya Varna Mahavihar)"],
    experiences: [
      "Heritage walk through Newar courtyards and lanes",
      "Learn about Patan’s metalwork and woodcarving traditions",
      "Visit the museum inside the former royal palace",
    ],
    prefill: { interest: "arts-crafts", destination: "patan", label: "Patan" },
  },
];
