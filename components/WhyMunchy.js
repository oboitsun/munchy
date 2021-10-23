import React from "react";
import Image from "next/image";
import Button from "./Button";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function WhyMunchy() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "60vw", opacity: 0, transition: { duration: 1 } },
  };
  return (
    <div
      ref={ref}
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
          <motion.div
            variants={cont}
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            className="font-extrabold  text-[32px] lg:text-[40px] xl:text-[48px] leading-tight self-center l  "
          >
            <motion.p key={1} variants={item} className="text-crmsn  uppercase">
              Why choose Munchy?
            </motion.p>
            <motion.p
              key={2}
              variants={item}
              className="text-black text-base py-4 uppercase w-3/4 lg:w-full"
            >
              Your own easy to use admin panel
            </motion.p>
            <motion.p
              key={3}
              variants={item}
              className="text-xs leading-normal font-medium text-gray-400 pb-4"
            >
              With your Munchy subscription you will receive an easy to use admin panel in
              which you can see all orders, customers, credit card payments and adjust
              your menu
            </motion.p>
            <motion.div key={4} variants={item}>
              <Button
                addClass="text-white lg:max-w-max px-4"
                full
                text="start free trial"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
