import Image from "next/image";
import React from "react";
import {
  airbnb,
  binance,
  coinbase,
  dropbox,
  people01,
  people02,
  people03,
} from "../src/assets";

const Test = () => {
  return (
    <div>
      <div className="sm:columns-1 md:columns-3">
        <div className="ml-12 hover:bg-gray-800 rounded-xl pt-5 grid items-center justify-center text-white">
          <p className="max-w-[250px] mt-5">
            Money is only a tool . It will take you wherever you wish, but it
            will not replace you as the driver.
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
      <div className=" mt-6 sm:columns-2 md:columns-4 ">
        <Image className="max-w-[158px] " src={airbnb}></Image>
        <Image className="max-w-[158px]" src={coinbase}></Image>
        <Image className="max-w-[158px]" src={binance}></Image>
        <Image className="max-w-[158px]" src={dropbox}></Image>
      </div>
      <div className="flex items-center justify-center mt-7 bg-gray-900 max-w-[50%]">
        <div className="text-white">
          <h1 className="text-[40px]">Let's try our service now!</h1>
          <p>
            Everything you need to accept card payments
            <br />
            grow your business anywhere around the planet.
          </p>
        </div>
        <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-lg  hover:from-pink-500 hover:to-yellow-500 px-4">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Test;
