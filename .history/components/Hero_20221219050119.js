import React, { useEffect } from "react";
import Image from "next/image";
import { discount, robot } from "../src/assets";
import GetStarted from "./GetStarted";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="lg:columns-2 sm:columns-1 md:columns-1">
      <div
        data-aos-delay="50"
        data-aos="fade-right"
        data-aos-duration="1000"
        className="text-white font-poppins bg-gray-900 first:justify-start  w-[50%] rounded-xl shadow-sm shadow-cyan-500 flex flex-row mt-8 ml-12 items-center justify-center"
      >
        <Image
          src={discount}
          alt="discount"
          className=" mr-2 w-[42px] h-[42px] "
        ></Image>
        <span className=" mr-2">20%</span>
        <span className=" mr-2">Discount for</span>

        <span className="text-bold  mr-2"> 1 month</span>
      </div>
      <div className="text-white justify-between mb-12 ml-12">
        <div className="flex mt-2">
          <h1 className="mr-2 font-semibold font-poppins  mb-1">THE</h1>
          <h1 className="mr-4 m2-4 font-semibold font-poppins ">NEXT</h1>
        </div>
        <div className="flex">
          <h1 className="text-secondary font-semibold font-poppins  text-gradient  ml-0 mb-1 text-[52px] ss:text-[72px]">
            GENERATION
          </h1>
          <div className="sm:hidden md:flex ">
            <GetStarted />
          </div>
        </div>
        <div className="flex">
          <h1 className="mb-5 mr-2 text-[22px]  ">payment</h1>
          <span className="mb-5 text-[22px]">method.</span>
        </div>
        <div className="max-w-[470px] mt-5 font-poppins text-dimwhite text-[18px] ">
          <p>
            Our team experts uses a methodology to identify the credit cards
            most likely to fit your needs.We examine annual percentage rates ,
            annual fees.
          </p>
        </div>
      </div>
      <div className="flex text-white   ">
        <div className="">
          2000+ <span className="text-gradient  mr-3 "> Active users</span>
        </div>
        <div>
          200+ <span className="text-gradient  mr-3"> TRUSTED BY Company</span>
        </div>
        <div>
          $200M+ <span className="text-gradient  mr-3"> TRANSACTION</span>
        </div>
      </div>

      <div>
        <Image
          src={robot}
          alt="billing"
          className=" w-[100%]  h-[100%]"
        ></Image>
      </div>
      <div className="sm:flex md:hidden ">
        <GetStarted />
      </div>
    </div>
  );
};

export default Hero;
