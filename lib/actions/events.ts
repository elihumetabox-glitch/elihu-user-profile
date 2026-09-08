"use server";

import { v2 as cloudinary, type UploadApiResponse } from "cloudinary";
import mongoose from "mongoose";

import { Project, type ProjectDoc } from "@/database/projects.model";
import { Service, type ServicesModel } from "@/database/services.model";
import connectToDatabase from "@/lib/mongodb";
import { pEvent } from "@/lib/project-constants";
import { sEvents } from "@/lib/services-constants";

type ProjectCategory = "Frontend" | "Full Stack" | "Backend";

class EventInputError extends Error {}

function isMongoDuplicateKey(error: unknown): boolean {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000
  );
}

function getRequiredText(formData: FormData, field: string): string {
  const value = formData.get(field);
  return typeof value === "string" ? value.trim() : "";
}

function isProjectCategory(value: string): value is ProjectCategory {
  return value === "Frontend" || value === "Full Stack" || value === "Backend";
}

function parseJsonArray(formData: FormData, field: string): string[] | undefined {
  const value = formData.get(field);

  if (value === null || value === "") {
    return undefined;
  }

  if (typeof value !== "string") {
    throw new Error(`${field} must be a JSON array.`);
  }

  const parsed: unknown = JSON.parse(value);

  if (
    !Array.isArray(parsed) ||
    !parsed.every((item): item is string => typeof item === "string" && item.trim() !== "")
  ) {
    throw new Error(`${field} must be a non-empty array of strings.`);
  }

  return parsed.map((item) => item.trim());
}

function configureCloudinary(): void {
  const cloudName = process.env.CLOUDINARY_CLOUD_NAME;
  const apiKey = process.env.CLOUDINARY_API_KEY;
  const apiSecret = process.env.CLOUDINARY_API_SECRET;

  if (!cloudName || !apiKey || !apiSecret) {
    throw new Error("Cloudinary environment variables are not configured.");
  }

  cloudinary.config({ cloud_name: cloudName, api_key: apiKey, api_secret: apiSecret });
}

async function uploadImage(file: File): Promise<string> {
  if (!file.type.startsWith("image/") || file.size === 0) {
    throw new Error("image must be a non-empty image file.");
  }

  configureCloudinary();
  const buffer = Buffer.from(await file.arrayBuffer());

  const result = await new Promise<UploadApiResponse>((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { resource_type: "image", folder: "DevEvent" },
      (error, uploadResult) => {
        if (error || !uploadResult) {
          reject(error ?? new Error("Image upload failed."));
          return;
        }
        resolve(uploadResult);
      },
    );

    stream.end(buffer);
  });

  return result.secure_url;
}

export async function createService(formData: FormData): Promise<ServicesModel> {
  await connectToDatabase();

  const title = getRequiredText(formData, "title");
  const description = getRequiredText(formData, "description");
  const icon = getRequiredText(formData, "icon");
  const items = parseJsonArray(formData, "items");
  const accent = getRequiredText(formData, "accent");
  const iconBg = getRequiredText(formData, "iconBg");

  if (!title || !description) {
    throw new EventInputError("title and description are required.");
  }

  if (!icon || !items || !accent || !iconBg) {
    throw new EventInputError("Services require icon, items, accent, and iconBg.");
  }

  const service = await Service.create({
    title,
    description,
    icon,
    items,
    accent,
    iconBg,
  });

  const result = await Service.findById(service._id)
    .select("-_id -__v")
    .lean<ServicesModel>()
    .exec();

  if (!result) {
    throw new Error("The service was created but could not be read back.");
  }

  return result;
}

export async function createProject(formData: FormData): Promise<ProjectDoc> {
  await connectToDatabase();

  const title = getRequiredText(formData, "title");
  const description = getRequiredText(formData, "description");
  const tech = parseJsonArray(formData, "tech");
  const category = getRequiredText(formData, "category");
  const github = getRequiredText(formData, "github");
  const demo = getRequiredText(formData, "demo");
  const image = formData.get("image");

  if (!title || !description) {
    throw new EventInputError("title and description are required.");
  }

  if (!(image instanceof File)) {
    throw new EventInputError("image is required for projects.");
  }

  if (!tech || !isProjectCategory(category) || !github || !demo) {
    throw new EventInputError("Projects require tech, a valid category, github, and demo.");
  }

  const imageUrl = await uploadImage(image);
  const project = await Project.create({
    title,
    description,
    image: imageUrl,
    tech,
    category,
    github,
    demo,
    featured: getRequiredText(formData, "featured").toLowerCase() === "true",
  });

  const result = await Project.findById(project._id)
    .select("-_id -__v")
    .lean<ProjectDoc>()
    .exec();

  if (!result) {
    throw new Error("The project was created but could not be read back.");
  }

  return result;
}

export async function seedDefaultEvents(): Promise<void> {
  await connectToDatabase();

  await Promise.all([
    ...pEvent.map(async (project) => {
      const existingProject = await Project.findOne({ slug: project.slug })
        .select("image")
        .lean<{ image: string }>()
        .exec();

      if (existingProject) {
        if (existingProject.image.startsWith("../")) {
          await Project.updateOne(
            { slug: project.slug },
            { $set: { image: project.image.replace("../", "/") } },
          ).exec();
        }
        return;
      }

      try {
        if (!isProjectCategory(project.category)) {
          throw new Error(`Invalid project category for "${project.slug}".`);
        }

        const seededProject: ProjectDoc = {
          ...project,
          category: project.category,
          image: project.image.startsWith("../")
            ? project.image.replace("../", "/")
            : project.image || "/images/profile.jpeg",
          demo: project.demo || project.github,
        };

        await Project.create(seededProject);
      } catch (error) {
        if (!isMongoDuplicateKey(error)) {
          throw error;
        }
      }
    }),
    ...sEvents.map(async (service) => {
      if (await Service.exists({ slug: service.slug })) {
        return;
      }

      try {
        await Service.create({
          title: service.title,
          slug: service.slug,
          description: service.description,
          icon: service.iconName,
          items: service.items,
          accent: service.accent,
          iconBg: service.iconBg,
        });
      } catch (error) {
        if (!isMongoDuplicateKey(error)) {
          throw error;
        }
      }
    }),
  ]);
}

export async function isDuplicateKeyError(error: unknown): Promise<boolean> {
  return (
    typeof error === "object" &&
    error !== null &&
    "code" in error &&
    error.code === 11000
  );
}

export async function isValidationError(error: unknown): Promise<boolean> {
  return error instanceof SyntaxError || error instanceof mongoose.Error.ValidationError;
}

export async function isInputError(error: unknown): Promise<boolean> {
  return error instanceof EventInputError;
}