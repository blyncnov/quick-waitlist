"use client";

import React from "react";
import Image from "next/image";
import { Prisma } from "@prisma/client";

// Framer motion
import { motion } from "framer-motion";

// Image
import FakeUserImage from "../../../../../public/wait_chair.jpg";

interface userProps extends Prisma.WaitlistCreateInput {
  id: number;
}

const WaitlistCard = ({ user }: { user: userProps }) => {
  return (
    <>
      <motion.div
        drag
        transition={{
          type: "spring",
          stiffness: 20,
          damping: 10,
        }}
        dragConstraints={{
          left: 10,
          right: 20,
          top: 10,
          bottom: 30,
        }}
        className="w-full max-w-[300px] cursor-pointer relative bg-transparent text-white rounded-md shadow-xl"
      >
        <div className="relative w-full min-w-full max-w-full grid grid-rows-1 gap-2">
          {/*  IMAGE SECTION */}
          <div className="relative listing-image-container max-h-[200px] min-h-[200px] rounded-md">
            <Image
              src={FakeUserImage}
              alt="hotel cover"
              draggable={false}
              className="w-full h-full object-cover rounded-md  shadow-sm"
            />

            <div className="w-full absolute top-2 flex justify-center items-center">
              <div className="cut w-12 h-4 rounded-full bg-white flex justify-center items-center">
                <div className="cut--inner w-8 h-1.5 rounded-full bg-black/50"></div>
              </div>
            </div>
          </div>

          <div className="relative listing-description-container bg-white rounded-md py-2 px-3 shadow-sm">
            {/* LISTING PRICE CUT SECTION */}
            <div className="price-cut bg-white shadow-xl rounded-br-md rounded-tr-md rounded-tl- w-[50%] h-10 absolute -top-7 left-0 border-t-[0.5rem] border-r-[0.5rem] border-b-[0.5rem] border-[#fff]">
              <span className="w-full h-full px-3 flex justify-start items-center text-start text-black">
                <h4 className="font-medium text-base">{`Waitlist ID - ${user.id}`}</h4>
              </span>
            </div>

            {/*  DESCRIPTION SECTION */}
            <div className="w-full pt-7 text-black flex flex-col gap-y-1 text-start ">
              <h2 className="text-xl font-semibold">{user.email}</h2>
              <p className="font-normal text-sm leading-[1.5] opacity-80">
                {
                  "We're excited to have you on board and will keep you updated with the latest information and next steps."
                }
              </p>

              <div className="w-full my-3">
                <button
                  type="button"
                  className="w-full text-base text-white border bg-black border-b-0 border-white/10 py-1.5 px-6 rounded-lg shadow"
                >
                  <span>Stay updated 🎉 </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default WaitlistCard;
