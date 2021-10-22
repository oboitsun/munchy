import React from "react";
import Image from "next/image";
import Button from "./Button";
const items = [
  {
    pic: "/imgs/clock.svg",
    heading: "Accept Orders 24/7",
    text: "Receive orders at any time via your own website and app",
  },
  {
    pic: "/imgs/star.svg",
    heading: "Easy to use",
    text: "Our platform is very easy to use for both customer and owners!",
  },
  {
    pic: "/imgs/globe.svg",
    heading: "Free website",
    text: "Get your own website included in your Munchy subscription",
  },
];
export default function HeroSection() {
  const colstart = {
    0: "col-start-1 xl:col-start-2",
    1: "col-start-3 xl:col-start-4",
    2: "col-start-5 xl:col-start-6",
  };
  return (
    <div
      id="home"
      className="flex flex-col lg:flex-row flex-wrap max-w-864 px-10 lg:px-0 pb-14 lg:pb-20 xl:pb-24 lg:pt-8  xl:max-w-1080 mx-auto justify-between"
    >
      <div className="w-full py-8 lg:order-2 lg:w-2/3 lg:max-w-[496px] xl:max-w-[615px] flex-grow-1">
        <Image
          src="/imgs/hero-image.png"
          layout="intrinsic"
          width={636}
          height={534}
          alt="hero-image"
        />
      </div>
      <div className="font-extrabold uppercase text-[32px] lg:text-[40px] xl:text-[48px] leading-tight self-center lg:max-w-[312px] xl:max-w-[375px] pb-10 lg:pb-0 lg:order-1 lg:w-1/2 text-center lg:text-left">
        <p className="text-black  ">Need an app and website </p>
        <p className="text-crmsn pb-5"> for your restaurant?</p>
        <Button full text="start free trial" />
      </div>
      <div className="flex flex-col min-w-min   mx-auto  lg:grid  grid-rows-[56px] custom-grid gap-x-8  lg:order-3 lg:justify-between lg:w-full">
        <div className="   lg:block hidden w-px  opacity-30 h-full  bg-grey  col-start-2 row-start-1 xl:col-start-3"></div>
        <div className="   lg:block hidden w-px  opacity-30 h-full bg-grey  col-start-4 row-start-1 xl:col-start-5"></div>
        <div className="   xl:block hidden w-px  opacity-30 h-full  bg-grey   row-start-1 col-start-1"></div>
        <div className="   xl:block hidden w-px  opacity-30 h-full bg-grey  row-start-1 col-start-7"></div>
        {items.map((it, i) => (
          <div
            key={i}
            className={`grid grid-cols-[30px,1fr] lg:flex gap-x-5 lg:gap-x-0  w-full row-start-1 ${colstart[i]}

            `}
          >
            <div className="place-self-center pr-5">
              <Image
                src={it.pic}
                alt={it.heading}
                layout="fixed"
                width={30}
                height={30}
              />
            </div>
            <div className="px-2 lg:px-0 lg:max-w-[192px]">
              <p className="font-bold  text-sm uppercase">{it.heading}</p>
              <p className="text-xs leading-normal font-medium text-gray-400">
                {it.text}
              </p>
            </div>
            {i < items.length - 1 && (
              <div className="w-[100px] flex-shrink-0  lg:hidden lg:h-full lg:my-0 mx-auto  opacity-30 my-[30px] h-px bg-grey  col-span-2 lg:col-span-1"></div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
