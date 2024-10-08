import React from "react";

// prisma_db
import prisma from "@/lib/prisma.db";

// Component
import WaitRoomTable from "./_components/waitRoomTable";

const WaitRoom = async () => {
  const waitlist = await prisma.waitlist.findMany();
  const waitlist_count = await prisma.waitlist.count();

  return (
    <div className="max-w-6xl mx-auto py-6 px-4 md:px-0 flex flex-col gap-5">
      <div>
        <h2 className="text-3xl">Your Waitlist Room ({waitlist_count})</h2>
        <p className="text-base mt-1">
          These are all the users who signed up for your waitlist.
        </p>
      </div>

      <div>
        <WaitRoomTable data={waitlist} />
      </div>
    </div>
  );
};

export default WaitRoom;
