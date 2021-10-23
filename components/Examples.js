import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
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
  const { ref, inView } = useInView({ threshold: 0.3 });
  const cont = {
    show: {
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { transition: { duration: 0.3 } },
  };
  const item = {
    show: { scale: [1, 1.3, 1], opacity: 1, transition: { duration: 0.3 } },
    hidden: { scale: 0, opacity: 0, transition: { duration: 1 } },
  };
  return (
    <div
      variants={cont}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      id="about-us"
      className="px-10 bg-lghtGray flex flex-col items-center py-14"
    >
      <p className="font-extrabold uppercase xl:text-2xl">Examples of Custom Apps</p>
      <p className="text-center font-medium text-xs xl:text-base leading-normal text-grey pt-4 pb-6">
        Below are some of the custom designs we have done for some restaurants in New
        Zealand
      </p>
      <motion.div
        ref={ref}
        variants={cont}
        initial="hidden"
        animate={inView ? "show" : "hidden"}
        className="grid grid-cols-2 lg:grid-cols-5 gap-4 w-full max-w-md lg:max-w-864 xl:max-w-1080 mx-auto"
      >
        {examples.map((tile, i) => (
          <motion.div
            variants={item}
            key={i}
            className={`relative ${i > 5 && "lg:block hidden"} ${
              tile.cls
            } w-full rounded-[10px] overflow-hidden `}
          >
            <Image src={tile.imgSrc} layout="fill" alt="tile" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
