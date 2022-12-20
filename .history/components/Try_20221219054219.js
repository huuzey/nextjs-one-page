import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Try = () => {
  useEffect(() => {
    AOS.init({
      delay: "0",
      duration: "1000",
    });
  }, []);

  return (
    <section className="flex items-center justify-center mt-7 bg-gray-900  py-4 mb-4 rounded-lg  md:ml-[14rem] md:mr-[14rem] sm:ml-[4rem] sm:mr-[4rem]">
      <div data-aos="flip-right" className="text-white">
        <h1 className="md:text-[40px] sm:text-[20px]">
          Let's try our service now!
        </h1>
        <p className="max-w-[300px]">
          Everything you need to accept card payments grow your business
          anywhere around the planet.
        </p>
      </div>
      <div data-aos-delay="500">
        <button className=" md:ml-6 sm:ml-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-lg  hover:from-pink-500 hover:to-yellow-500 px-4">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Try;
