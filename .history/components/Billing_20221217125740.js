import Image from "next/image";
import React from "react";
import { bill } from "../src/assets";

const Billing = () => {
  return (
    <div>
      <div>
        <Image src={bill}></Image>
      </div>
      <div></div>
    </div>
  );
};

export default Billing;
