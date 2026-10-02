import type { ExperienceItem, ActivityItem } from "./types";

const IMG = "/images/activities/wellness/yoga-wellness";

export const experiences: ExperienceItem[] = [
  {
    id: "yoga-retreats",
    title: "Yoga Retreats",
    description:
      "Reconnect with your body and mind through guided yoga sessions in peaceful natural surroundings, from Himalayan foothills to serene lakeside retreats.",
    highlights: [
      "Hatha, gentle, or other yoga styles where offered",
      "Guided yoga sessions",
      "Nature-inspired practice spaces",
      "Relaxation and mindful movement",
    ],
    image: {
      src: `${IMG}/experience-yoga-valley.webp`,
      alt: "A yoga session on a terrace overlooking a Himalayan valley",
      label: "Yoga session overlooking a Himalayan valley",
    },
    inquiryValue: "Yoga Retreat",
  },
  {
    id: "meditation-mindfulness",
    title: "Meditation and Mindfulness",
    description:
      "Discover quiet spaces for reflection, guided meditation, mindful breathing, and moments of stillness away from everyday distractions.",
    highlights: [
      "Guided meditation",
      "Mindfulness sessions",
      "Breathing exercises",
      "Quiet reflection and relaxation",
    ],
    image: {
      src: `${IMG}/experience-meditation-garden.webp`,
      alt: "A person meditating in a quiet garden with mountains beyond",
      label: "Meditation in a peaceful garden or mountain retreat",
    },
    inquiryValue: "Meditation and Mindfulness",
  },
  {
    id: "ayurveda-holistic",
    title: "Ayurveda and Holistic Wellness",
    description:
      "Explore traditional wellness practices and Ayurveda-inspired experiences designed around relaxation, self-care, and personal well-being.",
    highlights: [
      "Ayurveda-inspired wellness experiences",
      "Traditional wellness consultations where offered",
      "Relaxation therapies",
      "Personalized wellness routines where available",
    ],
    image: {
      src: `${IMG}/experience-ayurveda-room.webp`,
      alt: "A calm wellness room with natural textures and soft light",
      label: "Serene wellness room, natural textures, soft light",
    },
    inquiryValue: "Ayurveda-Inspired Wellness",
  },
  {
    id: "nature-forest",
    title: "Nature and Forest Wellness",
    description:
      "Reconnect with nature through peaceful forest walks, scenic trails, outdoor relaxation, and mindful experiences in natural surroundings.",
    highlights: [
      "Nature walks",
      "Forest relaxation",
      "Scenic mountain viewpoints",
      "Mindful outdoor experiences",
    ],
    image: {
      src: `${IMG}/experience-forest-trail.webp`,
      alt: "A quiet forest trail surrounded by lush greenery",
      label: "Peaceful forest trail, lush greenery",
    },
    inquiryValue: "Nature and Forest Wellness",
  },
  {
    id: "sound-relaxation",
    title: "Sound Healing and Relaxation",
    description:
      "Explore sound-based relaxation experiences and calming sessions that encourage stillness, reflection, and mindful awareness.",
    highlights: [
      "Sound-based relaxation sessions",
      "Singing bowl experiences where offered",
      "Guided relaxation",
      "Quiet meditation spaces",
    ],
    image: {
      src: `${IMG}/experience-sound-room.webp`,
      alt: "Singing bowls in a tranquil meditation room with soft daylight",
      label: "Meditation room with singing bowls",
    },
    inquiryValue: "Sound Healing and Relaxation",
  },
  {
    id: "wellness-workshops",
    title: "Wellness Workshops",
    description:
      "Participate in guided workshops focused on mindful living, yoga practices, breathing techniques, healthy routines, and personal well-being.",
    highlights: [
      "Yoga workshops",
      "Mindfulness sessions",
      "Guided breathing practices",
      "Wellness education and group activities",
    ],
    image: {
      src: `${IMG}/experience-workshop.webp`,
      alt: "A small group taking part in a guided wellness workshop",
      label: "Small group in a wellness workshop",
    },
    inquiryValue: "Wellness Workshop",
  },
];

export const activities: ActivityItem[] = [
  {
    id: "morning-yoga",
    title: "Morning Yoga",
    description:
      "Start the day with gentle movement and mindful breathing in peaceful surroundings.",
    icon: "sun",
  },
  {
    id: "guided-meditation",
    title: "Guided Meditation",
    description:
      "Explore moments of stillness through guided meditation and mindfulness practices.",
    icon: "lotus",
  },
  {
    id: "breathing-relaxation",
    title: "Breathing and Relaxation",
    description:
      "Experience guided breathing exercises and relaxation sessions suited to the selected program.",
    icon: "breath",
  },
  {
    id: "nature-walks",
    title: "Nature Walks",
    description:
      "Explore scenic trails, forest paths, and peaceful natural environments.",
    icon: "leaf",
  },
  {
    id: "ayurveda-inspired",
    title: "Ayurveda-Inspired Wellness",
    description:
      "Discover traditional wellness practices and relaxation experiences where offered.",
    icon: "drop",
  },
  {
    id: "workshops",
    title: "Wellness Workshops",
    description:
      "Participate in sessions focused on mindful living, healthy routines, and personal well-being.",
    icon: "book",
  },
];
