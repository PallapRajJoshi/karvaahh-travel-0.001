// Sample Khaptad itineraries. All labeled as customizable concepts requiring
// verification of routes, transport, and local conditions — no invented durations or fares.

export interface ItineraryDay {
  day: number;
  summary: string;
}

export interface ItineraryOption {
  id: string;
  title: string;
  duration: string;
  days: ItineraryDay[];
}

export const khaptadItineraries: ItineraryOption[] = [
  {
    id: "nature-escape",
    title: "Khaptad Nature Escape",
    duration: "3 Days / 2 Nights",
    days: [
      { day: 1, summary: "Travel toward Silgadhi or another suitable access point and continue toward the park entrance, subject to road conditions." },
      { day: 2, summary: "Explore Khaptad Patans, Khaptad Baba Ashram, and nearby nature trails." },
      { day: 3, summary: "Complete a short nature walk and return journey." },
    ],
  },
  {
    id: "spiritual-nature-journey",
    title: "Khaptad Spiritual & Nature Journey",
    duration: "5 Days / 4 Nights",
    days: [
      { day: 1, summary: "Travel toward a suitable gateway such as Dhangadhi or Dipayal." },
      { day: 2, summary: "Continue overland toward the Khaptad region and begin the approach to the park." },
      { day: 3, summary: "Explore Khaptad Baba Ashram, Khaptad Patans, and nearby forest trails." },
      { day: 4, summary: "Visit selected landmarks such as Tribeni Dham, Sahasralinga, and Khaptad Daha, subject to route feasibility." },
      { day: 5, summary: "Return journey." },
    ],
  },
  {
    id: "far-western-exploration",
    title: "Khaptad & Far-Western Nepal Exploration",
    duration: "7 Days / 6 Nights",
    days: [
      { day: 1, summary: "Travel toward Dhangadhi or another suitable regional gateway." },
      { day: 2, summary: "Continue toward the Khaptad region via a verified overland route." },
      { day: 3, summary: "Explore Khaptad Patans and Khaptad Baba Ashram." },
      { day: 4, summary: "Explore selected spiritual landmarks and forest trails." },
      { day: 5, summary: "Optional regional excursion toward a nearby cultural or natural destination, subject to feasibility." },
      { day: 6, summary: "Begin the return journey." },
      { day: 7, summary: "Complete the return journey." },
    ],
  },
];

export const khaptadItineraryDisclaimer: string =
  "These itineraries are customizable concepts. Routes, transport, and local conditions — including any combination with Badimalika or other remote destinations — require verification before booking.";
