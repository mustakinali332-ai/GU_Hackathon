import { GoogleGenerativeAI } from "@google/generative-ai";

const API_KEY = process.env.GEMINI_API_KEY;

export async function generateTripPlan(params: {
  states: string[];
  days: number;
  budget: number;
  interests: string[];
  travelStyle: string;
}) {
  try {
    if (!API_KEY) {
      return generateCuratedFallback(params);
    }
    const genAI = new GoogleGenerativeAI(API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const prompt = `You are TravelMateNE, an expert travel planner for North East India. Create a detailed, practical travel itinerary based on these preferences:

**Selected States:** ${params.states.join(", ")}
**Duration:** ${params.days} days
**Budget:** ₹${params.budget.toLocaleString()}
**Interests:** ${params.interests.join(", ")}
**Travel Style:** ${params.travelStyle}

IMPORTANT: Evenly distribute the days across ALL selected states: ${params.states.join(", ")}.

Please provide the response in the following JSON format (respond ONLY with valid JSON, no markdown):
{
  "title": "A catchy trip title",
  "summary": "2-3 sentence summary of the trip",
  "itinerary": [
    {
      "day": 1,
      "title": "Day title",
      "location": "City, State",
      "activities": [
        {
          "time": "Morning/Afternoon/Evening",
          "activity": "What to do",
          "description": "Brief description",
          "estimatedCost": "₹XXX"
        }
      ],
      "accommodation": "Suggested stay with price range",
      "meals": "Authentic regional food recommendations",
      "tips": "Useful tip for this day"
    }
  ],
  "budgetBreakdown": {
    "transport": "₹XXX",
    "accommodation": "₹XXX",
    "food": "₹XXX",
    "activities": "₹XXX",
    "miscellaneous": "₹XXX",
    "total": "₹XXX"
  },
  "packingTips": ["tip1", "tip2", "tip3", "tip4", "tip5"],
  "bestTimeToVisit": "Recommended months",
  "importantNotes": ["note1", "note2", "note3"]
}

Make the itinerary realistic, with actual place names from Northeast India. Keep the total budget within ₹${params.budget.toLocaleString()}. Include local food recommendations and cultural experiences.`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    const cleanedText = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    console.warn("Gemini API call failed, generating curated itinerary fallback:", error);
    return generateCuratedFallback(params);
  }
}

function generateCuratedFallback(params: {
  states: string[];
  days: number;
  budget: number;
  interests: string[];
  travelStyle: string;
}) {
  const selectedStateList = params.states.length > 0 ? params.states : ["Assam", "Meghalaya"];
  const perDayBudget = Math.round(params.budget / params.days);

  const stateData: Record<
    string,
    {
      locations: string[];
      food: string;
      stays: string;
      tips: string;
    }
  > = {
    Assam: {
      locations: ["Guwahati & Brahmaputra Sunset Cruise", "Kaziranga National Park Rhino Safari", "Majuli Island Vaishnavite Satras", "Sivasagar Ahom Palaces"],
      food: "Traditional Assamese Thali with Masor Tenga (tangy sour fish), Khar, and fragrant Joha rice",
      stays: "River-view eco-resort or cozy tea estate bungalow",
      tips: "Book early morning Kaziranga elephant safaris 24 hours in advance at Kohora range.",
    },
    Meghalaya: {
      locations: ["Shillong & Umiam Lake", "Cherrapunji & Nohkalikai Canyon Falls", "Nongriat Double Decker Living Root Bridge", "Dawki Crystal Umngot River & Mawlynnong"],
      food: "Authentic Khasi Jadoh with Dohneiiong (succulent pork in black sesame) and steamed Tungrymbai",
      stays: "Pine forest cottage in Shillong or rural homestay in Nongriat",
      tips: "Wear sturdy trekking shoes for the 3,500 stairs down to the double-decker root bridge.",
    },
    "Arunachal Pradesh": {
      locations: ["Bomdila Orchards & Dirang Dzong", "Sela Pass (13,700 ft) & Paradise Lake", "Tawang Monastery & War Memorial", "Ziro Valley Pine Groves & Apatani Village"],
      food: "Thukpa noodle broth, Momos, and Lukter (dried meat with Raja Mircha and bamboo shoots)",
      stays: "Mountain view lodge near Tawang Monastery or traditional Apatani homestay",
      tips: "Ensure you carry physical printouts of your Arunachal e-ILP at the Bhalukpong check gate.",
    },
    Nagaland: {
      locations: ["Kohima WWII War Cemetery", "Kisama Heritage Village & Hornbill Grounds", "Dzükou Valley High Alpine Trek", "Khonoma Asia's First Green Village"],
      food: "Smoked pork cooked with fermented bamboo shoots, spicy Axone chutney, and organic red rice",
      stays: "Heritage homestay in Khonoma or camp tent at Dzükou Valley base",
      tips: "Respect village elders when entering morung community halls in traditional villages.",
    },
    Sikkim: {
      locations: ["Gangtok MG Marg & Rumtek Monastery", "Tsomgo Glacial Lake & Baba Harbhajan Mandir", "Ravangla Tathagata Tsal (Buddha Park)", "Pelling Kanchenjunga Sunrise Point"],
      food: "Sikkimese Sel Roti with spicy aloo dum, steaming hot Tibetan Thukpa, and fermented Gundruk soup",
      stays: "Boutique hotel with Kanchenjunga view or organic farm homestay in Pelling",
      tips: "Always carry your physical Voter ID or Passport for border permits to Nathula / Tsomgo.",
    },
    Manipur: {
      locations: ["Imphal Kangla Fort & Moats", "Loktak Lake & Floating Keibul Lamjao Park", "Ima Keithel 500-Year All-Women Market", "Andro Ancient Pottery Village"],
      food: "Kangshoi herbal vegetable stew, fresh Singju lotus salad, and spicy smoked fish Eromba",
      stays: "Floating wooden cottage on Loktak Lake or comfortable city stay in Imphal",
      tips: "Take an early morning boat ride on Loktak Lake to witness fishermen on circular phumdis.",
    },
    Mizoram: {
      locations: ["Aizawl City & Durtlang Hills", "Reiek Heritage Peak Sunrise Trek", "Vantawng Falls & Thenzawl Handlooms", "Tam Dil Serene Highland Lake"],
      food: "Authentic Mizo Bai (steamed organic greens with bamboo shoots) and sweet Koat Pitha fritters",
      stays: "Scenic cliffside guesthouse in Aizawl or tourism lodge in Thenzawl",
      tips: "Lengpui airport issues on-arrival tourist ILPs at the counter in under 15 minutes.",
    },
    Tripura: {
      locations: ["Agartala Ujjayanta Royal Palace", "Neermahal Water Palace on Rudrasagar Lake", "Unakoti Colossal Ancient Rock Carvings", "Jampui Hills Orange Country"],
      food: "Mui Borok with aromatic Berma (fermented fish stew), roasted bamboo shoots, and Kosoi Bwtwi",
      stays: "Lake-facing resort overlooking Neermahal or heritage hotel in Agartala",
      tips: "Watch the colorful evening illumination of Neermahal palace from the lake boat.",
    },
  };

  const itineraryDays = [];
  const stateCount = selectedStateList.length;

  for (let d = 1; d <= params.days; d++) {
    // Distribute days across all selected states evenly!
    const stateIndex = (d - 1) % stateCount;
    const currentState = selectedStateList[stateIndex];
    const data = stateData[currentState] || stateData["Assam"];

    const stateDayNumber = Math.floor((d - 1) / stateCount);
    const locIndex = stateDayNumber % data.locations.length;
    const locName = data.locations[locIndex];

    itineraryDays.push({
      day: d,
      title: `${locName} (${currentState})`,
      location: `${locName}, ${currentState}`,
      activities: [
        {
          time: "Morning",
          activity: `Guided exploration of ${locName}`,
          description: `Begin the morning taking in the breathtaking landscapes, crisp mountain air, and scenic cultural highlights of ${currentState}.`,
          estimatedCost: `₹${Math.round(perDayBudget * 0.2)}`,
        },
        {
          time: "Afternoon",
          activity: `Immersive Cultural & Heritage Walk`,
          description: `Discover indigenous tribal traditions, architectural marvels, and unique local craftsmanship with certified regional guides.`,
          estimatedCost: `₹${Math.round(perDayBudget * 0.25)}`,
        },
        {
          time: "Evening",
          activity: `Local Street Walk & Cultural Dining`,
          description: `Stroll through bustling neighborhood bazaars, sip fresh local teas, and savor an authentic evening dinner.`,
          estimatedCost: `₹${Math.round(perDayBudget * 0.2)}`,
        },
      ],
      accommodation: `${params.travelStyle} recommended: ${data.stays} (~₹${Math.round(perDayBudget * 0.35)}/night)`,
      meals: `Taste ${data.food}.`,
      tips: data.tips,
    });
  }

  return {
    title: `${params.days}-Day Epic Northeast Tour: ${selectedStateList.join(" & ")}`,
    summary: `A carefully paced ${params.days}-day ${params.travelStyle.toLowerCase()} expedition crafted for travelers interested in ${params.interests.join(", ")}, traversing the captivating highlights of ${selectedStateList.join(" and ")}.`,
    itinerary: itineraryDays,
    budgetBreakdown: {
      transport: `₹${Math.round(params.budget * 0.28).toLocaleString()}`,
      accommodation: `₹${Math.round(params.budget * 0.36).toLocaleString()}`,
      food: `₹${Math.round(params.budget * 0.2).toLocaleString()}`,
      activities: `₹${Math.round(params.budget * 0.11).toLocaleString()}`,
      miscellaneous: `₹${Math.round(params.budget * 0.05).toLocaleString()}`,
      total: `₹${params.budget.toLocaleString()}`,
    },
    packingTips: [
      "Light waterproof / windcheater jacket (mountain showers are frequent)",
      "Sturdy trekking sneakers with strong anti-slip sole",
      "Liquid cash (small denominations for remote tribal market stalls)",
      "High-capacity power bank & offline maps downloaded on your phone",
      "Physical government photo IDs (Passport or Voter ID) for inner line checkpoints",
    ],
    bestTimeToVisit: "October to May (Pleasant weather, festive season, clear mountain views)",
    importantNotes: [
      "Check State Inner Line Permit (ILP) status on our Permits tab before traveling",
      "Respect sacred tribal groves, monoliths, and local community customs",
      "Avoid single-use plastics to preserve the pristine ecology of the Northeast",
    ],
  };
}
