import type { Destination } from "../types";
import { group, type Row } from "./build";

/**
 * INTERNATIONAL — one record per destination.
 * Places the brief repeated across lists (Maldives, Bali, Phuket, Dubai, Egypt,
 * Hawaii, Zanzibar, Vatican City, Kandy, Bodh Gaya, Sarnath, Kushinagar,
 * Amritsar…) are single records. The four Indian pilgrimage towns
 * (Bodh Gaya, Sarnath, Kushinagar, Amritsar) live under India only.
 */

const intl = (r: string, rows: Row[]) =>
  group({ country: "international", r, t: "city" }, rows);

const C = { t: "country" } as const;

const pilgrimage: Row[] = [
  ["kailash-mansarovar", "Kailash Mansarovar", "SATG", { r: "hm", t: "route", p: "Tibet, China", a: ["Mount Kailash", "Kailash Yatra", "Mansarovar"] }],
  ["lhasa", "Lhasa", "SCH", { r: "hm", p: "Tibet, China" }],
  ["kathmandu-lhasa", "Kathmandu–Lhasa", "SRA", { r: "hm", t: "route", p: "Nepal to Tibet", a: ["Kathmandu Lhasa", "Friendship Highway"] }],
  ["jerusalem", "Jerusalem", "SHC", { r: "me", p: "Holy Land" }],
  ["bethlehem", "Bethlehem", "SHC", { r: "me", p: "Holy Land" }],
  ["mecca", "Mecca", "S", { r: "me", p: "Saudi Arabia", a: ["Makkah", "Umrah", "Hajj"] }],
  ["medina", "Medina", "S", { r: "me", p: "Saudi Arabia", a: ["Madinah"] }],
  ["karbala", "Karbala", "S", { r: "me", p: "Iraq" }],
  ["najaf", "Najaf", "S", { r: "me", p: "Iraq" }],
  ["kandy", "Kandy", "SCH", { r: "sa", p: "Sri Lanka", a: ["Temple of the Tooth"] }],
  ["vatican-city", "Vatican City", "SHC", { r: "eu", p: "Rome, Italy" }],
];

const southeastAsia: Row[] = [
  ["thailand", "Thailand", "BFCMG", C],
  ["bangkok", "Bangkok", "CFO", { p: "Thailand" }],
  ["phuket", "Phuket", "BMLF", { p: "Thailand", t: "island" }],
  ["krabi", "Krabi", "BMA", { p: "Thailand" }],
  ["pattaya", "Pattaya", "BF", { p: "Thailand" }],
  ["chiang-mai", "Chiang Mai", "CNY", { p: "Thailand" }],
  ["indonesia", "Indonesia", "BNC", C],
  ["bali", "Bali", "BMLDYFN", { p: "Indonesia", t: "island" }],
  ["singapore", "Singapore", "FLO", C],
  ["malaysia", "Malaysia", "CNF", C],
  ["kuala-lumpur", "Kuala Lumpur", "CO", { p: "Malaysia" }],
  ["langkawi", "Langkawi", "BML", { p: "Malaysia", t: "island" }],
  ["vietnam", "Vietnam", "CHN", C],
  ["hanoi", "Hanoi", "CH", { p: "Vietnam" }],
  ["ho-chi-minh-city", "Ho Chi Minh City", "CH", { p: "Vietnam", a: ["Saigon"] }],
  ["da-nang", "Da Nang", "BF", { p: "Vietnam" }],
  ["halong-bay", "Halong Bay", "NM", { p: "Vietnam", t: "lake", a: ["Ha Long Bay"] }],
  ["cambodia", "Cambodia", "HC", C],
  ["siem-reap", "Siem Reap", "H", { p: "Cambodia" }],
  ["angkor-wat", "Angkor Wat", "HG", { p: "Cambodia", t: "temple" }],
  ["philippines", "Philippines", "BN", C],
  ["manila", "Manila", "C", { p: "Philippines" }],
  ["boracay", "Boracay", "BM", { p: "Philippines", t: "island" }],
];

