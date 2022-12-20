import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Business from "../components/Business";
import Billing from "../components/Billing";
import Cards from "../components/Cards";
import What from "../components/What";
import Test from "../components/Test";
import Try from "../components/Try";
import Footer from "../components/Footer";

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
      <Test />
      <Try />
      <Footer />
    </div>
  );
};

export default index;
