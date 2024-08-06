import React from "react";

// Prisma Client
import { Prisma } from "@prisma/client";

// @lib
import prisma from "@/lib/prisma.db";
import Kamado from "@/templates/Kamado";

export default async function Home() {
  const waitlists: Prisma.WaitlistCreateInput[] =
    await prisma.waitlist.findMany();

  // Count
  const total_waitlisted = await prisma.waitlist.count();

  console.log(waitlists);
  console.log(total_waitlisted);

  return (
    <main className="w-full h-screen">
      <Kamado />
    </main>
  );
}
