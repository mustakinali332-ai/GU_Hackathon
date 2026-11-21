export interface PermitInfo {
  stateId: string;
  stateName: string;
  indianCitizens: {
    required: boolean;
    permitName: string;
    description: string;
    validity: string;
    fee: string;
    processingTime: string;
    documentsRequired: string[];
    officialPortal: string;
  };
  foreignNationals: {
    required: boolean;
    permitName: string;
    description: string;
    validity: string;
    fee: string;
    processingTime: string;
    documentsRequired: string[];
    officialPortal: string;
  };
  entryCheckpoints: string[];
  proTips: string[];
}

export const permitsData: PermitInfo[] = [
  {
    stateId: "arunachal-pradesh",
    stateName: "Arunachal Pradesh",
    indianCitizens: {
      required: true,
      permitName: "Inner Line Permit (ILP)",
      description: "Mandatory for all domestic tourists entering Arunachal Pradesh under the Bengal Eastern Frontier Regulation of 1873.",
      validity: "15 days (extendable up to 30 days)",
      fee: "₹100 (Standard) / ₹450 (Instant / Tatkal)",
      processingTime: "Online: 24-48 hours (Standard) or Instant via e-ILP portal",
      documentsRequired: ["Passport-size photograph", "Valid photo ID (Aadhaar / Voter ID / Passport)", "Local contact / hotel address"],
      officialPortal: "https://arunachalilp.com",
    },
    foreignNationals: {
      required: true,
      permitName: "Protected Area Permit (PAP)",
      description: "Required for all foreign tourists. Minimum group size of 2 persons required (solo travel restricted in sensitive border areas).",
      validity: "30 days",
      fee: "$50 USD equivalent",
      processingTime: "5 - 7 working days via MHA or Resident Commissioner offices",
      documentsRequired: ["Valid Passport & Indian Visa", "Passport-size photographs", "Travel itinerary booked through registered tour operator"],
      officialPortal: "https://indianvisaonline.gov.in",
    },
    entryCheckpoints: ["Banderdewa", "Hollongi", "Gumto", "Bhalukpong", "Rupa", "Ruksin"],
    proTips: [
      "Apply online at least 3-4 days in advance to avoid waiting at border check gates.",
      "Carry at least 3-4 physical photocopies of your ILP and ID; checkposts collect physical copies.",
      "Visiting Tawang or Sela Pass requires checking road conditions early in the morning.",
    ],
  },
  {
    stateId: "nagaland",
    stateName: "Nagaland",
    indianCitizens: {
      required: true,
      permitName: "Inner Line Permit (ILP)",
      description: "Mandatory for domestic tourists visiting Nagaland. Dimapur is now also covered under ILP regulations.",
      validity: "15 days (extendable up to 30 days)",
      fee: "₹50 (Tourist)",
      processingTime: "Instant to 24 hours online",
      documentsRequired: ["Passport-size photo", "Aadhaar Card / Voter ID / Passport", "Emergency local contact"],
      officialPortal: "https://ilp.nagaland.gov.in",
    },
    foreignNationals: {
      required: false,
      permitName: "Registration with FRO only",
      description: "PAP requirement has been relaxed for most tourist areas in Nagaland. Foreign tourists must register at the nearest Foreigners Registration Officer (FRO) within 24 hours of arrival.",
      validity: "Duration of Indian Visa",
      fee: "Free",
      processingTime: "On arrival registration (30 mins)",
      documentsRequired: ["Valid Passport & Indian Visa", "Address of stay in Nagaland"],
      officialPortal: "https://nagalandtourism.nic.in",
    },
    entryCheckpoints: ["Dimapur Railway Station", "Dimapur Airport", "Khuzama (Manipur Border)", "Sonari"],
    proTips: [
      "If visiting during the Hornbill Festival (Dec 1-10), special fast-track on-arrival ILP counters operate at Dimapur.",
      "Keep digital and printed copies ready for entry at Khuzama gate when coming from Kohima.",
    ],
  },
  {
    stateId: "mizoram",
    stateName: "Mizoram",
    indianCitizens: {
      required: true,
      permitName: "Inner Line Permit (ILP)",
      description: "Required for all domestic visitors entering Mizoram. Available online or on-arrival at Lengpui Airport.",
      validity: "15 days (extendable)",
      fee: "₹120 (Standard online) / ₹200 (On-arrival at airport)",
      processingTime: "Instant at Lengpui Airport / 24 hours online",
      documentsRequired: ["Passport-size photo", "Valid photo identity proof (Aadhaar / Voter ID)", "Sponsor / Hotel confirmation"],
      officialPortal: "https://ilpmizoram.gov.in",
    },
    foreignNationals: {
      required: false,
      permitName: "FRO Registration Only",
      description: "No PAP required for most countries (except China, Pakistan, Afghanistan). Must register at the Superintendent of Police (CID) / FRO in Aizawl within 24 hours.",
      validity: "Duration of Visa",
      fee: "Free",
      processingTime: "Same day registration",
      documentsRequired: ["Passport & Indian Visa", "Hotel confirmation"],
      officialPortal: "https://mizoram.gov.in",
    },
    entryCheckpoints: ["Lengpui Airport (Aizawl)", "Vairengte (Assam border)", "Bairabi"],
    proTips: [
      "Flyers landing at Lengpui Airport (Aizawl) can get their ILP issued at the dedicated on-arrival counter in under 15 minutes.",
    ],
  },
  {
    stateId: "manipur",
    stateName: "Manipur",
    indianCitizens: {
      required: true,
      permitName: "Inner Line Permit (ILP)",
      description: "Implemented in 2020. Every domestic tourist entering Manipur must possess a valid ILP.",
      validity: "15 days (Tourist category)",
      fee: "₹100",
      processingTime: "Online: 24 hours / On-arrival counter at Bir Tikendrajit International Airport",
      documentsRequired: ["Passport photo", "Government ID (Aadhaar / Voter ID / Passport)"],
      officialPortal: "https://manipurilponline.mn.gov.in",
    },
    foreignNationals: {
      required: false,
      permitName: "FRO Registration",
      description: "PAP requirement relaxed for most foreign visitors. Registration required with the local Foreigners Registration Office (FRO) within 24 hours of arrival.",
      validity: "Duration of Visa",
      fee: "Free",
      processingTime: "Immediate upon arrival",
      documentsRequired: ["Passport & valid Visa", "Proof of accommodation"],
      officialPortal: "https://manipurtourism.gov.in",
    },
    entryCheckpoints: ["Imphal Airport", "Mao Gate (Nagaland border)", "Jiribam (Assam border)"],
    proTips: [
      "Temporary 15-day tourist ILPs are easily issued at Imphal Airport upon showing return flight tickets.",
    ],
  },
  {
    stateId: "sikkim",
    stateName: "Sikkim",
    indianCitizens: {
      required: false,
      permitName: "Special Border Area Permit only",
      description: "NO ILP required to visit standard destinations (Gangtok, Pelling, Namchi, Ravangla). Special permits are ONLY required for restricted border zones: Nathula Pass, Tsomgo Lake, Gurudongmar Lake, and Yumthang Valley.",
      validity: "Per trip (usually 1-3 days)",
      fee: "₹200 - ₹500 (Vehicle & environmental fee)",
      processingTime: "1 day prior via registered Sikkim tour operator or Gangtok Tourism Office",
      documentsRequired: ["Voter ID / Passport / Driving License (Note: Aadhaar is NOT accepted for Nathula Pass!)", "Passport photos"],
      officialPortal: "https://sikkimtourism.gov.in",
    },
    foreignNationals: {
      required: true,
      permitName: "Inner Line Permit (Restricted Area Permit - RAP)",
      description: "All foreigners require RAP to enter Sikkim. Can be obtained free of charge on arrival at entry checkpoints (Rangpo, Melli) for 30 days.",
      validity: "30 days (extendable by 30 days)",
      fee: "Free of cost",
      processingTime: "On-arrival: 15-20 minutes at Rangpo / Melli checkpoints",
      documentsRequired: ["Passport with valid Indian Visa", "2 passport photos"],
      officialPortal: "https://sikkimtourism.gov.in",
    },
    entryCheckpoints: ["Rangpo", "Melli"],
    proTips: [
      "IMPORTANT FOR NATHULA PASS: Indian authorities do NOT accept Aadhaar cards for Nathula/Gurudongmar border permits! Always carry physical Voter ID or Passport.",
      "Foreign tourists cannot visit Nathula Pass or Gurudongmar Lake due to international border security, but can visit Tsomgo Lake up to the designated point.",
    ],
  },
  {
    stateId: "assam",
    stateName: "Assam",
    indianCitizens: {
      required: false,
      permitName: "No Permit Required",
      description: "Assam is completely open for domestic travelers with no permit required for any region.",
      validity: "Unlimited",
      fee: "Free",
      processingTime: "Instant entry",
      documentsRequired: ["Standard Government ID for hotel check-ins"],
      officialPortal: "https://tourism.assam.gov.in",
    },
    foreignNationals: {
      required: false,
      permitName: "No Special Permit Required",
      description: "Foreign tourists only need a valid Indian Visa and Passport. No state-level permit required.",
      validity: "Duration of Visa",
      fee: "Free",
      processingTime: "None",
      documentsRequired: ["Valid Passport & Visa"],
      officialPortal: "https://tourism.assam.gov.in",
    },
    entryCheckpoints: ["Guwahati Airport (GAU)", "Guwahati Railway Station", "All state highways"],
    proTips: [
      "Guwahati is the primary logistics hub and transit springboard to obtain physical permits for Arunachal or Meghalaya.",
    ],
  },
  {
    stateId: "meghalaya",
    stateName: "Meghalaya",
    indianCitizens: {
      required: false,
      permitName: "Tourist Registration (Meghalaya Tourism App)",
      description: "NO ILP required! Meghalaya recommends tourists to generate a digital e-invite QR code via the Meghalaya Tourism App before entry to streamline hotel and attraction entries.",
      validity: "Trip duration",
      fee: "Free",
      processingTime: "Instant (5 minutes via app or web portal)",
      documentsRequired: ["Phone number", "Photo ID"],
      officialPortal: "https://meghalayatourism.in",
    },
    foreignNationals: {
      required: false,
      permitName: "Standard Tourist Registration",
      description: "No PAP or ILP required. Standard registration upon entry at hotel or through the Meghalaya Tourism App.",
      validity: "Duration of Visa",
      fee: "Free",
      processingTime: "Instant",
      documentsRequired: ["Valid Passport & Indian Visa"],
      officialPortal: "https://meghalayatourism.in",
    },
    entryCheckpoints: ["Byrnihat (Assam-Meghalaya border)", "Umiam Checkpost", "Dawki Border"],
    proTips: [
      "Download the Meghalaya Tourism App before entering Shillong for faster entry at attractions and tourist spots.",
      "Visiting the Dawki border and living root bridges does not require any special military permit.",
    ],
  },
  {
    stateId: "tripura",
    stateName: "Tripura",
    indianCitizens: {
      required: false,
      permitName: "No Permit Required",
      description: "Tripura is entirely permit-free for domestic Indian tourists.",
      validity: "Unlimited",
      fee: "Free",
      processingTime: "None",
      documentsRequired: ["Standard Government Photo ID for hotels"],
      officialPortal: "https://tripuratourism.gov.in",
    },
    foreignNationals: {
      required: false,
      permitName: "No Special Permit",
      description: "Open for foreign tourists with standard Indian Visa and Passport. Only hotel C-Form registration required.",
      validity: "Duration of Visa",
      fee: "Free",
      processingTime: "None",
      documentsRequired: ["Valid Passport & Visa"],
      officialPortal: "https://tripuratourism.gov.in",
    },
    entryCheckpoints: ["Maharaja Bir Bikram Airport (Agartala)", "Churaibari (Assam Border)", "Akhaura Integrated Check Post"],
    proTips: [
      "Visit the Akhaura Integrated Checkpost in Agartala at 5:00 PM for the India-Bangladesh Beating Retreat ceremony (no permit needed).",
    ],
  },
];
