import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Business from "../components/Business";
import Billing from "../components/Billing";
import Cards from "../components/Cards";
import What from "../components/What";

const index = () => {
  // animate on scroll initialization
  return (
    <div className="bg-primary w-full overflow-x-hidden	 ">
      <Navbar className="" />
      <Hero />
      <Business />
      <Billing />
      <Cards />
      <What />
    </div>
  );
};

export default index;
