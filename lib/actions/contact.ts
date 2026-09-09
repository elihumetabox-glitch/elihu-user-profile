'use server';

import connectToDatabase from "@/lib/mongodb";
import { Contacts } from "@/database/contact.model";
import nodemailer from "nodemailer";

interface ContactRequest {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const sendEmail = async (data: ContactRequest) => {
  try {
    await connectToDatabase();
    
    const contact = await Contacts.create({
      name: data.name,
      email: data.email,
      subject: data.subject,
      message: data.message,
      emailSent: false,
    });

    const hasSmtpConfig = !!(
      process.env.SMTP_HOST &&
      process.env.SMTP_PORT &&
      process.env.SMTP_USER &&
      process.env.SMTP_PASS &&
      process.env.CONTACT_RECIPIENT_EMAIL
    );

    if (hasSmtpConfig) {
      const transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: parseInt(process.env.SMTP_PORT || "587"),
        secure: process.env.SMTP_SECURE === "true",
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.CONTACT_RECIPIENT_EMAIL,
        subject: `New Contact Form: ${data.subject}`,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Subject:</strong> ${data.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${data.message.replace(/\n/g, '<br />')}</p>
        `,
        replyTo: data.email,
      });

      await Contacts.updateOne({ _id: contact._id }, { emailSent: true });
    }

    return { success: true };
  } catch (e) {
    console.error("sending email failed", e);
    return {
      success: false,
      error: e instanceof Error ? e.message : "Failed to send",
    };
  }
};