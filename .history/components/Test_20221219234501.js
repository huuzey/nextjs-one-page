import Image from "next/image";
import React, { useEffect } from "react";
import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  people01,
  people02,
  people03,
} from "../src/assets";
import AOS from "aos";
import "aos/dist/aos.css";

const Test = () => {
  useEffect(() => {
    AOS.init({
      delay: "0",
      duration: "2000",
    });
  }, []);

  return (
    <div>
      <div data-aos="slide-right" className="sm:columns-1 md:columns-3">
        <div className="ml-12 hover:bg-gray-800 rounded-xl pt-5 grid items-center justify-center text-white">
          <p className="max-w-[250px] mt-5">
            Money is only a tool . It will take you wherever you wish, but it
            will not replace you as the driver .
          </p>
          <div className="flex mt-5 ">
            <Image src={people01} className="mr-3"></Image>
            <div>
              <h1 className="text-gradient">Herman jansen</h1>
              <p> Founder and CEO</p>
            </div>
          </div>
        </div>
        <div>
          <div className="ml-12 hover:bg-gray-800 pt-5 rounded-xl text-white grid items-center justify-center">
            <p className="max-w-[250px] mt-5">
              Money makes your life easier . If you have lucky to have it , you
              are lucky.
            </p>
            <div className="flex mt-5 ">
              <Image src={people02} className="mr-3"></Image>
              <div>
                <h1 className="text-gradient">Steve Mark</h1>
                <p> Founder and Leader</p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="ml-12 hover:bg-gray-800 rounded-xl pt-5 text-white grid items-center justify-center">
            <p className="max-w-[250px] mt-5">
              It is usually people in the money business ,finance and
              international that are really rich
            </p>
            <div className="flex mt-5 ">
              <Image src={people03} className="mr-3"></Image>
              <div>
                <h1 className="text-gradient">Kane Gallager</h1>
                <p>Founder and Leader</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div data-aos="slide-left" className=" mt-6 sm:columns-2 md:columns-4 ">
        <Image className="max-w-[158px] " src={airbnb}></Image>
        <Image className="max-w-[158px]" src={coinbase}></Image>
        <Image className="max-w-[158px]" src={binance}></Image>
        <Image className="max-w-[158px]" src={dropbox}></Image>
      </div>
    </div>
  );
};

export default Test;
