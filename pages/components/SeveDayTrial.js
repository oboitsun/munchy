import React from "react";
import Button from "./Button";

export default function SeveDayTrial() {
  return (
    <div className="w-full bg-crmsn text-white p-10 max-w-864 xl:max-w-1080 lg:py-8 xl:py-6 lg:px-[30px] lg:rounded-xl mx-auto relative lg:top-[-70px] xl:top-[-72px]">
      <div className=" mx-auto lg:flex lg:max-w-full lg:justify-between items-center">
        <p className="font-extrabold text-2xl lg:text-[32px] xl:text-[40px] xl:leading-[48px] uppercase  xl:max-w-[303px] ">
          Start a free 7 day trial
        </p>
        <p className="font-medium text-[10px] xl:text-sm leading-normal py-4 lg:py-0 mx-auto lg:max-w-[338px] xl:max-w-[440px] w-full">
          Fill out the form to the right and we will set you up a free trial of our Munchy
          platform so that you can see how it works and experience it without committing
          to a subscription
        </p>
        <div className="min-w-max">
          <Button
            addClass="border-2 border-white px-4 max-w-max "
            text="start trial now"
          />
        </div>
      </div>
    </div>
  );
}
