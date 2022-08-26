import React from "react";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterSquare,
  AiOutlineYoutube,
  AiFillGithub,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="bg-black max-w-[1240px] mx-auto py-16">
      <div className="text-white grid md:grid-cols-2 ">
        <div className="mx-4">
          <h1 className="text-[#00df9a] text-2xl font-bold py-4">
            DATA ANALYTICS.
          </h1>
          <p className="text-lg py-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit
            ullam iste repellat consequatur libero reiciendis, blanditiis
            accusantium.
          </p>
          <div className="flex py-2 justify-between mr-2 ">
            <AiFillFacebook className="hover:text-[#00df9a]" size={30} />
            <AiFillInstagram className="hover:text-[#00df9a]" size={30} />
            <AiFillTwitterSquare className="hover:text-[#00df9a]" size={30} />
            <AiOutlineYoutube className="hover:text-[#00df9a]" size={30} />
            <AiFillGithub className="hover:text-[#00df9a]" size={30} />
          </div>
        </div>
        <div className=" grid md:grid-cols-4 grid-cols-2">
          <ul>
            <li className="py-2 text-gray-400 border-b">Solutions</li>
            <li className="py-2 ">Analytics</li>
            <li className="py-2">Markting</li>
            <li className="py-2">Commerce</li>
            <li className="py-2">Insights</li>
          </ul>
          <ul>
            <li className="py-2 text-gray-400 border-b">Support</li>
            <li className="py-2">Pricing</li>
            <li className="py-2">Decumentation</li>
            <li className="py-2">Guides</li>
            <li className="py-2">API status</li>
          </ul>
          <ul>
            <li className="py-2  text-gray-400 border-b">Company</li>
            <li className="py-2">About</li>
            <li className="py-2">Blog</li>
            <li className="py-2">Jops</li>
            <li className="py-2">Press</li>
            <li className="py-2">Partners</li>
          </ul>
          <ul>
            <li className="py-2 text-gray-400 border-b">Legal</li>
            <li className="py-2">Clim</li>
            <li className="py-2">Praivacy</li>
            <li className="py-2">trems</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
