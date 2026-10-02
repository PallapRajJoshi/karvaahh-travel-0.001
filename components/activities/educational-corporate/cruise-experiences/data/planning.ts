import type {
  ComparisonRow,
  CruiseStyle,
  Faq,
  Itinerary,
  Traveler,
} from "./types";

export const DESTINATION_OPTIONS = [
  "Ha Long Bay, Vietnam",
  "Kerala Backwaters, India",
  "Ganges River, India",
  "Mediterranean Coastline",
  "Dubai, UAE",
  "Pokhara, Nepal",
  "Other / Not Decided",
] as const;

export const CRUISE_TYPE_OPTIONS = [
  "Luxury Ocean Cruise",
  "River Cruise",
  "Lake Cruise",
  "Sunset Sailing",
  "Island-Hopping Cruise",
  "Houseboat Experience",
  "Yacht or Private Sailing",
  "Coastal and Harbour Cruise",
  "Other / Not Decided",
] as const;

export const PURPOSE_OPTIONS = [
  "Family",
  "Couple",
  "Honeymoon",
  "Corporate",
  "Leisure",
  "Other",
] as const;

export const BUDGET_OPTIONS = [
  "Not sure yet",
  "Economy",
  "Mid-range",
  "Premium",
  "Luxury",
] as const;

export const DURATION_OPTIONS = [
  "A few hours (evening or day cruise)",
  "1 night",
  "2–3 nights",
  "4–7 nights",
  "More than a week",
  "Not sure yet",
] as const;

export const ACTIVITY_OPTIONS = [
  "Onboard dining",
  "Cultural performances",
  "Wellness and relaxation",
  "Water activities",
  "Shore excursions",
  "Photography",
  "Sightseeing add-ons",
] as const;

export const CRUISE_STYLES: CruiseStyle[] = [
  {
    id: "luxury",
    title: "Luxury and Premium Cruises",
    description:
      "Refined onboard hospitality, elegant dining and comfortable accommodation on larger vessels.",
    suggestions: ["Mediterranean Coastline", "Dubai"],
    cruiseType: "Luxury Ocean Cruise",
    purpose: "Leisure",
  },
  {
    id: "romantic",
    title: "Romantic and Honeymoon Cruises",
    description:
      "Quiet waters, golden sunsets and intimate settings designed for two.",
    suggestions: ["Kerala Backwaters", "Dubai", "Pokhara"],
    cruiseType: "Sunset Sailing",
    purpose: "Honeymoon",
  },
  {
    id: "family",
    title: "Family-Friendly Cruise Experiences",
    description:
      "Comfortable journeys with sightseeing and activities that suit different age groups.",
    suggestions: ["Ha Long Bay", "Pokhara", "Mediterranean Coastline"],
    cruiseType: "Other / Not Decided",
    purpose: "Family",
  },
  {
    id: "adventure",
    title: "Adventure and Island-Hopping Cruises",
    description:
      "Islands, hidden bays and water activities for travelers who like to explore.",
    suggestions: ["Ha Long Bay", "Mediterranean Coastline"],
    cruiseType: "Island-Hopping Cruise",
    purpose: "Leisure",
  },
  {
    id: "heritage",
    title: "Cultural and Heritage River Cruises",
    description:
      "Historic riverfronts, local traditions and guided sightseeing along the water.",
    suggestions: ["Ganges River", "Kerala Backwaters"],
    cruiseType: "River Cruise",
    purpose: "Leisure",
  },
  {
    id: "lake",
    title: "Scenic Lake and Nature Cruises",
    description:
      "Calm lake journeys framed by hills, forest shores and mountain views when weather allows.",
    suggestions: ["Pokhara"],
    cruiseType: "Lake Cruise",
    purpose: "Leisure",
  },
  {
    id: "corporate",
    title: "Corporate and Group Cruises",
    description:
      "Group travel and team experiences, subject to vessel, venue and operator availability.",
    suggestions: ["Dubai", "Mediterranean Coastline"],
    cruiseType: "Yacht or Private Sailing",
    purpose: "Corporate",
  },
  {
    id: "private",
    title: "Private Sailing and Yacht Experiences",
    description:
      "Private charters and small-vessel sailing, arranged around your group and schedule where available.",
    suggestions: ["Dubai", "Mediterranean Coastline"],
    cruiseType: "Yacht or Private Sailing",
    purpose: "Other",
  },
];

