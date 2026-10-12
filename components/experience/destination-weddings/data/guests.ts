import type { TitledList } from "./types";

export const guestJourney: TitledList[] = [
  {
    id: "before",
    title: "Before arrival",
    items: ["Guest list", "Flight details", "Rooming list", "Dietary preferences", "Special requirements"],
  },
  {
    id: "arrival",
    title: "Arrival",
    items: ["Airport reception", "Welcome desk", "Luggage", "Transfers", "Hotel check-in"],
  },
  {
    id: "stay",
    title: "During the stay",
    items: ["Hospitality desk", "Event schedule", "Transportation", "Excursions", "Emergency assistance"],
  },
  {
    id: "departure",
    title: "Departure",
    items: ["Checkout", "Luggage", "Airport transfer", "Flight coordination"],
  },
];

export const conciergeServices = [
  { title: "Check-in assistance", text: "Rooms allocated before guests land; keys ready at the desk." },
  { title: "Event schedule", text: "Times, venues and dress notes for every function." },
  { title: "Transport", text: "Who is on which vehicle, and when it leaves." },
  { title: "Room assistance", text: "Changes, extra bedding, early check-in requests." },
  { title: "Local information", text: "Weather, currency, SIM cards and what to wear." },
  { title: "Excursions", text: "Sightseeing between functions, booked and briefed." },
  { title: "Emergency contact", text: "One number that answers, day and night of the event." },
  { title: "Activity coordination", text: "Spa slots, rehearsals, children's activities." },
];

export const transport: TitledList[] = [
  { id: "couple", title: "The couple", items: ["Luxury sedan", "Premium SUV"] },
  { id: "family", title: "Family", items: ["Premium vehicles"] },
  { id: "guests", title: "Guests", items: ["Coaches", "Vans", "SUVs"] },
  { id: "special", title: "Special arrivals", items: ["Vintage car", "Decorated vehicle", "Groom entry vehicle"] },
  {
    id: "mountain",
    title: "Mountain routes",
    items: ["Appropriate SUVs / 4×4 vehicles where required"],
    note: "Hill roads are planned with buffer time and backup vehicles.",
  },
];

export const welcomeSequence = [
  "Airport welcome",
  "Decorated transfer",
  "Hotel welcome",
  "Welcome hamper",
  "Wedding itinerary",
  "Welcome dinner",
];

export const welcomeHamper = [
  "Wedding itinerary",
  "Local sweets",
  "Tea / coffee",
  "Handcrafted souvenir",
  "Destination guide",
  "Welcome letter",
  "Emergency card",
  "Event information",
];

export const nepalHamper = ["Nepali handicrafts", "Pashmina / scarf", "Himalayan tea", "Local products"];

export const weddingHoliday = [
  { name: "Kathmandu", line: "Heritage & culture", text: "Durbar squares, stupas and Newari food between functions." },
  { name: "Pokhara", line: "Lake & mountains", text: "Boating on Phewa, sunrise from Sarangkot." },
  { name: "Lumbini", line: "Spiritual & heritage", text: "A quiet morning at the birthplace of the Buddha." },
  { name: "Uttarakhand", line: "Temples & Himalayas", text: "Ganga aarti, hill stations and temple journeys." },
  { name: "Goa", line: "Beach & culture", text: "Old churches, spice farms and long lunches by the sea." },
  { name: "Rajasthan", line: "Palaces & heritage", text: "Forts, bazaars and desert evenings." },
];

export const honeymoon = [
  { region: "Nepal", places: ["Pokhara", "Mustang", "Chitwan", "Kathmandu"] },
  { region: "India", places: ["Kerala", "Goa", "Uttarakhand", "Rajasthan"] },
  { region: "International", places: ["Maldives", "Bali", "Thailand"] },
];
