export interface GandakiJourneyStop {
  id: string;
  index: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const gandakiJourney: GandakiJourneyStop[] = [
  {
    id: "pokhara",
    index: "01",
    title: "Pokhara",
    description:
      "Lakes, mountains, caves and temples set the tone — Gandaki's gateway city, and one of Nepal's principal adventure hubs.",
    image: "/images/gandaki/pokhara-phewa-lake-annapurna-mountains-gandaki-Nepal.jpg",
    alt: "Pokhara waterfront with the Annapurna range behind it",
  },
  {
    id: "bandipur-ghandruk",
    index: "02",
    title: "Bandipur & Ghandruk",
    description:
      "Hill villages rich in heritage — Newar architecture in Bandipur, Gurung tradition in Ghandruk, both framed by sweeping mountain views.",
    image: "/images/gandaki/bandipur-ghandruk-heritage-hill-villages-gandaki-Nepal.jpg",
    alt: "Traditional houses along the streets of Bandipur",
  },
  {
    id: "annapurna",
    index: "03",
    title: "Annapurna",
    description:
      "High trails, mountain passes and villages strung along some of the most celebrated trekking routes in the Himalaya.",
    image: "/images/gandaki/annapurna-circuit-high-mountain-trail-pass-gandaki-Nepal.jpg",
    alt: "Trekking trail winding through the Annapurna region",
  },
  {
    id: "mustang",
    index: "04",
    title: "Mustang",
    description:
      "Muktinath, the Kali Gandaki gorge, Marpha and Kagbeni — a high desert landscape shaped by Tibetan-influenced culture.",
    image: "/images/gandaki/kagbeni-ancient-village-kali-gandaki-mustang-Nepal.jpg",
    alt: "Weathered cliffs and cave settlements in Mustang",
  },
  {
    id: "manaslu-gorkha",
    index: "05",
    title: "Manaslu & Gorkha",
    description:
      "Historic heritage at Gorkha Durbar, mountain villages beyond the road, and remote trekking around the Manaslu massif.",
    image: "/images/gandaki/manaslu-circuit-trekking-mountain-massif-gorkha-nepal.jpg",
    alt: "Manaslu peak rising above a remote mountain village",
  },
];
