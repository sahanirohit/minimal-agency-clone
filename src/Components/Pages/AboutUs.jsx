import React from "react";

function AboutUs(props) {
  return (
    <section className="lg:px-48 w-full h-full relative about-us px-6 py-20">
      <div className="py-16 z-40 relative">
        <h1 className="text-6xl font-bold text-center text-white">
          {props.title}
        </h1>
      </div>
      <div className="w-full z-30 h-full absolute left-0 top-0 bg-black/50"></div>
    </section>
  );
}

export default AboutUs;
