import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Logo } from "./data";

function Navbar() {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setNav(true) : setNav(false);
    });
  });
  return (
    <div className={`${nav ? "h-16" : "h-20"} relative duration-200 `}>
      <div
        className={`${
          nav ? "h-16 fixed top-0" : "h-20"
        } lg:px-48 px-6 w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100 z-50 shadow-md duration-200 flex items-center justify-between`}>
        <div className="">
          <img src={Logo} alt="" className="" />
        </div>

        {/* Desktop Nav */}
        <ul className="flex">
          <li className="px-6 py-2 cursor-pointer active">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="px-6 py-2 cursor-pointer">
            <Link to={"/about"}>About</Link>
          </li>
          <li className="px-6 py-2 cursor-pointer">
            <Link to={"/services"}>Services</Link>
          </li>
          <li className="px-6 py-2 cursor-pointer">
            <Link to={"/teams"}>Teams</Link>
          </li>
          <li className="px-6 py-2 cursor-pointer">
            <Link to={"/blog"}>Blog</Link>
          </li>
          <li className="px-6 py-2 cursor-pointer">
            <Link to={"/testimonials"}>Testimonials</Link>
          </li>
          <button className="px-6 py-2 font-semibold hover:bg-blue-600 duration-200 bg-blue-400 rounded-md">
            Contact
          </button>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
