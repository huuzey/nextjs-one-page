import Image from "next/image";
import React from "react";
import { star, send, sheild } from "../src/assets";
const Business = () => {
  return (
    <div className="md:columns-2 sm:columns-1 ">
      <div className="ml-12 flex flex-col  text-white">
        <h1 className="md:text-[40px] sm:text-[30px]">
          you do the business
          <br />
          we'll handle the money.
        </h1>
        <p className="max-w-[370px] mt-5">
          with the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money . But with hundrends
          of cards on the market.
        </p>
        <div className="mt-5">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-lg  hover:from-pink-500 hover:to-yellow-500 px-4">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <div>
          <Image src={star}></Image>
        </div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Business;
