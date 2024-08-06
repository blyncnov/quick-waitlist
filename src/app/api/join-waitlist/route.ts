import { Prisma } from "@prisma/client";
import { NextResponse } from "next/server";
import { z } from "zod";

// Prisma_db
import prisma from "@/lib/prisma.db";

// Type declaration
type WaitlistCreateInputTypes = Prisma.WaitlistCreateInput;

const waitlistSchema = z.object({
  email: z.string(),
  fullName: z.string().optional(),
});

export async function POST(request: Request) {
  try {
    const body: WaitlistCreateInputTypes = await request.json();
    const parsedBody = waitlistSchema.parse(body);

    //TODO: Validate Body Using Zod

    //TODO: Create Waitlist
    const newWaitlist: WaitlistCreateInputTypes = await prisma.waitlist.create({
      data: {
        email: parsedBody.email,
        fullName: parsedBody.fullName,
      },
    });

    return NextResponse.json(
      {
        status: "ok",
        message: "Success",
        data: newWaitlist,
      },
      {
        status: 200,
      }
    );
  } catch (error) {
    return NextResponse.json(
      {
        status: "error",
        message: error,
        data: null,
      },
      {
        status: 500,
      }
    );
  }
}
