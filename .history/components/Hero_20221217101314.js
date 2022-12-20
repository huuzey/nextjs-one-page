import React from "react";
import Image from "next/image";
import { discount, robot } from "../src/assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <div className="lg:columns-2 sm:columns-1 md:columns-1">
      <div className="text-white w-full flex flex-row mt-8 ml-12 ">
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
          <h1 className="mr-2 font-semibold font-poppins  mb-1">THE</h1>
          <h1 className="mr-4 m2-4 font-semibold font-poppins ">NEXT</h1>
        </div>
        <div className="flex">
          <h1 className="text-secondary font-semibold font-poppins  text-gradient  ml-0 mb-1 text-[52px] ss:text-[72px]">
            GENERATION
          </h1>
          <div className="sm:hidden md:flex ">
            <GetStarted />
          </div>
        </div>
        <div className="flex">
          <h1 className="mb-5 mr-2 text-[22px]  ">payment</h1>
          <span className="mb-5 text-[22px]">method.</span>
        </div>
        <div className="max-w-[470px] mt-5 font-poppins text-dimwhite text-[18px] ">
          <p>
            Our team experts uses a methodology to identify the credit cards
            most likely to fit your needs.We examine annual percentage rates ,
            annual fees.
          </p>
        </div>
      </div>
      <div>
        <Image
          src={robot}
          alt="billing"
          className=" w-[100%]  h-[100%]"
        ></Image>
      </div>
      <div className="sm:flex md:hidden ">
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
