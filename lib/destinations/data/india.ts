import type { Destination } from "../types";
import { group, type Row } from "./build";

/**
 * INDIA — one record per destination, grouped by state / union territory.
 * Places the brief repeated across pilgrimage, Himalayan, beach, wildlife and
 * heritage lists (Varanasi, Khajuraho, Kochi, Munnar, Wayanad, Alleppey, Gir…)
 * are a single record carrying several experiences.
 */

const uttarakhand: Row[] = [
  ["kedarnath", "Kedarnath", "SAPTG", { t: "temple", r: "hm", a: ["Kedarnath Temple", "Kedarnath Yatra"] }],
  ["badrinath", "Badrinath", "SPG", { t: "temple", r: "hm", a: ["Badrinath Temple", "Badrinath Yatra"] }],
  ["gangotri", "Gangotri", "SNT", { t: "temple", r: "hm" }],
  ["yamunotri", "Yamunotri", "SNT", { t: "temple", r: "hm" }],
  ["char-dham", "Char Dham Yatra", "SP", { t: "route", r: "hm", a: ["Char Dham", "Chota Char Dham"] }],
  ["hemkund-sahib", "Hemkund Sahib", "STN", { t: "temple", r: "hm" }],
  ["valley-of-flowers", "Valley of Flowers", "NTG", { t: "valley", r: "hm" }],
  ["haridwar", "Haridwar", "SYV", { a: ["Har Ki Pauri", "Kumbh Mela"] }],
  ["rishikesh", "Rishikesh", "ASY", { a: ["Yoga Capital"] }],
  ["devprayag", "Devprayag", "S", { t: "temple" }],
  ["rudraprayag", "Rudraprayag", "S", { t: "temple" }],
  ["guptkashi", "Guptkashi", "S", { t: "village", r: "hm" }],
  ["gaurikund", "Gaurikund", "ST", { t: "village", r: "hm" }],
  ["tungnath", "Tungnath", "STN", { t: "temple", r: "hm", a: ["Panch Kedar"] }],
  ["chopta", "Chopta", "TNG", { t: "village", r: "hm" }],
  ["triyuginarayan", "Triyuginarayan", "S", { t: "temple", r: "hm" }],
  ["jageshwar", "Jageshwar", "SH", { t: "temple", r: "hm" }],
  ["dhari-devi", "Dhari Devi", "S", { t: "temple" }],
  ["auli", "Auli", "AN", { t: "village", r: "hm" }],
  ["mussoorie", "Mussoorie", "FMN", { r: "hm" }],
  ["nainital", "Nainital", "FMN", { r: "hm" }],
  ["jim-corbett", "Jim Corbett", "WNF", { t: "park", a: ["Corbett National Park", "Jim Corbett National Park"] }],
];

const uttarPradesh: Row[] = [
  ["varanasi", "Varanasi", "SCHVY", { a: ["Benares", "Kashi"] }],
  ["ayodhya", "Ayodhya", "SH", { a: ["Ram Mandir"] }],
  ["prayagraj", "Prayagraj", "SVH", { a: ["Allahabad", "Kumbh Mela", "Sangam"] }],
  ["mathura", "Mathura", "SV"],
  ["vrindavan", "Vrindavan", "SV"],
  ["chitrakoot", "Chitrakoot", "S"],
  ["vindhyachal", "Vindhyachal", "S"],
  ["sarnath", "Sarnath", "SHE"],
  ["gorakhpur", "Gorakhpur", "S"],
  ["kushinagar", "Kushinagar", "SHE"],
  ["agra", "Agra", "HCF"],
  ["taj-mahal", "Taj Mahal", "HGM", { t: "temple", p: "Agra" }],
  ["lucknow", "Lucknow", "CH"],
];

const madhyaPradesh: Row[] = [
  ["ujjain", "Ujjain", "SV", { a: ["Simhastha"] }],
  ["omkareshwar", "Omkareshwar", "S", { t: "temple" }],
  ["mahakaleshwar", "Mahakaleshwar", "S", { t: "temple", p: "Ujjain", a: ["Mahakal"] }],
  ["khajuraho", "Khajuraho", "HCG"],
  ["orchha", "Orchha", "HGC"],
  ["kanha", "Kanha", "WN", { t: "park", a: ["Kanha National Park"] }],
  ["bandhavgarh", "Bandhavgarh", "WN", { t: "park", a: ["Bandhavgarh National Park"] }],
  ["pench", "Pench", "WN", { t: "park", a: ["Pench National Park", "Pench Tiger Reserve"] }],
  ["satpura", "Satpura", "WNA", { t: "park", a: ["Satpura National Park"] }],
];

