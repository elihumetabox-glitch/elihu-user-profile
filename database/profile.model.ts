import { model, models, Schema, type Model } from "mongoose";
import type { ProfileContent } from "@/lib/profile-constants";

export type ProfileDocument = ProfileContent & { key: string };

const profileSchema = new Schema<ProfileDocument>(
  {
    key: { type: String, required: true, unique: true },
    about: { type: Schema.Types.Mixed, required: true },
    education: { type: Schema.Types.Mixed, required: true },
    footer: { type: Schema.Types.Mixed, required: true },
    skills: { type: Schema.Types.Mixed, required: true },
  },
  { timestamps: true },
);

export const Profile =
  (models.Profile as Model<ProfileDocument> | undefined) ??
  model<ProfileDocument>("Profile", profileSchema);
