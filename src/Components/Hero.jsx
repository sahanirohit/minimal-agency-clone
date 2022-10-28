import React, { memo } from "react";

function Hero() {
  return (
    <div className="w-full h-[80vh] flex items-center relative bg-gray-800 text-gray-100 dark:text-gray-100">
      <img
        src={require("../assets/images/hero.jpg")}
        alt=""
        className="absolute w-full h-full object-cover"
      />
      <div className="absolute w-full h-full bg-gradient-to-l from-transparent to-slate-900/80"></div>
      <div className="absolute lg:px-48 px-6 space-y-6">
        <h1 className="lg:text-6xl text-3xl md:text-4xl duration-300 font-black">
          Grow Your Business <br /> To The Peak.
        </h1>
        <p className="md:text-xl font-bold tracking-wider dark:text-gray-200">
          Are you having trouble growing your business and don’t <br /> know
          where to begin? We’re here to assist you in <br /> expanding your
          company.
        </p>
        <div className="space-x-6 font-semibold">
          <button className="sm:px-6 px-3 py-1.5 sm:py-3 border-blue-500 rounded-md border bg-blue-500">
            Learn More
          </button>
          <button className="sm:px-6 px-3 py-1.5 sm:py-3 text-blue-600 rounded-md border bg-white">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
}

export default memo(Hero);
