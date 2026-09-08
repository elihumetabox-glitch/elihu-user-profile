import {NextRequest, NextResponse} from "next/server";
import { Project, type ProjectDoc } from "@/database/projects.model";
import { Service, type ServicesModel } from "@/database/services.model";
import connectToDatabase from "@/lib/mongodb";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

interface EventResponse {
  service: ServicesModel | null;
  project: ProjectDoc | null;
}

function isValidSlug(slug: string): boolean {
  return /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug);
}

export async function GET(
  _request: NextRequest,
  { params }: RouteParams,
): Promise<NextResponse> {
  try {
    const { slug } = await params;

    if (!slug || !isValidSlug(slug)) {
      return NextResponse.json(
        {
          error:
            "Invalid slug. Use lowercase letters and numbers separated by single hyphens.",
        },
        { status: 400 },
      );
    }

    await connectToDatabase();

    // Query both collections so the endpoint supports project and service slugs.
    const [service, project] = await Promise.all([
      Service.findOne({ slug }).select("-_id -__v").lean<ServicesModel>().exec(),
      Project.findOne({ slug }).select("-_id -__v").lean<ProjectDoc>().exec(),
    ]);

    if (!service && !project) {
      return NextResponse.json(
        { error: `No service or project was found for slug "${slug}".` },
        { status: 404 },
      );
    }

    const response: EventResponse = { service, project };
    return NextResponse.json(response, { status: 200 });
  } catch (error: unknown) {
    console.error("Failed to fetch event by slug:", error);

    return NextResponse.json(
      { error: "An unexpected error occurred while fetching the event." },
      { status: 500 },
    );
  }
}