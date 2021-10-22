import React from "react";
import Button from "./Button";
import FormButton from "./FormButton";
import Input from "./Input";
import WorkWith from "./WorkWith";

export default function FormSection() {
  return (
    <div className="px-10 py-14 lg:px-0 max-w-864 xl:max-w-1080 mx-auto lg:grid lg:grid-cols-[305px,1fr] xl:lg:grid-cols-[367px,1fr] gap-x-14 xl:pb-[100px]">
      <div className="font-extrabold  text-[32px] lg:text-[40px] xl:text-[48px] leading-tight self-center l  ">
        <p className="text-crmsn  uppercase">Need an app and website</p>
        <p className="text-black text-base py-4 uppercase w-3/4 lg:w-full">
          for your restaurant?
        </p>
        <p className="text-xs lg:text-base leading-normal font-medium text-gray-400 pb-4">
          Receive orders through your own app and website for your restaurant
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 lg:gap-6 lg:grid-cols-2  lg:grid-rows-[repeat(3,52px)]">
        <Input type="text" plchldr="Full Name" iconSrc="/imgs/person_icon.svg" />
        <Input type="text" plchldr="Email" iconSrc="/imgs/email_icon.svg" />
        <Input type="text" plchldr="Phone" iconSrc="/imgs/phone_icon.svg" />
        <Input type="text" plchldr="Subdomain Name" iconSrc="/imgs/domain_icon.svg" />
        <FormButton
          full
          text="start a trial now"
          addClass="text-base py-4 lg:py-2 lg:col-span-2"
        />
      </div>
      <WorkWith />
    </div>
  );
}
