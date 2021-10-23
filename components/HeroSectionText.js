import React from "react";
import Button from "./Button";
import { motion } from "framer-motion";

export default function HeroSectionText({ inView }) {
  const cont = {
    show: {
      x: 0,
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { x: 0, transition: { duration: 1 } },
  };
  const item = {
    show: { x: 0, transition: { duration: 0.3 } },
    hidden: { x: "-100vw", transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      className="font-extrabold uppercase text-[32px] lg:text-[40px] xl:text-[48px] leading-tight self-center lg:max-w-[312px] xl:max-w-[375px] pb-10 lg:pb-0 lg:order-1 lg:w-1/2 text-center lg:text-left"
    >
      <motion.p key={1} variants={item} className="text-black  ">
        Need an app and website{" "}
      </motion.p>
      <motion.p key={2} variants={item} className="text-crmsn pb-5">
        {" "}
        for your restaurant?
      </motion.p>
      <motion.div
        key={3}
        className="flex justify-center lg:justify-start"
        variants={item}
      >
        {" "}
        <Button full text="start free trial" />
      </motion.div>
    </motion.div>
  );
}
