import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination } from "swiper";

function Testimonials() {
  return (
    <section className="lg:px-48 px-6 pt-20">
      <div className="grid grid-cols-3">
        <div className=" flex flex-col justify-center space-y-6">
          <h2 className=" text-blue-600 text-xl">Tesimonials</h2>
          <h1 className="text-4xl font-bold dark:text-white">
            Good Things You Have Heard About Uss
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Here’s what our Amazing Clients have <br /> to say till now.
          </p>
          {/* CTA */}
          <div className="">
            <button className="px-6 py-2 bg-blue-500 text-white font-semibold">
              Read All Testimonials
            </button>
          </div>
        </div>
        <div className="col-span-2">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper">
            <SwiperSlide>
              <section class="bg-white dark:bg-gray-900">
                <div class="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure class="mx-auto">
                    <svg
                      class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p class="text-2xl font-medium text-gray-900 dark:text-white">
                        "Flowbite is just awesome. It contains tons of
                        predesigned components and pages starting from login
                        screen to complex dashboard. Perfect choice for your
                        next SaaS application."
                      </p>
                    </blockquote>
                    <figcaption class="flex flex-col items-center justify-center mt-6 space-y-3">
                      <div className="w-16 h-16">
                        <img
                          class="rounded-full object-contain"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="profile"
                        />
                      </div>
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">
                          Micheal Gough
                        </div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>
            <SwiperSlide>
              <section class="bg-white dark:bg-gray-900">
                <div class="px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">
                  <figure class="mx-auto">
                    <svg
                      class="h-12 mx-auto mb-3 text-gray-400 dark:text-gray-600"
                      viewBox="0 0 24 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"
                      />
                    </svg>
                    <blockquote>
                      <p class="text-2xl font-medium text-gray-900 dark:text-white">
                        "Flowbite is just awesome. It contains tons of
                        predesigned components and pages starting from login
                        screen to complex dashboard. Perfect choice for your
                        next SaaS application."
                      </p>
                    </blockquote>
                    <figcaption class="flex flex-col items-center justify-center mt-6 space-y-3">
                      <div className="w-16 h-16">
                        <img
                          class="rounded-full object-contain"
                          src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                          alt="profile"
                        />
                      </div>
                      <div class="flex items-center divide-x-2 divide-gray-500 dark:divide-gray-700">
                        <div class="pr-3 font-medium text-gray-900 dark:text-white">
                          Micheal Gough
                        </div>
                        <div class="pl-3 text-sm font-light text-gray-500 dark:text-gray-400">
                          CEO at Google
                        </div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              </section>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="py-20">
        <div className={`py-20 bg`}>
          <div className="flex items-center justify-around gap-8 flex-wrap text-center text-5xl">
            <div className="">
              <strong className="">
                150 <span className="text-blue-500">+</span>
              </strong>
              <p className="font-semibold text-sm">Happy Clients</p>
            </div>
            <div className="">
              <strong className="">
                50 <span className="text-blue-500">+</span>
              </strong>
              <p className="font-semibold text-sm">Clients Globally</p>
            </div>
            <div className="">
              <strong className="">
                100<span className="text-blue-500">k</span>
              </strong>
              <p className="font-semibold text-sm">Users Aquired</p>
            </div>
            <div className="">
              <strong className="">
                15 <span className="text-blue-500">+</span>
              </strong>
              <p className="font-semibold text-sm">Awards Won</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
