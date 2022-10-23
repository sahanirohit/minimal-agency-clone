import React from "react";

import { WhyUsData } from "./data";

function WhyUs() {
  return (
    <section className="w-full lg:px-48 px-6 py-16 bg-blue-100/70 dark:bg-gray-700">
      <div className="grid grid-cols-3 gap-12">
        {WhyUsData.map((item, index) => {
          return (
            <div
              key={index}
              className="px-6 py-8 bg-white w-80 flex flex-col justify-around h-72 dark:bg-black dark:text-gray-100 rounded-md hover:shadow-md duration-200">
              <div className="w-16 h-16 flex items-center justify-center bg-sky-100 dark:bg-slate-200 rounded-full">
                <i class={item.icon}></i>
              </div>
              <h2 className="text-xl font-bold">{item.title}</h2>
              <p className="font-semibold text-gray-500 dark:text-gray-300">
                {item.content}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default WhyUs;
