import React from "react";

const Try = () => {
  return (
    <section className="flex items-center justify-center mt-7 bg-gray-900  sm:px-16 px-6 md:py-12 sm:py-4 md:ml-26 sm:my-6">
      <div className="text-white">
        <h1 className="text-[40px]">Let's try our service now!</h1>
        <p>
          Everything you need to accept card payments
          <br />
          grow your business anywhere around the planet.
        </p>
      </div>
      <button className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 rounded-lg  hover:from-pink-500 hover:to-yellow-500 px-4">
        Get Started
      </button>
    </section>
  );
};

export default Try;
