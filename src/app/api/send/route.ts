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
  fullName: z.string().optional(),
});

export async function POST(response: Response) {
  const body: WaitlistCreateInputTypes = await response.json();
  const parsedBody = waitlistSchema.parse(body);

  try {
    const { data, error } = await resend.emails.send({
      from: "Quick Waitlist <onboarding@resend.dev>",
      to: [parsedBody.email],
      subject: "Welcome onboard!",
      react: WaitlistEmailTemplate({
        email: parsedBody.email as string,
        fullName: parsedBody.fullName as string,
      }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
