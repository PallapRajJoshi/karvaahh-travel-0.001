// data/australia/travelEssentials.ts
// Practical information. Kept general on purpose: costs, rules and fees change,
// so anything operational is confirmed for the traveller's dates.

export type EssentialIcon =
  | "currency"
  | "card"
  | "tip"
  | "plane"
  | "car"
  | "shield"
  | "receipt"
  | "ticket"
  | "sun"
  | "clock"
  | "signal"
  | "tree"
  | "waves"
  | "siren"
  | "leaf";

export interface Essential {
  id: string;
  title: string;
  icon: EssentialIcon;
  summary: string;
  points: string[];
}

export const australiaEssentials: Essential[] = [
  {
    id: "currency", title: "Australian Dollar (AUD)", icon: "currency",
    summary: "Australia uses the Australian dollar.",
    points: ["Costs vary by city, season, hotel category and activities.", "Prices displayed in shops generally include GST.", "Exchange some money before you travel or withdraw from ATMs on arrival."],
  },
  {
    id: "cards", title: "Card payments", icon: "card",
    summary: "Contactless card and phone payments are widely used.",
    points: ["Some businesses add a small card surcharge.", "Tell your bank you are travelling to avoid blocked cards.", "Carry a little cash for markets and remote areas."],
  },
  {
    id: "tipping", title: "Tipping", icon: "tip",
    summary: "Tipping is not expected in Australia.",
    points: ["Service staff are paid award wages.", "A tip for exceptional service is appreciated but optional."],
  },
  {
    id: "flights", title: "Domestic flights", icon: "plane",
    summary: "The fastest way between regions.",
    points: ["Baggage allowances differ between fares and airlines; we check them for your tickets.", "Allow time for connections between international and domestic terminals."],
  },
  {
    id: "driving", title: "Driving requirements", icon: "car",
    summary: "Australia drives on the left.",
    points: ["Licence rules vary by state; an International Driving Permit or English translation may be required with your licence.", "Long distances, wildlife at dusk and remote roads need careful planning.", "A private driver is always an option."],
  },
  {
    id: "insurance", title: "Travel insurance", icon: "shield",
    summary: "Strongly recommended for every trip.",
    points: ["Choose cover for medical costs, cancellations and any adventure activities you plan.", "Healthcare for visitors can be expensive without insurance."],
  },
  {
    id: "hotel-fees", title: "Hotel taxes & fees", icon: "receipt",
    summary: "Most hotel rates include GST.",
    points: ["Parking, resort facilities and card surcharges may be extra.", "Your quote shows what is and isn't included."],
  },
  {
    id: "tickets", title: "Attraction tickets", icon: "ticket",
    summary: "Not included unless your quote lists them.",
    points: ["Theme parks, zoos, BridgeClimb, cruises and tours are priced separately.", "Popular experiences can sell out in peak season, so book early."],
  },
  {
    id: "weather", title: "Weather & sun", icon: "sun",
    summary: "Seasons are reversed and the UV is strong.",
    points: ["Use high-SPF sunscreen, a hat and sunglasses, even on cloudy days.", "The tropical north has wet and dry seasons rather than four."],
  },
  {
    id: "time", title: "Time zones", icon: "clock",
    summary: "Three standard time zones on the mainland.",
    points: ["Western, Central and Eastern time.", "Daylight saving applies in some states (NSW, Victoria, ACT, South Australia, Tasmania) but not in Queensland, WA or the NT."],
  },
  {
    id: "mobile", title: "Mobile connectivity", icon: "signal",
    summary: "Good coverage in cities and towns.",
    points: ["Buy a local SIM or eSIM on arrival or before you fly.", "Coverage can be limited or absent in remote outback and wilderness areas."],
  },
  {
    id: "parks", title: "National park fees", icon: "tree",
    summary: "Some parks need passes.",
    points: ["Uluru-Kata Tjuta, Kakadu and Tasmanian parks have their own passes.", "Fees and rules change; we add them on request."],
  },
  {
    id: "marine", title: "Marine activity requirements", icon: "waves",
    summary: "Safety first on the water.",
    points: ["Swimming ability matters for snorkelling; flotation is often available.", "Introductory diving needs a medical questionnaire; some conditions require a doctor's clearance.", "Wear a stinger suit in tropical waters in season. Swim only at patrolled beaches, between the flags."],
  },
  {
    id: "biosecurity", title: "Biosecurity", icon: "leaf",
    summary: "Australia has strict biosecurity rules.",
    points: ["Declare food, plant material and animal products on arrival.", "Many home-cooked foods and spices must be declared and may be restricted."],
  },
  {
    id: "emergency", title: "Emergency information", icon: "siren",
    summary: "Dial 000 for police, fire or ambulance.",
    points: ["112 also works from mobile phones.", "Keep your insurer's and Karvaahh's contact details handy."],
  },
];

export type InclusionStatus = "listed" | "separate";

/** Package transparency: how a quote is built. Nothing is implied as included. */
export const inclusionGuide: { item: string; status: InclusionStatus; text: string }[] = [
  { item: "International airfare", status: "separate", text: "Quoted separately; we can book it with your package." },
  { item: "Domestic airfare", status: "listed", text: "Included only in packages that list domestic flights." },
  { item: "Hotel", status: "listed", text: "Included in every package, in the category quoted." },
  { item: "Breakfast", status: "listed", text: "Included where the quote says so; some apartments and resorts are room-only." },
  { item: "Sightseeing", status: "listed", text: "Only the tours named in your itinerary." },
  { item: "Attraction tickets", status: "separate", text: "Theme parks, zoos, climbs, cruises and park passes are extra unless listed." },
  { item: "Transfers", status: "listed", text: "Airport transfers as listed; others on request." },
  { item: "Visa charges", status: "separate", text: "Government visa charges are paid separately." },
  { item: "Travel insurance", status: "separate", text: "Strongly recommended; quoted on request." },
];
