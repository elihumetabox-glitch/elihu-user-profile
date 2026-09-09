import {model, models, Schema, type Model} from "mongoose";

export interface ContactDocument {
    name: string;
    email: string;
    subject: string;
    message: string;
    emailSent: boolean;
    created_at: Date;
    updated_at: Date;
}

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const contactSchema = new Schema<ContactDocument>(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
            validate: {
                validator: (value: string): boolean => emailPattern.test(value),
                message: "Provide a valid email address.",
            },
        },
        subject: {
            type: String,
            required: true,
            trim: true,
        },
        message: {
            type: String,
            required: true,
            trim: true,
        },
        emailSent: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

contactSchema.index({ email: 1, created_at: -1 });

export const Contacts =
    (models.Contacts as Model<ContactDocument> | undefined) ??
    model<ContactDocument>("Contacts", contactSchema)