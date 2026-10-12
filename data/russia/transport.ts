// data/russia/transport.ts
// Getting around Russia, the Trans-Siberian route and departure gateways.
// Nothing here states a current schedule: routes, airlines and availability
// are configurable and verified when a trip is quoted.

export const transportModes = [
  { icon: "plane", title: "International flights", text: "Planned from Kathmandu or Indian cities, usually with a connection. Routing is confirmed when you book." },
  { icon: "plane", title: "Domestic flights", text: "The practical way to reach Murmansk, Kazan, Sochi, Irkutsk and the Far East." },
  { icon: "train", title: "High-speed rail", text: "Fast daytime trains on routes where they run, such as Moscow–Saint Petersburg." },
  { icon: "train", title: "Intercity & overnight trains", text: "Sleeper berths on longer routes save a hotel night and are part of the experience." },
  { icon: "car", title: "Private transfers", text: "Car and driver between hotels, stations and day trips such as the Golden Ring." },
  { icon: "car", title: "Airport transfers", text: "Meet-and-greet on arrival and departure where included." },
] as const;

export const moscowSpbRail = {
  title: "Moscow → Saint Petersburg Rail Journey",
  text: "High-speed trains connect the two capitals in roughly four hours, city centre to city centre. Overnight sleeper trains are an alternative. Class, timings and seats are confirmed for your date when booking.",
  points: ["City-centre stations at both ends", "Economy, business and first-class options", "Saves an internal flight and airport time"],
};

/** Example Trans-Siberian route. Schedules and availability are verified before booking. */
export const transSiberian = {
  title: "The Trans-Siberian Railway",
  intro:
    "A specialist long-distance journey rather than a standard short holiday. The full line crosses seven time zones; most travellers break it into stages with hotel nights in between.",
  stops: [
    { id: "moscow", name: "Moscow", note: "Departure from the capital" },
    { id: "kazan", name: "Kazan", note: "Tatar heritage on the Volga" },
    { id: "yekaterinburg", name: "Yekaterinburg", note: "Crossing from Europe into Asia" },
    { id: "novosibirsk", name: "Novosibirsk", note: "Siberia's largest city" },
    { id: "irkutsk", name: "Irkutsk", note: "Gateway to the lake" },
    { id: "lake-baikal", name: "Lake Baikal", note: "The journey's highlight" },
    { id: "vladivostok", name: "Vladivostok", note: "The Pacific terminus" },
  ],
  notes: [
    "Plan at least two weeks for a staged journey with stops.",
    "Train schedules, classes and availability change and are verified before booking.",
    "Far East sections depend on current operating conditions.",
  ],
};

export type DepartureAvailability = "available" | "on-request" | "check";

export interface DepartureGateway {
  /** City travellers start from. */
  departureCity: string;
  country: "Nepal" | "India";
  /** Airport or gateway; leave undefined until confirmed. */
  departureGateway?: string;
  /** Airline(s) currently used; leave undefined unless verified. */
  airline?: string;
  /** Connection point(s); leave undefined unless verified. */
  connection?: string;
  availability: DepartureAvailability;
}

/**
 * Departure data shown in "Start Your Russia Journey from Nepal or India".
 * Fill airline/connection only with routings Karvaahh has confirmed; the UI
 * shows "Confirmed at quote" for anything left blank.
 */
export const departures: DepartureGateway[] = [
  { departureCity: "Kathmandu", country: "Nepal", departureGateway: "Tribhuvan International Airport (KTM)", availability: "on-request" },
  { departureCity: "Delhi", country: "India", departureGateway: "Indira Gandhi International Airport (DEL)", availability: "on-request" },
  { departureCity: "Mumbai", country: "India", departureGateway: "Chhatrapati Shivaji Maharaj International Airport (BOM)", availability: "on-request" },
  { departureCity: "Other Indian cities", country: "India", availability: "check" },
];
