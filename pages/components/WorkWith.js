import React from "react";
import Image from "next/image";
export default function WorkWith() {
  return (
    <div className="w-full flex justify-between items-center lg:col-span-2 lg:pt-10">
      <div className="w-9 lg:w-[72px] xl:w-[92px]">
        <Image
          src="/imgs/stripe.svg"
          layout="responsive"
          width={36}
          height={15}
          alt="stripe"
        />
      </div>
      <div className="hidden lg:block w-2 h-2 rounded-full bg-drkGray"></div>
      <div className="w-[84px] lg:w-[150px] xl:w-[211px]">
        <Image
          src="/imgs/windcave.png"
          layout="responsive"
          width={211}
          height={42}
          alt="windcave"
        />
      </div>
      <div className="hidden lg:block w-2 h-2 rounded-full bg-drkGray"></div>
      <div className="w-8 lg:w-[68px] xl:w-[97px]">
        <Image
          src="/imgs/vend.svg"
          layout="responsive"
          width={33}
          height={15}
          alt="vend"
        />
      </div>
      <div className="hidden lg:block w-2 h-2 rounded-full bg-drkGray"></div>
      <div className="w-[52px] lg:w-[83px] xl:w-[100px]">
        <Image
          src="/imgs/xero.svg"
          layout="responsive"
          width={52}
          height={15}
          alt="xero"
        />
      </div>
    </div>
  );
}