const middleEast: Row[] = [
  ["dubai", "Dubai", "LFOBDM", { p: "United Arab Emirates", a: ["UAE"] }],
  ["abu-dhabi", "Abu Dhabi", "CLO", { p: "United Arab Emirates", a: ["UAE"] }],
  ["sharjah", "Sharjah", "CE", { p: "United Arab Emirates", a: ["UAE"] }],
  ["ras-al-khaimah", "Ras Al Khaimah", "AB", { p: "United Arab Emirates", a: ["UAE", "RAK"] }],
  ["qatar", "Qatar", "CLO", C],
  ["doha", "Doha", "CO", { p: "Qatar" }],
  ["oman", "Oman", "NAC", C],
  ["muscat", "Muscat", "CH", { p: "Oman" }],
  ["saudi-arabia", "Saudi Arabia", "SHC", C],
  ["riyadh", "Riyadh", "CO", { p: "Saudi Arabia" }],
  ["jeddah", "Jeddah", "SC", { p: "Saudi Arabia" }],
  ["bahrain", "Bahrain", "CO", C],
  ["jordan", "Jordan", "HNA", C],
  ["amman", "Amman", "CH", { p: "Jordan" }],
  ["petra", "Petra", "HG", { p: "Jordan", t: "temple" }],
  ["wadi-rum", "Wadi Rum", "NAG", { p: "Jordan", t: "valley" }],
  ["egypt", "Egypt", "HCF", { r: "me af", t: "country" }],
  ["cairo", "Cairo", "HEC", { r: "me af", p: "Egypt" }],
  ["luxor", "Luxor", "HE", { r: "me af", p: "Egypt" }],
  ["sharm-el-sheikh", "Sharm El Sheikh", "BAF", { r: "me af", p: "Egypt" }],
];

const southAsia: Row[] = [
  ["sri-lanka", "Sri Lanka", "BCNWM", C],
  ["colombo", "Colombo", "CO", { p: "Sri Lanka" }],
  ["ella", "Ella", "NT", { p: "Sri Lanka", t: "village" }],
  ["nuwara-eliya", "Nuwara Eliya", "NF", { p: "Sri Lanka" }],
  ["galle", "Galle", "HB", { p: "Sri Lanka" }],
  ["bentota", "Bentota", "BM", { p: "Sri Lanka", t: "beach" }],
  ["maldives", "Maldives", "BMLD", { t: "island", a: ["Male"] }],
  ["male", "Malé", "C", { p: "Maldives", a: ["Male"] }],
  ["mauritius", "Mauritius", "BML", { r: "sa af", t: "island" }],
  ["bhutan", "Bhutan", "CSTN", { r: "hm sa", t: "country" }],
  ["thimphu", "Thimphu", "C", { r: "hm sa", p: "Bhutan" }],
  ["paro", "Paro", "HT", { r: "hm sa", p: "Bhutan", a: ["Tiger's Nest", "Taktsang"] }],
  ["punakha", "Punakha", "HC", { r: "hm sa", p: "Bhutan" }],
];

const europe: Row[] = [
  ["france", "France", "CHL", C],
  ["paris", "Paris", "MHCL", { p: "France" }],
  ["switzerland", "Switzerland", "NMAFL", C],
  ["zurich", "Zurich", "C", { p: "Switzerland" }],
  ["interlaken", "Interlaken", "AN", { p: "Switzerland" }],
  ["lucerne", "Lucerne", "NM", { p: "Switzerland" }],
  ["italy", "Italy", "HCFM", C],
  ["rome", "Rome", "HC", { p: "Italy" }],
  ["venice", "Venice", "MH", { p: "Italy" }],
  ["florence", "Florence", "HC", { p: "Italy" }],
  ["greece", "Greece", "HBM", C],
  ["athens", "Athens", "HE", { p: "Greece" }],
  ["santorini", "Santorini", "BMLD", { p: "Greece", t: "island" }],
  ["spain", "Spain", "HCB", C],
  ["barcelona", "Barcelona", "CH", { p: "Spain" }],
  ["madrid", "Madrid", "CH", { p: "Spain" }],
  ["portugal", "Portugal", "HCB", C],
  ["lisbon", "Lisbon", "HC", { p: "Portugal" }],
  ["netherlands", "Netherlands", "CF", C],
  ["amsterdam", "Amsterdam", "C", { p: "Netherlands" }],
  ["germany", "Germany", "HC", C],
  ["berlin", "Berlin", "HE", { p: "Germany" }],
  ["austria", "Austria", "HCN", C],
  ["vienna", "Vienna", "HC", { p: "Austria" }],
  ["czech-republic", "Czech Republic", "HC", { a: ["Czechia"], t: "country" }],
  ["prague", "Prague", "HC", { p: "Czech Republic" }],
  ["hungary", "Hungary", "HC", C],
  ["budapest", "Budapest", "HM", { p: "Hungary" }],
  ["united-kingdom", "United Kingdom", "HCE", { a: ["UK", "Britain", "England"], t: "country" }],
  ["london", "London", "HCFE", { p: "United Kingdom" }],
  ["scotland", "Scotland", "NHG", { p: "United Kingdom" , t: "region" }],
  ["norway", "Norway", "NAG", C],
  ["iceland", "Iceland", "NAG", C],
  ["croatia", "Croatia", "BHN", C],
  ["turkey", "Turkey", "HCB", { r: "eu me", t: "country", a: ["Türkiye"] }],
  ["istanbul", "Istanbul", "HCF", { r: "eu me", p: "Turkey" }],
  ["cappadocia", "Cappadocia", "NMG", { r: "eu me", p: "Turkey", t: "region" }],
  ["antalya", "Antalya", "BF", { r: "eu me", p: "Turkey" }],
];

