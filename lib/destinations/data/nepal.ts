import type { Destination } from "../types";
import { group, type Row } from "./build";

/**
 * NEPAL — one record per destination, grouped by province.
 * Destinations the brief listed under several headings (Muktinath, Pathibhara,
 * Gosaikunda, Ilam, Khaptad, Api-Nampa, Rara, Dolpo…) appear once, with aliases
 * so search still finds every name the brief used.
 */

const koshi: Row[] = [
  ["everest-region", "Everest Region", "TAWPG", { t: "region", r: "hm", a: ["Sagarmatha National Park", "Khumbu", "Solukhumbu"] }],
  ["everest-base-camp", "Everest Base Camp", "TAG", { t: "trek", r: "hm", a: ["EBC", "EBC Trek"] }],
  ["everest-base-camp-helicopter-tour", "Everest Base Camp Helicopter Tour", "PGL", { t: "route", r: "hm", a: ["EBC helicopter", "Everest helicopter"] }],
  ["gokyo-lakes", "Gokyo Lakes", "TNG", { t: "lake", r: "hm", a: ["Gokyo Valley", "Gokyo Trek", "Gokyo"] }],
  ["three-pass-trek", "Three Pass Trek", "TA", { t: "trek", r: "hm", a: ["Everest Three Passes"] }],
  ["ama-dablam", "Ama Dablam", "TAG", { t: "peak", r: "hm" }],
  ["tengboche", "Tengboche", "SCG", { t: "village", r: "hm", a: ["Tengboche Monastery"] }],
  ["namche-bazaar", "Namche Bazaar", "CTG", { t: "village", r: "hm", a: ["Namche"] }],
  ["lukla", "Lukla", "TAP", { t: "village", r: "hm", a: ["Tenzing-Hillary Airport"] }],
  ["kanchenjunga", "Kanchenjunga", "TAGN", { t: "region", r: "hm", a: ["Kanchenjunga Conservation Area"] }],
  ["kanchenjunga-base-camp", "Kanchenjunga Base Camp", "TAX", { t: "trek", r: "hm", p: "Kanchenjunga" }],
  ["makalu", "Makalu", "TANW", { t: "region", r: "hm", a: ["Makalu-Barun National Park"] }],
  ["makalu-base-camp", "Makalu Base Camp", "TAX", { t: "trek", r: "hm", p: "Makalu" }],
  ["pathibhara", "Pathibhara", "SXN", { t: "temple", r: "hm", a: ["Pathibhara Devi", "Taplejung"] }],
  ["ilam", "Ilam", "NGXC", { t: "region", a: ["Ilam Tea Gardens"] }],
  ["mai-pokhari", "Mai Pokhari", "NSX", { t: "lake" }],
  ["tinjure", "Tinjure", "TXNG", { t: "region", r: "hm", a: ["Tinjure Milke Jaljale"] }],
  ["milke-danda", "Milke Danda", "TXN", { t: "trek", r: "hm" }],
  ["koshi-tappu", "Koshi Tappu", "WNG", { t: "park", a: ["Koshi Tappu Wildlife Reserve"] }],
  ["halesi-mahadev", "Halesi Mahadev", "S", { t: "temple", a: ["Halesi Mahadev Khotang"] }],
  ["barah-kshetra", "Barah Kshetra", "S", { t: "temple", a: ["Barahakshetra"] }],
  ["dharan", "Dharan", "C"],
  ["biratnagar", "Biratnagar", "C"],
];

const madhesh: Row[] = [
  ["janakpur", "Janakpur", "SCHV", { a: ["Janakpurdham"] }],
  ["janaki-mandir", "Janaki Mandir", "SHC", { t: "temple", p: "Janakpur" }],
];

