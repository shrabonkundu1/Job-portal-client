import React from "react";
import img1 from "../../assets/img/img1.jpg";
import img2 from "../../assets/img/img2.jpg";
import { div } from "motion/react-client";
import { MdOutlineVerified } from "react-icons/md";
const Hiring = () => {
  return (
    <div className="pt-24 pb-10 w-[85%] mx-auto">
      <div className="border p-3 rounded-md flex flex-col md:flex-row items-center ">
        <img className="w-48 "   src={img1} alt="" />
        <div className="ml-8 mb-5">
          <h6 className="font-bold text-xl text-gray-400">We Are</h6>
          <h2 className="text-6xl font-bold text-gray-800">Hiring</h2>
        </div>
        <div className=" mt-8 md:mb-4 ml-8">
          <p className="text-xl font-medium text-gray-400">
            Let’s <span className="text-gray-700">Work</span> Together <br />&{" "}
            <span className="text-gray-700">Explore</span> Opportunities
          </p>
        </div>
        <div>
          <button className="text-white bg-[#4b68fd] flex gap-1 px-3 py-2 mt-8  mx-8 hover:bg-black rounded-md items-center">
            {" "}
            <MdOutlineVerified />
            <span>Apply now</span>
          </button>
        </div>
        <img className="w-48 ml-8 hidden md:grid" src={img2} alt="" />
      </div>
    </div>
  );
};

export default Hiring;
