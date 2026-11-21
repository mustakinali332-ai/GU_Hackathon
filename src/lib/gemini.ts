import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

export async function generateTripPlan(params: {
  states: string[];
  days: number;
  budget: number;
  interests: string[];
  travelStyle: string;
}) {
  const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });

  const prompt = `You are TravelMateNE, an expert travel planner for North East India. Create a detailed, practical travel itinerary based on these preferences:

**Selected States:** ${params.states.join(", ")}
**Duration:** ${params.days} days
**Budget:** ₹${params.budget.toLocaleString()}
**Interests:** ${params.interests.join(", ")}
**Travel Style:** ${params.travelStyle}

Please provide the response in the following JSON format (respond ONLY with valid JSON, no markdown):
{
  "title": "A catchy trip title",
  "summary": "2-3 sentence summary of the trip",
  "itinerary": [
    {
      "day": 1,
      "title": "Day title",
      "location": "City/Town name",
      "activities": [
        {
          "time": "Morning/Afternoon/Evening",
          "activity": "What to do",
          "description": "Brief description",
          "estimatedCost": "₹XXX"
        }
      ],
      "accommodation": "Suggested stay with price range",
      "meals": "Food recommendations",
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
  
  // Parse JSON from the response
  try {
    const cleanedText = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(cleanedText);
  } catch {
    // If JSON parsing fails, return a structured error
    return {
      title: "Your Northeast India Adventure",
      summary: text.substring(0, 200),
      itinerary: [],
      budgetBreakdown: {},
      packingTips: ["Pack light layers", "Carry rain gear", "Comfortable walking shoes"],
      bestTimeToVisit: "October to May",
      importantNotes: ["Check ILP/PAP requirements for restricted states"],
    };
  }
}
