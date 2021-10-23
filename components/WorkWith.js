import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function WorkWith() {
  const { ref, inView } = useInView({ threshold: 0.4 });
  const cont = {
    show: {
      transition: { duration: 0.3, staggerChildren: 0.1, delayChildren: 0.3 },
    },
    hidden: { transition: { duration: 0.3 } },
  };
  const item = {
    show: { x: 0, scale: [1, 1.3, 1], opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-100%", scale: 0, opacity: 0, transition: { duration: 1 } },
  };
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      ref={ref}
      className="w-full flex justify-between items-center lg:col-span-2 lg:pt-10 mt-6 "
    >
      <motion.div variants={item} key={1} className="w-9 lg:w-[72px] xl:w-[92px]">
        <Image
          src="/imgs/stripe.svg"
          layout="responsive"
          width={36}
          height={15}
          alt="stripe"
        />
      </motion.div>
      <motion.div
        variants={item}
        key={2}
        className="hidden lg:block w-2 h-2 rounded-full bg-drkGray"
      ></motion.div>
      <motion.div variants={item} key={3} className="w-[84px] lg:w-[150px] xl:w-[211px]">
        <Image
          src="/imgs/windcave.png"
          layout="responsive"
          width={211}
          height={42}
          alt="windcave"
        />
      </motion.div>
      <motion.div
        variants={item}
        key={4}
        className="hidden lg:block w-2 h-2 rounded-full bg-drkGray"
      ></motion.div>
      <motion.div key={5} variants={item} className="w-8 lg:w-[68px] xl:w-[97px]">
        <Image
          src="/imgs/vend.svg"
          layout="responsive"
          width={33}
          height={15}
          alt="vend"
        />
      </motion.div>
      <motion.div
        variants={item}
        key={6}
        className="hidden lg:block w-2 h-2 rounded-full bg-drkGray"
      ></motion.div>
      <motion.div variants={item} key={7} className="w-[52px] lg:w-[83px] xl:w-[100px]">
        <Image
          src="/imgs/xero.svg"
          layout="responsive"
          width={52}
          height={15}
          alt="xero"
        />
      </motion.div>
    </motion.div>
  );
}
