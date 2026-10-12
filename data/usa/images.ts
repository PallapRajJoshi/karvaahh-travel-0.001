// data/usa/images.ts
// Every photo on the USA page, defined once and referenced by id.
// Each was checked by eye; alt text only claims what the photo shows, and a
// place is named only when its landmark is clearly visible.
// Anything without a verified photo renders a designed fallback, so add real
// Karvaahh photography here (local /public paths work too).

export interface USAImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, alt: string): USAImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`,
  alt,
});

export const usaImages = {
  // Northeast
  "nyc-skyline": unsplash("1496588152823-86ff7695e68f", "The Brooklyn Bridge and the Manhattan skyline lit up at dusk, New York City"),
  "nyc-empire": unsplash("1485871981521-5b1fd3805eee", "The Empire State Building rising above Midtown Manhattan at sunset"),
  liberty: unsplash("1605130284535-11dd9eedc58a", "The Statue of Liberty in front of the Manhattan skyline under a clear blue sky"),
  "times-square": unsplash("1595901688281-9cef114adb0b", "Yellow taxi and billboards in Times Square, New York City"),
  "central-park": unsplash("1631729779674-1f369e1116b4", "Rowing boats on the lake in Central Park with apartment towers behind the trees"),
  "brooklyn-bridge": unsplash("1467521335787-2f0fc0f0e9a0", "The stone towers of the Brooklyn Bridge over the East River"),
  capitol: unsplash("1557160854-e1e89fdd3286", "The white dome of the United States Capitol under a blue sky, Washington DC"),
  lincoln: unsplash("1550566167-163a6a29c8c7", "The columns of the Lincoln Memorial on the National Mall, Washington DC"),
  "washington-monument": unsplash("1617581629397-a72507c3de9e", "The Washington Monument framed by blooming cherry trees along the Tidal Basin"),
  boston: unsplash("1565127803082-69dd82351360", "The Boston skyline across the Charles River with sailing boats on the water"),
  philadelphia: unsplash("1517009572053-93fb56dfef49", "The clock tower of Philadelphia City Hall above a city street"),
  niagara: unsplash("1533094602577-198d3beab8ea", "Horseshoe Falls at Niagara with mist rising from the river"),
  "niagara-aerial": unsplash("1694617711278-03862103e39f", "Aerial view of the Horseshoe Falls at Niagara with a sightseeing boat below"),
  "new-england": unsplash("1757661543994-2b94ef37f097", "Houses among bright autumn foliage beside a lake"),
  acadia: unsplash("1609697992606-4d6ec6d6178a", "Pine trees on a rocky granite coastline above blue sea"),
  // Southeast
  orlando: unsplash("1609184889233-eff6dd93def4", "A city skyline reflected in a calm lake at dawn"),
  "florida-palms": unsplash("1605723517503-3cadb5818a0c", "Palm trees silhouetted against a city skyline at sunset"),
  "miami-beach": unsplash("1589083130544-0d6a2926e519", "Aerial view of white sand and high-rise hotels along Miami Beach, Florida"),
  "miami-skyline": unsplash("1535498730771-e735b998cd64", "The Miami skyline across the bay under a pink evening sky"),
  "florida-keys": unsplash("1601136939973-5b5dc52a16cb", "Aerial view of a long bridge crossing turquoise water in the Florida Keys"),
  "new-orleans": unsplash("1568693059993-a239b9cd4957", "Iron-lace balconies hung with ferns on a French Quarter building, New Orleans"),
  nashville: unsplash("1620785692226-cdcc1810a38a", "Neon signs of honky-tonk bars on Broadway at night, Nashville"),
  "nashville-skyline": unsplash("1606762903097-713bf356b8c2", "The Nashville skyline reflected in the river at sunset"),
  atlanta: unsplash("1663601460253-aba72eea6edf", "Downtown Atlanta skyscrapers in warm evening light"),
  smoky: unsplash("1656944380891-a6a7a45a076a", "Layered forested ridges of the Great Smoky Mountains under a cloudy sky"),
  // Southwest
  "las-vegas": unsplash("1581351721010-8cf859cb14a4", "The Las Vegas Strip lit up at night with fountains and resort towers"),
  "vegas-sign": unsplash("1605833556294-ea5c7a74f57d", "The Welcome to Fabulous Las Vegas sign under palm trees and blue sky"),
  "grand-canyon": unsplash("1615551043360-33de8b5f410c", "The Colorado River winding through the deep layered canyons of the Grand Canyon"),
  "antelope-canyon": unsplash("1534868489953-ef37c20abb25", "Curving orange sandstone walls inside Antelope Canyon"),
  "horseshoe-bend": unsplash("1639064352499-b37951be52ec", "Horseshoe Bend, where the Colorado River loops around a sandstone butte"),
  zion: unsplash("1600198778090-9c9a9013a44e", "A green river valley between towering sandstone cliffs in Zion National Park"),
  bryce: unsplash("1493102240626-79998c21d133", "Rows of orange hoodoo rock spires in Bryce Canyon"),
  "monument-road": unsplash("1619268599762-8877ad993728", "A straight desert road leading towards distant buttes in Monument Valley"),
  "hoover-dam": unsplash("1582543553486-6579463ddb77", "The curved concrete wall of the Hoover Dam between desert canyon walls"),
  arches: unsplash("1602086010043-4db598ce5d16", "Delicate Arch standing against a blue sky in Arches National Park"),
  "desert-highway": unsplash("1556830997-36d8a259ed7c", "An empty highway running straight through the desert towards mountains"),
  austin: unsplash("1557335200-a65f7f032602", "The Austin skyline above the river and green parkland, Texas"),
  houston: unsplash("1622007151631-25aa98ab394b", "Glass skyscrapers in downtown Houston against a blue sky"),
  dallas: unsplash("1653862496605-e994e87392ec", "The Dallas skyline lit up at night"),
  "san-antonio": unsplash("1605649666555-e321522c3023", "A tour boat passing riverside cafés with colourful umbrellas on the San Antonio River Walk"),
  // California
  "los-angeles": unsplash("1597982087634-9884f03198ce", "A palm-lined road leading towards the Los Angeles skyline at golden hour"),
  hollywood: unsplash("1534253893894-10d024888e49", "The Hollywood sign on the hills above Los Angeles"),
  "santa-monica": unsplash("1498196645145-687fd3bfe912", "Santa Monica Pier and its lit Ferris wheel at twilight"),
  "golden-gate": unsplash("1501594907352-04cda38ebc29", "The Golden Gate Bridge spanning the bay on a clear day, San Francisco"),
  "golden-gate-sunset": unsplash("1450149632596-3ef25a62011a", "The Golden Gate Bridge at sunset seen from the rocky shore"),
  "san-francisco": unsplash("1554107136-57b138ea99df", "The Painted Ladies Victorian houses with the San Francisco skyline behind"),
  yosemite: unsplash("1498429089284-41f8cf3ffd39", "Granite cliffs and a waterfall above the forested valley in Yosemite National Park"),
  "big-sur": unsplash("1581790061118-2cd9a40164b0", "Bixby Creek Bridge on the Big Sur coast above a sandy cove"),
  "san-diego": unsplash("1617142584114-730e9bda61b2", "Sandstone cliffs and a sandy cove on the San Diego coast"),
  napa: unsplash("1656873592841-8ae63d15be24", "Rows of vineyards below rolling hills in California wine country"),
  "joshua-tree": unsplash("1576191919769-40424bb34367", "Joshua trees silhouetted against a dramatic desert sunset"),
  sequoia: unsplash("1709943517404-635ada23e41d", "A road winding between giant sequoia trunks in the forest"),
  // Midwest
  chicago: unsplash("1714662660476-022bfd34cf44", "The Chicago skyline rising along the Lake Michigan shoreline at dusk"),
  "chicago-bean": unsplash("1494522855154-9297ac14b55f", "Visitors around the Cloud Gate sculpture in Millennium Park with Chicago skyscrapers behind"),
  // Pacific Northwest + Mountain States
  seattle: unsplash("1502175353174-a7a70e73b362", "The Space Needle and Seattle skyline with Mount Rainier in the distance"),
  portland: unsplash("1628783629868-19fb7eb52e2a", "Portland at sunset with Mount Hood rising behind the city"),
  olympic: unsplash("1718421280242-edb3bcbcfbdd", "Sea stacks and driftwood on a misty Pacific beach backed by forest"),
  denver: unsplash("1602800458591-eddda28a498b", "Aerial view of downtown Denver high-rises"),
  "salt-lake-city": unsplash("1681391835354-63aeb171ff41", "Salt Lake City with snow-covered mountains rising behind downtown"),
  yellowstone: unsplash("1607550295261-851fa60d8ed2", "Aerial view of the vivid blue and orange Grand Prismatic Spring in Yellowstone"),
  "yellowstone-bison": unsplash("1608233695800-34245ba7274f", "A bison grazing in golden grassland beside a river with mountains behind"),
  teton: unsplash("1612981453053-184fd648b66b", "Jagged Teton peaks glowing at sunrise above a pine-fringed lake"),
  rocky: unsplash("1556047684-98ef5cc1e8cb", "Rocky mountain peaks above autumn aspens and pine forest"),
  "glacier-np": unsplash("1597441200453-8360298c4e7a", "A long blue lake between steep mountains in Glacier National Park"),
  // Hawaii
  waikiki: unsplash("1507876466758-bc54f384809c", "Aerial view of Waikiki Beach and Diamond Head crater, Honolulu"),
  maui: unsplash("1547537069-537b37a02069", "A rocky beach under a pink sunset sky lined with palm trees on Maui"),
  "na-pali": unsplash("1553301139-3c610dd5b1cb", "The steep green ridges of the Na Pali Coast above turquoise water, Kauai"),
  "hawaii-beach": unsplash("1507525428034-b723cf961d3e", "Gentle waves on a sandy beach at golden hour"),
  // Alaska
  "alaska-glacier": unsplash("1673114819432-1aa36952dd3e", "A tidewater glacier meeting calm water below snowy mountains"),
  "alaska-boat": unsplash("1605978208410-c3deb0fab40d", "A small boat on a fjord below snow-covered mountains"),
  aurora: unsplash("1554609336-64209c2154f6", "Green Northern Lights reflected in a dark lake beside a forested shore"),
  denali: unsplash("1624469600761-6acd071481d9", "A snow-covered mountain massif above a wide river valley"),
  "cruise-port": unsplash("1563829467124-e97ae7f229fd", "A cruise ship docked in a mountain-ringed harbour seen from above"),
  // Experiences
  "road-trip": unsplash("1556830997-36d8a259ed7c", "An open desert highway stretching to the horizon"),
  diner: unsplash("1543373072-69f3d4788832", "A classic American roadside diner with neon signs at dusk"),
  couple: unsplash("1575388104683-e076ee9ccaa0", "A couple holding hands while walking along the shore at sunset"),
  family: unsplash("1475503572774-15a45e5d60b9", "Two adults and a child holding hands at the edge of the sea"),
} satisfies Record<string, USAImage>;

export type USAImageId = keyof typeof usaImages;

export const usaImage = (id?: string): USAImage | undefined =>
  id && id in usaImages ? usaImages[id as USAImageId] : undefined;
