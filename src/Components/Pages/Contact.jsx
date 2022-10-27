import React from "react";

function Contact() {
  return (
    <section className="lg:px-48 px-6 py-20">
      <div className="">
        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col space-y-10">
            <div className="flex flex-col space-y-3">
              <p className=" text-blue-600">Contact</p>
              <h2 className=" text-3xl font-semibold">Get In Touch ✋</h2>
              <p className=" text-xl">Let's discuss your project.</p>
            </div>
            <div className="flex flex-col space-y-10">
              <div className="">
                <div className="flex items-center gap-8">
                  <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl text-blue-600">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <h2 className=" text-2xl font-semibold">Email</h2>
                    <p className="">email@companyname.com</p>
                  </div>
                </div>
                <div className="relative py-4 before:absolute before:w-full before:h-[1px] before:bg-gray-300 before:left-0 before:bottom-0"></div>
              </div>
              <div className="">
                <div className="flex items-center gap-8">
                  <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl text-blue-600">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <h2 className=" text-2xl font-semibold">Contact</h2>
                    <p className="">+1 122 336 457</p>
                  </div>
                </div>
                <div className="relative py-4 before:absolute before:w-full before:h-[1px] before:bg-gray-300 before:left-0 before:bottom-0"></div>
              </div>
              <div className="">
                <div className="flex items-center gap-8">
                  <div className=" w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center text-2xl text-blue-600">
                    <i className="fa-solid fa-location"></i>
                  </div>
                  <div className="flex flex-col space-y-3">
                    <h2 className=" text-2xl font-semibold">Address</h2>
                    <p className="">California 770, San Diego, USA</p>
                  </div>
                </div>
                <div className="relative py-4 before:absolute before:w-full before:h-[1px] before:bg-gray-300 before:left-0 before:bottom-0"></div>
              </div>
            </div>
          </div>
          <div className="">World</div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
