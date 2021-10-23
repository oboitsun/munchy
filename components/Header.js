import React from "react";
import Burger from "./Burger";
import Logo from "./Logo";
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
    className:
      "cursor-pointer text-white font-bold lg:text-grey transform transition-all hover:scale-110 hover:text-crmsn ",
  };
  return (
    <div className="w-full flex flex-col  items-center  fixed top-0 left-0 z-30  h-[92px] lg:h-[112px] overflow-hidden ">
      <div className="w-full  py-[30px] px-10 lg:px-0 relative  bg-lghtGray">
        <div className="max-w-864 xl:max-w-1080 mx-auto justify-between flex items-center">
          <div>
            <Logo wide={false} />
          </div>
          <Burger showMenu={showMenu} setShowMenu={setShowMenu} />
          <div className="hidden lg:flex text-xs xl:text-base font-bold lg:gap-8 xl:gap-10 items-center">
            {links.map((l, i) => (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ))}
            <Button type="filled" spcng="px-9" />
          </div>
        </div>
      </div>
    </div>
  );
}
