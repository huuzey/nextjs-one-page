import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const What = () => {
  useEffect(() => {
    AOS.init({
      delay: "0",
      duration: "1000",
      aos: "zoom-in-left",
    });
  }, []);

  return (
    <div className="sm:columns-1 md:columns-2 ">
      <div className="text-white ml-[6rem]">
        <h1 className="text-white md:text-[30px] font-poppins  sm:text-[20px]">
          What people are
          <br />
          saying about us
        </h1>
      </div>
      <div>
        <p className="text-white pt-10 font-poppins   max-w-[370px]">
          Everything you need to accept card payments and grow your anywhere on
          the planet.
        </p>
      </div>
    </div>
  );
};

export default What;
