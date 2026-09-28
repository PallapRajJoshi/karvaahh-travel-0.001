import type { IconName } from "../shared/Icon";

export interface ResponsibleGroup {
  icon: IconName;
  title: string;
  items: string[];
}

export const RESPONSIBLE: ResponsibleGroup[] = [
  {
    icon: "monastery",
    title: "At sacred sites",
    items: [
      "Respect local religious practices, whatever your own tradition.",
      "Follow photography restrictions and ask before photographing people.",
      "Treat monasteries, shrines and mani walls with care, and never damage them.",
    ],
  },
  {
    icon: "leaf",
    title: "For the environment",
    items: [
      "Do not litter; carry waste back where required.",
      "Minimise plastic, and use a refillable bottle.",
      "Follow environmental guidelines at the lake and on the Kora.",
    ],
  },
  {
    icon: "users",
    title: "With local communities",
    items: [
      "Respect the people and communities whose home this is.",
      "Follow instructions from local authorities and your guides.",
    ],
  },
];
