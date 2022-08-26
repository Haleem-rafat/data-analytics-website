import React from "react";
import single_pic from "../assats/single.png";
import double_pic from "../assats/double.png";
import Trible_pic from "../assats/triple.png";

const Cards = () => {
  return (
    <div className="bg-white py-[10rem]  ">
      <div className="grid md:grid-cols-3 mx-auto max-w-[1240px] gap-4 ">
        <div className="">
          <div className="  shadow-md rounded-lg flex flex-col justify-center relative hover:scale-105 duration-300 mx-8 md:mx-0">
            <img
              className="w-20 mx-auto py-8 absolute  top-[-22%] right-[37%] bg-white"
              src={single_pic}
            />
            <h1 className="mx-auto text-2xl font-bold py-8">single User</h1>
            <h1 className="mx-auto text-2xl font-bold py-4">$149</h1>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              500 GB Storage
            </p>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              1 User Allowed
            </p>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              Send up to 2 GB
            </p>
            <button className="mx-auto bg-[#00df9a] my-6 mb-10 px-12 hover:bg-black hover:text-[#00df9a]">
              Start Trial
            </button>
          </div>
        </div>

        <div className="hover:scale-105 duration-300 mx-8 md:mx-0 relative md:my-0 my-16">
          <div className="shadow-md rounded-lg flex flex-col justify-center bg-gray-100 ">
            <img
              className="w-20 mx-auto py-8 absolute  top-[-18%] right-[42%]"
              src={double_pic}
            />
            <h1 className="mx-auto text-2xl font-bold py-8">Partnership</h1>
            <h1 className="mx-auto text-2xl font-bold py-4">$199</h1>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              1 TB Storage
            </p>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              3 User Allowed
            </p>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              Send up to 10 GB
            </p>
            <button className="mx-auto hover:bg-[#00df9a] hover:text-black text-[#00df9a] bg-black my-6 mb-16 px-12">
              Start Trial
            </button>
          </div>
        </div>

        <div className="">
          <div className="shadow-md rounded-lg flex flex-col justify-center  hover:scale-105 duration-300 mx-8 md:mx-0 relative">
            <img
              className="w-20 mx-auto py-8 absolute  top-[-22%] right-[42%]"
              src={Trible_pic}
            />
            <h1 className="mx-auto text-2xl font-bold py-8">Group Account</h1>
            <h1 className="mx-auto text-2xl font-bold py-4">$299</h1>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              5 TB Storage
            </p>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              10 User Allowed
            </p>
            <p className=" border-b-2 mx-4 flex justify-center py-2">
              Send up to 20 GB
            </p>
            <button className="mx-auto bg-[#00df9a] my-4 mb-10 px-12 hover:bg-black hover:text-[#00df9a] ">
              Start Trial
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cards;
