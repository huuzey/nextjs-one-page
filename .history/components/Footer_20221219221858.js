import Image from "next/image";
import React, { useEffect } from "react";
import { facebook, instagram, linkedin, twitter } from "../src/assets";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SwiperCore, { Autoplay } from "swiper";

const Footer = () => {
  SwiperCore.use([Autoplay]);
  useEffect(() => {
    AOS.init({
      delay: "0",
      duration: "2000",
    });
  }, []);

  return (
    <div data-aos="zoom-out">
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
            <br className="sm:hidden md:flex md:flex-col"></br>
            <br className="sm:hidden  md:flex md:flex-col"></br>
            <br className="sm:hidden  md:flex md:flex-col"></br>
          </div>
        </div>
      </div>
      <hr></hr>
      <div className="sm:columns-1 md:columns-2 ">
        <p className="text-white sm:flex sm:items-center sm:justify-center sm:mt-0 md:mt-12">
          2022 Santander bank. All rights reserved.
        </p>
        <div className="flex sm:flex sm:items-center sm:justify-center  ">
          <Swiper
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
            }}
            scrollbar={{ draggable: true }}
          >
            <SwiperSlide>
              <a href="#">
                {" "}
                <Image
                  className="px-6 w-24 h-24 object-contain"
                  src={facebook}
                ></Image>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  className="px-6 w-24 h-24 object-contain"
                  src={instagram}
                ></Image>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              <a href="#">
                <Image
                  className="px-6 w-24 h-24 object-contain"
                  src={twitter}
                ></Image>
              </a>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <a href="#">
                {" "}
                <Image
                  className="px-6 w-24 h-24 object-contain"
                  src={linkedin}
                ></Image>
              </a>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Footer;
