import React from "react";

import { teamData } from "./data";

function Team() {
  return (
    <section className="lg:px-48 px-6 py-20">
      <div className="flex items-center space-y-4 justify-center text-center flex-col">
        <h2 className="text-blue-600 text-xl">Teams</h2>
        <h1 className="text-4xl font-bold dark:text-white">Meet Our Teams</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Whatever your aim for you future, we have the perfect <br /> program
          to get you there.
        </p>
      </div>
      <div className="grid grid-cols-4 gap-6 pt-16">
        {teamData.map((item, index) => {
          return (
            <div
              className="flex  flex-col items-center justify-center text-center"
              key={index}>
              <div className="border rounded-md border-gray-200">
                <div className="">
                  <img src={item.img} alt="" className="" />
                </div>
                <div className="py-6">
                  <h2 className="font-semibold dark:text-white text-lg">
                    {item.name}
                  </h2>
                  <h3 className="font-medium text-gray-500">{item.title}</h3>
                </div>
                <div className="pb-6 flex items-center space-x-2 justify-center text-xl">
                  <i className="social-link fa-brands fa-facebook text-blue-600"></i>
                  <i className="social-link fa-brands fa-twitter text-sky-500"></i>
                  <i className="social-link fa-brands fa-instagram text-pink-400"></i>
                  <i className="social-link fa-brands fa-linkedin text-blue-600"></i>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="py-16 flex items-center justify-center">
        <button className="px-6 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md font-semibold">
          View All Teams
        </button>
      </div>
    </section>
  );
}

export default Team;
