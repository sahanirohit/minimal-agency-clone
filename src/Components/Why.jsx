import React, { memo } from "react";

import { WhyData } from "./data";

function Why() {
  return (
    <section className="lg:px-48 px-6 bg-blue-100/70 dark:bg-gray-700 dark:text-gray-100 py-20 space-y-16">
      <div className="flex flex-col items-center justify-center text-center space-y-6">
        <h2 className=" text-blue-600 text-xl">Why Us</h2>
        <h1 className="text-4xl font-bold">Why Choose Us</h1>
        <p className="text-xl text-gray-600 dark:text-gray-300">
          Products and services that are simple, elegant, and powerful <br />{" "}
          that unleash new value and revolutionize organizations.
        </p>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {WhyData.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 p-8 flex gap-10">
              <div className="basis-1/3 flex justify-center">
                <i className={item.icon}></i>
              </div>
              <div className="space-y-4">
                <h2 className="sm:text-2xl text-xl font-semibold">
                  {item.title}
                </h2>
                <p className="sm:text-xl text-sm font-medium text-gray-600 dark:text-gray-300">
                  {item.content}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default memo(Why);