export const TRAVELERS: Traveler[] = [
  {
    id: "couples",
    title: "Couples and Honeymooners",
    description:
      "Romantic sunset sailing, scenic coastal journeys, peaceful lake experiences, and memorable moments together.",
    cta: "Plan a Couples Cruise",
    purpose: "Couple",
    image: {
      file: "traveler-couples.jpg",
      alt: "A couple watching the sunset from the deck of a boat",
      placeholderLabel: "Couple on deck at sunset",
    },
  },
  {
    id: "families",
    title: "Families",
    description:
      "Comfortable journeys, scenic sightseeing, onboard entertainment, and experiences suitable for different age groups.",
    cta: "Plan a Family Cruise",
    purpose: "Family",
    image: {
      file: "traveler-families.jpg",
      alt: "A family enjoying a boat journey together",
      placeholderLabel: "Family on a boat journey",
    },
  },
  {
    id: "corporate",
    title: "Corporate Groups",
    description:
      "Group travel, team bonding, private sailing options, and customized experiences subject to venue and operator availability.",
    cta: "Plan a Group Cruise",
    purpose: "Corporate",
    image: {
      file: "traveler-corporate.jpg",
      alt: "A group of colleagues on a private sailing vessel",
      placeholderLabel: "Group on a private vessel",
    },
  },
  {
    id: "leisure",
    title: "Leisure and Adventure Travelers",
    description:
      "Discover coastlines, islands, cultural landmarks, and natural landscapes through immersive journeys.",
    cta: "Plan My Journey",
    purpose: "Leisure",
    image: {
      file: "traveler-adventure.jpg",
      alt: "A traveler kayaking near a rocky coastline",
      placeholderLabel: "Traveler on the water near a coastline",
    },
  },
];

export const ITINERARIES: Itinerary[] = [
  {
    id: "ha-long",
    title: "Ha Long Bay Scenic Cruise",
    duration: "2 Days / 1 Night — illustrative only",
    formValue: "Ha Long Bay, Vietnam",
    steps: [
      "Day 1: Arrive in the Ha Long Bay area and board the cruise, subject to the selected operator's schedule.",
      "Day 1: Enjoy scenic sailing, onboard dining, and optional activities where offered.",
      "Day 2: Experience a morning cruise and return according to the operator's schedule.",
    ],
  },
  {
    id: "kerala",
    title: "Kerala Backwater Houseboat Experience",
    duration: "2 Days / 1 Night — illustrative only",
    formValue: "Kerala Backwaters, India",
    steps: [
      "Day 1: Arrive at the selected backwater departure point and board the houseboat.",
      "Day 1: Enjoy a scenic waterway journey, local scenery, and onboard meals where included.",
      "Day 2: Enjoy a peaceful morning before disembarking according to the selected operator's schedule.",
    ],
  },
  {
    id: "dubai",
    title: "Dubai Evening Cruise",
    duration: "Evening experience — illustrative only",
    formValue: "Dubai, UAE",
    steps: [
      "Arrive at the confirmed departure point.",
      "Board the selected sightseeing or dining cruise.",
      "Enjoy waterfront views and onboard experiences according to the selected cruise.",
      "Return to the departure point at the operator's scheduled time.",
    ],
  },
  {
    id: "pokhara",
    title: "Pokhara Lake Experience",
    duration: "Flexible, depending on the selected activity",
    formValue: "Pokhara, Nepal",
    steps: [
      "Explore the lakeside area.",
      "Enjoy a scenic boat ride on Phewa Lake, subject to local conditions.",
      "Capture views of the surrounding landscape.",
      "Continue with optional nearby sightseeing.",
    ],
  },
];

