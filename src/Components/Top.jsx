import React, { useState } from "react";

function Top() {
  const [search, setSearch] = useState(false);

  return (
    <div className="lg:px-48 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex space-x-6">
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
          <i className="fa-solid cursor-pointer fa-search"></i>
        </div>
      </div>
      <div className="bg-white w-full h-[0.5px] mt-2"></div>
    </div>
  );
}

export default Top;
