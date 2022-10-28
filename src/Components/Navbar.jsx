import React, { memo, useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { Logo } from "./data";

function Navbar() {
  const [nav, setNav] = useState(false);
  const [open, setOpen] = useState(false);
  const bodyObject = document.querySelector("body");

  const url = useLocation();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setNav(true) : setNav(false);
    });

    if (open) {
      bodyObject.classList.add("overflow-hidden");
    } else {
      bodyObject.classList.remove("overflow-hidden");
    }
  });
  return (
    <div className={`${nav ? "h-16" : "h-20"} relative z-40 duration-300 `}>
      <div
        className={`${
          nav ? "h-16 fixed top-0" : "h-20"
        } lg:px-48 px-6 w-full bg-gray-100 dark:bg-gray-900 dark:text-gray-100 z-50 shadow-md duration-300 flex items-center justify-between`}>
        <div
          className={`flex items-center justify-between w-full lg:w-auto ${
            open ? "z-50" : ""
          }`}>
          <img src={Logo} alt="" className="sm:h-12 h-8 object-contain" />
          <i
            onClick={() => setOpen(!open)}
            className={`fa-solid ${
              open ? "fa-xmark" : "fa-bars"
            } cursor-pointer lg:hidden`}></i>
        </div>

        {/* Mobile Nav */}
        <ul
          className={`fixed inset-0 transform ${
            open ? "translate-x-0" : "translate-x-full"
          }  bg-white w-full h-full py-40 flex flex-col duration-300 items-center space-y-6`}>
          <li
            onClick={() => setOpen(!open)}
            className={`px-6 cursor-pointer ${
              url.pathname === "/" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className={`px-6 cursor-pointer ${
              url.pathname === "/about" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className={`px-6 cursor-pointer ${
              url.pathname === "/services" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/services"}>
              Services
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className={`px-6 cursor-pointer ${
              url.pathname === "/teams" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/teams"}>
              Teams
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className={`px-6 cursor-pointer ${
              url.pathname === "/blog" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/blog"}>
              Blog
            </Link>
          </li>
          <li
            onClick={() => setOpen(!open)}
            className={`px-6 cursor-pointer ${
              url.pathname === "/testimonials" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/testimonials"}>
              Testimonials
            </Link>
          </li>
          <button className="px-6 py-2 font-semibold hover:bg-blue-600 duration-300 bg-blue-400 rounded-md">
            <Link to={"/contact"}>Contact</Link>
          </button>
        </ul>

        {/* Desktop Nav */}
        <ul className="lg:flex hidden items-center">
          <li
            className={`px-6 cursor-pointer ${
              url.pathname === "/" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/"}>
              Home
            </Link>
          </li>
          <li
            className={`px-6 cursor-pointer ${
              url.pathname === "/about" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/about"}>
              About
            </Link>
          </li>
          <li
            className={`px-6 cursor-pointer ${
              url.pathname === "/services" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/services"}>
              Services
            </Link>
          </li>
          <li
            className={`px-6 cursor-pointer ${
              url.pathname === "/teams" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/teams"}>
              Teams
            </Link>
          </li>
          <li
            className={`px-6 cursor-pointer ${
              url.pathname === "/blog" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/blog"}>
              Blog
            </Link>
          </li>
          <li
            className={`px-6 cursor-pointer ${
              url.pathname === "/testimonials" ? "active" : ""
            }`}>
            <Link className="py-2 nav-link" to={"/testimonials"}>
              Testimonials
            </Link>
          </li>
          <button className="px-6 py-2 font-semibold hover:bg-blue-600 duration-300 bg-blue-400 rounded-md">
            <Link to={"/contact"}>Contact</Link>
          </button>
        </ul>
      </div>
    </div>
  );
}

export default memo(Navbar);
