// data/antarctica/images.ts
// Every photo on the Antarctica page, defined once and referenced by id.
// Each was checked by eye; alt text only claims what the photo shows, and a
// place is named only when it is clearly identifiable. Add real Karvaahh or
// operator photography here (local /public paths work too).

export interface AntarcticaImage {
  src: string;
  alt: string;
}

const unsplash = (id: string, alt: string): AntarcticaImage => ({
  src: `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1600&q=75`,
  alt,
});

export const antarcticaImages = {
  // Landscapes, ice
  "mirror-bay": unsplash("1535752385016-16aa049b6a8d", "Snow-covered peaks reflected in perfectly still polar water"),
  "iceberg-arch": unsplash("1551415923-31d2072bc248", "A large blue iceberg with a natural arch floating in calm dark water"),
  "ice-cliffs-aerial": unsplash("1486566584569-b9319dc74315", "Aerial view of ice cliffs and a snowfield meeting dark sea"),
  "ice-bay": unsplash("1687904477461-3b38aeef9e54", "A bay scattered with floating ice below a range of snow-covered mountains"),
  "blue-ice-peaks": unsplash("1687904368738-ca6423635666", "Sculpted blue ice in the foreground with jagged snowy peaks across the water"),
  alpenglow: unsplash("1672570289260-d430df31d893", "Pink alpenglow on a snow-covered mountain reflected in calm water"),
  "tabular-berg": unsplash("1462888387064-2a2ea232edb8", "A towering iceberg with sheer walls in front of white mountains"),
  "blue-bergs": unsplash("1687904364304-3fa792cdb55a", "Deep blue and white icebergs floating close together"),
  "berg-blue-band": unsplash("1713323778930-68f9a01eeb2e", "A flat iceberg with a band of glowing blue ice at the waterline"),
  "glacier-front": unsplash("1563377226776-1b0bd48458f2", "A broad glacier front meeting the sea under a pale sky"),
  "berg-open-ocean": unsplash("1703177990528-b3b8264f8b7c", "A lone tabular iceberg on open grey ocean"),
  "moody-bay": unsplash("1713322953263-d32e35a3fce1", "A small blue iceberg in a grey bay below misty snow-covered mountains"),
  "snow-coast": unsplash("1765936153108-0fba0434d8f8", "Snow-covered mountains rising straight out of the sea"),
  "golden-peaks": unsplash("1765936153040-880a183bd592", "Low golden light on snow-covered mountains above dark water"),
  "berg-wall": unsplash("1647163927846-4dd23cdede50", "The sheer side of a huge iceberg rising from turquoise water"),
  "berg-striped": unsplash("1551415923-37f2305be118", "A blue iceberg with vertical grooves floating in calm water"),
  "sun-snowfield": unsplash("1687904635426-e5c3837e5b4e", "A bright sun over a wide snowfield and distant icy mountains"),

  // Expedition
  "zodiac-arch": unsplash("1642928614293-ba6ff94b4a75", "Travellers in red jackets in a small inflatable boat in front of an arched iceberg"),
  "ship-gentoos": unsplash("1556918936-216daf8e7c4c", "Two gentoo penguins on a pebble beach with an expedition ship and a boat of travellers behind"),
  "zodiac-towers": unsplash("1671362500619-4b9c06b5c5e1", "An inflatable boat carrying travellers between towering icebergs"),
  "zodiac-peaks": unsplash("1672612837795-993be4e8bc0d", "A small boat on calm water beneath jagged snow-covered peaks"),
  "ship-deck": unsplash("1703178650419-7dac0606db6f", "View from a ship's deck towards a snow-covered mountain and calm water"),
  "kayak-whale": unsplash("1646357965815-919fc39c3fc9", "Sea kayakers in yellow kayaks with a whale's tail rising from the water nearby"),
  "landing-view": unsplash("1534969381548-092c153e4cef", "Travellers resting on a snowy slope above an icy bay"),

  // Penguins
  "adelie-colony": unsplash("1603548746365-0c7a1583d826", "A large colony of Adélie penguins on a snowy beach in Antarctica"),
  chinstraps: unsplash("1551415923-a2297c7fda79", "Chinstrap penguins walking across fresh snow"),
  "penguins-floe": unsplash("1609385510105-81ae06198c53", "A few penguins standing on a low ice floe under a grey sky"),
  "penguins-slope": unsplash("1632347562052-83f2d630ac03", "Penguins on a snowy slope above a bay with a small iceberg"),
  "penguins-pack-ice": unsplash("1518840801558-9770b4a34eeb", "A group of penguins standing on pack ice"),
  "penguins-snow": unsplash("1582675002932-42541ef3c690", "Penguins gathered on snow under a blue sky"),
  "penguin-chick": unsplash("1575319324326-79e34f463dcb", "Penguins on snow with a fluffy moulting chick in front"),
  "king-penguins": unsplash("1531010068968-648812d9529e", "King penguins standing on a rocky slope below snowy hills"),
  "king-egg": unsplash("1670392269716-8ae55fe7a992", "A king penguin tending an egg on its feet among other adults"),
  "king-colony-beach": unsplash("1551986781-16039d62a081", "A crowded king penguin colony on a beach beside tussock grass"),
  "king-colony-sunset": unsplash("1517783887476-66ca3d04b132", "A vast king penguin colony on a plain below mountains under a sunset sky"),
  "kings-grassland": unsplash("1493825402953-2eb41bfdbba2", "King penguins on open grassland near the coast"),
  rockhoppers: unsplash("1551826720-4eb3c94651d4", "Three rockhopper penguins standing on a rocky shore"),
  "rockhoppers-rocks": unsplash("1551865825-94dd490194b4", "Rockhopper penguins on rocks above sparkling sea"),

  // Marine life
  "humpback-fluke": unsplash("1587606607115-1165198fd0de", "A humpback whale raising its tail above dark water"),
  "fluke-mountains": unsplash("1551415923-51267c1f2d73", "A whale's tail above calm water below snow-covered mountains"),
  "whale-dorsal": unsplash("1603693786247-d70f78921a94", "The back and dorsal fin of a whale surfacing in calm water"),
  orcas: unsplash("1504415882223-d253dba3562e", "Orcas raising their heads through a channel in the sea ice"),
  "weddell-seal-snow": unsplash("1672219299770-23eca9f10dfd", "A seal resting on snow"),
  "weddell-seal": unsplash("1493579706121-60161eb06eeb", "A spotted seal lying on snowy rocks"),
  "fur-seals": unsplash("1680371564641-56c5d84178c5", "Two fur seals sitting on a snowy pebble beach"),
  "fur-seal-chinstraps": unsplash("1556918936-064844e57e57", "A fur seal on a rock with chinstrap penguins nearby"),
  "elephant-seals": unsplash("1670395287375-6e4c0416b410", "Elephant seals resting close together"),
  albatross: unsplash("1748580437339-6483bf3ba6c3", "An albatross gliding low over the ocean"),
  "albatross-sky": unsplash("1716844632527-7d3ec98b3469", "An albatross with long outstretched wings against a blue sky"),

  // Sub-Antarctic islands
  "south-georgia-coast": unsplash("1592020425844-09e889a937bd", "Snow-covered mountains above a deep blue sea"),
  "falklands-settlement": unsplash("1673374143721-3af1759f9ea9", "A small settlement on grassy coastal land beside the sea"),

  // Gateway + South America
  "ushuaia-harbour": unsplash("1652743920822-faaabb728dea", "A ship in the harbour at Ushuaia below snow-capped mountains"),
  "ushuaia-peak": unsplash("1652743920719-307f6333be00", "A sharp snow-covered peak rising above rooftops at Ushuaia"),
  "ushuaia-waterfront": unsplash("1615656543085-130a54570311", "Ushuaia's waterfront and pier with mountains behind the town"),
  "ushuaia-bay": unsplash("1585232946945-795e753b3b63", "Boats in the bay in front of Ushuaia and its mountains"),
  "perito-moreno": unsplash("1552751753-0fc84ae5b6c8", "The Perito Moreno Glacier meeting a turquoise lake in Patagonia, Argentina"),
  "torres-del-paine": unsplash("1558517286-8a9cb0b8c793", "Granite peaks above a lake in Patagonia"),
  "buenos-aires": unsplash("1589909202802-8f4aadce1849", "The Obelisco on 9 de Julio Avenue in Buenos Aires"),
  "buenos-aires-night": unsplash("1610135206707-0f03e4800631", "City towers lit up across the water at night in Buenos Aires"),
} satisfies Record<string, AntarcticaImage>;

export type AntarcticaImageId = keyof typeof antarcticaImages;

export const antarcticaImage = (id?: AntarcticaImageId): AntarcticaImage | undefined => (id ? antarcticaImages[id] : undefined);
