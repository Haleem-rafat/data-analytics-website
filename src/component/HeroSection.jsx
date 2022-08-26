import React from "react";
import Typed from "react-typed";

const HeroSection = () => {
  return (
    <div>
      <div className="text-white max-w-[800px] w-full h-screen mx-auto text-center flex flex-col justify-center ">
        <p className="text-[#00df9a] font-bold">GROWING WITH DATA ANALYTICS</p>
        <h1 className="text-3xl font-bold ">Grow with data.</h1>
        <p className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 ">
          Fast, flexble financing for
          <Typed
            className="md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2 text-gray-500"
            strings={["BTB", "BTC", "SASS"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </p>
        <p className="md:text-2xl text-xl font-bold text-gray-500">
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>
        <button className="bg-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
