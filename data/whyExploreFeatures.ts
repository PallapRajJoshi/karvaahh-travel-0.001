export interface WhyExploreFeature {
  id: string;
  title: string;
  description: string;
  icon: "mountain" | "leaf" | "route" | "users" | "compass" | "camera";
  imageLabel: string;
}

// Source: brief §7 "Why Explore Saipal Base Camp?" — six cards as specified.
export const whyExploreFeatures: WhyExploreFeature[] = [
  {
    id: "mount-saipal",
    title: "Mount Saipal — A Himalayan Giant",
    description:
      "Experience the dramatic presence of Mount Saipal, rising above the remote mountain landscapes of Bajhang.",
    icon: "mountain",
    imageLabel: "Verified photograph of Mount Saipal",
  },
  {
    id: "alpine-wilderness",
    title: "Untouched Alpine Wilderness",
    description: "Explore remote valleys, rugged terrain, pristine rivers, and expansive alpine meadows.",
    icon: "leaf",
    imageLabel: "Alpine valley, Bajhang region",
  },
  {
    id: "challenging-trekking",
    title: "Challenging Himalayan Trekking",
    description:
      "Discover demanding trails suited to experienced trekkers seeking a remote and physically challenging adventure.",
    icon: "route",
    imageLabel: "Remote Himalayan trekking trail",
  },
  {
    id: "mountain-culture",
    title: "Traditional Mountain Culture",
    description:
      "Encounter local communities, traditional settlements, and cultural heritage along the journey, with respect for local customs.",
    icon: "users",
    imageLabel: "Traditional settlement, Bajhang",
  },
  {
    id: "wildlife-landscapes",
    title: "Wildlife and Natural Landscapes",
    description:
      "Experience the region's diverse natural environments and observe wildlife responsibly where it is present.",
    icon: "compass",
    imageLabel: "Natural landscape, Saipal region",
  },
  {
    id: "solitude-photography",
    title: "Solitude and Mountain Photography",
    description: "Enjoy remote Himalayan scenery, expansive landscapes, and opportunities for photography in a less-visited region.",
    icon: "camera",
    imageLabel: "Wide Himalayan panorama for photography",
  },
];
