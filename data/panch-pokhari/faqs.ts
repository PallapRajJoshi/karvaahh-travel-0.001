export type FaqItem = {
  id: string;
  question: string;
  answer: string;
};

/**
 * FAQ content. Answers distinguish confirmed information from details that
 * require current verification, per the brief's explicit instruction.
 */
export const faqs: FaqItem[] = [
  {
    id: "location",
    question: "Where is Panch Pokhari located?",
    answer:
      "Panch Pokhari is in the Sindhupalchok district of Nepal's Bagmati Province, within Langtang National Park.",
  },
  {
    id: "altitude",
    question: "What is the approximate altitude of Panch Pokhari?",
    answer:
      "Panch Pokhari sits at approximately 4,100 meters above sea level.",
  },
  {
    id: "reaching",
    question: "How do I reach Panch Pokhari from Kathmandu?",
    answer:
      "The typical route is Kathmandu → Melamchi → Bhotang by road, followed by a multi-day trek on foot to the lakes. Road and trail conditions should be verified close to your travel dates.",
  },
  {
    id: "days-needed",
    question: "How many days are needed for the Panch Pokhari trek?",
    answer:
      "Trek duration varies by route, fitness, and acclimatization needs. Our sample itinerary outlines an illustrative six-day structure, but actual trek length should be confirmed with your trek operator before booking.",
  },
  {
    id: "best-time",
    question: "What is the best time to visit Panch Pokhari?",
    answer:
      "Spring (March–May) and autumn (September–November) are commonly preferred, though actual conditions should be confirmed based on current weather and trail reports.",
  },
  {
    id: "why-sacred",
    question: "Why are the five lakes considered sacred?",
    answer:
      "The five alpine lakes hold deep spiritual significance for both Hindu and Buddhist traditions and are a recognized pilgrimage destination in the region.",
  },
  {
    id: "janai-purnima",
    question: "What is the connection between Panch Pokhari and Janai Purnima?",
    answer:
      "Panch Pokhari is a pilgrimage site associated with the Janai Purnima festival, when devotees travel to the lakes as part of long-held religious tradition.",
  },
  {
    id: "beginners",
    question: "Is Panch Pokhari suitable for beginners?",
    answer:
      "This is a high-altitude, multi-day trek and should not be treated as an easy walk. Travelers with limited trekking experience should prepare carefully, consider a guide, and discuss suitability with their trek operator.",
  },
  {
    id: "permits",
    question: "What permits are required for the Panch Pokhari trek?",
    answer:
      "Panch Pokhari lies within Langtang National Park, so protected-area entry requirements typically apply. Current permit rules, registration, and fees should be verified before departure.",
  },
  {
    id: "accommodation",
    question: "Is accommodation available along the trekking route?",
    answer:
      "Basic local guesthouses are available at points along the route, alongside camping options where permitted. Availability should be confirmed in advance.",
  },
  {
    id: "camping",
    question: "Can I camp near Panch Pokhari?",
    answer:
      "Camping may be possible where permitted and operationally feasible. Confirm current rules and arrangements with your trek operator or local authorities.",
  },
  {
    id: "packing",
    question: "What should I pack for the trek?",
    answer:
      "Layered warm clothing, a waterproof jacket, sturdy trekking footwear, suitable sleeping equipment, a headlamp, water containers, navigation tools, first-aid supplies, sun protection, and any personal medication.",
  },
  {
    id: "guide",
    question: "Is a guide recommended for Panch Pokhari?",
    answer:
      "A licensed guide is recommended for this remote, high-altitude route, and may be required depending on current regulations. Confirm requirements before you travel.",
  },
  {
    id: "customized-tour",
    question: "Can Panch Pokhari be included in a customized Nepal tour?",
    answer:
      "Yes. Panch Pokhari can be combined with nearby regions such as Helambu, Melamchi, and the wider Jugal Himal area as part of a customized itinerary — contact Karvaahh to plan one.",
  },
];
