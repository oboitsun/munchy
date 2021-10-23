import React from "react";

export default function Input({ type, plchldr, iconSrc }) {
  return (
    <div className="relative max-h-[52px]">
      <input
        className="w-full inputStyle    px-5 py-3"
        type="type"
        placeholder={plchldr}
      />
      <img
        className=" absolute top-1/2 transform -translate-y-1/2 right-5"
        src={iconSrc}
        alt={plchldr}
      />
    </div>
  );
}
