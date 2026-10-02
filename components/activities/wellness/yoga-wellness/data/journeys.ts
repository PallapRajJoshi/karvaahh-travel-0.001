import type { Itinerary, ComparisonRow, IconCard, ProcessStep } from "./types";

export const itineraries: Itinerary[] = [
  {
    id: "rishikesh",
    title: "Rishikesh Yoga and Meditation Retreat",
    duration: "3 Days / 2 Nights",
    destinationValue: "Rishikesh, India",
    days: [
      {
        day: "Day 1",
        title: "Arrival and Relaxation",
        points: [
          "Arrive in Rishikesh.",
          "Transfer to the selected accommodation.",
          "Enjoy free time and a gentle introduction to the retreat.",
          "Optional evening meditation or relaxation session where available.",
        ],
      },
      {
        day: "Day 2",
        title: "Yoga and Mindfulness",
        points: [
          "Optional morning yoga session.",
          "Breakfast and leisure time.",
          "Explore a selected cultural or riverside area.",
          "Optional guided meditation or wellness workshop.",
        ],
      },
      {
        day: "Day 3",
        title: "Reflection and Departure",
        points: [
          "Optional morning yoga or breathing session.",
          "Breakfast and personal time.",
          "Depart according to the travel arrangements.",
        ],
      },
    ],
  },
  {
    id: "pokhara",
    title: "Pokhara Lakeside Wellness Escape",
    duration: "3 Days / 2 Nights",
    destinationValue: "Pokhara, Nepal",
    days: [
      {
        day: "Day 1",
        title: "Arrival in Pokhara",
        points: [
          "Arrive and transfer to the selected accommodation.",
          "Enjoy a peaceful lakeside walk.",
          "Relax and enjoy the surrounding scenery.",
        ],
      },
      {
        day: "Day 2",
        title: "Nature and Wellness",
        points: [
          "Optional morning yoga or meditation.",
          "Enjoy a scenic lakeside experience.",
          "Explore nature walks or nearby attractions.",
          "Enjoy a peaceful evening.",
        ],
      },
      {
        day: "Day 3",
        title: "Mindful Morning and Departure",
        points: [
          "Optional morning relaxation session.",
          "Breakfast and leisure time.",
          "Depart according to the confirmed travel plan.",
        ],
      },
    ],
  },
  {
    id: "kathmandu-nagarkot",
    title: "Kathmandu and Nagarkot Mindfulness Retreat",
    duration: "4 Days / 3 Nights",
    destinationValue: "Kathmandu, Nepal",
    days: [
      {
        day: "Day 1",
        title: "Arrival in Kathmandu",
        points: [
          "Arrive and transfer to the selected accommodation.",
          "Enjoy free time and relaxation.",
        ],
      },
      {
        day: "Day 2",
        title: "Heritage and Mindfulness",
        points: [
          "Optional yoga or meditation session.",
          "Explore selected cultural and heritage attractions.",
          "Enjoy a peaceful evening.",
        ],
      },
      {
        day: "Day 3",
        title: "Nagarkot Nature Escape",
        points: [
          "Travel to Nagarkot.",
          "Enjoy scenic viewpoints and nature walks.",
          "Optional outdoor yoga or meditation where available.",
        ],
      },
      {
        day: "Day 4",
        title: "Departure",
        points: [
          "Enjoy a relaxed morning.",
          "Return according to the confirmed travel arrangements.",
        ],
      },
    ],
  },
  {
    id: "lumbini",
    title: "Lumbini Spiritual Wellness Escape",
    duration: "2 Days / 1 Night",
    destinationValue: "Lumbini, Nepal",
    days: [
      {
        day: "Day 1",
        title: "Arrival and Reflection",
        points: [
          "Arrive in Lumbini.",
          "Visit selected heritage and spiritual sites.",
          "Enjoy peaceful surroundings and personal reflection.",
        ],
      },
      {
        day: "Day 2",
        title: "Mindful Exploration",
        points: [
          "Explore selected monastic areas and the sacred garden.",
          "Optional meditation where available.",
          "Depart according to the confirmed itinerary.",
        ],
      },
    ],
  },
];

