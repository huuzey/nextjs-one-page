import Image from "next/image";
import React from "react";
import { bill } from "../src/assets";

const Billing = () => {
  return (
    <div className="sm:columns-1 md:columns-2">
      <div>
        <Image src={bill}></Image>
      </div>
      <div className="pt-10">
        <h1 className="text-white md:text-[40px]  sm:text-[30px]">
          Easily control your
          <br /> billing and invoicing
        </h1>
        <p className="text-white max-w-[400px]">
          elit enim sed massa etiam mauris eu adipiscine ultrices ametodio
          aenaen neque fuske ipsum rankus alipartit integer platesa platesa.
        </p>
      </div>
    </div>
  );
};

export default Billing;
