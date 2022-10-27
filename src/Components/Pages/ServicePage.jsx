import React from "react";

import { servicesData } from "../data";

function ServicePage() {
  return (
    <section className="lg:px-48 px-6 py-20">
      <div className="grid gap-8 grid-cols-3">
        {servicesData.map((item, index) => {
          return (
            <div
              className="border px-6 w-80 h-72 flex flex-col justify-evenly border-gray-200"
              key={index}>
              <div className="w-16 h-16 flex items-center justify-center bg-sky-100 dark:bg-slate-200 rounded-full text-2xl text-blue-600">
                <i className={item.icon}></i>
              </div>
              <div className="">
                <h2 className="text-2xl font-semibold">{item.title}</h2>
              </div>
              <div className="">
                <p className="font-medium">
                  Our professionals give high-quality services to our clients in
                  time to meet deadlines.
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default ServicePage;
