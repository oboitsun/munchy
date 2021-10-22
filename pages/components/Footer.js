import React from "react";
import Logo from "./Logo";
import { Link as Anchor } from "react-scroll";
import Button from "./Button";
const links = [
  { href: "home", text: "Home" },
  { href: "features", text: "Features" },
  { href: "about-us", text: "About Us" },
  { href: "testimonials", text: "Testimonials" },
  { href: "pricing", text: "Pricing" },
];
export default function Footer() {
  const linkProps = {
    spy: true,
    smooth: true,
    offset: -100,
    duration: 500,
    activeClass: "active",
    className: "cursor-pointer text-white font-bold lg:text-grey ",
  };
  return (
    <div className="w-full flex flex-col  items-center    ">
      <div className="w-full  py-[40px] px-10 lg:px-0 relative z-20 bg-white">
        <div className="max-w-864 xl:max-w-1080 mx-auto justify-between flex flex-col lg:flex-row items-center">
          <Logo wide />
          <p className="text-center max-w-[287px] pt-8">
            2021 © NZ Marketing Group Limited trading as Munchy. All Rights Reserved.
          </p>
          <div className="hidden lg:flex text-xs xl:text-base font-bold gap-8 xl:gap-10 items-center">
            {links.map((l, i) => (
              <Anchor key={i} to={l.href} {...linkProps}>
                {l.text}
              </Anchor>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