export const COMPARISON: ComparisonRow[] = [
  {
    type: "Ocean Cruises",
    setting: "Open sea and international coastlines",
    experience: "Multi-port voyages aboard larger ships",
    ideal: "Leisure travelers, couples, families",
    activities: "Onboard dining, entertainment, shore excursions",
    style: "Onboard-focused, port to port",
  },
  {
    type: "River Cruises",
    setting: "Rivers and historic riverfronts",
    experience: "Cultural and heritage sightseeing from the water",
    ideal: "Culture and heritage lovers",
    activities: "Guided sightseeing, riverside visits",
    style: "Slow, scenery-led",
  },
  {
    type: "Lake Cruises",
    setting: "Lakes ringed by hills and mountains",
    experience: "Calm boating with natural scenery",
    ideal: "Families, couples, nature lovers",
    activities: "Boating, photography, lakeside exploration",
    style: "Relaxed and flexible",
  },
  {
    type: "Sunset Sailing",
    setting: "Coastal waters and calm bays",
    experience: "Intimate sailing around golden hour",
    ideal: "Couples and honeymooners",
    activities: "Sailing, photography, relaxation",
    style: "Short and private",
  },
  {
    type: "Island-Hopping Cruises",
    setting: "Island groups and coastal bays",
    experience: "Exploring islands and hidden coves",
    ideal: "Adventure and leisure travelers",
    activities: "Swimming, snorkeling, excursions where offered",
    style: "Exploratory, activity-led",
  },
  {
    type: "Houseboat Experiences",
    setting: "Backwaters and calm inland waterways",
    experience: "Stay aboard a traditional houseboat",
    ideal: "Couples and slow-travel seekers",
    activities: "Village scenery, local cuisine, relaxation",
    style: "Unhurried, stay-on-board",
  },
  {
    type: "Harbour and Yacht Cruises",
    setting: "City harbours and marinas",
    experience: "Skyline and waterfront views",
    ideal: "Groups, couples, city-break travelers",
    activities: "Sightseeing, dining cruises, private charters where available",
    style: "Short outings or private charters",
  },
];

export const FAQS: Faq[] = [
  {
    q: "What are cruise experiences?",
    a: "Cruise experiences are journeys on the water — oceans, rivers, lakes, backwaters and coastlines — that combine scenery, accommodation or onboard time, and often sightseeing or cultural activities. They range from multi-night voyages to short sunset or harbour cruises.",
  },
  {
    q: "What types of cruises can I explore through Karvaahh?",
    a: "This page covers ocean cruises, sunset sailing, river cruises, island-hopping, lake cruises, houseboats, and harbour or yacht experiences. What is actually available depends on the destination, operator and dates you choose.",
  },
  {
    q: "What is the difference between an ocean cruise and a river cruise?",
    a: "Ocean cruises usually sail open seas between ports on larger ships, with the vessel itself a big part of the experience. River cruises follow inland waterways, often on smaller vessels, with the focus on the riverside scenery, towns and culture.",
  },
  {
    q: "Are cruise experiences suitable for families?",
    a: "Many are, but suitability varies by vessel, route and activity. Tell us the ages of children travelling and we can suggest options that fit; some experiences may have age or safety requirements set by the operator.",
  },
  {
    q: "Can I plan a romantic cruise or honeymoon experience?",
    a: "Yes, you can enquire about romantic options such as sunset sailing, backwater houseboats or evening cruises. Specific inclusions and availability depend on the operator and your travel dates.",
  },
  {
    q: "Are private yacht and sunset sailing experiences available?",
    a: "They can be arranged in some destinations, subject to operator and vessel availability. Send an enquiry with your destination, dates and group size and we will check what is possible.",
  },
  {
    q: "Can I combine a cruise with sightseeing and accommodation?",
    a: "Where available, cruises can be combined with sightseeing, hotel stays and transfers as part of a wider itinerary. Details are confirmed once you settle on a plan.",
  },
  {
    q: "What is generally included in a cruise package?",
    a: "Inclusions differ widely — accommodation, meals, activities, excursions and transfers may or may not be part of a given cruise. Confirmed inclusions and exclusions are set out before you finalise any booking.",
  },
  {
    q: "Are meals and onboard entertainment included?",
    a: "It depends on the selected cruise and operator. Some include meals and entertainment, others charge separately or do not offer them. We will confirm this for the option you choose.",
  },
  {
    q: "What documents are required for international cruise travel?",
    a: "Requirements depend on your nationality, the destinations and ports involved, and the operator. Typically this includes a valid passport, and possibly visas or health documents. Check the official requirements for each country you will visit.",
  },
  {
    q: "How do I choose the right cruise destination?",
    a: "Start with the kind of experience you want — a calm lake, a cultural river, a coastal voyage or a city skyline — then your travel dates and group. The style selector above is a good starting point, and our team can help narrow it down.",
  },
  {
    q: "Are cruise experiences available in Nepal?",
    a: "Nepal offers peaceful boating on lakes such as Phewa Lake in Pokhara. These are lake boat experiences rather than ocean-style cruises, and they depend on local conditions.",
  },
  {
    q: "How can I customize a cruise itinerary?",
    a: "Share your preferred destination, dates, group size and interests through the enquiry form. We can then explore sightseeing, stays and transfers around the water experience where available.",
  },
  {
    q: "What happens if weather conditions affect a cruise?",
    a: "Weather can change or cancel sailings, especially on the sea, lakes and in monsoon seasons. How disruptions are handled — rescheduling, refunds or alternatives — depends on the operator and booking conditions.",
  },
  {
    q: "How can I request a cruise quotation?",
    a: "Fill in the enquiry form on this page. Submitting it is a request for a plan and quotation only; it does not confirm a reservation or take payment.",
  },
];

