import React from "react";

import { blogData } from "./data";

function Blog() {
  return (
    <section className="lg:px-48 px-6 py-20">
      <div className="flex flex-col items-center justify-center text-center space-y-4">
        <h3 className="text-xl font-semibold text-blue-600">Blog</h3>
        <h1 className="text-3xl tracking-wider dark:text-white font-bold leading-10">
          Our Recent Blog
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 leading-8">
          Whatever your aim for you future, we have the perfect <br /> program
          to get you there.
        </p>
      </div>
      <div className="grid gap-8 lg:grid-cols-2 pt-16">
        {blogData.map((item, index) => {
          return (
            <div
              className=" bg-blue-100/80 flex w-full h-full space-x-4 rounded-md"
              key={index}>
              <div className="w-80 h-full">
                <img
                  src={item.img}
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex w-full flex-col py-4 justify-center space-y-2">
                <h2 className=" text-lg text-blue-600">{item.industry}</h2>
                <h1 className=" text-2xl">{item.title}</h1>
                <h2 className=" text-lg text-blue-600">{item.date}</h2>
                {/* CTA */}
                <div className="">
                  <button className="px-4 py-1.5 bg-orange-400 text-white font-semibold">
                    Read more...
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Blog;
