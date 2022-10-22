import React from "react";

import aboutImage from "../assets/images/Images.png";

function About() {
  return (
    <section className="lg:px-48 px-6 py-20 dark:text-gray-100">
      <div className="grid grid-cols-2">
        <div className="flex flex-col justify-evenly">
          <h3 className="text-xl font-semibold text-blue-600">About Us</h3>
          <h1 className="text-4xl font-bold leading-10">
            We assist companies in developing innovative digital goods and
            experiences.
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 leading-8">
            Products and services that are simple, elegant, <br /> and powerful
            that unleash new value and <br /> revolutionize organizations.
          </p>
          <div className="w-full flex space-x-8">
            <div className="border border-gray-200 w-[190px] rounded-md  px-6 py-4 flex flex-col items-center">
              <strong className=" font-bold text-3xl">
                500 <span className="text-blue-600">+</span>
              </strong>
              <p className=" font-medium">Total Clients</p>
            </div>
            <div className="border border-gray-200 px-6 rounded-md w-[190px] py-4 flex flex-col items-center">
              <strong className="font-bold text-3xl">
                150 <span className="text-blue-600">+</span>
              </strong>
              <p className=" font-medium">Project Completed</p>
            </div>
          </div>
        </div>
        <div className="">
          <img src={aboutImage} alt="" className="" />
        </div>
      </div>
    </section>
  );
}

export default About;
