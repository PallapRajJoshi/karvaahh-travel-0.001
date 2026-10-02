import type { IconName } from "@/components/shared/Icon";

export type QuickFact = {
  id: string;
  icon: IconName;
  label: string;
  value: string;
};

/**
 * Destination quick-facts panel. All values are taken directly from the
 * approved brief — no distances, durations, or figures have been invented.
 */
export const quickFacts: QuickFact[] = [
  {
    id: "destination",
    icon: "flag",
    label: "Destination",
    value: "Panch Pokhari",
  },
  {
    id: "location",
    icon: "location",
    label: "Location",
    value: "Sindhupalchok, Bagmati Province, Nepal",
  },
  {
    id: "elevation",
    icon: "elevation",
    label: "Elevation",
    value: "Approximately 4,100 meters",
  },
  {
    id: "type",
    icon: "lotus",
    label: "Destination Type",
    value: "Sacred Lakes, Trekking, Nature, Spiritual Tourism",
  },
  {
    id: "trek-style",
    icon: "backpack",
    label: "Trek Style",
    value: "Multi-day high-altitude trek",
  },
  {
    id: "season",
    icon: "calendar",
    label: "Best Seasons",
    value: "Spring and autumn, subject to weather and trail conditions",
  },
  {
    id: "route",
    icon: "route",
    label: "Starting Route",
    value: "Kathmandu → Melamchi → Bhotang → Trek",
  },
  {
    id: "nearby",
    icon: "compass",
    label: "Nearby Regions",
    value: "Helambu, Melamchi, Jugal Himal",
  },
];
