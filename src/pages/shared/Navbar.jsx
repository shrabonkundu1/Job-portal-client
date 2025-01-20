import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdDarkMode, MdGroupAdd } from "react-icons/md";
import { CiLight, CiLogin, CiLogout } from "react-icons/ci";
import AUthContext from "../../Context/AuthContext";
import { div } from "motion/react-client";
import logo from "../../assets/team/logo.webp";
import { IoLogoStencil } from "react-icons/io5";

const Navbar = () => {
  const location = useLocation();

  const { user, logOutUser } = useContext(AUthContext);
  const [darkMode, setDarkMode] = useState(false);
  const [activeLink, setActiveLink] = React.useState(location.pathname);


  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);




  
  const getLinkStyle = (path) => `
  relative px-2 py-2 text-sm font-bold  font_header transition-colors duration-200
  ${activeLink === path ? 'text-[#e20f3a]' : `${darkMode == true ? "text-white" : "text-black"} hover:text-[#e20f3a]`}
  before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 
  before:bg-[#A91D3A] before:transform before:scale-x-0 before:transition-transform
  before:duration-300 hover:before:scale-x-100
  ${activeLink === path ? 'before:scale-x-100' : ''}
`;




  const handleSignOut = () => {
    logOutUser()
      .then(() => {
        logOutUser(null);
        toast.success("Logout successfully!", {
          position: "top-center",
          autoClose: 2000,
        });
      })
      .catch((error) => {});
  };

  const links = (
    <div className="space-x-5 md:flex  items-center ">
      <li className="">
        <NavLink
          to="/"
          className={getLinkStyle('/')} onClick={() => setActiveLink('/')}
        >
          <FaHome />
          Home
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/allJobs"
          className={getLinkStyle('/')} onClick={() => setActiveLink('/')}
        >
          <FaHome />
          All Jobs
        </NavLink>
      </li>
      <li className="">
        <NavLink
          to="/addJob"
          className={getLinkStyle('/')} onClick={() => setActiveLink('/')}
        >
          <FaHome />
          Add Job
        </NavLink>
      </li>
     

      <li>
        <NavLink to="/login" className=" grid md:hidden">
          <CiLogin />
          Login
        </NavLink>
      </li>

      <li>
        <NavLink to="/signup" className=" grid md:hidden">
          <MdGroupAdd />
          Sign Up
        </NavLink>
      </li>

      {/* {user && ( */}
      <button
        //   onClick={handleSignOut}
        className=" md:hidden flex gap-2 font-semibold items-center dark:text-white btn-outline"
      >
        <CiLogout />
        Log Out
      </button>
      {/* )} */}
    </div>
  );
  return (
    <div className="bg-white ">
      <div className=" bg-white py-2  w-[90%] mx-auto flex justify-between items-center  text-black ">
        <div className="flex items-center ">
          <a className="text-xl">
            {/* <img className="w-10 h-10 rounded-lg mr-1" src={logo} alt="" /> */}
            <p className="font-semibold flex items-center gap-2">
              <IoLogoStencil className="text-blue-700 text-4xl" />{" "}
              <span className="text-black font-bold text-3xl">Future Hire</span>
              
            </p>
          </a>
        </div>

        <div className="  flex">
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links} </ul>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className=" hidden md:grid "
          >
            {darkMode ? <CiLight /> : <MdDarkMode />}
          </button>
        </div>

        <div className="dropdown ml-[130px] p-[1px] border rounded-lg relative">
          <div
            tabIndex={0}
            role=""
            className="btn btn-square btn-ghost  lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              className="inline-block h-5 w-5 stroke-current"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm  dropdown-content bg-base-100 mt-1 dark:bg-gray-800 w-52 p-2 shadow right-[205px]  absolute"
          >
            {links}
          </ul>
        </div>

        <div className="">
          <div className="hidden md:flex gap-2 ">
            {user ? (
              <>
                <button className="btn btn-outline" onClick={handleSignOut}>
                  Logout
                </button>
              </>
            ) : (
              <>
                <NavLink
                  to="/signUp"
                  className="py-2 font-semibold underline mr-10"
                >
                  Sign Up
                </NavLink>
                <NavLink
                  to="/login"
                  className="btn btn-primary font-bold bg-blue-600 text-white"
                >
                  Login
                </NavLink>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
