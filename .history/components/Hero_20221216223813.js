import React from "react";
import Image from "next/image";
import { discount } from "../src/assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div>
      <div className="text-white w-full flex flex-row mt-8 ml-12">
        <Image
          src={discount}
          alt="discount"
          className=" mr-2 w-[42px] h-[42px] "
        ></Image>
        <span className=" mr-2">20%</span>
        <span className=" mr-2">Discount for</span>

        <span className="text-bold  mr-2"> 1 month</span>
      </div>
      <div className="text-white justify-between ml-12">
        <div className="flex mt-2">
          <h1 className="mr-2  mb-1">THE</h1>
          <h1 className="mr-4 m2-4">NEXT</h1>
        </div>
        <div className="flex">
          <h1 className="text-secondary  ml-0 mb-1 text-[52px] ss:text-[72px]">
            GENERATION
          </h1>
          <GetStarted />
        </div>
        <div className="flex">
          <h1 className="mb-5 mr-2 text-[22px]  ">payment</h1>
          <span className="mb-5 text-[22px]">method.</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