const africa: Row[] = [
  ["seychelles", "Seychelles", "BML", { t: "island" }],
  ["zanzibar", "Zanzibar", "BM", { p: "Tanzania", t: "island" }],
  ["kenya", "Kenya", "WN", C],
  ["nairobi", "Nairobi", "C", { p: "Kenya" }],
  ["maasai-mara", "Maasai Mara", "WNG", { p: "Kenya", t: "park" }],
  ["tanzania", "Tanzania", "WNA", C],
  ["serengeti", "Serengeti", "WG", { p: "Tanzania", t: "park" }],
  ["south-africa", "South Africa", "WNL", C],
  ["cape-town", "Cape Town", "NCF", { p: "South Africa" }],
  ["johannesburg", "Johannesburg", "HE", { p: "South Africa" }],
  ["morocco", "Morocco", "CH", C],
  ["marrakech", "Marrakech", "CHL", { p: "Morocco" }],
  ["casablanca", "Casablanca", "C", { p: "Morocco" }],
];

const oceania: Row[] = [
  ["fiji", "Fiji", "BML", { t: "island" }],
  ["australia", "Australia", "NFB", C],
  ["sydney", "Sydney", "CF", { p: "Australia" }],
  ["melbourne", "Melbourne", "CE", { p: "Australia" }],
  ["gold-coast", "Gold Coast", "BFA", { p: "Australia" }],
  ["brisbane", "Brisbane", "F", { p: "Australia" }],
  ["perth", "Perth", "BN", { p: "Australia" }],
  ["great-barrier-reef", "Great Barrier Reef", "NBA", { p: "Australia", t: "region" }],
  ["new-zealand", "New Zealand", "NAG", C],
  ["auckland", "Auckland", "C", { p: "New Zealand" }],
  ["queenstown", "Queenstown", "A", { p: "New Zealand" }],
  ["christchurch", "Christchurch", "N", { p: "New Zealand" }],
  ["rotorua", "Rotorua", "CN", { p: "New Zealand" }],
  ["milford-sound", "Milford Sound", "NG", { p: "New Zealand", t: "lake" }],
];

const americas: Row[] = [
  ["hawaii", "Hawaii", "BNM", { t: "island", p: "United States", a: ["Honolulu", "Maui"] }],
  ["usa", "USA", "FCOE", { a: ["United States", "America"], t: "country" }],
  ["new-york", "New York", "COEF", { p: "USA", a: ["NYC"] }],
  ["los-angeles", "Los Angeles", "CF", { p: "USA", a: ["LA"] }],
  ["las-vegas", "Las Vegas", "OD", { p: "USA" }],
  ["san-francisco", "San Francisco", "CG", { p: "USA" }],
  ["orlando", "Orlando", "F", { p: "USA" }],
  ["miami", "Miami", "BF", { p: "USA" }],
  ["canada", "Canada", "NAF", C],
  ["toronto", "Toronto", "CE", { p: "Canada" }],
  ["vancouver", "Vancouver", "N", { p: "Canada" }],
  ["banff", "Banff", "NAG", { p: "Canada", t: "park" }],
  ["mexico", "Mexico", "CHBF", C],
  ["cancun", "Cancun", "BMF", { p: "Mexico", a: ["Cancún"] }],
  ["mexico-city", "Mexico City", "HC", { p: "Mexico" }],
  ["brazil", "Brazil", "NBC", C],
  ["rio-de-janeiro", "Rio de Janeiro", "BC", { p: "Brazil", a: ["Rio"] }],
  ["argentina", "Argentina", "NC", C],
  ["buenos-aires", "Buenos Aires", "C", { p: "Argentina" }],
];

export const INTERNATIONAL: Destination[] = [
  ...intl("me", pilgrimage), // every pilgrimage row sets its own region
  ...intl("se", southeastAsia),
  ...intl("me", middleEast),
  ...intl("sa", southAsia),
  ...intl("eu", europe),
  ...intl("af", africa),
  ...intl("oc", oceania),
  ...intl("am", americas),
];
