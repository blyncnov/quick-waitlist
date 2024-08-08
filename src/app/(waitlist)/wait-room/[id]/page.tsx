import React from "react";

// @lib
import prisma from "@/lib/prisma.db";

const WaitListFloor = async ({ params }: { params: { id: number } }) => {
  const user = await prisma.waitlist.findUnique({
    where: { id: Number(params.id) },
  });

  return (
    <div className="max-w-6xl mx-auto py-6 flex flex-col gap-5">
      {user ? (
        <>
          <div className="w-full">
            <div>
              <h2 className="text-3xl">Email: {user.email}</h2>
              <p className="text-base mt-1">
                🎉🎉 Hurray! You are a member of this waitlist
              </p>
            </div>
            <div></div>{" "}
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
