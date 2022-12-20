import Image from "next/image";
import React from "react";
import { card } from "../src/assets";

const Cards = () => {
  return (
    <div className="sm:columns-1 md:columns-2">
      <div className="text-white ml-10  ">
        <h1 className="md:text-[40px] sm:text-[30px] font-poppins">
          Find a better card deal
          <br /> in few easy steps.
        </h1>
        <p className="max-w-[370px] mt-5">
          acu tor tor prurs ,in matis at sed integer fauscibes. Aliquet wuis
          aliquet egetma mauris tortorali aliwriet ultrices ac ametau.
        </p>
        <div className="mt-5 sm:mb-4 md:mb-0">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-lg  hover:from-pink-500 hover:to-yellow-500 px-4">
            Get Started
          </button>
        </div>
      </div>
      <div>
        <Image src={card}></Image>
      </div>
    </div>
  );
};

export default Cards;
