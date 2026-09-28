export interface MadheshJourneyStop {
  number: string;
  place: string;
  description: string;
  image: string;
}

export const madheshJourney: MadheshJourneyStop[] = [
  {
    number: "01",
    place: "Janakpur",
    description: "Pilgrimage, Mithila art and heritage.",
    image: "/images/madhesh/janakpur.jpg",
  },
  {
    number: "02",
    place: "Dhanushadham",
    description: "Sacred landscapes and mythology.",
    image: "/images/madhesh/dhanushadham.jpg",
  },
  {
    number: "03",
    place: "Mahottari",
    description: "Temples, villages and traditional culture.",
    image: "/images/madhesh/jaleshwar-nath.jpg",
  },
  {
    number: "04",
    place: "Bara / Simraungadh",
    description: "Archaeology, pilgrimage and heritage.",
    image: "/images/madhesh/simraungadh-darbar.jpg",
  },
  {
    number: "05",
    place: "Parsa",
    description: "Forest, wildlife and India–Nepal border experiences.",
    image: "/images/madhesh/parsa-national-park.jpg",
  },
];
