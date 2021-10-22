import React from "react";
import Carousel from "./Carousel";

export default function Testimonials() {
  return (
    <div id="testimonials" className="py-20">
      <p className="text-center text-2xl lg:text-[40px] xl:text-[48px] uppercase text-crmsn font-extrabold pb-3">
        Testimonials
      </p>
      <p className="text-center text-xs lg:text-base text-grey font-medium px-10 lg:px-0 pb-12">
        We will keep working on your app until you are 100% satisfied - no buts.
      </p>
      <Carousel />
    </div>
  );
}
