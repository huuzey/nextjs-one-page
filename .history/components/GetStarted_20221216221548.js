import Image from "next/image";
import React from "react";
import { arrowUp } from "../src/assets";

const GetStarted = () => {
  return (
    <div className="rounded-full bg-rose-500">
      <div className="rounded-full bg-primary">
        <div className="flex ">
          <p>Get</p>
          <Image src={arrowUp} className=" w-[22px] h-[22px]"></Image>
        </div>
        <p>Started</p>
      </div>
    </div>
  );
};

export default GetStarted;
