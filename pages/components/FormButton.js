import React from "react";

export default function FormButton({ full, addClass, text }) {
  return (
    <button
      className={`block max-h-[52px] ${
        addClass ? addClass : " px-9"
      } leading-none font-bold text-xs lg:text-base text-white rounded-[10px] bg-crmsn    py-3.5 uppercase  flex items-center justify-center  ${
        full ? "w-full" : ""
      } `}
    >
      <span className=" pr-2.5">{text}</span>
      <svg
        width="8"
        height="12"
        viewBox="0 0 8 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1.70748 0L0.29248 1.415L4.87748 6L0.29248 10.585L1.70748 12L7.70748 6L1.70748 0Z"
          fill="white"
        />
      </svg>
    </button>
  );
}
