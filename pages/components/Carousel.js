import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Button from "./Button";
const comments = [
  {
    author: "POCO LOCO",
    cmnt: "Munchy was a great platform that was easy to use, and allowed me to get online quickly and fast - my customers love it",
    rate: ["f", "f", "f", "f", ""],
    href: "/",
  },
  {
    author: "HOT&DOGS",
    cmnt: "Munchy was a great platform that was easy to use, and allowed me to get online quickly and fast - my customers love it",
    rate: ["f", "f", "f", "f", "f"],
    href: "/",
  },
  {
    author: "POCO LOCO",
    cmnt: "Munchy was a great platform that was easy to use, and allowed me to get online quickly and fast - my customers love it",
    rate: ["f", "f", "f", "f", ""],
    href: "/",
  },
  {
    author: "HOT&DOGS",
    cmnt: "Munchy was a great platform that was easy to use, and allowed me to get online quickly and fast - my customers love it",
    rate: ["f", "f", "f", "f", "f"],
    href: "/",
  },
];

export default function Carousel() {
  return (
    <div className="lg:max-w-864 xl:max-w-1080 mx-auto relative z-[1]  ">
      <div className="swpr-button hidden lg:block swpr-prev">
        <img
          className=" transform rotate-180"
          src="/imgs/carousel-arrow.svg"
          alt="prev slide"
        />
      </div>
      <div className="swpr-button swpr-next hidden lg:block">
        <img src="/imgs/carousel-arrow.svg" alt="next slide" />
      </div>
      <Swiper
        className="hidden lg:block  mx-auto  carousel"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={2}
        loop={true}
        navigation={{
          nextEl: ".swpr-next",
          prevEl: ".swpr-prev",
        }}
        pagination={{ clickable: true }}
      >
        {comments.map((c, i) => (
          <SwiperSlide key={i} className="w-max">
            <div className="relative  pb-[60px]">
              <div className="w-full bg-lghtGray p-[30px] relative rounded-[20px]  h-auto mx-auto  flex flex-col  items-center">
                <div className="flex w-full justify-between items-center pb-4">
                  <p className="max-w-max font-extrabold lg:text-2xl ">{c.author}</p>
                  <div className="flex gap-2.5">
                    {c.rate.map((r, y) => (
                      <img
                        key={`${i}${y}`}
                        className="w-2.5"
                        src={r === "f" ? "/imgs/star-full.svg" : "/imgs/star-empty.svg"}
                        alt="rate"
                      />
                    ))}
                  </div>
                </div>

                <p className="font-medium text-xs xl:text-base leading-normal text-grey pr-4">
                  “{c.cmnt}”
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* mob version*/}
      <Swiper
        className="lg:hidden  mx-auto  carousel  mob"
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        centeredSlides={true}
        navigation
        pagination={{ clickable: true }}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
      >
        {comments.map((c, i) => (
          <SwiperSlide key={i} className="w-max ">
            <div className="relative px-10 pb-[60px]">
              <div className="w-full bg-lghtGray p-[30px] relative rounded-[20px]  h-auto mx-auto  flex flex-col  items-center">
                <div className="flex w-full justify-between items-center pb-4">
                  <p className="max-w-max font-extrabold lg:text-2xl ">{c.author}</p>
                  <div className="flex gap-2.5">
                    {c.rate.map((r, y) => (
                      <img
                        key={`${i}${y}`}
                        className="w-2.5"
                        src={r === "f" ? "/imgs/star-full.svg" : "/imgs/star-empty.svg"}
                        alt="rate"
                      />
                    ))}
                  </div>
                </div>

                <p className="font-medium text-xs xl:text-base leading-normal text-grey pr-4">
                  “{c.cmnt}”
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
