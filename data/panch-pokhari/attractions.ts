export type Attraction = {
  id: string;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
  /** Larger cards get more grid space in the alternating layout */
  size: "large" | "small";
};

/**
 * Attractions around Panch Pokhari. Descriptions are near-verbatim from the
 * brief; no distances or travel durations between attractions are invented,
 * per the brief's explicit instruction.
 */
export const attractions: Attraction[] = [
  {
    id: "panch-pokhari-lakes",
    title: "Panch Pokhari Lakes",
    body: "The sacred cluster of five alpine lakes, known for their spiritual significance and tranquil Himalayan setting.",
    image: "/images/destinations/panch-pokhari/attractions/panch-pokhari-lakes.jpg",
    imageAlt: "The sacred cluster of five alpine lakes at Panch Pokhari",
    size: "large",
  },
  {
    id: "tupi-danda",
    title: "Tupi Danda",
    body: "A scenic highland area associated with the Panch Pokhari trekking region, offering expansive mountain and landscape views.",
    image: "/images/destinations/panch-pokhari/attractions/tupi-danda.jpg",
    imageAlt: "Highland ridge views at Tupi Danda near Panch Pokhari",
    size: "small",
  },
  {
    id: "bhotang-village",
    title: "Bhotang Village",
    body: "A traditional mountain settlement that serves as a gateway for trekking routes toward Panch Pokhari.",
    image: "/images/destinations/panch-pokhari/attractions/bhotang-village.jpg",
    imageAlt: "Traditional mountain houses in Bhotang village",
    size: "small",
  },
  {
    id: "chautara",
    title: "Chautara",
    body: "A town in Sindhupalchok that can be included in regional travel planning and access routes.",
    image: "/images/destinations/panch-pokhari/attractions/chautara.jpg",
    imageAlt: "The town of Chautara in Sindhupalchok district",
    size: "small",
  },
  {
    id: "jugal-himal-viewpoints",
    title: "Jugal Himal Viewpoints",
    body: "Panoramic viewpoints offering views of the rugged Himalayan landscape and surrounding mountain peaks, subject to weather and visibility.",
    image: "/images/destinations/panch-pokhari/attractions/jugal-himal-viewpoints.jpg",
    imageAlt: "Panoramic viewpoint over the Jugal Himal range",
    size: "large",
  },
  {
    id: "helambu",
    title: "Helambu",
    body: "A culturally rich Himalayan region known for mountain villages, trekking trails, and distinctive local traditions.",
    image: "/images/destinations/panch-pokhari/attractions/helambu.jpg",
    imageAlt: "Mountain villages of the Helambu region",
    size: "small",
  },
  {
    id: "melamchi",
    title: "Melamchi",
    body: "A gateway region for exploring the hills and mountain landscapes of Sindhupalchok.",
    image: "/images/destinations/panch-pokhari/attractions/melamchi.jpg",
    imageAlt: "Hill landscape of the Melamchi region",
    size: "small",
  },
];
