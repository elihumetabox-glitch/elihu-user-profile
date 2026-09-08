import { NextResponse } from "next/server";
import { getProfile } from "@/lib/actions/profile";

export async function GET(): Promise<NextResponse> {
  try {
    return NextResponse.json({ profile: await getProfile() });
  } catch (error: unknown) {
    console.error("GET /api/profile error:", error);
    return NextResponse.json(
      { error: error instanceof Error ? error.message : "Unable to load profile." },
      { status: 500 },
    );
  }
}
