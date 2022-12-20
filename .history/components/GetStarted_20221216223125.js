import Image from "next/image";
import React from "react";
import { arrowUp } from "../src/assets";

const GetStarted = () => {
  return (
    <div className="rounded-full flex justify-center items-center bg-cyan-500 w-[140px] h-[140px]">
      <div className="rounded-full flex flex-col justify-center items-center bg-primary w-[100%] h-[100%] ">
        <div className="flex ">
          <p className="mr-2">Get</p>
          <Image src={arrowUp} className=" w-[18px] h-[18px]"></Image>
        </div>
        <p>Started</p>
      </div>
    </div>
  );
};

export default GetStarted;
