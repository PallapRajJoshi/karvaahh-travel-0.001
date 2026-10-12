// data/australia/images.ts
// Every photo on the Australia page, defined once and referenced by id.
// Each was checked by eye against its source description; alt text only claims
// what the photo shows, and a place is named only when it is identifiable or
// confirmed by the photographer. Generic photos (couples, vineyards, a roller
// coaster) never claim a location.
// Anything without a verified photo (Darwin today) renders the designed
// fallback, so add real Karvaahh photography here (local /public paths work too).

export interface AUImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, alt: string): AUImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`,
  alt,
});

export const australiaImages = {
  // Sydney + New South Wales
  "sydney-aerial": unsplash("1624138784614-87fd1b6528f8", "Aerial view of the Sydney Opera House and Harbour Bridge in warm morning light"),
  "sydney-opera": unsplash("1540448051910-09cfadd5df61", "The white sail roofs of the Sydney Opera House reflected in the harbour"),
  "sydney-harbour": unsplash("1532984601283-d68a3ee3e51f", "The Sydney Opera House and Harbour Bridge at sunset with the city lights coming on"),
  "sydney-harbour-day": unsplash("1523428096881-5bd79d043006", "The Sydney Opera House and Harbour Bridge across blue water on a clear day"),
  "sydney-night": unsplash("1692734762049-3cf70ef95cf5", "The Sydney Harbour Bridge and Opera House lit up at night"),
  "harbour-bridge": unsplash("1524562865630-b991c6c2f261", "The steel arch and stone pylon of the Sydney Harbour Bridge lit at night"),
  "the-rocks": unsplash("1598948485421-33a1655d3c18", "Historic rooftops beneath the Sydney Harbour Bridge at dusk"),
  "sydney-ferry": unsplash("1721517879172-c63da32ab4bb", "A green-and-gold Sydney ferry passing the Opera House"),
  "circular-quay": unsplash("1766323106122-e5ff1004296f", "A ferry docked near the Sydney Harbour Bridge at sunset"),
  "sydney-cruise": unsplash("1560007839-d11d8ef1af5a", "A tall ship sailing past the Sydney Opera House, seen from above"),
  bondi: unsplash("1551955682-78a3c53ab544", "Turquoise surf and a crowded sandy beach on Sydney's eastern coast"),
  "bondi-pool": unsplash("1557511073-9bb8018e3ff3", "An ocean pool and clubhouse beside the surf on the Sydney coast"),
  manly: unsplash("1722249218194-670990edc703", "Tall pine trees lining a long sandy beach"),
  "blue-mountains": unsplash("1595797128407-ea746eaccb00", "The Three Sisters rock formation above forested valleys in the Blue Mountains"),
  "blue-mountains-valley": unsplash("1616413551220-c89ad7c348c7", "Sandstone cliffs and a deep forested valley under white clouds"),
  "byron-bay": unsplash("1581132885085-02e91cf6e0cc", "The white Cape Byron Lighthouse on a rocky headland above the sea"),
  "hunter-valley": unsplash("1664970925595-90402bf3fbcb", "Rows of grapevines in golden light with low hills behind, New South Wales"),
  canberra: unsplash("1719918508801-0dd00797d959", "Parliament House in Canberra with its flagmast, lit by evening sun"),
  "coastal-drive": unsplash("1494233892892-84542a694e72", "Aerial view of a coastal highway curving along cliffs above the sea"),
  // Melbourne + Victoria
  "melbourne-skyline": unsplash("1624324969215-7ddb79ad73c9", "Princes Bridge over the Yarra River with the Melbourne skyline behind"),
  "melbourne-dawn": unsplash("1595434971780-79d5c20c5090", "The Melbourne skyline at sunrise"),
  "flinders-street": unsplash("1642803266647-74bfb16f48a8", "A tram passing Flinders Street Station under a blue sky, Melbourne"),
  "melbourne-laneway": unsplash("1563725904-297d12c0295d", "Colourful street art covering the walls of Hosier Lane, Melbourne"),
  "melbourne-tram": unsplash("1585217514204-d025f2f1b116", "A classic green-and-gold tram on a Melbourne street"),
  "yarra-river": unsplash("1708554139375-b8a8c00a5f57", "City towers reflected in the still Yarra River among autumn trees"),
  "twelve-apostles": unsplash("1596430222039-4a2d7b4cd767", "Limestone stacks of the Twelve Apostles off a sandy beach below tall cliffs"),
  "twelve-apostles-dusk": unsplash("1716166803705-018e7597e70e", "Sea stacks of the Twelve Apostles in soft pink light at sunset"),
  "great-ocean-road": unsplash("1511233389693-4a066f739752", "A road winding along the coast below green hills above the ocean"),
  "ocean-road-aerial": unsplash("1596015988036-9904322d3a58", "Aerial view of a coastal road between green hills and turquoise sea"),
  penguins: unsplash("1609996533715-f816d5ab5ad9", "A little penguin standing on the sand beside coastal plants"),
  balloon: unsplash("1749039409519-5c09025baa57", "A hot-air balloon floating above misty hills at dawn"),
  // Queensland
  "gold-coast": unsplash("1626070191915-0ae0d9089132", "A long surf beach leading to the Surfers Paradise skyline, Gold Coast"),
  "gold-coast-aerial": unsplash("1671418087163-9a29e29caefa", "Aerial view of high-rise towers along a long surf beach"),
  surfers: unsplash("1716872490819-868e698c0ab5", "Surfers carrying their boards along a beach below high-rise towers"),
  brisbane: unsplash("1548661625-a30d197ce439", "The Brisbane skyline above the river on a sunny day"),
  noosa: unsplash("1693784070290-fdd85993efea", "A surfer walking along a quiet cove beach framed by pandanus trees, Noosa"),
  cairns: unsplash("1706846414907-f666c147698a", "People walking beside a shallow seaside lagoon under shade sails"),
  "fitzroy-island": unsplash("1688337707006-64d5a1f6582c", "Aerial view of Fitzroy Island's beach, boats and fringing reef"),
  "port-douglas": unsplash("1497330154521-cae854668afe", "Early morning on Four Mile Beach, Port Douglas, with mountains behind"),
  daintree: unsplash("1442120108414-42e7ea50d0b5", "A river winding between rainforest-covered hills"),
  "rainforest-coast": unsplash("1587139223877-04cb899fa3e8", "Aerial view of rainforest meeting a white beach and turquoise reef"),
  "cape-tribulation": unsplash("1497329914265-c99263aab735", "A quiet beach backed by rainforest and a green headland"),
  whitehaven: unsplash("1610056352054-a68fe4f998e1", "Aerial view of white sandbars swirling through turquoise water at Hill Inlet and Whitehaven Beach"),
  "whitehaven-long": unsplash("1598522038344-293c492adaf0", "Aerial view of Whitehaven Beach curving between green hills and blue sea"),
  "hill-inlet": unsplash("1603105059193-313a1037c42a", "White sand and turquoise channels winding through an inlet"),
  "hamilton-island": unsplash("1704347952434-098c3031ea1a", "Yachts moored in the marina at Hamilton Island"),
  seaplane: unsplash("1589138845121-1f57482d7488", "A seaplane pulled up on a white-sand beach in the Whitsundays"),
  "heart-reef": unsplash("1760256454373-1557a5a7b2e8", "Aerial view of a heart-shaped coral reef formation"),
  "reef-aerial": unsplash("1635621265002-eb95cd6365ae", "A small sand island surrounded by coral reef in deep blue ocean"),
  "reef-boat": unsplash("1650754620047-c607e36fb00e", "A boat anchored above a shallow turquoise reef"),
  "reef-fish": unsplash("1717292741615-4695bafa9663", "A school of small fish swimming over coral in clear blue water"),
  "coral-garden": unsplash("1745917784380-6f423e4bea8e", "A colourful coral garden on the Great Barrier Reef"),
  "reef-light": unsplash("1717292741610-70b4825fe272", "Morning light filtering through blue water over a coral reef"),
  coral: unsplash("1580696499419-84ca9688f947", "Green and brown corals on a reef dive site"),
  turtle: unsplash("1752787285677-360edcaf8829", "A sea turtle gliding through open blue water"),
  "theme-park": unsplash("1713426225330-014fbfd04aa0", "Riders on a roller coaster loop against a blue sky"),
  // Western Australia
  perth: unsplash("1639669238607-fc36b484012f", "The Perth skyline and the Swan River seen from Kings Park"),
  "perth-night": unsplash("1543852942-5074cb5a8bbf", "A city skyline reflected in the river at night"),
  fremantle: unsplash("1648285522738-583f22ba8bd0", "People walking past heritage shopfronts on a sunny street"),
  quokka: unsplash("1661099027575-7b0f80a9837b", "A quokka sitting on a log, looking at the camera"),
  rottnest: unsplash("1730810764464-339e97fd2b95", "A sandy cove with clear blue water below low limestone cliffs"),
  "rottnest-bay": unsplash("1598298230762-e4cbaf605f4a", "A turquoise bay among low rocky reefs under a blue sky"),
  "margaret-river": unsplash("1516116078823-42912b8916a5", "A rocky sea stack off the Margaret River coast at sunset"),
  "vineyard-terrace": unsplash("1734517648070-2e8d4ed686ac", "A winery restaurant terrace beside a vineyard"),
  broome: unsplash("1699923731541-b03e07883700", "A line of camels walking along the beach at sunset"),
  ningaloo: unsplash("1632018602741-db0b2d5623d9", "Aerial view of a turquoise lagoon along a dry, sandy coastline"),
  "ningaloo-reef": unsplash("1547079631-442498027a07", "Aerial view of waves breaking on a reef edge beside a lagoon"),
  "whale-shark": unsplash("1544552866-49ce864ff896", "A whale shark swimming through deep blue water with light rays above"),
  whale: unsplash("1568430462989-44163eb1752f", "A humpback whale breaching the surface of the ocean"),
  boab: unsplash("1644634530403-bbb1794ed1ab", "A boab tree with its swollen trunk, endemic to the Kimberley"),
  "lake-argyle": unsplash("1767862370731-13550ca5ef0b", "A vast blue lake between rugged, sunlit hills, Lake Argyle"),
  pinnacles: unsplash("1597053124418-3bad8723e745", "Limestone pillars rising from yellow sand in the Pinnacles Desert"),
  // South Australia
  adelaide: unsplash("1656177128839-19fccb6307d3", "Adelaide's riverbank buildings reflected in the River Torrens"),
  "adelaide-street": unsplash("1556628057-2196b9ef2233", "Aerial view along a wide street through Adelaide's city centre"),
  barossa: unsplash("1597218287959-96e3450b92de", "Rows of grapevines on rolling vineyard land under a blue sky"),
  "kangaroo-island": unsplash("1680755388280-61b72e98a309", "The granite boulders of Remarkable Rocks above the sea, Kangaroo Island"),
  "sea-lions": unsplash("1788847889601-7ab3e08e04fc", "Two Australian sea lions on a sandy beach near the surf"),
  "flinders-ranges": unsplash("1602710283496-cc609ef3936d", "A straight road leading towards the Flinders Ranges, South Australia"),
  "rock-wallabies": unsplash("1693719427195-56ef9d8bf813", "Yellow-footed rock-wallabies on a pile of rocks"),
  "wine-food": unsplash("1543418219-44e30b057fea", "Rows of grapevines in a vineyard under a low sun"),
  // Tasmania
  hobart: unsplash("1663121195811-1f7234e6f8ba", "Fishing boats in Hobart's harbour with the city and mountain behind"),
  "cradle-mountain": unsplash("1599411989681-3b7f4c983220", "The Dove Lake boatshed below Cradle Mountain on a clear day"),
  "cradle-walk": unsplash("1701389357376-5b72922c5c8a", "A walking track leading to Dove Lake and Cradle Mountain"),
  "wineglass-bay": unsplash("1627110466624-436b91b5d20b", "The perfect curve of Wineglass Bay below granite peaks"),
  "bay-of-fires": unsplash("1648466550732-e33ba4458bea", "Orange lichen-covered boulders beside clear turquoise water"),
  "port-arthur": unsplash("1675665031372-283e5b3c3072", "The Port Arthur penitentiary and historic buildings across the bay"),
  wombat: unsplash("1605164284889-207ecaaacd26", "A wombat grazing among ferns at Cradle Mountain"),
  "tas-devil": unsplash("1641255131966-b28c3a7f40b2", "A young Tasmanian devil sitting on a wooden bench"),
  // Northern Territory + Outback
  uluru: unsplash("1557214997-7eae7e0e7aaa", "Uluru rising above red earth and desert scrub under a blue sky"),
  "uluru-road": unsplash("1529108190281-9a4f620bc2d8", "Uluru beyond a desert road under wispy clouds"),
  "uluru-dusk": unsplash("1583558983725-35d6a5ce7fb8", "Uluru glowing red at sunset beneath a pink sky"),
  "uluru-stars": unsplash("1612807831838-5d74ee4abddc", "Star trails circling the night sky above Uluru"),
  "kata-tjuta": unsplash("1701608388665-c32b66b6b8ee", "The domes of Kata Tjuta glowing red at sunset"),
  "kings-canyon": unsplash("1746960495495-6bd9a17787a2", "A still waterhole reflecting red sandstone walls in Kings Canyon"),
  kakadu: unsplash("1623719647321-188ae37d7133", "Pandanus trees standing in still wetland water, Kakadu National Park"),
  gorge: unsplash("1706411893192-8c81fef4d0b4", "A calm river between sandstone gorge walls and trees"),
  litchfield: unsplash("1684199974000-fc84c5a45b05", "A twin waterfall dropping into a pool surrounded by forest"),
  macdonnell: unsplash("1635156612466-2c874571ca51", "Distant ranges seen from Larapinta Drive near Alice Springs"),
  "outback-road": unsplash("1555062379-eb894126910e", "A straight road through red earth to the horizon"),
  // Wildlife
  kangaroo: unsplash("1551270988-87c5ea57cdfe", "A kangaroo with a joey in its pouch on a grassy field"),
  koala: unsplash("1579649554660-463ed1d72831", "A koala holding on to a tree branch"),
  wallaby: unsplash("1641557087589-c5c9d41f7b9b", "A wallaby standing on a lush green field"),
  dolphins: unsplash("1533336480081-5e9807b88b36", "A pod of dolphins swimming in turquoise water, seen from above"),
  // People + travel styles
  couple: unsplash("1575388104683-e076ee9ccaa0", "A couple holding hands while walking along the shore at sunset"),
  family: unsplash("1721840432289-d0041522103d", "A family standing together at the water's edge at sunset"),
  vineyard: unsplash("1543418219-44e30b057fea", "Rows of grapevines catching the low evening sun"),
} satisfies Record<string, AUImage>;

export type AUImageId = keyof typeof australiaImages;

export const australiaImage = (id?: string): AUImage | undefined =>
  id && id in australiaImages ? australiaImages[id as AUImageId] : undefined;
