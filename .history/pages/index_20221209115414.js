import React, { useState } from "react";
import tesla from "../public/image/tesla.jpg";
import Image from "next/Image";
import { BsSearch } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";

export default function () {
  const [count, setcount] = useState(0);
  return (
    <div>
      <div className="mt-3 flex h-12 bg-black sticky top-0  z-10 justify-between px-3 py-4 shadow-2xl  xl:max-w-[100vw] whitespace-nowrap">
        {/*left side */}
        <div className="flex ">
          <div className="  flex item-center sm:space-x-1 lg:space-x-4">
            <div className="w-14 h-14 sm:w-10 sm:h-10 lg:w-12 md:h-12">
              <Image src={tesla} />
            </div>
            <ul className="text-white sm:space-x-1  font-serif font-bold flex md:space-x-4">
              <li>Home</li>
              <li>Shop</li>
              <li>About us</li>
              <li>Blog</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
        {/*right side */}
        <p className="absolute top-0 right-3 text-white rounded-full w-4 text-center  bg-red-500">
          {count}
        </p>
        <div className="flex relative lg:space-x-4 sm:flex sm:flex-cols ">
          <button className="text-white  font-serif font-bold">Login</button>
          <BsSearch className="lg:mt-1 bg-white sm:mt-1 sm:ml-3" />

          <BsFillBagFill className="lg:mt-1  bg-white sm:mt-1 sm:ml-4" />
        </div>
      </div>
      {/*hero */}
      <div className="mx-8 mb-4 mt-4 shadow-2xl shadow-cyan-500 bg-gray-400/20 h-[19rem] rounded-[0.6rem] px-2 flex items-end relative">
        <div className="absolute w-[12rem] right-[5rem] bottom-[16rem] h-[2rem]">
          <Image src={beats} />
        </div>
        <div className="z-10 pl-12">
          <p className=" font-extrabold sm:text-[1rem] md:text-[1.5rem] text-black">
            Beats solo
          </p>
          <p className=" pl-4 text-black font-extrabold sm:text-[1.8rem] md:text-[2.9rem]">
            Wireless
          </p>
          <p className="pl-8 space-y-4 sm:text-[2.4rem] font-extrabold lg:text-[4rem] font-xl justify-self-strech text-black">
            HEADPHONES
          </p>
          <button className=" ml-16 bg-sky-500/50 rounded-full text-center w-[7rem] h-[1.5rem]  whitespace-nowrap text-[14px]">
            shop by category
          </button>
        </div>
      </div>
    </div>
  );
}
