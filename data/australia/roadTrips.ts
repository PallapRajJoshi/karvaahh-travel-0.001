// data/australia/roadTrips.ts
// Road-trip routes. Distances and drive times are approximate totals for the
// main route before detours and stops; they are planning guides, not promises.
// Road conditions, closures, wildlife on roads at dusk and seasonal access
// change and are checked before travel.

import type { AUImageId } from "./images";

export type TravelMode = "self-drive" | "chauffeur" | "guided" | "escorted";

export const travelModes: { id: TravelMode; label: string; text: string }[] = [
  { id: "self-drive", label: "Self-drive", text: "Rental car with a planned route and booked stays. Australia drives on the left; licence rules apply." },
  { id: "chauffeur", label: "Private chauffeur", text: "Your own driver and vehicle, so nobody has to drive on unfamiliar roads." },
  { id: "guided", label: "Guided tour", text: "Day or multi-day tours with a local guide, private or shared." },
  { id: "escorted", label: "Escorted group", text: "Join a small-group or coach tour on popular routes." },
];

export interface AustraliaRoadTrip {
  id: string;
  title: string;
  image?: AUImageId;
  stops: { name: string; coords: [number, number] }[];
  distance: string;
  driveTime: string;
  duration: string;
  season: string;
  highlights: string[];
  modes: TravelMode[];
  description: string;
  notes?: string[];
}