const gujarat: Row[] = [
  ["dwarka", "Dwarka", "S", { a: ["Dwarkadhish"] }],
  ["somnath", "Somnath", "S", { t: "temple" }],
  ["ahmedabad", "Ahmedabad", "HCE"],
  ["gir", "Gir", "WN", { t: "park", a: ["Gir National Park", "Gir Forest"] }],
  ["statue-of-unity", "Statue of Unity", "FE", { t: "village", a: ["Kevadia"] }],
  ["rann-of-kutch", "Rann of Kutch", "NGV", { t: "region", a: ["Rann Utsav", "Kutch", "White Desert"] }],
  ["diu", "Diu", "BF", { t: "island", ar: "Diu (Union Territory)" }],
];

const maharashtra: Row[] = [
  ["mumbai", "Mumbai", "CFOD"],
  ["shirdi", "Shirdi", "S", { a: ["Sai Baba"] }],
  ["nashik", "Nashik", "SV", { a: ["Kumbh Mela"] }],
  ["trimbakeshwar", "Trimbakeshwar", "S", { t: "temple" }],
  ["bhimashankar", "Bhimashankar", "SN", { t: "temple" }],
  ["ajanta-ellora", "Ajanta & Ellora", "HEC", { t: "region", a: ["Ajanta", "Ellora", "Ajanta Ellora Caves"] }],
  ["tadoba", "Tadoba", "WN", { t: "park", a: ["Tadoba Andhari", "Tadoba National Park"] }],
];

const south: Row[] = [
  ["tirupati", "Tirupati", "S", { ar: "Andhra Pradesh", a: ["Tirumala", "Balaji"] }],
  ["chennai", "Chennai", "CO", { ar: "Tamil Nadu" }],
  ["madurai", "Madurai", "SHC", { ar: "Tamil Nadu", a: ["Meenakshi Temple"] }],
  ["rameshwaram", "Rameshwaram", "S", { ar: "Tamil Nadu", a: ["Ramanathaswamy Temple"] }],
  ["kanyakumari", "Kanyakumari", "SNG", { ar: "Tamil Nadu" }],
  ["srirangam", "Srirangam", "SH", { ar: "Tamil Nadu" }],
  ["kanchipuram", "Kanchipuram", "SH", { ar: "Tamil Nadu" }],
  ["thanjavur", "Thanjavur", "HCS", { ar: "Tamil Nadu", a: ["Tanjore", "Brihadeeswara"] }],
  ["mahabalipuram", "Mahabalipuram", "HB", { ar: "Tamil Nadu", a: ["Mamallapuram"] }],
  ["pondicherry", "Pondicherry", "BCY", { ar: "Puducherry (Union Territory)", a: ["Puducherry"] }],
  ["mysore", "Mysore", "HCF", { ar: "Karnataka", a: ["Mysuru"] }],
  ["coorg", "Coorg", "NMF", { ar: "Karnataka", t: "region", a: ["Kodagu"] }],
  ["hampi", "Hampi", "HEG", { ar: "Karnataka" }],
  ["bengaluru", "Bengaluru", "CO", { ar: "Karnataka", a: ["Bangalore"] }],
  ["gokarna", "Gokarna", "BS", { ar: "Karnataka" }],
  ["nagarhole", "Nagarhole", "WN", { ar: "Karnataka", t: "park", a: ["Nagarhole National Park", "Rajiv Gandhi National Park"] }],
  ["bandipur-national-park", "Bandipur National Park", "WN", { ar: "Karnataka", t: "park", a: ["Bandipur India", "Bandipur Tiger Reserve"] }],
  ["kerala", "Kerala", "NBMYF", { ar: "Kerala", t: "region", a: ["God's Own Country", "Backwaters"] }],
  ["kochi", "Kochi", "HCB", { ar: "Kerala", a: ["Cochin"] }],
  ["munnar", "Munnar", "NMF", { ar: "Kerala" }],
  ["alleppey", "Alleppey", "NMF", { ar: "Kerala", a: ["Alappuzha", "Houseboat"] }],
  ["wayanad", "Wayanad", "WNF", { ar: "Kerala", t: "region" }],
  ["varkala", "Varkala", "BY", { ar: "Kerala" }],
  ["kovalam", "Kovalam", "BYL", { ar: "Kerala" }],
  ["periyar", "Periyar", "WN", { ar: "Kerala", t: "park", a: ["Periyar National Park", "Thekkady"] }],
  ["hyderabad", "Hyderabad", "HCO", { ar: "Telangana" }],
  ["goa", "Goa", "BFMDLV", { ar: "Goa", t: "region" }],
  ["andaman-nicobar", "Andaman & Nicobar", "BMA", { ar: "Andaman & Nicobar Islands", t: "island", a: ["Andaman", "Andaman and Nicobar", "Havelock"] }],
  ["lakshadweep", "Lakshadweep", "BM", { ar: "Lakshadweep", t: "island" }],
];

