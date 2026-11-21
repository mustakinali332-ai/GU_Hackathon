export interface Attraction {
  id: string;
  name: string;
  stateId: string;
  type: "nature" | "temple" | "adventure" | "lake" | "waterfall" | "heritage" | "wildlife" | "festival";
  description: string;
  image: string;
  rating: number;
  bestTime: string;
  entryFee: string;
  timings: string;
}

export const attractions: Attraction[] = [
  // ASSAM
  { id: "kaziranga", name: "Kaziranga National Park", stateId: "assam", type: "wildlife", description: "UNESCO World Heritage Site, home to two-thirds of the world's one-horned rhinoceros. Spread across 430 sq km with elephants, tigers, and wild water buffalo.", image: "https://images.unsplash.com/photo-1585063560693-56a4027b9542?w=600&q=80", rating: 4.8, bestTime: "Nov - Apr", entryFee: "₹100 (Indian) / ₹650 (Foreign)", timings: "7:00 AM - 3:30 PM" },
  { id: "majuli", name: "Majuli Island", stateId: "assam", type: "nature", description: "The world's largest river island on the Brahmaputra. Known for its Vaishnavite monasteries (Satras), mask-making traditions, and serene rural life.", image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=600&q=80", rating: 4.5, bestTime: "Oct - Mar", entryFee: "Free", timings: "Open 24 hours" },
  { id: "kamakhya", name: "Kamakhya Temple", stateId: "assam", type: "temple", description: "One of the oldest and most revered Shakti Peethas, perched atop Nilachal Hill in Guwahati. A major pilgrimage site with stunning architecture.", image: "https://images.unsplash.com/photo-1567157577867-05ccb1388e13?w=600&q=80", rating: 4.6, bestTime: "Year-round", entryFee: "Free", timings: "5:30 AM - 10:00 PM" },
  { id: "manas", name: "Manas National Park", stateId: "assam", type: "wildlife", description: "UNESCO Natural World Heritage Site, a Project Tiger reserve and elephant reserve. Famous for rare golden langur and pygmy hog.", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80", rating: 4.4, bestTime: "Nov - Apr", entryFee: "₹50 (Indian) / ₹500 (Foreign)", timings: "7:00 AM - 4:00 PM" },
  { id: "sivasagar", name: "Sivasagar (Ahom Kingdom)", stateId: "assam", type: "heritage", description: "The seat of the 600-year Ahom dynasty. Features Rang Ghar (Asia's oldest amphitheatre), Talatal Ghar, and Kareng Ghar — monuments of medieval engineering.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", rating: 4.3, bestTime: "Oct - Mar", entryFee: "₹25", timings: "9:00 AM - 5:00 PM" },

  // MEGHALAYA
  { id: "living-root-bridges", name: "Living Root Bridges", stateId: "meghalaya", type: "nature", description: "Handmade bridges grown from the aerial roots of rubber fig trees by the Khasi and Jaintia people. The double-decker bridge in Nongriat is world-famous.", image: "https://images.unsplash.com/photo-1600714124105-5b0e81c3c2e7?w=600&q=80", rating: 4.9, bestTime: "Oct - May", entryFee: "Free", timings: "Open 24 hours" },
  { id: "dawki", name: "Dawki (Umngot River)", stateId: "meghalaya", type: "lake", description: "Crystal-clear river at the India-Bangladesh border where boats appear to float in mid-air. One of the cleanest rivers in Asia.", image: "https://images.unsplash.com/photo-1583309219338-a582f1f9ca6b?w=600&q=80", rating: 4.8, bestTime: "Oct - May", entryFee: "₹20", timings: "8:00 AM - 5:00 PM" },
  { id: "cherrapunji", name: "Cherrapunji (Sohra)", stateId: "meghalaya", type: "nature", description: "One of the wettest places on Earth. Spectacular waterfalls including Nohkalikai Falls (340m) — India's tallest plunge waterfall, and mesmerizing canyon views.", image: "https://images.unsplash.com/photo-1432405972618-c6b0cfba8b03?w=600&q=80", rating: 4.7, bestTime: "Sep - May", entryFee: "₹30", timings: "Open 24 hours" },
  { id: "mawlynnong", name: "Mawlynnong Village", stateId: "meghalaya", type: "heritage", description: "Awarded 'Cleanest Village in Asia'. A charming Khasi village with living root bridges, sky walks, and immaculate community-maintained cleanliness.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", rating: 4.6, bestTime: "Oct - May", entryFee: "₹20", timings: "8:00 AM - 5:00 PM" },
  { id: "elephant-falls", name: "Elephant Falls", stateId: "meghalaya", type: "waterfall", description: "A stunning three-tiered waterfall near Shillong, surrounded by lush green forests. Named after an elephant-shaped rock that once stood nearby.", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80", rating: 4.4, bestTime: "Sep - May", entryFee: "₹20", timings: "9:00 AM - 5:00 PM" },

  // NAGALAND
  { id: "hornbill-festival", name: "Hornbill Festival", stateId: "nagaland", type: "festival", description: "The 'Festival of Festivals' held every December in Kisama Heritage Village. All 16 Naga tribes showcase their culture through dance, music, food, and sports.", image: "https://images.unsplash.com/photo-1533669955142-6a73332af4db?w=600&q=80", rating: 4.9, bestTime: "December 1-10", entryFee: "₹20 (Indian) / ₹100 (Foreign)", timings: "9:00 AM - 5:00 PM" },
  { id: "dzukou-valley", name: "Dzükou Valley", stateId: "nagaland", type: "adventure", description: "The 'Valley of Flowers of the Northeast' — a pristine valley at 2,452m altitude with seasonal wildflowers, streams, and trekking trails between Nagaland and Manipur.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", rating: 4.8, bestTime: "Jun - Sep", entryFee: "₹100", timings: "Trek starts early morning" },
  { id: "kohima-war-cemetery", name: "Kohima War Cemetery", stateId: "nagaland", type: "heritage", description: "A haunting WWII memorial marking the site of the Battle of Kohima (1944), the turning point of the Japanese invasion of India. Maintained by the CWGC.", image: "https://images.unsplash.com/photo-1584551246679-0daf3d275d0f?w=600&q=80", rating: 4.7, bestTime: "Oct - May", entryFee: "Free", timings: "7:30 AM - 4:30 PM" },

  // MANIPUR
  { id: "loktak-lake", name: "Loktak Lake", stateId: "manipur", type: "lake", description: "The largest freshwater lake in Northeast India, famous for its phumdis (floating biomass). Home to the world's only floating national park — Keibul Lamjao.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80", rating: 4.7, bestTime: "Oct - Mar", entryFee: "₹20", timings: "7:00 AM - 5:00 PM" },
  { id: "kangla-fort", name: "Kangla Fort", stateId: "manipur", type: "heritage", description: "The ancient seat of Manipur's rulers for nearly 2,000 years. Sacred site with the iconic Kangla Sha (dragon-lion) statues and historical temples.", image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80", rating: 4.5, bestTime: "Oct - Mar", entryFee: "₹10", timings: "9:30 AM - 4:30 PM" },
  { id: "ima-keithel", name: "Ima Keithel (Mothers' Market)", stateId: "manipur", type: "heritage", description: "Asia's largest all-women market, run entirely by women for over 500 years. Over 5,000 women vendors sell everything from fresh produce to handloomed textiles.", image: "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?w=600&q=80", rating: 4.6, bestTime: "Year-round", entryFee: "Free", timings: "7:00 AM - 6:00 PM" },

  // MIZORAM
  { id: "phawngpui", name: "Phawngpui (Blue Mountain)", stateId: "mizoram", type: "adventure", description: "The highest peak in Mizoram at 2,157m, known as the 'Blue Mountain' for the blue haze that surrounds it. Home to rare orchids and rhododendrons.", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80", rating: 4.5, bestTime: "Oct - Mar", entryFee: "₹50", timings: "6:00 AM - 5:00 PM" },
  { id: "vantawng-falls", name: "Vantawng Falls", stateId: "mizoram", type: "waterfall", description: "The highest waterfall in Mizoram, cascading 750 feet through dense bamboo forests. Named after a legendary Mizo swimmer, Vantawnga.", image: "https://images.unsplash.com/photo-1546182990-dffeafbe841d?w=600&q=80", rating: 4.4, bestTime: "Jul - Oct", entryFee: "₹20", timings: "8:00 AM - 5:00 PM" },
  { id: "reiek", name: "Reiek Heritage Village", stateId: "mizoram", type: "heritage", description: "A preserved traditional Mizo village on a hilltop offering panoramic views of Aizawl and Bangladesh. Features traditional Mizo houses and the annual Anthurium Festival.", image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=600&q=80", rating: 4.3, bestTime: "Oct - Mar", entryFee: "₹20", timings: "9:00 AM - 4:00 PM" },

  // TRIPURA
  { id: "neermahal", name: "Neermahal", stateId: "tripura", type: "heritage", description: "India's only water palace, built in 1930 in the middle of Rudrasagar Lake. A stunning blend of Hindu and Mughal architecture, lit up beautifully at night.", image: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?w=600&q=80", rating: 4.6, bestTime: "Sep - Feb", entryFee: "₹10 (Indian) / ₹100 (Foreign)", timings: "9:00 AM - 5:00 PM" },
  { id: "unakoti", name: "Unakoti Rock Carvings", stateId: "tripura", type: "heritage", description: "Ancient rock-cut sculptures dating to 7th-9th century. Legend says there are 'one less than a crore' (9,999,999) carvings. The massive Shiva head is iconic.", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80", rating: 4.5, bestTime: "Sep - Feb", entryFee: "₹20", timings: "9:00 AM - 5:00 PM" },
  { id: "ujjayanta", name: "Ujjayanta Palace", stateId: "tripura", type: "heritage", description: "The former royal palace of Tripura, now a state museum. Built in 1901 with Mughal-style gardens, tiled floors, and beautifully crafted wooden ceilings.", image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=600&q=80", rating: 4.4, bestTime: "Sep - Feb", entryFee: "₹20", timings: "10:00 AM - 5:00 PM (Closed Mon)" },

  // ARUNACHAL PRADESH
  { id: "tawang", name: "Tawang Monastery", stateId: "arunachal-pradesh", type: "temple", description: "The largest monastery in India and second-largest in the world after Lhasa. Founded in 1680, it houses priceless Buddhist manuscripts, thangkas, and a 28-ft golden Buddha.", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80", rating: 4.9, bestTime: "Mar - Oct", entryFee: "₹50", timings: "8:00 AM - 5:00 PM" },
  { id: "ziro-valley", name: "Ziro Valley", stateId: "arunachal-pradesh", type: "nature", description: "UNESCO World Heritage tentative site. A stunning valley surrounded by pine-covered hills, home to the Apatani tribe known for unique facial tattoos and sustainable farming.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", rating: 4.8, bestTime: "Mar - Oct", entryFee: "Free", timings: "Open 24 hours" },
  { id: "sela-pass", name: "Sela Pass", stateId: "arunachal-pradesh", type: "adventure", description: "A high-altitude mountain pass at 13,700 ft connecting Tezpur to Tawang. Frozen Sela Lake, snow-capped peaks, and prayer flags make it a surreal experience.", image: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=600&q=80", rating: 4.7, bestTime: "Apr - Jun, Sep - Oct", entryFee: "Free", timings: "Open 24 hours" },
  { id: "namdapha", name: "Namdapha National Park", stateId: "arunachal-pradesh", type: "wildlife", description: "India's third-largest national park spanning 1,985 sq km. The only park with four big cat species: tiger, leopard, snow leopard, and clouded leopard.", image: "https://images.unsplash.com/photo-1549366021-9f761d450615?w=600&q=80", rating: 4.6, bestTime: "Oct - Apr", entryFee: "₹50 (Indian) / ₹500 (Foreign)", timings: "6:00 AM - 5:00 PM" },

  // SIKKIM
  { id: "gurudongmar", name: "Gurudongmar Lake", stateId: "sikkim", type: "lake", description: "One of the highest lakes in the world at 17,800 ft. Sacred to both Buddhists and Sikhs, the lake is surrounded by snow-capped mountains and remains partially frozen year-round.", image: "https://images.unsplash.com/photo-1626686010641-1296da2d943e?w=600&q=80", rating: 4.9, bestTime: "Mar - Jun, Oct - Dec", entryFee: "Permit required", timings: "Open daylight hours" },
  { id: "nathula", name: "Nathula Pass", stateId: "sikkim", type: "adventure", description: "Historic trade route between India and China at 14,140 ft. One of the few open border crossings between the two countries, offering stunning Himalayan views.", image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=600&q=80", rating: 4.7, bestTime: "Apr - Jun, Sep - Nov", entryFee: "₹200 (Permit required)", timings: "Wed-Sun, 6:00 AM - 2:00 PM" },
  { id: "tsomgo", name: "Tsomgo Lake", stateId: "sikkim", type: "lake", description: "A glacial lake at 12,313 ft, sacred to Sikkimese people. The lake changes colors with seasons — from frozen white in winter to deep blue in summer.", image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=600&q=80", rating: 4.6, bestTime: "Mar - Jun, Sep - Dec", entryFee: "₹200 (Permit required)", timings: "8:00 AM - 4:00 PM" },
  { id: "rumtek", name: "Rumtek Monastery", stateId: "sikkim", type: "temple", description: "The largest monastery in Sikkim and seat of the Karmapa. Houses rare Buddhist relics, a Golden Stupa, and the stunning Dharma Chakra Centre.", image: "https://images.unsplash.com/photo-1569154941061-e231b4725ef1?w=600&q=80", rating: 4.5, bestTime: "Mar - Jun, Oct - Dec", entryFee: "₹10", timings: "9:00 AM - 4:00 PM" },
  { id: "pelling", name: "Pelling & Kanchenjunga View", stateId: "sikkim", type: "nature", description: "A hill town offering the most stunning views of Mt. Kanchenjunga (8,586m). Features Pemayangtse Monastery, Rabdentse Ruins, and the new Chenrezig statue.", image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80", rating: 4.7, bestTime: "Mar - May, Oct - Dec", entryFee: "Varies", timings: "Open 24 hours" },
];

export const attractionTypes = [
  { value: "all", label: "All Types" },
  { value: "nature", label: "🌿 Nature" },
  { value: "temple", label: "🛕 Temple" },
  { value: "adventure", label: "🏔️ Adventure" },
  { value: "lake", label: "💧 Lake" },
  { value: "waterfall", label: "💦 Waterfall" },
  { value: "heritage", label: "🏛️ Heritage" },
  { value: "wildlife", label: "🦏 Wildlife" },
  { value: "festival", label: "🎭 Festival" },
];

export function getAttractionsByState(stateId: string): Attraction[] {
  return attractions.filter((a) => a.stateId === stateId);
}
