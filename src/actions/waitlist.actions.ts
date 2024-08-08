"use server";

import { Prisma } from "@prisma/client";
import { z } from "zod";

// Prisma_db
import prisma from "@/lib/prisma.db";

// Type declaration
type WaitlistCreateInputTypes = Prisma.WaitlistCreateInput;

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

    // Check if the fields is not validated
    if (!validatedFields.success) {
      return {
        errors: validatedFields.error.flatten().fieldErrors,
      };
    }

    // Validated Fields
    const { email } = validatedFields.data;

    // Check if the user with email already on the waitlist
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

    // Add The New user to the Waitlist
    const newWaitlist: WaitlistCreateInputTypes = await prisma.waitlist.create({
      data: {
        email: email as string,
      },
    });

    if (newWaitlist && newWaitlist.email) {
      // Send waitlist email to the new user!
      const emailResponse = await fetch("api/send", {
        method: "POST",
        headers: {
          contentType: "application/json",
        },
        body: JSON.stringify({
          email: newWaitlist.email,
        }),
      });

      const emailJson = await emailResponse.json();
      console.log(emailJson.id);
    }

    // Success - Response
    return {
      status: "ok",
      message: "Welcome onboard! 😎",
      data: newWaitlist,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Internal Error! Sorry its Our fault");
  }
};
