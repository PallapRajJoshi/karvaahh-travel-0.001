export interface BagmatiJourneyStop {
  id: string;
  number: string;
  title: string;
  description: string;
  image: string;
}

export const bagmatiJourney: BagmatiJourneyStop[] = [
  {
    id: "kathmandu-valley",
    number: "01",
    title: "Kathmandu Valley",
    description: "Heritage, temples, monasteries and living Newar culture.",
    image: "/images/bagmati/kathmandu-valley-swayambhunath-stupa-heritage-newar-culture-nepal.jpg",
  },
  {
    id: "nagarkot-dhulikhel",
    number: "02",
    title: "Nagarkot / Dhulikhel",
    description: "Sunrise, mountain views, cycling and hill escapes.",
    image: "/images/bagmati/nagarkot-dhulikhel-sunrise-himalayan-hill-escapes-Nepal.jpg",
  },
  {
    id: "langtang-gosainkunda",
    number: "03",
    title: "Langtang / Gosainkunda",
    description: "Trekking, sacred lakes and Himalayan landscapes.",
    image: "/images/bagmati/gosainkunda-lake-langtang-himalayan-trekking-bagmati-Nepal.jpg",
  },
  {
    id: "chitwan",
    number: "04",
    title: "Chitwan",
    description: "Jungle safari, rivers, birdwatching and Tharu culture.",
    image: "/images/bagmati/chitwan-tharu-village-traditional-culture-Nepal.jpg",
  },
  {
    id: "dolakha-rolwaling",
    number: "05",
    title: "Dolakha / Rolwaling",
    description: "Pilgrimage, high-altitude landscapes and remote mountain adventure.",
    image: "/images/bagmati/tsho-rolpa-lake-rolwaling-valley-dolakha-himalayan-adventure-nepal.jpg",
  },
];
