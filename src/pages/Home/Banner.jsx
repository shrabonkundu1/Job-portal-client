import React from "react";
import { motion } from "motion/react";
import { easeIn, easeInOut, easeOut } from "motion";
import team1 from "../../assets/team/team1.jpg";
import team2 from "../../assets/team/team2.jpg";
import { RxDragHandleDots1 } from "react-icons/rx";
import { PiDotsSixThin } from "react-icons/pi";
import { div } from "motion/react-client";

const Banner = () => {
  return (
   <div className="bg-blue-50 md:pt-24 ">
     <div className="grid grid-cols-1 pb-16 md:pb-36 mx-auto  md:grid-cols-5 gap-12 w-[75%] max-w-7xl ">
      <div className=" space-y-7 pt-16 flex-1  md:col-span-3">
        <motion.h1
          initial={{ y: 170, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0, ease: easeInOut }}
          className="text-black text-[32px] lg:text-6xl font-bold "
        >
          The <span className="text-blue-600 ">Easiest Way</span>
          <br />
          to Get Your New Job
        </motion.h1>

        <motion.p
          animate={{ y: [100, 0] }}
          transition={{ duration: 1.9, delay: 0, ease: easeInOut }}
          className="text-[18px] text-gray-500 md:w-[75%]"
        >
          Each month, more than 3 million job seekers turn to website in their
          search for work, making over 140,000 applications every single day
        </motion.p>
        <motion.label
          animate={{ y: [100, 0] }}
          transition={{ duration: 2, delay: 0, ease: easeInOut }}
          className="input input-bordered flex items-center gap-2 md:w-4/5 bg-white"
        >
          <input type="text" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </motion.label>
        <motion.div
          animate={{ y: [80, 0] }}
          transition={{ duration: 2, delay: 0, ease: easeInOut }}
          className="flex gap-x-2 flex-wrap md:flex-row"
        >
          <p className="font-bold text-gray-600">Popular searches:</p>
          <a className="text-gray-800 underline" href="#">
            Designer,
          </a>
          <a className="text-gray-800 underline" href="#">
            Web,
          </a>
          <a className="text-gray-800 underline" href="#">
            Developer,
          </a>
          <a className="text-gray-800 underline" href="#">
            PHP,
          </a>
          <a className="text-gray-800 underline" href="#">
            Engineer,
          </a>
        </motion.div>
      </div>

      {/* second */}
      <div className=" flex-1 hidden md:flex md:col-span-2 ">
       
     
       
      
        <motion.img
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, delay: 0, repeat: Infinity }}
          className="w-[330px] h-72 rounded-t-[60px] border-l-8 border-b-8 border-blue-600 object-cover"
          src={team1}
          alt=""
        />
        <motion.img
          animate={{ x: [100, 130, 100] }}
          transition={{ duration: 4, delay: 1.5, repeat: Infinity }}
          className="pb-6 w-[330px] h-52 rounded-t-[60px] rounded-r-[60px] border-l-8 border-b-8 absolute top-[370px] border-blue-600 object-cover"
          src={team2}
          alt=""
        />
      </div>
    </div>
   </div>
  );
};

export default Banner;
