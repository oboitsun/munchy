import React, { useState, useRef } from "react";
import Button from "./Button";

export default function Package({}) {
  const details = {
    name: "Monthly",
    price: 99,
    custom: false,
    features: [
      "Your own front end website for customers to order",
      "Customers can place orders for your menu",
      "Customers can receive push notifications for special offers etc",
      "Customers can pay using credit card",
      "Customers can enter coupon code for discounts on items",
      "Customers can see how long until their order is ready",
      "Customers can choose delivery or pick up options",
      "Customers can click repeat previous orders made",
    ],
    adminPanelFeatures: [
      "Ability to add all of your menu items in the backend yourself",
      "Manage your opening times",
      "* Receive and see credit card payments integrated with Stripe",
      "Adjust pricing and availability of orders in the system",
      "Send push notifications to all customers for specials or general news",
      "Add special items on your menu etc which show in a special category",
      "Change order statuses and notify customers when order is ready etc",
    ],
  };
  const [setActive, setActiveState] = useState("");
  const [setHeight, setHeightState] = useState("0px");

  const content = useRef(null);

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "");
    setHeightState(setActive === "active" ? "0px" : `${content.current.scrollHeight}px`);
  }
  return (
    <div
      className={`mb-10  rounded-[10px] h-auto self-start  overflow-hidden text-white bg-white  ${
        details?.custom ? " shdw-grey" : "shdw-crmsn"
      }`}
    >
      <div
        className={`${
          details?.custom ? "bg-drkGray" : "bg-crmsn"
        } px-[30px] py-6  rounded-b-[10px] uppercase flex items-center justify-between`}
      >
        <p className="font-extrabold text-xs pr-2">{details.name}</p>
        <div className="flex item-center ">
          <p className="font-bold text-[32px] leading-none">${details.price} </p>
          <p className=" text-xs leading-none ml-2 max-w-min   self-center ">
            +GST/ <br />
            {!details?.custom ? `Month` : ""}
          </p>
        </div>
      </div>
      <div className="p-[30px] text-grey">
        {details?.custom ? (
          <p className="text-xs leading-normal text-grey">{details.features[0]}</p>
        ) : (
          <>
            <ul className="list-decimal list-outside pl-5 text-xs leading-normal">
              {details.features.map((feature, i) => (
                <li className="pl-px pb-2" key={i}>
                  {feature}
                </li>
              ))}
            </ul>
            <div className="h-px w-full mt-[30px] bg-gray-200"></div>
            <div
              onClick={toggleAccordion}
              className="cursor-pointer flex w-full justify-between my-5"
            >
              <p className="font-extrabold text-xs uppercase text-black">
                Admin panel features
              </p>
              <img
                className={`transform transition-all ${
                  setActive ? "rotate-180" : "rotate-0"
                }`}
                src="/imgs/arrow-down.svg"
                alt="expand"
              />
            </div>
            <ul
              ref={content}
              style={{ maxHeight: `${setHeight}` }}
              className="list-disc list-outside pl-5 text-xs leading-normal transition-all overflow-hidden "
            >
              {details?.adminPanelFeatures &&
                details?.adminPanelFeatures.map((feature, i) => (
                  <li
                    className={`"pl-px ${
                      i < details.adminPanelFeatures.length - 1 ? "pb-2" : "pb-6"
                    } `}
                    key={i}
                  >
                    {feature}
                  </li>
                ))}
            </ul>

            <div className="h-px w-full bg-gray-200 box "></div>
          </>
        )}

        <Button type="filled" text="choose plan" addClass={"mt-6 "} />
      </div>
    </div>
  );
}
