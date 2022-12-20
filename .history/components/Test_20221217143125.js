import Image from "next/image";
import React from "react";
import { people01, people02, people03 } from "../src/assets";

const Test = () => {
  return (
    <div className="sm:columns-1 md:columns-3">
      <div className="ml-12 hover:bg-gray-800 rounded-xl text-white">
        <p className="max-w-[250px] mt-5">
          Money is only a tool . It will take you wherever you wish, but it will
          not replace you as the driver.
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
        <div className="ml-12 hover:bg-gray-800 rounded-xl text-white">
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
        <div className="ml-12 hover:bg-gray-800 rounded-xl text-white">
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
  );
};

export default Test;
