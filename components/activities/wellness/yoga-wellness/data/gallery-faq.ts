import type { GalleryItem, FaqItem } from "./types";

const IMG = "/images/activities/wellness/yoga-wellness";

const g = (
  id: string,
  size: GalleryItem["size"],
  file: string,
  alt: string,
  label: string,
): GalleryItem => ({ id, size, image: { src: `${IMG}/${file}`, alt, label } });

export const gallery: GalleryItem[] = [
  g("g1", "large", "gallery-foothills-yoga.webp", "Yoga session in the Himalayan foothills at sunrise", "Yoga in the Himalayan foothills"),
  g("g2", "small", "gallery-lake-meditation.webp", "Meditation beside a peaceful lake", "Meditation beside a lake"),
  g("g3", "small", "gallery-wellness-setting.webp", "A traditional wellness setting with natural materials", "Traditional wellness setting"),
  g("g4", "wide", "gallery-relaxation-space.webp", "An Ayurveda-inspired relaxation space with soft light", "Ayurveda-inspired relaxation space"),
  g("g5", "small", "gallery-forest-walk.webp", "A walk through a green forest", "Nature walk through a forest"),
  g("g6", "small", "gallery-garden.webp", "A peaceful garden at a retreat", "Peaceful retreat garden"),
  g("g7", "large", "gallery-pokhara.webp", "Pokhara lakeside landscape with mountains", "Pokhara lakeside landscape"),
  g("g8", "small", "gallery-rishikesh.webp", "Riverside at Rishikesh", "Rishikesh riverside"),
  g("g9", "small", "gallery-lumbini.webp", "The tranquil sacred surroundings of Lumbini", "Lumbini's tranquil surroundings"),
  g("g10", "wide", "gallery-nagarkot.webp", "Nagarkot at sunrise with the Himalayan range", "Nagarkot sunrise"),
  g("g11", "small", "gallery-workshop.webp", "A group wellness workshop", "Group wellness workshop"),
  g("g12", "small", "gallery-reflection.webp", "A quiet moment of reflection outdoors", "A moment of reflection"),
];

const DEPENDS =
  "Details depend on the selected retreat and confirmed arrangements.";

export const faqs: FaqItem[] = [
  {
    id: "what",
    question: "What are yoga and wellness retreats?",
    answer:
      "They are travel experiences built around yoga, meditation, mindfulness, nature, and relaxation in calm settings. They are wellness travel, not medical treatment or clinical healthcare, and no specific health outcome is promised.",
  },
  {
    id: "types",
    question: "What types of wellness experiences can I explore through Karvaahh?",
    answer: `You can explore yoga, meditation and mindfulness, Ayurveda-inspired wellness, nature and forest experiences, sound-based relaxation, and wellness workshops, where offered. ${DEPENDS}`,
  },
  {
    id: "nepal-dest",
    question: "Which destinations are suitable for yoga and meditation in Nepal?",
    answer:
      "Popular settings include Kathmandu, Pokhara, Lumbini, Nagarkot, and the Himalayan foothills. Availability of sessions and instructors varies, so we confirm this when planning your trip.",
  },
  {
    id: "sightseeing",
    question: "Can I combine yoga and meditation with sightseeing?",
    answer:
      "Yes, many travelers pair wellness time with cultural visits and scenic stops. We can shape the balance of activity and rest around your preferences.",
  },
  {
    id: "beginners",
    question: "Are wellness retreats suitable for beginners?",
    answer: `Many experiences can suit beginners, especially gentle sessions. Let us know your experience level and any needs when you inquire. ${DEPENDS}`,
  },
  {
    id: "private",
    question: "Can I plan a private wellness retreat?",
    answer:
      "Yes, we can explore private or small-group arrangements based on your interests and dates. Availability depends on confirmed services.",
  },
  {
    id: "family",
    question: "Are family-friendly wellness experiences available?",
    answer:
      "We can look at nature walks, gentle activities, and cultural experiences suited to families, where suitable options are available. Share the ages of children when you inquire.",
  },
  {
    id: "couples",
    question: "Can couples plan a wellness getaway?",
    answer:
      "Yes. Couples can plan peaceful stays with scenic surroundings and relaxing shared activities. Tell us what you would like and we will explore options.",
  },
  {
    id: "corporate",
    question: "Are corporate wellness retreats available?",
    answer:
      "We can plan group retreats with mindfulness workshops, yoga sessions, and nature-based activities tailored to your organization. Program content and logistics are confirmed with you.",
  },
  {
    id: "included",
    question: "What is generally included in a wellness retreat package?",
    answer:
      "Inclusions vary by journey and may cover accommodation, transfers, sightseeing, and selected wellness sessions. Exact inclusions and exclusions are shared in writing before you finalize anything.",
  },
  {
    id: "sessions",
    question: "Are yoga sessions and wellness therapies included in the package?",
    answer: `Not automatically. Yoga styles, instructor availability, wellness facilities, therapies, accommodation, and meals depend on the retreat you choose. We confirm what is included before booking.`,
  },
  {
    id: "customize",
    question: "Can I customize my retreat itinerary?",
    answer:
      "Yes. The sample itineraries on this page are illustrative concepts only. We can adapt duration, destinations, pace, and activities to your needs.",
  },
  {
    id: "pack",
    question: "What should I pack for a wellness retreat?",
    answer:
      "Comfortable, breathable clothing, layers for cool mornings, walking shoes, a reusable water bottle, and any personal items you need. We can share destination-specific tips once your plan is taking shape.",
  },
  {
    id: "ayurveda",
    question: "Are Ayurveda-inspired experiences available in Nepal and India?",
    answer: `Ayurveda-inspired experiences may be available in both countries, depending on the facility and the season. They are for relaxation and self-care, not medical treatment. ${DEPENDS}`,
  },
  {
    id: "request",
    question: "How can I request a customized wellness travel plan?",
    answer:
      "Fill in the inquiry form on this page with your destination, dates, group size, and interests. Submitting it is a request for a plan, not a booking, and does not guarantee availability.",
  },
];
