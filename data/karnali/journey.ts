export interface KarnaliJourneyStop {
  number: string;
  title: string;
  description: string;
  image: string;
  alt: string;
}

export const karnaliJourney: KarnaliJourneyStop[] = [
  {
    number: "01",
    title: "Surkhet",
    description:
      "The gateway to Karnali — heritage sites, Bulbule Lake and wide Karnali river landscapes before the road turns toward the mountains.",
    image: "/karnali/surket.jpg",
    alt: "Surkhet gateway landscape",
  },
  {
    number: "02",
    title: "Jumla / Sinja",
    description:
      "Ancient Khas heritage, high-altitude farming and mountain culture centred on the historic Sinja Valley.",
    image: "/karnali/sinja.jpg",
    alt: "Sinja Valley farmland",
  },
  {
    number: "03",
    title: "Rara",
    description:
      "Nepal's iconic high-altitude lake — pine forest, camping grounds and true wilderness silence.",
    image: "/karnali/rara-lake.jpg",
    alt: "Rara Lake wilderness",
  },
  {
    number: "04",
    title: "Humla",
    description:
      "Limi Valley, remote monasteries, Nyinba villages and landscapes reaching toward Saipal Himal.",
    image: "/karnali/limi-valley.jpg",
    alt: "Limi Valley in Humla district",
  },
  {
    number: "05",
    title: "Dolpo / Phoksundo",
    description:
      "High-altitude wilderness, turquoise Phoksundo Lake, Bon culture and some of the Himalaya's most remote trails.",
    image: "/karnali/phoksundo.jpg",
    alt: "Phoksundo Lake and Dolpo wilderness",
  },
];
