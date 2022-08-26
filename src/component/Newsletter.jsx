import React from "react";

const Newsletter = () => {
  return (
    <div className="text-white py-16 max-w-[1240px]  mx-auto ">
      <div className="md:flex justify-evenly mx-16">
        <div>
          <h1 className="text-4xl">Want tips & tricks to optimiz your flow?</h1>
          <p className="py-2">Sign up to our newsletter and stay up to data.</p>
        </div>
        <div>
          <form>
            <input
              className="py-2 rounded-md mr-4 px-2 my-4"
              type="text"
              placeholder="Enter your E-mail"
            />
            <button className="bg-[#00df9a]">Notify me</button>
          </form>
          <p>we care bout the protection of you data. read our</p>
          <p className="text-[#00df9a] underline cursor-pointer">
            Privacy Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
