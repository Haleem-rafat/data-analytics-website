import React from "react";
import laptop from "../assats/laptop.jpeg";

export const Analytics = () => {
  return (
    <div className="bg-white">
      <div className="grid md:grid-cols-2  max-w-[1240px]  mx-auto bg-white">
        <img className="sm:max-w-[500px] mx-auto " src={laptop} />
        <div className="flex flex-col justify-center pl-16 sm:pl-1 my-4">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className=" md:text-4xl sm:text-3xl text-2xl font-bold py-2">
            Manage Data Analytics Centrally
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
            molestiae delectus culpa hic assumenda, voluptate reprehenderit
            dolore autem cum ullam sed odit perspiciatis. Doloribus quos velit,
            eveniet ex deserunt fuga?
          </p>
          <button className=" bg-black w-[200px] rounded-md font-medium my-6  py-3 text-[#00df9a] hover:bg-[#00df9a] hover:text-black">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};
