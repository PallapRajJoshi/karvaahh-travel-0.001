import type { IconName } from "@/components/shared/Icon";

export type WhyVisitCard = {
  id: string;
  icon: IconName;
  title: string;
  body: string;
  image: string;
  imageAlt: string;
};

export const whyVisitCards: WhyVisitCard[] = [
  {
    id: "sacred-lakes",
    icon: "lotus",
    title: "Five Sacred Alpine Lakes",
    body: "Discover the five holy lakes surrounded by rugged Himalayan landscapes and serene alpine scenery.",
    image: "/images/destinations/panch-pokhari/why-visit/sacred-lakes.jpg",
    imageAlt: "The five sacred alpine lakes of Panch Pokhari surrounded by Himalayan peaks",
  },
  {
    id: "spiritual-heritage",
    icon: "lotus",
    title: "Spiritual Heritage",
    body: "Experience the sacred significance of Panch Pokhari for Hindu and Buddhist pilgrims, especially during Janai Purnima.",
    image: "/images/destinations/panch-pokhari/why-visit/spiritual-heritage.jpg",
    imageAlt: "Pilgrims at the sacred lakes of Panch Pokhari during Janai Purnima",
  },
  {
    id: "high-altitude-trekking",
    icon: "mountain",
    title: "High-Altitude Trekking",
    body: "Explore remote trails through forests, alpine meadows, mountain ridges, and traditional settlements.",
    image: "/images/destinations/panch-pokhari/why-visit/high-altitude-trekking.jpg",
    imageAlt: "Trekkers on a high-altitude trail near Panch Pokhari",
  },
  {
    id: "mountain-panoramas",
    icon: "elevation",
    title: "Breathtaking Mountain Panoramas",
    body: "Enjoy expansive views of the Jugal Himal range and the surrounding Himalayan wilderness from scenic viewpoints.",
    image: "/images/destinations/panch-pokhari/why-visit/mountain-panoramas.jpg",
    imageAlt: "Panoramic view of the Jugal Himal range from Panch Pokhari",
  },
  {
    id: "remote-wilderness",
    icon: "leaf",
    title: "Remote Wilderness and Tranquility",
    body: "Escape crowded destinations and experience the peaceful atmosphere of Nepal's remote mountain landscapes.",
    image: "/images/destinations/panch-pokhari/why-visit/remote-wilderness.jpg",
    imageAlt: "Quiet alpine wilderness along the Panch Pokhari trekking route",
  },
];
