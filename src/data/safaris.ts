export interface SafariPackage {
  id: string;
  parkName: string;
  state: string;
  rangeName: string;
  vehicleType: "4x4 Open Gypsy" | "Elephant Safari" | "Jungle River Boat";
  capacity: string;
  duration: string;
  timings: string[];
  pricePerVehicle: number;
  entryFeeIndian: number;
  entryFeeForeign: number;
  description: string;
  wildlifeHighlights: string[];
  bestSeason: string;
  image: string;
}

export const safariPackages: SafariPackage[] = [
  {
    id: "kaziranga-bagori-gypsy",
    parkName: "Kaziranga National Park",
    state: "Assam",
    rangeName: "Bagori (Western Range)",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "3.5 Hours",
    timings: ["Morning: 7:00 AM - 10:30 AM", "Afternoon: 1:30 PM - 4:30 PM"],
    pricePerVehicle: 2800,
    entryFeeIndian: 100,
    entryFeeForeign: 650,
    description: "The most famous wildlife circuit in Kaziranga boasting the highest density of Great Indian One-Horned Rhinoceros, Asiatic water buffaloes, and hog deer across open alluvial grasslands.",
    wildlifeHighlights: ["One-Horned Rhinoceros", "Wild Water Buffalo", "Swamp Deer", "Hog Deer"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1575550959106-5a7defe28b56?w=800&q=80",
  },
  {
    id: "kaziranga-kohora-elephant",
    parkName: "Kaziranga National Park",
    state: "Assam",
    rangeName: "Kohora (Central Range)",
    vehicleType: "Elephant Safari",
    capacity: "Per Seat (Max 4 riders)",
    duration: "1 Hour",
    timings: ["Slot 1: 5:30 AM - 6:30 AM", "Slot 2: 6:30 AM - 7:30 AM"],
    pricePerVehicle: 1250,
    entryFeeIndian: 100,
    entryFeeForeign: 650,
    description: "A magical dawn encounter entering high elephant grass on elephant-back. Approach rhinos and calves up close without noisy engine disturbances amidst morning mist.",
    wildlifeHighlights: ["Close Rhino Sightings", "Bird Life in Grasslands", "Elephant Calves"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1534188753412-3e26d0d618d6?w=800&q=80",
  },
  {
    id: "kaziranga-agoratoli-gypsy",
    parkName: "Kaziranga National Park",
    state: "Assam",
    rangeName: "Agoratoli (Eastern Range)",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "3.5 Hours",
    timings: ["Morning: 7:00 AM - 10:30 AM", "Afternoon: 1:30 PM - 4:30 PM"],
    pricePerVehicle: 3100,
    entryFeeIndian: 100,
    entryFeeForeign: 650,
    description: "Renowned for Sohola Beel lake and dense canopy woodlands. A dream zone for avid birdwatchers and tiger trackers, hosting migratory pelicans, bar-headed geese, and river otters.",
    wildlifeHighlights: ["Bengal Tiger Tracking", "Spot-Billed Pelicans", "Fishing Eagle", "Otters"],
    bestSeason: "November to April",
    image: "https://images.unsplash.com/photo-1544735716-392fe2489ffa?w=800&q=80",
  },
  {
    id: "manas-bansbari-gypsy",
    parkName: "Manas National Park",
    state: "Assam",
    rangeName: "Bansbari (Central Range)",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 6 Passengers",
    duration: "4 Hours (Full Safari)",
    timings: ["Morning: 6:30 AM - 10:30 AM", "Afternoon: 1:00 PM - 5:00 PM"],
    pricePerVehicle: 3500,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    description: "UNESCO Natural World Heritage Site nestled against the Bhutan hills. Safari routes navigate dense sal forests and savannah grassland along the crystal Manas River.",
    wildlifeHighlights: ["Golden Langur", "Wild Elephants", "Pygmy Hog", "Clouded Leopard"],
    bestSeason: "October to May",
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?w=800&q=80",
  },
  {
    id: "namdapha-deban-expedition",
    parkName: "Namdapha National Park",
    state: "Arunachal Pradesh",
    rangeName: "Deban Core Rainforest",
    vehicleType: "4x4 Open Gypsy",
    capacity: "Up to 5 Passengers",
    duration: "Full Day Guided Wilderness",
    timings: ["Full Day: 6:00 AM - 4:00 PM"],
    pricePerVehicle: 4500,
    entryFeeIndian: 50,
    entryFeeForeign: 500,
    description: "One of the most biodiverse primary tropical rainforests in Asia. The only national park home to all four big cat species: Tiger, Leopard, Snow Leopard, and Clouded Leopard.",
    wildlifeHighlights: ["Clouded Leopard", "Hoolock Gibbon", "Hornbills", "Red Panda"],
    bestSeason: "October to April",
    image: "https://images.unsplash.com/photo-1519681393784-d120267933ba?w=800&q=80",
  },
];
