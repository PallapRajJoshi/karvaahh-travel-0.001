export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const paraglidingFaqs: FaqItem[] = [
  {
    id: "beginners",
    question: "Is paragliding in Pokhara suitable for beginners?",
    answer:
      "Yes. Standard tandem paragliding generally does not require previous experience. You fly with a qualified pilot who manages the paraglider throughout the flight, so your only job is to run a few steps at launch and enjoy the view.",
  },
  {
    id: "location",
    question: "Where does paragliding take place?",
    answer:
      "Flights are generally conducted from Sarangkot, the hilltop viewpoint above the Pokhara valley, and land near Phewa Lake.",
  },
  {
    id: "experience",
    question: "Do I need previous paragliding experience?",
    answer:
      "No previous experience is generally required for tandem flights. Your pilot handles the equipment, the launch and the landing.",
  },
  {
    id: "weather",
    question: "What happens if the weather is bad?",
    answer:
      "Flights may be delayed, rescheduled or cancelled if weather conditions are not suitable for safe operation. Our team will contact you on the day and work with you to find another slot where possible.",
  },
  {
    id: "clothing",
    question: "What should I wear?",
    answer:
      "Comfortable outdoor clothing and closed footwear with a good sole, since you take a few running steps at launch. Mornings on the ridge are cooler than in town, so bring a light layer. Follow the operator's instructions on clothing and equipment.",
  },
  {
    id: "media",
    question: "Can I take photos or videos during the flight?",
    answer:
      "Photographs and video may be available depending on the selected package and operator. Handheld cameras and phones are usually not permitted in flight for safety reasons, so ask us about the media option when you book.",
  },
  {
    id: "combine",
    question: "Can paragliding be combined with other Pokhara activities?",
    answer:
      "Yes. It combines easily with Phewa Lake boating, Sarangkot sightseeing, Davis Falls, Gupteshwor Cave and the World Peace Pagoda, and fits into a wider Nepal itinerary with Kathmandu, Chitwan or a trek.",
  },
  {
    id: "transfer",
    question: "Is hotel transfer included?",
    answer:
      "Hotel transfer depends on the selected package. Tell us where you are staying in Pokhara and we will confirm what is included before you book.",
  },
];
