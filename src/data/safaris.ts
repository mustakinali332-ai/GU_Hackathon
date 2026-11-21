export interface SafariPackage {
  id: string;
  slug: string;
  parkName: string;
  state: string;
  district: string;
  rangeName: string;
  safariType: "Elephant" | "Jeep" | "River/Walking";
  vehicleType: "Elephant Safari (Dawn)" | "4x4 Open Gypsy" | "River Rafting & Walk";
  capacity: string;
  duration: string;
  timings: string[];
  pricePerVehicle: number;
  entryFeeIndian: number;
  entryFeeForeign: number;
  guardFee: number;
  description: string;
  wildlifeHighlights: string[];
  bestSeason: string;
  image: string;
  distanceFromGuwahati: string;
  inclusions: string[];
  exclusions: string[];
  rules: string[];
}

export const safariPackages: SafariPackage[] = [
  // 1. POBITORA WILDLIFE SANCTUARY
  {
    id: "pobitora-elephant-safari",
    slug: "pobitora-wildlife-sanctuary-elephant-safari",
    parkName: "Pobitora Wildlife Sanctuary",
    state: "Assam",
    district: "Morigaon (Near Guwahati)",
    rangeName: "Pobitora Core Grasslands",
    safariType: "Elephant",
    vehicleType: "Elephant Safari (Dawn)",
    capacity: "Per Seat (Max 3-4 riders per elephant)",
    duration: "1 Hour",
    timings: ["Batch 1: 06:30 AM - 07:30 AM", "Batch 2: 07:30 AM - 08:30 AM"],
    pricePerVehicle: 1000,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    guardFee: 200,
    description: "Located just 48 km from Guwahati, Pobitora holds the HIGHEST DENSITY of Great Indian One-Horned Rhinoceroses on Earth. An early morning elephant ride brings you within touching distance of rhinos grazing peacefully in dew-soaked marshes with a near 100% sighting guarantee.",
    wildlifeHighlights: ["One-Horned Rhinoceros (Highest Density)", "Wild Asiatic Buffalo", "Hog Deer", "Migratory Birds"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
    distanceFromGuwahati: "48 km (~1.5 hrs drive)",
    inclusions: [
      "Authorized Elephant ride and Mahout fee",
      "Pobitora Eco-development committee charges",
      "Assistance at the forest entry boarding point",
    ],
    exclusions: [
      "Transit from Guwahati / hotel to Pobitora gate",
      "Still camera / DSLR permit fee (₹100)",
      "Personal refreshments and tips",
    ],
    rules: [
      "Report at Pobitora Range Office 30 minutes prior to your allocated dawn batch.",
      "Carry original photo ID (Aadhaar or Voter ID for Indians; Passport for foreigners).",
      "Wear earthy colors (khaki, olive green, brown); avoid bright fluorescent clothing.",
    ],
  },
  {
    id: "pobitora-jeep-safari",
    slug: "pobitora-wildlife-sanctuary-jeep-safari",
    parkName: "Pobitora Wildlife Sanctuary",
    state: "Assam",
    district: "Morigaon (Near Guwahati)",
    rangeName: "Haduk Beel & Tamulidoba Circuit",
    safariType: "Jeep",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "1.5 - 2 Hours",
    timings: ["Morning: 07:00 AM - 12:00 PM", "Afternoon: 01:30 PM - 03:30 PM"],
    pricePerVehicle: 2000,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    guardFee: 200,
    description: "An open 4x4 Gypsy trail traversing the floodplains and swamps of Pobitora. Quick and accessible from Guwahati, ideal for photography of grazing rhinos, basking turtles, and rare winter migratory waterfowl.",
    wildlifeHighlights: ["Rhino Mothers & Calves", "Grey-headed Fish Eagle", "Asian Water Buffalo", "Otters"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
    distanceFromGuwahati: "48 km (~1.5 hrs drive)",
    inclusions: [
      "Exclusive 4x4 Gypsy vehicle hire with experienced wildlife driver",
      "Forest road toll & environmental charge",
      "Mandatory armed forest tracker guard",
    ],
    exclusions: [
      "Pickup from Guwahati city",
      "DSLR / Professional video camera tariff",
      "Food and personal expenses",
    ],
    rules: [
      "Stay seated inside the Gypsy at all times; stepping down is strictly punishable.",
      "Maximum speed limit of 20 km/h enforced inside the sanctuary.",
      "Maintain strict silence around animal herds.",
    ],
  },

  // 2. KAZIRANGA NATIONAL PARK
  {
    id: "kaziranga-bagori-elephant",
    slug: "kaziranga-national-park-elephant-safari",
    parkName: "Kaziranga National Park",
    state: "Assam",
    district: "Golaghat & Nagaon",
    rangeName: "Bagori (Western Range)",
    safariType: "Elephant",
    vehicleType: "Elephant Safari (Dawn)",
    capacity: "Per Seat (Max 4 riders)",
    duration: "1 Hour",
    timings: ["Slot 1: 05:00 AM - 06:00 AM", "Slot 2: 06:00 AM - 07:00 AM"],
    pricePerVehicle: 1250,
    entryFeeIndian: 100,
    entryFeeForeign: 650,
    guardFee: 500,
    description: "The most legendary elephant safari in Asia. Ride atop gentle giants through morning mist into dense 10-foot-tall elephant grass where wild rhinos, calves, and buffaloes graze undisturbed by engine noise.",
    wildlifeHighlights: ["Close-Up One-Horned Rhinos", "Swamp Deer (Barasingha)", "Wild Buffaloes", "Elephant Herd"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800&q=80",
    distanceFromGuwahati: "215 km (~4.5 hrs drive)",
    inclusions: [
      "Authorized Department Elephant Seat & Mahout services",
      "Forest Department elephant riding token",
      "Entry gate assistance at Bagori Range",
    ],
    exclusions: [
      "Hotel transfer to Bagori safari boarding tower",
      "Still Camera permit fee (₹100)",
      "Tips for mahout / elephant care fund",
    ],
    rules: [
      "Strict dawn reporting: Gates close promptly 15 mins prior to ride slot.",
      "Selfie sticks and flash photography are strictly prohibited on elephant back.",
      "Small children must be securely seated between adults.",
    ],
  },
  {
    id: "kaziranga-bagori-gypsy",
    slug: "kaziranga-national-park-jeep-safari",
    parkName: "Kaziranga National Park",
    state: "Assam",
    district: "Golaghat & Nagaon",
    rangeName: "Bagori (Western Range)",
    safariType: "Jeep",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "3.5 Hours",
    timings: ["Morning: 07:00 AM - 10:30 AM", "Afternoon: 01:30 PM - 04:30 PM"],
    pricePerVehicle: 2800,
    entryFeeIndian: 100,
    entryFeeForeign: 650,
    guardFee: 500,
    description: "The premier western wildlife circuit of Kaziranga with open wetland vistas along Donga Beel. The highest concentration of rhinos and swamp deer in the entire national park.",
    wildlifeHighlights: ["One-Horned Rhinoceros", "Wild Water Buffalo", "Hog Deer", "River Otters"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
    distanceFromGuwahati: "215 km (~4.5 hrs drive)",
    inclusions: [
      "Dedicated 4x4 open safari vehicle for up to 6 people",
      "Registered wildlife safari driver",
      "Mandatory armed forest security guard",
    ],
    exclusions: [
      "Kaziranga park entry tickets (₹100 Indian / ₹650 Foreign)",
      "Camera fees (₹100 for DSLR)",
      "Pick-up and drop outside Kohora/Bagori resort zone",
    ],
    rules: [
      "Smoking, alcohol, and playing music inside the park are criminal offenses under the Wildlife Protection Act.",
      "Remain inside designated vehicle tracks at all times.",
    ],
  },
  {
    id: "kaziranga-kohora-gypsy",
    slug: "kaziranga-central-kohora-jeep-safari",
    parkName: "Kaziranga National Park",
    state: "Assam",
    district: "Golaghat & Nagaon",
    rangeName: "Kohora (Central Range)",
    safariType: "Jeep",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "3.5 Hours",
    timings: ["Morning: 07:00 AM - 10:30 AM", "Afternoon: 01:30 PM - 04:30 PM"],
    pricePerVehicle: 2600,
    entryFeeIndian: 100,
    entryFeeForeign: 650,
    guardFee: 500,
    description: "The heart of Kaziranga featuring diverse landscapes: open grasslands, water bodies, and deciduous forests. Exceptional for viewing pelicans, wild elephants, and rhinos at Mihimukh watchtower.",
    wildlifeHighlights: ["Pelicans at Kathpora", "Wild Elephants", "Barasingha", "Bengal Monitor"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
    distanceFromGuwahati: "220 km (~4.5 hrs drive)",
    inclusions: [
      "4x4 Gypsy vehicle hire with central range permit",
      "Armed forest guard escort",
      "Driver and fuel charges",
    ],
    exclusions: [
      "Government entry fees per passenger",
      "DSLR camera permit",
      "Personal travel insurance",
    ],
    rules: [
      "Carrying single-use plastic water bottles into the core zone is prohibited.",
      "Listen strictly to your assigned forest guard's instructions.",
    ],
  },

  // 3. MANAS NATIONAL PARK
  {
    id: "manas-bansbari-elephant",
    slug: "manas-national-park-elephant-safari-booking",
    parkName: "Manas National Park",
    state: "Assam",
    district: "Baksa & Chirang",
    rangeName: "Bansbari (Central Range)",
    safariType: "Elephant",
    vehicleType: "Elephant Safari (Dawn)",
    capacity: "Per Seat (Max 4 riders)",
    duration: "1 Hour",
    timings: ["Slot 1: 06:00 AM - 07:00 AM", "Slot 2: 07:00 AM - 08:00 AM"],
    pricePerVehicle: 1100,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    guardFee: 400,
    description: "Early morning elephant safari exploring the pristine foothills of Bhutan in the Himalayan terai grasslands. Search for elusive Golden Langurs, Asian elephants, and rhinos reintroduced under the Indian Rhino Vision 2020.",
    wildlifeHighlights: ["Golden Langur", "Reintroduced One-Horned Rhinos", "Asian Elephants", "Bengal Florican"],
    bestSeason: "October to May",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800&q=80",
    distanceFromGuwahati: "140 km (~3.5 hrs drive)",
    inclusions: [
      "Authorized Forest Department Elephant ride seat",
      "Government Mahout escort & forest track navigation",
      "Bansbari range check-in assistance",
    ],
    exclusions: [
      "Transfers from Barpeta Road / hotel to Bansbari gate",
      "Still camera charges (₹100)",
      "Meals or hot beverages",
    ],
    rules: [
      "Arrive at Bansbari Range Office by 5:30 AM for document verification.",
      "Wear warm layers as early morning fog in the Bhutan foothills can be very chilly.",
    ],
  },
  {
    id: "manas-bansbari-gypsy",
    slug: "manas-national-park-jeep-safari-booking",
    parkName: "Manas National Park",
    state: "Assam",
    district: "Baksa & Chirang",
    rangeName: "Bansbari to Mathanguri (Bhutan Border)",
    safariType: "Jeep",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "4 - 5 Hours (Deep Forest Trail)",
    timings: ["Morning: 06:30 AM - 11:30 AM", "Afternoon: 01:00 PM - 05:00 PM"],
    pricePerVehicle: 3500,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    guardFee: 400,
    description: "A spectacular 4x4 wilderness expedition from Bansbari all the way up to Mathanguri on the crystal-clear Manas River bordering Royal Manas National Park in Bhutan. Highest biodiversity in Assam.",
    wildlifeHighlights: ["Clouded Leopard", "Pygmy Hog", "Hispid Hare", "Wild Water Buffalo"],
    bestSeason: "October to May",
    image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800&q=80",
    distanceFromGuwahati: "140 km (~3.5 hrs drive)",
    inclusions: [
      "Full deep-forest 4x4 Gypsy transit up to Mathanguri lodge",
      "Armed forest protection guard escort",
      "Park road tolls & vehicle registration fees",
    ],
    exclusions: [
      "Manas entry tickets per person",
      "Camera fees",
      "Picnic lunch at Mathanguri",
    ],
    rules: [
      "Do not attempt to cross the river border into Bhutan without official immigration clearance.",
      "Do not discard food wrappers or plastic anywhere along the trail.",
    ],
  },

  // 4. ORANG NATIONAL PARK
  {
    id: "orang-national-park-gypsy",
    slug: "orang-national-park-jeep-safari",
    parkName: "Orang National Park",
    state: "Assam",
    district: "Darrang & Sonitpur",
    rangeName: "Orang Core Wildlife Range",
    safariType: "Jeep",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "3 Hours",
    timings: ["Morning: 07:00 AM - 10:00 AM", "Afternoon: 01:30 PM - 04:30 PM"],
    pricePerVehicle: 2400,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    guardFee: 300,
    description: "Affectionately called 'Mini Kaziranga', Orang lies on the northern bank of the Brahmaputra. Less crowded with high tiger density, breeding rhinos, pygmy hogs, and blind Gangetic river dolphins in adjacent streams.",
    wildlifeHighlights: ["Royal Bengal Tiger", "One-Horned Rhinos", "Pygmy Hog", "Gangetic River Dolphin"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
    distanceFromGuwahati: "115 km (~3 hrs drive)",
    inclusions: [
      "4x4 Gypsy hire for up to 6 persons",
      "Forest driver and fuel",
      "Mandatory armed forest security escort",
    ],
    exclusions: [
      "Park entry tickets per passenger",
      "Camera permits",
      "Transfers from Tezpur or Guwahati",
    ],
    rules: [
      "Keep phone on silent or flight mode throughout the drive.",
      "Obey the speed guidelines set by the forest division.",
    ],
  },

  // 5. NAMERI NATIONAL PARK
  {
    id: "nameri-rafting-walking-safari",
    slug: "nameri-national-park-river-rafting-walking-safari",
    parkName: "Nameri National Park",
    state: "Assam",
    district: "Sonitpur (Tezpur)",
    rangeName: "Jia Bhoroli River & Potasali Forest",
    safariType: "River/Walking",
    vehicleType: "River Rafting & Walk",
    capacity: "Up to 4 Passengers",
    duration: "4 Hours (13 km Rafting + 5 km Walk)",
    timings: ["Morning: 06:30 AM - 11:00 AM", "Afternoon: 01:00 PM - 04:30 PM"],
    pricePerVehicle: 2800,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    guardFee: 300,
    description: "The only tiger reserve in Assam where walking safaris accompanied by armed forest guards are permitted! Experience a thrilling 13 km gentle raft float down the Jia Bhoroli River to spot the rare White-Winged Wood Duck and Ibisbill.",
    wildlifeHighlights: ["White-Winged Wood Duck (State Bird)", "Golden Mahseer Fish", "Wreathed Hornbill", "Asian Elephant"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&q=80",
    distanceFromGuwahati: "215 km (~4.5 hrs drive)",
    inclusions: [
      "Inflatable river raft with experienced boatmen & life jackets",
      "Two armed forest guards for the walking trek",
      "River crossing ferry charges",
    ],
    exclusions: [
      "Nameri entry permits (₹50 Indian / ₹500 Foreign)",
      "Camera charges",
      "Food and water bottles",
    ],
    rules: [
      "Life jackets must be worn at all times on the Jia Bhoroli river.",
      "Stay in a tight group behind the armed guard during the forest walk.",
    ],
  },
];

export function getSafariBySlug(slug: string): SafariPackage | undefined {
  return safariPackages.find((s) => s.slug === slug || s.id === slug);
}
