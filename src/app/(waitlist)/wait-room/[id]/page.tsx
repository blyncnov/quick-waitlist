import React from "react";

// @lib
import prisma from "@/lib/prisma.db";

// Components
import WaitlistCard from "../_components/waitlistCard";

const WaitListFloor = async ({ params }: { params: { id: number } }) => {
  const user = await prisma.waitlist.findUnique({
    where: { id: Number(params.id) },
  });

  return (
    <div className="relative max-w-6xl mx-auto py-4 px-6 flex flex-col gap-5 justify-center text-center items-center">
      {user ? (
        <div className="w-full flex justify-center items-center">
          <WaitlistCard user={user} />
        </div>
      ) : (
        <div className="w-full flex justify-center items-center">
          <h2>Loading...</h2>
        </div>
      )}
    </div>
  );
};

export default WaitListFloor;