const bagmati: Row[] = [
  ["kathmandu", "Kathmandu", "CHSFEOGV", { a: ["Kathmandu Valley"] }],
  ["bhaktapur", "Bhaktapur", "HCG", { a: ["Bhaktapur Durbar Square"] }],
  ["patan", "Patan (Lalitpur)", "HCG", { a: ["Lalitpur", "Patan Durbar Square"] }],
  ["nagarkot", "Nagarkot", "NMFG", { t: "village" }],
  ["dhulikhel", "Dhulikhel", "NFGY", { t: "village" }],
  ["nuwakot", "Nuwakot", "HC", { t: "village" }],
  ["hetauda", "Hetauda", "N"],
  ["chitwan", "Chitwan", "WNFAL", { t: "park", r: "sa", a: ["Chitwan National Park", "Sauraha"] }],
  ["shivapuri-nagarjun", "Shivapuri Nagarjun", "WN", { t: "park", a: ["Shivapuri Nagarjun National Park", "Shivapuri"] }],
  ["pashupatinath", "Pashupatinath", "SH", { t: "temple", p: "Kathmandu" }],
  ["budhanilkantha", "Budhanilkantha", "S", { t: "temple", p: "Kathmandu" }],
  ["guhyeshwari", "Guhyeshwari", "S", { t: "temple", p: "Kathmandu" }],
  ["dakshinkali", "Dakshinkali", "S", { t: "temple", p: "Kathmandu" }],
  ["swayambhunath", "Swayambhunath", "SHC", { t: "temple", p: "Kathmandu", a: ["Monkey Temple"] }],
  ["boudhanath", "Boudhanath", "SHC", { t: "temple", p: "Kathmandu", a: ["Boudha"] }],
  ["changu-narayan", "Changu Narayan", "SH", { t: "temple", p: "Bhaktapur" }],
  ["namo-buddha", "Namo Buddha", "SC", { t: "temple" }],
  ["palanchok-bhagawati", "Palanchok Bhagawati", "S", { t: "temple" }],
  ["devghat", "Devghat", "S", { t: "temple", rv: true }],
  ["gosaikunda", "Gosaikunda", "SNT", { t: "lake", r: "hm", a: ["Gosaikunda Trek", "Gosainkunda"] }],
  ["langtang", "Langtang", "TNAW", { t: "region", r: "hm", a: ["Langtang National Park", "Langtang Region"] }],
  ["langtang-valley", "Langtang Valley", "TNG", { t: "valley", r: "hm", a: ["Langtang Valley Trek"] }],
  ["helambu", "Helambu", "TCN", { t: "region", r: "hm", a: ["Helambu Trek"] }],
  ["tsho-rolpa-lake", "Tsho Rolpa", "TXN", { t: "lake", r: "hm", a: ["Tsho Rolpa Lake", "Rolwaling"] }],
  ["panch-pokhari", "Panch Pokhari", "TXNS", { t: "lake", r: "hm", a: ["Panch Pokhari Trek"] }],
  ["sailung", "Sailung", "TXN", { t: "trek", r: "hm" }],
  ["ruby-valley-trek", "Ruby Valley Trek", "TXC", { t: "trek", r: "hm", a: ["Ruby Valley"] }],
  ["kalinchowk", "Kalinchowk", "SXN", { t: "region", r: "hm", a: ["Kalinchowk Bhagawati"] }],
  ["great-himalayan-trail", "Great Himalayan Trail", "TAX", { t: "route", r: "hm", pr: null, ar: "Across Nepal", a: ["GHT"] }],
];

const gandaki: Row[] = [
  ["pokhara", "Pokhara", "AFLMNYDO", { a: ["Phewa Lake", "Lakeside"] }],
  ["bandipur", "Bandipur", "CHF", { t: "village" }],
  ["gorkha", "Gorkha", "HCS"],
  ["manakamana", "Manakamana", "S", { t: "temple", a: ["Manakamana Temple"] }],
  ["bindhyabasini", "Bindhyabasini", "S", { t: "temple", p: "Pokhara" }],
  ["tal-barahi", "Tal Barahi", "S", { t: "temple", p: "Pokhara", a: ["Barahi Temple"] }],
  ["muktinath", "Muktinath", "SPTG", { t: "temple", r: "hm", p: "Mustang", a: ["Muktinath Temple", "Muktinath Yatra"] }],
  ["annapurna-region", "Annapurna Region", "TANW", { t: "region", r: "hm", a: ["Annapurna Conservation Area", "ACAP"] }],
  ["annapurna-base-camp", "Annapurna Base Camp", "TAG", { t: "trek", r: "hm", a: ["ABC", "Annapurna Base Camp Trek"] }],
  ["annapurna-circuit", "Annapurna Circuit", "TAG", { t: "trek", r: "hm", a: ["Thorong La"] }],
  ["manang", "Manang", "TNC", { t: "village", r: "hm" }],
  ["manang-circuit", "Manang Circuit", "TAN", { t: "trek", r: "hm", p: "Manang" }],
  ["tilicho-lake", "Tilicho Lake", "TAN", { t: "lake", r: "hm" }],
  ["mustang", "Mustang", "CTSGR", { t: "region", r: "hm" }],
  ["upper-mustang", "Upper Mustang", "CTXG", { t: "region", r: "hm", p: "Mustang", a: ["Upper Mustang Trek", "Lo Manthang", "Kingdom of Lo"] }],
  ["lower-mustang", "Lower Mustang", "CSN", { t: "region", r: "hm", p: "Mustang" }],
  ["mustang-circuit", "Mustang Circuit", "TA", { t: "route", r: "hm", p: "Mustang" }],
  ["jomsom", "Jomsom", "NGR", { t: "village", r: "hm", p: "Mustang" }],
  ["marpha", "Marpha", "CG", { t: "village", r: "hm", p: "Mustang" }],
  ["kagbeni", "Kagbeni", "CG", { t: "village", r: "hm", p: "Mustang" }],
  ["manaslu-region", "Manaslu Region", "TNAW", { t: "region", r: "hm", a: ["Manaslu Conservation Area"] }],
  ["manaslu-circuit", "Manaslu Circuit", "TA", { t: "trek", r: "hm", a: ["Manaslu Circuit Trek"] }],
  ["tsum-valley", "Tsum Valley", "TCX", { t: "valley", r: "hm", a: ["Tsum Valley Trek"] }],
  ["nar-phu-valley", "Nar Phu Valley", "TXC", { t: "valley", r: "hm", a: ["Nar Phu"] }],
  ["mardi-himal", "Mardi Himal", "TNG", { t: "trek", r: "hm", a: ["Mardi Himal Trek"] }],
  ["khopra-danda", "Khopra Danda", "TX", { t: "trek", r: "hm", a: ["Khopra Ridge"] }],
  ["mohare-danda", "Mohare Danda", "TX", { t: "trek", r: "hm" }],
  ["dhaulagiri", "Dhaulagiri", "TAN", { t: "region", r: "hm" }],
  ["dhaulagiri-circuit", "Dhaulagiri Circuit", "TA", { t: "trek", r: "hm", p: "Dhaulagiri" }],
  ["dhorpatan", "Dhorpatan", "WXN", { t: "park", r: "hm", a: ["Dhorpatan Hunting Reserve"], rv: true }],
];

