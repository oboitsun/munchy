import React from "react";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import HeroSectionText from "./HeroSectionText";
import { animate, motion } from "framer-motion";
import HeroSectionFeatures from "./HeroSectionFeatures";

export default function HeroSection() {
  const { ref, inView } = useInView();

  return (
    <div
      ref={ref}
      id="home"
      className="overflow-hidden flex flex-col lg:flex-row flex-wrap max-w-864 px-10 lg:px-0 pb-14 lg:pb-20 xl:pb-24 lg:pt-8  xl:max-w-1080 mx-auto justify-between"
    >
      <motion.div
        // initial={{ x: "100vw" }}
        // animate={inView ? { x: 0 } : { x: "120vw" }}
        // transition={{ duration: 0.3, delay: 1 }}
        className="w-full py-8 lg:order-2 lg:w-2/3 lg:max-w-[496px] xl:max-w-[615px] flex-grow-1"
      >
        <Image
          src="/imgs/hero-image.png"
          layout="intrinsic"
          width={636}
          height={534}
          alt="hero-image"
        />
      </motion.div>
      <HeroSectionText inView={inView} />
      <HeroSectionFeatures inView={inView} />
    </div>
  );
}
