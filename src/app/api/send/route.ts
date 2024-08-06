import { NextRequest, NextResponse } from "next/server";

import { Prisma } from "@prisma/client";
import { z } from "zod";

// resend_lib
import resend from "@/lib/resend";

// Wailist email template
import { WaitlistEmailTemplate } from "@/components/waitlist.email";

// Type declaration
type WaitlistCreateInputTypes = Prisma.WaitlistCreateInput;

const waitlistSchema = z.object({
  email: z.string(),
});

export async function POST(request: NextRequest) {
  const body: WaitlistCreateInputTypes = await request.json();
  const parsedBody = waitlistSchema.parse(body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Quick Waitlist <onboarding@resend.dev>",
      to: [parsedBody.email],
      subject: "Welcome onboard!",
      react: WaitlistEmailTemplate({
        email: parsedBody.email as string,
      }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
