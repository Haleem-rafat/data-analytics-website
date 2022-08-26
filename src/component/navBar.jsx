import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
  const [nav, SetNav] = useState(false);

  const HandleNav = () => {
    SetNav(!nav);
  };
  return (
    <div className=" max-w-[1240px] flex justify-center m-auto">
      <div className="flex justify-between w-full p-4  bg-black text-white ">
        <div className="text-3xl text-[#00df9a] font-bold cursor-pointer">
          DATA ANALYTICS.
        </div>
        <div>
          <ul className=" hidden md:flex pr-4 ">
            <li className="px-4 py-2 cursor-pointer ">Home</li>
            <li className="px-4 py-2 cursor-pointer ">Account</li>
            <li className="px-4 py-2 cursor-pointer ">Sign in</li>
            <button>Get Started</button>
          </ul>
          <div>
            <ul
              className={
                nav
                  ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <div className="text-3xl text-[#00df9a] font-bold cursor-pointer w-full">
                DATA ANALYTICS.
              </div>
              <li className="p-4 border-b border-gray-600">Home</li>
              <li className="p-4 border-b border-gray-600">Company</li>
              <li className="p-4 border-b border-gray-600">Resources</li>
              <li className="p-4 border-b border-gray-600">About</li>
              <li className="p-4 border-b border-gray-600 ">Contact</li>
              <button className="mt-4 mx-4">Get Started</button>
            </ul>
          </div>
          <div className="flex justify-end md:hidden pt-2 " onClick={HandleNav}>
            {nav ? (
              <AiOutlineClose
                size={20}
                className="text-white hover:text-[#00df9a]"
              />
            ) : (
              <AiOutlineMenu
                size={20}
                className="text-white hover:text-[#00df9a]"
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
