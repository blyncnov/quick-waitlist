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
    <div className="max-w-6xl mx-auto p-6 flex flex-col gap-5 justify-center text-center items-center">
      {user ? (
        <>
          <div className="w-full">
            <div>
              <h2 className="text-xl md:text-3xl font-medium">
                Here is your waitlist Information
              </h2>
              <p className="text-base">
                Stay tuned for updates and further instructions as we prepare to
                launch our exciting new service.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-10">
              <WaitlistCard user={user} />
            </div>
          </div>
        </>
      ) : (
        <>
          <h2>Loading...</h2>
        </>
      )}
    </div>
  );
};

export default WaitListFloor;
