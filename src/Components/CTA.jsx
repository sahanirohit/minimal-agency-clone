import React, { memo } from "react";

function CTA() {
  return (
    <section className="cta lg:px-48 px-6 py-20">
      <div className="flex flex-col items-center justify-center text-center space-y-8">
        <h1 className="md:text-5xl text-3xl duration-300 text-white font-bold">
          Let’s work together on your <br /> next project. 🎈
        </h1>
        <p className="font-medium duration-300 sm:text-xl text-gray-200">
          Call to action (CTA) is a marketing term for any device designed to{" "}
          <br /> prompt an immediate response or encourage an immediate sale.
        </p>
        <div className="">
          <button className="px-6 py-2 bg-blue-600 text-white font-semibold">
            Let's Get Started
          </button>
        </div>
      </div>
    </section>
  );
}

export default memo(CTA);
