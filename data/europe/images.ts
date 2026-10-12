// data/europe/images.ts
// Verified photo catalogue for /packages/international/europe. Every entry was
// checked visually against its alt text. Countries, packages and experiences
// reference these keys, so one photo is never captioned two different ways.
// Anything without a verified photo renders the designed flag fallback instead
// of an unrelated stock image.

export interface EuropeImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, alt: string): EuropeImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1400&q=75`,
  alt,
});

export const img = {
  parisSeine: unsplash("1502602898657-3e91760cbb34", "Paris Eiffel Tower holiday: the tower above the Seine at dusk"),
  parisBridge: unsplash("1499856871958-5b9627545d1a", "Lamps of Pont Alexandre III glowing at dusk in Paris"),
  eiffel: unsplash("1511739001486-6bfe10ce785f", "Eiffel Tower against a clear blue sky in Paris"),
  lauterbrunnen: unsplash("1530122037265-a5f1f91d3b99", "Swiss Alps Europe tour: chalets and cliffs of the Lauterbrunnen valley"),
  alpineLake: unsplash("1527668752968-14dc70a27c95", "Snow-capped Alpine peaks above a green valley and lake"),
  matterhorn: unsplash("1491555103944-7c647fd857e6", "Hiker in the snow facing the Matterhorn"),
  snowForest: unsplash("1520681279154-51b3fb4ea0f7", "Snow-laden forest and cabins in deep winter"),
  christmasLights: unsplash("1529973625058-a665431328fb", "Christmas tree and festive lights on a snowy winter evening"),
  snowyPromenade: unsplash("1477601263568-180e2c6d046e", "Snow falling on a quiet European city promenade"),
  veniceSalute: unsplash("1514890547357-a9ee288728e0", "Venice Italy honeymoon: the Grand Canal and Santa Maria della Salute"),
  veniceRialto: unsplash("1523906834658-6e24ef2386f9", "Rialto Bridge over the Grand Canal in Venice"),
  veniceCanal: unsplash("1534113414509-0eec2bfb493f", "Quiet Venice canal lined with moored boats"),
  veniceGrandCanal: unsplash("1520175480921-4edfa2983e0f", "Boats on Venice's Grand Canal in summer"),
  colosseum: unsplash("1552832230-c0197dd311b5", "The Colosseum in Rome lit at dusk"),
  vatican: unsplash("1531572753322-ad063cecc140", "St Peter's Square seen from the dome, Vatican City"),
  florence: unsplash("1541370976299-4d24ebbc9077", "Florence Cathedral dome rising above the city's rooftops"),
  amalfi: unsplash("1612698093158-e07ac200d44e", "Cliffside town and turquoise water on the Amalfi Coast, Italy"),
  cinqueTerre: unsplash("1516483638261-f4dbaf036963", "Colourful houses of Manarola, Cinque Terre, Italy"),
  dolomites: unsplash("1482192505345-5655af888cc4", "Wooden boathouse on Lago di Braies in the Italian Dolomites"),
  santoriniOia: unsplash("1570077188670-e3a8d69ac5ff", "Whitewashed houses of Oia stepping down the cliffs of Santorini"),
  santoriniDomes: unsplash("1613395877344-13d4a8e0d49e", "Blue-domed churches of Santorini, Greece"),
  santoriniCaldera: unsplash("1533105079780-92b9be482077", "Santorini Greece view over the caldera from a whitewashed lane"),
  santoriniDusk: unsplash("1580502304784-8985b7eb7260", "Santorini Greece sunset: Oia's lights glowing at dusk"),
  athens: unsplash("1555993539-1732b0258235", "The Parthenon on the Acropolis in Athens"),
  mykonos: unsplash("1601581875309-fafbf2d3ed3a", "Little Venice waterfront on Mykonos, Greece"),
  londonAerial: unsplash("1513635269975-59663e0ac1ad", "Tower Bridge and the River Thames from above, London"),
  bigBen: unsplash("1505761671935-60b3a7427bad", "Big Ben and Westminster Bridge in London"),
  edinburgh: unsplash("1535448033526-c0e85c9e6968", "Edinburgh Castle on its volcanic rock, Scotland"),
  glenfinnan: unsplash("1505832018823-50331d70d237", "Steam train crossing the Glenfinnan Viaduct in the Scottish Highlands"),
  cobh: unsplash("1590089415225-401ed6f9db8e", "Colourful houses and the cathedral of Cobh, Ireland"),
  amsterdam: unsplash("1534351590666-13e3e96b5017", "Amsterdam Netherlands canal lined with trees and gabled houses"),
  amsterdamDusk: unsplash("1512470876302-972faa2aa9a4", "Amsterdam canal houses reflected at dusk"),
  tulips: unsplash("1468327768560-75b778cbb551", "Red-and-white tulips in bloom"),
  brussels: unsplash("1559113202-c916b8e44373", "Triumphal arch of the Cinquantenaire park in Brussels"),
  pragueBridge: unsplash("1519677100203-a0e668c92439", "Prague Czech Republic old town: Charles Bridge and the Vltava from above"),
  pragueOldTown: unsplash("1541849546-216549ae216d", "Baroque spires and red roofs of Prague Old Town"),
  pragueCruise: unsplash("1592906209472-a36b1f3782ef", "River cruise boat passing Charles Bridge in Prague"),
  budapestParliament: unsplash("1541343672885-9be56236302a", "Hungarian Parliament on the Danube in Budapest"),
  budapestSunset: unsplash("1565426873118-a17ed65d74b9", "Budapest Parliament across the Danube at sunset"),
  budapestAerial: unsplash("1551867633-194f125bddfa", "The Danube and Budapest's bridges from above"),
  viennaSkyline: unsplash("1516550893923-42d28e5677af", "Vienna skyline and St Stephen's Cathedral at dusk"),
  belvedere: unsplash("1573599852326-2d4da0bbe613", "Belvedere Palace and formal gardens in Vienna, Austria"),
  neuschwanstein: unsplash("1534313314376-a72289b6181e", "Neuschwanstein Castle above the Bavarian countryside, Germany"),
  rothenburg: unsplash("1467269204594-9661b134dd2b", "Half-timbered houses of Rothenburg ob der Tauber, Germany"),
  berlinNight: unsplash("1528728329032-2972f65dfb3f", "Berlin skyline and TV tower at night"),
  brandenburg: unsplash("1560969184-10fe8719e047", "Brandenburg Gate in Berlin"),
  warsaw: unsplash("1519197924294-4ba991a11128", "Warsaw skyline at night, Poland"),
  bucharest: unsplash("1584646098378-0874589d76b1", "CEC Palace in central Bucharest, Romania"),
  barcelona: unsplash("1583422409516-2895a77efded", "Barcelona's Eixample grid and Sagrada Família from above"),
  madrid: unsplash("1539037116277-4db20889f2d4", "Gran Vía at golden hour in Madrid, Spain"),
  paella: unsplash("1515443961218-a51367888e4b", "Seafood paella served straight from the pan"),
  wine: unsplash("1562601579-599dec564e06", "Wine bottles resting in a European cellar"),
  lisbonTram: unsplash("1585208798174-6cedd86e019a", "Yellow tram on a street in Lisbon, Portugal"),
  porto: unsplash("1555881400-74d7acaacd8b", "Ribeira riverfront and rabelo boats in Porto, Portugal"),
  dubrovnik: unsplash("1555990793-da11153b2473", "Walled Old Town of Dubrovnik on the Adriatic, Croatia"),
  istanbulMosques: unsplash("1527838832700-5059252407fa", "Minarets and domes of Istanbul's historic mosques"),
  istanbulGalata: unsplash("1524231757912-21f4fe3a7200", "Galata Tower above Istanbul rooftops"),
  auroraMountains: unsplash("1507272931001-fc06c17e4f43", "Norway Northern Lights over snowy mountains and a still lake"),
  auroraSky: unsplash("1531366936337-7c912a4589a7", "Green and violet Northern Lights over a winter landscape"),
  auroraForest: unsplash("1483347756197-71ef80e95f73", "Northern Lights above a snow-covered pine forest"),
  auroraRidge: unsplash("1579033461380-adb47c3eb938", "Northern Lights rippling above a dark mountain ridge"),
  fjord: unsplash("1601439678777-b2b3c56fa627", "Boat wake through a steep-sided Norwegian fjord"),
  lofoten: unsplash("1527004013197-933c4bb611b3", "Red fishing cabins beneath granite peaks in Lofoten, Norway"),
  bergen: unsplash("1544085311-11a028465b03", "Bryggen's coloured wharf houses in Bergen, Norway"),
  copenhagen: unsplash("1513622470522-26c3c8a854bc", "Colourful Nyhavn harbour in Copenhagen, Denmark"),
  stockholm: unsplash("1509356843151-3e7d96241e11", "Stockholm's Old Town skyline at dusk, Sweden"),
  helsinki: unsplash("1538332576228-eb5b4c4de6f5", "Helsinki Cathedral above the harbour, Finland"),
  icelandVestrahorn: unsplash("1504829857797-ddff29c27927", "Vestrahorn mountain above black-sand dunes in Iceland"),
  seljalandsfoss: unsplash("1476610182048-b716b8518aae", "Seljalandsfoss waterfall in Iceland at sunset"),
} satisfies Record<string, EuropeImage>;

export type EuropeImageKey = keyof typeof img;
