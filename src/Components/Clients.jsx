import React, { memo } from "react";

import { clientImage } from "./data";

function Clients() {
  return (
    <section className="lg:px-48 px-6 bg-blue-100/80 dark:bg-slate-800">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-20">
        <div className="flex text-center md:text-left space-y-5 flex-col">
          <h2 className="text-blue-600 text-xl">Our Clients</h2>
          <h1 className="text-3xl font-bold dark:text-white">
            Client That We Have Worked With.
          </h1>
          <p className="text-xl text-gray-600  dark:text-gray-300">
            We have worked with these beautiful client to create awesome
            product.
          </p>
        </div>
        <div className=" md:col-span-2 flex flex-col items-center justify-center">
          <div className="grid gap-4 grid-cols-3">
            {clientImage.map((item, index) => {
              return (
                <div key={index}>
                  <img
                    src={item}
                    alt=""
                    className="hover:scale-105 duration-200"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default memo(Clients);
