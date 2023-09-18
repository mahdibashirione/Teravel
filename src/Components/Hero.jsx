import { useEffect, useRef, useState } from "react";
import SearchBox from "./SearchBox";
import { motion } from "framer-motion";
import { useTarget } from "../context/TargetProvider";

const Hero = () => {
  return (
    <section className="container relative mb-[148px]">
      <div className="w-full h-[399px] md:h-[430px] lg:h-[480px] xl:h-[510px] rounded-2xl overflow-hidden relative">
        {/* Description & Title */}
        <div className="absolute flex flex-col left-1/2 -translate-x-1/2 justify-center w-[90%] h-full text-white z-20 -mt-14 md:-mt-16 select-none">
          <h2 className="font-bold text-3xl -mb-2 md:text-4xl lg:text-5xl xl:text-6xl lg:-mb-4 leading-10 md:leading-[44px] lg:leading-[54px] xl:leading-[68px]">
            Make your travel <br /> whishlist, we’ll do
            <br /> the rest
          </h2>
          <span className="md:text-lg lg:text-xl mt-2 lg:mt-6">
            Special offers to suit your plan
          </span>
        </div>
        {/* Cover */}
        <div className="h-full relative overflow-hidden">
          <img
            src="/image/HeroHotel.svg"
            className="w-full h-full object-cover"
            loading="lazy"
            alt=""
          />
        </div>
      </div>
      <SearchBox className="absolute left-1/2 -translate-x-1/2 -bottom-56 w-[90%] md:-bottom-28" />
    </section>
  );
};

export default Hero;
