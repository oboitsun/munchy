import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Link as Anchor } from "react-scroll";

export default function ModalMenu({ showMenu, setShowMenu, linkProps }) {
  const links = [
    { href: "home", text: "Home" },
    { href: "features", text: "Features" },
    { href: "about-us", text: "About Us" },
    { href: "testimonials", text: "Testimonials" },
    { href: "pricing", text: "Pricing" },
  ];
  const cont = {
    show: {
      height: "calc(100vh - 92px)",
      y: 0,
      transition: {
        duration: 0.4,
        staggerChildren: 0.1,
        delayChildren: 0.5,
      },
    },
    hidden: {
      height: 0,
      y: "-100vh",
    },
  };
  const item = {
    show: { height: "auto", x: 0, opacity: 1, transition: { duration: 0.3 } },
    hidden: { x: "-50vh", opacity: 0 },
  };
  return (
    <motion.div
      variants={cont}
      initial="hidden"
      animate={showMenu ? "show" : "hidden"}
      className="bg-drkGray w-full h-[calc(100vh-90px)] relative z-10 px-10 py-10   lg:hidden"
    >
      {links.map((l, i) => (
        <motion.div key={i} variants={item} className="text-3xl mb-5">
          <Anchor
            onClick={() => {
              setShowMenu(false);
            }}
            to={l.href}
            {...linkProps}
          >
            {l.text}
          </Anchor>
        </motion.div>
      ))}
      <motion.div key={11} variants={item}>
        <Button />
      </motion.div>
    </motion.div>
  );
}
