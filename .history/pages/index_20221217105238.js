import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Business from "../components/Business";

const index = () => {
  // animate on scroll initialization
  return (
    <div className="bg-primary w-full overflow-x-hidden	 ">
      <Navbar className="" />
      <Hero />
      <Business />
    </div>
  );
};

export default index;
