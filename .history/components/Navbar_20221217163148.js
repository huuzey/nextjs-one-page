import React, { useState } from "react";
import { logo } from "../src/assets";
import Image from "next/image";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { menu, close } from "../src/assets";
const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  return (
    <div className="">
      <div className=" justify-between sticky top-0 z-30     bg-primary text-white   flex items-center">
        <div className="flex">
          <Image src={logo} width={40} height={2} alt="logo of tesla"></Image>
          <p className="text-bold">Tesla</p>
        </div>
        <div className="hidden lg:flex px-5  ">
          <p className="px-5">Home</p>
          <p className="px-5">Feature</p>
          <p className="px-5">Product</p>
          <p className="px-5">Clients</p>
        </div>
        <div className="absolute text-white lg:hidden sm:flex-col md:flex-col right-3 top-2">
          <Image
            src={toggle ? close : menu}
            className="w-[12px] bg-white h-[12px]"
            onClick={() => settoggle((prev) => !prev)}
          ></Image>
          <div className={`${toggle ? "visible" : "hidden"} `}>
            <p className="pb-1">Home</p>
            <p className="pb-1">Feature</p>
            <p className="pb-1">Product</p>
            <p className="pb-1">Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
