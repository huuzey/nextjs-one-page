import Image from "next/image";
import React from "react";
import { bill } from "../src/assets";

const Billing = () => {
  return (
    <div className="sm:columns-1 md:columns-2">
      <div>
        <Image src={bill}></Image>
      </div>
      <div>
        <h1 className="text-white">
          Easily control your
          <br /> billing and invoicing
        </h1>
      </div>
    </div>
  );
};

export default Billing;
