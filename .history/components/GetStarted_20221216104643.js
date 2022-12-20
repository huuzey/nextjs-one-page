import Image from "next/image";
import React from "react";
import { arrowUp } from "../src/assets";

const GetStarted = () => {
  return (
    <div className="rounded-full border-cyan-500">
      <div className="flex ">
        <p>Get</p>
        <Image src={arrowUp} className=" w-[22px] h-[22px]"></Image>
      </div>
      <p>Started</p>
    </div>
  );
};

export default GetStarted;
