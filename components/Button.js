import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
export default function Button({
  text = "free trial",
  type = "filled",
  spcng = "px-4",
  addClass,
  ...props
}) {
  const cmn =
    "group  text-white leading-none font-bold text-xs lg:text-base py-3.5 uppercase  flex items-center justify-center rounded-[10px] box-content transitions-all duration-[0.4s]";
  const styles = {
    filled: {
      hovered:
        "hover:border-crmsn border-2 hover:bg-transparent hover:text-crmsn hover:shadow-lg hover:scale-[105%] hover:transform",
      unhovered: " bg-crmsn ",
    },
    outlined: {
      hovered:
        "hover:border-white border-2 hover:bg-transparent hover:text-white hover:shadow-lg hover:scale-[105%] hover:transform",
      unhovered: "border-2 border-white",
    },
  };

  return (
    <Link href="/">
      <a>
        <button
          className={`${spcng}   ${cmn} ${styles[type].hovered}   ${
            styles[type].unhovered
          }  ${addClass ? addClass : ""}`}
        >
          <span className=" pr-2.5">{text}</span>
          <svg
            className="fill-current transform transition-transform group-hover:bounce-x"
            width="8"
            height="12"
            viewBox="0 0 8 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.70748 0L0.29248 1.415L4.87748 6L0.29248 10.585L1.70748 12L7.70748 6L1.70748 0Z"
              fill="current"
            />
          </svg>
        </button>
      </a>
    </Link>
  );
}
