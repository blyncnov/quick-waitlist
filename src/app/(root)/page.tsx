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

// <main className="w-full p-6">
//   <h1>Hello Waitlist - {total_waitlisted}</h1>
//   <br />
//   <h2>All Users on Waitlist</h2>
//   <div>
//     {waitlists ? (
//       waitlists.map((user) => {
//         return <li key={user.email}>{user.email}</li>;
//       })
//     ) : (
//       <>
//         <p>Loading ...</p>
//       </>
//     )}
//   </div>
// </main>
