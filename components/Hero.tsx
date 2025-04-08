"use client"

import { ArrowRightIcon } from "@heroicons/react/24/outline"

export default function Hero() {
  return (
    <section className="py-16 md:py-24 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-[#00ADB5] text-transparent bg-clip-text">
                Write Code, Change the World
              </span>
            </h1>
            <p className="text-lg mb-8 text-gray-300 max-w-lg">
              Sharpen your programming skills by solving algorithmic challenges. Join our community of coders and
              compete in contests.
            </p>
            <button className="px-6 py-3 bg-[#00ADB5] rounded-md flex items-center hover:bg-opacity-80 transition-all transform hover:translate-x-1">
              Start Solving Now
              <ArrowRightIcon className="h-5 w-5 ml-2" />
            </button>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="w-full max-w-md h-64 md:h-80 bg-[#16213E] rounded-xl p-4 flex items-center justify-center backdrop-blur-sm bg-opacity-50 border border-gray-700 shadow-xl">
              <svg
                className="w-full h-full max-w-xs"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 7L12 3L4 7M20 7L12 11M20 7V17L12 21M12 11L4 7M12 11V21M4 7V17L12 21"
                  stroke="#00ADB5"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