const eastNortheast: Row[] = [
  ["puri", "Puri", "SBV", { ar: "Odisha", a: ["Jagannath Puri", "Jagannath Temple", "Rath Yatra"] }],
  ["konark", "Konark", "HS", { ar: "Odisha", a: ["Konark Sun Temple"] }],
  ["bhubaneswar", "Bhubaneswar", "SH", { ar: "Odisha" }],
  ["odisha-coast", "Odisha Coast", "B", { ar: "Odisha", t: "beach" }],
  ["bodh-gaya", "Bodh Gaya", "SHE", { ar: "Bihar" }],
  ["patna", "Patna", "CH", { ar: "Bihar" }],
  ["nalanda", "Nalanda", "HE", { ar: "Bihar" }],
  ["rajgir", "Rajgir", "SH", { ar: "Bihar" }],
  ["darjeeling", "Darjeeling", "NFG", { ar: "West Bengal", r: "hm" }],
  ["sandakphu", "Sandakphu", "TGX", { ar: "West Bengal", r: "hm", t: "trek", rv: true }],
  ["kolkata", "Kolkata", "HCV", { ar: "West Bengal" }],
  ["sundarbans", "Sundarbans", "WN", { ar: "West Bengal", t: "park", a: ["Sundarbans National Park"] }],
  ["gangtok", "Gangtok", "NFG", { ar: "Sikkim", r: "hm" }],
  ["sikkim", "Sikkim", "NTAMFG", { ar: "Sikkim", r: "hm", t: "region" }],
  ["north-sikkim", "North Sikkim", "NAG", { ar: "Sikkim", r: "hm", t: "region", p: "Sikkim" }],
  ["shillong", "Shillong", "NFM", { ar: "Meghalaya" }],
  ["guwahati", "Guwahati", "C", { ar: "Assam" }],
  ["kamakhya-temple", "Kamakhya Temple", "S", { ar: "Assam", t: "temple", p: "Guwahati", a: ["Kamakhya"] }],
  ["kaziranga", "Kaziranga", "WN", { ar: "Assam", t: "park", a: ["Kaziranga National Park"] }],
  ["manas", "Manas National Park", "WN", { ar: "Assam", t: "park", a: ["Manas"] }],
  ["tawang", "Tawang", "SXG", { ar: "Arunachal Pradesh", r: "hm", a: ["Tawang Monastery"] }],
  ["arunachal-pradesh", "Arunachal Pradesh", "XNT", { ar: "Arunachal Pradesh", r: "hm", t: "region" }],
];

