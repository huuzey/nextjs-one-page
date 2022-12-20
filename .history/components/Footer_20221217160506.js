import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="sm:columns-1 md:columns-3">
        <div className="text-white flex flex-col col-span-1 ml-10 py-4">
          <h1 className="sm:text-[20px] md:text-[30px] text-emerald-900 ">
            Useful links
          </h1>
          <a href="#">Content</a>
          <a href="#">How it works</a>
          <a href="#">Create</a>
          <a href="#">Explore</a>
          <a href="#">Terms and service</a>
        </div>
        <div>
          <div className="text-white flex flex-col ml-10 py-4 col-span-1">
            <h1 className="sm:text-[20px] md:text-[30px] text-emerald-900 ">
              Community
            </h1>
            <a href="#">Help center</a>
            <a href="#">Partners</a>
            <a href="#">Suggestions</a>
            <a href="#">Blog</a>
            <a href="#">Newsletters</a>
          </div>
        </div>
        <div>
          <div className="text-white flex flex-col ml-10 py-4 col-span-1">
            <h1 className="sm:text-[20px] md:text-[30px] text-emerald-900 ">
              Partners
            </h1>
            <a href="#">Our Partners</a>
            <a href="#">Become our partner</a>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
      <p className="text-white">2022 Santander bank. All rights reserved.</p>
      <div></div>
    </div>
  );
};

export default Footer;
