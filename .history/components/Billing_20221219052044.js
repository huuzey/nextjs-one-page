import Image from "next/image";
import React, { useEffect } from "react";
import { bill, googleplay, appstore } from "../src/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Billing = () => {
  useEffect(() => {
    AOS.init({
      delay: "0",
      duration: "1000",
      once: "true",
    });
  }, []);

  return (
    <div className="sm:columns-1 md:columns-2">
      <div data-aos="slide-up" className="ml-9">
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
        <div className="flex">
          <Image className="max-w-[30%] max-h-[20%]" src={googleplay}></Image>
          <Image
            className="max-w-[30%] max-h-[20%] object-contain "
            src={appstore}
          ></Image>
        </div>
      </div>
    </div>
  );
};

export default Billing;
