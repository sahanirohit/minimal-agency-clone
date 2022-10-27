import React, { useEffect, useState } from "react";

function Top() {
  const [search, setSearch] = useState(false);
  const [dark, setDark] = useState(true);
  const [top, setTop] = useState(false);
  const htmlObject = document.querySelector("html");

  const handleDark = () => {
    if (dark) {
      htmlObject.classList.remove("dark");
    } else {
      htmlObject.classList.add("dark");
    }
  };

  useEffect(() => {
    handleDark();
    window.addEventListener("scroll", () => {
      window.scrollY > 20 ? setTop(true) : setTop(false);
    });
  });

  return (
    <div
      className={`lg:px-48 px-6 py-4 dark:bg-gray-900 dark:text-gray-100 ${
        top === true && search === false ? "hidden" : ""
      }`}>
      <div className="flex items-center justify-between">
        <div className="flex space-x-6 text-sm">
          <div className="flex space-x-2 items-center">
            <i className="fa-solid fa-envelope"></i>
            <span className="">email@companyname.com</span>
          </div>
          <div className="flex space-x-2 items-center">
            <i className="fa-solid fa-phone"></i>
            <span className="">(+12) 123 456 7890</span>
          </div>
        </div>
        <div className="flex items-center space-x-5 text-xl">
          <i className="fa-brands cursor-pointer fa-linkedin"></i>
          <i className="fa-brands cursor-pointer fa-instagram"></i>
          <i className="fa-brands cursor-pointer fa-twitter"></i>
          <i className="fa-brands cursor-pointer fa-pinterest"></i>
          <i
            onClick={() => setSearch(!search)}
            className="fa-solid cursor-pointer fa-search"></i>
          <i
            onClick={() => setDark(!dark)}
            className={`${
              dark ? "fa-moon text-black" : "fa-sun text-gray-100"
            } fa-solid  px-8 cursor-pointer`}></i>
        </div>
      </div>
      {/* <div className="bg-black w-full h-[0.5px] mt-2"></div> */}
      <hr className="bg-black w-full mt-3" />
      <div
        className={`${
          search
            ? "fixed w-full h-full z-50 flex items-center justify-center bg-white inset-0"
            : "hidden"
        }`}>
        <i
          onClick={() => setSearch(!search)}
          className="fa-solid absolute top-4 z-50 text-black text-xl right-6 cursor-pointer fa-xmark"></i>
        <input
          type="text"
          className="px-4 py-4 bg-transparent text-gray-800 border border-gray-300 focus:outline-none rounded-xl w-[50%]"
          placeholder="Search..."
        />
      </div>
    </div>
  );
}

export default Top;
