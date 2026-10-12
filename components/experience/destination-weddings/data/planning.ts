import type { PlanningStage, SampleJourney, TitledList } from "./types";

export const planningStages: PlanningStage[] = [
  {
    id: "discover",
    number: "01",
    title: "Discover",
    summary: "Your story first.",
    detail:
      "Understand the couple's story, dates, guest count, preferred destination, wedding style, cultural requirements and expectations.",
    outcome: "A wedding brief both families agree on",
  },
  {
    id: "destination",
    number: "02",
    title: "Destination",
    summary: "The right place, in the right season.",
    detail:
      "Shortlist destinations according to wedding style, guest profile, season and logistics — including how elderly relatives and children will travel.",
    outcome: "Two or three destinations compared side by side",
  },
  {
    id: "venue",
    number: "03",
    title: "Venue",
    summary: "Where it all happens.",
    detail:
      "Explore suitable hotels, resorts, heritage properties and event venues, subject to availability on your dates.",
    outcome: "A venue on hold and a room block for guests",
  },
  {
    id: "design",
    number: "04",
    title: "Design",
    summary: "The look and feel.",
    detail:
      "Create the theme, colour palette, mandap, florals, lighting, stage and décor concept for every function.",
    outcome: "A mood board and décor plan per function",
  },
  {
    id: "guests",
    number: "05",
    title: "Guest Experience",
    summary: "Everyone looked after.",
    detail:
      "Coordinate accommodation, transfers, welcome experiences, excursions and hospitality for every guest on the list.",
    outcome: "Rooming list, transfer plan and guest itinerary",
  },
  {
    id: "celebration",
    number: "06",
    title: "Celebration",
    summary: "Every function, planned.",
    detail:
      "Coordinate Haldi, Mehendi, Sangeet, Cocktail, Baraat, Wedding and Reception — with timings that work for the venue, the priest and the families.",
    outcome: "A run-of-show for each function",
  },
  {
    id: "execution",
    number: "07",
    title: "Execution",
    summary: "One team on the ground.",
    detail:
      "Central on-ground coordination across venue, hospitality, transportation, décor, catering, entertainment, photography and ritual teams.",
    outcome: "You celebrate; we manage the moving parts",
  },
  {
    id: "farewell",
    number: "08",
    title: "Farewell",
    summary: "A graceful goodbye.",
    detail:
      "Coordinate checkouts, luggage and airport departures so the last memory is as smooth as the first.",
    outcome: "Every guest home safely",
  },
  {
    id: "honeymoon",
    number: "09",
    title: "Honeymoon",
    summary: "Then, just the two of you.",
    detail:
      "Continue straight into a honeymoon — the mountains, a jungle lodge, a beach or an island — without re-planning a single transfer.",
    outcome: "A seamless handover from wedding to honeymoon",
  },
];

/** Grouped coordination ecosystem for "Why Karvaahh". */
export const coordinationClusters: TitledList[] = [
  {
    id: "place",
    title: "The place",
    items: ["Destination", "Venue", "Accommodation", "Wedding itinerary"],
  },
  {
    id: "people",
    title: "The people",
    items: ["Guest transportation", "Airport transfers", "Guest hospitality", "Excursions"],
  },
  {
    id: "celebration",
    title: "The celebration",
    items: ["Pre-wedding functions", "Ritual coordination", "Décor", "Catering", "Entertainment", "Photography"],
  },
  {
    id: "continuity",
    title: "The continuity",
    items: ["On-ground coordination", "Honeymoon extensions"],
  },
];

export const commandCentre = {
  planner: "Wedding Planner",
  manager: "Event Manager",
  teams: ["Hospitality", "Transport", "Décor", "Catering", "Entertainment", "Photography", "Venue", "Ritual Team"],
};

export const checklist: TitledList[] = [
  { id: "12m", title: "9–12 months", items: ["Destination", "Budget", "Guest count", "Venue"] },
  { id: "9m", title: "6–9 months", items: ["Hotel", "Catering", "Décor", "Photography", "Entertainment"] },
  { id: "6m", title: "3–6 months", items: ["Invitations", "Guest travel", "Rooming list", "Ritual planning"] },
  { id: "3m", title: "1–3 months", items: ["Final menu", "Décor", "Guest list", "Transport", "Event schedule"] },
  { id: "7d", title: "7 days", items: ["Final coordination", "Vendor confirmation", "Guest arrival tracking", "Emergency plan"] },
];

export const sampleJourneys: SampleJourney[] = [
  {
    id: "pokhara",
    name: "Pokhara Wedding Escape",
    duration: "3N / 4D",
    label: "Sample itinerary — customizable",
    summary: "A lakeside celebration for families who want mountains in every photograph.",
    days: [
      { day: "Day 1", title: "Arrival & welcome", moments: ["Guest arrival", "Transfer", "Check-in", "Welcome drinks", "Welcome dinner", "Nepali cultural performance"] },
      { day: "Day 2", title: "Mehendi & Sangeet", moments: ["Mehendi", "Sangeet", "DJ", "Dinner", "Family performances"] },
      { day: "Day 3", title: "The wedding", moments: ["Haldi", "Bride & groom preparation", "Baraat", "Mandap", "Wedding ceremony", "Reception", "Dinner"] },
      { day: "Day 4", title: "Farewell", moments: ["Breakfast", "Checkout", "Departure"] },
    ],
    extension: "Optional honeymoon extension — Chitwan, Mustang or a quiet lakeside stay.",
  },
  {
    id: "triyuginarayan",
    name: "Sacred Triyuginarayan Journey",
    duration: "4N / 5D",
    label: "Sample concept — final schedule subject to destination, temple, venue and local permissions",
    summary: "A family pilgrimage that becomes a wedding, in the Garhwal Himalaya.",
    days: [
      { day: "Day 1", title: "Arrival", moments: ["Gateway arrival", "Uttarakhand transfer", "Hotel / resort", "Welcome dinner"] },
      { day: "Day 2", title: "Mehendi", moments: ["Local experience", "Mehendi", "Cultural evening"] },
      { day: "Day 3", title: "Haldi & Sangeet", moments: ["Haldi", "Family celebration", "Sangeet"] },
      { day: "Day 4", title: "Sacred wedding", moments: ["Sacred wedding experience, subject to temple and site permissions", "Reception", "Dinner"] },
      { day: "Day 5", title: "Farewell", moments: ["Farewell", "Guest departure"] },
    ],
    extension: "Optional Kedarnath or Uttarakhand sightseeing extension, season permitting.",
  },
];
