import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(200),
  phone: z.string().trim().min(7).max(40),
  company: z.string().trim().min(2).max(160),
  interest: z.enum(["erp", "excel", "digital", "unsure"]),
  message: z.string().trim().max(4000).optional().default(""),
});

const interestLabels: Record<string, string> = {
  erp: "ERP Consulting",
  excel: "Excel Automation",
  digital: "Digital Products",
  unsure: "Not sure yet",
};

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL ?? "hello@edanam.com";
  const from = process.env.CONTACT_FROM_EMAIL ?? "Edanam <onboarding@resend.dev>";

  if (!apiKey) {
    return NextResponse.json(
      { error: "Email is not configured. Missing RESEND_API_KEY." },
      { status: 500 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON body." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid form data." }, { status: 400 });
  }

  const data = parsed.data;
  const resend = new Resend(apiKey);

  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: data.email,
    subject: `New consultation request — ${data.company}`,
    text: [
      "New discovery call request from edanam.com",
      "",
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Phone: ${data.phone}`,
      `Company: ${data.company}`,
      `Interest: ${interestLabels[data.interest] ?? data.interest}`,
      "",
      "Message:",
      data.message || "(none)",
    ].join("\n"),
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json({ error: error.message }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
