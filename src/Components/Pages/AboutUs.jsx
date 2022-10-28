import React, { memo } from "react";

import heroImage from "../../assets/images/hero.jpg";

function AboutUs(props) {
  return (
    <section className="lg:px-48 w-full h-full relative px-6 py-20">
      <img
        src={heroImage}
        alt=""
        className="absolute w-full h-full inset-0 object-cover"
      />
      <div className="py-16 z-30 relative">
        <h1 className="lg:text-6xl md:text-5xl text-4xl duration-300 font-bold text-center text-white">
          {props.title}
        </h1>
      </div>
      <div className="w-full z-20 h-full absolute left-0 top-0 bg-black/50"></div>
    </section>
  );
}

export default memo(AboutUs);
