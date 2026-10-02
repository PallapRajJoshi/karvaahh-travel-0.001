export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

// Source: brief §19 — all 15 questions specified verbatim; answers are
// concise and, where current information is uncertain, say so explicitly
// per the brief's instruction. No prices, durations, or logistics are
// invented in the answers.
export const faqItems: FaqItem[] = [
  {
    id: "faq-1",
    question: "Where is Saipal Base Camp located?",
    answer:
      "Saipal Base Camp is in the Bajhang district of Sudurpashchim Province, in Nepal's far-western Himalayan region.",
  },
  {
    id: "faq-2",
    question: "How high is Mount Saipal?",
    answer: "Mount Saipal rises to 7,031 meters, making it one of the prominent peaks of Nepal's far west.",
  },
  {
    id: "faq-3",
    question: "How do I reach Saipal Base Camp from Kathmandu?",
    answer:
      "The typical approach is to travel from Kathmandu to Dhangadhi or Nepalgunj, then continue overland to Bajhang before beginning the multi-day trek. Exact schedules and connections should be confirmed at the time of booking.",
  },
  {
    id: "faq-4",
    question: "Can I travel via Dhangadhi or Nepalgunj?",
    answer: "Yes. Both Dhangadhi and Nepalgunj serve as gateway points, followed by overland travel to Bajhang and the trailhead.",
  },
  {
    id: "faq-5",
    question: "How many days are required for a Saipal Base Camp expedition?",
    answer:
      "Duration depends on the chosen route, acclimatization needs, and access conditions. A sample planning framework is provided on this page, but the actual duration must be confirmed with an experienced local operator.",
  },
  {
    id: "faq-6",
    question: "Is Saipal Base Camp suitable for beginner trekkers?",
    answer:
      "No. This is a remote, physically demanding expedition intended for experienced trekkers with prior high-altitude trekking experience.",
  },
  {
    id: "faq-7",
    question: "What is the best season for the Saipal Base Camp trek?",
    answer:
      "Spring (March–May) and autumn (September–November) are commonly preferred, though the actual expedition window depends on current weather, trail conditions, and local guidance.",
  },
  {
    id: "faq-8",
    question: "Are guides and porters available for the expedition?",
    answer:
      "Guide and porter arrangements are available where appropriate and should be confirmed in advance, particularly given the remoteness of the region.",
  },
  {
    id: "faq-9",
    question: "What permits are required for Saipal Base Camp?",
    answer:
      "Permit and protected-area requirements can change. Current trekking permits, registration requirements, and fees should be verified before travel.",
  },
  {
    id: "faq-10",
    question: "Is camping necessary during the trek?",
    answer:
      "Camping is often part of the remote sections of this route, where permitted and logistically feasible, alongside basic accommodation in accessible towns.",
  },
  {
    id: "faq-11",
    question: "What accommodation is available in the region?",
    answer:
      "Basic accommodation exists in accessible towns and settlements, subject to availability, with camping used for the more remote sections.",
  },
  {
    id: "faq-12",
    question: "What equipment should I carry?",
    answer:
      "Essentials include insulated and waterproof clothing, suitable trekking boots, a sleeping bag and camping equipment, navigation and first-aid supplies, and sun protection and water treatment. See the Safety & Preparation section for the full list.",
  },
  {
    id: "faq-13",
    question: "Is mobile network coverage available along the route?",
    answer:
      "Communication is limited across much of this remote region. Travelers should plan for restricted connectivity and consider emergency communication equipment.",
  },
  {
    id: "faq-14",
    question: "Can Saipal Base Camp be combined with Surma Sarovar or Khaptad National Park?",
    answer:
      "Both can be considered as separate regional excursions or extensions. They are not part of the direct Saipal Base Camp trekking trail, and any combined routing should be verified in advance.",
  },
  {
    id: "faq-15",
    question: "How can I book a customized Saipal expedition with Karvaahh?",
    answer: "Contact Karvaahh directly for a customized itinerary and current expedition details.",
  },
];
