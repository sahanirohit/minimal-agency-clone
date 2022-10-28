import React, { memo } from "react";

import aboutImage from "../assets/images/Images.png";

function About() {
  return (
    <section className="lg:px-48 px-6 py-20 dark:text-gray-100">
      <div className="grid lg:grid-cols-2 gap-12">
        <div className="flex flex-col items-center lg:text-left lg:items-start text-center space-y-6 lg:justify-evenly">
          <h3 className="text-xl font-semibold text-blue-600">About Us</h3>
          <h1 className="sm:text-4xl text-2xl font-bold sm:leading-10">
            We assist companies in developing innovative digital goods and
            experiences.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 sm:leading-8">
            Products and services that are simple, elegant, <br /> and powerful
            that unleash new value and <br /> revolutionize organizations.
          </p>
          <div className="w-full flex justify-center lg:justify-start space-x-8">
            <div className="border border-gray-200 max-w-[190px] rounded-md  px-6 py-4 flex justify-center flex-col items-center">
              <strong className=" font-bold text-xl sm:text-3xl">
                500 <span className="text-blue-600">+</span>
              </strong>
              <p className=" font-medium">Total Clients</p>
            </div>
            <div className="border border-gray-200 px-6 rounded-md max-w-[190px] justify-center py-4 flex flex-col items-center">
              <strong className="font-bold text-xl sm:text-3xl">
                150 <span className="text-blue-600">+</span>
              </strong>
              <p className=" font-medium">Project Completed</p>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-start justify-center">
          <img src={aboutImage} alt="" className="w-full h-full object-cover" />
        </div>
      </div>
    </section>
  );
}

export default memo(About);