export const WHY_POINTS = [
  {
    title: "Personalized Travel Planning",
    text: "Customized cruise experiences based on travel preferences, group size, destination, and trip requirements.",
  },
  {
    title: "Destination-Focused Recommendations",
    text: "Explore different cruise environments, from international coastlines to Nepal's peaceful lakes.",
  },
  {
    title: "Flexible Journey Planning",
    text: "Combine cruise experiences with sightseeing, accommodation, transfers, and additional travel arrangements where available.",
  },
  {
    title: "Experiences for Different Travelers",
    text: "Options for couples, families, groups, and leisure travelers, subject to the selected experience.",
  },
  {
    title: "Travel Assistance",
    text: "Support with planning, itinerary coordination, and relevant travel arrangements based on the confirmed booking.",
  },
  {
    title: "Tailor-Made Experiences",
    text: "Create a journey around the traveler's interests, preferred destination, and available travel dates.",
  },
];

export const PROCESS_STEPS = [
  {
    title: "Share Your Travel Preferences",
    text: "Tell us your destination, travel dates, group size, budget range, and preferred cruise style.",
  },
  {
    title: "Explore Suitable Experiences",
    text: "Review available cruise options and experiences that align with your preferences.",
  },
  {
    title: "Customize Your Journey",
    text: "Plan the itinerary, sightseeing, accommodation, transfers, and additional experiences where available.",
  },
  {
    title: "Confirm Your Travel Arrangements",
    text: "Review the confirmed inclusions, exclusions, schedules, cancellation terms, and booking conditions before finalizing.",
  },
];

export const GALLERY = [
  { file: "gallery-ocean-liner.jpg", alt: "A luxury ocean liner at sea", label: "Luxury ocean liners", size: "lg" },
  { file: "gallery-ha-long.jpg", alt: "Traditional boats in Ha Long Bay", label: "Ha Long Bay", size: "sm" },
  { file: "gallery-kerala.jpg", alt: "A Kerala backwater houseboat", label: "Kerala houseboats", size: "sm" },
  { file: "gallery-ganges.jpg", alt: "The Ganges river and its ghats", label: "Ganges river", size: "sm" },
  { file: "gallery-mediterranean.jpg", alt: "A Mediterranean coastal harbour", label: "Mediterranean harbours", size: "lg" },
  { file: "gallery-dubai.jpg", alt: "Dubai Marina at sunset", label: "Dubai Marina", size: "sm" },
  { file: "gallery-phewa.jpg", alt: "Phewa Lake in Pokhara", label: "Phewa Lake", size: "sm" },
  { file: "gallery-sailing.jpg", alt: "A sailboat on a calm sea", label: "Sailing", size: "sm" },
  { file: "gallery-dining.jpg", alt: "Dining on the deck of a cruise vessel", label: "Onboard dining", size: "sm" },
  { file: "gallery-sunrise.jpg", alt: "Sunrise over open water", label: "Sunrise and sunset", size: "lg" },
] as const;