export const comparison: ComparisonRow[] = [
  {
    type: "Yoga and Meditation Retreats",
    setting: "Riverside, lakeside, or foothill settings",
    activities: "Guided yoga, meditation, breathing sessions",
    idealTraveler: "Beginners and regular practitioners",
    style: "Structured daily rhythm with free time",
    customization: "Duration, yoga style where offered, group size",
  },
  {
    type: "Ayurveda-Inspired Wellness",
    setting: "Retreat or wellness settings where available",
    activities: "Ayurveda-inspired experiences, relaxation, wellness routines",
    idealTraveler: "Travelers drawn to traditional self-care",
    style: "Restful and unhurried",
    customization: "Offerings depend on the selected facility",
  },
  {
    type: "Nature Wellness Escapes",
    setting: "Hills, forests, and scenic viewpoints",
    activities: "Nature walks, outdoor relaxation, mindful outdoor time",
    idealTraveler: "Nature lovers and families",
    style: "Gentle and outdoors-focused",
    customization: "Walking pace, viewpoints, add-on yoga",
  },
  {
    type: "Spiritual and Mindfulness Journeys",
    setting: "Heritage towns, monastic areas, sacred sites",
    activities: "Heritage walks, reflection, meditation where offered",
    idealTraveler: "Reflective and culture-minded travelers",
    style: "Slow-paced with cultural context",
    customization: "Sites visited, guided or self-paced",
  },
  {
    type: "Lakeside Retreats",
    setting: "Lakeshore and mountain-view surroundings",
    activities: "Lakeside yoga where available, walks, sunrise and sunset views",
    idealTraveler: "Couples, individuals, and short-break travelers",
    style: "Easy, scenic, and relaxed",
    customization: "Stay length, activity mix, group size",
  },
  {
    type: "Corporate Wellness Retreats",
    setting: "Group-friendly venues with nature access",
    activities: "Mindfulness workshops, yoga sessions, team activities",
    idealTraveler: "Teams and organizations",
    style: "Planned schedule with group activities",
    customization: "Program content, group size, logistics",
  },
];

export const whyChoose: IconCard[] = [
  {
    id: "planning",
    title: "Personalized Wellness Travel Planning",
    description:
      "Explore wellness experiences tailored to individual interests, travel preferences, group size, and destination.",
    icon: "compass",
  },
  {
    id: "destinations",
    title: "Nature-Inspired Destinations",
    description:
      "Discover peaceful settings across Nepal and India, from lakeside landscapes to Himalayan foothills.",
    icon: "mountain",
  },
  {
    id: "flexible",
    title: "Flexible Retreat Experiences",
    description:
      "Combine yoga, meditation, nature walks, cultural exploration, and relaxation where available.",
    icon: "blend",
  },
  {
    id: "travelers",
    title: "Experiences for Different Travelers",
    description:
      "Explore individual getaways, couples' retreats, family experiences, and corporate wellness journeys.",
    icon: "people",
  },
  {
    id: "arrangements",
    title: "Customized Travel Arrangements",
    description:
      "Plan accommodation, transportation, sightseeing, and other travel arrangements based on the selected itinerary.",
    icon: "route",
  },
  {
    id: "coordination",
    title: "Thoughtful Journey Coordination",
    description:
      "Receive assistance with planning and coordinating the travel experience, subject to confirmed services and availability.",
    icon: "hands",
  },
];

export const process: ProcessStep[] = [
  {
    id: "share",
    title: "Share Your Wellness Preferences",
    description:
      "Tell us your preferred destination, travel dates, group size, wellness interests, and travel requirements.",
  },
  {
    id: "explore",
    title: "Explore Suitable Experiences",
    description:
      "Review suitable retreat styles, activities, and destinations based on your preferences.",
  },
  {
    id: "customize",
    title: "Customize Your Journey",
    description:
      "Plan your itinerary, accommodation, wellness activities, sightseeing, and transportation where available.",
  },
  {
    id: "confirm",
    title: "Confirm Your Travel Arrangements",
    description:
      "Review the confirmed inclusions, exclusions, schedules, cancellation conditions, and booking details before finalizing.",
  },
];
