// Top attractions in and around Khaptad National Park.
// `withinPark: false` flags destinations that require separate/extended travel.

export interface Attraction {
  id: string;
  name: string;
  description: string;
  activities: string[];
  withinPark: boolean;
  locationNote: string;
  image: string;
}

export const khaptadAttractions: Attraction[] = [
  {
    id: "khaptad-baba-ashram",
    name: "Khaptad Baba Ashram",
    description:
      "The spiritual retreat associated with Khaptad Swami, set within peaceful forest surroundings at the heart of the park.",
    activities: ["Spiritual exploration", "Meditation", "Nature walks"],
    withinPark: true,
    locationNote: "Within Khaptad National Park",
    image: "/images/destinations/khaptad/attractions/khaptad-baba-ashram.jpg",
  },
  {
    id: "tribeni-dham",
    name: "Tribeni Dham",
    description: "A sacred confluence holding religious significance within the wider Khaptad region.",
    activities: ["Cultural exploration", "Peaceful nature walks"],
    withinPark: true,
    locationNote: "Within Khaptad National Park",
    image: "/images/destinations/khaptad/attractions/tribeni-dham.jpg",
  },
  {
    id: "sahasralinga",
    name: "Sahasralinga",
    description: "A spiritual landmark set within the surrounding highland landscape.",
    activities: ["Hiking", "Scenic exploration", "Photography"],
    withinPark: true,
    locationNote: "Within Khaptad National Park",
    image: "/images/destinations/khaptad/attractions/sahasralinga.jpg",
  },
  {
    id: "khaptad-daha",
    name: "Khaptad Daha",
    description: "A serene lake set within the park's natural landscape.",
    activities: ["Nature walks", "Photography", "Peaceful exploration"],
    withinPark: true,
    locationNote: "Within Khaptad National Park",
    image: "/images/destinations/khaptad/attractions/khaptad-daha.jpg",
  },
  {
    id: "nagdhunga",
    name: "Nagdhunga",
    description: "A landmark of scenic and cultural significance within the park.",
    activities: ["Nature exploration", "Photography"],
    withinPark: true,
    locationNote: "Within Khaptad National Park",
    image: "/images/destinations/khaptad/attractions/nagdhunga.jpg",
  },
  {
    id: "khaptad-patans",
    name: "Khaptad Patans",
    description: "Expansive high-altitude meadows and rolling grasslands with seasonal wildflowers.",
    activities: ["Walking", "Photography", "Landscape exploration"],
    withinPark: true,
    locationNote: "Within Khaptad National Park",
    image: "/images/destinations/khaptad/attractions/khaptad-patans.jpg",
  },
  {
    id: "badimalika-temple",
    name: "Badimalika Temple",
    description: "A sacred temple of significance in the wider far-western Himalayan region.",
    activities: ["Pilgrimage", "Trekking (subject to route feasibility and seasonal access)"],
    withinPark: false,
    locationNote: "Nearby destination — requires separate travel and route verification",
    image: "/images/destinations/khaptad/attractions/badimalika-temple.jpg",
  },
];
