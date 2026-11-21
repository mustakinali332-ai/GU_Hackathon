import { NextRequest, NextResponse } from "next/server";
import { generateTripPlan } from "@/lib/gemini";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { states, days, budget, interests, travelStyle } = body;

    if (!states || !days || !budget) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    const plan = await generateTripPlan({ states, days, budget, interests, travelStyle });
    return NextResponse.json(plan);
  } catch (error) {
    console.error("Trip planning error:", error);
    return NextResponse.json(
      { error: "Failed to generate trip plan. Please try again." },
      { status: 500 }
    );
  }
}
