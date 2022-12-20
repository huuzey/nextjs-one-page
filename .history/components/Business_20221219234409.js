import Image from "next/image";
import React, { useEffect } from "react";
import { star, send, sheild } from "../src/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Business = () => {
  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <div className="md:columns-2 sm:columns-1 ">
      <div
        data-aos-delay="0"
        data-aos="flip-up"
        data-aos-duration="1000"
        data-aos-once="true"
        className="ml-12 flex flex-col  text-white"
      >
        <h1 className="md:text-[40px] sm:text-[30px]">
          you do the business
          <br />
          we'll handle the money.
        </h1>
        <p className="max-w-[370px] mt-5">
          with the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money . But with hundrends
          of cards on the market .
        </p>
        <div className="mt-5">
          <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-lg  hover:from-pink-500 hover:to-yellow-500 px-4">
            Get Started
          </button>
        </div>
      </div>
      <div
        data-aos-delay="500"
        data-aos="flip-down"
        data-aos-duration="1000"
        data-aos-once="true"
        className="sm:mt-4 sm:max-w-full"
      >
        <div className="flex hover:bg-gray-800 rounded-xl w-[50%] pb-5 text-white">
          <Image src={star} className="mr-4 object-contain"></Image>
          <div>
            <h1 className="text-[20px] text-dimwhite">Rewards</h1>
            <p className="max-w-[300px]">
              The best credit cards offer tantalizing combination of promotion
              and prizes
            </p>
          </div>
        </div>
        <div className="flex hover:bg-gray-800 rounded-xl w-[50%] mb-5 text-white">
          <Image src={sheild} className="mr-4 object-contain"></Image>
          <div>
            <h1 className="text-[20px] text-dimwhite">100% secured</h1>
            <p className="max-w-[300px]">
              We take protactive steps make sure your information and
              transaction are safe.
            </p>
          </div>
        </div>
        <div className="flex hover:bg-gray-800 rounded-xl w-[50%] mb-5 text-white">
          <Image src={send} className="mr-4 object-contain"></Image>
          <div>
            <h1 className="text-[20px] text-dimwhite">Balance Transfer</h1>
            <p className="max-w-[300px]">
              A balance transfer credit card can save a lot of money in interst
              changes
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Business;
