import React from "react";
import Image from "next/image";
import Button from "./Button";
export default function WhyMunchy() {
  return (
    <div
      id="features"
      className="w-full bg-lghtGray pt-7 pb-14 lg:pt-[100px] lg:pb-[200px] "
    >
      <div className="px-10 flex flex-col lg:flex-row items-center lg:gap-14 lg:max-w-864 xl:max-w-1080 lg:px-0 mx-auto">
        <div className="w-full max-w-max ">
          <Image
            src="/imgs/tablet2.png"
            alt="tablet"
            layout="intrinsic"
            width={529}
            height={367}
          />
        </div>
        <div className="w-full max-w-max">
          <div className="font-extrabold  text-[32px] lg:text-[40px] xl:text-[48px] leading-tight self-center l  ">
            <p className="text-crmsn  uppercase">Why choose Munchy?</p>
            <p className="text-black text-base py-4 uppercase w-3/4 lg:w-full">
              Your own easy to use admin panel
            </p>
            <p className="text-xs leading-normal font-medium text-gray-400 pb-4">
              With your Munchy subscription you will receive an easy to use admin panel in
              which you can see all orders, customers, credit card payments and adjust
              your menu
            </p>
            <Button addClass="lg:max-w-max px-4" full text="start free trial" />
          </div>
        </div>
      </div>
    </div>
  );
}
