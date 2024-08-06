"use server";

import { Prisma } from "@prisma/client";
import { z } from "zod";

// Prisma_db
import prisma from "@/lib/prisma.db";

// Type declaration
type WaitlistCreateInputTypes = Prisma.WaitlistCreateInput;
// const initialState = joinWaitlistInitialState;

const waitlistSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address" }),
});

// TODO:  JOIN WAITLIST ACTION
export const joinWaitlist = async (_prevState: any, formData: FormData) => {
  try {
    // Safe Parse Form
    const validatedFields = waitlistSchema.safeParse({
      email: formData.get("email_address"),
    });

    // Check if not validated
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Validated Fields
    const { email } = validatedFields.data;

    // Create Waitlist
    const IsUserAlreadyJoinedWaitlist: WaitlistCreateInputTypes | null =
      await prisma.waitlist.findUnique({
        where: {
          email: email as string,
        },
      });

    if (IsUserAlreadyJoinedWaitlist && IsUserAlreadyJoinedWaitlist !== null) {
      return {
        status: "error",
        message: "You are already on the waitlist!",
        data: null,
      };
    }

    // Create Waitlist
    const newWaitlist: WaitlistCreateInputTypes = await prisma.waitlist.create({
      data: {
        email: email as string,
      },
    });

    return {
      status: "ok",
      message: "Success",
      data: newWaitlist,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Internal Error! Sorry its Our fault");
  }
};
