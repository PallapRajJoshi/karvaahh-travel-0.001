import type { IconName } from "./experiences";

export interface PackageDetail {
  label: string;
  value: string;
  icon: IconName;
  /** Rendered in the emphasised card style. */
  emphasis?: boolean;
}

export interface Season {
  name: string;
  months: string;
  summary: string;
  icon: IconName;
  /** Autumn and spring are the generally preferred windows. */
  preferred: boolean;
}

export interface CombineDestination {
  name: string;
  description: string;
  image: string;
  alt: string;
}

export const packageDetails: PackageDetail[] = [
  {
    label: "Activity",
    value: "Tandem paragliding in Pokhara",
    icon: "wing",
  },
  {
    label: "Location",
    value: "Sarangkot, Pokhara, Nepal",
    icon: "pin",
  },
  {
    label: "Experience level",
    value: "Suitable for beginners, subject to operator requirements",
    icon: "compass",
  },
  {
    label: "Duration",
    value: "Depends on the selected flight package and weather conditions",
    icon: "clock",
  },
  {
    label: "Best season",
    value: "Generally autumn and spring",
    icon: "leaf",
  },
  {
    label: "Includes",
    value: "Professional tandem pilot, paragliding equipment and pre-flight safety briefing",
    icon: "shield",
  },
  {
    label: "Optional add-ons",
    value: "Hotel transfer, photographs and flight video, depending on the package",
    icon: "camera",
  },
  {
    label: "Important",
    value: "Flight availability and duration are subject to weather and safety conditions",
    icon: "info",
    emphasis: true,
  },
];

export const seasons: Season[] = [
  {
    name: "Autumn",
    months: "September – November",
    summary:
      "Generally clear skies and excellent mountain visibility. The most reliable window of the year for flying.",
    icon: "leaf",
    preferred: true,
  },
  {
    name: "Spring",
    months: "March – May",
    summary:
      "Pleasant weather and beautiful natural scenery, with warm air and rhododendron colour on the hills.",
    icon: "sun",
    preferred: true,
  },
  {
    name: "Winter",
    months: "December – February",
    summary:
      "Flights may be possible, but conditions can vary. Mornings on the ridge are cold and clear.",
    icon: "snow",
    preferred: false,
  },
  {
    name: "Monsoon",
    months: "June – August",
    summary:
      "Frequent rain and cloud cover may affect flight availability. Expect changes at short notice.",
    icon: "rain",
    preferred: false,
  },
];

export const combineDestinations: CombineDestination[] = [
  {
    name: "Phewa Lake boating",
    description: "Row out to Tal Barahi temple on the water you flew over that morning.",
    image: "/images/activities/paragliding/combine-phewa-lake.jpg",
    alt: "Wooden boats moored on Phewa Lake in Pokhara with green hills behind",
  },
  {
    name: "Sarangkot sunrise",
    description: "Return to the launch ridge at dawn for first light on Machhapuchhre.",
    image: "/images/activities/paragliding/combine-sarangkot-sunrise.jpg",
    alt: "Sunrise over the Annapurna range seen from the Sarangkot viewpoint",
  },
  {
    name: "Davis Falls",
    description: "The waterfall that disappears underground on the southern edge of town.",
    image: "/images/activities/paragliding/combine-davis-falls.jpg",
    alt: "Water rushing into the underground gorge at Davis Falls, Pokhara",
  },
  {
    name: "Gupteshwor Cave",
    description: "Descend into the limestone cave directly across the road from the falls.",
    image: "/images/activities/paragliding/combine-gupteshwor-cave.jpg",
    alt: "Lit stone stairway descending into Gupteshwor Mahadev Cave in Pokhara",
  },
  {
    name: "World Peace Pagoda",
    description: "A white stupa on the ridge above the lake, with the valley laid out below.",
    image: "/images/activities/paragliding/combine-peace-pagoda.jpg",
    alt: "The white World Peace Pagoda stupa above Phewa Lake in Pokhara",
  },
];
