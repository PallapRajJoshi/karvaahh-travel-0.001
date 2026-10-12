// data/south-africa/images.ts
// Every photo on the South Africa page, defined once and referenced by id.
// Each was checked by eye. Alt text only claims what the photo shows, and a
// place is named only when it is clearly identifiable. Anything without a
// verified photo renders a designed fallback; add Karvaahh photography here
// (local /public paths work too).

export interface SAImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, alt: string): SAImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`,
  alt,
});

export const saImages = {
  // Cape Town + peninsula
  "ct-aerial": unsplash("1585061528750-3baca2cb6a10", "Aerial view of Cape Town spread below Table Mountain, with the stadium near the coast"),
  "ct-aerial-wide": unsplash("1580060839134-75a5edca2e99", "Cape Town, Table Mountain and Lion's Head seen from the air above the Atlantic"),
  "ct-tablecloth": unsplash("1591742708307-ce49d19450d4", "Cloud spilling over Table Mountain above Cape Town and the Atlantic shore"),
  "lions-head-aerial": unsplash("1580060860978-d479ebf95a53", "Lion's Head and Signal Hill rising above Cape Town"),
  "cable-car": unsplash("1591205024850-d3420e30469e", "A cable car above a sea of clouds with Lion's Head beyond, Cape Town"),
  clifton: unsplash("1576485375217-d6a95e34d043", "Clifton beach below the Twelve Apostles mountain range in Cape Town"),
  "twelve-apostles-sunset": unsplash("1588455471455-4b28e9ab3cd5", "The Twelve Apostles glowing at sunset above Camps Bay"),
  "atlantic-coast-sunset": unsplash("1581596326248-f55ac7852760", "Sunset over the Atlantic coastline below Cape Town's mountains"),
  "camps-bay-beach": unsplash("1632753332864-be893b4b1066", "Camps Bay beach with the Twelve Apostles behind"),
  "camps-bay-street": unsplash("1674758979100-cc17c91672bf", "A palm-lined street in Camps Bay below Lion's Head"),
  "table-mountain-dusk": unsplash("1563656157432-67560011e209", "Table Mountain seen across the bay at dusk"),
  "boulders-penguins": unsplash("1496497243327-9dccd845c35f", "African penguins on a sandy beach beside granite boulders"),
  "muizenberg-huts": unsplash("1474874055390-459bc92357f3", "A row of brightly painted beach huts on white sand"),
  "bo-kaap": unsplash("1663414278309-e3208f78eedc", "Brightly painted houses in Bo-Kaap, Cape Town"),
  "bo-kaap-street": unsplash("1570527141186-e391a3914c42", "Cars parked beside colourful houses in Bo-Kaap, Cape Town"),
  "cape-point-lighthouse": unsplash("1682354499691-3ebb4f6da3ee", "The lighthouse at Cape Point on a rocky headland above the ocean"),
  "cape-point-steps": unsplash("1599070158530-02bbc8e74fe3", "Steps leading up to the lighthouse at Cape Point"),
  "cape-point-cliffs": unsplash("1599070158776-9e331c420309", "Sheer cliffs dropping into the ocean on the Cape Peninsula"),

  // Winelands
  "vineyard-mountain": unsplash("1638012858969-fac36ad2ea32", "Rows of vines climbing towards a mountain peak in the Cape Winelands"),
  "estate-avenue": unsplash("1704037184953-89794b28d081", "A tree-lined avenue leading to a wine estate below mountains"),
  "wine-glasses": unsplash("1503427948460-3ca3eb79c566", "Glasses of red wine raised at a table with mountains behind"),
  "cape-dutch-manor": unsplash("1711293939289-b8e2cc010b06", "A whitewashed Cape Dutch gabled manor house"),
  "vineyard-sunset": unsplash("1706700700309-a255d382d81d", "Vineyards and mountains in warm evening light"),
  "vine-rows": unsplash("1503427128716-12b0ed4822bb", "Long rows of vines across a sloping vineyard"),
  "franschhoek-valley": unsplash("1730793371246-6b755066e9d8", "Franschhoek nestled below a dramatic mountain range"),
  "vineyard-peak": unsplash("1741550865369-e9f6c2c4a084", "A vineyard below a rocky mountain in the Winelands"),
  "wine-pour": unsplash("1560162315-0a6793e72d75", "White wine being poured into a glass"),
  "wine-tram": unsplash("1742728774324-84a8f3e9f1dc", "The Franschhoek Wine Tram waiting at a station"),
  "winelands-church": unsplash("1735050814566-5255c5a03f9c", "A white Cape Dutch church in front of mountains"),

  // Hermanus + whales
  "whale-tail": unsplash("1704034523195-2a8f400d3233", "A whale's tail lifting above blue ocean"),
  "whale-breach": unsplash("1727880601965-4ae337a39b82", "A whale breaching out of the sea"),
  "hermanus-coast": unsplash("1716899976949-ee2eb4a0d4d1", "Aerial view of a rocky coastline and seaside town near Hermanus"),
  "hermanus-cliffs": unsplash("1716899977000-5605da1c89b0", "A seaside village above a rocky shoreline with mountains behind"),

  // Garden Route
  "mossel-bay-lighthouse": unsplash("1653485583946-1f6cb7a83650", "A lighthouse on a coastal hill at sunset on the Garden Route"),
  "wilderness-lake": unsplash("1690969986201-56acaa3794a4", "A still lake reflecting forested hills and mountains on the Garden Route"),
  "garden-beach": unsplash("1564676604727-5cfcaca9b99e", "Footprints across a wide sandy beach"),
  "garden-lagoon": unsplash("1568429584856-c7b4f3849b2b", "A turquoise lagoon below forested cliffs on the Garden Route"),
  "river-mouth": unsplash("1619958715457-0283a6e3947b", "A river mouth opening onto a beach between green hills"),
  "knysna-heads": unsplash("1605122228444-5b0ecb70d404", "A sailboat between the rocky headlands of the Knysna Heads"),
  "knysna-aerial": unsplash("1580677076287-77d9eb0d5893", "Aerial view of a rocky headland with homes above the sea, Knysna"),
  "knysna-mist": unsplash("1626890752643-5dd2cef684fd", "Mist rolling over a forested headland above the ocean"),
  "coastal-boardwalk": unsplash("1700541584991-82ccfef36a7e", "A wooden boardwalk winding over a rocky coastline"),
  "plett-beach": unsplash("1736967462395-69c7183d1f3a", "A sweeping bay and beach near Plettenberg Bay"),
  "plett-rocks": unsplash("1636682201230-d0d38128acd2", "Waves breaking on a rocky shore on the Garden Route"),
  "plett-town": unsplash("1691398331722-c1900dba2fd3", "A coastal town spread above the bay, Plettenberg Bay"),

  // Safari + Big Five
  "elephant-road": unsplash("1681829496174-e9b03398a0a9", "An elephant crossing a road in front of a safari vehicle"),
  "safari-vehicle": unsplash("1710077539513-6d0b9cf273e2", "An open safari vehicle in green bushveld"),
  "vehicle-lion-sunset": unsplash("1709402606682-400133d92ab2", "A lion walking past an open safari vehicle at sunset"),
  "vehicle-sunset": unsplash("1516426122078-c23e76319801", "A safari vehicle in tall grass with acacia trees at sunset"),
  "lion-portrait": unsplash("1604941138781-78fbefc0d888", "A close-up of a male lion with a thick golden mane"),
  "lion-pride": unsplash("1554990772-0bea55d510d5", "A pride of lions resting together on green grass"),
  "lion-golden": unsplash("1600562718259-5cae2c9d2235", "A lion lying in golden grass at sunset"),
  "lioness-cub": unsplash("1727880300738-5cec3371b30b", "A lioness resting with a cub"),
  "leopard-tree": unsplash("1637067788163-e43c2c4a40ed", "A leopard resting on a tree branch"),
  "leopard-walk": unsplash("1599890770821-8417a47a7382", "A leopard walking across open ground"),
  "leopard-rock": unsplash("1606795615071-f46ab60797da", "A leopard lying on a rock in dry grass"),
  "leopard-portrait": unsplash("1673044042167-a46533228f4e", "A leopard looking out from the bush"),
  "elephant-tusks": unsplash("1544211412-2a32426e7fd5", "An elephant with long tusks walking beside a track"),
  "elephant-herd-road": unsplash("1578326626553-39f72c545b07", "A breeding herd of elephants walking along a dirt road"),
  "elephant-waterhole": unsplash("1610372537236-0147e2a5fad3", "A large elephant herd gathered at a waterhole"),
  "elephant-approach": unsplash("1754729919623-c77b71f0fd36", "An elephant walking towards the camera with ears spread"),
  "rhino-calf": unsplash("1612703252506-e2f1f674752d", "A rhino and calf grazing in dry grassland"),
  "rhino-waterhole": unsplash("1758030122690-89847e660a42", "A rhino walking across a dry pan to drink"),
  "rhinos-bush": unsplash("1547970810-dc1eac37d174", "Rhinos walking through autumn-coloured bush"),
  "rhino-mother": unsplash("1535338454770-8be927b5a00b", "A rhino with her young calf"),
  "buffalo-close": unsplash("1789643121041-ea149473bdad", "A Cape buffalo with heavy curved horns in dry grass"),
  "buffalo-herd": unsplash("1636051977954-47224a009ae7", "A herd of buffalo in green grassland"),
  "buffalo-oxpecker": unsplash("1561776284-b741c036b32e", "An oxpecker perched on a buffalo's face"),
  "buffalo-dust": unsplash("1615441433719-6176fb6333f9", "A buffalo standing on sandy ground"),
  zebras: unsplash("1586943353950-95bdbe3207a1", "Zebras drinking from a still pool in dry bush"),
  hippo: unsplash("1575540450244-5d034af07d46", "A hippo opening its mouth in a calm river"),
  "giraffe-dry": unsplash("1653684147709-83a1f8621cdd", "A giraffe bending to graze in dry grassland"),
  springbok: unsplash("1623263320330-83472c08dfe4", "Springbok grazing on dry grassland"),
  meerkat: unsplash("1637579317663-845819c4188b", "A meerkat standing upright on a rock"),

  // Lodges
  "lodge-pool": unsplash("1667987566780-3b31fa5485c8", "An infinity pool and loungers overlooking the bush at a safari lodge"),
  "lodge-suite": unsplash("1734362815901-24bdeb199da5", "A lodge suite with a canopy bed and armchairs"),
  "tented-camp": unsplash("1535759554012-8cbbc491f0b7", "Elephants grazing beside tented safari suites"),

  // Mpumalanga
  "blyde-canyon": unsplash("1645777762248-cd62e0c9149a", "Blyde River Canyon winding between steep forested cliffs"),
  "blyde-dam": unsplash("1567097957353-cad2ca7ae955", "The Blyde River Canyon and dam below green mountains"),
  "panorama-aerial": unsplash("1531200610487-70a1c45ef2f2", "Aerial view of the escarpment and forested cliffs along the Panorama Route"),
  "blyde-aerial": unsplash("1563810242717-f594259f3cf9", "Aerial view of a river winding through the Blyde River Canyon"),
  "canyon-viewpoint": unsplash("1567095199861-5317ac763c1a", "A traveller sitting on a cliff edge above the Blyde River Canyon"),

  // Gauteng + North West
  "joburg-golden": unsplash("1636706519609-988babca3dd5", "The Johannesburg skyline under a warm golden-hour sky"),
  "joburg-aerial": unsplash("1577948000111-9c970dfe3743", "Aerial view of Johannesburg with the Hillbrow Tower"),
  "joburg-sunset": unsplash("1604348489791-f95132c5d8c0", "Johannesburg's city towers at sunset"),
  "pretoria-jacaranda": unsplash("1760527064094-4c09e9bdd40c", "A bus passing a blooming jacaranda tree in Pretoria"),
  "pretoria-heritage": unsplash("1640580488727-056835ca6f32", "A grand heritage building with a clock tower in Pretoria"),
  "pretoria-city": unsplash("1638684845952-71a63f1df5e8", "Pretoria spread across the valley from a hilltop"),
  "pretoria-square": unsplash("1614075565833-7d31bb969f71", "Historic sandstone buildings in central Pretoria"),
  "sun-city-palace": unsplash("1583087769555-dc42d3805650", "The Palace of the Lost City at Sun City rising above trees"),
  "sun-city-elephant": unsplash("1583087754647-036ee60c4850", "A carved elephant statue among plants at Sun City"),
  "bushveld-sunset": unsplash("1583087735204-31c5ccb5bc11", "Bush-covered hills under a sunset sky"),

  // KwaZulu-Natal
  "durban-beachfront": unsplash("1656776832783-c1671a7ad521", "Durban's beachfront hotels across the water"),
  "durban-dusk": unsplash("1550761717-d03b44d9cb33", "Durban's lights along the shore at dusk"),
  "durban-promenade": unsplash("1653924231825-200311b1215c", "Palm trees along Durban's beachfront promenade"),
  "durban-pier": unsplash("1584441042044-fc696878484c", "A pier restaurant over the surf on the Durban coast"),
  "drakensberg-sunrise": unsplash("1625750010410-a9359021775c", "Sunrise above a sea of cloud from the Drakensberg escarpment"),
  "drakensberg-peaks": unsplash("1566840021279-9713abd97c05", "Jagged Drakensberg peaks above a mountain pool"),
  "drakensberg-valley": unsplash("1609521487462-d7712d987a02", "A green valley below the Drakensberg's rock towers"),
  "drakensberg-hills": unsplash("1642670336788-89878882183d", "Rolling green foothills in the Drakensberg"),
  "drakensberg-hiker": unsplash("1595248822918-5ba7fc3bdb29", "A hiker standing on a green ridge above a valley"),

  // Northern Cape
  "kalahari-vehicle": unsplash("1646199805006-30626c687037", "An open safari vehicle on red Kalahari sand at dusk"),
  "kalahari-dunes": unsplash("1645500664580-63a1c2ab5f56", "Red Kalahari dunes stretching to the horizon at sunset"),

  // Light + landscapes
  "acacia-sunset": unsplash("1547471080-7cc2caa01a7e", "A lone acacia tree on the savanna at sunset"),
  "acacia-orange": unsplash("1728042107033-76b13feac547", "An acacia silhouetted against a blazing orange sun"),
  "savanna-sunrise": unsplash("1770843093638-1941ee5cbc64", "Sunrise over savanna dotted with acacia trees"),
  "acacia-golden": unsplash("1516026672322-bc52d61a55d5", "Acacia trees on golden grassland under a dusky sky"),
} satisfies Record<string, SAImage>;

export type SAImageId = keyof typeof saImages;

export const saImage = (id?: SAImageId): SAImage | undefined => (id ? saImages[id] : undefined);
