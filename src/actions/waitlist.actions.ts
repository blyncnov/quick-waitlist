import { Prisma } from "@prisma/client";
import { z } from "zod";

// Prisma_db
import prisma from "@/lib/prisma.db";

// Type declaration
type WaitlistCreateInputTypes = Prisma.WaitlistCreateInput;

const waitlistSchema = z.object({
  email: z.string().email(),
  fullName: z.string().optional(),
});

// TODO:  JOIN WAITLIST ACTION
export const joinWaitlist = async (prevState: any, formData: FormData) => {
  try {
    // Safe Parse Form
    const validatedFields = waitlistSchema.safeParse({
      email: formData.get("email"),
      fullName: formData.get("fullName"),
    });

    // Check if not validated
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Validated Fields
    const { email, fullName } = validatedFields.data;

    // Create Waitlist
    const newWaitlist: WaitlistCreateInputTypes = await prisma.waitlist.create({
      data: {
        email: email,
        fullName: fullName,
      },
    });

    return {
      status: "ok",
      message: "Success",
      data: newWaitlist,
    };
  } catch (error) {
    return {
      status: "error",
      message: error,
      data: null,
    };
  }
};
