import Image from "next/image";
import React, { useEffect } from "react";
import { card } from "../src/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Cards = () => {
  useEffect(() => {
    AOS.init({
      delay: "0",
      duration: "1000",
      once: "true",
    });
  }, []);

  return (
    <div className="sm:columns-1 md:columns-2">
      <div className="text-white ml-10  " data-aos="zoom-out-left">
        <h1 className="md:text-[40px] sm:text-[30px] font-poppins">
          Find a better card deal
          <br /> in few easy steps.
        </h1>
        <p className="max-w-[370px] mt-5">
          acu tor tor prurs ,in matis at sed integer fauscibes. Aliquet wuis
          aliquet egetma mauris tortorali aliwriet ultrices ac ametau.
        </p>
        <div
          data-aos="zoom-out-left"
          data-aos-delay="500"
          className="mt-5 sm:mb-4 md:mb-0"
        >
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-lg  hover:from-pink-500 hover:to-yellow-500 px-4">
            Get Started
          </button>
        </div>
      </div>
      <div data-aos="zoom-out-left">
        <Image src={card}></Image>
      </div>
    </div>
  );
};

export default Cards;
