import React from "react";
import Package from "./Package";
import Package2 from "./Package2";

export default function Packages() {
  const plans = [
    {
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
    },
    {
      name: "Optional Custom App",
      custom: true,
      price: 1500,
      features: [
        "You will get your own branded mobile app that allows customers to make orders, by downloading on the App Store and Play Store - and includes a seperate iPad version of the app to put in the kitchen to see orders and hear a sound.",
      ],
      adminPanelFeatures: [""],
    },
  ];
  return (
    <div id="pricing" className="bg-lghtGray px-10 lg:px-0 py-20 pb-4">
      <p className="font-extrabold uppercase xl:text-2xl text-center">Our Plans</p>
      <p className="text-center font-medium text-xs xl:text-base leading-normal text-grey pt-4 pb-6">
        Below are some of our plans
      </p>
      <div className="max-w-864 mx-auto lg:grid lg:grid-cols-2 gap-10 xl:max-w-1080">
        <Package />
        <Package2 />
      </div>
    </div>
  );
}
