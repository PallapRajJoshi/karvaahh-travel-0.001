import type { Collection, Faq, TitledList } from "./types";

export const collections: Collection[] = [
  {
    id: "intimate",
    name: "Intimate",
    guests: "20–50 guests",
    description: "Close family, unhurried rituals, one beautiful setting.",
    suits: ["Ghandruk", "Lumbini", "Nainital", "Island escapes"],
  },
  {
    id: "boutique",
    name: "Boutique",
    guests: "50–100 guests",
    description: "Every function, one resort or heritage hotel.",
    suits: ["Pokhara", "Rishikesh", "Goa", "Kerala"],
  },
  {
    id: "grand",
    name: "Grand",
    guests: "100–300 guests",
    description: "Multiple hotels, coach transfers and a hospitality desk.",
    suits: ["Kathmandu", "Pokhara", "Rajasthan", "Chitwan"],
    emphasis: true,
  },
  {
    id: "luxury",
    name: "Luxury",
    guests: "300+ guests / premium bespoke",
    description: "Palace and five-star venues with a dedicated family concierge.",
    suits: ["Rajasthan", "Kathmandu", "Dubai / UAE", "Bali"],
  },
];

export const bespoke = {
  name: "Bespoke",
  description: "Fully customized around your destination, guest list, traditions and celebration.",
};

export const priceFactors = [
  "Destination",
  "Guest count",
  "Number of nights",
  "Number of functions",
  "Hotel category",
  "Food",
  "Décor",
  "Entertainment",
  "Photography",
  "Transportation",
  "Venue",
  "Season",
  "Production",
  "Permits / taxes",
  "Special requests",
];

export const inclusions: TitledList[] = [
  {
    id: "planning",
    title: "Planning",
    items: ["Destination consultation", "Venue selection", "Itinerary planning", "Event schedule", "Vendor coordination", "On-ground coordination"],
  },
  {
    id: "guest-management",
    title: "Guest management",
    items: ["Airport transfers where specified", "Hotel coordination", "Guest welcome", "Hospitality desk", "Transportation"],
  },
  {
    id: "wedding",
    title: "Wedding",
    items: ["Mandap coordination", "Décor where selected", "Catering where selected", "Pandit coordination where selected", "Ritual materials where selected", "Entertainment where selected", "Photography where selected"],
  },
];

export const exclusions = [
  "Airfare",
  "Visa / document fees",
  "Personal expenses",
  "Alcohol unless included",
  "Premium beverages",
  "Spa",
  "Shopping",
  "Additional hotel nights",
  "Room upgrades",
  "Personal transportation",
  "Premium entertainment",
  "Celebrity artists",
  "Additional décor",
  "Additional photography hours",
  "Drone permits / fees where applicable",
  "Additional rituals",
  "Additional meals",
  "Additional event hours",
  "Medical expenses",
  "Insurance",
  "Government / local authority fees not included",
  "Damage charges",
  "Unforeseen expenses",
];

export const safety = [
  { title: "Weather planning", text: "Seasonal timing and a covered alternative for every outdoor function." },
  { title: "Backup venue", text: "A confirmed indoor or tented fallback, not a last-minute search." },
  { title: "Power backup", text: "Generators sized for lighting, sound and catering." },
  { title: "Medical contacts", text: "Nearest hospital, on-call doctor and first-aid kit mapped." },
  { title: "Emergency transportation", text: "A vehicle on standby during every function." },
  { title: "Venue capacity", text: "Guest numbers checked against what the venue can safely hold." },
  { title: "Guest movement", text: "Entry, exit and baraat routes planned and marshalled." },
  { title: "Fire safety", text: "Havan, candles and pyro reviewed with venue staff." },
  { title: "Electrical safety", text: "Cabling, staging and LED rigs installed by qualified teams." },
  { title: "Transport backup", text: "Spare vehicles for hill roads and airport peaks." },
  { title: "Vendor coordination", text: "One call sheet, one timeline, one point of contact." },
];

export const disclaimer = [
  "Every destination wedding is individually planned. Venue availability, accommodation, ceremony permissions, temple access, event capacity, décor installation, photography access, entertainment, alcohol service, drone operations, transportation and other services are subject to confirmation from the relevant venue, supplier and local authorities.",
  "For international weddings, documentation, visa, immigration and travel-insurance requirements should be reviewed according to the traveller's nationality and destination.",
  "Final pricing, inclusions, exclusions, cancellation policies and supplier conditions are confirmed in the formal quotation and contract.",
];

export const faqs: Faq[] = [
  {
    question: "How early should we start planning a destination wedding?",
    answer:
      "Nine to twelve months is ideal, especially for peak wedding season or a large guest list, because venues and room blocks are confirmed first. Smaller, intimate weddings can often be planned in three to six months, depending on availability.",
  },
  {
    question: "Can you plan a destination wedding in Nepal for guests travelling from India?",
    answer:
      "Yes. We coordinate guest arrivals, airport receptions, transfers, hotels and the full set of functions in Kathmandu, Pokhara, Chitwan and other Nepal destinations. Travel document requirements depend on each guest's nationality, so we share guidance early in planning.",
  },
  {
    question: "Is it possible to get married at Triyuginarayan temple?",
    answer:
      "Triyuginarayan is associated in tradition with the marriage of Shiva and Parvati, and couples do travel there for a sacred wedding experience. Ceremonies, décor, photography and guest numbers are subject to temple management, local authorities and site regulations, so we confirm what is possible for your dates before anything is finalised.",
  },
  {
    question: "Do you publish fixed wedding package prices?",
    answer:
      "No. Destination, guest count, nights, functions, hotel category, décor and season change the cost significantly, so every wedding receives a custom proposal. Final pricing and inclusions are confirmed in the formal quotation.",
  },
  {
    question: "Can you arrange a pandit and the rituals for our family tradition?",
    answer:
      "Yes, where selected. We coordinate pandit or purohit arrangements, muhurat timing and ritual materials. The exact rituals and their sequence follow your family tradition, the priest you choose and your cultural practice.",
  },
  {
    question: "Can we combine the wedding with a honeymoon?",
    answer:
      "Yes. Many couples continue straight to Pokhara, Chitwan or Mustang in Nepal, Kerala or Goa in India, or the Maldives, Bali or Thailand, with transfers planned as part of the same journey.",
  },
];