const lumbini: Row[] = [
  ["lumbini", "Lumbini", "SHECV", { a: ["Birthplace of Buddha"] }],
  ["tansen", "Tansen", "HCN", { a: ["Palpa", "Tansen / Palpa"] }],
  ["bardia", "Bardia", "WN", { t: "park", a: ["Bardia National Park"] }],
  ["nepalgunj", "Nepalgunj", "C"],
  ["butwal", "Butwal", "R"],
  ["bageshwari", "Bageshwari", "S", { t: "temple", p: "Nepalgunj" }],
  ["swargadwari", "Swargadwari", "SX", { t: "temple" }],
  ["rolpa", "Rolpa", "XTC", { t: "region", r: "hm" }],
  ["rukum", "Rukum", "XT", { t: "region", r: "hm", rv: true }],
];

const karnali: Row[] = [
  ["rara-lake", "Rara Lake", "NXTG", { t: "lake", r: "hm", a: ["Rara National Park", "Rara Region", "Rara"] }],
  ["dolpo", "Dolpo", "TXC", { t: "region", r: "hm", a: ["Upper Dolpo", "Upper Dolpo Trek"] }],
  ["shey-phoksundo", "Shey Phoksundo", "TXNW", { t: "lake", r: "hm", a: ["Shey Phoksundo National Park", "Shey Phoksundo Trek", "Phoksundo Lake"] }],
  ["humla", "Humla", "TXS", { t: "region", r: "hm", a: ["Simikot"] }],
  ["jumla", "Jumla", "XCS", { t: "region", r: "hm" }],
  ["mugu", "Mugu", "X", { t: "region", r: "hm" }],
  ["chandannath", "Chandannath", "S", { t: "temple", p: "Jumla" }],
];

const sudurpashchim: Row[] = [
  ["khaptad", "Khaptad", "NXWS", { t: "park", r: "hm", a: ["Khaptad National Park"] }],
  ["api-nampa", "Api-Nampa", "TXN", { t: "region", r: "hm", a: ["Api-Nampa Base Camp", "Api Nampa", "Api Himal"] }],
  ["saipal-base-camp", "Saipal Base Camp", "TX", { t: "trek", r: "hm", a: ["Sailpal Base Camp", "Saipal"] }],
  ["tinkar", "Tinkar", "TX", { t: "region", r: "hm", a: ["Tinkar Pass"] }],
  ["bajura", "Bajura", "X", { t: "region", r: "hm" }],
  ["bajhang", "Bajhang", "X", { t: "region", r: "hm" }],
  ["dhangadhi", "Dhangadhi", "R"],
  ["badimalika", "Badimalika", "SX", { t: "temple" }],
  ["shaileshwari", "Shaileshwari", "S", { t: "temple" }],
  ["baidyanath", "Baidyanath", "S", { t: "temple", rv: true }],
];

/** Place whose province could not be confirmed from the brief. */
const unplaced: Row[] = [["ugratara", "Ugratara", "S", { t: "temple", pr: null, ar: "Nepal", rv: true }]];

const nepal = (area: string, pr: Parameters<typeof group>[0]["pr"], rows: Row[]) =>
  group({ country: "nepal", area, pr, r: "sa", t: "city" }, rows);

export const NEPAL: Destination[] = [
  ...nepal("Koshi Province", "koshi", koshi),
  ...nepal("Madhesh Province", "madhesh", madhesh),
  ...nepal("Bagmati Province", "bagmati", bagmati),
  ...nepal("Gandaki Province", "gandaki", gandaki),
  ...nepal("Lumbini Province", "lumbini", lumbini),
  ...nepal("Karnali Province", "karnali", karnali),
  ...nepal("Sudurpashchim Province", "sudurpashchim", sudurpashchim),
  ...nepal("Nepal", undefined, unplaced),
];
