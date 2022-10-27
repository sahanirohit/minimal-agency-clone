import React from "react";
import { Link } from "react-router-dom";

import { blogData } from "../data";

function BlogPage() {
  return (
    <section className="lg:px-48 px-6 py-20">
      <div className="grid gap-24 grid-cols-3">
        <div className="col-span-2">
          {blogData.map((item, index) => {
            return (
              <div className="" key={index}>
                <div className="w-full h-[420px]">
                  <img
                    src={item.img}
                    alt=""
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="py-12">
                  <div className="flex items-center space-x-4 text-gray-600 ">
                    <span className="">{item.industry}</span>
                    <div className="w-[3px] rounded-full h-[3px] bg-gray-600"></div>
                    <span className="">{item.date}</span>
                  </div>
                  <Link className="">
                    {" "}
                    <h1 className="text-3xl py-3 dark:text-white font-bold">
                      {item.title}
                    </h1>
                  </Link>

                  <p className="text-xl py-4 text-gray-600">
                    Surrounded by picturesque waterfalls, colorful florals, and
                    their love for one another, Garry and Romeo’s Moc Chau
                    elopement was both stunning and magical. So without wasting
                    any more time, let’s […]
                  </p>
                  <div className="relative before:absolute before:w-full before:h-[1px] before:bg-gray-400 py-2 before:left-0 before:bottom-0"></div>
                  {/* CTA */}
                  <div className="py-8">
                    <button className="px-6 py-2 bg-blue-600 text-white flex items-center space-x-3 font-semibold">
                      <span>Read more</span>{" "}
                      <i className="fa-solid fa-arrow-right"></i>
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="">
          <div className="flex">
            <input
              type="text"
              className="px-4 py-2.5 flex-1 border border-gray-300 focus:outline-none"
            />
            <button className="bg-blue-600 text-white px-4">
              <i className="fa-solid fa-search"></i>
            </button>
          </div>
          <div className="py-12 w-full space-y-3 flex flex-col text-lg text-gray-500">
            <div className="flex w-full items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Posts
              </h2>
              <div className="h-[1px] bg-gray-300 flex-1"></div>
            </div>
            <Link className="hover:text-blue-600">
              Transforming into the digital enterprise
            </Link>
            <Link className="hover:text-blue-600">
              Biden's victory will affect the trade
            </Link>
            <Link className="hover:text-blue-600">
              Take Action for the Best Strategy Benefits
            </Link>
            <Link className="hover:text-blue-600">
              Answering your questions about automating accounts.
            </Link>
            <Link className="hover:text-blue-600">
              Four biggest challenges to small business growth.
            </Link>
          </div>
          <div className="w-full space-y-3 flex flex-col text-lg text-gray-500">
            <div className="flex w-full items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Recent Comments
              </h2>
              <div className="h-[1px] bg-gray-300 flex-1"></div>
            </div>
            <Link className="hover:text-blue-600">No comments to show.</Link>
          </div>
          <div className="w-full py-12 space-y-3 flex flex-col text-lg text-gray-500">
            <div className="flex w-full items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">Archives</h2>
              <div className="h-[1px] bg-gray-300 flex-1"></div>
            </div>
            <Link className="hover:text-blue-600">August 2021</Link>
          </div>
          <div className="w-full space-y-3 flex flex-col text-lg text-gray-500">
            <div className="flex w-full items-center space-x-4">
              <h2 className="text-xl font-semibold text-gray-800">
                Categories
              </h2>
              <div className="h-[1px] bg-gray-300 flex-1"></div>
            </div>
            <Link className="hover:text-blue-600">Enterprise</Link>
            <Link className="hover:text-blue-600">Organization</Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