export const australiaRoadTrips: AustraliaRoadTrip[] = [
  {
    id: "great-ocean-road", title: "Melbourne → Great Ocean Road → Twelve Apostles", image: "great-ocean-road",
    stops: [
      { name: "Melbourne", coords: [-37.81, 144.96] },
      { name: "Torquay", coords: [-38.33, 144.32] },
      { name: "Lorne", coords: [-38.54, 143.97] },
      { name: "Apollo Bay", coords: [-38.76, 143.67] },
      { name: "Twelve Apostles", coords: [-38.66, 143.1] },
    ],
    distance: "Approx. 280–300 km one way", driveTime: "Approx. 4–5 h one way, before stops", duration: "2–3 days",
    season: "Year-round; summer and early autumn usually most settled",
    highlights: ["Surf Coast beaches", "Rainforest at Great Otway", "Koalas often seen at Kennett River (not guaranteed)", "Twelve Apostles & Loch Ard Gorge"],
    modes: ["self-drive", "chauffeur", "guided", "escorted"],
    description: "Australia's most famous coastal drive. A day trip is possible but long; an overnight is far better.",
    notes: ["The road is winding and narrow in places. Many visitors prefer a driver or guided tour."],
  },
  {
    id: "blue-mountains", title: "Sydney → Blue Mountains", image: "blue-mountains",
    stops: [
      { name: "Sydney", coords: [-33.87, 151.21] },
      { name: "Wentworth Falls", coords: [-33.71, 150.37] },
      { name: "Katoomba", coords: [-33.71, 150.31] },
      { name: "Blackheath", coords: [-33.63, 150.28] },
    ],
    distance: "Approx. 110 km one way", driveTime: "Approx. 1.5–2 h one way", duration: "1–2 days",
    season: "Year-round; crisp in winter, mild in spring and autumn",
    highlights: ["Three Sisters at Echo Point", "Wentworth Falls", "Village cafés in Leura", "Lookouts over the Jamison Valley"],
    modes: ["self-drive", "chauffeur", "guided", "escorted"],
    description: "The easiest nature escape from Sydney: sandstone cliffs and eucalyptus haze.",
  },
  {
    id: "bne-gc", title: "Brisbane → Gold Coast", image: "gold-coast-aerial",
    stops: [
      { name: "Brisbane", coords: [-27.47, 153.03] },
      { name: "Tamborine Mountain", coords: [-27.93, 153.19] },
      { name: "Surfers Paradise", coords: [-28.0, 153.43] },
      { name: "Burleigh Heads", coords: [-28.09, 153.45] },
    ],
    distance: "Approx. 80 km direct; 120 km via the hinterland", driveTime: "Approx. 1–1.5 h direct", duration: "2–4 days",
    season: "Year-round",
    highlights: ["Hinterland rainforest & wineries", "Surfers Paradise", "Burleigh Heads", "Option to continue to Byron Bay"],
    modes: ["self-drive", "chauffeur", "guided"],
    description: "A short, easy drive with a hinterland detour that turns it into a day out.",
  },
  {
    id: "tropical-north", title: "Cairns → Port Douglas → Daintree", image: "rainforest-coast",
    stops: [
      { name: "Cairns", coords: [-16.92, 145.77] },
      { name: "Palm Cove", coords: [-16.75, 145.67] },
      { name: "Port Douglas", coords: [-16.48, 145.46] },
      { name: "Daintree River", coords: [-16.29, 145.38] },
      { name: "Cape Tribulation", coords: [-16.09, 145.46] },
    ],
    distance: "Approx. 140–150 km one way", driveTime: "Approx. 2.5–3 h one way, plus the Daintree River ferry", duration: "3–5 days",
    season: "Dry season, roughly May–October",
    highlights: ["Captain Cook Highway coastline", "Mossman Gorge", "Daintree River cable ferry", "Rainforest meeting the reef at Cape Tribulation"],
    modes: ["self-drive", "chauffeur", "guided", "escorted"],
    description: "Rainforest on one side, Coral Sea on the other. Rental conditions can restrict some roads north of Cape Tribulation.",
    notes: ["Crocodiles live in local rivers and estuaries: swim only where signs say it is safe."],
  },
  {
    id: "perth-margaret-river", title: "Perth → Margaret River", image: "margaret-river",
    stops: [
      { name: "Perth", coords: [-31.95, 115.86] },
      { name: "Mandurah", coords: [-32.53, 115.72] },
      { name: "Busselton", coords: [-33.65, 115.35] },
      { name: "Margaret River", coords: [-33.95, 115.07] },
      { name: "Cape Leeuwin", coords: [-34.37, 115.14] },
    ],
    distance: "Approx. 270 km to Margaret River", driveTime: "Approx. 3 h one way", duration: "3–5 days",
    season: "Spring to autumn; coastal whale watching is seasonal",
    highlights: ["Busselton Jetty", "Wineries & farm-gate produce", "Limestone caves", "Cape Leeuwin, where two oceans meet"],
    modes: ["self-drive", "chauffeur", "guided", "escorted"],
    description: "Wine, surf and tall-tree forest in the south-west.",
  },
  {
    id: "adelaide-melbourne", title: "Adelaide → Great Ocean Road → Melbourne", image: "twelve-apostles-dusk",
    stops: [
      { name: "Adelaide", coords: [-34.93, 138.6] },
      { name: "Coorong", coords: [-36.0, 139.6] },
      { name: "Mount Gambier", coords: [-37.83, 140.78] },
      { name: "Port Fairy", coords: [-38.38, 142.24] },
      { name: "Twelve Apostles", coords: [-38.66, 143.1] },
      { name: "Melbourne", coords: [-37.81, 144.96] },
    ],
    distance: "Approx. 950–1,050 km", driveTime: "Approx. 12–14 h in total", duration: "5–7 days",
    season: "Spring to autumn",
    highlights: ["Coorong lagoons", "Mount Gambier's Blue Lake", "Port Fairy", "Shipwreck Coast & Twelve Apostles"],
    modes: ["self-drive", "chauffeur", "escorted"],
    description: "A one-way journey along the Southern Ocean. One-way rental fees may apply.",
  },
  {
    id: "tasmania", title: "Tasmania Scenic Loop", image: "cradle-walk",
    stops: [
      { name: "Hobart", coords: [-42.88, 147.33] },
      { name: "Freycinet", coords: [-42.13, 148.29] },
      { name: "Bay of Fires", coords: [-41.25, 148.31] },
      { name: "Launceston", coords: [-41.44, 147.14] },
      { name: "Cradle Mountain", coords: [-41.68, 145.95] },
      { name: "Hobart", coords: [-42.88, 147.33] },
    ],
    distance: "Approx. 750–850 km loop", driveTime: "Approx. 10–12 h in total", duration: "7–10 days",
    season: "Spring to autumn; winter brings snow to the highlands",
    highlights: ["Wineglass Bay", "Bay of Fires", "Tamar Valley wine", "Cradle Mountain & Dove Lake"],
    modes: ["self-drive", "chauffeur", "guided", "escorted"],
    description: "Short driving days and a different landscape around every bend.",
    notes: ["Watch for wildlife on rural roads at dawn and dusk."],
  },
];
