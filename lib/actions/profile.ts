import { Profile, type ProfileDocument } from "@/database/profile.model";
import connectToDatabase from "@/lib/mongodb";
import { profileConstants } from "@/lib/profile-constants";

export async function getProfile(): Promise<ProfileDocument> {
  await connectToDatabase();

  const existing = await Profile.findOne({ key: "main" })
    .select("-_id -__v")
    .lean<ProfileDocument>()
    .exec();

  if (existing) {
    const migrated = await Profile.findOneAndUpdate(
      { key: "main" },
      { $set: { "footer.brand": profileConstants.footer.brand } },
      { new: true },
    )
      .select("-_id -__v")
      .lean<ProfileDocument>()
      .exec();

    if (!migrated) {
      throw new Error("The profile exists but could not be updated.");
    }

    return migrated;
  }

  const created = await Profile.create({ key: "main", ...profileConstants });
  const result = await Profile.findById(created._id)
    .select("-_id -__v")
    .lean<ProfileDocument>()
    .exec();

  if (!result) {
    throw new Error("The profile was created but could not be read back.");
  }

  return result;
}
