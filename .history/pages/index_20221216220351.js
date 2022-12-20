import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

const index = () => {
  // animate on scroll initialization
  return (
    <div className="bg-primary w-full overflow-x-hidden	">
      <Navbar />
      <Hero />
    </div>
  );
};

export default index;
