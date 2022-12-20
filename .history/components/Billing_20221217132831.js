import Image from "next/image";
import React from "react";
import { bill, googleplay, appstore } from "../src/assets";

const Billing = () => {
  return (
    <div className="sm:columns-1 md:columns-2">
      <div>
        <Image src={bill}></Image>
      </div>
      <div className="pt-10 font-poppins">
        <h1 className="text-white md:text-[40px]  sm:text-[30px]">
          Easily control your
          <br /> billing and invoicing
        </h1>
        <p className="text-white mt-5 max-w-[400px]">
          Elit enim sed massa etiam mauris eu adipiscine ultrices ametodio
          aenaen neque fuske ipsum rankus alipartit integer platesa platesa.
        </p>
        <div>
          <Image src={googleplay}></Image>
        </div>
      </div>
    </div>
  );
};

export default Billing;
