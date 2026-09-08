import { model, models, Schema, type HydratedDocument, type Model, type Types } from "mongoose";

type Filter = 'All' | 'Frontend' | 'Full Stack' | 'Backend'

export interface ProjectDoc{
    title: string
    slug: string
    description: string
    image: string
    tech: string[]
    category: Exclude<Filter, 'All'>
    github: string
    demo: string
    featured?: boolean
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

const projectSchema = new Schema<ProjectDoc>({
    title: requiredString,
    slug: { type: String, trim: true },
    description: requiredString,
    image: requiredString,
    tech: nonEmptyStringArray,
    category: requiredString,
    github: requiredString,
    demo: requiredString,
    featured: { type: Boolean, default: false },
})

projectSchema.index({slug: 1}, {unique: true});

function toSlug(title: string): string {
    return title
        .normalize("NFKD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .trim()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/^-+|-+$/g, "");
}

projectSchema.pre("save", function (this: HydratedDocument<ProjectDoc>){
    if (this.isModified("title")){
        const slug = toSlug(this.title);

        if (!slug){
            throw new Error("Title must contain at least one URL-safe character.")
        }
        this.slug =slug;
    }
});

export const Project = (
    models.Project as Model<ProjectDoc> | undefined) ??
    model <ProjectDoc> ("Project", projectSchema);
