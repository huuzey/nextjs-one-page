import Image from "next/image";
import React from "react";
import { people01 } from "../src/assets";

const Test = () => {
  return (
    <div>
      <div className="ml-12 text-white">
        <p className="max-w-[250px] mt-5">
          Money is only a tool . It will take you wherever you wish, but it will
          not replace you as the driver.
        </p>
        <div className="flex mt-5 ">
          <Image src={people01} className="mr-3"></Image>
          <div>
            <h1>Herman jansen</h1>
            <p> Founder and CEO</p>
          </div>
        </div>
      </div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Test;
