export interface BagmatiRoute {
  id: string;
  title: string;
  stops: string[];
  description: string;
  idealFor: string;
  image: string;
  alt: string;
  /** Existing related page, if any. */
  href?: string;
}

/** Suggested travel concepts — not fixed itineraries. Final routing depends on season, road and trail conditions. */
export const bagmatiRoutes: BagmatiRoute[] = [
  {
    id: "heritage-circuit",
    title: "Kathmandu Heritage Circuit",
    stops: ["Kathmandu", "Pashupatinath", "Boudhanath", "Swayambhunath", "Patan", "Bhaktapur"],
    description:
      "The valley's UNESCO monument zones over a few unhurried days — royal squares, the great stupas and Pashupatinath's evening aarati.",
    idealFor: "First-time visitors, families",
    image: "/images/bagmati/kathmandu-valley-swayambhunath-stupa-heritage-newar-culture-nepal.jpg",
    alt: "Swayambhunath Stupa overlooking the Kathmandu Valley",
    href: "/packages/nepal/spiritual-pilgrimage-tours#packages",
  },
  {
    id: "himalayan-adventure",
    title: "Himalayan Adventure",
    stops: ["Kathmandu", "Syabrubesi", "Langtang Valley", "Kyanjin Gompa"],
    description:
      "Drive north to Syabrubesi, then trek up the Langtang Valley to Kyanjin Gompa, with optional climbs to Kyanjin Ri or Tserko Ri.",
    idealFor: "Trekkers, nature lovers",
    image: "/images/bagmati/langtang-valley-trekking-himalayan-mountains-bagmati-nepal.jpg",
    alt: "Trail through the Langtang Valley beneath snow peaks",
    href: "/adventure/langtang-valley-trek",
  },
  {
    id: "langtang-gosaikunda",
    title: "Langtang & Gosaikunda",
    stops: ["Kathmandu", "Rasuwa", "Langtang region", "Gosaikunda"],
    description:
      "Combine Langtang's glaciers with the sacred lakes of Gosaikunda — best for fit trekkers with extra days to acclimatise.",
    idealFor: "Experienced trekkers, pilgrims",
    image: "/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-nepal.jpg",
    alt: "Gosaikunda Lake in the Langtang region",
    href: "/activities/helicopter-tours/gosaikunda",
  },
  {
    id: "heritage-to-wildlife",
    title: "Heritage to Wildlife",
    stops: ["Kathmandu", "Bhaktapur", "Chitwan", "Sauraha"],
    description:
      "Pair medieval Bhaktapur with jungle safaris, canoe rides and Tharu village evenings around Sauraha.",
    idealFor: "Families, wildlife lovers",
    image: "/images/bagmati/chitwan-tharu-village-traditional-culture-nepal.jpg",
    alt: "Traditional Tharu village near Chitwan",
    href: "/activities/wildlife-nature",
  },
  {
    id: "valley-hill-escapes",
    title: "Kathmandu Valley & Hill Escapes",
    stops: ["Kathmandu", "Kirtipur", "Dhulikhel", "Nagarkot"],
    description:
      "Newar old towns by day, Himalayan sunrises from the valley rim by morning — an easy, short break with gentle hikes.",
    idealFor: "Short breaks, couples, seniors",
    image: "/images/bagmati/nagarkot-dhulikhel-sunrise-himalayan-hill-escapes-nepal.jpg",
    alt: "Sunrise over the hills of Nagarkot and Dhulikhel",
  },
  {
    id: "spiritual-bagmati",
    title: "Spiritual Bagmati",
    stops: ["Pashupatinath", "Guhyeshwari", "Boudhanath", "Swayambhunath", "Dakshinkali", "Namo Buddha"],
    description:
      "Hindu and Buddhist sacred sites of the valley and its rim, timed around aarati, puja and kora where possible.",
    idealFor: "Pilgrims, spiritual travellers",
    image: "/images/bagmati/pashupatinath-temple-bagmati-river-sacred-pilgrimage-nepal.jpg",
    alt: "Pashupatinath Temple on the Bagmati River",
    href: "/spiritual-journeys/pashupatinath",
  },
];
