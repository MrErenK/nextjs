import { NextResponse } from "next/server";
import formData from "form-data";
import Mailgun from "mailgun.js";

const mailgun = new Mailgun(formData);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  const mg = mailgun.client({
    username: "api",
    key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
  });

  try {
    const response = await mg.messages.create(
      process.env.MAILGUN_DOMAIN || "your-domain.mailgun.org",
      {
        from: `${name} <${process.env.MAILGUN_FROM_EMAIL}>`,
        to: [process.env.MAILGUN_TO_EMAIL ?? ""],
        subject: `New message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
        html: `<h3>New message from ${name}</h3>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Message:</strong> ${message}</p>`,
      },
    );

    console.log("Email sent successfully:", response);
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { message: "Error sending email" },
      { status: 500 },
    );
  }
}