const himalayanNorth: Row[] = [
  ["ladakh", "Ladakh", "ARG", { ar: "Ladakh (Union Territory)", r: "hm", t: "region" }],
  ["leh", "Leh", "ACG", { ar: "Ladakh (Union Territory)", r: "hm", p: "Ladakh" }],
  ["nubra-valley", "Nubra Valley", "RGN", { ar: "Ladakh (Union Territory)", r: "hm", t: "valley", p: "Ladakh" }],
  ["pangong-lake", "Pangong Lake", "RGN", { ar: "Ladakh (Union Territory)", r: "hm", t: "lake", p: "Ladakh", a: ["Pangong Tso"] }],
  ["tso-moriri", "Tso Moriri", "NGX", { ar: "Ladakh (Union Territory)", r: "hm", t: "lake", p: "Ladakh" }],
  ["kashmir", "Kashmir", "NMFG", { ar: "Jammu & Kashmir", r: "hm", t: "region", a: ["Kashmir Valley"] }],
  ["srinagar", "Srinagar", "NMCG", { ar: "Jammu & Kashmir", r: "hm", p: "Kashmir", a: ["Dal Lake"] }],
  ["gulmarg", "Gulmarg", "AN", { ar: "Jammu & Kashmir", r: "hm", p: "Kashmir" }],
  ["pahalgam", "Pahalgam", "NT", { ar: "Jammu & Kashmir", r: "hm", p: "Kashmir" }],
  ["sonamarg", "Sonamarg", "NT", { ar: "Jammu & Kashmir", r: "hm", p: "Kashmir" }],
  ["spiti-valley", "Spiti Valley", "ARGX", { ar: "Himachal Pradesh", r: "hm", t: "valley", a: ["Spiti"] }],
  ["manali", "Manali", "AFM", { ar: "Himachal Pradesh", r: "hm" }],
  ["solang-valley", "Solang Valley", "A", { ar: "Himachal Pradesh", r: "hm", t: "valley", p: "Manali" }],
  ["kasol", "Kasol", "TN", { ar: "Himachal Pradesh", r: "hm", t: "village" }],
  ["kullu", "Kullu", "AFN", { ar: "Himachal Pradesh", r: "hm" }],
  ["shimla", "Shimla", "FMH", { ar: "Himachal Pradesh", r: "hm" }],
  ["dharamshala", "Dharamshala", "NY", { ar: "Himachal Pradesh", r: "hm" }],
  ["mcleod-ganj", "McLeod Ganj", "CYS", { ar: "Himachal Pradesh", r: "hm", p: "Dharamshala", a: ["McLeodganj", "Dalai Lama"] }],
  ["dalhousie", "Dalhousie", "FN", { ar: "Himachal Pradesh", r: "hm" }],
];

const heritageNorthWest: Row[] = [
  ["delhi", "Delhi", "HCOE", { ar: "Delhi (National Capital Territory)", a: ["New Delhi"] }],
  ["jaipur", "Jaipur", "HCLD", { ar: "Rajasthan", a: ["Pink City"] }],
  ["jodhpur", "Jodhpur", "HC", { ar: "Rajasthan", a: ["Blue City"] }],
  ["udaipur", "Udaipur", "HMDL", { ar: "Rajasthan", a: ["City of Lakes"] }],
  ["jaisalmer", "Jaisalmer", "HCG", { ar: "Rajasthan", a: ["Golden City"] }],
  ["ranthambore", "Ranthambore", "WNG", { ar: "Rajasthan", t: "park", a: ["Ranthambore National Park", "Ranthambhore"] }],
  ["amritsar", "Amritsar", "SCH", { ar: "Punjab", a: ["Golden Temple", "Harmandir Sahib"] }],
];

const india = (area: string | undefined, rows: Row[]) =>
  group({ country: "india", area, r: "sa", t: "city" }, rows);

export const INDIA: Destination[] = [
  ...india("Uttarakhand", uttarakhand),
  ...india("Uttar Pradesh", uttarPradesh),
  ...india("Madhya Pradesh", madhyaPradesh),
  ...india("Gujarat", gujarat),
  ...india("Maharashtra", maharashtra),
  ...india(undefined, south),
  ...india(undefined, eastNortheast),
  ...india(undefined, himalayanNorth),
  ...india(undefined, heritageNorthWest),
  // The brief also lists the following as standalone Jyotirlinga circuit:
  ...group({ country: "india", area: "Across India", r: "sa", t: "route" }, [
    ["jyotirlinga", "12 Jyotirlinga Yatra", "SP", { a: ["Jyotirlinga", "Jyotirlingas", "12 Jyotirlinga"] }],
  ]),
];
