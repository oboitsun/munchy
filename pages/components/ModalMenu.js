import React from "react";
import { motion } from "framer-motion";
import Button from "./Button";
import { Link as Anchor } from "react-scroll";

export default function ModalMenu({ showMenu, setShowMenu }) {
  const links = [
    { href: "home", text: "Home" },
    { href: "features", text: "Features" },
    { href: "about-us", text: "About Us" },
    { href: "testimonials", text: "Testimonials" },
    { href: "pricing", text: "Pricing" },
  ];
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer text-white font-bold lg:text-grey ",
  };
  const cont = {
    show: {
      height: "100vh",
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
      className="bg-drkGray w-full z-20 fixed h-screen top-0 bottom-0 px-10 py-10   lg:hidden pt-[92px]"
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
