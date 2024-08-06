import React from "react";

const Kamado = () => {
  return (
    <div className="w-full h-full flex justify-center items-center waitlist_cover py-4 px-4">
      <div className="w-full md:w-[60%] bg-white/5 text-white rounded-xl p-4 backdrop-blur">
        <div className="w-full min-w-full max-w-full flex flex-col gap-1">
          <div className="w-full min-w-full max-w-full py-4 px-2 flex flex-col gap-5 text-start">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30"
                height="30"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="lucide lucide-command"
              >
                <path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
              </svg>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="text-3xl md:text-4xl font-bold capitalize leading-relaxed text-primary">
                Early Access Registration!
              </h2>

              <p className="font-normal text-base md:text-lg opacity-80 my-1 leading-normal">
                Create excitement, generates buzz, and connects you with early
                adopters who provide valuable feedback and become loyal brand
                ambassadors.
              </p>
            </div>
          </div>

          <form className="waitlist-form w-full py-3 px-2 flex flex-col gap-2 shadow rounded-lg bg-white">
            <div className="space-y-1 w-full">
              <div className="relative">
                <input
                  type="email"
                  name="email_address"
                  id="email_address"
                  autoComplete="current-email_address"
                  className="block w-full text-black rounded-lg border px-3 py-2.5 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-blue-600 sm:text-sm sm:leading-6 focus-visible:outline-none"
                  required
                  placeholder="jeremytechie@quick-waitlist.com"
                />
              </div>
              <div
                aria-live="polite"
                aria-atomic="true"
                className="space-y-2"
              ></div>
            </div>

            <div className="flex flex-col gap-1">
              <button className="w-auto bg-[#000000] font-medium shadow-sm py-2 px-3 rounded-lg active:scale-105 transition-all">
                Join waitlist
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Kamado;
