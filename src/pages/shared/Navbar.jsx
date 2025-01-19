import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { TbBrandFlutter } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { toast } from "react-toastify";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { MdDarkMode, MdGroupAdd } from "react-icons/md";
import { CiLight, CiLogin, CiLogout } from "react-icons/ci";
import AUthContext from "../../Context/AuthContext";

const Navbar = () => {
  const { user, logOutUser } = useContext(AUthContext);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

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
      <li>
        <NavLink to="/">
          <FaHome />
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/allreview">
          <TbBrandFlutter />
          All Review
        </NavLink>
      </li>
      <li>
        <NavLink to="/addreview">
          <TbBrandFlutter />
          Add Review
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
        className=" md:hidden flex gap-2 font-semibold items-center dark:text-white btn-ghost"
      >
        <CiLogout />
        Log Out
      </button>
      {/* )} */}
    </div>
  );
  return (
    <div className="w-full">
      <div className="md:navbar   py-2  w-full lg:max-w-7xl flex md:justify-between items-center  text-black  backdrop-blur-md fixed z-50 top-0">
        <div className="flex  navbar-start mr-5">
          <a className="btn  btn-ghost text-xl">
            {/* <img className="w-10 h-10 rounded-lg mr-1" src={logo} alt="" /> */}
            <p className="font-semibold flex gap-2">
              <span>Job portal</span>
              <span className="text-blue-900"></span>
              <button
                onClick={() => setDarkMode(!darkMode)}
                className=" grid md:hidden"
              >
                {darkMode ? <CiLight /> : <MdDarkMode />}
              </button>
            </p>
          </a>
        </div>

        <div className="navbar-center  ">
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
            role="button"
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
        {/* <div className=" md:navbar-end">
          {user ? (
            <div className="  flex items-center gap-5 md:mr-8">
              <img
                data-tooltip-id="my-tooltip-1"
                className="w-10 h-10 rounded-full object-cover hidden md:grid"
                src={user.photoURL}
                alt="Profile picture"
              />
              <ReactTooltip
                id="my-tooltip-1"
                className="z-10 "
                place="top"
                variant="info"
                content={user.displayName}
              />

              <button
                onClick={handleSignOut}
                className="btn btn-outline hidden md:grid dark:text-white btn-ghost"
              >
                Log Out
              </button>
            </div>
          ) : (
            <div className="hidden md:flex gap-2 mr-10">
              <NavLink to="/login" className="btn">
                Login
              </NavLink>
              <NavLink to="/signup" className="btn">
                Sign Up
              </NavLink>
            </div>
          )}
        </div> */}
        <div className="md:navbar-end">
          <div className="hidden md:flex gap-2 mr-10">
            {user ? (
              <><button className="btn" onClick={handleSignOut}>Logout</button></>
            ) : (
              <>
                <NavLink to="/login" className="btn">
                  Login
                </NavLink>
                <NavLink to="/signUp" className="btn">
                  Sign Up
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
