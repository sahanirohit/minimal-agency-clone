import React, { memo } from "react";

import { Logo } from "./data";

function Footer() {
  return (
    <footer className="lg:px-48 px-6">
      <div className="grid sm:grid-cols-2 md:grid-cols-5 py-20 gap-8">
        <div className="md:col-span-2 space-y-4">
          <img src={Logo} alt="" className="" />
          <p className="">
            We assist companies in developing innovative digital goods and
            experiences.
          </p>
          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-envelope"></i>
            <span>contact@yourwebsite.com</span>
          </div>
          <div className="flex items-center space-x-3">
            <i className="fa-solid fa-phone"></i>
            <span>123-456-7890</span>
          </div>
        </div>
        <div className="text-xl space-y-6 flex-1">
          <h2 className="font-bold">Company</h2>
          <ul className="text-lg space-y-6">
            <li className="">Home</li>
            <li className="">About</li>
            <li className="">Services</li>
            <li className="">Testimonials</li>
          </ul>
        </div>
        <div className="text-xl space-y-6 flex-1">
          <h2 className="font-bold">Services</h2>
          <ul className="text-lg space-y-6">
            <li className="">Web Design</li>
            <li className="">Marketing & SEO</li>
            <li className="">Branding</li>
            <li className="">Packaging</li>
            <li className="">Product Launch</li>
          </ul>
        </div>
        <div className="text-xl space-y-3 flex-1">
          <h2 className="font-bold">Socials</h2>
          <div className="space-x-4">
            <i className="cursor-pointer duration-200 hover:-translate-y-2 fa-brands fa-facebook text-blue-600"></i>
            <i className="cursor-pointer duration-200 hover:-translate-y-2 fa-brands fa-twitter text-sky-500"></i>
            <i className="cursor-pointer duration-200 hover:-translate-y-2 fa-brands fa-instagram text-pink-400"></i>
            <i className="cursor-pointer duration-200 hover:-translate-y-2 fa-brands fa-linkedin text-blue-600"></i>
          </div>
        </div>
      </div>
      <div className="flex sm:flex-row flex-col space-y-4 sm:space-y-0 items-center justify-between py-8 relative before:absolute before:w-full before:h-[1px] before:bg-gray-300 before:top-0">
        <div className="text-center sm:text-left">
          <p className="text-gray-400">
            Copyright &copy; 2022 Minimal Agency Clone - Powered by{" "}
            <strong className="hover:text-blue-600 cursor-pointer text-gray-600">
              Rohit Sahani
            </strong>
          </p>
        </div>
        <div className="">
          <ul className="inline-flex space-x-4">
            <li className="">Terms of Use</li>
            <li className="">Privacy Policy</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default memo(Footer);
