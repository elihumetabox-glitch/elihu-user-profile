import { model, models, Schema, type HydratedDocument, type Model } from "mongoose";

export interface ServicesModel {
    icon: string
    title: string
    slug: string
    description: string
    items: string[]
    accent: string
    iconBg: string
}

const requiredString = {
    type: String,
    required: true,
    trim: true,
    validate: {
        validator: (value: string): boolean => value.length > 0,
        message: "This field cannot be empty.",
    },
} as const;

const nonEmptyStringArray = {
    type: [String],
    required: true,
    validate: {
        validator: (values: string[]): boolean =>
            values.length > 0 && values.every((value) => value.trim().length > 0),
        message: "Provide at least one non-empty value.",
    },
} as const;

const serviceSchema = new Schema<ServicesModel>({
    icon: requiredString,
    title: requiredString,
    slug: { type: String, trim: true },
    description: requiredString,
    items: nonEmptyStringArray,
    accent: requiredString,
    iconBg: requiredString,
})
serviceSchema.index({slug: 1}, {unique: true});

function toSlug(title: string): string {
    return title
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

serviceSchema.pre("save", function (this: HydratedDocument<ServicesModel>){
    if (this.isModified("title")){
        const slug = toSlug(this.title);

        if (!slug){
            throw new Error("Title must contain at least one URL-safe character.")
        }
        this.slug =slug;
    }
});

export const Service = (
        models.Service as Model<ServicesModel> | undefined) ??
    model<ServicesModel>("Service", serviceSchema);
