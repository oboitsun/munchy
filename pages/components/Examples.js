import React from "react";
import Image from "next/image";
const examples = [
  {
    cls: "pb-[100%]",
    imgSrc: "/imgs/tile1.png",
  },
  {
    cls: "pb-[100%]",
    imgSrc: "/imgs/tile3.png",
  },
  {
    cls: "col-span-2 lg:col-start-2 lg:row-start-1 pb-[50%]",
    imgSrc: "/imgs/tile2.png",
  },

  {
    cls: "pb-[100%]",
    imgSrc: "/imgs/tile6.png",
  },
  {
    cls: "lg:col-start-5 lg:row-start-1 row-span-2 pb-[50%]",
    imgSrc: "/imgs/tile4.png",
  },
  {
    cls: "pb-[100%] ",
    imgSrc: "/imgs/tile5.png",
  },
  {
    cls: "col-span-2 lg:col-start-3 lg:row-start-2 pb-[50%]",
    imgSrc: "/imgs/tile7.png",
  },
  {
    cls: "col-span-2 lg:col-start-1 lg:row-start-3 pb-[50%]",
    imgSrc: "/imgs/tile2.png",
  },
  {
    cls: "pb-[100%]",
    imgSrc: "/imgs/tile6.png",
  },
  {
    cls: "pb-[100%]",
    imgSrc: "/imgs/tile1.png",
  },
  {
    cls: "pb-[100%] ",
    imgSrc: "/imgs/tile5.png",
  },
];
export default function Examples() {
  return (
    <div id="about-us" className="px-10 bg-lghtGray flex flex-col items-center py-14">
      <p className="font-extrabold uppercase xl:text-2xl">Examples of Custom Apps</p>
      <p className="text-center font-medium text-xs xl:text-base leading-normal text-grey pt-4 pb-6">
        Below are some of the custom designs we have done for some restaurants in New
        Zealand
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-md lg:max-w-864 xl:max-w-1080 mx-auto">
        {examples.map((tile, i) => (
          <div
            key={i}
            className={`relative ${i > 5 && "lg:block hidden"} ${
              tile.cls
            } w-full rounded-[10px] overflow-hidden `}
          >
            <Image src={tile.imgSrc} layout="fill" alt="tile" />
          </div>
        ))}
      </div>
    </div>
  );
}
