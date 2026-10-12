// data/south-africa/travelEssentials.ts
// Practical essentials, what a quote does and does not include, visa
// guidance and safari preparation. General guidance only: official and
// operator requirements always take precedence.

import type { SAIconKey } from "./types";

export const essentialTopics: { id: string; title: string; icon: SAIconKey; text: string }[] = [
  { id: "currency", title: "South African Rand", icon: "wallet", text: "The currency is the South African Rand (ZAR). Carry a little cash for tips and small purchases." },
  { id: "exchange", title: "Currency exchange", icon: "wallet", text: "Exchange at banks, bureaux or ATMs on arrival; compare rates and fees before you go." },
  { id: "cards", title: "Card payments", icon: "wallet", text: "Cards are widely accepted in cities and lodges. Inform your bank before travel." },
  { id: "tipping", title: "Tipping", icon: "users", text: "Tipping is customary for restaurant staff, guides, rangers and trackers. We share current guidelines with your itinerary." },
  { id: "insurance", title: "Travel insurance", icon: "shield", text: "Strongly recommended, including medical cover. Some lodges and activities may require it." },
  { id: "domestic", title: "Domestic transportation", icon: "plane", text: "Domestic flights connect major cities; road transfers and self-drive cover the rest." },
  { id: "driving", title: "Driving", icon: "car", text: "Driving is on the left. Many visitors need an International Driving Permit alongside their licence; check before you travel." },
  { id: "fees", title: "Hotel taxes & fees", icon: "hotel", text: "Some properties add tourism levies or local fees. Your quote states what is included." },
  { id: "lodges", title: "Safari lodge policies", icon: "binoculars", text: "Lodges set their own child-age, meal and activity policies, which we confirm per booking." },
  { id: "park-fees", title: "Park fees", icon: "trees", text: "National parks and reserves charge conservation fees, which may be included or payable on arrival, as stated in your quote." },
  { id: "weather", title: "Weather", icon: "sun", text: "Regional climates differ; pack layers. Safari mornings can be cold, even in summer." },
  { id: "time", title: "Time zone", icon: "compass", text: "South Africa Standard Time (UTC+2) applies year-round, with no daylight saving." },
  { id: "mobile", title: "Mobile connectivity", icon: "sparkles", text: "Good in cities; limited in remote parks and some lodges. Local SIM and eSIM options are available." },
  { id: "emergency", title: "Emergency information", icon: "shield", text: "Save local emergency numbers (10111 police; 112 from mobiles) and your Karvaahh contact before you travel." },
];

/** What is and isn't included in a quote. Nothing is assumed. */
export const costItems: { item: string; status: "quoted" | "optional" | "separate" }[] = [
  { item: "International airfare", status: "optional" },
  { item: "Domestic airfare", status: "optional" },
  { item: "Hotels & lodges", status: "quoted" },
  { item: "Meals", status: "quoted" },
  { item: "Safari game drives", status: "quoted" },
  { item: "Park & conservation fees", status: "quoted" },
  { item: "Attraction tickets", status: "optional" },
  { item: "Transfers", status: "quoted" },
  { item: "Visa charges", status: "separate" },
  { item: "Travel insurance", status: "separate" },
];

export const costLegend = {
  quoted: "Itemised in your quote as included or excluded",
  optional: "Added only if you choose it",
  separate: "Arranged and paid separately",
};

export const visaPoints = {
  intro: "Entry requirements depend on your passport and on South Africa's immigration rules at the time you travel.",
  dependsOn: ["Passport nationality", "Current South African immigration rules", "Travel purpose", "Transit route"],
  nepalIndia: "For travellers from Nepal and India: visa requirements should be verified according to the traveller's passport and current official requirements before booking.",
  karvaahhHelps: ["Visa guidance", "Document preparation assistance, where offered", "Itinerary and booking documents for your application", "Travel documentation support"],
  disclaimer: "Visa approval, appointment availability and immigration decisions rest solely with the relevant authorities. Karvaahh cannot guarantee them. Fees and processing times change, so we confirm them when you enquire.",
};

export const safariPrep: { id: string; title: string; icon: SAIconKey; items: string[] }[] = [
  { id: "insurance", title: "Travel insurance", icon: "shield", items: ["Medical and evacuation cover", "Cover for activities you plan to do", "Check lodge requirements"] },
  { id: "health", title: "Medical & health", icon: "heart", items: ["See a doctor or travel clinic well before travel", "Ask about malaria if visiting Kruger or Sabi Sand", "Bring personal medication and prescriptions"] },
  { id: "weather", title: "Weather", icon: "sun", items: ["Cold early-morning drives", "Hot afternoons", "Summer storms in safari regions"] },
  { id: "sun", title: "Sun protection", icon: "sun", items: ["High-SPF sunscreen", "Wide-brimmed hat", "Sunglasses"] },
  { id: "clothing", title: "Comfortable & safari clothing", icon: "trees", items: ["Neutral colours (khaki, olive, brown)", "Warm layers and a fleece", "Comfortable walking shoes"] },
  { id: "camera", title: "Camera & binoculars", icon: "camera", items: ["Zoom lens (200 mm+)", "Spare batteries and cards", "Binoculars for everyone"] },
  { id: "luggage", title: "Luggage", icon: "plane", items: ["Soft bags for light aircraft", "Weight limits may apply on charter flights", "Pack light for lodge transfers"] },
  { id: "driving", title: "Driving documents", icon: "car", items: ["Valid licence", "International Driving Permit where required", "Rental agreement and insurance"] },
  { id: "contacts", title: "Emergency contacts", icon: "users", items: ["Karvaahh support number", "Lodge and hotel contacts", "Insurer's emergency line"] },
];

export const PREP_NOTE = "General guidance only, not medical advice. Follow your doctor's advice, official health guidance and each lodge or operator's requirements.";
