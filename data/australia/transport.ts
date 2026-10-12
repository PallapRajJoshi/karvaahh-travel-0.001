// data/australia/transport.ts
// Logistics and departure gateways. Times and distances are approximate
// planning guides. Flight connections are configurable and never promised:
// leave `routing` undefined to show "Confirmed at quote".

export type TransportIcon = "domestic" | "car" | "key" | "user" | "bus" | "ferry" | "train";

export const transportModes: { icon: TransportIcon; title: string; text: string }[] = [
  { icon: "domestic", title: "Domestic flights", text: "The practical way between regions: Sydney to Cairns, Melbourne to Uluru, Perth to the east coast." },
  { icon: "car", title: "Private transfers", text: "Airport and hotel transfers so arrivals are simple after a long flight." },
  { icon: "key", title: "Rental cars", text: "For confident drivers on road-trip routes. Australia drives on the left." },
  { icon: "user", title: "Guided tours", text: "Private or small-group guiding for city days, day trips and multi-day tours." },
  { icon: "bus", title: "Coaches", text: "Scheduled coach tours on popular routes such as the Great Ocean Road and the Red Centre." },
  { icon: "ferry", title: "Ferries", text: "Sydney Harbour ferries, Rottnest and Kangaroo Island crossings, and island transfers." },
  { icon: "train", title: "Scenic rail journeys", text: "Long-distance trains such as The Ghan and the Indian Pacific, subject to schedules and availability." },
];

/** Context numbers for the "enormous country" message. Approximate by design. */
export const scaleFacts = [
  { value: 52, suffix: "×", label: "Roughly the area of Nepal (and over twice India's)" },
  { value: 3900, suffix: " km", label: "Perth to Sydney by road, approximately" },
  { value: 3, suffix: "", label: "Standard time zones on the mainland" },
  { value: 4, suffix: "–5 h", label: "Typical Perth–Sydney flight time" },
];

export type Verdict = "fly" | "drive" | "either";

export interface TravelLeg {
  from: string;
  to: string;
  /** Approximate road distance in km; omit when there is no practical road. */
  roadKm?: number;
  road?: string;
  flight?: string;
  other?: string;
  verdict: Verdict;
}

/** Travel-time indicators between popular pairs. */
export const travelLegs: TravelLeg[] = [
  { from: "Sydney", to: "Blue Mountains", roadKm: 110, road: "≈ 1.5–2 h", verdict: "drive" },
  { from: "Brisbane", to: "Gold Coast", roadKm: 80, road: "≈ 1–1.25 h", verdict: "drive" },
  { from: "Cairns", to: "Port Douglas", roadKm: 65, road: "≈ 1 h", verdict: "drive" },
  { from: "Perth", to: "Margaret River", roadKm: 270, road: "≈ 3 h", verdict: "drive" },
  { from: "Melbourne", to: "Twelve Apostles", roadKm: 290, road: "≈ 4–5 h along the coast", verdict: "drive" },
  { from: "Alice Springs", to: "Uluru", roadKm: 450, road: "≈ 5 h", flight: "Short flight, schedules vary", verdict: "either" },
  { from: "Sydney", to: "Melbourne", roadKm: 880, road: "≈ 9–10 h", flight: "≈ 1.5 h", verdict: "fly" },
  { from: "Sydney", to: "Gold Coast", roadKm: 840, road: "≈ 9–10 h", flight: "≈ 1.5 h", verdict: "fly" },
  { from: "Melbourne", to: "Hobart", flight: "≈ 1.25 h", other: "Or the overnight ferry to Devonport", verdict: "fly" },
  { from: "Darwin", to: "Alice Springs", roadKm: 1500, road: "≈ 15 h", flight: "≈ 2 h", verdict: "fly" },
  { from: "Sydney", to: "Cairns", roadKm: 2400, road: "≈ 26–28 h", flight: "≈ 3 h", verdict: "fly" },
  { from: "Sydney", to: "Uluru", roadKm: 2800, road: "≈ 30 h+", flight: "≈ 3.5 h", verdict: "fly" },
  { from: "Melbourne", to: "Cairns", roadKm: 2850, road: "≈ 31–33 h", flight: "≈ 3.5 h", verdict: "fly" },
  { from: "Perth", to: "Sydney", roadKm: 3900, road: "≈ 40 h+", flight: "≈ 4–5 h", verdict: "fly" },
];

export const arrivalGateways = [
  { city: "Sydney", code: "SYD" },
  { city: "Melbourne", code: "MEL" },
  { city: "Brisbane", code: "BNE" },
  { city: "Perth", code: "PER" },
  { city: "Adelaide", code: "ADL" },
];

export type GatewayAvailability = "available" | "on-request" | "check";

export interface DepartureGateway {
  id: string;
  city: string;
  country: "Nepal" | "India" | "Nepal / India";
  airport: string;
  /** Typical routing. Leave undefined until verified for the season. */
  routing?: string;
  availability: GatewayAvailability;
  note?: string;
}

export const departureGateways: DepartureGateway[] = [
  { id: "ktm", city: "Kathmandu", country: "Nepal", airport: "Tribhuvan International (KTM)", availability: "available", note: "Usually involves at least one connection via an Asian, Middle East or Indian hub." },
  { id: "del", city: "Delhi", country: "India", airport: "Indira Gandhi International (DEL)", availability: "available" },
  { id: "bom", city: "Mumbai", country: "India", airport: "Chhatrapati Shivaji Maharaj International (BOM)", availability: "available" },
  { id: "blr", city: "Bengaluru", country: "India", airport: "Kempegowda International (BLR)", availability: "available" },
  { id: "ccu", city: "Kolkata", country: "India", airport: "Netaji Subhas Chandra Bose International (CCU)", availability: "on-request" },
  { id: "maa", city: "Chennai", country: "India", airport: "Chennai International (MAA)", availability: "on-request" },
  { id: "hyd", city: "Hyderabad", country: "India", airport: "Rajiv Gandhi International (HYD)", availability: "on-request" },
  { id: "other", city: "Other airports", country: "Nepal / India", airport: "Any suitable gateway", availability: "check" },
];

export const GATEWAY_NOTE =
  "Airlines, connections and seat availability change. We never promise a direct flight until it is verified for your exact dates; we confirm the routing when you enquire.";

export const OPEN_JAW_TIP =
  "Fly into one Australian city and home from another (for example, into Sydney and out of Cairns) to avoid backtracking across the country.";
