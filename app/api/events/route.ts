import { NextRequest, NextResponse } from "next/server";

import { Project, type ProjectDoc } from "@/database/projects.model";
import { Service, type ServicesModel } from "@/database/services.model";
import connectToDatabase from "@/lib/mongodb";
import {
  createProject,
  createService,
  isDuplicateKeyError,
  isInputError,
  isValidationError,
  seedDefaultEvents,
} from "@/lib/actions/events";

interface EventsResponse {
  services: ServicesModel[];
  projects: ProjectDoc[];
}

export async function GET(): Promise<NextResponse> {
  try {
    await connectToDatabase();
    await seedDefaultEvents();

    const [services, projects] = await Promise.all([
      Service.find().select("-_id -__v").lean<ServicesModel[]>().exec(),
      Project.find().select("-_id -__v").lean<ProjectDoc[]>().exec(),
    ]);

    const events: EventsResponse = { services, projects };

    return NextResponse.json(
      { message: "Events fetched successfully.", events },
      { status: 200 },
    );
  } catch (error: unknown) {
    const errorMessage =
      error instanceof Error
        ? error.message
        : "An unexpected server error occurred.";

    console.error("GET /api/events error:", error);

    return NextResponse.json(
      { message: "Event fetching failed.", error: errorMessage },
      { status: 500 },
    );
  }
}

export async function POST(request: NextRequest): Promise<NextResponse> {
  try {
    const formData = await request.formData();
    const typeValue = formData.get("type");

    if (typeValue !== "project" && typeValue !== "service") {
      return NextResponse.json(
        { message: 'The "type" field must be either "project" or "service".' },
        { status: 400 },
      );
    }

    const event =
      typeValue === "project"
        ? await createProject(formData)
        : await createService(formData);

    return NextResponse.json(
      {
        message: `${typeValue === "project" ? "Project" : "Service"} created successfully.`,
        event,
      },
      { status: 201 },
    );
  } catch (error: unknown) {
    console.error("POST /api/events error:", error);

    if (await isValidationError(error) || await isInputError(error)) {
      return NextResponse.json(
        { message: error instanceof Error ? error.message : "Invalid event data." },
        { status: 400 },
      );
    }

    if (await isDuplicateKeyError(error)) {
      return NextResponse.json(
        { message: "An event with this slug already exists." },
        { status: 409 },
      );
    }

    return NextResponse.json(
      {
        message: "Event creation failed.",
        error: error instanceof Error ? error.message : "Unexpected server error.",
      },
      { status: 500 },
    );
  }
}