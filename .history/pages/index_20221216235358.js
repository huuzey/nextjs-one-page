import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import React, { useState } from "react";
import { logo } from "../src/assets";
import Image from "next/image";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
import { menu, close } from "../src/assets";

const index = () => {
  const [toggle, settoggle] = useState(false);

  return (
    <div className="bg-primary w-full overflow-x-hidden	 ">
      <Navbar className="" />
      <Hero />
    </div>
  );
};

export default index;
