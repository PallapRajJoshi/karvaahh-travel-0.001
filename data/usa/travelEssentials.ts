// data/usa/travelEssentials.ts
// Practical information. Kept general on purpose: costs, rules and fees change,
// so anything operational is confirmed for the traveller's dates.

export type EssentialIcon =
  | "currency"
  | "tip"
  | "card"
  | "shield"
  | "plane"
  | "hotel"
  | "receipt"
  | "tree"
  | "ticket"
  | "sun"
  | "car"
  | "clock"
  | "siren";

export interface Essential {
  id: string;
  title: string;
  icon: EssentialIcon;
  summary: string;
  points: string[];
}

export const usaEssentials: Essential[] = [
  {
    id: "currency", title: "Currency", icon: "currency",
    summary: "The USA uses the U.S. dollar (USD).",
    points: ["Cards are accepted almost everywhere; keep a little cash for tips and small purchases.", "Exchange some dollars before you travel or use ATMs on arrival.", "Costs vary significantly by city, season, hotel category, attractions and transport."],
  },
  {
    id: "tipping", title: "Tipping", icon: "tip",
    summary: "Tipping is customary in the USA.",
    points: ["Restaurants usually expect a tip on top of the bill.", "Drivers, guides, hotel porters and housekeeping are commonly tipped.", "We share current tipping norms with your final documents."],
  },
  {
    id: "cards", title: "Credit & debit cards", icon: "card",
    summary: "International cards work widely; tell your bank before you travel.",
    points: ["Hotels and car rentals usually take a card deposit.", "Check foreign-transaction and ATM fees with your bank.", "Contactless payments are common in cities."],
  },
  {
    id: "insurance", title: "Travel insurance", icon: "shield",
    summary: "Strongly recommended; medical care in the USA can be very expensive.",
    points: ["Choose cover that includes medical treatment and evacuation.", "Check cover for adventure activities and pre-existing conditions.", "Carry your policy details while travelling."],
  },
  {
    id: "domestic", title: "Domestic transportation", icon: "plane",
    summary: "The USA is vast; flying between regions is often the practical choice.",
    points: ["Domestic flights may have separate baggage fees.", "Rail works well in the Northeast; elsewhere, roads and flights dominate.", "Private transfers and chauffeurs avoid the need to drive."],
  },
  {
    id: "hotel-tax", title: "Hotel taxes", icon: "hotel",
    summary: "Hotel taxes are added on top of room rates and vary by city.",
    points: ["Rates you see may exclude local taxes.", "Your quote states clearly what is and isn't included."],
  },
  {
    id: "resort-fees", title: "Resort fees", icon: "receipt",
    summary: "Many hotels, especially in Las Vegas, Hawaii and Florida, charge a daily resort or destination fee.",
    points: ["Usually paid at the hotel, not included in the room rate.", "Parking, especially in cities, is often charged separately.", "Resort fees, parking, taxes and attraction charges may be additional unless explicitly included."],
  },
  {
    id: "park-fees", title: "National park fees", icon: "tree",
    summary: "Most national parks charge an entrance fee; some need timed-entry or activity reservations.",
    points: ["Fees and reservation systems differ by park and season.", "Park fees are not included unless your quote lists them.", "Check the official National Park Service pages for current conditions."],
  },
  {
    id: "tickets", title: "Attraction tickets", icon: "ticket",
    summary: "Theme parks, observation decks, shows and tours need separate tickets.",
    points: ["Popular attractions can sell out; we can advise and book on request.", "Theme-park admission is never assumed to be included.", "Ticket availability can't be guaranteed until booked."],
  },
  {
    id: "weather", title: "Weather", icon: "sun",
    summary: "From Alaskan winters to desert summers, conditions vary enormously.",
    points: ["Pack for the region and season, not the country.", "Desert parks can be extremely hot in summer and cold at night.", "Hurricane season affects Florida and the Gulf from June to November."],
  },
  {
    id: "driving", title: "Driving requirements", icon: "car",
    summary: "Driving is on the right; licence rules vary by state.",
    points: ["An International Driving Permit alongside your licence is often advised.", "Rental age limits and young-driver fees apply.", "If you'd rather not drive, choose a chauffeur or escorted tour."],
  },
  {
    id: "time", title: "Time zones", icon: "clock",
    summary: "The USA spans six time zones, from Eastern to Hawaii.",
    points: ["New York and Los Angeles are three hours apart.", "Most states observe daylight saving time; some do not.", "We plan flights and rest time around jet lag."],
  },
  {
    id: "emergency", title: "Emergency information", icon: "siren",
    summary: "Dial 911 for police, fire or ambulance anywhere in the USA.",
    points: ["Save your embassy or consulate contact details before travel.", "Keep copies of your passport and visa separately.", "Karvaahh shares a support contact for your trip."],
  },
];
