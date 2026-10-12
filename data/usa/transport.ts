// data/usa/transport.ts
// Logistics and departure gateways. Flight connections are configurable and
// never promised: leave a field undefined to show "Confirmed at quote".

export type TransportIcon = "plane" | "domestic" | "train" | "car" | "key" | "user" | "mountain";

export const transportModes: { icon: TransportIcon; title: string; text: string }[] = [
  { icon: "plane", title: "International flight assistance", text: "Routings from Nepal and India via suitable hubs, matched to your dates and budget." },
  { icon: "domestic", title: "Domestic flights", text: "The fastest way between regions, such as New York to Los Angeles or Las Vegas to Honolulu." },
  { icon: "train", title: "Intercity rail where practical", text: "Best on the Northeast Corridor between Boston, New York, Philadelphia and Washington DC." },
  { icon: "car", title: "Private transfers", text: "Airport and hotel transfers so arrivals are simple after a long flight." },
  { icon: "key", title: "Rental cars", text: "For confident drivers on road-trip routes, with routes and stops pre-planned." },
  { icon: "user", title: "Chauffeur services", text: "Your own driver for city days, day trips or a whole road trip." },
  { icon: "mountain", title: "Scenic rail journeys", text: "Routes such as the Alaska Railroad and long-distance scenic trains, subject to schedules." },
];

/** Context numbers for the "vast country" message. Approximate by design. */
export const scaleFacts = [
  { value: 4500, suffix: "+ km", label: "New York to Los Angeles by road, approximately" },
  { value: 6, suffix: "", label: "Time zones from Eastern to Hawaii" },
  { value: 5, suffix: "–6 h", label: "Typical coast-to-coast flight time" },
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
  { id: "ktm", city: "Kathmandu", country: "Nepal", airport: "Tribhuvan International (KTM)", availability: "available", note: "Usually involves at least one connection via a Middle East, Asian or Indian hub." },
  { id: "del", city: "Delhi", country: "India", airport: "Indira Gandhi International (DEL)", availability: "available" },
  { id: "bom", city: "Mumbai", country: "India", airport: "Chhatrapati Shivaji Maharaj International (BOM)", availability: "available" },
  { id: "blr", city: "Bengaluru", country: "India", airport: "Kempegowda International (BLR)", availability: "available" },
  { id: "ccu", city: "Kolkata", country: "India", airport: "Netaji Subhas Chandra Bose International (CCU)", availability: "on-request" },
  { id: "maa", city: "Chennai", country: "India", airport: "Chennai International (MAA)", availability: "on-request" },
  { id: "hyd", city: "Hyderabad", country: "India", airport: "Rajiv Gandhi International (HYD)", availability: "on-request" },
  { id: "other", city: "Other city", country: "Nepal / India", airport: "Any suitable gateway", availability: "check" },
];

export const GATEWAY_NOTE =
  "Airlines, connections and seat availability change. We never promise a direct flight until it is verified for your exact dates; we confirm the routing when you enquire.";
