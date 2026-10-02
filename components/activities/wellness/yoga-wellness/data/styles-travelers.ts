import type { RetreatStyle, TravelerItem } from "./types";

const IMG = "/images/activities/wellness/yoga-wellness";

export const retreatStyles: RetreatStyle[] = [
  {
    id: "yoga-meditation",
    title: "Yoga and Meditation Retreats",
    description:
      "A rhythm of guided movement, breathing, and stillness in a calm setting, shaped around your experience level.",
    destinations: ["Rishikesh", "Pokhara", "Nagarkot"],
    activities: ["Morning yoga", "Guided meditation", "Breathing and relaxation"],
    experienceValue: "Yoga Retreat",
    purposeValue: "Individual",
  },
  {
    id: "himalayan-nature",
    title: "Himalayan Nature Wellness",
    description:
      "Slow days among mountain views, fresh air, and scenic trails, with mindful practices woven in where offered.",
    destinations: ["Himalayan Foothills", "Nagarkot", "Pokhara"],
    activities: ["Nature walks", "Mountain-view relaxation", "Outdoor yoga where available"],
    experienceValue: "Nature and Forest Wellness",
    purposeValue: "Individual",
  },
  {
    id: "ayurveda-inspired",
    title: "Ayurveda-Inspired Wellness Experiences",
    description:
      "Traditional wellness practices and relaxation experiences, offered where available. Wellness travel, not medical treatment.",
    destinations: ["Rishikesh", "Kathmandu", "Pokhara"],
    activities: ["Ayurveda-inspired experiences", "Relaxation sessions", "Wellness routines where available"],
    experienceValue: "Ayurveda-Inspired Wellness",
    purposeValue: "Individual",
  },
  {
    id: "spiritual-mindfulness",
    title: "Spiritual and Mindfulness Journeys",
    description:
      "Meaningful places, quiet reflection, and cultural context, paced for thoughtful travelers.",
    destinations: ["Lumbini", "Haridwar", "Kathmandu"],
    activities: ["Mindful heritage walks", "Meditation where offered", "Monastery and heritage visits"],
    experienceValue: "Spiritual Wellness Journey",
    purposeValue: "Individual",
  },
  {
    id: "lakeside",
    title: "Lakeside Wellness Escapes",
    description:
      "Easy mornings and calm water views, ideal for unhurried getaways.",
    destinations: ["Pokhara"],
    activities: ["Lakeside yoga where available", "Sunrise and sunset views", "Peaceful boating where available"],
    experienceValue: "Yoga Retreat",
    purposeValue: "Individual",
  },
  {
    id: "forest-nature",
    title: "Forest and Nature Retreats",
    description:
      "Green surroundings, gentle walking, and outdoor relaxation for a reset away from screens.",
    destinations: ["Himalayan Foothills", "Nagarkot"],
    activities: ["Forest walks", "Scenic trails", "Mindful outdoor experiences"],
    experienceValue: "Nature and Forest Wellness",
    purposeValue: "Individual",
  },
  {
    id: "couple-honeymoon",
    title: "Couple and Honeymoon Wellness",
    description:
      "Scenic, peaceful settings and relaxing shared experiences for two.",
    destinations: ["Pokhara", "Nagarkot", "Rishikesh"],
    activities: ["Sunrise views", "Relaxation experiences", "Gentle yoga where available"],
    experienceValue: "Other / Not Decided",
    purposeValue: "Couple",
  },
  {
    id: "corporate",
    title: "Corporate Wellness Retreats",
    description:
      "Group-friendly programs with mindfulness and movement, tailored to your organization's needs.",
    destinations: ["Pokhara", "Kathmandu", "Nagarkot"],
    activities: ["Mindfulness workshops", "Yoga sessions", "Nature-based team experiences"],
    experienceValue: "Corporate Wellness Retreat",
    purposeValue: "Corporate",
  },
  {
    id: "family",
    title: "Family Wellness Experiences",
    description:
      "Gentle activities and shared downtime for travelers of different ages, where suitable options are available.",
    destinations: ["Pokhara", "Kathmandu", "Lumbini"],
    activities: ["Nature walks", "Cultural experiences", "Family-friendly relaxation where available"],
    experienceValue: "Family Wellness Experience",
    purposeValue: "Family",
  },
  {
    id: "personal-getaway",
    title: "Personal Wellness Getaways",
    description:
      "A few days just for you, with the mix of quiet and activity you choose.",
    destinations: ["Pokhara", "Rishikesh", "Nagarkot"],
    activities: ["Morning yoga", "Guided meditation", "Nature walks"],
    experienceValue: "Meditation and Mindfulness",
    purposeValue: "Individual",
  },
];

export const travelers: TravelerItem[] = [
  {
    id: "individual",
    title: "Individual Travelers",
    heading: "Make Time for Yourself",
    description:
      "Explore peaceful wellness getaways, yoga sessions, meditation, and nature-based experiences tailored to individual interests.",
    image: {
      src: `${IMG}/traveler-individual.webp`,
      alt: "A solo traveler practicing yoga at sunrise",
      label: "Solo traveler, quiet morning practice",
    },
    purposeValue: "Individual",
    ctaLabel: "Plan a solo getaway",
  },
  {
    id: "couples",
    title: "Couples and Honeymooners",
    heading: "Reconnect Together",
    description:
      "Enjoy peaceful retreats, scenic surroundings, mindful activities, and relaxing experiences designed for shared moments.",
    image: {
      src: `${IMG}/traveler-couple.webp`,
      alt: "A couple relaxing together with a mountain view",
      label: "Couple relaxing with a mountain view",
    },
    purposeValue: "Couple",
    ctaLabel: "Plan a couple's retreat",
  },
  {
    id: "families",
    title: "Families",
    heading: "Discover Wellness Together",
    description:
      "Explore nature walks, gentle wellness activities, cultural experiences, and family-friendly relaxation options where available.",
    image: {
      src: `${IMG}/traveler-family.webp`,
      alt: "A family walking together on a scenic trail",
      label: "Family on a scenic walking trail",
    },
    purposeValue: "Family",
    ctaLabel: "Plan a family journey",
  },
  {
    id: "corporate",
    title: "Corporate Groups",
    heading: "Recharge as a Team",
    description:
      "Explore wellness-focused group retreats, mindfulness workshops, yoga sessions, and nature-based team experiences tailored to organizational needs.",
    image: {
      src: `${IMG}/traveler-corporate.webp`,
      alt: "A team taking part in an outdoor mindfulness session",
      label: "Team in an outdoor mindfulness session",
    },
    purposeValue: "Corporate",
    ctaLabel: "Plan a team retreat",
  },
];
