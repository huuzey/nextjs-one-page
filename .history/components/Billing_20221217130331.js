import Image from "next/image";
import React from "react";
import { bill } from "../src/assets";

const Billing = () => {
  return (
    <div className="sm:columns-1 md:columns-2">
      <div>
        <Image src={bill}></Image>
      </div>
      <div className="mt-9">
        <h1 className="text-white md:text-[40px]  sm:text-[30px]">
          Easily control your
          <br /> billing and invoicing
        </h1>
      </div>
    </div>
  );
};

export default Billing;
