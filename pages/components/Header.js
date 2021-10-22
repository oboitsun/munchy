import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
import ModalMenu from "./ModalMenu";
import { Link as Anchor } from "react-scroll";
import Button from "./Button";

export default function Header({ showMenu, setShowMenu }) {
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
  return (
    <div className="w-full flex flex-col  items-center  fixed top-0 left-0 z-30  h-[92px] overflow-hidden ">
      <div className="w-full  py-[30px] px-10 lg:px-0 relative  bg-lghtGray">
        <div className="max-w-864 xl:max-w-1080 mx-auto justify-between flex items-center">
          <Logo />
          <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
          <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-8 xl:gap-10 items-center">
            {links.map((l, i) => (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ))}
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
}
